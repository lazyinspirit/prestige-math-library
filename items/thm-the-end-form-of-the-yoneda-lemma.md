---
id: thm-the-end-form-of-the-yoneda-lemma
kind: theorem
title: "The end of the function-set functor on a representable is evaluation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-set-of-natural-transformations-is-an-end, thm-yoneda-lemma-is-natural-in-both-variables, cor-contravariant-yoneda-lemma, def-hom-functors-and-hom-bifunctor, def-end-and-coend, def-wedge-and-cowedge, prop-sets-and-functions-form-category-set, def-the-set-of-functions-from-one-set-to-another, def-small-locally-small-and-large-category, def-opposite-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), §2.2"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small ([[def-small-locally-small-and-large-category]]) and
let $a$ be an object of $\mathcal C$. Write $\mathbf{Set}(X,Y)$ for the hom-set
of $\mathbf{Set}$, which is the set $Y^X$ of functions $X\to Y$
([[prop-sets-and-functions-form-category-set]],
[[def-the-set-of-functions-from-one-set-to-another]]).

**Covariant case.** For $F:\mathcal C\to\mathbf{Set}$, let
$H(c_1,c_2):=\mathbf{Set}(\mathcal C(a,c_1),F c_2)$, a functor
$\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$
([[def-hom-functors-and-hom-bifunctor]]). Then

$$\int_{c}\mathbf{Set}\bigl(\mathcal C(a,c),Fc\bigr)\;\cong\;F(a).$$

**Contravariant case.** For a presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$
([[def-opposite-category]]), let
$H'(c_1,c_2):=\mathbf{Set}(\mathcal C(c_2,a),P c_1)$, again a functor
$\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$. Then

$$\int_{c}\mathbf{Set}\bigl(\mathcal C(c,a),Pc\bigr)\;\cong\;P(a).$$

So the end of the function-set functor on a representable is evaluation
([[def-end-and-coend]]), the isomorphism sending a family to its value at the
identity of $a$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$, an object $a$ of $\mathcal C$, a functor $F:\mathcal C\to\mathbf{Set}$ and a presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$.

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets; a small category is locally small ([[def-small-locally-small-and-large-category]]).

[F4] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F2] The functions $A\to B$ form the set $B^{A}$, and Thus $f \in B^{A}$ holds if and only if $f : A \to B$. ([[def-the-set-of-functions-from-one-set-to-another]]).

[F1] The covariant hom-assignment $\mathcal C(a,-)$ sends $b$ to $\mathcal C(a,b)$ and $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$, while the contravariant hom-assignment $\mathcal C(-,a)$ sends $u$ to precomposition ([[def-hom-functors-and-hom-bifunctor]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

[F7] A wedge from $d$ to $T$ is a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$, and a morphism of wedges is a morphism of the vertices commuting with every component ([[def-wedge-and-cowedge]]).

[F3] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[L1] For a small source category and a locally small target, the set of natural transformations is an end of the hom-bifunctor of the values: $\operatorname{Nat}(F,G)=\int_c\mathcal D(Fc,Gc)$, with the integrand $(c_1,c_2)\mapsto\mathcal D(Fc_1,Gc_2)$ ([[thm-the-set-of-natural-transformations-is-an-end]]).

[L2] For locally small $\mathcal C$ the evaluation maps $$E_{a,F}:\operatorname{Nat}(\mathcal C(a,-),F)\xrightarrow{\cong}F(a)$$ are bijections natural in both variables, given by $\alpha\mapsto\alpha_a(1_a)$ ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[L3] For locally small $\mathcal C$, an object $a$ and a presheaf $P$, evaluation at the identity gives a bijection $E^a_P:\operatorname{Nat}(\mathcal C(-,a),P)\xrightarrow{\cong}P(a),\qquad E^a_P(\alpha)=\alpha_a(1_a)$ ([[cor-contravariant-yoneda-lemma]]).

## Proof

**Proof technique:** direct.

1.1 The variance of each integrand is fixed before anything is computed. In $H$ the representable sits inside the first argument of a function set, and $\mathbf{Set}(-,Y)$ reverses that argument, so $c_1\mapsto\mathbf{Set}(\mathcal C(a,c_1),Y)$ is contravariant while $c_2\mapsto Fc_2$ is covariant; hence $H$ is a functor on $\mathcal C^{\mathrm{op}}\times\mathcal C$ of the shape $(c_1,c_2)\mapsto\mathbf{Set}(A c_1,B c_2)$ with $A=\mathcal C(a,-)$ and $B=F$ both covariant on $\mathcal C$. In $H'$ the same two reversals apply to $\mathcal C(-,a)$ and to $P$, and both are contravariant on $\mathcal C$, so $H'$ has the shape $(c_1,c_2)\mapsto\mathbf{Set}(A'c_2,B'c_1)$ with $A'=\mathcal C(-,a)$ and $B'=P$ functors on $\mathcal C^{\mathrm{op}}$. [F1, F2, F4, F5]

1.2 An end over $\mathcal C^{\mathrm{op}}$ of a functor $T$ on $(\mathcal C^{\mathrm{op}})^{\mathrm{op}}\times\mathcal C^{\mathrm{op}}$ is an end over $\mathcal C$ of the functor with its two slots exchanged. Indeed, writing $T'(x,y):=T(y,x)$, a morphism $f:c\to c'$ of $\mathcal C^{\mathrm{op}}$ is a morphism $f:c'\to c$ of $\mathcal C$, and the wedge equation $T(1_c,f)\omega_c=T(f,1_{c'})\omega_{c'}$ becomes $T'(f,1_c)\omega_c=T'(1_{c'},f)\omega_{c'}$, which is the wedge equation for $T'$ at that morphism of $\mathcal C$. The two wedge categories therefore have the same objects and the same morphisms. [F6, F7]

2.1 For the covariant case, $H$ has the shape required by [L1] with source $\mathcal C$ and target $\mathbf{Set}$, which is locally small by [F4], so $\int_c\mathbf{Set}(\mathcal C(a,c),Fc)=\operatorname{Nat}(\mathcal C(a,-),F)$. By [L2] evaluation at the identity is a bijection from that set to $F(a)$. [F3, L1, L2, step 1.1]

3.1 For the contravariant case, step 1.2 rewrites $\int_c\mathbf{Set}(\mathcal C(c,a),Pc)$ as the end over $\mathcal C^{\mathrm{op}}$ of $(x,y)\mapsto\mathbf{Set}(A'x,B'y)$, and $\mathcal C^{\mathrm{op}}$ is small with $\mathcal C$, so [L1] applied with source $\mathcal C^{\mathrm{op}}$ gives $\operatorname{Nat}(\mathcal C(-,a),P)$, the natural transformations being taken between presheaves. By [L3], evaluation at the identity is a bijection from that set to $P(a)$. The contravariant published corollary is used here rather than the covariant statement read in an opposite category. [F3, F5, L1, L3, step 1.1, step 1.2, step 2.1] ∎

## Remarks

Both displays are ends of a function-set functor, and in each the representable occupies the argument that the function set reverses. Writing either display with the representable in the other slot changes the variance of the integrand and gives a different functor, so the two cases are stated and proved separately rather than by symmetry.

The isomorphism is evaluation at $1_a$ in both cases, which is where the object $a$ enters: the component of the wedge at $c=a$ is the only one that sees the identity, and it is what the published Yoneda bijection inverts.
