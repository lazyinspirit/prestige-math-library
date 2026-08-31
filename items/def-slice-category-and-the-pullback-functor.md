---
id: def-slice-category-and-the-pullback-functor
kind: definition
title: "Slice categories, composition, and pullback along a morphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-comma-slice-and-coslice-categories, def-pullbacks-and-pushouts, def-functor-and-contravariant-functor]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Definition

For an object $X$ of a category $\mathcal C$, the slice category $\mathcal C/X$ has objects arrows $a:A\to X$ and morphisms commuting triangles, as in [[def-comma-slice-and-coslice-categories]].

For a morphism $f:X\to Y$, **postcomposition with $f$** defines a functor

$$\Sigma_f:\mathcal C/X\to\mathcal C/Y,\qquad (a:A\to X)\longmapsto(f\circ a:A\to Y).$$

If chosen pullbacks along $f$ are supplied, they define the **pullback functor**

$$f^\ast:\mathcal C/Y\to\mathcal C/X,$$

sending $b:B\to Y$ to a chosen pullback square

$$ \begin{array}{c} X\times_Y B \to B \\ \downarrow \qquad \downarrow b \\ X \xrightarrow{f} Y \end{array} $$

and sending a morphism in $\mathcal C/Y$ to the unique induced morphism between the chosen pullbacks ([[def-pullbacks-and-pushouts]]). For composable base maps $X\xrightarrow fY\xrightarrow gZ$, the universal property supplies a canonical natural isomorphism

$$f^\ast g^\ast\cong(gf)^\ast.$$

Likewise $(1_X)^\ast\cong1_{\mathcal C/X}$. Thus arbitrary pullback choices are contravariantly pseudofunctorial in the base. Literal functorial equalities in the sense of [[def-functor-and-contravariant-functor]] require coherent split choices and do not follow merely from choosing each pullback separately.
