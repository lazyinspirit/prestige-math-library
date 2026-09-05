# frontier-30 reader-13 report

Date: 2026-09-05
Batch: 13
Run: frontier-30
Pages: `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`

## Opened scope

Read for instructions and batch control:

- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- `research/frontier-30-reader.task.md`
- `research/frontier-30-beta-13.task.md`
- `research/frontier-30-batch-13.pages.json`
- `research/frontier-30-batch-13.coverage.json`
- `research/frontier-30-batch-13.proof-contracts.json`
- `research/frontier-30-batch-13.notes.md`
- `research/plan-algebraic-geometry-track.md:603-645`
- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`

Assigned pages opened:

- `library/scheme-theory/sheaf-operations-exactness-ringed-spaces-and-module-pullback.md`
- `library/scheme-theory/sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples.md`

Assigned items opened:

- A-page items: `def-direct-image-sheaf`, `lem-direct-image-is-sheaf`, `def-inverse-image-presheaf-and-sheaf`, `thm-inverse-direct-image-adjunction`, `lem-stalk-inverse-image-sheaf`, `def-restriction-sheaf-open-subspace`, `def-extension-by-zero-abelian-sheaf`, `def-skyscraper-sheaf-abelian-group`, `def-kernel-cokernel-image-sheaves`, `thm-abelian-sheaves-form-abelian-category`, `def-exact-sequence-sheaves`, `thm-exactness-of-sheaves-stalkwise`, `lem-global-sections-left-exact`, `thm-extension-by-zero-adjunction-exactness`, `def-ringed-space`, `def-morphism-ringed-spaces`, `def-locally-ringed-space`, `def-morphism-locally-ringed-spaces`, `lem-local-homomorphism-residue-field-map`, `def-module-on-ringed-space`, `def-sheaf-tensor-product`, `lem-stalk-tensor-product`, `def-sheaf-hom`, `def-pullback-module-ringed-spaces`, `thm-pullback-pushforward-module-adjunction`, `lem-pullback-modules-right-exact`, `def-gluing-datum-sheaves`, `thm-gluing-sheaves`, `thm-gluing-ringed-and-locally-ringed-spaces`, `rem-inverse-image-versus-pullback`
- B-page items: `ex-direct-image-open-immersion`, `cex-extension-by-zero-differs-direct-image`, `ex-skyscraper-sheaf-exact-sequence`, `cex-global-sections-not-right-exact`, `ex-ringed-space-continuous-functions`, `cex-ringed-space-map-not-locally-ringed`, `ex-pullback-free-module`, `ex-glue-line-bundle-transition-functions`, `cex-presheaf-cokernel-needs-sheafification`

Dependencies opened to verify current claims:

- `def-presheaf-on-topological-space`
- `def-sheafification`
- `def-presheaf-of-groups-rings-modules`
- `def-sheaf-on-topological-space`
- `thm-sheafification-universal-property`
- `def-stalk-of-presheaf`
- `thm-sheafification-preserves-stalks`
- `def-abelian-category`
- `thm-modules-over-a-ring-form-an-abelian-category`
- `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category`
- `thm-sheaf-morphism-isomorphism-stalkwise`
- `def-section-restriction-and-global-section`
- `def-local-ring`
- `thm-extension-of-scalars-is-left-adjoint-to-restriction`
- `def-flat-and-faithfully-flat-modules-and-ring-maps`
- `thm-right-exactness-of-tensor-products`
- `def-morphism-of-presheaves`
- `def-subsheaf`

## Repairs

1. `items/thm-extension-by-zero-adjunction-exactness.md`
   Repaired step 1.3. The old proof claimed that every point outside an open subset has a neighbourhood disjoint from that open subset, which fails at boundary points. The repaired proof now uses the support condition from the definition of `j_!` to show every germ outside `U` vanishes.

2. `items/thm-gluing-sheaves.md`
   Repaired the statement/proof mismatch used later on the page. The theorem now explicitly records that the same gluing construction works for sheaves of abelian groups, commutative rings, and modules on a fixed ringed space, matching its downstream use in the ringed-space and line-bundle items.

3. `items/thm-gluing-ringed-and-locally-ringed-spaces.md`
   Repaired a missing hypothesis in the statement. The old statement only named homeomorphisms of open subsets, while the proof and conclusion require isomorphisms of ringed spaces or locally ringed spaces on the overlaps. Step 1.1 now also says explicitly that the quotient uses the underlying homeomorphisms.

4. `items/cex-presheaf-cokernel-needs-sheafification.md`
   Removed an inaccurate citation. The punctured-interval counterexample `cex-extension-by-zero-differs-direct-image` does not establish the claimed quotient-presheaf phenomenon, so I deleted that stale fact and its use from the conclusion.

5. `research/frontier-30-batch-13.proof-contracts.json`
   Updated the four affected contracts so the derivation claims and citation ledger match the repaired on-disk items.

No `verification.judge` record was present in any repaired item, so no stale judge record needed removal.

## Page verdicts

- `sheaf-operations-exactness-ringed-spaces-and-module-pullback`: pass after the three A-item repairs above. No remaining uneditable defect found on the page or in its A-page prose.
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples`: pass after the `cex-presheaf-cokernel-needs-sheafification` repair. No remaining uneditable defect found in the B-page items or summary prose.

## Validation

Ran on 2026-09-05:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-extension-by-zero-adjunction-exactness.md items/thm-gluing-sheaves.md items/thm-gluing-ringed-and-locally-ringed-spaces.md items/cex-presheaf-cokernel-needs-sheafification.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-extension-by-zero-adjunction-exactness.md items/thm-gluing-sheaves.md items/thm-gluing-ringed-and-locally-ringed-spaces.md items/cex-presheaf-cokernel-needs-sheafification.md`
- `node -e 'JSON.parse(require("fs").readFileSync("research/frontier-30-batch-13.proof-contracts.json","utf8")); console.log("proof-contracts: ok")'`
- `git diff --check -- items/thm-extension-by-zero-adjunction-exactness.md items/thm-gluing-sheaves.md items/thm-gluing-ringed-and-locally-ringed-spaces.md items/cex-presheaf-cokernel-needs-sheafification.md research/frontier-30-batch-13.proof-contracts.json`
- `node tools/content-policy.mjs research/frontier-30-batch-13.pages.json`

Results:

- `reflow`: all four changed items reflowed cleanly.
- `precheck`: `4 checked, 0 failing — all clean`.
- proof-contract parse: `proof-contracts: ok`.
- `git diff --check`: clean on the changed files.
- `content-policy`: `39 scoped item(s), 0 error(s), 0 warning(s)`.

## Uneditable findings

None. I found no remaining defect in published dependencies, another batch, or assigned B-page prose that needed to be reported separately.

## Blockers

None.
