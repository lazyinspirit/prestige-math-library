---
id: cor-cyclic-local-integrality-criterion
kind: corollary
title: "Cyclic restrictions force a bounded denominator in the rational representation ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-rational-character-ring, lem-artin-cyclic-permutation-relation, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings, def-virtual-character-and-character-ring-of-a-finite-group]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Proposition (4.5.5)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Statement

Let $G$ be a finite group and let $x\in R_{\mathbb Q}(G)$. Suppose that
$\operatorname{Res}_C^Gx\in R(C)$ for every cyclic subgroup $C\le G$. Then

$$|G|x\in R(G).$$

## Facts & Assumptions

**Given:** A finite group $G$ and an element $x\in R_{\mathbb Q}(G)$ whose
restriction to every cyclic subgroup lies in the integral character ring of that
subgroup.

[F1] There is an Artin relation
$|G|1_G=\sum_i a_i\operatorname{Ind}_{C_i}^G1_{C_i}$ with $C_i\le G$ cyclic and
$a_i\in\mathbb Z$ ([[lem-artin-cyclic-permutation-relation]]).

[F2] Induction and restriction satisfy the projection formula:
$\bigl(\operatorname{Ind}_H^G\chi\bigr)\psi=
\operatorname{Ind}_H^G(\chi\,\operatorname{Res}_H^G\psi)$
([[prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]]).

[F3] The integral character ring $R(G)$ is closed under integral linear
combinations ([[def-virtual-character-and-character-ring-of-a-finite-group]]).

[A1] If $\theta$ is an honest complex character of a subgroup $C\le G$, then
$\operatorname{Ind}_C^G\theta$ is an honest complex character of $G$; hence
induction sends $R(C)$ into $R(G)$ by $\mathbb Z$-linearity.

## Proof

**Proof technique:** direct.

1.1 Choose cyclic subgroups $C_i\le G$ and integers $a_i$ with $|G|1_G=\sum_i a_i\operatorname{Ind}_{C_i}^G1_{C_i}$ as in [F1]. Multiplying by $x$ in $R(G)\otimes_{\mathbb Z}\mathbb Q$ gives $|G|x=\sum_i a_i\bigl(\operatorname{Ind}_{C_i}^G1_{C_i}\bigr)x$. [F1, given]

2.1 Applying [F2] termwise to the identity of step 1.1 yields $|G|x=\sum_i a_i\operatorname{Ind}_{C_i}^G(\operatorname{Res}_{C_i}^Gx)$. By hypothesis each $\operatorname{Res}_{C_i}^Gx$ lies in $R(C_i)$, so [A1] places every induced summand in $R(G)$. Since $R(G)$ is closed under integral linear combinations, the whole right-hand side lies in $R(G)$. [F2, F3, step 1.1, algebra]

3.1 Therefore $|G|x\in R(G)$, as claimed. [step 2.1] ∎
