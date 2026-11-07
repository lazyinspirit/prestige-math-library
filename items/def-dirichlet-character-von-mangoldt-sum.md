---
id: def-dirichlet-character-von-mangoldt-sum
kind: definition
title: "Von Mangoldt sum twisted by a Dirichlet character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dirichlet-character-modulo-q, def-von-mangoldt-function]
justified_by: []
sources:
  references:
    - title: "Ben Green, The Prime Number Theorem, Chapter 7, §§7.1–7.3"
      url: "https://people.maths.ox.ac.uk/greenbj/papers/primenumbers.pdf"
    - title: "Harold Davenport, Multiplicative Number Theory, 2nd ed., §19, pp. 115–120"
      url: "https://link.springer.com/chapter/10.1007/978-1-4757-5927-3_19"
    - title: "Digitized full text of Harold Davenport, Multiplicative Number Theory, 2nd ed., §19, pp. 115–120"
      url: "https://djvu.online/file/Rh8B8jEVpxFgk"
---

## Definition

Let $q\ge1$ and let $\chi$ be a Dirichlet character modulo $q$. For $x>0$,
define the sharp twisted von Mangoldt sum

$$\psi(x,\chi):=\sum_{1\le n\le x}\Lambda(n)\chi(n).$$

Let $W:(0,\infty)\to\mathbb C$ be infinitely differentiable and vanish
outside a compact subset of $(0,\infty)$. Its Mellin transform is

$$\widetilde W(s):=\int_0^\infty W(u)u^{s-1}\,du\qquad(s\in\mathbb C),$$

and the corresponding Mellin-smoothed twisted sum is

$$\psi_W(x,\chi):=\sum_{n\ge1}\Lambda(n)\chi(n)W(n/x)\qquad(x>0).$$

Both sums are finite: the first has $n\le x$, while compact support bounded
away from $0$ restricts $n/x$ in the second sum to a bounded interval of
positive real numbers.

## Definition references

[[def-dirichlet-character-modulo-q]].

[[def-von-mangoldt-function]].
