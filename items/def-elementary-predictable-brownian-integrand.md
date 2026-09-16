---
id: def-elementary-predictable-brownian-integrand
kind: definition
title: "Elementary predictable Brownian integrands"
status: draft
origin: pipeline
deps: [def-progressively-measurable-and-predictable-process, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, thm-brownian-future-path-markov-property, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.2.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]], and fix a probability space
$(\Omega,\mathcal F,P)$ with a continuous-time filtration
$(\mathcal F_t)_{t\ge0}$
[[def-continuous-time-filtration-and-all-pairs-martingale]] and a standard
Brownian motion $B$ [[def-brownian-motion]] on it. **Standing hypothesis
(H).** $B$ is adapted to $(\mathcal F_t)$ and for all $0\le s<t$ the increment
$B_t-B_s$ is independent of $\mathcal F_s$ and has law $N(0,t-s)$. The raw
natural filtration and the usual augmented natural filtration
[[def-natural-and-usual-augmented-brownian-filtrations]] both satisfy (H) for a
standard Brownian motion, by
[[thm-brownian-future-path-markov-property]]; for a general filtration, (H) is
part of the data and is not automatic. Every statement in this development
names (H) when it is used.

Throughout, fix a finite horizon $T>0$. An **elementary predictable Brownian
integrand** on $[0,T]$ is a process of the form
$$H_s(\omega)=\sum_{k=0}^{m-1}\xi_k(\omega)\,1_{(t_k,t_{k+1}]}(s),\qquad s\in[0,T],$$
where $0=t_0<t_1<\cdots<t_m=T$ is a finite partition of $[0,T]$, each
$\xi_k$ is a bounded real $\mathcal F_{t_k}$-measurable random variable, and
the values at the partition points are irrelevant because the intervals are
left-open and right-closed. The **mesh** of the representation is
$\max_k(t_{k+1}-t_k)$, and the **supremum norm** of the representation is
$\max_k\|\xi_k\|_\infty$. The integrand itself is the process $H$; a second
list of the same name with different coefficients is the same elementary
integrand only if the two processes coincide in the almost-everywhere sense
made precise below.

The following properties are part of the definition and are used at once.

1. **Predictability.** $H$ is predictable
   [[def-progressively-measurable-and-predictable-process]]. Indeed, for a
   Borel set $\Gamma\subseteq\mathbb R$,
   $$\{H\in\Gamma\}=\bigcup_{k=0}^{m-1}\bigl((t_k,t_{k+1}]\times\{\xi_k\in\Gamma\}\bigr),$$
   a finite union of generators of the predictable sigma-algebra because
   $\{\xi_k\in\Gamma\}\in\mathcal F_{t_k}$. Consequently $H$ is progressively
   measurable and measurable for the product sigma-algebra
   $\mathcal B([0,T])\otimes\mathcal F$, and $H$ belongs to
   $L^2([0,T]\times\Omega,\mathrm dt\otimes P)$: with
   $c:=\max_k\|\xi_k\|_\infty<\infty$ one has
   $E\int_0^TH_s^2\,ds\le c^2T<\infty$.

2. **Endpoint and null-set conventions.** Replacing the intervals by
   $(t_k,t_{k+1}]$ makes the value at $s=0$ zero for every elementary
   integrand. More generally, if two elementary integrands agree for all
   $s\in[0,T]$ except at finitely many deterministic times, then they agree
   $(\mathrm dt\otimes P)$-almost everywhere, since a finite set of times is
   Lebesgue-null and Tonelli computes
   $\mathrm dt\otimes P(\{u\}\times\Omega)=0$. All integrands and all
   integrals below are therefore elements of the quotient spaces of
   $L^2(\mathrm dt\otimes P)$ and $L^2(P)$; a claim about a process is a claim
   about its almost-everywhere class unless a representative is explicitly
   named, and path statements name the continuous representative.

3. **Deterministic coefficients.** If every $\xi_k$ is a deterministic real
   number, $H$ is a deterministic step function on $[0,T]$, so the elementary
   integrands include all step functions with deterministic coefficients. These
   are the integrands for which the integral is a Gaussian variable below.

The Axiom of Choice is declared because the Brownian construction and the
conditional-expectation interface used in items 6, 7 and 13 assume it; the
definition itself, including the predictability computation of clause 1, uses
no choice. The implication bridge
[[thm-choice-implies-dependent-implies-countable-choice]] records the inherited
countable-choice obligations.
