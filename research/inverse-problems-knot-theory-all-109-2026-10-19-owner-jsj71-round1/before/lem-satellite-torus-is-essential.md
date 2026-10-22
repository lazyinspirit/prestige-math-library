---
id: lem-satellite-torus-is-essential
kind: lemma
title: "The companion torus of a nonproduct satellite is essential"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-satellite-pattern-companion-and-winding-number
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-nontrivial-knot-exterior-boundary-incompressible
  - def-axiom-of-choice
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is used only through the nontrivial-knot boundary-incompressibility supplier, whose statement assumes full AC. The Loop Theorem, van Kampen, and amalgam normal form add no axiom assumption here."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, incompressible tori and the proof of Theorem 1.9, printed pp.11–23"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§§1–2 and §4, satellite companions and essential tori"
---

## Statement

Assume full AC. Let $K$ be a nontrivial smooth knot with a specified companion solid torus $V=e(S^1\times D^2)$, let $P\subset\operatorname{int}(S^1\times D^2)$ be a pattern, and assume the outer torus of its pattern exterior $X_P$ has no compressing disk and is not product-parallel to the inner pattern torus. Let $T_c=e(\partial V)\subset E_{P(K)}$ be the companion torus. Then $T_c$ is incompressible and is not boundary-parallel in $E_{P(K)}$; hence it is essential.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K$, a pattern $P$, its pattern exterior $X_P$, and the specified companion embedding $e$ satisfying the hypotheses in the Statement.

[F1] The pattern exterior, satellite exterior, and companion torus are defined by [[def-satellite-pattern-companion-and-winding-number]], and the satellite exterior decomposes as $X_P\cup_{\partial V}E_K$.

[F2] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F3] A nontrivial smooth knot exterior has incompressible boundary under full AC ([[lem-nontrivial-knot-exterior-boundary-incompressible]], Statement).

[F4] If the inclusion of a connected boundary torus into a compact orientable finitely triangulated $3$-manifold is not injective on $\pi_1$, the Loop Theorem supplies a compressing disk ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement); the required finite compatible triangulations exist for these compact smooth manifolds with corners ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement).

[F5] Van Kampen identifies the group of a union along a connected torus with a pushout ([[thm-seifert-van-kampen]], Statement), and the normal form theorem embeds the common group when both side maps are injective ([[thm-normal-form-for-free-products-with-amalgamation]], Statement).

[F6] [[def-incompressibility-seifert-fibration-and-jsj-system]] defines incompressibility, boundary-parallelity, and essentiality for tori.

## Proof

1.1 Write $X=X_P$ and $Y=E_K$. By hypothesis, $\partial V\subset\partial X$ has no compressing disk; [F3] gives no compressing disk for $\partial Y=\partial E_K$. Each inclusion of the common torus into $X$ and $Y$ is therefore injective on $\pi_1$: otherwise [F4] would give a compressing disk on that side. The collar neighbourhoods of $X$ and $Y$ form an open cover of their union whose overlap deformation-retracts to the common torus. [F1, F2, F3, F4, given, construct]

1.2 Apply [F5] to this open cover. The two injective side maps and the amalgam normal form imply that $\pi_1(\partial V)$ injects into $\pi_1(E_{P(K)})$. If a compressing disk for $T_c$ existed, its boundary would be an essential loop on the torus that is nullhomotopic in $E_{P(K)}$, contradicting this injection. Thus $T_c$ is incompressible. [F1, F4, F5, step 1.1, given, construct]

2.1 The boundary of $E_{P(K)}$ is the inner pattern torus. If $T_c$ were boundary-parallel, the product region between it and that boundary would be the region of the satellite exterior inside the companion solid torus, namely $X_P$. This would make $X_P$ product-parallel to its two boundary tori, contrary to hypothesis. Therefore $T_c$ is not boundary-parallel. Since it is an interior incompressible torus and boundary-incompressibility is vacuous for a closed surface, [F6] makes it essential. [F1, F6, step 1.2, given, construct] ∎
