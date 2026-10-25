---
id: def-period-one-fourier-coefficients-partial-sums-and-convolution
kind: definition
title: "Period-one Fourier coefficients, partial sums, and convolution on the torus"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-the-one-dimensional-torus-and-normalized-haar-integral, def-complex-lp-and-euclidean-test-function-conventions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice]
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (def-period-one-fourier-coefficients-partial-sums-and-convolution). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Definition

Write $\mathbb T := \mathbb R / \mathbb Z$ and represent a function on
$\mathbb T$ by a one-periodic function on $\mathbb R$.

For $k \in \mathbb Z$, define the $k$-th character
$e_k(x) := e^{2\pi i kx}$.

The character and finite trigonometric-polynomial clauses are choice-free.
For the integral and $L^1$ clauses below, assume the Axiom of Countable Choice,
as in [[def-the-one-dimensional-torus-and-normalized-haar-integral]].

If $f$ is integrable on one period, its Fourier coefficients are

$$\widehat f(k) := \int_0^1 f(t)e^{-2\pi i kt}\,dt \qquad (k \in \mathbb Z).$$

For $N \ge 0$, the $N$-th Fourier partial sum of $f$ is

$$S_Nf(x) := \sum_{|k| \le N}\widehat f(k)e_k(x).$$

A **trigonometric polynomial** on $\mathbb T$ is a finite linear combination of
the characters $e_k$.

If $f,g \in L^1(\mathbb T)$, their convolution is the $L^1(\mathbb T)$ class
defined for almost every $x$ by

$$(f*g)(x) := \int_0^1 f(x-t)g(t)\,dt,$$

where $f$ and $g$ are read as one-periodic representatives. More precisely,
the integrand is absolutely integrable for almost every $x$, and the displayed
formula gives an almost-everywhere-defined integrable function whose class is
independent of the chosen representatives. When one factor is bounded, as for
the Dirichlet kernels below, the integral exists at every $x$ for which the
other representative is integrable on one period.

## Well-definedness

Put $m=m_{\mathbb T}$. Take Borel representatives $F,G$ of the two $L^1$ classes on the Borel
probability space $\mathbb T$ and write $\widetilde F=F\circ q$ and
$\widetilde G=G\circ q$ for their one-periodic Borel lifts. This uses only a
finite selection of representatives. The map
$(x,t)\mapsto[x-t]$ is continuous on $\mathbb T^2$: the map
$(x,t)\mapsto q(x-t)$ on $\mathbb R^2$ is continuous and constant on fibres of
the open quotient map $q\times q$, so it descends continuously. Thus
$H(x,t)=F(x-t)G(t)$ is Borel on $\mathbb T^2$.

For every nonnegative one-periodic Borel $h$, the affine reflection
$t\mapsto x-t$ preserves Lebesgue measure by
[[thm-linear-change-of-variables-for-lebesgue-measure]] and
[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].
It carries a half-open unit interval to another half-open unit interval;
splitting the latter at its integer boundary and translating one piece by an
integer, using periodicity, gives
$$\int_0^1 h(x-t)\,dt=\int_0^1 h(u)\,du.$$
The endpoints are null. The same identity is translation invariance of the
normalized torus integral. In particular, Tonelli on the finite product
probability space gives
$$\int_{\mathbb T^2}|H(x,t)|\,dm(x)dm(t)=\int_{\mathbb T}|G(t)|\left(\int_{\mathbb T}|F(x-t)|\,dm(x)\right)dm(t)=\|F\|_1\|G\|_1<\infty.$$
Therefore [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]
makes $t\mapsto H(x,t)$ integrable for almost every $x$, and makes its
section integral, set to zero on the measurable exceptional set, an $L^1$
function with norm at most $\|F\|_1\|G\|_1$.

If $F=F'$ and $G=G'$ almost everywhere, let $N_F,N_G$ be their Borel
discrepancy sets. For $t\notin N_G$, the $x$-section of the set where the two
products differ lies in $N_F+t$ and is null by translation invariance.
Tonelli applied to its indicator makes the difference set product-null; Fubini
then shows that the two section integrals agree for almost every $x$. Hence
the $L^1$ class is independent of representatives. If one chosen representative
is bounded, the period-translation identity bounds every section integral by
the product of that bound and the other factor's finite $L^1$ norm, proving
the final pointwise-existence clause. Countable Choice supplies the torus
integral and the Lebesgue reflection interface used above; Tonelli and Fubini
then apply on the resulting probability space. No selection over all $x$ is made.
