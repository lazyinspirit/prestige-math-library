---
id: ex-a-locally-integrable-function-can-fail-to-differentiate-on-a-null-set
kind: example
title: "A locally integrable function can fail to differentiate on a null set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, def-ball-average-operator-on-r-n, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Theorem 3.18"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Define
$$f(x):=\sum_{k=0}^\infty \mathbf{1}_{(2^{-2k-1},\,2^{-2k})}(x) \qquad(x\in\mathbb{R}).$$
Then $f$ is bounded and locally integrable, but the averages $A_rf(0)$ do not
converge as $r\to0^+$. Thus differentiation can fail on the null set $\{0\}$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the function $f$ above.

[L1] Ball averages are the normalized interval averages in one dimension. ([[def-ball-average-operator-on-r-n]])

[L2] Lebesgue differentiation holds almost everywhere for locally integrable functions. ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]])

## Verification

**Proof technique:** direct.

1.1 The function $f$ takes only the values $0$ and $1$, so it is measurable and [given, algebra] bounded by $1$. Hence it is locally integrable on $\mathbb{R}$. [given, algebra]

1.2 For $r_m:=2^{-2m}$, the set on which $f=1$ inside $(-r_m,r_m)$ is [L1, given, algebra] exactly the disjoint union $$\bigcup_{k\ge m}(2^{-2k-1},2^{-2k}),$$ whose total length is $$\sum_{k\ge m}2^{-2k-1}=\frac{2^{-2m-1}}{1-2^{-2}}=\frac{2^{-2m+1}}{3}.$$ Therefore $$A_{r_m}f(0)=\frac{1}{2r_m}\int_{-r_m}^{r_m}f(x)\,dx=\frac13.$$ [L1, given, algebra]

2.1 For $s_m:=2^{-2m-1}$, the set on which $f=1$ inside $(-s_m,s_m)$ is [L1, step 1.2, algebra] exactly $$\bigcup_{k\ge m+1}(2^{-2k-1},2^{-2k}),$$ whose total length is $$\sum_{k\ge m+1}2^{-2k-1}=\frac{2^{-2m-1}}{3}.$$ Hence $$A_{s_m}f(0)=\frac{1}{2s_m}\int_{-s_m}^{s_m}f(x)\,dx=\frac16.$$ [L1, step 1.2, algebra]

3.1 Steps 1.2 and 2.1 give two sequences of radii tending to $0$ along which [L2, step 1.2, step 2.1] $A_rf(0)$ tends to different values. So $A_rf(0)$ has no limit as $r\to0^+$. This does not contradict [L2], because the exceptional set here is the singleton null set $\{0\}$. [L2, step 1.2, step 2.1] ∎
