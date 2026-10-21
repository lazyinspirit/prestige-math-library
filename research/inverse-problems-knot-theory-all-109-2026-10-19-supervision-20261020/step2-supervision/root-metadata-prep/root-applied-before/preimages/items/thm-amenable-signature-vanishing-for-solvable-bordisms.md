---
id: thm-amenable-signature-vanishing-for-solvable-bordisms
kind: theorem
title: "Amenable-signature vanishing for integral solvable bordisms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-integral-half-solutions-strebel-and-l2-signatures
  - lem-amenable-D-R-l2-dimension-estimate
  - lem-l2-rho-invariant-bordism-independence
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Jae Choon Cha, “Amenable L²-Theoretic Methods and Knot Concordance”"
      url: "https://arxiv.org/pdf/1010.1058"
      locator: "Theorem 3.2 and proof, with Theorem 2.2 and Lemmas 3.8–3.14"
---

## Statement

Assume full AC. Let K be a knot and W an integral (n+1/2)-solution for M(K). Let R be Q or F_p, let G be an amenable group in Strebel's class D(R) with G^(n+1)={e}, and let φ:π₁(M(K))→G extend over W. Assume φ sends a meridian of K to an infinite-order element of G. Then the rho invariant ρ(M(K),φ) vanishes.

## Statement references

[Cha, Theorem 3.2 and complete proof](https://arxiv.org/pdf/1010.1058)

## Facts & Assumptions

**Given:** The data of the Statement, interpreted with the full AC and smooth solution convention of its coefficient Definition. In particular $W$ is an actual compact connected oriented smooth four-manifold with boundary $M(K)$, and $n\ge0$.

[A1] Full AC, the integral solution convention and its equivariant intersection forms are fixed in the Definition. [[def-integral-half-solutions-strebel-and-l2-signatures]], [[def-axiom-of-choice]]

[F1] An integral $(n+1/2)$-solution has $H_1(M(K);\mathbb Z)\cong H_1(W;\mathbb Z)=\mathbb Z[\mu]$, $H_2(W;\mathbb Z)=\mathbb Z^{2r}$, height-$n$ isotropic classes with unit duals, and isotropic height-$(n+1)$ lifts of the former. [[def-integral-half-solutions-strebel-and-l2-signatures]]

[F2] Actual compact collared four-manifolds with these supplied lifted half-pairs have ordinary and $L^2$ signatures zero for amenable $G\in D(R)$, $R=\mathbb Q$ or $\mathbb F_p$, $G^{(n+1)}=1$, and infinite-order meridian image. Its proof includes finite-projective transfer, the boundary dimension calculation, the lifted-cycle span estimate, and arbitrary-group induction; it requires no rho independence premise. [[thm-topological-lifted-half-pairs-force-amenable-signature-defect-zero]]

[F3] For smooth bounds the signature defect is independent of the bound, extending map and injective target enlargement; it therefore defines the rho invariant in the coefficient Definition. [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]], [[def-integral-half-solutions-strebel-and-l2-signatures]]

## Proof

1.1 The supplied extending coefficient map $\psi:\pi_1W\to G$ satisfies $\psi((\pi_1W)^{(n+1)})\subset G^{(n+1)}=1$, by induction on commutators. Hence it factors through the height-$(n+1)$ quotient carrying the isotropic lifted classes in [F1]. The actual smooth $W$ has its smooth boundary collar and is in particular an admissible collared topological manifold for [F2]. Its integral homology, finite pair lists and unit dual pairings are exactly [F1]; its meridian has infinite image by the Statement. Thus every hypothesis of [F2], including $n=0$ and $R=\mathbb F_2$ when applicable, is satisfied by this same $W$ and extending map. [A1, F1, F2, given, construct, algebra]

2.1 Applying [F2] gives $\operatorname{sign}^{(2)}_G(W,\psi)=0=\operatorname{sign}(W)$. This invokes its actual weak-exactness and finite-projective calculation: no closed range, finite CW type of a TOP manifold, or lift of the height-$n$ dual classes to the height-$(n+1)$ coefficient system is inferred. The latter calculation uses only the lifted isotropic classes and their ordinary unit duals, precisely the supplied data checked in step 1.1. [F1, F2, step 1.1, algebra]

3.1 Since this very bound is smooth, [F3] identifies its actual defect with $\rho(M(K),\phi)$ under the Definition's smooth bounding convention. Therefore $\rho(M(K),\phi)=\operatorname{sign}^{(2)}_G(W,\psi)-\operatorname{sign}(W)=0$. The proof covers arbitrary target groups by [F2]'s same-image induction and [F3]'s target-enlargement independence. No comparison with a nonsmooth TOP bound or an analytic eta definition is required for this original smooth-solution Statement. [F2, F3, step 1.1, step 2.1, algebra] ∎
