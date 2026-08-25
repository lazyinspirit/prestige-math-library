---
id: thm-the-constant-singleton-weight-recovers-an-ordinary-limit
kind: theorem
title: "Weighting by the constant singleton gives exactly the ordinary limit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-set-weighted-limit-and-weighted-colimit, def-limit-and-colimit-of-a-diagram, def-constant-diagram-cone-cocone-and-cone-morphism, def-hom-functors-and-hom-bifunctor, thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements, def-unordered-pair-and-singleton, def-category-of-elements]
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
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (3.26)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small, let $\mathcal M$ be locally small and let
$F:\mathcal J\to\mathcal M$ be a diagram. Write $\Delta\{*\}$ for the weight
that is constantly a one-element set
([[def-unordered-pair-and-singleton]]).

Then a weighted limit with the constant singleton weight is exactly the
ordinary limit ([[def-set-weighted-limit-and-weighted-colimit]],
[[def-limit-and-colimit-of-a-diagram]]): the natural transformations
$\Delta\{*\}\Rightarrow\mathcal M(m,F-)$ are exactly the cones over $F$ with
apex $m$ ([[def-constant-diagram-cone-cocone-and-cone-morphism]]), so
$\{\Delta\{*\},F\}$ exists exactly when $\lim F$ does and then

$$\{\Delta\{*\},F\}=\lim_{j\in\mathcal J}F(j).$$

Dually, for the constant singleton weight on $\mathcal J^{\mathrm{op}}$, the
weighted colimit $\Delta\{*\}\star F$ exists exactly when
$\operatorname*{colim}F$ does and then the two agree.

## Facts & Assumptions

**Given:** A small $\mathcal J$, a locally small $\mathcal M$, a diagram $F:\mathcal J\to\mathcal M$, and the constant singleton weight.

[F6] The singleton $\{x\}$ is the set whose only element is $x$: $t \in \{x\} \leftrightarrow t = x$ ([[def-unordered-pair-and-singleton]]).

[F4] The covariant hom-assignment sends $u:b\to c$ to $u_*:\mathcal C(a,b)\longrightarrow\mathcal C(a,c),\qquad f\longmapsto u\circ f$, and the contravariant one to precomposition ([[def-hom-functors-and-hom-bifunctor]]).

[F1] A weighted limit $\{W,F\}$ is an object that represents the functor sending an object to the set of natural transformations from the weight, and a weighted colimit is characterised dually ([[def-set-weighted-limit-and-weighted-colimit]]).

[F3] A cone over $D:\mathcal J\to\mathcal C$ with apex $c$ is a family $\lambda_j:c\to D(j)$ satisfying $D(u)\lambda_j=\lambda_k$ for $u:j\to k$; a cocone satisfies $\rho_kD(u)=\rho_j$, and a morphism of cones is $h$ with $\lambda'_jh=\lambda_j$ ([[def-constant-diagram-cone-cocone-and-cone-morphism]]).

[F2] A limit of $D$ is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$; a colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

[F5] The category of elements $\int G$ has objects $(c,x)$ with $c\in\mathcal C$ and $x\in G(c)$; a morphism $(c,x)\to(d,y)$ is a morphism $f:c\to d$ in $\mathcal C$ satisfying $G(f)(x)=y$; and its identities and composition are those of $\mathcal C$ ([[def-category-of-elements]]).

[L1] A weighted limit is an ordinary limit over the category of elements of the weight, and a weighted colimit an ordinary colimit over it ([[thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements]]).

## Proof

**Proof technique:** direct.

1.1 A natural transformation $\alpha:\Delta\{*\}\Rightarrow\mathcal M(m,F-)$ has components $\alpha_j:\{*\}\to\mathcal M(m,Fj)$, and by [F6] each is determined by the single morphism $\lambda_j:=\alpha_j(*)$, every function out of a one-element set being determined by its value. Naturality at $u:j\to k$ reads $F(u)\circ\alpha_j(*)=\alpha_k(\Delta\{*\}(u)(*))=\alpha_k(*)$, that is $F(u)\lambda_j=\lambda_k$, which is the cone condition of [F3]. The correspondence $\alpha\leftrightarrow\lambda$ is a bijection in both directions. [F1, F3, F4, F6]

2.1 The bijection of step 1.1 is natural in $m$, since precomposing every $\lambda_j$ with $h:m'\to m$ corresponds to postcomposing every $\alpha_j$ with $\mathcal M(h,Fj)$. So an object represents $m\mapsto[\mathcal J,\mathbf{Set}](\Delta\{*\},\mathcal M(m,F-))$ exactly when it is a terminal cone over $F$; by [F1] and [F2] the weighted limit exists exactly when the ordinary limit does, and they are the same object with the same components. [F1, F2, F3, step 1.1]

2.2 For the colimit clause, a natural transformation $\Delta\{*\}\Rightarrow\mathcal M(F-,m)$ of presheaves on $\mathcal J$ has components determined by morphisms $\rho_j:F(j)\to m$, and its naturality equation at $u:j\to k$ reads $\rho_k\circ F(u)=\rho_j$, the cocone condition of [F3]; the correspondence is natural in $m$, so $\Delta\{*\}\star F$ exists exactly when $\operatorname*{colim}F$ does and the two agree. [F1, F2, F3, step 1.1]

3.1 The same conclusion follows from [L1] by a second route: the category of elements of the constant singleton weight has, by [F5], one object $(j,*)$ for each object $j$ of $\mathcal J$ and one morphism for each morphism of $\mathcal J$, the defining equation being vacuous because the weight's values are one-element sets; so the projection $\pi$ is an isomorphism onto $\mathcal J$ and $\lim_{\int W}F\pi$ is $\lim F$. This is a comparison, not a redefinition: the ordinary limit is the published one and is restated nowhere. [F5, L1, step 2.1, step 2.2] ∎

## Remarks

The theorem is what makes "weighted" a genuine generalisation rather than a replacement: ordinary limits are the weighted limits at one particular weight, and every statement about weighted limits specialises to a statement already in the library. The specialisation is by a theorem and not by fiat, and the two routes in the proof agree.

The second route also explains the shape of the general comparison. Weighting by $W$ replaces the index category $\mathcal J$ by $\int W$, which has one copy of $j$ for each element of $W(j)$; the constant singleton weight leaves exactly one copy of each, and larger weights make more.
