---
id: lem-gr-tensor-component-transformation-law
kind: lemma
title: "The component transformation law of a smooth tensor field"
status: published
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-tensor-fields-and-components, def-gr-smooth-lorentzian-objects, def-smoothly-compatible-charts, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-change-of-coordinate-formula-for-tangent-bases, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-coordinate-differentials-form-the-dual-cotangent-basis, lem-coordinate-derivations-are-well-defined-derivations, lem-matrix-inversion-preserves-ck-regularity, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-smoothly-compatible-charts: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-change-of-coordinate-formula-for-tangent-bases: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-coordinate-differentials-form-the-dual-cotangent-basis: mathematical-premise
  lem-coordinate-derivations-are-well-defined-derivations: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 12 'Tensors and Tensor Fields on Manifolds', printed pp. 316-324"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the tensor transformation law' and 'partial derivatives are not tensors', printed pp. 46-47 (PDF pp. 53-54)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 1.6-1.8 on tensor components and the change of coordinate bases, printed pp. 15-21 (PDF pp. 16-22)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $r,s\ge0$, and let $T$ be a family
assigning to each $p\in M$ a type $(r,s)$ tensor at $p$
([[def-gr-tensor-fields-and-components]]). Let $(U,x)$ and $(V,y)$ be
overlapping smooth charts, and write $T^{a_1\cdots a_r}{}_{b_1\cdots b_s}$ and
$T'^{a_1\cdots a_r}{}_{b_1\cdots b_s}$ for the components of $T$ in the charts
$x$ and $y$. Then for every $q\in U\cap V$,

$$T'^{a_1\cdots a_r}{}_{b_1\cdots b_s}(y(q))=\sum_{c_1,\dots,c_r}\sum_{d_1,\dots,d_s}\left(\prod_{i=1}^{r}\frac{\partial y^{a_i}}{\partial x^{c_i}}(x(q))\right)\left(\prod_{j=1}^{s}\frac{\partial x^{d_j}}{\partial y^{b_j}}(y(q))\right)T^{c_1\cdots c_r}{}_{d_1\cdots d_s}(x(q)),$$

where $\partial y^{a}/\partial x^{c}$ and $\partial x^{d}/\partial y^{b}$ are
the entries of the total derivatives of $y\circ x^{-1}$ and $x\circ y^{-1}$.
Moreover $T$ is a smooth tensor field of type $(r,s)$ if and only if its
components are $C^\infty$ in the charts of some one smooth atlas of $M$; in
that case the components in every smooth chart are $C^\infty$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, integers $r,s\ge0$, a family $T$ of type $(r,s)$ tensors, and overlapping smooth charts $(U,x)$, $(V,y)$.

[L1] The components of $T$ in a chart are the evaluations $T^{a_1\cdots a_r}{}_{b_1\cdots b_s}(q)=T_q(dx^{a_1}|_q,\dots,\partial_{b_1}|_q,\dots)$, and $T$ is a smooth tensor field of type $(r,s)$ when these are $C^\infty$ in the charts of the maximal smooth atlas ([[def-gr-tensor-fields-and-components]]).

[L2] The coordinate derivations of one chart expand in those of another by $\partial_{x^i}|_q=\sum_j\frac{\partial(y^j\circ x^{-1})}{\partial x^i}(x(q))\,\partial_{y^j}|_q$ ([[thm-change-of-coordinate-formula-for-tangent-bases]]).

[L3] The coordinate differentials of a chart form the dual basis of its coordinate derivations, and every covector expands in a dual basis ([[thm-coordinate-differentials-form-the-dual-cotangent-basis]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]).

[L4] For a chart $(U,x)$ and $q\in U$, the coordinate derivation acts on a smooth function by $\partial_{x^i}|_q f=D_i(f\circ x^{-1})(x(q))$; in particular $\partial_{x^i}|_q(y^j)=\frac{\partial y^j}{\partial x^i}(x(q))$ ([[lem-coordinate-derivations-are-well-defined-derivations]]).

[L5] Smoothly compatible charts have smooth transition maps in both directions, and the entries of their total derivatives are smooth functions ([[def-smoothly-compatible-charts]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] Matrix inversion preserves $C^k$ regularity on the invertible matrices, so the entries $\frac{\partial x^{d}}{\partial y^{b}}$ of the inverse Jacobian are $C^\infty$ ([[lem-matrix-inversion-preserves-ck-regularity]]).

[L7] Finite sums and products of $C^\infty$ Euclidean maps are $C^\infty$, and composites of $C^\infty$ maps are $C^\infty$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Fix $q\in U\cap V$ and write $\partial_{x^i}:=\partial_{x^i}|_q$, $\partial_{y^j}:=\partial_{y^j}|_q$, $dx^i:=dx^i|_q$, $dy^j:=dy^j|_q$. By [L2] applied to the two charts, $\partial_{y^{b}}=\sum_{d}\frac{\partial x^{d}}{\partial y^{b}}(y(q))\,\partial_{x^{d}}$. By [L3] and [L4], $dy^{a}$ is the dual basis element of $\partial_{y^{a}}$ and its coefficients in the dual basis $(dx^c)$ are $dy^{a}(\partial_{x^{c}})=\partial_{x^{c}}(y^{a})=\frac{\partial y^{a}}{\partial x^{c}}(x(q))$; hence $dy^{a}=\sum_{c}\frac{\partial y^{a}}{\partial x^{c}}(x(q))\,dx^{c}$. [L2, L3, L4, given]

2.1 Since $T_q$ is multilinear in its $r$ covector and $s$ vector arguments, substituting the expansions of step 1.1 into the definition of the $y$-components gives the displayed transformation law: each contravariant slot contributes one factor $\frac{\partial y^{a_i}}{\partial x^{c_i}}(x(q))$ and each covariant slot one factor $\frac{\partial x^{d_j}}{\partial y^{b_j}}(y(q))$, and the sums over the intermediate indices are finite. [step 1.1, L1, algebra]

3.1 In the special case $r=s=0$ the double sum is empty and the law reduces to $T'(y(q))=T(x(q))$; in the case $r=1,s=0$ it reduces to the vector transformation law and in the case $r=0,s=1$ to the covector law of step 1.1. [step 2.1, L1, algebra]

3.2 Suppose $T$ has $C^\infty$ components in the charts of one smooth atlas $\mathcal A$. Let $(V,y)$ be any smooth chart and $q\in V$; choose a chart $(U,x)$ of $\mathcal A$ with $q\in U$ (the charts of $\mathcal A$ cover $M$). By step 2.1 the components of $T$ in $y$ equal the finite sum of step 2.1, whose factors are: the numbers computed from the components of $T$ in $x$, which are $C^\infty$ functions of $x$ by hypothesis, evaluated along the smooth map $x$; and the Jacobian entries $\frac{\partial y^{a}}{\partial x^{c}}\circ x$ and $\frac{\partial x^{d}}{\partial y^{b}}\circ y$, which are $C^\infty$ on the overlap by [L5] and [L6]. By [L7] the sum is $C^\infty$ on $y(U\cap V)$. Since $q$ and $(V,y)$ were arbitrary, the components of $T$ are $C^\infty$ in every smooth chart, so $T$ is a smooth tensor field by [L1]. The converse direction is immediate from [L1], since the maximal atlas contains every smooth atlas. [step 2.1, L1, L5, L6, L7, given]

4.1 Steps 1.1, 2.1 and 3.1 prove the transformation law and step 3.2 proves the smoothness criterion. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
