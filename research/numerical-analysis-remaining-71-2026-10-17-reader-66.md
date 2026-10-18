# Step 3a reader report — batch 66

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Date: 2026-10-18

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/phase-field-and-energy-dissipative-discretization.md`
- `library/numerical-pdes-and-spatial-discretization/phase-field-and-energy-dissipative-discretization-examples.md`

Their prerequisite pages, opened for summary/context review:

- `library/numerical-pdes-and-spatial-discretization/finite-volume-diffusion-and-mimetic-fluxes.md`
- `library/numerical-pdes-and-spatial-discretization/nonlinear-parabolic-compactness-and-monotone-evolution.md`
- `library/numerical-differential-equations-and-stochastic-dynamics/imex-and-operator-splitting-methods.md`

Assigned items were opened in dependency order. The A-page sequence was
`def-phase-field-gradient-flow-and-double-well`,
`def-phase-field-discrete-realizations`,
`lem-phase-field-neumann-laplacian-kernel-and-gauge`,
`lem-phase-field-interval-p1-projector-stability`,
`def-phase-field-stabilized-semi-implicit-variant`,
`alg-phase-field-sav-cahn-hilliard-step`,
`alg-phase-field-convex-splitting-backward-euler`,
`thm-phase-field-sav-modified-energy-law`,
`thm-phase-field-convex-splitting-step-existence-and-energy`,
`thm-phase-field-convex-splitting-ac-ch-time-error`, and
`thm-phase-field-convex-splitting-mesh-time-convergence`.

The B-page sequence was `ex-phase-field-allen-cahn-stationary-front`,
`ex-phase-field-interface-width-and-grid-resolution`,
`cex-phase-field-sav-modified-energy-not-physical-energy`, and
`ex-phase-field-ch-two-cell-energy-ledger`.

Direct item suppliers opened for the assigned claims:
`def-sobolev-space-wkp-and-its-norm`,
`def-sobolev-extension-domain-and-extension-operator`,
`thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
`thm-critical-sobolev-embedding-into-every-finite-lq`,
`def-axiom-of-choice`,
`def-fv-admissible-cell-face-mesh`,
`def-tpfa-harmonic-face-scheme`,
`thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`,
`cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`,
`lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`,
`lem-classical-derivatives-are-weak-derivatives`,
`def-pe12-gelfand-triple`,
`thm-pe12-discrete-aubin-lions-compactness`,
`lem-parabolic-weak-compactness-separable-bochner-hilbert`,
`thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`, and
`thm-holder-inequality-for-integrals`. Additional transitive definitions
opened were `def-parabolic-evolution-triple-and-energy-space`,
`def-hilbert-space`, and `def-compactly-embedded-normed-spaces`. The PE12
definition and discrete Aubin–Lions theorem are current-run
batch 39 suppliers; their actual statements and proofs were checked, and no
defect was found in the interfaces used by batch 66.

## Repairs and evidence

- In `def-phase-field-gradient-flow-and-double-well`, clarified that the
  finite-energy class `H^1 ∩ L^4` does not by itself justify testing the
  nonlinear term against every `H^1` function in dimensions `d ≥ 5`.
  Here `fε(u) ∈ L^(4/3)`, while `H^1` need not embed into `L^4`. For
  example, near an interior point choose `(d+2)/6 < α < d/4) and a cutoff
  `u(r) ~ r^(-α)`; then `u ∈ H^1 ∩ L^4`, while a compactly supported test
  `v(r) ~ r^(-β)`, with `d-3α < β < (d-2)/2`, lies in `H^1` and makes
  the `u^3 v` integral diverge.
  The definition now requires the extra integrability needed for any weak
  solution tested against all (H^1) functions.

- In `alg-phase-field-sav-cahn-hilliard-step`, removed unique solvability and
  energy dissipation from the procedure definition and left those properties
  to `thm-phase-field-sav-modified-energy-law`. This follows the algorithm
  rule that procedure properties belong in separate proved results. The
  algorithm's dependency and `justified_by` link remain consistent.

- In `thm-phase-field-convex-splitting-ac-ch-time-error`, replaced the
  unexpanded square-root assertion by Cauchy–Schwarz in the positive inner
  product `(x,y)_{A_h}=〈A_hx,y〉_h` on the mean-zero space. The identities
  `〈e_n,e_(n+1)〉_h=(A_h^dagger e_n,e_(n+1))_(A_h)` and
  `||A_h^dagger e_n||_(A_h)=||e_n||_(-1,h)` give the required dual norm
  estimate directly from the Neumann-kernel lemma. Also stated explicitly
  that the constants may depend on the fixed (M,\kappa,\varepsilon), mesh,
  trajectory, and final time.

- In `thm-phase-field-convex-splitting-mesh-time-convergence`, replaced the
  ambiguous time-dependent chemical-potential equation by its integrated
  formulation against every `η ∈ L^2(0,T)` and
  `ψ ∈ H^1(0,L)`. The proof now passes the discrete second mixed
  equation using the product test `η(t)P_hψ`, justified by weak
  `L^2(H^1)` convergence and strong `L^2` convergence of the split
  potential.

- Corrected source locators without changing cited works:
  - `def-phase-field-discrete-realizations` and
    `thm-phase-field-sav-modified-energy-law`: Shen–Yang 2010 equation (3.1)
    is printed p. 1681 / PDF p. 13. The SAV theorem's other Shen–Yang
    locator now uses that same exact page.
  - `def-phase-field-stabilized-semi-implicit-variant`: Shen–Yang 2010
    equation (2.6) is PDF pp. 4–5 and equation (3.7) is printed p. 1682 /
    PDF p. 14. The paper scales its stabilizer as (S/\varepsilon^2) and
    uses unit mobility and stiffness; the item now says its own (M,\kappa,S)
    are allowed and the paper's stability conditions are not imported.
  - `thm-phase-field-convex-splitting-ac-ch-time-error` and
    `thm-phase-field-convex-splitting-mesh-time-convergence`: the cited
    Shen–Yang 2010 printed ranges 1672–1688 and 1676–1688 correspond to PDF
    pp. 4–20 and 8–20, respectively.
  - `alg-phase-field-sav-cahn-hilliard-step`,
    `thm-phase-field-sav-modified-energy-law`, and
    `cex-phase-field-sav-modified-energy-not-physical-energy`: in
    Shen–Xu–Yang 2018, equations (3.1)–(3.2) are printed pp. 409–410 / PDF
    pp. 3–4; the general (H^{-1}) SAV scheme (4.2)–(4.5) and Theorem 4.1
    are printed pp. 411–412 / PDF pp. 5–6. Section 4 is a general
    (H^{-1}) formulation; the local backward-Euler Cahn–Hilliard identity
    is supplied by the assigned proof.
  - `thm-phase-field-convex-splitting-step-existence-and-energy` and
    `thm-phase-field-convex-splitting-mesh-time-convergence`: in
    Guo–Wang–Wise–Yue 2016, equation (1.4) is printed p. 490 / PDF p. 2,
    Theorems 2.2–2.3 are printed pp. 493–494 / PDF pp. 5–6, and Theorem 4.1
    with its proof is printed pp. 502–507 / PDF pp. 14–19. The latter is
    cited as a distinct periodic, smooth-solution scheme; the local item
    proves its own one-dimensional result.
  - `lem-phase-field-interval-p1-projector-stability` and
    `thm-phase-field-convex-splitting-mesh-time-convergence`: Clason's
    Chapter 12 §§12.1–12.2 are PDF pp. 105–109. The local projector estimates
    and compactness proof are supplied by the assigned items and PE12 result.
  - `ex-phase-field-interface-width-and-grid-resolution`: Shen–Yang 2010
    identifies epsilon as an interfacial-width parameter on printed p. 1669 /
    PDF p. 1; the exact profile width and grid calculation are local.

  Source passages checked:
  [Shen and Yang, *Numerical Approximations of Allen-Cahn and Cahn-Hilliard Equations*](https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf);
  [Shen, Xu, and Yang, *The Scalar Auxiliary Variable (SAV) Approach for Gradient Flows*](https://www.math.purdue.edu/~shen7/pub/SXY17.pdf);
  [Droniou, *Finite Volume Schemes for Diffusion Equations*](https://arxiv.org/pdf/1407.1567);
  [Eymard, Gallouët, and Herbin, *Finite Volume Methods*](https://raphaeleh.github.io/PUBLI/bookevol.pdf);
  [Clason, *Introduction to Finite Element Methods*](https://arxiv.org/pdf/1709.08618v2.pdf); and
  [Guo, Wang, Wise, and Yue, *An H2 Convergence of a Second-Order Convex-Splitting Finite Difference Scheme*](https://www.intlpress.com/site/pub/files/_fulltext/journals/cms/2016/0014/0002/CMS-2016-0014-0002-a008.pdf).

The affected batch-66 proof-contract source quotes and derivation claims were
updated. No changed item had a `verification.judge` record to remove.

## Page verdicts

- `phase-field-and-energy-dissipative-discretization` (A): sound after the
  weak-test integrability caveat above. Its summary correctly limits the PDE
  convergence result to the conforming interval branch, distinguishes the
  SAV modified energy from physical energy, and does not claim a Neumann
  finite-volume PDE limit or stability result for the stabilized variant.
- `phase-field-and-energy-dissipative-discretization-examples` (B): sound.
  The profile and width calculations, arbitrary-pair SAV counterexample, and
  two-cell root/energy ledger agree with their item proofs.

## Unedited defects and blockers

None found. No blocker remains.

## Validation and coverage

Reflow and precheck were run for each of the 11 changed item paths. All commands
exited successfully; proof-bearing items passed precheck and definitions and
algorithms reported zero applicable proof checks and zero failures. The final
single proof-layout command covered all 11 changed paths: 11 items, 30 steps,
0 defects.

I checked the assigned items, both assigned page summaries, their direct item
dependencies, relevant dependency-page summaries, and the cited source
passages listed above. I did not independently re-audit every transitive
dependency or every external reference of the upstream supplier items.
