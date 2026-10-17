---
id: alg-certified-elementary-range-evaluation
kind: algorithm
title: Certified range evaluation for elementary real and complex functions
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 9
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-real-elementary-functions-and-domains, def-dyadic-floating-point-format-and-directed-rounding, def-outward-rounded-interval-and-ball-operations, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-range-reduced-exp-log-and-arctan-series-enclosures, lem-trigonometric-identities-machin-and-range-reduction]
justified_by: [thm-real-elementary-range-enclosures, thm-complex-elementary-range-enclosures]
verification:
  precheck: pending
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §§5–7 and 10"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1–2"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Definition

Input: a finite expression DAG with real interval or complex rectangle input,
a finite dyadic format and an integer truncation index $N\ge1$. All constants,
including the Machin enclosure of $\pi$, use the same fixed $N$ and format
throughout a call. Output: a finite interval/rectangle enclosure, or one of
`empty`, `domain-error`, `split-domain`, `overflow`, or `inconclusive` with the
unresolved domain piece. No value from a system `libm` routine is treated as a
certified endpoint.

1. Evaluate arithmetic nodes by
[[def-outward-rounded-interval-and-ball-operations]]. On an invalid divisor
return its declared status. For $\sqrt{X}$ require $X\subseteq[0,\infty)$; for
$\ln X$ require $X\subseteq(0,\infty)$. If an input is not wholly in the
stated domain, return `domain-error` rather than silently discarding points.

2. Set $s=\max(0,e_{\max}+2)$, using the exponent in
[[def-dyadic-floating-point-format-and-directed-rounding]]. Since
$N_{\max}<2^{e_{\max}+1}$, exact dyadic comparison gives
$N_{\max}/2^s<1/2$. For an
interval $X$, evaluate the truncated exponential polynomial on $U=X/2^s$ by
interval arithmetic, add the symmetric tail using $\max_{u\in U}|u|$, then
square the resulting interval $s$ times. If its lower endpoint is not
positive or an endpoint overflows, return `inconclusive` or `overflow`. For
$\ln$, split $X\subset(0,\infty)$ into its intersections with the fixed
dyadic bins $[2^j,2^{j+1}]$. On each nonempty piece set
$Y=2^{-j}X_j\subseteq[1,2]$, $V=(Y-1)/(Y+1)$, evaluate the positive logarithm
series on $V$ with its tail determined by $\max|V|$, and combine
$j\ln2+\ln Y$ by outward arithmetic. Take the hull over all intersected
bins.

3. Partition $\arctan$ input at the fixed real breakpoints
$-3,-1/2,1/2,3$. On pieces within $[-1/2,1/2]$, use its alternating power
series interval evaluation. For $t\in[1/2,1]$, use
$\arctan t=\pi/4-\arctan((1-t)/(1+t))$; for $t\in[1,3]$, use
$\arctan t=\pi/4+\arctan((t-1)/(t+1))$; for $t>3$, use
$\arctan t=\pi/2-\arctan(1/t)$. Use odd symmetry on negative pieces.
Enclose $\pi$ by Machin's identity and the alternating series at $1/5$ and
$1/239$, forming their rational partial sums and tail endpoints exactly
before the final outward conversion. If any branch test is unresolved, return
`inconclusive`.

4. For sine and cosine, first compute one outward Machin interval $P_N$ for
$\pi$ using the same $N$ and format, with the rational series endpoints
combined exactly before final outward conversion. If $P_N$ is non-finite or
its lower endpoint is not positive, return `inconclusive`. For finite input
$X=[a,b]$, put $M_X=\max(|a|,|b|)$, $p_-:=\inf(P_N)>0$, and
$K=\lceil2M_X/p_-\rceil+1$, with the ceiling computed by exact rational
comparisons. For $k>K$, the outward lower endpoint of cell $k$ is
$(2k-1)p_-/4>M_X$; for $k<-K$, its outward upper endpoint is
$-(2|k|-1)p_-/4<-M_X$. Thus every cell enclosure that can intersect $X$ is
in the finite candidate list $-K,\ldots,K$. Use the fixed canonical cells
$[k\pi/2-\pi/4,k\pi/2+\pi/4]$, $k\in\mathbb Z$. Enclose each cell using
exact rational expressions from $P_N$ and let $X_k$ be the interval hull of
its intersection with $X$; do not round candidate-cell or residual endpoints.
Include every cell whose $P_N$ enclosure cannot be ruled out as intersecting
$X$. Certify the residual enclosure $R=X_k-kP_N/2$ satisfies
$R\subseteq[-\inf(P_N)/4,\inf(P_N)/4]$, evaluate the corresponding power
polynomial and add the explicit geometric tail by exact rational interval
arithmetic, then round the final endpoints outward. The tail comes from
[[lem-trigonometric-identities-machin-and-range-reduction]], and map by the
quarter-period identities. If the input width is at least $2\sup(P_N)$,
return $[-1,1]$. If a cell cannot be certified in the reduced interval or the
finite candidate list cannot be resolved, return `inconclusive`. For tangent,
divide the sine enclosure by the cosine enclosure only on canonical pieces
where the latter excludes zero; otherwise return `split-domain` or
`inconclusive`.

5. For complex exponential, evaluate real $\exp(X)$, $\cos(Y)$ and
$\sin(Y)$ and combine them by rectangle operations. For principal
$\operatorname{Log}$, require a rectangle excluding zero and every point of
the negative real branch cut; otherwise return `domain-error`. Subdivide into
sign-stable quadrants and axis pieces; on the quadrants use
$$
\operatorname{Arg}(x+iy)=
\begin{cases}
\arctan(y/x),&x>0,\ y>0,\\
-\arctan((-y)/x),&x>0,\ y<0,\\
\pi-\arctan(y/(-x)),&x<0,\ y>0,\\
-\pi+\arctan((-y)/(-x)),&x<0,\ y<0.
\end{cases}
$$
For $x=0,y>0$ set $\operatorname{Arg}(iy)=\pi/2$, for $x=0,y<0$ set it to
$-\pi/2$, and on the positive real axis set it to zero. Enclose
$\ln\sqrt{X^2+Y^2}$ by the real operations and elementary evaluators. If the
branch or sign cannot be certified, return `inconclusive`.

6. Each displayed series uses indices $0,\ldots,N$, hence at most $N+1$
terms; $N$ is the truncation index. Branch breakpoints, dyadic scales and
$P_N$ are fixed by the call parameters, independent of the input box; no
adaptive subdivision or precision refinement is hidden inside this evaluator.
