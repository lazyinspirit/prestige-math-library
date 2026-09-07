---
id: prop-integration-of-top-forms-by-finite-parametrizations
title: "Computing form integrals by finite parametrizations"
kind: proposition
status: draft
origin: pipeline
deps: ["prop-integration-over-an-oriented-embedded-submanifold", "prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components", "lem-c-one-images-of-content-zero-compact-sets-have-content-zero", "lem-integral-additivity-over-a-content-zero-almost-partition", "thm-change-of-variables-for-compact-jordan-sets"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.8 and proof, pp.408–409"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then
$$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$
An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Facts & Assumptions

[F1] [[prop-integration-over-an-oriented-embedded-submanifold]]: Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

[F2] [[prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components]]: For compactly supported smooth top forms $\omega,\eta$ on an oriented $M^n$ and $a,b\in\mathbb R$, $$\int_M(a\omega+b\eta)=a\int_M\omega+b\int_M\eta.$$ Also $\int_M\omega=\sum_C\int_C\omega|_C$, where $C$ ranges over connected components with their restricted orientations; only finitely many meet $\operatorname{supp}\omega$.

[F3] [[lem-c-one-images-of-content-zero-compact-sets-have-content-zero]]: Let $m\ge1$. Then if $\psi$ is $C^1$ on an open $W\subseteq\mathbb R^m$ with values in $\mathbb R^m$ and $A\subseteq W$ is compact with content zero, then $\psi[A]$ is compact and has content zero. Content zero and nullity are those of def-null-and-content-zero-in-rn.

[F4] [[lem-integral-additivity-over-a-content-zero-almost-partition]]: Let $m\ge1$, let $A\subseteq\mathbb R^m$ be bounded and Jordan measurable, let $N\ge1$, and let $A_1,\ldots,A_N\subseteq A$ be bounded Jordan measurable sets such that $A_i\cap A_j$ has content zero whenever $i\ne j$ and such that $A\setminus\bigcup_{i=1}^NA_i$ has content zero. Let $f:A\to\mathbb R$ be bounded, Riemann integrable over $A$ and Riemann integrable over each $A_i$. Then $$\int_Af=\sum_{i=1}^N\int_{A_i}f.$$

[F5] [[thm-change-of-variables-for-compact-jordan-sets]]: Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $g:U\to\mathbb R^n$ be injective and $C^1$, and suppose $Dg(x)$ is invertible for every $x\in U$. Let $K\subseteq U$ be compact and Jordan measurable. For a bounded function $f:g(K)\to\mathbb R$, the following are equivalent: 1. $f$ is Riemann integrable on $g(K)$; 2. $x\mapsto f(g(x))|\det Dg(x)|$ is Riemann integrable on $K$. When either condition holds, $$\int_{g(K)}f(y)\,dy=\int_K f(g(x))|\det Dg(x)|\,dx.$$

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 First record boundary control. Compactness and continuity give $\overline W_i=F_i(\overline D_i)$ and $\partial_M W_i\subset F_i(\partial D_i)$: a limit of interior image points has a convergent parameter subsequence, and an interior parameter limit has image in $W_i$. Each $\partial D_i$ is compact of content zero. Cover it by finitely many parameter neighborhoods with smooth coordinate extensions. Intersect smaller closed neighborhoods with $\partial D_i$ and apply the $C^1$ null-image lemma on each extension domain. Thus $F_i(\partial D_i)$ is content zero in every fixed relatively compact target chart, after finite localization. No derivative rank condition is used here. [F3, given]

2.1 By a finite chart partition of the compact support and linearity, it suffices to consider a form supported compactly inside a small chart $U$ whose coordinate domain $Y$ is a bounded rectangle or half-rectangle and whose chart extends past its artificial edges. Such charts come from restricting a larger chart; the Euclidean boundary of $Y$ has content zero. Put $C_i=\phi(U\cap W_i)$. The boundaries of the bounded $C_i$ lie in $\partial Y$ together with the chart images of $\partial_M W_i$, so $C_i$ are Jordan measurable. The localized coefficient $f$ is bounded, zero near artificial edges, and Riemann integrable, including the genuine face. [F1, F2, step 1.1]

3.1 For that localized coefficient, $f=0$ outside $\bigcup_i\overline C_i$. The disjoint $C_i$ overlap only on null boundaries after closure. Apply finite almost-partition additivity to the pieces $C_i$ and $Y\setminus\bigcup_i C_i$ (whose integral is zero since $f$ vanishes there except on those boundaries). Consequently the signed chart integral is $\sigma_\phi\sum_i\int_{C_i} f$. [F4, step 2.1]

3.2 Fix $i$ and write $g=\phi F_i$ on $A_i=F_i^{-1}(U\cap W_i)\subset D_i$. This is a diffeomorphism onto $C_i$. To justify substitution despite possible singularities at parameter boundary, let $h$ be the coefficient of $F_i^*\omega$ on $D_i$; it extends continuously to the compact $\overline D_i$ and is bounded, say by $B$. Choose a finite union $K\subset D_i$ of grid cubes, with disjoint interiors, covering all but a collar of $\partial D_i$ of arbitrarily small volume. Images of that collar have arbitrarily small chart volume as well: finitely many smooth coordinate extensions have bounded derivatives and are Lipschitz on smaller convex neighborhoods; a cube of side $\delta$ maps into a cube of side at most $c\delta$, so total covering volume increases by at most a fixed factor. Such collars exist because $\partial D_i$ has content zero. [F3, step 1.1, step 2.1]

4.1 On the compact part $K$, the nonzero support of $h$ lies in a compact subset of $A_i$, since the localized form is supported inside $U$. Subdivide or cover this compact part by finitely many cubes compactly contained in $A_i$, splitting overlaps along their faces. On each such compact Jordan piece, the published substitution theorem applies to $g$: it is injective, $C^1$, and has invertible derivative on the surrounding open subset of $A_i$. Pieces where the form vanishes contribute zero. Add these equalities. The omitted integrals on the parameter side are bounded by $B$ times collar volume; on the image side they are bounded by $\sup|f|$ times the image-collar covering volume. Let those bounds tend to zero. This proves $\int_{D_i}h=\sigma_\phi\int_{C_i}f$, with the sign supplied by orientation preservation. [F4, F5, step 3.2]

5.1 Sum over $i$ and then over the finite chart localization. Empty support gives only zero coefficients; for $n=1$ the same collar estimate uses intervals and point boundaries. Degenerate Jacobians at boundary points are harmless because substitution was used only on compact subsets of the diffeomorphism domains. [F2, step 3.1, step 4.1] ∎
