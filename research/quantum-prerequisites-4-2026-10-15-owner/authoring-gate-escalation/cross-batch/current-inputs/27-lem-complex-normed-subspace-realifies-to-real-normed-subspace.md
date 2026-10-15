---
id: lem-complex-normed-subspace-realifies-to-real-normed-subspace
kind: lemma
title: "A complex normed subspace and its finite basis realify"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-complex-norm-and-complex-normed-space
  - def-complex-normed-subspace
  - def-linear-subspace
  - def-realification-of-a-complex-vector-space
  - lem-complex-norm-realification-is-a-real-norm
  - def-normed-subspace
  - def-linear-basis
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-linear-independence
  - def-vector-space
  - lem-independent-list-is-injective
  - thm-complex-numbers-are-the-real-coordinate-plane
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
    - title: "Tomasz Kochanek, Functional Analysis, Lecture 1: Normed space; examples; Riesz' lemma; equivalence of norms"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "M. S. Moslehian, G. A. Muñoz-Fernández, A. M. Peralta, and J. B. Seoane-Sepúlveda, Similarities and differences between real and complex Banach spaces: an overview and recent developments"
      url: "https://d-nb.info/1261144333/34"
---

## Statement

Let $(V,N)$ be a complex normed space and let $W\subseteq V$ be a complex normed subspace with its restricted norm. Then $W_{\mathbb R}$ is a real normed subspace of $V_{\mathbb R}$, and its norm metric is the restriction of the metric on $V_{\mathbb R}$ to $W\times W$. If an ordered complex basis $(b_j)_{j<n}$ of $W$ is supplied, the interleaved list
$$b_0, ib_0,\ldots,b_{n-1}, ib_{n-1}$$
is an ordered real basis of $W_{\mathbb R}$. The basis clause includes $n=0$.

## Facts & Assumptions

**Given:** A complex normed space $(V,N)$ and a complex normed subspace $W\subseteq V$. For the basis clause, an ordered complex basis $(b_j)_{j<n}$ is supplied as a finite list; the statement does not assert that such a basis exists.

[F1] [[def-complex-normed-subspace]] defines $W$ as a complex-linear subspace with the restricted norm $N_W=N|_W$.

[F2] [[def-realification-of-a-complex-vector-space]] keeps the underlying set and addition and restricts scalar multiplication to the canonical real embedding.

[F3] [[lem-complex-norm-realification-is-a-real-norm]] says the same norm makes a complex normed space real normed after realification, with the same underlying set, addition, norm values, and induced metric.

[F4] [[def-normed-subspace]] equips a real linear subspace with the restricted ambient norm.

[F5] [[def-linear-basis]] requires each basis set to be linearly independent.

[F6] [[def-linear-basis]] defines an ordered basis as a finite injective list whose image is a basis.

[F7] [[thm-complex-numbers-are-the-real-coordinate-plane]] gives each complex number unique real coordinates $a+bi$ and the coordinate arithmetic needed to expand a complex coefficient.

[F8] [[def-linear-basis]] states that the empty set is a basis of the zero space and of no other space.

[F9] A complex norm is real-valued, separates zero, satisfies $N(\lambda v)=|\lambda|_{\mathbb C}N(v)$ for every $\lambda\in\mathbb C$, and satisfies the triangle inequality ([[def-complex-norm-and-complex-normed-space]]).

[F10] [[def-linear-subspace]] says a complex-linear subspace contains zero and is closed under addition and multiplication by every scalar in $\mathbb C$.

[F11] [[def-normed-subspace]] states that the induced metric on a normed subspace is the restriction of the ambient norm metric.

[F12] [[def-linear-basis]] requires each basis set to span its vector space.

[F13] [[def-linear-combination-and-span]] defines a linear combination as a finite sum of scalar multiples.

[F14] [[lem-span-is-the-set-of-linear-combinations]] identifies membership in a span with a finite linear combination.

[F15] [[def-linear-independence]] defines a linearly independent finite list by vanishing of every coefficient whenever its linear combination is zero.

[F16] In a vector space, addition is an abelian-group operation and scalar multiplication satisfies distributivity over vector addition and scalar addition, associativity of scalar multiplication, and the scalar identity law ([[def-vector-space]]).

[F17] A finite list is linearly independent exactly when it is injective and its image is a linearly independent subset ([[lem-independent-list-is-injective]]).

## Proof

1.1 The sets and additions underlying $W_{\mathbb R}$ and $V_{\mathbb R}$ are the original sets and additions by [F2]. By [F10], $W$ contains zero and is closed under addition and every complex scalar; therefore it is closed under the restricted real scalar action as well, so $W_{\mathbb R}$ is a real linear subspace of $V_{\mathbb R}$. [given, F1, F2, F10, algebra]

1.2 If $\sum_{j<n}(a_jb_j+c_j(ib_j))=0$ with $a_j,c_j\in\mathbb R$, distributivity and scalar associativity [F16] give $\sum_{j<n}(a_j+ic_j)b_j=0$. The supplied complex basis list is injective by [F6] and has independent image by [F5], so [F17] makes it linearly independent; [F15] then forces each $a_j+ic_j=0$. Uniqueness of the coordinates in [F7] gives $a_j=c_j=0$. Thus the displayed real list is linearly independent. [F5, F6, F7, F15, F16, F17, algebra]

2.1 By [F1], $N_W=N|_W$. For $w\in W$, $N_W(w)=0$ exactly when $N(w)=0$, hence exactly when $w=0$ by [F9]. For $u,w\in W$, closure under addition from [F10] and the ambient triangle inequality give $N_W(u+w)\le N_W(u)+N_W(w)$. For every $\lambda\in\mathbb C$, $\lambda w\in W$ by [F10], and [F9] gives $N_W(\lambda w)=|\lambda|_{\mathbb C}N_W(w)$. Thus $(W,N_W)$ is a complex normed space, so [F3] applies to both $V$ and $W$; with [F4], this makes $W_{\mathbb R}$ a real normed subspace of $V_{\mathbb R}$. [given, F1, F3, F4, F9, F10, step 1.1, algebra]

2.2 Assume the supplied ordered complex basis exists. Its image spans $W$ by [F6] and [F12], so [F14] gives, for any $w\in W$, complex coefficients $z_j$ with $w=\sum_{j<n}z_jb_j$, a finite linear combination in the sense of [F13]. Write each $z_j=a_j+ic_j$ using [F7]. Distributivity and scalar associativity [F16] give $w=\sum_{j<n}(a_jb_j+c_j(ib_j))$, a real linear combination of the displayed list; conversely every such real combination lies in $W$ because $W$ is complex-linear. Hence the list spans $W_{\mathbb R}$. [given, F1, F6, F7, F12, F13, F14, F16, step 1.1, algebra]

3.1 For $w,w'\in W$, subtraction is unchanged by realification [F2, F16] and the norms are unchanged by [F3], so $d_{W_{\mathbb R}}(w,w')=N_W(w-w')=N_V(w-w')=d_{V_{\mathbb R}}(w,w')$. By [F11], this is exactly the restriction of the ambient metric to $W\times W$. [F2, F3, F11, F16, step 2.1, algebra]

4.1 If $n=0$, [F6] makes the supplied empty list an ordered basis and [F8] gives $W=\{0\}$; the empty real list is a basis of the same realification by [F2] and [F8]. If $n>0$, steps 2.2 and 1.2 show the displayed list spans and is linearly independent. By [F17] it is injective with independent image, and step 2.2 gives that image's span as $W_{\mathbb R}$; [F5] and [F12] make the image a basis, so [F6] makes the list an ordered real basis. [F2, F5, F6, F8, F12, F17, step 2.2, step 1.2, algebra] ∎

## Remarks

The finite basis is an input, not a choice from a family. The argument uses no choice axiom.
