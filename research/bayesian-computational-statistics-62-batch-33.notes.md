# Batch 33 authoring notes — Metropolis–Hastings kernels

## Scope and plan comparison

Owned pages: `metropolis-hastings-algorithm-and-invariance` (A, order 2106) and
`metropolis-hastings-algorithm-and-invariance-examples` (B, order 2107), in
`bayesian-computational-statistics`. The complete BCS-30 design heading is at
`research/plan-bayesian-computational-statistics-track.md:153`; its body begins
on line 154. The current `research/plan-spec.json` entry is labelled BCS-30.
Page IDs, titles, category, order, companion, and the
`general-state-mcmc-kernels-and-reversibility` requirement agree; no substantive
plan/spec conflict was found. The task's L153 points to the design heading, not
the first body line. The owner direction and current plan control; batch 33 is
the dispatch identity.

The pair retains the general proposal-kernel scope, greatest symmetric
accepted-flow construction, rejected self-loop, common-density ratio,
reversibility and invariance, the four planned examples, and the explicit
warning that invariance alone proves no irreducibility, uniqueness, convergence,
mixing rate or CLT.

## Inventory and dependency levels

The scaffold manifest was populated before carrier authoring. The A page owns
five items, including one new local intermediate result; the B page owns four
examples. In-run logical dependencies and levels are:

| Item | In-batch suppliers | Level |
|---|---|---:|
| `lem-common-submeasure-density-is-pointwise-minimum` | none | 0 |
| `lem-common-submeasure-and-bounded-radon-nikodym-density` | none | 0 |
| `alg-metropolis-hastings-kernel` | common-submeasure lemma | 1 |
| `lem-metropolis-hastings-density-ratio` | algorithm, both common-submeasure lemmas | 2 |
| `thm-metropolis-hastings-kernel-is-reversible-and-invariant` | algorithm, common-submeasure lemma | 2 |
| `ex-random-walk-metropolis-hastings` | algorithm, density-ratio lemma, invariance theorem | 3 |
| `ex-independence-metropolis-hastings` | algorithm, density-ratio lemma, invariance theorem | 3 |
| `ex-metropolis-hastings-proposal-support-failure` | algorithm, density-ratio lemma, invariance theorem | 3 |
| `ex-metropolis-hastings-rejected-self-transition` | algorithm, density-ratio lemma, invariance theorem | 3 |

All nonlocal item dependencies are existing published definitions, measure
results, kernel-integration results, or RN suppliers and are listed explicitly
in the carriers and manifest. The original density-ratio argument needed the
greatest-common-submeasure fact for arbitrary finite measures with densities.
The existing finite common-submeasure lemma covers the special construction
from `rho + sigma`, but did not establish that density-wise minimum for the
general common reference measure. The new level-zero local lemma proves this
fact: every common lower measure has an RN density bounded by both densities
almost everywhere, so its measure is dominated by the integral of their
pointwise minimum. The ratio lemma now applies it to the proposal flow and its
transpose. Its measurable ratio version is explicitly a version of the RN
derivative, with no pointwise uniqueness claimed on forward-flow null sets.
The finite common-submeasure lemma supplies the general procedure's bounded
measurable acceptance version. These RN uses require AC, inherited from the
published RN supplier; uses are declared in the relevant items. The
common-density calculation is proved from product densities and Tonelli. The
main theorem proves symmetry of the accepted flow plus the rejected diagonal
flow, then proves invariance directly from the joint measure.

## Cross-batch prerequisite reviewed

The exact prerequisite is page `general-state-mcmc-kernels-and-reversibility`
in batch 32. A first scan, made while the controller status showed Step 1
scaffold 0/62 and no running worker, found no carrier. A later direct file check
found the page and its two actual A items. I read the page, the complete
`def-general-state-reversibility-by-symmetric-flow-measure` definition and the
complete proof of `thm-general-state-reversibility-implies-invariance`; both
current Step 1 records resolve ready with closed current-input hashes. The
actual supplier defines reversibility by the same symmetric joint-flow measure
and proves invariance for any probability kernel and probability target on a
measurable space. Batch 33 verifies those exact hypotheses in its local kernel
and flow proof, then applies the actual general-state theorem. The formerly
open page edge and both item-level edges are now marked verified in
`research/bayesian-computational-statistics-62-batch-33.cross-batch-dependencies.json`.
This supplier check is authoring evidence, not independent approval. No other
pair's files were edited.

The dispatch input SHA-256 was
`4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`. Adding
the new local item and its dependencies changed the run-wide scheduling input.
The read-only `computeRunBatchDependencyLevels` recomputation at handoff gives
SHA-256
`05e2d4fbd15e69c0c99766c05e36753e043dad35d2cc9cbe7ad82b16bee46da9`; batch 33
remains level 1 and requires batch 32. The shared
`research/bayesian-computational-statistics-62-batch-dependency-levels.json`
currently fails `node tools/batch-dependency-levels.mjs check --run
bayesian-computational-statistics-62` as stale. It is shared scheduling state
and was left untouched; the owner/engine must regenerate it before the next
dispatch. Other planned consumers include BCS-31, BCS-34, BCS-35, BCS-44 and
BCS-46; their ownership is unchanged.

## Sources read and dispositions

The source coverage is recorded in
`research/bayesian-computational-statistics-62-batch-33.coverage.json`, including
locators, exact supported items, result dispositions, and fetch stamps.

- Art Owen, *Monte Carlo Theory, Methods and Examples*, complete Chapter 11
  PDF, §§11.3–11.4, printed pp. 15–20. Read the detailed-balance equations,
  density-ratio derivation, full accept/reject algorithm and rejected-state
  discussion. Owen's proof is in the density/countable presentation; it supports
  the ratio and procedure conventions, while the general measure-flow proof is
  supplied locally.
- Roberts and Rosenthal, *General State Space Markov Chains and MCMC
  Algorithms*, complete 64-page PDF, §2 and §2.1, printed pp. 4–6. Read the
  reversible-kernel proposition, its proof, the MH proposal, ratio and
  Proposition 2 proof. The local proof does not import external convergence or
  small-set claims.
- John K. Hunter, *Measure Theory*, complete 93-page notes, Theorem 6.27 and
  its finite-measure proof in §6.8, printed pp. 75–76. Used to inspect the RN
  density existence/uniqueness reasoning supporting the new local meet lemma.
  The following sigma-finite extension on p. 77 contains an apparent index
  typo: its `nu_s` sum uses `nu_ia` instead of `nu_is`. We inspected but did not
  rely on that extension; the local supplier has a complete proof from the
  inspected RN theorem and local measure results.

The Owen browser PDF viewer first returned 403. Search found alternative full
texts and direct retrieval of the author-hosted PDF succeeded; the complete
relevant sections were inspected in the retrieved copy. The final
`node tools/source-fetch-check.mjs --coverage
research/bayesian-computational-statistics-62-batch-33.coverage.json --stamp`
returned 3/3 fetch-verified sources, 0 newly stamped, and 0 unresolved. The
coverage file preserves the earlier retrieval history. Source citations do not
substitute for the local common-measure, acceptance-version,
kernel-measurability, or symmetry arguments.

The RN density is an almost-everywhere class. The algorithm explicitly chooses
a measurable version; accepted flow is version-independent, while transitions
from a target-null set of starting states can depend on pointwise choices. The
common-density lemma records the forward-zero convention. No stronger
pointwise uniqueness is claimed.

## Finite examples, checks, and handoff

The four planned finite examples retain their stated matrices and boundary
cases. Direct exact-rational calculations recorded in the proof contracts give
row sums one and detailed-balance residual zero in each case. The invariant
vectors are `(1/2,1/3,1/6)` for the three-state random walk, `(3/4,1/4)` for the
independence sampler, uniform mass for the disconnected-support proposal, and
`(2/3,1/3)` for the rejected-self-transition example. In the disconnected
case, `delta_2 P = delta_2` also witnesses non-uniqueness. The tool registry has
no MH-specific `finite-smoke` entry, so the finite calculations are represented
by complete carrier proofs, contract derivations, and the exact-rational
verification; no registry entry was invented.

The final scoped checks recorded after the carrier edits were: manifest
dependencies (9 items, no missing/error); content policy (9, no errors or
warnings); focused dependency closure (484 items across 275 pages, no errors or
warnings); render check (9 items plus 2 pages, no errors or warnings);
`proof-layout` (9 explicit items, 39 steps, no defects); `precheck` (8
proof-bearing items pass, algorithm N/A, no failures); strict proof contracts
(9 items, no errors or warnings); and source fetch check (3/3, none unresolved).
The nine final Step 1 records are `ready` with `owner: false`, and each records
its examined dependencies and evidence. These are authoring records, not
independent approval.

At the latest read-only autopilot status check (2026-10-15 05:03:41 UTC), the
run remained `running` at `1-scaffold`, with 10/62 batches covered and nothing
in flight. The run has unrelated blockers: an item-handoff YAML parse failure
for “Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy”
at 04:32:48Z, and the owner-repair/recertification hold recorded at 04:47:40Z
in `research/bayesian-computational-statistics-62-step1-blockers.json`. No
autopilot state or blocker file was changed. The batch-33 carriers and evidence
are ready for owner reconciliation; the stale shared batch schedule and these
run-level blockers remain outside this pair's ownership.
