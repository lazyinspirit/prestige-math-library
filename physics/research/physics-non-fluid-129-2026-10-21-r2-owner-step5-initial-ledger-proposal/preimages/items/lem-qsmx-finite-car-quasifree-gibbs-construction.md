---
id: lem-qsmx-finite-car-quasifree-gibbs-construction
kind: lemma
title: Existence, uniqueness, and Gibbs covariance for finite CAR states
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-quasifree-finite-covariance
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-matrix-state-calculus
dependency_roles:
  def-qsmx-quasifree-finite-covariance: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Huzihiro Araki, On Quasifree States of CAR and Bogoliubov Automorphisms, §§2–3"
      url: "https://ems.press/content/serial-article-files/41673"
    - title: "Jacopo Surace and Luca Tagliacozzo, Fermionic Gaussian States: An Introduction to Numerical Approaches, §§3.1–3.5"
      url: "https://arxiv.org/pdf/2111.08343"
verification:
  precheck: pass
---

## Statement

Let $r\geq1$ and let $C=C^*$ be an $r\times r$ matrix with
$0\leq C\leq I$. There is a unique finite density operator $\rho_C$ on
$\mathcal F_-(\mathbb C^r)$ whose state is gauge-invariant quasifree with
covariance $C$ in the convention
$C_{ji}=\operatorname{Tr}(\rho_Cc_i^*c_j)$. If $h=h^*$, $\mu\in\mathbb R$,
and $\beta>0$, then the finite Gibbs density
$$\rho_{h,\beta,\mu}:=\frac{e^{-\beta d\Gamma(h-\mu I)}}{\operatorname{Tr}(e^{-\beta d\Gamma(h-\mu I)})}$$
is quasifree and equals $\rho_C$ for
$$C=(I+e^{\beta(h-\mu I)})^{-1}.$$

## Statement references

[[def-qsmx-quasifree-finite-covariance]]

[[lem-qsm-fock-occupation-basis-and-car-relations]]

[[lem-qsm-matrix-state-calculus]]

## Facts & Assumptions

**Given:** An integer $r\geq1$, the finite CAR Fock space with its ordered
occupation basis, a Hermitian contraction $C$, and, for the Gibbs assertion,
a Hermitian $h$, real $\mu$, and $\beta>0$.

[F1] [[def-qsmx-quasifree-finite-covariance]]: gauge invariance means invariance
under $c_j\mapsto e^{-i\theta}c_j$; the covariance convention is
$C_{ji}=\omega(c_i^*c_j)$; the quasifree moment rule is the determinant of
these two-point functions for normally ordered equal-number products and zero
for unequal-number products.

[F2] [[lem-qsm-fock-occupation-basis-and-car-relations]]: for the finite mode
set $\{1,\ldots,r\}$, occupations $m\in\{0,1\}^r$ label a complete
orthonormal basis, and the creation and annihilation operators act by the
displayed CAR shifts on it.

[F3] [[lem-qsm-matrix-state-calculus]]: every finite Hermitian matrix has an
orthonormal eigenbasis with real eigenvalues; its spectral functions are
basis-independent, and the finite matrix trace is invariant under unitary
change of basis.

## Proof

1.1 By [F3], write $C=V\operatorname{diag}(\nu_1,\ldots,\nu_r)V^*$ with $V$ unitary and $0\leq\nu_j\leq1$ . On the exterior-power decomposition define $\Gamma_-(V):=\bigoplus_{k=0}^{r}\bigwedge^kV$ ; each summand is unitary, so $\Gamma_-(V)$ is unitary: inner products of simple exterior products are determinants of their Gram matrices, and $V$ preserves each Gram matrix. In the occupation basis for the eigenmodes, define $w_j(0):=1-\nu_j$ and $w_j(1):=\nu_j$ , and define the product density $\rho_D$ by $$\rho_D|m\rangle=\left(\prod_{j=1}^{r}w_j(m_j)\right)|m\rangle,\qquad m\in\{0,1\}^r.$$ Each diagonal entry is nonnegative and the sum of the entries is $\prod_j((1-\nu_j)+\nu_j)=1$ , so $\rho_D$ is positive with trace one. Set $\rho_C:=\Gamma_-(V)\rho_D\Gamma_-(V)^*$ . [given, F2, F3, algebra]

2.1 For the Gibbs assertion, diagonalize $h=W\operatorname{diag}(\epsilon_1,\ldots,\epsilon_r)W^*$ by [F3], and set $d=W^*c$ in column notation. Exterior multiplication by $e_j$ is $c_j^*$, so the exterior-power definition in step 1.1 gives $\Gamma_-(W)c_j^*\Gamma_-(W)^*=\sum_iW_{ij}c_i^*=d_j^*$; taking adjoints gives $\Gamma_-(W)c_j\Gamma_-(W)^*=d_j$. Thus the eigenmode occupation basis is $|m\rangle_W:=\Gamma_-(W)|m\rangle$, and $d_j^*d_j|m\rangle_W=m_j|m\rangle_W$ by [F2]. Substitution of $c=Wd$ gives $d\Gamma(h-\mu I)=\sum_j(\epsilon_j-\mu)d_j^*d_j$, hence $$d\Gamma(h-\mu I)|m\rangle_W=\left(\sum_{j=1}^{r}(\epsilon_j-\mu)m_j\right)|m\rangle_W.$$ Therefore the positive exponential has eigenvalues $\prod_jq_j^{m_j}$, where $q_j=e^{-\beta(\epsilon_j-\mu)}>0$, and its finite trace is $$Z=\prod_{j=1}^{r}(1+q_j)\in(0,\infty).$$ In this basis the normalized density is a product Bernoulli density with occupation probabilities $p_j=q_j/(1+q_j)=(1+e^{\beta(\epsilon_j-\mu)})^{-1}$; in the original basis it is $\Gamma_-(W)\rho_{\operatorname{diag}(p)}\Gamma_-(W)^*$, with the diagonal product density defined as in step 1.1. [given, F2, F3, step 1.1, algebra]

2.2 The density $\rho_D$ is diagonal in the occupation basis, so its state is invariant under the global gauge rotation. For a normally ordered monomial, repeated creation or annihilation indices give zero by the CAR. If the distinct creator and annihilator index sets differ, the monomial changes an occupation vector and has zero diagonal expectation. If the sets agree at $S$ , the CAR relations reorder the product to its permutation sign times $\prod_{j\in S}c_j^*c_j$ ; its product-state expectation is that sign times $\prod_{j\in S}\nu_j$ . The determinant of the diagonal two-point matrix has exactly the same value: it is zero for unequal index sets and, for equal sets $S$ , is the permutation sign times $\prod_{j\in S}\nu_j$ . Thus $\rho_D$ obeys the quasifree moment rule with diagonal covariance $\operatorname{diag}(\nu_1,\ldots,\nu_r)$ . Moreover, every $c_i$ is a linear combination of the eigenmode annihilators and every $c_i^*$ is the corresponding conjugate linear combination. Expanding a normal-ordered product and using multilinearity of the determinant carries the Wick rule to covariance $V\operatorname{diag}(\nu_1,\ldots,\nu_r)V^*$ . The unitary $\Gamma_-(V)$ commutes with total particle number, so it preserves gauge invariance. Hence $\rho_C$ has the required covariance and moments. [F1, F2, step 1.1, algebra]

3.1 The CAR relations reorder any word in the generators into a linear combination of normally ordered monomials. These monomials determine the functional on the full finite matrix algebra: the vacuum projection is $P_0=\prod_{j=1}^{r}(I-c_j^*c_j)$ , and for any two occupation subsets $S,T$ , the operator obtained by creating the modes in $S$ , applying $P_0$ , and annihilating the modes in $T$ is a nonzero scalar multiple of $|S\rangle\langle T|$ . Expanding $P_0$ and reordering with CAR expresses each such matrix unit as a linear combination of normally ordered monomials. Since these matrix units span the full algebra, no two states can have the same stated moments unless they are equal. This proves uniqueness of $\rho_C$ . [F1, F2, step 2.2, algebra]

4.1 The product density in the eigenmode basis obeys the determinant moment rule proved in step 2.2. Its covariance is $W\operatorname{diag}(p_1,\ldots,p_r)W^*$ by the convention [F1], and the finite spectral calculus [F3] identifies this matrix with $(I+e^{\beta(h-\mu I)})^{-1}$ . Uniqueness from step 3.1 identifies the Gibbs density with $\rho_C$ . All sums are finite-mode sums; no infinite-mode implementability or thermodynamic limit is involved. [F1, F3, step 2.2, step 3.1, step 2.1, algebra] ∎ 
