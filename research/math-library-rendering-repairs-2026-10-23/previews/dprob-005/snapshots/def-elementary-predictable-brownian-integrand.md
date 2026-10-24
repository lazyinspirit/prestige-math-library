---
id: def-elementary-predictable-brownian-integrand
kind: definition
title: "Elementary predictable Brownian integrands"
status: published
origin: pipeline
deps: [def-progressively-measurable-and-predictable-process, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, thm-brownian-future-path-markov-property, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.2.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-elementary-predictable-brownian-integrand.json
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice The Axiom of Choice, and fix a probability space
$(\Omega,\mathcal F,P)$ with a continuous-time filtration
$(\mathcal F_t)_{t\ge0}$
Continuous-time filtrations and all-pairs martingales and a standard
Brownian motion $B$ Brownian motion on it. **Standing hypothesis
(H).** $B$ is adapted to $(\mathcal F_t)$ and for all $0\le s<t$ the increment
$B_t-B_s$ is independent of $\mathcal F_s$ and has law $N(0,t-s)$. The raw
natural filtration and the usual augmented natural filtration
Natural and usual augmented Brownian filtrations both satisfy (H) for a
standard Brownian motion, by
Future-path Markov property; for a general filtration, (H) is
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
   Progressively measurable and predictable processes. Indeed, for a
   Borel set $\Gamma\subseteq\mathbb R$,
   $$\{H\in\Gamma\}=Z_\Gamma\cup\bigcup_{k=0}^{m-1}\bigl((t_k,t_{k+1}]\times\{\xi_k\in\Gamma\}\bigr), \qquad Z_\Gamma:=\begin{cases}\{0\}\times\Omega,&0\in\Gamma,\\\varnothing,&0\notin\Gamma,\end{cases}$$
   a finite union of generators of the predictable sigma-algebra because
   $\{\xi_k\in\Gamma\}\in\mathcal F_{t_k}$ and
   $\{0\}\times\Omega$ is a time-zero generator. Consequently $H$ is progressively
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
no choice. The countable-choice obligations inherited from that interface are declared
as dependencies of this item.

## Definition references

[[def-axiom-of-choice]]

[[def-continuous-time-filtration-and-all-pairs-martingale]]

[[def-brownian-motion]]

[[def-natural-and-usual-augmented-brownian-filtrations]]

[[thm-brownian-future-path-markov-property]]

[[def-progressively-measurable-and-predictable-process]]


## Remarks

For a fixed $\omega$, the picture illustrates a representation with three
intervals. The heights $\xi_k(\omega)$ are schematic; no ordering or positivity
of the coefficients is assumed. An open circle excludes the left endpoint
of a step, and a filled circle includes its right endpoint. The separate
filled point at the origin records $H_0(\omega)=0$.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[->] (-0.4,0) -- (8.5,0) node[right] {$s$};
\draw[->] (0,-0.3) -- (0,3.6) node[above] {$H_s(\omega)$};
\draw[densely dotted] (2.5,0) -- (2.5,2.8);
\draw[densely dotted] (5,0) -- (5,2.8);
\draw[densely dotted] (7.5,0) -- (7.5,1.9);
\draw[thick] (0.09,1.1) -- (2.5,1.1);
\draw[thick] (2.59,2.8) -- (5,2.8);
\draw[thick] (5.09,1.9) -- (7.5,1.9);
\draw[thick] (0,1.1) circle (0.09);
\draw[thick] (2.5,2.8) circle (0.09);
\draw[thick] (5,1.9) circle (0.09);
\fill (0,0) circle (0.065);
\fill (2.5,1.1) circle (0.065);
\fill (5,2.8) circle (0.065);
\fill (7.5,1.9) circle (0.065);
\node[above] at (1.25,1.1) {$\xi_0(\omega)$};
\node[above] at (3.75,2.8) {$\xi_1(\omega)$};
\node[above] at (6.25,1.9) {$\xi_2(\omega)$};
\node[below] at (0,-0.08) {$0=t_0$};
\node[below] at (2.5,-0.08) {$t_1$};
\node[below] at (5,-0.08) {$t_2$};
\node[below] at (7.5,-0.08) {$t_3=T$};
\end{tikzpicture}
```

Here each $\xi_k$ is bounded and $\mathcal F_{t_k}$-measurable: the coefficient
on $(t_k,t_{k+1}]$ uses information available at its left endpoint. At an
interior partition time $t_k$ the displayed representative takes the preceding
step's value $\xi_{k-1}(\omega)$. The mesh is the largest horizontal interval
length $\max_{0\le k<3}(t_{k+1}-t_k)$, independent of the depicted heights.
The process is still identified up to $\mathrm dt\otimes P$-almost-everywhere
equality as in the definition; the picture does not change that convention
or replace the predictability argument.
