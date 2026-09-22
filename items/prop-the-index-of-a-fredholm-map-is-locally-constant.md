---
id: prop-the-index-of-a-fredholm-map-is-locally-constant
kind: proposition
title: The index of a Fredholm map is locally constant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-map-between-banach-manifolds, thm-fredholm-index-is-locally-constant, def-c-k-map-between-banach-spaces, def-axiom-of-choice, def-connected-space, def-topological-space, def-countable-base-banach-manifold-and-smooth-map, def-tangent-space-and-differential-on-a-banach-manifold, lem-banach-manifold-differentials-are-chart-independent, thm-fredholm-index-is-additive]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex — §2.11"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f : M \to N$ be a
$C^1$ Fredholm map between Banach manifolds
([[def-fredholm-map-between-banach-manifolds]]). Then the function

$$M \longrightarrow \mathbb Z, \qquad p \longmapsto \operatorname{ind}Df(p),$$

is locally constant, and consequently it is constant on every connected
component of $M$ ([[def-connected-space]]).

## Facts & Assumptions

**Given:** AC, $C^1$ Banach manifolds $M,N$ and a $C^1$ Fredholm map $f:M\to N$.

[L1] Fredholm map: $Df(p)$ is Fredholm at every $p$, its index is $\dim\ker - \dim\operatorname{coker}$, and chart changes conjugate the differential, so the index may be read in any chart pair ([[def-fredholm-map-between-banach-manifolds]], [[lem-banach-manifold-differentials-are-chart-independent]]).

[L2] The Fredholm operators $X \to Y$ between Banach spaces form an open subset of $\mathcal B(X,Y)$: near a Fredholm $T$ every operator with the same index is Fredholm of that index ([[thm-fredholm-index-is-locally-constant]]); the index is additive under composition, and invertible operators have index $0$ ([[thm-fredholm-index-is-additive]]).

[L3] $C^1$ means that the derivative map is continuous in operator norm ([[def-c-k-map-between-banach-spaces]]).

[L4] A map from a topological space to a discrete set that is locally constant is constant on each connected component: the preimages of the values are open, form a partition, and a connected space admits no partition into two disjoint nonempty open sets ([[def-connected-space]], [[def-topological-space]]).

[L5] Charts of the manifolds are homeomorphisms onto open subsets of the model spaces ([[def-countable-base-banach-manifold-and-smooth-map]], [[def-tangent-space-and-differential-on-a-banach-manifold]]).



## Proof

**Proof technique:** direct.

1.1 Fix $p \in M$ and charts $\varphi$ of $M$ at $p$ and $\psi$ of $N$ at $f(p)$, and write $x_0 := \varphi(p)$; the representative $\hat f := \psi \circ f \circ \varphi^{-1}$ is $C^1$ near $x_0$ and its derivative is continuous there by [L3]. [L3, L5]

2.1 Conjugation identity: for $x$ near $x_0$, writing $y := \varphi^{-1}(x)$, the chain rule gives $D\hat f(x) = D\psi(f(y)) \circ Df(y) \circ D\varphi(y)^{-1}$; here $D\psi(f(y))$ and $D\varphi(y)$ are bounded linear isomorphisms and depend continuously on $y$ by [L5] and the chain rule applied to $\varphi \circ \varphi^{-1} = \mathrm{id}$ and $\psi \circ \psi^{-1} = \mathrm{id}$. [step 1.1, L1, L5]

3.1 Since $D\hat f(x_0)$ is Fredholm by [L1], [L2] supplies a real $\delta > 0$ such that every bounded operator within distance $\delta$ of $D\hat f(x_0)$ is Fredholm with the same index; by continuity in [step 2.1] and [L3] there is a neighbourhood $V$ of $x_0$ with $\|D\hat f(x)-D\hat f(x_0)\| < \delta$ for $x \in V$. [step 1.1, step 2.1, L2, L3]

4.1 Hence for every $x \in V$ the operator $D\hat f(x)$ is Fredholm with $\operatorname{ind}D\hat f(x) = \operatorname{ind}D\hat f(x_0)$; translating through the conjugation identity of [step 2.1] and the index invariance recorded in [L1] and [L2] gives that $Df(y)$ is Fredholm with $\operatorname{ind}Df(y) = \operatorname{ind}Df(p)$ for every $y$ in the open neighbourhood $\varphi^{-1}[V]$ of $p$. [step 2.1, step 3.1, L1, L2]

5.1 Since $p$ was arbitrary, $p \mapsto \operatorname{ind}Df(p)$ is locally constant; by [L4] it is constant on every connected component of $M$. [step 4.1, L4] ∎
