---
id: def-l-one-approximate-identity-on-rn
kind: definition
title: "An $L^1$ approximate identity on $\\mathbb{R}^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-l-one-of-a-measure]
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Definition

An **$L^1$ approximate identity** on $\mathbb{R}^n$ is a family
$(K_\varepsilon)_{\varepsilon>0}$ of functions in $L^1(\mathbb{R}^n)$, where

$$\|K_\varepsilon\|_1:=\int_{\mathbb{R}^n}|K_\varepsilon(x)|\,dx,$$

such that:

1. $\int_{\mathbb{R}^n} K_\varepsilon(x)\,dx = 1$ for every $\varepsilon > 0$;
2. there is $M < \infty$ with $\|K_\varepsilon\|_1 \le M$ for every
   $\varepsilon > 0$;
3. for every $\delta > 0$,
   $$ \int_{|x|>\delta} |K_\varepsilon(x)|\,dx \longrightarrow 0 \qquad(\varepsilon \to 0^+). $$

This is the general notion used later for both compactly supported mollifiers
and the Gaussian family.
