---
id: lem-induction-image-is-an-ideal-in-the-representation-ring
kind: lemma
title: "The cyclic induction subgroup is an ideal of the character ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cyclic-induction-subgroup, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]
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
    - title: "Tammo tom Dieck, Representation Theory, Section 4.5"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Janos Kramar, Artin's and Brauer's Theorems on Induced Characters, Lemma 1"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf"
---

## Statement

Let $G$ be a finite group. Then the cyclic induction subgroup
$I_{\mathrm{cyc}}(G)\subseteq R(G)$ is an ideal of the character ring $R(G)$.

## Facts & Assumptions

**Given:** A finite group $G$, an element $x\in I_{\mathrm{cyc}}(G)$, and an
element $\psi\in R(G)$.

[F1] By definition, $I_{\mathrm{cyc}}(G)$ consists of finite sums
$\sum_i\operatorname{Ind}_{C_i}^G(\theta_i)$ with each $C_i\le G$ cyclic and
each $\theta_i\in R(C_i)$ ([[def-cyclic-induction-subgroup]]).

[F2] Induction and restriction satisfy the projection formula:
$\operatorname{Ind}_H^G(\chi\,\operatorname{Res}_H^G\psi)=
(\operatorname{Ind}_H^G\chi)\psi$
([[prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], write $x=\sum_{i=1}^r\operatorname{Ind}_{C_i}^G(\theta_i)$ with each $C_i\le G$ cyclic and each $\theta_i\in R(C_i)$. [F1, given]

2.1 Multiplying by $\psi$ and applying [F2] termwise gives $x\psi=\sum_{i=1}^r\bigl(\operatorname{Ind}_{C_i}^G(\theta_i)\bigr)\psi=\sum_{i=1}^r\operatorname{Ind}_{C_i}^G\!\bigl(\theta_i\operatorname{Res}_{C_i}^G\psi\bigr)$. Each factor $\theta_i\operatorname{Res}_{C_i}^G\psi$ lies in $R(C_i)$, so every summand on the right again belongs to $I_{\mathrm{cyc}}(G)$ by [F1]. [F1, F2, step 1.1, algebra]

3.1 Therefore $x\psi\in I_{\mathrm{cyc}}(G)$. Since $x\in I_{\mathrm{cyc}}(G)$ and $\psi\in R(G)$ were arbitrary, $I_{\mathrm{cyc}}(G)$ is an ideal of $R(G)$. [step 2.1] ∎
