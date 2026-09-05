---
id: thm-enriched-adjoint-functor-theorem-for-cotensored-categories
kind: theorem
title: "Enriched adjoint functor theorem for cotensored categories"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-adjunction, def-cotensor-and-tensor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Marzieh Bayeh et al., Left-Induced Model Structures and Diagram Categories, Definition A.3"
      url: "https://arxiv.org/pdf/1401.3651"
---

## Statement

Assume $\mathcal A$ and $\mathcal B$ are tensored and cotensored
$\mathcal V$-categories. For an ordinary adjunction
$F_0\dashv G_0$ between their underlying categories, the following data are
equivalent:

1. an enriched adjunction $F\dashv_{\mathcal V}G$ whose underlying adjunction
   is the given one;
2. a $\mathcal V$-functor structure on $G$ together with coherent natural
   isomorphisms $G(X\pitchfork B)\cong X\pitchfork G(B)$.

Dually, this is equivalent to a $\mathcal V$-functor structure on $F$ together
with coherent natural isomorphisms $F(X\otimes A)\cong X\otimes F(A)$.

## Facts & Assumptions

**Given:** Tensored and cotensored $\mathcal V$-categories and an ordinary
adjunction on their underlying categories.

[L1] An enriched adjunction is an isomorphism of enriched hom-objects natural
in both variables ([[def-enriched-adjunction]]).

[L2] Cotensors are represented by the enriched hom-objects against base objects
([[def-cotensor-and-tensor]]).

## Proof

**Proof technique:** direct.

1.1 Assume first that $F\dashv_{\mathcal V}G$ is an enriched adjunction. Applying the hom-object isomorphism of [L1] to the cotensor object $X\pitchfork B$ and then reading the cotensor universal properties from [L2] shows that $G(X\pitchfork B)$ represents the same functor as $X\pitchfork GB$. Therefore $G$ preserves cotensors. [L1, L2, given]

1.2 Conversely, assume $G$ has the stated $\mathcal V$-functor structure and coherent cotensor-preservation isomorphisms. For each base object $X$, the ordinary adjunction identifies maps $FA\to X\pitchfork B$ with maps $A\to G(X\pitchfork B)$. Cotensor preservation rewrites the target as $A\to X\pitchfork GB$, and applying the cotensor representing property of [L2] again converts this into maps $X\to\mathcal A(A,GB)$ naturally in $X$. By Yoneda in the base, these natural bijections determine a $\mathcal V$-natural isomorphism $\mathcal B(FA,B)\cong\mathcal A(A,GB)$, giving [L1] and the compatible enriched structure on $F$. [L1, L2, algebra]

2.1 Thus a coherent enriched structure on the right adjoint together with cotensor preservation is equivalent to lifting the underlying adjunction to an enriched one. The tensor statement is dual. [step 1.1, step 1.2] ∎
