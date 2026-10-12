---
id: lem-gr-covariant-two-tensor-transformation-law
kind: lemma
title: "Chart independence and the transformation law of a smooth covariant 2-tensor field"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-covariant-two-tensor-field, def-smoothly-compatible-charts, def-c-r-and-smooth-maps-between-smooth-manifolds, lem-coordinate-derivations-are-well-defined-derivations, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smoothly-compatible-charts: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  lem-coordinate-derivations-are-well-defined-derivations: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the tensor transformation law (2.26) and the metric transformation (2.35), printed pp. 46-50 (PDF pp. 53-57)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 1.6-1.8 on abstract index notation and tensor fields, printed pp. 15-21 (PDF pp. 16-22)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 2.3.3, printed pp. 72-75 (PDF pp. 79-82)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $M$ be a smooth $n$-manifold and let $A=(A_p)_{p\in M}$ be a family
assigning to each $p$ a covariant $2$-tensor at $p$
([[def-gr-smooth-covariant-two-tensor-field]]). Suppose that the component
functions of $A$ are $C^\infty$ in the charts of one smooth atlas of $M$. Let
$(U,x)$ and $(V,y)$ be overlapping smooth charts of the maximal smooth atlas and
let $A_{cd}$ and $A'_{ab}$ denote the components of $A$ in the charts $x$ and
$y$. Then for every $q\in U\cap V$, writing $y=q$ in the second chart,

$$A'_{ab}(y) = \sum_{c,d=1}^{n}\frac{\partial x^c}{\partial y^a}(y)\,\frac{\partial x^d}{\partial y^b}(y)\,A_{cd}\bigl(x(y)\bigr),$$

where $\partial x^c/\partial y^a$ are the entries of the total derivative
$D(x\circ y^{-1})(y)$. In particular $A$ is a smooth covariant $2$-tensor field
on $M$: its components are $C^\infty$ in every chart of the maximal smooth
atlas.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $M$, a family $A=(A_p)$ of covariant
$2$-tensors, a smooth atlas in which the components of $A$ are $C^\infty$, and
overlapping smooth charts $(U,x)$, $(V,y)$ of the maximal atlas.

[L1] Each coordinate operator $\partial_i|_p$ is a well-defined derivation at $p$ ([[lem-coordinate-derivations-are-well-defined-derivations]]).

[L2] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $g\circ f$ is totally differentiable at $a$ with $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L3] Smoothly compatible charts have smooth transition maps $\psi\circ\varphi^{-1}$ and $\varphi\circ\psi^{-1}$ on the image of the overlap ([[def-smoothly-compatible-charts]]).

[L4] Finite sums and products of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L5] $A$ is a smooth covariant $2$-tensor field exactly when its components in every chart of the maximal atlas are $C^\infty$; its components are given by $A_{ab}(q)=A_q(\partial_a|_q,\partial_b|_q)$ ([[def-gr-smooth-covariant-two-tensor-field]]).

[L6] Smoothness of a real-valued function on an open subset of a smooth manifold means that its coordinate representatives are $C^\infty$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

**Proof technique:** direct.

1.1 Let $p\in U\cap V$ and put $y_0:=y(p)$. For every smooth function $f$ defined near $p$ the coordinate derivation is $(\partial/\partial y^a|_p)f=D_a(f\circ y^{-1})(y_0)$ by [L1], and on a neighbourhood of $y_0$ the representative factors as $f\circ y^{-1}=(f\circ x^{-1})\circ(x\circ y^{-1})$ with $x\circ y^{-1}$ smooth by [L3]. The chain rule [L2] applied at $y_0$ gives $D_a(f\circ y^{-1})(y_0)=\sum_{c}D_c(f\circ x^{-1})(x(p))\,D_a(x\circ y^{-1})^c(y_0)$, that is, $\frac{\partial}{\partial y^a}\big|_pf=\sum_c\frac{\partial x^c}{\partial y^a}(y_0)\,\frac{\partial}{\partial x^c}\big|_pf$, where $\frac{\partial x^c}{\partial y^a}(y_0):=D_a(x\circ y^{-1})^c(y_0)$. [L1, L2, L3, algebra]

2.1 Both sides of the identity in step 1.1 act on smooth germs at $p$ and are derivations there, so the coordinate vector fields are related by $\frac{\partial}{\partial y^a}\big|_p=\sum_c\frac{\partial x^c}{\partial y^a}(y_0)\,\frac{\partial}{\partial x^c}\big|_p$. Evaluating the bilinear form $A_p$ on the pair $\left(\frac{\partial}{\partial y^a}\big|_p,\frac{\partial}{\partial y^b}\big|_p\right)$ and using bilinearity together with [L5] gives $A'_{ab}(y_0)=\sum_{c,d}\frac{\partial x^c}{\partial y^a}(y_0)\frac{\partial x^d}{\partial y^b}(y_0)A_{cd}(x(p))$, which is the displayed transformation law at $p$. [step 1.1, L5, algebra]

3.1 The right-hand side of step 2.1 is a $C^\infty$ function of $y$ on $y(U\cap V)$: the transition $x\circ y^{-1}$ is smooth by [L3] so its total derivative $D(x\circ y^{-1})$ and each entry $\frac{\partial x^c}{\partial y^a}$ are smooth, the functions $A_{cd}\circ x$ are smooth because $A_{cd}$ is smooth on the chart domain and $x$ is a homeomorphism of smooth charts, and finite sums and products of smooth maps are smooth by [L4]. Since $p\in U\cap V$ was arbitrary, the components $A'_{ab}$ of $A$ in the chart $(V,y)$ are $C^\infty$ on $V$; by [L6] this is smoothness of the component functions on the open set $V$. [L3, L4, L6, step 2.1, given]

4.1 The chart $(V,y)$ of the maximal atlas was arbitrary, and the maximal atlas is covered by overlaps with the charts of the given atlas since that atlas covers $M$. Hence the components of $A$ are $C^\infty$ in every chart of the maximal atlas whenever they are $C^\infty$ in the charts of one atlas, and the transformation law of step 2.1 holds for every pair of overlapping charts. Thus $A$ is a smooth covariant $2$-tensor field by [L5], as claimed. [step 2.1, step 3.1, L5, given] ∎
