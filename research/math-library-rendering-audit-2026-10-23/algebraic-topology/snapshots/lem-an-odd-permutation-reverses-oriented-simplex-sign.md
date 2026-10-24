---
id: lem-an-odd-permutation-reverses-oriented-simplex-sign
kind: lemma
title: "An odd permutation reverses the sign of an oriented simplex"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientation-of-a-simplex]
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
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 03: Homology"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2003%20Homology.pdf"
---

## Statement

If $\pi \in S_{n+1}$ is odd, then
$$[v_{\pi(0)},\dots,v_{\pi(n)}]=-[v_0,\dots,v_n]$$
as oriented simplices.

## Proof

**Given:** An odd permutation $\pi$ of the vertices of an $n$-simplex.

1.1 Every odd permutation is a product of an odd number of transpositions, and each transposition switches the two orientation classes by definition. [given]

2.1 After composing an odd number of such sign reversals, the final ordering represents the opposite orientation class, so its oriented simplex is the negative of the original one. [step 1.1] ∎
