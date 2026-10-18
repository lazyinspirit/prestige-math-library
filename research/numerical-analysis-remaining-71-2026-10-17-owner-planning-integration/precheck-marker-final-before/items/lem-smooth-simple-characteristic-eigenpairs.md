---
id: lem-smooth-simple-characteristic-eigenpairs
kind: lemma
title: "Smooth local eigenpairs for a simple characteristic spectrum"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-hyperbolic-system-and-characteristic-families
  - thm-euclidean-implicit-function-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§§3.1–3.3, printed pp. 21–26: simple characteristic fields and eigenvectors"
---

## Statement

Let $f:G\to\mathbb R^m$ be $C^3$ and let $\bar u\in G$ be a state at which
$A(\bar u)=Df(\bar u)$ has distinct real eigenvalues
$\lambda_1^0<\cdots<\lambda_m^0$. For each $i$, there is a neighborhood $N_i$
of $\bar u$ and $C^2$ functions $\lambda_i:N_i\to\mathbb R$ and
$r_i:N_i\to\mathbb R^m$ such that $A(u)r_i(u)=\lambda_i(u)r_i(u)$,
$\lambda_i(\bar u)=\lambda_i^0$, and the eigenvectors can be normalized by a
fixed linear functional. After intersecting these finitely many neighborhoods,
the eigenvalues remain real, simple, and ordered, and $r_1(u),\ldots,r_m(u)$
form a basis at each $u$.

## Facts & Assumptions

**Given:** An open state domain, a $C^3$ flux, and a base state whose flux Jacobian has distinct real eigenvalues.

[F1] [[def-hyperbolic-system-and-characteristic-families]]: $A(u)=Df(u)$ is $C^2$; strict hyperbolicity means the eigenvalues are distinct and real.

[F2] [[thm-euclidean-implicit-function-theorem]]: a $C^1$ equation $F(x,y)=0$ with invertible $D_yF$ at a zero has a unique local $C^1$ solution $y=\varphi(x)$ and derivative $D\varphi=-(D_yF)^{-1}D_xF$.

## Proof

1.1 Fix $i$ and choose right and left eigenvectors $r_i^0,l_i^0$ for $\lambda_i^0$. For a simple eigenvalue, $l_i^0\cdot r_i^0\ne0$: otherwise $r_i^0$ is orthogonal to the left kernel of $A(\bar u)-\lambda_i^0I$, hence lies in its range; a generalized eigenvector would then force algebraic multiplicity at least two. Normalize $l_i^0\cdot r_i^0=1$. [given, F1, algebra, choose]

2.1 Define $F_i(u,\lambda,r)=(A(u)r-\lambda r,l_i^0\cdot r-1)$. At $(\bar u,\lambda_i^0,r_i^0)$ it vanishes. Its derivative in $(r,\lambda)$ sends $(v,\mu)$ to $((A(\bar u)-\lambda_i^0I)v-\mu r_i^0,l_i^0\cdot v)$. If this is zero, pairing the first component with $l_i^0$ gives $\mu=0$; then $v$ is a multiple of $r_i^0$, and the last component forces $v=0$. The square derivative is therefore invertible. [step 1.1, algebra]

3.1 Since $F_i$ is $C^2$, [F2] gives a local $C^1$ eigenpair. The derivative formula in [F2] is $C^1$ because $DF_i$ is $C^1$ and matrix inversion is smooth on invertible matrices; hence the eigenpair is $C^2$. Continuity preserves the eigenvalue gaps and reality after shrinking the neighborhood. [step 2.1, F1, F2]

4.1 Eigenvectors belonging to distinct eigenvalues are linearly independent: applying $\prod_{j\ne i}(A-\lambda_jI)$ to a linear relation isolates its $i$th coefficient. Thus the $m$ eigenvectors form a basis. Intersecting the $m$ neighborhoods proves the simultaneous assertion. [step 3.1, algebra, choose] ∎
