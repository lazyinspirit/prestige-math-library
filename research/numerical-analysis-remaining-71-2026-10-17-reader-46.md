# Step 3a reader report — batch 46

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Verdict: no remaining uneditable findings.

## Inventory reviewed

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/nonlinear-full-approximation-multigrid.md`
- `library/numerical-pdes-and-spatial-discretization/nonlinear-full-approximation-multigrid-examples.md`

Assigned items, read in supplier-before-consumer order:

- `alg-fas-two-grid-cycle`
- `lem-fas-second-derivative-of-composed-cycle-map`
- `alg-fas-vw-cycle`
- `lem-fas-coarse-branch-derivative`
- `lem-fas-vw-cycle-work-and-status`
- `lem-fas-fine-root-fixed-point`
- `thm-fas-local-contraction-under-derivative-bound`
- `lem-fas-linear-vw-cycle-translation`
- `thm-fas-linear-cycle-reduces-to-galerkin-correction`
- `lem-fas-inexact-coarse-solve-residual-defect`
- `ex-fas-semilinear-reaction-diffusion-local-convergence`
- `ex-fas-reaction-poisson-tau-cancellation`
- `cex-fas-zero-tau-breaks-fine-root`
- `ex-fas-bifurcation-shrinks-contraction-ball`
- `ex-fas-linear-cycle-equivalence`

The direct mathematical dependencies were opened: `cor-finite-dimensional-normed-spaces-are-banach`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `thm-euclidean-implicit-function-theorem`, `thm-chain-rule-for-total-derivatives`, `lem-vector-newton-correction-error-under-lipschitz-jacobian`, `alg-finite-galerkin-v-cycle`, `thm-galerkin-coarse-correction-is-energy-orthogonal-projector`, and `thm-mean-value-inequality-for-total-derivatives`. For the Galerkin projection dependency, I also opened `def-galerkin-coarse-grid-correction`, `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer`, `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix`, and `prop-transpose-laws`; the matrix product/identity and transpose definitions used by the V-cycle were checked as well.

The three A-page prerequisites were opened: `multigrid-methods-and-complexity`, `nonlinear-equations-and-newton-methods`, and `nonlinear-parabolic-compactness-and-monotone-evolution`. The batch-46 proof-contract file was checked against the proof-bearing items; its source clauses and step mappings matched the reviewed bodies. Its open risk-review records are author self-checks, not independent verdicts.

## Review and edits

The two-grid procedure gives the tau-corrected target and correction with explicit domain, solver-status, and budget branches. The recursive procedure composes it across a finite hierarchy. The fixed-point, derivative, linear-reduction, work, contraction, and inexact-solve claims preserve their stated hypotheses; their arguments follow from the displayed formulas and cited dependencies. I checked the worked matrices, the two-node cubic reaction example, the tau-omission counterexample, and the pitchfork contraction-radius calculation directly. I found no mathematical defect or unsupported proof inference in these claims.

Edited `items/lem-fas-coarse-branch-derivative.md`: changed the title from “Derivative of the exact-branch FAS two-grid correction” to “Derivative of the exact-branch FAS two-grid cycle.” The statement computes the derivative of the full cycle, with both pre- and post-smoother derivatives surrounding the coarse-correction factor, so the former title named too narrow an object. The proof body and dependencies were unchanged, so the proof contract was unaffected; the item had no `verification.judge` record.

Edited `items/lem-fas-second-derivative-of-composed-cycle-map.md`: corrected its reference to the linked Banach calculus notes from “Zuoqin Wang, Lecture 6: Differential Calculus on Banach Spaces” to “Chin-Lung Wang, Banach Calculus,” and added §2.3 to the locator. The PDF front matter identifies Chin-Lung Wang as the author and *Banach Calculus* as the title; §§2.1.1–2.1.4 contain the sum, product, and chain rules, while §2.3 defines the second derivative used in the local derivation. The proof body and dependency contract were unchanged; the item had no `verification.judge` record.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-fas-coarse-branch-derivative.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-fas-coarse-branch-derivative.md` — pass; 1 checked, 0 failing.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-fas-second-derivative-of-composed-cycle-map.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-fas-second-derivative-of-composed-cycle-map.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-fas-coarse-branch-derivative.md items/lem-fas-second-derivative-of-composed-cycle-map.md` — 2 items, 6 steps, 0 defects.

No other carrier was edited.

## Source checks

- Van Emden Henson, *Multigrid Methods for Nonlinear Problems: An Overview*, LLNL UCRL-JC-150259, §3, PDF pages 5–6 (browser page indices 4–5): equation (3.3) and the FAS steps give the coarse operator at the restricted iterate plus the restricted fine residual, then prolong the difference between the coarse solution and restricted iterate. The same section writes the tau term explicitly. Source: <https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf>.
- Harald van Brummelen, *Basics of Multigrid Methods*, SINTEF lecture notes, slides 25–26 (browser PDF page indices 65–67): the displayed FAS coarse equation and prolongated correction match those formulas. Source: <https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf>.
- Chin-Lung Wang, *Banach Calculus*, §§2.1.1–2.1.4 and §2.3: the product and chain rules and second-derivative convention used by the composition lemma. The PDF front matter gives the author/title, and the contents and section headings give these locators. Source: <https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf>.
- Briggs, Henson, and McCormick, *A Multigrid Tutorial*, 2nd ed., Chapter 6: the citation title and chapter were confirmed, but the 18.3 MB PDF could not be fetched by the browser. The relevant FAS formula was cross-checked in the two sources above and derived locally in the assigned items. Source: <https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf>.

## Page verdicts and remaining defects

- `nonlinear-full-approximation-multigrid` (A page): pass. Its summary and caveats match the procedures and proved results; it does not claim global convergence, uniform basins, or blanket linear work.
- `nonlinear-full-approximation-multigrid-examples` (B page): pass. Its summary accurately describes the listed finite examples and does not assert arbitrary-start nonlinear convergence. B-page prose was left unchanged.

Unedited defects: none. Blockers: none. The only source-review limitation is the inaccessible full Briggs PDF; the standard FAS equation and correction were independently checked in the Henson and van Brummelen sources listed above.
