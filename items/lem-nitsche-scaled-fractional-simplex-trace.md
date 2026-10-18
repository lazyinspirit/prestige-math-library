---
id: lem-nitsche-scaled-fractional-simplex-trace
kind: lemma
title: Scaled fractional traces on shape-regular simplices
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-matching-affine-simplicial-meshes,
    def-nitsche-restriction-bessel-potential-sobolev-spaces,
    def-real-order-bessel-potential-sobolev-space,
    thm-plancherel,
    thm-tonelli-and-fubini-for-completed-product-measures,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    thm-jensens-integral-inequality,
    thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces,
    lem-nitsche-fractional-face-trace-on-simplex,
    lem-shape-regular-affine-simplex-scaling,
    lem-affine-pullback-weak-derivatives-and-scaling,
    thm-reference-simplex-poincare-wirtinger,
    lem-smooth-density-on-reference-simplex,
    thm-reference-simplex-trace-and-gauss-green,
    lem-test-function-cutoffs-and-euclidean-localization,
    lem-smooth-bump-between-concentric-euclidean-balls,
    def-mollifier-family-generated-by-a-unit-mass-smooth-bump,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity,
    thm-riesz-fischer-completeness-of-l-p,
    thm-dominated-convergence,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Fix $d\ge2$, $1/2<s\le1$, and a shape-regular affine simplicial mesh family as in [[def-matching-affine-simplicial-meshes]]. For $0<s<1$ and a scalar or vector-valued function $w$ on a cell $K$, define
$$|w|_{s,K}^2:=\int_K\int_K\frac{|w(x)-w(y)|^2}{|x-y|^{d+2s}}\,dx\,dy;$$
for $s=1$ set $|w|_{1,K}:=\|\nabla w\|_{L^2(K)}$ (componentwise for vectors). For every cell $K$, facet $F\subset\partial K$, and $w\in H^s(K)$ in the restriction convention of [[def-nitsche-restriction-bessel-potential-sobolev-spaces]], the trace from [[lem-nitsche-fractional-face-trace-on-simplex]] satisfies
$$\|T_Fw\|_{L^2(F)}^2\le C\bigl(h_K^{-1}\|w\|_{L^2(K)}^2+h_K^{2s-1}|w|_{s,K}^2\bigr).$$
For $0<s<1$, the norm $\bigl(\|w\|_{L^2(K)}^2+|w|_{s,K}^2\bigr)^{1/2}$ is equivalent on a fixed reference simplex to the restriction $H^s$ norm. At $s=1$ the displayed estimate is the weak $H^1$ trace inequality; no additional identification of the full intrinsic weak-$H^1$ space with a restriction space is asserted. Constants are uniform over the shape-regular family and depend only on $d,s$ and its shape bound.

For every $w\in H^s(K)$, with cell mean $w_K:=|K|^{-1}\int_Kw$, the same conventions give
$$\|w-w_K\|_{L^2(K)}\le C h_K^s|w|_{s,K}.$$

## Facts & Assumptions

**Given:** Countable Choice; a fixed $d\ge2$; $1/2<s\le1$; a shape-regular affine simplex $K$ and facet $F$; the restriction Bessel-potential convention; and the $2\pi$-normalized Fourier transform.

[F1] Whole-space $H^s(\mathbb R^d)$ is the Bessel-potential completion with norm $\|\langle\xi\rangle^s\widehat U\|_2$, its Fourier characterization is exact, and Fourier transformation is unitary on $L^2$ ([[def-real-order-bessel-potential-sobolev-space]], [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]], [[thm-plancherel]]).

[F2] The restriction space on an open set has the infimum extension norm; the existing simplex trace is the unique restriction of the whole-space hyperplane trace and is bounded for every exponent greater than $1/2$ ([[def-nitsche-restriction-bessel-potential-sobolev-spaces]], [[lem-nitsche-fractional-face-trace-on-simplex]]).

[F3] For a shape-regular affine map from the reference simplex, its singular values are comparable to $h_K$, its determinant to $h_K^d$, and each facet surface Jacobian to $h_K^{d-1}$ ([[lem-shape-regular-affine-simplex-scaling]]).

[F4] On the reference simplex, smooth functions on a neighbourhood of the closure are dense in $W^{1,2}$ and restriction to a facet extends boundedly to $L^2$ ([[lem-smooth-density-on-reference-simplex]], [[thm-reference-simplex-trace-and-gauss-green]]). The mean-zero $W^{1,2}$ Poincaré inequality holds there ([[thm-reference-simplex-poincare-wirtinger]]).

[F5] Smooth cutoffs with prescribed compact support exist. A nonnegative smooth bump that is one on a ball and supported in a larger ball can be normalized to give a compactly supported smooth unit-mass mollifier; its convolution is smooth. Translations are continuous in finite $L^2$ (also on $\mathbb R^{2d}$), and $L^2$ is complete ([[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-smooth-bump-between-concentric-euclidean-balls]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[thm-riesz-fischer-completeness-of-l-p]]).

[F6] Tonelli/Fubini and Jensen's inequality apply to the nonnegative integrands and probability averages below. The change-of-variables formula for nonnegative Lebesgue integrands applies to each invertible affine map on the open sets where it is used, including translations, products of affine maps, and the affine pieces of the reflection in step 2.2; in particular it gives $\int\rho_\varepsilon=1$ for the rescaled unit-mass mollifier. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-jensens-integral-inequality]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]). Signed integrands, if used to express an integral identity, are split into positive and negative parts.

[F7] Dominated convergence applies to the integrable squared difference quotients in the cutoff limit below ([[thm-dominated-convergence]]).

[F8] For an invertible affine map $F_K(\widehat x)=b_K+A_K\widehat x$ and $w\in W^{1,2}(K)$, the pullback belongs to $W^{1,2}(\widehat K)$ and satisfies $\nabla_{\widehat x}(w\circ F_K)=A_K^T(\nabla w)\circ F_K$, with the corresponding volume-scaled seminorm bound ([[lem-affine-pullback-weak-derivatives-and-scaling]]).

[A1] Countable Choice is the only choice principle assumed; it permits selecting extensions and approximants along the explicitly countable sequences used below ([[def-countable-choice]]).

## Proof


**Given:** The hypotheses and [F1]–[F6].

1.1 For $U\in\mathcal S(\mathbb R^d)$ and $0<s<1$, the map $(x,y)\mapsto(x,z=y-x)$ is an invertible linear $C^1$ diffeomorphism of $\mathbb R^{2d}$ with determinant of absolute value $1$. Apply the change-of-variables formula in [F6] to the nonnegative integrand, then Tonelli and Plancherel in the $x$ variable, to obtain $\int_{\mathbb R^d}\int_{\mathbb R^d}\frac{|U(x)-U(y)|^2}{|x-y|^{d+2s}}\,dx\,dy=\int_{\mathbb R^d}|\widehat U(\xi)|^2\left(\int_{\mathbb R^d}\frac{|e^{2\pi i\xi\cdot z}-1|^2}{|z|^{d+2s}}\,dz\right)d\xi=c_{d,s}\int_{\mathbb R^d}|\xi|^{2s}|\widehat U(\xi)|^2\,d\xi.$ The inner integral is finite because its numerator is at most $C|z|^2$ near zero and at most $4$ at infinity, giving radial integrals $\int_0^1r^{1-2s}dr$ and $\int_1^\infty r^{-1-2s}dr$; it is positive for $\xi\ne0$. Rotation and dilation, each covered by [F6], give the factor $c_{d,s}|\xi|^{2s}$. The vector-valued version follows by applying this identity to each component and summing. Since $1+|\xi|^{2s}$ is comparable to $\langle\xi\rangle^{2s}$, this identifies the whole-space intrinsic norm with the Bessel norm on Schwartz functions. [A1, F1, F6, given]

1.2 We construct finitely many boundary charts. At each boundary point choose an inward direction in the interior cone of the simplex; in a sufficiently small rotated box the active facet inequalities solve for the vertical coordinate and give $t>g(x')$, where $g$ is the maximum of finitely many affine functions. Inactive facets stay away after shrinking the box. If the affine functions are $\ell_j$, then $|g(x')-g(y')|\le L|x'-y'|$ with $L:=\max_j|\nabla\ell_j|$, so $g$ is Lipschitz in this explicit sense. Compactness gives a finite cover of the boundary by smaller such boxes and one interior open set covering the remaining compact subset. Choose nonnegative smooth cutoffs $\eta_j$ supported in the corresponding larger chart sets and positive on the smaller cover. Their sum is positive on a neighborhood of the closed simplex, so $\psi_j:=\eta_j/(\sum_i\eta_i)$ there form a smooth finite partition of unity. Multiplication by each cutoff is bounded in the intrinsic norm: expand $\chi(x)w(x)-\chi(y)w(y)$ into $\chi(x)(w(x)-w(y))+w(y)(\chi(x)-\chi(y))$; the second term is bounded by $C\|w\|_2^2$ because $|\chi(x)-\chi(y)|\le\min(C|x-y|,2\|\chi\|_\infty)$ and the resulting radial kernel is integrable for $0<s<1$. [F5, F6, given]

2.1 The identity extends to the completion, and that completion is exactly the $L^2$ functions with finite displayed intrinsic seminorm. For the converse density, choose smooth cutoffs $\chi_R$ equal to one on $B_R$, supported in $B_{2R}$, with $|\nabla\chi_R|\le C/R$. For any such function $W$, the difference quotient of $(1-\chi_R)W$ is the sum of $(1-\chi_R(x))(W(x)-W(y))$ and $W(y)(\chi_R(y)-\chi_R(x))$. Dominated convergence sends the first term to zero in the weighted pair $L^2$ norm; for the second, integration in $x-y$ gives at most $C R^{-2s}\|W\|_2^2$. Thus $\chi_RW\to W$ in the intrinsic norm. For compactly supported $W$, translation is continuous in $L^2$ both for $W$ and for $G_W(x,y):=(W(x)-W(y))/|x-y|^{d/2+s}$ under the simultaneous translation $(x,y)\mapsto(x-a,y-a)$. Choose a nonnegative smooth compactly supported unit-mass mollifier $\rho$. For a scalar function $Z$ and probability density $\rho_\varepsilon$, scalar Jensen gives $|\int \rho_\varepsilon(a)Z(a)\,da|^2\le\int\rho_\varepsilon(a)|Z(a)|^2\,da$. For a finite-dimensional Euclidean-valued $Z=(Z_1,\ldots,Z_m)$, apply this to each real component and sum: $|\int \rho_\varepsilon Z|^2=\sum_{j=1}^m|\int\rho_\varepsilon Z_j|^2\le\sum_{j=1}^m\int\rho_\varepsilon|Z_j|^2=\int\rho_\varepsilon|Z|^2$. Applying this inequality to the scalar or vector differences for $W$ and $G_W$, then Tonelli, gives $\|\rho_\varepsilon*W-W\|_2^2+[\rho_\varepsilon*W-W]_{s,\mathbb R^d}^2\le\int\rho_\varepsilon(a)\bigl(\|W(\cdot-a)-W\|_2^2+\|G_W(\cdot-a,\cdot-a)-G_W\|_{L^2(\mathbb R^{2d})}^2\bigr)\,da.$ The right side tends to zero because both translation differences tend to zero as $a\to0$ and the mollifier supports shrink to zero. The convolution is smooth by [F5], so $C_c^\infty$ is dense. Conversely, an intrinsic-Cauchy smooth sequence has an $L^2$ limit and a weighted-pair-$L^2$ limit; an almost-everywhere convergent subsequence identifies the latter with the difference quotient of the former. Completeness and [F1] therefore identify the completion with the intrinsic space. [A1, F1, F5, F6, F7, step 1.1, algebra]

2.2 For a boundary-localized piece, reflect across its graph by $R(x',t)=(x',2g(x')-t)$ and set the extension below the graph to $w(R(x',t))$. The horizontal coordinates are unchanged and the vertical difference is bounded by $|t-u|+2L|x'-y'|$, so $|Rx-Ry|\le C|x-y|$; since $R^2$ is the identity, the reverse bound follows by applying the same estimate to $Rx,Ry$. Thus $R$ is bi-Lipschitz. Because $g$ is a finite maximum of affine functions, partition each integration region into the finitely many open affine pieces; their boundaries lie in finitely many hyperplanes and are null. On each piece $R$ is an affine $C^1$ diffeomorphism with determinant of absolute value $1$. Apply the nonnegative change-of-variables formula in [F6] on each such piece (and in the $y$ variable for the mixed term); Tonelli combines the resulting estimates. Consequently same-side double integrals are bounded by a constant multiple of the upper-side integral. For $x$ above and $y$ below the graph, write their heights above the graph as $a,b\ge0$. Then $a+b\le|x_d-y_d|+L|x'-y'|$, hence $|x-Ry|\le C|x-y|$; the same piecewise affine changes of variables $y\mapsto Ry$ bound the mixed integral by the upper-side seminorm. Choose chart supports with positive margin to the artificial box edges, so cross pairs for extension by zero contribute at most $C\|w\|_2^2$; the interior piece has positive distance from the simplex boundary and obeys the same bound. Sum the finitely many extensions of $\psi_jw$. The result equals $w$ on the reference simplex and is bounded in intrinsic norm. [F5, F6, step 1.2, algebra]

3.1 Restricting any whole-space extension decreases both the $L^2$ norm and the nonnegative pair integral. Conversely, step 2.2 supplies a bounded extension of every intrinsic reference-simplex function; together with step 2.1 this proves equivalence of the intrinsic and restriction $H^s$ norms for $0<s<1$. Apply the whole-space Fourier hyperplane trace bound [F2] to that extension; restriction to the reference facet gives its trace, and uniqueness in [F2] identifies it with the existing trace. At $s=1$, [F4] gives on the reference simplex $\|Tw\|_F^2\le C(\|w\|_K^2+\|\nabla w\|_K^2)$ for weak $H^1$ functions; density identifies it with the restriction trace whenever the input has a whole-space extension. [F2, F4, step 2.1, step 2.2]

4.1 Pull back by the shape-regular affine map. The map from the reference open simplex to the cell interior and its product map on the double integral are invertible affine $C^1$ diffeomorphisms. Apply the nonnegative formula in [F6] to the $L^2$ and pair-integral terms; the determinant and singular-value bounds in [F3] show that for $0<s<1$ the $L^2$ term on the reference simplex is bounded by $C h_K^{-d}\|w\|_K^2$, and its pair seminorm by $C h_K^{2s-d}|w|_{s,K}^2$: the two volume Jacobians contribute $h_K^{-2d}$ and the inverse-map distance contributes at most $C h_K^{d+2s}$. Multiplying the reference trace bound by the facet Jacobian $C h_K^{d-1}$ yields the asserted terms $h_K^{-1}\|w\|_K^2$ and $h_K^{2s-1}|w|_{s,K}^2$. At $s=1$, write $\widehat w=w\circ F_K$, where $F_K(\widehat x)=b_K+A_K\widehat x$. The affine weak-derivative pullback [F8] gives $\nabla_{\widehat x}\widehat w=A_K^T(\nabla w)\circ F_K$. Together with [F6], its full volume-scaled norm bound is $\|\nabla_{\widehat x}\widehat w\|_{L^2(\widehat K)}\le\|A_K\|\,|\det A_K|^{-1/2}\|\nabla w\|_{L^2(K)}\le C h_K^{1-d/2}\|\nabla w\|_{L^2(K)}$, while $\|\widehat w\|_{L^2(\widehat K)}^2=|\det A_K|^{-1}\|w\|_{L^2(K)}^2$. Multiply the squared reference trace inequality of step 3.1 by the facet surface Jacobian $J_F\le C h_K^{d-1}$ from [F3]. This gives $\|T_Fw\|_{L^2(F)}^2\le C J_F|\det A_K|^{-1}\bigl(\|w\|_{L^2(K)}^2+\|A_K\|^2\|\nabla w\|_{L^2(K)}^2\bigr)\le C\bigl(h_K^{-1}\|w\|_{L^2(K)}^2+h_K\|\nabla w\|_{L^2(K)}^2\bigr)$. The same calculation applies componentwise to vector fields and the squared component norms add. [F3, F6, F8, step 3.1, algebra]

5.1 For $0<s<1$, the identity $\|w-w_K\|_K^2=(2|K|)^{-1}\int_K\int_K|w(x)-w(y)|^2dxdy$ and $|x-y|\le h_K$ give $\|w-w_K\|_K^2\le (2|K|)^{-1}h_K^{d+2s}|w|_{s,K}^2\le C h_K^{2s}|w|_{s,K}^2$ by [F3]. At $s=1$, apply the reference mean-zero Poincaré inequality [F4] and the affine weak-derivative pullback [F8] with the geometric bounds [F3]. This proves the stated fractional Poincaré bound and the endpoint convention. [F3, F4, F8, given, algebra] ∎
## Source notes

The scaled estimate is proved here from the whole-space Fourier trace inequality and an explicit fractional-norm reflection extension on a simplex. The $s=1$ endpoint uses the published reference-simplex density and trace results. The argument does not use a $C^1$-boundary trace theorem, and the intrinsic weak-$H^1$ space is not identified with the restriction space.
