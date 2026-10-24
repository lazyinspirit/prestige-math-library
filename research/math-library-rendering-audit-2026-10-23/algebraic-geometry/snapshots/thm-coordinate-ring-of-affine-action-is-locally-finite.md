---
id: "thm-coordinate-ring-of-affine-action-is-locally-finite"
kind: "theorem"
title: "The coordinate ring of an affine algebraic action is a locally finite rational module"
status: published
origin: "pipeline"
deps: ["prop-affine-algebraic-actions-coordinate-ring-coaction", "lem-complex-affine-group-comodule-local-finiteness", "def-rational-action-on-affine-variety", "def-axiom-of-choice"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
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
    scope: historical complete Step5 reader; item thm-coordinate-ring-of-affine-action-is-locally-finite; evidence research/frontier-38-owner-30-reader-23.md, research/frontier-38-owner-30-reader-findings-23.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed.
    delegated_by: tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane
---

## Statement

Assume AC for the local affine coaction dictionary. If a complex affine algebraic group $G$ acts algebraically on an affine algebraic set $X$, then $\mathbb C[X]$ with $(g f)(x)=f(g^{-1}x)$ is a rational $G$-module: every finite set of functions is contained in a finite-dimensional stable subspace on which $G$ acts algebraically. The action preserves multiplication and the unit. No irreducibility or reductivity is assumed.

## Facts & Assumptions

**Given:** An algebraic left action on $X$ and AC ([[def-axiom-of-choice]]).

[F1] The inverse-action pullback is a right-comodule algebra map ([[prop-affine-algebraic-actions-coordinate-ring-coaction]]).

[F2] Finite subsets of a comodule lie in finite-dimensional rational submodules ([[lem-complex-affine-group-comodule-local-finiteness]]).

## Proof

1.1 F1 makes $A=\mathbb C[X]$ a right comodule whose evaluated representation is exactly $f\mapsto f\circ g^{-1}$. Apply F2 to any finite subset of $A$ to obtain the required finite-dimensional stable subspace with algebraic $G$-action. By the definition in [[def-rational-action-on-affine-variety]], this is rationality and local finiteness. [F1, F2, given]

2.1 Since $c$ is an algebra map, evaluating its second factor at any $g$ gives $(g(fh))(x)=f(g^{-1}x)h(g^{-1}x)$ and $g1=1$. Thus each $g$ acts by an algebra automorphism, with inverse $g^{-1}$. The hypotheses of F1 and F2 cover reducible and empty $X$ and disconnected $G$, so none of the excluded extra hypotheses is needed. AC is inherited solely from F1's affine reconstruction route. [F1, F2, step 1.1, algebra] ∎
