---
id: thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements
kind: theorem
title: "A weighted limit is an ordinary limit over the category of elements of the weight, and a weighted colimit an ordinary colimit over it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-set-weighted-limit-and-weighted-colimit, def-category-of-elements, def-limit-and-colimit-of-a-diagram, def-constant-diagram-cone-cocone-and-cone-morphism, thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism, def-hom-functors-and-hom-bifunctor, def-small-locally-small-and-large-category, def-opposite-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Categorical Homotopy Theory, (7.1.8) and (7.2.4)"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.33)-(3.34)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small, let $\mathcal M$ be locally small
([[def-small-locally-small-and-large-category]]) and let
$F:\mathcal J\to\mathcal M$ be a diagram.

**Limit clause.** Let $W:\mathcal J\to\mathbf{Set}$ be a weight, let $\int W$ be
its category of elements ([[def-category-of-elements]]) and let
$\pi:\int W\to\mathcal J$ be the projection $(c,x)\mapsto c$. Then a weighted
limit is an ordinary limit over the category of elements of the weight
([[def-set-weighted-limit-and-weighted-colimit]],
[[def-limit-and-colimit-of-a-diagram]]): the cones over $F\pi$ with apex $m$
are exactly the natural transformations $W\Rightarrow\mathcal M(m,F-)$, so
$\{W,F\}$ exists exactly when $\lim_{\int W}F\pi$ does and then
$\{W,F\}=\lim_{\int W}F\pi$.

**Colimit clause.** Let $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ be a weight
([[def-opposite-category]]), let $\int W$ be its category of elements, whose
morphisms $(c,x)\to(d,y)$ are the $f:c\to d$ of $\mathcal J$ with
$x=W(f)(y)$, and let $\pi$ again be the projection. Then a weighted colimit is
an ordinary colimit over it: the cocones under $F\pi$ with apex $m$ are exactly
the natural transformations $W\Rightarrow\mathcal M(F-,m)$, so $W\star F$
exists exactly when $\operatorname*{colim}_{\int W}F\pi$ does and then
$W\star F=\operatorname*{colim}_{\int W}F\pi$.

Both clauses use the published category of elements as it stands, with no
opposite inserted, and if $\mathcal J$ is small then $\int W$ is small.

## Facts & Assumptions

**Given:** A small $\mathcal J$, a locally small $\mathcal M$, a diagram $F:\mathcal J\to\mathcal M$, and a weight $W$ of the variance named in each clause.

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, that is $\mathcal M(m,\{W,F\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$ naturally in $m$; the weighted colimit is characterised by $\mathcal M(W\star F,m)\cong[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(F-,m))$ ([[def-set-weighted-limit-and-weighted-colimit]]).

[F2] The category of elements $\int G$ of a functor $G:\mathcal C\to\mathbf{Set}$ has objects $(c,x)$ with $c\in\mathcal C$ and $x\in G(c)$; its identities and composition are those of $\mathcal C$ ([[def-category-of-elements]]).

[F3] For a covariant $G$, a morphism $(c,x)\to(d,y)$ of $\int G$ is a morphism $f:c\to d$ in $\mathcal C$ satisfying $G(f)(x)=y$ ([[def-category-of-elements]]).

[F11] For a presheaf $P$, a morphism $(c,x)\to(d,y)$ of $\int P$ is a morphism $f:c\to d$ in $\mathcal C$ satisfying $$x=P(f)(y).$$ ([[def-category-of-elements]]).

[F4] A cone over $D:\mathcal J\to\mathcal C$ with apex $c$ is a family $\lambda_j:c\to D(j)$ satisfying $D(u)\lambda_j=\lambda_k$ for $u:j\to k$, and a morphism of cones is $h$ with $\lambda'_jh=\lambda_j$ ([[def-constant-diagram-cone-cocone-and-cone-morphism]]).

[F9] A cocone under $D$ with apex $c$ is a family $\rho_j:D(j)\to c$ satisfying $\rho_kD(u)=\rho_j$ for $u:j\to k$ ([[def-constant-diagram-cone-cocone-and-cone-morphism]]).

[F5] A limit is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$ ([[def-limit-and-colimit-of-a-diagram]]).

[F10] A colimit is an initial cocone: explicitly, for every cocone $(X,\xi)$ there exists a unique morphism $u:Q\to X$ such that $u\rho_j=\xi_j$ for every $j$. ([[def-limit-and-colimit-of-a-diagram]]).

[F6] The covariant hom-assignment sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$ ([[def-hom-functors-and-hom-bifunctor]]).

[F12] The contravariant hom-assignment sends $u:b\to c$ to $u^*:\mathcal C(c,a)\longrightarrow\mathcal C(b,a),\qquad g\longmapsto g\circ u.$ ([[def-hom-functors-and-hom-bifunctor]]).

[F7] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

[F8] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[L1] Two representing objects of one functor are joined by a unique compatible isomorphism: There is a unique isomorphism $i:R\to R'$ satisfying the compatibility equation with the universal elements ([[thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Fix $m$. A natural transformation $\alpha:W\Rightarrow\mathcal M(m,F-)$ assigns to each object $c$ of $\mathcal J$ a function $\alpha_c:W(c)\to\mathcal M(m,Fc)$. A cone over $F\pi$ with apex $m$ assigns to each object $(c,x)$ of $\int W$ a morphism $\lambda_{(c,x)}:m\to F(c)$, since $F\pi(c,x)=F(c)$. So both are families of morphisms $m\to F(c)$ indexed by the pairs $(c,x)$ with $x\in W(c)$. [F1, F2, F6, F7]

1.2 If $\mathcal J$ is small then $\int W$ is small. Its objects are the pairs $(c,x)$ with $c$ in the set $\operatorname{Ob}(\mathcal J)$ and $x$ in the set $W(c)$, so they form a set; and a morphism of $\int W$ carries its domain, its codomain and the underlying morphism of $\mathcal J$, so the morphisms form a subclass of $\operatorname{Ob}(\int W)\times\operatorname{Ob}(\int W)\times\operatorname{Mor}(\mathcal J)$ and hence a set. No choice is used. [F2, F3, F8, given]

2.1 Setting $\lambda_{(c,x)}:=\alpha_c(x)$ matches the two families of step 1.1 bijectively, and it matches the two conditions as well. Naturality of $\alpha$ at $f:c\to d$ says $F(f)\circ\alpha_c(x)=\alpha_d(W(f)(x))$ for every $x\in W(c)$. A morphism $(c,x)\to(d,y)$ of $\int W$ is an $f:c\to d$ with $W(f)(x)=y$, and the cone condition at it says $F(f)\circ\lambda_{(c,x)}=\lambda_{(d,y)}$. Substituting $y=W(f)(x)$ makes these the same equation, so the two conditions are one equation and not merely equivalent ones. [F2, F3, F4, step 1.1]

3.1 The bijection of step 2.1 is natural in $m$: precomposing every $\lambda_{(c,x)}$ with $h:m'\to m$ corresponds to postcomposing every $\alpha_c$ with $\mathcal M(h,Fc)$, and it carries a morphism of cones to a morphism of the transformations and back. So a terminal cone over $F\pi$ is exactly a representing object for $m\mapsto[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$; by [F1] and [F5] the weighted limit exists exactly when the ordinary limit does and the two are the same object, unique by [L1]. [F1, F4, F5, L1, step 2.1]

3.2 For the colimit clause the same matching is made in the other variance. A cocone under $F\pi$ with apex $m$ assigns $\lambda_{(c,x)}:F(c)\to m$ to every object of $\int W$ and satisfies $\lambda_{(d,y)}\circ F(f)=\lambda_{(c,x)}$ for every morphism $(c,x)\to(d,y)$, which by [F11] is an $f:c\to d$ of $\mathcal J$ with $x=W(f)(y)$. A natural transformation $\alpha:W\Rightarrow\mathcal M(F-,m)$ of presheaves on $\mathcal J$ assigns $\alpha_c:W(c)\to\mathcal M(Fc,m)$ and its naturality equation at $f$ reads $\alpha_c(W(f)(y))=\alpha_d(y)\circ F(f)$ for $y\in W(d)$. Setting $\lambda_{(c,x)}:=\alpha_c(x)$ and substituting $x=W(f)(y)$ makes the two families and the two equations the same. [F7, F9, F11, F12, step 2.1]

4.1 The bijection of step 3.2 is natural in $m$ by the same computation with postcomposition in place of precomposition, so an initial cocone under $F\pi$ is exactly a representing object for $m\mapsto[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal M(F-,m))$: the weighted colimit exists exactly when the ordinary colimit over $\int W$ does, and then they agree. [F1, F10, L1, step 3.2] ∎

## Remarks

The published category of elements is used exactly as defined, with no opposite inserted. Its projection to $\mathcal J$ is covariant in both the covariant and the presheaf case, and the colimit is taken over $\int W$ itself. A source that forms the category of elements of the weight viewed as a covariant functor on $\mathcal J^{\mathrm{op}}$ will write "the opposite category of elements" for the same category read backwards; inserting an $\mathrm{op}$ here to match that phrase would reverse the variance and make the statement false.

No choice principle is used. What is matched at every step is a whole family against a whole family, and at no point is an element of any $W(c)$ selected. The smallness count of step 1.2 is recorded because the existence corollary for weighted limits spends exactly it.
