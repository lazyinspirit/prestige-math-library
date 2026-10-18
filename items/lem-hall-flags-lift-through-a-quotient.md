---
id: lem-hall-flags-lift-through-a-quotient
kind: lemma
title: "Flags lift uniquely through a quotient in an abelian category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-abelian-category
  - def-subobject-and-quotient-object
  - def-the-quotient-of-an-object-by-a-subobject
  - def-the-direct-image-and-inverse-image-of-a-subobject
  - thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection
  - thm-the-pullback-of-an-epimorphism-is-an-epimorphism
  - thm-first-isomorphism-theorem-in-an-abelian-category
  - thm-third-isomorphism-theorem-in-an-abelian-category
  - thm-every-monomorphism-is-the-kernel-of-its-cokernel
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §1.3"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $W\le L$ be a subobject in an abelian category, and let
$q:L\to L/W$ be the quotient map. Inverse image along $q$ is an order
isomorphism from the subobjects of $L/W$ to the interval of subobjects
$U\le L$ with $W\le U$. Its inverse sends $U$ to the image $q_*U$,
canonically isomorphic to $U/W$. Under this correspondence,
$$ (L/W)/(U/W)\cong L/U. $$

## Facts & Assumptions

**Given:** An abelian category, subobjects $W\le L$, and the quotient map $q:L\to L/W$.

[F1] A subobject is a mutual-factorisation class of monomorphisms; its quotient is the cokernel of a representing monomorphism ([[def-subobject-and-quotient-object]], [[def-the-quotient-of-an-object-by-a-subobject]]).

[F2] Direct image is the image of the composite with the given map, and inverse image is its pullback ([[def-the-direct-image-and-inverse-image-of-a-subobject]]).

[F3] Direct and inverse image form the Galois connection $f_*B\le C\iff B\le f^*C$ ([[thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection]]).

[F4] Pulling back an epimorphism in an abelian category gives an epimorphism ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[F5] For every morphism $f$, $\operatorname{coker}(\ker f)$ is canonically isomorphic to $\operatorname{im}(f)$ ([[thm-first-isomorphism-theorem-in-an-abelian-category]]).

[F6] For nested subobjects $W\le U\le L$, $(L/W)/(U/W)\cong L/U$ ([[thm-third-isomorphism-theorem-in-an-abelian-category]]).

[F7] Every monomorphism is the kernel of its cokernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Given a subobject $B\le L/W$, let $U=q^*B$ be its inverse image. Since $q_*W=0\le B$, [F3] gives $W\le U$. The pullback square defining $U$ has a projection $p:U\to B$ that is epic by [F4]; its kernel is the kernel $W$ of $q$. By [F5], its image is canonically $U/W$. Since $p$ is epic, any cokernel $c$ satisfies $cp=0=0p$, so $c=0$ by cancellation. Its universal property makes its codomain initial, because the only morphism out of $B$ annihilating $p$ is zero; hence the cokernel object is zero. By the image definition, $\operatorname{im}(p)=\ker(\operatorname{coker}p)=B$. Thus $U/W\cong B$ and $q_*U=B$. [F1, F2, F3, F4, F5, F7]

1.2 Conversely let $W\le U\le L$. The restriction $q|_U:U\to L/W$ has kernel $W$, so [F5] identifies its image $q_*U$ with $U/W$. By [F6], the quotient map $L/W\to (L/W)/(U/W)$, composed with $q$, is the quotient map $L\to L/U$. Its kernel is $U$ by [F1] and [F7], hence the inverse image of $U/W$ along $q$ is exactly $U$. [F1, F2, F5, F6, F7]

2.1 Steps 1.1 and 1.2 show that the two assignments are inverse on subobject classes. Both assignments preserve inclusion by the Galois connection [F3], and [F6] gives the stated quotient identification. Thus inverse image along $q$ is the claimed order isomorphism. [F3, F6, step 1.1, step 1.2] ∎

## Diagram

The quotient correspondence is represented by the following exact rows and the induced inclusion:

```tikzcd
0 \arrow[r] & W \arrow[r, hook] \arrow[d, equal] & U \arrow[r, two heads] \arrow[d, hook] & U/W \arrow[r] \arrow[d, hook] & 0 \\
0 \arrow[r] & W \arrow[r, hook] & L \arrow[r, two heads] & L/W \arrow[r] & 0
```

The vertical middle map is the subobject inclusion, and the right-hand map is the map induced by $U\hookrightarrow L$. The diagram explains the correspondence; the proof above uses the categorical universal properties and the third isomorphism theorem, not the picture.
