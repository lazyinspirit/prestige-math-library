---
id: lem-scaled-modified-bessel-midpoint-error
kind: lemma
title: Composite midpoint enclosure for the scaled modified Bessel integral
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-bessel-integral-representations-and-scaled-range, lem-taylor-lagrange-remainder-from-mean-value, thm-derivative-of-exponential, lem-derivative-algebra-and-chain-rules, thm-sine-and-cosine-derivatives]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §10.32(ii), integral representations for modified Bessel functions
      url: https://dlmf.nist.gov/10.32
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 3
---

## Statement

Let $n\ge0$ be an integer, $x\ge0$, $m\ge1$, $h=\pi/m$, and
$$f(\theta)=e^{-x(1-\cos\theta)}\cos(n\theta),\qquad Q_m=h\sum_{j=0}^{m-1}f((j+1/2)h).$$
Then
$$\left|e^{-x}I_n(x)-\frac{Q_m}{\pi}\right| \le \frac{h^2}{24}\bigl((x+n)^2+x\bigr).$$
The bound certifies the exact midpoint integral. Floating-point summation is
certified only if its operations are enclosed separately.

## Facts & Assumptions

**Given:** Integer $n\ge0$, real $x\ge0$, and integer $m\ge1$.

[F1] [[lem-bessel-integral-representations-and-scaled-range]]:
$$I_n(x)=\frac1\pi\int_0^\pi e^{x\cos\theta}\cos(n\theta)\,d\theta, \qquad 0\le e^{-x}I_n(x)\le1.$$

[F2] [[lem-taylor-lagrange-remainder-from-mean-value]]: for a $C^2$
function, the first-order Taylor remainder at $c$ is $f''(\xi)u^2/2$ for
some point between $c$ and $c+u$.

[L9] [[thm-derivative-of-exponential]], [[lem-derivative-algebra-and-chain-rules]], [[thm-sine-and-cosine-derivatives]]: the displayed real functions are smooth on their stated domains, and their derivatives follow by the product, power and chain rules; iterate these rules for the finite higher derivatives used below.

## Proof
1.1 Put $g(\theta)=e^{-x(1-\cos\theta)}$. Since $1-\cos\theta\ge0$, we have $0<g\le1$ on $[0,\pi]$. Differentiation gives $g'=-x\sin\theta\,g$ and $g''=(-x\cos\theta+x^2\sin^2\theta)g$. Thus $|g'|\le x$ and $|g''|\le x+x^2$. For $f=g\cos(n\theta)$, $$|f''|\le |g''|+2n|g'|+n^2|g| \le x+x^2+2nx+n^2=(x+n)^2+x.$$ [given, L9, algebra]

2.1 On each panel centered at $c$, [F2] bounds $|f(c+u)-f(c)-uf'(c)|$ by $Mu^2/2$, where $M=(x+n)^2+x$ by step 1.1. Integrating over $-h/2\le u\le h/2$ cancels the odd linear term and bounds that panel's error by $Mh^3/24$. [step 1.1, F2, algebra]

3.1 Summing the $m$ panel errors gives $|\int_0^\pi f-Q_m|\le mMh^3/24=\pi Mh^2/24$. By [F1], $e^{-x}I_n(x)=\pi^{-1}\int_0^\pi f(\theta)\,d\theta$; dividing by $\pi$ proves the claim. [F1, step 2.1, algebra] ∎