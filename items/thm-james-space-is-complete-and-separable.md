---
id: thm-james-space-is-complete-and-separable
kind: theorem
title: "James space is complete and separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-james-space, lem-james-formula-defines-a-norm, lem-real-and-complex-c-zero-are-banach, def-schauder-basis-and-coordinate-functionals]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Lemmas 2.76-2.79 and complete proofs, printed pp.95-99"
pipeline_run: phase-2-next-18
---

## Statement

The real James space $J$ is a separable Banach space. Its standard unit vectors
$(e_n)_{n\ge1}$ form a Schauder basis, and the coordinate truncations
$\Pi_Nx=(x_1,\ldots,x_N,0,\ldots)$ satisfy

$$\|\Pi_Nx\|_J\le\|x\|_J,\qquad \|x-\Pi_Nx\|_J\le\|x\|_J,\qquad \|x-\Pi_Nx\|_J\longrightarrow0.$$

## Facts & Assumptions

[L0] James coordinate $n\ge1$ is the underlying $c_0$ coordinate $n-1$, and
$e_n$ is supported at that coordinate ([[def-james-space]]).

[L1] The James formula is a norm, dominates the supremum norm, and satisfies
$\|x\|_J\le\sqrt2\|x\|_2$ on $\ell^2$
([[lem-james-formula-defines-a-norm]]).

[L2] Real $c_0$ is complete for the supremum norm
([[lem-real-and-complex-c-zero-are-banach]]).

[L3] A Schauder basis requires existence and uniqueness of the norm-convergent
coordinate expansion ([[def-schauder-basis-and-coordinate-functionals]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Let $(x^{(m)})$ be Cauchy in $J$. By [L1] it is Cauchy in $c_0$, so [L2] [given, L1, L2]
gives $x^{(m)}\to x\in c_0$ uniformly. For each fixed tuple $p$,
$q_p(x)=\lim_mq_p(x^{(m)})$, whence $\sup_pq_p(x)<\infty$. Letting
$m\to\infty$ in $q_p(x^{(n)}-x^{(m)})<\varepsilon$ uniformly in $p$ yields
$\|x^{(n)}-x\|_J\le\varepsilon$. Thus $J$ is complete. [L1, L2, finite
continuity]

2.1 For $p=(p_1<\cdots<p_k)$ in the positive labeling of [L0], define the [given, L0, L1, step 1.1]
auxiliary endpoint variation

$$r_p(x)^2=\frac12\left(|x_{p_1}|^2+ \sum_{j<k}|x_{p_j}-x_{p_{j+1}}|^2+|x_{p_k}|^2\right)$$

(with $r_{(p_1)}(x)=|x_{p_1}|$), and $R(x)=\sup_pr_p(x)$. Direct expansion
gives $\|x\|_J\le\sqrt2R(x)$. Appending an index $m\to\infty$ to $p$ and
using $x_m\to0$ gives $r_p(x)\le\|x\|_J$. Hence
$2^{-1/2}\|x\|_J\le R(x)\le\|x\|_J$. [L1, endpoint expansion]

3.1 Finite-support sequences are dense. Indeed, for nonzero $x$ and [given, step 2.1]
$\varepsilon>0$, choose $\delta>0$ with
$4\delta R(x)<\varepsilon^2$. Choose a tuple $p$ with
$r_p(x)>R(x)-\delta$, append a sufficiently remote final index $N=p_k$ so
this remains true, and ensure $\sup_{i\ge N}|x_i|<\delta$. Put
$\xi=\Pi_Nx$. For any tuple $q$ meeting the tail, delete its indices at most
$N$ and call the remaining tuple $q'$. Concatenating $p$ and $q'$ in the
definition of $R(x)$ gives

$$R(x)^2>(R(x)-\delta)^2-\delta^2+r_{q'}(x)^2, \qquad r_{q'}(x)^2<2\delta R(x).$$

Thus $R(x-\xi)^2<2\delta R(x)$, and step 2.1 gives
$\|x-\xi\|_J^2<4\delta R(x)<\varepsilon^2$. The zero vector is already
finite support. [step 2.1, finite concatenation, $x\in c_0$]

4.1 Fix a tuple $q$. If it lies wholly before or after $N$, the two [given, step 2.1, step 3.1]
contractive estimates for $\Pi_Nx$ and $x-\Pi_Nx$ are immediate. If it crosses
$N$, delete respectively the tail or the head. Expanding the one new jump to
zero shows that the resulting $q$-variation equals an auxiliary endpoint
variation $r_{q'}(x)$, hence is at most $R(x)\le\|x\|_J$ by step 2.1.
Taking suprema proves both contractive inequalities. [step 2.1, tuple cases]

5.1 Given $x$ and $\varepsilon>0$, step 3.1 gives finite-support $u$ with [given, L0, L3, step 3.1, step 4.1]
$\|x-u\|_J<\varepsilon$. For $N$ beyond its support, step 4.1 gives
$\|x-\Pi_Nx\|_J=\|(I-\Pi_N)(x-u)\|_J\le\|x-u\|_J<\varepsilon$.
Coordinatewise uniqueness in the labeling of [L0] is immediate, so [L3] makes
$(e_n)$ a Schauder basis. [L0, L3, steps 3.1, 4.1]

6.1 Finite-support sequences with rational coordinates form a countable set. [given, step 3.1, step 5.1]
They are dense by step 3.1 and finite-dimensional rational approximation, so
$J$ is separable. [step 3.1, finite approximation] ∎
