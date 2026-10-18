# Step 3a reader report — batch 33

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Date: 2026-10-18

## Opened inventory

Read the batch 33 manifest and `briefs/reader.md`. The run status reports the
run as active, with Step 3a reading underway and no dispatch currently
running.

Assigned pages:

- A page `invariant-domain-and-entropy-stable-conservative-schemes`:
  `library/numerical-pdes-and-spatial-discretization/invariant-domain-and-entropy-stable-conservative-schemes.md`.
- B page `invariant-domain-and-entropy-stable-conservative-schemes-examples`:
  `library/numerical-pdes-and-spatial-discretization/invariant-domain-and-entropy-stable-conservative-schemes-examples.md`.

Assigned A-page items, read in dependency order:

- `def-pe03-convex-invariant-domain`
- `def-pe03-system-entropy-pair-and-potential`
- `alg-pe03-convex-scaling-positivity-limiter`
- `def-pe03-first-order-hll-finite-volume-update`
- `def-pe03-euler-positive-margin-domain`
- `lem-pe03-euler-llf-split-state-positive`
- `def-pe03-tadmor-entropy-conservative-flux`
- `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed`
- `def-pe03-entropy-stable-dissipative-flux`
- `lem-pe03-hll-half-cell-riemann-averages`
- `thm-pe03-hll-update-preserves-convex-invariant-domain`
- `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux`
- `thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity`
- `thm-pe03-ideal-gas-llf-branch-preserves-positivity`

Assigned B-page examples:

- `ex-pe03-burgers-entropy-residual`
- `ex-pe03-conservative-positivity-rescaling`
- `ex-pe03-entropy-stable-underresolved-shock`
- `ex-pe03-near-vacuum-euler-hll-update`

Opened the direct prerequisite items needed for the proofs: `def-hyperbolic-system-and-characteristic-families`, `def-hll-two-wave-flux`, and `def-ideal-gas-euler-state-and-pressure`. For the HLL fan-state identification, also opened `thm-hll-flux-is-consistent-and-conservative` and `def-rankine-hugoniot-and-lax-shocks`. The hyperbolic-system definition's cited `C^k` conventions were checked in `def-c-one-map-and-local-inverse` and `def-ck-euclidean-maps-and-diffeomorphisms`. Read the page-level prerequisites named by the A page: `conservative-finite-volume-weak-limits`, `riemann-solvers-for-hyperbolic-systems`, and `high-resolution-tvd-eno-and-weno-methods`.

Compared the scoped proof-contract citation and derivation records against the
11 proof-bearing assigned items. The other records matched the reviewed facts
and proof steps. The HLL half-cell record was regenerated after the repair
below.

## Review and edit

The convexity argument uses weighted Cauchy–Schwarz on the kinetic-energy
perspective and correctly proves both convexity of the Euler admissible set
and closedness/convexity of the positive-margin set. The Lax–Friedrichs split
calculation has positive density and internal-energy margins under
`a >= |u| + c`, including equality in the speed bound. The HLL half-cell
coefficients and finite-volume average agree with the supplied middle-branch
flux and the stated one-sided CFL restrictions. The symmetric HLL positivity
theorem then applies the split-state result and convexity with its stated
local CFL bound.

The semidiscrete entropy proof gives the face defect
`[v]^T F_es - [psi] = -[v]^T D[v]/2 <= 0`; the numerical entropy flux is
consistent, and the two adjacent face defects give the claimed local
inequality. The Burgers entropy residual is `-1/2`; the shock update values
are `11/12` and `1/3`. The two-node limiter computation gives the exact
feasible interval `0 <= theta <= 1/4`, preserves the mean, and yields pressure
`1/5`. In the near-vacuum example, `E=3e-12`, `c^2=7/50000 < (3/250)^2`,
`a=11/500` exceeds `|u|+c`, and `2 nu a=1/2`; the positivity theorem applies.

One missing dependency was repaired in
`items/lem-pe03-hll-half-cell-riemann-averages.md`. Its proof used the formula
for `U_*` as the actual middle state of the HLL fan, but the HLL flux
definition itself only states that the fan has an intermediate state. The
separate current-run result `thm-hll-flux-is-consistent-and-conservative`
proves that the displayed state is the conservative HLL middle state and
satisfies both wave Rankine–Hugoniot balances. The item now lists that result
in `deps`, cites it as Fact F2, and uses it to identify the fan state before
integrating the half-cell averages. This is consistent with Ketcheson,
LeVeque, and del Razo, *Riemann Problems and Jupyter Solutions*, “HLL solver:
Derivation and implementation,” which determines the middle state from the
two-wave conservation equation and gives its formula (HTML lines 367–372):
<https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html>.

The affected proof contract was regenerated with
`tools/regen-contract-entries.mjs`. The item had no `verification.judge` record
to remove; no judgment or certification was added.

Checks after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-pe03-hll-half-cell-riemann-averages.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-pe03-hll-half-cell-riemann-averages.md` — pass, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-33.proof-contracts.json --items lem-pe03-hll-half-cell-riemann-averages --json` — pass, no errors or warnings.
- `node tools/proof-layout.mjs items/lem-pe03-hll-half-cell-riemann-averages.md` — 1 item, 3 steps, 0 defects.

No other defect requiring an edit was found in the assigned items.

## Page verdicts

- `invariant-domain-and-entropy-stable-conservative-schemes` — pass after the item-level dependency repair. Its summary correctly separates the sufficient HLL fan-average condition from the sufficient middle-state condition, limits the positivity result to the symmetric speed branch, and excludes fully discrete entropy and between-node positivity claims. Its diagram is labeled as a convention aid and the page's prerequisite interface matches the listed page requirements.
- `invariant-domain-and-entropy-stable-conservative-schemes-examples` — pass. Its summary accurately describes the four examples and does not claim a fully discrete entropy inequality.

## Uneditable defects and blockers

No uneditable defect remains. No blocker.
