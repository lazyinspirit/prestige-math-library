---
id: "lem-cantor-cylinder-masses"
kind: "lemma"
title: "Cantor basic intervals have their expected masses"
deps: ["def-cantor-measure", "prop-cantor-measure-is-a-singular-atomless-probability-measure", "thm-cantor-function-properties", "thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures", "thm-cantor-set-ternary-description", "def-cantor-function"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264J(a,d); Bishop–Peres Example 1.4.2 (uniform digits)
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For the middle-thirds Cantor set, a level-$m$ basic interval is

$$I_b=\left[\sum_{j=1}^m2b_j3^{-j},\ \sum_{j=1}^m2b_j3^{-j}+3^{-m}\right],\qquad b_j\in\{0,1\}.$$

Every such interval has Cantor measure $\mu_c(I_b)=2^{-m}$, including $m=0$, where the interval is $[0,1]$.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the Cantor measure is the Lebesgue–Stieltjes measure of the Cantor function extended by zero to the left and one to the right. [[def-cantor-measure]]

[F2] The Cantor measure is atomless, is a probability, and is concentrated on $C$, under Countable Choice. [[prop-cantor-measure-is-a-singular-atomless-probability-measure]]

[F3] The Cantor function equals its digit-defined function $\gamma$ on $C$. [[thm-cantor-function-properties]]

[F4] Under the standing Countable Choice hypothesis, for continuous distribution functions the interval formula gives $\mu_F([a,b])=F(b)-F(a^-)$, and $\mu_F(\{a\})=F(a)-F(a^-)$. [[thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures]]

[F5] On $C$, $\gamma$ halves each ternary digit and sums the resulting binary digits. [[def-cantor-function]]

## Proof

1.1 The left endpoint has digits $2b_1,\ldots,2b_m$ followed by zeros; the right endpoint has that same prefix followed by twos, since $\sum_{j>m}2\,3^{-j}=3^{-m}$. Their Cantor-function values are respectively $q=\sum_{j=1}^mb_j2^{-j}$ and $q+\sum_{j>m}2^{-j}=q+2^{-m}$. [F3, F5]

2.1 The distribution-function interval formula and absence of endpoint atoms give $\mu_c(I_b)=(q+2^{-m})-q=2^{-m}$. This also applies at the endpoints zero and one of the extended distribution function; for $m=0$ it agrees with probability mass one. [F1, F2, F4, step 1.1] ∎
