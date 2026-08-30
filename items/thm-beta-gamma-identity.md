---
id: thm-beta-gamma-identity
kind: theorem
title: "The Beta-Gamma identity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euler-beta-function,
       def-euler-gamma-function,
       thm-euler-gamma-function-is-holomorphic,
       thm-holomorphic-parameter-riemann-integral,
       thm-real-beta-gamma-identity,
       thm-complex-gamma-restricts-to-the-real-gamma-function,
       thm-identity-theorem-holomorphic-functions,
       thm-weierstrass-convergence-holomorphic-functions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(vi)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "M. Weber, Complex Analysis, §3.7"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

For $\operatorname{Re}p>0$ and $\operatorname{Re}q>0$,

$$B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}.$$

## Facts & Assumptions

**Given:** Complex numbers $p,q$ with positive real parts.

[L1] The real Beta-Gamma identity holds for positive real parameters ([[thm-real-beta-gamma-identity]]).

[L2] On positive real arguments, the complex Gamma function agrees with the real Gamma function ([[thm-complex-gamma-restricts-to-the-real-gamma-function]]).

[L3] If two holomorphic functions on a complex domain agree on a set with an accumulation point, then they agree everywhere ([[thm-identity-theorem-holomorphic-functions]]).

[L4] Finite-interval parameter integrals of holomorphic kernels are holomorphic ([[thm-holomorphic-parameter-riemann-integral]]).

[L5] Gamma is holomorphic on the right half-plane ([[thm-euler-gamma-function-is-holomorphic]]).

[L6] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L7] Euler's Beta and Gamma functions are defined by their classical integrals ([[def-euler-beta-function]], [[def-euler-gamma-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real number $q_0>0$. For $n\ge2$, define $$B_n(p):=\int_{1/n}^{1-1/n} t^{p-1}(1-t)^{q_0-1}\,dt.$$ By [L4], each $B_n$ is holomorphic on $\operatorname{Re}p>0$. On a compact set $K\subseteq\{p:\operatorname{Re}p>0\}$ choose $a>0$ with $\operatorname{Re}p\ge a$ on $K$; then the omitted tails are dominated by $t^{a-1}(1-t)^{q_0-1}$ near $0$ and by $(1-t)^{q_0-1}$ near $1$, so $B_n\to B(\,\cdot\,,q_0)$ locally uniformly on $\operatorname{Re}p>0$. Hence [L6] makes $p\mapsto B(p,q_0)$ holomorphic there. [given, L4, L6, L7]

2.1 The function $$H_{q_0}(p):=\Gamma(p+q_0)B(p,q_0)-\Gamma(p)\Gamma(q_0)$$ is holomorphic on $\operatorname{Re}p>0$ by step 1.1 and [L5]. If $p>0$ is real, then [L1] and [L2] identify the complex and real formulas, so $H_{q_0}(p)=0$. The positive real axis has an accumulation point in the right half-plane, so [L3] gives $H_{q_0}\equiv0$. Thus $$\Gamma(p+q_0)B(p,q_0)=\Gamma(p)\Gamma(q_0)\qquad(\operatorname{Re}p>0,\ q_0>0\text{ real}).$$ [step 1.1, L1, L2, L3, L5]

3.1 Now fix $p$ with $\operatorname{Re}p>0$. Repeating step 1.1 with the roles of $p$ and $q$ reversed shows that $q\mapsto B(p,q)$ is holomorphic on $\operatorname{Re}q>0$. Therefore $$K_p(q):=\Gamma(p+q)B(p,q)-\Gamma(p)\Gamma(q)$$ is holomorphic on $\operatorname{Re}q>0$ by [L5]. Step 2.1 shows $K_p(q)=0$ for every positive real $q$, so [L3] gives $K_p\equiv0$. This is exactly the displayed identity. [step 2.1, L3, L5, L6, L7] ∎
