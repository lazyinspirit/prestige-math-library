---
id: lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices
kind: lemma
title: "Compact subsets of an arbitrary simplicial realization meet finitely many open simplices"
status: draft
origin: pipeline
deps: ["def-geometric-realization-of-an-abstract-simplicial-complex", "thm-closed-subspace-of-a-compact-space-is-compact", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
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

Assume the Axiom of Countable Choice. For any simplicial complex $K$ with weak topology, every compact $C\subseteq|K|$ meets only finitely many open simplices, and is contained in a finite subcomplex. Consequently the images of a finite family of continuous maps from compact simplices lie in one finite subcomplex. No local finiteness is assumed.

## Source locators

Appendix Proposition A.1, p.520.


## Facts & Assumptions

[F1] Countable independent families of nonempty sets admit a choice function. [[def-countable-choice]].

[F2] Support faces are finite and weak closedness is tested on simplices. [[def-geometric-realization-of-an-abstract-simplicial-complex]].

[F3] Closed subsets of compact spaces and finite unions of compact subsets are compact. [[thm-closed-subspace-of-a-compact-space-is-compact]].


## Proof

**Given:** Countable Choice, an arbitrary $K$, and compact $C\subseteq|K|$.

1.1 If the set $J$ of open simplices meeting $C$ were infinite, for each positive integer $n$ let $X_n$ be the nonempty set of ordered $n$-tuples of points of $C$ with distinct support faces. Countable Choice selects one tuple for each $n$. Flatten these finite tuples into a sequence and retain, in their natural order, the first point in each previously unseen support face. There are infinitely many retained points since the tuple of length $n$ supplies $n$ different faces. This gives a sequence $q_j$ in distinct open simplices, using only the stated countable independent choices and least-index deletions. [F1, F2]

2.1 A closed simplex $|\tau|$ has finitely many faces. Each retained point in it has a distinct support face contained in $\tau$, so it contains only finitely many $q_j$. Every subset of $Q=\{q_j:j\geq1\}$ consequently has finite closed trace on every simplex and is weakly closed in $|K|$. Thus $Q$ is closed in $C$ and its subspace topology is discrete. Closedness in compact $C$ makes $Q$ compact, whereas its singleton open cover has no finite subcover. This contradiction proves $J$ finite. [F2, F3, step 1.1]

3.1 Include all faces of the finitely many simplices in $J$ to obtain a finite subcomplex containing $C$; if $C$ is empty use the vertex-free subcomplex. A continuous image of a compact simplex is compact because any open cover pulls back to an open cover with a finite subcover. A finite union of these images is compact, so the preceding conclusion applies to the entire family at once, including an empty family. [F3, step 2.1] ∎

