---
id: thm-gr-fx-leapfrog-local-truncation
kind: theorem
title: "Second-order local residual of the periodic wave benchmark"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - alg-gr-fx-periodic-wave-leapfrog
  - cor-taylor-remainder-bound
  - thm-clairaut-schwarz-mixed-partials
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - def-abs-value
  - lem-of-triangle-inequality
dependency_roles:
  alg-gr-fx-periodic-wave-leapfrog: mathematical-premise
  cor-taylor-remainder-bound: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
  def-abs-value: mathematical-premise
physical_scope: "A consistency estimate for a smooth nondimensionalized scalar wave on the periodic circle. It is not a global error or Einstein-equation convergence theorem."
sources:
  references:
    - title: "Gilbert Strang, Mathematical Methods for Engineers II, MIT OpenCourseWare 18.086, Spring 2006, §5.3, complete 11-page lecture note"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/8eaa23367474c809cc0816f24fdacc7f_am53.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 3, complete 37-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/3all.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 4, complete 40-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $I\subseteq\mathbb R$ be open, and let $u:\mathbb R\times I\to\mathbb R$
be six times continuously differentiable and $2\pi$-periodic in its spatial
variable $x$. Assume the nondimensional scalar wave equation
$u_{tt}=u_{xx}$ on $\mathbb R\times I$. For $N\ge3$, $h=2\pi/N$, $k>0$,
$x_j=jh$, and an integer $n$ with $t_n=nk$ and
$[t_n-k,t_n+k]\subset I$, put
$$
U_j^n:=u(x_j,t_n),\qquad \tau_j^n:=\frac{U_j^{n+1}-2U_j^n+U_j^{n-1}}{k^2} -\frac{U_{j+1}^n-2U_j^n+U_{j-1}^n}{h^2}.
$$
Set $M_n$ to be the supremum
$$
M_n:=\sup\{|\partial_x^4u(x,t)|:0\le x\le2\pi,\ t_n-k\le t\le t_n+k\}.
$$
Then for every grid index $j$,
$$
|\tau_j^n|\le\frac{k^2+h^2}{12}M_n.
$$
Thus the normalized local truncation residual is $O(k^2+h^2)$ on each
compact time window where the displayed fourth-derivative bound is uniform.
This consistency estimate alone is not a convergence theorem.

## Statement references

[[alg-gr-fx-periodic-wave-leapfrog]]

[[cor-taylor-remainder-bound]]

[[thm-clairaut-schwarz-mixed-partials]]

[[thm-heine-borel-rn]]

[[thm-extreme-value-metric]]

[[def-abs-value]]

[[lem-of-triangle-inequality]]

## Facts & Assumptions

**Given:** A $C^6$ periodic solution of $u_{tt}=u_{xx}$ on the stated open
time interval and the periodic grid of the scalar benchmark.

[F1] [[alg-gr-fx-periodic-wave-leapfrog]]: $h=2\pi/N$, $x_j=jh$ modulo the
period, and the normalized discrete second difference is the centered
three-point expression in the Statement.

[F2] [[cor-taylor-remainder-bound]]: if the fourth derivative of a scalar
function has absolute value at most $M$ between $x$ and $x+d$, its Taylor
remainder after degree three has absolute value at most $M|d|^4/4!$.

[F3] [[thm-clairaut-schwarz-mixed-partials]]: continuous mixed partials of
the $C^6$ function commute, so differentiating the wave equation twice gives
$u_{tttt}=u_{xxxx}$.

[F4] [[thm-heine-borel-rn]]: every closed box in Euclidean $\mathbb R^2$ is
compact.

[F5] [[thm-extreme-value-metric]]: a continuous real-valued function on a
nonempty compact metric space is bounded (and attains its extrema).

[F6] [[def-abs-value]]: for real $x$, $|x|=x$ when $x\ge0$ and $|x|=-x$
when $x<0$.

[F7] [[lem-of-triangle-inequality]]: for real $a,b$,
$|a+b|\le|a|+|b|$.

## Proof

**Proof technique:** direct Taylor estimate.

1.1 The set $[0,2\pi]\times[t_n-k,t_n+k]$ is a nonempty closed box in
$\mathbb R^2$: $k>0$ and the time interval lies in $I$. Thus [F4] makes it
compact. The function $(x,t)\mapsto u_{xxxx}(x,t)$ is continuous there because
$u\in C^6$; [F5] bounds it, so $M_n<\infty$ as claimed.
[given, F4, F5, algebra]

1.2 Apply [F2] to the spatial function $x\mapsto u(x,t_n)$ at $x_j$ with
increments $h$ and $-h$. Adding the two degree-three Taylor polynomials and
subtracting twice their common center value cancels their odd terms and leaves $h^2u_{xx}(x_j,t_n)$. By [F2], each remainder has absolute value at
most $M_nh^4/4!$; by [F7], the sum of the two remainders has absolute value
at most $2M_nh^4/4!$. After division by $h^2$,
$$
\left|\frac{U_{j+1}^n-2U_j^n+U_{j-1}^n}{h^2}-u_{xx}(x_j,t_n)\right| \le\frac{h^2}{12}M_n.
$$
Periodicity of $u$ and its derivatives extends the bound defining $M_n$ from
$[0,2\pi]$ to all real spatial coordinates, including a wrapped neighbor.
[F1, F2, F6, F7, given, algebra]

1.3 Apply the same estimate to $t\mapsto u(x_j,t)$ with increments $k$ and
$-k$. By [F3] and $u_{tt}=u_{xx}$, the fourth time derivative equals
$u_{tttt}=u_{xxxx}$, whose absolute value is bounded by $M_n$ on this time
window and all $x$. Thus
$$
\left|\frac{U_j^{n+1}-2U_j^n+U_j^{n-1}}{k^2}-u_{tt}(x_j,t_n)\right| \le\frac{k^2}{12}M_n.
$$
[given, F2, F3, algebra]

2.1 Subtract the two estimates of steps 1.2 and 1.3, use
$u_{tt}(x_j,t_n)=u_{xx}(x_j,t_n)$, and apply the real triangle inequality
[F7] to their error terms. The result is
$|\tau_j^n|\le(k^2+h^2)M_n/12$, as claimed. [F7, step 1.2, step 1.3, given, algebra] ∎
