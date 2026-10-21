---
id: lem-knot-exterior-is-irreducible
kind: lemma
title: "A smooth knot exterior is irreducible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-knot-exterior
  - def-countable-choice
  - thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three
proof_strategy: direct
axiom_use: "Assumes countable choice only through the current draft smooth Schoenflies supplier."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology, Chapter 1, Theorem 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
---

## Statement

Assume countable choice. Let $K\subset S^3$ be a smooth knot with a chosen closed tubular neighborhood $N(K)$, and let $E_K=S^3\setminus\operatorname{int}N(K)$. Every smoothly embedded two-sphere in the interior of $E_K$ bounds a smoothly embedded closed three-ball contained in $E_K$.

## Statement references

[[def-knot-exterior|Chosen compact knot exterior]]

[[def-countable-choice|Countable choice]]

[[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three|Smooth Schoenflies in the three-sphere]]

[Hatcher, *Notes on Basic 3-Manifold Topology*, Chapter 1, Theorem 1.1](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

## Facts & Assumptions

**Given:** Countable choice, a smooth knot $K\subset S^3$, its chosen closed tubular neighborhood $N(K)$, and a smooth embedded sphere $S\subset\operatorname{int}E_K$.

[F1] Countable choice is the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F2] Under countable choice, $S$ separates $S^3$ into two components whose closures are smooth three-balls with common boundary $S$ ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

[F3] $E_K=S^3\setminus\operatorname{int}N(K)$, where $N(K)$ is connected and contains $K$ ([[def-knot-exterior]], Definition).

## Proof

1.1 By [F2], $S^3\setminus S$ has two components. The connected set $K$ is disjoint from $S$, so it lies in one component. The connected neighborhood $N(K)$ is also disjoint from $S$ and contains $K$, hence it lies in that same component. [F1, F2, F3, given, algebra]

2.1 The closure of the other component is a smooth three-ball disjoint from $N(K)$, so it is contained in $E_K$ and has boundary $S$. This proves irreducibility of the chosen exterior. [F2, F3, step 1.1] ∎

