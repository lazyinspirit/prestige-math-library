# Batch 2 — authored-content review (5a-f)

Run `phase-2-next-18`, group `f`, batch `2` (scope
`research/phase-2-next-18-step5-scope-2.json`: 60 items, 4 pages). This is the
dispatched Step-5a direct group adjudication of the authored mathematics and
pages — not a publication, an independent judge pass, or a whole-closure
certificate.

Decisions: 64 obligations — **62 accepted, 2 repaired, 0 escalated**
(`research/phase-2-next-18-alpha-f-5a-decisions.json`). No item, page, pair or
dependency was added or removed; no published content was touched. Two
draft-item defects were recorded in the append-only defect ledger
(`research/defect-ledger.jsonl`) and repaired locally. 43 owned HIGH/CRITICAL
items carry complete `risk_review` dispositions in
`research/phase-2-next-18-batch-2.proof-contracts.json`.

## Scope and method

Read `CLAUDE.md`, `README.md`, `SCHEMA.md` (forward-reference rule), the
dispatch briefs, `research/phase-2-next-18-batch-2.{pages,proof-contracts,
cross-batch-dependencies}.json`, the batch Step-1 notes, both A/B page pairs,
all 60 authored items, and the published suppliers each argument actually
consumes (`def-measure-kernel-and-probability-kernel`,
`def-composition-of-probability-kernels`,
`lem-kernel-composition-is-well-defined-and-associative`,
`lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined`,
`def-premeasure-on-an-algebra`, `thm-caratheodory-extension-theorem`,
`def-multivariate-normal-law`,
`lem-characteristic-function-of-a-multivariate-normal-law`,
`thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`,
`cor-canonical-process-realizes-consistent-finite-dimensional-laws`,
`def-sigma-algebra-at-a-stopping-time`,
`lem-stopped-random-variable-is-measurable-at-the-stopping-time`,
`def-law-modification-and-indistinguishability-of-processes`,
`def-martingale-submartingale-and-supermartingale`, and the standard-Borel
disintegration pair cited by the splice lemma). Every one of those suppliers is
`status: published` and states what the item claims of it. The Step-3b report
and the group scope decisions were used as navigation only; the current authored
text was re-read and judged on its own.

Method: for every item I re-derived the numbered steps against the labelled
facts, checked the cited hypothesis of each fact (including the nonempty-product
hypothesis of the cylinder-premeasure lemma and the completeness hypothesis of
the continuity criterion), and checked the boundary/empty/degenerate cases the
item claims (empty and full events, zero and one kernels, `n = 0`, `m = 0`,
repeated and zero times, variance-zero laws, `D = empty`, `D = E`, `S = empty`,
`c = 0`, `d = 1`). No Step-3 scaffold-audit work was repeated.

## Item outcomes

All 60 items are sound as authored apart from two local defects (below).
Load-bearing points verified, by group:

**Markov kernels and chains (22 A items).** The indicator-to-bounded-function
extension (`lem-bounded-function-form-of-the-markov-property`) was checked in
both directions, including the DCT step under each probability measure
`K(x,.)` and the signed subtraction that identifies `Kf = Kf+ - Kf-`.
Conditional independence (`def-conditional-independence-given-a-sigma-algebra`,
its equivalence/preservation lemma, and the standard-Borel splice lemma) was
checked including the pi-lambda promotion to `G v sigma(Y)` (valid for the two
finite signed measures involved), the everywhere-kernel disintegration, the
mass-one/countable-additivity of the splice, and the fact that uniqueness in the
splice lemma is claimed only among measures carrying **both** marginals and the
conditional-independence property — no stronger (and false) uniqueness is
asserted. `thm-chapman-kolmogorov-equations` was verified against the published
composition convention `(KL)(s,A) = int L(t,A) K(s,dt)`, so `K^n(Kf) =
K^(n+1)f` and the iterated-integral formula of
`thm-finite-dimensional-laws-of-a-markov-chain` are the correct chronological
order; its backward recursion was re-derived for `r = 0, 1, 2`. The
Ionescu-Tulcea proof was read in full: consistent prefix laws, the explicit
nonemptiness step needed before the published cylinder-premeasure lemma applies,
the decreasing-cylinder continuity-at-empty argument with its recursive
coordinate selection (the exact Choice use), premeasure countable additivity,
uniqueness on the cylinder pi-system, and the homogeneous specialization. No
standard-Borel hypothesis is smuggled in. The strong Markov theorem is stated
and proved in slice-sum form with both sides zero on `{tau = infinity}`; no
`X_infinity` is used. The killed/absorbed definitions and their probability-kernel
verification were checked for every start including the cemetery state. The
countable-state martingale problem was verified in both directions, and the
`f = 1_A` step is legitimate because `S` is countable with the power-set
sigma-algebra. The examples (IID, deterministic, simple random walk, gambler's
ruin, Gaussian AR(1), random-map representation) and the three counterexamples
were checked case by case (parameter endpoints `p = 0, 1`, `N = 1`, `a = 0`,
`sigma = 0`, `S = empty`, the larger-filtration witness at time zero, and the
time-augmented state space).

**Brownian motion (21 A items).** The Gaussian-process definition and the
mean/covariance determination lemma were checked including singular laws,
repeated times and the empty list. Positive semidefiniteness of `min(s,t)` was
re-derived by the level decomposition, and consistency of the Brownian
finite-dimensional laws under arbitrary coordinate maps was checked by
characteristic functions. The Kolmogorov-extension item verifies (not assumes)
that `R` is standard Borel and explicitly refuses to infer path regularity.
The covariance/increment equivalence was checked in both directions, including
the reverse direction for an arbitrary process (the fix for the scaffold's
circular Gaussianity assumption). The one-parameter continuity criterion was
worked through completely: edge counts and Markov bounds, the countable
`(N, eta)` Borel-Cantelli intersection, the dyadic floor-chaining bound, the
unique-limit definition of `Y_t` and its closed-set measurability proof, and
the fixed-time modification argument. The even-moment lemma was checked
including the endpoint term of the compact integration by parts and the tail
bound. The Holder corollary transfers the property back to the *given*
Brownian version by the dense-agreement argument. The uoc metric, the Polish
path space, the Wiener-measure path map (including the zero repair and the
countable rational ball base), the coordinate-generated Borel sigma-algebra,
Wiener uniqueness (rational-cylinder pi-lambda) and Brownian scaling were all
checked. Time inversion was checked at the covariance, cylinder-law and
time-zero continuity levels (one repaired display, below). The
`d`-dimensional definition/equivalence, the existence-and-scaling corollary,
the natural-filtration/all-pairs martingale convention, and all 8 examples and
counterexamples were checked, including `d = 1`, the endpoint cases of the
overlap covariance, the polarization step of the integral construction, and
the two counterexamples separating finite-dimensional information from path
regularity.

## Edits (repairs)

1. `thm-brownian-time-inversion`, step 1.1 (defect
   `phase-2-next-18-alpha-f-001`, accuracy / arithmetic-error, nonfatal): the
   displayed linear combination read
   `sum_j u_j Y_{t_j} = sum_j u_j t_j u_j B_{1/t_j}`, with a spurious second
   factor `u_j`, so the displayed equality was false as written (the intended
   identity from `Y_t = t B_{1/t}` is `sum_j u_j t_j B_{1/t_j}`). Corrected.
   Step 2.1 (`Cov(Y_s,Y_t) = st min(1/s,1/t) = s`) and every later step are
   unaffected; the conclusion "every finite linear combination is normal"
   holds for the corrected expression.
2. `thm-finite-dimensional-laws-of-a-markov-chain`, step 1.1 (defect
   `phase-2-next-18-alpha-f-002`, accuracy / ill-formed, polish): the
   backward-recursion display contained the malformed token `,qquad` (missing
   backslash), which would render as literal text. Corrected to `,\qquad`.
   No mathematical content changed.

Both items were reflowed (`tools/reflow.mts`) and prechecked
(`tools/precheck.mts`): 2 checked, 0 failing. No manifest, page, order,
dependency or contract *statement* was changed by these repairs; the only
contract change is the added `risk_review` block.

## Risk reviews (HIGH/CRITICAL)

`node tools/risk-report.mjs research/phase-2-next-18-batch-2.proof-contracts.json
--require-reviewed` → **0 error(s), 60 item(s) routed** (43 required reviews
present; the other 17 items are moderate/ordinary and need none). Each review
records the tier, its scoring signals, the steps re-derived in this read, and
the disposition. `thm-brownian-time-inversion` and
`thm-finite-dimensional-laws-of-a-markov-chain` record their repairs inside
their reviews.

## Source evidence recorded in this read

- Ionescu-Tulcea: F. H. Simons and J. G. F. Thiemann, *A note on the Ionescu
  Tulcea theorem*, Memorandum COSOR 78-14, TU Eindhoven (1978),
  `https://pure.tue.nl/ws/files/2278088/339511.pdf`, Theorem 2 (statement and
  classical comparison): for measurable spaces `(X_n, E_n)` and transition
  probabilities `p^n` from `X_0 x ... x X_{n-1}` to `X_n`, for every finite
  initial sequence there is a **unique** probability `P` on the product whose
  cylinder values are the iterated integrals
  `∫...∫ 1_A p^{t+1} ... p^n`, and it depends measurably on the initial
  sequence. This matches the item's history-dependent kernel hypothesis, its
  iterated-integral cylinder laws and its uniqueness clause; the item's extra
  nonemptiness step (product nonempty) is required before the published
  cylinder-premeasure lemma, whose own statement carries that hypothesis.
- Time inversion: S. Roch, *Notes 27: Brownian motion: path properties*,
  `https://people.math.wisc.edu/~roch/gradprob/gradprob-notes27.pdf`, Theorem
  27.13: `X(t) = 0` at `t = 0` and `t B(t^{-1})` for `t > 0` is a standard
  Brownian motion, with the same covariance computation
  `Cov[X(s),X(t)] = st (s^{-1} ∧ t^{-1}) = s` and continuity at zero obtained
  from the equality of rational finite-dimensional laws. F. Chapon,
  *Introduction to Brownian motion*, `https://www.math.univ-toulouse.fr/~fchapon/files/teaching/M1-BM.pdf`,
  Proposition 2.3, states and proves the same result by the same route. The
  item's route and conclusion match these treatments, including that
  continuity at zero is part of the conclusion.
- The splice lemma and the conditional-independence equivalence were verified
  against the batch's cited Aldous-Chewi Lecture 9 outline; I re-derived the
  proof rather than relying on the citation (see item evidence).
- The remaining statements are standard and were verified from the items' own
  arguments plus the published local suppliers listed above; no source in this
  read contradicted any accepted statement. No retrieval failed, so no
  source-recovery attempt or source drop applies.

## Local suppliers created

None. No item needed a new local definition or lemma: every gap that a scaffold
checklist could have flagged was already closed by the authored text, and the
only defects were two mechanical display errors in the items themselves.

## Shared-plan and Phase-2 amendments required

None. The two A pages' item lists match the batch manifest exactly (Markov A
22 + 9 examples; Brownian A 21 + 8 examples), with one benign ordering
difference inside the Markov A page: the page places
`thm-markov-property-as-past-future-conditional-independence` after
`thm-markov-property-for-bounded-future-path-functionals`, which is the correct
supplier-first order (the manifest's scaffold order has it earlier). No page
`requires` edge, category, order, or pathway change is proposed, and no new
pair, item or page is required. Batch-2 cross-batch dependencies remain `[]`.

## Published findings

None. Every published supplier read in this batch's dependency closure states
what the items claim of it; no published item was found defective, so
`research/published-consumer-supplier-ledger.md` receives no batch-2 entry and
no published repair claim was created. (The two defects above are draft items
from this run and are recorded in the append-only run defect ledger only.)

## Checks run (local, on the current tree)

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-finite-dimensional-laws-of-a-markov-chain.md items/thm-brownian-time-inversion.md`
  → 2 checked, 0 failing.
- `node tools/reflow.mts` on both repaired items → idempotent/single-line steps
  preserved.
- `node tools/risk-report.mjs research/phase-2-next-18-batch-2.proof-contracts.json --require-reviewed`
  → 0 error(s), 60 items routed.
- `node tools/apply-risk-reviews.mjs --run phase-2-next-18 --file <reviews>`
  → 43 applied, 0 orphans, all in batch 2.
- `node tools/merge-proof-contracts.mjs --level phase-2-next-18 /tmp/merged-2.json research/phase-2-next-18-batch-2.proof-contracts.json`
  then `node tools/proof-contract.mjs /tmp/merged-2.json --strict` →
  merge clean, 0 error(s), 0 warning(s), 60/60 items checked.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`
  → no contradicted dispositions, no template reuse at or above 3 members.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` → 350
  citations over 60 items, every recorded quote found; 3 advisory "widening
  candidates" read by hand (quantifier wording `n >= 0` / `m >= 2` against the
  cited suppliers) — none is a widening defect.
- `node tools/step5-scope.mjs stamp --run phase-2-next-18 --group f` then
  `node tools/step5-scope.mjs check --run phase-2-next-18 --phase adjudicate --batch 2`
  → 60 items routed, 64 adjudication obligations, **0 error(s)** (the engine
  re-stamps before its own gate, so the recorded hashes are not load-bearing).
- `node tools/defect-ledger.mjs append --file <rows>` → 2 rows appended and
  the generated view re-rendered in the same locked transaction;
  `node tools/defect-ledger.mjs validate --run phase-2-next-18` → 9 defect
  row(s) checked (this run's rows, including the two added here), 0 error(s).
- `node tools/step5-scope.mjs check-escalations --run phase-2-next-18` →
  "Step 5a: no owner escalations" (my decisions contain no `escalated` verdict
  and no `repair_confidence != 1`).
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-18` →
  refreshed and deduplicated (batch 2 has no cross-batch rows; its
  `cross-batch-dependencies.json` is `[]`).
- `node tools/depcheck.mjs` (whole repo) → exit 0, "no cycles, all references
  resolve, no draft items on published pages". The batch's pages and items
  appear only in the page-summary lines and in two `cited-not-in-deps`
  informational lines for `ex-brownian-finite-dimensional-density`, which are
  exactly its SCHEMA-legal `forward_refs` (a field that must not also appear in
  `deps`).

## Blockers and escalations

None. No item is escalated: every assigned item was either accepted on its own
authored proof or closed by a local repair with `repair_confidence: 1`. No
unresolved mathematics, missing prerequisite, or source-understanding problem
remains in this group's scope.

## Notes for the serial lead (5b)

- The two repairs change two item carriers; their decisions carry
  `repair_confidence: 1`, unique closed defect-ledger references
  (`phase-2-next-18-alpha-f-001`, `phase-2-next-18-alpha-f-002`) and were
  re-stamped.
- `def-continuous-time-filtration-and-all-pairs-martingale` is classified by
  `tools/auditor-created-items.mjs` as a post-baseline addition for this run and
  is currently certified only by a successful Step-5 dispatch covering its item,
  manifest and contract carriers (the batch-2 contract was rewritten in this
  dispatch, so the covering window is satisfied once this dispatch is recorded).
  It also has an ordinary accepted decision from this read.
- `ex-brownian-finite-dimensional-density` declares two load-bearing
  `forward_refs` (`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`,
  `thm-choice-implies-dependent-implies-countable-choice`). Both targets are
  published and belong to later planned pages, and SCHEMA permits load-bearing
  forward references for examples, so this read left them in place; the 5b
  cross-edge reconciliation still needs its own forward-reference disposition
  for them (`tools/cross-group-edges.mjs`).
