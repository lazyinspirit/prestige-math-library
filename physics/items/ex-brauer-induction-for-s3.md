---
id: ex-brauer-induction-for-s3
kind: example
title: Brauer induction for $S_3$
status: published
origin: pipeline
deps: [thm-brauer-induction, def-p-elementary-and-p-hyperelementary-finite-groups, thm-frobenius-formula-for-induced-characters]
proof_strategy: direct
verification:
  audited: 2026-09-06
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

## Example

Let $T\cong C_2$ and $A\cong C_3$ in $S_3$, let $\epsilon$ be the sign character, and let $\rho$ be the degree-two irreducible. If $\omega$ is either nontrivial linear character of $A$, then
$$\rho=\operatorname{Ind}_A^{S_3}\omega,$$
$$1_{S_3}=\operatorname{Ind}_T^{S_3}1_T-\operatorname{Ind}_A^{S_3}\omega,\qquad\epsilon=\operatorname{Ind}_T^{S_3}\operatorname{sgn}_T-\operatorname{Ind}_A^{S_3}\omega.$$

## Facts & Assumptions

[F1] The cited prerequisite is [[thm-frobenius-formula-for-induced-characters]].

## Verification

**Given:** the values of $1,\epsilon,\rho$ on the classes $1,(12),(123)$.

1.1 Frobenius' formula gives $\operatorname{Ind}_T1_T=1+\rho$, $\operatorname{Ind}_T\operatorname{sgn}_T=\epsilon+\rho$, and $\operatorname{Ind}_A\omega=\rho$ by evaluating on those three classes. [F1, given]

2.1 Subtract the final equality from the first two. Both $T$ and $A$ are elementary, so these are integral Brauer-induction expressions. ∎ [step 1.1]
