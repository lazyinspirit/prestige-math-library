---
id: lem-geometric-simplices-intersect-in-the-realization-of-their-common-face
kind: lemma
title: "Geometric simplices intersect in the realization of their common face"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-realization-of-an-abstract-simplicial-complex, lem-barycentric-coordinates-are-unique]
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

If $\sigma,\tau \in K$, then the corresponding geometric simplices in $|K|$
satisfy
$$|\sigma| \cap |\tau| = |\sigma \cap \tau|.$$

## Proof

**Given:** Two simplices $\sigma,\tau$ in an abstract simplicial complex $K$.

1.1 Let $x \in |\sigma| \cap |\tau|$. Viewed as a barycentric-coordinate function on the full vertex set of $K$, the support of $x$ is contained in $\sigma$ because $x \in |\sigma|$, and it is contained in $\tau$ because $x \in |\tau|$. Hence $\operatorname{supp}(x)\subseteq \sigma \cap \tau$, so $x \in |\sigma \cap \tau|$. [given]

1.2 Conversely, if $x \in |\sigma \cap \tau|$, then $\operatorname{supp}(x)\subseteq \sigma \cap \tau$, so in particular $\operatorname{supp}(x)\subseteq \sigma$ and $\operatorname{supp}(x)\subseteq \tau$. Therefore $x \in |\sigma| \cap |\tau|$. [given]

2.1 Steps 1.1 and 1.2 prove the two inclusions, so the two sets are equal. [step 1.1, step 1.2] ∎
