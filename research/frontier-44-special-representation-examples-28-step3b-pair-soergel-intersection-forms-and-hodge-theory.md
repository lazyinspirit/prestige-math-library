# Step 3b — scaffold audit and authoring: `soergel-intersection-forms-and-hodge-theory`

Run `frontier-44-special-representation-examples-28`, batch 12 (orders
1542/1543), role `alpha-high`, label
`step3b-pair-soergel-intersection-forms-and-hodge-theory-2cac1f631e62161c`.
A page `soergel-intersection-forms-and-hodge-theory` (28 new items) and B page
`soergel-intersection-forms-and-hodge-theory-examples` (5 new items), category
`special-topics-in-representation-theory`. Report opened at entry 2026-10-10
before any edit. Only this pair is owned; sibling pairs in shared carriers are
preserved.

## Owned IDs and open obligations at entry

A-page items (28, all authored here), in dependency order:

- L0 `def-real-type-a-soergel-category-and-scalar-extension`
- L0 `lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis`
- L1 `def-reduced-soergel-module-and-dominant-lefschetz-operator`
- L1 `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
- L2 `def-invariant-intersection-form-on-a-bott-samelson-bimodule`
- L3 `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category`
- L3 `def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs`
- L3 `lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons`
- L4 `def-the-deformed-lefschetz-operator-on-b-x-b-s`
- L4 `lem-hard-lefschetz-implies-primitive-decomposition`
- L4 `lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate`
- L4 `lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category`
- L5 `def-local-intersection-form-for-a-soergel-summand`
- L5 `lem-family-signature-constancy-and-the-weak-lefschetz-substitute`
- L5 `lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis`
- L5 `lem-tensoring-with-b-s-preserves-hodge-riemann-signs`
- L5 `thm-positive-rouquier-complexes-are-delta-split`
- L6 `lem-hodge-riemann-for-large-positive-deformation`
- L6 `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms`
- L6 `lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands`
- L6 `thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction`
- L6 `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character`
- L7 `lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity`
- L7 `thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs`
- L8 `thm-deformed-hard-lefschetz-for-b-x-b-s`
- L9 `thm-hodge-riemann-for-indecomposable-soergel-bimodules`
- L10 `thm-soergels-character-conjecture`
- L11 `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants`

B-page items (5, all authored here):

- L4 `cex-hard-lefschetz-fails-for-a-non-dominant-degree-two-element`
- L11 `ex-the-rank-one-soergel-bimodule-its-intersection-form-and-hard-lefschetz`
- L11 `ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule`
- L11 `ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition`
- L12 `ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three`

Deliverables: 33 item files, `library/special-topics-in-representation-theory/soergel-intersection-forms-and-hodge-theory.md`,
`library/special-topics-in-representation-theory/soergel-intersection-forms-and-hodge-theory-examples.md`,
`research/frontier-44-special-representation-examples-28-batch-12.proof-contracts.json`,
33 current item decisions, and this report.

Open obligations at entry:

1. All 33 item files are absent (`items/` contains none of the IDs); the
   scaffolds live in `research/…-batch-12.pages.json`, amended by the owner
   repair `research/…-owner-soergel-repair.md`. Author every item; the three
   owner-added suppliers (`lem-hecke-trace-bilinear-form-…`,
   `lem-invariant-forms-on-soergel-bimodules-…`,
   `lem-radical-minimal-complexes-…`) are original scaffold IDs requiring
   ordinary item decisions.
2. Direct in-run prerequisite pairs to inspect while unfinished: none (Step 3a
   report, re-verified: every out-of-run supplier is a published `items/` file).
3. Choice: the pair is choice-free; verify per item against actual suppliers.
4. Coordinate-root convention: this page fixes $\alpha_i=\beta_i=x_i-x_{i+1}$
   (owner repair, foundation review); the published diagrammatic page uses the
   alternating balanced roots. Keep the two apart in every authored item.

## Checkpoint log

### 0. L0 definitions and the Hecke trace lemma — authored

- `def-real-type-a-soergel-category-and-scalar-extension` (definition, precheck
  n/a, proof-layout clean): real ring $S=\mathbb R[x_1,\ldots,x_n]$, coordinate
  normalization $\alpha_i=\beta_i$, $B_i^R=S\otimes_{S^{s_i}}S(1)$, real
  category, dominant chamber.
- `lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis`
  (induction, 10 steps, precheck PASS, proof-layout 0 defects): $\varepsilon$,
  $(-,-)=\varepsilon(a(-)\cdot)$, standard orthonormality via a local induction
  on $\ell(u)$, adjoints, KL values $\sum_uh_{u,x}h_{u,y}$ (no conjugation).
- Checks: `precheck` PASS; `proof-layout` 0 defects.

### 1. L1 definition and comparison lemma — authored

- `def-reduced-soergel-module-and-dominant-lefschetz-operator` (definition,
  precheck n/a): reduction $\overline M=M/MS_+$, graded dimension, $L_0=\rho\cdot(-)$,
  descent detection $(w\rho)(\alpha_s^\vee)>0\iff sw>w$ proved in the Remark.
- `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
  (direct, 11 steps, precheck PASS, proof-layout 0 defects): locality of
  $\mathrm{End}^0(B_w)$ with residue $\mathbb Q$, base change, Krull-Schmidt
  labels/shifts, character/reduction/Hom compatibility, ascent no-shift
  decomposition $B_xB_s=B_{xs}\oplus\bigoplus B_y^{a_y}$ via the Hom-formula
  vanishing, descent case $B_xB_s=B_x(1)\oplus B_x(-1)$.
- Local repair recorded: the comparison lemma's deps were extended with three
  published suppliers (`def-type-a-standard-graph-bimodules-support-filtrations-and-character`,
  `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis`,
  `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization`) needed by
  the actual proof route; the manifest row is updated to match at handoff.

### 2. Items L2-L5 and the delta-split repair — authored

- L2 `def-invariant-intersection-form-on-a-bott-samelson-bimodule` (definition,
  precheck n/a).
- L3 `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category`,
  `def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs` (definitions),
  `lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons` (direct, PASS;
  deps extended by the two published Rouquier items used by its actual route).
- L4 `def-the-deformed-lefschetz-operator-on-b-x-b-s` (definition),
  `lem-hard-lefschetz-implies-primitive-decomposition` (direct, PASS),
  `lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate`
  (direct, PASS after adopting the canonical step order),
  `lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category`
  (direct, PASS), B `cex-hard-lefschetz-fails-for-a-non-dominant-degree-two-element`
  (direct, PASS).
- L5 `def-local-intersection-form-for-a-soergel-summand` (definition),
  `lem-family-signature-constancy-and-the-weak-lefschetz-substitute` (direct, PASS),
  `lem-right-descent-soergel-bimodules-descend-to-simple-invariants-...`
  (direct, PASS), `lem-tensoring-with-b-s-preserves-hodge-riemann-signs` (direct,
  PASS after canonical reorder), `thm-positive-rouquier-complexes-are-delta-split`
  (induction; [ih] and the discharge tag added, then canonical reorder, PASS).
- L6 so far `lem-hodge-riemann-for-large-positive-deformation` (direct, PASS after
  canonical reorder), `thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character`
  (direct, PASS), `lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands`
  (direct, PASS); `lem-local-intersection-forms-embed-in-primitive-lefschetz-forms`
  moved from L6 to L7 (it consumes the detection theorem) with item and manifest
  rows updated (level 7).

### 3. L6-L10 authored

- L6 `thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction`
  (induction, 10 steps, PASS; deps extended by the classical KL-normalization,
  Kazhdan-Lusztig basis, Hecke-algebra, character-multiplicativity,
  split-Grothendieck, opposite-Rouquier and Gaussian-elimination suppliers).
- L7 `lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity`
  (direct, PASS), `thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs`
  (induction, PASS).
- L8 `thm-deformed-hard-lefschetz-for-b-x-b-s` (direct, three cases, PASS).
- L9 `thm-hodge-riemann-for-indecomposable-soergel-bimodules` (induction over
  Bruhat ideals, PASS).
- L10 `thm-soergels-character-conjecture` (direct, PASS).
- Manifest deps/levels synced for every authored item; run-wide
  `item-dependency-levels check --run` reports 862 items across 100 pages with
  no discrepancy (maximum level 47).
- Checks so far: batched precheck PASS on all 29 authored items (definitions
  not-applicable); batched `proof-layout.mjs` over the first 23 items reported
  106 steps, 0 defects.

Open obligations after this checkpoint: the positivity corollary (L11), the four
B-page examples, both page files, the batch-12 proof-contracts file, the 33 item
decisions, and the final batched gate battery recorded in the handoff.

### 4. L11, the examples page, contracts, decisions and the final battery

- L11 `cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants`
  (direct, PASS) and the four B-page examples (`ex-the-rank-one-…`,
  `ex-the-coinvariant-algebra-of-s-three-…`, `ex-the-rank-two-…`,
  `ex-hard-lefschetz-and-hodge-riemann-relations-…`) and the counterexample
  `cex-hard-lefschetz-fails-for-a-non-dominant-degree-two-element` are authored;
  both page files exist with the 28 A items and 5 B items in manifest order.
- Proof contracts: scope is the 26 proof-bearing items (the 7 definitions are
  excluded, frontier-33-batch-3 convention). Citations and derivations were
  generated with `tools/regen-contract-entries.mjs` from the current item text,
  and all 208 boundary rows are hand-written for this pair. `proof-contract
  --strict` reports 0 errors and one non-fatal `shotgun-bracket` warning on
  `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`;
  `boundary-audit --fail-on-contradicted --fail-on-template` reports no template
  cluster and no contradicted disposition; `citation-fidelity
  --fail-on-missing-quote` reports no missing quote and no widening candidate.
- Audit repairs made in this session (14 items, all re-`precheck`-clean):
  removed the unused fact F5 (Hecke trace) and F3 (family signature) with their
  suppliers; added the cited suppliers to `deps` for
  `thm-minimal-…-linear-…`, `cor-positivity-…`, `cex-…`,
  `lem-invariant-forms-…`, `thm-minimal-…-carry-…`,
  `thm-hodge-riemann-for-indecomposable-…` (and the two dependency extensions
  recorded in checkpoints 1–3); corrected the phantom step references in
  `lem-invariant-forms-…` (steps 1.2 and 2.2, not 1.2-6.1),
  `thm-soergels-character-conjecture` (1.1 and 2.1, not 1.1-1.2),
  `ex-the-rank-one-…` and `lem-hodge-riemann-for-large-positive-deformation`
  (replaced by self-contained derivations and supplier citations); added the
  empty-expression case m=0 to `lem-the-lefschetz-operator-factors-…` step 2.1;
  restored the standard `## Facts & Assumptions` heading in the counterexample;
  renamed the applied `\iota` maps in `lem-local-intersection-forms-embed-…`
  (`\mathrm{ev}`) and `thm-minimal-…-carry-…` (`\jmath`); and restricted the
  ideal hypothesis of `thm-hodge-riemann-for-indecomposable-…` to ideals
  containing the length-two initial ideal X_0 that the induction actually
  starts from (the general-ideal reading was not proved by the induction as
  written).
- Item decisions: 33 recorded via `tools/step3-decisions.mjs record-item`
  (19 `accept`, 14 `repaired` with defect labels dependency / proof / boundary /
  contract / notation / statement). `check --phase final` shows no owned item
  open; the run-wide check still exits 1 only on other pairs.

## Final handoff

**Completed IDs (33).** A page: `def-real-type-a-soergel-category-and-scalar-extension`,
`lem-hecke-trace-bilinear-form-and-its-values-on-the-kazhdan-lusztig-basis`,
`def-reduced-soergel-module-and-dominant-lefschetz-operator`,
`lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`,
`def-invariant-intersection-form-on-a-bott-samelson-bimodule`,
`def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs`,
`def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category`,
`lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons`,
`lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate`,
`lem-hard-lefschetz-implies-primitive-decomposition`,
`def-the-deformed-lefschetz-operator-on-b-x-b-s`,
`lem-radical-minimal-complexes-and-perverse-filtrations-in-the-soergel-category`,
`thm-positive-rouquier-complexes-are-delta-split`,
`lem-family-signature-constancy-and-the-weak-lefschetz-substitute`,
`def-local-intersection-form-for-a-soergel-summand`,
`lem-tensoring-with-b-s-preserves-hodge-riemann-signs`,
`lem-right-descent-soergel-bimodules-descend-to-simple-invariants-under-the-character-hypothesis`,
`thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction`,
`lem-undeformed-lefschetz-and-hodge-riemann-restrict-to-soergel-summands`,
`thm-nondegenerate-local-intersection-forms-detect-the-next-soergel-character`,
`lem-local-intersection-forms-embed-in-primitive-lefschetz-forms`,
`lem-hodge-riemann-for-large-positive-deformation`,
`thm-minimal-positive-rouquier-complexes-carry-the-induced-hodge-riemann-signs`,
`lem-the-minimal-rouquier-differential-supplies-weak-lefschetz-injectivity`,
`thm-deformed-hard-lefschetz-for-b-x-b-s`,
`thm-hodge-riemann-for-indecomposable-soergel-bimodules`,
`thm-soergels-character-conjecture`,
`cor-positivity-of-kazhdan-lusztig-polynomials-and-structure-constants`.
B page: `cex-hard-lefschetz-fails-for-a-non-dominant-degree-two-element`,
`ex-the-rank-one-soergel-bimodule-its-intersection-form-and-hard-lefschetz`,
`ex-the-coinvariant-algebra-of-s-three-as-the-longest-soergel-bimodule`,
`ex-the-rank-two-bott-samelson-bimodule-and-its-character-decomposition`,
`ex-hard-lefschetz-and-hodge-riemann-relations-for-the-coinvariant-algebra-of-s-three`.
Both page files, the batch proof-contracts file and the 33 decisions are on disk.

**Checks run (exact results, this session).**

| gate | result |
|---|---|
| `precheck` explicit path (33 files) | 26 checked, 0 failing (7 definitions not-applicable) |
| `proof-layout.mjs` (33 files, one command) | 162 steps, 0 defects |
| `rendercheck` (2 page files) | OK |
| `prosecheck` (2 page files) | OK, no positional contradiction |
| `pathcheck` (repo) | 18 pathway files, 3 errors and 46 warnings, all on `library/abstract-algebra/_pathway.md` and `library/combinatorics/_pathway.md` — unrelated page-pathway debt, not this pair |
| `extcheck` | 27287 items, 0 recorded-not-proved, 0 resting on them |
| `content-policy` (batch manifest) | 33 scoped items, 0 errors, 0 warnings |
| `coverage-checklist --require-destination` | 2 pages, 74 harvested results, 0 errors, 0 warnings |
| `proof-contract --strict` | 0 errors, 1 warning (`shotgun-bracket`, non-fatal) |
| `boundary-audit --fail-on-contradicted --fail-on-template` | 208 rows, no template cluster, no contradicted disposition |
| `citation-fidelity --fail-on-missing-quote` | no missing quote, no widening candidate |
| `risk-report` | 0 errors, 26 items routed by keyword heuristic |
| `manifest-deps` | 33 items, 0 errors |
| `manifest-integrity --run` | 100 pages owed, 100 in the manifests, no scope drift |
| `depcheck --items-file` (33 ids) | OK, 0 warnings after the dep repairs |
| `depsource --items-file --run` | 33/33 consumer coverage, 0 unresolved |
| `item-dependency-levels check --run` | no error on any owned item; run-wide exit 1 on twenty sibling items of other pairs |
| `validate-plan research/plan-spec.json --run` | exit 1 run-wide (947 `redundant-prereq` on 54 pages, 4 `undeclared-prereq` on other pages); the only messages on this pair are inherited `redundant-prereq` advisories from the plan's own `requires` list |
| `source-fetch-check --coverage` | 8/8 sources fetch-verified and resolved |
| `frontier-dependency-ledger refresh` (+ `collect`) | batch-12 input `[]` valid; run-wide 50 reviewed batches, 0 unreviewed, 1259 edges, 59 orphan reviews (sibling bookkeeping) |
| `step3-decisions check --phase final` | 0 owned items open; run-wide exit 1 on other pairs |
| `step3-auditor-items certify --run` | exit 1, blocked run-wide by batch 32 / `compact-support-sheaf-calculus`; no owned addition needs certification |
| `proof-contract-coverage --run --contracts` | cannot run: `Missing frontier item thm-klr-pbw-basis-theorem` (another batch's item, not authored yet) |
| `splice-plan --verify` | exit 1 — expected pre-splice state: every batch manifest (including this pair's 28 + 5 items) carries items the plan does not list yet; Step 4 owns the splice |

**Added suppliers.** None by this dispatch. The three owner-added scaffold
suppliers (`lem-hecke-trace-…`, `lem-invariant-forms-…`,
`lem-radical-minimal-…`) are original scaffold IDs and received ordinary item
decisions above.

**Published concerns.** No confirmed defect in any published supplier of this
pair. Observed unrelated debt, left to its owners: the twenty `dependency-level`
rows and the `validate-plan` `undeclared-prereq` rows on other pairs of this
run; the three `_pathway.md` errors above; and one outgoing page edge
(batch 13 `projective-functors-and-the-soergel-functor-in-category-o` requires
this pair's A page) which is that consumer's ledger row.

**Open obligations.**
1. **Pre-splice plan mismatch (owner-held for Step 4).** `splice-plan --verify`
   exits 1: the plan lists 0 items for both pages while the manifests carry
   28 and 5. Not repaired here; the dispatch is Step 3b, not the splice.
2. **`proof-contract-coverage` cannot be evaluated** until the sibling item
   `thm-klr-pbw-basis-theorem` exists; the owned 26-item contract scope is
   complete and strict-clean on its own.
3. **Auditor certification** is blocked run-wide by the batch-32 pair
   `compact-support-sheaf-calculus`; no owned item is an addition requiring
   certification.
4. **Non-fatal warning:** `shotgun-bracket` on
   `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`
   (step 4.2 cites 4 of 7 facts while two narrative steps cite none); the proof
   is complete, and this is a citation-distribution style signal for the
   independent audit.
5. **Substantive repairs for Step 5 to scrutinize:** the statement tightening of
   `thm-hodge-riemann-for-indecomposable-soergel-bimodules` (X ⊇ X_0), the m=0
   clause of `lem-the-lefschetz-operator-factors-through-deleted-bott-samelsons`,
   and the removal of the two unused facts.

**Honesty notes.** This pair was authored across two sessions of the same
dispatch; after the mid-dispatch compaction I re-ran every gate on the current
files and re-read the repaired items, their Facts blocks and the affected
supplier statements, but I did not independently re-derive the internal algebra
of all 162 steps — that is the Step 5–7 audit's obligation. The `risk-report`
rows are keyword-routed, not a mathematical read; the two CRITICAL rows are the
explicit S_3 computations, whose statements and witnesses I did read.
