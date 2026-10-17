---
id: def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
kind: definition
title: "Best uniform polynomial error and Chebyshev interpolation operators"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - def-continuity-real
  - def-interval
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - def-complete-ordered-field
  - def-canonical-natural
  - lem-of-naturals-positive
  - def-chebyshev-polynomials-first-and-second-kind
  - thm-chebyshev-multiple-angle-identities
  - lem-chebyshev-degree-leading-coefficients-and-extreme-values
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chs. 2–5"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Ch. 2, printed pp. 8–12; Ch. 3, pp. 14–15; Ch. 5, pp. 34–39"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article, Definition 2.1.1 and §2.1.1"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $C[-1,1]$ be the real continuous functions on $[-1,1]$, with
$\|f\|_\infty:=\sup_{x\in[-1,1]}|f(x)|$. Let $\mathcal P_n$ be the
restrictions to $[-1,1]$ of real polynomials of degree at most $n$, including
the zero polynomial. Interval notation is that of [[def-interval]]. Continuity and polynomial degree have the conventions of
[[def-continuity-real]] and
[[def-real-polynomial-degree-leading-coefficient-and-monic]].

For each $n\in\mathbb N$ (with naturals in real expressions interpreted by
their canonical real images), the first-kind Chebyshev root angles and nodes are
$$\theta_j^{R,n}=\frac{(2j+1)\pi}{2n+2},\qquad x_j^{R,n}=\cos\theta_j^{R,n},\qquad 0\leq j\leq n.$$
They are the roots of $T_{n+1}$ by
[[thm-chebyshev-multiple-angle-identities]]. For $n\geq1$, the
Chebyshev–Lobatto angles and nodes are
$$\theta_j^{L,n}=\frac{j\pi}{n},\qquad x_j^{L,n}=\cos\theta_j^{L,n},\qquad 0\leq j\leq n.$$
They include both endpoints and are the extrema of $T_n$ by the same
identity. At $n=0$, define the Lobatto node to be $x_0^{L,0}=0$. The
cosine is strictly decreasing on $[0,\pi]$, so each listed family has
distinct nodes; the root family at $n=0$ also consists of $0$.

For either family $\sigma\in\{R,L\}$, write its nodes as
$x_0,\ldots,x_n$ and define
$$\ell_{j,n}^{\sigma}(x)= \prod_{\substack{0\leq k\leq n\\k\ne j}} \frac{x-x_k}{x_j-x_k},\qquad I_n^\sigma f=\sum_{j=0}^n f(x_j)\ell_{j,n}^{\sigma}.$$
These are the cardinal formula and interpolation sum of
[[def-cardinal-polynomial-interpolation]] specialized to this node family.
The displayed cosine arrays decrease, whereas that supplier orders nodes
increasingly: use $z_i=x_{n-i}$ and data $y_i=f(z_i)$. Its cardinal
function with index $n-j$ is exactly the displayed $\ell_{j,n}^\sigma$,
by reindexing the finite product, and its interpolation sum is $I_n^\sigma$.
The empty product at $n=0$ is $1$, so the same identification holds for the
single node. Distinctness makes every denominator nonzero;
[[lem-cardinal-basis-degree-and-values]] supplies the degree and cardinal
values. The finite sum is linear in the data and maps $C[-1,1]$ into
$\mathcal P_n$. Its operator norm is
$$\Lambda_n^\sigma:= \sup\{\|I_n^\sigma g\|_\infty:g\in C[-1,1],\ \|g\|_\infty\leq1\}.$$
If $\ell_{j,n}^\sigma(x)=\sum_{k=0}^n a_{jk}x^k$, then
$|\ell_{j,n}^\sigma(x)|\leq\sum_{k=0}^n|a_{jk}|$ for $|x|\leq1$; hence
$\|I_n^\sigma g\|_\infty\leq\sum_{j,k}|a_{jk}|<\infty$ whenever
$\|g\|_\infty\leq1$. Define the best degree-$n$ uniform
approximation error by
$$E_n(f):=\inf_{p\in\mathcal P_n}\|f-p\|_\infty .$$

These quantities are real and well-defined. Polynomial functions are
continuous, and sums and scalar multiples of continuous functions remain
continuous by [[thm-algebra-of-continuous-functions]]. The interval
$[-1,1]\subset\mathbb R$ is nonempty, closed, and bounded, so
[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]] implies
that for every such continuous function $h$ there are finite minimum and
maximum values $m_h,M_h$. Since $m_h\leq h(x)\leq M_h$, one has
$|h(x)|\leq\max(|m_h|,|M_h|)$, so each supremum norm above is finite. The set defining $\Lambda_n^\sigma$ contains
the zero function and is bounded above by the displayed finite coefficient
sum. The set defining $E_n(f)$ contains the zero polynomial and is bounded
below by zero. Completeness of $\mathbb R$ ([[def-complete-ordered-field]])
therefore gives the stated finite supremum and infimum. Also, $n+1$ has
positive real image by [[def-canonical-natural]] and
[[lem-of-naturals-positive]], and $n$ has positive real image when $n\geq1$;
thus the root-angle denominator and the Lobatto denominator in its stated
range are nonzero.

The displayed root-family nodes are all the real roots of $T_{n+1}$. The
degree statement [[lem-chebyshev-degree-leading-coefficients-and-extreme-values]]
gives $\deg T_{n+1}=n+1$, and
[[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]
excludes any additional real root beyond the $n+1$ distinct nodes above.

