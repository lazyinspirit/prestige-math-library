---
id: thm-the-coeilenberg-moore-adjunction-induces-the-given-comonad
kind: theorem
title: "The cofree–forgetful co-Eilenberg–Moore adjunction induces the given comonad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-coeilenberg-moore-category, def-comonad, thm-the-eilenberg-moore-adjunction-induces-the-given-monad]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Exercise 5.2.iii"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a comonad $(G,\varepsilon,\delta)$ on $\mathcal C$, the forgetful functor $U^G:\mathcal C_G\to\mathcal C$ has a right adjoint $F^G$, where $F^G(A)=(GA,\delta_A)$. The comonad induced by $U^G\dashv F^G$ is $(G,\varepsilon,\delta)$ on the nose.

## Facts & Assumptions

**Given:** A comonad $(G,\varepsilon,\delta)$ on $\mathcal C$.

[L1] A comonad on $\mathcal C$ is a monad on $\mathcal C^{\mathrm{op}}$ ([[def-comonad]]).

[L2] The Eilenberg–Moore free–forgetful adjunction of a monad induces that monad on the nose ([[thm-the-eilenberg-moore-adjunction-induces-the-given-monad]]).

## Proof

**Proof technique:** direct.

1.1 Regard $G$ as a monad on $\mathcal C^{\mathrm{op}}$ and apply [L2] there. [L1, L2]

2.1 Taking opposites translates algebras into coalgebras, the free algebra into the cofree coalgebra $F^G(A)=(GA,\delta_A)$, and the free–forgetful adjunction into $U^G\dashv F^G$. Its unit at $(A,c)$ is $c:(A,c)\to(GA,\delta_A)$ and its counit at $A$ is $\varepsilon_A:GA\to A$. [L1, L2, step 1.1]

3.1 The triangle equations translate to $G\varepsilon\circ\delta=1_G$ and $\varepsilon G\circ\delta=1_G$. Therefore the induced endofunctor is $U^GF^G=G$, its counit is $\varepsilon$, and its comultiplication $U^G\eta F^G$ is $\delta$. [step 2.1] ∎
