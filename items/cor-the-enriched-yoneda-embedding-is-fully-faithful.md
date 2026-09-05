---
id: cor-the-enriched-yoneda-embedding-is-fully-faithful
kind: corollary
title: "The enriched Yoneda assignment is fully faithful"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-strong-enriched-yoneda-lemma-as-a-particular-end, def-representable-enriched-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equation (2.33)"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 7.3"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Whenever the enriched Yoneda assignment is formed, it is fully faithful: for
objects $A,B$ of a $\mathcal V$-category $\mathcal C$, the hom-object between
the representables $\mathcal C(-,A)$ and $\mathcal C(-,B)$ is naturally
isomorphic to $\mathcal C(A,B)$.

## Facts & Assumptions

**Given:** A $\mathcal V$-category $\mathcal C$ and objects $A,B$.

[L1] The representable enriched functor at an object is $\mathcal C(-,B)$ or dually $\mathcal C(B,-)$ ([[def-representable-enriched-functor]]).

[L2] The strong enriched Yoneda lemma identifies $FB$ with the end $\int_X[\mathcal C(B,X),FX]$ ([[thm-strong-enriched-yoneda-lemma-as-a-particular-end]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the hom-object from the contravariant representable $\mathcal C(-,A)$ to the contravariant representable $\mathcal C(-,B)$ is the end $$\int_X[\mathcal C(X,A),\mathcal C(X,B)].$$ [L1, given]

2.1 Apply [L2] to the $\mathcal V$-category $\mathcal C^{\mathrm{op}}$, the object $A$, and the $\mathcal V$-functor $\mathcal C(-,B):\mathcal C^{\mathrm{op}}\to\mathcal V$. Since $\mathcal C^{\mathrm{op}}(A,X)=\mathcal C(X,A)$, it identifies the end of step 1.1 with $(\mathcal C(-,B))(A)=\mathcal C(A,B)$. [L1, L2, step 1.1]

3.1 Therefore each hom-object map of the enriched Yoneda assignment is an isomorphism, which is exactly enriched full faithfulness. [step 2.1] ∎
