---
id: def-rational-function-field-places-and-degree-map
kind: definition
title: "Places and degree map for the rational function field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Michael Rosen, Number Theory in Function Fields"
      url: "https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf"
      locator: "Chapter 5, rational function field places and divisor degrees."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§1, function-field places, completions, and the degree map."
verification:
  precheck: n/a
---

## Definition

Let $q$ be a prime power and $F=\mathbb F_q(t)$. The finite places of $F$ are indexed by the monic irreducible polynomials $P\in\mathbb F_q[t]$; at such a place $v_P$, set $\operatorname{ord}_{v_P}(P^e u)=e$ when $u$ is a unit in the local ring, and set $\deg(v_P)=\deg(P)$. There is one additional place $v_\infty$ with $\operatorname{ord}_{v_\infty}(P/Q)=\deg(Q)-\deg(P)$ for nonzero coprime polynomials $P,Q$, and $\deg(v_\infty)=1$. For each place $v$, let $F_v$ be the completion, $\mathcal O_v=\{x\in F_v:\operatorname{ord}_v(x)\ge0\}$ its valuation ring, and $\mathcal O_v^\times=\{x\in F_v:\operatorname{ord}_v(x)=0\}$ its unit group.

The **idele group** is the restricted product $\mathbb A_F^\times=\prod_v'F_v^\times$ over all these places with respect to $\mathcal O_v^\times$: an idele is a tuple $a=(a_v)_v$ with $a_v\in\mathcal O_v^\times$ for all but finitely many places. There are no archimedean places in this function field. Its degree is $\deg(a)=\sum_v\deg(v)\operatorname{ord}_v(a_v)$; this is a finite sum because almost all valuations vanish.

## Definition references

[Michael Rosen, *Number Theory in Function Fields*, Chapter 5](https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf)

[Gérard Laumon, §1](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)
