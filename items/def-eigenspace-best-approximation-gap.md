---
id: def-eigenspace-best-approximation-gap
kind: definition
title: Best-approximation gap of a finite-dimensional eigenspace
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-bounded-coercive-and-symmetric-sesquilinear-forms]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§§47.2.2–47.2.3, fixed-index best-approximation errors and eigenspace estimates."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.5–8.7, printed pp. 133–140: eigenspace distance, invariant subspaces, and eigenvalue errors."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $V$ be a real or complex Hilbert space with a bounded, Hermitian,
coercive form $a$ as in [[def-bounded-coercive-and-symmetric-sesquilinear-forms]].
Its energy norm is $\|v\|_a:=\sqrt{a(v,v)}$. Let $E\subseteq V$ be a
nonzero finite-dimensional subspace and let $V_h\subseteq V$ be a
finite-dimensional subspace. Define the directed energy distance and
best-approximation gap by
$$d_a(v,V_h):=\inf_{w_h\in V_h}\|v-w_h\|_a,\qquad \delta_a(E,V_h):=\sup_{\substack{v\in E\\\|v\|_a=1}}d_a(v,V_h).$$
When $E=\operatorname{span}\{e_1,\ldots,e_m\}$ is the first $m$
continuous eigenspace directions and $V_h$ is the conforming Galerkin space,
write $\delta_h:=\delta_a(E,V_h)$. This is a directed gap from $E$ to $V_h$;
it does not by itself assert a two-sided gap between two eigenspaces.

The quantity is finite and satisfies $0\le\delta_a(E,V_h)\le1$, since
$0\in V_h$ gives $d_a(v,V_h)\le\|v\|_a$ on the unit sphere.
