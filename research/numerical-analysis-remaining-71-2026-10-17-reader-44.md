# Step 3a reader report — batch 44

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Verdict: both assigned pages pass after two local repairs; one nonfatal published-dependency formatting defect remains outside edit scope.

## Opened inventory

Assigned pages opened:

- `finite-volume-diffusion-and-mimetic-fluxes`
- `finite-volume-diffusion-and-mimetic-fluxes-examples`

All 13 A-page items were opened in dependency order:

- `def-fv-admissible-cell-face-mesh`
- `def-tpfa-harmonic-face-scheme`
- `def-hybrid-mimetic-fv-scheme`
- `def-fv-regular-simplicial-companion-family`
- `thm-tpfa-green-coercivity-maximum-principle`
- `thm-path-certified-fv-discrete-poincare`
- `prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact`
- `lem-fv-conforming-companion-and-test-recovery`
- `thm-tpfa-flux-energy-convergence-smooth-interface`
- `thm-tpfa-discrete-rellich-and-physical-gradient-closure`
- `lem-mimetic-fv-parabolic-limit-identification`
- `lem-hybrid-mimetic-backward-euler-energy-and-compactness`
- `thm-hybrid-mimetic-parabolic-weak-flux-limit`

All four B-page items were opened after their suppliers:

- `ex-orthogonal-voronoi-harmonic-diffusion`
- `cex-nonorthogonal-two-point-flux-inconsistent`
- `ex-harmonic-transmissibility-material-interface`
- `ex-anisotropic-mimetic-flux-on-skew-cell`

The three pages required by the A page were opened:

- `elliptic-finite-difference-methods`
- `conservative-finite-volume-weak-limits`
- `nonlinear-parabolic-compactness-and-monotone-evolution`

Mathematical suppliers opened for the batch claims included `def-axiom-of-choice`, `def-choice-function`, `thm-reference-simplex-trace-and-gauss-green`, `thm-reference-simplex-poincare-wirtinger`, `thm-poincare-inequality-for-w-one-p-zero`, `thm-holder-inequality-for-integrals`, `thm-dominated-convergence`, `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, `thm-brouwer-fixed-point-theorem`, `thm-rellich-compactness-from-w-one-p-zero-to-lp`, `thm-reflexivity-of-lp-for-one-less-p-less-infinity`, `cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence`, `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`, `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`, `lem-pe12-w1p-compact-l2-embedding`, `lem-pe12-space-time-gradient-weak-compactness`, `lem-pe12-bochner-lp-mollification`, `lem-pe12-outward-zero-brouwer`, `lem-pe12-minty-identification`, `lem-pe12-evolution-energy-chain-rule`, `thm-pe12-discrete-aubin-lions-compactness`, `def-pe12-gelfand-triple`, `def-pe12-monotone-diffusion-flux`, `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`, and `cor-sobolev-inequality-for-w-one-p-zero`.

The cited finite-volume sources were checked at their relevant passages: Eymard–Gallouët–Herbin, Chapter 9 §9.2, Definition 9.1, printed pp. 37–39, and Chapter 11 §11.1; Droniou, §1.1 Definition 1.1, §2 equations (2.1)–(2.4), and §4 equations (4.7)–(4.9); Lipnikov–Manzini, §3.1–§3.3. The local items supply their own arguments; these sources confirm the mesh, TPFA, and HMM conventions. [Eymard–Gallouët–Herbin](https://raphaeleh.github.io/PUBLI/bookevol.pdf), [Droniou](https://arxiv.org/pdf/1407.1567), [Lipnikov–Manzini](https://arxiv.org/pdf/1610.05850).

## Repairs and evidence

1. `def-fv-admissible-cell-face-mesh`, Definition: the text called cells “open convex polytopes” but immediately defined a polytope as a closed intersection of closed half-spaces. The definition now names the closed convex polytope and defines each open cell as its interior, with the mesh faces taken from cell closures. Eymard–Gallouët–Herbin Definition 9.1 and Droniou Definition 1.1 both use open convex control volumes; their face and closure conventions agree with this correction. The correction does not change the geometry used by any batch-44 consumer. All batch-44 consumers and both page summaries were checked against it.

2. `thm-hybrid-mimetic-parabolic-weak-flux-limit`, Proof 1.1: the proof showed the cell averages `b_h` have the same weak limit as `q_h` against smooth tests, then extended the identification to every dual test without naming the density result. Added direct dependency `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` and fact [F6], which obtains density in `L^p(Q; R^d)` by zero extension, restriction, and coordinatewise approximation. The existing AC hypothesis supplies Countable Choice required by that result. The proof contract’s citations and derivations were regenerated; its [F6] citation now records the exact supplier statement and use in step 1.1.

The mesh definition has no proof steps, so the proof-contract regeneration correctly skipped it. Neither changed item had a stale `verification.judge` record. `reflow` reported both files unchanged. `precheck` reported 0 checked/0 failing for the definition and PASS for the theorem. `proof-layout` reported 2 items, 8 steps, 0 defects.

## Uneditable defect

`cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`, Proof 7.1 (final step): the line ends with ` $\square$ [F21, step 2.1, step 4.1, step 5.1, step 6.1, given]`; it places the QED mark before the tags and does not end in the required `[tags] ∎` form. This is a nonfatal proof-layout defect; the mathematical argument is intact. The assigned consumer `lem-mimetic-fv-parabolic-limit-identification` cites this result directly for its scalar initial-trace integration by parts. The published carrier was not edited.

## Page verdicts

- `finite-volume-diffusion-and-mimetic-fluxes`: pass after the mesh-definition repair. The summary accurately distinguishes orthogonal TPFA, general-mesh mimetic fluxes, the proved finite-volume estimates, and the conditional limit-identification interface. Its required edge to `conservative-finite-volume-weak-limits` does not supply a diffusion or parabolic claim; that dependency page describes a one-dimensional scalar hyperbolic conservation law, and the assigned page does not rely on it as a diffusion theorem.
- `finite-volume-diffusion-and-mimetic-fluxes-examples`: pass. The two-cell fluxes, nonorthogonal counterexample, one-dimensional resistance calculation, and skew-cell anisotropic face fluxes agree with their displayed data and conventions.

## Blockers and coverage limit

No blocker. The review covers all assigned items and pages, their direct claim suppliers, the named current-run PE12 suppliers, and the relevant cited source passages. It is not a re-audit of every transitive foundation dependency inside those suppliers.
