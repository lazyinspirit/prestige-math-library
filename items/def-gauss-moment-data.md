---
id: def-gauss-moment-data
kind: definition
title: Positive-measure Gaussian quadrature moment data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-integer-power
  - def-borel-sigma-algebra
  - def-measure-space
  - def-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-integrable-real-and-complex-functions-and-their-integrals
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Definition

Let $a<b$ be real numbers, let $m\ge1$ be an integer, and let
$r\in\{2m-1,2m\}$. A **Gaussian quadrature moment datum of order $r$** is a
finite positive measure $\mu$ on the relative Borel sigma-algebra
$\mathcal B([a,b])$ ([[def-borel-sigma-algebra]], [[def-measure-space]],
[[def-measure]], [[def-finite-sigma-finite-and-semifinite-measures]]) such that
$\mu([a,b])>0$, and whose **relative support**
$$ S_\mu:=\{x\in[a,b]:\mu(U)>0\text{ for every relatively open }U\subseteq[a,b]\text{ with }x\in U\} $$
contains at least $m+1$ distinct points. For every integer $0\le k\le r$,
require $x\mapsto |x|^k$ to be integrable with respect to $\mu$
([[def-integrable-real-and-complex-functions-and-their-integrals]]) and put
$M_k:=\int_{[a,b]}x^k\,d\mu(x)$. Powers use the natural-exponent
recursion of [[def-integer-power]], with $x^0=1$ for every real $x$, including
$x=0$; thus $M_0$ is the integral of the constant function $1$.

The branch $r=2m-1$ supplies all moments used to construct the monic
degree-$m$ orthogonal polynomial and prove rule exactness. The stronger branch
$r=2m$ also defines its squared norm and is used for the remainder formula.
Because $[a,b]$ is bounded and $\mu$ is finite, these absolute-moment
integrability conditions follow from finiteness; they are stated to make the
two moment interfaces explicit.
