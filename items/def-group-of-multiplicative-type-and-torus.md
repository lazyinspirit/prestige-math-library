---
id: def-group-of-multiplicative-type-and-torus
kind: definition
title: "Groups of multiplicative type and tori"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-diagonalizable-group-and-character-module"]
---

## Definition

A group scheme of finite type over a field $k$ is **of multiplicative type** if it is fpqc locally diagonalizable: there is a faithfully flat quasi-compact covering $S'\to\operatorname{Spec}k$ on which it becomes a diagonalizable group. A **torus** over $k$ is a finite-type group scheme fpqc locally isomorphic to $\mathbf G_m^r$, for a finite integer $r\ge0$. A group or torus is **split** if the relevant isomorphism already exists over $k$.

Diagonalizable means the group-algebra construction in [[def-diagonalizable-group-and-character-module]]. These definitions include the trivial torus of rank zero and nonsmooth multiplicative-type groups. No affineness or separable splitting condition is imposed by definition. Affineness and field splitting are proved locally on this page, followed by finite separable splitting.
