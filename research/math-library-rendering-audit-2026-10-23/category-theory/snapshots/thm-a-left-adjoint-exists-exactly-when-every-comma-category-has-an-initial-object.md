---
id: thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object
kind: theorem
title: 'A left adjoint exists exactly when chosen initial objects are supplied in every comma category'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-components-are-initial-in-their-comma-categories, def-comma-slice-and-coslice-categories, thm-equivalent-encodings-of-an-adjunction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.7.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Corollary 2.3.7'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $G:\mathcal D\to\mathcal C$ be a functor. A left adjoint to $G$ is supplied exactly by choosing, for every $c\in\mathcal C$, an initial object $(Fc,\eta_c)$ of the comma category $(c\downarrow G)$. These choices determine the action of $F$ on morphisms and the adjunction uniquely.

Dually, a right adjoint to $F:\mathcal C\to\mathcal D$ is supplied exactly by choosing a terminal object in every comma category $(F\downarrow d)$.

## Facts & Assumptions

**Given:** A functor $G:\mathcal D\to\mathcal C$.

[F1] The comma category $(c\downarrow G)$ has objects $(d,f:c\to Gd)$, and a morphism from $(d,f)$ to $(d',f')$ is a morphism $h:d\to d'$ with $G(h)\circ f=f'$ ([[def-comma-slice-and-coslice-categories]]).

[L1] If $F\dashv G$, then $(Fc,\eta_c)$ is initial in $(c\downarrow G)$ for every $c$; dually, counit components are terminal in $(F\downarrow d)$ ([[thm-unit-components-are-initial-in-their-comma-categories]]).

[L2] Unit-counit data with the triangle identities and a natural family of universal arrows $(Fc,\eta_c)$ from each $c$ to $G$ carry the same adjunction data, and neither description requires local smallness ([[thm-equivalent-encodings-of-an-adjunction]]).

## Proof

**Proof technique:** direct.

1.1 If a left adjoint $F$ is supplied, [L1] gives the required chosen initial object $(Fc,\eta_c)$ for every $c$. [L1]

1.2 Conversely, suppose such initial objects are supplied. For $a:c\to c'$, initiality gives a unique $F(a):Fc\to Fc'$ satisfying $G(F(a))\circ\eta_c=\eta_{c'}\circ a$. [F1, choose]

2.1 The identity $1_{Fc}$ satisfies the defining equation for $F(1_c)$, so uniqueness gives $F(1_c)=1_{Fc}$. [step 1.2, F1]

2.2 If $a:c\to c'$ and $b:c'\to c''$, then $F(b)F(a)$ satisfies the defining equation for $F(ba)$; uniqueness gives $F(ba)=F(b)F(a)$. Thus $F$ is a functor and $\eta$ is natural. [step 1.2, F1]

3.1 For every $f:c\to Gd$, initiality supplies a unique $\widehat f:Fc\to d$ with $G(\widehat f)\eta_c=f$. Steps 2.1 and 2.2 make $F$ a functor and $\eta$ natural, so $(Fc,\eta_c)_{c}$ is a natural family of universal arrows from each $c$ to $G$; by [L2] that data is an adjunction, so $F\dashv G$. [step 1.2, step 2.1, step 2.2, F1, L2]

4.1 Any functor action compatible with the chosen initial objects must satisfy the equation in step 1.2 and is therefore equal to this one. Passing to opposite categories proves the terminal-object criterion for right adjoints. [step 1.2, step 3.1] ∎
