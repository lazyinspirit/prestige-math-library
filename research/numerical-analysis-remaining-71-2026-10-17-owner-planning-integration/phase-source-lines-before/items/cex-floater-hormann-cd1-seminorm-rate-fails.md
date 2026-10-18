---
id: cex-floater-hormann-cd1-seminorm-rate-fails
kind: counterexample
title: Uniform meshes refute the C^(d+1)-seminorm-only Floater–Hormann rate
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps:
  - def-floater-hormann-interpolant
  - def-barycentric-rational-quotient
  - thm-floater-hormann-no-real-poles
  - def-higher-derivatives-and-smoothness
  - thm-extreme-value-r
dependency_level: 8
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Michael S. Floater and Kai Hormann, Barycentric rational interpolation with no poles and high rates of approximation, Sections 2 and 4
      url: https://www.mn.uio.no/math/english/people/aca/michaelf/papers/rational.pdf
---

## Statement refuted

The refuted claim is that, for every integer $d\ge0$ and $\rho\ge1$, there
exists a constant $C(d,\rho)$ such that for every $n>d$, every ordered
distinct real mesh $x_0<\cdots<x_n$ in a compact interval $[a,b]$, and every
$f\in C^{d+1}([a,b])$, the exact Floater–Hormann interpolant $r_d$ satisfies
the following bound whenever $h/h_{\min}\le\rho$, where
$h=\max_j(x_{j+1}-x_j)$ and $h_{\min}=\min_j(x_{j+1}-x_j)$:
$$\|f-r_d\|_\infty\le C(d,\rho)h^{d+1}\|f^{(d+1)}\|_\infty$$
Here $\|q\|_\infty:=\sup_{t\in[a,b]}|q(t)|$ for continuous $q$ on $[a,b]$.

## Facts & Assumptions

**Given:** A fixed integer $d\ge0$, the exact Floater–Hormann weights on uniform nodes, and the construction below.

[F1] [[def-floater-hormann-interpolant]]: the weights are
$w_j=(-1)^{j-d}\sum_{i=\max(0,j-d)}^{\min(j,n-d)}
\prod_{k=i,\ k\ne j}^{i+d}|x_j-x_k|^{-1}$.

[F2] [[thm-floater-hormann-no-real-poles]]: the exact denominator is nonzero at every real query point.

[F3] [[def-higher-derivatives-and-smoothness]]: $C^{d+1}$ means derivatives through order $d+1$ exist and are continuous on the closed interval.

[F4] [[def-barycentric-rational-quotient]]: away from support nodes, the rational quotient is the barycentric numerator divided by its denominator; common nonzero scaling of all weights cancels.

[F5] [[thm-extreme-value-r]]: a continuous real function on the nonempty compact interval has a finite attained maximum and minimum.

## Counterexample

1.1 Fix $d\ge0$. For every integer $n\ge2d+2$, take $h=1/n$,
$x_j=jh$ on $[0,1]$, and query $x=h/2$. This family has
$h/h_{\min}=1$. From [F1], after multiplying every weight by the same
positive factor $h^dd!$, its weights are
$$\widetilde w_j=(-1)^{j-d}\delta_j,\qquad \delta_j=\sum_{i=\max(0,j-d)}^{\min(j,n-d)}\binom d{j-i}.$$
Indeed, on a uniform mesh each reciprocal-distance product in [F1] equals
$h^{-d}/((j-i)!(i+d-j)!)$. Thus $1\le\delta_j\le2^d$, and
$\delta_j=2^d$ for $d\le j\le n-d$. [given, F1, construct, algebra]

1.2 Let
$D(x)=\sum_{j=0}^n\widetilde w_j/(x-x_j)$ be the denominator at the query.
If $d=0$, its $j=0$ term has magnitude $2/h$, and the remaining terms form
an alternating decreasing sequence beginning with magnitude $2/h$, so
$|D(x)|\le4/h$. If $d\ge1$, the endpoint blocks
$j=0,\ldots,d-1$ and $j=n-d+1,\ldots,n$ each contain $d$ terms of magnitude
at most $2^{d+1}/h$. The middle block $j=d,\ldots,n-d$ has constant
$\delta_j=2^d$ and alternating decreasing magnitudes, so its sum has
magnitude at most $2^{d+1}/h$. Hence in both cases
$$0<|D(x)|\le \frac{2^d(4d+4)}h,$$
The strict lower inequality follows from [F2]. [given, F1, F2, step 1.1, algebra]

2.1 Define
$$\phi(t)= \begin{cases} (1-16t^2)^{d+2},& |t|\le1/4,\\ 0,& |t|>1/4. \end{cases}$$
At both support endpoints the polynomial has a zero of multiplicity $d+2$,
so its derivatives through order $d+1$ vanish there and agree with the zero
extension; hence $\phi\in C^{d+1}(\mathbb R)$ and $\phi(0)=1$. Expanding the polynomial
and differentiating each term gives
$$\|\phi^{(d+1)}\|_\infty\le M_d:=4^{d+1} \sum_{k=\lceil(d+1)/2\rceil}^{d+2} \binom{d+2}{k}\frac{(2k)!}{(2k-d-1)!}<\infty.$$
This is a finite bound depending only on $d$, and its $k=d+2$ term shows
$M_d>0$. [given, construct, algebra]

2.2 The real number $\widetilde w_j/(x-x_j)$ is nonzero. Define
$\sigma_j=1$ if it is positive and $\sigma_j=-1$ if it is negative, and set
$$f_n(t)=h^{d+1}\sum_{j=0}^{n} \sigma_j\phi\!\left(\frac{t-x_j}{h}\right),\qquad 0\le t\le1.$$
The supports have radius $h/4$ about distinct nodes, so they are disjoint;
the query $x=h/2$ is outside every support. Therefore
$f_n(x)=0$, $f_n(x_j)=h^{d+1}\sigma_j$, $f_n\in C^{d+1}([0,1])$, and
$\|f_n^{(d+1)}\|_\infty\le M_d$ by [F3] and the derivative estimate in
step 2.1. [given, F3, step 2.1, construct, algebra]

2.3 By the barycentric quotient formula [F4] and the signs $\sigma_j$, the
numerator at $x$ is $h^{d+1}\sum_j|\widetilde w_j/(x-x_j)|$. Restricting to
$j=d+1,\ldots,n-d$ and using $\delta_j=2^d$ and
$|x-x_j|=h(j-\tfrac12)$, step 1.2 gives
$$|f_n(x)-r_d(x)| \ge\frac{h^{d+1}}{4d+4} \sum_{j=d+1}^{n-d}\frac1{j-\tfrac12}.$$
Since $t\mapsto1/(t-\tfrac12)$ is decreasing,
$$\sum_{j=d+1}^{n-d}\frac1{j-\tfrac12} \ge \int_{d+1}^{n-d+1}\frac{dt}{t-\tfrac12} =\log\frac{n-d+\tfrac12}{d+\tfrac12}.$$
This lower bound grows without limit as $n$ increases. [given, F1, F2, F4, step 1.2, step 2.2, algebra]

3.1 By [F2], $f_n-r_d$ is continuous on $[0,1]$, so [F5] makes its uniform
norm finite. It follows that
$$\frac{\|f_n-r_d\|_\infty} {h^{d+1}M_d} \ge \frac{\log((n-d+\tfrac12)/(d+\tfrac12))} {(4d+4)M_d} \longrightarrow\infty \qquad(n\to\infty).$$
Every mesh in the family has ratio one, but no fixed $C(d,1)$ can satisfy
the refuted inequality. Thus it fails even at $\rho=1$ for each fixed
$d$. [F5, step 2.2, step 2.3, algebra] ∎
