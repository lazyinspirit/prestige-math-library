---
id: lem-blowup-point-pushforward-vanishing
kind: lemma
title: "Pushforward and vanishing for point blowups on a surface"
status: published
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
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-blowup-effective-cartier-divisor-isomorphism
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
      locator: "Theorem 19.3.2 and its proof in 19.3.3: Rees-Proj background, pp. 386-387; the structure-sheaf cohomology computation is proved locally here"
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.3 (Quadratic transformations)"
      url: "https://stacks.math.columbia.edu/tag/0AGP"
      locator: "Lemma 54.3.4(1), (2) and (4), applied with n=0; the globalization is proved locally here"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
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

[F8] [[thm-one-dimensional-regular-local-rings-are-dvrs]] and [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A regular local ring is a domain, and in dimension one it is a DVR with principal maximal ideal.

[F9] [[thm-blowup-effective-cartier-divisor-isomorphism]]: The blowup of an effective Cartier center is the identity.

## Proof

1.1 The calculation is local on the base, by the sheafification description of higher direct images and the locality of the blowup. In the regular-surface alternative, the local dimension at a closed point is positive: if it were zero, the regular local domain would be a field and the closed point would also be the generic point of its ambient irreducible component, forcing that component to be a point, contrary to the pure dimension two convention for a surface. If its dimension is one, its maximal ideal has a regular generator by [F8]. Lift this generator to an affine Noetherian neighborhood; shrinking kills the finite quotient of the point ideal by that generator and the finite kernel of multiplication by it, just as below. The point center is then effective Cartier on that neighborhood, so its blowup is the identity there by [F9], and it is also the identity off the center by [F5]. Thus the asserted pushforward and vanishing follow in this case. The more general alternative in the statement already assumes local dimension two at the center. It remains to treat local dimension two. Near $p$, choose an affine Noetherian neighborhood $\operatorname{Spec}R$. Lift regular parameters of $R_{\mathfrak m_p}$ to functions $x,y$ after inverting denominators not vanishing at $p$. The ideal of $p$ is finite; its quotient by $(x,y)$ has zero stalk at $p$, so shrinking kills this finite module. Likewise the kernels of multiplication by $x$ on $R$ and by $y$ on $R/(x)$ are finite modules with zero stalk at $p$, and another shrinking kills them. Thus $(x,y)$ is a regular sequence generating the point ideal on this affine neighborhood, with nonzero quotient $\kappa(p)$. [F3, F4, F5, F8, F9, given]

2.1 The affine regular-sequence calculation applies on this neighborhood and gives the asserted direct images. On the complement of $p$ the blowup is the identity, with the same direct images. These local results give $\pi_*\mathcal O=\mathcal O$ and $R^q\pi_*\mathcal O=0$ globally. The argument uses only local Noetherianity and the two-dimensional regular local ring at the center. [F1, F3, F4, F5, step 1.1]

3.1 For a finite composition of the point blowups just considered, write it as $f\circ g$, where $g$ is the last step. Assume by induction the conclusions for $f$. For every affine open $V$ in the original base, apply the vanishing-direct-image comparison to $g$ restricted over $f^{-1}(V)$. Step 2.1 makes its higher direct images zero and its degree-zero image the structure sheaf. Hence $H^q(g^{-1}f^{-1}V,\mathcal O)=H^q(f^{-1}V,\mathcal O)$. A second comparison for $f$ over $V$, followed by affine acyclicity, identifies the latter with $\Gamma(V,\mathcal O)$ for $q=0$ and zero for $q>0$. Sheafifying these identifications proves the same direct-image conclusions for the composition, completing the induction. [F4, F6, F7, step 2.1] ∎
