---
id: thm-jantzen-sum-formula-for-a-verma-module
kind: theorem
title: "The Jantzen sum formula for a Verma module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jantzen-deformation-and-filtration-of-a-verma-module, thm-shapovalov-determinant-formula, prop-formal-character-of-a-verma-module]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercises 20.11–20.12"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For every $\lambda$,
$$\sum_{i>0}\operatorname{ch}M^i(\lambda)=\sum_{\alpha\in\Phi^+}\ \sum_{\substack{n>0\\\langle\lambda+\rho,\alpha^\vee\rangle=n}}\operatorname{ch}M(s_\alpha\mathbin\cdot\lambda).$$

## Facts & Assumptions

**Given:** The filtration [[def-jantzen-deformation-and-filtration-of-a-verma-module]], the Shapovalov determinant formula [[thm-shapovalov-determinant-formula]], and the Verma character [[prop-formal-character-of-a-verma-module]].

## Proof

**Proof technique:** direct.

1.1 On a finite free weight block, Smith normal form has diagonal entries $t^{a_j}u_j(t)$. Both the order of its determinant and $\sum_{i>0}\dim M^i(\lambda)_{\lambda-\beta}$ equal $\sum_j a_j$: each $a_j$ contributes once for each $1\le i\le a_j$. [given, algebra]

2.1 Substitute the determinant formula along $\lambda+t\rho$. Its order at $t=0$ in the $\lambda-\beta$ block is $\sum_{\alpha,n:\langle\lambda+\rho,\alpha^\vee\rangle=n}K(\beta-n\alpha)$, exactly the coefficient of that weight in the right-hand character sum. Equality coefficientwise for every $\beta$ proves the formula. [step 1.1, algebra] ∎
