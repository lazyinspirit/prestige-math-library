---
id: def-drinfeld-shtuka-with-bounded-modification
kind: definition
title: "Drinfeld shtuka with two legs and bounded modifications"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-degree-divisor-proper-curve
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter I §1(a), Definition I.1, printed pp. 17–18."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§2, definition of Drinfeld shtukas and their level structures."
    - title: "Tuan Ngo Dac, Compactification des champs de chtoucas et théorie géométrique des invariants"
      url: "https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf"
      locator: "Chapter I §1.1."
verification:
  precheck: n/a
---

## Definition

Let $q=p^a$ be a prime power, let $X$ be a smooth projective geometrically connected curve over $\mathbb F_q$, let $S$ be an $\mathbb F_q$-scheme, and let $r\ge1$. Write $\sigma_S=\operatorname{id}_X\times\operatorname{Frob}_S$ for the morphism on $X\times S$ that is the identity on $X$ and the absolute $q$-Frobenius on $S$. A **right Drinfeld shtuka of rank $r$ over $S$** consists of a rank-$r$ vector bundle $E$ on $X\times S$, two sections $\infty,0:S\to X$ called its pole and zero, two rank-$r$ vector bundles $E',E''$ on $X\times S$, injective bundle maps $j:E\to E'$ and $t:E''\to E'$, and an isomorphism $\tau:\sigma_S^*E\to E''$. The cokernel of $j$ is supported on the graph of $\infty$ and is an invertible $\mathcal O_S$-module; the cokernel of $t$ is supported on the graph of $0$ and is an invertible $\mathcal O_S$-module. These two line-cokernel conditions are the modification bound in this definition. An isomorphism of shtukas is an isomorphism of all three bundles commuting with $j,t,\tau$ and preserving the legs.

For a finite closed subscheme $N\subset X$ disjoint from both legs, a **level-$N$ structure** is a trivialization of $E|_{N\times S}$ with $\mathcal O_{N\times S}^{\,r}$ for which the induced trivializations commute with the shtuka diagram. The groupoid of these objects, as $S$ varies, is denoted $\operatorname{Cht}_{r,N}$; when $N=\varnothing$ write $\operatorname{Cht}_r$. This notation alone asserts neither algebraicity nor finite type.

For the subobject and degree conventions in this paragraph, take a geometric fibre $S=\operatorname{Spec}\Omega$ with $\Omega$ algebraically closed. For $\alpha\in\mathbb R$, a **sub-shtuka** is a pair of saturated subbundles $F\subset E$ and $F'\subset E'$ of the same rank such that $j(F)\subseteq F'$ and $t(\tau(\sigma_S^*F))\subseteq F'$. Here saturation means that $E/F$ and $E'/F'$ are torsion-free. Its $\alpha$-degree is $\deg_\alpha(F,F')=(1-\alpha)\deg(F)+\alpha\deg(F')$, where the degree of a vector bundle is the degree of its determinant line bundle; for the whole shtuka use the pair $(E,E')$ in the same formula. A filtration by sub-shtukas gives a piecewise-linear polygon on $[0,r]$ through the points $(\operatorname{rk}F,\deg_\alpha(F,F')-\frac{\operatorname{rk}F}{r}\deg_\alpha(E,E'))$ and the endpoints $(0,0),(r,0)$. When the maximum of these filtration polygons exists, it is the canonical Harder–Narasimhan polygon. For a normalized upper-convex polygon $p$, the associated truncation groupoid over an arbitrary base consists of the shtukas whose every geometric fibre has canonical polygon pointwise at most $p$. The polygon convention is specified in the Harder–Narasimhan truncation definition.

The diagram records the direction of both modifications and of the Frobenius isomorphism:

```tikzcd
E \arrow[r,hook,"j"] & E' & E'' \arrow[l,hook',"t"'] & \sigma_S^*E \arrow[l,"\tau", "\sim"']
```

The two cokernel conditions in the text, rather than the diagram, specify the modification bound.

## Definition references

[[def-degree-divisor-proper-curve|Degree of a determinant line bundle]]

[Laurent Lafforgue, Definition I.1](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §2](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

[Tuan Ngo Dac, Chapter I §1.1](https://smf.emath.fr/system/files/filepdf/AST_2007__313__1_0.pdf)
