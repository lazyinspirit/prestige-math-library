---
id: cor-riemann-integral-of-a-product-function
kind: corollary
title: "The integral of a product function on a product rectangle is the product of the two integrals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-riemann-fubini-on-product-rectangles, thm-continuous-on-a-rectangle-is-riemann-integrable, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 10.2.5"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "A. Leibman, Multidimensional Real Analysis, §5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq\mathbb R^p$ and $B\subseteq\mathbb R^q$ be nondegenerate closed rectangles. If $a:A\to\mathbb R$ and $b:B\to\mathbb R$ are continuous and $f(x,y):=a(x)b(y)$, then
$$\int_{A\times B}f=\left(\int_Aa\right)\left(\int_Bb\right).$$
In particular, if $f(x,y)=a(x)$ is independent of $y$, then $\int_{A\times B}f=\operatorname{vol}(B)\int_Aa$.

## Facts & Assumptions

**Given:** Nondegenerate rectangles $A,B$, continuous functions $a,b$, and $f(x,y)=a(x)b(y)$.

[L1] Riemann--Fubini identifies the integral over a product rectangle with either iterated integral ([[thm-riemann-fubini-on-product-rectangles]]).

## Proof

**Proof technique:** direct.

1.1 The product $f$ is continuous and hence integrable. For fixed $x$, linearity gives $\int_Bf_x=a(x)\int_Bb$. [given, algebra]

2.1 Apply [L1] and linearity once more: $\int_{A\times B}f=\int_A(a(x)\int_Bb)=(\int_Aa)(\int_Bb)$. [L1, step 1.1, algebra]

3.1 Taking $b$ constantly equal to $1$ gives $\int_Bb=\operatorname{vol}(B)$ and yields the coordinate-independent case, including the case $\int_Aa=0$. [step 2.1, algebra] ∎
