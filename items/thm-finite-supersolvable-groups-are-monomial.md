---
id: thm-finite-supersolvable-groups-are-monomial
kind: theorem
title: Finite supersolvable groups are monomial
status: draft
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup, lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup, lem-monomiality-lifts-along-a-quotient, thm-transitivity-of-induction-for-finite-groups, thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one]
proof_strategy: induction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Theorem 4.3.1
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Every finite supersolvable group is monomial.

## Facts & Assumptions

[F1] The cited prerequisite is [[prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup]].

## Proof

**Given:** $G$ is finite supersolvable and $\chi\in\operatorname{Irr}(G)$.

1.1 Induct on $|G|$. The trivial group is the base case. If $G$ is abelian, $\chi$ is linear. If $\ker\chi\ne1$, then $G/\ker\chi$ is supersolvable of smaller order and the quotient lemma makes $\chi$ monomial. [F1, given, base, ih]

2.1 Otherwise $\chi$ is faithful. A nonabelian $G$ has a noncentral normal abelian subgroup, so the proper-inertia proposition writes $\chi=\operatorname{Ind}_H^G\theta$ with $H<G$ and $\theta\in\operatorname{Irr}(H)$. Intersecting a supersolvable series with $H$ and deleting repeated terms makes $H$ supersolvable; by the induction hypothesis, $\theta$ is induced from a linear character, and transitivity makes $\chi$ so induced. $\square$ [step 1.1, discharge-induction]
