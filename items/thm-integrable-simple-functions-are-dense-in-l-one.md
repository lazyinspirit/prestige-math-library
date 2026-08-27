---
id: thm-integrable-simple-functions-are-dense-in-l-one
kind: theorem
title: "Integrable simple functions are dense in $L^1(\\mu)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, def-integrable-real-and-complex-functions-and-their-integrals, thm-dominated-convergence, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.26"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

For every $f\in L^1(\mu)$ there is a sequence of integrable simple functions
$(s_n)$ such that
$$\int|f-s_n|\,d\mu\longrightarrow0.$$

## Facts & Assumptions

**Given:** An integrable function $f$.

[L1] Every nonnegative measurable function is the increasing limit of simple measurable functions ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]).

[L2] Real and complex integrability are defined in [[def-integrable-real-and-complex-functions-and-their-integrals]].

[L3] Dominated convergence gives $L^1$ convergence under an integrable majorant ([[thm-dominated-convergence]]).

[L4] The nonnegative integral is additive, monotone, and homogeneous ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f$ is real-valued. Choose simple $u_n\uparrow f^+$ and $v_n\uparrow f^-$ by [L1], and put $s_n:=u_n-v_n$. Then $s_n$ is an integrable simple function and $$|f-s_n|=(f^+-u_n)+(f^--v_n)\downarrow0,$$ with $|f-s_n|\le|f|$. By [L3], $\int|f-s_n|\,d\mu\to0$. [L1, L2, L3, construct]

2.1 For complex $f=u+iv$, apply step 1.1 separately to $u$ and $v$ to obtain real simple functions $p_n,q_n$ with $$\int|u-p_n|\,d\mu\to0,\qquad \int|v-q_n|\,d\mu\to0.$$ Set $s_n:=p_n+iq_n$. Then $s_n$ is a simple integrable function and $$|f-s_n|\le|u-p_n|+|v-q_n|.$$ By [L4], $$\int|f-s_n|\,d\mu\le\int|u-p_n|\,d\mu+\int|v-q_n|\,d\mu\longrightarrow0,$$ so $(s_n)$ converges to $f$ in $L^1$. [step 1.1, L2, L4] ∎
