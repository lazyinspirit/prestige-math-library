---
id: lem-boundary-tori-circle-bundle-pants-punctured-mobius-pi1-injective
kind: lemma
title: "Boundary tori inject into the circle-bundle group"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Lemma 1.16 proof, printed pp.20–21"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, Seifert pieces in the torus decomposition, PDF pp.2–4"
---

## Statement

Let $B$ be either a pair of pants or a once-punctured Möbius band, and let $p:N\to B$ be a circle bundle whose total space is orientable. For each boundary torus $T$ of $N$, the inclusion $T\hookrightarrow N$ induces an injective homomorphism $\pi_1(T)\to\pi_1(N)$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Lemma 1.16 proof](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** A circle bundle $p:N\to B$ over a pair of pants or once-punctured Möbius band, with orientable total space, and a boundary torus $T$ of $N$.

[F1] A Seifert fibration is locally a circle bundle away from exceptional fibers ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F2] A fibration has the long exact sequence of homotopy groups, so when $\pi_2(B)=0$ the fiber group injects into the total-space group and its image is the kernel of projection ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], Statement).

## Proof

1.1 Each of the two possible bases has nonempty boundary and deformation-retracts to a graph, so $\pi_2(B)=0$. The homotopy exact sequence [F2] therefore injects the fiber subgroup $\pi_1(S^1)\cong\mathbb Z$ into $\pi_1(N)$, with image the kernel of $p_*:\pi_1(N)\to\pi_1(B)$. [F1, F2, given, algebra]

1.2 The fundamental group of a pair of pants is free on two generators $a,b$, and its three boundary loops represent $a$, $b$, and $(ab)^{-1}$, each of infinite order. The once-punctured Möbius band has free generators $x,c_1$ and boundary loops represented by $c_1$ and $c_1^{-1}x^{-2}$; both are nontrivial cyclically reduced words and have infinite order in the free group. Thus every boundary circle of $B$ injects on fundamental groups. [given, algebra]

2.1 The restriction $T\to\partial B$ is a circle bundle over a circle, hence induces a surjection $\pi_1(T)\to\pi_1(\partial B)$. If $g\in\pi_1(T)$ maps trivially to $\pi_1(N)$, its projection is a power of the corresponding boundary loop and is trivial in $\pi_1(B)$; step 1.2 forces that power to be zero. Therefore $g$ lies in the fiber subgroup, whose inclusion into $\pi_1(N)$ is injective by step 1.1, so $g=1$. This proves that $\pi_1(T)\to\pi_1(N)$ is injective. [F1, F2, step 1.1, step 1.2, algebra] ∎
