# Wave 13 real-analysis Audit-Beta A1/A2 findings

## Disposition and exact coverage

This is the proposal-stage record for `wave13-real-analysis` at A0 baseline `442f831c94882899c1dc5559b36599b0f78a99c8`. No scoped item, page, shared audit artifact, provenance tag, or verification block was edited. The only writes are the three namespaced artifacts authorized by the dispatch.

The manifest contains 4 pages, 2 A/B pairs, 76 scoped items, and 62 proof-bearing items. I read all 76 item bodies, both A-page summaries, every Remark, all 212 numbered proof steps, all 169 labeled Facts, all 283 direct Fact dependency-link occurrences, and the remaining body citations for 389 total on-disk dependency-link occurrences. I also read the exact source section of every cited target: 50 same-batch scoped targets and 109 distinct external targets. The A0 relationship inventory has 487 legal relationships, comprising 288 published-backward and 199 same-batch relationships, with no missing target, forward dependency, or unresolved edge.

The proof-contract artifact contains 62/62 proof-bearing contracts, 283 `(Fact label, source id)` citation mappings, 212 derivations covering every numbered step exactly once, and all 496 standard boundary dispositions. Strict validation checks all 62 contracts with no warnings and exactly two errors: the two source links in the same unused Fact `[L2]` of `ex-geometric-power-series-and-an-interior-reexpansion` have truthful empty `uses` arrays. No use was fabricated; the A3 repair proposal below closes both mappings.

No theorem conclusion, corollary conclusion, example computation, or counterexample construction other than the false intermediate Fact identified below failed the accuracy audit. The two A-page summaries are mathematically accurate and within their two-paragraph role. No proof step or dependency citation in scope was left unread.

## A1 provenance determinations

The ledger has 76 unique rows. Statement classification is 6 `literature-derived` / `exact-source`, 69 `ai-altered` / `semantic-source`, and 1 `ai-generated` / `none`. There are no URL-free `established-knowledge` determinations, no classification uncertainties, and no row requiring Alpha concurrence before adjudication. Every recorded source URL was opened successfully during A1.

The exact-source statements are:

- `thm-abel-limit-theorem`
- `cex-factorial-power-series-has-radius-zero`
- `cex-grandi-series-abel-summable-but-divergent`
- `thm-jordan-boundary-criterion`
- `ex-unit-box-volume-and-integral`
- `rem-jordan-rectifiable-terminology`

The sole positive AI-invention determination is `rem-multidimensional-riemann-conventions-and-scope`. Its content is a repository-specific ledger of the exact definitions and theorems this page chooses to assert or omit; no external mathematical statement has that item-by-item scope. Each mathematical assertion in it was checked against the named dependency. Every other scoped statement is recorded row by row as `ai-altered` / `semantic-source`.

Proof classification is 34 `ai-altered`, 28 `ai-generated`, and 14 `not-applicable`. The locally generated proofs are:

- `lem-derived-and-integrated-power-series-have-the-same-radius`
- `lem-power-series-reexpansion-double-series`
- `lem-abel-transform-of-cesaro-means`
- `lem-tauber-block-estimate`
- `fs-power-series-uniform-on-its-open-interval`
- `fs-power-series-convergence-at-one-point-forces-global-convergence`
- `fs-abel-summability-implies-ordinary-convergence`
- `ex-geometric-power-series-and-an-interior-reexpansion`
- `ex-three-radius-one-series-with-different-endpoint-behaviour`
- `cex-factorial-power-series-has-radius-zero`
- `cex-geometric-power-series-not-uniform-on-its-open-interval`
- `ex-a-rational-function-is-real-analytic-via-a-geometric-series`
- `ex-abel-theorem-on-the-alternating-harmonic-series`
- `cex-grandi-series-abel-summable-but-divergent`
- `cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable`
- `lem-multidimensional-refinement-inequalities`
- `cor-one-dimensional-and-multidimensional-riemann-agree`
- `cor-one-dimensional-null-and-content-zero-agree`
- `lem-finite-cube-covers-admit-grid-control`
- `lem-jordan-set-integral-well-defined`
- `lem-product-lower-bound-for-jordan-content`
- `ex-unit-box-volume-and-integral`
- `cex-rational-points-in-unit-square-have-no-jordan-content`
- `cex-compact-set-without-jordan-content`
- `cex-bounded-open-set-with-nonnull-boundary`
- `ex-parabola-graph-has-content-zero`
- `ex-triangle-has-jordan-content-one-half`
- `ex-cantor-slab-has-content-zero`

The 12 definitions and 2 terminology/scope Remarks have `proof: not-applicable`; all remaining proofs are source-adapted. Class (c) proposal: after A3 approval, apply all 76 component determinations and their verified references in one bulk pure-retag pass, deleting any legacy one-axis `authorship` field if one appears at the frozen A4 baseline.

## A2 proposed repairs

### 1. `thm-jordan-boundary-criterion` — class (a), unambiguous falsehood and proof failure

Current Fact `[L1]` says:

> The indicator $1_E$ is discontinuous exactly at $\partial E$ (`def-metric-interior-closure-boundary`).

In this proof the indicator supplied by `thm-jordan-content-and-indicator-integrability` is a function on a bounding rectangle $Q$, not the global function on $\mathbb R^m$. The displayed equality is false for that relative-domain indicator. Take $E=Q=[0,1]^m$: then $1_E:Q\to\mathbb R$ is the constant function $1$ and has no discontinuities, while the ambient boundary $\partial E$ is nonempty. The literature proof states the equality for the global characteristic function on $\mathbb R^m$, not for an arbitrary restriction to $Q$: [Lebl, Jordan measurable sets](https://www.jirka.org/ra/html/sec_jordansets.html).

Consequently proof step 1.1 is not licensed by `[L1]` and `[L2]`, even though the theorem statement itself is standard and true. The smallest repair is to choose a rectangle whose interior contains the closure of $E$, which metric boundedness supplies by enlarging the rectangle already constructed in `[L3]`.

Proposed `[L1]`:

> [L1] If $Q$ is a nondegenerate rectangle with $\overline E\subseteq\operatorname{int}Q$, then the relative-domain indicator $1_E:Q\to\mathbb R$ is discontinuous exactly at the ambient boundary $\partial E$. At a boundary point every sufficiently small ball lies in $Q$ and meets both $E$ and its complement, while away from the boundary the indicator is locally constant (`def-metric-interior-closure-boundary`).

Proposed step 1.1:

> 1.1 By `[L3]`, choose a closed bounding rectangle $Q_0$ for $E$ and enlarge every coordinate interval by a fixed positive margin to obtain a nondegenerate rectangle $Q$ with $\overline E\subseteq Q_0\subseteq\operatorname{int}Q$. By `[L1]` and `[L2]`, $E$ is Jordan measurable exactly when $\partial E$ is null. `[L1, L2, L3, given]`

Steps 1.2 and 2.1 may remain unchanged. This is a material repair: the stale `verification.judge` and `audited` state must be removed at A4, and the contract source/use entries must be regenerated from the repaired item.

### 2. `thm-lebesgue-criterion-in-rn` — class (b), citation precision

Current `[L1]` states both that continuity is equivalent to zero oscillation and that

> Discontinuities are $\bigcup_{r\ge1}\{x:\omega_f(x)\ge1/r\}$,

but cites only `def-oscillation-in-rn` and `lem-oscillation-characterisation-in-rn`. Those targets license $D=\{x:\omega_f(x)>0\}$ and closedness of each positive superlevel. They do not license the reciprocal-integer decomposition of every positive real. That extra implication is stated exactly by the earlier `cor-archimedean-reciprocal`, which should be added as a dependency.

Proposed `[L1]`:

> [L1] Continuity at $x$ is equivalent to $\omega_f(x)=0$, and each set $\{x:\omega_f(x)\ge\varepsilon\}$ is closed for $\varepsilon>0$ (`def-oscillation-in-rn`, `lem-oscillation-characterisation-in-rn`). Since every positive real is larger than $1/r$ for some natural $r\ge1$ (`cor-archimedean-reciprocal`), the discontinuity set is $\bigcup_{r\ge1}\{x:\omega_f(x)\ge1/r\}$.

The proof and theorem conclusion are otherwise correct. This repair changes only the Fact's proposition-to-source accounting and its contract mapping.

### 3. `ex-geometric-power-series-and-an-interior-reexpansion` — class (b), unused Fact inventory

Fact `[L2]` cites both `thm-power-series-reexpansion-at-an-interior-point` and `lem-local-reciprocal-of-a-real-power-series`, but neither numbered Verification step cites `[L2]`. This is the sole structural proof-contract defect and produces the two strict-validator errors.

The Fact is mathematically applicable to the second formula, so the smallest honest repair is to make that use explicit rather than delete the dependency inventory. Proposed step 2.1:

> 2.1 This is the interior re-expansion and local reciprocal described in `[L2]`; explicitly, since $1-x=(1-c)(1-(x-c)/(1-c))$ and $1-c>0$, apply `[L1]` with $t=(x-c)/(1-c)$. This gives the second formula precisely when $|x-c|<1-c$. `[given, L1, L2, algebra]`

After A4, both contract entries for `[L2]` must record `uses: ["2.1"]`. Until approval, their empty arrays remain the truthful A2 record.

## Wave 11–12 exact-final reconciliation surface

Wave 13 was read against the A0 disk text while Waves 11–12 may still receive repairs. A6 must reopen these 24 exact edges against the final earlier-wave text. No earlier-wave dependency was edited here.

The sole Wave 11 edge is:

- `cor-termwise-integration-of-a-real-power-series` → `thm-ftc-first-part`

The 23 Wave 12 edges are:

- `thm-power-series-uniform-on-compact-subintervals` → `thm-weierstrass-m-test-for-function-series`
- `thm-power-series-uniform-on-compact-subintervals` → `def-series-of-real-functions`
- `cor-power-series-sums-are-continuous` → `thm-uniform-limit-continuous-real-functions`
- `thm-termwise-differentiation-of-a-real-power-series` → `thm-uniform-derivative-limit-on-a-closed-interval`
- `cor-termwise-integration-of-a-real-power-series` → `thm-uniform-limit-interchanges-riemann-integration`
- `fs-power-series-uniform-on-its-open-interval` → `thm-uniform-cauchy-criterion-real-functions`
- `fs-power-series-uniform-on-its-open-interval` → `def-pointwise-uniform-and-uniformly-cauchy-convergence`
- `cex-geometric-power-series-not-uniform-on-its-open-interval` → `def-pointwise-uniform-and-uniformly-cauchy-convergence`
- `def-multidimensional-rectangle-and-volume` → `def-p-norms-on-rn`
- `def-multidimensional-grid-partition` → `def-p-norms-on-rn`
- `def-multidimensional-grid-partition` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `cor-one-dimensional-and-multidimensional-riemann-agree` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-continuous-on-a-rectangle-is-riemann-integrable` → `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `thm-continuous-on-a-rectangle-is-riemann-integrable` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `cor-one-dimensional-null-and-content-zero-agree` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `def-oscillation-in-rn` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `lem-oscillation-characterisation-in-rn` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-lebesgue-criterion-in-rn` → `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `def-jordan-inner-and-outer-content` → `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` → `def-p-norms-on-rn`
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` → `lem-p-norms-are-norms-and-induce-the-published-metrics`
- `thm-lipschitz-images-of-null-sets-in-rn-are-null` → `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`
- `thm-graphs-of-continuous-functions-have-content-zero` → `lem-p-norms-are-norms-and-induce-the-published-metrics`

## Exact handoff

- A3 approval is requested for 76 class (c) provenance applications, one class (a) material repair, and two class (b) citation repairs.
- No item deletion, id change, reading-order change, or owner/A10 page edit is proposed.
- Alpha must independently adjudicate every provenance row. No `established-knowledge` concurrence or uncertain invented-versus-recoverable decision is requested.
- A6 must reconcile the 24 listed Wave 11–12 edges against final dependency text before frozen-text certification.
- There is no shell, edit-authority, or unresolved provenance blocker at A1/A2. A4 has not begun and no published item may be changed until A3 approval.

Exact completion counts: 4 pages; 76 items; 76 provenance rows; 62 proof contracts; 169 Facts; 283 Fact citation occurrences; 389 total body dependency-link occurrences; 212 numbered proof steps; 496 boundary dispositions; 3 proposed mathematical/citation repairs; 76 proposed provenance applications; 24 mandatory earlier-wave reconciliation edges.

Paths written:

- `research/audit/wave13-real-analysis.provenance.jsonl`
- `research/audit/wave13-real-analysis.findings.md`
- `research/audit/wave13-real-analysis.proof-contracts.json`

## A4 applied result — 2026-08-10

A3's complete decision has been applied exactly. The field-aware split is 73
pure provenance/source retags and exactly three material items, with no created
item. All 76 approved component classifications and all ledger source
associations are now present in item frontmatter. The statement distribution
is 69 `ai-altered`, six `literature-derived`, and one `ai-generated`; the proof
distribution is 34 `ai-altered`, 28 `ai-generated`, and 14 `not-applicable`;
the evidence distribution is 69 `semantic-source`, six `exact-source`, and one
`none`. The ledger has 115 URL associations on 75 rows, covering 17 distinct
URLs; every association occurs in its matching item's `sources.references`,
and all 17 distinct URLs reopened successfully through the available web
route. All 76 `origin` values are preserved, no legacy `authorship` remains,
and each pure-retag item's verification state and mathematical body are
byte-identical to the baseline after excluding only the authorized provenance
and source-reference frontmatter changes.

The three material repairs and their exact old-to-new dispositions are:

### `thm-jordan-boundary-criterion` — class (a)

Old `[L1]` was the false unrestricted relative-indicator claim:

> The indicator $1_E$ is discontinuous exactly at $\partial E$.

Old step 1.1 applied it immediately:

> By [L1] and [L2], $E$ is Jordan measurable exactly when $\partial E$ is
> null. `[L1, L2]`

Final `[L1]` is the A3-authorized safe proposition:

> If $Q$ is a nondegenerate rectangle with
> $\overline E\subseteq\operatorname{int}Q$, then the relative-domain indicator
> $1_E:Q\to\mathbb R$ is discontinuous exactly at the ambient boundary
> $\partial E$. At a boundary point every sufficiently small ambient ball lies
> in $Q$ and meets both $E$ and its ambient complement, while away from the
> boundary the indicator is locally constant.

Final step 1.1 first uses `[L3]` to choose a closed bounding rectangle $Q_0$
and enlarges every coordinate interval by a positive margin, obtaining
$\overline E\subseteq Q_0\subseteq\operatorname{int}Q$; it then invokes `[L1]`
and `[L2]`, with inputs `[L1, L2, L3, given, choose]`. The derivation is direct:
the positive coordinate margin puts every point of $\overline E$ in the
interior of $Q$, so sufficiently small ambient balls remain in the relative
domain; the indicator is then discontinuous precisely at ambient boundary
points and locally constant elsewhere. This repairs the published false
intermediate claim without changing the theorem Statement. The contract maps
all six `[L3]` sources to steps 1.1 and 1.2, records `choose`, and marks
`nonempty-choice`, `iff-forward`, and `iff-reverse` checked with the A3-required
step anchors.

### `thm-lebesgue-criterion-in-rn` — class (b)

Old `[L1]` attributed the reciprocal-index decomposition to only the
oscillation definition and characterization:

> Discontinuities are
> $\bigcup_{r\ge1}\{x:\omega_f(x)\ge1/r\}$, and each superlevel is closed.

Old step 6.1 cited only `[L1]` for that decomposition. Final `[L1]` now states
only the licensed oscillation-zero equivalence and closedness of every positive
superlevel. Final `[L6]` states the exact reciprocal proposition:

> For every positive real $u$ there is a natural $r\ge1$ with $1/r<u$.

It cites `cor-archimedean-reciprocal`, which is now declared in `deps`. Final
step 6.1 opens with `By [L1] and [L6]` and has the exact inputs
`[step 5.1, step 3.2, L1, L6]`. The contract contains the dependency's full
Statement clause and maps `[L6]` only to step 6.1; no reciprocal source is
misattributed to any other `[L1]` use.

### `ex-geometric-power-series-and-an-interior-reexpansion` — class (b)

Old step 2.1 performed only the direct factorization and cited
`[given, L1, algebra]`, leaving both `[L2]` mappings unused. Final step 2.1
attributes only the qualitative existence of an interior re-expansion and a
local reciprocal series to `[L2]`. It then directly factors
$1-x=(1-c)(1-(x-c)/(1-c))$ and applies `[L1]` at
$t=(x-c)/(1-c)$ to derive the displayed coefficients and the sharp interval
$|x-c|<1-c$. Its inputs are `[given, L1, L2, algebra]`. Both `[L2]` contract
mappings use exactly step 2.1; neither general theorem is credited with the
stronger sharp interval it does not state.

The stale audited state is absent from all three material items; no Beta judge
or certification state was added. Reflow changed none of their final text, and
targeted precheck passed 3/3.

The contract-only A3 amendment is also exact:
`thm-jordan-content-and-indicator-integrability` now marks both `iff-forward`
and `iff-reverse` `checked`, each anchored to steps 1.1, 2.1, and 3.1. The item
itself, its verification state, and its material/rejudge disposition are
unchanged. Together with the repaired Jordan-boundary worksheet, the four
false iff dispositions identified at A3 are corrected.

The regenerated namespaced and merged proof-contract artifacts contain 62
contracts, 212 numbered steps, 284 Fact/source mappings, and 496 boundary
dispositions. Strict validation reports 62/62 checked, zero errors, and zero
warnings. Finite smoke reports zero errors and zero applicable checks; risk
routing reports zero errors and routes all 62 items (29 critical, 23 high, ten
moderate).

The final relationship manifest contains 488 edges: 289 published-backward and
199 same-batch. Its one-edge increase from A3's 487-edge baseline is exactly
the approved `thm-lebesgue-criterion-in-rn` dependency on
`cor-archimedean-reciprocal`. Every mandatory earlier-wave edge remains
present: 1/1 to Wave 11 and 23/23 to Wave 12. They remain A6's final-text
reconciliation barrier; A4 did not perform A6 certification.

Direct validation is clean. Scoped precheck passed all 62 proof-bearing items;
`depcheck --pending-audit-ok`, `fwdcheck`, `extcheck`, `rendercheck`,
`prosecheck`, `citecheck`, `depsource`, strict proof-contract, finite-smoke,
risk-report, content-policy, relationship, reflow, and `git diff --check`
checks all exited zero. Rendercheck parsed all 3,043 files; prosecheck reported
zero errors; dependency-source resolution covered 16,688 declarations with
zero unresolved targets. Content policy covered all 76 scoped items with zero
errors and the one expected warning for the positively identified
repository-specific `ai-generated` scope Remark. The shell's external DNS
route returned curl error 6, so URL liveness was checked without escalation by
reopening all 17 exact URLs through the available web route; the earlier A1
admission check and independent A3 adjudication had already established their
HTTP-200 status.

Audit-Beta took no touch snapshot because the dispatch assigns the one
stage-level `post-A4` snapshot to the orchestrator. That orchestrator-owned
snapshot and its generated impact template are now present; a clean
recalculation reproduces 76 changed interfaces and 207 affected items exactly,
with all dispositions left pending for A6. No page, Wave 11, Wave 12, or Wave
14 artifact was edited by this A4 work, and no A6 or later stage was run. The
A1/A2 coverage statement remains exact with no exception: every numbered proof
step, Fact citation, and dependency citation in the two pairs was read.
