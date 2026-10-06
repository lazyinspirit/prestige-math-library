---
id: cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature
kind: corollary
title: Stein-Tomas for compact hypersurfaces with nonzero curvature
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- lem-restriction-and-extension-estimates-are-dual
- lem-localized-curved-patch-measure-transform-decay
- lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform
- lem-stein-tomas-tt-star-bound-from-fractional-integration
- lem-compact-curved-hypersurface-finite-graph-cover
- lem-riesz-thorin-bound-on-the-finite-simple-core
- thm-extension-of-a-bounded-map-from-a-dense-subspace
- thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
- thm-complex-lp-completeness-and-almost-everywhere-subsequences
- thm-fourier-translation-modulation-dilation-and-reflection-laws
- thm-linear-change-of-variables-for-lebesgue-measure
- def-surface-integral-on-a-compact-c-one-hypersurface
- lem-surface-integral-is-independent-of-c-one-boundary-charts
- def-conjugate-exponents
- def-countable-choice
- lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph
- cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
- def-complex-lp-and-euclidean-test-function-conventions
- def-euclidean-hypersurface-normal-shape-operator-and-curvature
- lem-smooth-euclidean-hypersurface-graph-and-localization
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-6.md"
      - "research/frontier-38-owner-30-alpha-batch-6-5a.md"
      - "research/frontier-38-owner-30-step5-hash-6-post-5a.json"
    content_sha256: "68ed589327762f73855c0e80b776aa97c2da3ca90cebcc09b81ccdfbb725a446"
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Mark Williams, Notes on harmonic analysis
    url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
    locator: Theorem 11.1, printed p.71, Proposition 11.3, p.72, and §11.3 proof, pp.73–74, equations (11.10)–(11.17). Nonzero curvature is retained explicitly in the local statement.
---

## Statement

Assume Countable Choice. Let $S\subseteq\mathbb R^n$ ($n\ge2$) be a compact embedded $C^\infty$ hypersurface with everywhere nonvanishing extrinsic Gaussian curvature and surface measure $\sigma$. Set $p_0=2(n+1)/(n+3)$ and $q_0=2(n+1)/(n-1)$. Then there is $C_S<\infty$, depending on $S$, such that $\|\widehat f\|_{L^2(\sigma)}\le C_S\|f\|_{L^{p_0}(\mathbb R^n)}$ for all $f\in\mathcal S(\mathbb R^n)$; $R_0$ extends uniquely to a bounded linear $R:L^p(\mathbb R^n)\to L^2(\sigma)$ for every $1\le p\le p_0$; and $E:L^2(\sigma)\to L^q(\mathbb R^n)$ is bounded for every $q\ge q_0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, a compact embedded $C^\infty$ hypersurface $S\subseteq\mathbb R^n$ with everywhere nonvanishing extrinsic Gaussian curvature and surface measure $\sigma$, the exponents $p_0,q_0$, and the operators $R_0,E$.

[F1] Every smooth embedded Euclidean hypersurface admits smooth graph charts after rigid motions. Compact sets admit finite graph localization, with smooth compactly supported nonnegative weights summing to one. ([[lem-smooth-euclidean-hypersurface-graph-and-localization]])

[F2] Euclidean shape operators and extrinsic Gaussian curvature have their usual meanings; local normal reversal preserves curvature nonvanishing. On a graph the curvature determinant equals the Hessian determinant divided by the positive graph factor. ([[def-euclidean-hypersurface-normal-shape-operator-and-curvature]], [[lem-smooth-euclidean-hypersurface-graph-and-localization]], [[lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph]])

[F3] Finite cover and partition: the compact hypersurface is covered by finitely many relatively open graph pieces of [F1] with subordinate nonnegative smooth functions $\chi_j$, $\sum_j\chi_j=1$, each $\chi_j$ compactly supported in its piece; the localized measures $\mu_j:=\chi_j\sigma$ are graph-patch localizations of the form treated by the patch decay and slice estimates. ([[lem-compact-curved-hypersurface-finite-graph-cover]], [[lem-localized-curved-patch-measure-transform-decay]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F4] Endpoint patch bound: for every such localization $\mu_j$ one has $\|f*\check\mu_j\|_{p_0'}\le C_j\|f\|_{p_0}$ for all Schwartz $f$, with $C_j$ depending on the patch data. ([[lem-stein-tomas-tt-star-bound-from-fractional-integration]])

[F5] TT*: $\|\widehat f\|_{L^2(\sigma)}^2=\langle f*\check\sigma,f\rangle\le\|f*\check\sigma\|_{p_0'}\|f\|_{p_0}$. ([[lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform]])

[F6] Duality, extension and interpolation: for $1<p<\infty$, restriction at $p$ is equivalent to extension at $p'$ with the same constant and adjoint identification; bounded maps on dense subspaces have unique bounded extensions; and a map bounded $L^2\to L^{p_0'}$ and $L^2\to L^\infty$ with constants $C$ and $\sigma(S)^{1/2}$ satisfies $\|Eg\|_q\le C^{\theta}\sigma(S)^{(1-\theta)/2}\|g\|_2$ for $q\ge q_0$ with $1/q=\theta/p_0'$. ([[lem-restriction-and-extension-estimates-are-dual]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime]], [[lem-riesz-thorin-bound-on-the-finite-simple-core]], [[def-conjugate-exponents]], [[def-complex-lp-and-euclidean-test-function-conventions]])



[F7] Euclidean smooth density, complex completeness and bounded extension apply at $p=1$. Rigid coordinate changes preserve the required norms, and translations of surface patches give modulation of the data. ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-fourier-translation-modulation-dilation-and-reflection-laws]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

## Proof

**Proof technique:** direct; cover the compact curved hypersurface by finitely many curved graph patches, sum the endpoint patch bounds, and conclude by $TT^*$, duality and interpolation.

1.1 Finite graph cover. The local reduction of [F1] and the nondegeneracy of the curvature via [F2] produce, at every point, a curved graph chart; the argument of the finite-graph-cover lemma (compactness plus local construction) selects finitely many such charts covering $S$. The compact localization construction of [F1] uses the local graph normals; their sign-independent nonvanishing curvature in [F2] supplies the curved charts without needing a global normal field. Write the resulting pieces as $S_1,\dots,S_m$ with graphing functions $h_j$ satisfying $\det D^2h_j\ne0$ and localizations $\mu_j=\chi_j\sigma$ as in [F3]. [F1, F2, F3]

2.1 Endpoint convolution bound. Each patch may be rotated to graph coordinates; its translation contributes a modulation of the data. These operations preserve all relevant norms, so [F4] applies in the original coordinates. Since $\check\sigma=\sum_j\check\mu_j$ and $f*\check\sigma=\sum_jf*\check\mu_j$, the patch estimates [F4] and the triangle inequality give $\|f*\check\sigma\|_{p_0'}\le(\sum_jC_j)\|f\|_{p_0}=:C_S\|f\|_{p_0}$ for every Schwartz $f$. [F4, F7, step 1.1, algebra]

3.1 The restriction bound. By the $TT^*$ identity [F5] and step 2.1, $\|\widehat f\|_{L^2(\sigma)}^2=\langle f*\check\sigma,f\rangle\le\|f*\check\sigma\|_{p_0'}\|f\|_{p_0}\le C_S\|f\|_{p_0}^2$, hence $\|\widehat f\|_{L^2(\sigma)}\le C_S^{1/2}\|f\|_{p_0}$ for every $f\in\mathcal S(\mathbb R^n)$. [F5, step 2.1, algebra]

4.1 The range and the extension. By [F6] the restriction bound of step 3.1 gives a unique bounded extension $R:L^{p_0}\to L^2(\sigma)$ and the dual extension estimate $\|Eg\|_{p_0'}\le C_S^{1/2}\|g\|_{L^2(\sigma)}$; moreover $|Eg|\le\|g\|_{L^1(\sigma)}\le\sigma(S)^{1/2}\|g\|_{L^2(\sigma)}$, so $E:L^2(\sigma)\to L^\infty$ is bounded. For finite $q\ge q_0$, integrating $|Eg|^q\le\|Eg\|_\infty^{q-q_0}|Eg|^{q_0}$ gives $E:L^2(\sigma)\to L^q$ for every $q\ge q_0$, and dualizing as in [F6] extends $R_0$ uniquely to a bounded $R:L^p\to L^2(\sigma)$ for every $1<p\le p_0$. At $p=1$, $\|R_0f\|_2\le\sigma(S)^{1/2}\|f\|_1$ directly, and smooth density with completeness gives the unique extension. Hölder extends the integral adjoint pairing to $L^1$ as well. Thus the full asserted range holds. [F6, F7, step 3.1, algebra]

5.1 Conclusion. Steps 1.1–2.1 sum the endpoint patch estimates into a convolution bound for the full compact hypersurface, step 3.1 converts it into the endpoint restriction estimate, and step 4.1 gives the full range and the adjoint formulation. The constant depends on $S$ through the finitely many patch constants, the geometry of the cover, and $\sigma(S)$. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
