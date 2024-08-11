// (If using Next.js - IDKitWidget must be run on client)
"use client"
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit'

// TODO: Calls your implemented server route
const verifyProof = async (proof) => {
  throw new Error("TODO: verify proof server route")
};

// TODO: Functionality after verifying
const onSuccess = () => {
  console.log("Success")
};

// ...

<IDKitWidget
    app_id="app_staging_f5cfa0b28ed2c732c8fd7a9d3df5e47a"
    action="moment1"
    false
    verification_level={VerificationLevel.Device}
    handleVerify={verifyProof}
    onSuccess={onSuccess}>
    {({ open }) => (
      <button
        onClick={open}
      >
        Verify with World ID
      </button>
    )}
</IDKitWidget>