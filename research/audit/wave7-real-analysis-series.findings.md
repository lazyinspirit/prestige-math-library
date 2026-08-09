# Audit-Beta findings — wave 7, real-analysis-series

## A1/A2 status and scope

A1 and A2 are complete for the single manifest pair
`series-and-nonnegative-tests` / `series-and-nonnegative-tests-examples`.
The manifest checksum read during the audit was
`77f51f83e5a227724704c7618024cb8e65990787d8f0f6b1d4d90a6e3fe409bf`.
Its scope is 37 items: 25 on the A page and 12 on the B page. Thirty-five
items are proof-bearing; `def-series` and
`rem-strength-order-of-the-nonnegative-tests` are not.

I read both page files, every scoped item from disk, every numbered proof step,
every direct dependency citation, every Remark, both page summaries, and the
mathematically relevant sections of all 64 distinct dependency targets. This
included cross-category targets, which were checked from their on-disk
mathematical text without treating a missing audit tag on the target as a defect
of this batch.

No item file has been edited. A4 is waiting at the A3 approval gate.

## A1 provenance determination

The provenance ledger contains exactly one row for each of the 37 manifest
items. It has 11 `literature-derived` / `exact-source` statements and 26
`ai-altered` / `semantic-source` statements. There are no `ai-generated`
statements, no `established-knowledge` fallbacks, no URL-free sourced labels,
and no unresolved invented-versus-established classifications. Proofs are
classified independently: 22 `ai-altered`, 13 `ai-generated`, and two
`not-applicable`. Every row remains `alpha_concurred: false` for A3/A5
adjudication.

| item | statement | proof | evidence |
|---|---|---|---|
| `def-series` | `ai-altered` | `not-applicable` | `semantic-source` |
| `lem-series-tail-invariance` | `ai-altered` | `ai-generated` | `semantic-source` |
| `lem-nth-term-test` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-series-cauchy-criterion` | `ai-altered` | `ai-altered` | `semantic-source` |
| `lem-series-linearity` | `ai-altered` | `ai-generated` | `semantic-source` |
| `lem-absolute-convergence-implies-convergence` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-geometric-series` | `literature-derived` | `ai-altered` | `exact-source` |
| `lem-telescoping-series` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-nonnegative-series-bounded-partial-sums` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-direct-comparison-test` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-limit-comparison-test` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-cauchy-condensation` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-p-series-rational` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-root-test` | `literature-derived` | `ai-altered` | `exact-source` |
| `thm-ratio-test` | `literature-derived` | `ai-altered` | `exact-source` |
| `cor-root-test-dominates-ratio-test` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-kummer-test` | `literature-derived` | `ai-altered` | `exact-source` |
| `cor-ratio-test-is-kummer-with-constant-weights` | `ai-altered` | `ai-altered` | `semantic-source` |
| `cor-raabe-test` | `ai-altered` | `ai-altered` | `semantic-source` |
| `thm-gauss-test` | `ai-altered` | `ai-generated` | `semantic-source` |
| `thm-abel-dini` | `literature-derived` | `ai-generated` | `exact-source` |
| `rem-strength-order-of-the-nonnegative-tests` | `ai-altered` | `not-applicable` | `semantic-source` |
| `fs-nth-term-test-converse` | `ai-altered` | `ai-generated` | `semantic-source` |
| `fs-ratio-limsup-at-least-one-diverges` | `ai-altered` | `ai-generated` | `semantic-source` |
| `fs-universal-comparison-series` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-harmonic-series-diverges` | `literature-derived` | `ai-altered` | `exact-source` |
| `ex-sum-of-reciprocal-squares-converges` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-geometric-series-computed` | `ai-altered` | `ai-generated` | `semantic-source` |
| `ex-telescoping-sum-computed` | `literature-derived` | `ai-altered` | `exact-source` |
| `ex-condensation-applied` | `ai-altered` | `ai-altered` | `semantic-source` |
| `ex-abel-dini-pair-for-the-harmonic-series` | `ai-altered` | `ai-generated` | `semantic-source` |
| `ex-raabe-decides-where-ratio-fails` | `ai-altered` | `ai-generated` | `semantic-source` |
| `cex-ratio-inconclusive-root-decides` | `ai-altered` | `ai-altered` | `semantic-source` |
| `cex-root-limit-one-decides-nothing` | `ai-altered` | `ai-generated` | `semantic-source` |
| `cex-comparison-needs-nonnegativity` | `ai-altered` | `ai-generated` | `semantic-source` |
| `cex-condensation-needs-monotonicity` | `ai-altered` | `ai-generated` | `semantic-source` |
| `cex-limit-comparison-l-zero-one-directional` | `ai-altered` | `ai-generated` | `semantic-source` |

The row-by-row convention deltas, proof determinations, and complete URL lists
are in `wave7-real-analysis-series.provenance.jsonl`. The nine distinct URLs
were opened successfully through the literature-search route during A1. Direct
`curl` from the workspace cannot resolve external DNS, so it was not treated as
an independent availability result. The source set is:

- John K. Hunter, *An Introduction to Real Analysis*:
  <https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf>
- Stephen Semmes, *Elements of Analysis*:
  <https://math.rice.edu/~semmes/math331.pdf>
- APEX Calculus, limit comparison:
  <https://sites.und.edu/timothy.prescott/apex/web/apex.Ch9.S4.html>
- MIT 18.100B lecture notes:
  <https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf>
- CSUDH notes on ratio and root tests:
  <https://math.csudh.edu/~pong/a3/Notes_01.html>
- Thomson–Bruckner–Bruckner, *Elementary Real Analysis*:
  <https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf>
- Binghamton notes on Kummer, Raabe, and Gauss tests:
  <https://people.math.binghamton.edu/dikran/478/Ch5.pdf>
- the convention-tiebreaking convergence-test entry:
  <https://en.wikipedia.org/wiki/Convergence_tests>
- the Abel–Dini–Pringsheim entry:
  <https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem>

## A2 defects and A3 repair proposals

### 1. `rem-strength-order-of-the-nonnegative-tests`: false Gauss-error claim

Class: **(a) unambiguous falsehood**.

Current text:

> *The general form of Gauss's test.* The classical statement allows an error
> $r_k$ of order $1/(k \log k)$, or more generally any error making
> $\sum |r_k|$ convergent with the relevant products controlled; the version
> proved here assumes $|r_k| \le C k^{-1-\varepsilon}$ with $\varepsilon$ a
> positive rational, which is a $p$-series bound and therefore expressible. The
> restriction costs generality, not correctness.

The first sentence is false at the load-bearing boundary $h=1$.
$1/(k\log k)$ is not absolutely summable, and a term of that order changes the
Bertrand borderline. In the model
$a_k/a_{k+1}=1+1/k+c/(k\log k)+o(1/(k\log k))$, the value of $c$ distinguishes
convergent from divergent logarithmically corrected harmonic series. It is not
a harmless Gauss remainder. Thomson–Bruckner–Bruckner Theorem 3.41 and the
standard convergence-test statement instead use an error
$O(k^{-\beta})$ for some $\beta>1$.

Proposed replacement:

> *The general form of Gauss's test.* The classical statement assumes
> $r_k=O(k^{-\beta})$ for some real $\beta>1$. The version proved here writes
> $\beta=1+\varepsilon$ with $\varepsilon$ a positive rational. This loses no
> case covered by the classical hypothesis: given $\beta>1$, choose a rational
> $0<\varepsilon<\beta-1$ and weaken the eventual bound. An error of order
> $1/(k\log k)$ is not a Gauss remainder at $h=1$; it is the next Bertrand
> borderline.

This replacement also corrects the surrounding scope claim: the rational
exponent restriction does not cost generality within the classical
$O(k^{-\beta})$, $\beta>1$, hypothesis.

### 2. `ex-abel-dini-pair-for-the-harmonic-series`: false last-divergent claim

Class: **(a) unambiguous falsehood**.

Current text:

> So the two exponents $1$ and $2$ straddle the boundary, and there is no last
> divergent series in the family.

The two displayed series do not license the last clause. In the usual fixed
family $\sum 1/(kH_k^t)$, the Abel–Dini–Pringsheim threshold is divergence for
$t\le 1$ and convergence for $t>1$, so $t=1$ is precisely the divergent
endpoint in the exponent order. The true no-slowest-series conclusion comes
from applying the construction again to the newly obtained divergent series.

Proposed replacement:

> So exponent $1$ gives a divergent member and exponent $2$ a convergent one.
> The absence of a slowest divergent positive series comes from applying
> Abel–Dini again to the newly produced divergent series, not from a
> last-exponent claim about this fixed pair.

### 3. `thm-limit-comparison-test` Fact L5 cites the wrong proposition

Class: **(b) citation-precision repair**.

Current text:

> [L5] Since $b_k > 0$, the identity $a_k = q_k b_k$ holds for every $k$, and
> multiplying an inequality between reals by $b_k > 0$ preserves it
> ([[def-series]]).

`def-series` defines series and partial sums. It states neither field division
nor preservation of order by multiplication with a positive scalar. L5 is
load-bearing in steps 3.1, 3.2, and 3.3.

Proposed replacement, with `def-field` and `lem-of-sign-rules` added to `deps`:

> [L5] Since $q_k=a_k/b_k$ and $b_k>0$, the field laws give
> $a_k=q_kb_k$. Multiplication by a positive scalar preserves strict
> inequalities; the non-strict form follows by adjoining the equality case
> ([[def-field]], [[lem-of-sign-rules]]).

`def-field` defines $x/y=x y^{-1}$ and supplies the inverse law;
`lem-of-sign-rules`, claim 4, states
$c>0\Rightarrow(a<b\Longleftrightarrow ac<bc)$.

### 4. Three unused Fact paragraphs prevent proof-contract closure

Class: **(b) citation-precision repair**. These are inventory defects, not
mathematical gaps.

- `thm-root-test` Fact L2 cites `lem-limsup-exists`, but no numbered step cites
  L2. Add `L2` to step 2.1, which uses the existence of the stated limit
  superior before treating it as an extended-real value.
- `thm-ratio-test` Fact L2 cites both `lem-limsup-exists` and
  `def-limsup-liminf`, but no numbered step cites L2. Add `L2` to step 1.3,
  where the limit superior is used as the infimum of the tail suprema.
- `ex-harmonic-series-diverges` Fact L8 identifies the example as the $p=1$
  case of the p-series theorem, while the item expressly says neither proof
  uses that theorem. Delete the unused L8 paragraph. The same identification
  remains, correctly cited, in the Example prose.

The strict proof-contract check currently reports exactly the five direct-link
errors produced by those three unused Facts: one link in the root test, two in
the ratio test, and two in the harmonic example. No other contract error or
warning remains. After the approved item edits, the `uses` arrays must be
updated to the new step citations and the removed L8 contracts deleted.

### 5. Provenance tags and source references

Class: **(c) provenance retag**.

After A3 approval, apply the statement/proof classifications above to all 37
items, remove the legacy one-axis `authorship` line wherever present, and add
the working literature URLs from the provenance rows to `sources.references`.
These are pure-retag changes unless combined with one of proposals 1-4. They do
not by themselves delete an existing judge result or audit stamp.

No deletion, id change, or reading-order change is proposed.

## Nonfatal observations under the standing triage rule

The following were read and checked, but take under 30 seconds for a competent
reader to close and receive no repair proposal:

- `lem-absolute-convergence-implies-convergence` L4 obtains
  $|u|=u$ for $u\ge0$ from the absolute-value definition although the cited
  `lem-of-abs-value` Statement only lists the algebraic absolute-value laws.
- `thm-geometric-series` L4 similarly uses $|1|=1$ as an immediate consequence
  of the definition.
- `thm-ratio-test` L3 obtains the quotient absolute-value identity from the
  cited product identity and the inverse law.
- `thm-kummer-test` L7 uses the non-strict reciprocal-order form; its source
  states the strict form, and equality supplies the missing case.
- `fs-universal-comparison-series` L3 obtains $0<x/y<x$ for $x>0$, $y>1$ from
  the cited reciprocal-order rule and ordered-field multiplication.
- The last Remark of `thm-nonnegative-series-bounded-partial-sums` says “claim
  1 returns the convergence” where claim 2 is the boundedness/convergence
  equivalence. The adjacent theorem numbering makes the intended reference
  immediate.

Two page-position claims have decayed and are recorded without being chased:

- `ex-harmonic-series-diverges` calls the harmonic behaviour “the slowest
  divergence any explicit series on this page exhibits”, but the same page now
  includes the slower Abel–Dini example.
- `ex-abel-dini-pair-for-the-harmonic-series` says the harmonic series
  “already diverges as slowly as any explicit series on this page” immediately
  before displaying a slower divergent series.

These are vague page-ranking prose, not proof premises. The precise
mathematical falsehood in the same Abel–Dini paragraph is proposal 2 above.
No other fatal mathematical error was found in the Remarks or page summaries.

## Proof-contract and coverage statement

`wave7-real-analysis-series.proof-contracts.json` contains all 35 proof-bearing
items, 317 numbered steps mapped exactly once, 357 direct Fact citations with
exact source-section text and complete current `uses` arrays, and 280 explicit
boundary dispositions. Each contract has the eight required cases and records
the independent Alpha risk review as pending. The full source section is quoted
where a shorter paragraph would omit a list clause or select only a theorem's
introductory sentence.

The read-only risk report runs clean and routes all 35 contracts as critical on
its structural score, chiefly because these items combine many dependencies,
limit language, boundary thresholds, and biconditional or multi-case claims.
That is a routing result, not a mathematical defect; Alpha's independent
refuter dispositions remain pending.

Coverage is complete: every numbered proof step and every dependency citation
in both manifest pages was read skeptically against the cited target on disk.
There is no coverage exception. Apart from the two false prose claims, the one
load-bearing miscitation, and the three unused-Fact closure repairs above, the
Statements, Constructions, proofs, refutations, examples, and counterexamples
are mathematically correct and logically valid under the standing triage rule.

## Continuity checkpoint — awaiting A3

- Current substage: A1/A2 complete; A4 not started.
- Owned artifacts: this findings file,
  `wave7-real-analysis-series.provenance.jsonl`, and
  `wave7-real-analysis-series.proof-contracts.json`.
- Completed checks: 37/37 provenance rows; 35/35 proof contracts; 317/317
  numbered steps; 357/357 direct Fact citations; 280/280 boundary cases; all
  page prose and all direct dependencies read.
- Open mathematical constraints: A3 must adjudicate proposals 1-5. The proof
  contract intentionally retains five strict errors until proposal 4 is
  approved and applied; all other strict checks are clean.
- Exact next action: receive A3 approval, then snapshot at the required A4
  granularity, apply only the approved repairs and retags, update the contracts,
  reflow and precheck every changed proof item, and run the relevant gates.

## A4 application report

A3 approved all 37 provenance determinations and five material repairs. The
provenance blocks and the 52 missing reader-visible source references are now on
disk for every manifest item. No scoped item retained a legacy `authorship`
field because none of the 37 files carried one. Pure retags retained their
existing judge and audit records. The five material items below had their stale
`verification.judge` and `verification.audited` records removed; independent
current-text certification remains an A6 obligation.

### `rem-strength-order-of-the-nonnegative-tests`

Class: **(a) unambiguous falsehood**.

Old text:

> *The general form of Gauss's test.* The classical statement allows an error
> $r_k$ of order $1/(k \log k)$, or more generally any error making
> $\sum |r_k|$ convergent with the relevant products controlled; the version
> proved here assumes $|r_k| \le C k^{-1-\varepsilon}$ with $\varepsilon$ a
> positive rational, which is a $p$-series bound and therefore expressible. The
> restriction costs generality, not correctness.

New text:

> *The general form of Gauss's test.* The classical statement assumes
> $r_k=O(k^{-\beta})$ for some real $\beta>1$. The version proved here writes
> $\beta=1+\varepsilon$ with $\varepsilon$ a positive rational. This loses no
> case covered by the classical hypothesis: given $\beta>1$, choose a rational
> $0<\varepsilon<\beta-1$ and weaken the eventual bound. An error of order
> $1/(k\log k)$ is not a Gauss remainder at $h=1$; it is the next Bertrand
> borderline.

The classical $O(k^{-\beta})$, $\beta>1$, hypothesis is recorded in
Thomson--Bruckner--Bruckner, Theorem 3.41, at
<https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf>.
The boundary calculation is direct: for
$a_k=1/(k(\log k)^c)$ the next ratio term is $c/(k\log k)$, and convergence
changes at $c=1$. The rational-exponent formulation loses no covered case
because density of the rationals supplies
$0<\varepsilon<\beta-1$, after which an $O(k^{-\beta})$ bound is eventually an
$O(k^{-1-\varepsilon})$ bound.

### `ex-abel-dini-pair-for-the-harmonic-series`

Class: **(a) unambiguous falsehood**.

Old text:

> So the two exponents $1$ and $2$ straddle the boundary, and there is no last
> divergent series in the family.

New text:

> So exponent $1$ gives a divergent member and exponent $2$ a convergent one.
> The absence of a slowest divergent positive series comes from applying
> Abel-Dini again to the newly produced divergent series, not from a
> last-exponent claim about this fixed pair.

The local derivation is exactly [[thm-abel-dini]]: in the displayed fixed pair,
the exponent-$1$ member diverges and the exponent-$2$ member converges. The
general no-slowest-divergent conclusion is obtained only by applying the same
construction again to the new divergent member. The source-backed theorem is
recorded at
<https://en.wikipedia.org/wiki/Abel%E2%80%93Dini%E2%80%93Pringsheim_theorem>.

### `thm-limit-comparison-test`

Class: **(b) citation-precision repair**.

Old dependency list omitted `def-field` and `lem-of-sign-rules`, and Fact L5
read:

> [L5] Since $b_k > 0$, the identity $a_k = q_k b_k$ holds for every $k$, and
> multiplying an inequality between reals by $b_k > 0$ preserves it
> ([[def-series]]).

New dependency list adds `def-field` and `lem-of-sign-rules`, and Fact L5 now
reads:

> [L5] Since $q_k=a_k/b_k$ and $b_k>0$, the field laws give $a_k=q_kb_k$.
> Multiplication by a positive scalar preserves strict inequalities; the
> non-strict form follows by adjoining the equality case ([[def-field]],
> [[lem-of-sign-rules]]).

`def-field` defines $x/y=xy^{-1}$ and gives the inverse law, so $b_k>0$ implies
$b_k\ne0$ and hence
$(a_kb_k^{-1})b_k=a_k(b_k^{-1}b_k)=a_k$. Claim 4 of
`lem-of-sign-rules` states
$c>0\Rightarrow(a<b\Longleftrightarrow ac<bc)$; adjoining equality yields the
non-strict form. The proof contract now quotes both source sections and records
their use in steps 3.1--3.3.

### `thm-root-test`

Class: **(b) citation-precision repair**.

Old step 2.1 ended `[step 1.1, L1, L3, L4]`. New step 2.1 ends
`[step 1.1, L1, L2, L3, L4]`. The step treats the limit superior as an existing
extended-real value, exactly the existence clause in `lem-limsup-exists`. The
contract entry `L2 -> lem-limsup-exists` now records use by step 2.1, and the
step input map contains `L2`.

### `thm-ratio-test`

Class: **(b) citation-precision repair**.

Old step 1.3 ended `[given, L1, L3]`. New step 1.3 ends
`[given, L1, L2, L3]`. The step uses the definition and existence of the limit
superior as the infimum of tail suprema, exactly the clauses cited in Fact L2.
Both L2 contract citations now record use by step 1.3, and the step input map
contains `L2`.

### Preserved owner decision and gate results

A3 declined deletion of unused Fact L8 from
`ex-harmonic-series-diverges`; that paragraph, its dependencies, its proof, and
its provenance-only audit records remain otherwise unchanged. This leaves the
strict proof-contract gate with exactly the two expected `citation-uses`
errors, one for each direct link in the unused L8 paragraph. Closing them would
require deleting the published Fact or changing a proof to use it, neither of
which A3 authorized. The issue remains in the A10 owner queue.

All 35 proof-bearing items pass precheck. Reflow left the four materially
changed proof-bearing files unchanged. `content-policy --audit` passes 37/37
with zero errors and zero warnings; `finite-smoke` has zero selected checks;
`risk-report` routes all 35 proof-bearing items as critical with zero errors;
the scoped citation and render checks pass. The scoped prose check has zero
errors and ten previously triaged heuristic warnings. The only nonpassing local
gate is the two-error proof-contract condition deliberately preserved by A3.

The stage-level `pre-A4` snapshot already bracketed the bulk retag pass.
Immediately before each material edit I recorded the dedicated baselines
`pre-A4-rem-strength-order-of-the-nonnegative-tests`,
`pre-A4-ex-abel-dini-pair-for-the-harmonic-series`,
`pre-A4-thm-limit-comparison-test`, `pre-A4-thm-root-test`, and
`pre-A4-thm-ratio-test`. The orchestrator still owns the serial `post-A4`
stage snapshot after every batch has returned.

Coverage remains complete: every numbered proof step and every dependency
citation in the pair was read skeptically during A2. A4 changed no Statement,
proof step, Fact, dependency, page summary, or source outside the actions listed
above, and no coverage exception was introduced.

## A4 recovery application — 2026-08-09

The series ledger contains no `established-knowledge` row, so none of Alpha's
23 D2 concurrences belongs to this batch. The provenance ledger and all 37
already-transcribed provenance/source determinations remain unchanged.

The A3 recovery amendment approved one outstanding class-(b)
citation-precision repair in this batch. I edited exactly
`ex-harmonic-series-diverges` and no page. The old item carried the unused
dependencies `thm-p-series-rational` and `def-rational-power` and the unused
Fact

> [L8] The rational power at exponent $1$ is the element itself, so $k^{1} =
> $\iota(k)$ and the family here is the case $p = 1$ of the $p$-series
> ([[def-rational-power]], [[thm-p-series-rational]]).

The new item omits those two dependency edges and deletes L8. The already-cited
Example prose still records that the harmonic series is the $p=1$ case, while
the two supplied arguments remain explicitly independent of the p-series
theorem. No Statement, numbered verification step, or Remark changed. The
matching two L8 citation entries were deleted from
`wave7-real-analysis-series.proof-contracts.json`; the other 13 direct citation
entries and the complete step/boundary map for the item were preserved. Because
the Fact and public dependency metadata changed materially, the stale
`verification.judge` block and obsolete `verification.audited` stamp were
removed. Independent certification and targeted rejudging remain A6/A7 work.

Reflow left the repaired item unchanged. Its targeted precheck passes. The
strict batch contract now closes with 35/35 items, zero errors, and zero
warnings. Batch content policy passes 37/37 with zero errors and warnings;
finite smoke has zero selected checks; risk routing completes for all 35
proof-bearing items; and the repaired item's citation, render, and prose checks
pass. JSON and JSONL validation succeeds. Exact recovery edit set: item
`ex-harmonic-series-diverges`; page ids: none.

## A6 Alpha adjudication — `fs-nth-term-test-converse`

The current-hash DeepSeek refuter found that the second Remark falsely said
the root and ratio tests separate $1/k$ from $1/k^2$. Both tests give their
boundary value $1$ for both families and are inconclusive. Alpha overrules the
refuter's `nonfatal` label: this is a literal mathematical falsehood, not a
sub-30-second logical gap, and mathematical accuracy is non-negotiable.

The repaired Remark now states exactly what the page licenses: the $p$-series
theorem distinguishes the two families, while the basic root and ratio tests do
not. The stale judge and `audited` records were removed. Old normalized hash:
`6d14788dac101243195e997414b709ec0462efac2f5164266d36d8ccf8f67431`.
Current normalized hash:
`36eb5cafde980084d16a8b758f984ad76a62d7033f05344d189bf92c389ee70d`.
Final-current Terra certification and DeepSeek rereading remain pending.
