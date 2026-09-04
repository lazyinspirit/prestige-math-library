---
id: lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open
kind: lemma
title: "Every maximal proper closed subgroup of a profinite group is open"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-profinite-group, def-profinite-group-by-inverse-limit]
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
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Alexander Lubotzky, Combinatorial group theory for pro-p groups"
      url: "https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups"
---

## Statement

If $H$ is a maximal proper closed subgroup of a profinite group $G$, then $H$
is open.

## Facts & Assumptions

**Given:** A profinite group $G$ and a maximal proper closed subgroup $H<G$.

[F1] The Frattini subgroup is defined by maximal proper closed subgroups ([[def-frattini-subgroup-of-a-profinite-group]]).

[L1] A profinite group is an inverse limit of finite discrete groups ([[def-profinite-group-by-inverse-limit]]).

## Proof

**Proof technique:** direct.

1.1 Choose $x\in G\setminus H$. By [L1], write $G$ as an inverse limit of finite groups and view $H$ as a closed subset of that product. Since $x\notin H$, some cylinder neighbourhood of $x$ misses $H$; equivalently, there is an open normal subgroup $N$ of $G$ such that $xN\cap H=\varnothing$. [L1, given, choose]

2.1 The subgroup $HN$ is open because it is a union of $N$-cosets, and it is closed because it is a finite union of closed cosets. If $HN=G$, then $x=hn$ for some $h\in H$ and $n\in N$, so $h=xn^{-1}\in xN\cap H$, contradicting step 1.1. Thus $HN$ is a proper closed subgroup containing $H$. By maximality of $H$, one must have $HN=H$, hence $N\le H$. Therefore $H$ contains an open neighbourhood of the identity and is itself open. [F1, step 1.1, algebra] ∎
