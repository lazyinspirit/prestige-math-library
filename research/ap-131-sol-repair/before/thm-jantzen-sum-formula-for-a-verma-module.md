---
id: thm-jantzen-sum-formula-for-a-verma-module
kind: theorem
title: "The Jantzen sum formula for a Verma module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jantzen-deformation-and-filtration-of-a-verma-module, thm-shapovalov-determinant-formula, prop-formal-character-of-a-verma-module, prop-weyl-vector-is-the-sum-of-fundamental-weights, def-coroot-and-dual-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
proof_strategy: direct
verification:
  precheck: pass
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

[F1] The Weyl vector pairs to $1$ with every simple coroot ([[prop-weyl-vector-is-the-sum-of-fundamental-weights]]). Every positive root has a nonzero nonnegative integral expansion $\alpha=\sum_i n_i\alpha_i$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]). Since $\alpha^\vee=2\alpha/(\alpha,\alpha)$ ([[def-coroot-and-dual-root-system]]), one has $(\rho,\alpha_i)=(\alpha_i,\alpha_i)/2>0$ and hence $\langle\rho,\alpha^\vee\rangle=2(\rho,\alpha)/(\alpha,\alpha)>0$ for every positive root $\alpha$.

## Proof

**Proof technique:** direct.

1.1 On a finite free weight block over $\mathbb C\llbracket t\rrbracket$, the determinant formula and [F1] show that the deformed determinant is a nonzero power series: every factor is either a nonzero constant plus a linear term or a nonzero linear term. Smith normal form therefore has nonzero diagonal entries $t^{a_j}u_j(t)$ with $u_j(0)\ne0$. Both the order of its determinant and $\sum_{i>0}\dim M^i(\lambda)_{\lambda-\beta}$ equal $\sum_j a_j$: each $a_j$ contributes once for each $1\le i\le a_j$. [given, F1, algebra]

2.1 Substitute the determinant formula along $\lambda+t\rho$. For each factor $\langle\lambda+t\rho+\rho,\alpha^\vee\rangle-n$, [F1] makes its $t$-coefficient nonzero, so it contributes valuation one exactly when $\langle\lambda+\rho,\alpha^\vee\rangle=n$ and zero otherwise. Thus the determinant order in the $\lambda-\beta$ block is $\sum_{\alpha,n:\langle\lambda+\rho,\alpha^\vee\rangle=n}K(\beta-n\alpha)$, exactly the coefficient of that weight in the right-hand character sum. Equality coefficientwise for every $\beta$ proves the formula, conditional on the determinant supplier. [given, F1, step 1.1, algebra] ∎
