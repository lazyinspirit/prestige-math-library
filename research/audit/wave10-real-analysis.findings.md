# Wave 10 Real Analysis — Audit-Beta A1/A2 Findings

## Disposition and coverage

This is the proposal-stage record for batch `wave10-real-analysis` at the frozen A0 baseline `6fb3b6c`. No scoped item, library page, shared artifact, run state, or earlier-wave file was edited. The batch is exactly at the two-pair cap: 4 pages, 57 scoped items, 49 proof-bearing items, and 888 manifest relationships (698 published-backward, 183 same-batch, 7 forward).

I read all 57 scoped items, both A-page summaries, every Remark, every one of the 349 numbered proof steps, all 354 labeled Facts, all 818 direct dependency-link occurrences in those Facts, and every cited source section needed to test the citations semantically. Repeated links collapse to 792 unique `(Fact label, source id)` proof-contract mappings. All 49 proof-bearing items have contracts; all 349 steps are mapped exactly once and all 392 standard boundary dispositions are present. No mathematical proof step or dependency citation in scope was left unread.

The strict proof-contract checker verifies 49/49 contracts with no warnings and exactly one error: `ex-integral-of-the-floor-function` has an unused `L1 -> lem-integer-part` citation. The contract records `uses: []` honestly. The A3/A4 citation-inventory repair proposed below closes it; no use was fabricated at A2.

## A1 provenance determinations

The durable ledger contains 57 unique rows, each following a reputable literature/web search. Statement classification is 31 `literature-derived` / `exact-source`, 25 `ai-altered` / `semantic-source`, and 1 `ai-generated` / `none`. There are no URL-free `established-knowledge` determinations and no unresolved classification uncertainties.

The 31 exact-source statements are:

- `cor-differentiable-implies-continuous`
- `thm-algebra-of-derivatives`
- `thm-chain-rule`
- `def-local-extremum`
- `thm-fermat-interior-extremum`
- `thm-rolle`
- `thm-cauchy-mean-value`
- `cor-mean-value-theorem`
- `cor-zero-derivative-implies-constant`
- `cor-bounded-derivative-implies-lipschitz`
- `fs-vanishing-derivative-forbids-strict-increase`
- `cex-absolute-value-is-not-differentiable-at-zero`
- `ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative`
- `lem-refinement-inequalities`
- `def-darboux-integral`
- `lem-integral-elementary-bounds`
- `thm-riemann-criterion`
- `thm-darboux-equals-riemann`
- `thm-continuous-implies-integrable`
- `thm-monotone-implies-integrable`
- `thm-finitely-many-discontinuities-integrable`
- `thm-lebesgue-criterion`
- `cor-countably-many-discontinuities-integrable`
- `fs-bounded-implies-riemann-integrable`
- `fs-pointwise-limit-of-riemann-integrable-is-integrable`
- `ex-integral-of-x-squared-from-the-definition`
- `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`
- `ex-thomae-is-riemann-integrable-with-integral-zero`
- `cex-dirichlet-is-not-riemann-integrable`
- `cex-indicator-of-a-fat-cantor-set-is-not-integrable`
- `cex-nonnegative-integrable-with-zero-integral-need-not-vanish`

The 25 semantic-source statements are:

- `def-derivative`
- `thm-caratheodory-characterisation`
- `thm-derivative-linear-approximation-form`
- `lem-derivative-of-a-power`
- `thm-derivative-of-an-inverse`
- `thm-monotonicity-from-the-derivative`
- `rem-derivative-conventions`
- `fs-mean-value-theorem-needs-no-continuity-at-the-endpoints`
- `ex-derivatives-of-polynomials-computed`
- `ex-chain-rule-computed`
- `ex-derivative-of-the-nth-root-by-the-inverse-rule`
- `cex-mean-value-theorem-fails-without-continuity-at-the-endpoints`
- `cex-fermat-fails-at-an-endpoint`
- `ex-mean-value-theorem-bounds-the-square-root-increment`
- `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`
- `cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative`
- `def-partition-and-refinement`
- `def-darboux-sums`
- `def-tagged-partition-and-riemann-sum`
- `fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set`
- `fs-nonnegative-integrable-with-zero-integral-vanishes`
- `ex-refinement-improves-the-darboux-sums`
- `ex-integral-of-the-floor-function`
- `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set`
- `cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice`

The one positive AI-invention determination is `rem-riemann-integral-choice-ledger`: its exact item-by-item accounting of this repository's dependency and choice-strength graph is library-specific and has no external mathematical statement counterpart.

Proof classification is 35 `ai-altered`, 14 `ai-generated`, and 8 `not-applicable`. The 14 locally generated proofs are `ex-derivatives-of-polynomials-computed`, `ex-chain-rule-computed`, `ex-derivative-of-the-nth-root-by-the-inverse-rule`, `cex-mean-value-theorem-fails-without-continuity-at-the-endpoints`, `cex-fermat-fails-at-an-endpoint`, `ex-mean-value-theorem-bounds-the-square-root-increment`, `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`, `cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative`, `fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set`, `fs-nonnegative-integrable-with-zero-integral-vanishes`, `ex-refinement-improves-the-darboux-sums`, `ex-integral-of-the-floor-function`, `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set`, and `cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice`. The eight non-proof items are `def-derivative`, `def-local-extremum`, `rem-derivative-conventions`, `def-partition-and-refinement`, `def-darboux-sums`, `def-darboux-integral`, `def-tagged-partition-and-riemann-sum`, and `rem-riemann-integral-choice-ledger`; the other 35 proofs are source-adapted.

Class (c) proposal: after A3 approval, apply all 57 ledger determinations as component provenance and source-reference updates, removing any legacy one-axis `authorship` field in the same edit. This is one bulk pure-retag stage, not 57 material repairs.

## A2 proposed repairs

### 1. `lem-integral-elementary-bounds` — class (a), unambiguous falsehood

Current Remark:

> **The bound is attained exactly by the constants.** If $m < M$ the outer inequalities are strict for a suitable $f$, and the constant case shows they cannot be improved: there $L(f,P) = m(b-a)$ and $U(f,P) = M(b-a)$ coincide with the extreme members of the chain.

The equality characterization is false. On `[0,1]`, the nonconstant Dirichlet indicator has infimum `0` and supremum `1` on every nondegenerate partition subinterval, hence `L(f,P)=0` and `U(f,P)=1` for every partition; both elementary outer bounds are equalities. The standard Darboux computation appears in [Hunter, Chapter 11](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf).

Proposed replacement:

> **The bounds are sharp, but equality does not characterize constants.** Constant functions show that neither outer coefficient can be improved. Nonconstant functions can also attain equality: for the Dirichlet indicator on $[0,1]$, every partition has $L(f,P)=0$ and $U(f,P)=1$, so both outer bounds are equalities.

This changes only the false Remark; the lemma statement and proof are correct.

### 2. `thm-monotonicity-from-the-derivative` — class (b), citation precision

Proof step 1.2 claims `lim q(x)=f'(c) by [L3]`. Current `[L3]` states only restriction-of-domain preservation and the interval limit-point fact. It does not state the difference-quotient limit that the step invokes, although the linked `def-derivative` does.

Current opening of `[L3]`:

> [L3] Restriction of the domain (`def-derivative`): if $B \subseteq A$, ...

Proposed opening, retaining the existing restriction and interval clauses after it:

> [L3] Difference quotient and restriction of the domain (`def-derivative`): differentiability of $h$ at $p$ means that $q(x):=(h(x)-h(p))/(x-p)$ on $A\setminus\{p\}$ has limit $h'(p)$; if $B \subseteq A$, ...

This makes the Fact state the proposition for which step 1.2 cites it, with no proof change.

### 3. `ex-integral-of-the-floor-function` — class (b), fact-use inventory

Fact `[L1]` cites `lem-integer-part` and states the defining floor inequality, but no numbered Verification step cites `[L1]`; it is used only inside the prose of Fact `[L7]`. This is the sole strict proof-contract failure.

Smallest honest repair: step 1.2 explicitly evaluates the displayed floor values, so change its closing citation list from

> `[given, L4, L5, L7]`

to

> `[given, L1, L4, L5, L7]`.

After that item edit, its contract `uses` entry for `L1 -> lem-integer-part` must be changed from `[]` to `["1.2"]`. Until A3 approval and A4 application, the A2 contract deliberately retains the truthful empty use.

### 4. Derivative A-page summary — class (a) wording; owner/A10 page repair

The opening says the page “proves the four theorems that the derivative exists for: Fermat's interior extremum theorem, Rolle's theorem, Cauchy's mean value theorem and the mean value theorem itself.” Those theorems do not prove that a derivative exists; they assume differentiability and derive consequences.

Proposed clause:

> ... and then proves four central consequences and comparison theorems: Fermat's interior extremum theorem, Rolle's theorem, Cauchy's mean value theorem, and the mean value theorem itself.

This is a library-page edit and therefore remains an owner/A10 proposal, not an A4 Beta edit.

## Nonfatal prose and summary queue

Both A pages violate the library summary contract of at most two paragraphs and fewer than 150 words: the derivative page has 9 authored paragraphs and the Riemann page has 7. Per triage, this format/prose problem is recorded for A10 rather than chased during the mathematical audit.

`rem-derivative-conventions` also contains positional claims such as “No item up to this point in the reading order,” “nothing below,” and “A later page.” They are mathematically harmless at this baseline but are published-claim decay risks as reading order changes. Queue a later owner rewrite into non-positional scope language; no A1/A2 edit is proposed.

No other unambiguous mathematical falsehood, proof gap beyond the standing 30-second tolerance, or semantic dependency mismatch was found.

## Mandatory Wave 8/9 final-text reconciliation

Wave 10 was read against the A0 disk baseline while Waves 8 and 9 were being repaired in parallel. A6 must re-open every affected edge against the final earlier-wave text before certification. No earlier-wave dependency was edited here.

### Wave 8 surface

There are 86 declared relationships from 36 Wave 10 source items into these 20 Wave 8 targets:

- `cor-boundedness-theorem-r`
- `def-cantor-set`
- `def-continuity-real`
- `def-f-sigma-g-delta`
- `def-fat-cantor-set`
- `def-measure-zero-and-content-zero`
- `def-nowhere-dense-meager`
- `def-uniform-continuity-real`
- `lem-content-zero-implies-null`
- `lem-countable-sets-are-null`
- `lem-nondegenerate-interval-is-not-null`
- `lem-real-and-metric-notions-agree`
- `thm-algebra-of-continuous-functions`
- `thm-cantor-set-properties`
- `thm-compact-null-is-content-zero`
- `thm-composition-of-continuous-functions`
- `thm-countable-union-of-null-is-null`
- `thm-extreme-value-r`
- `thm-fat-cantor-set-has-positive-measure`
- `thm-heine-cantor-r`

The 36 Wave 10 source ids are `cex-absolute-value-is-not-differentiable-at-zero`, `cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative`, `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`, `cex-indicator-of-a-fat-cantor-set-is-not-integrable`, `cex-mean-value-theorem-fails-without-continuity-at-the-endpoints`, `cor-bounded-derivative-implies-lipschitz`, `cor-countably-many-discontinuities-integrable`, `cor-differentiable-implies-continuous`, `cor-mean-value-theorem`, `cor-zero-derivative-implies-constant`, `def-derivative`, `ex-chain-rule-computed`, `ex-derivative-of-the-nth-root-by-the-inverse-rule`, `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`, `ex-integral-of-the-floor-function`, `ex-integral-of-x-squared-from-the-definition`, `ex-mean-value-theorem-bounds-the-square-root-increment`, `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set`, `ex-thomae-is-riemann-integrable-with-integral-zero`, `ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative`, `fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set`, `fs-mean-value-theorem-needs-no-continuity-at-the-endpoints`, `fs-nonnegative-integrable-with-zero-integral-vanishes`, `fs-pointwise-limit-of-riemann-integrable-is-integrable`, `fs-vanishing-derivative-forbids-strict-increase`, `rem-riemann-integral-choice-ledger`, `thm-algebra-of-derivatives`, `thm-caratheodory-characterisation`, `thm-cauchy-mean-value`, `thm-chain-rule`, `thm-continuous-implies-integrable`, `thm-derivative-of-an-inverse`, `thm-finitely-many-discontinuities-integrable`, `thm-lebesgue-criterion`, `thm-monotonicity-from-the-derivative`, and `thm-rolle`.

### Wave 9 surface

There are 29 declared relationships from 22 Wave 10 source items into these 8 Wave 9 targets:

- `def-classification-of-discontinuities`
- `def-dirichlet-and-thomae-functions`
- `def-monotone-function`
- `def-oscillation`
- `lem-oscillation-superlevel-sets-are-closed`
- `thm-continuity-iff-oscillation-zero`
- `thm-continuous-inverse`
- `thm-dirichlet-and-thomae-continuity-sets`

The 22 Wave 10 source ids are `cex-dirichlet-is-not-riemann-integrable`, `cex-indicator-of-a-fat-cantor-set-is-not-integrable`, `cex-nonnegative-integrable-with-zero-integral-need-not-vanish`, `cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice`, `cor-countably-many-discontinuities-integrable`, `def-darboux-sums`, `ex-derivative-of-the-nth-root-by-the-inverse-rule`, `ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero`, `ex-integral-of-the-floor-function`, `ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set`, `ex-thomae-is-riemann-integrable-with-integral-zero`, `ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative`, `fs-bounded-implies-riemann-integrable`, `fs-nonnegative-integrable-with-zero-integral-vanishes`, `fs-pointwise-limit-of-riemann-integrable-is-integrable`, `fs-vanishing-derivative-forbids-strict-increase`, `rem-riemann-integral-choice-ledger`, `thm-derivative-of-an-inverse`, `thm-finitely-many-discontinuities-integrable`, `thm-lebesgue-criterion`, `thm-monotone-implies-integrable`, and `thm-monotonicity-from-the-derivative`.

## Escalations and exact handoff

- A3 approval requested for 57 class (c) provenance applications, one class (a) item repair (`lem-integral-elementary-bounds`), and two class (b) citation repairs (`thm-monotonicity-from-the-derivative`, `ex-integral-of-the-floor-function`).
- Owner/A10 decision requested for the derivative summary's false wording, both overlong A-page summaries, and non-positional wording in `rem-derivative-conventions`.
- Alpha must independently adjudicate every provenance row. No `established-knowledge` concurrence and no provenance-uncertainty decision is requested.
- A6 must reconcile the 86 Wave 8 and 29 Wave 9 relationships identified above against final repaired dependency text before frozen-text certification.
- There is no shell, edit-authority, or mathematical-classification blocker at A1/A2.

Exact completion counts: 4 pages; 57 items; 57 provenance rows; 49 proof contracts; 354 labeled Facts; 818 direct citation occurrences; 792 unique Fact/source contracts; 349 numbered proof steps; 392 boundary dispositions; 4 proposed mathematical/citation/page-wording repairs; 57 proposed provenance applications; 115 mandatory earlier-wave reconciliation relationships.

Paths written:

- `research/audit/wave10-real-analysis.provenance.jsonl`
- `research/audit/wave10-real-analysis.findings.md`
- `research/audit/wave10-real-analysis.proof-contracts.json`

## A4 application receipt — 2026-08-09

`research/audit/wave10-A3.md` was treated as authoritative. The following
approved material repairs were applied, and stale `verification.audited` and
`verification.judge` state was removed from exactly these three items:

- `lem-integral-elementary-bounds`: replaced the false equality
  characterization in the Remark with the approved sharpness statement and
  Dirichlet-indicator counterexample.
- `thm-monotonicity-from-the-derivative`: expanded Fact `[L3]` with the
  difference-quotient limit proposition actually used in step 1.2.
- `ex-integral-of-the-floor-function`: added `[L1]` to step 1.2's citation
  list and regenerated the matching contract use as `L1 -> ["1.2"]`.

The A3-delegated derivative A-page repair was also applied verbatim: the
objective now says that differentiability is a hypothesis of Fermat's theorem,
Rolle's theorem, Cauchy's mean value theorem, and the mean value theorem. No
other page-summary wording was changed. The previously recorded 9-paragraph
and 7-paragraph summary debt remains queued for A10.

All 57 ledger determinations were applied to item front matter, preserving
every `origin: session`; no `authorship` field exists in the scope. Matching
literature references were added where absent. The A3 override for
`cex-differentiable-with-unbounded-derivative-is-not-lipschitz` retains
`statement: ai-altered`, `proof: ai-generated`, and `evidence:
semantic-source`, with the UNLP exercise-sheet URL and corrected rationale in
the ledger. Of the 57 item applications, 3 are the material repairs above and
54 are pure provenance/source retags.

The namespaced proof-contract artifact was regenerated from final A4 item and
dependency text. It contains 49/49 proof-bearing contracts, 792 unique
Fact/source mappings, and 349 proof steps. Strict validation passes with zero
errors and zero warnings; in particular the former unused `L1 ->
lem-integer-part` contract is now closed honestly by step 1.2.

### A4 validation

- Reflow on all three materially edited proof items: 3 unchanged.
- Direct precheck on all three materially edited proof items: 3/3 pass.
- Final scope/tag/source invariant check: 57/57 rows match, all 85 ledger URL
  occurrences are present, all 57 origins are preserved, and no authorship is
  present.
- Pure-retag diff check: all 54 pure-retag items contain only provenance and
  source additions; no removals or body edits.
- Strict proof-contract check: 49/49, zero errors, zero warnings.
- Parallel-final-text refresh: after Wave 9 finalized `def-oscillation`, the
  two `thm-lebesgue-criterion` source quotes for Facts `[L2]` and `[L4]` were
  refreshed from its current Definition; strict remained 49/49 with zero
  errors and zero warnings, without changing the Wave 10 item.
- Namespaced finite smoke: pass, zero errors.
- Namespaced risk report: pass, zero errors; proof-risk review remains an A6
  lane.
- Content policy: zero errors and one expected warning for the already queued
  generated-kind risk on `rem-riemann-integral-choice-ledger`.
- `git diff --check`: pass.
- The aggregate A4 gate ran 13 checks. Ten passed directly. The remaining
  three (`proof-contract`, `finite-smoke`, and `risk-report`) report only the
  absent orchestrator-owned aggregate receipt
  `research/audit/wave10-proof-contracts.json`; each corresponding check passes
  independently against this batch's namespaced contract. That shared receipt
  is outside this A4 Beta write authority and was not created here.

No shared receipt, touch ledger, judge ledger, `RESUME.md`, other-wave file, or
other batch artifact was edited. A6 must still re-open the complete parallel
dependency surface: 86 relationships into 20 Wave 8 targets and 29
relationships into 8 Wave 9 targets (115 total).
