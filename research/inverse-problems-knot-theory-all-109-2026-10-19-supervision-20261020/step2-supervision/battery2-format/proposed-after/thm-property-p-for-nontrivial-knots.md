---
id: thm-property-p-for-nontrivial-knots
kind: theorem
title: Property P for nontrivial knots
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
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
axiom_use: Assumes full AC through the chosen exterior/homology and local
  externally cited gauge-theory branch. The homology case split is choice-free after the
  stated filling supplier; the gauge-theory branch retains its separate AC
  requirement.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group and SU(2), Mathematical Research Letters 11 (2004), 741–754, Theorem 1, p. 741"
      url: https://doi.org/10.4310/mrl.2004.v11.n6.a3
    - title: P. B. Kronheimer and T. S. Mrowka, Dehn surgery, the fundamental group
        and SU(2), Theorem 1
      url: https://people.math.harvard.edu/~kronheim/hrpthree.pdf
    - title: P. B. Kronheimer and T. S. Mrowka, Knots, sutures and excision, §7.8
      url: https://arxiv.org/pdf/0807.4891
    - title: "Kimihiko Motegi, Dehn surgery on knots: survey, pp. 19–21 and 26"
      url: https://www.math.tsukuba.ac.jp/~tange/diftop22/Dehn_surgery_survey.pdf
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

[Kronheimer–Mrowka, published Theorem 1, p. 741](https://doi.org/10.4310/mrl.2004.v11.n6.a3)

## Facts & Assumptions

**Given:** Full AC, a nontrivial smooth knot $K\subset S^3$, and a nonmeridional slope $p[\mu]+q[\lambda]$ with $\gcd(p,q)=1$ and $q\ne0$.

[F1] The filling has $H_1(E_K(p/q);\mathbb Z)\cong\mathbb Z/|p|\mathbb Z$ for $p\ne0$, and $H_1(E_K(p/q);\mathbb Z)\cong\mathbb Z$ for $p=0$. [[lem-knot-surgery-first-homology-mayer-vietoris]]

[F2] For a path-connected space, $H_1$ is naturally the abelianization of its fundamental group. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F3] If $|p|=1$ and $q\ne0$, the filling group admits a noncyclic homomorphism to $SU(2)$. The supplier derives this exact interface from the explicitly imported published Kronheimer–Mrowka Theorem 1, p. 741; its gauge-theoretic theorem is not claimed as locally reconstructed. [[lem-property-p-instanton-surgery-triangle-and-rank-input]]

[F4] The filling is obtained by attaching a solid torus to $E_K$ along its entire boundary torus, with meridian identified with $p[\mu]+q[\lambda]$. [[def-oriented-slope-and-knot-dehn-filling]]

[F5] The chosen exterior is the complement of the interior of the closed tubular disk bundle over the connected knot $K$, with boundary $T_K=\partial N(K)$. [[def-knot-exterior]]

[A1] Full AC is the assertion that every set-indexed family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[L1] Applying [A1] to the set of members of any countable family gives the countable choice function required by [F1]. [[def-axiom-of-choice]]

## Proof

1.1 By [F5], the chosen tubular neighbourhood is a disk bundle over the connected knot $K$, so its boundary $T_K$ is a circle bundle over $K$ with connected fibres and is connected. Indeed, a separation of $T_K$ would, since every fibre is connected, split it into two saturated open sets; their projections are open by the local bundle charts, disjoint, and cover the connected base $K$. Since $T_K$ is a connected smooth manifold, it is path-connected. The exterior $E_K$ is a compact smooth $3$-manifold with boundary $T_K$. Because $T_K$ is connected, it lies in one component of $E_K$. Any other component is boundaryless, hence lies in $\operatorname{int}E_K$ and is open in $S^3$; it is also closed in $S^3$, since it is closed in $E_K$ and $E_K$ is closed in $S^3$ by [F5]. This contradicts connectedness of $S^3$. Thus $E_K$ is connected and, being a smooth manifold, path-connected. By [F4], $Y_{p/q}$ is the union of this path-connected exterior and an attached path-connected solid torus along $T_K$, so $Y_{p/q}$ is path-connected. [given, F4, F5, construct]

1.2 If $|p|=1$, the nonmeridional condition gives $q\ne0$, and [F3] supplies a homomorphism with noncyclic image. The trivial group has only the trivial, hence cyclic, image, so $\pi_1(Y_{p/q})$ is nontrivial. [given, F3, algebra]

2.1 By [A1] and [L1], the countable-choice hypothesis of [F1] follows from the Statement, and step 1.1 verifies its connected-exterior hypothesis. If $p=0$, [F1] gives $H_1(Y_{p/q};\mathbb Z)\cong\mathbb Z$. If $|p|\ge2$, it gives the nonzero finite group $\mathbb Z/|p|\mathbb Z$. Choose any basepoint $y_0$ of the path-connected filling. By [F2], $H_1(Y_{p/q};\mathbb Z)\cong\pi_1(Y_{p/q},y_0)^{\mathrm{ab}}$, so in either case the fundamental group is nontrivial. [given, A1, L1, F1, F2, step 1.1, algebra]

3.1 Coprimality leaves exactly the cases $p=0$, $|p|=1$, or $|p|\ge2$, all covered by steps 2.1 and 1.2. Thus every nonmeridional filling has nontrivial fundamental group. [given, step 2.1, step 1.2, algebra] ∎

## External dependency

The numerator-one case uses the external Kronheimer–Mrowka theorem through [F3], with its exact hypotheses and reading limits recorded in that supplier. The homology cases and the deduction of nontriviality from a noncyclic image are the local argument above.
