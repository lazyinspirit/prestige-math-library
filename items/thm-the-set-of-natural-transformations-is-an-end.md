---
id: thm-the-set-of-natural-transformations-is-an-end
kind: theorem
title: "For a small source category, the set of natural transformations is an end of the hom-bifunctor of the values"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-end-and-coend, def-wedge-and-cowedge, def-hom-functors-and-hom-bifunctor, thm-hom-assignment-is-a-bifunctor, def-functor-category, prop-size-of-functor-categories, def-natural-transformation, def-small-locally-small-and-large-category, prop-sets-and-functions-form-category-set]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Theorem 1.4.1"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "B. Richter, From Categories to Homotopy Theory (author's draft), Example 4.4.5"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small and $\mathcal D$ locally small
([[def-small-locally-small-and-large-category]]), and let
$F,G:\mathcal C\to\mathcal D$ be functors. Write
$H:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ for the functor
$H(a,b):=\mathcal D(Fa,Gb)$, whose action on a morphism $(g,h)$ of the product
category sends $u$ to $Gh\circ u\circ Fg$
([[def-hom-functors-and-hom-bifunctor]], [[thm-hom-assignment-is-a-bifunctor]],
[[prop-sets-and-functions-form-category-set]]).

Then $\operatorname{Nat}(F,G)$ is a set, and the set of natural transformations
is an end of the hom-bifunctor of the values ([[def-end-and-coend]]):
the evaluation family $\operatorname{ev}_c(\alpha)=\alpha_c$ is a terminal wedge
over $H$, so

$$\operatorname{Nat}(F,G)=\int_{c}\mathcal D(Fc,Gc).$$

## Facts & Assumptions

**Given:** A small category $\mathcal C$, a locally small category $\mathcal D$, and functors $F,G:\mathcal C\to\mathcal D$.

[F6] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets, and **locally small** when every $\mathcal C(A,B)$ is a set; a small category is locally small ([[def-small-locally-small-and-large-category]]).

[F7] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F5] The functor category $[\mathcal C,\mathcal D]$ has functors $\mathcal C\to\mathcal D$ as objects and natural transformations as morphisms ([[def-functor-category]]).

[L2] If $\mathcal C$ is small and $\mathcal D$ is locally small, then $[\mathcal C,\mathcal D]$ is locally small ([[prop-size-of-functor-categories]]).

[L1] For every locally small category $\mathcal C$, the hom-assignment $\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ is a functor ([[thm-hom-assignment-is-a-bifunctor]]).

[F3] The hom-assignment sends $(a,b)$ to $\mathcal C(a,b)$, and a morphism of the product category consisting of $h:a'\to a$ and $u:b\to b'$ acts by $\mathcal C(h,u):\mathcal C(a,b)\longrightarrow\mathcal C(a',b'),\qquad f\longmapsto u\circ f\circ h$ ([[def-hom-functors-and-hom-bifunctor]]).

[F4] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$ ([[def-wedge-and-cowedge]]).

[F1] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

## Proof

**Proof technique:** direct.

1.1 Local smallness of $\mathcal D$ makes every $\mathcal D(Fa,Gb)$ a set, so by [L1] and [F3] the assignment $H$ is a functor into $\mathbf{Set}$, being the hom-bifunctor of $\mathcal D$ composed with $F$ in the contravariant slot and $G$ in the covariant one. Smallness of $\mathcal C$ together with local smallness of $\mathcal D$ makes $[\mathcal C,\mathcal D]$ locally small by [L2], so $\operatorname{Nat}(F,G)$, which is a hom-collection of that category by [F5], is a set. The two hypotheses buy different things and neither is redundant. [F3, F5, F6, F7, L1, L2, given]

2.1 A family $\phi_c:Y\to\mathcal D(Fc,Gc)$ satisfies the wedge equation at $f:c\to c'$ exactly when, for every $y\in Y$, $Gf\circ\phi_c(y)=\phi_{c'}(y)\circ Ff$: the two sides of the wedge equation are $H(1_c,f)\circ\phi_c$ and $H(f,1_{c'})\circ\phi_{c'}$, and by [F3] the first sends $y$ to $Gf\circ\phi_c(y)$ and the second sends $y$ to $\phi_{c'}(y)\circ Ff$. By [F4] that is exactly the condition that for each $y$ the family $(\phi_c(y))_c$ is a natural transformation $F\Rightarrow G$, and the equivalence holds in both directions. [F2, F3, F4, step 1.1]

3.1 The evaluation family $\operatorname{ev}_c:\operatorname{Nat}(F,G)\to\mathcal D(Fc,Gc)$, $\alpha\mapsto\alpha_c$, is a wedge, since for $\alpha$ natural the condition of step 2.1 is its naturality equation. Given any wedge $\phi$ with vertex $Y$, the function $y\mapsto(\phi_c(y))_c$ lands in $\operatorname{Nat}(F,G)$ by step 2.1 and satisfies $\operatorname{ev}_c\circ u=\phi_c$ for every $c$; and any $u$ with that property has $u(y)_c=\phi_c(y)$ for every $c$, so it is that function. Hence the evaluation wedge is terminal. [F1, F2, step 2.1]

4.1 By [F1] a terminal wedge is an end, so $\operatorname{Nat}(F,G)$ with the evaluation family is an end of $H$, which is the displayed equality. [F1, step 3.1] ∎

## Remarks

The two size hypotheses do different work in this sufficient construction.
Local smallness of $\mathcal D$ makes the integrand $\mathbf{Set}$-valued, and
smallness of $\mathcal C$ guarantees that the collection of natural
transformations is a set. Smallness is not necessary for every particular pair
of functors: over a large source the natural transformations can still happen
to form a set. No such large-source case is asserted by this theorem.

Identity morphisms of $\mathcal C$ impose nothing: at $f=1_c$ the condition of step 2.1 reads $\phi_c(y)=\phi_c(y)$. If $\mathcal C$ is discrete the wedge condition is vacuous and the end is the product of the sets $\mathcal D(Fc,Gc)$, which is also what an unconstrained family is.
