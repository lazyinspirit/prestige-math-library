---
id: alg-certified-adaptive-simpson
kind: algorithm
title: Certified adaptive Simpson from derivative enclosures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-composite-simpson-rule
  - def-higher-derivatives-and-smoothness
  - thm-composite-simpson-error-bound
  - def-intervals-rectangles-and-complex-balls
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-outward-rounded-interval-and-ball-operations
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: [thm-certified-adaptive-simpson-enclosure]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1 and 3.3"
      url: https://interval.louisiana.edu/preprints/survey.pdf
      locator: Outward-rounded interval enclosures and verified quadrature.
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic"
      url: https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf
      locator: §4, directed rounding; §§8 and 12, interval range evaluation and verified Simpson quadrature.
    - title: L. Ridgway Scott, Numerical Analysis, 2nd ed., Chapter 13, §13.2
      url: https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf
      locator: §13.2, Theorem 13.5, printed pp. 223–224; Peano remainder and L1 error bound.
---

## Definition

Input finite dyadic endpoints $a<b$, a positive dyadic tolerance $\tau$, integers $D\ge0$ and
$P\ge1$, and a function $f\in C^4([a,b])$. Also supply two validated
enclosure routines:

- $V(x)$ returns a finite real interval containing the exact value $f(x)$;
- $Y([u,v])$ returns a finite real interval containing every
  $f^{(4)}(x)$ for $x\in[u,v]$.

If either routine does not meet its enclosure contract, this algorithm makes
no certification claim; soundness is a mathematical caller precondition and
cannot be detected from samples. An explicit oracle failure or malformed or
non-finite interval result returns `failure`. The intervals and operations are those of
[[def-intervals-rectangles-and-complex-balls]] and
[[def-outward-rounded-interval-and-ball-operations]]. The function
$\operatorname{ru}$ is upward directed rounding from
[[def-dyadic-floating-point-format-and-directed-rounding]]. A midpoint that is not
exactly representable or a non-finite interval operation returns `failure`
with no enclosure; malformed or non-finite oracle results are covered by the
explicit failure rule above.

Define $A([u,v],d,p,t)$ recursively. Form the exact midpoint $m=(u+v)/2$; if
it is not representable in the format, return `failure`. Query $V(u),V(m),V(v)$
and let $Y([u,v])=[y_-,y_+]$. Put $M=\max(|y_-|,|y_+|)$ and let $L=v-u$
be the exact difference of the dyadic endpoints. Form an outward-rounded
interval $W=[v,v]-[u,u]$ by interval subtraction, and compute
$S_P:=(W/[6,6])\bigl(V(u)+4V(m)+V(v)\bigr)$ using outward interval
operations. Compute $B_P=\operatorname{ru}(ML^5/2880)$ by upward rounding the
exact real expression; if it overflows, return `failure`. Set
$C_P=S_P+[-B_P,B_P]$ by outward interval addition. If any interval operation
has a non-finite status, return `failure`. Treat the endpoints of $C_P$ as exact
dyadic rationals and report their exact rational midpoint $q_P$ and half-width
$r_P$; compare $r_P$ with $t$ exactly.

1. If $r_P\le t$, return (`certified`, enclosure $C_P$, estimate $q_P$,
   error bound $r_P$).
2. If $r_P>t$ and either $d=0$ or $p<3$, return
   (`inconclusive`, enclosure $C_P$, estimate $q_P$, error bound $r_P$).
3. Otherwise split at $m$, allocate
   $p_L=\lfloor(p-1)/2\rfloor$ and $p_R=\lceil(p-1)/2\rceil$, and recurse
   with depth $d-1$ and tolerance $t/2$ on each half. A failed child or
   non-finite interval sum returns `failure`. Otherwise outward-add the child
   enclosures to obtain $C$, with exact midpoint $q$ and half-width $r$;
   return `certified` if $r\le t$, and `inconclusive` otherwise.

The public call is $A([a,b],D,P,\tau)$. `certified` asserts an error at most
$r\le\tau$; `inconclusive` still returns a valid enclosure and bound but does
not assert the requested tolerance was met. The derivative enclosure routine
is an explicit mathematical precondition, not something inferred from
sampled values or the Simpson indicator. Outward rounding of all interval
operations, and the separate Peano remainder bound, are essential.
