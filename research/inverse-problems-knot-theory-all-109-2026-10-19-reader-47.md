# Step 3a reader report — batch 47

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Run state and scope

I checked the live run with the autopilot status command. At review time, batch 47 was still missing from `3a-read`, with nothing in flight. The run also reports an unrelated `3a-split` blocker for batch 30 after three failures. There was no batch-47 blocker.

The manifest lists two pages and 21 assigned items. Both assigned pages and every assigned item were opened. I first read the assigned items in manifest order and then checked their suppliers; therefore, the requested supplier-before-consumer opening order was not achieved. I record this as a process limitation rather than claiming otherwise.

## Opened assigned inventory

Pages:

- `neural-operator-eit-inverse-map` — `library/inverse-problems/neural-operator-eit-inverse-map.md` (A page).
- `neural-operator-eit-inverse-map-examples` — `library/inverse-problems/neural-operator-eit-inverse-map-examples.md` (B page).

Items, in manifest/dependency-level order:

1. `lem-ip-boundary-chart-lifting-and-fourier-projection`
2. `lem-ip-finite-dimensional-neural-universal-approximation`
3. `lem-ip-concave-modulus-hilbert-ball-intersection`
4. `lem-ip-boundary-spectral-counting-and-sobolev-scale`
5. `def-ip-generalized-fourier-neural-operator`
6. `lem-ip-fno-torus-compact-universality`
7. `thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel`
8. `thm-ip-generalized-fno-uniform-approximation-on-compact-sets`
9. `lem-ip-mean-zero-neumann-problem-wellposedness`
10. `def-ip-mean-zero-ntd-and-smoothed-kernel-observation`
11. `lem-ip-meyers-higher-integrability-for-interior-conductivity-solutions`
12. `lem-ip-ntd-boundary-smoothing-for-fixed-background-collar`
13. `lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound`
14. `lem-ip-interior-neumann-modes-and-kernel-forward-continuity`
15. `lem-ip-eit-forward-continuity-and-class-compactness`
16. `thm-ip-hilbert-map-extension-with-concave-modulus`
17. `lem-ip-stable-extension-of-the-eit-inverse-map`
18. `thm-ip-eit-fno-noise-robust-existence`
19. `op-ip-finite-sample-generalization-of-neural-inverse-maps`
20. `ex-ip-finite-sample-outside-uniform-bv-bound`
21. `ex-ip-eit-fno-continuum-vs-finite-element-experiment`

The direct supplier IDs outside the assigned batch appearing in its dependency metadata were also checked where used by the claims: `cor-real-and-euclidean-vector-valued-ascoli-arzela`, `def-axiom-of-choice`, `def-countable-choice`, `def-ip-calderon-admissible-conductivity-class`, `def-ip-calderon-weak-dn-map-for-bounded-conductivities`, `def-ip-inverse-risk-under-train-and-test-laws`, `def-ip-spatial-bv-and-distributional-tv`, `def-laplace-fundamental-solution-with-positive-minus-laplacian-sign`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic`, `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators`, `lem-ip-bv-test-field-characterization-and-lsc`, `lem-ip-bv-translation-modulus-for-conductivity`, `lem-ip-calderon-boundary-trace-quotient-identification`, `lem-ip-calderon-rough-dn-map-wellposedness`, `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`, `thm-critical-sobolev-embedding-into-every-finite-lq`, `thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one`, `thm-extension-theorem-for-bounded-smooth-domains`, `thm-fourier-basis-and-parseval-on-the-n-torus`, `thm-frechet-kolmogorov-compactness-criterion-in-lp`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-hilbert-projection-variational-characterization`, `thm-interior-h-k-plus-two-elliptic-regularity`, `thm-ip-calderon-logarithmic-l2-stability`, `thm-l-two-kernels-give-hilbert-schmidt-operators`, `thm-lax-milgram`, `thm-minus-laplacian-of-the-fundamental-solution-is-dirac`, `thm-plancherel`, `thm-poincare-wirtinger-on-bounded-connected-extension-domains`, `thm-projection-onto-a-nonempty-closed-convex-set`, `thm-real-stone-weierstrass-general`, `thm-riesz-thorin-interpolation`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-young-convolution-inequality`, and `thm-zorn`.

## Mathematical review and page verdicts

I checked statements, assumptions, constructions, proof steps, examples, source locations, and reference placement. No additional false claim, missing hypothesis, unsupported inference, incorrect computation, or defective citation was confirmed in the assigned items. The source comparisons preserve the stated domains, output classes, risk, and quantifiers; the finite-element experiment remains an empirical example and is not used as a generalization theorem.

The chart-lifting diagram in `lem-ip-boundary-chart-lifting-and-fourier-projection` correctly represents the maps (G), (L), and the identity (LG=I). The boundary spectral diagram in `lem-ip-boundary-spectral-counting-and-sobolev-scale` correctly represents the compact embedding and composed operator. No other TikZ/tikzcd diagrams or missing-diagram requirements were found in the assigned items.

- **A page `neural-operator-eit-inverse-map`: pass.** Its frontmatter inventory agrees with the assigned manifest; its body is empty and `page_layout: compact-v1` is present.
- **B page `neural-operator-eit-inverse-map-examples`: pass.** Its frontmatter inventory agrees with the assigned manifest; its body is empty and `page_layout: compact-v1` is present.

Both pages have no summary prose. The assigned item statements keep their citations after the complete statement/definition/example sections.

## Repair and evidence

I repaired a literature-status omission in the assigned in-flight item `op-ip-finite-sample-generalization-of-neural-inverse-maps`. Its status discussion covered existing FNO data-complexity and ReLU sampling results but omitted the directly relevant 2026 paper by Reinhardt, Wang, and Zech. I added the paper to the source metadata and the separate `Open problem references` section, and updated the status discussion and date. I also updated the item’s `open_problem_review.status` and `open_problem_review.sources` evidence in the batch proof contract.

The primary JMLR paper, [*Statistical Learning Theory for Neural Operators*](https://www.jmlr.org/papers/volume27/25-0543/25-0543.pdf), states ERM concentration results for random-design regression with additive white or sub-Gaussian output noise in Theorems 5–6 and algebraic FrameNet rates for holomorphic operators, including parametric Darcy flow, in Theorems 23 and 27 (PDF pp. 9–11 and 21–25). These are relevant neighboring results, but their stated assumptions do not give the minimax excess-risk behavior over arbitrary Borel joint laws for the bounded generalized-FNO EIT class in the open problem. I made no change to the formulation or claim strength.

Other primary passages consulted included de Hoop et al., Theorem 4.8, Appendix A’s fixed-background smoothing result, and Appendix C’s finite-element experiment in [the paper](https://arxiv.org/pdf/2511.20361); the original Meyers paper, Theorem 2, printed pp. 200–203; Faraco–Prats, Theorem 1.6, PDF pp. 2–3; and Caro–García–Reyes, Theorem 1.1, PDF pp. 2–3. For the concave-modulus Hilbert-ball argument, I compared the local proof with Benyamini–Lindenstrauss, Proposition 1.13′ and Lemma 1.14; the accessible OCR excerpt was noisy, so it was corroborative rather than the sole basis for the local proof review.

## Remaining defects and limitations

No uneditable defect was confirmed; the findings array is empty. I did not independently reconstruct every transitive proof below the in-run Calderón logarithmic-stability supplier. The local stability arguments were checked against the cited planar and higher-dimensional stability results and the relevant helper statements, but I make no global certification of every deeper upstream proof. The authors’ order of reading also means this review does not satisfy the prescribed supplier-first sequence. No other mathematical blocker remains for batch 47.

## Validation

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/op-ip-finite-sample-generalization-of-neural-inverse-maps.md` — unchanged.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/op-ip-finite-sample-generalization-of-neural-inverse-maps.md` — 0 checked, 0 failing.
- Proof layout: `node tools/proof-layout.mjs items/op-ip-finite-sample-generalization-of-neural-inverse-maps.md` — 1 item, 0 proof steps, 0 defects.
