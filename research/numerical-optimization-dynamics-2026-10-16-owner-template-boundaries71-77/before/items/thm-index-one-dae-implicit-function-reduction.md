---
id: thm-index-one-dae-implicit-function-reduction
title: "A regular index-one DAE has a local reduced ODE branch"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-semi-explicit-index-one-dae-and-consistent-initial-data
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
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
      locator: "§VI.1, printed pp. 374–375: local IFT branch and state-space reduction."
    - title: "Kendall Atkinson, Weimin Han, and David Stewart, Numerical Solution of Ordinary Differential Equations, Chapter 10 §10.3"
      url: "https://homepage.math.uiowa.edu/~atkinson/papers/NAODE_Book.pdf"
      locator: "Chapter 10, printed pp. 169–170: nonsingular g_z and the local branch z=phi(t,Y)."
---

## Statement

Let $d,m\ge1$, let $\Omega\subseteq\mathbb R\times\mathbb R^d\times\mathbb R^m$ be open, and let $f:\Omega\to\mathbb R^d$, $g:\Omega\to\mathbb R^m$ be $C^k$ for $k\ge1$. Suppose $g(t_*,x_*,z_*)=0$ and $g_z(t_*,x_*,z_*)$ is invertible. Then there are neighborhoods $U$ of $(t_*,x_*)$ and $V$ of $z_*$, and a unique $C^k$ map $\psi:U\to V$, such that, for $(t,x)\in U$ and $z\in V$,

$$
g(t,x,z)=0\quad\Longleftrightarrow\quad z=\psi(t,x).
$$

Its derivatives satisfy

$$
\psi_t=-g_z^{-1}g_t,\qquad \psi_x=-g_z^{-1}g_x,
$$

with the derivatives of $g$ evaluated at $(t,x,\psi(t,x))$. The reduced vector field $F(t,x)=f(t,x,\psi(t,x))$ is $C^k$ on $U$. Thus solutions of the DAE that stay in this selected chart are exactly solutions of $x'=F(t,x)$ paired with $z=\psi(t,x)$.

## Facts & Assumptions

**Given:** The dimensions, open domain, $C^k$ maps, root, and invertible algebraic Jacobian in the Statement.

[F1] [[def-semi-explicit-index-one-dae-and-consistent-initial-data]]: a semi-explicit DAE is $x'=f(t,x,z)$, $g(t,x,z)=0$; a consistent pair satisfies $g=0$.

[F2] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: for a $C^k$ map whose derivative in the unknown block is invertible at a zero, there are neighborhoods and a unique $C^k$ implicit branch, with derivative $-D_zg^{-1}D_{(t,x)}g$.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composite is the composition of the derivatives.

## Proof

1.1 Treat $(t,x)$ as the parameter block and $z$ as the unknown block in [F2]. Its hypotheses hold because $g$ is $C^k$, $g(t_*,x_*,z_*)=0$, and $g_z(t_*,x_*,z_*)$ is invertible. Therefore [F2] gives neighborhoods $U,V$ and a unique $C^k$ function $\psi$ with the stated equivalence and derivative formula. Splitting that combined derivative into its $t$ and $x$ blocks gives the two displayed identities. [given, F2, algebra]

1.2 Differentiating $g(t,x,\psi(t,x))=0$ in the $t$ direction using [F3] gives $g_t+g_z\psi_t=0$; multiplying by $g_z^{-1}$ gives $\psi_t=-g_z^{-1}g_t$. Differentiating in each $x$ direction gives $g_x+g_z\psi_x=0$, hence $\psi_x=-g_z^{-1}g_x$. [F2, F3, algebra]

2.1 The map $(t,x)\mapsto (t,x,\psi(t,x))$ is $C^k$, so [F3] applied to its composition with the $C^k$ map $f$ shows $F(t,x)=f(t,x,\psi(t,x))$ is $C^k$. On the selected chart the equivalence in step 1.1 forces every DAE solution to have $z(t)=\psi(t,x(t))$, and substitution gives $x'=F(t,x)$; conversely, a reduced solution paired with $z=\psi(t,x)$ satisfies both DAE equations. [F1, F3, step 1.1] ∎
