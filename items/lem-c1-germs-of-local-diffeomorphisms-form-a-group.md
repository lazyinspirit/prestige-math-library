---
id: lem-c1-germs-of-local-diffeomorphisms-form-a-group
kind: lemma
title: "C¹ germs of local diffeomorphisms form a group"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c1-germ-of-a-local-diffeomorphism-at-a-point, def-c-one-map-and-local-inverse, thm-euclidean-inverse-function-theorem, def-group, def-subgroup, thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§2.16.2, Theorem 2.119 and its proof, printed pp. 106–107 (the group of C¹ interval germs)"
dependency_level: 1
---

## Statement

Composition of representatives induces a well-defined group operation on
$\operatorname{Diff}^1_x(T)$; the germ of the identity is a two-sided unit,
every germ has a two-sided inverse, and the germs of positive derivative in an
oriented coordinate form the subgroup
$\operatorname{Diff}^{1,+}_x(T)$.

## Facts & Assumptions

**Given:** A one-dimensional $C^1$ manifold $T$, a point $x\in T$, and the set $\operatorname{Diff}^1_x(T)$ of $C^1$ germs of local diffeomorphisms of $T$ at $x$ fixing $x$.

[F1] Two $C^1$ local diffeomorphisms fixing $x$ define the same $C^1$ germ at $x$ when they agree on a neighbourhood of $x$, and composition of representatives induces a binary operation on $\operatorname{Diff}^1_x(T)$ ([[def-c1-germ-of-a-local-diffeomorphism-at-a-point]]).

[F2] A $C^1$ local diffeomorphism $f:U\to f(U)$ has $C^1$ inverse $f^{-1}:f(U)\to U$, and in a chart at $x$ this is the Euclidean notion of a local diffeomorphism with invertible derivative ([[def-c-one-map-and-local-inverse]]).

[F3] A $C^1$ map between Euclidean open sets whose derivative at a point is invertible is a local diffeomorphism near that point ([[thm-euclidean-inverse-function-theorem]]).

[F4] A group is a set with an associative binary operation, a two-sided identity and two-sided inverses; a subset is a subgroup when it contains the identity and is closed under the operation and under inverses ([[def-group]], [[def-subgroup]]).

[F5] For composable differentiable maps the derivative of the composite at a point is the composite of the derivatives ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 (Well-definedness of composition.) Let $[f]=[f']$ and $[g]=[g']$ be germs at $x$, with $f,g$ fixing $x$. Choose neighbourhoods $A,B$ of $x$ on which $f=f'$ and $g=g'$, respectively. Since $g(x)=g'(x)=x$ and both maps are continuous, choose an open neighbourhood $W\subseteq B$ of $x$ with $g(W)\cup g'(W)\subseteq A$; then for $y\in W$, $(f\circ g)(y)=f(g(y))=f'(g'(y))=(f'\circ g')(y)$, so $f\circ g\sim_x f'\circ g'$. Hence the operation on germs is well defined; it is associative because composition of maps is associative. [F1]

1.2 (Identity and inverses.) The germ of $\mathrm{id}_T$ at $x$ is a two-sided identity for the operation. If $f:U\to f(U)$ is a representative, then $f^{-1}:f(U)\to U$ is again a $C^1$ local diffeomorphism fixing $x$ [F2], and its germ depends only on the germ of $f$: if $f'$ agrees with $f$ on a neighbourhood $W\subseteq U\cap U'$ of $x$, then $f^{-1}$ and $f'^{-1}$ agree on the open set $f(W)\cap f'(W)$, which contains $x$. Thus every germ has the two-sided inverse given by the class of any representative's inverse, and $\operatorname{Diff}^1_x(T)$ is a group [F4]. The Euclidean inverse function theorem identifies the same local inverses in a chart at $x$ [F3]. [F2, F3, F4]

1.3 (The positive-derivative germs.) Fix an oriented chart $t$ at $x$ with $t(x)=0$ and write $\widetilde f$ for the coordinate expression of a representative. The sign of $\widetilde f'(0)$ is independent of the positively oriented chart and of the representative, since a positive change of coordinate $\psi$ contributes $\psi'(0)>0$ and its inverse likewise, so it does not change the sign [F1]. By the chain rule, $(f\circ g)\,'(0)=f'(0)g'(0)>0$ and $(f^{-1})'(0)=1/f'(0)>0$ whenever $f'(0)>0$ and $g'(0)>0$ [F5], and the identity has derivative $1$. Hence the germs of positive derivative contain the identity and are closed under composition and inverses, so by the subgroup criterion they form a subgroup $\operatorname{Diff}^{1,+}_x(T)\le\operatorname{Diff}^1_x(T)$ [F4]. [F1, F4, F5]

2.1 Composition is a well-defined associative operation with identity and inverses, so $\operatorname{Diff}^1_x(T)$ is a group, and the positive-derivative germs form the subgroup $\operatorname{Diff}^{1,+}_x(T)$. [step 1.1, step 1.2, step 1.3] ∎
