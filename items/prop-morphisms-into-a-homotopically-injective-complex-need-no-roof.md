---
id: "prop-morphisms-into-a-homotopically-injective-complex-need-no-roof"
kind: "proposition"
title: "Morphisms into a homotopically injective complex need no roof"
deps: ["def-homotopically-injective-bounded-below-complex", "def-derived-category-of-an-abelian-category", "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic", "thm-long-exact-hom-sequences-of-a-distinguished-triangle"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/013G"
      title: "13.18.3–13.18.8; W 10.4.8 for the equivalence"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a K-injective complex $I$ and any complex $X$, $Q:\operatorname{Hom}_K(X,I)\to\operatorname{Hom}_D(X,I)$ is bijective. Moreover, if $s:I\to J$ is a quasi-isomorphism, its cone triangle is split in $K$: $J\cong I\oplus\operatorname{Cone}(s)$ with $s$ corresponding to the inclusion.

## Facts & Assumptions

**Given:** For a K-injective complex $I$ and any complex $X$, $Q:\operatorname{Hom}_K(X,I)\to\operatorname{Hom}_D(X,I)$ is bijective. Moreover, if $s:I\to J$ is a quasi-isomorphism, its cone triangle is split in $K$: $J\cong I\oplus\operatorname{Cone}(s)$ with $s$ corresponding to the inclusion.

[F1] K-injectivity annihilates Hom from every acyclic complex into each shift of $I$ ([[def-homotopically-injective-bounded-below-complex]]).

[F2] The cone of a quasi-isomorphism is acyclic ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[F3] Both representable Hom sequences of a distinguished triangle are exact ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

[F4] The derived category has both roof presentations and denominator detection of equality ([[def-derived-category-of-an-abelian-category]]).

## Proof

1.1 For any quasi-isomorphism $s:U\to V$, the cone and its shifts are acyclic. Apply $\operatorname{Hom}_K(-,I)$ to its triangle: the two adjacent cone Hom groups vanish by K-injectivity. Thus precomposition by $s$ gives a bijection $\operatorname{Hom}_K(V,I)\to\operatorname{Hom}_K(U,I)$. This includes all zero objects. [F1, F2, F3]

2.1 Given a left roof $X\xleftarrow sU\xrightarrow fI$, the bijection gives a unique $b:X\to I$ with $bs=f$ in $K$, so the roof equals $Q(b)$. An equality $Q(b)=Q(c)$ is witnessed by $bs=cs$ for a denominator $s$ and the same bijection gives $b=c$. Equivalently a right-roof denominator out of $I$ has a retraction and therefore also eliminates the roof. [F4, step 1.1, algebra]

2.2 For $s:I\to J$ the bijection gives $r:J\to I$ with $rs=1_I$ in $K$. Let $C=\operatorname{Cone}(s)$ and let $p:C\to I[1]$ be its projection. K-injectivity gives $p=0$ in $K$. Hom exactness supplies $v:C\to J$ with $i v=1_C$, where $i:J\to C$. Replace $v$ by $v-srv$, so also $rv=0$. Then $1_J-sr-vi$ is killed by $i$ and hence factors as $s u$ by Hom exactness. Applying $r$ gives $u=0$. Consequently $(s,v):I\oplus C\to J$ and $(r,i)$ are inverse in $K$. [F1, F3, step 1.1, algebra]

3.1 The cone signs can also be checked on matrices. Choose a representative homotopy $rs-1_I=d_Ih+hd_I$. The degree-minus-one map $H:C^n\to I[1]^{n-1}$ given by $H(j,x)=rj+hx$ satisfies $d_{I[1]}H+Hd_C=p$. Thus the split connecting map is zero with the specified cone convention, rather than after an unrecorded change of sign. [step 2.2, algebra] ∎
