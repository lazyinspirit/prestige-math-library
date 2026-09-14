---
id: def-vector-bundle-map-section-subbundle-and-isomorphism
kind: definition
title: Bundle maps, sections, subbundles, and isomorphisms
status: draft
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Bundle maps, sections, and subbundles, printed pp.8–11"
    - title: "Milnor and Stasheff, Characteristic Classes, §§2–3"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Bundle maps and subbundles, printed pp.14–24"
---

## Definition

For vector bundles $p:E\to X$ and $p':E'\to Y$, a **vector-bundle map
over** $f:X\to Y$ is a continuous map $T:E\to E'$ satisfying
$p'T=fp$ whose restriction $E_x\to E'_{f(x)}$ is linear for every $x$.
A **bundle isomorphism** is an invertible bundle map over the identity of the
base.

A **section** is a continuous $s:X\to E$ with $ps=\operatorname{id}_X$.
It is **nowhere zero** if $s(x)\ne0_x$ for all $x$.

A subset $E'\subseteq E$ is a **rank-$r$ vector subbundle** when each
$E'_x$ is an $r$-dimensional linear subspace and every point has a bundle
chart carrying $E'|_U$ to
$U\times(\mathbb F^r\times\{0\})\subseteq U\times\mathbb F^n$.
Thus constant fiber dimension alone does not replace local triviality.

A sequence
$$0\longrightarrow E'\xrightarrow{i}E\xrightarrow{q}E''\longrightarrow0$$
is **short exact over $X$** when its maps lie over $\operatorname{id}_X$,
the sequence on each fiber is exact, and the kernel and image have the stated
subbundle structures. These conventions refine
[[def-real-and-complex-topological-vector-bundle]].
