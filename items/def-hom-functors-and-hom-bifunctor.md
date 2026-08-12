---
id: def-hom-functors-and-hom-bifunctor
kind: definition
title: "The covariant and contravariant hom-assignments and the hom-bifunctor of a locally small category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-category, def-small-locally-small-and-large-category,
       def-opposite-category, def-product-category,
       prop-sets-and-functions-form-category-set]
justified_by: [thm-hom-assignments-are-functors,
               thm-hom-assignment-is-a-bifunctor]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 2, Section 2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Chapter 4, Section 4.1"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a locally small category, so every hom-collection
$\mathcal C(a,b)$ is a set ([[def-category]],
[[def-small-locally-small-and-large-category]]). Since sets and functions form
$\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]), the following
assignments take values in $\mathbf{Set}$.

For an object $a$, the **covariant hom-assignment** $\mathcal C(a,-)$ sends an
object $b$ to $\mathcal C(a,b)$ and a morphism $u:b\to c$ to the function

$$u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f.$$

The **contravariant hom-assignment** $\mathcal C(-,a)$ sends $b$ to
$\mathcal C(b,a)$ and $u:b\to c$ to

$$u^*:\mathcal C(c,a)\longrightarrow\mathcal C(b,a),\qquad g\longmapsto g\circ u.$$

Equivalently, the latter is an assignment on $\mathcal C^{\mathrm{op}}$
([[def-opposite-category]]). Their functor laws are proved in
[[thm-hom-assignments-are-functors]].

The two variables combine into the **hom-assignment**

$$\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\longrightarrow\mathbf{Set}.$$

It sends $(a,b)$ to $\mathcal C(a,b)$. A morphism $(a,b)\to(a',b')$ in the
product category consists of $h:a'\to a$ and $u:b\to b'$ in $\mathcal C$
([[def-product-category]]), and its action is

$$\mathcal C(h,u):\mathcal C(a,b)\longrightarrow\mathcal C(a',b'),\qquad f\longmapsto u\circ f\circ h.$$

That this assignment is a functor, and hence a bifunctor, is proved in
[[thm-hom-assignment-is-a-bifunctor]].
