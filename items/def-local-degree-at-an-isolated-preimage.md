---
id: "def-local-degree-at-an-isolated-preimage"
kind: "definition"
title: "Local degree at an isolated preimage"
deps: ["def-degree-of-a-self-map-of-an-oriented-sphere", "thm-excision-for-singular-homology", "thm-long-exact-sequence-of-a-pair-in-singular-homology"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Local degree construction, pp.135–136"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Local degree construction, pp.135–136"
status: "draft"
origin: "pipeline"
justified_by: ["lem-local-sphere-orientations-and-finite-puncture-excision"]
---

## Definition

Let $f:S^n\to S^n$ be continuous, $n\ge1$, with oriented source and target as in [[def-degree-of-a-self-map-of-an-oriented-sphere]]. Suppose $y=f(x)$ and $x$ is isolated in $f^{-1}(y)$. Choose an open neighborhood $U$ of $x$ with $U\cap f^{-1}(y)=\{x\}$. The map of pairs
$$(U,U\setminus\{x\})\longrightarrow(S^n,S^n\setminus\{y\})$$
induces a homomorphism between infinite cyclic groups. Its integer multiplier in the generators restricted from the two global orientation classes is the **local degree** $\deg_x f$.

Excision [[thm-excision-for-singular-homology]] identifies the domain local group with $H_n(S^n,S^n\setminus\{x\};\mathbb Z)$; the pair sequence [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies the global-to-local identification. The following lemma establishes these identifications and independence of the neighborhood.
