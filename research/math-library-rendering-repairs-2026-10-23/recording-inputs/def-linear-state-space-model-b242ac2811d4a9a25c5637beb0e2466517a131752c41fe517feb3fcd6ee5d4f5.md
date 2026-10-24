---
id: def-linear-state-space-model
kind: definition
title: Continuous-time linear state-space model
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-countable-choice, def-integrable-real-and-complex-functions-and-their-integrals, def-absolutely-continuous-function, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, §2.1"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Definition

Assume the Axiom of Countable Choice, so the usual Lebesgue-measurable sets on $\mathbb R$ form a complete measure space with Lebesgue measure $\lambda$. Every bounded interval is Lebesgue measurable, and any interval is the countable union of its bounded intersections with $[-n,n]$; since the Lebesgue-measurable sets form a sigma-algebra, $I$ is measurable and $\lambda$ restricts to $I$. Let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, let $I\subseteq\mathbb R$ be an interval with $t_0\in I$, and let $N,m,p\ge1$ be finite. A continuous-time linear state-space model consists of matrices $A\in\mathbb F^{N\times N}$, $B\in\mathbb F^{N\times m}$, $C\in\mathbb F^{p\times N}$, $D\in\mathbb F^{p\times m}$, an initial value $x_0\in\mathbb F^N$, and an input $u:I\to\mathbb F^m$ whose real and imaginary coordinates are Lebesgue measurable and integrable on every compact subinterval of $I$. A state trajectory is a function $x:I\to\mathbb F^N$ whose real and imaginary coordinates are absolutely continuous on every compact subinterval of $I$ (with absolute continuity defined by the $\varepsilon$–$\delta$ condition on finite families of disjoint subintervals), with $x(t_0)=x_0$ and $x'(t)=Ax(t)+Bu(t)$ outside a Lebesgue-null subset of $I$. Its output is $y(t)=Cx(t)+Du(t)$. The term $Du(t)$ is the direct input-to-output term and is separate from the state contribution $Cx(t)$.

## Definition references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” §2.1](https://arxiv.org/pdf/2111.00396)

[[def-integrable-real-and-complex-functions-and-their-integrals]]

[[def-absolutely-continuous-function]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[thm-lebesgue-measure-is-a-complete-measure]]

[[thm-lebesgue-measure-of-a-box-of-every-kind]]

[[def-countable-choice]]


## Remarks

The block diagram separates the state-mediated path from the direct input-to-output path. Each circle adds its incoming signals. The integration block sends a signal $v$ to $x_0+\int_{t_0}^t v(s)\,ds$, so the feedback realizes $x'=Ax+Bu$ almost everywhere with $x(t_0)=x_0$. The output sum realizes $y=Cx+Du$.

```tikz
\begin{tikzpicture}[>=stealth, thick]
\node (u) at (-1.8,0) {$u(t)$};
\node[draw,minimum width=0.8cm,minimum height=0.7cm] (B) at (-0.2,0) {$B$};
\node[draw,circle,minimum size=0.55cm] (s) at (1.1,0) {$+$};
\node[draw,minimum width=2.5cm,minimum height=1cm] (int) at (3.6,0) {$x_0+\int_{t_0}^{t}(\cdot)\,ds$};
\node (x) at (5.6,0) {$x(t)$};
\node[draw,minimum width=0.8cm,minimum height=0.7cm] (C) at (7,0) {$C$};
\node[draw,circle,minimum size=0.55cm] (out) at (8.5,0) {$+$};
\node (y) at (10,0) {$y(t)$};
\node[draw,minimum width=0.8cm,minimum height=0.7cm] (D) at (3.6,2) {$D$};
\node[draw,minimum width=0.8cm,minimum height=0.7cm] (A) at (3.6,-1.7) {$A$};
\draw[->] (u) -- (B);
\draw[->] (B) -- (s) node[midway,above] {$Bu$};
\draw[->] (s) -- (int) node[midway,above] {$x'$};
\draw[->] (int) -- (x);
\draw[->] (x) -- (C);
\draw[->] (C) -- (out) node[midway,above] {$Cx$};
\draw[->] (out) -- (y);
\draw[->] (-1.1,0) -- (-1.1,2) -- (D);
\draw[->] (D) -- (8.5,2) -- (out) node[pos=0.8,right] {$Du$};
\draw[->] (5.9,0) -- (5.9,-1.7) -- (A);
\draw[->] (A) -- (1.1,-1.7) -- (s) node[pos=0.8,left] {$Ax$};
\end{tikzpicture}
```
