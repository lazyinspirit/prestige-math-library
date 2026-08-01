---
id: thm-chain-rule-for-total-derivatives
kind: theorem
title: "The chain rule for total derivatives: $D(g\\circ f)(a)=Dg(f(a))\\circ Df(a)$"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-total-derivative-in-euclidean-space, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, lem-euclidean-linear-maps-have-matrices-and-are-bounded, def-euclidean-linear-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

Let $f:U\to V\subseteq\mathbb R^n$ be totally differentiable at $a\in U$ and let $g:V\to\mathbb R^p$ be totally differentiable at $f(a)$. Then $g\circ f$ is totally differentiable at $a$ and

$$D(g\circ f)(a)=Dg(f(a))\circ Df(a).$$

## Facts & Assumptions

**Given:** The total first-order expansions of $f$ at $a$ and $g$ at $f(a)$.

[L1] In the total-derivative definition, the normalized remainder tends to zero as $h$ tends to zero ([[def-total-derivative-in-euclidean-space]]).

[L2] Total differentiability gives a local $O(\|h\|_2)$ increment bound and therefore continuity ([[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Write $f(a+h)=f(a)+Df(a)h+r_f(h)$ and $g(f(a)+k)=g(f(a))+Dg(f(a))k+r_g(k)$, with both normalized remainders tending to zero. [L1, L2]

2.1 By [L2], $k=f(a+h)-f(a)=O(\|h\|_2)$; boundedness of $Dg(f(a))$ and the two remainder limits show both $Dg(f(a))r_f(h)$ and $r_g(k)$ are $o(\|h\|_2)$, including the case $k=0$. [step 1.1, L2, algebra]

3.1 Substitution into the two expansions leaves $g(f(a+h))-g(f(a))-Dg(f(a))Df(a)h=o(\|h\|_2)$, and the composite of linear maps is linear. [step 1.1, step 2.1] ∎
