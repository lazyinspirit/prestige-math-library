# Frontier 36 complete, batch 3 — Step 1 scaffold notes

Owned pair: `recurrence-transience-and-hitting-times-for-markov-chains` (A,
order 288.127) and its `-examples` companion (B, order 288.128). I read
`CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the complete PT-16 design
in `research/plan-probability-track.md`, the generated task, the current
`research/plan-spec.json` rows, the batch manifest and drift evidence, and the
binding `research/frontier-36-complete-owner-authoring-direction.md` before
construction. The owner direction has no additional probability-specific
instruction. The build driver owns transitions; this batch changed no published
content, shared plan, engine state, or verdict.

## Scope and design reconciliation

The current plan agrees with PT-16 on page IDs, titles, orders, categories,
companions, and four A-page prerequisites. Its two item arrays are empty, so it
does not contradict the design inventory. There is no design/plan conflict for
this pair. The A manifest contains all 24 designed A items plus three necessary
local prerequisites; B contains all ten designed examples and counterexamples.
The 27-item A page is below the 100-item ceiling; no split or new pair is needed.

The local additions precede their consumers:

- `lem-finite-irreducible-chain-hitting-time-geometric-tail` supplies the
  almost-sure hitting and finite expectation used by the finite Dirichlet and
  Poisson statements. A block path to the target has a uniform positive
  probability on a finite irreducible state space.
- `def-simple-symmetric-walk-on-zd` supplies one common A-page lattice-walk
  kernel. The earlier simple-walk kernel example is homed only on another B
  page and cannot be a proof dependency of these A-page corollaries.
- `def-nonnegative-discrete-drift-for-countable-chains` defines `Pψ` for a
  nonnegative, possibly unbounded function and `Lψ` only when `ψ` and its
  one-step expectation are finite. The published
  `def-discrete-generator-of-a-countable-state-transition-matrix` is expressly
  for bounded functions; it cannot alone justify the unbounded Lyapunov steps.

Two designed phrases needed precise contracts. In
`thm-renewal-decomposition-at-successive-return-times`, complete excursions
form an iid sequence when the state is recurrent. At a transient state a later
excursion is defined only when the preceding return occurred; the renewal
equation and geometric visit law still hold. In
`thm-dirichlet-problem-for-finite-state-hitting-probabilities`, a.s. boundary
hitting gives uniqueness among **bounded** harmonic extensions. Without that
solution class, an unbounded harmonic function can invalidate uniqueness on
an infinite domain even when the boundary is hit a.s. These are mathematical
qualifications, not conflicts with an item list in the current plan.

## Proof and prerequisite audit

The load-bearing chains are explicit in the manifest. The matrix identity
uses monotone convergence to turn a countable kernel integral into a row sum.
The published multistep Markov theorem identifies `p^(n)(x,y)` with the actual
chain probability before the renewal and Green arguments use that equality.
The renewal item derives `u_n = sum_{k=1}^n f_k u_(n-k)` before summing, and
finite return times are handled eventwise by the published
`thm-discrete-strong-markov-property`. Nonnegative Tonelli then gives the
geometric visit count and Green series without a hidden integrability claim.

The class-property argument follows a fixed positive-probability route from a
recurrent state to another state during independent return excursions. Strong
Markov then gives the reverse hitting certainty and recurrence; it does not
compare diagonal series term by term. Minimal hitting probability uses stopped
nonnegative martingales and Fatou. Bounded Dirichlet uniqueness uses dominated
convergence only after a.s. hitting. The lattice-walk corollaries use the
central-binomial asymptotic, Vandermonde counting in dimension two, and a
balanced multinomial coefficient bound from Stirling in dimensions at least
three; no local CLT is assumed. Exit payoffs are defined piecewise before any
random-time evaluation. The majorant and Lyapunov proofs use finite one-step
expectations, nonnegative stopped supermartingales, and Fatou, not an
unlicensed optional-stopping limit.

I inspected the actual statements and proofs of the load-bearing published
`thm-discrete-strong-markov-property`,
`thm-markov-property-for-bounded-future-path-functionals`,
`thm-chapman-kolmogorov-equations`,
`thm-finite-dimensional-laws-of-a-markov-chain`,
`thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums`,
`thm-monotone-convergence-for-the-integral`, `thm-fatou-lemma`,
`thm-dominated-convergence`, `thm-tonelli-for-nonnegative-double-series`,
`thm-real-stirling-formula`, and
`cor-central-binomial-coefficient-asymptotic-from-wallis`. The published
`lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time` is stated
only for real-valued processes, so `def-hitting-return-and-visit-times` proves
the needed countable-state finite-horizon event formula directly and does not
cite that lemma. This is an interface limit, not a defect in its stated claim.

At the final owned snapshot, 61 direct external item edges all have published
suppliers on pages inside the A page's 188-page declared prerequisite closure.
A traversal from the 37 owned items reaches 716 item IDs and 4,053 declared
dependency edges: no missing, unpublished, Recorded, or cyclic item and no
path to `deferred-set-theory-beyond-choice`. The three additions and all 37
labels were recomputed against the in-run item DAG. This graph examination
does not certify the 716 proofs; the cited proof interfaces and relevant
source arguments were checked separately, and Step 3 remains the independent
mathematical review. No defective **actual** published prerequisite was found.
No published-consumer ledger entry is warranted for this batch.

AC is stated and directly declared on the 20 contracts that use the published
conditional Markov/strong-Markov chain laws or their consequences. The Green
kernel's matrix-series definition and kernel algebra are explicitly
choice-free; its expected-visits equality declares AC because it uses the
multistep conditional-expectation theorem. Hitting-time syntax, accessibility,
communication, periods, and the direct finite-state witnesses retain their
choice-free arguments. No incompatible-axiom or Recorded branch supplies a
proof.

## Sources and harvest

All three URLs below were fetched with `source-fetch-check --stamp`. I also
extracted and inspected the relevant complete arguments from the same PDF
bytes; their local SHA256 prefixes match the fetch stamps. The coverage file
records all 78 harvested canonical/source rows with included or inline IDs,
already-published IDs, or specific out-of-scope reasons. No retrieval failed,
source was dropped, or `source_resolution` waiver was used.

| Full treatment | Exact inspected locator and support | Full-text receipt |
|---|---|---|
| [Durrett, *Probability: Theory and Examples*, 5th ed.](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf) | §5.3 printed pp. 281–286; §5.4 opening through Theorem 5.4.4, printed pp. 287–290; renewal, class properties, birth–death scale, lattice-walk counting | 490-page PDF, 2,195,717 bytes, SHA256 prefix `aeac36cbf5e44c53` |
| [Levin–Peres–Wilmer, *Markov Chains and Mixing Times*, 2nd ed.](https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf) | §§1.3, 1.7 opening through Lemma 1.25, 10.1, 21.1; periods, hitting notation, Green/return criterion and integer walks | 461-page PDF, 4,855,824 bytes, SHA256 prefix `9ef39f9467d9647f` |
| [Roch, *Lecture Notes on Measure-Theoretic Probability Theory*, Note 24](https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf) | Entire Note 24, §§1–3, printed pp. 1–8; first-step costs, finite hitting tail, majorants, drift bound and reflected walk | 8-page PDF, 165,560 bytes, SHA256 prefix `f9e38563f3748f4d` |

The design's Durrett page locator `pp. 285–311` does not match the inspected
fifth-edition PDF: §5.3 begins on printed p. 281. The source headings and
actual inspected pages, not the stale locator, control this harvest. Roch's
Theorem 24.7 proof writes an equality for a stopped-process limit on nonexit
paths that need not hold because a positive `liminf ψ(X_n)` may remain. The
owned proof uses only the valid pointwise domination and Fatou inequality;
it does not consume that equality.

## Checks and remaining run-wide work

Final check snapshot: 2026-09-27, approximately 10:19 UTC. Other Step-1
batches were still writing, so their run-wide counts are a point-in-time
observation, not this batch's mathematical verdict.

| Check | Result |
|---|---|
| Owned coverage | 1 A page, 78 harvested rows, 0 errors, 0 warnings |
| Owned full-text sources | 3/3 fetch-verified and resolved; no drops |
| Owned dependency levels | 37 labels, 0 errors by direct `dependencyLevels` check |
| Owned readiness | 37/37 current `ready`; no owned work in `step1-decisions check` |
| Whole-run manifest dependencies | 452 items, 0 missing `deps`, 0 errors |
| Whole-run manifest content policy | 452 items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | Pass: acyclic declared order, no unresolved listed item IDs; 379 planned pages still have empty item lists |
| `extcheck.mjs --json` | 0 errors, 43 global warnings; no owned dependency reaches Recorded material |
| Whole-run dependency levels | 24 errors, all empty A/B inventories in other batches; no stale/cyclic owned label |
| Whole-run coverage | 105 errors in still-changing batches 5, 24, and 29 (100 unknown included-item targets and five source-shape findings); 2 warnings, none owned |
| Whole-run source check | 70/75 stamps present; five unstamped citations were in in-progress batch 29, none owned |
| Whole-run readiness | 452 current items, 406 ready, 70 work rows; no owned row |
| Consumer-batch dependency input | Owned `batch-3.cross-batch-dependencies.json` is `[]`; all external suppliers are published and B consumes only its own A. Ledger refresh succeeded after the last dependency edit. |

Step-1 `ready` records are complete proposed proof routes with met examined
prerequisites. They are not item verification or independent proof approval.
