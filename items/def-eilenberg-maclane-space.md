---
id: def-eilenberg-maclane-space
kind: definition
title: Eilenberg--Mac Lane space
status: published
origin: pipeline
deps: ["def-higher-homotopy-group-by-based-cubes"]
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Definition 7.19, printed pages 177--178
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 13, Eilenberg--Mac Lane spaces, printed pages 45--46
---

## Definition

Let $n\geq1$.

- For an arbitrary group $G$, an **Eilenberg--Mac Lane space of type $K(G,1)$** is a connected based CW complex $K$ equipped with a specified isomorphism $\pi_1(K)\cong G$ and satisfying $\pi_i(K)=0$ for every $i>1$.
- For an abelian group $A$ and $n\geq2$, an **Eilenberg--Mac Lane space of type $K(A,n)$** is a connected based CW complex $K$ equipped with a specified isomorphism $\pi_n(K)\cong A$ and satisfying $\pi_i(K)=0$ for every positive $i\neq n$.

The notation $K(G,n)$ denotes a chosen model together with its chosen group identification, not a literally unique space. No $K(G,n)$ with nonabelian $G$ and $n\geq2$ is asserted: higher homotopy groups are abelian. The zero-group case is allowed and has the homotopy type of a point.
