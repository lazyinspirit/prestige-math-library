---
id: def-centered-taylor-model-with-derivative-interval
kind: definition
title: Centered Taylor model with derivative-interval remainder
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 4
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-intervals-rectangles-and-complex-balls, def-outward-rounded-interval-and-ball-operations, def-continuity-and-derivative-on-real-interval, lem-real-and-complex-modulus-rules]
justified_by: [thm-centered-taylor-model-encloses-function-range]
verification:
  precheck: n/a
sources:
  references:
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §11.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

Let $f$ be a real function that is $n+1$ times continuously differentiable on
an open interval containing the finite real interval $X=[a,b]$. Here
$n\ge0$ is an integer, and continuous differentiability means that the
derivatives through order $n+1$ exist there and are continuous. Let $c\in X$
be a dyadic point. Put
$$
P_n(t)=\sum_{j=0}^n\frac{f^{(j)}(c)}{j!}(t-c)^j.
$$
Supply dyadic intervals $C_j$ containing $f^{(j)}(c)/j!$ for $0\le j\le n$
and a dyadic interval $D$ containing $f^{(n+1)}(X)$. Put
$M=\max(|\inf D|,|\sup D|)$ and
$R=\max(|a-c|,|b-c|)$. The **centered Taylor-model enclosure** is
$$\mathcal T_n(f,X,c,(C_j)_{j=0}^n,D) =\sum_{j=0}^n C_j(X-c)^j+ \left[-\frac{M R^{n+1}}{(n+1)!},\frac{M R^{n+1}}{(n+1)!}\right],$$
where products, powers, sums, and the final sum are evaluated by
outward-rounded interval operations. The first term carries input variation
through the polynomial; the symmetric second interval is the explicit
derivative-based remainder. If a required coefficient or derivative
enclosure is unavailable, or any operation or endpoint conversion returns a
non-finite status, no finite Taylor-model certificate is returned.

