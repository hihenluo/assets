// utils/bannedAddresses.ts
export const BANNED_ADDRESSES = [
  "", 
  "",
  ""
].map(addr => addr.toLowerCase());

export const isAddressBanned = (address: string | undefined) => {
  if (!address) return false;
  return BANNED_ADDRESSES.includes(address.toLowerCase());
};
