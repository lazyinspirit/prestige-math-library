---
id: prop-the-artin-presentation-surjects-onto-geometric-braids
kind: proposition
title: "The Artin presentation surjects onto the geometric braid group"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-braid-group-by-the-artin-presentation, def-group-presentation,
       def-relators-relations-and-finite-presentations, thm-von-dyck,
       def-elementary-geometric-half-twist, lem-geometric-far-commutativity,
       lem-geometric-three-strand-braid-relation,
       lem-every-geometric-braid-is-a-word-in-half-twists,
       thm-geometric-braids-form-a-group, def-generated-subgroup, def-group,
       def-free-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.5 and 3.2, printed pp. 7-8 and 23-26"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, sections 1.2-1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $n\in\mathbb N$. Write $G_n$ for the geometric braid group of
[[thm-geometric-braids-form-a-group]], let $\sigma_1,\dots,\sigma_{n-1}$ be the
geometric half twists of [[def-elementary-geometric-half-twist]], with classes
$[\sigma_i]\in G_n$, and let
$B_n=\langle x_1,\dots,x_{n-1}\mid R\rangle$ be the Artin braid group of
[[def-braid-group-by-the-artin-presentation]], whose generator written there as
$\sigma_i$ is here written $x_i$ to keep it distinct from the geometric half
twist. Then the assignment

$$\varphi(x_i):=[\sigma_i]\qquad(1\le i\le n-1)$$

extends to a homomorphism $\varphi\colon B_n\to G_n$, it does so uniquely, and
$\varphi$ is surjective. Consequently every element of $G_n$ is a finite product
of the classes $[\sigma_i]^{\pm1}$ of the half twists, and the composition of
$\varphi$ with the endpoint permutation homomorphism
$\pi\colon G_n\to S_n$ is the permutation map
$x_i\mapsto(i\ i+1)$ of the presented group.

Only surjectivity is asserted. Nothing here shows that $\varphi$ is injective,
that is, that the Artin relations are a complete set of relations for the
geometric braid group; the presentation is shown to *surject onto* $G_n$ only.
For $n\le1$ the presentation has no generator and $B_n$ and $G_n$ are both
trivial, so the assertions are vacuous.

## Facts & Assumptions

**Given:** A natural number $n$, the geometric braid group $G_n$ of [[thm-geometric-braids-form-a-group]], the Artin presentation $B_n=\langle X\mid R\rangle$ of [[def-braid-group-by-the-artin-presentation]] with $X=\{\sigma_1,\dots,\sigma_{n-1}\}$ for $n\ge2$ and $X=\varnothing$ for $n\le1$, and the elementary half twists of [[def-elementary-geometric-half-twist]].

[F1] For $n\ge2$ the group $B_n$ is the quotient of the free group on $X=\{\sigma_1,\dots,\sigma_{n-1}\}$ by the normal closure of the relations $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ ($1\le i\le n-2$) and $\sigma_i\sigma_j=\sigma_j\sigma_i$ ($|i-j|>1$), interpreted in the sense of [[def-group-presentation]] and [[def-relators-relations-and-finite-presentations]]; for $n=0$ and $n=1$ there are no generators and $B_n$ is the trivial group of the empty presentation ([[def-braid-group-by-the-artin-presentation]], [[def-group-presentation]], [[def-free-group]], [[def-group]]).

[F2] In the presentation $\langle X\mid R\rangle$ of [F1] an equation $u=v$ is recorded by the relator $u^{-1}v$ in the sense of the free group on $X$ ([[def-relators-relations-and-finite-presentations]], [[def-free-group]], [[def-group-presentation]]).

[F3] Let $\langle X\mid R\rangle$ be a presentation, $H$ a group, and $u\colon X\to H$ a function. If the evaluation of every $r\in R$ under $u$ is $e_H$, then there is a unique homomorphism $\overline u\colon\langle X\mid R\rangle\to H$ with $\overline u([x])=u(x)$ for every $x\in X$; moreover $\overline u$ is surjective if and only if $u(X)$ generates $H$ ([[thm-von-dyck]]).

[F4] The half twist $\sigma_i$ and its opposite $\sigma_i^{-}$ are braids based at $Q$ with classes $[\sigma_i],[\sigma_i]^{-1}\in G_n$, and their endpoint permutations are the transposition of $i$ and $i+1$; the endpoint permutation is a homomorphism $\pi\colon G_n\to S_n$ ([[def-elementary-geometric-half-twist]], [[thm-geometric-braids-form-a-group]]).

[F5] For $|i-j|>1$ the half twists satisfy $[\sigma_i][\sigma_j]=[\sigma_j][\sigma_i]$ in $G_n$, and for $n\le3$ there are no such pairs of indices, so the assertion is vacuous ([[lem-geometric-far-commutativity]]).

[F6] For $1\le i\le n-2$ the half twists satisfy $[\sigma_i][\sigma_{i+1}][\sigma_i]=[\sigma_{i+1}][\sigma_i][\sigma_{i+1}]$ in $G_n$, and for $n\le2$ there is no such index, so the assertion is vacuous ([[lem-geometric-three-strand-braid-relation]]).

[F7] Every braid class in $G_n$ is a finite product of the classes $[\sigma_1],\dots,[\sigma_{n-1}]$ and their inverses; equivalently, the set $\{[\sigma_1],\dots,[\sigma_{n-1}]\}$ generates $G_n$ in the sense of [[def-generated-subgroup]], and for $n\le1$ the empty family generates the trivial subgroup $\{e\}$ ([[lem-every-geometric-braid-is-a-word-in-half-twists]], [[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 **The relators of the Artin presentation evaluate to the identity under the half-twist assignment.** Assume $n\ge2$, let $X=\{\sigma_1,\dots,\sigma_{n-1}\}$ and let $u\colon X\to G_n$ be the assignment $u(\sigma_i):=[\sigma_i]$; the relators of [F1] are, by [F2], the words $(\sigma_i\sigma_{i+1}\sigma_i)^{-1}(\sigma_{i+1}\sigma_i\sigma_{i+1})$ for $1\le i\le n-2$ and $(\sigma_i\sigma_j)^{-1}(\sigma_j\sigma_i)$ for $|i-j|>1$. Their evaluations are $\bigl([\sigma_i][\sigma_{i+1}][\sigma_i]\bigr)^{-1}[\sigma_{i+1}][\sigma_i][\sigma_{i+1}]=e$ by [F6] and $\bigl([\sigma_i][\sigma_j]\bigr)^{-1}[\sigma_j][\sigma_i]=e$ by [F5]. [F1, F2, F5, F6]

1.2 **The cases $n\le1$.** For $n\le1$ the presentation has no generators and defines the trivial group $B_n$ by [F1], while $\langle\varnothing\rangle=\{e\}$ is the trivial subgroup of $G_n$ and [F7] says that this empty family generates $G_n$, so $G_n$ is trivial as well; the unique map $B_n\to G_n$ is therefore a group homomorphism, it is the only homomorphism between these groups, and it is surjective because its codomain is trivial. [F1, F3, F7]

2.1 **Von Dyck extends the assignment to a homomorphism.** By step 1.1 the hypothesis of [F3] is satisfied, so there is a unique homomorphism $\varphi\colon B_n\to G_n$ with $\varphi(x_i)=[\sigma_i]$ for every generator, and $\varphi$ is surjective if and only if the set of these images generates $G_n$. [F1, F3, step 1.1]

3.1 **Surjectivity.** The images $\varphi(\{\sigma_1,\dots,\sigma_{n-1}\})=\{[\sigma_1],\dots,[\sigma_{n-1}]\}$ generate $G_n$ by [F7], so the surjectivity criterion of [F3] applies to the homomorphism of step 2.1 and $\varphi$ is surjective; consequently every element of $G_n$ is a finite product of the classes $[\sigma_i]^{\pm1}$, and composing the unique homomorphism with the endpoint permutation homomorphism of [F4] gives the permutation map $x_i\mapsto(i\ i+1)$, because $\pi([\sigma_i])$ is that transposition. [F3, F4, F7, step 2.1]

4.1 **Conclusion.** Steps 2.1 and 3.1 give, for $n\ge2$, a unique homomorphism $\varphi\colon B_n\to G_n$ with $\varphi(x_i)=[\sigma_i]$, and step 1.2 gives the same for $n\le1$; in both cases $\varphi$ is surjective, and no injectivity is claimed. ∎ [F1, F3, step 2.1, step 3.1, step 1.2]

## Remarks

- The proposition is exactly the surjectivity half of the classical statement that the Artin presentation presents the geometric braid group. Its content is that the geometric relations of [[lem-geometric-far-commutativity]] and [[lem-geometric-three-strand-braid-relation]] satisfy the defining relators, and that the generic-crossing decomposition of [[lem-every-geometric-braid-is-a-word-in-half-twists]] reaches every braid class.
- Injectivity requires the opposite direction: it needs an argument that no further relations hold between the half twists, which is not available on this page and is not assumed anywhere below it.
