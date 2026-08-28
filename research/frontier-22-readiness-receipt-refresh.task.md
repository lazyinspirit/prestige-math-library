# Readiness receipt refresh — `frontier-22`

The post-Step-9 readiness repairs changed dependency declarations after the
whole-level receipts were issued. Refresh only the two now-stale receipts:

- `research/frontier-22-audit-coverage.json`
- `research/frontier-22-spine-audit.json`

Use the owning tools to generate fresh templates. Do not hand-edit stale scope
or hash fields.

## Spine receipt

`node tools/spine-audit.mjs --template ...` currently selects the same 58 proof
items at the same `content_sha256` values as the existing receipt. Dependency
cone counts, the scope hash, or both changed. Carry the existing concrete
attestations only where the item id and content hash are identical, update the
template-owned scope fields, and validate with `spine-audit --receipt`. If any
id or content hash differs when you regenerate it, freshly read that proof
before attesting it.

## Whole-level receipt

Generate a fresh `level-coverage --template` against all nine current manifests,
the merged proof contracts, judge ledger, adjudications, terminal resolutions,
and current context. Preserve valid reconciliation reasons only where the
planned and actual dependency arrays are byte-for-byte the same. Semantically
review and supply concrete, item-specific reasons for every new or changed
reconciliation row. The currently detected changed/new set is:

- `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`
- `def-primary-decomposition-minimal-and-isolated-components`
- `ex-embedded-component-varies-but-radical-does-not`
- `ex-primary-localisation-kills-a-component`
- `ex-primary-maximal-radical-test`
- `lem-associated-primes-contained-in-support`
- `lem-intersection-of-primary-submodules-with-same-radical`
- `lem-localisation-of-a-primary-submodule`
- `lem-noetherian-ring-maximal-element-annihilator-exists`
- `lem-zero-divisor-annihilator-contained-in-associated-prime`
- `thm-isolated-primary-components-are-unique`
- `thm-lasker-noether-primary-decomposition`
- `thm-primary-submodule-characterisations`
- `thm-second-uniqueness-theorem-primary-decomposition`

Do not use a receipt to hide a judge, contract, or mathematical defect. If the
semantic reconciliation exposes one, report it explicitly. Otherwise update
the reviewer/attestation to state that this is the post-readiness-repair refresh.

Run and report:

1. `node tools/spine-audit.mjs --receipt research/frontier-22-spine-audit.json`
2. the full `node tools/level-coverage.mjs` gate with contracts, judge ledger,
   adjudications, terminal resolutions, both receipts, current-context
   verification, and all nine manifests.

Write a concise report to
`research/frontier-22-alpha-readiness-receipt-refresh.md` naming the carried
spine evidence, the 14 dependency reconciliations, validation results, and any
blockers. Do not modify unrelated files.
