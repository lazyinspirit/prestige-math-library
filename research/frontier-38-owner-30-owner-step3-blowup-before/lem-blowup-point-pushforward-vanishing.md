---
id: lem-blowup-point-pushforward-vanishing
kind: lemma
title: "Pushforward and vanishing for point blowups on a surface"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-affine-point-blowup-pushforward-vanishing
  - thm-blowup-regular-surface-closed-point-regular
  - lem-blowup-local-on-base-scheme
  - def-higher-direct-image-sheaf
  - lem-higher-direct-image-affine-localization
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3.11 and Exercise 19.4.K: cohomology of the structure sheaf of a blowup, pp. 387-394"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.11 and the local cohomology computations for blowups"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $S$ be a regular surface over a field $k$ (more generally a locally Noetherian scheme of dimension two whose local rings at the center are regular of dimension two) and let $p$ be a closed point with residue field $\kappa(p)$. Let $\pi\colon S'\to S$ be the blowup of $p$ with exceptional curve $E$. Then $\pi_*\mathcal O_{S'}=\mathcal O_S$ and $R^q\pi_*\mathcal O_{S'}=0$ for every $q>0$. Moreover the same conclusions hold after composing finitely many point blowups.

## Facts & Assumptions

**Given:** The Axiom of Choice, a scheme $S$ as in the statement, a closed point $p\in S$ with residue field $\kappa(p)$, the blowup $\pi\colon S'\to S$ of $p$, and its exceptional curve $E$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited local computation and its proof are choice-carrying, and no additional choices are made below.

[F1] [[lem-affine-point-blowup-pushforward-vanishing]]: For the affine-local presentation of a point blowup on a surface, the structure-sheaf pushforward is the structure sheaf of the base and all higher direct images of the structure sheaf vanish.

[F2] [[lem-higher-direct-image-affine-localization]]: Higher direct images are local on the base: for an open $U\subseteq S$, $(R^q\pi_*\mathcal F)|_U\cong R^q(\pi|_{\pi^{-1}(U)})_*(\mathcal F|_{\pi^{-1}(U)})$, compatibly with the structure morphisms.

[F3] [[lem-blowup-local-on-base-scheme]]: For an open $U\subseteq S$, $\pi^{-1}(U)$ is canonically the blowup of $U$ at the restricted center.

[F4] [[def-higher-direct-image-sheaf]]: $R^q\pi_*\mathcal F$ is the sheaf associated to $U\mapsto H^q(\pi^{-1}(U),\mathcal F)$; for $q=0$ it is the ordinary pushforward, and a morphism of sheaves is an isomorphism on the base if and only if it is so on an open cover.

[F5] [[thm-blowup-regular-surface-closed-point-regular]]: The blowup of a regular surface at a closed point is regular of pure dimension two, and its exceptional curve is an effective Cartier divisor with the stated local chart description.

## Proof

1.1 The assertion is local on $S$: by [F2] and [F3], over an open $U\subseteq S$ the restrictions of $\pi_*\mathcal O_{S'}$ and of $R^q\pi_*\mathcal O_{S'}$ are the corresponding pushforwards of the structure sheaf of the blowup of $U$ at its center, and by [F4] it suffices to prove the statement on an affine open cover of $S$. [F2, F3, F4, given]

2.1 Let $U=\operatorname{Spec}A\subseteq S$ be an affine open containing $p$, with $p$ corresponding to the maximal ideal $\mathfrak m$ and regular parameters $x,y\in\mathfrak m$; by [F1] the blowup of $U$ at $p$ has $\pi_*\mathcal O=\mathcal O_U$ and $R^q\pi_*\mathcal O=0$ for $q>0$ over this chart, and the description of the charts is the one of [F5]. Varying the affine open $U$ and gluing by [F2] proves $\pi_*\mathcal O_{S'}=\mathcal O_S$ and $R^q\pi_*\mathcal O_{S'}=0$ for all $q>0$. [F1, F2, F5, step 1.1]

3.1 For a composite of finitely many point blowups, write $\pi=\pi_1\circ\pi_2$ where $\pi_2$ is the last blowup and $\pi_1$ the composite of the earlier ones; by induction $\pi_{1*}\mathcal O=\mathcal O$ and $R^a\pi_{1*}\mathcal O=0$ for $a>0$, and by the single-blowup case $\pi_{2*}\mathcal O=\mathcal O$ and $R^b\pi_{2*}\mathcal O=0$ for $b>0$. The Leray spectral sequence for the composite has $E_2^{a,b}=R^a\pi_{1*}(R^b\pi_{2*}\mathcal O)$, which vanishes unless $a=b=0$, where it is $\mathcal O_S$; hence it degenerates and gives $\pi_*\mathcal O_{S'}=\mathcal O_S$ and $R^q\pi_*\mathcal O_{S'}=0$ for $q>0$. Induction on the number of blowups completes the proof. [F4, step 2.1] ∎
