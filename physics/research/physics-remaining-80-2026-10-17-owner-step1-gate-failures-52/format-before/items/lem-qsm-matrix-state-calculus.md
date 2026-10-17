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
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- lem-rat-embeds-dense
- thm-rationals-countable
- lem-finite-powers-of-countable-sets-are-countable
- lem-countable-iff-surjection-from-n
- thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  cor-bolzano-weierstrass-in-rn: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  lem-rat-embeds-dense: mathematical-premise
  thm-rationals-countable: mathematical-premise
  lem-finite-powers-of-countable-sets-are-countable: mathematical-premise
  lem-countable-iff-surjection-from-n: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
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

**Given:** A complex inner-product space $H$ of finite dimension $D\geq1$, a Hermitian $M$, and an ordered orthonormal basis, whose coordinates identify $H$ isometrically with $\mathbb R^{2D}$.

[F1] [[cor-bolzano-weierstrass-in-rn]]: every bounded sequence in $\mathbb R^n$, $n\geq1$, has a convergent subsequence.

[F2] [[def-real-and-complex-inner-product-space]]: the inner product is linear in the first argument, conjugate-linear in the second, and positive definite.



[F3] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] supplies an ordered orthonormal basis. [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]] gives the vector norm estimates used below.

[F4] Rational numbers are dense in the reals and countable; finite powers of a countable set are countable, and every nonempty countable set is a surjective image of the natural numbers ([[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[lem-finite-powers-of-countable-sets-are-countable]], [[lem-countable-iff-surjection-from-n]]).

## Proof

1.1 Choose the ordered orthonormal basis of [F3]. In its coordinates $q(u)=\langle Mu,u\rangle$ is a real continuous quadratic polynomial, bounded on the unit sphere by the finite sum of the absolute matrix entries. By [F4], enumerate all rational-coordinate vectors $y_k\in(\mathbb Q+i\mathbb Q)^D$, and put $v_k=y_k/\|y_k\|$ when $y_k\ne0$ and $v_k=e_1$ otherwise. For any unit $x$ and $\varepsilon>0$, coordinatewise rational approximation gives $\|y-x\|<\min(\varepsilon/2,1/2)$ for such a $y$. Then $y\ne0$ and the reverse triangle inequality gives $\|y/\|y\|-x\|\le|1-\|y\||+\|y-x\|\le2\|y-x\|<\varepsilon$. Thus the $v_k$ are dense on the sphere; they are normalizations of rational-coordinate vectors, not necessarily rational-coordinate vectors themselves. Let $m=\sup_{\|u\|=1}q(u)$. For each $n\ge1$ take the least index $k(n)$ with $q(v_{k(n)})>m-1/n$, which exists by continuity and density. This deterministic rule uses no countable choice. By [F1] the bounded sequence $v_{k(n)}$ has a convergent subsequence; its limit has norm one and attains $m$. [given, F1, F2, F3, F4, construct]

2.1 Let $u$ be a maximizing unit vector and $w\perp u$. Differentiating $q((u+tw)/\|u+tw\|)$ at $t=0$ for real $t$ gives $2\operatorname{Re}\langle Mw,u\rangle=0$. Replacing $w$ by $iw$ shows that the imaginary part also vanishes. Hermiticity gives $\langle Mu,w\rangle=0$ for every $w\perp u$, so $Mu=q(u)u$ with real eigenvalue. Moreover $u^\perp$ is invariant, since $\langle Mw,u\rangle=\langle w,Mu\rangle=0$. Induction on $D$, including the one-dimensional case, gives an orthonormal eigenbasis with real eigenvalues. [step 1.1, F2, algebra]

3.1 For $M=\sum_\lambda\lambda P_\lambda$, define $f(M)=\sum_\lambda f(\lambda)P_\lambda$. The full eigenspaces and their orthogonal projections are intrinsic, so this definition is independent of the basis within each eigenspace. It supplies positive square roots, exponentials and logarithms on positive supports. Finite coordinate sums give $\operatorname{Tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{Tr}(BA)$, hence invariance under unitary changes of orthonormal basis. Diagonalizing $\rho$ gives $\operatorname{Tr}(\rho A)=\sum_jp_j\langle Au_j,u_j\rangle$ for every complex matrix $A$, and in particular $\operatorname{Tr}(\rho B^*B)=\sum_jp_j\|Bu_j\|^2\ge0$. [step 2.1, algebra]

3.2 Put $a=\operatorname{Tr}(\rho X^*Y)$, $b=\operatorname{Tr}(\rho Y^*Y)$ and $c=\operatorname{Tr}(\rho X^*X)$. Step 3.1 gives $c+za+\overline z\,\overline a+|z|^2b\ge0$ for all complex $z$. If $b>0$, take $z=-\overline a/b$ to get $|a|^2\le bc$. If $b=0$, varying $z$ with arbitrarily large magnitude forces $a=0$, giving the same inequality. This proves the stated weighted Cauchy–Schwarz formula (whose form is conjugate-linear in $X$). [step 3.1, algebra]

4.1 The density eigenvalues satisfy $p_j\ge0$ and $\sum_jp_j=1$, so $\operatorname{Tr}(\rho^2)=\sum_jp_j^2\le1$, with equality exactly when one eigenvalue is one and all others vanish. If a rank-one density $\rho=|u\rangle\langle u|$ is $t\sigma+(1-t)\tau$ with $0<t<1$, then every $v\perp u$ has $0=t\langle\sigma v,v\rangle+(1-t)\langle\tau v,v\rangle$. Positivity and the square roots from step 3.1 give $\sigma v=\tau v=0$. Self-adjointness puts their ranges in $\mathbb C u$, and trace one gives $\sigma=\tau=\rho$. Conversely, two positive eigenvalues allow a sufficiently small opposite transfer of weight, yielding distinct densities $\rho_+,\rho_-$ with midpoint $\rho$. Thus precisely the rank-one densities are extreme. [step 3.1, step 3.2, algebra] ∎
