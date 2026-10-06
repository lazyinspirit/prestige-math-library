---
id: "ex-torus-weights-and-affine-action"
kind: "example"
title: "Opposite weights on the affine plane and its coordinate ring"
status: published
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety", "lem-torus-rational-modules-and-gradings", "thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module", "def-axiom-of-choice"]
provenance: {"statement": "ai-generated", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
generation: {"role": "example"}
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-03
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-03
    scope: historical complete Step5 reader; item ex-torus-weights-and-affine-action; evidence research/frontier-38-owner-30-reader-23.md, research/frontier-38-owner-30-reader-findings-23.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed.
    delegated_by: tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane
---

## Example

For $T=\mathbb C^*$ acting on $X=\mathbb A^2$ by $t(x,y)=(tx,t^{-1}y)$, the coordinate action gives degrees $\deg x=-1$, $\deg y=1$. Thus $x^ay^b$ has degree $b-a$, and $A_0=\mathbb C[xy]$. The generating submodule $W=\mathbb Cx+\mathbb Cy$ gives the identity embedding into its dual plane, whose weights are $(1,-1)$. Assume AC for the cited A-page affine dictionary.

## Facts & Assumptions

**Given:** The displayed action and AC ([[def-axiom-of-choice]]).

[F1] Function and point weights have opposite signs ([[lem-torus-rational-modules-and-gradings]]).

[F2] A generating rational submodule gives the dual evaluation embedding ([[thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module]]).

## Verification

1.1 Multiplication by $t$ and $t^{-1}$ is regular on $T\times X$ and the group identities hold coordinatewise, so this is an action in [[def-rational-action-on-affine-variety]]. Inverse pullback sends $x$ to $t^{-1}x$ and $y$ to $ty$; multiplication gives $t^{b-a}x^ay^b$. Laurent-monomial independence gives the direct weight decomposition, and degree zero monomials are exactly $(xy)^a$, so $A_0=\mathbb C[xy]$. [F1, given, algebra]

2.1 The two coordinate functions span a stable rational submodule generating $A$. Applying F2, evaluation $\mathrm{ev}(x,y)$ has coordinates $(x,y)$ in the dual basis and dual weights $(1,-1)$. It is the identity isomorphism of affine planes, making the general embedding construction explicit. [F2, step 1.1] ∎
