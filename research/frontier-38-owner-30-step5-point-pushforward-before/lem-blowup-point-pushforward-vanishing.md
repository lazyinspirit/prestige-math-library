---
id: lem-blowup-point-pushforward-vanishing
kind: lemma
title: "Pushforward and vanishing for point blowups on a surface"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-affine-point-blowup-pushforward-vanishing
  - lem-blowup-isomorphism-off-center
  - lem-acyclic-direct-image-cohomology-comparison
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
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
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.3 (Quadratic transformations)"
      url: "https://stacks.math.columbia.edu/tag/0AGP"
      locator: "Lemma 54.3.4(1), (2) and (4), applied with n=0; the globalization is proved locally here"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $S$ be a regular surface over a field $k$ (more generally a locally Noetherian scheme of dimension two whose local rings at the center are regular of dimension two) and let $p$ be a closed point with residue field $\kappa(p)$. Let $\pi\colon S'\to S$ be the blowup of $p$ with exceptional curve $E$. Then $\pi_*\mathcal O_{S'}=\mathcal O_S$ and $R^q\pi_*\mathcal O_{S'}=0$ for every $q>0$. Moreover the same conclusions hold after composing finitely many point blowups.

## Facts & Assumptions

**Given:** The Axiom of Choice, a scheme $S$ as in the statement, a closed point $p\in S$ with residue field $\kappa(p)$, the blowup $\pi\colon S'\to S$ of $p$, and its exceptional curve $E$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the cited local computation and its proof are choice-carrying, and no additional choices are made below.

[F1] [[lem-affine-point-blowup-pushforward-vanishing]]: For the affine-local presentation of a point blowup on a surface, the structure-sheaf pushforward is the structure sheaf of the base and all higher direct images of the structure sheaf vanish.



[F3] [[lem-blowup-local-on-base-scheme]]: For an open $U\subseteq S$, $\pi^{-1}(U)$ is canonically the blowup of $U$ at the restricted center.

[F4] [[def-higher-direct-image-sheaf]]: $R^q\pi_*\mathcal F$ is the sheaf associated to $U\mapsto H^q(\pi^{-1}(U),\mathcal F)$; for $q=0$ it is the ordinary pushforward, and a morphism of sheaves is an isomorphism on the base if and only if it is so on an open cover.

[F5] [[lem-blowup-isomorphism-off-center]]: The blowup restricts to an isomorphism away from its center.

[F6] [[lem-acyclic-direct-image-cohomology-comparison]]: If $R^qg_*\mathcal G=0$ for $q>0$, the natural maps $H^n(T,g_*\mathcal G)\to H^n(T\prime,\mathcal G)$ are isomorphisms for every $n$.

[F7] [[thm-qc-sheaf-affine-higher-cohomology-vanishes]]: A quasi-coherent module on an affine scheme has zero higher cohomology.

## Proof

1.1 The calculation is local on the base, by the sheafification description of higher direct images and the locality of the blowup. Near $p$, choose an affine Noetherian neighborhood $\operatorname{Spec}R$. Lift regular parameters of $R_{\mathfrak m_p}$ to functions $x,y$ after inverting denominators not vanishing at $p$. The ideal of $p$ is finite; its quotient by $(x,y)$ has zero stalk at $p$, so shrinking kills this finite module. Likewise the kernels of multiplication by $x$ on $R$ and by $y$ on $R/(x)$ are finite modules with zero stalk at $p$, and another shrinking kills them. Thus $(x,y)$ is a regular sequence generating the point ideal on this affine neighborhood, with nonzero quotient $\kappa(p)$. [F3, F4, given]

2.1 The affine regular-sequence calculation applies on this neighborhood and gives the asserted direct images. On the complement of $p$ the blowup is the identity, with the same direct images. These local results give $\pi_*\mathcal O=\mathcal O$ and $R^q\pi_*\mathcal O=0$ globally. The argument uses only local Noetherianity and the two-dimensional regular local ring at the center. [F1, F3, F4, F5, step 1.1]

3.1 For a finite composition of the point blowups just considered, write it as $f\circ g$, where $g$ is the last step. Assume by induction the conclusions for $f$. For every affine open $V$ in the original base, apply the vanishing-direct-image comparison to $g$ restricted over $f^{-1}(V)$. Step 2.1 makes its higher direct images zero and its degree-zero image the structure sheaf. Hence $H^q(g^{-1}f^{-1}V,\mathcal O)=H^q(f^{-1}V,\mathcal O)$. A second comparison for $f$ over $V$, followed by affine acyclicity, identifies the latter with $\Gamma(V,\mathcal O)$ for $q=0$ and zero for $q>0$. Sheafifying these identifications proves the same direct-image conclusions for the composition, completing the induction. [F4, F6, F7, step 2.1] ∎
