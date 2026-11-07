---
id: ex-exceptional-density-factor-when-no-siegel-zero
kind: example
title: The density factor is one when there is no exceptional zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - thm-thorner-zaman-exception-sensitive-hecke-zero-density
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct substitution into the exceptional-sensitive density factor
axiom_use: AC, Countable Choice, and Dependent Choice are inherited through the density theorem supplier; the substitution adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
      url: https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf
      locator: Theorem 3.2, printed p. 1051; equation (3-5) and its no-exception convention.
---

## Example

In the setting of the exception-sensitive Hecke zero-density estimate, suppose the character family has no exceptional real simple zero. By the theorem's stated convention the exceptional factor is $B_1=1$, so the estimate becomes $\sum_{\chi\in\widehat G}N(\sigma,T,\chi)\ll(\mathcal Q T^{n_K})^{c_5(1-\sigma)}$ for every $0<\sigma<1$ and $T\ge1$.

## Example references

[[thm-thorner-zaman-exception-sensitive-hecke-zero-density|Exception-sensitive density theorem]]

## Facts & Assumptions

**Given:** AC, Countable Choice, and Dependent Choice, an abelian Hecke-character family with no exceptional real simple zero, and $0<\sigma<1$, $T\ge1$.

[F1] When no exceptional zero exists, the theorem defines its factor by the convention $B_1=1$. [[thm-thorner-zaman-exception-sensitive-hecke-zero-density]]

[A1] AC, Countable Choice, and Dependent Choice are inherited through the density theorem supplier; the substitution uses no additional axiom. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]



**Given:** The example's hypotheses.

## Verification

**Proof technique:** direct.

1.1 Since the family has no exceptional zero, its indicator in the corrected density count is zero and the no-exception branch of [F1] substitutes $B_1=1$. [F1, given, algebra]

2.1 The remaining factor is therefore exactly $(\mathcal Q T^{n_K})^{c_5(1-\sigma)}$, with the same range and implied constant as the theorem. [F1, step 1.1, algebra] ∎

## Proof status

The no-exception substitution is complete: the exceptional-occurrence indicator vanishes and the factor is exactly one. Its theorem supplier now has a complete local proof at the same choice scope.
