---
id: cor-chebyshev-theta-prime-number-theorem-error
title: "Chebyshev theta prime number theorem error"
kind: corollary
status: published
origin: pipeline
deps: [thm-chebyshev-psi-prime-number-theorem-error, lem-chebyshev-functions-prime-power-comparison]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.9, equation (6.13), pp.179\u2013181"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

For some absolute $c>0$ and all $x\ge2$,
$$\theta(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-chebyshev-psi-prime-number-theorem-error]]: There is an absolute $c>0$ such that for $x\ge2$, $\psi(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$

[F2] [[lem-chebyshev-functions-prime-power-comparison]]: There are positive constants $K_1,K_2$ such that for every real $x\ge2$, $ 0\le\psi(x)-\theta(x)\le K_1\sqrt{x}\log x $ and, for all sufficiently large $x$, $ \psi(x)-\theta(x)\le K_2\sqrt{x}. $

## Proof

1.1 The comparison gives $0\le\psi(x)-\theta(x)\le K\sqrt x\log x$. Thus $|\theta(x)-x|\le|\psi(x)-x|+K\sqrt x\log x$. [F2]

2.1 The first term has the asserted bound. Writing $u=\sqrt{\log x}$, the ratio of the second to $xe^{-cu}$ is $u^2e^{-u^2/2+cu}$, bounded on $u\ge\sqrt{\log2}$. This proves the result after enlarging the constant. [F1, step 1.1] ∎
