---
id: def-twisted-arrow-category
kind: definition
title: 'The twisted arrow category and its projection to $\mathcal C^{\mathrm{op}}\times\mathcal C$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-opposite-category, def-product-category, def-functor-and-contravariant-functor]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 1.2.2"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Definitions 4.5.1 and 4.5.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a category ([[def-category]]). Its **twisted arrow
category** $\operatorname{Tw}(\mathcal C)$ has the following data. Its objects
are the morphisms of $\mathcal C$. For objects $f:c\to c'$ and $g:d\to d'$, a
morphism $f\to g$ is a pair $(a,b)$ with $bfa=g$, where $a:d\to c$ and
$b:c'\to d'$ are morphisms of $\mathcal C$; the identity of $f$ is
$(1_c,1_{c'})$, and the composite of $(a,b):f\to g$ with $(a',b'):g\to h$ is

$$(a',b')\circ(a,b):=(a\circ a',\,b'\circ b):f\to h.$$

That composite is a morphism $f\to h$ because
$(b'b)f(aa')=b'(bfa)a'=b'ga'=h$, associativity and the identity laws are
inherited from $\mathcal C$, and the composite of the two identities is the
identity, so these data satisfy [[def-category]].

The **twisted arrow projection** is the assignment

$$\pi:\operatorname{Tw}(\mathcal C)\longrightarrow\mathcal C^{\mathrm{op}}\times\mathcal C,\qquad (f:c\to c')\longmapsto(c,c'),\qquad (a,b)\longmapsto(a,b),$$

where in the target the first coordinate $a$ is read as the morphism $c\to d$
of $\mathcal C^{\mathrm{op}}$ corresponding to $a:d\to c$
([[def-opposite-category]], [[def-product-category]]). It preserves identities
by construction, and it preserves composites because composition in
$\mathcal C^{\mathrm{op}}\times\mathcal C$ is componentwise with the first
coordinate reversed, which is the order written in the display above; so $\pi$
is a functor ([[def-functor-and-contravariant-functor]]).

## Remarks

The name records the twist: a morphism of $\operatorname{Tw}(\mathcal C)$ acts
by precomposition in one coordinate and by postcomposition in the other, so the
first coordinate runs backwards. That is exactly what makes $\pi$ land in
$\mathcal C^{\mathrm{op}}\times\mathcal C$ rather than in
$\mathcal C\times\mathcal C$, and it is why a diagram indexed by
$\operatorname{Tw}(\mathcal C)$ can see a functor of two variables of opposite
variance.

The opposite orientation is also in use in the literature, with
$\operatorname{Tw}(\mathcal C)$ naming what is here
$\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$. The orientation fixed above is in
force everywhere on this page, and
[[rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows]]
states it alongside the integral conventions; every statement below that names
$\operatorname{Tw}(\mathcal C)$ is to be read with the definition given here and
is false under the other one.
