---
id: alg-gillespie-direct-method-for-reaction-networks
kind: algorithm
title: "Gillespie direct method with horizon and budget statuses"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-random-element-and-real-random-variable
  - def-reaction-network-propensity-system-and-generator
  - thm-countable-product-of-probability-spaces
  - thm-exponential-and-weibull-survival-laws
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel T. Gillespie, Exact Stochastic Simulation of Coupled Chemical Reactions"
      url: "https://www.ma.imperial.ac.uk/~nsjones/gillespie_1977.pdf"
      locator: "§III.C, especially equations (18)–(21) and the stated initialization/loop, journal pp. 2344–2346 / PDF pp. 5–7."
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §7.2.1, Algorithm 2, PDF pp. 195–196."
verification:
  precheck: pending
---

## Definition

**Inputs.** A finite state set $E\subseteq\mathbb Z^d$, a finite-channel reaction propensity system from [[def-reaction-network-propensity-system-and-generator]], an initial state $x_0\in E$, a horizon $T>0$, and an optional event budget $B\in\mathbb N_0\cup\{\infty\}$, defaulting to $\infty$, where $\mathbb N_0:=\{0,1,2,\ldots\}$. The random source is a sequence $(E_n,U_n)_{n\ge1}$ with $E_n\sim\operatorname{Exp}(1)$ and $U_n$ uniform on $[0,1]$, all coordinates mutually independent. The countable product construction for these input laws uses Countable Choice and Dependent Choice by [[thm-countable-product-of-probability-spaces]]; the exponential law uses Countable Choice by [[thm-exponential-and-weibull-survival-laws]]. For the uniform law, [[thm-lebesgue-measure-is-a-complete-measure]] makes the set function in [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] a measure, and [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives its restriction to $[0,1]$ mass one and interval probabilities equal to interval lengths.

**Procedure.** Set $t=0$, $x=x_0$, $n=0$, and record the initial state. While $t<T$:

1. Compute $\lambda(x)=\sum_{j=1}^R a_j(x)$. If $\lambda(x)=0$, keep the state equal to $x$ through $T$ and return status absorbed.
2. If $n=B$, return the path prefix through $(t,x)$ with status budget-exhausted; this status does not assert that the horizon was reached.
3. Set $\tau=E_{n+1}/\lambda(x)$. If $t+\tau\ge T$, keep the state equal to $x$ through $T$ and return status horizon.
4. Set $J$ to the least index with $U_{n+1}<\lambda(x)^{-1}\sum_{j=1}^J a_j(x)$. If the null event $U_{n+1}=1$ occurs, use the largest index with $a_j(x)>0$. This rule never selects a zero-rate channel.
5. Set $t\leftarrow t+\tau$, $x\leftarrow x+\nu_J$, append the marked event $(t,J,x)$, and set $n\leftarrow n+1$.

If the loop reaches $t=T$, return the path through $T$ with status horizon. Each event uses a linear scan of the $R$ propensities and a linear cumulative channel search; no update-tree acceleration is part of this procedure. If $B<\infty$ and the budget expires before $T$, the returned prefix is incomplete.

The procedure assumes an ideal independent random source with the displayed laws. It makes no claim that a finite-state pseudorandom generator supplies independent exact exponential or uniform variables.


## Remarks

For a concrete illustration, take $E=\{0,1,2\}$, increments $\nu_1=-1$, $\nu_2=1$, and propensities $a_1(1)=2$, $a_2(1)=1$, with both propensities zero at $0$ and $2$. Starting from $x_0=1$, the total rate is $\lambda(1)=3$. Provided the budget permits an event and $t+\tau<T$, the next marked event follows one of the two arrows:

```tikz
\begin{tikzpicture}
\node[draw,circle,minimum size=10mm] (left) at (-3,0) {$0$};
\node[draw,circle,minimum size=10mm] (middle) at (0,0) {$1$};
\node[draw,circle,minimum size=10mm] (right) at (3,0) {$2$};
\draw[->] (middle) -- node[midway,above] {$j=1,\quad a_1(1)=2$} (left);
\draw[->] (middle) -- node[midway,above] {$j=2,\quad a_2(1)=1$} (right);
\node at (0,-1) {$\lambda(1)=3,\qquad \tau=E_{n+1}/3$};
\node at (-3,-0.8) {absorbing};
\node at (3,-0.8) {absorbing};
\end{tikzpicture}
```

Here $J=1$ for $0\le U_{n+1}<2/3$ and $J=2$ for $2/3\le U_{n+1}\le1$, including the specified null-event convention at $1$. The event is recorded as $(t+\tau,J,1+\nu_J)$. If instead $t+\tau\ge T$, the state stays at $1$ through $T$ and the status is horizon. If the budget is already exhausted at $1$, the algorithm stops before drawing this event and returns only the incomplete prefix. At either endpoint the total rate is zero, so the absorption check precedes the budget check and keeps that state through $T$. This illustration uses the same ideal independent random source as the definition; it does not replace the procedure or its stopping rules.
