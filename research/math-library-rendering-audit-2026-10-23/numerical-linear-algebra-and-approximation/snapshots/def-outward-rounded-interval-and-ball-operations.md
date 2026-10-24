---
id: def-outward-rounded-interval-and-ball-operations
kind: definition
title: Outward-rounded interval, rectangle and ball operations
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-dyadic-floating-point-format-and-directed-rounding, def-intervals-rectangles-and-complex-balls, alg-dyadic-square-root-bisection]
justified_by: [thm-outward-rounded-operations-are-isotone-and-dag-sound]
verification:
  precheck: n/a
sources:
  references:
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §1"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5.1–5.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Definition

For real intervals $X=[a,b]$ and $Y=[c,d]$, compute the displayed exact
endpoint formulas and round the lower endpoint down and the upper endpoint up
in the format of
[[def-dyadic-floating-point-format-and-directed-rounding]]. If either exact
endpoint overflows, return `overflow` with the outward extended endpoints;
never substitute a finite endpoint for an overflow sentinel. Addition is
$[a+c,b+d]$, subtraction is $[a-d,b-c]$, and multiplication is
$[\min(ac,ad,bc,bd),\max(ac,ad,bc,bd)]$. Division is defined only when
$0\notin Y$ and is $X[1/d,1/c]$, with reciprocal endpoints computed as exact
rationals before outward rounding. Squaring is
$[0,\max(a^2,b^2)]$ when $0\in X$ and
$[\min(a^2,b^2),\max(a^2,b^2)]$ otherwise. Square root is defined only for
$X\subseteq[0,\infty)$ and is enclosed by applying
[[alg-dyadic-square-root-bisection]] to the exact dyadic endpoints with
request $n=p$, where $p$ is the selected format precision, and rounding
outward for storage.

If $0\in Y$ for division, return `split-domain` with the two subdomains
$Y\cap(-\infty,0)$ and $Y\cap(0,\infty)$, or `entire` when the caller does not
request subdivision. No finite quotient interval is returned in this case.
An invalid square-root domain returns `domain-error` or an explicitly
restricted nonnegative subdomain.

Complex-rectangle addition, subtraction and multiplication use
$(x+iy)(u+iv)=(xu-yv)+i(xv+yu)$, applying the real interval operations to
each component. For a rectangle $X+iY$ excluding $0$, define its reciprocal by
$(X-iY)/(X^2+Y^2)$, computing the square hulls, their sum, and the
component quotient endpoint formulas as exact rationals before rounding the
final reciprocal components outward. The exact denominator interval is
strictly positive because at least one coordinate interval excludes zero;
do not round it before division, since underflow could introduce zero.
Propagate any final endpoint overflow. Division multiplies by this reciprocal.

For a ball $B(c,r)$, let $X_B=[\Re c-r,\Re c+r]$ and
$Y_B=[\Im c-r,\Im c+r]$ be its coordinate projection intervals. For a real
interval $J$, let $M(J)=\max(|\inf J|,|\sup J|)$ and let $d(J)=0$ if
$0\in J$, otherwise $d(J)=\min(|\inf J|,|\sup J|)$. Put
$M_B=M(X_B)+M(Y_B)$ and $m_B=\max(d(X_B),d(Y_B))$. Then
$|z|\le M_B$ for every $z\in B(c,r)$ and $|z|\ge m_B$ for every such $z$.
Define ball addition and subtraction as
$B(0,\operatorname{ru}(M_{B_1}+M_{B_2}))$, multiplication as
$B(0,\operatorname{ru}(M_{B_1}M_{B_2}))$, and division as
$B(0,\operatorname{ru}(M_{B_1}/m_{B_2}))$ only when $m_{B_2}>0$. These
origin-centered output balls are conservative but inclusion-isotone. If
$m_{B_2}=0$, return `split-domain`, `entire`, or `inconclusive`; if a radius
overlows, return `overflow`.

## Well-definedness

Dyadic endpoints are rational, so every real arithmetic endpoint and every
complex-division component before square root is rational. Reciprocals are
formed only for nonzero rational endpoints. In a complex rectangle excluding
zero, at least one coordinate interval omits zero; its exact squared interval has a
strictly positive lower endpoint, so the unrounded $X^2+Y^2$ does also.
The prescribed exact rational component quotients therefore have nonzero
denominators even when storage rounding would underflow that lower bound. For ball division,
$m_{B_2}>0$ gives $|y|\ge m_{B_2}>0$ for every $y\in B_2$. Every endpoint
overflow is reported explicitly and cannot produce a finite-result claim.
