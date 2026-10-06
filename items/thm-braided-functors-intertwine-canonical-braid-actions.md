---
id: thm-braided-functors-intertwine-canonical-braid-actions
kind: theorem
title: "Braided functors intertwine canonical braid actions"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
deps: [def-braided-monoidal-functor-induced-intertwiner, def-braided-monoidal-functor, cor-an-object-of-a-braided-category-carries-canonical-braid-actions, thm-braided-coherence-via-underlying-braids, thm-von-dyck, def-braid-group-by-the-artin-presentation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.1 diagram (8.5) and Definition 8.1.7, printed pp. 195--196; §8.2 Exercise 8.2.7, printed p. 198"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $F\colon\mathcal C\to\mathcal D$ be a braided monoidal functor
([[def-braided-monoidal-functor]]) between braided monoidal categories and let
$X\in\mathcal C$. Let
$J_n\colon F(X)^{\otimes n}\to F(X^{\otimes n})$ be the induced intertwiner
([[def-braided-monoidal-functor-induced-intertwiner]]), and let
$\rho^{\mathcal C}_n$ and $\rho^{\mathcal D}_n$ be the canonical braid actions
of [[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]] on
$X^{\otimes n}$ and on $F(X)^{\otimes n}$. Then for all $n\ge2$ and
$\beta\in B_n$ ([[def-braid-group-by-the-artin-presentation]]),

$$J_n\circ\rho^{\mathcal D}_n(\beta)=F\bigl(\rho^{\mathcal C}_n(\beta)\bigr)\circ J_n .$$

Thus the braid action on $F(X)^{\otimes n}$ is obtained from the braid action on
$X^{\otimes n}$ by transporting along the monoidal structure of $F$.

## Facts & Assumptions

**Given:** a braided monoidal functor $F\colon\mathcal C\to\mathcal D$ with binary constraint $J_{X,Y}$ and unit constraint $J_0$, an object $X\in\mathcal C$, an integer $n\ge2$, and the induced isomorphism $J_n\colon F(X)^{\otimes n}\to F(X^{\otimes n})$.

[L1] The binary constraint of a braided monoidal functor satisfies the braided-functor square $J_{Y,X}\circ c'_{F(X),F(Y)}=F(c_{X,Y})\circ J_{X,Y}$ for all objects $X,Y$ ([[def-braided-monoidal-functor]]).

[L2] The $n$-fold constraint $J_n$ is a canonical isomorphism built from the constraints and coherence isomorphisms, so it is compatible with the tensor structure; the canonical braid actions are built from the braidings and the coherence isomorphisms ([[def-braided-monoidal-functor-induced-intertwiner]], [[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]]).

[L4] A generator assignment respecting the Artin relators extends uniquely to a homomorphism ([[thm-von-dyck]]); the braid group has the Artin presentation ([[def-braid-group-by-the-artin-presentation]]).

## Proof

**Proof technique:** direct.

1.1 **The identity on generators.** Fix $1\le i<n$ and regroup the factors into the block before positions $i,i+1$, that pair, and the block after it, omitting empty blocks. Iterating the associativity diagram for a strong monoidal functor identifies $J_n$ with the constraints for these blocks followed by their tensor product of iterated constraints; this follows by induction on block length from the recursion in [L2]. On the middle pair [L1] gives $J_{X,X}c'_{F(X),F(X)}=F(c_{X,X})J_{X,X}$. Tensor this equality with the outer constraints. Naturality of the constraints for the two outer block combinations moves the middle morphism through them, giving $J_n\rho_n^{\mathcal D}(\sigma_i)=F(\rho_n^{\mathcal C}(\sigma_i))J_n$. The strong monoidal associativity diagram makes the same calculation valid with the canonical rebracketings in non-strict categories. [L1, L2, given, algebra]

2.1 **Both assignments are homomorphisms.** By [L2] and [L4] the maps $$\beta\mapsto J_n\circ\rho^{\mathcal D}_n(\beta)\circ J_n^{-1}\qquad\text{and}\qquad\beta\mapsto F(\rho^{\mathcal C}_n(\beta))$$ are homomorphisms $B_n\to\operatorname{Aut}_{\mathcal D}(F(X^{\otimes n}))$: the first is the conjugate of the homomorphism $\rho^{\mathcal D}_n$ by the fixed isomorphism $J_n$, and the second is the composite of the homomorphism $\rho^{\mathcal C}_n$ with the functor $F$. On every Artin generator $\sigma_i$ they agree by step 1.1, so by the uniqueness clause of [L4] applied to the Artin presentation they agree on all of $B_n$. [L2, L4, step 1.1, algebra]

3.1 **Conclusion.** Composing the identity of step 2.1 with $J_n$ on the right gives $J_n\circ\rho^{\mathcal D}_n(\beta)=F(\rho^{\mathcal C}_n(\beta))\circ J_n$ for every $\beta\in B_n$, which is the stated intertwining identity. The argument is a finite computation with the structure isomorphisms and one application of von Dyck's theorem, so no choice principle is used. [step 1.1, step 2.1] ∎ 