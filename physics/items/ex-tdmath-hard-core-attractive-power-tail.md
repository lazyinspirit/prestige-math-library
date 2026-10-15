---
id: ex-tdmath-hard-core-attractive-power-tail
kind: example
title: "A hard core stabilizes an attractive power tail"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-stable-power-tempered-particle-model, def-integers, def-real-power, thm-real-power-continuity-and-derivatives, cor-mean-value-theorem, def-nonnegative-extended-series, thm-p-series-real-exponents]
dependency_roles:
  def-tdmath-stable-power-tempered-particle-model: mathematical-premise
  def-integers: mathematical-premise
  def-real-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-nonnegative-extended-series: mathematical-premise
  thm-p-series-real-exponents: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stefan Adams, Mathematical Statistical Mechanics, MPI Lecture Note 30, §5.2"
      url: "https://files-www.mis.mpg.de/mpi-typo3/preprints/ln/lecturenote-3006.pdf"
    - title: "M. E. Fisher and J. L. Lebowitz, Asymptotic Free Energy of a System with Periodic Boundary Conditions, §§II–III"
      url: "https://cmsr.rutgers.edu/images/people/lebowitz_joel/publications-archived/jll.pub_69.pdf"
    - title: "D. Ruelle, Classical Statistical Mechanics of a System of Particles"
      url: "https://www.e-periodica.ch/cntmng?pid=hpa-001%3A1963%3A36%3A%3A1128&bot=1"
---

## Example

Fix an integer $d\ge1$ and constants $c,\epsilon>0$. Set $p=d+\epsilon$ and
define the even radial pair potential
$$\phi_{\mathrm{att}}(x):=\begin{cases}+\infty,&\|x\|_2<1,\\-c\|x\|_2^{-p},&\|x\|_2\ge1.\end{cases}$$
It has a hard core and a nonzero attractive power tail.

## Facts & Assumptions

**Given:** The model conventions of [[def-tdmath-stable-power-tempered-particle-model]], $d\ge1$ an integer, and $c,\epsilon>0$.

[F1] [[def-tdmath-stable-power-tempered-particle-model]] defines the pair energy $U_N$, stability, Euclidean norm, and power-tempering bound.

[F2] [[def-real-power]] and [[thm-real-power-continuity-and-derivatives]] give continuity of positive-base real powers and $(r^{-p})'=-p r^{-p-1}<0$ for $p>0$. The [[cor-mean-value-theorem]] therefore makes $r\mapsto r^{-p}$ decreasing on $(0,\infty)$.

[F3] [[def-integers]]: the number of lattice points $k\in\mathbb Z^d$ with $\|k\|_\infty=m$ is $(2m+1)^d-(2m-1)^d$, by subtracting the integer box of radius $m-1$ from the box of radius $m$.

[F4] [[def-nonnegative-extended-series]] defines the nonnegative series by its partial sums, and [[thm-p-series-real-exponents]] gives $\sum_{m=2}^{\infty}m^{-1-\epsilon}<\infty$ because $1+\epsilon>1$.

## Verification

1.1 From the coordinate formula in [F1], $\|x\|_2=\sqrt{\sum_{r=1}^d x_r^2}$ is continuous: each coordinate square is continuous by $u^2-v^2=(u-v)(u+v)$, and for $u,v\ge0$, $|\sqrt u-\sqrt v|\le\sqrt{|u-v|}$, since, if $u\ge v$, $(\sqrt u-\sqrt v)^2\le(\sqrt u-\sqrt v)(\sqrt u+\sqrt v)=u-v$, with the other case symmetric. Thus the square-root composition is continuous, including at $x=0$. The map $r\mapsto r^{-p}$ is continuous on $r>0$ by [F2]. The regions $\{\|x\|_2<1\}$ and $\{\|x\|_2\ge1\}$ are Borel, so the piecewise potential is Borel; radiality makes it even. For $\|x\|_2\ge1$, $|\phi_{\mathrm{att}}(x)|=c\|x\|_2^{-d-\epsilon}$, so it is power-tempered with $C=c$ and $R=1$. [given, F1, F2, algebra]

1.2 Put $\delta:=1/(2\sqrt d)$. For a fixed particle $q_i$, the half-open
cubes $D_k:=q_i+\delta k+[0,\delta)^d$, $k\in\mathbb Z^d$, partition
$\mathbb R^d$. Their Euclidean diameters are at most $\sqrt d\,\delta=1/2<1$.
The example's definition makes every pair at distance less than $1$ forbidden,
so centers in a finite-energy configuration are separated by at least $1$.
Thus each cube contains at most one center and $D_0$ contains no center other
than $q_i$. The cells in max-norm shell $m$ number
$(2m+1)^d-(2m-1)^d$ by [F3]. For $m\ge1$, factor the difference of powers:
$$(2m+1)^d-(2m-1)^d=2\sum_{r=0}^{d-1}(2m+1)^{d-1-r}(2m-1)^r\le2d3^{d-1}m^{d-1},$$
since $2m+1\le3m$. [given, F1, F3, construct, algebra]

2.1 A neighbor of $q_i$ in shell $m=1$ has distance at least $1$ and
contributes at most $c$ in absolute value; there are $3^d-1$ such cells. For
$m\ge2$, choose a coordinate $r$ with $|k_r|=m$. If $k_r=m$, every point of
$D_k$ differs from $q_i$ in coordinate $r$ by at least $\delta m$; if
$k_r=-m$, the absolute difference is greater than $\delta(m-1)$. Hence every
point of $D_k$ is at Euclidean distance at least $\delta(m-1)$ from $q_i$.
By [F2], each such neighbor contributes at most
$c\delta^{-p}(m-1)^{-p}$. The shell count in step 1.2 therefore bounds its
total contribution by
$$2d3^{d-1}m^{d-1}c\delta^{-p}(m-1)^{-d-\epsilon}.$$
[given, F2, step 1.2, algebra]

3.1 For $m\ge2$, $m-1\ge m/2$, so the last bound is at most
$2d3^{d-1}c\delta^{-p}2^p m^{-1-\epsilon}$. Summing over shells and using
[F4], every fixed particle satisfies
$$\sum_{j\ne i}|\phi_{\mathrm{att}}(q_i-q_j)|\le C_*:=c(3^d-1)+2d3^{d-1}c\delta^{-p}2^p\sum_{m=2}^{\infty}m^{-1-\epsilon}<\infty.$$
[F3, F4, step 1.2, step 2.1, algebra]

4.1 For a finite-energy configuration, every pair term is negative and
$$-U_N=\sum_{i<j}|\phi_{\mathrm{att}}(q_i-q_j)|=\frac12\sum_i\sum_{j\ne i}|\phi_{\mathrm{att}}(q_i-q_j)|\le\frac{C_*}{2}N$$
by step 3.1. A configuration containing a forbidden pair has $U_N=+\infty$
and also satisfies the lower bound. Hence the potential is stable with
$B=C_*/2$. Together with step 1.1, this proves membership in the stated
stable power-tempered class. [F1, step 1.1, step 3.1, algebra] ∎

## Remarks

The negative algebraic tail is genuinely attractive at every allowed separation; the hard core and lattice-shell summation give a uniform stability constant. The example does not say that every attractive power tail is stable. The A-page theorem remains a free-cube grand-pressure result and gives no canonical fixed-density or arbitrary-boundary conclusion.
