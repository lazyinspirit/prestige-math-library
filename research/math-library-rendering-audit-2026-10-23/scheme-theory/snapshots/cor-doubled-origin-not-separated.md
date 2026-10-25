---
id: cor-doubled-origin-not-separated
kind: corollary
title: The affine line with doubled origin is not separated
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-separatedness-gluing-overlap-criterion, def-quasi-compact-and-quasi-separated-morphism, def-discrete-valuation-ring, lem-diagonal-quasi-compact-iff-quasi-separated, thm-gluing-affine-schemes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, Lemmas 26.21.7-8 and Example 26.22.2, printed pp.41-45"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Vakil, The Rising Sea, Sections 11.3.I and 13.7.C, printed pp.309, 382"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $k$ be a field and let $D$ be the affine line with doubled origin over $k$,
obtained by gluing two copies of $\mathbb A^1_k$ by the identity on the
complement of the origin. Then $D\to\operatorname{Spec}k$ is quasi-separated but
not separated. Moreover the two origins give two distinct lifts of one valuative
diagram: the morphism $\operatorname{Spec}k(t)\to D$ with image in the shared
$\mathbb G_m$ extends to $\operatorname{Spec}k[t]_{(t)}\to D$ over $\operatorname{Spec}k$
in two different ways.

## Facts & Assumptions

**Given:** A field $k$, the two affine charts $U=\operatorname{Spec}k[x]$ and $V=\operatorname{Spec}k[y]$, the identity isomorphism $D(x)\cong D(y)$ between the complements of the origin, and the scheme $D=U\cup V$ obtained by gluing $U$ and $V$ along it.

[F1] Gluing the two charts by the identity on the complement of the origin produces a scheme $D$ having $U$ and $V$ as open subschemes with $U\cap V=D(x)\cong D(y)$; the two copies of every nonzero point are identified, while the two closed points $0_1\in U$ and $0_2\in V$ remain distinct because the gluing isomorphism identifies only the open complements. This is the affine line with doubled origin. ([[thm-gluing-affine-schemes]])

[F2] For affine opens $U=\operatorname{Spec}B$, $V=\operatorname{Spec}C$ over a common affine $W=\operatorname{Spec}A$ of the base, separatedness of $f:X\to S$ is equivalent to requiring for every such pair that: $U\cap V$ is affine and $B\otimes_AC\to\Gamma(U\cap V,\mathcal O_X)$ is surjective. ([[thm-separatedness-gluing-overlap-criterion]])

[F3] $D$ is quasi-separated over $k$ if and only if its diagonal is quasi-compact; $\Delta$ is quasi-compact as soon as some affine open cover of $D\times_kD$ has quasi-compact inverse images. ([[lem-diagonal-quasi-compact-iff-quasi-separated]], [[def-quasi-compact-and-quasi-separated-morphism]])

[F4] A discrete valuation ring is the ring of nonnegative values of a surjective integer-valued valuation on a field. ([[def-discrete-valuation-ring]])

## Proof

**Proof technique:** direct.

1.1 Take the affine open cover of $D\times_kD$ by the four products $U\times_kU$, $U\times_kV$, $V\times_kU$, $V\times_kV$, all of which are affine; their inverse images under $\Delta_{D/k}$ are $U$, the overlap $U\cap V$, $U\cap V$ and $V$ respectively, and each of these is affine, hence quasi-compact. [F3, given]

1.2 By [F1] the glued overlap $U\cap V=D(x)\cong D(y)$ is the affine scheme $\operatorname{Spec}k[x,x^{-1}]=\operatorname{Spec}k[t,t^{-1}]$; its coordinate ring contains $t^{-1}$, which is not in the image of $k[x]\otimes_kk[y]\to k[t,t^{-1}]$ induced by $x\mapsto t$, $y\mapsto t$. [F1, given]

1.3 For the valuative statement, let $R=k[t]_{(t)}$ and $K=k(t)$. On $K^\times$, define $v(f/g)=\operatorname{ord}_t(f)-\operatorname{ord}_t(g)$, and put $v(0)=\infty$. Factorization by the largest power of $t$ shows independence of the fraction representation, additivity under multiplication and $v(a+b)\ge\min(v(a),v(b))$; every nonzero fraction has finite value, and $v(t)=1$ gives surjectivity onto $\mathbb Z$. Its nonnegative-value ring is precisely $R$, whose fraction field is $K$, so $R$ is a DVR by [F4]. Let $\operatorname{Spec}K\to D$ be induced by $k[t]\to R\to K$ and either chart, and let $\operatorname{Spec}R\to\operatorname{Spec}k$ be the structure morphism; the two chart inclusions $U\hookrightarrow D$ and $V\hookrightarrow D$ restrict to the same morphism on $\operatorname{Spec}K$ because the generic point lies in the glued $\mathbb G_m$, and they differ at the closed point, which maps to the two distinct origins. [F1, F4, given]

2.1 Step 1.1 shows that $\Delta_{D/k}$ is quasi-compact, so $D\to\operatorname{Spec}k$ is quasi-separated by [F3]. [F3, step 1.1]

2.2 Step 1.2 gives an affine pair $U,V$ over the affine base $\operatorname{Spec}k$ whose intersection is affine, so the first clause of [F2] holds for it; but the map $k[x]\otimes_kk[y]\to\Gamma(U\cap V,\mathcal O_D)=k[t,t^{-1}]$ is not surjective, since $t^{-1}$ has no preimage. [F2, step 1.2]

3.1 By the second clause of [F2] the failure in step 2.2 shows that $D\to\operatorname{Spec}k$ is not separated; together with step 2.1 this gives a quasi-separated nonseparated morphism. [F2, step 2.1, step 2.2]

4.1 Steps 3.1 and 1.3 prove that $D$ is quasi-separated but not separated and that the displayed valuative diagram has two distinct lifts, as asserted. [step 3.1, step 1.3] ∎
