---
id: lem-proper-local-on-base
kind: lemma
title: Properness is local on the target
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - lem-finite-type-local-on-source-and-target
  - lem-base-change-quasi-compact-morphisms
  - lem-base-change-composition
  - def-universally-closed-morphism
  - lem-closed-immersion-local-on-target
  - lem-diagonal-base-change-identification
  - def-separated-morphism-schemes
  - def-scheme
  - def-affine-scheme-spectrum
  - lem-spectrum-localization-open-immersion
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
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.42.3 (tag 01W2)"
      url: https://stacks.math.columbia.edu/tag/01W2
---

## Statement

Let $f:X\to S$ be a morphism of schemes, and let $S=\bigcup_{i\in I}S_i$ be
an open cover. Write $X_i=f^{-1}(S_i)$ and let $f_i:X_i\to S_i$ be the
restriction. Then $f$ is proper if and only if every $f_i$ is proper. The
cover may be empty when $S=\varnothing$.

## Facts & Assumptions

**Given:** The morphism $f$, an open cover of its target, and the restricted
morphisms $f_i$.

[F1] A morphism of schemes $f:X\to S$ is proper if and only if it is
separated, of finite type, and universally closed. ([[def-proper-morphism]])

[F2] A morphism is of finite type exactly when it is locally of finite type
and quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F3] Quasi-compactness can be checked on an affine open cover of the target,
and is preserved by arbitrary base change.
([[lem-base-change-quasi-compact-morphisms]])

[F4] Universal closedness means that after every base change $T\to S$, the
map $X\times_S T\to T$ takes closed subsets to closed subsets.
([[def-universally-closed-morphism]])

[F5] A morphism is separated exactly when its diagonal is a closed
immersion. ([[def-separated-morphism-schemes]])

[F6] A morphism is a closed immersion if and only if its restriction over
each member of an open target cover is a closed immersion.
([[lem-closed-immersion-local-on-target]])

[F7] Under the canonical identification of the two fibre products, the
diagonal after base change is the base change of the original diagonal.
([[lem-diagonal-base-change-identification]])

[F8] Iterated base changes are canonically isomorphic, compatibly with the
induced morphisms. ([[lem-base-change-composition]])

[F9] Locally finite type is affine-local on source and target.
([[lem-finite-type-local-on-source-and-target]])

[F10] Every point of a scheme has an affine open neighbourhood.
([[def-scheme]])

[F11] Distinguished opens $D(a)$ form the basic opens of an affine spectrum.
([[def-affine-scheme-spectrum]])

[F12] For $a$ in a ring $A$, the open $D(a)\subseteq\operatorname{Spec}A$
is the affine scheme $\operatorname{Spec}A_a$.
([[lem-spectrum-localization-open-immersion]])

## Proof

**Proof technique:** direct.

1.1 Suppose $f$ is proper and fix $i$. By [F1], $f$ is separated, so [F5] makes $\Delta_{X/S}$ a closed immersion. The opens $(X\times_S X)\times_S S_i$ cover $X\times_S X$; [F6] makes each restriction a closed immersion, and [F7] identifies it with $\Delta_{X_i/S_i}$. Thus $f_i$ is separated. [F1, F5, F6, F7]

1.2 Properness of $f$ gives finite type, hence local finite type and quasi-compactness by [F2]. For a point of $X_i$, refine a local finite-type affine chart on the source and target to affine opens contained in $X_i$ and $S_i$: first take a principal target neighbourhood inside the target chart and $S_i$, then a principal source neighbourhood inside its inverse image. The localized ring map remains of finite type by [F9] and the affine-open basis [F10, F11, F12]. The base-change assertion in [F3] makes $f_i$ quasi-compact, so [F2] makes it finite type. [F1, F2, F3, F9, F10, F11, F12]

1.3 For any $T\to S_i$, regard $T$ as an $S$-scheme by composition. By [F8], the base change of $f_i$ to $T$ is canonically the base change of $f$ to $T$. Universal closedness of $f$ therefore makes the base change of $f_i$ closed, so $f_i$ is universally closed. [F1, F4, F8]

1.4 Now suppose every $f_i$ is proper. By [F1] each is finite type, so the local finite-type charts over the cover $X=\bigcup_iX_i$ show that $f$ is locally of finite type. For quasi-compactness, take all affine open subschemes $V\subseteq S_i$ for all $i$. They cover $S$: given $s\in S_i$, an affine neighbourhood $U=\operatorname{Spec}A$ exists by [F10]; the open $U\cap S_i$ contains $s$, so [F11] gives a principal open $D(a)$ with $s\in D(a)\subseteq U\cap S_i$, and [F12] makes it affine. For each such $V\subseteq S_i$, $f^{-1}(V)\to V$ is a base change of the quasi-compact map $f_i$, hence quasi-compact by [F3]. The affine-cover criterion in [F3] shows that $f$ is quasi-compact, so [F2] makes it finite type. The cover consists of all qualifying affine opens; no simultaneous choices are made. [F1, F2, F3, F9, F10, F11, F12]

1.5 By [F1], each $f_i$ is separated, so each $\Delta_{X_i/S_i}$ is a closed immersion by [F5]. The opens $(X\times_S X)\times_S S_i$ cover $X\times_S X$, and [F7] identifies the restriction of $\Delta_{X/S}$ to each with $\Delta_{X_i/S_i}$. By [F6], $\Delta_{X/S}$ is a closed immersion, so $f$ is separated. [F1, F5, F6, F7]

1.6 Fix any $T\to S$ and closed $C\subseteq X\times_S T$. The opens $T_i=T\times_S S_i$ cover $T$. By [F8], the restriction of $X\times_S T$ over $T_i$ is canonically $X_i\times_{S_i}T_i$. By [F1], $f_i$ is universally closed, so the image of the restricted closed subset is closed in $T_i$; this image is exactly $f_T(C)\cap T_i$. A subset whose intersections with an open cover are closed is closed. Thus $X\times_S T\to T$ is closed. Since $T$ and $C$ were arbitrary, $f$ is universally closed by [F4]. [F1, F4, F8]

2.1 Steps 1.4, 1.5, and 1.6 give finite type, separatedness, and universal closedness for $f$, so [F1] makes $f$ proper. Steps 1.1–1.3 prove the other direction. If $X=\varnothing$, every restriction is empty and proper; if $S=\varnothing$, then also $X=\varnothing$ and the cover may be empty. For a one-member cover $\{S\}$ the restriction is $f$ itself. Empty cover members and affine charts with coordinate ring $0$ add no points. [F1, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6] ∎
