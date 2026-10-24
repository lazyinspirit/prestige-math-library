# Exact original verification-metadata relocation

The scoped `original-maintenance.mjs` route supports one opt-in historical
metadata transition for `items/lem-borel-product-of-second-countable-spaces.md`.
Root may add this typed field to that item's existing version-1
`research/RUN-original-maintenance.json` entry:

```json
"verification_metadata_relocation": {
  "source_commit": "29450da28f82d81f6865b920e64b2dd106cbe4e6",
  "source_blob": "7593c68f7ed478e48d42176d47580c5899ef10b3"
}
```

The only accepted pin is
`65062144095b46cdb23b0b159812f572217ad831bd3aff0f34fae9d72cf2c05b`;
the only accepted current original is
`faac2722234dc29b7e2e7b4adbf31695fc61371c3f9afc1e335dfac2c8cff432`.
The complete raw transition must delete exactly
`verification:\n  precheck: pending\n` once. The unchanged following judge block
therefore parses beneath the existing `sources` mapping. No judgment, proof,
audit, source or stamp approval is inferred from that relocation. All remaining
bytes, including the complete statement and proof, must be identical.

The guard verifies the actual committed item in the original's Git repository:
the fixed commit must resolve the item to the fixed blob, whose bytes must equal
the bound current original. Git replacement objects are disabled. Missing Git
objects or a different working original fail closed. This route cannot compose
with an added repair locator or a Definition-reference move; `titles` must be
an empty array.

The existing explicit Root identity, exact current frontier, import receipt,
unchanged local pin, scientific evidence, complete selected consumer cone and
all exact source/input bindings remain mandatory. Put the field on the item
entry; a field elsewhere grants no opt-in. Planning and standalone import
verification retain their ordinary behavior and cannot adopt this exception.
The route writes no pin, source, receipt, native state or gate authorization.
Root must review and explicitly adopt the exact transition before scoped use.

Focused tests: `node --test tools/physics-support/original-maintenance.test.mjs`.
