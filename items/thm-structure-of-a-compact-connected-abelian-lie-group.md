---
id: thm-structure-of-a-compact-connected-abelian-lie-group
kind: theorem
title: Structure of compact connected abelian Lie groups
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group, def-exponential-map-of-a-lie-group, thm-universal-covering-lie-group, def-axiom-of-choice, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-compactness-under-continuous-maps]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §4, Proposition 4.25 and the discussion of tori"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§8, compact connected abelian Lie groups are tori"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $T$ be a compact connected abelian Lie group with
Lie algebra $\mathfrak t$ and exponential map
$\exp:\mathfrak t\to T$
([[def-torus-and-maximal-torus-in-a-compact-lie-group]],
[[def-exponential-map-of-a-lie-group]]). Then $\exp$ is surjective, its kernel
$\Lambda=\ker\exp$ is a discrete full lattice in $\mathfrak t$, and $T$ is
isomorphic as a Lie group to $\mathfrak t/\Lambda$ and to $(S^1)^r$, where
$r=\dim\mathfrak t$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected abelian Lie group $T$ with Lie algebra $\mathfrak t$ and exponential map $\exp$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar-based theory of the surrounding page and through the choice of a lattice basis in [L5], and is not otherwise used in the elementary group-theoretic steps.

[L1] For commuting $X,Y\in\mathfrak t$ one has $\exp(X+Y)=\exp(X)\exp(Y)$; in particular $\exp:\mathfrak t\to T$ is a homomorphism of abelian groups because $\mathfrak t$ is abelian and $T$ is abelian, and $\exp(tX)=\exp(X)^t$ for integers $t$ ([[prop-commuting-lie-algebra-elements-have-multiplicative-exponentials]], [[def-exponential-map-of-a-lie-group]]).

[L2] The exponential map of a finite-dimensional real Lie group is a local diffeomorphism at $0$: there are open neighbourhoods $U$ of $0$ in $\mathfrak t$ and $V$ of $e$ in $T$ such that $\exp|_U:U\to V$ is a diffeomorphism; in particular $\ker\exp\cap U=\{0\}$ ([[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]], [[def-exponential-map-of-a-lie-group]]).

[L3] The circle group is $S^1=\mathbb R/\mathbb Z$ with its Lie-group structure, and $(S^1)^r$ denotes its $r$-fold power ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L4] A discrete subgroup of the additive group of a finite-dimensional real vector space $V$ is a free abelian group, its rank equals the dimension of its real span, and it admits a $\mathbb Z$-basis that is an $\mathbb R$-basis of that span. (Proof included in step 3.1.)

[L5] The image of a compact space under a continuous map is compact ([[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct.

1.1 The exponential map of an abelian Lie group is a homomorphism by [L1], and by [L2] it maps the open neighbourhood $U$ of $0$ diffeomorphically onto the open neighbourhood $V$ of $e$. Hence $\exp(\mathfrak t)$ contains $V$, and since $\exp(\mathfrak t)$ is a subgroup containing a neighbourhood of the identity, it is open; an open subgroup of a topological group is closed and its cosets partition the group, so connectedness of $T$ forces $\exp(\mathfrak t)=T$, that is, $\exp$ is surjective. [L1, L2]

2.1 The kernel $\Lambda=\exp^{-1}(e)$ is a subgroup of $\mathfrak t$ and is discrete: by [L2], if $\Lambda\cap U$ contained a nonzero point then $U$ would contain two distinct points with the same image under the diffeomorphism $\exp|_U$. It is closed in $\mathfrak t$ as the preimage of the closed singleton $\{e\}$ under the continuous map $\exp$. [L2, step 1.1]

3.1 The induced map $\bar\exp:\mathfrak t/\Lambda\to T$, $X+\Lambda\mapsto\exp X$, is a well-defined bijection by the first isomorphism theorem for groups, and it is a homeomorphism and a Lie-group isomorphism: the quotient map $\pi:\mathfrak t\to\mathfrak t/\Lambda$ is a local homeomorphism, and near $0$ the map $\bar\exp\circ\pi=\exp$ is a diffeomorphism onto $V$ by [L2], so $\bar\exp$ is a local diffeomorphism at the identity, hence a diffeomorphism because it is a bijective local diffeomorphism; $\mathfrak t/\Lambda$ carries the unique smooth structure making this hold. [L1, L2, step 1.1, step 2.1]

3.2 The kernel $\Lambda$ is a lattice: by [L4] it is free abelian of rank equal to $m:=\dim_{\mathbb R}\operatorname{span}(\Lambda)$ with a $\mathbb Z$-basis $X_1,\dots,X_m$ that is an $\mathbb R$-basis of $V=\operatorname{span}(\Lambda)$; the proof of [L4] is the minimal-norm induction: if $V\ne0$ choose $X_1\in\Lambda\setminus\{0\}$ of least norm, which exists because the closed discrete set $\Lambda$ meets the compact ball $\{X:\|X\|\le\|Y\|\}$ in a finite set for any $Y\in\Lambda\setminus\{0\}$; then $\Lambda\cap\mathbb R X_1=\mathbb Z X_1$ by subtracting the nearest integer multiple and using minimality, and the image of $\Lambda$ in $V/\mathbb R X_1$ is again closed and discrete, so induction applies. [L4, step 2.1]

4.1 The rank equals $n:=\dim\mathfrak t$: if $V=\operatorname{span}(\Lambda)\subsetneq\mathfrak t$, then the third isomorphism theorem for topological groups gives a continuous surjection $\mathfrak t/\Lambda\to\mathfrak t/V\cong\mathbb R^{n-m}$ with $n-m>0$; its image is compact by [L5], while $\mathbb R^{n-m}$ is not compact, a contradiction. Hence $m=n$, so $\Lambda$ has a $\mathbb Z$-basis $X_1,\dots,X_n$ that is an $\mathbb R$-basis of $\mathfrak t$; in particular $\Lambda$ is a full lattice and $T\cong\mathfrak t/\Lambda$ by step 3.1. [L4, L5, step 3.1, step 3.2]

5.1 The linear isomorphism $\mathbb R^n\to\mathfrak t$, $(a_1,\dots,a_n)\mapsto\sum_ia_iX_i$, carries $\mathbb Z^n$ onto $\Lambda$, so it induces a Lie-group isomorphism $\mathbb R^n/\mathbb Z^n\to\mathfrak t/\Lambda$, and $\mathbb R^n/\mathbb Z^n=(S^1)^n$ in the notation of [L3]; composing with step 3.1 gives $T\cong(S^1)^r$ with $r=n$. The Axiom of Choice entered through the lattice basis selection in [L4] as stated. [A1, L3, step 3.1, step 4.1] ∎
