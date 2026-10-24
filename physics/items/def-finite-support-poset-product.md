---
id: def-finite-support-poset-product
kind: definition
title: "Finite-support products"
status: published
origin: pipeline
deps: [def-poset-ccc-and-knaster-property]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), finite-support definition preceding Lemma 15.12, printed p265; coordinatewise compatibility verified locally"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Definition

Let $I$ be a set and $(P_i,\le_i,1_i)_{i\in I}$ a family of posets with specified greatest elements. Put

$$\prod_{i\in I}^{\mathrm{fin}}P_i=\{p\in\prod_{i\in I}P_i:\operatorname{supp}(p)=\{i\in I:p(i)\ne1_i\}\text{ is finite}\}.$$

Order these tuples coordinatewise: $p\le q$ iff $p(i)\le_iq(i)$ for every $i\in I$. Reflexivity and transitivity follow at each coordinate; if $p\le q\le p$, coordinate antisymmetry gives $p(i)=q(i)$ for every $i$, hence equality of functions. The tuple $\mathbf1(i)=1_i$ is a greatest condition with empty support. If $I=\varnothing$, the product is the singleton consisting of the empty function. A singleton index set recovers its factor. For finite $I$ this is the ordinary full product.

Compatibility, in the sense of [[def-poset-ccc-and-knaster-property]], is equivalent to coordinatewise compatibility. A common lower bound $r$ gives lower bounds $r(i)$ at all coordinates. Conversely suppose every $p(i),q(i)$ are compatible and put $S=\operatorname{supp}(p)\cup\operatorname{supp}(q)$. For each of the finitely many $i\in S$ select a lower bound $r(i)$; this uses finite existential instantiation, not an infinite choice principle. Set $r(i)=1_i$ off $S$. Then $\operatorname{supp}(r)\subseteq S$, and at coordinates off $S$ both original values are $1_i$. Therefore $r$ belongs to the finite-support product and $r\le p,q$. If $S=\varnothing$ take $r=\mathbf1$. A specified tuple of greatest elements supplies nonemptiness without any choices.
