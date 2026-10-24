---
id: thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor
kind: theorem
title: "A coend is a colimit weighted by the hom-bifunctor, and an end a limit weighted by it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-set-weighted-limit-and-weighted-colimit, def-end-and-coend, def-wedge-and-cowedge, def-hom-functors-and-hom-bifunctor, thm-hom-assignment-is-a-bifunctor, def-product-category, def-opposite-category, def-presheaf-representable-functor-and-representation, def-small-locally-small-and-large-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, Example 7.2.9"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be small ([[def-small-locally-small-and-large-category]]), let
$\mathcal M$ be locally small and let
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal M$ be a functor. Take
the index category to be $\mathcal J:=\mathcal C^{\mathrm{op}}\times\mathcal C$
([[def-product-category]], [[def-opposite-category]]) and $T$ itself as the
diagram.

**Coend clause.** Let $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ be the weight
$W(a,b):=\mathcal C(b,a)$, that is the hom-bifunctor
([[def-hom-functors-and-hom-bifunctor]],
[[thm-hom-assignment-is-a-bifunctor]]) composed with the interchange of the two
slots, which is what makes it a functor on $\mathcal J^{\mathrm{op}}$ and not on
$\mathcal J$. Then the cowedges under $T$ with vertex $m$ are exactly the
natural transformations $W\Rightarrow\mathcal M(T-,m)$, naturally in $m$, so
$T$ has a coend exactly when $W\star T$ exists
([[def-end-and-coend]], [[def-set-weighted-limit-and-weighted-colimit]]) and
then

$$\int^{c}T(c,c)=W\star T.$$

**End clause.** Let $W':\mathcal J\to\mathbf{Set}$ be the hom-bifunctor itself,
$W'(a,b)=\mathcal C(a,b)$. Then the wedges over $T$ with vertex $m$ are exactly
the natural transformations $W'\Rightarrow\mathcal M(m,T-)$, naturally in $m$,
so $T$ has an end exactly when $\{W',T\}$ exists and then
$\int_{c}T(c,c)=\{W',T\}$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$, a locally small category $\mathcal M$ and a functor $T$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$ with values in $\mathcal M$.

[F7] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[F5] The product category has morphisms $(f,g):(C,D)\to(C',D')$, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$, and $(\mathcal C^{\mathrm{op}})^{\mathrm{op}}=\mathcal C$ strictly ([[def-opposite-category]]).

[F4] The hom-assignment sends $(a,b)$ to $\mathcal C(a,b)$, and a morphism of the product category consisting of $h:a'\to a$ and $u:b\to b'$ acts by $\mathcal C(h,u):\mathcal C(a,b)\longrightarrow\mathcal C(a',b'),\qquad f\longmapsto u\circ f\circ h$ ([[def-hom-functors-and-hom-bifunctor]]).

[L1] For every locally small category $\mathcal C$, the hom-assignment $\mathcal C(-,-):\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ is a functor ([[thm-hom-assignment-is-a-bifunctor]]).

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$; a cowedge is a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$ ([[def-wedge-and-cowedge]]).

[F3] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, and a weighted colimit $W\star F$ is characterised by $\mathcal M(W\star F,m)\cong[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(F-,m))$ naturally in $m$ ([[def-set-weighted-limit-and-weighted-colimit]]).

[F8] A representation of a functor is an object together with a natural isomorphism from the corresponding hom-functor; The pair $(R,\theta)$ is a **representation** of $F$, and $R$ is a representing object ([[def-presheaf-representable-functor-and-representation]]).

## Proof

**Proof technique:** direct.

1.1 The index category $\mathcal J$ is small with $\mathcal C$, and $\mathcal J^{\mathrm{op}}$ is $\mathcal C\times\mathcal C^{\mathrm{op}}$ by [F6]. The assignment $W(a,b)=\mathcal C(b,a)$ is the functor of [L1] composed with the interchange of the two slots, which is an isomorphism $\mathcal C\times\mathcal C^{\mathrm{op}}\to\mathcal C^{\mathrm{op}}\times\mathcal C$, so $W$ is a functor on $\mathcal J^{\mathrm{op}}$; the interchange is what the variance requires, and writing the hom-bifunctor on $\mathcal J$ instead would give the weight of the end clause, not of the coend clause. A morphism $(a,b)\to(a',b')$ of $\mathcal J^{\mathrm{op}}$ is a pair $(u,v)$ with $u:a\to a'$ and $v:b'\to b$ in $\mathcal C$, and $W$ sends $g\in\mathcal C(b,a)$ to $u\circ g\circ v$ by [F4]. [F4, F5, F6, F7, L1]

2.1 For the coend clause, send a cowedge $\rho$ with vertex $m$ to the family $\alpha_{(a,b)}(g):=\rho_b\circ T(g,1_b)$ for $g\in\mathcal C(b,a)$, which equals $\rho_a\circ T(1_a,g)$ by the cowedge equation of [F2] at $g:b\to a$. It is natural: for $(u,v)$ as in step 1.1, both $\alpha_{(a',b')}(ugv)$ and $\alpha_{(a,b)}(g)\circ T(u,v)$ reduce, by the factorisations of $T$ supplied by [F5] and the cowedge equation at $u:a\to a'$, to $\rho_{a'}\circ T(1_{a'},u\circ g\circ v)$. Conversely a natural $\alpha$ gives $\rho_c:=\alpha_{(c,c)}(1_c)$, whose cowedge equation at $f:c\to c'$ is naturality of $\alpha$ at $(f,1_c)$ read against naturality at $(1_{c'},f)$, both of which compute $\alpha_{(c',c)}(f)$. The two assignments are mutually inverse, since $\alpha_{(c,c)}(1_c)=\rho_c$ and naturality recovers $\alpha_{(a,b)}(g)$ from $\alpha_{(b,b)}(1_b)$. [F2, F4, F5, step 1.1]

2.2 For the end clause, send a wedge $\omega$ with vertex $m$ to $\alpha_{(a,b)}(g):=T(1_a,g)\circ\omega_a$ for $g\in\mathcal C(a,b)$, which equals $T(g,1_b)\circ\omega_b$ by the wedge equation of [F2] at $g:a\to b$. A morphism $(a,b)\to(a',b')$ of $\mathcal J$ is a pair $(u,v)$ with $u:a'\to a$ and $v:b\to b'$, and both $\alpha_{(a',b')}(vgu)$ and $T(u,v)\circ\alpha_{(a,b)}(g)$ reduce, by the same factorisations and the wedge equation at $u:a'\to a$, to $T(1_{a'},v\circ g\circ u)\circ\omega_{a'}$. Conversely a natural $\alpha$ gives $\omega_c:=\alpha_{(c,c)}(1_c)$, and naturality at $(1_c,f)$ and at $(f,1_{c'})$ gives the two sides of the wedge equation. [F2, F4, F5, step 1.1]

3.1 Both correspondences are natural in $m$: postcomposing a cowedge with $h:m\to m'$ postcomposes every $\alpha_{(a,b)}(g)$ with $h$, and precomposing a wedge with $h:m'\to m$ precomposes every $\alpha_{(a,b)}(g)$ with $h$. So by [F1] and [F8] an initial cowedge under $T$ is exactly a representing object for $m\mapsto[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(T-,m))$ and a terminal wedge exactly a representing object for $m\mapsto[\mathcal J,\mathbf{Set}](W',\mathcal M(m,T-))$; by [F3] the coend of $T$ exists exactly when $W\star T$ does and the end exactly when $\{W',T\}$ does, with equality in each case. [F1, F3, F8, step 2.1, step 2.2] ∎

## Remarks

The variance of the weight is fixed before any computation and is the point at which the statement can go wrong. A weight for a colimit over $\mathcal J$ is a presheaf on $\mathcal J$, so it is a functor on $\mathcal C\times\mathcal C^{\mathrm{op}}$, and the hom-bifunctor becomes one only after its two slots are interchanged. The weight for the end clause is the hom-bifunctor with no interchange at all.

Together with [[thm-an-end-is-a-limit-over-the-twisted-arrow-category]] this closes the loop between the two descriptions of a coend. One presents it as an ordinary colimit over a larger index category; the other presents it as a weighted colimit over the original index category, with the hom-bifunctor carrying the information that the larger index category encoded. The category of elements of the weight is what turns one into the other, by [[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]].
