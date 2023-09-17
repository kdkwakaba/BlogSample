using 'bicepdeploy.bicep'

@description('Vnet name')
param vnetName = 'bicepdeploy-vnet'

@description('Address prefix')
param vnetAddressPrefix = '172.16.0.0/16'

@description('Subnet Prefix')
param subnetPrefix = '172.16.0.0/24'

@description('Subnet Name')
param subnetName = 'bicepdeploy-snet'

@description('Location for all resources.')
param location = 'japaneast'
