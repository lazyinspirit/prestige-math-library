---
id: lem-bessel-integral-midpoint-error
kind: lemma
title: Composite midpoint enclosure for the integer Bessel integral
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-bessel-integral-representations-and-scaled-range, lem-taylor-lagrange-remainder-from-mean-value]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, Chapter 3, §3.5, quadrature
      url: https://dlmf.nist.gov/3.5
    - title: DLMF, §10.74(iii) and Chapter 3, §3.5
      url: https://dlmf.nist.gov/10.74
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
---

## Statement

Let $n\ge0$ be an integer, $x\in\mathbb R$, $m\ge1$, and $h=\pi/m$. Put
$\phi(\theta)=\cos(n\theta-x\sin\theta)$ and
$Q_m=h\sum_{j=0}^{m-1}\phi((j+1/2)h)$. Then

$$\left|J_n(x)-\frac{Q_m}{\pi}\right| \le \frac{h^2}{24}\left((n+|x|)^2+|x|\right).$$

This is the local composite-midpoint certificate for the Bessel integral; it
does not certify floating-point summation unless each operation is enclosed.

## Facts & Assumptions

**Given:** Integer $n\ge0$, real $x$, and positive integer $m$.

[F1] [[lem-bessel-integral-representations-and-scaled-range]]:
$J_n(x)=\pi^{-1}\int_0^\pi\phi(\theta)\,d\theta$.

[F2] [[lem-taylor-lagrange-remainder-from-mean-value]]: for a $C^2$ function,
the first-order Taylor remainder at $c$ is $f''(\xi)u^2/2$ for some point
$\xi$ between $c$ and $c+u$.

## Proof
1.1 Write $g(\theta)=n\theta-x\sin\theta$, so $|g'(\theta)|\le n+|x|$ and $|g''(\theta)|\le|x|$. Differentiating $\phi=\cos g$ gives $|\phi''(\theta)|\le |g'(\theta)|^2+|g''(\theta)|\le (n+|x|)^2+|x|=:M$. [given, algebra]

2.1 On a panel centered at $c$ with half-width $h/2$, [F2] gives $|\phi(c+u)-\phi(c)-u\phi'(c)|\le M u^2/2$. Integrating over $-h/2\le u\le h/2$ cancels the odd term and bounds the panel error by $M h^3/24$. [step 1.1, F2, algebra]

3.1 Summing the $m$ panel errors gives $|\int_0^\pi\phi-Q_m|\le mMh^3/24=\pi Mh^2/24$. Divide by $\pi$ and use [F1] to obtain the stated bound. [F1, step 2.1, algebra] ∎