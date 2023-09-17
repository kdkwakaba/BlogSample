@description('Vnet name')
param vnetName string

@description('Address prefix')
param vnetAddressPrefix string

@description('Subnet Prefix')
param subnetPrefix string

@description('Subnet Name')
param subnetName string

@description('Location for all resources.')
param location string

resource vnet 'Microsoft.Network/virtualNetworks@2021-08-01' = {
  name: vnetName
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        vnetAddressPrefix
      ]
    }
    subnets: [
      {
        name: subnetName
        properties: {
          addressPrefix: subnetPrefix
        }
      }
    ]
  }
}
