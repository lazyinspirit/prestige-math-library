---
id: ex-artin-induction-for-a-cyclic-group
kind: example
title: "Artin induction is tautological for a cyclic group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-artin-induction-for-rational-characters, def-generated-subgroup]
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
    - title: "Kay Yang, Rational Valued Characters, Theorem 11"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/kayyang.pdf"
    - title: "Tammo tom Dieck, Representation Theory, Section 4.5"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Example

Let $G=C_n$ be cyclic, and let $x\in R_{\mathbb Q}(C_n)$. Then Artin induction
can be realized with the single cyclic subgroup $C_n$ itself:

$$x=\operatorname{Ind}_{C_n}^{C_n}x.$$

For the trivial character when $n=1$, this specializes to
$1_{C_1}=\operatorname{Ind}_{C_1}^{C_1}1_{C_1}$.

## Facts & Assumptions

**Given:** A cyclic group $C_n=\langle g\rangle$ and an element
$x\in R_{\mathbb Q}(C_n)$.

[F1] Every rational character is a rational linear combination of characters
induced from cyclic subgroups ([[thm-artin-induction-for-rational-characters]]).

[F2] The notation $\langle g\rangle=C_n$ means that $g$ generates the whole
group ([[def-generated-subgroup]]).

## Verification

**Proof technique:** direct.

1.1 By [F2], the whole group $C_n$ is already a cyclic subgroup of itself. Induction from a subgroup to itself is the identity construction, so $\operatorname{Ind}_{C_n}^{C_n}x=x$. Thus the Artin expression can be taken to have one summand, namely the subgroup $C_n$ itself. [F2, given, algebra]

2.1 This realizes the conclusion of [F1] in the most degenerate possible way: no proper cyclic subgroup is needed. If $n=1$ and $x=1_{C_1}$, then step 1.1 gives the displayed trivial-character identity. [F1, step 1.1, algebra] ∎
