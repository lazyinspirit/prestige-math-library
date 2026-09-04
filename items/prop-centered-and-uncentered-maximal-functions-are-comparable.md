---
id: prop-centered-and-uncentered-maximal-functions-are-comparable
kind: proposition
title: "The centered and uncentered maximal functions are pointwise comparable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-countable-choice, thm-lebesgue-measure-under-dilations-and-reflections]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Exercise 22"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $f\in L^1_{\mathrm{loc}}(\mathbb{R}^n)$. Then for every $x\in\mathbb{R}^n$,
$$Mf(x)\le M^*f(x)\le 2^n Mf(x).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a locally integrable function $f$ on $\mathbb{R}^n$, and a point $x\in\mathbb{R}^n$.

[L1] The centered maximal function takes the supremum over balls centered at $x$, while the uncentered maximal function takes the supremum over all balls that contain $x$. ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

[L2] Lebesgue measure scales by $|c|^n$ under dilation by $c\ne0$. ([[thm-lebesgue-measure-under-dilations-and-reflections]])

## Proof

**Proof technique:** direct.

1.1 Every ball centered at $x$ is in particular a ball containing $x$, so the [L1] supremum defining $Mf(x)$ is taken over a smaller family than the one defining $M^*f(x)$. Therefore $Mf(x)\le M^*f(x)$. [L1]

1.2 Let $B(y,r)$ be any ball containing $x$. If $z\in B(y,r)$, then [L1, algebra] $$\|z-x\|_2\le \|z-y\|_2+\|y-x\|_2<r+r=2r,$$ so $B(y,r)\subseteq B(x,2r)$. Hence $$\int_{B(y,r)}|f|\le\int_{B(x,2r)}|f|\,d\lambda.$$ [L1, algebra]

2.1 Step 1.2 and [L2] give [step 1.2, L1, L2, algebra] $$\frac{1}{\lambda(B(y,r))}\int_{B(y,r)}|f| \le\frac{\lambda(B(x,2r))}{\lambda(B(y,r))}\cdot \frac{1}{\lambda(B(x,2r))}\int_{B(x,2r)}|f| =2^nA_{2r}|f|(x)\le 2^nMf(x).$$ Taking the supremum over all balls $B(y,r)$ containing $x$ yields $M^*f(x)\le2^nMf(x)$. [step 1.2, L1, L2, algebra]

3.1 Combining steps 1.1 and 2.1 gives the claimed comparison. [step 1.1, step 2.1] [step 1.1, step 2.1] ∎
