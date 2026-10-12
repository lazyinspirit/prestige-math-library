---
id: ex-cm-inertia-tensors-of-point-masses
kind: example
title: "Finite point-mass inertia matrices computed and checked against the positivity criterion"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, lem-cm-inertia-matrix-properties, cor-cm-principal-axes-of-the-inertia-matrix, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, thm-nonnegative-weighted-sums-of-measures, def-nonnegative-weighted-sum-of-measures, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix, thm-cross-product-norm-is-the-two-vector-gram-determinant, def-cross-product-in-r3, lem-finite-sum-laws, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity]
dependency_roles:
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  cor-cm-principal-axes-of-the-inertia-matrix: mathematical-premise
  def-dirac-measure: mathematical-premise
  prop-dirac-measure-is-a-probability-measure: mathematical-premise
  thm-nonnegative-weighted-sums-of-measures: mathematical-premise
  def-nonnegative-weighted-sum-of-measures: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2, Eqs. (3.19)-(3.23), printed pp. 50-52: inertia tensors of finite point-mass systems and of a rod, with the semidefiniteness criterion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §§2.3-2.5: moments of inertia of discrete mass distributions and the principal moments"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Example

Throughout, the ambient data are the Euclidean inner product and cross product of $\mathbb R^3$ ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]]), and $\nu$ is a finite weighted sum of Dirac measures at distinct points $x_1,\dots,x_n\in\mathbb R^3$ with weights $c_1,\dots,c_n>0$ ([[def-dirac-measure]], [[thm-nonnegative-weighted-sums-of-measures]]), which is a mass distribution of total mass $m=\sum_kc_k$ in the sense of [[def-cm-mass-distribution-and-inertia-matrix]]; let $I=I(\nu)$ be its inertia matrix. Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only through the Borel measurability of the polynomial integrands, which is what makes the entries of $I$ finite real numbers ([[lem-cm-mass-moments-are-finite]]). Three cases are computed and each is checked against the positivity criterion of [[lem-cm-inertia-matrix-properties]] and the principal-axis corollary [[cor-cm-principal-axes-of-the-inertia-matrix]].

**(i) Two unit masses on the third axis.** $n=2$, $x_1=e_3$, $x_2=-e_3$, $c_1=c_2=1$: then $m=2$, $\mu(\nu)=e_3-e_3=0$, and $I=\mathrm{diag}(2,2,0)$.

**(ii) Three unit masses at an equilateral triangle in the plane $e_3=0$.** $n=3$, $c_k=1$ and $x_k=\cos(2\pi k/3)e_1+\sin(2\pi k/3)e_2$ for $k=0,1,2$: then $m=3$, $\mu(\nu)=0$ and $I=\mathrm{diag}(\tfrac32,\tfrac32,3)$.

**(iii) Two unit masses on the first axis.** $n=2$, $x_1=e_1$, $x_2=2e_1$, $c_1=c_2=1$: then $m=2$, $\mu(\nu)=3e_1\ne0$, and $I=\mathrm{diag}(0,5,5)$.

## Facts & Assumptions

**Given:** Distinct points $x_1,\dots,x_n\in\mathbb R^3$, weights $c_1,\dots,c_n>0$, the measure $\nu=\sum_{k=1}^nc_k\delta_{x_k}$, and the three concrete data sets (i)-(iii).

[L1] $\nu$ is a measure, $\nu(E)=\sum_{k=1}^nc_k\delta_{x_k}(E)$ for every measurable $E$, and $\nu(\{x_k\})=c_k$; the inertia matrix is $I_{jk}=\int(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k)\,d\nu$ [[thm-nonnegative-weighted-sums-of-measures]], [[def-nonnegative-weighted-sum-of-measures]], [[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[def-cm-mass-distribution-and-inertia-matrix]].

[L2] For a nonnegative measurable $f$ one has $\int f\,d\nu=\sum_kc_kf(x_k)$; for a real measurable $f$ that is bounded on the finite set $\{x_1,\dots,x_n\}$ and vanishes outside a bounded set, the same identity holds with $f=f^+-f^-$ and linearity of the integral [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[L3] $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu$, and $I$ is positive definite exactly when $\nu(\mathbb R^3\setminus\mathbb R\omega)>0$ for every $\omega\ne0$; the eigenvalues of $I$ are its principal moments [[lem-cm-inertia-matrix-properties]], [[cor-cm-principal-axes-of-the-inertia-matrix]].

[L4] $\lVert u\times v\rVert_2^2=\lVert u\rVert_2^2\lVert v\rVert_2^2-\langle u,v\rangle^2$ [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]].

[L5] Finite sums are additive and distribute over scalar multiples; $\cos^2+\sin^2=1$, and $\sum_{k=0}^{2}\cos(2\pi k/3)=\sum_{k=0}^{2}\sin(2\pi k/3)=0$, $\sum_{k=0}^{2}\cos^2(2\pi k/3)=\sum_{k=0}^{2}\sin^2(2\pi k/3)=\tfrac32$, $\sum_k\cos(2\pi k/3)\sin(2\pi k/3)=0$ [[lem-finite-sum-laws]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]], [[def-sine-and-cosine-by-power-series]].

[L6] The matrices $\mathrm{diag}(a,b,c)$ act by scaling components; $\rho\rho^{\mathsf T}$ has entries $\rho_i\rho_j$ [[def-matrix-product-and-identity-matrix]], [[def-matrix-space]].

## Verification

**Proof technique:** direct.

1.1 First the finite-atomic integration formula is recorded: if $s=\sum_{j}a_j\chi_{E_j}$ is a nonnegative simple function, then $\int s\,d\nu=\sum_ja_j\nu(E_j)=\sum_ja_j\sum_{k:x_k\in E_j}c_k=\sum_kc_ks(x_k)$, and the identity $\nu(E_j)=\sum_kc_k\delta_{x_k}(E_j)$ is [L1]; taking the supremum over simple $0\le s\le f$ in the definition of the nonnegative integral gives $\int f\,d\nu\ge\sum_kc_kf(x_k)$ from the minorant $s_0:=\sum_kf(x_k)\chi_{\{x_k\}}\le f$, and $\int f\,d\nu\le\sum_kc_kf(x_k)$ from $\int s\,d\nu=\sum_kc_ks(x_k)\le\sum_kc_kf(x_k)$ for every simple $0\le s\le f$; hence $\int f\,d\nu=\sum_kc_kf(x_k)$, and the real case follows by $f=f^+-f^-$. [given, L1, L2, algebra]

2.1 With the formula of step 1.1, $I_{jk}=\sum_lc_l\bigl(\lVert x_l\rVert_2^2\delta_{jk}-(x_l)_j(x_l)_k\bigr)$ for arbitrary data, by [L1]; in particular $I$ is the sum over the atoms of $c_l(\lVert x_l\rVert_2^2I_3-x_lx_l^{\mathsf T})$ [L6]. [step 1.1, given, L1, L6, algebra]

2.2 Case (ii): $\mu(\nu)=\sum_kx_k=0$ and $\sum_k(x_k)_1^2=\tfrac32$, $\sum_k(x_k)_2^2=\tfrac32$, $\sum_k(x_k)_3^2=0$, $\sum_k(x_k)_1(x_k)_2=0$, $\sum_k(x_k)_1(x_k)_3=\sum_k(x_k)_2(x_k)_3=0$ by [L5]; hence $I_{11}=\sum_k((x_k)_2^2+(x_k)_3^2)=\tfrac32$, $I_{22}=\sum_k((x_k)_1^2+(x_k)_3^2)=\tfrac32$, $I_{33}=\sum_k((x_k)_1^2+(x_k)_2^2)=3$ and the off-diagonal entries vanish, so $I=\mathrm{diag}(\tfrac32,\tfrac32,3)$ by steps 1.1 and 2.1. [step 1.1, 2.1, given, L5, L6, algebra]

3.1 Case (i): $I=(1\cdot(I_3-e_3e_3^{\mathsf T}))+(1\cdot(I_3-e_3e_3^{\mathsf T}))=2(I_3-e_3e_3^{\mathsf T})=\mathrm{diag}(2,2,0)$ by step 2.1 and [L6], and the moment vanishes by symmetry; for $\omega=e_3$ the line $\mathbb Re_3$ contains both atoms, so $\nu(\mathbb R^3\setminus\mathbb Re_3)=0$, so $I$ is not positive definite by [L3], matching the zero eigenvalue. [step 1.1, 2.1, given, L3, L6, algebra]

3.2 Case (ii) checked against the quadratic identity: for $\omega=e_1$, $\sum_k\lVert e_1\times x_k\rVert_2^2=\sum_k(1-(x_k)_1^2)=3-\tfrac32=\tfrac32=\omega^{\mathsf T}I\omega$, and for $\omega=e_3$, $\sum_k\lVert e_3\times x_k\rVert_2^2=\sum_k((x_k)_1^2+(x_k)_2^2)=3$; both agree with $I=\mathrm{diag}(\tfrac32,\tfrac32,3)$, and no line through the origin contains all three $x_k$, so for every $\omega\ne0$ at most two of the three points satisfy $\omega\times x_k=0$, at least one atom of weight $1$ lies off $\mathbb R\omega$, so $\nu(\mathbb R^3\setminus\mathbb R\omega)\ge1>0$; by [L3] and [L4] this is exactly positive definiteness of $I$, matching the positive eigenvalues. [step 2.2, given, L3, L4, L5, algebra]

4.1 Case (iii): $I=(I_3-e_1e_1^{\mathsf T})+(4I_3-4e_1e_1^{\mathsf T})=5I_3-5e_1e_1^{\mathsf T}=\mathrm{diag}(0,5,5)$ by steps 2.1 and [L6]; the support lies on the line $\mathbb Re_1$, which is the zero set of $\omega\mapsto\omega\times\rho$ for $\omega=e_1$, and the complement of that line has $\nu$-measure $0$, so $I$ is not positive definite by [L3], matching the zero eigenvalue; the first moment is $\mu(\nu)=e_1+2e_1=3e_1\ne0$, so this distribution is not centred and its inertia matrix is computed about the origin of coordinates, not about its centre of mass. This last observation is a bookkeeping check, not a claim about any translated inertia matrix. [step 1.1, 2.1, given, L3, L6, algebra] ∎
