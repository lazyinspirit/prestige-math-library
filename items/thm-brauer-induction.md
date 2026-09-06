---
id: thm-brauer-induction
kind: theorem
title: Brauer induction
status: published
origin: pipeline
deps: [def-p-elementary-and-p-hyperelementary-finite-groups, def-induction-ideal-of-a-family-of-subgroups, lem-induction-ideal-of-a-subgroup-family-is-an-ideal, lem-elementary-detection-at-a-fixed-element, lem-p-elementary-characters-are-induced-from-linear-characters, thm-transitivity-of-induction-for-finite-groups]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Wen-Wei Li, Yanqi Lake Lectures on Algebra I, Theorem 14.3.1 and Corollary 14.3.2 (Lecture 14.3, PDF pp. 168–170)
      url: https://www.wwli.asia/downloads/YAlg1.pdf
    - title: János Kramár, Artin's and Brauer's Theorems on Induced Characters, Theorem 2
      url: https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

For every finite group $G$, every complex virtual character of $G$ is an integral linear combination of characters $\operatorname{Ind}_H^G\lambda$, where $H$ is $p$-elementary for some prime $p$ and $\lambda$ is a linear complex character of $H$.

## Facts & Assumptions

[F1] The elementary detection relation is [[lem-elementary-detection-at-a-fixed-element]].

[F2] Elementary induction subgroups are ideals by [[lem-induction-ideal-of-a-subgroup-family-is-an-ideal]].

[F3] Characters of elementary groups reduce integrally to induced linear characters by [[lem-p-elementary-characters-are-induced-from-linear-characters]].

[F4] Induction is transitive by [[thm-transitivity-of-induction-for-finite-groups]].

## Proof

**Given:** $\mathcal E$ is the family of all elementary subgroups of $G$, and $I_{\mathcal E}(G)$ is its induction ideal.

1.1 If $G$ is trivial, the assertion is immediate. Otherwise, for every prime $p\mid |G|$, write $|G|=p^{n_p}l_p$ with $p\nmid l_p$. By [F1], $l_p1_G\in I_{\mathcal E_p}(G)\subseteq I_{\mathcal E}(G)$. The integers $l_p$ have greatest common divisor $1$: for each prime divisor $q$ of $|G|$, the particular integer $l_q$ is prime to $q$. Bézout therefore gives $1_G\in I_{\mathcal E}(G)$. [F1, given, algebra]

2.1 By [F2], every $\chi\in R(G)$ satisfies $\chi=\chi 1_G\in I_{\mathcal E}(G)$. Thus it is an integral sum of characters $\operatorname{Ind}_H^G\theta$ with $H$ elementary and $\theta\in R(H)$. [F2, step 1.1]

3.1 By [F3], each such $\theta$ is an integral combination of characters induced from linear characters of elementary subgroups $K\le H$. Transitivity [F4] changes $\operatorname{Ind}_H^G\operatorname{Ind}_K^H\lambda$ into $\operatorname{Ind}_K^G\lambda$, which is exactly the claimed form. ∎ [F3, F4, step 2.1]
