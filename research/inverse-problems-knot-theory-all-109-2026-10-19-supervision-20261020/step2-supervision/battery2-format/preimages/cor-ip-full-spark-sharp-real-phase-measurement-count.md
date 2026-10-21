---
id: cor-ip-full-spark-sharp-real-phase-measurement-count
kind: corollary
title: The sharp real phase-retrieval count for full-spark measurements
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-real-frame-phase-retrieval
  - def-ip-frame-complement-property
  - def-ip-real-full-spark-measurement-family
  - thm-ip-real-phase-retrieval-complement-property
  - lem-ip-vandermonde-determinant
  - thm-dimension-of-a-linear-subspace
  - cor-independent-set-is-no-larger-than-a-finite-spanning-set
  - lem-standard-basis-of-f-n
  - def-linear-independence
  - def-linear-combination-and-span
  - def-linear-subspace
  - lem-span-is-the-set-of-linear-combinations
  - def-linear-map
  - def-kernel-and-image-of-a-linear-map
  - thm-rank-nullity
  - def-dimension
  - thm-reals-field
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Radu Balan, Pete Casazza, and Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3) (2006), Corollaries 2.6–2.7"
      url: "https://arxiv.org/pdf/math/0412411"
    - title: "Radu Balan, Frames and Phaseless Reconstruction, full lecture notes (2015), Corollary 3.3"
      url: "https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf"
    - title: "MIT OpenCourseWare 18.013A, Chapter B §1, Vandermonde determinant"
      url: "https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter_b/contents.html"
---

## Statement

Let $d\ge1$, $m\ge0$, and let $\Phi=(a_i)_{i\in[m]}$ be a finite family in $\mathbb R^d$, with $[m]=\{1,\ldots,m\}$ and $[0]=\varnothing$. Write $\langle u,v\rangle=\sum_{k<d}u_kv_k$. If $m\le2d-2$, then there are $x,z\in\mathbb R^d$ with $z\ne x$ and $z\ne-x$ but $\langle a_i,x\rangle^2=\langle a_i,z\rangle^2$ for every $i\in[m]$. If $m\ge2d-1$ and every list of $d$ distinct measurement labels indexes linearly independent vectors, then equality of all these squared measurements implies $z=x$ or $z=-x$. For every $d\ge1$, this count is attained at $m=2d-1$: for any distinct real numbers $t_1,\ldots,t_m$, the vectors $a_i=(1,t_i,t_i^2,\ldots,t_i^{d-1})^{\mathsf T}$ satisfy the stated independence condition and hence the squared measurements determine the signal up to global sign.

## Statement references

[[def-ip-real-frame-phase-retrieval|Real global-sign phase retrieval]]

[[def-ip-frame-complement-property|Complement property]]

[[def-ip-real-full-spark-measurement-family|Full-spark condition]]

[[thm-ip-real-phase-retrieval-complement-property|Complement-property characterization]]

[[lem-ip-vandermonde-determinant|Vandermonde determinant and moment-curve independence]]

[Radu Balan, Pete Casazza, and Dan Edidin, Corollaries 2.6–2.7](https://arxiv.org/pdf/math/0412411)

[Radu Balan, Corollary 3.3](https://www.norbertwiener.umd.edu/Education/IMA2015/t4/lecture.pdf)

[MIT OpenCourseWare 18.013A, Chapter B §1](https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter_b/contents.html)

## Facts & Assumptions

**Given:** A finite labeled family $\Phi=(a_i)_{i\in[m]}$ in $\mathbb R^d$, with $d\ge1$ and $m\ge0$.

[F1] [[thm-ip-real-phase-retrieval-complement-property]]: real intensity measurements are injective modulo global sign exactly when every partition has one side spanning $\mathbb R^d$.

[F2] [[def-ip-frame-complement-property]]: the complement property is the stated condition over every subset of labels and its labeled complement.

[F3] [[def-ip-real-full-spark-measurement-family]]: full spark means every list of $d$ distinct measurement labels gives a linearly independent list of vectors.

[F4] [[def-linear-map]], [[def-kernel-and-image-of-a-linear-map]], [[def-linear-combination-and-span]], [[def-linear-subspace]], [[lem-span-is-the-set-of-linear-combinations]], [[thm-rank-nullity]]: the coefficient map and its image are defined, subspaces are closed under linear combinations, the span is the smallest subspace containing the columns and equals their finite linear combinations, and rank-nullity computes image dimension from a finite-dimensional domain.

[F5] [[lem-standard-basis-of-f-n]], [[def-dimension]]: $\mathbb R^k$ has dimension $k$, including $k=0$, and $\mathbb R^d$ has dimension $d$.

[F6] [[def-linear-independence]]: an independent list of columns has no nonzero coefficient vector in the kernel of its coefficient-to-column map.

[F7] [[thm-dimension-of-a-linear-subspace]]: a linear subspace of $\mathbb R^d$ has dimension at most $d$ and equals $\mathbb R^d$ exactly when its dimension is $d$.

[F8] [[lem-ip-vandermonde-determinant]]: for distinct real nodes $t_1,\ldots,t_d$, the $d$ moment-curve columns $(1,t_j,\ldots,t_j^{d-1})^{\mathsf T}$ are linearly independent.

[F9] [[thm-reals-field]]: the real coordinate and coefficient operations satisfy the field axioms used in the finite linear maps and the Vandermonde construction.

## Proof


1.1 Let $I\subseteq[m]$ have $q$ labels and enumerate them in increasing order as $i_0,\ldots,i_{q-1}$. Define $T_I:\mathbb R^q\to\mathbb R^d$ by $T_I(c)=\sum_{j<q}c_j a_{i_j}$. This map is linear by distributivity of finite sums. Its image is a subspace: it contains zero, and if $u=T_I(c)$ and $v=T_I(c')$, then $\alpha u+\beta v=T_I(\alpha c+\beta c')$. For each $j<q$, the $j$th standard unit vector $e_j$ satisfies $T_I(e_j)=a_{i_j}$, so the smallest-subspace property gives $\operatorname{span}(\Phi_I)\subseteq\operatorname{im}T_I$. Conversely every $T_I(c)$ is a finite linear combination of the listed measurement vectors, so [F4] gives $\operatorname{im}T_I\subseteq\operatorname{span}(\Phi_I)$. Thus the image equals the span, also when $q=0$ because both are $\{0\}$. [given, F4, F5, F9, algebra]

1.2 If $q<d$, rank-nullity and [F5] give $\dim(\operatorname{im}T_I)\le q<d$, so by step 1.1 this span cannot equal $\mathbb R^d$. [step 1.1, F4, F5]

2.1 Suppose $m\le2d-2$. Choose $S\subseteq[m]$ with $|S|=\min(m,d-1)$. Then $|S|\le d-1$; if $m>d-1$, the bound on $m$ gives $|[m]\setminus S|=m-d+1\le d-1$, and if $m\le d-1$ the complement is empty. Applying step 1.2 to both sides shows that neither side spans, so the complement property fails by [F2]. Hence phase retrieval fails by [F1]. [step 1.2, F1, F2, construct, algebra]

3.1 The lower count is established in step 2.1. For the sufficient count, suppose $m\ge2d-1$ and $\Phi$ is full spark. For any $S\subseteq[m]$, the two sides cannot both have fewer than $d$ labels, since that would imply $m\le2d-2$. Thus one side contains $d$ distinct labels. By [F3], their vectors are independent. The coefficient map $T:\mathbb R^d\to\mathbb R^d$ for these $d$ columns has trivial kernel by [F6]; by step 1.1 its image is their span, and rank-nullity [F4] and [F5] give that image dimension $d$. Hence the image, and therefore the span of the chosen vectors, is $\mathbb R^d$ by [F7]. The containing side also spans $\mathbb R^d$. Since $S$ was arbitrary, the complement property holds, and [F1] gives phase retrieval. [step 1.1, step 2.1, given, F1, F2, F3, F4, F5, F6, F7, F9, choose, algebra]

4.1 Set $m=2d-1$ and choose distinct real nodes $t_1,\ldots,t_m$. Every $d$-label subfamily is independent by [F8], so the family is full spark by [F3]. Since $m\ge2d-1$, step 3.1 proves it performs phase retrieval. For $d=1$, the same argument uses one node and the one-entry vector $(1)$; for all $d$, step 2.1 rules out any smaller count. [step 2.1, step 3.1, F3, F8, construct, algebra] ∎
