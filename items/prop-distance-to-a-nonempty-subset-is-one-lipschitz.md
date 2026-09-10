---
id: "prop-distance-to-a-nonempty-subset-is-one-lipschitz"
kind: "proposition"
title: "Distance to a nonempty subset is one lipschitz"
deps: ["def-distance-from-a-point-to-a-subset", "thm-riemannian-distance-is-a-metric"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For nonempty $A$ in connected $M$, $x\mapsto d_g(x,A)$ is finite and $1$-Lipschitz. More generally this holds on a component $C$ with $A\cap C\ne\varnothing$.

## Facts & Assumptions

**Given:** $x,y\in C$ and $A\cap C\ne\varnothing$.

[F1] [[def-distance-from-a-point-to-a-subset]]: For $A\subseteq M$, define the **distance to the subset** by $d_g(x,A)=\inf_{a\in A}d_g(x,a)$, with $\inf\varnothing=+\infty$. Use def-extended-riemannian-distance-on-a-disconnected-manifold. If the component $C$ of $x$ meets $A$, all cross-component terms are infinite and may be discarded, so $d_g(x,A)=\inf_{a\in A\cap C}d_g(x,a)<\infty$. If $A\cap C=\varnothing$, every term is infinite and the value is $+\infty$. In particular $d_g(x,A)=0$ for $x\in A$, and $d_g(x,\{a\})=d_g(x,a)$.

[F2] [[thm-riemannian-distance-is-a-metric]]: $d_g$ is a finite metric on a connected Riemannian manifold.

## Proof

**Proof technique:** direct.

1.1 Fix one $a_0\in A\cap C$. Both distances to the set are bounded above by the finite point distances to $a_0$, and below by zero. For every $a\in A\cap C$, the triangle inequality gives $d_g(x,a)\le d_g(x,y)+d_g(y,a)$. Taking infima yields $d_g(x,A)\le d_g(x,y)+d_g(y,A)$. [F1, F2, given]

2.1 Interchange $x,y$ and use symmetry to obtain the opposite inequality, so $|d_g(x,A)-d_g(y,A)|\le d_g(x,y)$. All quantities subtracted are finite by step 1.1. On a component missing $A$ the extended value is $+\infty$ throughout, with no real-valued Lipschitz assertion. [F1, F2, step 1.1] ∎

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
