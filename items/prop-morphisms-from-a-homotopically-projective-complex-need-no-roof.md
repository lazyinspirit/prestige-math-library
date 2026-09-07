---
id: "prop-morphisms-from-a-homotopically-projective-complex-need-no-roof"
kind: "proposition"
title: "Morphisms from a homotopically projective complex need no roof"
deps: ["def-homotopically-projective-bounded-above-complex", "def-derived-category-of-an-abelian-category", "thm-the-calculus-of-fractions-constructs-the-localization", "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic", "thm-long-exact-hom-sequences-of-a-distinguished-triangle"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/0643"
      title: "13.19.3–13.19.8; W 10.4.8 for the equivalence"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a K-projective complex $P$ and any complex $X$, $Q:\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ is bijective, under the standing localization size convention.

## Facts & Assumptions

**Given:** For a K-projective complex $P$ and any complex $X$, $Q:\operatorname{Hom}_K(P,X)\to\operatorname{Hom}_D(P,X)$ is bijective, under the standing localization size convention.

[F1] K-projectivity annihilates Hom into all acyclic shifts ([[def-homotopically-projective-bounded-above-complex]]).

[F2] The cone of a quasi-isomorphism is acyclic ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[F3] Both representable Hom sequences of a distinguished triangle are exact ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

[F4] In the derived localization every morphism is represented by a roof, and for parallel ordinary arrows $b,c:P\to X$, equality $Q(b)=Q(c)$ holds exactly when $bv=cv$ after precomposition by some quasi-isomorphism $v:V\to P$ ([[def-derived-category-of-an-abelian-category]], [[thm-the-calculus-of-fractions-constructs-the-localization]]).

## Proof

1.1 For a quasi-isomorphism $s:U\to V$ its cone $C$ is acyclic. The exact sequence $\operatorname{Hom}_K(P,C[-1])\to\operatorname{Hom}_K(P,U)\to\operatorname{Hom}_K(P,V)\to\operatorname{Hom}_K(P,C)$ has zero outer terms. Thus postcomposition by $s$ is bijective, including when $P$ or either Hom group is zero. [F1, F2, F3]

2.1 Represent an arrow from $P$ by $P\xleftarrow sU\xrightarrow fX$. The previous bijection supplies a unique $a:P\to U$ in $K$ with $sa=1_P$, so the roof equals $Q(fa)$. If $Q(b)=Q(c)$ for $b,c:P\to X$, equality detection gives $v:V\to P$ a quasi-isomorphism with $bv=cv$; take $a:P\to V$ with $va=1_P$ to get $b=c$. This proves surjectivity and injectivity. [F4, step 1.1, algebra] ∎
