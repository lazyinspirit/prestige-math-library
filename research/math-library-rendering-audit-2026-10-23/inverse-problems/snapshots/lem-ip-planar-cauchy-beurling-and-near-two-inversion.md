---
id: lem-ip-planar-cauchy-beurling-and-near-two-inversion
kind: lemma
title: Planar Cauchy and Beurling transforms and near-two Beltrami inversion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-wirtinger-derivatives
  - lem-local-holder-cauchy-transform-estimate
  - thm-plancherel
  - thm-calderon-zygmund-singular-integrals-are-bounded-on-lp
  - def-calderon-zygmund-kernel-and-principal-value-operator
  - thm-riesz-thorin-interpolation
  - thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
  - thm-holder-inequality-for-integrals
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 3.1, Definition 3.2 and formulas (3.1)–(3.2), printed p. 10; Section 6.1 uses the corresponding real-linear Beltrami inverse."
dependency_level: 0
---

## Statement

Assume Countable Choice. Identify $\mathbb C$ with $\mathbb R^2$, use angular-frequency unitary Fourier transformation, and put $\partial=(\partial_x-i\partial_y)/2$, $\bar\partial=(\partial_x+i\partial_y)/2$. The Beurling transform $\mathcal B$ defined on $L^2(\mathbb C)$ by
$$\widehat{\mathcal Bf}(\xi)=\frac{\xi_1-i\xi_2}{\xi_1+i\xi_2}\widehat f(\xi)\qquad(\xi\ne0)$$
is an isometry and extends boundedly to every $L^p$, $1<p<\infty$. It commutes with translations. There is a finite constant $A\ge1$ such that, for $2\le p\le4$,
$$\|\mathcal B\|_{L^p\to L^p}\le A^{2-4/p}.$$
For $p>2$ and $f\in L^p$ supported in a fixed disk $D_R$, the absolutely convergent integral
$$\mathcal Cf(z):=\frac1\pi\int_{\mathbb C}\frac{f(w)}{z-w}\,dA(w)$$
belongs to $W^{1,p}(\mathbb C)$, satisfies $\bar\partial\mathcal Cf=f$, $\partial\mathcal Cf=\mathcal Bf$, and obeys
$$\|\mathcal Cf\|_{W^{1,p}}\le C_{p,R}\|f\|_p,\qquad |\mathcal Cf(z)-\mathcal Cf(z')|\le C_p\|f\|_p|z-z'|^{1-2/p}.$$
It is $O(1/|z|)$ at infinity. For every $0\le\kappa<1$ there is $p_\kappa>2$ such that, whenever $2\le p\le p_\kappa$ and $\mu,\nu$ are measurable with $\||\mu|+|\nu|\|_\infty\le\kappa$, the real-linear map
$$I-\mu\mathcal B-\nu\overline{\mathcal B},\qquad \overline{\mathcal B}(f):=\overline{\mathcal Bf},$$
is invertible on $L^p(\mathbb C;\mathbb C)$, with inverse norm at most $2/(1-\kappa)$.

## Statement references

[[lem-local-holder-cauchy-transform-estimate|The locally proved smooth-data Cauchy kernel and principal-value derivative.]]

[[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp|The full strict Lp range from a kernel and an L2 bound.]]

[[thm-riesz-thorin-interpolation|Interpolation retaining the exact L2 norm.]]

## Facts & Assumptions

**Given:** Countable Choice, the Fourier and Wirtinger conventions in the statement, and $0\le\kappa<1$.

[F1] For smooth compactly supported data, the Cauchy integral solves $\bar\partial\mathcal Cf=f$, and its $\partial$ derivative has kernel $-1/(\pi z^2)$ in the circular principal-value sense. The assertions hold for arbitrary fixed support disks by dilation. ([[lem-local-holder-cauchy-transform-estimate]], [[def-wirtinger-derivatives]])

[F2] Fourier transformation is unitary; compactly supported smooth functions are dense in every finite $L^p$, and complex $L^p$ is complete. ([[thm-plancherel]], [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]])

[F3] An $L^2$-bounded operator with the stated off-support kernel representation, annular size bound and Hörmander integral bound extends boundedly to every strict $L^p$. Interpolation between its $L^2$ and $L^4$ actions gives the geometric mean bound. ([[def-calderon-zygmund-kernel-and-principal-value-operator]], [[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp]], [[thm-riesz-thorin-interpolation]])

[F4] Integral Hölder holds for conjugate exponents, including the complex-valued case by absolute values; planar polar integration is available. ([[thm-holder-inequality-for-integrals]], [[thm-polar-coordinates-formula-for-lebesgue-measure]])

[A1] Countable Choice is used through the Fourier, density, integration and completion interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 For $f\in C_c^\infty$, [F1] shows that $Sf:=\partial\mathcal Cf$ is bounded locally and decays as $O(|z|^{-2})$, hence is in $L^2$. Distributional commutation gives $\bar\partial Sf=\partial f$. Fourier transformation gives $(i\xi_1-\xi_2)\widehat{Sf}=(i\xi_1+\xi_2)\widehat f$, so almost everywhere off the origin $\widehat{Sf}=((\xi_1-i\xi_2)/(\xi_1+i\xi_2))\widehat f$. The multiplier has modulus one. [F2] extends $S$ uniquely to the isometry $\mathcal B$ on $L^2$. Multiplication by the translation character commutes with this multiplier, giving translation commutation there. [A1, F1, F2, algebra]

2.1 The kernel $K(z)=-1/(\pi z^2)$ has annular integral $2\log2$. Its gradient is bounded by $C|z|^{-3}$, so for $|z|\ge2|h|$, the segment estimate gives $|K(z-h)-K(z)|\le C|h||z|^{-3}$. Polar integration from $2|h|$ to infinity bounds its integral by an absolute constant. The off-support representation for compactly supported $L^2$ inputs follows by approximating them by smooth inputs in one fixed compact neighborhood of their support: on any compact set at positive distance from that neighborhood the kernel integrals converge uniformly by Cauchy–Schwarz, while the operator outputs converge in $L^2$ by step 1.1. Exhausting the complement of the essential support by compact sets and shrinking the neighborhoods gives the representation almost everywhere off the essential support. Thus [F3] applies. Let $A=\max\{1,\|\mathcal B\|_{4\to4}\}$. Interpolating the norm-one $L^2$ bound and the $L^4$ bound gives $\|\mathcal B\|_{p\to p}\le A^\theta$ with $1/p=(1-\theta)/2+\theta/4$, that is $\theta=2-4/p$. Density makes all extensions compatible and carries translation commutation to every finite $p$. [F2, F3, F4, step 1.1, algebra]

3.1 Let $p>2$, let $q=p/(p-1)<2$, and let $f$ have support in $D_R$. Hölder gives absolute convergence of $\mathcal Cf$ at every $z$: the singularity $|z-w|^{-q}$ is locally integrable, and the support is bounded. For $\delta=|z-z'|>0$, split its kernel difference into the union of the two disks of radius $2\delta$ about $z,z'$ and its complement. On the first region, integrating the two singularities with Hölder bounds their contributions by $C_p\|f\|_p\delta^{1-2/p}$. On the complement, $|(z-w)^{-1}-(z'-w)^{-1}|\le C\delta|z-w|^{-2}$; its $L^q$ norm is at most $C_p\delta(\int_{2\delta}^\infty r^{1-2q}dr)^{1/q}=C_p\delta^{1-2/p}$. This proves the global Hölder bound. On $|z|\le2R$, the same singular-kernel estimate gives $|\mathcal Cf(z)|\le C_{p,R}\|f\|_p$; on $|z|>2R$, the bound is $C\|f\|_1/|z|\le C_R\|f\|_p/|z|$. The latter is $L^p$ because $p>2$, proving $\|\mathcal Cf\|_p\le C_{p,R}\|f\|_p$ and the stated decay. Choose a fixed $\chi\in C_c^\infty(D_{R+1})$ equal to $1$ on $\overline D_R$. By the global density in [F2], take $g_n\in C_c^\infty(\mathbb C)$ with $g_n\to f$ in $L^p$, and set $f_n=\chi g_n$. Since $\chi f=f$ almost everywhere, $\|f_n-f\|_p\le\|\chi\|_\infty\|g_n-f\|_p\to0$, and each $f_n$ is smooth and supported in $D_{R+1}$. Their Cauchy transforms converge in $L^p$, and their two weak derivatives converge to $f$ and $\mathcal Bf$ by step 2.1. Passing the derivative identities against tests proves the two weak identities and the $W^{1,p}$ bound. [F1, F2, F4, step 2.1, algebra]

4.1 If $\kappa=0$, the final operator is the identity. Otherwise choose $2<p_\kappa\le4$ so close to $2$ that $\kappa A^{2-4/p_\kappa}\le(1+\kappa)/2<1$; this is possible by continuity and the value $1$ of the bound at $p=2$. For $2\le p\le p_\kappa$, the operator $Tf=\mu\mathcal Bf+\nu\overline{\mathcal Bf}$ has pointwise modulus at most $(|\mu|+|\nu|)|\mathcal Bf|$, and therefore norm at most $(1+\kappa)/2$. Regard $L^p(\mathbb C;\mathbb C)$ as a real Banach space. The norm-convergent series $\sum_{j=0}^\infty T^j$ is a two-sided inverse to $I-T$, since the finite geometric-series remainder has norm tending to zero. Its norm is at most $1/(1-(1+\kappa)/2)=2/(1-\kappa)$, proving the assertion. [F2, step 2.1, algebra] ∎
