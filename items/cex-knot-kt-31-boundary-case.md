---
id: cex-knot-kt-31-boundary-case
kind: counterexample
title: "Forgetting framing identifies distinct skein classes"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-kauffman-bracket-skein-module-of-a-three-manifold
  - lem-skein-module-isomorphism-respects-framings-and-boundary
  - thm-skein-module-of-s-three-is-rank-one
  - thm-skein-module-of-solid-torus-has-core-multicurve-basis
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC for the solid-torus basis and its countable consequence for the S3 basis."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Józef H. Przytycki, Fundamentals of Kauffman Bracket Skein Modules, arXiv:math/9809113 (1998), §2, framing relation and Theorem 2.3(a)"
      url: "https://arxiv.org/pdf/math/9809113"
    - title: "Sean Pohorence, 3-manifold Invariants and TQFTs (January 2016), §3.1, pp. 11–12"
      url: "https://categorified.net/RTinvariants/Jan29-Feb3.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Assume the Axiom of Choice and let $R=\mathbb Z[A^{\pm1}]$. The
assertion that the Kauffman bracket skein module can be formed from unframed
link-isotopy classes without changing its classes is false. In $S^3$, a
zero-framed trivial circle and the same circle with one positive full framing
twist have distinct skein classes. In a solid torus, a zero-framed core and
the same core with one positive full framing twist also have distinct skein
classes. In each pair the underlying unframed embedded link is identical.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[thm-choice-implies-dependent-implies-countable-choice|Choice implies countable choice]]

[[lem-skein-module-isomorphism-respects-framings-and-boundary|Framing changes are nontrivial]]

[[thm-skein-module-of-s-three-is-rank-one|S³ skein-module basis]]

[[thm-skein-module-of-solid-torus-has-core-multicurve-basis|Solid-torus skein-module basis]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the framed Kauffman bracket skein modules of $S^3$ and a solid torus, and the two pairs of framed links in the statement.

[A1] The Axiom of Choice, written $\mathrm{AC}$ ([[def-axiom-of-choice]]).

[A2] Countable choice, written $\mathrm{AC}_\omega$, means every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[A3] In ZF, $\mathrm{AC}$ implies $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The positive full twist multiplies any link-component class by $-A^3$; on the two basis classes in the examples the resulting changes are nonzero ([[lem-skein-module-isomorphism-respects-framings-and-boundary]]).

[F2] The S³ empty class is a free basis and a zero-framed trivial circle represents $\delta[\varnothing]$ ([[thm-skein-module-of-s-three-is-rank-one]]).

[F3] The solid-torus core classes form a free $R$-basis, including $[z]$ ([[thm-skein-module-of-solid-torus-has-core-multicurve-basis]]).

## Proof


1.1 In $\mathcal K_A(S^3)$ the zero-framed trivial circle has class $\delta[\varnothing]$ by [F2]. Its positive framing twist has class $-A^3\delta[\varnothing]$ by [F1]. These are unequal by the nonzero calculation in the framing-and-boundary lemma and the basis assertion [F2]. [A1, A2, A3, F1, F2, given, algebra]

2.1 In the solid torus, the zero-framed core has class $[z]$ and its positive full framing twist has class $-A^3[z]$ by [F1]. Since $[z]$ is an element of a free basis by [F3] and $-A^3-1$ is a nonzero Laurent polynomial, the two skein classes differ. Their underlying embedded core circle is unchanged when the framing decoration is forgotten. The S³ pair has the same underlying unframed circle, so forgetting the framing identifies both pairs while the framed skein classes remain unequal. [A1, F1, F3, step 1.1, algebra] ∎

