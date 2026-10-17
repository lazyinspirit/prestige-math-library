---
id: lem-index-one-dae-backward-euler-local-branch
title: "The coupled index-one backward-Euler equations have a local branch"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-index-one-dae-backward-euler-stepper
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
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Solving Ordinary Differential Equations II, Chapter VI §VI.1, Solving Index 1 Problems, pp. 372–381"
      url: "https://isy.gitlab-pages.liu.se/fs/phd-courses/simulation/Papers/HairerWanner_VI_1_clean.pdf"
      locator: "§VI.1, printed pp. 374–375 and 379–381: IFT branch and implicit Euler reduction."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.2"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed p. 168: coupled backward-Euler equations for a DAE."
---

## Statement

Let a compact exact solution segment lie in a common index-one branch chart with $f,g\in C^1$ and $g_z$ invertible on the graph. For each point $(t,x,\psi(t,x))$ on that segment, the coupled backward-Euler root equations

$$
X-\xi-hf(t,X,Z)=0,\qquad g(t,X,Z)=0
$$

have a unique root $(X,Z)$ in a selected neighborhood of $(x,\psi(t,x))$ whenever the step data $(h,t,\xi)$ are sufficiently close to $(0,t,x)$. On a compact subsegment contained in one chart with positive margin, the neighborhoods and a positive step bound can be chosen uniformly after restricting the input states to that neighborhood.

## Facts & Assumptions

**Given:** The DAE, the common branch chart, the compact reference segment, and the coupled backward-Euler residual from [[alg-index-one-dae-backward-euler-stepper]].

[F1] [[thm-index-one-dae-implicit-function-reduction]]: on the selected graph, $g(t,x,\psi(t,x))=0$ and $g_z(t,x,\psi(t,x))$ is invertible.

[F2] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: a $C^1$ residual whose derivative in its unknown block is invertible at a zero has a unique local root branch for nearby parameters.

## Proof

1.1 Define $\Phi(h,t,\xi,X,Z)=(X-\xi-hf(t,X,Z),g(t,X,Z))$. At $h=0,\xi=x,X=x,Z=\psi(t,x)$, [F1] gives $\Phi=0$. [given, F1, construct]

1.2 The derivative of $\Phi$ in the unknown pair $(X,Z)$ at this zero is the block matrix $\begin{pmatrix}I_d&0\\g_x&g_z\end{pmatrix}$. If this matrix sends $(u,v)$ to zero, its first row gives $u=0$, and its second gives $g_zv=0$; invertibility in [F1] gives $v=0$. The square matrix is therefore invertible. [F1, algebra]

2.1 Apply [F2] to $\Phi$, with $(h,t,\xi)$ as parameters and $(X,Z)$ as unknowns. It gives a unique nearby root branch for all sufficiently small parameter changes, proving the local assertion. [step 1.1, step 1.2, F2]

3.1 The reference parameter graph $\{(0,t,x(t)):t\in[a,b]\}$ is compact and lies in the open union of the IFT parameter neighborhoods from step 2.1. Compactness gives $\delta>0$ such that the $\delta$-neighborhood of this graph lies in that union. Shrink each associated unknown neighborhood inside the common branch chart. Thus, for all sufficiently small $|h|$ and input states sufficiently close to the reference graph, one IFT chart supplies the corresponding unique local root. [step 2.1, given, construct] ∎
