---
id: def-pullback-vector-bundle-and-pullback-section
kind: definition
title: Pullback vector bundles and sections
status: draft
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, def-vector-bundle-map-section-subbundle-and-isomorphism, def-subspace-topology-top]
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
      locator: "Pullback bundles, printed pp.9–10"
    - title: "Milnor and Stasheff, Characteristic Classes, §3"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Induced bundles, printed pp.20–22"
---

## Definition

Given a continuous map $f:X\to Y$ and a vector bundle $q:E\to Y$, its **pullback** is

$$f^*E=\{(x,e)\in X\times E:f(x)=q(e)\},\qquad (x,e)\longmapsto x,$$

with the subspace topology of [[def-subspace-topology-top]] and fiberwise
operations inherited from $E$. A linear chart
$q^{-1}(U)\cong U\times\mathbb F^n$ pulls back to
$f^{-1}(U)\times\mathbb F^n$, so this is a vector bundle in the sense of
[[def-real-and-complex-topological-vector-bundle]].

The map $(x,e)\mapsto e$ is the canonical bundle map $f^*E\to E$ over $f$
in the sense of [[def-vector-bundle-map-section-subbundle-and-isomorphism]].
If $s:Y\to E$ is a section, its pullback is

$$f^*s:X\longrightarrow f^*E,\qquad x\longmapsto(x,s(f(x))).$$
