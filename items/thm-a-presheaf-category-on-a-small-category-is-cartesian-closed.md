---
id: thm-a-presheaf-category-on-a-small-category-is-cartesian-closed
kind: theorem
title: "A presheaf category on a small category is cartesian closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cartesian-closed-category, def-yoneda-embedding, cor-contravariant-yoneda-lemma, thm-currying-is-an-adjunction-in-set, thm-limits-and-colimits-in-functor-categories-are-computed-pointwise, prop-size-of-functor-categories]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.4.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Exercise 6.3.25"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
---

## Statement

Let $\mathcal C$ be a small category and let $\widehat{\mathcal C}=\mathbf{Set}^{\mathcal C^{\mathrm{op}}}$. Then $\widehat{\mathcal C}$ is cartesian closed. For presheaves $P,Q$, one exponential object is the presheaf defined by

$$(Q^P)(c):=\operatorname{Nat}(y(c)\times P,Q),$$

with restriction along $f:d\to c$ given by precomposition with $y(f)\times 1_P$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and presheaves $H,P,Q$ on $\mathcal C$.

[L1] The Yoneda embedding sends $c$ to the representable presheaf $y(c)$ ([[def-yoneda-embedding]]).

[L2] For any presheaf $R$, natural transformations $y(c)\to R$ are naturally in bijection with elements of $R(c)$ ([[cor-contravariant-yoneda-lemma]]).

[L3] In $\mathbf{Set}$, currying gives $\mathbf{Set}(A\times B,C)\cong\mathbf{Set}(A,C^B)$ ([[thm-currying-is-an-adjunction-in-set]]).

[L4] Products of presheaves are computed pointwise, and the presheaf category is locally small because $\mathcal C$ is small ([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]], [[prop-size-of-functor-categories]]).

[L5] A cartesian closed category has finite products and exponentials ([[def-cartesian-closed-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], binary products in $\widehat{\mathcal C}$ are computed pointwise, so $H\times P$ is the presheaf with $(H\times P)(c)=H(c)\times P(c)$. The assignment $c\mapsto\operatorname{Nat}(y(c)\times P,Q)$ with restriction by precomposition along $y(f)\times 1_P$ is therefore a presheaf $Q^P$. [given, L1, L4, algebra]

2.1 Given $\alpha:H\to Q^P$, define $\widetilde\alpha:H\times P\to Q$ by sending $(h,p)\in H(c)\times P(c)$ to the element of $Q(c)$ corresponding under [L2] to the natural transformation $y(c)\xrightarrow{h}H\xrightarrow{\alpha}Q^P$, evaluated at $p$. Conversely, given $\beta:H\times P\to Q$, use [L2] and the set-level currying of [L3] objectwise to define $\widehat\beta_c(h)\in\operatorname{Nat}(y(c)\times P,Q)$; naturality in $c$ is exactly the restriction rule from step 1.1. [given, L2, L3, L4, construct]

3.1 The two constructions of step 2.1 are inverse because Yoneda identifies a natural transformation out of $y(c)$ with its value at $1_c$, and the set-level currying and uncurrying in [L3] are inverse. Hence $\widehat{\mathcal C}(H\times P,Q)\cong\widehat{\mathcal C}(H,Q^P)$ naturally in $H$. [step 2.1, L2, L3, algebra]

4.1 Step 3.1 shows that $-\times P$ has right adjoint $(-)^P$, while [L4] gives the finite products. Therefore [L5] implies that $\widehat{\mathcal C}$ is cartesian closed. [step 1.1, step 3.1, L4, L5] ∎
