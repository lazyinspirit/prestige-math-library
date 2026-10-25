---
id: thm-matern-interpolation-fill-distance-error
kind: theorem
title: "Matérn interpolation and its power function converge at rate h^ν"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - def-bessel-potential-space-and-restriction-quotient
  - lem-restricted-matern-native-space-is-sobolev
  - lem-sobolev-zeros-bound-on-a-cone-domain
  - thm-native-interpolation-projection-and-power-function
  - cor-cauchy-reals-lub-complete
  - thm-of-archimedean
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Narcowich, Ward, and Wendland, Sobolev bounds on functions with
        scattered zeros, Math. Comp. 74 (2005), Theorem 1.1 and §§2.1–2.2"
      url: "https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_func\
        tions_with_scattered_zeros_with_applications_to_radial_basis_function_s\
        urface_fitting"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 34–36"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume full AC conservatively for the Hilbert projection and weighted-$L^2$ suppliers. Fix arbitrary $d\ge1$, $\nu>0$, $a>0$, $s=\nu+d/2$, the normalized Matérn kernel $k$ of [[def-normalized-matern-spectral-kernel]], and an admitted uniform-cone domain $\Omega$. There are constants $C,h_0>0$, depending only on $d,\nu,a$ and the domain's cone constants, such that for every finite nonempty distinct site set $X\subset\Omega$ with fill distance $h_X\le h_0$ and every $f\in H^s(\Omega)$,
$$\|f-s_Xf\|_{L^\infty(\Omega)}\le C h_X^\nu\|f\|_{H^s(\Omega)},\qquad \sup_{x\in\Omega}P_X(x)\le C h_X^\nu.$$
Here $s_Xf$ and $P_X$ are the native interpolant and power function of [[thm-native-interpolation-projection-and-power-function]]. The rate requires no mesh-ratio bound. The constants are uniform over site sets satisfying the fill-distance condition.

## Facts & Assumptions

**Given:** Full AC, the fixed kernel and domain, a finite distinct set $X$, its fill distance $h_X\le h_0$, and $f\in H^s(\Omega)$.

[F1] The restricted native norm and restriction-quotient Sobolev norm satisfy $c\|u\|_{H^s(\Omega)}\le\|u\|_{\mathcal H_k(\Omega)}\le C\|u\|_{H^s(\Omega)}$. ([[lem-restricted-matern-native-space-is-sobolev]])

[F2] A Sobolev function vanishing on $X$ obeys $\|u\|_\infty\le C h_X^\nu\|u\|_{H^s(\Omega)}$ on the uniform-cone domain, without a separation assumption. ([[lem-sobolev-zeros-bound-on-a-cone-domain]])

[F3] Native interpolation is an orthogonal projection, its residual vanishes on $X$, and its pointwise error is bounded by $P_X(x)$ times the native norm. ([[thm-native-interpolation-projection-and-power-function]])

[F4] The Cauchy-sequence reals have the least-upper-bound property and are a complete ordered field; hence the Archimedean theorem supplies an integer $m>\nu$ for the fixed real $\nu$. ([[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]])

[A1] Full AC is carried conservatively for the inherited Hilbert-space suppliers; the estimate makes no additional choice from an indexed family. ([[def-axiom-of-choice]], [[def-countable-choice]])



**Proof technique:** apply the zeros estimate to the native projection residual.

## Proof

**Proof technique:** apply the zeros estimate to the native projection residual.

**Given:** The hypotheses above.

1.1 By [F4] choose an integer $m>\nu$ and apply the zeros estimate [F2] with this fixed $m$. Regard $f$ as an element of the same set of continuous restrictions $H^s(\Omega)=\mathcal H_k(\Omega)$ using [F1], and let $e=f-s_Xf$. By [F3], $e|_X=0$ and $\|e\|_{\mathcal H_k(\Omega)}\le\|f\|_{\mathcal H_k(\Omega)}$. Therefore [F1] and [F2] give $$\|e\|_{L^\infty(\Omega)}\le C_0h_X^\nu\|e\|_{H^s(\Omega)}\le C_0c^{-1}h_X^\nu\|e\|_{\mathcal H_k(\Omega)}\le C_0c^{-1}C_1h_X^\nu\|f\|_{H^s(\Omega)}.$$ This is the first estimate. [F1, F2, F3, F4, A1, algebra]

2.1 Fix $x\in\Omega$ and set $r_x=(I-\Pi_X)k(\cdot-x)$, so $P_X(x)=\|r_x\|$. Self-adjointness and reproduction in [F3] give $f(x)-s_Xf(x)=\langle f,r_x\rangle$. The bound in [F3] shows that this residual evaluation functional has norm at most $P_X(x)$. If $r_x=0$, it is the zero functional and its norm is $P_X(x)=0$. If $r_x\ne0$, the unit vector $f_x=r_x/\|r_x\|$ satisfies $f_x(x)-s_Xf_x(x)=\langle f_x,r_x\rangle=\|r_x\|=P_X(x)$, so the functional norm is exactly $P_X(x)$. Applying step 1.1 to every $f$ of native norm at most one therefore gives $P_X(x)\le C_2h_X^\nu$, uniformly in $x$; taking the supremum proves the second estimate. The constant does not depend on $X$ except through the upper bound on $h_X$, and no mesh ratio entered either [F2] or this argument. [F1, F2, F3, step 1.1, algebra] ∎
