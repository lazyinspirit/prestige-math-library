---
id: lem-index-one-dae-bdf2-local-branch
title: "The coupled index-one constant-step BDF2 equations have a local branch"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-index-one-dae-bdf2-stepper
  - thm-index-one-dae-implicit-function-reduction
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 374–375: the local algebraic branch; the local BDF2 root branch is proved here by the parametrized implicit function theorem."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.4"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 172–174: BDF equations for semi-explicit index-one DAEs."
---

## Statement

Let a compact exact solution segment lie in a common index-one branch chart with $f,g\in C^1$ and $g_z$ invertible on the graph. For each point $(t,x,\psi(t,x))$, the coupled constant-step BDF2 root equations

$$
3X-4\xi+\zeta-2hf(t,X,Z)=0,\qquad g(t,X,Z)=0
$$

have a unique root $(X,Z)$ in a selected neighborhood of $(x,\psi(t,x))$ whenever $(h,t,\xi,\zeta)$ is sufficiently close to $(0,t,x,x)$. On a compact subsegment in one chart with positive margin, one may choose a common positive step bound after restricting the two input states to neighborhoods of the reference graph.

## Facts & Assumptions

**Given:** The DAE, its common selected branch chart, the compact reference segment, and the constant-step BDF2 residual from [[alg-index-one-dae-bdf2-stepper]].

[F1] [[thm-index-one-dae-implicit-function-reduction]]: $g(t,x,\psi(t,x))=0$ and $g_z(t,x,\psi(t,x))$ is invertible.

[F2] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: a $C^1$ residual whose derivative in its unknown block is invertible at a zero has a unique local root branch for nearby parameters.

## Proof

1.1 Define $\Phi(h,t,\xi,\zeta,X,Z)=(3X-4\xi+\zeta-2hf(t,X,Z),g(t,X,Z))$. At $h=0,\xi=\zeta=X=x,Z=\psi(t,x)$, [F1] gives $\Phi=0$. [given, F1, construct]

1.2 The derivative in $(X,Z)$ at this zero is $\begin{pmatrix}3I_d&0\\g_x&g_z\end{pmatrix}$. If it annihilates $(u,v)$, then $3u=0$, so $u=0$; the second row then gives $g_zv=0$, so $v=0$ by [F1]. Hence the square derivative matrix is invertible. [F1, algebra]

2.1 Apply [F2] with $(h,t,\xi,\zeta)$ as parameters and $(X,Z)$ as unknowns. The implicit function theorem gives a unique nearby root branch for all sufficiently small changes in those parameters. [step 1.1, step 1.2, F2]

3.1 The reference parameter graph $\{(0,t,x(t),x(t)):t\in[a,b]\}$ is compact and lies in the open union of the IFT parameter neighborhoods from step 2.1. Compactness gives $\delta>0$ such that the $\delta$-neighborhood of this graph lies in that union. Shrink each associated unknown neighborhood inside the common branch chart. Thus, for all sufficiently small $|h|$ and pairs of input states sufficiently close to the reference graph, one IFT chart supplies the corresponding unique local root. [step 2.1, given, construct] ∎
