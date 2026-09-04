---
id: thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type
kind: theorem
title: "A twist on a braided rigid category is the same thing as a pivotal structure of Drinfeld type"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-braided-rigid-category-has-a-drinfeld-morphism, def-pivotal-structure, def-twist-and-ribbon-structure]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, formula (8.35) and Proposition 8.10.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $\mathcal C$ be a braided tensor category and let $u_X:X\to X^{\vee\vee}$
be its Drinfeld isomorphism. For a natural automorphism $\theta$ of the identity
functor, put

$$\psi_X:=u_X\theta_X.$$

Then $\psi$ is a pivotal structure if and only if $\theta$ is a twist.

## Facts & Assumptions

**Given:** A braided tensor category, its Drinfeld isomorphism $u$, and a
natural automorphism $\theta$ of the identity functor.

[F1] EGNO formula (8.35) and the sentence after it state exactly that
$\psi_X=u_X\theta_X$ is a tensor isomorphism $X\to X^{**}$ if and only if
$\theta$ is a twist.

[L1] The Drinfeld morphism exists, and in a braided tensor category it is an
isomorphism ([[thm-a-braided-rigid-category-has-a-drinfeld-morphism]]).

[L2] A pivotal structure is precisely a monoidal natural isomorphism
$\operatorname{id}\Rightarrow(-)^{\vee\vee}$ ([[def-pivotal-structure]]).

[L3] A twist is precisely a natural automorphism satisfying the double-braiding
tensor law ([[def-twist-and-ribbon-structure]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the family $u_X$ is invertible, so every natural isomorphism $\psi_X:X\to X^{\vee\vee}$ can be written uniquely as $u_X\theta_X$ for a natural automorphism $\theta$ of the identity. [given, F1, L1, construct]

2.1 The tensor relation for $u$ from the Drinfeld-morphism theorem inserts exactly one double braiding between $u_{X\otimes Y}$ and $u_X\otimes u_Y$. Therefore the condition that $\psi$ be monoidal is equivalent to the condition that $\theta$ absorb that double braiding, namely $$\theta_{X\otimes Y}=(\theta_X\otimes\theta_Y)\circ c_{Y,X}\circ c_{X,Y},$$ which is the twist law from [L3]. [step 1.1, L1, L2, L3]

3.1 Hence $\psi$ is a pivotal structure exactly when $\theta$ is a twist. [step 2.1, L2, L3] ∎
