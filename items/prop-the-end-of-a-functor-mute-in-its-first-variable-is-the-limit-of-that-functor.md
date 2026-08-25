---
id: prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor
kind: proposition
title: "The end of a functor made mute in its contravariant variable is the ordinary limit of that functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-end-and-coend, def-wedge-and-cowedge, def-limit-and-colimit-of-a-diagram, def-constant-diagram-cone-cocone-and-cone-morphism, def-functor-and-contravariant-functor, def-product-category, def-opposite-category, def-dinatural-transformation]
aliases: []
landmark: false
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
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.2.5"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be a functor and let
$F':\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be given by
$F'(c_1,c_2):=F(c_2)$ on objects and $F'(f_1,f_2):=F(f_2)$ on morphisms
([[def-product-category]], [[def-opposite-category]]), so that $F'$ ignores its
contravariant variable.

Then the end of a functor made mute in its contravariant variable is the
ordinary limit of that functor: the wedges over $F'$ are exactly the cones over
$F$ and the morphisms between them are the same morphisms
([[def-wedge-and-cowedge]],
[[def-constant-diagram-cone-cocone-and-cone-morphism]]), so $F'$ has an end
exactly when $F$ has a limit ([[def-end-and-coend]],
[[def-limit-and-colimit-of-a-diagram]]) and then

$$\int_{c}F'(c,c)=\lim_{c\in\mathcal C}F(c).$$

Dually, the cowedges under $F'$ are exactly the cocones under $F$, so $F'$ has
a coend exactly when $F$ has a colimit, and then
$\int^{c}F'(c,c)=\operatorname*{colim}_{c\in\mathcal C}F(c)$.

## Facts & Assumptions

**Given:** A functor $F:\mathcal C\to\mathcal D$ and the assignment $F'$ displayed in the Statement.

[F1] A functor satisfies $F(1_A)=1_{FA},\qquad F(g\circ f)=Fg\circ Ff$ ([[def-functor-and-contravariant-functor]]).

[F2] The product category has componentwise identities and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[F3] A dinatural transformation $\alpha:P\to Q$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$ for every $f:c\to c'$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

[F4] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$; a cowedge from $T$ to $d$ is a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$; a morphism of wedges is a morphism of the vertices commuting with every component ([[def-wedge-and-cowedge]]).

[F5] A cone over $D:\mathcal J\to\mathcal C$ with apex $c$ is a family $\lambda_j:c\to D(j)$ satisfying $D(u)\lambda_j=\lambda_k$ for $u:j\to k$, a cocone is a family $\rho_j:D(j)\to c$ satisfying $\rho_kD(u)=\rho_j$, and a morphism of cones is $h:c\to c'$ with $\lambda'_jh=\lambda_j$ ([[def-constant-diagram-cone-cocone-and-cone-morphism]]).

[F6] A limit of $D$ is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$; a colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

[F7] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

## Proof

**Proof technique:** direct.

1.1 The assignment $F'$ is a functor: $F'(1_{c_1},1_{c_2})=F(1_{c_2})=1_{F(c_2)}$, and a composite in $\mathcal C^{\mathrm{op}}\times\mathcal C$ has second coordinate the composite of the second coordinates, so $F'$ of it is $F$ of that composite, which is the composite of the values of $F'$. [F1, F2]

2.1 For a family $\alpha_c:X\to F'(c,c)=F(c)$ the wedge equation at $f:c\to c'$ reads $F'(1_c,f)\circ\alpha_c=F'(f,1_{c'})\circ\alpha_{c'}$, that is $F(f)\circ\alpha_c=\alpha_{c'}$, which is the cone equation of [F5] verbatim; likewise the cowedge equation reads $\alpha_c=\alpha_{c'}\circ F(f)$, which is the cocone equation. The wedge and cone conditions on one family are therefore the same equation, not merely equivalent ones. [F3, F4, F5, step 1.1]

3.1 A morphism of wedges over $F'$ is a morphism $h$ of $\mathcal D$ with $\omega'_ch=\omega_c$ for every $c$, and that is exactly the defining condition of a morphism of cones over $F$; so the two categories have the same objects and the same morphisms, and a terminal object of one is a terminal object of the other. By [F7] and [F6], $F'$ has an end exactly when $F$ has a limit, and the two are the same object with the same components. [F5, F6, F7, step 2.1]

4.1 The same argument in the dual direction gives that the cowedges under $F'$ and their morphisms are the cocones under $F$ and their morphisms, so an initial object of one category is an initial object of the other, and $F'$ has a coend exactly when $F$ has a colimit, with the same vertex and components. [F5, F7, step 2.1, step 3.1] ∎

## Remarks

This is the sense in which ends generalise limits rather than sitting beside them: a diagram indexed by $\mathcal C$ becomes a two-variable functor that does not use its first variable, and its end is the limit already defined. The proof cites the published cone and limit definitions and restates neither, so no second notion of limit is introduced here.

Nothing in the argument needs $\mathcal C$ to be small or $\mathcal D$ to have any limits: the two universal properties are identified as conditions, and the existence of an object satisfying them is transported in both directions.
