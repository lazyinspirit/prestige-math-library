---
id: lem-the-realization-of-a-simplicial-map-is-continuous-and-functorial
kind: lemma
title: "The realization of a simplicial map is continuous and functorial"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-simplicial-map-and-its-geometric-realization, lem-geometric-simplices-intersect-in-the-realization-of-their-common-face]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Statement

If $f:K \to L$ is a simplicial map, then $|f|:|K| \to |L|$ is continuous. In
addition, $|\operatorname{id}_K|=\operatorname{id}_{|K|}$ and
$|g \circ f| = |g| \circ |f|$ for composable simplicial maps.

## Proof

**Given:** A simplicial map $f:K \to L$ and, for functoriality, a second simplicial map $g:L \to M$.

1.1 If $\sigma=\{v_0,\dots,v_n\}$ is a simplex of $K$ and $x\in|\sigma|$ has barycentric coordinates $x=\sum_{i=0}^n \lambda_i v_i$, then
$$|f|(x)=\sum_{i=0}^n \lambda_i f(v_i).$$
Thus the restriction $|f||_{|\sigma|}:|\sigma|\to|f(\sigma)|$ is the affine map determined by the vertex map $f$, so it is continuous. [given]

1.2 For every barycentric function $\alpha$, the identity vertex map leaves every coefficient unchanged, so $|\operatorname{id}_K|(\alpha)=\alpha$. Likewise $|g \circ f|(\alpha)(u)=\sum_{w \in g^{-1}(u)}\sum_{v \in f^{-1}(w)} \alpha(v)=|g|(|f|(\alpha))(u)$, so realizations preserve composition. [given]

2.1 If $\sigma$ and $\tau$ meet, then they meet along $|\sigma \cap \tau|$, and the affine formulas from step 1.1 agree there because they are both determined by the same vertex map $f$. Since $|K|$ carries the weak topology with respect to its simplices, these simplexwise affine maps patch to a continuous map $|f|:|K|\to|L|$. [step 1.1]

3.1 Steps 2.1 and 1.2 give continuity and the identity/composition laws. [step 2.1, step 1.2] ∎
