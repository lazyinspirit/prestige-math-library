---
id: cor-every-adjunction-induces-a-comonad-on-the-other-side
kind: corollary
title: "Every adjunction induces a comonad on the codomain of its left adjoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-comonad, thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.1.3 and Definition 5.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For an adjunction $F:\mathcal C\rightleftarrows\mathcal D:G$ with unit $\eta$ and counit $\varepsilon$, the data

$$H:=FG,\qquad \varepsilon:H\Rightarrow1_{\mathcal D},\qquad \delta:=F\eta G:H\Rightarrow H^2$$

define a comonad on $\mathcal D$ ([[def-comonad]]).

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$.

[L1] The adjunction induces the monad $(GF,\eta,G\varepsilon F)$ on $\mathcal C$ ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the opposite adjunction $G^{\mathrm{op}}\dashv F^{\mathrm{op}}$. Reversing arrows translates its endofunctor $F^{\mathrm{op}}G^{\mathrm{op}}$, unit, and multiplication into $FG$, $\varepsilon$, and $F\eta G$ on $\mathcal D$. [L1]

2.1 The translated associativity equation is $H\delta\circ\delta=\delta H\circ\delta$, and the translated unit equations are $H\varepsilon\circ\delta=1_H=\varepsilon H\circ\delta$; these are precisely coassociativity and the two counit laws, so the displayed data form a comonad. [step 1.1] ∎
