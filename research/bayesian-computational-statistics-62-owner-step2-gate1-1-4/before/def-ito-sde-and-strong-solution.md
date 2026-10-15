---
id: def-ito-sde-and-strong-solution
kind: definition
title: Itô SDE data and strong solution
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
axiom_base: Full AC
deps:
  - def-continuous-brownian-ito-process
  - def-d-dimensional-brownian-motion
  - def-ito-integral-for-square-integrable-predictable-processes
  - def-law-modification-and-indistinguishability-of-processes
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Definition

Assume the Axiom of Choice as required by the stochastic-integral interfaces
below. Fix a finite horizon $T\ge0$ and finite integers $d,m\ge1$. Work on
a complete filtered probability space
$(\Omega,\mathcal F,(\mathcal F_t)_{0\le t\le T},P)$ whose filtration is
right-continuous and contains every $P$-null subset of $\mathcal F$ in
$\mathcal F_0$ (the usual conditions).

Let $W=(W_t)_{0\le t\le T}$ be a standard $m$-dimensional Brownian motion
[[def-d-dimensional-brownian-motion]] adapted to this filtration, with
$W_t-W_s$ independent of $\mathcal F_s$ and distributed as
$N_m(0,(t-s)I_m)$ for $0\le s<t\le T$. Let
$X_0:\Omega\to\mathbb R^d$ be $\mathcal F_0$-measurable, satisfy
$E|X_0|^2<\infty$, and be independent of the future Brownian increments.
Explicitly, $X_0$ is independent of the sigma-algebra
$\sigma(W_t-W_0:0\le t\le T)$.

Continuity of a process means continuity on one measurable event of
probability one. We use an everywhere-continuous adapted representative: if
the chosen process is continuous only on such an event $A$, replace it off $A$
by its initial value. Since $A^c$ is a null set and the filtration is complete,
$A^c\in\mathcal F_0$; the replacement preserves adaptedness and changes the
SDE identity only on a null event, hence preserves it up to
indistinguishability.

The drift and diffusion coefficients are jointly Borel maps
$$b:[0,T]\times\mathbb R^d\to\mathbb R^d,\qquad \sigma:[0,T]\times\mathbb R^d\to\mathbb R^{d\times m}.$$
For nonnegative finite constants $L,K$, assume for every $t\in[0,T]$ and
$x,y\in\mathbb R^d$ that
$$|b(t,x)-b(t,y)|+\|\sigma(t,x)-\sigma(t,y)\|_F\le L|x-y|,$$
$$|b(t,x)|+\|\sigma(t,x)\|_F\le K(1+|x|).$$
Here $|\cdot|$ is the Euclidean norm and
$\|A\|_F^2=\sum_{i=1}^d\sum_{k=1}^m|A^{ik}|^2$ is the Frobenius norm.

For an adapted continuous candidate $X:[0,T]\times\Omega\to\mathbb R^d$,
the vector Itô equation
$$X_t=X_0+\int_0^t b(s,X_s)\,ds+\left(\sum_{k=1}^m\int_0^t\sigma^{ik}(s,X_s)\,dW_s^k\right)_{i=1}^d,\qquad 0\le t\le T.$$
uses a pathwise Lebesgue integral for the drift and, in each coordinate, the
localized Itô integral from
[[def-continuous-brownian-ito-process]], clause 2. Require
$\int_0^T|b(s,X_s)|ds<\infty$ and
$\int_0^T\|\sigma(s,X_s)\|_F^2ds<\infty$ almost surely; these are the local
coefficient-integrability conditions in that definition. When a coordinate
integrand has finite expected energy, its integral is the square-integrable
Itô integral of [[def-ito-integral-for-square-integrable-predictable-processes]];
the Picard estimates below establish that stronger condition for every input
in $\mathcal H_T$. Equality of processes means
equality for every $t$ on one measurable event of probability one, that is,
indistinguishability
[[def-law-modification-and-indistinguishability-of-processes]]. A **strong
solution on $[0,T]$** is an adapted continuous process satisfying this
integral equation indistinguishably. No moment bound is included in the
definition; the existence theorem proves its $L^2$ path-sup bound.
The usual-filtration, continuity, and finite-coordinate conventions agree
with the multidimensional class of continuous Brownian Itô processes
[[def-continuous-brownian-ito-process]]. This definition makes no ellipticity,
transition-density, forward-equation, or time-reversal assertion.

## Sources

Van Handel's Chapter 5.1 specifies the integral-equation interpretation and
finite-horizon filtered setup. Van der Vaart's Section 7.1 treats strong
solutions on a given filtered space and indistinguishability. The local
definition fixes the vector/matrix coordinate convention and the exact
coefficient and initial-value assumptions used by the following proofs.
