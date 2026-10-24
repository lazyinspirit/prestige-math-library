---
id: "thm-smooth-and-continuous-real-singular-cohomology-agree"
kind: "theorem"
title: "Smooth and continuous real singular cohomology agree"
deps: ["thm-mayer-vietoris-sequence-in-real-singular-cohomology", "thm-naturality-of-singular-mayer-vietoris-connectors", "thm-smooth-singular-mayer-vietoris-sequence", "def-restriction-from-continuous-to-smooth-singular-cochains", "prop-smooth-continuous-singular-cohomology-comparison-is-an-isomorphism-on-convex-coordinate-domains", "lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions", "thm-countable-mayer-vietoris-open-set-principle", "def-countable-choice", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 23; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: published
origin: "pipeline"
proof_strategy: "direct"
verification:
  audited: 2026-09-12
---

## Statement

Assume $\mathrm{AC}_\omega$. For every smooth manifold $M$, possibly with boundary, restriction induces a natural isomorphism $H^k_{\mathrm{sing}}(M;\mathbb R)\cong H^k_\infty(M;\mathbb R)$ in every integer degree. Naturality is for smooth maps.

## Facts & Assumptions

**Given:** The manifold and the restriction comparison.

[F1] Ordinary and smooth Mayer–Vietoris use restriction, the $V-U$ difference, and positive lift-differential connectors ([[thm-mayer-vietoris-sequence-in-real-singular-cohomology]], [[thm-smooth-singular-mayer-vietoris-sequence]]).

[F2] Restriction is a natural cochain map ([[def-restriction-from-continuous-to-smooth-singular-cochains]]).

[F3] Restriction is an isomorphism on convex coordinate domains, including relatively open half-space domains ([[prop-smooth-continuous-singular-cohomology-comparison-is-an-isomorphism-on-convex-coordinate-domains]]).

[F4] Countable disjoint-union product maps commute with restriction under countable choice ([[lem-de-rham-and-singular-cohomology-respect-countable-disjoint-unions]]).

[F5] The countable open-set principle applies also to boundary manifolds with the half-box local hypothesis ([[thm-countable-mayer-vietoris-open-set-principle]]).

[A1] Assume [[def-countable-choice]], the countable instance of [[def-axiom-of-choice]].

## Proof

1.1 For an ordered open cover $M=U\cup V$, restriction to smooth simplices gives a diagram from the ordinary short exact small-dual row to the smooth row. Every arrow commutes: restrictions and the $V-U$ difference evaluate the same cochain on the same smooth simplex, and signed coboundaries use the same faces. If an ordinary overlap cocycle $c$ is lifted to $e$ with $\delta e=a(d)$, its smooth restriction is a lift of the smooth restriction of $c$, and its differential is the smooth restriction of $a(d)$. Thus the two small-dual lift-differential connectors commute. The squares with actual small-chain inclusions also commute on every smooth small simplex. Their cohomology maps are isomorphisms by [F1], so transporting connectors through their inverses preserves the square. All arrows in the two Mayer–Vietoris sequences therefore commute with restriction. [given, F1, F2]

1.2 By [F4] the countable product interface and its comparison square hold under [A1]. The empty manifold has zero chain complexes and zero cohomology on both sides, so its comparison is an isomorphism. Every rational open box and rational half-box is convex; [F3] gives the local comparison isomorphisms, including the zero-dimensional point. Both functors are invariant under diffeomorphisms by functoriality, since the pullbacks of inverse maps are inverse. [F2, F3, F4, A1]

2.1 All hypotheses of [F5] are now supplied by steps 1.1 and 1.2. Apply its boundaryless version to obtain the claimed isomorphism there and its half-box version to obtain it for manifolds with boundary. Naturality is the already defined square [F2], without any choices of smoothing or inverses on cochains. [F2, F5, step 1.1, step 1.2]

3.1 Negative degrees have zero groups; in degree zero the same initial Mayer–Vietoris segments apply. Empty opens and overlaps were included in [F1]. On a point the restriction complex map is identity. Degenerate simplices are retained in both complexes and their common face equations. Countable choice is used only through the product and exhaustion/globalization arguments; no arbitrary vector-space dual exactness, full AC, or prescribed-face smoothing into a boundary target is used. [F1, F2, F4, F5, A1, step 2.1] ∎
