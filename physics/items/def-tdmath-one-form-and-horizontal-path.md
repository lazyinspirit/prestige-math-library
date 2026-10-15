---
id: def-tdmath-one-form-and-horizontal-path
kind: definition
title: "A nonsingular Pfaff one-form and its horizontal paths"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
dependency_roles: {}
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §33.2, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Leonard Tomczak, notes for Jack Smith, Differential Geometry, §§2.5 and 6.2, full lecture notes"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/DG_Notes.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Definition

Let $U\subseteq\mathbb R^{n+1}$ be open, $n\ge1$, with coordinates $(x_1,\ldots,x_n,z)$. For $k\in\{1,2\}$, a $C^k$ one-form on $U$ is a field of linear functionals on tangent vectors of the form $\omega=\sum_{i=1}^n a_i(x,z)\,dx_i+b(x,z)\,dz$, where every coefficient is $k$ times continuously differentiable. At $q\in U$, it acts by $\omega_q(u_1,\ldots,u_n,w)=\sum_i a_i(q)u_i+b(q)w$. It is nonsingular on $U$ when $\omega_q\ne0$ for every $q$; then $H_q:=\ker\omega_q$ is an $n$-dimensional subspace of $T_qU\cong\mathbb R^{n+1}$.

For a $C^1$ scalar function $S:W\to\mathbb R$ on an open $W\subseteq U$, its differential is the one-form defined by

$$dS_q(v):=DS(q)v=\sum_{i=1}^n\partial_{x_i}S(q)u_i+\partial_zS(q)w,\qquad v=(u_1,\ldots,u_n,w)\in T_qW.$$

In particular, if $S\in C^2(W)$, then $dS$ is a $C^1$ one-form.

For one-forms $\alpha,\beta$, their exterior product is the alternating two-form $(\alpha\wedge\beta)(u,v)=\alpha(u)\beta(v)-\alpha(v)\beta(u)$. For a one-form $\alpha$ and a two-form $\sigma$, $(\alpha\wedge\sigma)(u,v,w)=\alpha(u)\sigma(v,w)-\alpha(v)\sigma(u,w)+\alpha(w)\sigma(u,v)$. For a $C^1$ one-form $\omega=\sum_{i=1}^n a_i\,dx_i+b\,dz$, its exterior derivative is the continuous two-form

$$d\omega=\sum_{1\le i<j\le n}(\partial_i a_j-\partial_j a_i)\,dx_i\wedge dx_j+\sum_{i=1}^n(\partial_i b-\partial_z a_i)\,dx_i\wedge dz.$$

When $\omega$ is $C^2$, the coefficients of $d\omega$ are $C^1$.

For a $C^2$ one-form on this page, the codimension-one Pfaff condition means the pointwise equation $\omega\wedge d\omega=0$.

A piecewise-$C^1$ path is a continuous $\gamma:[s_0,s_1]\to U$ with $s_0\le s_1$ and admitting a finite partition on each closed subinterval of which it is $C^1$. It is $\omega$-horizontal when $\omega_{\gamma(t)}(\dot\gamma(t))=0$ on the interior of each such subinterval. Endpoints where a derivative is one-sided are included by continuity. For an open $V\subseteq U$, $p$ is horizontally reachable from $q$ within $V$ if a horizontal path in $V$ joins $q$ to $p$. Both signs of time and finite concatenations are allowed by this definition.

On a neighborhood $W$, an integrating factor for $\omega$ is a nowhere-zero $\mu\in C^1(W)$ for which $\mu\omega=dS$ for some $S\in C^2(W)$ with $dS$ nowhere zero. This definition is local; it asserts neither a global potential on $U$ nor a physical identification or calibration of $S$.
