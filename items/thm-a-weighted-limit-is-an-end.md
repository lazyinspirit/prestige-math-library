---
id: thm-a-weighted-limit-is-an-end
kind: theorem
title: "A weighted limit is an end of powers and a weighted colimit a coend of copowers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-set-weighted-limit-and-weighted-colimit, def-power-and-copower-by-a-set, def-end-and-coend, def-wedge-and-cowedge, def-hom-functors-and-hom-bifunctor, def-natural-transformation, def-presheaf-representable-functor-and-representation, def-opposite-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, (7.1.3)"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small, let $\mathcal M$ be locally small, let
$D:\mathcal J\to\mathcal M$ be a diagram and let $W:\mathcal J\to\mathbf{Set}$
be a weight ([[def-set-weighted-limit-and-weighted-colimit]]).

**Limit clause.** Suppose given a **functorial choice of powers**: a functor
$T:\mathcal J^{\mathrm{op}}\times\mathcal J\to\mathcal M$ together with
bijections

$$\eta:\mathcal M\bigl(m,T(c_1,c_2)\bigr)\;\cong\;\mathbf{Set}\bigl(W c_1,\mathcal M(m,Dc_2)\bigr)$$

natural in $m$, in $c_1$ and in $c_2$, so that each $T(c_1,c_2)$ is a power
$(Dc_2)^{Wc_1}$ ([[def-power-and-copower-by-a-set]],
[[def-hom-functors-and-hom-bifunctor]]). Then the wedges over $T$ with vertex
$m$ correspond bijectively and naturally in $m$ to the natural transformations
$W\Rightarrow\mathcal M(m,D-)$ ([[def-wedge-and-cowedge]],
[[def-natural-transformation]]). Consequently $T$ has an end exactly when
$\{W,D\}$ exists ([[def-end-and-coend]]), and then

$$\{W,D\}\;=\;\int_{c}(Dc)^{Wc}.$$

**Colimit clause.** For a weight $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$
([[def-opposite-category]]) and a functorial choice of copowers
$T'(c_1,c_2)=Wc_1\cdot Dc_2$, with bijections
$\mathcal M(T'(c_1,c_2),m)\cong\mathbf{Set}(Wc_1,\mathcal M(Dc_2,m))$ natural in
all three variables, the cowedges under $T'$ with vertex $m$ correspond to the
natural transformations $W\Rightarrow\mathcal M(D-,m)$, so $T'$ has a coend
exactly when $W\star D$ exists, and then
$W\star D=\int^{c}Wc\cdot Dc$.

The hypothesis is the functorial choice of the displayed powers. Existence of
the displayed end and existence of the weighted limit are equivalent
conclusions; neither is assumed. Completeness of $\mathcal M$ is not assumed.

## Facts & Assumptions

**Given:** A small $\mathcal J$, a locally small $\mathcal M$, a diagram $D$, a weight $W$, and a functorial choice of powers, respectively of copowers, as displayed.

[F1] A weighted limit $\{W,D\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, that is $\mathcal M(m,\{W,D\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal M(m,D-))$ naturally in $m$; a weighted colimit is characterised dually by $\mathcal M(W\star D,m)\cong[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(D-,m))$ ([[def-set-weighted-limit-and-weighted-colimit]]).

[F2] The power $(Dc_2)^{Wc_1}$ is the weighted limit of the one-object diagram at the constant weight $S$ with $S=Wc_1$, characterised by a bijection $\mathcal M(m,(Dc_2)^{Wc_1})\cong\mathbf{Set}(Wc_1,\mathcal M(m,Dc_2))$ natural in $m$; the copower is characterised dually ([[def-power-and-copower-by-a-set]]).

[F4] The covariant hom-assignment sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$, and the contravariant one to precomposition ([[def-hom-functors-and-hom-bifunctor]]).

[F5] A natural transformation $\alpha:F\Rightarrow G$ is a family $\alpha_A:FA\to GA$ such that every $f:A\to B$ satisfies the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ ([[def-natural-transformation]]).

[F6] A representation of a functor is an object together with a natural isomorphism from the corresponding hom-functor; The pair $(R,\theta)$ is a **representation** of $F$, and $R$ is a representing object ([[def-presheaf-representable-functor-and-representation]]).

[F7] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$; a cowedge satisfies $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$; a morphism of either is a morphism of the vertices commuting with every component ([[def-wedge-and-cowedge]]).

[F3] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F8] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

## Proof

**Proof technique:** direct.

1.1 A family $\omega_c:m\to T(c,c)$ corresponds, componentwise under $\eta$, to a family of functions $\hat\omega_c:Wc\to\mathcal M(m,Dc)$, and the correspondence is a bijection because each $\eta$ is. [F1, F2, F4]

2.1 The family $\omega$ satisfies the wedge equation at $f:c\to c'$ exactly when $\hat\omega$ satisfies the naturality equation at $f$. Both sides of the wedge equation are morphisms $m\to T(c,c')$, and applying $\eta$ at $(c,c')$ turns them into functions $Wc\to\mathcal M(m,Dc')$: naturality of $\eta$ in the covariant slot at $f$ sends $T(1_c,f)\circ\omega_c$ to $x\mapsto D(f)\circ\hat\omega_c(x)$, and naturality of $\eta$ in the contravariant slot at $f$ sends $T(f,1_{c'})\circ\omega_{c'}$ to $x\mapsto\hat\omega_{c'}(W(f)(x))$. Their equality for every $x\in Wc$ is the equation $\mathcal M(m,Df)\circ\hat\omega_c=\hat\omega_{c'}\circ W(f)$, which by [F5] is naturality of $\hat\omega$ as a transformation $W\Rightarrow\mathcal M(m,D-)$; and since $\eta$ is a bijection the implication runs in both directions. [F4, F5, F7, step 1.1]

3.1 The correspondence of steps 1.1 and 2.1 is natural in $m$, because $\eta$ is, so a morphism $h:m'\to m$ carries the wedge $\omega$ to the wedge $\omega h$ and the transformation $\hat\omega$ to $\hat\omega$ postcomposed with $\mathcal M(h,D-)$. Hence a terminal wedge over $T$ is exactly a representing object for $m\mapsto[\mathcal J,\mathbf{Set}](W,\mathcal M(m,D-))$ in the sense of [F6], so by [F1] and [F3] the end of $T$ exists exactly when $\{W,D\}$ does, and the two are the same object. [F1, F3, F6, step 2.1]

4.1 For the colimit clause, a family $\rho_c:T'(c,c)\to m$ corresponds under the copower bijections to functions $\hat\rho_c:Wc\to\mathcal M(Dc,m)$, and applying the bijection at $(c',c)$ to the two sides of the cowedge equation at $f:c\to c'$ gives $y\mapsto\hat\rho_c(W(f)(y))$ and $y\mapsto\hat\rho_{c'}(y)\circ D(f)$ for $y\in Wc'$; their equality is the naturality equation of $\hat\rho$ as a transformation of presheaves on $\mathcal J$, using [F8] to read $W$ and $\mathcal M(D-,m)$ on $\mathcal J^{\mathrm{op}}$. The correspondence is natural in $m$, so an initial cowedge under $T'$ is exactly a representing object for $m\mapsto[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(D-,m))$, and the coend of $T'$ exists exactly when $W\star D$ does. [F1, F3, F5, F6, F7, F8, step 3.1] ∎

## Remarks

The functorial choice of powers is genuine extra data and is stated as a hypothesis rather than derived. A power is determined only up to isomorphism by its universal property, so a choice of one power for each pair $(c_1,c_2)$ is not by itself a functor on $\mathcal J^{\mathrm{op}}\times\mathcal J$; what makes the displayed end meaningful is that the choice carries a functor structure whose bijections are natural in both index variables.

Nothing in the argument assumes $\mathcal M$ complete, or the weight or the diagram to be of any particular kind. What it assumes is exactly that the objects written down exist, and the conclusion is an equivalence of existence in both directions, not only a formula valid when everything is available.
