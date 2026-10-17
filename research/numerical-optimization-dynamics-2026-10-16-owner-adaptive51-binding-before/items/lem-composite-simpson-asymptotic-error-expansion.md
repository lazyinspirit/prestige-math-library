---
id: lem-composite-simpson-asymptotic-error-expansion
kind: lemma
title: Leading composite Simpson error coefficient
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-composite-simpson-rule
  - lem-simpson-panel-peano-kernel
  - def-higher-derivatives-and-smoothness
  - thm-heine-borel-r
  - thm-additivity-over-subintervals
  - thm-heine-cantor-metric
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-monotonicity-of-the-integral
  - thm-linearity-of-the-integral
  - lem-integral-elementary-bounds
  - thm-algebra-of-continuous-functions
justified_by: []
proof_strategy: direct
axiom_use: None. The proof uses compactness, uniform continuity and finite sums only.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: L. Ridgway Scott, Numerical Analysis, 2nd ed., Chapter 13, §13.2
      url: https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf
      locator: §13.2, Theorem 13.5, printed pp. 223–224; Peano representation and L1 error bound.
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 7, §7.2
      url: https://artowen.su.domains/mc/Ch-quadrature.pdf
      locator: Printed pp. 7–8; composite Simpson formula and fourth-derivative error statement.
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.7
      url: https://fncbook.com/adaptive/
      locator: §5.7.1, the Simpson refinement and Richardson formulas.
---

## Statement

Let $a<b$, let $k\ge1$ be an integer, set $n_k=2^k$ and
$h_k=(b-a)/n_k$, and let $Q_k=Q_S(f;a,b,n_k)$ for $f\in C^4([a,b])$. With
$I=\int_a^b f(x)\,dx$, one has
$$I-Q_k=-\frac{h_k^4}{180}\int_a^b f^{(4)}(x)\,dx+o(h_k^4)\qquad(k\to\infty).$$
Here $r_k=o(h_k^4)$ means $r_k/h_k^4\to0$ along this sequence. The
integral is the Riemann integral.

## Facts & Assumptions

**Given:** A real interval $[a,b]$ with $a<b$, $f\in C^4([a,b])$, and the
composite Simpson values on the grids with $n_k=2^k$ subintervals.

[F1] [[lem-simpson-panel-peano-kernel]]: on a panel $[\alpha,\beta]$ of
length $L$, the Simpson kernel has the two cubic pieces displayed in its
Statement; they agree at the midpoint, satisfy $K\le0$, and have
$\int_\alpha^\beta |K|=L^5/2880$. The panel error is
$\int_\alpha^\beta K(x)f^{(4)}(x)\,dx$.

[F2] [[def-higher-derivatives-and-smoothness]]: $f\in C^4([a,b])$ means $f$
and its derivatives through order four are continuous on the closed interval,
in particular both $f$ and $f^{(4)}$ are continuous.

[F3] [[thm-heine-cantor-metric]]: a continuous real function on a compact
metric space is uniformly continuous.

[F4] [[thm-heine-borel-r]]: a closed bounded real interval is compact.

[F5] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: a continuous
real function on a closed nondegenerate interval is Riemann integrable.

[F6] [[thm-additivity-over-subintervals]]: for bounded $f$ and $a<c<b$,
$\int_a^b f=\int_a^c f+\int_c^b f$; iterating this two-piece identity
gives additivity over any finite adjacent partition.

[F7] [[thm-monotonicity-of-the-integral]] and
[[thm-linearity-of-the-integral]]: pointwise bounds pass to integrals, and
integrals are linear.

[F8] [[lem-integral-elementary-bounds]]: for a constant $q$,
$\int_\alpha^\beta q\,dx=q(\beta-\alpha)$.

[F9] [[thm-algebra-of-continuous-functions]]: sums, scalar multiples, and
products of continuous real functions are continuous.

[F10] [[alg-composite-simpson-rule]]: for even $n\ge2$, $Q_S$ is the sum of
the one-block Simpson values on the adjacent panels
$[x_{2j},x_{2j+2}]$, $0\le j<n/2$.

## Proof

1.1 Put $g=f^{(4)}$. By [F2] and [F5], both $f$ and $g$ are integrable. By [F3]–[F4], $g$ is uniformly continuous on the compact interval. The two formulas for $K_j$ in [F1] agree at their shared midpoint, so $K_j$ is continuous; [F9] makes $K_j(g-g(c_j))$ continuous and [F5] makes it integrable. Fix $\varepsilon>0$; choose $\delta>0$ so that $|g(x)-g(y)|<\varepsilon$ whenever $x,y\in[a,b]$ and $|x-y|<\delta$. For $h_k<\delta$, write each Simpson block as $P_j=[c_j-h_k,c_j+h_k]$ with midpoint $c_j$. By [F1] and linearity, its error minus $-((2h_k)^5/2880)g(c_j)$ is $\int_{P_j}K_j(x)(g(x)-g(c_j))\,dx$. Since $K_j\le0$ and $|g(x)-g(c_j)|<\varepsilon$, [F7] bounds the absolute value of this difference by $\varepsilon(2h_k)^5/2880$. [given, F1, F2, F3, F4, F5, F7, F9, algebra]

2.1 There are $n_k/2=(b-a)/(2h_k)$ blocks. By [F10], $Q_k$ is the sum of their one-block Simpson values; repeated application of additivity [F6] sums their integrals to $I$. Hence their local errors sum to $I-Q_k$. If $J_k=-((2h_k)^5/2880)\sum_j g(c_j)$, step 1.1 gives $|(I-Q_k)-J_k|\le (b-a)h_k^4\varepsilon/180$. Also, on each block the uniform-continuity bound gives $g(c_j)-\varepsilon\le g(x)\le g(c_j)+\varepsilon$. By [F7] and [F8], integrating these constant bounds gives $2h_k(g(c_j)\pm\varepsilon)$, so $|\int_{P_j}g-2h_k g(c_j)|\le2h_k\varepsilon$. Repeated additivity [F6] then yields $|2h_k\sum_jg(c_j)-\int_a^b g|\le(b-a)\varepsilon$. [given, F5, F6, F7, F8, F10, step 1.1, algebra]

3.1 Since $J_k/h_k^4=-(2h_k\sum_jg(c_j))/180$, step 2.1 shows that $|(I-Q_k)/h_k^4+(1/180)\int_a^b g|\le(b-a)\varepsilon/90$ for all sufficiently large $k$. As $\varepsilon>0$ was arbitrary, the displayed limit follows. [given, step 2.1, algebra] ∎

