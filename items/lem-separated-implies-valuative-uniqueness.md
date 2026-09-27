---
id: lem-separated-implies-valuative-uniqueness
kind: lemma
title: Separatedness implies valuative uniqueness
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-separated-morphism-schemes, def-valuative-diagram-separatedness, thm-morphisms-agree-closed-equalizer-separated-target, def-valuation-ring, thm-affine-closed-immersions-quotient-rings]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.22.1 (tag 01KZ), printed p.44"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $f:X\to S$ be a separated morphism of schemes. Then $f$ satisfies the
uniqueness part of the valuative criterion: for every valuation ring $R$ with
fraction field $K$ and every valuative diagram for $f$, there is at most one
lift $\operatorname{Spec}R\to X$. No quasi-separatedness, finite-type, Noetherian
or Choice hypothesis is required.

## Facts & Assumptions

**Given:** A separated morphism $f:X\to S$ and a valuative diagram consisting of a valuation ring $R\subseteq K$ with fraction field $K$, a morphism $g:\operatorname{Spec}K\to X$ and a morphism $\operatorname{Spec}R\to S$ with $f g$ equal to the composite $\operatorname{Spec}K\to\operatorname{Spec}R\to S$.

[F1] Such data form a **valuative diagram** for $f$; a **lift** is a morphism $\operatorname{Spec}R\to X$ compatible with $g$ and with $\operatorname{Spec}R\to S$. ([[def-valuative-diagram-separatedness]])

[F2] A morphism $f:X\to S$ is **separated** when $\Delta_{X/S}$ is a closed immersion. ([[def-separated-morphism-schemes]])

[F3] If $Y\to S$ is separated and $a,b:X\to Y$ are $S$-morphisms, then their equalizer exists as a closed subscheme $e:E\hookrightarrow X$ and represents agreement: for every scheme $T$ the morphisms $T\to E$ correspond bijectively to the $t:T\to X$ with $at=bt$. ([[thm-morphisms-agree-closed-equalizer-separated-target]])

[F4] A valuation ring $R\subseteq K$ is a subring of the field $K$ such that for every $x\in K^\times$ at least one of $x$, $x^{-1}$ lies in $R$; in particular $R$ is a domain and the canonical morphism $\operatorname{Spec}K\to\operatorname{Spec}R$ has image the generic point $(0)$ of $\operatorname{Spec}R$. ([[def-valuation-ring]])

[F5] For a ring $A$, closed immersions $Z\to\operatorname{Spec}A$ are, up to unique isomorphism over $\operatorname{Spec}A$, precisely the morphisms $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$ for ideals $I\subseteq A$. ([[thm-affine-closed-immersions-quotient-rings]])

## Proof

**Proof technique:** direct.

1.1 Suppose $u,v:\operatorname{Spec}R\to X$ are two lifts of the given diagram. Then $u$ and $v$ are $S$-morphisms, since $fu$ and $fv$ both equal the given $\operatorname{Spec}R\to S$, and $u\circ i=v\circ i=g$ where $i:\operatorname{Spec}K\to\operatorname{Spec}R$. [F1, given]

1.2 Apply [F3] to the $S$-morphisms $u,v:\operatorname{Spec}R\to X$; here $Y=X$ is separated over $S$ by [F2], so the equalizer is a closed subscheme $e:E\to\operatorname{Spec}R$ representing agreement on every scheme. [F2, F3, given]

1.3 By [F4] the ring $R$ is a domain, so $\operatorname{Spec}R$ has generic point $(0)$, the image of $i$; the only ideal $I\subseteq R$ with $(0)\in V(I)$ is $I=0$. [F4]

2.1 Because $u i=v i$, the universal property of the equalizer in [F3] applied to the test scheme $\operatorname{Spec}K$ produces a morphism $\operatorname{Spec}K\to E$ whose composite with $e$ is $i$; hence the image of the generic morphism $i$ is contained in the image of $e$. [F3, step 1.2]

3.1 By [F5] the closed immersion $e:E\to\operatorname{Spec}R$ presents $E$ as $\operatorname{Spec}(R/I)$ for $I$ the kernel of $R\to\Gamma(E,\mathcal O_E)$, with underlying space $V(I)$. Since the generic point $(0)$ of $\operatorname{Spec}R$ lies in $e(E)=V(I)$ by step 2.1, we have $I\subseteq(0)$, so $I=0$ by step 1.3 and $e$ is an isomorphism. [F5, step 2.1, step 1.3]

4.1 Since $E$ is the equalizer, the identity of $E$ corresponds under [F3] to the pair $(eu,ev)$, so $u\circ e=v\circ e$; as $e$ is an isomorphism by step 3.1, $u=v$. Hence any two lifts coincide, which is the uniqueness assertion for the given diagram. [F3, step 3.1] ∎
