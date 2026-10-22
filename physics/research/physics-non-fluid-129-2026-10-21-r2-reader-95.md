# Step 3a reader report — batch 95

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `95`

## Inventory reviewed

Assigned pages opened:

- `csm-frontier-sampling-certificates` — A page, draft.
- `csm-frontier-sampling-certificates-examples` — B page, draft.

Assigned items opened and reviewed in dependency order:

1. `alg-csm-frontier-heat-bath-update`
2. `lem-csm-frontier-error-budget-composition`
3. `thm-csm-frontier-heat-bath-tv-bound`
4. `alg-csm-frontier-monotone-cftp`
5. `thm-csm-frontier-monotone-cftp-exact`
6. `alg-csm-frontier-swendsen-wang`
7. `thm-csm-frontier-swendsen-wang-invariance`
8. `ex-csm-frontier-metastable-diagnostic`

The batch-95 proof contracts and cross-batch dependency records were consulted as
navigation and evidence, not treated as verdicts. The page suppliers
`csm-frontier-quantitative-dlr`, `csm-frontier-fk-loop-algebra`,
`csm-gibbs-lattice`, and the published
`metropolis-hastings-algorithm-and-invariance` page were opened. Item suppliers
opened for the assigned claims included `def-csm-frontier-finite-potts-fk`,
`thm-csm-frontier-edwards-sokal`, `def-finite-simple-graph`,
`def-finite-cardinality`, `def-axiom-of-choice`, `def-choice-function`,
`def-standard-borel-space`, `def-polish-space`, `def-separable-space`,
`lem-complete-remetrisation`, `def-probability-measure`,
`def-measure-kernel-and-probability-kernel`,
`def-invariant-and-stationary-distribution-for-a-markov-kernel`,
`alg-metropolis-hastings-kernel`, and
`thm-metropolis-hastings-kernel-is-reversible-and-invariant`.

## Review and disposition

- `alg-csm-frontier-heat-bath-update`: the finite positive normalization,
  cumulative intervals, endpoint rule at `u=1`, zero-step case, and output
  conventions are explicit and consistent.
- `thm-csm-frontier-heat-bath-tv-bound`: the invariant Gibbs law, finite maximal
  coupling, influence telescoping, Hamming contraction from the column-sum
  hypothesis, coupling-to-total-variation bound, exponential estimate, and
  bounded-observable estimate are justified. The row-sum hypothesis is stated
  but not needed by the displayed proof; the proof says so.
- `lem-csm-frontier-error-budget-composition`: the conclusion follows from the
  four stated real inequalities by the triangle inequality. The realized
  statistical-error condition is explicitly an assumption, with no probability
  or confidence level invented.
- `alg-csm-frontier-monotone-cftp` and
  `thm-csm-frontier-monotone-cftp-exact`: the common update, ferromagnetic
  monotonicity, positive forcing-block probability, almost-sure coalescence,
  stationary-law construction, finite-step positivity, uniqueness, and exact
  output law are supported by the local argument and stated hypotheses.
- `alg-csm-frontier-swendsen-wang` and
  `thm-csm-frontier-swendsen-wang-invariance`: the independent edge activations
  and component recolorings match the two conditional laws of the finite joint
  Potts/FK law, including zero edge activities. The marginal-invariance and
  finite-termination conclusions follow.
- `ex-csm-frontier-metastable-diagnostic`: the five-state proposal rows and
  accepted transition probabilities are correct; the positive four-step
  transition matrix yields uniqueness and convergence; the conditional
  within-well chain, survival probability, and event-based total-variation lower
  bound imply the stated mixing-time lower bound. This is an exact mathematical
  example, not an experimental observation.

Two repairs were made in assigned items:

1. In `alg-csm-frontier-monotone-cftp`, the definition now gives the coordinatewise
   partial order as the coordinate inequalities with `-1 < +1`, distinguishes it
   from the sampling order, and says explicitly that each update leaves all other
   spins unchanged. Supplier links were removed from the definition text and
   retained in `Definition references`, consistent with the statement-first
   layout. Its `definition_interface` in the batch-95 proof contract was updated
   to the current definition. The direct consumer
   `thm-csm-frontier-monotone-cftp-exact` was checked: it uses the same extremes,
   order-preserving update, and stored seeds, so its argument remains valid. The
   item had no stale `verification.judge` record.
2. In `ex-csm-frontier-metastable-diagnostic`, the Levin–Peres–Wilmer citation was
   corrected from §3.3.2 on single-site Glauber updates to §3.2, printed pp. 38–41,
   on finite-state Metropolis transitions and proposal acceptance. The exact
   five-state transition calculation remains proved locally. The item had no
   stale `verification.judge` record.

The source check used Levin, Peres, and Wilmer, *Markov Chains and Mixing Times*,
2nd ed., §3.3.2 (printed pp. 42–43) for the single-site conditional update,
§14.2 (pp. 203–205) and §15.1 (pp. 215–217) for coupling and the Ising mixing
context, §25.2 (pp. 349–354) for monotone CFTP and reuse of common past maps, and
§3.2 (pp. 38–41) for the corrected Metropolis citation. Grimmett, *The
Random-Cluster Model*, §2.3 (printed pp. 7–9) and §8.3 (pp. 38–39), and
Duminil-Copin, *Geometric Representations of Lattice Spin Models*, Chapter 3,
§3.2 (pp. 24–26), were checked for finite Potts/FK coupling and cluster coloring.
Roberts and Rosenthal, *General State Space Markov Chains and MCMC Algorithms*,
§2.1 and Proposition 2 (pp. 4–6), was checked for the Metropolis acceptance
ratio and reversibility interface. These sources provide context; the assigned
finite arguments were checked locally.

## Page verdicts

- `csm-frontier-sampling-certificates`: **pass**. Its frontmatter inventory and
  prerequisites are consistent with the opened items; the page has no body
  summary under the current compact layout.
- `csm-frontier-sampling-certificates-examples`: **pass**. Its example placement
  and prerequisite to the A page are consistent; the page has no body summary
  under the current compact layout.

No TikZ or tikzcd diagram occurs in the assigned pages or items, and no diagram
addition is required for these expositions. No uneditable defect or blocker was
identified. The findings array is empty.

## Validation and coverage limits

For both changed items, `reflow.mts` reported unchanged and `precheck.mts`
reported zero failures (`alg-csm-frontier-monotone-cftp`: 0 proof-bearing items
checked; `ex-csm-frontier-metastable-diagnostic`: 1 checked, 0 failing). The
required final `proof-layout.mjs` check reported `2 items, 5 steps, 0 defects`.

The supplied Friedli–Velenik PDF URL returned HTTP 503 through the web reader,
and the cited Art Owen PDF returned HTTP 403, so those exact passages were not
independently read. Their locators are therefore not attested here. The local
proofs and accessible sources listed above supplied the claims used in this
review. I did not re-audit the full transitive proof closures of the published
mathematical suppliers.
