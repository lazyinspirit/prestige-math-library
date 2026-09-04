---
id: thm-the-double-dual-is-a-monoidal-functor
kind: theorem
title: "The double dual is a monoidal functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-left-duality-is-a-contravariant-antimonoidal-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 4.7.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

With chosen left duals, the double-dual assignment
$X\mapsto X^{\vee\vee}$ is a monoidal endofunctor.

## Facts & Assumptions

**Given:** Chosen left duals on a left rigid monoidal category.

[L1] Left duality is a contravariant antimonoidal functor
([[thm-left-duality-is-a-contravariant-antimonoidal-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $(-)^\vee:\mathcal C^{\mathrm{op}}\to\mathcal C$ is contravariant, so applying it twice yields a covariant endofunctor $(-)^{\vee\vee}:\mathcal C\to\mathcal C$. [given, L1]

1.2 Again by [L1], there are compatible isomorphisms $(X\otimes Y)^\vee\cong Y^\vee\otimes X^\vee$ and $\mathbf 1^\vee\cong\mathbf 1$. Dualizing once more reverses the order a second time, so the composite comparison gives $$X^{\vee\vee}\otimes Y^{\vee\vee}\cong(Y^\vee\otimes X^\vee)^\vee\cong(X\otimes Y)^{\vee\vee}$$ together with a unit isomorphism $\mathbf 1\cong\mathbf 1^{\vee\vee}$. [L1, algebra]

2.1 Since the monoidal comparison maps are obtained by composing those of the antimonoidal functor with itself, their coherence is inherited from the coherence in [L1]. Therefore $(-)^{\vee\vee}$ is a monoidal endofunctor. [step 1.1, step 1.2] ∎
