---
id: prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure
kind: proposition
title: "An open subset of a smooth manifold has a canonical restricted smooth structure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-manifold, def-smooth-atlas,
       thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas,
       def-subspace-topology-top, def-manifold-chart-coordinate-domain-and-coordinate-functions,
       def-smoothly-compatible-charts, lem-t0-t1-and-hausdorff-are-hereditary,
       prop-second-countability-is-hereditary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $(M,\mathcal S)$ be a smooth $n$-manifold and let $U\subseteq M$ be open,
carrying the subspace topology. Then $U$ is a topological $n$-manifold. For
every smooth atlas $\mathcal A$ with $[\mathcal A]=\mathcal S$, the family of
restricted charts

$$\mathcal A|_U:=\bigl\{\,\bigl(V\cap U,\ \varphi|_{V\cap U}\bigr):(V,\varphi)\in\mathcal A\,\bigr\}.$$

is a smooth atlas on $U$, and the maximal atlas it generates is independent of
the presenting atlas $\mathcal A$: it depends only on the structure
$\mathcal S$. This maximal atlas is the **restricted smooth structure** of $U$.

## Facts & Assumptions

**Given:** A smooth $n$-manifold $(M,\mathcal S)$, an open subset $U\subseteq M$, and a smooth atlas $\mathcal A$ with $[\mathcal A]=\mathcal S$.

[F1] The open sets of the subspace $U$ are exactly the traces $O\cap U$ of open sets of $M$ ([[def-subspace-topology-top]]).

[F2] A chart $(V,\varphi)$ has $V$ open in $M$ and $\varphi:V\to\varphi(V)$ a homeomorphism onto an open subset of $\mathbb R^n$ ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

[F3] Hausdorffness and second countability are hereditary ([[lem-t0-t1-and-hausdorff-are-hereditary]], [[prop-second-countability-is-hereditary]]).

[F4] Two charts are smoothly compatible when their domains are disjoint or both transition maps are smooth ([[def-smoothly-compatible-charts]]).

[F5] A smooth atlas is a family of charts whose domains cover the space and whose members are pairwise smoothly compatible ([[def-smooth-atlas]]).

[L1] Two smooth atlases generate the same maximal atlas exactly when their union is a smooth atlas ([[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).

[A1] If $V$ is open in $M$ and $U$ is open in $M$, then $V\cap U$ is open in the subspace $U$, its image $\varphi(V\cap U)$ is open in $\mathbb R^n$, and the restriction $\varphi|_{V\cap U}:V\cap U\to\varphi(V\cap U)$ is a homeomorphism.

## Proof

**Proof technique:** direct.

1.1 $U$ is Hausdorff and second countable by [F3]. For $p\in U$ choose a chart $(V,\varphi)$ of a smooth atlas of $M$ with $p\in V$, which exists because atlases cover $M$ by [F5]; by [F1] and [A1] the set $V\cap U$ is open in $U$, its image $\varphi(V\cap U)$ is open in $\mathbb R^n$, and $\varphi|_{V\cap U}:V\cap U\to\varphi(V\cap U)$ is a homeomorphism. Hence $U$ is locally Euclidean of dimension $n$ and is a topological $n$-manifold. [given, F3, F5, F1, A1]

1.2 Each $(V\cap U,\varphi|_{V\cap U})$ is a chart on $U$ by [A1] and [F2], and [given, F2, F5, A1] the domains $V\cap U$ cover $U$ because the domains $V$ of $\mathcal A$ cover $M$ by [F5]. [given, F2, F5, A1]

2.1 For $(V,\varphi),(W,\psi)\in\mathcal A$, the transition of the two [given, F4, F5, step 1.2] restricted charts on $\varphi(V\cap W\cap U)$ is the restriction of $\psi\circ\varphi^{-1}$, which is smooth on $\varphi(V\cap W)$ by [F4] whenever the overlap is nonempty; restricting to the open subset $\varphi(V\cap W\cap U)$ keeps every iterated coordinate derivative existing and continuous, so the restricted transition is smooth. The disjoint-domain clause of [F4] covers the case $V\cap W\cap U=\varnothing$. Hence the members of $\mathcal A|_U$ are pairwise smoothly compatible, and [F5] makes $\mathcal A|_U$ a smooth atlas. [given, F4, F5, step 1.2]

3.1 If $\mathcal B$ is another smooth atlas with [given, F4, L1, step 2.1] $[\mathcal B]=\mathcal S=[\mathcal A]$, then $\mathcal A\cup\mathcal B$ is a smooth atlas by [L1]. Its restrictions give $\mathcal A|_U\cup\mathcal B|_U=(\mathcal A\cup\mathcal B)|_U$, and the cross-pair transitions are restrictions of smooth transitions exactly as in step 2.1, so $\mathcal A|_U\cup\mathcal B|_U$ is a smooth atlas on $U$; applying [L1] to the two restricted atlases yields $[\mathcal A|_U]=[\mathcal B|_U]$. The restricted structure therefore depends only on $\mathcal S$. [given, F4, L1, step 2.1] ∎
