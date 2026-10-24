---
id: "lem-fibre-product-open-restriction"
kind: "lemma"
title: "Restricting fibre products to open subschemes"
status: published
origin: "pipeline"
deps: ["def-fibre-product-schemes-universal-property", "def-open-immersion-schemes", "lem-open-immersion-monomorphism", "lem-fibre-product-unique-canonical-isomorphism"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Stacks 26.17.3; Vakil proof 10.1.1 Step 1"
      url: "https://stacks.math.columbia.edu/tag/01JO"
proof_strategy: direct
---

## Statement

Suppose $P=X\times_S Y$ exists, with projections $p,q$. If opens $V\subseteq X$, $W\subseteq Y$ map into an open $U\subseteq S$, then the open subscheme $Q=p^{-1}(V)\cap q^{-1}(W)$ represents $V\times_U W$, and also $V\times_S W$. Independently, for $f:X\to S$ and an open $U\subseteq S$, the open subscheme $f^{-1}(U)$ represents $X\times_S U$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $f:X\to S$ and $g:Y\to S$ be morphisms of schemes. A **fibre product** is a scheme $P$, with projections $p:P\to X$ and $q:P\to Y$, such that $fp=gq$ and, for every scheme $T$ and morphisms $a:T\to X$, $b:T\to Y$ with $fa=gb$, there is exactly one $h:T\to P$ satisfying $ph=a$ and $qh=b$. Thus, naturally in every test scheme $T$, $$\operatorname{Hom}(T,P)\cong\operatorname{Hom}(T,X)\times_{\operatorname{Hom}(T,S)}\operatorname{Hom}(T,Y).$$ Write $P=X\times_S Y$. The commutative square with edges $p,q,f,g$ is **Cartesian** when it has this universal property. Morphisms here are morphisms of locally ringed spaces, as in def-morphism-of-schemes. No existence assertion is part of the definition. ([[def-fibre-product-schemes-universal-property]])

[F2] A morphism $j:U\to X$ is an **open immersion** if it identifies $U$ isomorphically with an open subscheme of $X$. ([[def-open-immersion-schemes]])

[F3] An open immersion is a monomorphism of schemes, and a composite of open immersions is an open immersion. ([[lem-open-immersion-monomorphism]])

[F4] If $(P,p,q)$ and $(P',p',q')$ are fibre products of the same pair $X\to S\leftarrow Y$, there is a unique isomorphism $u:P\to P'$ with $p'u=p$ and $q'u=q$. ([[lem-fibre-product-unique-canonical-isomorphism]])

## Proof

1.1 Given compatible maps $T\to V,T\to W$ over $U$, their composites to $S$ agree. F1 gives a unique $T\to P$. Its image lies in $Q$, so the morphism factors uniquely through that open subscheme by restriction of its sheaf map. [given, F1, F2]

2.1 Conversely a map $T\to Q$ gives maps to $V,W$ agreeing in $S$; they agree in $U$ because $U\to S$ is a monomorphism. The two constructions are inverse, including empty opens and the full opens. F4 supplies the canonical identification with any other product. [F3, F4, step 1.1]

3.1 For the last assertion, a compatible pair $a:T\to X,b:T\to U$ has $a(T)\subseteq f^{-1}(U)$. Its unique open factorization is a map to $f^{-1}(U)$; its composite to $U$ is $b$ by the monomorphism property. Conversely such a factorization gives the pair. This argument does not assume any general existence theorem. [F2, F3] ∎
