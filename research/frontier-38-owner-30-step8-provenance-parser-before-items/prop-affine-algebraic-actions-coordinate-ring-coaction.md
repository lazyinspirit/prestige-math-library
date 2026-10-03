---
id: "prop-affine-algebraic-actions-coordinate-ring-coaction"
kind: "proposition"
title: "Affine actions correspond to coordinate-ring coactions"
status: "draft"
origin: "pipeline"
deps: ["def-rational-action-on-affine-variety", "lem-classical-affine-algebraic-set-product-coordinate-ring", "thm-classical-affine-morphisms-coordinate-ring-antiequivalence", "def-axiom-of-choice"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Michel Brion, Introduction to actions of algebraic groups (2010)", "url": "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf", "locator": "§1.1, Definitions 1.4, 1.6, 1.8, Lemma 1.5, Example 1.7 and Proposition 1.9; printed pp. 3–4"}, {"title": "Philippe Gille, Introduction to reductive group schemes over rings, full notes retrieved 2026-10-02", "url": "https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf", "locator": "§6, Proposition 6.0.5, pp. 25–27; Proposition 6.2.1, pp. 30–31; Theorem 6.3.1, p. 32"}, {"title": "J. S. Milne, Algebraic Groups (2022)", "url": "https://www.jmilne.org/math/Books/iAG2022.pdf", "locator": "§4(a) Remark 4.1, pp. 83–84; Proposition 4.7 and Corollary 4.8, p. 86; Theorem 12.12 and Remark 12.13, printed pp. 234–235"}]}
proof_strategy: direct
verification: {"precheck": "pass"}
---

## Statement

Assume AC, inherited from the classical affine morphism correspondence. Let $G$ be a complex affine algebraic group, $H=\mathbb C[G]$, and $A=\mathbb C[X]$ for an affine algebraic set $X$. Algebraic left actions on $X$ correspond bijectively to unital algebra maps $\delta:A\to H\otimes A$ satisfying
$$(\Delta\otimes\operatorname{id})\delta=(\operatorname{id}\otimes\delta)\delta,\qquad (\varepsilon\otimes\operatorname{id})\delta=\operatorname{id}.$$
The correspondence is $\delta(f)(g,x)=f(gx)$. Equivalently $c=\tau(S\otimes\operatorname{id})\delta:A\to A\otimes H$ is a right-comodule algebra structure; $c(f)(x,g)=f(g^{-1}x)$ and evaluating at $g$ gives the left coordinate-ring action $r(g)f=f\circ g^{-1}$. Here $\tau$ switches tensor factors. An equivariant morphism $u:X\to Y$ corresponds to an algebra map $u^*:\mathbb C[Y]\to A$ intertwining these coactions.

## Facts & Assumptions

**Given:** $G,X,H,A$ as above and AC.

[F1] Product coordinate rings are tensor products, including for reducible sets ([[lem-classical-affine-algebraic-set-product-coordinate-ring]]).

[F2] Algebra maps are precisely pullbacks of affine morphisms; the published proof assumes AC through its Nullstellensatz supplier ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]], [[def-axiom-of-choice]]).

[F3] Action and comodule conventions are fixed in [[def-rational-action-on-affine-variety]].

## Proof

1.1 Pull back an action along $a$ and apply F1. The two action identities evaluated on $f$ give respectively $f(ghx)=f(g(hx))$ and $f(ex)=f(x)$, precisely the displayed identities for $\delta$. Conversely F2 reconstructs a unique morphism from an algebra map $\delta$; F1 and equality of pullbacks turn the displayed identities back into the action identities. Thus this is a bijection, also for the empty $X$. [F1, F2, F3, given]

2.1 For this action define $b(x,g)=g^{-1}x$. Inversion is a morphism and $b(b(x,g),h)=h^{-1}g^{-1}x=(gh)^{-1}x=b(x,gh)$, while $b(x,e)=x$. Pullback gives exactly $c=\tau(S\otimes\operatorname{id})\delta$, with the right-comodule identities asserted. Conversely a right-comodule algebra map reconstructs $b$ by F2 and its identities by F1; $a(g,x)=b(x,g^{-1})$ reconstructs the original left action. This also proves that conversion of either coaction to the other is inverse, since inversion squared is the identity. [F1, F2, F3, step 1.1]

3.1 Evaluation gives $r(g)f(x)=f(g^{-1}x)$ and $r(g)r(h)f(x)=f(h^{-1}g^{-1}x)=r(gh)f(x)$, with $r(e)=\operatorname{id}$ and inverse $r(g^{-1})$. Finally $u(gx)=g u(x)$ is equivalent, by F2, to $\delta_Xu^*=(\operatorname{id}_H\otimes u^*)\delta_Y$; conversion in step 2.1 gives the corresponding $c$ identity. AC is used only through F2, not through any selection of a vector-space basis. [F1, F2, step 1.1, step 2.1, algebra] ∎
