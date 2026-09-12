---
id: "def-topological-manifold-with-and-without-boundary"
kind: "definition"
title: "Topological manifolds with and without boundary"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-hausdorff-space","def-countable","def-topology-basis-subbasis","def-subspace-topology-top"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Fix an integer $n\ge0$. For $n\ge1$, let $\mathbb R^n_+=\{(t_1,\ldots,t_n):t_n\ge0\}$, with the subspace topology of [[def-subspace-topology-top]], and let its model boundary be $\{t_n=0\}$. For $n=0$ use the one-point space $\mathbb R^0$ and stipulate that its model boundary is empty.

An **$n$-dimensional topological manifold with boundary** is a Hausdorff space $M$, in the sense of [[def-hausdorff-space]], which has a countable basis of open sets and for which every point has an open neighborhood $U$ with a homeomorphism $h:U\to V$, where $V$ is open in $\mathbb R^n_+$. Here countable means at most countable, including finite and empty, as in [[def-countable]], and basis means the open-set basis of [[def-topology-basis-subbasis]]. The pair $(U,h)$ is a **chart**. Homeomorphism means a bijection continuous in both directions.

Define $\partial M$ to be the set of points sent into the model boundary by at least one such chart, and define $\operatorname{int}M=M\setminus\partial M$. This is an unambiguous subset: the quantifier ranges over all charts, rather than over a chosen atlas. The subsequent local-homology theorem proves the stronger assertion that every chart agrees about boundary membership, and proves that this convention agrees with the locally Euclidean definition of a manifold without boundary. That assertion is not assumed in the definition of the subset.

A **manifold without boundary**, or **boundaryless manifold**, is one for which $\partial M=\varnothing$. Such a manifold is locally Euclidean directly: at any point choose a chart, whose image point lies strictly above the hyperplane, then restrict to a Euclidean ball lying in its image and above that hyperplane. For $n=0$ each chart domain is a singleton; hence the space is discrete and its boundary is empty by convention.

Connectedness and nonemptiness are not required. The empty space satisfies the definition for every specified $n$ and has empty boundary; its dimension label cannot be recovered from its underlying space. A point is a zero-dimensional example. All chart choices in this definition are individual existential hypotheses, not a simultaneous choice of charts or an application of AC.
