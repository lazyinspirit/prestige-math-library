---
id: thm-certified-adaptive-simpson-enclosure
kind: theorem
title: Sound integral enclosure from certified adaptive Simpson
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-certified-adaptive-simpson
  - alg-composite-simpson-rule
  - def-higher-derivatives-and-smoothness
  - thm-composite-simpson-error-bound
  - def-intervals-rectangles-and-complex-balls
  - def-dyadic-floating-point-format-and-directed-rounding
  - def-outward-rounded-interval-and-ball-operations
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
  - thm-additivity-over-subintervals
  - thm-heine-borel-r
  - thm-extreme-value-r
  - cor-of-reverse-triangle
justified_by: []
proof_strategy: direct
axiom_use: None. The proof is finite and uses no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, §§1 and 3.3"
      url: https://interval.louisiana.edu/preprints/survey.pdf
      locator: Outward-rounded enclosures and guaranteed quadrature bounds.
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic"
      url: https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf
      locator: §4, directed rounding; §§8 and 12, interval range enclosures and verified Simpson quadrature.
    - title: L. Ridgway Scott, Numerical Analysis, 2nd ed., Chapter 13, §13.2
      url: https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf
      locator: §13.2, Theorem 13.5, printed pp. 223–224; Peano remainder and L1 error bound.
---

## Statement

Assume the input hypotheses and the two sound enclosure-oracle contracts in
[[alg-certified-adaptive-simpson]]. Whenever the algorithm returns `certified`
or `inconclusive` with a finite enclosure $C=[L,U]$, the exact Riemann
integral $I=\int_a^b f(x)\,dx$ belongs to $C$. Its reported center
$q=(L+U)/2$ and half-width $r=(U-L)/2$ satisfy $|I-q|\le r$. A `certified`
status additionally means $r\le\tau$. The algorithm terminates after at
most $P$ recursive panel calls. If an oracle reports failure or returns a
malformed or non-finite interval, or an interval operation is non-finite, the
algorithm returns `failure` and asserts no finite enclosure. An `inconclusive` result
does not assert that the requested tolerance was met.

## Facts & Assumptions

**Given:** A finite dyadic interval $[a,b]$, $a<b$, a $C^4$ function, and
validated point-value and fourth-derivative interval enclosures on every
queried point and panel.

[A1] The point-value routine returns a finite interval containing $f(x)$ at
each queried node, and the fourth-derivative routine returns a finite interval
containing $f^{(4)}([u,v])$ on each queried panel.

[F1] [[alg-composite-simpson-rule]]: for $n=2$ the exact panel value is
$L(f)=\frac{v-u}{6}(f(u)+4f((u+v)/2)+f(v))$.

[F2] [[thm-composite-simpson-error-bound]]: for $f\in C^4([u,v])$ and an
even grid with step $h$, the exact error is at most
$(v-u)h^4\max|f^{(4)}|/180$.

[F3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: finite
outward-rounded interval operations enclose the exact values of every
operation node in a finite arithmetic expression DAG; a non-finite status
makes no finite claim.

[F4] [[def-outward-rounded-interval-and-ball-operations]] and
[[def-intervals-rectangles-and-complex-balls]]: finite interval operations
use outward-rounded endpoint formulas, and finite intervals have ordered
endpoints.

[F5] [[def-dyadic-floating-point-format-and-directed-rounding]]:
$\operatorname{ru}(x)$ is the least representable number greater than or
equal to a finite $x$ when it is within range; overflow is reported otherwise.

[F6] [[def-higher-derivatives-and-smoothness]]: $C^4$ means derivatives
through order four are continuous on the closed interval.

[F7] [[thm-additivity-over-subintervals]]: if $f$ is integrable on $[a,b]$
and $a<c<b$, then $\int_a^b f=\int_a^c f+\int_c^b f$; iterating this
identity gives additivity over finite adjacent partitions.

[F8] [[alg-certified-adaptive-simpson]]: a panel is split only when its
radius exceeds the local tolerance and both depth and panel-call budget allow
it; child tolerances are halved, and child enclosures are outward-added.

[F9] [[thm-heine-borel-r]]: every closed bounded interval is compact.

[F10] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact
set attains its maximum.

[F11] [[cor-of-reverse-triangle]]: for reals $x,y$,
$\bigl||x|-|y|\bigr|\le|x-y|$.

## Proof

1.1 Fix a recursive panel $[u,v]$ of length $L$ with finite oracle results. By [A1], the exact values $f(u),f((u+v)/2),f(v)$ belong to their returned intervals. The interval $W=[v,v]-[u,u]$ in [F4] contains $L=v-u$, and $[6,6]$ is an exact positive divisor. Thus the expression DAG for $S_P$ in the algorithm contains the exact $L(f)$ expression of [F1]; by [F3]–[F4], $S_P$ contains the exact Simpson value $S$. [given, A1, F1, F3, F4, construct]

1.2 By [A1], every value of $f^{(4)}$ on $[u,v]$ lies between $y_-$ and $y_+$; ordered endpoints [F4] imply its absolute value is at most $M=\max(|y_-|,|y_+|)$. This $M$ is nonnegative. By [F6], the restriction of $f$ to $[u,v]$ is $C^4$ and $g:=f^{(4)}$ is continuous. For any $x,y\in[u,v]$, [F11] gives $\bigl||g(x)|-|g(y)|\bigr|\le|g(x)-g(y)|$. Fix $x_0\in[u,v]$ and let $\varepsilon>0$. Continuity of $g$ at $x_0$ supplies $\delta>0$ such that $x\in[u,v]$ and $|x-x_0|<\delta$ imply $|g(x)-g(x_0)|<\varepsilon$. Then [F11] gives $\bigl||g(x)|-|g(x_0)|\bigr|<\varepsilon$, so $|g|$ is continuous at $x_0$. Since $x_0$ was arbitrary, $|g|$ is continuous on $[u,v]$. By [F9], $[u,v]$ is compact, and [F10] gives $M_4=\max_{x\in[u,v]}|g(x)|$. Since every $|g(x)|\le M$ by [A1] and [F4], $M_4\le M$. Applying [F2] with $n=2$ and step $h=L/2$ gives $|\int_u^v f-S|\le M_4L^5/2880\le ML^5/2880$. The directed upward rounding in the algorithm makes $B_P\ge ML^5/2880$ by [F5]. Thus the exact panel integral belongs to $S+[-B_P,B_P]$. Outward interval addition and [F3] show that it belongs to $C_P$. [given, A1, F2, F3, F4, F5, F6, F9, F10, F11, algebra]

1.3 For $p=1$ or $p=2$, [F8] forbids a split, so after the finite panel calculation the call returns. For $p\ge3$, a call either returns without splitting or splits into two adjacent halves with positive budgets $p_L,p_R<p$ and $p_L+p_R=p-1$, by [F8]. Strong induction on $p$ therefore proves termination; a split tree uses at most $1+p_L+p_R=p$ calls, so the public call uses at most $P$. [given, F8, induction, algebra]

2.1 The returned panels form a finite partition of $[a,b]$. Each leaf interval contains its exact panel integral by step 1.2; [F7] adds those integrals to $I$. At each internal node the outward interval sum contains the exact sum of its child interval values by [F3] and [F8]. Induction up the finite tree proves $I\in C$. [given, F3, F7, F8, step 1.2, step 1.3, induction, algebra]

3.1 Since $C=[L,U]$ contains $I$, its midpoint and half-width satisfy $|I-(L+U)/2|\le(U-L)/2$. By [F8], the algorithm returns `certified` only after the exact comparison $r\le\tau$; otherwise it returns `inconclusive`. An explicit oracle failure, malformed or non-finite oracle interval, or non-finite interval operation returns no finite enclosure by definition. The truth of the oracle's enclosure contract remains a hypothesis, not a runtime test. [given, F3, F8, step 2.1, algebra] ∎

