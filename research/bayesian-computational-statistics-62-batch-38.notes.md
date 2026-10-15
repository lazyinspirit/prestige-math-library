# Batch 38 authoring notes — Langevin algorithms: ULA bias and MALA exactness

## Scope and plan comparison

Owned pages are `langevin-monte-carlo-mala-and-ula` (A, order 2116) and
`langevin-monte-carlo-mala-and-ula-examples` (B, order 2117), in
`bayesian-computational-statistics`. The controlling plan section is BCS-35 at
`research/plan-bayesian-computational-statistics-track.md:168-169`; the
matching `research/plan-spec.json` entry is BCS-35. Page IDs, titles, category,
orders, companion, and the requirements on
`numerical-optimization-for-statistical-computation` and
`metropolis-hastings-algorithm-and-invariance` agree. The design names BCS-20
and BCS-30 while this run schedules those pages in batches 23 and 33; this is a
label-to-batch mapping, not a substantive conflict. No design/spec conflict
was found. The task design's exact assumptions and warnings remain controlling.

The A page preserves the ULA update, the common Gaussian MALA proposal and
Hastings correction, rejected self-transitions, exact MALA invariance, the
Gaussian ULA variance $2/(2-\gamma)$ for $0<\gamma<2$, and the source's
quantitative weighted-TV theorem under its full smoothness and radial-drift
conditions. The B page contains the three planned examples: the critical ULA
step, Gaussian stationary bias, and Gaussian MALA correction. No convergence,
uniqueness, or rate is inferred from the basic ULA definition or from MALA
invariance.

## Inventory and dependency levels

The scaffold manifest was populated before carriers and records all 14 items,
their direct logical `deps`, and levels. The A page has 11 items and the B page
has three, both below the 100-item cap. In-run suppliers and item levels are:

| Item | In-run suppliers | Level |
|---|---|---:|
| `def-v-weighted-total-variation-distance` | none | 0 |
| `lem-ula-potential-coercivity-from-radial-drift` | none | 0 |
| `lem-langevin-potential-exponential-generator-drift` | potential-coercivity lemma | 1 |
| `alg-unadjusted-langevin-algorithm` | `alg-gradient-descent` (batch 23) | 1 |
| `lem-weighted-pinsker-inequality-for-probability-laws` | weighted-TV definition | 1 |
| `lem-langevin-gaussian-proposal-kernel` | ULA algorithm | 2 |
| `thm-ula-gaussian-target-invariant-law-and-stationary-variance` | ULA algorithm | 2 |
| `ex-ula-critical-step-has-no-invariant-law` | ULA algorithm | 2 |
| `lem-ula-fixed-step-gaussian-kernel-exponential-drift` | Gaussian proposal kernel | 3 |
| `alg-metropolis-adjusted-langevin-algorithm` | ULA algorithm, Gaussian proposal kernel, MH algorithm and density-ratio lemma | 3 |
| `ex-ula-gaussian-target-stationary-bias` | Gaussian ULA theorem | 3 |
| `thm-metropolis-adjusted-langevin-target-invariant` | MALA algorithm, MH algorithm and invariance theorem | 4 |
| `thm-ula-quantitative-invariant-law-weighted-tv-bias` | ULA algorithm, local drift/Pinsker lemmas | 4 |
| `ex-mala-gaussian-target-acceptance-correction` | MALA invariance theorem | 5 |

The page-level schedule remains batch 38, dependency level 3, with prerequisite
batches 23 and 33. The extra Euclidean standard-Borel item edge needed by MALA
is recorded separately below; it does not alter the declared page-level
requirements or the batch level.

## Mathematical authoring and proof scope

- `def-v-weighted-total-variation-distance` fixes the signed-measure
  test-function norm convention and states its factor of two relative to the
  event-supremum probability distance.
- `lem-ula-potential-coercivity-from-radial-drift` proves the local path
  integral bound under the actual minimizer, $C^2$, Lipschitz-gradient, and
  radial hypotheses. It covers $M_\rho=0$ and the boundary radius.
- `lem-langevin-potential-exponential-generator-drift` is explicitly a
  formal differential-operator calculation; it does not claim SDE existence
  or semigroup ergodicity.
- `alg-unadjusted-langevin-algorithm` defines the target and fixed-step
  gradient-plus-noise update, and makes no convergence or target-invariance
  claim. Its Gaussian kernel is proved locally.
- `lem-weighted-pinsker-inequality-for-probability-laws` proves the weighted
  entropy inequality from a scalar bound and weighted Cauchy–Schwarz. Its
  scalar proof avoids a false monotonicity sentence in the source.
- `thm-ula-gaussian-target-invariant-law-and-stationary-variance` proves the
  AR(1) invariant Gaussian and the variance of every finite-second-moment
  invariant law. It does not claim uniqueness without a moment hypothesis.
- `lem-ula-fixed-step-gaussian-kernel-exponential-drift` independently
  evaluates the Gaussian quadratic exponential moment and proves the
  one-step Foster–Lyapunov bound on the exact range $0<\gamma<L^{-1}$.
- `alg-metropolis-adjusted-langevin-algorithm` uses the same Gaussian
  proposal, explicit target/proposal ratio, and rejected self-loop. The local
  theorem proves exact target invariance by the actual batch-33 MH flow result.
- `ex-ula-critical-step-has-no-invariant-law` proves nonexistence at
  $\gamma=2$ by the invariant characteristic-function equation and continuity
  at zero. The Gaussian interior example uses $\gamma=1$ and has invariant
  law $N(0,2)$ rather than $N(0,1)$.
- `ex-mala-gaussian-target-acceptance-correction` expands the forward/reverse
  Gaussian ratio to $\gamma(x^2-y^2)/4$ and applies the local exact-invariance
  theorem. At $\gamma=1$ the proposal is independent but its density ratio
  still contributes.

The source's quantitative ULA invariant-law theorem is retained with its
complete L1/H1 assumptions and conclusion. It is **not** labeled an open
problem and is **not** given a citation-only or fabricated proof. Its
`provenance.proof` is `not-supplied`; the proof section and contract identify
the unresolved local suppliers; its Step 1 disposition is `escalated`.
Specific proposed results and required hypotheses are:

1. `thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift`:
   strong-solution existence and weighted semigroup contraction under the
   exact Lipschitz-gradient and radial-drift assumptions, with a complete
   Lyapunov/minorization or coupling proof.
2. `lem-ula-pathwise-kl-error-bound`: a Girsanov path-space comparison between
   the diffusion and Euler interpolation over finite blocks, with all
   square-integrability and constants proved.
3. `thm-ula-kernel-small-set-drift-unique-invariant-weighted-ergodicity`:
   positive Gaussian density, compact small-set minorization, the local
   one-step drift, and a complete general-state proof of invariant-law
   existence, uniqueness, and weighted convergence.
4. `thm-ula-weighted-iterate-bias-bound`: the prior results, weighted
   Pinsker, the inhomogeneous Euler moment bound, block summation, and the
   invariant-law limit needed for a $C\sqrt\gamma$ bound.

The source proof invokes external diffusion and Markov-chain ergodicity
theorems, including Roberts–Tweedie and Meyn–Tweedie results. Those citations
do not close the local proof obligation. The current `mcmc-ergodicity-and-
mixing` design has no inspected theorem body for the required weighted
Euler-kernel conclusion, so no supplier excerpt or proof is claimed from it.

## Cross-batch prerequisite review

The current batch-23 `alg-gradient-descent` body explicitly defines the
fixed-step update used by ULA; its Step 1 record is absent, so the cross-batch
record documents interface inspection only and no acceptance. The current
batch-33 bodies and proofs for `alg-metropolis-hastings-kernel`,
`lem-metropolis-hastings-density-ratio`, and
`thm-metropolis-hastings-kernel-is-reversible-and-invariant` were read. Their
ready Step 1 records are present with `owner: false`; those records are
scaffolding readiness, not independent approval. They establish the needed
standard-Borel algorithm interface, positive finite common-density ratio
version, rejected diagonal mass, reversibility, and invariance without
ergodicity claims.

MALA additionally needs `lem-finite-euclidean-space-is-standard-borel` from
batch 6 because the general MH algorithm requires a standard-Borel state
space. Its full current draft statement and proof were inspected. Its Step 1
record is absent, and BCS-35's page-level `Requires` does not declare batch 6.
The exact direct edges from the MALA definition and theorem are preserved in
the manifest and marked `owner-escalation` in
`research/bayesian-computational-statistics-62-batch-38.cross-batch-dependencies.json`.
MALA carriers and its Gaussian example therefore remain escalated pending
owner reconciliation; no batch-6 acceptance is invented. No files from
batches 6, 23, or 33 were edited.

## Sources and source corrections

The three selected full-text sources, exact result harvests, per-item
dispositions, and retrieval stamps are in
`research/bayesian-computational-statistics-62-batch-38.coverage.json`.
`source-fetch-check --stamp` verified all six page/source entries (three
unique full documents):

- Durmus–Moulines, complete 37-page paper, arXiv v3; `fetch_verified`:
  490,446 bytes, SHA-256 prefix `5794a1e4a70145a3`, 37 pages. Relevant sections
  and complete Theorem 10 reasoning were read, including the arXiv HTML and
  local LaTeX source.
- Iyer, complete five-page course note; `fetch_verified`: 123,308 bytes,
  SHA-256 prefix `48913cfbbd8ee55a`, five pages. All pages were inspected.
- Roberts–Rosenthal, complete 64-page author-hosted survey;
  `fetch_verified`: 404,183 bytes, SHA-256 prefix `74427b1238e2de80`, 64 pages.
  Section 2.1 and Proposition 2's complete proof were read.

The source's Theorem 21 and complete §4.12 proof were also inspected. That
branch assumes global convexity and its explicit linear-growth condition, and
the proof invokes the paper's separate quantitative diffusion theorem and an
external Meyn–Tweedie moment result. It is recorded as out of scope because it
does not prove the assigned general radial-drift theorem or close its local
proof obligations.

No retrieval failed for these selected sources, so no source was dropped and
no `source_resolution` recovery record is required. The source history is
preserved in the source coverage. The source-level defects found and handled
locally are:

- Durmus–Moulines Proposition 7's displayed radius uses $\rho$ where the
  radial-gradient/Cauchy–Schwarz calculation requires $\rho^2$; the local
  generator proof uses the squared constant.
- Proposition 8's displayed radius uses $8\log\lambda$ while
  $\lambda\in(0,1)$, giving a negative radicand; the local discrete drift
  proof derives its own positive threshold using $-\log(1-L\gamma)$.
- Lemma 24 describes an auxiliary function as nonincreasing, while the local
  scalar proof needs only and directly proves the relevant inequality.

The Gaussian example is not used to justify the general quantitative theorem.
The brief SDE-stationarity sentence in Iyer's notes is not relied upon; the
local MALA invariance proof is based on the inspected MH suppliers.

## Scoped checks, active run, and readiness

Final scoped checks were run after the carrier and proof-contract edits:

- Focused `depcheck` covered all 14 assigned items and their 1,611-item,
  290-page prerequisite closure: 0 errors and 0 warnings.
- `content-policy` checked 14 items: 0 errors and 0 warnings.
- `rendercheck` checked 14 items and both A/B pages: 0 errors and 0 warnings.
- The normative precheck on the 13 items with complete definitions or proofs
  checked all 10 proof-bearing items: 0 failures. The only excluded item is
  the deliberately unproved, escalated quantitative theorem, which has no
  `proof_strategy` by design.
- `proof-layout` on the 13 complete items: 13 items, 32 steps, 0 defects. On
  all 14 changed items, its only report is the quantitative theorem's
  `Proof [no-steps]` defect. That carrier records the unresolved source-proof
  obligation without inventing numbered steps.
- Strict `proof-contract.mjs` covers all 14 assigned items with 0 errors and
  one nonfatal `shotgun-bracket` warning on coercivity step 1.1: that step
  actually uses all five declared facts, while later steps cite the earlier
  derivation. No fact is imported only to suppress the warning.
- `coverage-checklist` checked both pages and all 23 harvested source results:
  0 errors and 0 warnings. `source-fetch-check` confirms 6/6 page/source
  entries (three unique complete documents) fetch-verified and resolved.
- `proof-contract-coverage.mjs --run` cannot produce a run-wide result because
  the current run snapshot has an unrelated malformed/empty page inventory
  for `misspecified-posterior-consistency-examples`. The batch-local strict
  proof-contract check above passes.
- The run-wide `item-dependency-levels.mjs check` reports 19 errors on other
  batches; none of the 14 batch-38 items appears in its errors. Eight pages
  have empty inventories: `misspecified-posterior-consistency-examples`,
  `gaussian-process-posterior-contraction`, its examples page,
  `mcmc-clt-and-monte-carlo-standard-error-examples`,
  `mcmc-diagnostics-and-finite-run-limitations` and its examples page, and
  `identifiability-and-approximation-bias-in-computational-inference` and its
  examples page. Eleven stale labels are on other items:
  `ex-cylinder-gaussian-process-is-not-banach-valued`,
  `def-abc-augmented-tolerance-target`,
  `lem-abc-augmented-target-has-tolerance-posterior-marginal`,
  `alg-abc-metropolis-hastings`, `alg-abc-sequential-smc`,
  `thm-abc-metropolis-hastings-invariance`,
  `thm-abc-sequential-smc-rn-weight-update`,
  `ex-abc-vanishing-acceptance`,
  `ex-abc-positive-tolerance-stationary-law`,
  `ex-abc-sequential-tolerance-schedule-and-rn-weights`, and
  `ex-abc-smc-finite-particle-collapse`. Focused `depcheck` independently
  verifies the batch-38 dependency closure.

The latest read-only run status was recomputed from
`.autopilot/bayesian-computational-statistics-62/state.json` at
`2026-10-15T05:52:12.421Z`: run `running`, stage `1-scaffold`, 38/62 batches
covered, nothing in flight. An earlier authoring-time recomputation showed
32/62; this pass did not edit autopilot state, and the increase reflects the
current shared run snapshot. Existing blockers are the unrelated malformed
item handoff for “Uniform endpoint: ordinary bootstrap failure and the m-out-
of-n remedy” (04:32:48Z) and the owner-repair/recertification hold
(04:47:40Z). The latest status still lists batch 38's artifact as missing;
this authoring pass did not alter engine state. Read-only `git log` over the
batch-38 assignment/scaffold paths returned no commits; no RESUME-file claim
was used for run status.

The read-only batch-level recomputation after the additional Euclidean
standard-Borel item edges gives input SHA-256
`0a51917b9ec09b057f49cb2bcffdab8b9c29443c7d0b1756b08270f6c6a6791d` and batch
38 level 3 with prerequisites 6, 23, and 33. The dispatch input was
`102f187f3a212913b7afcd8062d17a7d67a7c7047bf5d860e34acac7fcaef132`; the
shared batch-dependency-levels check is stale. The batch-6 edge is the
owner-escalated Euclidean standard-Borel prerequisite described above. The
shared scheduling file and engine state were left untouched.

The 14 Step 1 records are written with `owner: false`, exact examined direct
dependencies, and per-item evidence. Ten items are marked `ready` for authoring
handoff; the quantitative theorem, MALA algorithm, MALA invariance theorem,
and MALA Gaussian example are `escalated` for the proof-theory gap or the
undeclared batch-6 edge. These records indicate authoring completeness only,
not independent approval.

## Owner complete local invariant-bias proof and prerequisite reconciliation

After native38 drained, focused Sol repair with two independent proof branches supplied six local prerequisites and a full quantitative proof. research/bayesian-computational-statistics-62-owner-langevin-completion.md records the exact chain and all consumer dispositions. The original invariant-law Statement is byte-identical: C2/Lipschitz/radial hypotheses, existence/uniqueness, finite weight moments, full0<gamma<1/L and gamma-independentCsqrtgamma are retained. Correct-direction Euler-relative-to-diffusion entropy, reversible bridge density, weighted signed-measure contraction, invariant existence and uniform exponential moments are proved locally. Source equation conventions are not imported as a proof. MALA sources are unchanged; the required Euclidean standard-Borel page edge and SDE prerequisite page edge now exist in canonical/run metadata. Root integrated all six A-page suppliers, exact contracts/provenance/fulltextURL/levels and mathematical summary. Actual new sources fetched by native source-fetch-check:8/8verified,2newstamps. Final explicitlayout7items46steps0defects and strictcontracts7/7zeroerrors passed; one retained shotgun-bracket advisory reflects a step that genuinely checks four distinct facts. All20currentpairitems receive authoring readiness, with every independent native review/fullgate retained. Exact original sources/metadata/notes/cross-rows remain archived.
