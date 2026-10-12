---
id: def-gr-smooth-covariant-two-tensor-field
kind: definition
title: "Smooth covariant 2-tensor fields on a smooth manifold"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-smooth-manifold, def-smooth-atlas, def-smoothly-compatible-charts, def-derivation-at-a-point-and-tangent-space, def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-smooth-manifold: mathematical-premise
  def-smooth-atlas: mathematical-premise
  def-smoothly-compatible-charts: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
justified_by: [lem-gr-covariant-two-tensor-transformation-law]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2, 'the metric again' and the tensor transformation law, printed pp. 47-51 (PDF pp. 54-58)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 1.7-1.8 on tensors and tensor fields, printed pp. 16-21 (PDF pp. 17-22)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 12 (tensor fields on manifolds)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 2.3.3 on tensors and tensor fields, printed pp. 72-75 (PDF pp. 79-82)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $M$ be a smooth $n$-manifold ([[def-smooth-manifold]]), with smooth atlas
$\mathcal A$ and maximal smooth atlas $[\mathcal A]$
([[def-smooth-atlas]], [[def-smoothly-compatible-charts]]). For $p\in M$ the
tangent space $T_pM$ is the real vector space of derivations at $p$
([[def-derivation-at-a-point-and-tangent-space]]), and the cotangent space is its
algebraic dual $T_p^*M:=(T_pM)^*$
([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]).

A **covariant $2$-tensor at $p$** is a bilinear map
$A_p:T_pM\times T_pM\to\mathbb R$. It is **symmetric** when
$A_p(v,w)=A_p(w,v)$ for all $v,w\in T_pM$, and **nondegenerate** when the only
$v\in T_pM$ with $A_p(v,w)=0$ for all $w\in T_pM$ is $v=0$.

A **smooth covariant $2$-tensor field on $M$** is a family $A=(A_p)_{p\in M}$
assigning to each $p$ a covariant $2$-tensor $A_p$ at $p$, such that for every
chart $(U,x)$ of the maximal smooth atlas $[\mathcal A]$ the **component
functions**

$$A_{ab}(q):=A_q\!\left(\frac{\partial}{\partial x^a}\Big|_q,\ \frac{\partial}{\partial x^b}\Big|_q\right),\qquad q\in U,$$

are $C^\infty$ on $U$. Here $\partial/\partial x^a|_q$ is the coordinate
derivation at $q$ ([[def-derivation-at-a-point-and-tangent-space]],
[[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]), the index
ranges over the label set $I_n=\{1,\dots,n\}$ (or the relabelled set
$I_4=\{0,1,2,3\}$ when $n=4$), and smoothness of the real-valued functions
$A_{ab}$ on the open set $U\subseteq M$ is the notion of
[[def-c-r-and-smooth-maps-between-smooth-manifolds]] applied to $M$ and
$\mathbb R$.

For a coordinate tuple $z\in x(U)$ define the **coordinate representative**
$A^x_{ab}(z):=A_{ab}(x^{-1}(z))$. When the argument is a coordinate tuple,
$A_{ab}(z)$ abbreviates this representative in the named chart; when it is a
point of $M$, it denotes the component function on the chart domain. Thus
$A_{ab}(x(y^{-1}(u)))$ in a change-of-coordinates formula means
$A^x_{ab}((x\circ y^{-1})(u))$, never evaluation of a function on $M$ at a
tuple. For $n=4$, $x^a$ and $\partial_a$ mean the original coordinate and
derivation labelled $a+1$, respectively; this relabels every slot and sum.
The label $0$ alone gives no coordinate vector a causal character.

Because the coordinate derivations at $q$ form a basis of $T_qM$
([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]), specifying
$A$ is the same as specifying the matrix of component functions in each chart;
[[lem-gr-covariant-two-tensor-transformation-law]] proves that the smoothness
requirement is independent of the chart used, so that the condition may be
checked on any smooth atlas of $M$, and derives the transformation law relating
components in two overlapping charts.

The field is **symmetric** when $A_p$ is symmetric for every $p\in M$, which in
a chart is the identity $A_{ab}=A_{ba}$ of component functions; it is
**nondegenerate** when $A_p$ is nondegenerate for every $p$, which in a chart is
the nonvanishing at every point of the polynomial function
$\det(A_{ab})$ of the components. The **matrix** of $A$ in a chart means the
matrix $\bigl(A_{ab}(q)\bigr)$ of its component functions at $q$.

**Convention.** In the four-dimensional case $n=4$ used in this library, indices
are $a,b,c,d=0,1,2,3$ with $0$ the time-coordinate label when such a coordinate is chosen, and we write
$A_{ab}$ for the components. A covariant $2$-tensor field is also called a
**$(0,2)$ tensor field**.

## Remarks

**Convention pointer.** The abstract-index reading of the display
$A_{ab}=A_q(\partial_a|_q,\partial_b|_q)$ and the signature convention of this
library are fixed for the Lorentzian case in
[[def-gr-smooth-lorentzian-objects]] on this page.
