# Step 3a Reader Report — Batch 32

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `32`  
Role: independent reader

## Inventory reviewed

Assigned pages:

- A page `high-resolution-tvd-eno-and-weno-methods`
- B page `high-resolution-tvd-eno-and-weno-methods-examples`

Assigned items reviewed in dependency order:

- `def-na-high-resolution-reconstruction`
- `thm-na-linear-monotone-first-order-barrier`
- `lem-na-eno2-reconstruction-third-order`
- `lem-na-weno5-optimal-linear-reconstruction`
- `thm-na-musc-minmod-second-order-on-smooth-data`
- `thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl`
- `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one`
- `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction`
- `ex-na-minmod-extremum-clipping`
- `cex-na-unlimited-centered-reconstruction-overshoots`
- `ex-na-smooth-linear-advection-reconstruction`
- `ex-na-weno-js-critical-point-epsilon-scaling`
- `ex-na-burgers-godunov-musc-shock`

Manifest-required pages opened: `polynomial-interpolation-and-remainder`, `monotone-finite-volume-entropy-convergence`, and `riemann-solvers-for-hyperbolic-systems`.

Immediate item dependencies opened for the assigned claims: `thm-cardinal-polynomial-interpolant-exists-uniquely`, `thm-lagrange-interpolation-remainder`, `cor-taylor-remainder-bound`, `def-bounded-bv-data-on-line`, `def-monotone-finite-volume-entropy-scheme`, `def-kruzhkov-entropy-solution`, `def-rankine-hugoniot-and-lax-shocks`, `thm-monotone-finite-volume-entropy-convergence`, and `def-countable-choice`.

## Edits and evidence

- In `items/def-na-high-resolution-reconstruction.md`, the WENO-Z paragraph now identifies the displayed squared ratio as the fifth-order `p=2` choice, and the references include Castro, Costa and Don, “High order weighted essentially non-oscillatory WENO-Z schemes for hyperbolic conservation laws,” [DOI 10.1016/j.jcp.2010.11.028](https://doi.org/10.1016/j.jcp.2010.11.028), §§2 and 4. Jiang–Shu (1996) and Shu’s earlier notes cover WENO-JS and the cell-average construction but predate WENO-Z. Castro et al. discuss the WENO-Z power parameter and critical-point accuracy; at fifth order, `r=3` and `p=2` is the choice represented by this definition. The formulas themselves did not change.
- The same Castro et al. reference and locator were added to `items/thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction.md`, whose local argument proves the finite-volume face estimate for the already displayed `p=2` definition.
- Updated the source quotation for `def-na-high-resolution-reconstruction` in all 12 affected citation entries in `research/numerical-analysis-remaining-71-2026-10-17-batch-32.proof-contracts.json`. No derivation, hypothesis, or proof-contract step changed. Neither edited item had a `verification.judge` record to remove.
- Validation: reflow reported both items unchanged; precheck reported `0 checked, 0 failing` for the definition and `1 checked, 0 failing` for the theorem. The required final proof-layout command reported `2 items, 3 steps, 0 defects`.

## Item verdicts

- `def-na-high-resolution-reconstruction`: formulas and domains are explicit; the ENO tie rule, reflection convention, positive WENO denominators, and the distinction between nodal data and cell averages are sound. WENO-Z citation repair recorded above.
- `thm-na-linear-monotone-first-order-barrier`: the coordinate impulse argument gives nonnegative coefficients; the three moment conditions imply the noninteger-CFL contradiction.
- `lem-na-eno2-reconstruction-third-order`: each Newton polynomial interpolates its selected triple; both possible face offset products have magnitude `3h^3/8`, yielding the stated `Mh^3/16` bound, including ties.
- `lem-na-weno5-optimal-linear-reconstruction`: the candidate moments and ideal weights give the asserted polynomial exactness; the absolute coefficient sum and Taylor bound yield the stated constant.
- `thm-na-musc-minmod-second-order-on-smooth-data`: the nonvanishing derivative makes both neighboring average differences share a sign for sufficiently small `h`; the limiter therefore retains a first-order slope approximation and the face error is `O(h^2)`.
- `thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl`: the update coefficient lies in `[0,1]` for `μ≤2/3`; the finite tent witness gives variation `3μ>2` for each `2/3<μ≤1`. The reflection and periodic cases are accounted for.
- `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one`: the specified finite witness has variation `2` initially and `3` after the update at CFL one.
- `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction`: fixed positive `ε₀` gives JS weight errors `O(h^2)` and Z weight errors `O(h^4)`; the candidate deviations and zero-sum weight differences give fifth-order face error.
- `ex-na-minmod-extremum-clipping`: the three averages are correct; minmod returns zero and the face error is `h^2/6`.
- `cex-na-unlimited-centered-reconstruction-overshoots`: the stated face fluxes give the listed updated values and variation `3/2>1` at CFL one half.
- `ex-na-smooth-linear-advection-reconstruction`: the cell averages and candidates are exact on affine data; the update is checked for positive, negative, and zero advection speed.
- `ex-na-weno-js-critical-point-epsilon-scaling`: the exact averages and indicators give the nonzero JS leading error `54h^4/95`; the p=2 Z comparison’s normalized weight correction yields `O(h^6)` on the stated cubic.
- `ex-na-burgers-godunov-musc-shock`: the step datum has bounded translation variation one and is not globally `L^1`; the flux, CFL, entropy jump, initial trace, and first cell update satisfy the cited convergence theorem’s stated hypotheses and conclusions.

## Page verdicts

- A page `high-resolution-tvd-eno-and-weno-methods`: summary matches the assigned definitions, accuracy results, TVD range, and counterexample. Its diagram is explicitly illustrative, and the proofs do not rely on it.
- B page `high-resolution-tvd-eno-and-weno-methods-examples`: summary matches the five listed examples and uses the A-page conventions consistently.
- The three manifest-required pages were opened to check the placement and supplied results; no defect in their relevant summaries was confirmed.

## Uneditable findings and blocker

No confirmed mathematical or citation defect remained outside the editable batch scope.

The batch-32 proof contract contains an inherited unresolved-supplier note for `thm-monotone-finite-volume-entropy-convergence` from another batch, describing missing Step-1/source-coverage readiness evidence. I independently checked its current statement and proof where used by the Burgers example and found the example’s non-`L^1` branch and CFL assumptions match. I also opened its cited sources: Droniou’s Theorem 2.3.9 (§§2.3.1–2.3.3, PDF pp. 19–23) states local convergence for bounded initial data with finite BV seminorm; Mishra–Fjordholm–Abgrall’s Theorem 4.19 (§4.6, PDF pp. 56–57) uses an integrable BV norm and a global-tail argument, as the item’s locator says. The local theorem’s stated source qualification is accurate. I did not re-audit its entire transitive dependency closure; the inherited readiness note remains workflow evidence, not a confirmed defect in the assigned example.

## Coverage note

All 13 assigned items, both assigned pages, all three manifest-required pages, and the immediate item suppliers listed above were opened. I did not re-audit every foundational dependency in the large transitive closure of the batch-29 convergence theorem. The WENO-Z `p=2` source locator is supported by the publisher’s article metadata and §§2 and 4 descriptions; the publisher PDF itself was not fetchable in the browsing tool, while the local finite-volume weight and accuracy calculations were checked directly.
