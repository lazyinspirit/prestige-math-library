---
id: thm-unit-components-are-initial-in-their-comma-categories
kind: theorem
title: 'Unit components are initial in comma categories, and counit components are terminal'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-adjunct-and-transposition-under-an-adjunction, lem-adjunct-formulas-are-mutually-inverse, thm-the-adjunction-hom-set-bijection-under-local-smallness, def-universal-arrow-to-and-from-a-functor, thm-universal-arrows-are-initial-or-terminal-in-comma-categories]
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
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.2.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Theorem 2.3.6'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $F\dashv G$ have unit $\eta$ and counit $\varepsilon$.

1. For each $c\in\mathcal C$, $(Fc,\eta_c:c\to GFc)$ is a universal arrow from $c$ to $G$, hence an initial object of $(c\downarrow G)$.
2. For each $d\in\mathcal D$, $(Gd,\varepsilon_d:FGd\to d)$ is a universal arrow from $F$ to $d$, hence a terminal object of $(F\downarrow d)$.

No local-smallness hypothesis is needed.

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$.

[F1] A universal arrow from $c$ to $G$ is a pair $(R,\rho:c\to GR)$ such that every $f:c\to Gd$ factors uniquely as $G(h)\circ\rho$; dually, a universal arrow from $F$ to $d$ has the corresponding unique factorisation property ([[def-universal-arrow-to-and-from-a-functor]]).

[F2] A universal arrow from an object to a functor is initial in the associated comma category, and a universal arrow from a functor to an object is terminal in the dual comma category ([[thm-universal-arrows-are-initial-or-terminal-in-comma-categories]]).

[L1] The formulas $h\mapsto G(h)\eta_c$ and $f\mapsto\varepsilon_dF(f)$ are mutually inverse for an adjunction ([[lem-adjunct-formulas-are-mutually-inverse]], [[def-adjunct-and-transposition-under-an-adjunction]]).

## Proof

**Proof technique:** direct.

1.1 Fix $c$ and a morphism $f:c\to Gd$. Its inverse transpose $f^\sharp:Fc\to d$ satisfies $G(f^\sharp)\circ\eta_c=f$, and it is the unique morphism with this property because transposition is injective. [L1]

1.2 Dually, for $u:Fc\to d$, its transpose $u^\flat:c\to Gd$ is the unique morphism satisfying $\varepsilon_d\circ F(u^\flat)=u$. [L1]

2.1 Thus $(Fc,\eta_c)$ has the universal property in [F1], and [F2] makes it initial in $(c\downarrow G)$. [step 1.1, F1, F2]

3.1 Hence $(Gd,\varepsilon_d)$ is universal from $F$ to $d$ and terminal in $(F\downarrow d)$. The argument used individual morphisms and uniqueness only, so it imposed no set-size condition on any hom-class. [step 1.2, F1, F2] ∎
