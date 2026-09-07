---
id: "def-fibre-product-schemes-universal-property"
kind: "definition"
title: "Fibre product of schemes"
status: "draft"
origin: "pipeline"
deps: ["def-morphism-of-schemes"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.17.1"
      url: "https://stacks.math.columbia.edu/tag/01JO"
---

## Definition

Let $f:X\to S$ and $g:Y\to S$ be morphisms of schemes. A **fibre product** is a scheme $P$, with projections $p:P\to X$ and $q:P\to Y$, such that $fp=gq$ and, for every scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ satisfying $ph=a$ and $qh=b$. Thus, naturally in every test scheme $T$,
$$\operatorname{Hom}(T,P)\cong\operatorname{Hom}(T,X)\times_{\operatorname{Hom}(T,S)}\operatorname{Hom}(T,Y).$$
Write $P=X\times_S Y$. The commutative square with edges $p,q,f,g$ is **Cartesian** when it has this universal property. Morphisms here are morphisms of locally ringed spaces, as in [[def-morphism-of-schemes]]. No existence assertion is part of the definition.
