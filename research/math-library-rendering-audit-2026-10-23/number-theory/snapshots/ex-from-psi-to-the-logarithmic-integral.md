---
id: ex-from-psi-to-the-logarithmic-integral
title: "From psi to the logarithmic integral"
kind: example
status: published
origin: pipeline
deps: [thm-chebyshev-psi-prime-number-theorem-error, lem-chebyshev-functions-prime-power-comparison, lem-prime-counting-chebyshev-partial-summation, def-logarithmic-integral, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Theorem 6.9 proof"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-03-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume countable choice.

The transfer from a classical psi error to pi retains
$$\pi(x)-\operatorname{Li}(x)=\frac2{\log2}+\frac{E(x)}{\log x}+\int_2^x\frac{E(t)}{t\log^2t}\,dt,\qquad E(t)=\theta(t)-t.$$
Both the prime-power error and this error integral are absorbed into a decreased classical exponential rate.

## Facts & Assumptions

**Given:** Countable choice and the data and hypotheses of the statement.

[F1] [[thm-chebyshev-psi-prime-number-theorem-error]]: There is an absolute $c>0$ such that for $x\ge2$, $\psi(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$

[F2] [[lem-chebyshev-functions-prime-power-comparison]]: There are positive constants $K_1,K_2$ such that for every real $x\ge2$, $0\le\psi(x)-\theta(x)\le K_1\sqrt{x}\log x$, and, for all sufficiently large $x$, $\psi(x)-\theta(x)\le K_2\sqrt{x}$.

[F3] [[lem-prime-counting-chebyshev-partial-summation]]: For every real $x\ge2$, $\pi(x)=\theta(x)/\log x+\int_2^x\theta(t)/(t\log^2t)\,dt$.

[F4] [[def-logarithmic-integral]]: For real $x\ge2$, $\operatorname{Li}(x)=\int_2^xdt/\log t$, with $\operatorname{Li}(2)=0$.

## Verification

1.1 Under countable choice, the supplied bounds $\psi(t)-t=O(te^{-c\sqrt{\log t}})$ and $0\le\psi(t)-\theta(t)=O(\sqrt t\log t)$ give $E(t)=O(te^{-c'\sqrt{\log t}})$ after decreasing the positive constant. The ratio of the prime-power error to $te^{-c'\sqrt{\log t}}$ is $(\log t)e^{-\log t/2+c'\sqrt{\log t}}$, which is bounded. [F1, F2]

2.1 Substitute $\theta(t)=t+E(t)$ into the partial-summation identity. The main term $x/\log x+\int_2^xdt/\log^2t$ equals $\operatorname{Li}(x)+2/\log2$ by integration by parts. In the E-integral, [2,square root x] contributes O(square root x), and [square root x,x] contributes $O(xe^{-(c'/\sqrt2)\sqrt{\log x}})$. The endpoint term satisfies the same bound. At x=2 the empty integral leaves $2/\log2+(\log2-2)/\log2=1=\pi(2)$. [F3, F4, step 1.1, algebra] ∎
