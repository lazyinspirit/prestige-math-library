---
id: thm-stein-tomas-spherical-restriction-theorem
kind: theorem
title: Stein-Tomas spherical restriction theorem
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-fourier-restriction-and-adjoint-extension-operators
- lem-restriction-and-extension-estimates-are-dual
- lem-sphere-finite-graph-charts-and-surface-density
- thm-knapp-necessary-condition-for-spherical-ltwo-restriction
- lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform
- lem-stein-tomas-tt-star-bound-from-fractional-integration
- lem-riesz-thorin-bound-on-the-finite-simple-core
- thm-extension-of-a-bounded-map-from-a-dense-subspace
- thm-c-c-infinity-rn-is-dense-in-l-p-of-rn
- def-conjugate-exponents
- def-countable-choice
- lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds
- cor-l-one-l-infinity-and-l-two-bounds-interpolate-to-l-p-l-p-prime
- def-complex-lp-and-euclidean-test-function-conventions
- thm-fourier-translation-modulation-dilation-and-reflection-laws
- thm-linear-change-of-variables-for-lebesgue-measure
proof_strategy: direct
verification:
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

Assume Countable Choice and let $n\ge2$. Let $\sigma$ be the polar surface measure on $S^{n-1}$ and set $p_0=2(n+1)/(n+3)$, so that $p_0'=2(n+1)/(n-1)$. Then (a) there is $C_n<\infty$ with $\|\widehat f\|_{L^2(\sigma)}\le C_n\|f\|_{L^{p_0}(\mathbb R^n)}$ for all $f\in\mathcal S(\mathbb R^n)$; (b) $R_0$ extends uniquely to a bounded linear $R:L^p(\mathbb R^n)\to L^2(\sigma)$ for every $1\le p\le p_0$, and $E:L^2(\sigma)\to L^{p'}(\mathbb R^n)$ is its adjoint under the $L^p$–$L^{p'}$ and $L^2(\sigma)$ pairings with the same norm; equivalently $E:L^2(\sigma)\to L^q(\mathbb R^n)$ is bounded for every $q\ge q_0=2(n+1)/(n-1)$; (c) the result is sharp: (a) fails for $p>p_0$, and no $L^2\to L^q$ bound holds for $q<q_0$.

Here and in the sharpness clause the exponents belong to $[1,\infty]$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, the polar surface measure $\sigma$ on $S^{n-1}$, the exponents $p_0=2(n+1)/(n+3)$, $p_0'=2(n+1)/(n-1)$, and the operators $R_0,E$ of [[def-fourier-restriction-and-adjoint-extension-operators]].

[F1] Sphere charts and partition: the polar measure is written as a finite sum of localizations $\chi_j\sigma$ supported in the images of the graph charts $X_j(y)=(y,h_j(y))$ with $h_j=\pm\sqrt{1-|y|^2}$ and $\det D^2h_j\neq0$ on the chart domain; the chart density is $(1-|y|^2)^{-1/2}$. ([[lem-sphere-finite-graph-charts-and-surface-density]])

[F2] Graph-patch endpoint bound: for each chart localization $\mu_j=\chi_j\sigma$ as a graph measure with $\det D^2h_j\ne0$ one has $\|f*\check\mu_j\|_{p_0'}\le C_j\|f\|_{p_0}$ for all Schwartz $f$. ([[lem-stein-tomas-tt-star-bound-from-fractional-integration]], [[lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds]])

[F3] TT*: $\|\widehat f\|_{L^2(\sigma)}^2=\langle f*\check\sigma,f\rangle\le\|f*\check\sigma\|_{p_0'}\|f\|_{p_0}$; the identity reduces the restriction bound to a convolution bound. ([[lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform]])

[F4] Duality and extensions: for $1<p<\infty$, the restriction estimate at $p$ is equivalent to the extension estimate at $p'$ with the same constant; a bounded linear map on a dense subspace of a normed space with Banach target has a unique bounded extension with the same norm; $\mathcal S$ is dense in every $L^p$, $1\le p<\infty$. ([[lem-restriction-and-extension-estimates-are-dual]], [[thm-extension-of-a-bounded-map-from-a-dense-subspace]], [[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]])

[F5] For a measurable $h\in L^{q_0}\cap L^\infty$ and $q_0\le q<\infty$, integration of $|h|^q\le\|h\|_\infty^{q-q_0}|h|^{q_0}$ gives $\|h\|_q\le\|h\|_{q_0}^{q_0/q}\|h\|_\infty^{1-q_0/q}$. At $q=\infty$ use the given supremum bound. ([[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-fourier-translation-modulation-dilation-and-reflection-laws]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

[F6] Sharpness: every restriction estimate forces $p\le p_0$, and every extension estimate forces $q\ge q_0$. ([[thm-knapp-necessary-condition-for-spherical-ltwo-restriction]], [[def-conjugate-exponents]])



[F7] Orthogonal coordinate changes preserve Lebesgue norms and Schwartz space; translations of frequency surfaces modulate their inverse transforms. ([[thm-fourier-translation-modulation-dilation-and-reflection-laws]], [[thm-linear-change-of-variables-for-lebesgue-measure]])

## Proof

**Proof technique:** direct; localize the sphere into curved graph patches, sum the endpoint $TT^*$ bounds, dualize to the full range, and invoke the Knapp obstruction for sharpness.

1.1 Summing the graph-patch bounds. Let $\sigma=\sum_j\mu_j$ with $\mu_j=\chi_j\sigma$ the finite chart localization of [F1]. For $f\in\mathcal S(\mathbb R^n)$, rotate each patch to graph coordinates; orthogonal changes preserve Lebesgue norms and Schwartz space, and chart translations only modulate the data by a unit character. Thus [F2] applies in ambient coordinates. Now $\check\sigma=\sum_j\check\mu_j$ and hence $f*\check\sigma=\sum_jf*\check\mu_j$ as everywhere-defined bounded continuous functions. By [F2] and the triangle inequality for $L^{p_0'}$, $$\Bigl\|\sum_jf*\check\mu_j\Bigr\|_{p_0'}\le\sum_j\|f*\check\mu_j\|_{p_0'}\le\Bigl(\sum_jC_j\Bigr)\|f\|_{p_0}=:C_n\|f\|_{p_0}.$$ This is the convolution bound at the endpoint. [F1, F2, F7, algebra]

2.1 The restriction bound at $p_0$. Applying the $TT^*$ identity [F3] to the sum of step 1.1, $$\|\widehat f\|_{L^2(\sigma)}^2=\langle f*\check\sigma,f\rangle\le\|f*\check\sigma\|_{p_0'}\|f\|_{p_0}\le C_n\|f\|_{p_0}^2,$$ so $\|\widehat f\|_{L^2(\sigma)}\le C_n^{1/2}\|f\|_{p_0}$, which is (a). [F3, step 1.1, algebra]

3.1 By [F4], the endpoint restriction estimate gives $\|Eg\|_{q_0}\le C_n^{1/2}\|g\|_2$. Also $\|Eg\|_\infty\le\sigma(S^{n-1})^{1/2}\|g\|_2$ by the definition. Applying [F5] with $\theta=q_0/q$ gives $\|Eg\|_q\le(C_n^{1/2})^\theta\sigma(S^{n-1})^{(1-\theta)/2}\|g\|_2$ for $q_0\le q<\infty$, and the supremum estimate gives $q=\infty$. For $1<p\le p_0$, duality gives the unique restriction extensions with the same norms. At $p=1$, $\|R_0f\|_2\le\sigma(S^{n-1})^{1/2}\|f\|_1$ directly; density and completeness give its unique extension. The pairing $\int Eg\overline f=\int g\overline{Rf}\,d\sigma$ extends from Schwartz tests by Hölder, also for $p=1$. Conversely, norm testing in $L^2(\sigma)$ shows that each restriction norm is bounded by its extension norm; testing the extension against $L^1$ functions gives the reverse inequality at $p=1$. Thus the adjoint pairing and equality of norms hold throughout the asserted range. [F4, F5, step 2.1, algebra]

4.1 Sharpness. By [F6], the existence of a restriction estimate at exponent $p$ forces $p\le p_0$, and the existence of an $L^2(\sigma)\to L^q$ extension estimate forces $q\ge q_0$; the Knapp cap family $g=\mathbf 1_{C_\delta}$ with $\delta\downarrow0$ exhibits both failures. This proves (c). [F6, step 3.1]

5.1 Conclusion. Steps 1.1–2.1 prove the endpoint restriction bound (a), step 3.1 gives the full range and the adjoint formulation (b), and step 4.1 records sharpness (c) from the Knapp necessary condition. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
