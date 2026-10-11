---
id: def-morphisms-and-polarizability-of-rational-hodge-structures
kind: definition
title: "Morphisms, polarizability and simplicity of rational Hodge structures"
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pierre Deligne, Théorie de Hodge II, Publications mathématiques de l'IHÉS 40 (1971), 5-57; (2.1.10)-(2.1.17), (2.2.1) and Lemme (4.2.3)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
verification:
  precheck: n/a
---

## Definition

With the conventions of
[[def-compact-kahler-manifold-and-hodge-polarization-conventions]], all
structures in this item are rational pure Hodge structures
$(V,\{V^{p,q}\})$, $V_{\mathbb C}=\bigoplus_{p+q=k}V^{p,q}$, of one fixed
weight $k$; write $f_{\mathbb C}$ for the $\mathbb C$-linear extension of a
$\mathbb Q$-linear map.

A **morphism of Hodge structures** $f:(V,\{V^{p,q}\})\to(W,\{W^{p,q}\})$ is a
$\mathbb Q$-linear map $f:V\to W$ whose $\mathbb C$-linear extension satisfies
$$f_{\mathbb C}(V^{p,q})\subseteq W^{p,q}\qquad(p+q=k).$$
**Kernels and images** of such a morphism are again rational sub-Hodge
structures: writing $x=\sum_{p+q=k}x^{p,q}$ with $x^{p,q}\in V^{p,q}$, the
relation $0=f_{\mathbb C}(x)=\sum_{p+q=k}f_{\mathbb C}(x^{p,q})$ with
$f_{\mathbb C}(x^{p,q})\in W^{p,q}$ forces $f_{\mathbb C}(x^{p,q})=0$ for every
$(p,q)$, because the sum decomposition of $W_{\mathbb C}$ is direct, so
$$\ker(f_{\mathbb C})=\bigoplus_{p+q=k}\bigl(\ker(f_{\mathbb C})\cap V^{p,q}\bigr);$$
and $\operatorname{im}(f_{\mathbb C})=\sum_{p+q=k}f_{\mathbb C}(V^{p,q})$ is
direct, since $f_{\mathbb C}(V^{p,q})\subseteq W^{p,q}$ and the target
bidegrees of a direct sum are distinct, so
$$\operatorname{im}(f_{\mathbb C})=\bigoplus_{p+q=k}\bigl(\operatorname{im}(f_{\mathbb C})\cap W^{p,q}\bigr).$$
The **direct sum** $V\oplus W$ is the Hodge structure of the same weight $k$
with $(V\oplus W)^{p,q}=V^{p,q}\oplus W^{p,q}$, the inclusions and projections
being morphisms.

A **short exact sequence** $0\to U\xrightarrow{\,i\,}V\xrightarrow{\,\pi\,}W\to0$
of Hodge structures of weight $k$ consists of morphisms that are exact as a
sequence of $\mathbb Q$-vector spaces. It **splits** in the category of Hodge
structures if $\pi$ admits a morphism $s:W\to V$ with
$\pi\circ s=\operatorname{id}_W$. A Hodge structure is **polarizable** if it
admits a polarization, and **simple** if it has no nonzero proper rational
sub-Hodge structure, that is, no $\mathbb Q$-subspace $U\subseteq V$ with
$U\ne0,V$ and
$U_{\mathbb C}=\bigoplus_{p+q=k}(U_{\mathbb C}\cap V^{p,q})$.

## Remarks

- This item records, in the pure weight-$k$ case, the morphism, direct-sum,
  short-exact-sequence, polarizability and simplicity vocabulary of Deligne's
  $\mathbb Q$-Hodge structures, *Théorie de Hodge II*, (2.1.10)-(2.1.17) and
  (2.2.1); the orthogonal splitting of polarized Hodge structures is proved on
  this page. It is deliberately not routed through the mixed Hodge structures
  of another page of this build, which lie outside this page's prerequisite
  closure.
- The only assertions recorded beyond the definitions are the componentwise
  closure claims for kernels and images, checked in the Definition above by the
  directness of the bidegree decompositions; no proof phase applies to a
  definition. Choice-free: the item fixes definitions and verifies
  componentwise linear algebra over a fixed finite-dimensional structure, and
  no choice principle is used.
