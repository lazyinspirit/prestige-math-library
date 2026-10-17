---
id: def-convex-program-duality-and-slater-condition
kind: definition
title: Finite-dimensional convex program, Lagrangian dual, and Slater condition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - def-convex-subset-of-euclidean-space
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.1–5.3.2, printed pp. 215–236; primal and dual values, weak duality, relative-interior Slater condition and dual attainment.
    - title: "Zhiyuan Li, Convex Optimization, Lecture 5: Lagrange Multipliers and KKT"
      url: https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-5___-Lagrange-Multipliers-and-KKT/
      locator: Sections 5.1–5.2, Definitions 5.1 and 5.4 and Theorem 5.3 with its full perturbation-value-function proof.
---

## Definition

A subset is convex when it contains the segment joining each pair of its
points ([[def-convex-subset-of-euclidean-space]]). A function
$F:\mathbb R^n\to(-\infty,+\infty]$ is proper if it never equals
$-\infty$ and is finite at at least one point. Its domain is
$\operatorname{dom}F=\{x:F(x)<+\infty\}$. Its epigraph is
$\operatorname{epi}F=\{(x,t):F(x)\le t\}$. It is closed convex when its
epigraph is a closed convex set. For a nonempty convex set $S$,
$\operatorname{aff}S$ is its smallest containing affine subspace and
$\operatorname{ri}S$ is its interior relative to $\operatorname{aff}S$.

Let $n\ge1$, let $m,p\in\mathbb N$ with zero allowed, let
$f_0,g_1,\ldots,g_m$ be proper closed convex functions on $\mathbb R^n$,
let $A\in\mathbb R^{p\times n}$ have full row rank, and let
$b\in\mathbb R^p$. Full row rank means that the rows are linearly
independent, vacuously when $p=0$. The common domain is
$D=\operatorname{dom}f_0\cap\bigcap_{i=1}^m\operatorname{dom}g_i$. The primal
problem is to minimize $f_0(x)$ over $x\in D$ satisfying $Ax=b$ and
$g_i(x)\le0$. An inequality is removable if, with
$D_{-i}=\operatorname{dom}f_0\cap\bigcap_{j\ne i}\operatorname{dom}g_j$,
$D_{-i}\subseteq\operatorname{dom}g_i$ and $g_i(x)\le0$ for every $x\in D_{-i}$.
Then $D=D_{-i}$, so removing that function and its inequality leaves the
feasible set unchanged. While a removable inequality exists, delete the one
with smallest original index, recomputing $D_{-i}$ using the currently retained
family after each deletion. Stop when none is removable, then relabel the
remaining inequalities consecutively in their original order and let $m$
denote their number. An inequality that is nonpositive only on $D$
but whose function domain restricts $D$ is not removable. Unless stated
otherwise, the inequalities below are the remaining ones after only these
domain-preserving deletions. The primal value is
$$
p^*=\inf\{f_0(x):x\in D,\ Ax=b,\ g_i(x)\le0\text{ for all }i\}.
$$

For $\lambda\in\mathbb R^m_+$ and $\nu\in\mathbb R^p$, the extended
Lagrangian is
$$
L(x,\lambda,\nu)=\begin{cases}f_0(x)+\lambda^Tg(x)+\nu^T(Ax-b),&x\in D,\\+\infty,&x\notin D.\end{cases}
$$
The dual function and dual value are
$$
q(\lambda,\nu)=\inf_{x\in\mathbb R^n}L(x,\lambda,\nu),\qquad d^*=\sup_{\lambda\ge0,\ \nu\in\mathbb R^p}q(\lambda,\nu).
$$
The dual supremum is attained when some admissible $(\lambda,\nu)$ has
$q(\lambda,\nu)=d^*$; the optimal duality gap is $p^*-d^*$ when both values
are finite.

Slater's condition means that there is
$x_s\in\operatorname{ri}(\operatorname{dom}f_0)\cap
\bigcap_i\operatorname{ri}(\operatorname{dom}g_i)$ with $Ax_s=b$ and
$g_i(x_s)<0$ for every remaining inequality. Relative interior is used in
the affine hull of each domain, so the domain need not have ambient interior.

## Remarks

The equality rows are assumed independent after consistent redundant rows are
removed. The theorem on this page assumes a finite attained primal value;
Slater's strict inequalities alone do not assert primal attainment.
The deletion convention depends on the indexed representation; Slater's
condition is tested on the resulting family, not asserted to be invariant
under other deletion orders or equivalent constraint representations.
