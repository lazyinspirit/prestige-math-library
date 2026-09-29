---
id: ex-polynomial-ring-flat-smooth
kind: example
title: "Polynomial rings are flat and smooth"
status: draft
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-flat-morphism-schemes
  - lem-flatness-affine-local-source-target
  - cor-free-modules-are-projective-and-flat
  - def-ag-standard-smooth-algebra
  - thm-jacobian-criterion-smooth-morphism
  - def-smooth-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - ex-affine-n-space-over-arbitrary-base
  - def-locally-finite-presentation-morphism
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25 and 29.34-29.35"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $A$ be a commutative ring and $n\ge0$ an integer. The polynomial algebra
$P=A[T_1,\dots,T_n]$ is a free $A$-module with the monomials as a basis, hence
flat over $A$, and the structure morphism
$$\mathbf A^n_A=\operatorname{Spec}P\longrightarrow\operatorname{Spec}A$$
([[ex-affine-n-space-over-arbitrary-base]]) is flat, locally of finite
presentation and smooth of relative dimension $n$
([[def-smooth-morphism-schemes]], [[def-relative-dimension-smooth-morphism]]).
Its fibres are affine $n$-spaces over the residue fields, and for $n=0$ the
morphism is the identity of $\operatorname{Spec}A$, which is étale
([[def-etale-morphism-schemes]]).

Assume the Axiom of Choice for the smoothness conclusion, since the Jacobian
criterion used below assumes it; the flatness statement is choice-free.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A free module over a commutative ring is flat without a choice assumption ([[cor-free-modules-are-projective-and-flat]]), and for affine charts $f(U)\subseteq V$ with $U=\operatorname{Spec}B$, $V=\operatorname{Spec}A$ flatness of $B$ over $A$ implies flatness at every point of $U$ without choice (the converse assumes AC) ([[lem-flatness-affine-local-source-target]]); the pointwise definition of flatness is in [[def-flat-morphism-schemes]].

[F2] A standard smooth presentation of an $R$-algebra $S$ is a presentation $S\cong(R[x_1,\dots,x_m]/(f_1,\dots,f_r))_g$ with an invertible $r\times r$ Jacobian minor; the case $r=0$ is allowed and is exactly a localisation of a polynomial ring, and the relative dimension is $m-r$ ([[def-ag-standard-smooth-algebra]]). In particular $R[x_1,\dots,x_m]$ itself is standard smooth over $R$ of relative dimension $m$, by the empty equation list with $g=1$.

[F3] Assume AC. For $f$ locally of finite presentation at $x$, $f$ is smooth at $x$ if and only if some affine chart has a presentation with an invertible Jacobian minor; moreover such a chart is flat with geometrically regular fibres and exhibits relative dimension $m-r$ at $x$ ([[thm-jacobian-criterion-smooth-morphism]]).

[F4] A morphism is smooth at $x$ when it is locally of finite presentation at $x$, flat at $x$ and the fibre is geometrically regular at $x$ ([[def-smooth-morphism-schemes]]), and its relative dimension is the common local dimension of the geometric fibres over $x$ ([[def-relative-dimension-smooth-morphism]]).

[F5] A polynomial algebra over a ring is a finitely presented algebra, so the corresponding affine morphism is locally of finite presentation ([[def-locally-finite-presentation-morphism]]).

[F6] On $S=\operatorname{Spec}A$ one has $\mathbf A^n_S=\operatorname{Spec}A[T_1,\dots,T_n]$ with its structure morphism, and these definitions agree under localisation of $A$ ([[ex-affine-n-space-over-arbitrary-base]]).

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Flatness. The monomials $T_1^{a_1}\cdots T_n^{a_n}$ form a basis of $P$ as an $A$-module, so $P$ is free, hence flat over $A$ by [F1]. The morphism $\mathbf A^n_A\to\operatorname{Spec}A$ is the affine morphism $\operatorname{Spec}P\to\operatorname{Spec}A$ by [F6], so it is flat at every point by the affine-local criterion [F1]. [F1, F6]

1.2 Finite presentation and the standard smooth chart. The $A$-algebra $P=A[T_1,\dots,T_n]$ is a polynomial algebra, hence finitely presented, so the structure morphism is locally of finite presentation by [F5]. The empty equation list exhibits $P$ as $(A[T_1,\dots,T_n]/(\varnothing))_1$; by [F2] this is a standard smooth presentation of relative dimension $n-0=n$ with the empty Jacobian having invertible $0\times0$ minor, in the convention of [F2] in which the case $r=0$ is the localisation of a polynomial ring. [F2, F5]

2.1 Smoothness of relative dimension n. The chart of step 1.2 is an affine chart of the morphism with an invertible Jacobian minor and with $r=0$, $m=n$; since the morphism is locally of finite presentation by step 1.2, the smoothness direction of the Jacobian criterion [F3] applies at every point and exhibits relative dimension $n$. By [F4] the morphism is smooth with relative dimension $n$ at every point, i.e. pure relative dimension $n$; its fibres are $\mathbf A^n$ over the residue fields. [F2, F3, F4, step 1.2]

3.1 The case $n=0$ and accounting. For $n=0$ the polynomial algebra is $P=A$, the morphism is the identity of $\operatorname{Spec}A$, and the same argument gives smoothness of relative dimension $0$, i.e. étaleness, by [F4]. The Axiom of Choice [F7] is assumed in the Statement and is used exactly through the Jacobian criterion [F3] in step 2.1; steps 1.1 and 1.2 are choice-free. [F3, F4, F6, F7, step 1.1] $\square$
