---
id: ex-contour-integral-of-conjugation-depends-on-the-path
kind: example
title: "The integral of complex conjugation from -1 to 1 differs along a semicircle and a polygonal path"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-stieltjes-and-parametric-contour-integrals-agree, prop-reversal-and-concatenation-of-complex-line-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Example

Let $\gamma(t)=e^{i(\pi-t)}$ for $0\le t\le\pi$, the upper semicircle from $-1$ to $1$, and let $\eta$ be the polygonal path $-1\to2i\to1$. Then
$$\int_\gamma\overline z\,dz=-\pi i,\qquad \int_\eta\overline z\,dz=-4i.$$

## Facts & Assumptions

**Given:** The two oriented paths from $-1$ to $1$.

[L1] Piecewise-$C^1$ contour integrals agree with the parametric formula ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L2] Complex line integrals add under concatenation and change sign under reversal ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Verification

**Proof technique:** direct.

1.1 Along $\gamma$, $\overline{\gamma(t)}\gamma'(t)=e^{-i(\pi-t)}(-i)e^{i(\pi-t)}=-i$, so [L1] integrated from $0$ to $\pi$ gives $-\pi i$. [L1, algebra]

1.2 On a segment $z(t)=z_0+td$ with $0\le t\le1$, direct integration gives $\int\overline z\,dz=\overline{z_0}d+|d|^2/2$. For $-1\to2i$ we have $z_0=-1$ and $d=1+2i$, so $|d|^2=5$ and the value is $(-1)(1+2i)+5/2=3/2-2i$; for $2i\to1$ we have $z_0=2i$ and $d=1-2i$, so $|d|^2=5$ and the value is $(-2i)(1-2i)+5/2=-3/2-2i$. [L1, algebra]

2.1 Add the two segment values by [L2]: $(3/2-2i)+(-3/2-2i)=-4i$. Since $-\pi i\ne-4i$, the unequal results prove path dependence. [step 1.1, step 1.2, L2] ∎
