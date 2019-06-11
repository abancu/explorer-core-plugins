import { ContractDetailsStore } from "app/eth-extended/data/contract/ContractDetailsStore";
import { ContractDetailsApi } from "app/eth-extended/data/contract/ContractDetailsApi";
import { HttpApi } from "app/eth-extended/data/HttpApi";
import { HttpRequest } from "@puzzl/browser/lib/network/HttpRequest";
import { FifoCache } from "app/util/cache/FifoCache";
import { ContractAbiFactory } from "app/eth-extended/data/contract/ContractAbiFactory";
import { ContractAbi } from "app/eth-extended/data/contract/ContractAbi";
import { ILogger } from "plugin-api/ILogger";
import { AlethioDataSourceConfig } from "app/eth-extended/AlethioDataSourceConfig";

const CACHE_SIZE = 10;

export class ContractDetailsStoreFactory {
    constructor(private appConfig: AlethioDataSourceConfig, private logger: ILogger) {

    }

    create() {
        return new ContractDetailsStore(
            new FifoCache<number, string>(CACHE_SIZE),
            new FifoCache<number, ContractAbi>(CACHE_SIZE),
            new FifoCache<number, string>(CACHE_SIZE),
            new ContractDetailsApi(
                new HttpApi(new HttpRequest()),
                new ContractAbiFactory(this.logger),
                this.appConfig.getAccountContractApiUrlMask()
            )
        );
    }
}