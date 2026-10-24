---
id: def-projected-contact-dynamics-and-euler-step
kind: definition
title: Projected contact dynamics and explicit projection Euler step
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-kkt-residual-and-normal-cone
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - def-euclidean-inner-product
  - def-absolutely-continuous-function
  - def-derivative
  - def-measure-null-set-and-almost-everywhere
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
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
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Section 4.3, pp. 122–124; projected dynamical inclusion and convex normal-cone convention.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slide 161, and Lecture 23, slide 302; indicator normal cone and projection step conventions.
---

## Definition

Let $d\ge1$, let $C\subseteq\mathbb R^d$ be nonempty, closed, and convex, and let $P_C(y)$ be the unique nearest point in $C$ to $y$, whose existence and uniqueness are [[thm-nearest-point-in-a-nonempty-closed-convex-set]]. For $x\in C$, set
$$N_C(x)=\{n\in\mathbb R^d:\langle n,z-x\rangle\le0\text{ for every }z\in C\};$$
for $x\notin C$, set $N_C(x)=\varnothing$. On $C$ this is the outward normal cone of [[def-kkt-residual-and-normal-cone]]. The projection variational inequality of [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]] says $P_C(y)=p$ exactly when $p\in C$ and $y-p\in N_C(p)$.

For $T>0$, a solution of the projected contact dynamics with forcing $f:[0,T]\times C\to\mathbb R^d$ and initial state $x_0\in C$ is an absolutely continuous map $x:[0,T]\to C$ satisfying
$$f(t,x(t))-\dot x(t)\in N_C(x(t))\quad\text{for almost every }t\in[0,T].$$
Equivalently, $\dot x(t)+N_C(x(t))\ni f(t,x(t))$. For an integer $N\ge1$, put $h=T/N$, $t_k=kh$, and define the exact explicit projection Euler nodes by
$$x_{k+1}=P_C\bigl(x_k+h f(t_k,x_k)\bigr),\qquad k=0,\ldots,N-1,$$
starting from $x_0$. Its affine interpolant joins consecutive nodes linearly on each interval $[t_k,t_{k+1}]$.

For a map $x:[0,T]\to\mathbb R^d$, **absolutely continuous** means that each coordinate is absolutely continuous in the scalar sense of [[def-absolutely-continuous-function]], and $\dot x(t)$ is the vector of coordinate derivatives, from [[def-derivative]], wherever they all exist. The solution condition requires a Lebesgue-null set $N\subseteq[0,T]$ such that for every $t\notin N$ all coordinate derivatives exist and the displayed inclusion holds. Here **almost every $t$** is relative to Lebesgue measure $\lambda$ from [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], with the convention of [[def-measure-null-set-and-almost-everywhere]].

## Remarks

For an illustrative planar case, take $C$ to be the closed unit disk. The trial point $y=x_k+h f(t_k,x_k)$ below lies outside $C$, and its projection is $p=x_{k+1}$. The outward normal cone at this boundary point is the ray of nonnegative multiples of $y-p$; the picture draws its translate $p+N_C(p)$ based at $p$. The straight segment from $x_k$ to $p$ is the spatial trace of the affine interpolant on this step; it stays in $C$ by convexity. The curved dashed arrow indicates projection, not a trajectory of the continuous dynamics.

```tikz
\begin{tikzpicture}[scale=1.8]
  \draw[thick] (0,0) circle (1.5);
  \node at (-0.6,0.65) {$C$};
  \coordinate (x) at (-0.65,-0.7);
  \coordinate (p) at (1.5,0);
  \coordinate (y) at (2.8,0);
  \draw[->,thick,orange] (x) -- (y);
  \node[below] at (1.2,-0.65) {$h f(t_k,x_k)$};
  \draw[->,thick,cyan] (x) -- (p);
  \node[above,rotate=18] at (0.2,-0.4) {affine segment};
  \draw[->,thick] (p) -- (4.2,0);
  \node[above] at (3.7,0) {$p+N_C(p)$};
  \draw[->,dashed] (y) .. controls (2.65,0.85) and (1.65,0.85) .. (p);
  \node[above] at (2.15,0.65) {$P_C$};
  \fill (x) circle (1.5pt);
  \fill (p) circle (1.5pt);
  \fill (y) circle (1.5pt);
  \node[below left] at (x) {$x_k$};
  \node[above left] at (p) {$p=x_{k+1}$};
  \node[below] at (y) {$y$};
\end{tikzpicture}
```
