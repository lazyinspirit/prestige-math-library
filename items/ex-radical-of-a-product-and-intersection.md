---
id: ex-radical-of-a-product-and-intersection
kind: example
title: "A radical of a product and intersection computation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-radical-of-an-intersection, ex-radical-intersection-computation, lem-radical-membership-by-a-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
pipeline_run: null
---

## Example

In the polynomial ring $k[x,y]$, one has $\sqrt{(x^2,xy)\cap(y^3)}=(xy)$.

## Facts & Assumptions

**Given:** A field $k$.

[L1] The radical of an intersection is the intersection of the radicals ([[lem-radical-of-an-intersection]]).

[L2] The radical of $(x^2,xy)$ is $(x)$ ([[ex-radical-intersection-computation]]).

[L3] An element lies in the radical of an ideal exactly when some positive power lies in that ideal ([[lem-radical-membership-by-a-power]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L2], $\sqrt{(x^2,xy)\cap(y^3)}=\sqrt{(x^2,xy)}\cap\sqrt{(y^3)}=(x)\cap\sqrt{(y^3)}$. Since $y^3\in(y^3)$, [L3] gives $y\in\sqrt{(y^3)}$, so $(y)\subseteq\sqrt{(y^3)}$. Conversely, if $g\in\sqrt{(y^3)}$, choose $m\ge 1$ with $g^m\in(y^3)$ and write $g=a(x)+yh(x,y)$ with $a(x)\in k[x]$; if $a(x)\ne0$, then $g^m=a(x)^m+y\,b(x,y)$ for some $b(x,y)\in k[x,y]$, so $g^m$ has a nonzero $y^0$ term and cannot lie in $(y^3)$, a contradiction. Hence $a(x)=0$, so $g\in(y)$. Thus $\sqrt{(y^3)}=(y)$. [L1, L2, L3, given, choose, algebra]

2.1 Step 1.1 reduces the problem to $(x)\cap(y)$. A polynomial lies in both ideals exactly when it is divisible by both $x$ and $y$, hence by $xy$. Therefore $(x)\cap(y)=(xy)$. [step 1.1, algebra]

3.1 Therefore $\sqrt{(x^2,xy)\cap(y^3)}=(xy)$. [step 1.1, step 2.1] ∎
