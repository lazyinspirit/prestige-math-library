---
id: ex-integrality-equation-and-power-basis
kind: example
title: "Every element of k[X] is integral over k[X^2], and k[X] has basis 1, X over k[X^2]"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integrality-and-finite-module-equivalences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (10.24)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field. Then every polynomial $f(X)\in k[X]$ is integral over the subring $k[X^2]$, and $k[X]$ is a free $k[X^2]$-module with basis $1,X$.

## Facts & Assumptions

**Given:** A field $k$ and the polynomial ring $k[X]$.

[L1] Over a nonzero commutative ring $A$, an element $b$ is integral over $A$ if and only if there exists a faithful $A[b]$-module finitely generated over $A$ ([[thm-integrality-and-finite-module-equivalences]]).

## Verification

**Proof technique:** direct.

1.1 Every polynomial $f(X)\in k[X]$ can be written uniquely as $a(X^2)+Xb(X^2)$ with $a(T),b(T)\in k[T]$, by separating the even and odd powers of $X$. Therefore $k[X]=k[X^2]\oplus Xk[X^2]$, so $1$ and $X$ form a basis of $k[X]$ over $k[X^2]$. [given, algebra]

2.1 Fix $f(X)\in k[X]$. Because $k[X]$ is a faithful module over the subring $k[X^2][f(X)]$ and step 1.1 shows that it is finitely generated over $k[X^2]$, [L1] implies that $f(X)$ is integral over $k[X^2]$. [L1, step 1.1]

3.1 Thus $k[X]$ is finite free of rank $2$ over $k[X^2]$, and every element of $k[X]$ is integral over that subring. [step 1.1, step 2.1] ∎
