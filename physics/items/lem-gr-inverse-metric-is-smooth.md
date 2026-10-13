---
id: lem-gr-inverse-metric-is-smooth
kind: lemma
title: "Smoothness and transformation of the inverse-metric components"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law, lem-matrix-inversion-preserves-ck-regularity, cor-inverse-matrix-by-adjugate, thm-chain-rule-for-total-derivatives, def-total-derivative-in-euclidean-space, def-smoothly-compatible-charts]
dependency_roles:
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  lem-matrix-inversion-preserves-ck-regularity: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-smoothly-compatible-charts: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.1 on the inverse metric, printed pp. 25-26 (PDF pp. 26-27)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), the transformation law of the metric (2.35), printed p. 50 (PDF p. 57)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.1.3, printed pp. 94-96 (PDF pp. 101-103)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$g_p^{-1}$ and $g^{ab}$ be the inverse metric and its chart components as in
[[def-gr-inverse-metric-and-musical-isomorphisms]]. Then:

1. For every smooth chart $(U,x)$ the component functions $g^{ab}:U\to\mathbb R$
   are $C^\infty$ on $U$.
2. For overlapping smooth charts $(U,x)$, $(V,y)$ the components satisfy the
   contravariant transformation law

$$g'^{ab}(u)=\sum_{c,d=0}^{3}\frac{\partial y^a}{\partial x^c}\bigl(x(u)\bigr)\, \frac{\partial y^b}{\partial x^d}\bigl(x(u)\bigr)\,g^{cd}\bigl(x(u)\bigr),\qquad u\in y(U\cap V),$$

where every component evaluated at a coordinate tuple is its coordinate
representative, as in [[def-gr-smooth-covariant-two-tensor-field]],
$x(u)$ denotes $(x\circ y^{-1})(u)$, and $\partial y^a/\partial x^c$ are
the entries of $D(y\circ x^{-1})$.

3. Consequently the pointwise bilinear forms $g_p^{-1}$ on $T_p^*M$ are
   presented by component functions that are smooth in every chart and glue by
   the contravariant law; the inverse metric is a well-defined smooth component
   family determined by $g$ alone.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ and
smooth charts $(U,x)$, $(V,y)$ with $U\cap V\neq\varnothing$.

[L1] In a chart, $g^{ab}(q)$ are the entries of the inverse matrix of $(g_{ab}(q))$, so that $g^{ac}g_{cb}=\delta^a{}_b$, and $g_{ab}$ are $C^\infty$ on $U$ with $\det(g_{ab}(q))\neq0$ for every $q$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-covariant-two-tensor-field]]).

[L2] If the entries of a square matrix-valued map $A:U\to M_4(\mathbb R)$ on an open set are $C^r$ and $\det A$ never vanishes, then the entries of $A^{-1}$ are $C^r$; for an invertible matrix $A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$ ([[lem-matrix-inversion-preserves-ck-regularity]], [[cor-inverse-matrix-by-adjugate]]).

[L3] For overlapping smooth charts, the covariant components of a smooth covariant $2$-tensor field satisfy $g'_{ab}(y)=\sum_{c,d}\frac{\partial x^c}{\partial y^a}(y)\frac{\partial x^d}{\partial y^b}(y)g_{cd}(x(y))$, where the entries are those of $D(x\circ y^{-1})(y)$ ([[lem-gr-covariant-two-tensor-transformation-law]]).

[L4] For composable totally differentiable maps, $D(g\circ f)=Dg\circ Df$ ([[thm-chain-rule-for-total-derivatives]]); the identity map is totally differentiable with $D(\operatorname{id})=I$, since the identity is a linear map satisfying the defining limit ([[def-total-derivative-in-euclidean-space]]).

[L5] Overlapping smooth charts have smooth transition maps $x\circ y^{-1}$ and $y\circ x^{-1}$, whose total derivatives are computed from the coordinate functions ([[def-smoothly-compatible-charts]]).

## Proof

**Proof technique:** direct.

1.1 Let $(U,x)$ be a smooth chart. By [L1] the component functions $g_{ab}$ are $C^\infty$ on $U$ and $\det(g_{ab}(q))\neq0$ for every $q\in U$, because $g_q$ is nondegenerate; hence the coordinate representative $z\mapsto(g_{ab}(x^{-1}(z)))$ on the open Euclidean set $x(U)$ is $C^\infty$ with nowhere-vanishing determinant, and by [L2] the entries of its inverse at each $q$, namely $g^{ab}(q)$ by [L1], are $C^\infty$ on $U$. [L1, L2, given]

1.2 Let $p\in U\cap V$ and put $y_0:=y(p)$. Write $J:=D(x\circ y^{-1})(y_0)$ for the Jacobian of the transition with entries $J^c{}_a=\frac{\partial x^c}{\partial y^a}(y_0)$, so that by [L3] the covariant components are related by the matrix equation $G'(y_0)=J^{\mathsf T}G(x(p))J$ with $G=(g_{cd})$, $G'=(g'_{ab})$. [L3, algebra]

1.3 The transition $y\circ x^{-1}$ is smooth by [L5] and $(y\circ x^{-1})\circ(x\circ y^{-1})=\operatorname{id}$ on $y(U\cap V)$; applying [L4] at $y_0$ gives $D(y\circ x^{-1})(x(p))\circ D(x\circ y^{-1})(y_0)=D(\operatorname{id})(y_0)=I$, so $J$ is invertible with inverse the matrix of entries $\frac{\partial y^a}{\partial x^c}(x(p))$. [L4, L5, algebra]

2.1 Inverting the matrix equation of step 1.2 and using step 1.3 gives $G'(y_0)^{-1}=J^{-1}G(x(p))^{-1}J^{-\mathsf T}$, that is $g'^{ab}(y_0)=\sum_{c,d}\frac{\partial y^a}{\partial x^c}(x(p))\frac{\partial y^b}{\partial x^d}(x(p))g^{cd}(x(p))$, which is the contravariant transformation law of claim 2. [step 1.2, step 1.3, algebra]

3.1 The chart $(U,x)$ in step 1.1 was arbitrary, so claim 1 holds in every chart, and step 2.1 holds for every pair of overlapping charts, so claim 2 holds as well. Since the functions $g^{ab}$ were defined from the pointwise bilinear form $g_q^{-1}$ by evaluation on the dual coordinate covectors, and the two claims show that the resulting component functions are smooth and related by the contravariant law in all charts, the inverse metric is a well-defined smooth component family determined by $g$ alone, which is claim 3. [step 1.1, step 2.1, given] ∎
