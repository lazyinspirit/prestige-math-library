# Step 3b report — pair `bmo-john-nirenberg-and-h1-duality`

Run `frontier-39-analysis-30`; stage `3b-author`; role alpha-high; label
`step3b-pair-bmo-john-nirenberg-and-h1-duality-35be56ef1cffc92f`.
A page `bmo-john-nirenberg-and-h1-duality` (order 458.02609), B page
`bmo-john-nirenberg-and-h1-duality-examples` (order 458.02610), both
`fourier-analysis`, batch 6 (this pair occupies batch 6 alone; the batch
manifest and coverage file are pair-local). Current inventory: the 20 A-entry
items and 6 B-entry items listed in
`research/frontier-39-analysis-30-batch-6.pages.json`.

## Entry state and open obligations (recorded at entry)

- Inputs read: CLAUDE.md, SCHEMA.md, `briefs/group-author.md`, control design
  FR-10 of `research/plan-fourier-analysis-track.md`, batch-6 manifest, notes,
  coverage, cross-batch ledger, Step 3a report and receipt `sufficient`, plan
  rows 458.02609/.02610, and the batch-5 FR-9 scaffold for the in-run suppliers.
- Scope decision: Step 3a review `sufficient` is on disk and hash-current for
  the unchanged statements; no statement, title, kind or ID is changed by this
  authoring pass, so the scope hash is preserved.
- Open obligation O1 (suppliers): seven direct suppliers are in-run batch-5
  (FR-9) items, scaffolded but not yet authored at entry:
  `def-hp-atom-with-moment-order`, `def-grand-maximal-test-class-of-order-n`,
  `def-real-hardy-space-by-a-radial-maximal-function`,
  `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`,
  `thm-maximal-function-characterisations-of-real-hardy-spaces`,
  `thm-atomic-characterisation-of-real-hp`,
  `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`. Consuming
  items and steps are flagged in the item checkpoints below; the consumer items
  are authored anyway and their decisions are escalated if the supplier is
  still unauthored at review time.
- Open obligation O2: initial item files, library pages, batch-6 proof
  contracts and this report do not yet exist at entry; all are authored below.
- Item order used: the dispatch order (ascending `dependency_level`, ties by
  page order and ID).

## Item checkpoints (dispatch order; claim, conventions, sources, checks)

All item bodies are authored in full (statement, Facts & Assumptions with
labelled sources and exact locators, proof/verification with `[tags]`, page
registration). "contract" below means the batch-6 proof contract
`research/frontier-39-analysis-30-batch-6.proof-contracts.json`.

### Level 0

- `def-bmo-seminorm-and-quotient-by-constants` (A) — cube BMO seminorm, the
  mean as optimal constant up to factor 2, the identification of the
  zero-seminorm class with the constants, and the quotient BMO/C; sources
  Williams Def. 7.1, Kinnunen Def. 3.1, Tao Def. 3.1/Prop. 3.2. No proof
  section; contract has eight boundary rows and the zero/iff rows are checked
  against the definition. Decision `accept`.
- `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators` (A) —
  H and R_j are CZ operators with kernels 1/(pi x), c_n x_j/|x|^{n+1}, norm
  at most 1, off-support representation, standard 1-Holder constants 2/pi and
  c_n 2^{n+1}(3n+4); sources Williams Sec. 3.1/Def. 3.1, Tao Sec. 3. Proof
  establishes annular bounds, Holder bounds, L^2 bound and skew-adjointness,
  the off-support representation via [F5]-[F6], and Hormander's condition via
  `lem-holder-cz-kernels-satisfy-hormander-cancellation`. Repair recorded
  below (missing dep, choice propagation). Decision `repaired`.

### Level 1

- `cor-linfinity-embeds-continuously-into-bmo` (A) — ||b||_BMO <=
  2||b||_infinity and injectivity of L^infinity/C -> BMO/C; strictness is left
  to the B page deliberately. Two steps, choice-free. Decision `accept`.
- `lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically` (A) —
  |b_Q - b_R| <= C_n(1+log_2(l(R)/l(Q)))||b||_BMO for nested cubes, with
  C_n = 2^{n+1}+4^n via concentric intermediate cubes. Decision `accept`.
- `lem-bmo-functions-pair-uniformly-with-hone-atoms` (A) — for a
  (1,infinity,0)-atom a and b in BMO, |int a b| <= ||b||_BMO, independently of
  atom and cube; three steps (absolute convergence, mean cancellation,
  uniformity). Decision `accept`.
- `lem-john-nirenberg-stopping-cubes-have-geometric-decay` (A) — recursive
  global-dyadic stopping at height s > ||b||_BMO: geometric measure decay
  (||b||/s)^k|Q|, the sharp height bound |b-b_Q| <= k 2^n s a.e. off the
  level-k union (statement repaired in Step 3a to this sharp form; a fortiori
  2^{nk}s retained), and null exceptional sets. Contract flags Countable
  Choice in steps 2.1/3.2, emptiness and zero-seminorm cases. Step 4.1 now
  cites step 2.1 (the recursion) instead of the nonexistent step 1.2.
  Decision `repaired`.
- `lem-range-truncations-preserve-bmo-seminorm` (A) — one-sided truncations
  cost 3/2, two-sided 9/4, componentwise complex truncation 9/2; choice-free.
  These are exactly the constants consumed by the L^infinity-to-BMO theorem.
  Decision `accept`.
- `thm-calderon-zygmund-operators-map-linfinity-to-bmo` (A) — CZ operators
  with standard delta-Holder kernels map L^infinity to BMO/C, preserving the
  L^2 class, with ||Tb||_BMO <= C_{n,delta}(A_2'+B)||b||_infinity; sources
  Williams Prop. 7.7, Tao Prop. 3.4. Steps 1.1-2.2 give the local/far
  decomposition and nested constancy; 3.1-3.2 the oscillation bound and
  gluing; 4.1-4.2 the L^2 identification. Countable Choice recorded at
  3.2/4.2; step 3.1 now cites [F8] for the factor-2 optimal-mean bound.
  Decision `accept` (re-recorded after that citation edit).
- `ex-bmo-seminorm-is-unchanged-by-adding-a-constant` (B) — (b+c)_Q = b_Q+c,
  seminorm unchanged, descent to the quotient and the norm property there;
  three verification steps, choice-free. Decision `accept`.
- `rem-one-grid-dyadic-bmo-is-not-identical-to-bmo` (B) — recorded remark of
  Mei (two translated dyadic grids, one grid insufficient); statement is
  quoted, `proved_here: false`, no proof, required `external_dependency`
  recorded; no item depends on it. Decision `accept`.

### Level 2

- `cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo` (A) — H and R_j
  extend boundedly L^infinity -> BMO/C with agreement on L^2; immediate
  application of the level-1 theorem with delta = 1. Decision `accept`.
- `thm-john-nirenberg-exponential-inequality` (A) — for every cube Q and
  level lambda > 0, |{x in Q:|b-b_Q| > lambda}| <= C_n|Q|e^{-c_n lambda/||b||_BMO},
  with the zero-seminorm case null. Repaired in this pass: the old covering
  step claimed a single generation-(k-2) dyadic cube with |Q'| < 16^n|Q|
  contains an arbitrary cube Q, which fails whenever Q straddles a dyadic
  boundary; step 1.2 now covers Q by at most 2^n generation-m dyadic cubes
  Q_j with side S, l(Q) <= S < 2l(Q), and step 2.1 compares b_Q with b_{Q_j}
  through the cube R_j of side 4 sqrt(n) S, giving B_n = 2(8 sqrt(n))^n.
  Steps 1.3/3.1 give the small- and large-level bounds and 4.1 assembles
  C_n = max{2^{2n}, e^{gamma Lambda_n}}, gamma = ln 2/2^{2n+3}. The argument
  was checked against the complete Williams Thm. 7.5 proof (CZ decomposition
  on the fixed cube). Decision `repaired`.
- `ex-logarithm-is-in-bmo-but-not-linfinity` (B) — b(x)=log|x| lies in BMO
  with dimension-only seminorm, yet is unbounded near 0 and not globally
  integrable; reduction to unit cubes with A(xi), regular and singular cases,
  then unboundedness. Verification step 3.1 was separated from step 2.1 so
  the source inventory, paragraph parser and renderer agree. Decision
  `repaired`.

### Level 3

- `cor-bmo-lp-oscillation-norms-are-equivalent` (A) — for 1 <= q < infinity,
  the L^q oscillation norms are equivalent to the BMO seminorm, and BMO is
  contained in L^q_loc; layer cake plus the repaired exponential bound.
  Boundary rows: zero (q-seminorm case), q = 1 endpoint and the excluded
  q = infinity are checked explicitly; Countable Choice inherited from the
  exponential bound. Decision `accept`.
- `lem-ltwo-atoms-have-uniform-hone-quasinorm` (A) — every (1,2)-atom has
  ||a||_{H^1} <= C_n, uniformly in the supporting cube; near/far splitting of
  the grand maximal function with the Hardy-Littlewood bound. Supplier
  reconciliation recorded below (the maximum-function characterisation and
  Borel-measurability suppliers landed). Decision `repaired`.
- `cex-bmo-functions-need-not-be-globally-integrable` (B) — log|x| refutes
  BMO(R^n) subset L^1(R^n); witness integrates to +infinity on the cubes
  C_R, monotone convergence for the full integral. Decision `accept`.

### Level 4

- `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` (A) —
  for mean-zero L^2 functions supported in a cube Q,
  ||f||_{H^1} <= C_n|Q|^{1/2}||f||_{L^2}, via normalisation to a (1,2)-atom
  and homogeneity; zero function handled in step 1.1. Decision `accept`.
- `ex-john-nirenberg-tail-integration` (B) — inserting the exponential bound
  into layer cake recovers the L^q oscillation bound with an explicit finite
  constant; zero-seminorm case discharged in step 3.1. Decision `accept`.

### Level 5 and above (duality chain)

- `lem-finite-atomic-sums-are-dense-in-hone` (A, level 5) — finite atomic
  sums are dense in H^1 via the atomic characterisation and the ell^1-sum
  convergence; exact supplier statements verified after the batch-5 items
  landed (see below). Decision `escalate` (owner-held, see Open obligations).
- `lem-hone-functional-has-compatible-local-ltwo-representatives` (A, level
  5) — Riesz representation on each L^2_0(Q), nested constancy of u_Q-u_R,
  gluing over Q_k = [-k,k]^n to a local representative u unique up to
  constants; Countable Choice in 2.1/4.1. Decision `accept`.
- `lem-linfinity-bmo-functions-dualise-hone-boundedly` (A, level 5) —
  L^infinity cap BMO functions pair boundedly with H^1:
  |int f b| <= C_n||b||_BMO||f||_{H^1}; atomic expansion plus L^1
  completeness and dominated convergence. Decision `escalate` (owner-held).
- `lem-the-dual-representative-has-uniform-bmo-oscillation` (A, level 6) —
  the representative u of the local lemma satisfies
  ||u||_BMO <= C_n||Lambda||; mean oscillation equals |Q|^{-1}int_Q|u_Q| and
  Riesz isometry. Decision `accept`.
- `thm-bmo-defines-a-bounded-functional-on-hone` (A, level 6) — for every b
  in BMO there is a unique bounded Lambda_b on H^1 with Lambda_b(a) = int a b
  on atoms, ||Lambda_b|| <= C_n||b||_BMO, and b -> Lambda_b is linear,
  annihilates constants and takes int g b on finite atomic sums; the
  L^infinity case extends by density, the general case by AC: careful
  truncations, weak-star compactness of the dual ball (ultrafilter lemma,
  Banach-Alaoglu) and a cluster point, then uniqueness by density. Decision
  `escalate` (owner-held).
- `lem-bmo-classes-are-determined-by-their-atom-pairings` (A, level 7) —
  vanishing pairings with all atoms force b constant a.e.; bounded mean-zero
  test functions, monotone convergence of |b-b_Q|^2 truncated, exhaustion by
  cubes, and injectivity on BMO/C. Decision `accept`.
- `thm-real-hone-bmo-duality` (A, level 8) — Phi: BMO/C -> (H^1)^*,
  b -> Lambda_b, is a linear bijection with
  c_n||b||_BMO <= ||Lambda_b|| <= C_n||b||_BMO; injectivity from the atom
  pairing lemma, surjectivity from the local representative and the reverse
  norm bound, density from the finite atomic sums. AC inherited from the
  construction. Decision `accept`.

## Completed IDs

The original 25 owned IDs were authored and registered in the batch-6 manifest/coverage,
pages and the batch-6 proof contract:

`def-bmo-seminorm-and-quotient-by-constants`,
`lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators`,
`cor-linfinity-embeds-continuously-into-bmo`,
`lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically`,
`lem-bmo-functions-pair-uniformly-with-hone-atoms`,
`lem-john-nirenberg-stopping-cubes-have-geometric-decay`,
`lem-range-truncations-preserve-bmo-seminorm`,
`thm-calderon-zygmund-operators-map-linfinity-to-bmo`,
`cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo`,
`thm-john-nirenberg-exponential-inequality`,
`cor-bmo-lp-oscillation-norms-are-equivalent`,
`lem-ltwo-atoms-have-uniform-hone-quasinorm`,
`lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone`,
`lem-finite-atomic-sums-are-dense-in-hone`,
`lem-hone-functional-has-compatible-local-ltwo-representatives`,
`lem-linfinity-bmo-functions-dualise-hone-boundedly`,
`lem-the-dual-representative-has-uniform-bmo-oscillation`,
`thm-bmo-defines-a-bounded-functional-on-hone`,
`lem-bmo-classes-are-determined-by-their-atom-pairings`,
`thm-real-hone-bmo-duality`,
`ex-bmo-seminorm-is-unchanged-by-adding-a-constant`,
`rem-one-grid-dyadic-bmo-is-not-identical-to-bmo`,
`ex-logarithm-is-in-bmo-but-not-linfinity`,
`cex-bmo-functions-need-not-be-globally-integrable`,
`ex-john-nirenberg-tail-integration`.

At the original handoff, the two pages listed the 25 IDs above in dependency
order, with no item, page or pair ID added, renamed or dropped. The later
owner-directed Q4 enrichment adds one B-page item, documented below; it creates
no new prerequisite item or page and changes no A-page item.

## Checks actually run for the original 25-item handoff (before Q4 enrichment)

- `node tools/tsx-run.mjs tools/precheck.mts <23 proof-bearing items>` —
  **23 checked, 0 failing** (definition and remark have no phase body).
- `node tools/proof-layout.mjs <all 25 item paths>` (single batched
  explicit-path run, read-only) — **25 items, 100 steps, 0 defects**.
- `node tools/rendercheck.mjs <both pages>` — clean (KaTeX, delimiters,
  frontmatter).
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-6.proof-contracts.json --strict`
  — **0 errors, 0 warnings, 25/25 items**.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`
  — 0 contradicted candidates, 0 template clusters (170/200 rows are
  `not_applicable`, each with an item-specific reason; the other 30 are
  `checked` with step-anchored evidence).
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` — 117
  citations over 25 items, no missing quotes, no widening candidates.
- `node tools/finite-smoke.mjs ...` — 0 errors (no obligations declared).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-6.pages.json`
  — 25 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs ...coverage.json --require-destination`
  — 2 pages, 51 harvested results, 0 errors.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-6.pages.json`
  — 25 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — no error on any batch-6 item (three unrelated sibling pairs are flagged
  at level of the whole run; none is in this pair).
- `node tools/validate-plan.mjs research/plan-spec.json` — OK: acyclic and
  consistent declared page order; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids for this pair; no pre-splice plan
  mismatch to report to Step 4.
- Decisions: 25 receipts recorded with `tools/step3-decisions.mjs
  record-item` (17 `accept`, 5 `repaired`, 3 `escalate`; confidence 1 for all
  non-escalations, examined dependency lists included). No `--owner` flag and
  no judge/audit stamps were used.

## Repairs, dependency inputs and supplier reconciliation

1. **Hilbert/Riesz lemma.** Fact [F3] cited
   `lem-holder-cz-kernels-satisfy-hormander-cancellation`, which was missing
   from `deps`; added to frontmatter and manifest. The standing Countable
   Choice hypothesis [F8] was uncited; it is now cited at steps 1.1 and 1.2
   where the CC-state published Hilbert and Riesz theories [F1]/[F2] are
   inherited (choice propagation), which also cleared the strict contract's
   uncited-fact error.
2. **(1,2)-atom quasinorm lemma.** Facts [F1]/[F2] cited
   `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`
   and `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`
   without declaring them; both added to `deps` and manifest.
3. **Stopping-cube lemma.** Step 4.1 cited "step 1.2", which does not exist
   in the proof; corrected to step 2.1 (the recursion).
4. **John-Nirenberg theorem.** The covering step was mathematically invalid
   for cubes straddling dyadic boundaries (no single dyadic cube of volume
   < 16^n|Q| need contain Q). Replaced by the 2^n-cell dyadic covering and
   the mean-comparison cube R_j; constants recomputed; cross-checked against
   the complete proof of Williams Thm. 7.5, which performs the CZ
   decomposition on the fixed cube. The canonical precheck step numbering is
   used (1.1, 1.2, 1.3, 2.1, 3.1, 4.1).
5. **Logarithm example.** Verification step 3.1 was merged with 2.1; split
   onto its own paragraph (proof formatting).
6. **Calderon-Zygmund L^infinity theorem.** Step 3.1 used the factor-2
   optimal-mean bound of the definition without citing it; [F8] added to its
   inputs (this also removed the only remaining `shotgun-bracket` warning,
   leaving the contract at 0 warnings).
7. **Boundary rows.** 24 rows were corrected from templated
   `not_applicable` to item-specific dispositions: `checked` zero-seminorm
   and zero-function cases (definition of BMO, exponential theorem, L^q
   equivalence, tail-integration example, mean-zero embedding, stopping
   lemma), the q = 1 endpoint and q = infinity exclusion for the L^q
   equivalence, and `checked` nonempty-choice rows naming the exact step
   where Countable Choice or AC is inherited or spent for the 15
   choice-using items.
8. **Suppliers reconciled.** The direct in-run suppliers that were
   unfinished at entry have now been authored by the batch-5 pair and were
   re-checked against the actual uses:
   - `def-grand-maximal-test-class-of-order-n`,
     `def-real-hardy-space-by-a-radial-maximal-function`,
     `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`,
     `thm-maximal-function-characterisations-of-real-hardy-spaces` — used by
     `lem-ltwo-atoms-have-uniform-hone-quasinorm` ([F1], [F4], steps 1.1,
     4.1) and `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone`
     ([F1], steps 1.1-2.1); statements match the recorded facts (the
     pointwise M^0 <= C M_N direction and Borel measurability are exactly
     the supplier's display and its measurability clause), and exact
     citation quotes were regenerated.
   - `thm-atomic-characterisation-of-real-hp` (p = 1, s = 0 case) and
     `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions` —
     used by `lem-finite-atomic-sums-are-dense-in-hone` ([F1] step 1.1,
     [F2] step 2.1), `lem-linfinity-bmo-functions-dualise-hone-boundedly`
     ([F1] step 1.1) and `thm-bmo-defines-a-bounded-functional-on-hone`
     ([F3] steps 1.1 and 3.1). The characterisation's statement (ell^1
     coefficients, S'-convergence, H^1-quasi-norm convergence, norm
     equivalence) and the ell^p-sum lemma's tail bound match those facts
     verbatim; the consumers' decisions were recorded `escalate` while the
     two files were absent and the strict contract now has 0 errors.

## Published concerns

None confirmed in published content. All repaired items are `status: draft`
items of this run; no published item was edited. The batch-5 sibling pair
`real-hardy-spaces-maximal-functions-and-atoms` is still being written and
was only read, never edited. The published items used as suppliers
(`lem-holder-cz-kernels-satisfy-hormander-cancellation`,
`lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`, and the
Fubini/Plancherel/polar-coordinate suppliers) were read for their exact
statements; no defect was observed, so nothing is reported as suspicion or
confirmed debt.

## Cross-batch dependency input

`research/frontier-39-analysis-30-batch-6.cross-batch-dependencies.json` was
refreshed for the current edges: the four dependency additions made in this
pass that cross from batch 6 into batch 5 were added as `verified` rows with
their exact use and location
(`lem-ltwo-atoms-have-uniform-hone-quasinorm` ->
`def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`,
`lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone` ->
`def-real-hardy-space-by-a-radial-maximal-function`,
`lem-finite-atomic-sums-are-dense-in-hone` ->
`def-real-hardy-space-by-a-radial-maximal-function`,
`thm-bmo-defines-a-bounded-functional-on-hone` ->
`thm-atomic-characterisation-of-real-hp`), giving 18 rows. The unified ledger
was updated with
`node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
(all 30 batches reviewed, no unreviewed batches, no orphaned reviews for this
input); sibling rows were preserved.

## Open obligations at handoff

1. **Owner decision: accept three items; receipt deferred for stable hashes.** For
   `lem-finite-atomic-sums-are-dense-in-hone`,
   `lem-linfinity-bmo-functions-dualise-hone-boundedly` and
   `thm-bmo-defines-a-bounded-functional-on-hone`, the independent review
   confirmed the consumers' proofs against the now-landed suppliers
   `thm-atomic-characterisation-of-real-hp` and
   `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`. Both files
   landed at 2026-10-05 08:09-08:11 (+1100); the strict batch-6 contract is
   clean. Owner disposition is `accept` for all three, with no mathematical
   repair needed. Batch 5 is now quiescent, and owner `repaired` receipts are
   recorded against the settled dependency hashes (`e58778a6…`, `1629af3b…`,
   `62f9bbc1…`); the final run check will recheck transitive freshness.
2. **Concurrent-input churn.** Batch 5 kept writing supplier files while
   this report was produced, and the transitive item hashes of the duality
   items moved under the recorded decisions several times; the 22
   non-escalated decisions were re-recorded after the suppliers landed and
   are current as of the last check (only the three owner-held escalations
   remain listed, with reason "changed inputs require a current owner
   decision"). If batch 5 writes again, those hashes move once more and the
   step-3 recheck loop should re-record on the settled inputs; this is input
   churn outside this pair, not an unresolved mathematical obligation.
3. **Scope and Step 4.** The pair scope review is `sufficient` and current
   (statements/titles/ids unchanged by this pass; the Step 3a statement
   repair of the stopping lemma was already covered by the refreshed scope
   receipt). No shared plan/prose amendment and no pre-splice plan mismatch
   was found, so Step 4 has no amendment request from this pair.
4. **Reviewed warning.** The single `shotgun-bracket` warning was resolved
   by the [F8] citation in step 3.1 of the CZ theorem; the contract is now
   clean. No other warnings remain.


## Owner-directed FR-10 enrichment — Tao Exercise Q4

Following the group-d scope audit, the pending Batch-7 deferral for TaoA Exercise Q4 was preserved because its proof is a compact local argument using only the BMO definition and elementary bump estimates. The single new B-page example `ex-lacunary-exponential-sums-belong-to-bmo` proves the adapted-bump local L2 estimate and the BMO bound by splitting at `2^n = |I|^{-1}`. It is registered in the FR-10 manifest, companion page, coverage, and proof contract, and the FR-10 design inventory now lists the example. The B7 coverage row continues to defer the claim to FR-10 and names the realized item. No pair or A-page item was added. The original Step-3a scope report predates this owner-directed enrichment; its scope receipt and the new item's Step-3 receipts remain for owner review. Focused proof-layout was run for the new item only.


### Current focused checks for the Q4 enrichment (2026-10-05)

- `node tools/proof-layout.mjs items/ex-lacunary-exponential-sums-belong-to-bmo.md` — 1 item, 3 steps, 0 defects.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-6.proof-contracts.json --strict --items ex-lacunary-exponential-sums-belong-to-bmo` — 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-6.pages.json` — 26 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-6.coverage.json --require-destination` — 2 pages, 52 harvested results, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs` on both FR-10 pages — 2 files clean.
- Owner scope and Step-3 receipts for the new item remain pending; see the scope addendum above.
