---
id: def-upper-and-lower-semicontinuous-envelopes
kind: definition
title: "Upper and lower semicontinuous envelopes by local limsup and liminf"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-semicontinuity-on-euclidean-subsets, def-extended-reals, def-metric-topology, def-infimum, lem-extended-reals-complete]
justified_by: []
aliases: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)"
      url: "https://arxiv.org/pdf/math/9207212"
      locator: "Section 4, upper and lower semicontinuous envelopes, the display before Theorem 4.1, printed p. 22"
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 1 Section 8, envelope notation in Perron's method, printed pp. 33--34"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $A\subseteq\mathbb R^m$ be nonempty
([[def-metric-topology]]) and let $u:A\to\mathbb R$. For $x\in A$ and $r>0$
put
$$M_r(x):=\sup\{u(y):y\in A,\ |y-x|\le r\},\qquad m_r(x):=\inf\{u(y):y\in A,\ |y-x|\le r\},$$
the supremum and infimum being taken in
$\overline{\mathbb R}=\mathbb R\cup\{\pm\infty\}$
([[def-extended-reals]], [[def-infimum]], [[lem-extended-reals-complete]]).

The **upper semicontinuous envelope** of $u$ is
$$u^*(x):=\inf_{r>0}M_r(x)=\lim_{r\downarrow0}\ \sup_{\substack{y\in A\\ |y-x|\le r}}u(y),$$
and the **lower semicontinuous envelope** of $u$ is
$$u_*(x):=\sup_{r>0}m_r(x)=\lim_{r\downarrow0}\ \inf_{\substack{y\in A\\ |y-x|\le r}}u(y),$$
both with values in $\overline{\mathbb R}$.

## Remarks

- **The limits exist.** For fixed $x\in A$ the map $r\mapsto M_r(x)$ is
  nondecreasing in $r$ (the set it is taken over grows with $r$) and the map
  $r\mapsto m_r(x)$ is nonincreasing in $r$, so the one-sided limits as
  $r\downarrow0$ exist in $\overline{\mathbb R}$, with
  $\inf_{r>0}M_r(x)=\lim_{r\downarrow0}M_r(x)$ and
  $\sup_{r>0}m_r(x)=\lim_{r\downarrow0}m_r(x)$. Since $A$ is nonempty, the
  sets over which the suprema and infima are taken are nonempty; infinite
  values are kept rather than discarded.
- **Comparison with $u$.** For every $x\in A$ one has $m_r(x)\le u(x)\le
  M_r(x)$ for all $r>0$, hence $u_*(x)\le u(x)\le u^*(x)$ pointwise. If $u$
  is bounded on $A$, then all values $M_r(x),m_r(x)$ lie between
  $\inf_Au$ and $\sup_Au$, so $u^*$ and $u_*$ are real-valued and bounded on
  $A$; this is a sufficient hypothesis for real-valued envelopes. Local boundedness
  near each point also suffices, because only arbitrarily small radii affect
  the defining infimum and supremum.
- **Scope.** These are the envelopes of $u$ on the Euclidean set $A$. The
  space--time cylinder of [[def-hamilton-jacobi-cauchy-problem]] is used with
  $m=n+1$ and $A=Z$, and the envelope notation is the one appearing in the
  stability, Perron and comparison statements of this page
  ([[def-semicontinuity-on-euclidean-subsets]] is the underlying mode of
  semicontinuity). No choice is used: each envelope is the value of a monotone
  limit indexed by $r$, hence by $r=1/k$, and no sequence or point is
  selected.
