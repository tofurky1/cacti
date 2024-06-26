/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cacti Plugin - Connector Stellar
 * Can perform basic tasks on a Stellar ledger
 *
 * The version of the OpenAPI document: v2.0.0-alpha.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @enum {string}
 */

export const WatchBlocksV1 = {
    Subscribe: 'org.hyperledger.cacti.api.async.stellar.WatchBlocksV1.Subscribe',
    Next: 'org.hyperledger.cacti.api.async.stellar.WatchBlocksV1.Next',
    Unsubscribe: 'org.hyperledger.cacti.api.async.stellar.WatchBlocksV1.Unsubscribe',
    Error: 'org.hyperledger.cacti.api.async.stellar.WatchBlocksV1.Error',
    Complete: 'org.hyperledger.cacti.api.async.stellar.WatchBlocksV1.Complete'
} as const;

export type WatchBlocksV1 = typeof WatchBlocksV1[keyof typeof WatchBlocksV1];


/**
 * 
 * @export
 * @interface WatchBlocksV1Progress
 */
export interface WatchBlocksV1Progress {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof WatchBlocksV1Progress
     */
    'blockHeader': { [key: string]: any; };
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deploys a smart contract to the Stellar ledger associated with the connector.
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractV1: async (body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cacti-plugin-ledger-connector-stellar/deploy-contract`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the .json file that contains the OpenAPI specification for the plugin.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenApiSpecV1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cacti-plugin-ledger-connector-stellar/get-open-api-spec`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusMetricsV1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cacti-plugin-ledger-connector-stellar/get-prometheus-exporter-metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Executes a transaction on a stellar ledger
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        runTransactionV1: async (body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cacti-plugin-ledger-connector-stellar/run-transaction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deploys a smart contract to the Stellar ledger associated with the connector.
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deployContractV1(body?: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployContractV1(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves the .json file that contains the OpenAPI specification for the plugin.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOpenApiSpecV1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOpenApiSpecV1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPrometheusMetricsV1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPrometheusMetricsV1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Executes a transaction on a stellar ledger
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async runTransactionV1(body?: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.runTransactionV1(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Deploys a smart contract to the Stellar ledger associated with the connector.
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractV1(body?: object, options?: any): AxiosPromise<object> {
            return localVarFp.deployContractV1(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves the .json file that contains the OpenAPI specification for the plugin.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOpenApiSpecV1(options?: any): AxiosPromise<string> {
            return localVarFp.getOpenApiSpecV1(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusMetricsV1(options?: any): AxiosPromise<string> {
            return localVarFp.getPrometheusMetricsV1(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Executes a transaction on a stellar ledger
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        runTransactionV1(body?: object, options?: any): AxiosPromise<object> {
            return localVarFp.runTransactionV1(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Deploys a smart contract to the Stellar ledger associated with the connector.
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deployContractV1(body?: object, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).deployContractV1(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves the .json file that contains the OpenAPI specification for the plugin.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getOpenApiSpecV1(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getOpenApiSpecV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the Prometheus Metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getPrometheusMetricsV1(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getPrometheusMetricsV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Executes a transaction on a stellar ledger
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public runTransactionV1(body?: object, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).runTransactionV1(body, options).then((request) => request(this.axios, this.basePath));
    }
}


