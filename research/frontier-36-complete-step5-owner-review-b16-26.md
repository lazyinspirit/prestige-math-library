# Owner Step 5 contract review and evidence repair — batches 16 and 26

## Scope and hash checks

I reviewed the current item files, their complete owning proof-contract entries,
Step 5 baselines, current batch manifests, declared dependencies and sources for
both items. Both entered this review as high-risk risk-review obligations with
no item-specific findings in their successful group narratives. The proofs
remain mathematically sound on independent review.

The b16 mathematical proof text and statement were preserved. I corrected only
its two Stacks source references in the frontmatter and the matching batch
manifest metadata. I expanded its proof-contract derivation of step 1.1, removed
the incorrect b26 repair/disposition wording, and updated the b16 dependency
edge evidence. Batch-specific contracts were merged again from all 30 batch
files. No item proof text, engine state, Step 5 certification, ledger, or other
batch was changed.

The Step 5 pre-baseline records item-byte hashes, canonical proof-contract-entry
hashes, and canonical per-item manifest-row hashes. The current values are:

| Batch / item | Item bytes: baseline → current | Contract entry: baseline → current | Manifest row: baseline → current |
| --- | --- | --- | --- |
| 16 `lem-injective-modules-flasque-and-ext-of-structure-sheaf` | `75656e6a7f4aabfd4ce710a4a5ce869c274ef9af47efb52ae493d409a40a99f1` → `0cf1620fbd126d05fd247faefb48fb8a18c4bbd7b1143fb6be7468b3ff34b891` | `fc04569119c07df0cfecdde42cf0b45fc58cc95459f556b3d8554599b73af3f3` → `740ea315b484cddc3330342a4a0f32f0b20e9aea3493b2ca65e0ce15d8551035` | `0480d14bddb46592c5661785c16d9cd57fd374791560fa9223196aa827a0830f` → `7a917facd8466fb58fcbabddd33d442d2ba0b6f42a4126adc1351e5c2d6d133e` |
| 26 `lem-log-modulus-is-harmonic-off-its-centre` | `0119f908f85fc712d85353f07d2a5e29111036a80f47b30effe5a6c49d06d15f` → `0119f908f85fc712d85353f07d2a5e29111036a80f47b30effe5a6c49d06d15f` | `8eb851c9d34472f7ad8b6cd235b350603d643e2330e9a4045b2df92595d38809` → `7df026dfb4b3c2737f9ea89fba85fc408a34a8ecb2d3acb675b8b8c4eaefb921` | `0ba294345d7fbd4e0a4c3e7f4acc99dbe97a08205ecd2b8e21f85263def4574e` → `0ba294345d7fbd4e0a4c3e7f4acc99dbe97a08205ecd2b8e21f85263def4574e` |

The current b16 contract-entry hash is the same in the batch-16 and merged
contract files; the same is true for b26. The b16 item hash changed only because
its source URLs and locators changed; its statement, facts and proof text were
left intact. The b16 manifest row was updated to mirror those exact references.
Batch 26's item and manifest row still match their pre-Step-5 hashes.

### b16 manifest-row hash verification

Step 5 defines the per-item row as the item object from
`frontier-36-complete-batch-16.pages.json` plus a private
`__step6_page_id` field, recursively sorts object keys, serializes the result
with `JSON.stringify`, then takes SHA-256. Reversing only the two documented
source-reference edits in the current row gives the old projection below; its
canonical hash is exactly `0480d14bddb46592c5661785c16d9cd57fd374791560fa9223196aa827a0830f`, matching the immutable Step 5
baseline. The current projection hashes to `7a917facd8466fb58fcbabddd33d442d2ba0b6f42a4126adc1351e5c2d6d133e`.

The earlier `458b2fd12cf10a07c08bad3bb9c2d0e96cb4ed8c557d28b88144974bd10ba8f9`
value was the raw byte hash of the *entire* rewritten pages JSON file. It is not
a Step 5 item-row hash and is not comparable with `7a917facd8466fb58fcbabddd33d442d2ba0b6f42a4126adc1351e5c2d6d133e`. The only
extra field in either row projection is the deterministic Step 5 schema field
`__step6_page_id`; it is identical in the old and current projections. The
projection change is confined to the two source references shown below.

Old canonical projection (hash `0480d14bddb46592c5661785c16d9cd57fd374791560fa9223196aa827a0830f`):

```json
{
  "__step6_page_id": "smooth-projective-serre-duality-and-flag-variety-line-bundles",
  "dependency_level": 2,
  "deps": [
    "def-sheaf-ext-for-coherent-modules",
    "lem-ringed-space-module-sheaves-enough-injectives",
    "def-sheaf-cohomology-derived-global-sections",
    "def-flasque-sheaf",
    "def-injective-object",
    "def-module-on-ringed-space",
    "def-extension-by-zero-abelian-sheaf",
    "thm-extension-by-zero-adjunction-exactness",
    "def-kernel-cokernel-image-sheaves",
    "thm-exactness-of-sheaves-stalkwise",
    "thm-flasque-sheaves-acyclic",
    "def-acyclic-object-for-a-left-exact-functor",
    "def-f-acyclic-resolution",
    "thm-acyclic-resolution-theorem-for-right-derived-functors",
    "thm-choice-implies-dependent-implies-countable-choice",
    "def-axiom-of-choice"
  ],
  "id": "lem-injective-modules-flasque-and-ext-of-structure-sheaf",
  "kind": "lemma",
  "proof_strategy": "direct",
  "provenance": {
    "proof": "ai-altered",
    "statement": "literature-derived"
  },
  "sources": {
    "references": [
      {
        "locator": "Section 19.5 (tag 01DI), enough injectives for modules on a ringed space",
        "title": "The Stacks Project, Sheaves of Modules",
        "url": "https://stacks.math.columbia.edu/tag/01DH"
      },
      {
        "locator": "Section 20.11 (injectives are flasque) and Section 31 (0FKU)",
        "title": "The Stacks Project, Cohomology of Sheaves",
        "url": "https://stacks.math.columbia.edu/download/cohomology.pdf"
      }
    ]
  },
  "statement": "Assume AC. For a ringed space (Y,O_Y): every injective O_Y-module is flasque as an abelian sheaf, and for every O_Y-module G and q\\u22650 there is a canonical isomorphism Ext^q_{O_Y}(O_Y,G) \\u2245 H^q(Y,G), natural in G, whose degree-zero case is evaluation at the unit section.",
  "strategy": "Construct extension by zero for O-modules and use it to show restriction maps out of an injective module split; conclude that O-injective modules are flasque abelian sheaves, hence acyclic for global sections, and compare the acyclic-resolution isomorphism with Hom(O_Y,-) = global sections on the supplied functorial injective resolution.",
  "title": "Injective modules are flasque and Ext from the structure sheaf is cohomology"
}
```

Current canonical projection (hash `7a917facd8466fb58fcbabddd33d442d2ba0b6f42a4126adc1351e5c2d6d133e`):

```json
{
  "__step6_page_id": "smooth-projective-serre-duality-and-flag-variety-line-bundles",
  "dependency_level": 2,
  "deps": [
    "def-sheaf-ext-for-coherent-modules",
    "lem-ringed-space-module-sheaves-enough-injectives",
    "def-sheaf-cohomology-derived-global-sections",
    "def-flasque-sheaf",
    "def-injective-object",
    "def-module-on-ringed-space",
    "def-extension-by-zero-abelian-sheaf",
    "thm-extension-by-zero-adjunction-exactness",
    "def-kernel-cokernel-image-sheaves",
    "thm-exactness-of-sheaves-stalkwise",
    "thm-flasque-sheaves-acyclic",
    "def-acyclic-object-for-a-left-exact-functor",
    "def-f-acyclic-resolution",
    "thm-acyclic-resolution-theorem-for-right-derived-functors",
    "thm-choice-implies-dependent-implies-countable-choice",
    "def-axiom-of-choice"
  ],
  "id": "lem-injective-modules-flasque-and-ext-of-structure-sheaf",
  "kind": "lemma",
  "proof_strategy": "direct",
  "provenance": {
    "proof": "ai-altered",
    "statement": "literature-derived"
  },
  "sources": {
    "references": [
      {
        "locator": "Lemma 19.5.1 (tag 01DI), enough injectives for sheaves of modules on a ringed space",
        "title": "The Stacks Project, Sheaves of Modules",
        "url": "https://stacks.math.columbia.edu/tag/01DI"
      },
      {
        "locator": "Lemma 20.8.1 (tag 01EA), injective sheaves are flasque",
        "title": "The Stacks Project, Cohomology of Sheaves",
        "url": "https://stacks.math.columbia.edu/tag/01EA"
      }
    ]
  },
  "statement": "Assume AC. For a ringed space (Y,O_Y): every injective O_Y-module is flasque as an abelian sheaf, and for every O_Y-module G and q\\u22650 there is a canonical isomorphism Ext^q_{O_Y}(O_Y,G) \\u2245 H^q(Y,G), natural in G, whose degree-zero case is evaluation at the unit section.",
  "strategy": "Construct extension by zero for O-modules and use it to show restriction maps out of an injective module split; conclude that O-injective modules are flasque abelian sheaves, hence acyclic for global sections, and compare the acyclic-resolution isomorphism with Hom(O_Y,-) = global sections on the supplied functorial injective resolution.",
  "title": "Injective modules are flasque and Ext from the structure sheaf is cohomology"
}
```

## Batch 16 — `lem-injective-modules-flasque-and-ext-of-structure-sheaf`

**Mathematical review.** The extension-by-zero construction, its adjunction to
restriction, and the injective lifting argument establish flasqueness. The
unit-section map identifies `Hom_O(O_Y,J^p)` with global sections, and
flasque acyclicity plus the stated acyclic-resolution theorem gives the
Ext/cohomology comparison. AC supplies the functorial injective resolutions
and the dependent-choice hypothesis. I found no mathematical counterexample
or missing choice use.

**Contract and dependency repair.** The prior contract risk note did not cover
the exactness claim needed in step 1.1, while the dependency edge was easy to
misread as supplying that local exactness. The contract now spells out the
local argument: compatible module structures make sectionwise kernels and
quotient presheaves into modules; sheafifying the quotient yields the
cokernel, with the same underlying abelian kernel and cokernel constructions.
Together with exactness of abelian extension by zero, this derives exactness of
module extension by zero. It does not treat the batch-9 injective supplier as
a premise for this step. The corrected use map records that supplier at steps
1.2, 4.1 and 5.1 only.

**Source metadata.** The Stacks references now point directly to Lemma 19.5.1
(tag 01DI), enough injectives for modules on a ringed space, and Lemma 20.8.1
(tag 01EA), injective sheaves are flasque. The old §20.11 / tag 0FKU locator
was inaccurate for these claims. I verified that the item frontmatter's
`sources.references` and the manifest row references are identical.

## Batch 26 — `lem-log-modulus-is-harmonic-off-its-centre`

The direct derivative proof is correct: for `R=(x-p)^2+(y-q)^2>0`,
`u_a=	frac12log R` is smooth, the second derivatives cancel, and `R=0`
occurs only at the excluded centre. The updated risk note records this scope,
uses the declared logarithm-derivative dependency, and no longer claims that a
repair occurred or invokes the unrelated Axler theorem as supporting evidence.
No change to the item or its source metadata was needed.

## Validation

All strict proof-contract checks passed for the two batch-specific entries and
their merged entries. Citation-fidelity checks with `--fail-on-missing-quote`
passed for both items in the batch and merged contracts:

| Check | Result |
| --- | --- |
| Batch 16 strict proof contract | PASS, 0 errors, 0 warnings |
| Batch 26 strict proof contract | PASS, 0 errors, 0 warnings |
| Merged strict proof contracts (both IDs) | PASS, 0 errors, 0 warnings |
| Batch 16 citation fidelity | PASS, 16 quotes checked, none missing, 0 widening candidates |
| Batch 26 citation fidelity | PASS, 1 quote checked, none missing, 0 widening candidates |
| Merged citation fidelity (both IDs) | PASS with the same per-item counts |
| b16 item/manifest source-reference mirror | PASS, exact title/URL/locator pairs |
| Reconstructed old b16 row hash vs Step 5 baseline | PASS, exact SHA-256 match |

These checks validate the evidence repair; this report is not a Step 5
certification. Existing baseline snapshots and certification/runtime state
were not rewritten.

## Machine-readable Step 5 manifest-repair evidence

This block records the verified row repair and binds the current b16 item,
manifest row and contract entry hashes.

```step5-manifest-repair
{
  "version": 1,
  "policy": "step5-manifest-repair-evidence-v1",
  "run": "frontier-36-complete",
  "step": 5,
  "id": "lem-injective-modules-flasque-and-ext-of-structure-sheaf",
  "page": "smooth-projective-serre-duality-and-flag-variety-line-bundles",
  "batch": "16",
  "repair_kind": "source-reference-fields",
  "baseline_manifest_sha256": "0480d14bddb46592c5661785c16d9cd57fd374791560fa9223196aa827a0830f",
  "current_manifest_sha256": "7a917facd8466fb58fcbabddd33d442d2ba0b6f42a4126adc1351e5c2d6d133e",
  "baseline_manifest_entry": {
    "__step6_page_id": "smooth-projective-serre-duality-and-flag-variety-line-bundles",
    "dependency_level": 2,
    "deps": [
      "def-sheaf-ext-for-coherent-modules",
      "lem-ringed-space-module-sheaves-enough-injectives",
      "def-sheaf-cohomology-derived-global-sections",
      "def-flasque-sheaf",
      "def-injective-object",
      "def-module-on-ringed-space",
      "def-extension-by-zero-abelian-sheaf",
      "thm-extension-by-zero-adjunction-exactness",
      "def-kernel-cokernel-image-sheaves",
      "thm-exactness-of-sheaves-stalkwise",
      "thm-flasque-sheaves-acyclic",
      "def-acyclic-object-for-a-left-exact-functor",
      "def-f-acyclic-resolution",
      "thm-acyclic-resolution-theorem-for-right-derived-functors",
      "thm-choice-implies-dependent-implies-countable-choice",
      "def-axiom-of-choice"
    ],
    "id": "lem-injective-modules-flasque-and-ext-of-structure-sheaf",
    "kind": "lemma",
    "proof_strategy": "direct",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "title": "The Stacks Project, Sheaves of Modules",
          "url": "https://stacks.math.columbia.edu/tag/01DH",
          "locator": "Section 19.5 (tag 01DI), enough injectives for modules on a ringed space"
        },
        {
          "title": "The Stacks Project, Cohomology of Sheaves",
          "url": "https://stacks.math.columbia.edu/download/cohomology.pdf",
          "locator": "Section 20.11 (injectives are flasque) and Section 31 (0FKU)"
        }
      ]
    },
    "statement": "Assume AC. For a ringed space (Y,O_Y): every injective O_Y-module is flasque as an abelian sheaf, and for every O_Y-module G and q\\u22650 there is a canonical isomorphism Ext^q_{O_Y}(O_Y,G) \\u2245 H^q(Y,G), natural in G, whose degree-zero case is evaluation at the unit section.",
    "strategy": "Construct extension by zero for O-modules and use it to show restriction maps out of an injective module split; conclude that O-injective modules are flasque abelian sheaves, hence acyclic for global sections, and compare the acyclic-resolution isomorphism with Hom(O_Y,-) = global sections on the supplied functorial injective resolution.",
    "title": "Injective modules are flasque and Ext from the structure sheaf is cohomology"
  },
  "current_manifest_entry": {
    "__step6_page_id": "smooth-projective-serre-duality-and-flag-variety-line-bundles",
    "dependency_level": 2,
    "deps": [
      "def-sheaf-ext-for-coherent-modules",
      "lem-ringed-space-module-sheaves-enough-injectives",
      "def-sheaf-cohomology-derived-global-sections",
      "def-flasque-sheaf",
      "def-injective-object",
      "def-module-on-ringed-space",
      "def-extension-by-zero-abelian-sheaf",
      "thm-extension-by-zero-adjunction-exactness",
      "def-kernel-cokernel-image-sheaves",
      "thm-exactness-of-sheaves-stalkwise",
      "thm-flasque-sheaves-acyclic",
      "def-acyclic-object-for-a-left-exact-functor",
      "def-f-acyclic-resolution",
      "thm-acyclic-resolution-theorem-for-right-derived-functors",
      "thm-choice-implies-dependent-implies-countable-choice",
      "def-axiom-of-choice"
    ],
    "id": "lem-injective-modules-flasque-and-ext-of-structure-sheaf",
    "kind": "lemma",
    "proof_strategy": "direct",
    "provenance": {
      "proof": "ai-altered",
      "statement": "literature-derived"
    },
    "sources": {
      "references": [
        {
          "locator": "Lemma 19.5.1 (tag 01DI), enough injectives for sheaves of modules on a ringed space",
          "title": "The Stacks Project, Sheaves of Modules",
          "url": "https://stacks.math.columbia.edu/tag/01DI"
        },
        {
          "locator": "Lemma 20.8.1 (tag 01EA), injective sheaves are flasque",
          "title": "The Stacks Project, Cohomology of Sheaves",
          "url": "https://stacks.math.columbia.edu/tag/01EA"
        }
      ]
    },
    "statement": "Assume AC. For a ringed space (Y,O_Y): every injective O_Y-module is flasque as an abelian sheaf, and for every O_Y-module G and q\\u22650 there is a canonical isomorphism Ext^q_{O_Y}(O_Y,G) \\u2245 H^q(Y,G), natural in G, whose degree-zero case is evaluation at the unit section.",
    "strategy": "Construct extension by zero for O-modules and use it to show restriction maps out of an injective module split; conclude that O-injective modules are flasque abelian sheaves, hence acyclic for global sections, and compare the acyclic-resolution isomorphism with Hom(O_Y,-) = global sections on the supplied functorial injective resolution.",
    "title": "Injective modules are flasque and Ext from the structure sheaf is cohomology"
  },
  "current_carriers": {
    "item_file_sha256": "0cf1620fbd126d05fd247faefb48fb8a18c4bbd7b1143fb6be7468b3ff34b891",
    "manifest_sha256": "7a917facd8466fb58fcbabddd33d442d2ba0b6f42a4126adc1351e5c2d6d133e",
    "contract_sha256": "740ea315b484cddc3330342a4a0f32f0b20e9aea3493b2ca65e0ce15d8551035"
  },
  "review": {
    "current_item_and_contract_checked": true,
    "current_manifest_matches_item": true,
    "no_unresolved_defect": true,
    "changed_fields": "sources.references[*].url,locator"
  }
}
```
