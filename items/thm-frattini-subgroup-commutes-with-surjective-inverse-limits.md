---
id: thm-frattini-subgroup-commutes-with-surjective-inverse-limits
kind: theorem
title: "For surjective inverse systems in the pro-p setting, the Frattini subgroup commutes with the inverse limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-profinite-group, lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open, def-coordinate-projections-from-an-inverse-limit]
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

Let $G=\varprojlim_i G_i$ be a surjective inverse limit of finite $p$-groups,
with coordinate projections $\pi_i:G\to G_i$. Then

$$\Phi(G)=\{x\in G:\pi_i(x)\in\Phi(G_i)\text{ for every }i\}\cong \varprojlim_i \Phi(G_i).$$

## Facts & Assumptions

**Given:** A surjective inverse system of finite $p$-groups with inverse limit $G$.

[F1] The Frattini subgroup is the intersection of maximal proper closed
subgroups ([[def-frattini-subgroup-of-a-profinite-group]]).

[L1] In a profinite group, maximal proper closed subgroups are open
([[lem-maximal-proper-closed-subgroups-of-a-profinite-group-are-open]]).

[L2] The inverse limit has coordinate projections $\pi_i$
([[def-coordinate-projections-from-an-inverse-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L1], $\Phi(G)$ is the intersection of the maximal open subgroups of $G$. If $M_i$ is a maximal subgroup of some finite quotient $G_i$, then $\pi_i^{-1}(M_i)$ is a maximal open subgroup of $G$. Conversely, every maximal open subgroup $U$ of $G$ contains the kernel of some coordinate projection, so $U=\pi_i^{-1}(M_i)$ for a maximal subgroup $M_i<G_i$. [F1, L1, L2, given, algebra]

2.1 Therefore an element $x\in G$ lies in $\Phi(G)$ exactly when $\pi_i(x)$ lies in every maximal subgroup of every finite quotient $G_i$, that is, exactly when $\pi_i(x)\in\Phi(G_i)$ for every $i$. The coordinatewise condition defines the inverse limit of the subgroups $\Phi(G_i)$, so $\Phi(G)\cong\varprojlim_i\Phi(G_i)$. [F1, step 1.1, algebra] ∎
