# Step 3b pair report — `groups-of-multiplicative-type-and-arithmetic-tori`

- Run: `frontier-38-owner-30`; batch 25; role alpha-high (pair author).
- A page: `groups-of-multiplicative-type-and-arithmetic-tori` (order 887).
- B page: `groups-of-multiplicative-type-and-arithmetic-tori-examples` (order 888).
- Owned IDs (15 items): A887 — `def-multiplicative-type-coordinate-hopf-algebra`,
  `lem-multiplicative-type-local-hopf-dictionary`,
  `def-diagonalizable-group-and-character-module`,
  `lem-diagonalizable-character-antiequivalence`,
  `def-group-of-multiplicative-type-and-torus`,
  `lem-multiplicative-type-affineness-by-field-descent`,
  `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras`,
  `lem-multiplicative-type-groups-split-separably`,
  `lem-finite-galois-descent-for-multiplicative-hopf-algebras`,
  `def-continuous-galois-character-module`,
  `thm-multiplicative-type-groups-and-galois-character-modules`,
  `cor-tori-correspond-to-torsion-free-character-lattices`;
  B888 — `ex-split-torus-character-lattice`, `ex-nonsplit-torus-galois-action`,
  `cex-mu-p-is-not-a-smooth-torus`.
- Pages owed: `library/algebraic-geometry/groups-of-multiplicative-type-and-arithmetic-tori.md`
  and `...-examples.md` (both absent on entry).
- Contracts owed: `research/frontier-38-owner-30-batch-25.proof-contracts.json` (absent on entry).

## Open obligations at entry

1. Audit each of the 15 scaffold items in dispatch dependency order, reading exact
   suppliers (`def-group-scheme-over-a-field` in-run; the published affine, fpqc,
   Galois and regularity suppliers), and repair local gaps found.
2. Author both library pages (A and B) with page prose and item lists.
3. Produce the batch proof-contract file and clear `merge-contracts`,
   `proof-contract --strict`, `finite-smoke`, `risk-report`, `boundary-audit`,
   `citation-fidelity`, `gate-liveness`.
4. Run explicit-path `precheck`, `rendercheck`, `content-policy`, `depcheck`,
   `fwdcheck`, `extcheck`, `item-dependency-levels`, `validate-plan`, `proof-layout`
   (batched, once, after final edits) and the batch coverage/step-3 checks.
5. Record `accept`/`repaired` item decisions only after complete authoring; escalate
   only what remains unresolved (nothing expected: all suppliers are on disk).
6. Recheck the 3a §5 finding (possible future-consumer prerequisite on rigidity of
   multiplicative-type groups for planned 891/893) against current inputs and report
   it as a published-concern/owner item without editing sibling work.

## Checkpoint log

Audited in dispatch dependency order (levels 1→9, ties by page order/item ID). For
each item: read its suppliers, checked statement, hypotheses, every numbered step
and tag against the source route, then repaired only local gaps. Nothing is
reported as verified that was not read.

| # | Level | Item | Decision | Audit and repairs |
|---:|---:|---|---|---|
| 1 | 1 | `def-multiplicative-type-coordinate-hopf-algebra` | accept | Reversed diagrams, nonreduced convention and group-like condition match Milne Ch. 12 §a and SGA 3 VIII §1; supplier `def-group-scheme-over-a-field` read at its current revision (finite-type, nonreduced allowed). No gap. |
| 2 | 2 | `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras` | repaired | Statement clarified from the ambiguous "every such C" to the exact claim `C^*⊗_k K ≅ K^{dim_k C}`; the finite right-coideal construction (Δ(v_j)=Σ v_i⊗c_ij with Δ(c_ij)=Σ c_iℓ⊗c_ℓj and ε(c_ij)=δ_ij) and the monomial-spanning argument in `K[M]` (coefficient functionals on the second tensor factor) were verified line by line. |
| 3 | 2 | `lem-multiplicative-type-local-hopf-dictionary` | accept | Product/anti-equivalence reversal checked against the published affine anti-equivalence; character↔group-like proof checked for both directions (S(a)a=1 from the inverse identity); base-change compatibility checked. No gap. |
| 4 | 3 | `def-diagonalizable-group-and-character-module` | repaired | Added the group-algebra universal-property justification for the functor-of-points formula `D_k(M)(R)=Hom(M,R^×)`; gluing clause checked against `thm-gluing-affine-schemes`. |
| 5 | 3 | `lem-finite-galois-descent-for-multiplicative-hopf-algebras` | accept | Arbitrary-dimensional descent via finite Γ-orbits checked against `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`; fixed-tensor identification `(B⊗_L B)^Γ=A⊗A`, cotorsion of Δ/ε/S, unique descent of maps and the finite-generation transfer verified. Covers nonsmooth cases that Milne A.66's variety-only clause cannot. |
| 6 | 4 | `def-group-of-multiplicative-type-and-torus` | accept | Full fpqc-local SGA 3 IX 1.1 convention; trivial torus and nonsmooth groups included; no affineness/splitting smuggled into the definition. |
| 7 | 4 | `lem-diagonalizable-character-antiequivalence` | accept | Group-likes of `k[M]` are exactly the `e_m` (coefficient squares + counit); `Hom(D(M),D(N))=Hom(N,M)`; finite-generation iff (supports of finite algebra generators generate M); product decomposition verified. |
| 8 | 4 | `lem-multiplicative-type-affineness-by-field-descent` | accept | Four steps checked in full: closed identity point and separatedness (specialisation of a rational point in a finite-type scheme forces equality in an affine chart with a maximal residue prime); Čech equalizer base change `Γ(X)⊗_k R=Γ(X_R)`; finite generation of `Γ(G)` from `G_K` affine and the canonical map; descent of the inverse over saturated opens (fibre-product point from a prime of the residue-field tensor, `κ(w)⊗κ(h)κ(w')≠0`), tensor equalizer `R` fixed part via λ(1)=1, gluing; fpqc-local conclusion. AC uses exactly those declared in A1. |
| 9 | 5 | `lem-multiplicative-type-groups-split-separably` | repaired | Moved the Given's F1 use into step 1.1 and tagged `[F1, A1, F2, F4, algebra]` so the affine splitting interface and its Choice cost are cited at the consuming step. Separable minimal polynomials (powers independent under extension; tuple in `K^d` has separable minimal polynomial), Lagrange idempotent decomposition, linear independence of distinct group-likes, finite Galois splitting field and the field-extension-isomorphism test verified. |
| 10 | 6 | `def-continuous-galois-character-module` | accept | Krull topology/discrete-continuity/open-stabilizer equivalence and the transport action `(σχ)(g)=σ(χ(σ^{-1}g))` checked; AC declared with its use. |
| 11 | 7 | `thm-multiplicative-type-groups-and-galois-character-modules` | repaired | Step 3.1 sharpened: the evaluation isomorphism is restricted to Γ_k-fixed elements, source identified with `O(D(X^*(G)))`, target with `O(G)` via F4's canonical clause over a finite Galois subextension; A1 added at step 1.1 (AC enters through F3 and F6). Continuity factoring through a finite Galois quotient, construction `A=L[M]^{Gal(L/k)}`, independence of L, recovery `G≅D(X^*(G))`, map descent and naturality verified. |
| 12 | 8 | `cor-tori-correspond-to-torsion-free-character-lattices` | repaired | Corrected step 2.1: the split dictionary is applied over the residue field E of `L⊗_k K` after base-changing the L-splitting `G_L≅D_L(M)`, not to the descended group over k (which is false for nonsplit forms — e.g. the real circle has only the trivial real character); A1 added at step 2.1. Structure theorem via Euclidean pivot reduction checked; torus criterion both directions checked. |
| 13 | 9 | `ex-split-torus-character-lattice` | repaired | Added A1 at step 2.1 where the classification identifies the group as a torus. `X^*(G_m^r)=Z^r`, trivial action, integer-matrix description, rank-zero cases checked. |
| 14 | 9 | `ex-nonsplit-torus-galois-action` | repaired | Added A1 at step 2.1. Norm-one group law, splitting `T_L≅G_m` via `t=x+√d y` with 2, 2√d invertible, sign action, non-splitting (no Z→Z intertwines sign with trivial), and the R, d=-1 circle case checked. |
| 15 | 9 | `cex-mu-p-is-not-a-smooth-torus` | repaired | Moved [A1],[F1]–[F4] into a `## Facts & Assumptions` section with the Given so the contract tool reads them (facts inside the Counterexample section are invisible to `facts-block.mjs`), added A1 at step 1.1, and added `**Proof technique:** direct.` before the steps. `μ_p=D(Z/p)` with torsion character module, non-torus, `k[u]/(u^p)` Krull dimension 0 with edim 1 (not regular, not geometrically regular, not smooth), and `μ_p(K)={1}` in characteristic p checked. |

## Checks run (batch 25, explicit paths = the 15 owned item files + 2 pages)

All commands run from the repo root at the current revision; all results below were
observed directly in this dispatch, not copied from other reports.

| Check | Command | Result |
|---|---|---|
| precheck | `node tools/tsx-run.mjs tools/precheck.mts <15 paths>` | 11 checked, 0 failing |
| rendercheck | `node tools/rendercheck.mjs <15 item paths>` (then the 2 page paths) | OK on both runs: KaTeX and YAML clean on all 17 files |
| proof-layout | `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <15 paths>` | final batched run after the last edit: 15 items, 27 steps, 0 defects, exit 0 |
| proof-layout (default loader) | `node tools/proof-layout.mjs <path>` | renderer environment still fails on raw JSX in the sibling app (`ItemBody.tsx`); documented pre-existing environment note, shim used as recorded by the Step-1 packet |
| content policy | `node tools/content-policy.mjs research/frontier-38-owner-30-batch-25.pages.json` | 15 scoped items, 0 errors, 0 warnings |
| depcheck | `node tools/depcheck.mjs` | exit 1 on the current 23018-item library; all 63 error rows are sibling/legacy findings (e.g. `multi-home` rows in combinatorics, unresolved ids in PDE/AG sibling packets); a filtered scan finds no batch-25 item or page |
| fwdcheck / extcheck | `node tools/fwdcheck.mjs`, `node tools/extcheck.mjs` | fwdcheck exits 1 on inherited later-material markers elsewhere (23030 items); extcheck exits 0 with sibling warnings only; no batch-25 finding in either |
| item levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | 816 items, 60 pages, maximum level 16, 0 errors (owned levels 1,2,2,3,3,4,4,4,5,6,7,8,9,9,9 all recomputed and matching the manifest) |
| validate-plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0, acyclic and consistent (289 unspliced pages elsewhere noted) |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-25.pages.json` | 15 items, 0 normalized, 0 errors |
| coverage | `node tools/coverage-checklist.mjs …batch-25.coverage.json --require-destination` | 2 pages, 42 rows, 0 errors, 0 warnings |
| source fetch | `node tools/source-fetch-check.mjs --coverage …batch-25.coverage.json` | 6/6 fetch-verified, 6/6 resolved |
| depsource | `node tools/depsource.mjs --page <887/888>` | 0 unresolved on both pages |
| prosecheck | `node tools/prosecheck.mjs <15 paths>` | 15 files, 0 errors, 0 warnings |
| strict contracts | `node tools/proof-contract.mjs …batch-25.proof-contracts.json --strict` | 15/15 items, 0 errors, 0 warnings |
| finite smoke | `node tools/finite-smoke.mjs …batch-25.proof-contracts.json` | 0 errors (no bounded model check applies to this algebraic pair) |
| risk report (advisory) | `node tools/risk-report.mjs …batch-25.proof-contracts.json` | 0 errors; 15 items routed for Step-5a attention |
| boundary audit | `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template --json` | 120 rows, 0 template clusters, 0 contradicted |
| citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | 45 citations, every quote found, no widening candidates |
| step 3 decisions | `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase scope/final` | pair scope current; all 15 items closed at current hashes (see below) |

Item decisions were recorded per item, in dependency order, with `confidence 1`
and the examined dependency IDs, all as `accept` or `repaired`:
`def-multiplicative-type-coordinate-hopf-algebra` (level 1), then
`lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras` and
`lem-multiplicative-type-local-hopf-dictionary`, then
`def-diagonalizable-group-and-character-module` and
`lem-finite-galois-descent-for-multiplicative-hopf-algebras`, then
`def-group-of-multiplicative-type-and-torus`,
`lem-diagonalizable-character-antiequivalence`,
`lem-multiplicative-type-affineness-by-field-descent`, then
`lem-multiplicative-type-groups-split-separably`, then
`def-continuous-galois-character-module`, then
`thm-multiplicative-type-groups-and-galois-character-modules`, then
`cor-tori-correspond-to-torsion-free-character-lattices`, then the three B items.
No decision is escalated: no supplier is unfinished and no proof use is unresolved.

Receipts (one per item): `research/frontier-38-owner-30-step3b-review-<id>.json`.
`node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final`
reports these 15 items closed at their current hashes (whole-run work remains for
sibling pairs only). Frozen revisions (raw SHA-256, first 16 hex):

| Item | sha256-16 | Item | sha256-16 |
|---|---|---|---|
| `def-multiplicative-type-coordinate-hopf-algebra` | `a47d6e1d43d9c343` | `lem-multiplicative-type-groups-split-separably` | `4a73df8e2533f33b` |
| `lem-multiplicative-type-local-hopf-dictionary` | `333107f40b4a8c3c` | `lem-finite-galois-descent-for-multiplicative-hopf-algebras` | `fd01db3a6ffccb04` |
| `def-diagonalizable-group-and-character-module` | `bb0adbbdc96f1a67` | `def-continuous-galois-character-module` | `f5e561de620cb3a2` |
| `lem-diagonalizable-character-antiequivalence` | `29d40a5133adc37c` | `thm-multiplicative-type-groups-and-galois-character-modules` | `169aad31e0da131c` |
| `def-group-of-multiplicative-type-and-torus` | `85053bb29e1640be` | `cor-tori-correspond-to-torsion-free-character-lattices` | `947f7e02f41df84a` |
| `lem-multiplicative-type-affineness-by-field-descent` | `80f54035f110941e` | `ex-split-torus-character-lattice` | `bffa98c816d760a5` |
| `lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras` | `933e9ac3670dc1b7` | `ex-nonsplit-torus-galois-action` | `47786b1ea75861ba` |
| | | `cex-mu-p-is-not-a-smooth-torus` | `7a793d54f69b6137` |

Supplier revision read for the in-run reconciliation:
`items/def-group-scheme-over-a-field.md` = `592060d24568a852`; batch-25 contract
file = `d092b0ae1a43a003` (16-hex prefixes).

## Supplier reconciliation (in-run)

- `def-group-scheme-over-a-field` (A871, batch 22): read in full at the current
  revision (finite-type `k`-scheme with group object, nonreduced allowed). It is the
  only in-run supplier; its two consumers (`def-multiplicative-type-coordinate-hopf-algebra`,
  `lem-multiplicative-type-affineness-by-field-descent`) use exactly the finite-type
  and nonreduced clauses, cited at the Definition and at step 1.1 respectively. The
  batch-22 author reports that pair closed with no open obligations, so no consumer
  decision is left escalated; the cross-batch ledger rows remain `verified` for the
  current text.
- Published suppliers (`thm-affine-scheme-ring-anti-equivalence`,
  `thm-gluing-affine-schemes`, `lem-fpqc-cover-submersive`,
  `thm-affine-fibre-product-tensor-ring`, `thm-global-sections-affine-scheme`,
  `thm-morphisms-into-affine-scheme-global-sections`,
  `lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension`,
  `thm-finite-galois-extension-characterizations`,
  `thm-fundamental-theorem-of-finite-galois-theory`,
  `thm-separable-closures-exist-and-are-isomorphic-over-the-base`,
  `def-smooth-morphism-schemes`, `def-embedding-dimension-and-regular-local-ring`,
  `def-axiom-of-choice`): all published with `verification.audited`/`verified`;
  each statement was read against the consuming Fact, and the exact quoted text is
  recorded in the 45 blocking citations of the contract file.

## Open obligations and Step-4 mismatches

1. **Pre-splice mismatch (for Step 4, mechanical).** `plan-spec.json` pages 887/888
   already carry the 12+3 item IDs with matching `deps`, but their item objects lack
   `statement`, `sources` locators, `dependency_level`, `strategy` and `origin`, and
   the B-page `cex` title differs. `splice-plan --run frontier-38-owner-30 --verify`
   reports "same ids, 15 item object(s) changed — re-splice to propagate" for this
   pair. Nothing is unresolved mathematically; Step 4 should propagate the batch-25
   manifest entries.
2. **3a §5 finding rechecked (owner decision, unchanged).** The rigidity/centralizer
   prerequisites of Milne 12.29/12.36–12.41 used by the planned (not selected,
   not scaffolded) pairs 891/893 are still absent from the published library and
   from every current item; a fresh `grep` over `items/` finds "multiplicative type"
   only in this pair's files and no rigidity/centralizer-of-torus item anywhere.
   Nothing in this run consumes them, so no local addition was made: adding them
   would be an owner scope decision for a future packet. The 3a recommended remedy
   (`lem-rigidity-of-multiplicative-type-groups` on A887, or local items on 891/893)
   stands unchanged.
3. **Environment note (unchanged).** `proof-layout` with the default app loader
   still fails on raw JSX in the sibling checkout before it can scan content; the
   recorded read-only shim (`PRESTIGE_APP_DIR=/tmp/ag885-render-app`) was used for
   the mandatory renderer scan. This is an environment/loader matter for the
   orchestrator, not a content defect.
4. **No escalated items.** All 15 item decisions are `accept`/`repaired` with
   confidence 1; no supplier ID, consumer ID or proof step is left as an open
   obligation.

## Handoff statement

Completed: the 15 owned items (12 A + 3 B) audited and repaired as tabled above; both
library pages authored; the batch proof-contract file authored and green under the
strict, boundary, citation and smoke gates; decisions recorded. Checks actually run
are listed in the table above. Added suppliers: none (no new IDs were created; the
page ceiling is untouched at 12 + 3 items). Published concerns: the 3a §5
rigidity/centralizer prerequisite gap for future 891/893 consumers (owner decision,
exact evidence above); no defect in any consumed published supplier was found. Open
obligations: the Step-4 plan propagation of the item objects (mechanical), the owner
decision on the 3a §5 scope question, and the loader environment note. This is a
local author report, not an independent audit; Steps 5–8 follow.

Final verification pass on the frozen state (no writes): all 15 item decisions
reported closed at their current hashes by `itemDecision` in
`tools/step3-decisions.mjs` (7 `accept`, 8 `repaired`, every one `confidence 1`),
the strict proof contract reports `0 error(s), 0 warning(s),
15/15 item(s) checked`, the artifact accountant reports 19/19 promised carriers on
disk, and the batched `proof-layout` run reports 15 items, 27 steps, 0 defects.
