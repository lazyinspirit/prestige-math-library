---
id: def-gr-tensor-fields-and-components
kind: definition
title: "Tensor fields of type (r,s) on a Lorentzian four-manifold and their components"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-type-r-s-tensor-on-a-finite-dimensional-vector-space, def-type-r-s-tensor-bundle, def-smooth-tensor-field, thm-tensor-transition-laws-define-a-smooth-vector-bundle, def-derivation-at-a-point-and-tangent-space, def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-coordinate-differentials-form-the-dual-cotangent-basis, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-type-r-s-tensor-on-a-finite-dimensional-vector-space: mathematical-premise
  def-type-r-s-tensor-bundle: mathematical-premise
  def-smooth-tensor-field: mathematical-premise
  thm-tensor-transition-laws-define-a-smooth-vector-bundle: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-coordinate-differentials-form-the-dual-cotangent-basis: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'tensors', 'tensor products' and 'index manipulation' on components, contraction and raising and lowering (printed pp. 14-19; PDF pp. 21-26) and Ch. 2 'vectors as derivatives', 'coordinate bases' and 'the tensor transformation law' (printed pp. 44-48; PDF pp. 51-55)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 1.6-1.8 on abstract index notation, tensors, tensor fields, components and coordinate changes, printed pp. 15-21 (PDF pp. 16-22)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 12 'Tensors and Tensor Fields on Manifolds' (tensor bundles, sections and components), printed pp. 316-324"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $r,s\ge0$ be integers.

**(a) Tensors at a point.** For $p\in M$, the tangent space $T_pM$ is the real
vector space of derivations at $p$
([[def-derivation-at-a-point-and-tangent-space]]) and the cotangent space is
its algebraic dual, $T_p^*M=(T_pM)^*$
([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]). A **type
$(r,s)$ tensor at $p$** is a multilinear map

$$T_p:(T_p^*M)^r\times(T_pM)^s\longrightarrow\mathbb R,$$

in the sense of [[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]:
the first $r$ arguments are covectors and the last $s$ are vectors. In
particular a type $(1,0)$ tensor is a vector, a type $(0,1)$ tensor is a
covector and a type $(0,2)$ tensor is a bilinear form, so the covariant
$2$-tensors of [[def-gr-smooth-covariant-two-tensor-field]] are exactly the
type $(0,2)$ tensors of this definition.

**(b) The tensor bundle and smooth fields.** The **type $(r,s)$ tensor bundle**
$T^r_sM$ is the disjoint union of the fibres $T^r_sM|_p=\operatorname{Mult}((T_p^*M)^r\times(T_pM)^s,\mathbb R)$
over $p\in M$ ([[def-type-r-s-tensor-bundle]]); it carries the smooth
vector-bundle structure defined by the tensor-coordinate change rules
([[thm-tensor-transition-laws-define-a-smooth-vector-bundle]]). A **smooth
tensor field of type $(r,s)$** on $M$ is a family $T=(T_p)_{p\in M}$ assigning
to each $p$ a type $(r,s)$ tensor at $p$, such that for every smooth chart
$(U,x)$ of the maximal smooth atlas the **component functions**

$$T^{a_1\cdots a_r}{}_{b_1\cdots b_s}(q):=T_q\bigl(dx^{a_1}|_q,\dots,dx^{a_r}|_q,\ \partial_{b_1}|_q,\dots,\partial_{b_s}|_q\bigr),\qquad q\in U,$$

are $C^\infty$ on $U$; here the coordinate derivations
$\partial_b|_q=\partial/\partial x^b|_q$ form a basis of $T_qM$
([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]) and the
coordinate differentials $dx^a|_q$ form the dual basis of $T_q^*M$
([[thm-coordinate-differentials-form-the-dual-cotangent-basis]]). This is
equivalent to $T$ being a smooth section of $T^r_sM$ in the sense of
[[def-smooth-tensor-field]]: the component functions are the frame
coefficients of the section in the local frame induced by the chart. The
smoothness condition is independent of the chosen smooth atlas and the
components in two overlapping charts are related by the transformation law
proved in the lemma on this page; the definition is therefore chart
independent rather than merely chart-wise.

**(c) Index conventions.** Indices are written $a,b,c,\dots$ for components in
a chart, with the Einstein summation convention: a repeated index, once upper
and once lower, is summed over $0,1,2,3$. An upper index is a contravariant
slot in which a covector is evaluated, a lower index a covariant slot in which
a vector is evaluated. Slots are moved between these positions with the
musical isomorphisms $\flat_p,\sharp_p$ of
[[def-gr-inverse-metric-and-musical-isomorphisms]] to change slot variance.
For example, if $T$ is a type $(1,1)$ field, lowering its contravariant slot
gives the type $(0,2)$ field with components $T_{ab}:=g_{ac}T^c{}_b$; if $S$
is a type $(0,2)$ field, raising its first covariant slot gives the type
$(1,1)$ field with components $S^a{}_b:=g^{ac}S_{cb}$. Each operation changes
the tensor type and is invertible because $g_p$ is nondegenerate.

**(d) Scope.** The definition is purely local and chart-based; no global
triviality of $T^r_sM$, no global frame and no choice of metric-compatible
fields is assumed or implied. All fields are smooth ($C^\infty$); no
lower-regularity or distributional tensor field is defined here. The smooth
structure of the tangent bundle, and hence of $T^r_sM$
([[thm-tensor-transition-laws-define-a-smooth-vector-bundle]]), inherits the
axiom $\mathrm{AC}_\omega$ of [[def-countable-choice]] recorded with
[[def-gr-smooth-lorentzian-objects]]; the component formulation of smoothness
itself makes no choice.
