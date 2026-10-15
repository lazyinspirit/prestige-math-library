# Statistical Models and Experimental Methods — batch 32 notes

Run: `statistical-models-experiments-62`  
Pair: `nelson-aalen-kaplan-meier-greenwood` / `nelson-aalen-kaplan-meier-greenwood-examples`  
Batch dependency level: 2; prerequisite batches: 28, 30, 31.  
Dispatch scheduling input: `5401322ce3a43475d6235fc3f6def6a2baf8d160caf505c09b4352f7dc6d2890`.

## Plan comparison and conflict record

The controlling design is SME-32 at L230 of
`research/plan-statistical-models-experiments-track.md`. It calls for the
right-censoring counting and at-risk processes, Nelson–Aalen and Kaplan–Meier
definitions, Greenwood's first-order variance interpretation, a finite-support
consistency proof, a separate continuous-time pointwise influence expansion,
and a hand calculation with a support-loss example. It explicitly requires a
proved random-risk-set remainder before applying the SME-31 terminal influence
theorem and excludes process bands. The A and B carriers preserve that scope,
endpoint/tie conventions, and warning.

The task's six page prerequisites exactly match the `requires` list for this
page in `research/plan-spec.json`: SME-28 event-time observation, SME-30
counting-process integrals, SME-31 terminal influence limits, MSF-02
estimators, MSF-14 delta method, and conditional expectation. The narrative
design names the corresponding supplier pages. This is a page-versus-item
interface distinction, not a content conflict: the item manifest names the
exact proof suppliers actually used, including Tonelli for the subject
influence second moment. No design/plan-spec conflict required a scope change.

The dispatch-pinned input is `5401322...`. The on-disk generated input before
our manifest edits was `3ecd0117...`; the final read-only recomputation after
the edits is `c294d92c0bb3e28f5dec6a45b66207fed770a4132ea16a98661c841ea1d3b0dd`.
It still places batch 32 at level 2 with prerequisites `[28,30,31]`. The shared
run dependency artifact was not modified; the owner can refresh it after batch
authoring is reconciled.

## Inventory, logical dependencies, and levels

| Item | Home | In-batch suppliers | Level |
|---|---|---|---:|
| `def-nelson-aalen-kaplan-meier-greenwood-estimators` | A | none | 1 |
| `lem-finite-support-risk-set-proportion-limits` | A | estimator definition | 2 |
| `thm-finite-support-nelson-aalen-kaplan-meier-consistency` | A | estimator definition; finite-support risk-set lemma | 3 |
| `lem-uniform-right-censoring-risk-set-convergence` | A | estimator definition | 2 |
| `thm-pointwise-nelson-aalen-kaplan-meier-greenwood-limit` | A | estimator definition; uniform-risk-set lemma; counting-process contract/brackets/integral/isometry; Tonelli; terminal influence limit; delta method | 6 |
| `ex-kaplan-meier-hand-risk-set-and-support-loss` | B | estimator definition | 2 |

The complete direct `deps` arrays are in
`research/statistical-models-experiments-62-batch-32.pages.json`. External
item dependencies were also inspected; levels count only suppliers in this
run. The finite-support ratio argument is authored before its consistency
consumer; the pointwise theorem uses the separate uniform-risk-set result.
Recomputation over batches 28–32 produced 32 items, no level errors and no
cycles; the six batch-32 labels above match computed levels.

## Mathematics, upstream evidence, and unresolved checks

The estimator definition uses `Y_i(t)=1{U_i≥t}` and specifies the positive-risk
domain, event-at-tie convention, left endpoint, tied failures, and zero-risk
extension. It separates the discrete-support cumulative hazard
`sum q_j` from `-log S` and labels Greenwood as a first-order asymptotic
variance estimate, not an exact finite-sample variance. The finite-support
proof establishes event/risk ratios by Chebyshev and then inducts through
ordered event times, retaining the positive event- and censor-survival
horizon. The uniform risk-set lemma handles censoring atoms with one-sided
limits, finite partitions, monotonicity, and bounded convergence in
probability. The pointwise theorem states independent censoring, positive
support, the square-integrable compensator model contract, and
`integral lambda/s_0 < infinity`; it proves the random denominator remainder,
subject influence square-integrability by Tonelli, terminal CLT application,
log-product remainder, pointwise delta step, and Greenwood consistency. It
does not claim process convergence or confidence bands. The B example checks
the risk-set arithmetic and constructs two event tails with the same observed
law under a fixed censoring horizon.

The cross-batch file records exact supplier interfaces and inspected evidence.
The actual event-observation definition and its current Step-1 record are
ready. The current bodies of the batch-30 counting-process contract, bracket,
L² integral, and isometry suppliers were read; their hypotheses and proofs
support the consumer arguments. Batch-30 readiness records/evidence are still
incomplete, so those supplier readiness checks remain open. The full
`thm-iid-terminal-influence-limit` statement and proof were inspected; it
requires a separately proved expansion and centered finite-variance subject
influence. Its existing Step-1 record is escalated and was not overwritten.
Accordingly, the pointwise theorem is recorded escalated, with those exact
supplier checks unresolved. A final manifest audit also caught that the
theorem's already-cited local supplier
`lem-uniform-right-censoring-risk-set-convergence` was missing from its
manifest dependency array. The manifest now declares that direct dependency;
the existing escalated record was not overwritten, so its `dependencies`
field does not yet list this local supplier. Owner reconciliation must refresh
that escalation with the corrected examined-dependency list. The other five
assigned items have complete local proofs or calculations and ready records.

The A page uses six full-text sources, with exact locators, item mappings,
harvested-result dispositions, and fetch stamps in
`research/statistical-models-experiments-62-batch-32.coverage.json`:

- Lu Tian, Stanford STAT331 Unit 3, PDF pp. 1–12:
  https://web.stanford.edu/~lutian/coursepdf/unit5.pdf
- Lu Tian, Stanford STAT331 Unit 12, PDF pp. 5–10 and 12–14:
  https://web.stanford.edu/~lutian/coursepdf/stat331-onesample.pdf
- Qiqing Yu, *Survival Analysis* lecture notes, §§4.2.1–4.2.2, PDF pp. 30–38:
  https://people.math.binghamton.edu/qyu/ftp/surv5.pdf
- NIST/SEMATECH Engineering Statistics Handbook, §8.2.1.5, PDF pp. 103–104:
  https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf
- R. M. Dudley, *Uniform Central Limit Theorems*, Theorem 1.3 and proof,
  PDF pp. 1–2:
  https://assets.cambridge.org/97805217/38415/excerpt/9780521738415_excerpt.pdf
- A. van der Vaart, *Mathematical Statistics* ETH lecture notes, Theorem 6.4.1
  and proof, PDF pp. 114–115:
  https://stat.ethz.ch/~geer/mathstat.pdf

The six sources were retrieved and inspected in full for their cited results;
`source-fetch-check --stamp` verified 6/6 (five newly stamped, one existing
verified stamp reused). Coverage records 16 harvested results, with 11 included
or inline and the remaining results explicitly out of scope (process limits,
finite-support asymptotic normality, and plotting-position modifications).
There were no retrieval failures, drops, or unresolved source-resolution
entries. AC is declared as inherited where the terminal CLT or counting
process integration interface uses it; the local arguments add no choice
principle.

## Scoped check results

| Check | Result |
|---|---|
| `manifest-deps` | 6 items; 0 normalized; 0 errors |
| `content-policy` | 6 scoped items; 0 errors; 0 warnings |
| focused `depcheck` | 6 items; 0 errors; 0 warnings |
| `precheck` | 6 files; 5 proof-bearing passed; definition not applicable; 0 failed |
| `rendercheck` | 8 changed items/pages; 0 errors; 0 warnings |
| explicit `proof-layout` | 6 items; 18 steps; 0 defects |
| strict proof-contract check | 6/6; 0 errors; 0 warnings |
| boundary audit | 48 rows; 0 templates; 0 contradicted candidates |
| coverage checklist | 16 harvested results; 0 errors; 0 warnings |
| `source-fetch-check --stamp` / check | 6/6 verified; final check passed |
| item dependency levels, batches 28–32 | 32 items; 0 errors; no cycles |

The full run's Step-1 state is held by a separate owner blocker in batch 21.
That run status and owner evidence are outside this pair's files and were left
untouched. Step-1 readiness records here are authoring evidence, not independent
approval.
