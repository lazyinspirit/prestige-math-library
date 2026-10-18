# Step 3a Reader Report — batch 38

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `38`  
Role: reader  
Date: 2026-10-18

## Opened inventory

Both assigned pages were read in full. Both are draft and their page summaries match the mathematical scope of the listed items:

- A page: `library/numerical-pdes-and-spatial-discretization/discrete-de-rham-complexes-and-edge-elements.md`
- B page: `library/numerical-pdes-and-spatial-discretization/discrete-de-rham-complexes-and-edge-elements-examples.md`

All 25 A-page items and all 3 B-page examples were read in dependency-level order. Every assigned item was draft at review time.

| Dependency level | Opened A-page items |
|---:|---|
| 0 | `def-na-hcurl-space`; `lem-na-contractible-lipschitz-polyhedron-boundary-connected`; `lem-na-lipschitz-scalar-h1-h2-extension`; `lem-na-graded-whitney-mesh-size-and-boundary-shifts` |
| 1 | `def-na-lowest-order-whitney-de-rham-spaces`; `def-na-zero-tangential-hcurl`; `lem-na-compact-support-hcurl-fourier-splitting`; `lem-na-weak-local-potentials-and-continuation` |
| 2 | `lem-na-hcurl-curlfree-potential-contractible`; `cex-na-canonical-edge-moments-not-bounded-on-hcurl`; `def-na-curl-curl-kernel-quotient-gauge`; `lem-na-nedelec-edge-unisolvence`; `lem-na-weak-hcurl-tangential-trace`; `lem-na-lipschitz-support-and-zero-boundary-closure` |
| 3 | `lem-na-whitney-moments-commute-with-grad-curl-div`; `thm-na-stable-mixed-curl-curl-kernel-quotient`; `lem-na-full-dirichlet-hcurl-regular-decomposition` |
| 4 | `thm-na-regular-decomposition-zero-tangential-hcurl`; `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes`; `lem-na-relative-curl-kernel-is-zero-boundary-gradients`; `lem-na-whitney-averaged-pullback-moment-bounds` |
| 5 | `lem-na-whitney-cochain-correction-and-strong-convergence` |
| 6 | `thm-na-uniformly-bounded-commuting-cochain-projection` |
| 7 | `lem-na-discrete-gradient-lift-gap-estimate` |
| 8 | `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec` |

The three B-page examples were read after their suppliers:
`ex-na-nedelec-edge-circulation-and-stokes`,
`ex-na-nodal-curlcurl-spurious-gradient-mode`, and
`ex-na-handle-domain-harmonic-edge-field`.

I also opened the four A-page prerequisite pages declared by the manifest:
`mixed-hdiv-fluxes-and-darcy-discretization` (draft),
`simply-connected-plane-domains` (published),
`the-de-rham-theorem-and-degree` (published), and
`geodesics-the-exponential-map-completeness-and-hopf-rinow` (published).
Relevant direct dependency statements and definitions were opened before their consumers. These included the H(curl)/H(div) graph conventions; real L2 and Sobolev spaces; mesh, orientation, affine Piola, Stokes, and Gauss–Green conventions; Fourier and mollification interfaces; the topological collar, Poincaré–Lefschetz duality, singular and simplicial homology interfaces; and the Hilbert projection, finite-dimensional Riesz, and Rellich results.

The out-of-batch draft item `def-na-hdiv-space` was read before its assigned consumers. The exact current bytes observed had SHA-256 `3e4de2a4b6b991329561345dcf60425da72195b8c79c4ebccfef8e6dfa563d97`. Its real vector L2, distributional divergence, Countable Choice, and graph-norm conventions supply the stated H(div) interface; I found no defect in that definition. It remains another batch’s draft and was not edited.

For the scalar Lipschitz extension claim, I checked Hiptmair–Pechstein, *Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving*, Lemma 1 (printed pp. 6–7). The cited statement supplies one bounded linear H1 extension operator that is also bounded on Hk for every integer k≥1, for a bounded Lipschitz domain of diameter one. The local item proves its claimed H1/H2 interface rather than using that citation as a substitute proof. [Source PDF](https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf).

## Repairs and evidence

Four assigned items were repaired.

1. `lem-na-whitney-averaged-pullback-moment-bounds`: the commutation statement named `Q_h^{k+1}` in degree three although the defined family stops at degree three. The statement and proof now assert the operator identity in degrees 0–2 and state that the terminal degree-three differential is zero. The proof contract’s step 3.1 derivation was updated.

2. `lem-na-whitney-cochain-correction-and-strong-convergence`: its commutation statement and inverse-series argument had the same undefined degree-four operator. The statement and proof now restrict the equation to degrees 0–2, handle degree three by the zero differential, and state graph convergence in degree three as the L2 convergence already proved. Proof-contract derivations 1.1 and 3.1 were updated.

3. `thm-na-uniformly-bounded-commuting-cochain-projection`: the full-space projection equation also invoked `pi_h^4`, and the homogeneous commutation range was unspecified. The statement now specifies degrees 0–2 for commutation and the zero terminal differential. The proof-contract step 1.1 summary was aligned, and the exact F1 quote mirrors in this contract and the discrete-compactness contract were refreshed to match their current supplier Statements.

4. `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`: step 3.1 used connectedness of the tetrahedral link around each mesh vertex to propagate nodal values, but did not explain why the link is connected. It now relates the local matching star to the ball/half-ball models of the Lipschitz three-manifold, identifies the connected spherical/disk link, and explains how a path through link triangles gives a shared-face chain. Proof-contract derivation 3.1 was updated.

None of the four items had a `verification.judge` record, so no judge record required removal. No page prose was edited.

## Defects not edited

None. The H(div) cross-batch draft interface and the declared prerequisite page summaries were consistent with the uses in this batch.

## Page verdicts

- `discrete-de-rham-complexes-and-edge-elements`: supported after the item repairs. The page summary’s distinctions between full and relative complexes, the graph-space boundary convention, the mesh cochain map, and the topology-dependent harmonic component are supported by the assigned definitions and proved results.
- `discrete-de-rham-complexes-and-edge-elements-examples`: supported. The edge circulation/curl-flux calculation, nodal curl-free counterexample, and solid-torus nonzero-period field are computed with the displayed orientations and domains.

## Validation

- Reflow was run on each of the four changed item paths; each returned `unchanged`.
- Precheck passed for all four changed items.
- Strict proof-contract validation passed for the four changed items and their relevant downstream consumers (5/5, zero errors and warnings).
- Final batched proof-layout command checked all four changed item paths: 4 items, 18 numbered steps, zero defects.

## Blocker and coverage note

There is no batch-38 blocker. At the run-status snapshot, the unrelated `3a-collect` stage had a blocker: `collect-7` had failed three times for batch 7. That blocker is outside this assignment. I did not re-audit every proof in the transitive published dependency graph; I checked the specific definitions, statements, and proofs needed for the assigned arguments. I found no unresolved mathematical uncertainty in the reviewed scope.
