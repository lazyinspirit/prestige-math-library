---
id: thm-weighted-network-semigroup-and-euler-positivity
kind: theorem
title: "Positive graph-diffusion semigroup and Euler maps"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-finite-weighted-network-diffusion-data
  - lem-weighted-network-energy-kernel-and-mass-balance
  - thm-xd-finite-generator-master-equation-uniformization
  - def-xd-finite-column-generator
  - lem-xd-finite-matrix-exponential-series
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "No choice principle is used; all matrices and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Fan R. K. Chung, Spectral Graph Theory, Chapter 1: Eigenvalues and the Laplacian of a Graph, CBMS 92 (1997), complete chapter text"
      url: "https://fanchung.ucsd.edu/cbms.pdf"
      locator: "Complete Chapter 1 text; §§1.2 and 1.4, printed pp. 2–14."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§3.2, Theorems 3.1–3.2 and §3.4, Theorem 3.4, PDF pp. 7–16."
---

## Statement

Use the data of [[def-finite-weighted-network-diffusion-data]] and write
$L=L_D$. For any $t\ge0$, the homogeneous exact semigroup
$$S_D(t)=e^{-tM^{-1}L}$$
maps entrywise nonnegative initial vectors to entrywise nonnegative vectors.
For a forward Euler step of size $\tau\ge0$, the map
$$E_F(\tau)=I-\tau M^{-1}L$$
is entrywise nonnegative, and hence positivity preserving for every
nonnegative input, exactly when
$$0\le\tau\le\tau_F:=\min_{\substack{i\in I\\L_{ii}>0}}\frac{m_i}{L_{ii}},$$
where the minimum of an empty set is $+\infty$. For every $\tau>0$, the
backward Euler map $(M+\tau L)^{-1}M$ exists and is positivity preserving.
The forward Euler threshold is sharp for positivity of the full step matrix.

## Facts & Assumptions

**Given:** A finite graph, free and Dirichlet vertices, $M=\operatorname{diag}(m_i)$
with $m_i>0$, $C=\operatorname{diag}(c_e)$ with $c_e\ge0$, $L= L_D$,
and $\tau\ge0$.

[F1] The weighted stiffness is $L_D=BCB^{\mathsf T}$ restricted to free
vertices; it is symmetric positive semidefinite, has nonpositive
off-diagonal entries, and its kernel is the componentwise constant space
stated in ([[def-finite-weighted-network-diffusion-data]],
[[lem-weighted-network-energy-kernel-and-mass-balance]]).

[F2] A finite column generator has nonnegative off-diagonal entries and
zero column sums; its finite master equation has the matrix-exponential
solution and maps probability vectors to probability vectors
([[def-xd-finite-column-generator]],
[[thm-xd-finite-generator-master-equation-uniformization]]).

[F3] The finite matrix exponential is given by its locally convergent power
series, has derivative $Qe^{tQ}$, and satisfies $e^Ae^B=e^{A+B}$ for
commuting matrices
([[lem-xd-finite-matrix-exponential-series]]).

## Proof

**Given:** The finite weighted network and the nonnegative data conventions
in the Statement.

1.1 If $I=\varnothing$, all free-state assertions are vacuous, so assume $I\ne\varnothing$. Put $Q=-LM^{-1}$. For distinct free vertices $i,j$, $Q_{ij}=-L_{ij}/m_j\ge0$ by [F1]. If $D=\varnothing$, [F1] says that $\mathbf1$ is constant on every positive-conductance component, so $L\mathbf1=0$; symmetry gives $\mathbf1^{\mathsf T}L=0$. Thus $Q$ has zero column sums and is a finite column generator by [F2]. If $p_0\ge0$ is nonzero, let $s=\mathbf1^{\mathsf T}p_0>0$ and $\pi=p_0/s$. By [F2], $e^{tQ}\pi$ is a probability vector, so it is entrywise nonnegative; multiplying by $s$ proves $e^{tQ}p_0\ge0$. If $p_0=0$, its image is zero. [F1, F2, given, algebra]

1.2 If $D\ne\varnothing$, then $Q$ has nonnegative off-diagonal entries and diagonal entries $Q_{ii}=-L_{ii}/m_i$. Put $\lambda=\max_{i\in I}L_{ii}/m_i\ge0$. If $\lambda=0$, then $L_{ii}=\sum_{e\text{ incident to }i}c_e=0$ for every free vertex. Since each $c_e\ge0$, every conductance incident to a free vertex is zero; hence each free row of $L_D$ vanishes, $Q=0$, and its exponential is the identity. If $\lambda>0$, every entry of $Q+\lambda I$ is nonnegative. For $t\ge0$, each term of the matrix series $e^{t(Q+\lambda I)}=\sum_{k\ge0}t^k(Q+\lambda I)^k/k!$ is entrywise nonnegative. By [F3], since $-\lambda tI$ commutes with $t(Q+\lambda I)$, $$e^{tQ}=e^{-\lambda tI}e^{t(Q+\lambda I)}=e^{-\lambda t}e^{t(Q+\lambda I)}$$ is entrywise nonnegative. [F1, F3, given, construct]

1.3 The mass state $p=Mu$ satisfies $p'=Qp$ for the homogeneous network equation. Its solution is $p(t)=e^{tQ}p(0)$. Since $M$ and $M^{-1}$ are entrywise positive diagonal matrices, $$u(t)=M^{-1}e^{tQ}Mu(0)=e^{-tM^{-1}L}u(0),$$ where the second equality follows term by term from the matrix exponential series applied to the similarity $M^{-1}QM=-M^{-1}L$. Steps 1.1–1.2 therefore prove positivity of $S_D(t)$ for both boundary cases. [F3, step 1.1, step 1.2, algebra]

2.1 The diagonal entries of $E_F(\tau)$ are $1-\tau L_{ii}/m_i$, and its off-diagonal entries are $-\tau L_{ij}/m_i\ge0$ by [F1]. Thus all entries are nonnegative exactly when each diagonal is nonnegative, which is exactly $\tau\le m_i/L_{ii}$ for every $i$ with $L_{ii}>0$. If a diagonal is negative, applying the step matrix to the corresponding coordinate vector produces a negative coordinate, so the condition is sharp. [F1, given, algebra]

3.1 Let $y\ge0$ and solve $(M+\tau L)x=My$. The matrix is symmetric positive definite because for nonzero $x$, $x^{\mathsf T}(M+\tau L)x\ge\sum_i m_i x_i^2>0$ by [F1]; hence the solve exists uniquely. If $x_k<0$ is a minimum coordinate, extend $x$ by zero on $D$. The edge formula for $(Lx)_k$ is a sum of terms $c_e(x_k-\bar x_{\mathrm{other}(e)})$, each nonpositive because every free neighbor has value at least $x_k$ and every Dirichlet value is zero. Therefore $((M+\tau L)x)_k=m_kx_k+\tau(Lx)_k<0$, contradicting $(My)_k=m_ky_k\ge0$. Thus $x\ge0$ and backward Euler is positivity preserving. [F1, given, step 1.1, algebra] ∎

