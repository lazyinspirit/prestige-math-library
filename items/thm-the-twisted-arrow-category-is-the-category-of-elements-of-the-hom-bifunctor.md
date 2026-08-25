---
id: thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor
kind: theorem
title: "The twisted arrow category is the category of elements of the hom-bifunctor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-twisted-arrow-category, def-category-of-elements, def-hom-functors-and-hom-bifunctor, thm-hom-assignment-is-a-bifunctor, def-small-locally-small-and-large-category, def-product-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, §7.1"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Definition 1.2.2"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a locally small category
([[def-small-locally-small-and-large-category]]) and let
$\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ be its
hom-bifunctor ([[def-hom-functors-and-hom-bifunctor]],
[[thm-hom-assignment-is-a-bifunctor]]). Write $\int\mathcal C(-,-)$ for its
category of elements ([[def-category-of-elements]]) and
$\pi_{\int}:\int\mathcal C(-,-)\to\mathcal C^{\mathrm{op}}\times\mathcal C$ for
the projection sending $((a,b),x)$ to $(a,b)$.

The assignment

$$\Phi:\operatorname{Tw}(\mathcal C)\longrightarrow\textstyle\int\mathcal C(-,-),\qquad (f:c\to c')\longmapsto((c,c'),f),\qquad (a,b)\longmapsto(a,b)$$

is an isomorphism of categories ([[def-twisted-arrow-category]]): it is a
bijection on objects and on morphisms, it preserves identities and composites,
and it satisfies $\pi_{\int}\circ\Phi=\pi$.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$.

[F4] A category $\mathcal C$ is **locally small** when every $\mathcal C(A,B)$ is a set ([[def-small-locally-small-and-large-category]]).

[L1] For every locally small category $\mathcal C$, the hom-assignment $\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ is a functor ([[thm-hom-assignment-is-a-bifunctor]]).

[F2] The hom-assignment sends $(a,b)$ to $\mathcal C(a,b)$, and a morphism $(a,b)\to(a',b')$ of the product category, consisting of $h:a'\to a$ and $u:b\to b'$, acts by $\mathcal C(h,u):\mathcal C(a,b)\longrightarrow\mathcal C(a',b'),\qquad f\longmapsto u\circ f\circ h$ ([[def-hom-functors-and-hom-bifunctor]]).

[F1] The category of elements $\int F$ of a functor $F:\mathcal C\to\mathbf{Set}$ has objects the pairs $(c,x)$ with $x\in F(c)$, and a morphism $(c,x)\to(d,y)$ given by a morphism $f:c\to d$ in $\mathcal C$ satisfying $F(f)(x)=y$; identities and composition are those of $\mathcal C$ ([[def-category-of-elements]]).

[F3] The objects of $\operatorname{Tw}(\mathcal C)$ are the morphisms of $\mathcal C$, and for $f:c\to c'$ and $g:d\to d'$ a morphism $f\to g$ is a pair $(a,b)$ with $bfa=g$, where $a:d\to c$ and $b:c'\to d'$ ([[def-twisted-arrow-category]]).

[F5] The product category has morphisms $(f,g):(C,D)\to(C',D')$, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

## Proof

**Proof technique:** direct.

1.1 Because $\mathcal C$ is locally small, every hom-collection $\mathcal C(a,b)$ is a set and the hom-assignment is a functor into $\mathbf{Set}$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$, so its category of elements is formed by the published construction. [L1, F2, F4]

2.1 An object of $\int\mathcal C(-,-)$ is a pair $((c,c'),x)$ with $x\in\mathcal C(c,c')$; since a morphism of $\mathcal C$ is determined by, and determines, its domain, its codomain and its member of the corresponding hom-collection, the assignment $(f:c\to c')\mapsto((c,c'),f)$ is a bijection from the objects of $\operatorname{Tw}(\mathcal C)$ to the objects of $\int\mathcal C(-,-)$. [F1, F3, F5, step 1.1]

3.1 A morphism $((c,c'),f)\to((d,d'),g)$ of $\int\mathcal C(-,-)$ is a morphism $(a,b):(c,c')\to(d,d')$ of $\mathcal C^{\mathrm{op}}\times\mathcal C$, that is a pair with $a:d\to c$ and $b:c'\to d'$ in $\mathcal C$, satisfying $\mathcal C(a,b)(f)=g$; by the displayed action of [F2] that equation reads $bfa=g$, which is the defining condition of a morphism $f\to g$ of $\operatorname{Tw}(\mathcal C)$. So $\Phi$ is a bijection on each morphism collection, and it changes neither the pair $(a,b)$ nor the variance. [F1, F2, F3, step 2.1]

4.1 Identities and composites agree because both categories take them from $\mathcal C^{\mathrm{op}}\times\mathcal C$: the identity of $f$ is $(1_c,1_{c'})$ on both sides and the composite of $(a,b)$ with $(a',b')$ is $(a\circ a',b'\circ b)$ on both sides. Hence $\Phi$ is a functor, bijective on objects and morphisms, so an isomorphism of categories; and $\pi_{\int}\Phi(f)=(c,c')=\pi(f)$ on objects with $\pi_{\int}\Phi(a,b)=(a,b)=\pi(a,b)$ on morphisms, so $\pi_{\int}\circ\Phi=\pi$. [F3, step 2.1, step 3.1] ∎

## Remarks

The identification is what keeps this page from re-minting a published construction: every statement below that computes an end as a limit over $\operatorname{Tw}(\mathcal C)$ may equally be read as a statement about $\int\mathcal C(-,-)$, and the smallness of $\operatorname{Tw}(\mathcal C)$ for small $\mathcal C$ is the smallness of that category of elements.

Local smallness is used exactly once, in step 1.1, and it is used to know that $\mathcal C(a,b)$ is a set so that the hom-assignment is $\mathbf{Set}$-valued. Without it there is no hom-bifunctor to take elements of, while $\operatorname{Tw}(\mathcal C)$ is still defined; so the twisted arrow category is the more primitive of the two constructions.
