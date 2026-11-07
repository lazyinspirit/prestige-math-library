---
id: def-grothendieck-motive-of-a-newform-and-realizations
kind: definition
title: "Grothendieck Motive of a Newform and Its Betti, de Rham, and Étale Realizations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-newform-subspace-of-congruence-forms
  - def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve
  - thm-modular-curve-cohomology-realizes-cuspidal-eigensystems
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives"
      url: "https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf"
      locator: "§§5.5–5.16 and §6, including Definitions 5.5 and 5.9, Conjecture 5.15, Conjecture 6.2 and Theorem 6.1."
---

## Definition

Let $f$ be a normalized cuspidal newform of even weight $k\ge4$, squarefree level $N\ge3$, trivial character, and coefficient field $F$. Let $X_f$ be a smooth projective Kuga–Sato variety, a smooth projective model of the $(k-2)$-fold fiber power of the universal elliptic curve over the modular curve, and let $\theta_f$ be the Hecke-algebra idempotent cutting out the eigensystem of $f$ in parabolic cohomology. Write $M(f)$ for the rank-two homological motive cut out by $\theta_f$, of weight $k-1$. Its Betti realization $M_B(f)$ is an $F$-vector space with complex conjugation; its de Rham realization $M_{dR}(f)$ is an $F$-vector space with Hodge filtration; and for every prime $\ell$ its étale realization is the two-dimensional $F_\ell$-representation $V_{f,\ell}$ attached to $f$. The realizations are related by the Betti–de Rham and Betti–étale comparison isomorphisms. The construction of $X_f$, $\theta_f$, and these comparisons is not asserted by this definition.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[S. Bloch and K. Kato, L-functions and Tamagawa numbers of motives](https://math.stanford.edu/~conrad/BSDseminar/refs/BKTamagawa.pdf)

## Facts & Assumptions

**Given:** A normalized newform and the modular-curve cohomology eigenspace associated with it.

[F1] [[def-normalized-cuspidal-eigenform-over-gl2]]: $f$ has weight, level, coefficient field, and a normalized Hecke eigensystem.

[F2] [[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]: the cuspidal eigensystem occurs in parabolic étale cohomology of the modular curve.

[F3] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the attached étale realization is two-dimensional and has the stated good-prime Frobenius data.

[F4] [[def-newform-subspace-of-congruence-forms]]: a newform is a normalized Hecke eigenform in the Petersson-orthogonal complement of the old subspace for its character.

[A1] [[def-axiom-of-choice]]: the source carrier states AC for its cohomological realization and eigenspace selections.

## Authoring status

The realization package is stated with the intended rank, weight, coefficient field, and comparisons. The actual modular-curve eigenspace, comparison, and projector arguments are not locally proved. The cited modular-curve cohomology theorem and the Deligne attachment theorem are proof-open; this definition is escalated.
