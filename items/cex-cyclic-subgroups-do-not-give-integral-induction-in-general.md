---
id: cex-cyclic-subgroups-do-not-give-integral-induction-in-general
kind: counterexample
title: Cyclic subgroups do not suffice for integral induction
status: draft
origin: pipeline
deps: [def-cyclic-induction-subgroup, def-virtual-character-and-character-ring-of-a-finite-group, thm-frobenius-formula-for-induced-characters]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Section 4.6
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement refuted

Every virtual character is an integral linear combination of characters induced from cyclic subgroups.

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-frobenius-formula-for-induced-characters]].

## Counterexample

Take $G=A_5$. The trivial character $1_G$ is not in the integral cyclic induction subgroup.

**Given:** cyclic subgroups of $A_5$ have orders $1,2,3,$ or $5$.

1.1 If $K\leq A_5$ is cyclic and $\lambda$ is linear, then $\operatorname{Ind}_K^{A_5}\lambda(1)=[A_5:K]$, which is respectively $60,30,20,$ or $12$. [F1, given]

2.1 Every integral combination of such induced characters has even degree at $1$, whereas $1_G(1)=1$. Thus $1_G$ cannot be such a combination. $\square$ [step 1.1]
