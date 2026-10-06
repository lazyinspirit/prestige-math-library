---
id: lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant
kind: lemma
title: Framed points in one component of the frame bundle are framed cobordant
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
- def-frame-bundle-of-a-smooth-manifold
- def-framed-cobordism-of-embedded-submanifolds
- def-framing-of-a-normal-bundle
- def-normal-and-conormal-bundles-of-an-embedded-submanifold
- def-neat-submanifold-of-a-manifold-with-boundary
- def-smooth-embedding
- def-diffeomorphism-and-local-diffeomorphism-of-manifolds
- thm-chain-rule-for-differentials-of-smooth-maps
- def-countable-choice
- def-the-standard-smooth-step-function
- thm-heine-borel-rn
- thm-compactness-under-continuous-maps
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: constructive
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: Lemma 2.45, printed p.24 (and the remark on adjusting a framing within a component following it)
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, framed cobordism and the framing of an arc, printed pp.42-44
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth $m$-manifold, $m\ge1$,
and let $c:[0,1]\to B(M)$ be a smooth path in the frame bundle from
$(x_0,b_0)$ to $(x_1,b_1)$. Then the framed points $(x_0,b_0)$ and
$(x_1,b_1)$, regarded as closed framed $0$-dimensional submanifolds of $M$ of
codimension $m$ with framings $b_i:\mathbb R^m\to T_{x_i}M$, are framed
cobordant in $M$.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$, $m\ge1$, points $x_0,x_1\in M$, linear isomorphisms $b_i:\mathbb R^m\to T_{x_i}M$, and a smooth path $c:[0,1]\to B(M)$ with $c(0)=(x_0,b_0)$, $c(1)=(x_1,b_1)$ ([[def-frame-bundle-of-a-smooth-manifold]]).

[F1] The frame bundle $B(M)$ is a smooth manifold with smooth projection $\pi$ and smooth right action; writing $c(s)=(x(s),b(s))$, both $s\mapsto x(s)$ and $s\mapsto b(s)$ are smooth, and composing $c$ with a smooth nondecreasing reparametrization $\lambda:[0,1]\to[0,1]$ with $\lambda=0$ near $0$ and $\lambda=1$ near $1$ gives a smooth path with the same endpoints that is constant near the ends ([[def-frame-bundle-of-a-smooth-manifold]], [[def-smooth-embedding]], [[thm-chain-rule-for-differentials-of-smooth-maps]]). The interval is compact and its graph image is compact ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]]).

[F2] A framed cobordism from a closed framed codimension-$k$ submanifold $(N_0,\varphi_0)$ to $(N_1,\varphi_1)$ in a closed $X$ is data $(W,\varepsilon,\Psi)$: a compact neat embedded $W\subseteq X\times I$ with $\partial W=N_0\times\{0\}\sqcup N_1\times\{1\}$, product ends $W\cap(X\times[0,\varepsilon))=N_0\times[0,\varepsilon)$ and $W\cap(X\times(1-\varepsilon,1])=N_1\times(1-\varepsilon,1]$, and a framing $\Psi$ of $\nu(W\subseteq X\times I)$ the pullback of $\varphi_i$ over each end collar, along which the $I$-direction is tangent to $W$ ([[def-framed-cobordism-of-embedded-submanifolds]], [[def-framing-of-a-normal-bundle]], [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]], [[def-neat-submanifold-of-a-manifold-with-boundary]], [[def-countable-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Choose a smooth nondecreasing $\lambda:[0,1]\to[0,1]$ given explicitly by $\lambda(t)=\sigma(3t-1)$, with $\sigma$ the standard smooth step function ([[def-the-standard-smooth-step-function]]) and $\varepsilon=1/8$, and replace $c$ by the reparametrized smooth path $c\circ\lambda$ with the same endpoints, so that $x(\lambda(t))=x_0$ and $b(\lambda(t))=b_0$ for $t\le\varepsilon$ and $x(\lambda(t))=x_1$, $b(\lambda(t))=b_1$ for $t\ge1-\varepsilon$. [F1, given, construct]

2.1 Define $W:=\{(x(\lambda(t)),t):t\in[0,1]\}\subseteq M\times I$. The map $t\mapsto(x(\lambda(t)),t)$ is smooth and injective (the second coordinate separates points) with derivative having second component $1\ne0$, so $W$ is a compact embedded $1$-submanifold with boundary the two endpoints $(x_0,0)$ and $(x_1,1)$; it is neat in $M\times[0,1]$, and by step 1.1 its ends are exactly $W\cap(M\times[0,\varepsilon))=\{x_0\}\times[0,\varepsilon)$ and $W\cap(M\times(1-\varepsilon,1])=\{x_1\}\times(1-\varepsilon,1]$. [F1, step 1.1, given]

3.1 Write $\gamma(t)=x(\lambda(t))$. At $(\gamma(t),t)$ define $Q_t:T_{\gamma(t)}M\oplus\mathbb R\to T_{\gamma(t)}M$ by $Q_t(v,a)=v-a\dot\gamma(t)$. Its kernel is precisely $\mathbb R(\dot\gamma(t),1)=T_{(\gamma(t),t)}W$, and it is surjective since $Q_t(v,0)=v$; hence it induces a smooth isomorphism of the normal quotient with $T_{\gamma(t)}M$. The framing is $\Psi_t=b(\lambda(t))^{-1}\circ Q_t$ on that quotient. On each end collar $\dot\gamma=0$ and $b(\lambda(t))=b_i$, so $\Psi$ is exactly the product pullback of $\varphi_i=b_i^{-1}$. This supplies the required quotient map and the framing in the trivialization direction of [F2]. [F2, step 1.1, step 2.1]

4.1 Therefore $(W,\varepsilon,\Psi)$ satisfies all the data of a framed cobordism from the framed point $(x_0,\varphi_0)$ to $(x_1,\varphi_1)$ in the sense of [F2], and reading the framings through the frame-bundle dictionary the two framed points $(x_0,b_0)$ and $(x_1,b_1)$ are framed cobordant. No choice beyond the inherited countable choice and the finite choice of $\lambda$ and $\varepsilon$ is used. [F2, step 3.1, discharge-construct] ∎
