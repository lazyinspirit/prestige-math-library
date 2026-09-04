---
id: thm-a-braided-rigid-category-has-a-drinfeld-morphism
kind: theorem
title: "A braided rigid category has a Drinfeld morphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rigid-object-and-rigid-monoidal-category, def-braiding, thm-the-double-dual-is-a-monoidal-functor]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, formula (8.30), Proposition 8.9.3, and Proposition 8.10.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "A. Bruguières and A. Virelizier, Hopf monads, Lemma 8.1 and Remark 8.2"
      url: "https://imag.umontpellier.fr/~bruguieres/docs/Hopf-monads.pdf"
    - title: "T. Shibata and K. Shimizu, Modified traces and the Nakayama functor, Section 6.4"
      url: "https://arxiv.org/pdf/2103.13702"
---

## Statement

In a braided rigid monoidal category there is a natural isomorphism

$$u_X:X\to X^{\vee\vee},$$

called the **Drinfeld morphism** (or **Drinfeld isomorphism**), defined by

$$X\xrightarrow{1_X\otimes\operatorname{coev}_{X^\vee}}X\otimes X^\vee\otimes X^{\vee\vee}\xrightarrow{c_{X,X^\vee}\otimes1_{X^{\vee\vee}}}X^\vee\otimes X\otimes X^{\vee\vee}\xrightarrow{\operatorname{ev}_X\otimes1_{X^{\vee\vee}}}X^{\vee\vee}.$$

Write

$$d_{X,Y}:X^{\vee\vee}\otimes Y^{\vee\vee}\xrightarrow{\sim}(X\otimes Y)^{\vee\vee}$$

for the monoidal comparison of the double-dual functor. Then

$$d_{X,Y}\circ(u_X\otimes u_Y)=u_{X\otimes Y}\circ c_{Y,X}\circ c_{X,Y}.$$

Thus $u$ need not be monoidal: the double braiding is precisely its
monoidality obstruction.

## Facts & Assumptions

**Given:** A braided rigid monoidal category with braiding $c$ and chosen left duals.

[F1] Bruguières--Virelizier, Lemma 8.1, proves under the bare braided-autonomous hypotheses that the displayed natural transformation is an isomorphism, gives its explicit inverse, and proves its tensor relation; Remark 8.2 identifies symmetry as exactly the case in which it is monoidal. Shibata--Shimizu, Section 6.4, independently uses the same map as the Drinfeld isomorphism of an arbitrary braided rigid monoidal category and uses $u^{-1}$ in the pivotal/twist correspondence. EGNO formula (8.30) and Proposition 8.9.3 give the same map and tensor relation in their strict chosen-dual convention.

[L1] A braiding is natural in both variables and satisfies the hexagon identities ([[def-braiding]]).

[L2] With chosen left duals, the double-dual assignment is a monoidal
endofunctor, with comparison maps $d_{X,Y}$ of the displayed type
([[thm-the-double-dual-is-a-monoidal-functor]]).

## Proof

**Proof technique:** direct.

1.1 The displayed composite is well typed because rigidity provides $\operatorname{coev}_{X^\vee}: \mathbf 1\to X^\vee\otimes X^{\vee\vee}$ and $\operatorname{ev}_X:X^\vee\otimes X\to\mathbf 1$, while the braiding supplies the middle swap. Naturality of the braiding in [L1] makes the assignment $X\mapsto u_X$ natural in $X$. [given, F1, L1]

1.2 After inserting the monoidal comparison $d_{X,Y}$ from [L2], both sides of the displayed tensor relation are morphisms $X\otimes Y\to(X\otimes Y)^{\vee\vee}$. The relation in [F1] is exactly this compatibility in a convention that suppresses the comparison. In particular, it records the precise obstruction to $u$ being monoidal: the double braiding appears between $u_{X\otimes Y}$ and the transported map $u_X\otimes u_Y$. [F1, L2]

2.1 The explicit inverse in [F1] is defined under the same braided-rigid hypotheses as the displayed map, so every $u_X$ is an isomorphism. Together with step 1.1, this makes $u$ a natural isomorphism in every braided rigid monoidal category; step 1.2 records why it need not be monoidal. [step 1.1, step 1.2, F1] ∎
