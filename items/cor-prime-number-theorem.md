---
id: cor-prime-number-theorem
title: "Prime number theorem"
kind: corollary
status: draft
origin: pipeline
deps: [thm-prime-number-theorem-logarithmic-integral, lem-logarithmic-integral-asymptotic-expansion, lem-prime-counting-chebyshev-partial-summation, lem-chebyshev-functions-prime-power-comparison]
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
    - title: "\u00a71.3, Lemma 1.7"
      url: https://kskedlaya.org/ant/chap-pnt.html
proof_strategy: direct argument
---

## Statement

As $x\to\infty$,
$$\pi(x)\sim x/\log x,\qquad\theta(x)\sim x,\qquad\psi(x)\sim x.$$
These three asymptotic assertions are equivalent.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-prime-number-theorem-logarithmic-integral]]: For some absolute $c>0$ and every $x\ge2$, $\pi(x)=\operatorname{Li}(x)+O\left(xe^{-c\sqrt{\log x}}\right).$

[F2] [[lem-logarithmic-integral-asymptotic-expansion]]: For each fixed integer $m\ge1$, as $x\to\infty$, $\operatorname{Li}(x)=\sum_{j=0}^{m-1}\frac{j!x}{\log^{j+1}x}+O_m\left(\frac{x}{\log^{m+1}x}\right).$

[F3] [[lem-prime-counting-chebyshev-partial-summation]]: For every real $x\ge2$, $ \pi(x)=\frac{\theta(x)}{\log x}+\int_2^x\frac{\theta(t)}{t\log^2 t}\,dt. $

[F4] [[lem-chebyshev-functions-prime-power-comparison]]: There are positive constants $K_1,K_2$ such that for every real $x\ge2$, $ 0\le\psi(x)-\theta(x)\le K_1\sqrt{x}\log x $ and, for all sufficiently large $x$, $ \psi(x)-\theta(x)\le K_2\sqrt{x}. $

## Proof

1.1 The quantitative counting theorem and the first Li term give $\pi(x)\sim x/\log x$, since $\log x\,e^{-c\sqrt{\log x}}\to0$. [F1, F2]

1.2 Independently, if $\theta(x)\sim x$, the exact Abel formula gives $\pi(x)\sim x/\log x$: its integral is $O(x/\log^2x)$, by splitting at $\sqrt x$ and using $\theta(t)=O(t)$. [F3]

2.1 Conversely summing $\log p=\log x-\int_p^x dt/t$ over the finitely many primes $p\le x$ gives $\theta(x)=\pi(x)\log x-\int_2^x\pi(t)dt/t$. If $\pi(t)\sim t/\log t$, the integral is $O(x/\log x)=o(x)$ by the same square-root split, so $\theta(x)\sim x$. Finally $0\le\psi(x)-\theta(x)=O(\sqrt x\log x)=o(x)$, proving both directions between theta and psi. Combine these implications with the first step. [F4, step 1.1, step 1.2] ∎
