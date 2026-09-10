---
id: "def-distance-from-a-point-to-a-subset"
kind: "definition"
title: "Distance from a point to a subset"
deps: ["def-extended-riemannian-distance-on-a-disconnected-manifold"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
---

## Definition

For $A\subseteq M$, define the **distance to the subset** by $d_g(x,A)=\inf_{a\in A}d_g(x,a)$, with $\inf\varnothing=+\infty$.

Use [[def-extended-riemannian-distance-on-a-disconnected-manifold]]. If the component $C$ of $x$ meets $A$, all cross-component terms are infinite and may be discarded, so $d_g(x,A)=\inf_{a\in A\cap C}d_g(x,a)<\infty$. If $A\cap C=\varnothing$, every term is infinite and the value is $+\infty$. In particular $d_g(x,A)=0$ for $x\in A$, and $d_g(x,\{a\})=d_g(x,a)$.

## Source locator

Lee, Chapter 13, pp.337–340, Proposition 13.25, Lemma 13.28 and Theorem 13.29; finite piecewise $C^1$ refinements and pauses are treated explicitly here.
