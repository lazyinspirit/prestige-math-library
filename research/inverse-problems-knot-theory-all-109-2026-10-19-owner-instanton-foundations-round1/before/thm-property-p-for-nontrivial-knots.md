---
id: thm-property-p-for-nontrivial-knots
kind: theorem
title: "Property P for nontrivial knots"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-slope-and-knot-dehn-filling
  - lem-knot-surgery-first-homology-mayer-vietoris
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-property-p-instanton-surgery-triangle-and-rank-input
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC through the chosen exterior/homology and local gauge-theory proof branches. The homology case split is choice-free after the stated filling supplier; the gauge-theory branch retains its separate AC requirement."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Theorem 1"
      url: "https://people.math.harvard.edu/~kronheim/hrpthree.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §7.8"
      url: "https://arxiv.org/pdf/0807.4891"
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 19–21 and 26"
      url: "https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K\subset S^3$ be a nontrivial smooth knot, and let $p,q$ be coprime integers with $q\ne0$. For the Dehn filling $Y_{p/q}=E_K(p/q)$ whose attached solid-torus meridian is identified with $p[\mu]+q[\lambda]$, the fundamental group $\pi_1(Y_{p/q})$ is nontrivial.

## Statement references

[[def-knot-exterior|Chosen knot exterior]]

[[def-knot-meridian-and-preferred-longitude|Meridian and preferred longitude]]

[[def-oriented-slope-and-knot-dehn-filling|Filling slope convention]]

[[lem-knot-surgery-first-homology-mayer-vietoris|First homology of knot fillings]]

[[lem-property-p-instanton-surgery-triangle-and-rank-input|Noncyclic SU(2) representations for numerator-one slopes]]

[Kronheimer–Mrowka, *Dehn surgery, the fundamental group and SU(2)*, Theorem 1](https://people.math.harvard.edu/~kronheim/hrpthree.pdf)

[Kronheimer–Mrowka, *Knots, sutures and excision*, §7.8](https://arxiv.org/pdf/0807.4891)

[Motegi, *Dehn surgery on knots: survey*, pp. 19–21 and 26](https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K\subset S^3$, and a nonmeridional slope $p[\mu]+q[\lambda]$ with $\gcd(p,q)=1$ and $q\ne0$.

[F1] The filling has $H_1(E_K(p/q);\mathbb Z)\cong\mathbb Z/|p|\mathbb Z$ for $p\ne0$, and $H_1(E_K(p/q);\mathbb Z)\cong\mathbb Z$ for $p=0$. [[lem-knot-surgery-first-homology-mayer-vietoris]]

[F2] For a path-connected space, $H_1$ is naturally the abelianization of its fundamental group. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F3] If $|p|=1$ and $q\ne0$, the filling group admits a noncyclic homomorphism to $SU(2)$. The current helper body states this exact interface; its local gauge-theoretic proof obligation remains open. [[lem-property-p-instanton-surgery-triangle-and-rank-input]]

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[L1] Applying [A1] to the set of members of any countable family gives the countable choice function required by [F1]. [[def-axiom-of-choice]]

## Proof

1.1 By [A1], the countable-choice hypothesis of [F1] follows from [L1]. If $p=0$, [F1] gives $H_1(Y_{p/q};\mathbb Z)\cong\mathbb Z$. If $|p|\ge2$, it gives the nonzero finite group $\mathbb Z/|p|\mathbb Z$. In either case [F2] makes $H_1(Y_{p/q};\mathbb Z)$ a quotient of $\pi_1(Y_{p/q})$, so the fundamental group is nontrivial. [given, A1, L1, F1, F2, algebra]

1.2 If $|p|=1$, the nonmeridional condition gives $q\ne0$, and [F3] supplies a homomorphism with noncyclic image. The trivial group has only the trivial, hence cyclic, image, so $\pi_1(Y_{p/q})$ is nontrivial. [given, F3, algebra]

2.1 Coprimality leaves exactly the cases $p=0$, $|p|=1$, or $|p|\ge2$, all covered by steps 1.1 and 1.2. Thus every nonmeridional filling has nontrivial fundamental group. [given, step 1.1, step 1.2, algebra] ∎
