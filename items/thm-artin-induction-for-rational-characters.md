---
id: thm-artin-induction-for-rational-characters
kind: theorem
title: "Artin induction for rational characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-rational-character-ring, def-cyclic-induction-subgroup, lem-induction-image-is-an-ideal-in-the-representation-ring, lem-artin-cyclic-permutation-relation, prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]
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
    - title: "Tammo tom Dieck, Representation Theory, Theorem (4.5.2)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Janos Kramar, Artin's and Brauer's Theorems on Induced Characters, Theorem 1"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf"
    - title: "Kay Yang, Rational Valued Characters, Theorem 3"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/kayyang.pdf"
---

## Statement

Let $G$ be a finite group, and let $x\in R_{\mathbb Q}(G)$ in the sense of
[[def-rational-character-ring]]. Then:

1. $x$ is a rational linear combination of characters induced from cyclic
   subgroups of $G$.
2. Equivalently, the controlled multiple $|G|x$ lies in the cyclic induction
   subgroup $I_{\mathrm{cyc}}(G)$.

## Facts & Assumptions

**Given:** A finite group $G$ and an element $x\in R_{\mathbb Q}(G)$.

[F1] The cyclic induction subgroup $I_{\mathrm{cyc}}(G)$ is an ideal of $R(G)$
([[lem-induction-image-is-an-ideal-in-the-representation-ring]]).

[F2] The trivial character satisfies an Artin relation
$|G|1_G=\sum_i a_i\operatorname{Ind}_{C_i}^G1_{C_i}$ with $C_i\le G$ cyclic and
$a_i\in\mathbb Z$ ([[lem-artin-cyclic-permutation-relation]]).

[F3] The projection formula says
$\bigl(\operatorname{Ind}_H^G\chi\bigr)\psi=
\operatorname{Ind}_H^G(\chi\,\operatorname{Res}_H^G\psi)$
([[prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings]]).

[A1] If a finite-dimensional representation is defined over $\mathbb Q$, then
its restriction to a subgroup is again defined over $\mathbb Q$.

## Proof

**Proof technique:** direct.

1.1 By [F2], choose cyclic subgroups $C_i\le G$ and integers $a_i$ with $|G|1_G=\sum_i a_i\operatorname{Ind}_{C_i}^G1_{C_i}$. Multiplying by $x$ in $R(G)$ gives $|G|x=\sum_i a_i\bigl(\operatorname{Ind}_{C_i}^G1_{C_i}\bigr)x$. Because [F1] makes $I_{\mathrm{cyc}}(G)$ an ideal containing each $\operatorname{Ind}_{C_i}^G1_{C_i}$, this already shows $|G|x\in I_{\mathrm{cyc}}(G)$. [F1, F2, given, algebra]

2.1 Applying [F3] to each summand of step 1.1 yields $|G|x=\sum_i a_i\operatorname{Ind}_{C_i}^G(\operatorname{Res}_{C_i}^Gx)$. By [A1], each $\operatorname{Res}_{C_i}^Gx$ again lies in the rational representation ring of the cyclic subgroup $C_i$. This identity is an explicit expression of $|G|x$ as a sum of characters induced from cyclic subgroups. [F3, A1, step 1.1, algebra]

3.1 Dividing the identity of step 2.1 by $|G|$ expresses $x$ as a rational linear combination of characters induced from cyclic subgroups of $G$. This is claim 1. [step 2.1, algebra]

4.1 Conversely, if $x$ is any rational linear combination of characters induced from cyclic subgroups, then multiplying by a common positive denominator places that multiple of $x$ in $I_{\mathrm{cyc}}(G)$. Step 1.1 shows that one may take the specific controlled denominator $|G|$, so claims 1 and 2 are equivalent. [F1, step 1.1, step 3.1, algebra] ∎
