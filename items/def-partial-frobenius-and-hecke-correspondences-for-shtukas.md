---
id: def-partial-frobenius-and-hecke-correspondences-for-shtukas
kind: definition
title: Partial Frobenius and Hecke correspondences on shtuka stacks
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
- def-drinfeld-shtuka-with-bounded-modification
- def-global-field
- def-adele-ring-of-a-global-field
- thm-global-field-adeles-and-ideles-locally-compact
- cor-existence-of-left-and-right-haar-measures
- def-axiom-of-choice
- def-countable-choice
- lem-frobenius-independent-leg-pairs-form-a-scheme-intersection-of-opens
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: The adelic restricted product and Hecke algebra use the AC and Countable
  Choice assumptions needed for the adelic topology; the geometric partial-Frobenius
  maps themselves require no choice.
sources:
  references:
  - title: Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands
    url: https://www.laurentlafforgue.org/math/fulltext.pdf
    locator: Chapter I §§1(b)–1(c), printed pp. 18–20.
  - title: Gérard Laumon, La correspondance de Langlands sur les corps de fonctions
    url: https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf
    locator: §2, the moduli stack actions and Hecke correspondences.
verification:
  precheck: n/a
---

## Definition

Let $F=\mathbb F_q(X)$ and let $\mathbb A_F$ be its adele ring. For a finite closed subscheme $N\subset X$, put $\mathcal O_N=\Gamma(N,\mathcal O_N)$, $K=\mathrm{GL}_r(\prod_v\mathcal O_v)$, and $K_N=\ker(K\to\mathrm{GL}_r(\mathcal O_N))$. Let $\operatorname{Cht}_{r,N}$ be the moduli groupoid of rank-$r$ shtukas with level $N$ from the preceding definition. Let $\Lambda\to X\times X$ be the intersection subfunctor of the complements of all Frobenius graphs: its geometric pairs $(x,y)$ satisfy $F_X^n(x)\ne y$ and $x\ne F_X^n(y)$ for every integer $n\ge0$, where $F_X$ is the $q$-power Frobenius. Under the declared AC assumption this is the scheme intersection constructed in [[lem-frobenius-independent-leg-pairs-form-a-scheme-intersection-of-opens]], and is generally not an open subscheme. Over $\Lambda$, a **partial Frobenius map** means a morphism of the moduli groupoid lying over one of the maps $F_X\times\operatorname{id}_X$ or $\operatorname{id}_X\times F_X$ on $X\times X$. This definition specifies the required base map and asserts no existence or relation between the two partial maps.

The **level-$N$ Hecke algebra** is the convolution algebra of compactly supported locally constant functions on $K_N\backslash\mathrm{GL}_r(\mathbb A_F)/K_N$, with Haar measure normalized so that $K$ has volume $1$. For $g\in\mathrm{GL}_r(\mathbb A_F)$ that is the identity at the places in the support of $N$, the Hecke correspondence associated with $K_NgK_N$ classifies pairs of shtukas identified away from the finite set of places where $g_v\notin\mathrm{GL}_r(\mathcal O_v)$; at each such place, after trivializing the two completed bundles, the relative lattice position is the double coset $\mathrm{GL}_r(\mathcal O_v)g_v\mathrm{GL}_r(\mathcal O_v)$.

## Definition references

[[def-drinfeld-shtuka-with-bounded-modification]]

[[def-cuspidal-automorphic-representation-over-function-field|Adelic Hecke algebra and unramified convention]]

[Laurent Lafforgue, Chapter I §§1(b)–1(c)](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §2](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)
