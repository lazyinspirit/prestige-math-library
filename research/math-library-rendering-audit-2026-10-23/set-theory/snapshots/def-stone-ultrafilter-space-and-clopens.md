---
id: def-stone-ultrafilter-space-and-clopens
kind: definition
title: Stone ultrafilter space and its clopen basis
status: published
origin: pipeline
deps: [lem-generated-boolean-filter-and-ultrafilter-tests, def-topological-space, def-hausdorff-space, def-compact-space]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 3.1.1–3.1.3, p. 10"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Definition

For a Boolean algebra $B$, let $\operatorname{Ult}(B)$ be its set of ultrafilters and put $[b]=\{U\in\operatorname{Ult}(B):b\in U\}$. Give it the [[def-topological-space|topology]] consisting of all unions of such sets. The [[lem-generated-boolean-filter-and-ultrafilter-tests|filter tests]] give

$$[0]=\varnothing,\quad[1]=\operatorname{Ult}(B),\quad[b\wedge c]=[b]\cap[c],\quad[\neg b]=\operatorname{Ult}(B)\setminus[b],\quad[b\vee c]=[b]\cup[c].$$

These equations ensure that the proposed unions form a topology: the empty union and whole space occur, arbitrary unions are unions of basic sets, and finite intersections distribute over such unions. The sets $[b]$ form a clopen basis. This definition does not assert compactness or the existence of ultrafilters.

A **Stone space** is a [[def-compact-space|compact]], [[def-hausdorff-space|Hausdorff]] space with a basis of clopen subsets. The empty space is allowed. For any space $X$, write $\operatorname{Clop}(X)$ for its clopen subsets, with union, intersection, complement relative to $X$, and bounds $\varnothing,X$; finite unions and intersections of clopens and their complements are clopen, so these form a Boolean algebra. The trivial Boolean algebra has no ultrafilters and thus gives the empty space.
