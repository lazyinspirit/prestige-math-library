---
id: lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup
kind: lemma
title: A nonabelian supersolvable group has a noncentral normal abelian subgroup
status: draft
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, def-normal-subgroup, def-quotient-group]
proof_strategy: direct
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Lemma 4.3.3
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Every nonabelian finite supersolvable group has an abelian normal subgroup that is not central.

## Facts & Assumptions

[F1] The cited prerequisite is [[def-supersolvable-groups-and-monomial-characters]].

## Proof

**Given:** $1=G_0\triangleleft\cdots\triangleleft G_r=G$ is a supersolvable series.

1.1 Let $i$ be maximal with $G_i$ abelian. If $i=r$, $G$ is abelian, so $i<r$. By maximality there is $g\in G$ not commuting with some $a\in G_i$. [F1, given]

2.1 Since $G_i\triangleleft G$, it is an abelian normal subgroup, while the chosen $g,a$ show that it is not central. $\square$ [step 1.1]
