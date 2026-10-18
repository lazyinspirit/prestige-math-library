---
id: lem-nystrom-square-root-projector-identity
kind: lemma
title: "Nyström is a square-root orthogonal-projection compression"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-psd-nystrom-approximation
  - lem-moore-penrose-products-are-orthogonal-projectors
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-non-negative-square-root-exists-and-is-unique
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §14.2"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, Lemma 1 and §4.1"
      url: "https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf"
---

## Statement

Let $n\ge1$, $s\ge0$, $A\in\mathbb F^{n\times n}$ be Hermitian positive semidefinite, $S\in\mathbb F^{n\times s}$, and $B=A^{1/2}S$. If $P_{\operatorname{Ran}(B)}$ denotes the orthogonal projection onto the range of $B$, then

$$\widehat A_{\mathrm{nys}}=A^{1/2}P_{\operatorname{Ran}(B)}A^{1/2}=A^{1/2}B(B^*B)^\dagger B^*A^{1/2}=A^{1/2}BB^\dagger A^{1/2}.$$

## Facts & Assumptions

**Given:** A finite Hermitian positive-semidefinite matrix $A$, a sketch $S$, and $B=A^{1/2}S$.

[F1] [[def-psd-nystrom-approximation]]: $\widehat A_{\mathrm{nys}}=AS(S^*AS)^\dagger S^*A$.

[F2] [[lem-moore-penrose-products-are-orthogonal-projectors]]: for any finite $B$, $BB^\dagger$ and $B^\dagger B$ are orthogonal projections onto $\operatorname{Ran}(B)$ and $\operatorname{Ran}(B^\dagger)$.

[F3] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite matrix has a unique Moore-Penrose inverse.

[F4] [[thm-non-negative-square-root-exists-and-is-unique]]: $A$ has a unique Hermitian positive-semidefinite square root $A^{1/2}$ satisfying $(A^{1/2})^2=A$.

[F5] [[def-moore-penrose-pseudoinverse]]: a Moore-Penrose inverse is specified by the four Penrose equations.
 
## Proof

1.1 Set $D=B^*B=S^*AS$. From $(A^{1/2})^2=A$ and $A^{1/2}=(A^{1/2})^*$, [F1] rewrites as $\widehat A_{\mathrm{nys}}=A^{1/2}B D^\dagger B^*A^{1/2}$. [F1, F4, algebra]

1.2 Since $D=D^*$, taking adjoints of the four defining equations [F5] shows $(D^\dagger)^*$ also satisfies them for $D$. Uniqueness [F3] gives $(D^\dagger)^*=D^\dagger$. Thus $P=BD^\dagger B^*$ is self-adjoint, and $P^2=BD^\dagger(B^*B)D^\dagger B^*=BD^\dagger D D^\dagger B^*=P$ by the Moore-Penrose equation $D^\dagger D D^\dagger=D^\dagger$. Hence $P$ is an orthogonal projection. [F3, F5, algebra]

1.3 Put $Q=D^\dagger D$. By [F2], $Q$ is an orthogonal projection. The equations [F5] $DD^\dagger D=D$ and $D^\dagger D D^\dagger=D^\dagger$ imply $DQ=D$; therefore $Qx=0$ iff $Dx=0$. Also $x^*Dx=\|Bx\|_2^2$, so $\ker D=\ker B$. Since $Q$ is an orthogonal projection, $\operatorname{Ran}(I-Q)=\ker Q=\ker B$, and consequently $B(I-Q)=0$, or $BQ=B$. [F2, F3, F5, algebra]

2.1 Step 1.3 gives $PB=BD^\dagger D=BQ=B$. Since $P$ has range contained in $\operatorname{Ran}(B)$ and fixes every vector in $\operatorname{Ran}(B)$, its range is exactly $\operatorname{Ran}(B)$. Thus $P=P_{\operatorname{Ran}(B)}$. The projector $BB^\dagger$ has the same range by [F2]. For each vector, orthogonal projection decomposes it uniquely into a component in $\operatorname{Ran}(B)$ and one in its orthogonal complement, so these two projectors coincide. Substituting this identity into step 1.1 proves all displayed formulas. [F2, step 1.1, step 1.3, algebra] ∎
