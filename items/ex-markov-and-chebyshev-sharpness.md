---
id: ex-markov-and-chebyshev-sharpness
kind: example
title: "Markov and Chebyshev sharpness"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-markov-inequality-for-random-variables, cor-chebyshev-inequality-for-random-variables]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 4.2"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Example

Both Markov's and Chebyshev's inequalities can be sharp.

1. If $X=a\mathbf 1_A$ with $a>0$, then
   $$\mathbb P(X\ge a)=\frac{\mathbb E[X]}{a}=\mathbb P(A).$$
2. If $Y$ takes the values $\pm a$ with probability $1/2$ each, then
   $$\mathbb P(|Y-\mathbb E[Y]|\ge a)=1=\frac{\operatorname{Var}(Y)}{a^2}.$$

These equality examples do not mean the bounds are always informative: when a
distribution has much lighter tails, the same inequalities may be very far from
equality.

## Facts & Assumptions

**Given:** The two-point random variables described above.

[L1] Markov's and Chebyshev's inequalities are the probability-space bounds
already proved on the A page
([[cor-markov-inequality-for-random-variables]],
[[cor-chebyshev-inequality-for-random-variables]]).

## Verification

**Proof technique:** direct.

1.1 For $X=a\mathbf 1_A$, one has $\mathbb E[X]=a\mathbb P(A)$ and $\{X\ge a\}=A$, so $$\mathbb P(X\ge a)=\mathbb P(A)=\frac{\mathbb E[X]}{a}.$$ [L1, algebra]

1.2 For $Y=\pm a$ with equal probabilities, $\mathbb E[Y]=0$ and $\operatorname{Var}(Y)=a^2$, while $|Y-\mathbb E[Y]|=a$ always. Hence $$\mathbb P(|Y-\mathbb E[Y]|\ge a)=1=\frac{\operatorname{Var}(Y)}{a^2}.$$ [L1, algebra]

2.1 Thus both inequalities admit equality, even though other laws can make the bounds much weaker. [step 1.1, step 1.2] ∎
