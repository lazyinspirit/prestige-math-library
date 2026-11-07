---
id: thm-kato-bloch-kato-selmer-finiteness-rank-zero
kind: theorem
title: "Kato Finiteness of the Bloch–Kato Selmer Group in Analytic Rank Zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive
  - def-l-function-and-analytic-rank-of-modular-motive
  - def-newform-subspace-of-congruence-forms
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
proof_strategy: not-supplied
sources:
  references:
    - title: "Kazuya Kato, p-adic Hodge theory and values of zeta functions of modular forms"
      url: "https://www.numdam.org/item/AST_2004__295__117_0.pdf"
      locator: "Theorem 14.2(2), §§14.1–14.22 for the non-CM case, and §§15.1–15.23 for the CM case; Selmer definitions, Euler-system descent, local p-adic Hodge comparison, and the final lattice argument."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Statement

Let $f$ be a normalized cuspidal newform of even weight $k\ge2$ and level $N$, let $p\nmid N$, and let $M=M(f)(k/2)$ be its central motive. If $L(f,k/2)\ne0$, then the Bloch–Kato Selmer group $H^1_f(\mathbb Q,A_p)$ is finite for every stable lattice quotient $A_p=V_p/T_p$ in the attached representation.

## Statement references

[Kazuya Kato, p-adic Hodge theory and values of zeta functions of modular forms](https://www.numdam.org/item/AST_2004__295__117_0.pdf)

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** The modular form, its central value, and its p-adic representation with lattice.

[F1] [[def-bloch-kato-selmer-and-shafarevich-tate-groups-of-motive]]: $H^1_f(\mathbb Q,A_p)$ is the Selmer group defined by Bloch–Kato local conditions.

[F2] [[def-l-function-and-analytic-rank-of-modular-motive]]: nonvanishing at the central point is analytic rank zero.

[F3] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the required two-dimensional p-adic representation is attached to $f$.

[F4] [[def-newform-subspace-of-congruence-forms]]: $f$ is a normalized Hecke eigenform in the new subspace at its character and level.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Escalation

This is Kato, Theorem 14.2(2), specialized to $K=\mathbb Q$ and the trivial character component. In the non-CM case the proof constructs Beilinson–Kato Euler-system classes, uses explicit reciprocity and Poitou–Tate duality to prove finiteness, then applies Fontaine–Laffaille comparison and a stable-lattice argument to obtain the almost-all-primes assertion; the CM case is completed separately in §15 using Rubin's main conjecture. These intermediate results and proof steps are not locally supplied; this theorem remains escalated.
