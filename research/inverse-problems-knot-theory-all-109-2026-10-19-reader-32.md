# Step 3a reader report — batch 32

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

Assigned pages:

- `library/inverse-problems/tv-source-certificates-and-geometric-convergence.md` (A)
- `library/inverse-problems/tv-source-certificates-and-geometric-convergence-examples.md` (B)

Assigned A-page items, reviewed in the manifest's dependency-level order:

- `def-ip-tv-functional-on-l2-distributional-variation`
- `def-ip-tv-level-set-representatives-and-boundaries`
- `def-ip-tv-variational-curvature`
- `lem-ip-tv-l2-finite-variation-has-radon-derivative`
- `lem-ip-tv-l2-functional-properties`
- `def-ip-tv-dual-source-certificate`
- `lem-ip-planar-isoperimetric-inequality-for-finite-perimeter-sets`
- `lem-ip-tv-l2-cutoff-approximation`
- `lem-ip-tv-dual-attainment-and-certificate-limit`
- `lem-ip-tv-l2-coarea-formula`
- `lem-ip-tv-l2-sobolev-inequality`
- `lem-ip-neumann-bv-sobolev-poincare`
- `lem-ip-tv-vanishing-noise-primal-compactness`
- `lem-ip-tv-level-set-uniform-density-and-hausdorff`
- `thm-ip-2d-tv-level-set-convergence`

Assigned B-page items:

- `cex-ip-tv-minimum-truth-without-source-certificate`
- `ex-ip-tv-circular-radon-zero-truth`
- `ex-ip-tv-bessel-deblurring-source-certificate`

The 48 direct item dependencies declared by the batch manifest were opened at the statement, definition, or proof clause used by the assigned carrier. These included the batch 27 Banach-subgradient, Bregman, variational-source, Fenchel, and rate suppliers; the batch 31 spatial-TV, boundary, BV test-field, coarea, strict-approximation, Sobolev, extension, compactness, zero-gradient, trace, and Radon-measure suppliers; and the published measure, Hilbert-space, Fourier, and elementary-analysis interfaces. For the longer BV chains, I also read `lem-ip-bv-one-sided-trace-on-lipschitz-graph`, `lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice`, `lem-ip-unit-vector-density-has-scalar-variation`, `lem-ip-l1-sequence-compactness-by-cell-averages`, and `lem-ip-open-euclidean-locally-finite-smooth-partition`.

The assigned density lemma also cites two draft run-local suppliers not listed in any current top-level batch manifest: `lem-ip-tv-finite-perimeter-ball-cut-calculus` and `lem-ip-tv-uniform-density-and-radial-support-for-curvature-minimizers`. I opened and reviewed both current carriers because their arguments are necessary to check the assigned density claim.

## Review and repair

The definitions preserve the selected full-space, Dirichlet, and Neumann TV conventions. The L² full-space TV items correctly use compactly supported test fields and do not assume global L¹ integrability. The direct proofs for finite-Radon representation, cutoff approximation, coarea, planar isoperimetry, and the Neumann BV inequality match their stated hypotheses.

The dual certificate argument correctly derives the primal-dual identity, the minimum-norm dual limit, the noise stability estimate, and the stated VSC rate under the rate theorem's parameter coupling. The primal compactness proof supplies a subsequential exact minimum-TV limit and transfers the source subgradient to that limit. In the geometric argument, the subgradient inequality calibrates almost every signed level set globally; the ball-cut supplier supplies the required comparison formulas; the radial-tail proof gives a common full-space support bound. The Hausdorff transfer handles both empty and nonempty level-set cases. I found no remaining mathematical gap in these arguments.

I repaired one missing bounded-domain hypothesis. The primal compactness statement gave an explicit bounded connected Lipschitz-domain definition that allowed the empty set, then used the mean `|Ω|⁻¹∫Ωu` in its Neumann branch. For the empty set this mean is undefined, and the consumed Neumann Poincaré lemma explicitly assumes a nonempty domain. I made the domain nonempty in that statement and stated nonemptiness in the bounded branches of the assigned density lemma and convergence theorem. Their proofs already use `|Ω|>0` for the Neumann branch. The theorem contract's verbatim F1 and F5 supplier quotations were refreshed to match the repaired Statements. None of the three carriers had a `verification.judge` record to remove.

## Validation

- Reflow: `lem-ip-tv-vanishing-noise-primal-compactness`, `lem-ip-tv-level-set-uniform-density-and-hausdorff`, and `thm-ip-2d-tv-level-set-convergence` all reported unchanged.
- Precheck: all three changed items passed.
- Final proof layout: 3 items, 17 numbered steps, 0 defects.
- Diagram review: no TikZ/tikzcd diagrams occur in the assigned pages or items.
- No tests or workflow gates were run.

## Page verdicts

- `tv-source-certificates-and-geometric-convergence` (A): clean. The page is YAML frontmatter only, retains its 15-item inventory and prerequisites, and has no summary body.
- `tv-source-certificates-and-geometric-convergence-examples` (B): clean. The page is YAML frontmatter only, retains its three examples/counterexamples and its A-page prerequisite, and has no summary body.

All 18 assigned statements/definitions/examples are uninterrupted by hyperlinks; their reference sections immediately follow the complete claim sections. I found no other title, hypothesis, definition, proof, computation, witness, or citation defect that remains unedited.

## External source checks

- Iglesias, Mercier, and Scherzer, [*A note on convergence of solutions of total variation regularized linear inverse problems*](https://arxiv.org/pdf/1711.06495): I checked §1.1's test-field formulation (PDF pp. 1–2), Definition 1 and the dual-source discussion (PDF pp. 4–5), Definition 4 (HTML lines 237–251), the Theorem 2 proof architecture and Hausdorff transfer (HTML lines 295–376), the density estimates (HTML lines 402–497), and the circular-Radon/smooth-source examples (PDF pp. 18–19). These passages match the cited contexts; the assigned arguments are checked through their local supplier proofs rather than accepted from the paper alone.
- Chambolle, Duval, Peyré, and Poon, [*Geometric properties of solutions to the total variation denoising problem*](https://arxiv.org/pdf/1602.00087): §7 (PDF p. 31, lines 2908–2919) discusses failure of the L² source condition for nonsmooth examples such as a square. The assigned counterexample is proved directly and is not represented as that paper's exact example.
- Terra's lecture notes are cited by several local suppliers, but I did not independently reopen the book during this reader pass; the relevant batch 31 proofs and the local arguments that use them were opened directly.

## Remaining issue / blocker

There are no confirmed unedited mathematical defects. The two draft geometric helper suppliers listed above are direct dependencies of the assigned density lemma but appear in no current `batch-*.pages.json` manifest, so this dispatch cannot bind them to an exact producer batch. Their current proof text was reviewed and no mathematical defect was confirmed. The run owner should reconcile their batch ownership before the dependency-routing gate.

The first assigned-item read preceded some dependency reads. I subsequently read the relevant supplier clauses and full local BV/geometric proof chains, then rechecked the affected consumer arguments. Published foundational dependencies were checked at the exact used interface; their proofs were not independently re-audited in this pass.
