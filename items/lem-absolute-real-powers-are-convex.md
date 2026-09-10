---
id: lem-absolute-real-powers-are-convex
kind: lemma
title: "Absolute real powers are Borel measurable and convex"
status: draft
origin: pipeline
deps: [def-real-power, thm-real-power-continuity-and-derivatives, thm-natural-logarithm-laws, thm-exponential-is-strictly-increasing, cor-exponential-reciprocal-and-positivity, thm-algebra-of-derivatives, thm-monotonicity-from-the-derivative, cor-second-derivative-characterises-convexity, def-convex-concave-and-midpoint-convex-functions, lem-of-triangle-inequality, lem-of-abs-value, thm-algebra-of-continuous-functions, thm-squeeze-for-function-limits, thm-continuous-preimages-of-borel-sets-are-borel, def-measurable-function-between-measurable-spaces, def-natural-logarithm]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
---

## Statement

For each real $p\ge1$, the function $\phi_p:\mathbb R\to\mathbb R$ defined by $\phi_p(t)=|t|^p$ is finite, continuous, Borel measurable and convex. Here $0^p=0$.

## Facts & Assumptions

**Given:** A real exponent $p\ge1$, with the real-power convention $0^p=0$.

[F1] For positive bases $u^p=\exp(p\log u)$; $0^p=0$ for $p>0$. ([[def-real-power]])

[F2] On positive bases $u\mapsto u^p$ is continuous with derivative $pu^{p-1}$. ([[thm-real-power-continuity-and-derivatives]])

[F3] Constant factors pass through differentiation. ([[thm-algebra-of-derivatives]])

[F4] A twice differentiable function with nonnegative second derivative on an open interval is convex. ([[cor-second-derivative-characterises-convexity]])

[F5] A continuous function with nonnegative derivative on an interval is nondecreasing. ([[thm-monotonicity-from-the-derivative]])

[F6] Logarithm is increasing and $\log1=0$. ([[thm-natural-logarithm-laws]])

[F7] Exponential is increasing. ([[thm-exponential-is-strictly-increasing]])

[F8] Exponential is positive. ([[cor-exponential-reciprocal-and-positivity]])

[F9] Two equal bounding limits force the intermediate limit. ([[thm-squeeze-for-function-limits]])

[F10] $|a+b|\le|a|+|b|$. ([[lem-of-triangle-inequality]])

[F11] Absolute value is nonnegative and multiplicative. ([[lem-of-abs-value]])

[F12] Convexity is the convex-combination inequality for all weights in $[0,1]$. ([[def-convex-concave-and-midpoint-convex-functions]])

[F13] The identity and its absolute value are continuous. ([[thm-algebra-of-continuous-functions]])

[F14] Continuous preimages of Borel sets are Borel. ([[thm-continuous-preimages-of-borel-sets-are-borel]])

[F15] Measurability means that every measurable target preimage is measurable. ([[def-measurable-function-between-measurable-spaces]])

[F16] For $u>0$, $\exp(\log u)=u$ by the inverse definition. ([[def-natural-logarithm]])

## Proof

**Proof technique:** direct.

1.1 For $p>1$ and $u>0$, differentiation gives $h^{\prime}(u)=pu^{p-1}$ and $h^{\prime\prime}(u)=p(p-1)u^{p-2}\ge0$ for $h(u)=u^p$. Thus $h$ is nondecreasing and convex on $(0,\infty)$. The derivative and second-derivative hypotheses hold at every positive $u$. [F2, F3, F4, F5]

1.2 For $0<u\le1$, $\log u\le0$, hence $p\log u\le\log u$ and $0<u^p=\exp(p\log u)\le\exp(\log u)=u$. The last equality is the inverse identity [F16]. The squeeze theorem gives $u^p\to0$ as $u\downarrow0$. With $h(0)=0$, this extends $h$ continuously to $[0,\infty)$. [F1, F6, F7, F8, F9, F16]

2.1 For $a,b\ge0$ and $0\le\lambda\le1$, apply positive-half-line convexity to $a+\varepsilon,b+\varepsilon$ and let $\varepsilon\downarrow0$ using step 1.2: $h(\lambda a+(1-\lambda)b)\le\lambda h(a)+(1-\lambda)h(b)$. The inequality remains valid at weights zero and one, where it is equality. Monotonicity extends to zero because $h\ge0=h(0)$. [step 1.1, step 1.2]

3.1 For real $x,y$, [F10]–[F11] give $|\lambda x+(1-\lambda)y|\le\lambda|x|+(1-\lambda)|y|$. Apply monotonicity and then step 2.1 to get $|\lambda x+(1-\lambda)y|^p\le\lambda|x|^p+(1-\lambda)|y|^p$. For $p=1$ the same inequality is already precisely the triangle inequality with the scalar absolute values evaluated. Thus [F12] proves convexity for every $p\ge1$. [step 2.1, F10, F11, F12]

4.1 The function is finite by [F1]. Continuity of absolute value [F13] and continuity of $h$ (steps 1.1–1.2, or the identity for $p=1$) imply continuity of $h(|t|)$: choose an output tolerance for $h$ at $|t|$ and then the corresponding input tolerance for absolute value. Consequently all Borel preimages are Borel by [F14], which is exactly [F15]. [step 1.1, step 1.2, F1, F13, F14, F15] ∎

## Source notes

Durrett Theorem 4.1.11, printed pp.211–212, and van der Vaart Lemma 1.9(vii), printed p.4, use this power in the contraction argument. The calculus and endpoint proof is supplied here from the explicitly cited local real-analysis results.
