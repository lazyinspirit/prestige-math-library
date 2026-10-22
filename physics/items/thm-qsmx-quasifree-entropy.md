---
id: thm-qsmx-quasifree-entropy
kind: theorem
title: Entropy and mode restrictions of finite quasifree CAR states
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsmx-quasifree-finite-covariance
  - lem-qsmx-finite-car-quasifree-gibbs-construction
  - def-qsmx-information-conventions
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-matrix-state-calculus
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
dependency_roles:
  def-qsmx-quasifree-finite-covariance: mathematical-premise
  lem-qsmx-finite-car-quasifree-gibbs-construction: mathematical-premise
  def-qsmx-information-conventions: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jacopo Surace and Luca Tagliacozzo, Fermionic Gaussian States: An Introduction to Numerical Approaches, §§3.1–3.7 and 3.10"
      url: "https://arxiv.org/pdf/2111.08343"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices: A Concise Introduction, §3.4"
      url: "https://arxiv.org/pdf/1311.2717v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $r\geq1$, let $C=C^*$ be an $r\times r$ matrix with $0\leq C\leq I$,
and let $\rho_C$ be the finite gauge-invariant quasifree density with
covariance $C$ from the preceding construction. Use dimensionless entropy in
nats and the convention $0\ln0:=0$. Then
$$S(\rho_C)=-\operatorname{Tr}_{\mathbb C^r}\!\left(C\ln C+(I-C)\ln(I-C)\right).$$

Let $K$ be any nonzero linear subspace of $\mathbb C^r$, let $P_K$ be its
orthogonal projection, and put $C_K:=P_KC|_K$. Choose an ordered orthonormal
basis of $K$ followed by one of $K^\perp$. The exterior-power unitary
identifies the full occupation basis with the tensor product of the two
ordered occupation bases; let $\rho_K$ be the partial trace of $\rho_C$ over
the $K^\perp$ factor in that order. Then the restricted state is
gauge-invariant quasifree with covariance $C_K$, and
$$S(\rho_K)=-\operatorname{Tr}_{K}\!\left(C_K\ln C_K+(I_K-C_K)\ln(I_K-C_K)\right).$$
Both formulas include covariance eigenvalues $0$ and $1$. Changing the
orthonormal basis of $K$ conjugates the reduced density and compressed
covariance by the induced unitary on the retained factor. Changing the basis
of $K^\perp$ changes only the traced factor, and the partial trace is
invariant under that unitary conjugation. Thus neither entropy depends on
these choices.

## Statement references

[[def-qsmx-quasifree-finite-covariance]]

[[lem-qsmx-finite-car-quasifree-gibbs-construction]]

[[def-qsmx-information-conventions]]

[[lem-qsm-fock-occupation-basis-and-car-relations]]

[[lem-qsm-matrix-state-calculus]]

[[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

## Facts & Assumptions

**Given:** The finite CAR Fock space on $\mathbb C^r$, a Hermitian contraction
$C$, its density $\rho_C$, and a nonzero subspace $K\subseteq\mathbb C^r$.
Use the displayed mode order and the natural logarithm.

[F1] [[def-qsmx-quasifree-finite-covariance]]: the covariance convention is
$C_{ji}=\omega(c_i^*c_j)$; the state is gauge invariant; its normally ordered
equal-creator/annihilator moments are the determinants of the two-point
matrix, and unequal-number moments vanish.

[F2] [[lem-qsmx-finite-car-quasifree-gibbs-construction]]: every finite
Hermitian contraction $C$ has a unique such density, unitarily equivalent to
the product occupation density with probabilities $\nu_j$ and $1-\nu_j$ for
the eigenvalues $\nu_j$ of $C$.

[F3] [[def-qsmx-information-conventions]]: finite density entropy is
$-\operatorname{Tr}(\rho\ln\rho)$ in nats, with $0\ln0:=0$; the partial trace
contracts the second ordered tensor factor and retains the first.

[F4] [[lem-qsm-fock-occupation-basis-and-car-relations]]: the finite
fermionic occupation vectors form an orthonormal basis, and the CAR shifts
give the creation/annihilation action and its parity signs.

[F5] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have
orthonormal eigenbases, spectral functions are basis-independent, and the
finite trace is invariant under unitary conjugation.

[F6] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]:
every finite-dimensional subspace and its orthogonal complement admit
orthonormal bases.

## Proof
1.1 By [F5], write $C=V\operatorname{diag}(\nu_1,\ldots,\nu_r)V^*$ with $V$ unitary and $\nu_j\in[0,1]$ . By [F2], after conjugation by the induced exterior-power unitary, $\rho_C$ is diagonal on the occupation basis with probabilities $p_m=\prod_j w_j(m_j)$ , where $w_j(0)=1-\nu_j$ and $w_j(1)=\nu_j$ . These probabilities sum to one because $\sum_{m\in\{0,1\}^r}p_m=\prod_j((1-\nu_j)+\nu_j)=1$ . [given, F2, F5, algebra]

1.2 Choose the ordered orthonormal bases of $K$ and $K^\perp$ using [F6]. The map from the full occupation vector to the tensor product of its $K$ -occupation and $K^\perp$ -occupation vectors sends one orthonormal basis onto another, hence extends to a unitary factorization. Because the $K$ modes come first, their creation and annihilation operators act on the first factor as $c_j^K\otimes I$ ; the CAR parity signs from preceding modes are therefore entirely within that first factor. The partial trace over $K^\perp$ has the same expectation as $\rho_C$ for every word in the $K$ modes. Restricting the determinant rule [F1] to those words gives the compressed covariance $C_K=P_KC|_K$ and the quasifree moment rule; gauge invariance is inherited under restriction. Thus $\rho_K$ is the unique quasifree density for $C_K$ by [F2]. [F1, F2, F3, F4, F6, algebra]

2.1 Unitary conjugation preserves the eigenvalues, so the entropy is $-\sum_m p_m\ln p_m$ , with zero terms omitted under [F3]. When $0<\nu_j<1$ , expand $\ln p_m=\sum_j[m_j\ln\nu_j+(1-m_j)\ln(1-\nu_j)]$ and sum the finite product distribution; its $j$ th occupation has mean $\nu_j$ . The result is $-\sum_j[\nu_j\ln\nu_j+(1-\nu_j)\ln(1-\nu_j)]$ . If $\nu_j=0$ or $1$ , that mode has a deterministic occupation and contributes zero by [F3], which is the same formula with $0\ln0=0$ . Spectral calculus for $C$ and $I-C$ now identifies this sum with the displayed matrix trace. [F2, F3, F5, step 1.1, algebra]

3.1 Apply the calculation of step 2.1 to the finite quasifree density $\rho_K$ and its positive contraction $C_K$ . The same endpoint convention $0\ln0=0$ handles pure or rank-deficient reduced states. A change of orthonormal basis in $K$ conjugates $\rho_K$ by the induced unitary and $C_K$ by the corresponding matrix unitary, so [F3] makes the trace entropy unchanged. A change of basis in $K^\perp$ conjugates only the traced factor; for a unitary matrix $U$ on that factor, the partial-trace entry sum in [F3] contains $\sum_j U_{ja}\overline{U_{jb}}=\delta_{ab}$ , so $\rho_K$ is unchanged. This proves the restriction formula and its basis independence. [F2, F3, step 2.1, step 1.2, algebra] ∎ 
