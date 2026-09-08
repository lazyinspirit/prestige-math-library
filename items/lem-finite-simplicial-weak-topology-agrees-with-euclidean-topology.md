---
id: lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology
kind: lemma
title: "Finite simplicial weak topology agrees with euclidean topology"
status: published
origin: pipeline
deps: ["def-geometric-realization-of-an-abstract-simplicial-complex", "thm-heine-borel-rn"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

For finite $K$, the weak topology on $|K|$ equals the Euclidean subspace topology in $\mathbb R^{V(K)}$; $|K|$ is compact, metrizable and Hausdorff. If $P$ is a finite subcomplex of any $K$, then $|P|\hookrightarrow|K|$ is a closed embedding, with that same finite Euclidean topology.

## Source locators

2C.1 proof, p.178; direct closed-cover verification.


## Facts & Assumptions

[F1] Weak openness is tested on every Euclidean simplex. [[def-geometric-realization-of-an-abstract-simplicial-complex]].

[F2] A closed bounded subset of a positive finite-dimensional Euclidean space is compact. [[thm-heine-borel-rn]].


## Proof

**Given:** A simplicial complex $K$ and, for the last assertion, a finite subcomplex $P$.

1.1 In a finite nonempty vertex set, each simplex is defined by nonnegative coordinates, sum $1$, and zero coordinates outside its face. It is closed and bounded in the ambient finite-dimensional Euclidean space, hence compact. The finite union $|K|$ is also closed and bounded, hence compact by Heine–Borel. If $K$ has no vertices its realization is empty and compact directly. [F1, F2]

2.1 If $E\subseteq|K|$ is weakly closed, then $E\cap|\sigma|$ is closed in the Euclidean simplex, and thus closed in the ambient Euclidean space since $|\sigma|$ is closed. Their finite union is $E$, so $E$ is Euclidean closed. Conversely, a Euclidean relatively closed $E$ has closed traces on every simplex and is weakly closed. Consequently both topologies agree, and the Euclidean metric and Hausdorff property restrict to $|K|$. [F1, step 1.1]

3.1 For finite $P\subseteq K$ and closed $E\subseteq|P|$, write $E=\bigcup_{\sigma\in P}(E\cap|\sigma|)$. For any $\tau\in K$, each summand meets $|\tau|$ in a closed subset of the common face $|\sigma\cap\tau|$, hence in a closed subset of $|\tau|$. There are finitely many summands, so $E$ is weakly closed in $|K|$. Conversely an ambient weakly closed set has closed traces on the simplices of $P$. These two implications show that the inclusion induces exactly the topology of $|P|$ and is closed; taking $E=|P|$ proves the closed-image assertion. [F1, step 2.1] ∎
