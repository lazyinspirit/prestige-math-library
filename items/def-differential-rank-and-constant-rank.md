---
id: def-differential-rank-and-constant-rank
kind: definition
title: 'The rank of a derivative and constant-rank Euclidean maps'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-rank-and-nullity, def-jacobian-matrix-and-gradient]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorems 7.13 and 8.8-8.12'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Sections 11.1-11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Definition

Let $m,n\ge 1$, let $U\subseteq\mathbb R^m$ be open, and let $f:U\to\mathbb R^n$ be $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]). The **rank of $f$ at $a\in U$** is
$$\operatorname{rank}_a f:=\operatorname{rank}Df(a),$$
where rank is the dimension of the image ([[def-rank-and-nullity]]). In the standard bases, this is also the rank of the Jacobian matrix $Jf(a)$ ([[def-jacobian-matrix-and-gradient]]).

For $S\subseteq U$ and $0\le r\le\min\{m,n\}$, the map $f$ has **constant rank $r$ on $S$** when $\operatorname{rank}Df(x)=r$ for every $x\in S$. On the empty set this condition is vacuous, so it may hold for more than one $r$; every assertion that needs a determined rank will assume $S$ is nonempty or specify $r$.
