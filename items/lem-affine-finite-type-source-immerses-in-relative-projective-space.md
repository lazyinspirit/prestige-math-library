---
id: lem-affine-finite-type-source-immerses-in-relative-projective-space
kind: lemma
title: Affine finite-type source immerses into relative projective space
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-locally-finite-type-and-finite-type-morphism
  - def-affine-open-subscheme
  - lem-distinguished-open-refinement-at-a-point
  - lem-finite-type-local-on-source-and-target
  - thm-line-bundle-sections-define-projective-map
  - def-relative-projective-space-standard-charts
  - thm-affine-closed-immersions-quotient-rings
  - lem-closed-immersion-local-on-target
  - def-locally-closed-immersion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.40.3 (Tag 01VS), affine-source case"
      url: "https://stacks.math.columbia.edu/tag/01VS"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $S$ be a scheme and let
$f:U\to S$ be a locally finite-type morphism with $U$ affine. Then there are
$N\ge0$ and an $S$-immersion $j:U\to\mathbb P^N_S$. The assertion includes
$U=\varnothing$. No separatedness or Noetherian hypothesis on $S$ is needed.

## Facts & Assumptions

**Given:** The Axiom of Choice, a scheme $S$, an affine scheme $U=\operatorname{Spec}B$, and a locally finite-type morphism $f:U\to S$.

[F1] Every point of an affine scheme has a distinguished-open neighbourhood inside any prescribed open neighbourhood, and an affine scheme is quasi-compact. ([[lem-distinguished-open-refinement-at-a-point]], [[def-affine-open-subscheme]])

[F2] If $D(a)=\operatorname{Spec}B_a\subseteq U$ maps into an affine open $V=\operatorname{Spec}R\subseteq S$ and $f$ is locally finite type, then $R\to B_a$ is a finite-type ring map: locally finite type is affine-local on source and target, and the affine source is quasi-compact. ([[lem-finite-type-local-on-source-and-target]], [[def-locally-finite-type-and-finite-type-morphism]])

[F3] Under AC, global sections $s_0,\ldots,s_N$ generating an invertible sheaf $L$ on an $S$-scheme $U$ define a unique $S$-map $j:U\to\mathbb P^N_S$. Its inverse image of the standard chart $D_+(T_i)$ is the nonvanishing open of $s_i$, and on it $T_k/T_i$ pulls back to $s_k/s_i$. ([[thm-line-bundle-sections-define-projective-map]], [[def-axiom-of-choice]])

[F4] Over an affine base open $V=\operatorname{Spec}R$, the standard chart $D_+(T_i)$ of $\mathbb P^N_V$ is $\operatorname{Spec}R[T_k/T_i:k\ne i]$. A surjection of coordinate rings defines a closed immersion of affine schemes. ([[def-relative-projective-space-standard-charts]], [[thm-affine-closed-immersions-quotient-rings]])

[F5] A morphism is a closed immersion if its restrictions over an open cover of its target are closed immersions. Composing a closed immersion into an open subscheme with that open immersion gives an immersion. ([[lem-closed-immersion-local-on-target]], [[def-locally-closed-immersion]])

## Proof

**Proof technique:** direct: use finitely many principal source opens over affine base opens, clear denominators in their coordinate generators, and obtain closed immersions on the corresponding projective charts.

1.1 If $U=\varnothing$, take $N=0$ and the unique empty immersion into $\mathbb P^0_S$. Suppose $U\ne\varnothing$. For each $u\in U$ choose an affine open $V_u\subseteq S$ containing $f(u)$ and then a distinguished open $D(a_u)\subseteq U$ with $u\in D(a_u)\subseteq f^{-1}(V_u)$ by [F1]. Quasi-compactness gives finitely many pairs $(a_i,V_i)$, $1\le i\le m$, with $U=\bigcup_iD(a_i)$, so $(a_1,\ldots,a_m)=B$. [F1, given]

2.1 Write $V_i=\operatorname{Spec}R_i$. By [F2], $R_i\to B_{a_i}$ is finite type. Choose finitely many generators of $B_{a_i}$ as an $R_i$-algebra and write them as $b_{ij}/a_i^{e_{ij}}$, with $b_{ij}\in B$ and $e_{ij}\ge0$; an empty generator list is allowed. Choose $d\ge1$ exceeding every exponent $e_{ij}$, and define $s_i=a_i^d$ and $t_{ij}=b_{ij}a_i^{d-e_{ij}}$ in $B=\Gamma(U,\mathcal O_U)$. [F2, step 1.1, algebra]

3.1 The sections $s_i$ and $t_{ij}$ of the trivial line bundle $\mathcal O_U$ generate it: the nonvanishing opens $D(s_i)=D(a_i)$ cover $U$ by step 1.1. By [F3] they give an $S$-morphism $j:U\to\mathbb P^N_S$, where $N=m+\sum_i r_i-1\ge0$ and $r_i$ is the number of $t_{ij}$. On $D(a_i)$ the projective coordinate ratios for $t_{ij}$ are $t_{ij}/s_i=b_{ij}/a_i^{e_{ij}}$. [F3, step 1.1, step 2.1]

4.1 Let $W_i=D_+(T_i)\cap\mathbb P^N_{V_i}$, with $T_i$ the coordinate for $s_i$. By [F3], $j^{-1}(W_i)=D(a_i)$: $j^{-1}D_+(T_i)=D(s_i)=D(a_i)$, and this open maps into $V_i$ by step 1.1. Both $W_i$ and $D(a_i)$ are affine by [F4], and the coordinate map $\mathcal O(W_i)=R_i[T_k/T_i:k\ne i]\to B_{a_i}$ is surjective because the ratios $t_{ij}/s_i$ are the chosen $R_i$-algebra generators from step 2.1. Hence $D(a_i)\to W_i$ is a closed immersion. [F3, F4, step 1.1, step 2.1, step 3.1]

5.1 The opens $W_i$ cover the image $j(U)$ because their inverse images $D(a_i)$ cover $U$. Put $W=\bigcup_iW_i\subseteq\mathbb P^N_S$. By [F5], the restrictions of $j:U\to W$ over the cover $W_i$ make it a closed immersion. Its composite with $W\hookrightarrow\mathbb P^N_S$ is therefore an immersion. The empty case was handled in step 1.1, and AC permits the pointwise affine-neighbourhood choices in 1.1 and is also inherited through the projective-map construction [F3]. [F3, F5, step 1.1, step 4.1] ∎
