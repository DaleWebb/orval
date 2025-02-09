import SwaggerParser from '@apidevtools/swagger-parser';
import { SchemaObject, InfoObject, OperationObject, OpenAPIObject } from 'openapi3-ts';
import swagger2openapi from 'swagger2openapi';

declare type ResolverValue = {
    value: string;
    isEnum: boolean;
    type: string;
    imports: GeneratorImport[];
    schemas: GeneratorSchema[];
    originalSchema?: SchemaObject;
    isRef: boolean;
};
declare type ResReqTypesValue = ResolverValue & {
    formData?: string;
    formUrlEncoded?: string;
    isRef?: boolean;
    key: string;
    contentType: string;
};

declare type GetterResponse = {
    imports: GeneratorImport[];
    definition: {
        success: string;
        errors: string;
    };
    isBlob: boolean;
    types: {
        success: ResReqTypesValue[];
        errors: ResReqTypesValue[];
    };
    contentTypes: string[];
    schemas: GeneratorSchema[];
};
declare type GetterBody = {
    imports: GeneratorImport[];
    definition: string;
    implementation: string;
    schemas: GeneratorSchema[];
    formData?: string;
    formUrlEncoded?: string;
    contentType: string;
};
declare type GetterParam = {
    name: string;
    definition: string;
    implementation: string;
    default: boolean;
    required: boolean;
    imports: GeneratorImport[];
};
declare type GetterParams = GetterParam[];
declare type GetterQueryParam = {
    schema: GeneratorSchema;
    deps: GeneratorSchema[];
};
declare type GetterProp = {
    name: string;
    definition: string;
    implementation: string;
    default: boolean;
    required: boolean;
    type: 'param' | 'body' | 'queryParam';
};
declare type GetterProps = GetterProp[];

declare type GeneratorSchema = {
    name: string;
    model: string;
    imports: GeneratorImport[];
};
declare type GeneratorImport = {
    name: string;
    schemaName?: string;
    alias?: string;
    specKey?: string;
    default?: boolean;
    values?: boolean;
    syntheticDefaultImport?: boolean;
};
declare type GeneratorDependency = {
    exports: GeneratorImport[];
    dependency: string;
};
declare type GeneratorApiResponse = {
    operations: GeneratorOperations;
    schemas: GeneratorSchema[];
};
declare type GeneratorOperations = {
    [operationId: string]: GeneratorOperation;
};
declare type GeneratorTarget = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMSW: string;
    importsMSW: GeneratorImport[];
    mutators?: GeneratorMutator[];
    formData?: GeneratorMutator[];
    formUrlEncoded?: GeneratorMutator[];
};
declare type GeneratorTargetFull = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMSW: {
        function: string;
        handler: string;
    };
    importsMSW: GeneratorImport[];
    mutators?: GeneratorMutator[];
    formData?: GeneratorMutator[];
    formUrlEncoded?: GeneratorMutator[];
};
declare type GeneratorOperation = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMSW: {
        function: string;
        handler: string;
    };
    importsMSW: GeneratorImport[];
    tags: string[];
    mutator?: GeneratorMutator;
    formData?: GeneratorMutator;
    formUrlEncoded?: GeneratorMutator;
    operationName: string;
};
declare type GeneratorVerbOptions = {
    verb: Verbs;
    summary?: string;
    doc: string;
    tags: string[];
    operationId: string;
    operationName: string;
    response: GetterResponse;
    body: GetterBody;
    queryParams?: GetterQueryParam;
    params: GetterParams;
    props: GetterProps;
    mutator?: GeneratorMutator;
    formData?: GeneratorMutator;
    formUrlEncoded?: GeneratorMutator;
    override: NormalizedOperationOptions;
};
declare type GeneratorVerbsOptions = GeneratorVerbOptions[];
declare type GeneratorOptions = {
    route: string;
    pathRoute: string;
    override: NormalizedOverrideOutput;
    context: ContextSpecs;
    mock: boolean;
};
declare type GeneratorClient = {
    implementation: string;
    imports: GeneratorImport[];
};
declare type GeneratorClientExtra = {
    implementation: string;
    implementationMSW: string;
};
declare type GeneratorMutatorParsingInfo = {
    numberOfParams: number;
};
declare type GeneratorMutator = {
    name: string;
    path: string;
    default: boolean;
    hasErrorType: boolean;
    errorTypeName: string;
    hasSecondArg: boolean;
    hasThirdArg: boolean;
    isHook: boolean;
    bodyTypeName?: string;
};
declare type ClientBuilder = (verbOptions: GeneratorVerbOptions, options: GeneratorOptions, outputClient: OutputClient | OutputClientFunc) => GeneratorClient;
declare type ClientHeaderBuilder = (params: {
    title: string;
    isRequestOptions: boolean;
    isMutator: boolean;
    noFunction?: boolean;
    isGlobalMutator: boolean;
    provideInRoot: boolean;
    provideIn: boolean | 'root' | 'any';
    hasAwaitedType: boolean;
}) => string;
declare type ClientFooterBuilder = (params: {
    noFunction?: boolean | undefined;
    operationNames: string[];
    title?: string;
    hasAwaitedType: boolean;
    hasMutator: boolean;
}) => string;
declare type ClientTitleBuilder = (title: string) => string;
declare type ClientDependenciesBuilder = (hasGlobalMutator: boolean) => GeneratorDependency[];
declare type ClientMSWBuilder = (verbOptions: GeneratorVerbOptions, generatorOptions: GeneratorOptions) => {
    imports: string[];
    implementation: string;
};
interface ClientGeneratorsBuilder {
    client: ClientBuilder;
    header: ClientHeaderBuilder;
    dependencies: ClientDependenciesBuilder;
    footer: ClientFooterBuilder;
    title: ClientTitleBuilder;
}
declare type GeneratorClients = Record<OutputClient, ClientGeneratorsBuilder>;

interface Options {
    output?: string | OutputOptions;
    input?: string | InputOptions;
}
declare type OptionsFn = () => Options | Promise<Options>;
declare type OptionsExport = Options | Promise<Options> | OptionsFn;
declare type Config = {
    [project: string]: OptionsExport;
};
declare type ConfigFn = () => Config | Promise<Config>;
declare type ConfigExternal = Config | Promise<Config> | ConfigFn;
declare type NormalizedOverrideOutput = {
    title?: (title: string) => string;
    transformer?: OutputTransformer;
    mutator?: NormalizedMutator;
    operations: {
        [key: string]: NormalizedOperationOptions;
    };
    tags: {
        [key: string]: NormalizedOperationOptions;
    };
    mock?: {
        properties?: MockProperties;
        format?: {
            [key: string]: unknown;
        };
        required?: boolean;
        baseUrl?: string;
    };
    header: false | ((info: InfoObject) => string[] | string);
    formData: boolean | NormalizedMutator;
    formUrlEncoded: boolean | NormalizedMutator;
    components: {
        schemas: {
            suffix: string;
        };
        responses: {
            suffix: string;
        };
        parameters: {
            suffix: string;
        };
        requestBodies: {
            suffix: string;
        };
    };
    query: QueryOptions;
    angular: Omit<Required<AngularOptions>, 'provideInRoot'>;
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    requestOptions: Record<string, any> | boolean;
    useDates?: boolean;
    useTypeOverInterfaces?: boolean;
    trpc?: TrpcOptions;
};
declare type NormalizedMutator = {
    path: string;
    name?: string;
    default: boolean;
    alias?: Record<string, string>;
};
declare type NormalizedOperationOptions = {
    transformer?: OutputTransformer;
    mutator?: NormalizedMutator;
    mock?: {
        data?: MockProperties;
        properties?: MockProperties;
    };
    query?: QueryOptions;
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    formData: boolean | NormalizedMutator;
    formUrlEncoded: boolean | NormalizedMutator;
    requestOptions: object | boolean;
    trpc?: TrpcOptions;
};
declare type OutputClientFunc = (clients: GeneratorClients) => ClientGeneratorsBuilder;
declare type OutputOptions = {
    workspace?: string;
    target?: string;
    schemas?: string;
    mode?: OutputMode;
    mock?: boolean | ClientMSWBuilder;
    override?: OverrideOutput;
    client?: OutputClient | OutputClientFunc;
    clean?: boolean | string[];
    prettier?: boolean;
    tslint?: boolean;
    tsconfig?: string | Tsconfig;
    packageJson?: string;
};
declare type SwaggerParserOptions = Omit<SwaggerParser.Options, 'validate'> & {
    validate?: boolean;
};
declare type InputOptions = {
    target: string | OpenAPIObject;
    validation?: boolean;
    override?: OverrideInput;
    converterOptions?: swagger2openapi.Options;
    parserOptions?: SwaggerParserOptions;
};
declare type OutputClient = 'axios' | 'axios-functions' | 'angular' | 'react-query' | 'svelte-query' | 'vue-query' | 'swr' | 'trpc';
declare const OutputClient: {
    ANGULAR: OutputClient;
    AXIOS: OutputClient;
    AXIOS_FUNCTIONS: OutputClient;
    REACT_QUERY: OutputClient;
    SVELTE_QUERY: OutputClient;
    TRPC: OutputClient;
    VUE_QUERY: OutputClient;
};
declare type OutputMode = 'single' | 'split' | 'tags' | 'tags-split';
declare const OutputMode: {
    SINGLE: OutputMode;
    SPLIT: OutputMode;
    TAGS: OutputMode;
    TAGS_SPLIT: OutputMode;
};
declare type MockProperties = {
    [key: string]: unknown;
} | ((specs: OpenAPIObject) => {
    [key: string]: unknown;
});
declare type OutputTransformerFn = (verb: GeneratorVerbOptions) => GeneratorVerbOptions;
declare type OutputTransformer = string | OutputTransformerFn;
declare type MutatorObject = {
    path: string;
    name?: string;
    default?: boolean;
    alias?: Record<string, string>;
};
declare type Mutator = string | MutatorObject;
declare type OverrideOutput = {
    title?: (title: string) => string;
    transformer?: OutputTransformer;
    mutator?: Mutator;
    operations?: {
        [key: string]: OperationOptions;
    };
    tags?: {
        [key: string]: OperationOptions;
    };
    mock?: {
        properties?: MockProperties;
        format?: {
            [key: string]: unknown;
        };
        required?: boolean;
        baseUrl?: string;
    };
    header?: boolean | ((info: InfoObject) => string[] | string);
    formData?: boolean | Mutator;
    formUrlEncoded?: boolean | Mutator;
    components?: {
        schemas?: {
            suffix?: string;
        };
        responses?: {
            suffix?: string;
        };
        parameters?: {
            suffix?: string;
        };
        requestBodies?: {
            suffix?: string;
        };
    };
    query?: QueryOptions;
    angular?: AngularOptions;
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    requestOptions?: Record<string, any> | boolean;
    useDates?: boolean;
    useTypeOverInterfaces?: boolean;
    trpc?: TrpcOptions;
};
declare type QueryOptions = {
    useQuery?: boolean;
    useInfinite?: boolean;
    useInfiniteQueryParam?: string;
    options?: any;
};
declare type AngularOptions = {
    provideInRoot?: boolean;
    provideIn?: 'root' | 'any' | boolean;
};
declare type TrpcOptions = {
    passRequestContextToCustomMutator?: boolean;
    routerNamePrefix?: string;
};
declare type InputTransformerFn = (spec: OpenAPIObject) => OpenAPIObject;
declare type InputTransformer = string | InputTransformerFn;
declare type OverrideInput = {
    transformer?: InputTransformer;
};
declare type OperationOptions = {
    transformer?: OutputTransformer;
    mutator?: Mutator;
    mock?: {
        data?: MockProperties;
        properties?: MockProperties;
    };
    query?: QueryOptions;
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    formData?: boolean | Mutator;
    formUrlEncoded?: boolean | Mutator;
    requestOptions?: object | boolean;
};
declare type Verbs = 'post' | 'put' | 'get' | 'patch' | 'delete' | 'head';
declare const Verbs: {
    POST: Verbs;
    PUT: Verbs;
    GET: Verbs;
    PATCH: Verbs;
    DELETE: Verbs;
    HEAD: Verbs;
};
interface ContextSpecs {
    specKey: string;
    target: string;
    workspace: string;
    tslint: boolean;
    specs: Record<string, OpenAPIObject>;
    override: NormalizedOverrideOutput;
    tsconfig?: Tsconfig;
    packageJson?: PackageJson;
}
interface GlobalOptions {
    projectName?: string;
    watch?: boolean | string | (string | boolean)[];
    clean?: boolean | string[];
    prettier?: boolean;
    tslint?: boolean;
    mock?: boolean;
    client?: OutputClient;
    mode?: OutputMode;
    tsconfig?: string | Tsconfig;
    packageJson?: string;
}
interface Tsconfig {
    baseUrl?: string;
    compilerOptions?: {
        esModuleInterop?: boolean;
        allowSyntheticDefaultImports?: boolean;
        paths?: Record<string, string[]>;
    };
}
interface PackageJson {
    dependencies?: Record<string, string>;
}

/**
 * Type helper to make it easier to use orval.config.ts
 * accepts a direct {@link ConfigExternal} object.
 */
declare function defineConfig(options: ConfigExternal): ConfigExternal;

declare const generalJSTypes: string[];
declare const generalJSTypesWithArray: string[];
declare const VERBS_WITH_BODY: Verbs[];
declare const URL_REGEX: RegExp;

declare const generateImports: ({ imports, target, isRootKey, specsName, }: {
    imports: GeneratorImport[];
    target: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
}) => string;
declare const generateMutatorImports: (mutators: GeneratorMutator[], oneMore?: boolean | undefined) => string;
declare const addDependency: ({ implementation, exports, dependency, specsName, hasSchemaDir, isAllowSyntheticDefaultImports, }: {
    implementation: string;
    exports: GeneratorImport[];
    dependency: string;
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
}) => string | undefined;
declare const generateDependencyImports: (implementation: string, imports: {
    exports: GeneratorImport[];
    dependency: string;
}[], specsName: Record<string, string>, hasSchemaDir: boolean, isAllowSyntheticDefaultImports: boolean) => string;
declare const generateVerbImports: ({ response, body, queryParams, params, }: GeneratorVerbOptions) => GeneratorImport[];

declare const generateBodyOptions: (body: GetterBody, isFormData: boolean, isFormUrlEncoded: boolean) => string;
declare const generateAxiosOptions: (response: GetterResponse, queryParams?: GeneratorSchema | undefined, requestOptions?: boolean | object | undefined) => string;
declare const generateOptions: ({ route, body, queryParams, response, verb, requestOptions, isFormData, isFormUrlEncoded, isAngular, }: {
    route: string;
    body: GetterBody;
    queryParams?: GetterQueryParam | undefined;
    response: GetterResponse;
    verb: Verbs;
    requestOptions?: boolean | object | undefined;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
    isAngular?: boolean | undefined;
}) => string;
declare const generateBodyMutatorConfig: (body: GetterBody, isFormData: boolean, isFormUrlEncoded: boolean) => string;
declare const generateQueryParamsAxiosConfig: (response: GetterResponse, queryParams?: GeneratorSchema | undefined) => string;
declare const generateMutatorConfig: ({ route, body, queryParams, response, verb, isFormData, isFormUrlEncoded, isBodyVerb, hasSignal, }: {
    route: string;
    body: GetterBody;
    queryParams?: GetterQueryParam | undefined;
    response: GetterResponse;
    verb: Verbs;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
    isBodyVerb: boolean;
    hasSignal: boolean;
}) => string;
declare const generateMutatorRequestOptions: (requestOptions: boolean | object | undefined, hasSecondArgument: boolean) => string;
declare const generateFormDataAndUrlEncodedFunction: ({ body, formData, formUrlEncoded, isFormData, isFormUrlEncoded, }: {
    body: GetterBody;
    formData?: GeneratorMutator | undefined;
    formUrlEncoded?: GeneratorMutator | undefined;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
}) => string;

declare const loadTsconfig: (tsconfig?: string | Tsconfig | undefined, workspace?: string) => Promise<Tsconfig | undefined>;
declare const isSyntheticDefaultImportsAllow: (config?: Tsconfig | undefined) => boolean;

declare const stringify: (data?: string | any[] | {
    [key: string]: any;
} | undefined) => string | undefined;
declare const sanitize: (value: string, options?: {
    whitespace?: string | true | undefined;
    underscore?: string | true | undefined;
    dot?: string | true | undefined;
    dash?: string | true | undefined;
    es5keyword?: boolean | undefined;
} | undefined) => string;
declare const toObjectString: <T>(props: T[], path?: keyof T | undefined) => string;
declare const getNumberWord: (num: number) => string;
declare const escape: (str: string, char?: string) => string;

declare const pascal: (s: string) => string;
declare const camel: (s: string) => string;
declare const snake: (s: string) => string;
declare const kebab: (s: string) => string;
declare const upper: (s: string, fillWith?: string | undefined, isDeapostrophe?: boolean | undefined) => string;

declare const generate: (optionsExport?: string | OptionsExport | undefined, workspace?: string, options?: GlobalOptions | undefined) => Promise<void>;

export { ClientBuilder, ClientDependenciesBuilder, ClientFooterBuilder, ClientGeneratorsBuilder, ClientHeaderBuilder, ClientMSWBuilder, ClientTitleBuilder, GeneratorApiResponse, GeneratorClient, GeneratorClientExtra, GeneratorClients, GeneratorDependency, GeneratorImport, GeneratorMutator, GeneratorMutatorParsingInfo, GeneratorOperation, GeneratorOperations, GeneratorOptions, GeneratorSchema, GeneratorTarget, GeneratorTargetFull, GeneratorVerbOptions, GeneratorVerbsOptions, Options, URL_REGEX, VERBS_WITH_BODY, addDependency, camel, generate as default, defineConfig, escape, generalJSTypes, generalJSTypesWithArray, generate, generateAxiosOptions, generateBodyMutatorConfig, generateBodyOptions, generateDependencyImports, generateFormDataAndUrlEncodedFunction, generateImports, generateMutatorConfig, generateMutatorImports, generateMutatorRequestOptions, generateOptions, generateQueryParamsAxiosConfig, generateVerbImports, getNumberWord, isSyntheticDefaultImportsAllow, kebab, loadTsconfig, pascal, sanitize, snake, stringify, toObjectString, upper };
