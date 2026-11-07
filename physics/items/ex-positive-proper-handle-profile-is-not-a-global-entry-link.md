---
id: ex-positive-proper-handle-profile-is-not-a-global-entry-link
kind: example
title: Why a positive proper profile misses the whole entry completion
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 2
deps:
  - def-stopped-four-dimensional-lefschetz-and-brane-data
  - lem-stopped-entry-submersion-disk-whole-completion
dependency_roles:
  def-stopped-four-dimensional-lefschetz-and-brane-data: mathematical-premise
  lem-stopped-entry-submersion-disk-whole-completion: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 6, exact conical ends; the minimum and winding obstruction are computed directly.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §3.3, linking-disk terminology; no linking-disk uniqueness theorem is used.
verification:
  precheck: pending
---

## Statement

Let $f:\mathbb R^2\to(0,\infty)$ be smooth and proper, and suppose $f(p)=C\sqrt{|p|}$ outside a compact set, with $C>0$. For $\delta>0$, the graph $q=\delta\nabla f(p)$ has a point that never reaches $Y_-=\{|p|^2-|q|^2=-1\}$ under backward Liouville flow, and its tail winds once around the attaching circle. It therefore cannot be the whole zero-winding entry link of the preceding example.

## Statement references

[[def-stopped-four-dimensional-lefschetz-and-brane-data]]

[[lem-stopped-entry-submersion-disk-whole-completion]]

## Facts & Assumptions

**Given:** The critical chart and Liouville field, the stated smooth proper positive function, and the graph scale $\delta>0$.

[F1] [[def-stopped-four-dimensional-lefschetz-and-brane-data]] fixes $Z=2p\partial_p-q\partial_q$ and $Y_-=\{|p|^2-|q|^2=-1\}$ in the quadratic chart.

[F2] [[lem-stopped-entry-submersion-disk-whole-completion]] has a whole graph whose backward hits are unique and whose contact-end winding is zero.


## Proof

1.1 Since $f=C\sqrt{|p|}$ outside a compact set, $f(p)\to\infty$ as $|p|\to\infty$. Choose a closed disk outside which $f(p)>f(0)+1$. The continuous $f$ attains its minimum on that compact disk, and the exterior bound makes this a global minimum $p_0$ on $\mathbb R^2$. Differentiability gives $\nabla f(p_0)=0$. [given, construct, algebra]

2.1 The graph point over $p_0$ has $q=0$. Its backward Liouville trajectory is $p(\tau)=e^{-2\tau}p_0,\ q(\tau)=0$, so $|p(\tau)|^2-|q(\tau)|^2=e^{-4\tau}|p_0|^2\ge0$ for every finite $\tau$. It cannot lie on the level $-1$; hence the whole graph is not contained in the positive entry completion. [F1, step 1.1, given, algebra]

3.1 On the exterior, $f=C r^{1/2}$, so $\nabla f=(C/2)r^{-1/2}e(\theta)$. The graph’s nonzero $q$-direction is exactly $e(\theta)$; as $\theta$ runs once around the source circle, the attaching-circle coordinate runs once positively around. Its winding is $+1$. The submersion disk in [F2] has winding zero. Thus matching a local transverse germ cannot make this entire positive proper graph equal to that complete entry link. The missing backward hit and the unequal winding numbers are obstructions already established by the displayed formulas; no boundary-attachment theorem is required. [F1, F2, step 2.1, construct, algebra] ∎
