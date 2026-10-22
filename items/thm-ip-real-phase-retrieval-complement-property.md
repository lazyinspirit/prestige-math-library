---
id: thm-ip-real-phase-retrieval-complement-property
kind: theorem
title: Real phase retrieval is equivalent to the complement property
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-real-frame-phase-retrieval
  - lem-ip-real-phase-retrieval-quotient-metric
  - def-ip-frame-complement-property
  - def-euclidean-inner-product
  - def-real-and-complex-inner-product-space
  - def-orthogonality-and-orthogonal-complement
  - def-standard-bilinear-form-on-a-coordinate-space
  - def-linear-subspace
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-linear-basis
  - thm-dimension-of-a-linear-subspace
  - def-dimension
  - lem-standard-basis-of-f-n
  - def-linear-map
  - def-kernel-and-image-of-a-linear-map
  - thm-linear-kernel-image-and-injectivity
  - def-rank-and-nullity
  - thm-rank-nullity
  - thm-reals-field
  - thm-reals-ordered-field
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), Theorem 2.8"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, Phase Retrieval: Uniqueness and Stability, arXiv:1901.07911v2, Theorem 2.2 and proof"
      url: "https://arxiv.org/pdf/1901.07911v2"
    - title: "Radu Balan, Frames and Phaseless Reconstruction, full lecture notes (2015), Theorem 3.2"
      url: "https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf"
---

## Statement

Let $d\ge1$, $m\ge0$, $[m]=\{1,\ldots,m\}$ with $[0]=\varnothing$, and let $\Phi=(a_i)_{i\in[m]}$ be a finite family in $\mathbb R^d$. Use the standard dot product $\langle u,v\rangle=\sum_{k<d}u_kv_k$, identify $x,z\in\mathbb R^d$ when $z=x$ or $z=-x$, and write $[x]$ for the resulting class. Define $\mathcal I_\Phi([x])=(\langle a_i,x\rangle^2)_{i\in[m]}$, a formula independent of the representative because replacing $x$ by $-x$ leaves every square unchanged. For $S\subseteq[m]$, let $\operatorname{span}_{\mathbb R}(\Phi_S)$ be the set of finite real linear combinations of its vectors, with the empty span equal to $\{0\}$. Then $\mathcal I_\Phi$ is injective on the global-sign classes if and only if for every $S\subseteq[m]$ at least one of $\operatorname{span}_{\mathbb R}(\Phi_S)$ and $\operatorname{span}_{\mathbb R}(\Phi_{[m]\setminus S})$ equals $\mathbb R^d$.

## Statement references

[Radu Balan, Pete Casazza, and Dan Edidin, complement-property equivalence, Theorem 2.8](https://arxiv.org/pdf/math/0412411)

[Philipp Grohs, Sarah Koppensteiner, and Martin Rathmair, complement-property equivalence and proof, Theorem 2.2](https://arxiv.org/pdf/1901.07911v2)

[Radu Balan, complement-property criterion, Theorem 3.2](https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf)

## Facts & Assumptions

**Given:** A finite real family $\Phi=(a_i)_{i\in[m]}$ in $\mathbb R^d$, where $d\ge1$ and $m\ge0$.

[F1] [[def-ip-real-frame-phase-retrieval]]: phase retrieval means injectivity of the intensity map on classes modulo one global sign; the real measurement at label $i$ is $\langle a_i,x\rangle$.

[F2] [[lem-ip-real-phase-retrieval-quotient-metric]]: the induced intensity map is well defined on those classes, and $[x]=[z]$ exactly when $x=z$ or $x=-z$.

[F3] [[def-ip-frame-complement-property]]: the complement property requires that for each $S\subseteq[m]$, the span indexed by $S$ or the span indexed by its complement is all of $\mathbb R^d$.

[F4] [[def-euclidean-inner-product]], [[def-real-and-complex-inner-product-space]], [[def-standard-bilinear-form-on-a-coordinate-space]], [[def-orthogonality-and-orthogonal-complement]]: the real coordinate pairing is bilinear, symmetric, and positive definite, so it is a real inner product; $v\in U^\perp$ means its pairing with every vector of $U$ is zero.

[F5] [[def-linear-combination-and-span]], [[def-linear-subspace]], [[lem-span-is-the-set-of-linear-combinations]]: the library span is the smallest real linear subspace containing its generators and equals the set of their finite real linear combinations. Bilinearity therefore extends orthogonality from the generators to their span.

[F6] [[thm-dimension-of-a-linear-subspace]], [[def-dimension]], [[def-linear-basis]], [[lem-standard-basis-of-f-n]]: every subspace of $\mathbb R^n$ is finite-dimensional with dimension at most $n$, equality holds only for the whole space, and $\dim\mathbb R^n=n$, including $n=0$; finite dimension supplies a finite basis.

[F7] [[def-linear-map]], [[def-kernel-and-image-of-a-linear-map]], [[thm-linear-kernel-image-and-injectivity]], [[def-rank-and-nullity]], [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, its kernel and image are subspaces, its rank is the image dimension, and domain dimension is nullity plus rank.

[F8] [[thm-reals-field]], [[thm-reals-ordered-field]]: $2=1+1>0$ in $\mathbb R$, so $2\ne0$ and cannot annihilate a nonzero real vector.

[A1] No form of the axiom of Choice is assumed; the dimension results are finite-dimensional and the selections in the proof are finite.

## Proof



1.1 To prove that the complement property implies injectivity, assume the complement property [F3] and suppose $\mathcal I_\Phi([x])=\mathcal I_\Phi([z])$. At every label $i$, equality of the intensity coordinates gives $\langle a_i,x\rangle^2=\langle a_i,z\rangle^2$. [given, F1, F3]

2.1 Factoring the difference of squares over $\mathbb R$ yields $(\langle a_i,x-z\rangle)(\langle a_i,x+z\rangle)=0$ for every $i\in[m]$. This factorization also holds when $x=0$, $z=0$, or $a_i=0$; no nonzero-signal or nonzero-measurement hypothesis is used. [step 1.1, F4, F8, algebra]

3.1 Put $S=\{i\in[m]:\langle a_i,x-z\rangle=0\}$. For $i\in S$, $a_i\perp(x-z)$; for $i\notin S$, the first factor in step 2.1 is nonzero, so $a_i\perp(x+z)$. By [F5], each vector in either span is a finite linear combination of its generators, and bilinearity extends each orthogonality statement to the whole span. [step 2.1, F4, F5, construct]

4.1 By the complement property [F3], either $\operatorname{span}(\Phi_S)=\mathbb R^d$ or $\operatorname{span}(\Phi_{[m]\setminus S})=\mathbb R^d$. In the first case step 3.1 makes $x-z$ orthogonal to every vector of $\mathbb R^d$, hence to itself; positive definiteness [F4] gives $x-z=0$. In the second case it gives $x+z=0$. Thus $[x]=[z]$ by [F2], proving injectivity. [step 3.1, F2, F3, F4, F5, algebra]

5.1 Step 4.1 proves that the complement property implies injectivity. For injectivity implying the complement property, argue contrapositively and suppose the complement property fails; then some $S\subseteq[m]$ has the proper subspaces $U=\operatorname{span}(\Phi_S)$ and $V=\operatorname{span}(\Phi_{[m]\setminus S})$. We prove that every proper subspace $W\le\mathbb R^d$ has a nonzero orthogonal vector. Let $r=\dim W<d$ by [F6], choose a basis $w_0,\ldots,w_{r-1}$ of $W$, and define $L_W:\mathbb R^d\to\mathbb R^r$ by $L_W(x)=(\langle x,w_j\rangle)_{j<r}$. Bilinearity makes $L_W$ linear. Its kernel is $W^\perp$: vanishing against the basis implies vanishing against every vector of $W$ because the basis spans $W$ and [F5] expresses each span vector as a finite linear combination; the converse is immediate. By [F7], the image is a subspace of $\mathbb R^r$, so [F6] gives $\operatorname{rank}L_W=\dim(\operatorname{im}L_W)\le r$. Rank-nullity [F7] and $\dim\mathbb R^d=d$ then give $\dim W^\perp=\dim\ker L_W=d-\operatorname{rank}L_W\ge d-r>0$. By [F6] a zero subspace has dimension zero, so $W^\perp$ contains a nonzero vector. Apply this argument to $U$ and $V$ and choose nonzero $u\in U^\perp$ and $v\in V^\perp$. [given, F5, F6, F7, A1, construct, choose]

6.1 Set $x=u+v$ and $z=u-v$. Since $v\ne0$, $x=z$ would imply $2v=0$, impossible by [F8]; since $u\ne0$, $x=-z$ would imply $2u=0$, also impossible. Hence $[x]\ne[z]$ by [F2]. [step 5.1, F2, F8, algebra]

6.2 If $i\in S$, then $a_i\in U$ and $u\perp a_i$, so $\langle a_i,x\rangle=\langle a_i,v\rangle$ and $\langle a_i,z\rangle=-\langle a_i,v\rangle$. If $i\notin S$, then $a_i\in V$ and $v\perp a_i$, so both measurements equal $\langle a_i,u\rangle$. If $a_i=0$, it lies in $U$ and both measurements are zero. Squaring shows equality of the intensity coordinates at every label, including when either component of the partition is empty. [step 5.1, F4, F5, algebra]

7.1 When $m=0$, the only partition has both sides empty, and both spans equal $\{0\}\ne\mathbb R^d$ by [F5] and $d\ge1$. The complement property fails, while steps 5.1–6.2 give distinct global-sign classes with the same unique empty data. Thus the zero-measurement case is included. [F2, F5, F6, F7, step 5.1, step 6.1, step 6.2]

8.1 Steps 6.1 and 6.2 give distinct quotient classes with the same intensity data, so $\mathcal I_\Phi$ is not injective. Together with step 4.1 and the definition of phase retrieval [F1], this proves the stated equivalence. [step 4.1, step 6.1, step 6.2, F1, algebra] ∎
