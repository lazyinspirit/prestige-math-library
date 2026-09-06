# frontier-32 / Batch 5 beta scaffold notes

## Scope and reconciliation

- Task scope is the A/B pair Modes of Convergence for Random Variables:
  A order 288.103 and B order 288.104. The design at
  research/plan-probability-track.md §PT-4 and research/plan-spec.json agree
  on those orders and on the immediate prerequisite
  infinite-product-measures-and-kolmogorov-extension-examples. No
  design-versus-spec drift was found.
- The live .autopilot state belongs to frontier-23, not this dispatched run.
  It was inspected only and left untouched. This batch changes only its
  manifest, coverage harvest, and these notes.
- A has 23 planned items and B has 9. The 23-item A page is below the
  mandatory 60-item split threshold, so no page split is proposed.
- All 32 ids were checked against the current library and are unused; their
  only pre-scaffold occurrences were the PT-4 design list.

## Source receipts and harvest boundary

Two independent primary treatments were read and harvested in
research/frontier-32-batch-5.coverage.json.

1. Rick Durrett, Probability: Theory and Examples, 5th ed., textbook:
   https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf. Full 490-page PDF
   opened in the web reader on 2026-09-06. Exact harvest: contents PDF
   pp. 4-5; §§2.2-2.2.3, printed pp. 56-66 / PDF pp. 63-73; and §3.2,
   including §§3.2.1-3.2.2 and Exercises 3.2.1-3.2.12, printed pp. 116-124 /
   PDF pp. 123-132. The note of each named heading's disposition is in the
   coverage file; PT-7 receives the weak-convergence infrastructure and PT-5
   receives weak laws.
2. Sebastien Roch, Lecture 3: Modes of convergence, lecture notes:
   https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf. Full
   11-page PDF opened in the web reader on 2026-09-06. Exact harvest: §1.3
   Returning to convergence modes and §1.4 Statement of laws of large
   numbers, PDF pp. 4-5 / printed pp. 4-6. The lecture-note-set table of
   contents was separately opened at
   https://people.math.wisc.edu/~roch/grad-prob/ : its heading Notes 3:
   Modes of convergence is at HTML lines 16-27. This confirms the source is
   part of an independently harvestable lecture-note set.

Both URLs were full-text verified in the web reader. Local Node full-text
fetching and the liveness probe cannot resolve external DNS in this workspace:
source-fetch-check with stamp and force reported EAI_AGAIN for both URLs. The
coverage file therefore records honest web-open full-text receipts, including
page counts, rather than inventing byte counts or hashes. Its non-network gate
accepts those two receipts. This is an environment limitation, not a failed
source recovery: both original URLs are live and opened full text.

The coverage checker reports one advisory, 13 included results out of 69.
That low yield follows from faithfully harvesting the design-mandated Durrett
weak-law and weak-convergence ranges. Every declined heading has a particular
reason, and every deferred result names a resolving planned destination. It is
an Alpha review point, not an unresolved omission or a validator failure.

## Conventions and proof-route decisions

- All variables in A are real-valued unless an item explicitly discusses a
  pair. Almost-sure convergence is stated only after its measurable
  convergence event has been made explicit: a countable rational-tolerance,
  eventual-index expression.
- Convergence in distribution is the real-line CDF definition at continuity
  points. Polish-space weak convergence, Portmanteau, tightness, and
  representation are deferred to weak-convergence-tightness-and-representation.
- L^p convergence is on almost-everywhere equivalence classes. The d_0
  definition is not used as a metric until representative independence, the
  truncated-distance triangle inequality, and d_0(X,Y)=0 iff X=Y almost
  surely have been proved.
- The probability subsequence theorem chooses increasing least admissible
  indices with P(|X_nk-X| > 2^-k) < 2^-k, then applies first
  Borel--Cantelli. The subsequence characterization is built from this
  extraction, not cited from a later metric-space page.
- Dominated L^p convergence applies dominated convergence to p-th powers.
  The UI plus probability-convergence implication applies the published
  finite-measure Vitali theorem. The reverse implication is planned by
  separating a finite initial set from the L^1-small tail.
- Slutsky is proved directly by first obtaining tight real intervals from CDF
  bounds and then using uniform continuity; it must not cite PT-7. For a
  quotient, X_n/Y_n is assigned a fixed arbitrary value on {Y_n=0}, and the
  limiting constant c is required to be nonzero.
- Pairing uses the product-metric union bound. The continuous-map item proves
  the probability version by compact restriction and uniform continuity, then
  records sums, products, and the above quotient convention.
- The implication diagram cites its counterexamples only by permitted forward
  references to B; it does not create dependency edges from A to B.

## A-item ledger

The source column names the principal harvested support: D means Durrett §2.2
or §3.2 as located above, and R means Roch §1.3. All dependency arrays are
also explicit in the manifest.

| id | exact planned claim / role | deps | source |
| --- | --- | --- | --- |
| def-almost-sure-convergence-of-random-variables | Define X_n to X almost surely for real random variables, pending the measurable-event justification. | def-probability-measure; def-random-element-and-real-random-variable; def-real-limit | R |
| lem-almost-sure-convergence-event-is-measurable | The event on which X_n(omega) tends to X(omega) is measurable. | def-almost-sure-convergence-of-random-variables | R |
| def-convergence-in-probability | Define P(|X_n-X| greater than epsilon) tending to zero for every epsilon greater than zero. | def-convergence-in-measure; def-probability-measure; def-random-element-and-real-random-variable | D, R |
| def-convergence-in-lp-for-random-variables | Define L^p-norm convergence of real random-variable classes. | def-l-p-space-as-a-quotient-by-null-functions; def-random-element-and-real-random-variable | R |
| def-convergence-in-distribution-for-real-random-variables | Define CDF convergence at continuity points of the limit law. | def-atom-and-continuity-point-of-a-law; def-cumulative-distribution-function-of-a-random-variable; def-law-or-distribution-of-a-random-element | D |
| thm-limits-in-probability-are-unique-almost-surely | Two probability limits agree almost surely. | def-almost-sure-convergence-of-random-variables; def-convergence-in-probability | R |
| thm-almost-sure-convergence-implies-convergence-in-probability | Almost-sure convergence implies probability convergence. | def-almost-sure-convergence-of-random-variables; def-convergence-in-probability; lem-almost-sure-convergence-event-is-measurable; thm-dominated-convergence | R |
| thm-lp-convergence-implies-convergence-in-probability | L^p convergence, p greater than zero, implies probability convergence. | cor-markov-inequality-for-random-variables; def-convergence-in-lp-for-random-variables; def-convergence-in-probability | D, R |
| thm-lq-convergence-implies-lp-convergence-on-a-probability-space | L^q convergence implies L^p convergence for 0 less than p less than or equal to q. | def-convergence-in-lp-for-random-variables; def-probability-measure; thm-finite-measure-l-r-includes-into-l-p-for-p-less-r | R |
| thm-convergence-in-probability-implies-convergence-in-distribution | Probability convergence implies real distributional convergence. | def-atom-and-continuity-point-of-a-law; def-convergence-in-distribution-for-real-random-variables; def-convergence-in-probability | D |
| thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability | Distributional convergence to a constant c implies probability convergence to c. | def-convergence-in-distribution-for-real-random-variables; def-convergence-in-probability | D |
| thm-almost-sure-subsequence-from-convergence-in-probability | Every probability-convergent sequence has an almost-surely convergent subsequence. | cor-first-borel-cantelli-lemma-for-events; def-almost-sure-convergence-of-random-variables; def-convergence-in-probability; lem-almost-sure-convergence-event-is-measurable | R |
| thm-subsequence-characterization-of-convergence-in-probability | Probability convergence iff every subsequence has a further almost-surely convergent subsequence. | def-convergence-in-probability; thm-almost-sure-convergence-implies-convergence-in-probability; thm-almost-sure-subsequence-from-convergence-in-probability | R |
| def-probability-convergence-metric | Define d_0 by E[min(1, abs(X-Y))] on all real random variables modulo almost-sure equality. | def-expectation-of-a-nonnegative-or-integrable-random-variable; def-measure-null-set-and-almost-everywhere; def-probability-measure; def-random-element-and-real-random-variable | D |
| thm-probability-convergence-is-metrized-by-d-zero | d_0 is well-defined and its convergence is probability convergence. | def-convergence-in-probability; def-probability-convergence-metric; lem-expectation-is-independent-of-the-ae-representative; thm-nonnegative-integral-zero-iff-zero-almost-everywhere | D |
| thm-dominated-convergence-in-lp | An almost-surely convergent sequence under an L^p majorant converges in L^p. | def-almost-sure-convergence-of-random-variables; def-convergence-in-lp-for-random-variables; thm-dominated-convergence | R |
| thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence | Uniform integrability plus probability convergence implies L^1 convergence. | def-convergence-in-measure; def-convergence-in-probability; def-uniformly-integrable-family; thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces | D |
| thm-l1-convergence-implies-uniform-integrability | L^1 convergence makes the sequence together with its limit uniformly integrable. | def-convergence-in-l-one-of-a-measure; def-convergence-in-lp-for-random-variables; def-probability-measure; def-uniformly-integrable-family | D |
| cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence | Under probability convergence, L^1 convergence iff uniform integrability. | thm-l1-convergence-implies-uniform-integrability; thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence | D |
| thm-slutsky-for-real-random-variables | Addition, multiplication, and nonzero-limit division preserve the specified distribution/probability limits. | def-convergence-in-distribution-for-real-random-variables; def-convergence-in-probability; def-random-element-and-real-random-variable | D |
| rem-complete-convergence-implication-diagram | Record the proved arrows and B's controlled non-reversibility witnesses. | thm-almost-sure-convergence-implies-convergence-in-probability; thm-convergence-in-probability-implies-convergence-in-distribution; thm-lp-convergence-implies-convergence-in-probability; thm-lq-convergence-implies-lp-convergence-on-a-probability-space | D, R |
| lem-pairing-preserves-convergence-in-probability | Coordinatewise probability convergence gives probability convergence of pairs. | def-convergence-in-probability | R |
| thm-continuous-maps-preserve-convergence-in-probability | Continuous real maps, including arithmetic corollaries under the quotient convention, preserve probability convergence. | def-convergence-in-probability; lem-pairing-preserves-convergence-in-probability | R |

## B-item ledger

| id | exact planned claim / witness | deps | source |
| --- | --- | --- | --- |
| cex-convergence-in-probability-need-not-be-almost-sure | Independent indicator spikes of probabilities 1/(n+1) converge in probability but occur infinitely often almost surely. | cor-second-borel-cantelli-lemma-under-pairwise-independence; def-almost-sure-convergence-of-random-variables; def-convergence-in-probability | R |
| cex-almost-sure-convergence-need-not-imply-lp-convergence | Nested n^(1/p) spikes on (0,1) tend almost surely to zero with constant L^p norm. | def-almost-sure-convergence-of-random-variables; def-convergence-in-lp-for-random-variables | R |
| cex-lp-convergence-need-not-imply-almost-sure-convergence | Dyadic typewriter indicators tend to zero in every finite L^p but not almost surely. | def-almost-sure-convergence-of-random-variables; def-convergence-in-lp-for-random-variables | R |
| cex-convergence-in-distribution-need-not-be-in-probability | X_n=-X for symmetric two-point X has fixed law but remains separated from X. | def-convergence-in-distribution-for-real-random-variables; def-convergence-in-probability | D |
| cex-convergence-in-probability-need-not-imply-lp-convergence | Independent rare spikes have vanishing nonzero probability and constant L^p norm. | def-convergence-in-lp-for-random-variables; def-convergence-in-probability | R |
| cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q | n^(1/q) indicators of (0,1/n) converge in L^p but not L^q. | def-convergence-in-lp-for-random-variables | R |
| cex-almost-sure-convergence-does-not-imply-convergence-of-expectations | n times the indicator of (0,1/n) tends almost surely to zero while each expectation is one. | def-almost-sure-convergence-of-random-variables; def-expectation-of-a-nonnegative-or-integrable-random-variable | R |
| ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence | Work the least-index Borel--Cantelli extraction for a chosen summable threshold schedule. | def-convergence-in-probability; thm-almost-sure-subsequence-from-convergence-in-probability | R |
| ex-uniform-integrability-repairs-the-expectation-limit | A uniformly bounded probability-convergent sequence is UI, hence L^1- and expectation-convergent. | cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence; def-uniformly-integrable-family | D |

## Seam and non-duplication review

- The published general definition def-convergence-almost-everywhere-relative-to-a-measure
  is not silently duplicated. The new almost-sure definition packages the
  probability-specific real-variable formulation and has the new measurable
  convergence-event lemma as its explicit well-definedness justification.
- def-convergence-in-probability is deliberately the probability-space
  specialization of published convergence-in-measure, so that the mode
  diagram can state probability in its conventional form without hiding the
  finite-measure seam.
- def-convergence-in-lp-for-random-variables is a random-variable notation
  layer over the published quotient L^p space, not a second construction of
  that space.
- The published typewriter example establishes convergence in measure and
  L^1 in a measure-theory context. The planned B item states the distinct
  random-variable implication failure uniformly for finite L^p and locates it
  in the controlled mode diagram. The rare-spike examples are intentionally
  different constructions for the two distinct missing arrows: nested spikes
  for almost-sure-to-L^p failure and independent spikes for
  probability-to-L^p failure.

## Validation checkpoint

Completed after the manifest and harvest were written:

- node tools/manifest-deps.mjs research/frontier-32-batch-5.pages.json
  passed: 32 items, all explicit dependency arrays.
- node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-5.pages.json passed: 32 scoped items, no errors
  or warnings.
- The required whole-run content-policy invocation over
  research/frontier-32-batch-*.pages.json is red for two pre-existing,
  out-of-batch algebraic-geometry references:
  def-variety-scheme-theoretic and
  thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
  each name missing def-separated-morphism-schemes. This batch does not
  reference that id; the current pair's isolated policy gate passes, and the
  unrelated manifests were not modified.
- node tools/validate-plan.mjs research/plan-spec.json passed: declared order
  is acyclic and consistent with no unresolved item dependency among the
  pages currently carrying item lists.
- node tools/coverage-checklist.mjs
  research/frontier-32-batch-5.coverage.json --require-destination passed:
  one A page, 69 harvested results, no errors; the low-yield advisory above is
  preserved for Alpha.
- node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-5.coverage.json passed: 2/2 source receipts.
- node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-5.coverage.json --stamp --force could not
  perform a local re-fetch because both hostnames returned EAI_AGAIN. The
  truthful manual full-text receipts remain in place.
- node tools/url-sweep.mjs --coverage
  research/frontier-32-batch-5.coverage.json --out
  /tmp/frontier-32-batch-5-url-liveness.json --recover --fail-on-dead is
  also red solely because this shell's curl cannot resolve either source host
  or the separately verified Roch note-index host. The web reader opened all
  three original URLs live, including both full PDFs, so changing sources or
  asserting a dead-link archive recovery would be false. The report is kept
  in /tmp and no source URL was silently changed.

Final status: the batch-scoped manifest, policy, coverage, source-receipt, and
whitespace gates pass. The whole-run manifest-dependency and plan gates were
also run; the former passes and the latter reports an acyclic consistent plan.
The two red whole-run checks described above remain external to this batch:
unrelated algebraic-geometry dependency records and workspace DNS failure in
curl. No mathematical or source-content obligation remains for this scaffold;
authoring is a later step and is out of scope for these authorized files.

## Step-3 fix pass

- **Finding id:** none assigned. The batch-5 entry in
  `research/frontier-32-alpha-b-step3-verdicts.json` is solely
  `{"page":"modes-of-convergence-for-random-variables","verdict":"sufficient"}`;
  the prose review likewise records no batch-5 defect or requested repair.
  **Disposition:** stands; no repair is applicable. No finding identifier has
  been invented or renumbered.
- **Evidence:** the reviewed 23-item A and 9-item B route still agrees with
  PT-4 (`research/plan-probability-track.md:491-556`) and the current plan
  entries (A 288.103, B 288.104, with the stated prerequisites). The A
  manifest keeps the measurable convergence-event justification on A through
  `justified_by`, keeps B witnesses as non-load-bearing `forward_refs`, and
  has no A-to-B dependency. Each item retains an explicit `deps` array.
  Both recorded independent source treatments were fetched and read again on
  2026-09-06: Durrett, `https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`,
  §2.2 (PDF pp. 63-73) and §3.2 (PDF pp. 123-132), including the
  convergence-in-probability and real-CDF weak-convergence definitions; and
  Roch, `https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes3.pdf`,
  §1.3-§1.4 (PDF pp. 3-4), with the lecture-note-set index at
  `https://people.math.wisc.edu/~roch/grad-prob/` lines 19-27. Their named
  results and dispositions remain faithfully recorded in the coverage ledger.
- **Changed scaffold record:** no change to
  `research/frontier-32-batch-5.pages.json` or
  `research/frontier-32-batch-5.coverage.json`; this notes entry is the sole
  fix-pass record. The current manifest is dependency-closed for its planned
  route, and the coverage harvest needs neither URL repair nor a new source.

Validation after this fix pass:

- `node tools/manifest-deps.mjs research/frontier-32-batch-5.pages.json`:
  32 items and 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-5.coverage.json
  --require-destination`: 69 harvested results and 0 errors; its sole warning
  remains the reviewed 13/69 low-yield advisory.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-*.pages.json`: 670 scoped items, 0 errors, and
  0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: declared order
  acyclic and consistent, with no item-level cycle, B-page dependency, forward
  reference, or unresolved id among pages with item lists.
- `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-5.coverage.json`: 2/2 sources fetch-verified.

Next action: authoring may use the unchanged A/B scaffold; no Step-3 repair
remains for this batch.

## Step-5 authoring

- Authored the two draft pages at
  `library/probability/modes-of-convergence-for-random-variables.md` and
  `library/probability/modes-of-convergence-for-random-variables-examples.md`.
  Their lists contain exactly the manifest's 23 A items and 9 B items.
- Authored A ids:
  `def-almost-sure-convergence-of-random-variables`,
  `lem-almost-sure-convergence-event-is-measurable`,
  `def-convergence-in-probability`, `def-convergence-in-lp-for-random-variables`,
  `def-convergence-in-distribution-for-real-random-variables`,
  `thm-limits-in-probability-are-unique-almost-surely`,
  `thm-almost-sure-convergence-implies-convergence-in-probability`,
  `thm-lp-convergence-implies-convergence-in-probability`,
  `thm-lq-convergence-implies-lp-convergence-on-a-probability-space`,
  `thm-convergence-in-probability-implies-convergence-in-distribution`,
  `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability`,
  `thm-almost-sure-subsequence-from-convergence-in-probability`,
  `thm-subsequence-characterization-of-convergence-in-probability`,
  `def-probability-convergence-metric`,
  `thm-probability-convergence-is-metrized-by-d-zero`,
  `thm-dominated-convergence-in-lp`,
  `thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence`,
  `thm-l1-convergence-implies-uniform-integrability`,
  `cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence`,
  `thm-slutsky-for-real-random-variables`,
  `rem-complete-convergence-implication-diagram`,
  `lem-pairing-preserves-convergence-in-probability`, and
  `thm-continuous-maps-preserve-convergence-in-probability`.
- Authored B ids:
  `cex-convergence-in-probability-need-not-be-almost-sure`,
  `cex-almost-sure-convergence-need-not-imply-lp-convergence`,
  `cex-lp-convergence-need-not-imply-almost-sure-convergence`,
  `cex-convergence-in-distribution-need-not-be-in-probability`,
  `cex-convergence-in-probability-need-not-imply-lp-convergence`,
  `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q`,
  `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations`,
  `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence`,
  and `ex-uniform-integrability-repairs-the-expectation-limit`.
- Every authored item is `status: draft`, has literature-derived statement
  provenance and either an ai-generated local proof or `not-applicable` proof
  provenance. The definitions and implication claims retain the Durrett/Roch
  sources recorded in the batch coverage; local proof facts cite the exact
  dependency statement used. The d-zero definition retains its
  `justified_by` theorem, and the implication diagram retains B-only
  `forward_refs` rather than acquiring A-to-B dependencies.
- The only intended narrowing is the planned one: $L^p$ convergence is stated
  for $1\le p<\infty$, $L^q\Rightarrow L^p$ for $1\le p<q\le\infty$, and
  the distributional definition is real-CDF convergence. Slutsky's quotient
  retains $c\ne0$ and an arbitrary fixed value only on the zero-denominator
  event. No planned claim was dropped.
- Completed `research/frontier-32-batch-5.proof-contracts.json`: 26
  proof-bearing items, with exact cited source sections, per-step inputs, and
  all eight standard boundary dispositions.
- Checks run after canonical phase-order repairs:
  `node tools/tsx-run.mjs tools/precheck.mts` with all 32 explicit manifest
  `items/ID.md` paths — 26 proof-bearing items checked, 0 failing;
  `node tools/validate-plan.mjs research/plan-spec.json` — declared order
  acyclic and consistent, no item cycle/forward-reference/B-page dependency
  or unresolved id among pages with item lists;
  `node tools/content-policy.mjs research/frontier-32-batch-5.pages.json` —
  32 scoped items, 0 errors, 0 warnings; and
  `node tools/proof-contract.mjs research/frontier-32-batch-5.proof-contracts.json --strict`
  — 26/26 items, 0 errors, 0 warnings. Running `validate-plan.mjs` without
  its required plan argument reported usage only; the plan-argument invocation
  above is the completed validation.
- Blockers: none in this batch.
