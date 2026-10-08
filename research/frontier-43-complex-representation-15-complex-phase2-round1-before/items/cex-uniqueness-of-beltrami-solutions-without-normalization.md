---
id: cex-uniqueness-of-beltrami-solutions-without-normalization
kind: counterexample
title: "Uniqueness of Beltrami solutions fails without the three-point normalization"
status: draft
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-solution-beltrami-equation
  - thm-measurable-riemann-mapping-sphere
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-acl-sobolev-quasiconformal-homeomorphism
  - thm-one-quasiconformal-is-conformal
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - def-riemann-sphere-holomorphic-charts
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 12
axiom_use: >-
  Assume AC for the analytic quasiconformal and measurable Riemann mapping
  interfaces; AC implies Countable Choice for the measurable and weak-solution
  definitions. The explicit maps and their distinctness require no choice; the
  general Möbius classification uses the global theorem.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14, printed p. 195: solutions are unique only up to postcomposition with a Möbius automorphism, with uniqueness after fixing three points; read in full."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §2, printed p. 88, Theorem 2.11: the measurable mapping theorem and normalization ambiguity; contextual only, since the printed dilatation constant has the sign error (k+1)/(k−1) and its proof invokes an unresolved Theorem ??."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. It implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

**Statement refuted.** For a fixed Beltrami coefficient $\mu$ on the sphere, the equation $f_{\bar z}=\mu f_z$ has at most one quasiconformal homeomorphic solution $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ ([[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]], [[def-acl-sobolev-quasiconformal-homeomorphism]]).

**Counterexample.** Set $\mu\equiv0$. The identity $f_1(z)=z$ and inversion $f_2(z)=1/z$ on the sphere are distinct Möbius transformations ([[def-mobius-transformation]]), hence biholomorphisms ([[thm-mobius-transformations-biholomorphic-sphere]]). They are $1$-quasiconformal with Beltrami coefficient zero ([[thm-one-quasiconformal-is-conformal]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]]) and solve $f_{\bar z}=0$ weakly ([[def-weak-solution-beltrami-equation]]). Thus the same coefficient has at least two quasiconformal solutions without normalization.

More generally, the measurable Riemann mapping theorem says that for a fixed coefficient all solutions are the Möbius postcompositions of one solution, and exactly one solution remains after fixing three distinct image points ([[thm-measurable-riemann-mapping-sphere]]).

## Facts & Assumptions

**Given:** AC; the sphere coefficient $\mu\equiv0$; and the two sphere maps $f_1(z)=z$ and $f_2(z)=1/z$.

[F1] AC implies Countable Choice, required by the measurable-coefficient and weak-solution interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F2] The zero class has essential norm $0<1$, so it is a Beltrami coefficient on the sphere ([[def-measurable-beltrami-coefficient]]).

[F3] The identity and inversion are Möbius transformations; every Möbius transformation is a biholomorphism in the standard sphere charts ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-riemann-sphere-holomorphic-charts]]).

[F4] In source and target chart domains, a biholomorphic map is a $1$-quasiconformal homeomorphism with zero Beltrami coefficient; applying this chartwise shows the Möbius sphere maps are quasiconformal with coefficient zero ([[thm-one-quasiconformal-is-conformal]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[def-riemann-sphere-holomorphic-charts]]). These in-run suppliers remain provisional because the one-quasiconformal theorem's geometric/analytic equivalence input is open.

[F5] The weak-solution condition on the sphere is chart-independent; a holomorphic chart expression satisfies $f_{\bar z}=0$ ([[def-weak-solution-beltrami-equation]]).

[F6] Under AC the normalized measurable Riemann mapping theorem identifies all solutions for one coefficient as Möbius postcompositions and gives uniqueness after fixing three points ([[thm-measurable-riemann-mapping-sphere]]). This in-run supplier remains provisional while its proof is unfinished.

## Proof

**Proof technique:** exhibit two distinct normalized-free solutions for the zero coefficient.

1.1 By [F2], $\mu\equiv0$ is an admissible sphere coefficient. By [F3], $f_1(z)=z$ and $f_2(z)=1/z$ are biholomorphic sphere maps. By [F4], both are $1$-quasiconformal and have Beltrami coefficient $0$; [F5] makes each a weak solution of $f_{\bar z}=0$. [F1, F2, F3, F4, F5, given]

2.1 The two maps are distinct, since $f_1(2)=2$ while $f_2(2)=1/2$. Thus the refuted uniqueness statement fails for $\mu=0$. The general Möbius ambiguity and three-point uniqueness stated above are exactly the conclusions of [F6]. [F6, given] ∎

## Source notes

Lyubich, Ch. 2 §14, printed p. 195, was read in full; it states uniqueness only up to Möbius postcomposition and exact uniqueness after fixing three points. Bishop, Ch. 3 §2, printed p. 88, Theorem 2.11, was also read in full but is context only: its printed $K=(k+1)/(k-1)$ is negative for $0\le k<1$, and the proof invokes an unresolved “Theorem ??” for coefficient convergence. The counterexample itself is verified directly from the sphere charts and quasiconformal definitions.

## Audit note

The explicit counterexample in Proofs 1.1–2.1 is direct. Its analytic quasiconformal/coefficient identification provisionally uses `def-acl-sobolev-quasiconformal-homeomorphism`, `def-beltrami-coefficient-and-maximal-dilatation`, and `thm-one-quasiconformal-is-conformal` in Proof 1.1; those batch-12 suppliers remain open. The final general classification uses `thm-measurable-riemann-mapping-sphere` in Proof 2.1; that same-pair supplier is unfinished. Keep this original ID escalated until these exact uses and suppliers are reconciled.
