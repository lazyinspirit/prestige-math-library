---
id: "lem-fibre-product-unique-canonical-isomorphism"
kind: "lemma"
title: "Uniqueness of the fibre product"
status: "draft"
origin: "pipeline"
deps: ["def-fibre-product-schemes-universal-property"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.3 and 10.1.5"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Statement

If $(P,p,q)$ and $(P',p',q')$ are fibre products of the same pair $X\to S\leftarrow Y$, there is a unique isomorphism $u:P\to P'$ with $p'u=p$ and $q'u=q$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $f:X\to S$ and $g:Y\to S$ be morphisms of schemes. A **fibre product** is a scheme $P$, with projections $p:P\to X$ and $q:P\to Y$, such that $fp=gq$ and, for every scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ satisfying $ph=a$ and $qh=b$. Thus, naturally in every test scheme $T$, $$\operatorname{Hom}(T,P)\cong\operatorname{Hom}(T,X)\times_{\operatorname{Hom}(T,S)}\operatorname{Hom}(T,Y).$$ Write $P=X\times_S Y$. The commutative square with edges $p,q,f,g$ is **Cartesian** when it has this universal property. Morphisms here are morphisms of locally ringed spaces, as in def-morphism-of-schemes. No existence assertion is part of the definition. ([[def-fibre-product-schemes-universal-property]])

## Proof

1.1 Apply the universal property of $P^{\prime}$ to the compatible maps $p,q$. It supplies a unique map $u:P\to P^{\prime}$ with the required projections. This works also for $P=\varnothing$. [given, F1]

2.1 Apply the universal property of $P$ to $p^{\prime},q^{\prime}$ to obtain $v:P^{\prime}\to P$. Both $vu$ and $\operatorname{id}_P$ have projections $p,q$, so uniqueness gives $vu=\operatorname{id}_P$; likewise $uv=\operatorname{id}_{P^{\prime}}$. [F1, step 1.1]

3.1 Thus $u$ is an isomorphism, and any projection-compatible isomorphism must equal the map already uniquely obtained. No condition on the number of points or on local nilpotents was used. [step 1.1, step 2.1] ∎
