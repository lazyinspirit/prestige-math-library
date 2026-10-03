---
id: "ex-additive-translation-equivariant-parabola-embedding"
kind: "example"
title: "The additive translation action embeds equivariantly as a parabola"
status: "draft"
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety", "thm-coordinate-ring-of-affine-action-is-locally-finite", "thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module", "def-axiom-of-choice"]
provenance: {"statement": "ai-generated", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
generation: {"role": "example"}
proof_strategy: direct
verification: {"precheck": "pass"}
---

## Example

For $G=(\mathbb C,+)$ acting on $\mathbb A^1$ by $g\cdot x=x+g$, the subspace $W=\operatorname{span}(1,z,z^2)$ is a generating rational coordinate submodule. Evaluation embeds $x$ as $(1,x,x^2)\in W^*\cong\mathbb A^3$, with closed image $a=1$, $c=b^2$. The ambient action is linear. Assume AC for the A-page embedding theorem.

## Facts & Assumptions

**Given:** This translation action and AC ([[def-axiom-of-choice]]).

[F1] The coordinate action is rational and uses inverse pullback ([[def-rational-action-on-affine-variety]], [[thm-coordinate-ring-of-affine-action-is-locally-finite]]).

[F2] Evaluation in the dual of a generating rational submodule is an equivariant closed embedding ([[thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module]]).

## Verification

1.1 Inverse pullback gives $g1=1$, $gz=z-g$, and $gz^2=z^2-2gz+g^2$. Therefore $W$ is stable with polynomial matrix entries in $g$, and it generates $\mathbb C[z]$ because it contains $z$. Dualizing as in F2 gives $g(a,b,c)=(a,b+ga,c+2gb+g^2a)$, a linear transformation for fixed $g$ with regular coefficients and the additive group law. [F1, F2, given, algebra]

2.1 Evaluation is $(1,x,x^2)$, whose image is exactly $\{a=1,c=b^2\}$: each point there is uniquely obtained by $x=b$, a regular inverse. The action in step 1.1 sends it to $(1,x+g,(x+g)^2)$, proving equivariance directly and displaying F2's construction. [F2, step 1.1, algebra] ∎
