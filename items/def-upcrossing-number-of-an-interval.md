---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-upcrossing-number-of-an-interval.json
  precheck: n/a
id: def-upcrossing-number-of-an-interval
kind: definition
title: Upcrossing number of an interval
status: published
origin: pipeline
deps: [def-random-element-and-real-random-variable, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, §2.4, pp. 13–14", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Definition

For a real sequence $x=(x_n)_{n\ge0}$, reals $a<b$, and $N\ge0$, define
$$U_N[a,b](x)=\max\bigl\{k:\exists\,0\le s_1<t_1<\cdots<s_k<t_k\le N,\ x_{s_i}\le a,\ x_{t_i}\ge b\bigr\},$$
where the empty tuple makes $0$ admissible, and put
$$U_\infty[a,b](x)=\sup_{N\ge0}U_N[a,b](x).$$
For a real process $X$, these definitions are applied pathwise.

For fixed $N$ there are finitely many candidate tuples. For each $k$, the event $\{U_N\ge k\}$ is a finite union of finite intersections of events $\{X_s\le a\}$ and $\{X_t\ge b\}$, hence is measurable. Thus the integer-valued $U_N$ is measurable. Since $U_N\uparrow U_\infty$, measurability of the countable pointwise supremum follows from [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]. No optimizing tuple is selected, so the definition is choice-free.

## Remarks

For example, take $a=0$, $b=1$, $N=6$, and $(x_0,\ldots,x_6)=(-1/2,-1/4,3/2,3/4,-1/2,1/2,3/2)$. The marked pairs $(s_1,t_1)=(1,2)$ and $(s_2,t_2)=(4,6)$ are admissible. Here $U_6[0,1](x)=2$: these pairs give two upcrossings, and only the indices $2$ and $6$ can be terminal times at or above $b$. The maximizing tuple is not unique, since $s_1=0$ also works. Segments only guide the eye between the discrete observations; the definition counts index pairs.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\draw[->] (-0.5,-1.1) -- (6.6,-1.1) node[right] {$n$};
\draw[dashed] (-0.5,0) -- (6.4,0) node[right] {$a=0$};
\draw[dashed] (-0.5,1) -- (6.4,1) node[right] {$b=1$};
\draw[thick] (0,-0.5) -- (1,-0.25) -- (2,1.5) -- (3,0.75) -- (4,-0.5) -- (5,0.5) -- (6,1.5);
\fill (0,-0.5) circle (2pt);
\draw (0,-1.05) -- (0,-1.15) node[below] {$0$};
\fill (1,-0.25) circle (2pt);
\draw (1,-1.05) -- (1,-1.15) node[below] {$1$};
\fill (2,1.5) circle (2pt);
\draw (2,-1.05) -- (2,-1.15) node[below] {$2$};
\fill (3,0.75) circle (2pt);
\draw (3,-1.05) -- (3,-1.15) node[below] {$3$};
\fill (4,-0.5) circle (2pt);
\draw (4,-1.05) -- (4,-1.15) node[below] {$4$};
\fill (5,0.5) circle (2pt);
\draw (5,-1.05) -- (5,-1.15) node[below] {$5$};
\fill (6,1.5) circle (2pt);
\draw (6,-1.05) -- (6,-1.15) node[below] {$6$};
\node[below] at (1,-0.25) {$s_1$};
\node[above] at (2,1.5) {$t_1$};
\node[below] at (4,-0.5) {$s_2$};
\node[above] at (6,1.5) {$t_2$};
\end{tikzpicture}
```
