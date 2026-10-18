---
id: thm-na-weighted-rational-alternation-characterization
kind: theorem
title: "Weighted rational minimizers satisfy the defect-sensitive alternation criterion"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-weighted-rational-minimax-family
  - lem-na-extrema-sign-block-polynomial
  - lem-na-polynomial-interpolation-alternating-weight-annihilator
  - lem-na-polynomial-alternating-signs-force-root-count
  - lem-na-reduced-rational-representation-unique
  - lem-na-rational-perturbation-space
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-intermediate-value
  - thm-na-best-weighted-rational-approximation-exists
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 24"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 199–207, defect-sensitive real rational equioscillation theorem and proof."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §§6.2–6.5"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 44–46, rational perturbation dimension, alternation theorem, and uniqueness."
---

## Statement

Let $I=[a,b]$ with $a<b$, let $m,n\ge0$, and let $f,w\in C(I,\mathbb R)$
with $w>0$ on $I$. A best rational approximant in
$\mathcal R_{m,n}^+(I)$ exists and is unique. For a candidate $r=p/q$ with
positive weighted error $E_r:=\|w(f-r)\|_{\infty,I}>0$, let
$N=N_{m,n}(r)=m+n-d_{m,n}(r)$. Then $r$ is best if and only if there are
$N+2$ ordered nodes $x_0<\cdots<x_{N+1}$ in $I$ and
$\sigma\in\{-1,1\}$ such that
$$w(x_i)(f(x_i)-r(x_i))=\sigma(-1)^iE_r\qquad(0\le i\le N+1).$$
If the best error is $0$, positivity of $w$ forces the unique best function
to be $f$ itself. In the normal case $d=0$ the count is $m+n+2$; for
defective candidates the count is $m+n+2-d$.

## Facts & Assumptions

**Given:** A nondegenerate compact interval $I=[a,b]$, integers $m,n\ge0$, continuous real functions $f,w$ on $I$ with $w>0$, and a candidate $r=p/q\in\mathcal R_{m,n}^+(I)$.

[F1] [[def-na-weighted-rational-minimax-family]]: the rational family has positive reduced denominators, weighted error $\|w(f-r)\|_{\infty,I}$, defect $d$, effective perturbation degree $N=m+n-d$, and the zero-function convention $d=n$.

[F2] [[thm-na-best-weighted-rational-approximation-exists]]: a candidate attaining $E_{m,n}(f,w;I)$ exists.

[F3] [[lem-na-rational-perturbation-space]]: for a candidate of defect $d$, the polynomials $uq-pv$ with $\deg u\le m$ and $\deg v\le n$ form exactly $\mathcal P_N$.

[F4] [[lem-na-extrema-sign-block-polynomial]]: if a continuous residual has no $N+2$ alternating active extrema, a polynomial of degree at most $N$ can be chosen with the same strict sign on every active extremum.

[F5] [[lem-na-polynomial-interpolation-alternating-weight-annihilator]]: for $N+2$ ordered nodes, set $w_i=\prod_{j\ne i}(x_i-x_j)$. Every polynomial $g$ of degree at most $N$ has $\sum_i g(x_i)/w_i=0$, and if $\varepsilon(-1)^i g(x_i)\geq0$ for one fixed $\varepsilon\in\{-1,1\}$ then all node values are zero.

[F6] [[lem-na-polynomial-alternating-signs-force-root-count]]: a nonzero polynomial of degree at most $N$ cannot have nonzero alternating signs at $N+2$ ordered nodes.

[F7] [[lem-na-reduced-rational-representation-unique]]: a rational function has a unique coprime reduced pair up to scale, and a positive coefficient-norm normalization fixes that scalar.

[F8] [[thm-algebra-of-continuous-functions]]: sums, products, and quotients by nowhere-zero continuous functions are continuous.

[F9] [[thm-intermediate-value]]: a continuous real function on an interval takes every value between its endpoint values.

[F10] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous real functions on compact intervals attain extrema, and closed subsets of compact intervals are compact.

## Proof

1.1 First suppose $E_r>0$ and that $r$ has $N+2$ alternating weighted extrema. If another admissible $s=p'/q'$ had strictly smaller weighted error, write $e_i=w(x_i)(f(x_i)-r(x_i))=\sigma(-1)^iE_r$ and $e_i'=w(x_i)(f(x_i)-s(x_i))$, so $|e_i'|<E_r$. Then $\sigma(-1)^i w(x_i)(s(x_i)-r(x_i))=E_r-\sigma(-1)^ie_i'>0$. Since $w(x_i)q(x_i)q'(x_i)>0$, the numerator $p'q-pq'$ has nonzero alternating signs at those nodes. It lies in $\mathcal P_N$ by [F3], contradicting [F6]. Thus no rational candidate has smaller weighted error and $r$ is best. [F1, F3, F6, given, algebra]

1.2 Now suppose $r$ is best with $E:=E_r>0$, and put $e=w(f-r)$. It is continuous by [F8], and [F10] makes $|e|$ attain $E$ on compact $I$, so its active-extrema set is nonempty and compact. If it had no $N+2$ alternating points, [F4] would give a polynomial $g\in\mathcal P_N$ with $e(x)g(x)>0$ on that set. By [F3], choose $u,v$ with $\deg u\le m$, $\deg v\le n$, and $g=uq-pv$. [F1, F3, F4, F8, F10, given, construct]

1.3 If the best error is zero, then $w(f-r)=0$ everywhere; since $w>0$, $r=f$ pointwise, so the best rational function is unique. [F1, F2, algebra]

2.1 Since $q>0$ on compact $I$, [F10] gives $q_0=\min_I q>0$. For all sufficiently small $\varepsilon>0$, $q+\varepsilon v>0$ on $I$. Reduce $(p+\varepsilon u,q+\varepsilon v)$ by [F7]. Its reduced denominator has no zero on $I$, since it divides $q+\varepsilon v$; it is continuous by [F8] and has constant sign by [F9], so a common sign change makes it positive and a further positive scaling gives coefficient norm $1$. Thus $r_\varepsilon=(p+\varepsilon u)/(q+\varepsilon v)$, as a rational function, is represented by an admissible member of $\mathcal R_{m,n}^+(I)$. Its weighted residual is $e_\varepsilon=e-\varepsilon h_\varepsilon$, where $h_\varepsilon:=wg/[q(q+\varepsilon v)]$. On the active-extrema set, $h_0=wg/q^2$ has the same sign as $e$ and is bounded away from zero. By [F8] and [F10], $h_0$ and $e$ are continuous and bounded; the denominator bound implies $h_\varepsilon\to h_0$ uniformly as $\varepsilon\downarrow0$. Hence there are a neighborhood $U$ of that set and a constant $c>0$ such that $|e|>E/2$, $e$ and $h_\varepsilon$ have the same sign, and $|h_\varepsilon|\ge c$ on $U$ for all sufficiently small $\varepsilon$. Shrink $\varepsilon$ further so $\varepsilon\|h_\varepsilon\|_{\infty,I}<E/2$; then $\varepsilon|h_\varepsilon|<|e|$ on $U$ and $|e_\varepsilon|=|e|-\varepsilon|h_\varepsilon|\le E-\varepsilon c<E$. The compact complement $I\setminus U$, if nonempty, contains no active extremum, so [F10] gives $|e|\le E-\eta$ there for some $\eta>0$; a further small choice of $\varepsilon$ makes $\varepsilon\|h_\varepsilon\|_{\infty,I}<\eta/2$. Hence $\|e_\varepsilon\|_{\infty,I}<E$, contradicting best approximation. This proves necessity. [F1, F3, F4, F7, F8, F9, F10, given, step 1.2, choose, algebra]

3.1 Suppose the best error $E$ is positive and $r,s=p'/q'$ are both best. By step 2.1, $r$ has $N+2$ alternating nodes. At each such node, $w(s-r)=e_r-e_s$ has weak sign $\sigma(-1)^i$, because $|e_s|\le E$. The numerator $g=p'q-pq'$ lies in $\mathcal P_N$ by [F3], and its values have the same weak alternating signs since $wqq'>0$. Thus $\varepsilon(-1)^i g(x_i)\ge0$ with $\varepsilon=\sigma$, so [F5] gives $g=0$ and hence $r=s$. [F1, F3, F5, F7, step 2.1, algebra]

4.1 Steps 1.1 and 2.1 prove the two directions of the criterion for positive error; steps 1.3 and 3.1 prove uniqueness in the zero- and positive-error cases. Existence is [F2]. [F2, step 1.1, step 2.1, step 1.3, step 3.1] ∎
