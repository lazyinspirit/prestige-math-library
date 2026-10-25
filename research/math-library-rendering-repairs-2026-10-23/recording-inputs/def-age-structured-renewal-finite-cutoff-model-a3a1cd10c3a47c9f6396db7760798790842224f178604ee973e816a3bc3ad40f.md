---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-age-structured-renewal-finite-cutoff-model.json
  precheck: n/a
id: def-age-structured-renewal-finite-cutoff-model
kind: definition
title: Finite-age renewal model with absorbing outflow
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-age-structured-renewal-transport-problem
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–20: finite-age restriction, age outflow and renewal upwind formulation."
---

## Definition

Fix $0<T<A$, bounded nonnegative Lipschitz rates $\mu,\beta:[0,A]\to[0,\infty)$, and initial density $n_0^A\in L^1_+(0,A)$. The **finite-age renewal model with absorbing outflow** is the age transport problem on $0<a<A$ with the same renewal inflow $B_A(t)=\int_0^A\beta(a)n^A(t,a)\,da$ as in [[def-age-structured-renewal-transport-problem]]. A cohort follows age speed $1$, retains its mortality survival $S(a,s)$ until it reaches $A$, and is then removed; no cohort enters from ages above $A$. The initial density is $n_0^A$ on $[0,A]$. A mild solution is the characteristic formula on $0<a<A$, with an initial-cohort branch for $a\ge t$, a newborn branch for $a<t$, and zero extension to $a\ge A$. Since $A>T$, no cohort born during $[0,T]$ reaches the outflow boundary.


## Remarks

The schematic age–time diagram separates the initial-cohort region $a\ge t$ from the newborn region $a<t$. Along each characteristic $a-t$ is constant. An initial cohort can reach $a=A$ and is then removed; a cohort born at time $t_b\in[0,T]$ has age $a=t-t_b\le T<A$ for $t_b\le t\le T$. Mortality multiplies cohort density by the survival factor $S$ and does not change these paths. The characteristic formula in the definition is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=0.85,>=stealth]
  \draw[->] (0,0) -- (4.7,0) node[right] {$t$};
  \draw[->] (0,0) -- (0,6.8) node[above] {$a$};
  \draw[dashed] (4,0) -- (4,6);
  \draw[thick] (0,6) -- (4,6);
  \node[above] at (2,6.15) {absorbing outflow};
  \node[left] at (0,6) {$A$};
  \node[below right] at (0,0) {$0$};
  \node[below] at (4,0) {$T$};
  \draw[dashed] (0,0) -- (4,4);
  \node[above,rotate=45] at (2.8,2.8) {$a=t$};
  \draw[thick,->] (0,4) -- (2,6);
  \fill (2,6) circle (2pt);
  \node at (2.8,5.1) {initial: $a\ge t$};
  \draw[thick,->] (1,0) -- (4,3);
  \node[below] at (1,0) {$t_b$};
  \node at (3.1,1) {newborn:};
  \node at (3.1,0.5) {$a<t$};
  \node[below] at (2,-0.65) {renewal inflow $B_A(t)$};
  \node[rotate=90] at (-0.65,3) {initial density $n_0^A$};
\end{tikzpicture}
```
