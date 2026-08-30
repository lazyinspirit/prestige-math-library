# Exact Step-8 repair envelope — 8-adjudicate, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-24",
  "stage": "8-adjudicate",
  "round": 1,
  "mode": "guard",
  "group": "c",
  "failures": [
    {
      "id": "step8-guard",
      "stage": "8-adjudicate",
      "why": "ERROR nonfatal-edit: cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation: changed since \"pre-step8\" (4cbdb2055ef2f79b -> 460fe089b1e8eab5) with no confirmed_fatal adjudication against that text state — Alpha",
      "output": "step8-guard: baseline \"pre-step8\" (2026-08-29T18:15:41.553Z) vs working tree\n  9767 item(s) at baseline; 67 changed, 0 created, 0 deleted\n  47/67 change(s) licensed by a confirmed_fatal adjudication or exact terminal resolution\n  ERROR nonfatal-edit: cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation: changed since \"pre-step8\" (4cbdb2055ef2f79b -> 460fe089b1e8eab5) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition: changed since \"pre-step8\" (4fe4e46fd7aebe3e -> d7205247aadc7cff) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: cex-total-variation-can-exceed-the-absolute-value-of-the-set-value: changed since \"pre-step8\" (eded454fb3839903 -> ca6ca60f9c5a8461) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: def-principal-part-at-an-isolated-point: changed since \"pre-step8\" (3d0165b641fa95c0 -> 32d070cd84886441) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: def-signed-measure: changed since \"pre-step8\" (f061461ce56443f6 -> 649eec92dc4ee5f2) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: ex-pole-pushing-along-three-discs: changed since \"pre-step8\" (6bcca3985b31418b -> 0218ba0f118f8e59) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: fs-a-hahn-decomposition-is-unique: changed since \"pre-step8\" (6c869b9bdacfc766 -> 57a8e0efda03d8d7) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: fs-finite-values-and-finite-additivity-force-finite-total-variation: changed since \"pre-step8\" (76ba022f141cdc05 -> 062e303fa679b629) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: fs-total-variation-always-equals-the-absolute-value-of-the-set-value: changed since \"pre-step8\" (3d7db20e226e16b3 -> 13c6bd93e2077a7b) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass: changed since \"pre-step8\" (694e714c128c079c -> 99ad927fc9b24037) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: lem-riemann-map-extremal-family-is-nonempty: changed since \"pre-step8\" (255176ec6d20e9aa -> 00ec7295e5c40465) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: lem-runge-pole-pushing-lemma: changed since \"pre-step8\" (7eef8f50191b1cfe -> 84ad8c756be5dab8) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: lem-two-omitted-values-rule-out-an-essential-singularity: changed since \"pre-step8\" (b3e6535c02fe8c2e -> c237daae5c759222) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: prop-simple-integrals-are-bounded-by-total-variation: changed since \"pre-step8\" (0fece72b750a9d54 -> 57acf711103f3d94) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: thm-gamma-weierstrass-product: changed since \"pre-step8\" (8aa2e864a2ce154d -> e9aa34ee50ed0719) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: thm-mittag-leffler-theorem-on-plane-domains: changed since \"pre-step8\" (e5ff542bab889197 -> 2491f4e82ed9ecd8) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: thm-stirling-formula-gamma: changed since \"pre-step8\" (6642205bcf0c12d5 -> 204c8de9bd365bb7) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals: changed since \"pre-step8\" (08eac199d188b893 -> f6631ca4b216c1bb) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: thm-total-variation-of-a-complex-measure-is-finite: changed since \"pre-step8\" (1e2d4518534f5d66 -> 85b0133d3a367d1b) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n  ERROR nonfatal-edit: thm-zero-divisor-theorem-on-plane-domains: changed since \"pre-step8\" (a45dedb635f52bef -> bc1cda5bc542978c) with no confirmed_fatal adjudication against that text state — Alpha recorded gpt-5.6-terra:confirmed_fatal. Step 8 is fatal-only: revert the edit and close the rejection on its ledger row, or record the confirmed_fatal adjudication that licenses the repair. The two hashes above are the GUARD form (whole `verification:` block excluded, tools/item-hash.mjs `itemHashGuard`), and the row's item_sha256 must be in that same form — a judge-ledger hash, which excludes only the `judge:` sub-block, will never match and reads here as an unlicensed edit.\n\nFAIL — 20 error(s)\n",
      "named_ids": [
        "cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation",
        "cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition",
        "cex-total-variation-can-exceed-the-absolute-value-of-the-set-value",
        "def-principal-part-at-an-isolated-point",
        "def-signed-measure",
        "ex-pole-pushing-along-three-discs",
        "fs-a-hahn-decomposition-is-unique",
        "fs-finite-values-and-finite-additivity-force-finite-total-variation",
        "fs-total-variation-always-equals-the-absolute-value-of-the-set-value",
        "lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass",
        "lem-riemann-map-extremal-family-is-nonempty",
        "lem-runge-pole-pushing-lemma",
        "lem-two-omitted-values-rule-out-an-essential-singularity",
        "prop-simple-integrals-are-bounded-by-total-variation",
        "thm-gamma-weierstrass-product",
        "thm-mittag-leffler-theorem-on-plane-domains",
        "thm-stirling-formula-gamma",
        "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
        "thm-total-variation-of-a-complex-measure-is-finite",
        "thm-zero-divisor-theorem-on-plane-domains"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-total-variation-can-exceed-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-principal-part-at-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-signed-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-pole-pushing-along-three-discs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-hahn-decomposition-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-finite-values-and-finite-additivity-force-finite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-total-variation-always-equals-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-family-is-nonempty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-runge-pole-pushing-lemma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-integrals-are-bounded-by-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-of-a-complex-measure-is-finite",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-total-variation-can-exceed-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-principal-part-at-an-isolated-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-signed-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-pole-pushing-along-three-discs",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-hahn-decomposition-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-finite-values-and-finite-additivity-force-finite-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-total-variation-always-equals-the-absolute-value-of-the-set-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-riemann-map-extremal-family-is-nonempty",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-runge-pole-pushing-lemma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-two-omitted-values-rule-out-an-essential-singularity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-simple-integrals-are-bounded-by-total-variation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gamma-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-mittag-leffler-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stirling-formula-gamma",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-total-variation-of-a-complex-measure-is-finite",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-divisor-theorem-on-plane-domains",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — repair a guard violation, `{{run}}`

The exact repair envelope above supplies the guard output, assigned ids, and
run or published ownership. Diagnose only those ids.

For `nonfatal-edit`, restore the pre-Step-8 mathematics when the edit was not
licensed. Correct an adjudication or hash record only when an already-existing
exact rejection was genuinely adjudicated `confirmed_fatal`; never create or
upgrade a verdict after the edit merely to justify it. For a Step-8 creation or
deletion, restore the baseline inventory if that can be done exactly from
durable evidence. Otherwise make no speculative change and report the precise
blocker.

Run `step8-guard` after the narrow correction. Do not start a judge sweep,
change another group's records, or perform unrelated repair or polish. Return
the guard code, ids, evidence establishing the correction, files changed,
focused result, and blockers.
