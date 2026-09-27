---
id: "lem-comparison-map-from-an-exact-complex-into-an-injective-resolution"
kind: "lemma"
title: "Lifting a morphism from an exact complex into an injective resolution"
status: draft
origin: pipeline
deps: [def-injective-object, def-chain-map, def-graded-morphism-of-chain-complexes, def-chain-homotopy, def-cochain-complex-in-an-abelian-category, def-abelian-category, thm-the-image-is-the-least-subobject-through-which-a-morphism-factors, thm-choice-implies-dependent-implies-countable-choice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Derived Categories, Section 13.18: Injective resolutions (tags 013P, 013R)"
      url: https://stacks.math.columbia.edu/tag/013G
---

## Statement

Assume the Axiom of Dependent Choice. Let
$$0\to A\xrightarrow{\ \eta\ }J^0\xrightarrow{\ d^0\ }J^1\xrightarrow{\ d^1\ }\cdots$$
be a coaugmented cochain complex in an abelian category that is exact at every
displayed term, and let
$$0\to B\xrightarrow{\ \eta' \ }I^0\xrightarrow{\ \delta^0\ }I^1\xrightarrow{\ \delta^1\ }\cdots$$
be a coaugmented cochain complex whose terms $I^n$ are all injective
([[def-injective-object]], [[def-cochain-complex-in-an-abelian-category]]).

Then for every morphism $u:A\to B$ there is a coaugmentation-preserving cochain
map $\varphi^\bullet:J^\bullet\to I^\bullet$, that is
$\varphi^0\circ\eta=\eta'\circ u$ and
$\delta^n\circ\varphi^n=\varphi^{n+1}\circ d^n$ for all $n\ge0$
([[def-chain-map]], [[def-graded-morphism-of-chain-complexes]]); and any two
such cochain maps are cochain-homotopic
([[def-chain-homotopy]]).

## Facts & Assumptions

[F1] An object $I$ is injective when every morphism $M\to I$ out of a subobject extends over the inclusion $M\rightarrowtail E$ ([[def-injective-object]]).

[F2] In an abelian category, the canonical map $\operatorname{coim}(d)=\operatorname{coker}(\ker d)\to\operatorname{im}(d)$ is an isomorphism. Consequently, if $g$ vanishes on $\ker d$, the cokernel universal property factors $g$ uniquely through $\operatorname{coim}(d)$ and hence through $\operatorname{im}(d)$ ([[def-abelian-category]]).

[F3] A cochain map is a family of morphisms commuting with the differentials, and a cochain homotopy $s:f\simeq g$ satisfies $f^n-g^n=\delta^{n-1}s^n+s^{n+1}d^n$ in the cochain indexing ([[def-chain-map]], [[def-chain-homotopy]], [[def-cochain-complex-in-an-abelian-category]]).

[F4] In ZF, AC implies DC ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Given:** The Axiom of Dependent Choice, the two coaugmented complexes, and a morphism $u:A\to B$.

1.1 By exactness at $A$ the map $\eta:A\to J^0$ has zero kernel, so it is a monomorphism; the composite $\eta'\circ u:A\to I^0$ is a morphism out of that subobject into the injective object $I^0$, so by [F1] there is $\varphi^0:J^0\to I^0$ with $\varphi^0\circ\eta=\eta'\circ u$. This starts a recursion in degree $0$. [F1, construct]

2.1 Suppose $\varphi^n:J^n\to I^n$ has been constructed with $\delta^{n-1}\varphi^{n-1}=\varphi^n d^{n-1}$ for $n\ge1$ (for $n=0$ take the coaugmentation identity of step 1.1). The composite $g:=\delta^n\circ\varphi^n:J^n\to I^{n+1}$ kills the kernel of $d^n$, which by exactness at $J^n$ is the image of $d^{n-1}$; hence $g$ factors as $J^n\twoheadrightarrow\operatorname{im}(d^n)\xrightarrow{\ \bar g\ }I^{n+1}$ through the image of $d^n$ by [F2]. By exactness at $J^{n+1}$ the image of $d^n$ is the kernel of $d^{n+1}$, so the inclusion $\operatorname{im}(d^n)\rightarrowtail J^{n+1}$ is a monomorphism; since $I^{n+1}$ is injective, [F1] extends $\bar g$ to $\varphi^{n+1}:J^{n+1}\to I^{n+1}$, and $\varphi^{n+1}\circ d^n=g=\delta^n\circ\varphi^n$ because both sides agree on the quotient $J^n\twoheadrightarrow\operatorname{im}(d^n)$. [F1, F2, step 1.1, construct] [F1, F2, construct]

3.1 By step 2.1 one may choose an extension $\varphi^{n+1}$ for every $n\ge0$; the recursion produces a coaugmentation-preserving cochain map $\varphi^\bullet$, since the identities of step 1.1 and step 2.1 are exactly $\varphi^0\eta=\eta'u$ and $\delta^n\varphi^n=\varphi^{n+1}d^n$. The construction makes one choice of extension in each degree $n\in\mathbb N$, and the assumed DC, also implied by AC via [F4], ensures that an infinite sequence of nonempty choices of this recursive shape exists; hence the lift exists. [F3, F4, step 2.1] [F3, F4]

4.1 For the uniqueness, let $\varphi^\bullet,\psi^\bullet:J^\bullet\to I^\bullet$ be coaugmentation-preserving cochain maps and put $h^n:=\varphi^n-\psi^n$, so that $h$ is a cochain map with $h^0\circ\eta=0$. I claim inductively that there are morphisms $s^n:J^n\to I^{n-1}$ for $n\ge1$, with $s^n=0$ for $n\le0$, satisfying $h^n=\delta^{n-1}s^n+s^{n+1}d^n$: for $n=0$ this says $h^0=s^1d^0$, and since $h^0$ kills the kernel of $d^0$ (which equals the image of $\eta$) it factors through the image of $d^0$ by [F2], and that factorization extends to $J^1\to I^0$ by injectivity of $I^0$ [F1]; given $s^n$, one computes that $h^n-\delta^{n-1}s^n$ kills the image of $d^{n-1}$ (using the displayed identity in degree $n-1$ and the cochain identity for $h$), hence factors through the image of $d^n$, and again [F1] extends it over the inclusion $\operatorname{im}(d^n)\rightarrowtail J^{n+1}$, giving $s^{n+1}$. [F1, F2, F3, step 3.1] [F1, F2, F3]

5.1 The homotopy identities produced in step 4.1 require one choice in each degree, which the assumed DC provides; the sequence $s^n$ is a cochain homotopy from $\varphi^\bullet$ to $\psi^\bullet$ in the sense of [F3], so any two coaugmentation-preserving lifts are cochain-homotopic. [F3, F4, step 4.1] ∎ [F3, F4] ∎
