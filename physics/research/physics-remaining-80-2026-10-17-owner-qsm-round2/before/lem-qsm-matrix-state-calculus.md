---
id: lem-qsm-matrix-state-calculus
kind: lemma
title: Finite matrix spectral and state calculus
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - cor-bolzano-weierstrass-in-rn
  - def-real-and-complex-inner-product-space
dependency_roles:
  cor-bolzano-weierstrass-in-rn: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 21, Quantum Microstates and Quantum Macrostates
      url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf
---

## Statement

Let $H$ be a complex inner-product space of finite dimension $D\geq1$, with inner product linear in its first argument. Every Hermitian endomorphism $M$ has an orthonormal eigenbasis with real eigenvalues. For a real function $f$ on its finite spectrum, define $f(M)$ by its spectral projections; this definition is independent of the choice of eigenbasis. In particular positive square roots, exponentials, and logarithms on positive supports are well defined.

For a density matrix $\rho$ on $H$, meaning a Hermitian positive semidefinite operator with $\operatorname{Tr}\rho=1$, $\operatorname{Tr}(\rho A)=\sum_jp_j\langle Au_j,u_j\rangle$ for bounded $A$, where $\rho=\sum_jp_j|u_j\rangle\langle u_j|$. The weighted form $(X,Y)_\rho=\operatorname{Tr}(\rho X^*Y)$ satisfies Cauchy–Schwarz, $|(X,Y)_\rho|^2\leq(X,X)_\rho(Y,Y)_\rho$. Finally, $\operatorname{Tr}(\rho^2)\leq1$, with equality exactly for rank-one densities, and those are exactly the extreme points of the finite density-matrix set.

## Facts & Assumptions

**Given:** A complex inner-product space $H$ of finite dimension $D\geq1$, a Hermitian $M$, and the finite-dimensional real coordinate identification of $H$ with $\mathbb R^{2D}$.

[F1] [[cor-bolzano-weierstrass-in-rn]]: every bounded sequence in $\mathbb R^n$, $n\geq1$, has a convergent subsequence.

[F2] [[def-real-and-complex-inner-product-space]]: the inner product is linear in the first argument, conjugate-linear in the second, and positive definite.

## Proof

1.1 Identify $H$ with $\mathbb R^{2D}$. The unit sphere is closed and bounded, and $q(u)=\langle Mu,u\rangle$ is continuous and real-valued because $M=M^*$. Its supremum $m$ is finite since $|q(u)|\leq\|M\|$. Enumerate the normalized nonzero vectors with rational real and imaginary coordinates; they are dense on the sphere because rational vectors are dense in $\mathbb R^{2D}$ and normalization is continuous away from zero. For each integer $n\geq1$, take the least enumerated vector $v_n$ with $q(v_n)>m-1/n$. Such a vector exists by density and continuity. The sequence $(v_n)$ is bounded; [F1] supplies a convergent subsequence. Its limit is a unit vector because norm is continuous and every subsequence term has norm one. Continuity of $q$ shows it attains $m$. [given, F1, F2, construct]

1.2 For arbitrary matrices $X,Y$, put $a=\operatorname{Tr}(\rho X^*Y)$, $b=\operatorname{Tr}(\rho Y^*Y)$, and $c=\operatorname{Tr}(\rho X^*X)$. Positivity of $\rho$ makes $\operatorname{Tr}(\rho (X+zY)^*(X+zY))=c+za+\overline z\,\overline a+|z|^2b\geq0$ for every $z\in\mathbb C$. If $b>0$, choose $z=-\overline a/b$ to obtain $c-|a|^2/b\geq0$. If $b=0$, varying $z$ with arbitrarily large magnitude in the direction that makes $za+\overline z\,\overline a<0$ forces $a=0$. In both cases $|a|^2\leq bc$, proving the weighted Cauchy–Schwarz inequality. [given, F2, algebra]

2.1 Let $u$ be a maximizing unit vector and $w\perp u$. The normalized curve $(u+tw)/\|u+tw\|$, for real $t$ near zero, lies on the sphere. Differentiating $q$ at its maximum $t=0$ gives $2\operatorname{Re}\langle Mw,u\rangle=0$. Replacing $w$ by $iw$ gives $2\operatorname{Re}(i\langle Mw,u\rangle)=0$, so both real and imaginary parts vanish and $\langle Mw,u\rangle=0$. Hermiticity and conjugate symmetry then give $\langle Mu,w\rangle=0$ for every $w\perp u$, hence $Mu$ is a scalar multiple of $u$; that scalar is $q(u)\in\mathbb R$. The orthogonal complement of $u$ is invariant under $M$, since $\langle Mw,u\rangle=\langle w,Mu\rangle=0$ for $w\perp u$. Induction on $D$, with the one-dimensional case immediate, yields an orthonormal eigenbasis with real eigenvalues. [step 1.1, F2, algebra]

3.1 For a Hermitian $M=\sum_\lambda\lambda P_\lambda$, define $f(M)=\sum_\lambda f(\lambda)P_\lambda$, where $P_\lambda$ is the orthogonal projection onto the full $\lambda$-eigenspace. These eigenspaces and projections do not depend on a basis chosen inside them, so neither does $f(M)$. If $A,B$ are matrices, their finite coordinate sums give $\operatorname{Tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{Tr}(BA)$; setting $B=U^*$ and $A=UA_0$ proves $\operatorname{Tr}(UA_0U^*)=\operatorname{Tr}(A_0)$ for unitary $U$. Thus diagonalizing a density $\rho$ gives the stated expectation formula and $0\leq\operatorname{Tr}(\rho A)\leq\|A\|$ whenever $0\leq A\leq I$. [step 2.1, algebra]

4.1 The eigenvalues of $\rho$ satisfy $0\leq p_j\leq1$ and $\sum_jp_j=1$, so $\operatorname{Tr}(\rho^2)=\sum_jp_j^2\leq\sum_jp_j=1$. Equality requires every $p_j\in\{0,1\}$, hence exactly one eigenvalue is $1$. If $\rho=|u\rangle\langle u|=t\sigma+(1-t)\tau$ with $0<t<1$ and densities $\sigma,\tau$, then for every $v\perp u$, $0=\langle\rho v,v\rangle=t\langle\sigma v,v\rangle+(1-t)\langle\tau v,v\rangle$. Positivity forces both terms to vanish; their positive square roots then give $\sigma v=\tau v=0$. Thus both densities are supported on $\mathbb C u$, so trace one gives $\sigma=\tau=\rho$. Conversely, if $\rho$ has two positive eigenvalues $p_i,p_j$, choose $0<\delta<\min(p_i,p_j)$ and transfer $\delta$ between them in opposite directions to obtain distinct densities $\rho_+,\rho_-$ with $\rho=(\rho_++\rho_-)/2$. Therefore $\rho$ is not extreme. [step 3.1, F2, algebra] ∎
