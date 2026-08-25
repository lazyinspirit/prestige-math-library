---
id: thm-the-ninja-yoneda-lemma-in-coend-form
kind: theorem
title: "The co-Yoneda isomorphisms: a set-valued functor is a coend against a representable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-end-form-of-the-yoneda-lemma, def-end-and-coend, def-wedge-and-cowedge, def-hom-functors-and-hom-bifunctor, def-cartesian-product, prop-sets-and-functions-form-category-set, def-yoneda-embedding, def-opposite-category, def-functor-and-contravariant-functor, def-small-locally-small-and-large-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Proposition 2.2.1"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be locally small
([[def-small-locally-small-and-large-category]]) and let $a$ be an object of
$\mathcal C$. A set-valued functor is a coend against a representable
([[def-end-and-coend]], [[def-yoneda-embedding]]):

**Covariant coend form.** For $F:\mathcal C\to\mathbf{Set}$, let
$T(c_1,c_2):=\mathcal C(c_1,a)\times F(c_2)$
([[def-hom-functors-and-hom-bifunctor]], [[def-cartesian-product]],
[[prop-sets-and-functions-form-category-set]]), a functor
$\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$. Then $T$ has a coend
and

$$\int^{c}\mathcal C(c,a)\times F(c)\;\cong\;F(a),$$

the initial cowedge being $\rho_c(g,y)=F(g)(y)$ for $g:c\to a$ and $y\in F(c)$.

**Contravariant coend form.** For a presheaf
$P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ ([[def-opposite-category]]), let
$T'(c_1,c_2):=\mathcal C(a,c_2)\times P(c_1)$. Then $T'$ has a coend and

$$\int^{c}\mathcal C(a,c)\times P(c)\;\cong\;P(a),$$

the initial cowedge being $\rho'_c(g,y)=P(g)(y)$ for $g:a\to c$ and
$y\in P(c)$.

**End forms.** If in addition $\mathcal C$ is small, the two dual formulas
$\int_{c}\mathbf{Set}(\mathcal C(a,c),Fc)\cong F(a)$ and
$\int_{c}\mathbf{Set}(\mathcal C(c,a),Pc)\cong P(a)$ hold; these are
[[thm-the-end-form-of-the-yoneda-lemma]] and are not reproved here.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$, an object $a$, a functor $F:\mathcal C\to\mathbf{Set}$ and a presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$.

[F6] A category is **locally small** when every $\mathcal C(A,B)$ is a set ([[def-small-locally-small-and-large-category]]).

[F5] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F4] The elements of $A\times B$ are exactly the ordered pairs $(a,b)$ with $a\in A$ and $b\in B$: Thus $z \in A \times B$ holds if and only if $z = (a,b)$ for some $a \in A$ and some $b \in B$. ([[def-cartesian-product]]).

[F1] The covariant hom-assignment $\mathcal C(a,-)$ sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$, and the contravariant hom-assignment $\mathcal C(-,a)$ sends $u:b\to c$ to $u^*:\mathcal C(c,a)\to\mathcal C(b,a)$, $g\mapsto g\circ u$ ([[def-hom-functors-and-hom-bifunctor]]).

[F7] A functor satisfies $F(1_A)=1_{FA},\qquad F(g\circ f)=Fg\circ Ff$; a contravariant functor is a functor on the opposite category, so it reverses composites ([[def-functor-and-contravariant-functor]]).

[F2] A cowedge from $T$ to $d$ is a dinatural transformation from $T$ to a constant functor: a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$ for every $f:c\to c'$ ([[def-wedge-and-cowedge]]).

[F3] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge, so a coend is a cowedge through which every cowedge factors by exactly one morphism ([[def-end-and-coend]]).

[L1] For small $\mathcal C$, the end of the function-set functor on a representable is evaluation: $\int_c\mathbf{Set}(\mathcal C(a,c),Fc)\cong F(a)$ and $\int_c\mathbf{Set}(\mathcal C(c,a),Pc)\cong P(a)$ ([[thm-the-end-form-of-the-yoneda-lemma]]).

## Proof

**Proof technique:** direct.

1.1 Both integrands are functors on $\mathcal C^{\mathrm{op}}\times\mathcal C$ with values in $\mathbf{Set}$, local smallness making each hom-collection a set. In $T$ the slot $c_1$ is contravariant because $\mathcal C(-,a)$ is, and $c_2$ is covariant because $F$ is; explicitly $T(f,1_c)(g,y)=(g\circ f,y)$ and $T(1_{c'},f)(g,y)=(g,F(f)(y))$ for $f:c\to c'$, $g\in\mathcal C(c',a)$ and $y\in F(c)$. In $T'$ the slot $c_1$ is contravariant because $P$ is and $c_2$ is covariant because $\mathcal C(a,-)$ is; explicitly $T'(f,1_c)(g,y)=(g,P(f)(y))$ and $T'(1_{c'},f)(g,y)=(f\circ g,y)$ for $g\in\mathcal C(a,c)$ and $y\in P(c')$. [F1, F4, F5, F6, F7]

2.1 The family $\rho_c(g,y)=F(g)(y)$ is a cowedge from $T$ to $F(a)$: on an element $(g,y)$ of $T(c',c)=\mathcal C(c',a)\times F(c)$ the left side gives $\rho_c(gf,y)=F(gf)(y)$ and the right side gives $\rho_{c'}(g,F(f)y)=F(g)(F(f)(y))$, and these agree by functoriality of $F$. [F2, F4, F7, step 1.1]

2.2 The family $\rho'_c(g,y)=P(g)(y)$ is a cowedge from $T'$ to $P(a)$: on an element $(g,y)$ of $T'(c',c)=\mathcal C(a,c)\times P(c')$ the left side gives $\rho'_c(g,P(f)y)=P(g)(P(f)(y))$ and the right side gives $\rho'_{c'}(fg,y)=P(fg)(y)$, and these agree because $P$ reverses composites. [F2, F4, F7, step 1.1]

3.1 The cowedge of step 2.1 is initial. Let $\lambda_c:\mathcal C(c,a)\times F(c)\to X$ be any cowedge and put $u(z):=\lambda_a(1_a,z)$ for $z\in F(a)$. Applying the cowedge equation of $\lambda$ at the morphism $g:c\to a$ to the element $(1_a,y)$ of $T(a,c)=\mathcal C(a,a)\times F(c)$ gives $\lambda_c(1_a\circ g,y)=\lambda_a(1_a,F(g)(y))$, that is $\lambda_c(g,y)=u(F(g)(y))=u(\rho_c(g,y))$, so $u\rho_c=\lambda_c$ for every $c$. Any $u'$ with $u'\rho_c=\lambda_c$ satisfies $u'(z)=u'(\rho_a(1_a,z))=\lambda_a(1_a,z)=u(z)$, so $u$ is unique. [F2, F3, F4, step 2.1]

3.2 The cowedge of step 2.2 is initial by the same computation in the other variance. Let $\lambda'_c:\mathcal C(a,c)\times P(c)\to X$ be a cowedge and put $u(z):=\lambda'_a(1_a,z)$ for $z\in P(a)$. The cowedge equation of $\lambda'$ at $g:a\to c$ applied to $(1_a,y)$ in $T'(c,a)=\mathcal C(a,a)\times P(c)$ gives $\lambda'_a(1_a,P(g)(y))=\lambda'_c(g\circ 1_a,y)$, that is $\lambda'_c(g,y)=u(\rho'_c(g,y))$; and $u'(z)=u'(\rho'_a(1_a,z))=\lambda'_a(1_a,z)$ forces uniqueness. [F2, F3, F4, step 2.2]

4.1 By [F3] an initial cowedge is a coend, so steps 3.1 and 3.2 give the two displayed coend isomorphisms, with the stated initial cowedges. The two end forms are [L1] and are quoted, not reproved; they carry the extra hypothesis that $\mathcal C$ be small, which the coend forms do not need. [F3, L1, step 3.1, step 3.2] ∎

## Remarks

Every class in the coend has a representative in the summand at $a$ with first coordinate $1_a$: the cowedge equation applied to $(1_a,y)$ moves $(g,y)$ to $(1_a,F(g)y)$, which is why the counit at $a$ suffices to define the inverse morphism in steps 3.1 and 3.2. That is the content of the formula, and it is what makes the coend collapse to a single value.

The coend forms need only local smallness, since they are proved from the universal property of a coend directly and never form a product or a quotient over the objects of $\mathcal C$. The end forms need $\mathcal C$ small, because they pass through the set of natural transformations.
