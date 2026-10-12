---
id: thm-nrqm-orbital-and-spin-finite-spin-block-decomposition
aliases: [nrqm-orbital-and-spin-finite-spin-block-decomposition]
kind: theorem
domain: mathematics
title: "Finite spin-block decomposition"
status: draft
origin: pipeline
dependency_level: 1
deps: [prop-nrqm-orbital-and-spin-finite-spin-matrices, def-inner-product-space, def-linear-map, def-linear-subspace, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-self-adjoint-and-normal-endomorphism, thm-complex-spectral-theorem-for-normal-endomorphisms, def-orthogonality-and-orthogonal-complement, def-dimension, def-natural-numbers, def-finite-sum-in-a-commutative-monoid, cor-inner-product-induces-a-norm]
dependency_roles:
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-adjoint-of-a-linear-map-between-inner-product-spaces: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-dimension: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §2 pp. 11-18 (algebraic theory: highest weight, |C_pm|^2 = j(j+1)-m(m pm 1), and the range of m)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7 (Angular Momentum), §7.1 pp. 141-152 (ladder operators, (7.13)-(7.15), integrality of 2j)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Let $V$ be a nonzero finite-dimensional complex inner product space, with inner product linear in the first
argument ([[def-inner-product-space]], [[def-dimension]]), and let $J_x,J_y,J_z\in\operatorname{End}(V)$ be
self-adjoint operators satisfying ([[def-self-adjoint-and-normal-endomorphism]])

$$[J_x,J_y]=iJ_z,\qquad [J_y,J_z]=iJ_x,\qquad [J_z,J_x]=iJ_y .$$

Put $J_+:=J_x+iJ_y$, $J_-:=J_x-iJ_y$ and $J^2:=J_x^2+J_y^2+J_z^2$. Then:

(a) $J_+^*=J_-$, $J_-^*=J_+$, $[J_z,J_\pm]=\pm J_\pm$, $[J_+,J_-]=2J_z$,
$J^2=J_-J_++J_z^2+J_z=J_+J_-+J_z^2-J_z$, and $J^2$ is self-adjoint, commutes with
$J_x,J_y,J_z,J_\pm$, and satisfies $\langle J^2v,v\rangle=\|J_xv\|^2+\|J_yv\|^2+\|J_zv\|^2\ge0$ for every $v\in V$;

(b) there are an integer $r\ge1$, numbers $j_1,\dots,j_r\in\frac12\mathbb N=\{0,\frac12,1,\dots\}$ with
$\sum_{\nu=1}^r(2j_\nu+1)=\dim V$, and an orthonormal basis $(v_{\nu,k})$, $\nu\in\{1,\dots,r\}$,
$k\in\{0,1,\dots,2j_\nu\}$, of $V$ such that

$$J_zv_{\nu,k}=(j_\nu-k)v_{\nu,k},\quad J_+v_{\nu,k}=\sqrt{k(2j_\nu-k+1)}\,v_{\nu,k-1},\quad J_-v_{\nu,k}=\sqrt{(k+1)(2j_\nu-k)}\,v_{\nu,k+1},$$

$$J^2v_{\nu,k}=j_\nu(j_\nu+1)v_{\nu,k},\qquad J_xv_{\nu,k}=\tfrac12\bigl(J_++J_-\bigr)v_{\nu,k},\qquad J_yv_{\nu,k}=\tfrac1{2i}\bigl(J_+-J_-\bigr)v_{\nu,k},$$

with $v_{\nu,-1}:=0$ and $v_{\nu,2j_\nu+1}:=0$; each summand $V_\nu:=\operatorname{span}\{v_{\nu,0},\dots,v_{\nu,2j_\nu}\}$
is $J_x,J_y,J_z$-invariant, the decomposition $V=\bigoplus_{\nu=1}^rV_\nu$ is orthogonal, and the map
$v_{\nu,k}\mapsto e_{j_\nu-k}$ is a unitary equivalence of $(J_x,J_y,J_z)$ on $V_\nu$ with the spin-$j_\nu$ matrices
of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]];

(c) let $\lambda$ be the largest eigenvalue of $J_z$ (it exists and is real), and let $u\ne0$ satisfy
$J_zu=\lambda u$. Then $\lambda\ge0$, $J_+u=0$, and with $w_k:=J_-^ku$ one has $w_k\ne0$ for
$0\le k\le2\lambda$, $w_k=0$ for $k=2\lambda+1$, $2\lambda\in\mathbb N$, and
$\|w_k\|^2=k!(2\lambda)(2\lambda-1)\cdots(2\lambda-k+1)\|u\|^2$ for $0\le k\le2\lambda+1$; the vectors
$w_k/\|w_k\|$, $0\le k\le2\lambda$, form the block of (b) with $j=\lambda$; consequently $\lambda\in\frac12\mathbb N$
and the largest eigenvalue of $J_z$ on each block is one of the numbers $j_1,\dots,j_r$;

(d) for every $M\in\frac12\mathbb N$ the number of blocks with $j_\nu\in M+\mathbb Z$ and $j_\nu\ge M$ equals
$\dim\ker(J_z-MI)$, and the number of blocks with $j_\nu=M$ equals
$\dim\ker(J_z-MI)-\dim\ker(J_z-(M+1)I)$; in particular the multiset $\{j_1,\dots,j_r\}$ is determined by the
pair $(V,J_z)$ together with the relations, and the spectrum of $J_z$ is the multiset union of the numbers
$j_\nu-k$, $0\le k\le2j_\nu$ (a block with parameter $j$ contributes its weights only to the lattice coset
$j+\mathbb Z$).

No physical interpretation of the operators as angular momentum, spin or observables is asserted; the theorem
is a classification of finite-dimensional triples satisfying the displayed commutation relations.

## Facts & Assumptions

**Given:** a nonzero finite-dimensional complex inner product space $V$; self-adjoint $J_x,J_y,J_z$ satisfying the three commutation relations; the derived operators $J_\pm$ and $J^2$.

[F1] Adjoints are conjugate-linear, $(T^*)^*=T$, $(T+T')^*=T^*+T'$, $(TT')^*=T'^*T^*$, and a restriction of a self-adjoint operator to a closed invariant subspace is self-adjoint; self-adjoint operators are normal ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-self-adjoint-and-normal-endomorphism]]).

[F2] Every self-adjoint endomorphism of a nonzero finite-dimensional complex inner product space has a real eigenvalue and a unit eigenvector, so its set of eigenvalues is a nonempty finite subset of $\mathbb R$ and has a largest element ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] For a self-adjoint $T$ and eigenvectors $u,v$ with $Tu=\lambda u$, $Tv=\mu v$ and $\lambda\ne\mu$ one has $\langle u,v\rangle=0$: $(\lambda-\mu)\langle u,v\rangle=\langle Tu,v\rangle-\langle u,Tv\rangle=0$; the orthogonal complement of an invariant subspace is invariant for a self-adjoint operator; and $\langle T^2v,v\rangle=\|Tv\|^2$ for self-adjoint $T$ ([[def-orthogonality-and-orthogonal-complement]], [[def-self-adjoint-and-normal-endomorphism]], [[def-inner-product-space]]).

[F4] The norm satisfies $\|v\|^2=\langle v,v\rangle\ge0$, $\|v\|=0$ iff $v=0$, and $\langle Tv,w\rangle=\langle v,T^*w\rangle$ for all $v,w$ ([[cor-inner-product-induces-a-norm]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F5] An orthogonal decomposition $V=W\oplus W^\perp$ has $\dim V=\dim W+\dim W^\perp$, and a finite orthogonal family of nonzero vectors is linearly independent ([[def-orthogonality-and-orthogonal-complement]], [[def-dimension]], [[def-linear-subspace]]).

[F6] The matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] for $s=j$ act on an orthonormal basis $e_m$, $-j\le m\le j$, by the formulas displayed in the Statement with $s=j$, are self-adjoint, satisfy the same commutation relations, and have $J^2=j(j+1)I$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F7] For integers $0\le k\le m$ the products $k!(2\lambda)(2\lambda-1)\cdots(2\lambda-k+1)$ vanish if and only if $2\lambda$ is a nonnegative integer strictly less than $k$; sums of dimensions over a finite orthogonal direct sum add ([[def-natural-numbers]], [[def-finite-sum-in-a-commutative-monoid]], [[def-dimension]]).



## Proof

1.1 [The derived algebra] Taking adjoints of $J_\pm=J_x\pm iJ_y$ with $J_x^*=J_x$, $J_y^*=J_y$ and the conjugation laws gives $J_+^*=J_-$ and $J_-^*=J_+$. The commutation relations give $[J_z,J_\pm]=[J_z,J_x]\pm i[J_z,J_y]=iJ_y\pm i(-iJ_x)=\pm(J_x\pm iJ_y)=\pm J_\pm$ and $[J_+,J_-]=[J_x+iJ_y,J_x-iJ_y]=-i[J_x,J_y]+i[J_y,J_x]=2J_z$. Direct expansion gives $J_-J_+=J_x^2+J_y^2+J_z=J^2-J_z^2+J_z$ and $J_+J_-=J_x^2+J_y^2-J_z=J^2-J_z^2-J_z$, hence $J^2=J_-J_++J_z^2+J_z=J_+J_-+J_z^2-J_z$. Since $J_\pm$ and $J^2$ are polynomials in the self-adjoint $J_i$, [F1] gives $J^{2*}=J^2$. Finally $[J^2,J_x]=[J_y^2,J_x]+[J_z^2,J_x]=J_y[J_y,J_x]+[J_y,J_x]J_y+J_z[J_z,J_x]+[J_z,J_x]J_z=-i(J_yJ_z+J_zJ_y)+i(J_zJ_y+J_yJ_z)=0$, and cyclically $[J^2,J_y]=[J^2,J_z]=0$, so $J^2$ commutes with $J_x,J_y,J_z$ and hence with $J_\pm$; and $\langle J^2v,v\rangle=\langle J_x^2v,v\rangle+\langle J_y^2v,v\rangle+\langle J_z^2v,v\rangle=\|J_xv\|^2+\|J_yv\|^2+\|J_zv\|^2\ge0$ by [F3], [F4]. This proves (a). [F1, F3, F4, algebra]

2.1 [A highest vector] By [F2] $J_z$ has a largest eigenvalue $\lambda\in\mathbb R$ and a unit eigenvector $u$ with $J_zu=\lambda u$, where $u\ne0$ because $\|u\|=1$. From $[J_z,J_+]=J_+$ of step 1.1, $J_z(J_+u)=J_+J_zu+J_+u=(\lambda+1)J_+u$, so $J_+u$ is either $0$ or an eigenvector of $J_z$ with eigenvalue $\lambda+1$; maximality of $\lambda$ forces $J_+u=0$. Applying step 1.1 to $u$ gives $\langle J^2u,u\rangle=\langle(J_+J_-+J_z^2-J_z)u,u\rangle=\langle J_+J_-u,u\rangle+\lambda^2-\lambda$, while $\langle J^2u,u\rangle\ge\lambda^2$ by (a); equivalently, since $J_+u=0$, $J_+J_-u=J_+J_-u-J_-J_+u=[J_+,J_-]u=2J_zu=2\lambda u$ and therefore $\langle J^2u,u\rangle=2\lambda+\lambda^2-\lambda=\lambda(\lambda+1)\ge\|J_zu\|^2=\lambda^2$, so $\lambda\ge0$. [step 1.1, F2, F3, F4, algebra]

3.1 [The string and its length] Define $w_k:=J_-^ku$ for $k\in\mathbb N$, so $w_0=u$. Inductively, $J_zw_k=(J_-J_z-kJ_-)J_-^{k-1}u=(\lambda-k)w_k$ by step 1.1, and using $J_+J_-=J^2-J_z^2+J_z$, the fact that $J^2$ commutes with $J_-$ and $J^2u=\lambda(\lambda+1)u$ from step 2.1, one computes $J_+w_k=J_+J_-w_{k-1}=(J^2-J_z^2+J_z)w_{k-1}=\bigl[\lambda(\lambda+1)-(\lambda-k+1)^2+(\lambda-k+1)\bigr]w_{k-1}=k(2\lambda-k+1)w_{k-1}$ for $k\ge1$. Pairing with $w_{k-1}$ and using [F4] gives the recursion $\|w_k\|^2=k(2\lambda-k+1)\|w_{k-1}\|^2$, hence $\|w_k\|^2=k!(2\lambda)(2\lambda-1)\cdots(2\lambda-k+1)\|u\|^2$ by induction, the case $k=0$ being the empty product. If $w_k\ne0$ for every $k$, the vectors $w_k$ are nonzero eigenvectors of $J_z$ for the pairwise distinct eigenvalues $\lambda,\lambda-1,\lambda-2,\dots$; any $\dim V+1$ of them form an orthogonal family of nonzero vectors, hence are linearly independent by [F3] and [F5], which is impossible in the finite-dimensional space $V$. So there is a least $m\ge1$ with $w_m=0$, and then $0=\|w_m\|^2=m(2\lambda-m+1)\|w_{m-1}\|^2$ forces $2\lambda=m-1\in\mathbb N$. [step 1.1, step 2.1, F3, F4, F5, algebra]

4.1 [The normalized block] Put $2j:=m-1=2\lambda$ with $j=\lambda\in\frac12\mathbb N$, and for $0\le k\le2j$ set $v_k:=w_k/\|w_k\|$, which is defined because $w_k\ne0$ for $k< m=2j+1$ and unit by construction. The eigenvectors $w_k$ have distinct eigenvalues $j,j-1,\dots,-j$ of the self-adjoint $J_z$, so they are pairwise orthogonal by [F3]; hence $v_0,\dots,v_{2j}$ is an orthonormal family. The action formulas follow from steps 1.1, 2.1 and 3.1: $J_zv_k=(j-k)v_k$; $J_-v_k=\|w_{k+1}\|/\|w_k\|\,v_{k+1}=\sqrt{(k+1)(2j-k)}\,v_{k+1}$ for $k<2j$ and $J_-v_{2j}=0$; $J_+v_k=k(2j-k+1)\|w_{k-1}\|/\|w_k\|\,v_{k-1}=\sqrt{k(2j-k+1)}\,v_{k-1}$ for $k\ge1$ and $J_+v_0=0$; and $J^2v_k=\lambda(\lambda+1)v_k=j(j+1)v_k$ because $J^2$ commutes with $J_-$. The span $V_\lambda:=\operatorname{span}\{v_0,\dots,v_{2j}\}$ is therefore invariant under $J_\pm$ and $J_z$, hence under $J_x,J_y,J_z$, and [F6] identifies the action with the spin-$j$ model, giving $J_xv_k=\tfrac12(J_++J_-)v_k$ and $J_yv_k=\tfrac1{2i}(J_+-J_-)v_k$. [step 1.1, step 2.1, step 3.1, F3, F6, algebra]

5.1 [The invariant complement] Let $W:=V_\lambda$. If $w\in W^\perp$ and $w'\in W$, then for each $i$ the invariance of $W$ and self-adjointness of $J_i$ give $\langle J_iw,w'\rangle=\langle w,J_iw'\rangle=0$, so $J_iw\in W^\perp$; thus $W^\perp$ is invariant under $J_x,J_y,J_z$. The restriction of each $J_i$ to $W^\perp$ is self-adjoint by [F1], the commutation relations hold there, and $V=W\oplus W^\perp$ is an orthogonal direct sum with $\dim V=\dim W+\dim W^\perp$ by [F5]; if $W^\perp\ne\{0\}$, the restricted triple again satisfies the hypotheses of the Statement. [step 4.1, F1, F3, F5, algebra]

6.1 [Exhaustion and the decomposition] Iterate step 5.1: as long as the orthogonal complement of the blocks already produced is nonzero, step 2.1 supplies a largest eigenvalue and step 4.1 a further nonzero invariant block of dimension $2j_\nu+1\ge1$, orthogonally split off, decreasing the dimension of the complement by $2j_\nu+1$. Since the dimension is a nonnegative integer, the process terminates after some finite number $r\ge1$ of blocks with complement $\{0\}$, yielding an orthogonal decomposition $V=\bigoplus_{\nu=1}^rV_{\nu}$ and an orthonormal basis $(v_{\nu,k})$ as in (b); the basis is orthonormal as a union of the block bases because the blocks are pairwise orthogonal, and $\sum_\nu(2j_\nu+1)=\dim V$ by additivity of dimensions in orthogonal direct sums [F5], [F7]. Each block action is the spin-$j_\nu$ action by step 4.1 and [F6], which proves (b); step 3.1 applied to a block identifies the largest eigenvalue of $J_z$ on that block as $j_\nu$, completing (c) except for $\lambda\ge0$, proved in step 2.1. [step 2.1, step 3.1, step 4.1, step 5.1, F5, F6, F7, algebra]

7.1 [Multiplicity count] Let $M\in\frac12\mathbb N$ and consider the eigenvalue-$M$ eigenspace of $J_z$. A block with parameter $j$ contributes the basis vector with $k=j-M$ exactly when $j\in M+\mathbb Z$ and $0\le M\le j$, and contributes nothing in all other cases (its weights are $j,j-1,\dots,-j$, all in the coset $j+\mathbb Z$); hence $\dim\ker(J_z-MI)=\#\{\nu:j_\nu\in M+\mathbb Z,\ j_\nu\ge M\}$ by the orthonormal basis of step 6.1. Applying this at $M$ and at $M+1$, both in the same coset $M+\mathbb Z$, and subtracting gives $\#\{\nu:j_\nu=M\}=\dim\ker(J_z-MI)-\dim\ker(J_z-(M+1)I)$. The multiset $\{j_1,\dots,j_r\}$ is therefore determined by $J_z$ (using the fixed relations to know that the decomposition exists), and the spectrum statement follows by collecting the eigenvalues $j_\nu-k$ of the blocks; the coset qualifier in (d) excludes nothing, since blocks outside $M+\mathbb Z$ contribute no vector to either eigenspace. This proves (d). [step 6.1, algebra] ∎
