---
id: lem-a-compact-surface-metric-extends-across-its-boundary
kind: lemma
title: Extending a compact surface metric across its boundary
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-double-of-a-smooth-manifold-with-boundary
  - thm-the-double-has-a-well-defined-smooth-structure
  - cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - def-riemannian-metric-and-riemannian-manifold
  - def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Panagiotis Polymerakis, On the spectrum of differential operators under Riemannian coverings
      url: "https://pure.mpg.de/rest/items/item_3237954_3/component/file_3558141/content?download=true"
      locator: "Section 3, Lemma 3.2, printed p. 8 (PDF p. 12): extend metric components locally, shrink until positive definite, and patch extensions with a partition of unity. The paper uses an attached boundary cylinder rather than the labelled double used here."
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a compact smooth surface with boundary
and let $g$ be a smooth Riemannian metric on $M$. In the smooth double $DM$, the
metric on either chosen labelled copy extends to a smooth Riemannian metric on
an open neighbourhood of that copy.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a compact smooth surface $M$ with boundary, and a smooth Riemannian metric $g$ on $M$. We use the smooth structure on its labelled double supplied by the double theorem.

[F1] Assuming $\mathrm{AC}_\omega$, collar seam charts and the original interior charts give the labelled double a smooth boundaryless structure ([[thm-the-double-has-a-well-defined-smooth-structure]]).

[F2] A smooth tensor field on a manifold with boundary extends smoothly across each boundary point to some neighbourhood in its double ([[cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary]]).

[F3] Assuming $\mathrm{AC}_\omega$, every open cover of a smooth manifold has a smooth partition of unity subordinate to it ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F4] A Riemannian metric is a smooth symmetric covariant two-tensor that is positive on every nonzero tangent vector ([[def-riemannian-metric-and-riemannian-manifold]]).

[F5] A subordinate partition has functions in $[0,1]$, supports inside the cover members, and pointwise sum one ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[F6] The double is the labelled disjoint union with corresponding boundary points identified; if the boundary is empty, the two copies remain disjoint ([[def-double-of-a-smooth-manifold-with-boundary]]).

[A1] $\mathrm{AC}_\omega$ asserts that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Write $M_+$ for the chosen labelled copy and $B=\partial M_+$. If $M=\varnothing$, then $M_+=\varnothing$ is open in $DM$ and the unique empty tensor is its own extension. More generally, if $B$ is empty, the double is the disjoint union of its labelled copies, so $M_+$ is open even when it is disconnected; $g$ itself is the required extension. Otherwise $B$ is closed in the compact space $M_+$ and is compact. The seam charts in [F1] identify $M_+$ locally with a closed half-space in $DM$, and its interior $M_+^\circ$ is open in $DM$. [given, F1, F6, construct]

1.2 For each $b\in B$, [F2] gives a covariant two-tensor extension $h_b$ of $g$ on some open neighbourhood of $b$ in $DM$. Replace $h_b$ by its symmetric part $(h_b+h_b^{\mathsf T})/2$; this remains smooth and still equals $g$ on the original half-space. At $b$ it is positive definite by [F4]. In a local frame, the positive quadratic form has a positive minimum on the Euclidean unit circle; continuity of its finitely many coefficients therefore keeps it positive definite after shrinking the neighbourhood. Thus every $b$ has an open neighbourhood $U$ with a smooth positive-definite symmetric extension $g_U$ agreeing with $g$ on $U\cap M_+$. [F2, F4, construct]

2.1 The family of all such neighbourhoods covers the compact set $B$, so choose a finite subcover $U_1,\ldots,U_m$ and corresponding extensions $g_1,\ldots,g_m$; these are only finitely many selections. Set $O=\bigcup_{i=1}^m U_i$. Apply [F3] to the open cover $(U_i)_{i=1}^m$ of the smooth manifold $O$, obtaining a smooth partition $(\rho_i)_{i=1}^m$. By [F5], each product $\rho_i g_i$ extends by zero outside $U_i$ smoothly because $\operatorname{supp}\rho_i\subseteq U_i$. Consequently $G=\sum_i\rho_i g_i$ is a smooth symmetric tensor on $O$. For every nonzero tangent vector $v$ at $x\in O$, each term with positive weight satisfies $g_i(v,v)>0$, at least one weight is positive, and the weights sum to one; hence $G_x(v,v)>0$. On $O\cap M_+$ every $g_i$ agrees with $g$, so $G=g$ there. [F3, F4, F5, step 1.2, choose]

3.1 The open set $N=O\cup M_+^\circ$ contains the whole copy $M_+$, since $B\subset O$. On $O$ use $G$, and on $M_+^\circ$ use the original metric $g$. These tensors agree on their overlap by step 2.1, so they glue to a smooth Riemannian metric on $N$ extending $g$. This proves the claim. The exact $\mathrm{AC}_\omega$ uses are invoking [F1] for the smooth double and [F3] for its partition of unity; the finite subcover and finite local extension selections use only finite choice. [A1, F1, F3, step 1.1, step 2.1] ∎

## Source locator

Polymerakis, *On the spectrum of differential operators under Riemannian coverings*, Section 3, Lemma 3.2, printed p. 8 (PDF p. 12), gives the same local metric-extension mechanism: extend the metric coefficients across the boundary, shrink until the matrix remains positive definite, and patch with a partition of unity. Its ambient manifold is built by attaching a boundary cylinder; the double-specific neighbourhood and gluing argument above is supplied here.
