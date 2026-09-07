---
id: thm-prime-number-theorem-logarithmic-integral
title: "Prime number theorem logarithmic integral"
kind: theorem
status: draft
origin: pipeline
deps: [cor-chebyshev-theta-prime-number-theorem-error, def-logarithmic-integral, lem-prime-counting-chebyshev-partial-summation]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.9, equation (6.14) and proof, pp.179\u2013181"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

For some absolute $c>0$ and every $x\ge2$,
$$\pi(x)=\operatorname{Li}(x)+O\left(xe^{-c\sqrt{\log x}}\right).$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[cor-chebyshev-theta-prime-number-theorem-error]]: For some absolute $c>0$ and all $x\ge2$, $\theta(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$

[F2] [[def-logarithmic-integral]]: For real $x\ge2$, define $\operatorname{Li}(x)=\int_2^x\frac{dt}{\log t}.$ In particular $\operatorname{Li}(2)=0$. The integral never crosses the singularity at one.

[F3] [[lem-prime-counting-chebyshev-partial-summation]]: For every real $x\ge2$, $ \pi(x)=\frac{\theta(x)}{\log x}+\int_2^x\frac{\theta(t)}{t\log^2 t}\,dt. $

## Proof

1.1 Set $E(t)=\theta(t)-t$. The exact partial-summation identity gives $\pi(x)=x/\log x+\int_2^x dt/\log^2t+E(x)/\log x+\int_2^x E(t)/(t\log^2t)\,dt$. Integration by parts in the definition of Li makes its main term $\operatorname{Li}(x)+2/\log2$. [F2, F3]

2.1 For $x\ge4$ split the error integral at $\sqrt x$. The initial part is $O(\sqrt x)$ because $E(t)=O(t)$. The second is $O(xe^{-(c_0/\sqrt2)\sqrt{\log x}})$ using the theta error and $\log t\ge\log2$. The endpoint error has the same form. Decrease the positive exponent constant and absorb $2/\log2$ and the compact range $2\le x\le4$. [F1, step 1.1] ∎
