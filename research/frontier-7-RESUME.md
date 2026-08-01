# Frontier 7 — selected eight-pair build state

**Started 2026-08-01.** The owner selected eight ready A/B pairs. This record
covers steps 0–10 only; all new content remains `status: draft`, and neither
publication nor an owner-audit stamp is authorized by this build.

## Step 0 — selection and batching

The frontier was recomputed from `research/plan-spec.json` and the page files.
Every selected A page has only published direct prerequisites. The selected
pairs span static dependency levels, but have no dependencies on one another;
this is an owner-selected mixed run, not a claim that they occupy one static
level. No pair may cite another selected pair unless a later approved scaffold
establishes a genuine, order-legal item-level need.

| A-page id | category | direct published prerequisites | batch |
|---|---|---|---:|
| `normal-subgroups-and-quotient-groups` | abstract algebra | `cosets-and-lagranges-theorem` | 1 |
| `eulerian-and-hamiltonian-graphs` | combinatorics | `trees-forests-and-spanning-trees` | 1 |
| `the-logarithm-and-general-powers` | real analysis | `the-exponential-function` | 2 |
| `sine-cosine-and-the-definition-of-pi` | real analysis | `the-exponential-function` | 2 |
| `convexity` | real analysis | `darboux-lhopital-and-taylor` | 3 |
| `the-total-derivative` | real analysis | `rn-as-a-normed-space`, `darboux-lhopital-and-taylor` | 3 |
| `tychonoff-embedding-and-stone-cech` | topology | `urysohn-lemma-and-tietze`, `nets-and-filters` | 4 |
| `metrization-theorems` | topology | `countability-axioms-and-cardinal-functions`, `partitions-of-unity-and-paracompactness` | 4 |

Every Beta batch has exactly two A/B pairs (four page objects). This is the new
standing capacity cap, enforced for future batch manifests by
`tools/content-policy.mjs --manifest-only`. The requested pages had no item lists at Step 0, so
the item-level cross-batch seam count is not yet computable; the Step-3 review
will compute it from the submitted scaffolds instead of reporting a false zero.

## Artifact assignment

| batch | Step-1/2 owner | artifacts |
|---:|---|---|
| 1 | Beta-frontier7-1 | `research/frontier-7-batch-1.{pages.json,notes.md,proof-contracts.json}` |
| 2 | Beta-frontier7-2 | `research/frontier-7-batch-2.{pages.json,notes.md,proof-contracts.json}` |
| 3 | Beta-frontier7-3 | `research/frontier-7-batch-3.{pages.json,notes.md,proof-contracts.json}` |
| 4 | Beta-frontier7-4 | `research/frontier-7-batch-4.{pages.json,notes.md,proof-contracts.json}` |

The paired Step-7 judges are permanently configured for independent sixteen-call
DeepSeek V4 Pro and GPT-5.6 Terra lanes (thirty-two calls combined); both lanes
still receive each item's identical frozen A/B-pair context.

## Mechanism-effectiveness monitoring

`research/frontier-7-mechanism-effectiveness.md` is the live evidence ledger for
this run. Update it after every stage that can exercise a new control, including
zero-trigger results. The Step-10 report must distinguish an observed prevention
or detection from a mechanism that merely ran cleanly, and must report its
measured cost or remaining blind spot.

## Continuity checkpoint — Step 6 in progress

**Owner policy in force:** do not repair after a judge has begun until both
DeepSeek and Terra have completed the same frozen prompt; this checkpoint is
before Step 7, so no judge call exists yet. DeepSeek V4 Pro (`max` thinking) and
fresh GPT-5.6 Terra have independent 16-call lanes. Step 10 remains the sole
owner pause; there is no publish, owner audit, commit, or push authority.

**Current state:** Step 6 is frozen after Alpha's independent-reader audit and
the orchestrator's personal review of the five twice-touched records. Alpha
repaired the empty-family, Stone--Cech evaluation-closure, Niemytzki
complete-regularity, and source-convention issues; two invalid local metrization
constructions were replaced by visible source-backed `proved_here: false`
`rem-` fallbacks. The post-escalation typography and source-convention snapshots
are recorded in `research/frontier-7-touches.json`. The orchestrator reran the
full core gate set from disk: all passed, including 146/146 strict proof
contracts, current impact receipt, 405 published-backward plus 302 same-batch
manifest edges, and plan validation.

**Step 7:** the complete paired sweep has begun against this frozen text, writing
`research/frontier-7-judge{,-attempts,-cost}.jsonl`. DeepSeek V4 Pro and Terra
have independent 16-call pools; partial verdict counts are not decisions. Do not
edit anything or ask Alpha to repair until both lanes have a current,
hash-matching verdict for every in-scope item. Once coverage is complete, Alpha
alone adjudicates every rejection, then any repair receives a paired targeted
rejudge before the workflow proceeds.

**Step 8:** Step 7 completed with 185/185 current, hash-matching verdicts from
each lane and no nulls or mismatches. The ledger contains 52 unique DeepSeek and
93 unique Terra rejection candidates. Alpha is now adjudicating every candidate
from the frozen ledger against current disk; the required output is
`research/frontier-7-judge-adjudications.jsonl`. No repair may occur outside
that adjudication, and every material repair must receive another paired targeted
rejudge before Step 9.

**Step-8 adjudication checkpoint:** Alpha completed all 145 unique
model/context decisions (one raw verdict was a duplicate): 13 confirmed-fatal
records across `def-inflection-point-by-change-of-convexity`,
`def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`,
`cor-trigonometric-parity-and-pythagorean-identity`,
`thm-sine-cosine-zero-sets-and-fundamental-period`,
`thm-convex-functions-are-differentiable-off-a-countable-set`, and
`lem-alexandroff-urysohn-metrization-lemma`; the other candidates are 82
confirmed nonfatal and 50 false positives. Alpha is repairing only this
seven-item fatal set and refreshing the affected artifacts. The next action
after its gate receipt is a paired targeted rejudge of every materially changed
item, then `level-coverage --verify-current-context` before Step 9.

## Continuity checkpoint — after final targeted rejudge

**Owner policy in force:** the orchestrator checkpoints at 50% context use;
Beta and Alpha checkpoint at 60% of their own context. A checkpoint resumes
work immediately and is never a publication authorization. No publication,
owner audit, commit, or push has been performed or is authorized.

**Frozen/current judge state:** the final targeted replay of
`thm-hyperbolic-identities-and-derivatives` has a paired PASS from DeepSeek V4
Pro and GPT-5.6 Terra on the same current prompt hash
`079a82e3724e5ecb9e352e6cfa9931e57e2baeeef8923ff69a7eaf21a02ba9a7`.
There are no active judge slots. The judge ledger is
`research/frontier-7-judge.jsonl`; adjudications are in
`research/frontier-7-judge-adjudications.jsonl`. Alpha is closing the two
previously unadjudicated targeted-rejection records and updating the measured
effectiveness ledger.

**Closure work in progress:** Alpha is creating the required
`frontier-7-audit-coverage.json` and `frontier-7-dependency-spine-audit.json`
receipts after reading their actual template scopes. Once present, run
`tools/level-coverage.mjs --verify-current-context` against all four batch
manifests, the merged contracts, the judge ledger, and both receipts. If it
identifies any consumer whose judge context changed because an in-scope cited
dependency changed, run a paired targeted rejudge for that item before Step 9;
do not treat a stale prompt as coverage. Then complete the Step-9 published
scope-denial sweep and Step-10 report. The known publication-time scope item is
the already-deferred oscillator orientation remark; it remains true while this
frontier is draft and must be repaired only in a separately authorized
publication change. The exact two-surface amendment is staged, unapplied, in
`research/frontier-7-published-amendments.md`.

**Working-tree baseline:** the established documentation/tool changes and all
Frontier-7 items/pages/research artifacts remain intentionally uncommitted;
`git diff --check` is clean. Preserve unrelated dirty work.

## Step 10 complete — owner pause

The current-context coverage gate, full mechanical gates, paired final
hyperbolic PASS, complete Alpha adjudication ledger, and independent spine
receipt are all complete. Step 9 found no current public falsehood because all
new pages are draft; it staged the two required future oscillator-orientation
prose amendments in `research/frontier-7-published-amendments.md` without
editing published content. The complete fatal-error and mechanism-effectiveness
rundown is `research/frontier-7-step10-rundown.md`. Stop here for the owner:
the next action requires an explicit owner decision on audit/publication. Do
not publish, commit, or push automatically.

## Publication update — 2026-08-02

The owner authorized publication after the completed audit. All 185 Frontier-7
items and all 16 Frontier-7 A/B pages are now `published`. The publication also
applied the two required oscillator-orientation amendments and refreshed the
amended published remark's owner audit date. The separate publication receipt is
`research/frontier-7-publication.md`.
