---
id: thm-structure-of-a-compact-connected-abelian-lie-group
kind: theorem
title: Structure of compact connected abelian Lie groups
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group, def-exponential-map-of-a-lie-group, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, prop-commuting-lie-algebra-elements-have-multiplicative-exponentials, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-compactness-under-continuous-maps]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Corollary 1.103(b)–(c), printed page 91; Chapter IV §5, printed page 251"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§6.1, Lemma 6.11, Fact 6.12, and Theorem 6.13, printed pages 30–31"
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

The cited torus definition supplies terminology only. The product-of-circles
classification is not a premise here; it is the conclusion proved below.

## Facts & Assumptions

**Given:** The Axiom of Choice and a compact connected abelian Lie group $T$ with Lie algebra $\mathfrak t$ and exponential map $\exp$.

[A1] The Axiom of Choice supplies the Axiom of Countable Choice $\mathrm{AC}_\omega$ used by the exponential-map suppliers below ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L1] Under $\mathrm{AC}_\omega$, for commuting $X,Y\in\mathfrak t$ one has $\exp(X+Y)=\exp(X)\exp(Y)$; in particular $\exp:\mathfrak t\to T$ is a homomorphism of abelian groups because $\mathfrak t$ is abelian and $T$ is abelian ([[prop-commuting-lie-algebra-elements-have-multiplicative-exponentials]], [[def-exponential-map-of-a-lie-group]]).

[L2] Under $\mathrm{AC}_\omega$, the exponential map of a finite-dimensional real Lie group is a local diffeomorphism at $0$: there are open neighbourhoods $U$ of $0$ in $\mathfrak t$ and $V$ of $e$ in $T$ such that $\exp|_U:U\to V$ is a diffeomorphism; in particular $\ker\exp\cap U=\{0\}$ ([[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]], [[def-exponential-map-of-a-lie-group]]).

[L3] Under $\mathrm{AC}_\omega$, $\mathbb R/\mathbb Z$ carries the quotient topology and is homeomorphic to the circle. We write $S^1=\mathbb R/\mathbb Z$ as on this page; its quotient Lie-group structure and the smooth finite-product identification are constructed in steps 3.1 and 5.1 ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[L4] A discrete subgroup of the additive group of a finite-dimensional real vector space $V$ is a free abelian group, its rank equals the dimension of its real span, and it admits a $\mathbb Z$-basis that is an $\mathbb R$-basis of that span. (Proved internally in step 3.2, not assumed there.)

[L5] The image of a compact space under a continuous map is compact ([[thm-compactness-under-continuous-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], the countable-choice hypotheses of [L1] and [L2] hold. The exponential map of an abelian Lie group is therefore a homomorphism by [L1], and by [L2] it maps the open neighbourhood $U$ of $0$ diffeomorphically onto the open neighbourhood $V$ of $e$. Hence $\exp(\mathfrak t)$ contains $V$, and since $\exp(\mathfrak t)$ is a subgroup containing a neighbourhood of the identity, it is open; an open subgroup of a topological group is closed and its cosets partition the group, so connectedness of $T$ forces $\exp(\mathfrak t)=T$, that is, $\exp$ is surjective. [A1, L1, L2]

2.1 The kernel $\Lambda=\exp^{-1}(e)$ is a subgroup of $\mathfrak t$ and is discrete: by [L2], if $\Lambda\cap U$ contained a nonzero point then $U$ would contain two distinct points with the same image under the diffeomorphism $\exp|_U$. It is closed in $\mathfrak t$ as the preimage of the closed singleton $\{e\}$ under the continuous map $\exp$. [L2, step 1.1]

3.1 Construct the smooth quotient explicitly. For a closed discrete subgroup $D$ of a finite-dimensional real vector space $E$, the quotient map $q:E\to E/D$ is open, since $q^{-1}(q(O))=\bigcup_{d\in D}(O+d)$ for open $O$. Choose a ball $B$ about $0$ with $(B-B)\cap D=\{0\}$. The restrictions of $q$ to translates of $B$ are homeomorphisms onto open sets and supply coordinate charts. On overlaps, the two lifts differ locally by a fixed element of $D$, so chart transitions are translations and are smooth. Distinct cosets have disjoint small chart neighbourhoods: if $x-y\notin D$, closedness of $D$ gives a ball about $x-y$ disjoint from $D$. Images of a countable Euclidean base give a countable base for the quotient. Thus these charts define a Hausdorff, second-countable smooth manifold, and addition and inversion are smooth, being locally addition and negation followed by translations. This is the unique smooth structure for which $q$ is a local diffeomorphism. Apply the construction to $E=\mathfrak t$ and $D=\Lambda$. The map $\bar\exp:\mathfrak t/\Lambda\to T$, $X+\Lambda\mapsto\exp X$, is a well-defined bijective homomorphism by steps 1.1 and 2.1. Shrink $B$ into the neighbourhood $U$ of [L2]. In the resulting quotient chart, $\bar\exp$ is exactly $\exp|_B$, hence a local diffeomorphism; translations give this property everywhere. A bijective local diffeomorphism has smooth local inverses that form its global inverse. Therefore $\bar\exp$ is a Lie-group isomorphism. [L1, L2, step 1.1, step 2.1, construct]

3.2 The kernel $\Lambda$ is a lattice in its real span. We prove the lattice assertion by induction; when the span is zero the subgroup is $\{0\}$ with the empty basis. If $V:=\operatorname{span}(\Lambda)$ is nonzero, fix a Euclidean norm and choose $X_1\in\Lambda\setminus\{0\}$ of least norm; such an element exists because a closed discrete subset meets every compact ball in a finite set. Subtracting a nearest integer multiple of $X_1$ shows $\Lambda\cap\mathbb RX_1=\mathbb ZX_1$. Let $p:V\to X_1^\perp$ be orthogonal projection. For each $X\in\Lambda$, subtract an integer multiple of $X_1$ so that the $X_1$-coordinate lies in $[-1/2,1/2]$. The resulting representatives with $\|p(X)\|\le1$ lie in a compact cylinder, whose intersection with $\Lambda$ is finite. If that finite set has nonzero projected norms, their minimum is positive; otherwise $p(\Lambda)$ has no nonzero point of norm at most $1$. In either case $0$ is isolated in $p(\Lambda)$, and translation makes $p(\Lambda)$ discrete. Such a subgroup is also closed: near any point in its closure a ball of diameter smaller than its positive separation contains at most one subgroup point, forcing the limit to equal that point. Induction on $\dim V$ gives a $\mathbb Z$-basis of $p(\Lambda)$ whose lifts $X_2,\dots,X_m\in\Lambda$, together with $X_1$, generate $\Lambda$ and are linearly independent over $\mathbb R$. Thus $\Lambda$ is free abelian of rank $m=\dim V$ with a $\mathbb Z$-basis that is an $\mathbb R$-basis of $V$. [step 2.1, construct]

4.1 The rank equals $n:=\dim\mathfrak t$: if $V=\operatorname{span}(\Lambda)\subsetneq\mathfrak t$, then the map $X+\Lambda\mapsto X+V$ is well defined and continuous by the quotient topology and gives a surjection $\mathfrak t/\Lambda\to\mathfrak t/V\cong\mathbb R^{n-m}$ with $n-m>0$; its image is compact by [L5], while $\mathbb R^{n-m}$ is not compact, a contradiction. Hence $m=n$, so $\Lambda$ has a $\mathbb Z$-basis $X_1,\dots,X_n$ that is an $\mathbb R$-basis of $\mathfrak t$; in particular $\Lambda$ is a full lattice and $T\cong\mathfrak t/\Lambda$ by step 3.1. [L4, L5, step 3.1, step 3.2]

5.1 The linear isomorphism $\mathbb R^n\to\mathfrak t$, $(a_1,\dots,a_n)\mapsto\sum_i a_iX_i$, carries $\mathbb Z^n$ onto $\Lambda$. In the quotient charts of step 3.1 it and its inverse remain smooth, so it induces a Lie-group isomorphism $\mathbb R^n/\mathbb Z^n\to\mathfrak t/\Lambda$. By [A1] the countable-choice hypothesis of [L3] holds. Equip $S^1=\mathbb R/\mathbb Z$ with the quotient charts of step 3.1, using open intervals of length less than $1$. The coordinate map $[a_1,\dots,a_n]\mapsto([a_1],\dots,[a_n])$ is a bijective homomorphism from $\mathbb R^n/\mathbb Z^n$ to $(S^1)^n$. On products of these intervals its coordinate expression and inverse are the identity, so it is a Lie-group isomorphism for the product smooth structure. Composing gives $T\cong(S^1)^r$ with $r=n$. If $n=0$, surjectivity of $\exp:\{0\}\to T$ gives $T=\{e\}$, $\Lambda=\{0\}$, and the same conclusion uses the empty product. No choice beyond [A1] is required by the finite lattice construction or quotient charts. [A1, L3, step 3.1, step 4.1] ∎