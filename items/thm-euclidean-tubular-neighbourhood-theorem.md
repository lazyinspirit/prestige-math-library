---
id: thm-euclidean-tubular-neighbourhood-theorem
kind: theorem
title: "The Euclidean tubular neighbourhood theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-addition-map-for-a-euclidean-submanifold,
       lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section,
       lem-variable-radius-injectivity-for-normal-addition,
       def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: locally-repaired
    date: 2026-09-10
    scope: owner-authorized-local-smooth-tube-and-choice-contract-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11, Theorem 3.54"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $S\subseteq\mathbb R^m$ be an embedded smooth submanifold. Then there is a
positive smooth function $\delta:S\to(0,\infty)$ such that the restricted
normal addition map
$$E:\Omega_\delta\to\mathbb R^m,\qquad \Omega_\delta:=\{(p,v)\in N^\perp S:\|v\|<\delta(p)\},$$
is a diffeomorphism onto an open neighbourhood of $S$. In particular, $S$ has a
tubular neighbourhood in $\mathbb R^m$.

## Facts & Assumptions

**Given:** Countable choice and an embedded smooth submanifold $S\subseteq\mathbb R^m$.

[L1] The model map in this statement is the normal addition map ([[def-normal-addition-map-for-a-euclidean-submanifold]]).

[L2] Normal addition is a local diffeomorphism along the zero section ([[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]]).

[L3] Under countable choice, the construction in [[lem-variable-radius-injectivity-for-normal-addition]] produces a positive smooth injectivity radius. More precisely, for its capped local-diffeomorphism supremum $r(p)$, proof steps 4.1–6.1 construct a smooth $\delta$ with $0<\delta(p)\le r(p)/4$. We use this particular constructed radius, not an arbitrary radius on which the map happens to be injective.

[A1] Countable choice is [[def-countable-choice]]. It covers the normal-bundle manifold interface underlying [L1, L2] and the proper-exhaustion construction used to obtain the smooth radius in [L3].

## Proof
**Proof technique:** direct.

1.1 If $S=\varnothing$, take the unique function $\delta:S\to(0,\infty)$. Then $\Omega_\delta=\varnothing$, and $E$ is a diffeomorphism from the empty manifold onto the open neighbourhood $\varnothing$ of $S$. Hence assume $S\ne\varnothing$. [L1, given]

2.1 For $p\in S$ and $a>0$ set $$V_a(p)=\{(q,v)\in N^\perp S:\|q-p\|<a,\ \|v\|<a\},\qquad A_p=\{a\in(0,1]:E|_{V_a(p)}\text{ is a diffeomorphism onto its image}\}.$$ The normal bundle has its induced topology in $\mathbb R^m\times\mathbb R^m$, so these open sets form a neighbourhood basis at $(p,0)$. Thus [L2] makes $A_p$ nonempty, and it is bounded above by one. Put $r(p)=\sup A_p\in(0,1]$. For every $0<a<r(p)$ some $b\in A_p$ satisfies $a<b$, and restricting its diffeomorphism to $V_a(p)$ proves $a\in A_p$. This is the same capped function as in [L3]. [L1, L2, step 1.1, construct]

3.1 Take the positive smooth $\delta$ specifically constructed in [L3]. Its stated proof bound gives $\delta(p)\le r(p)/4$ and its injectivity conclusion gives injectivity of $E$ on $\Omega_\delta$. The construction uses compact sublevel minima of $r$ and explicit locally finite one-variable bumps composed with a smooth proper exhaustion; no manifold partition or additional radius selection is invoked here. [A1, L3, step 2.1, choose]

4.1 Local invertibility on the entire tube needs a separate argument. If $(p,v)\in\Omega_\delta$, then $\|v\|<\delta(p)\le r(p)/4<r(p)$. Choose a real $a$ strictly between $\|v\|$ and $r(p)$, for example their arithmetic mean. By step 2.1, $E|_{V_a(p)}$ is a diffeomorphism, and $(p,v)\in V_a(p)$. Hence $E$ is a local diffeomorphism at every point of $\Omega_\delta$. This follows from the quantitative radius bound and the eligible neighbourhoods, not from injectivity alone. [step 2.1, step 3.1, algebra]

5.1 The set $\Omega_\delta$ is open in the normal bundle: its defining inequality is the strict negativity of the continuous function $(p,v)\mapsto\|v\|-\delta(p)$. Here the vector coordinate, bundle projection and positive smooth $\delta$ are continuous. Thus the neighbourhoods from step 4.1 can be intersected with $\Omega_\delta$ to give local diffeomorphisms for the restricted map, which is injective by step 3.1. [L1, step 3.1, step 4.1]

6.1 A local diffeomorphism is open. Hence $U:=E(\Omega_\delta)$ is open and contains $S$ because $E(p,0)=p$. The injective local diffeomorphism $E:\Omega_\delta\to U$ is a homeomorphism, and its local smooth inverses agree and assemble to a smooth global inverse. Thus $E$ is the required diffeomorphism. Together with the empty case in step 1.1, this proves the theorem. [L1, step 1.1, step 5.1] ∎

## Remarks

The radius is smooth, not merely continuous. No completeness, compactness, or
positive-dimensional hypothesis on $S$ is imposed. Once the normal-bundle
manifold data and the particular smooth radius constructed in the cited lemma
are supplied, the remaining tube and inverse construction requires no further
choice.
