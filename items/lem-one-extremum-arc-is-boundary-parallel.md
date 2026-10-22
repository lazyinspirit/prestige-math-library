---
id: lem-one-extremum-arc-is-boundary-parallel
kind: lemma
title: An arc with one height extremum is boundary-parallel
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - thm-isotopy-extension
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Jennifer Schultens, Additivity of Bridge Numbers of Knots"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/addbri15.pdf"
      locator: "Definition 1, printed pp. 1–2, and the bridge-arc convention"
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "§16.9, printed p. 339, standard height and regular levels"
---

## Statement

Assume the Axiom of Countable Choice. On the unit sphere $S^3\subset\mathbb R^4$ with height $h(x_1,x_2,x_3,x_4)=x_4$, let $c$ be a regular value and let $a$ be a smooth properly embedded arc in the upper ball $B_+=\{x_4\ge c\}$, with endpoints on $S_c=\{x_4=c\}$, such that $h|_a$ has exactly one nondegenerate interior maximum and no other critical point. For every simple smooth arc $\beta\subset S_c$ joining those endpoints, there is an embedded disk in $B_+$ with boundary $a\cup\beta$. The corresponding statement for one nondegenerate minimum in the lower ball $B_-=\{x_4\le c\}$ also holds.

## Statement references

[[thm-isotopy-extension|Extension of an isotopy of a compact embedded source]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the standard coordinate height on the unit $S^3\subset\mathbb R^4$, a regular level sphere $S_c$, the upper ball $B_+=\{x_4\ge c\}$, a smooth proper arc $a\subset B_+$ with one nondegenerate maximum and endpoints on $S_c$, and a simple arc $\beta\subset S_c$ with the same endpoints.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] The regular level spheres of $h$ are explicitly identified by $\Phi_r:S^2\to S_r$, $\Phi_r(v)=(\sqrt{1-r^2}\,v,r)$ for $-1<r<1$.

[F2] Under $\mathrm{AC}_\omega$, a smooth isotopy of embeddings of a compact source into a boundaryless manifold extends to an ambient isotopy. [[thm-isotopy-extension]]

## Proof

**Given:** The upper-ball arc and the hypotheses in the statement.


1.1 Let $m$ be the unique maximum. The two components of $a\setminus\{m\}$ are strictly monotone in height, so each intermediate regular level meets $a$ in exactly two points. In a Morse chart on $a$ near $m$, the height is $h(m)-t^2$; a short level arc joining the two nearby points and the subarc through $m$ bound a small embedded cap disk. Under [F1], the two points on all lower regular levels form a smooth path of distinct ordered pairs in $S^2$. [given, F1, construct]

2.1 Apply [F2] to the two-point isotopy of step 1.1, starting at the cap level. The extended sphere isotopy transports the short cap arc through simple arcs on the intervening levels. Their union is an embedded strip because distinct levels are disjoint; adjoining the cap disk gives an embedded disk with boundary $a\cup\beta_0$ for a simple arc $\beta_0\subset S_c$. [A1, F2, step 1.1, construct]

3.1 Let $\gamma_0$ be the initial cap arc on the reference $S^2$, and let $f_r$ be the ambient isotopy from [F2] carrying its endpoint pair to the two intersection points on level $S_r$. The arc $f_c^{-1}(\beta)$ is a simple arc with the same endpoints as $\gamma_0$. Bigon elimination gives an isotopy $g_t$ of $S^2$, fixed at those endpoints, with $g_1(\gamma_0)=f_c^{-1}(\beta)$. Precompose the transported cap arc by $g_{\lambda(r)}$ before applying $f_r$, where $\lambda$ is zero near the cap level and increases smoothly to $1$ at $r=c$. Every $g_t$ fixes the reference endpoints, so the joining arcs still have the required endpoint tracks; at $r=c$ the joining arc is exactly $\beta$. The union of this family with the cap disk is therefore an embedded disk bounded by $a\cup\beta$. Reversing height proves the lower-ball statement. [A1, F2, step 1.1, step 2.1, construct] ∎

## Sources

[[thm-isotopy-extension]]

[[def-countable-choice]]
