---
id: def-pe12-stable-conforming-fem-family
kind: definition
title: Conforming FEM families with stable L2 projectors
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-pe12-gelfand-triple]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12 §§12.1–12.2, PDF pp. 102–105: conforming spatial subspaces and the L2 projection"
---

## Definition

Let $(V,H,J)$ be the Banach evolution triple of
[[def-pe12-gelfand-triple]]. An **admissible stable conforming FEM sequence**
consists of finite-dimensional subspaces $V_k\subset V$ and their
$H$-orthogonal projections $\Pi_k:H\to V_k$ such that:

1. $\Pi_k(V)\subset V$, $\Pi_kv=v$ for $v\in V_k$, and
   $(w_k,z-\Pi_kz)_H=0$ for every $w_k\in V_k$, $z\in H$;
2. $\sup_k\|\Pi_k\|_{V\to V}\le C_\Pi<\infty$ and
   $\Pi_kv\to v$ in $V$ for each $v\in V$;
3. the associated time partitions of $[0,T]$ have maximum step
   $\delta_k\to0$.

The convergence in clause 2 and density of $V$ in $H$ imply
$\Pi_kz\to z$ in $H$ for every $z\in H$: use
$\|\Pi_k(z-v)\|_H\le\|z-v\|_H$, $\Pi_kv\to v$ in $H$, and approximate $z$
by $v\in V$. Thus the range spaces approximate every $H$ vector.

For a fixed $k$, backward Euler with averages $f_k^n$ uses unknowns
$U_k^n\in V_k$ and equations
$$\left(\frac{U_k^n-U_k^{n-1}}{\tau_n},v_k\right)_H +\langle A(U_k^n),v_k\rangle =\langle f_k^n,v_k\rangle\qquad(v_k\in V_k).$$
Its piecewise-constant reconstruction is $\overline U_k(t)=U_k^n$ on
$(t_{n-1},t_n]$; its affine reconstruction joins $U_k^{n-1}$ to $U_k^n$.

## Remarks

The uniform $V$-stability of the $H$-orthogonal projections is an explicit
method hypothesis; conformity alone does not imply it. The same-page
[[thm-pe12-l2-projector-w1p-stability]] proves this interface for fixed-degree
globally quasi-uniform shape-regular simplex meshes on bounded Lipschitz
polyhedral domains in $d\ge2$ and for the directly defined interval meshes in
$d=1$. The abstract definition remains applicable to other conforming
families when its projector clauses are independently verified.
