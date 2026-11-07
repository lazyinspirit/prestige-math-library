---
id: ex-strict-ray-class-group-as-units-of-ray-ideal-monoid
kind: example
title: "Strict ray classes as units of the ray ideal monoid"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-totally-real-ray-class-group-and-norm-character
  - lem-ray-class-congruence-subgroup-well-defined
  - thm-ray-class-exact-sequence
  - lem-strict-ray-class-norm-congruence
dependency_level: 20
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet, Values of Abelian L-Functions at Negative Integers over Totally Real Fields, Inventiones Mathematicae 59 (1980), 227–286"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "P. Deligne and G. Pappas, Singularités des espaces de modules de Hilbert, en les caractéristiques divisant le discriminant, Compositio Mathematica 90 (1994), 59–79"
      url: "https://www.numdam.org/item/CM_1994__90_1_59_0.pdf"
      locator: "Introduction pp. 59\u201360; \u00a7\u00a72.1\u20132.4, 3.1\u20133.5, 4.1\u20134.5."
    - title: "O. Venjakob, Deligne–Ribet’s work on L-values"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
    - title: "E. Goren, Hilbert Modular Forms"
      url: "https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf"
      locator: "Ch. 5 \u00a75.1, pp. 65\u201367; \u00a75.2, pp. 147\u2013151."
verification: {}
---
## Example

For a totally real field $K\ne\mathbb Q$ and each nonzero integral conductor $\mathfrak f$, the group of invertible elements of the integral ray ideal monoid $A_{\mathfrak f}$ is precisely the strict ray class group $G_{\mathfrak f}$. Passing through the conductor reduction maps gives the profinite group $\mathcal G_K=\varprojlim_{\mathfrak f}G_{\mathfrak f}$ inside the Deligne–Ribet ideal space, and its norm takes values in $\widehat{\mathbb Z}^{\times}$.

## Facts & Assumptions

**Given:** $K$, the inverse-limit ideal monoid, its integral ideal submonoid, and the conductor reduction maps.

[F1] The ideal-space inverse limit and strict ray class group are defined by the finite congruence quotients. [[def-totally-real-ray-class-group-and-norm-character]]

[F2] The congruence relation is well-defined and the ray quotient has the exact residue/sign sequence. [[lem-ray-class-congruence-subgroup-well-defined]] [[thm-ray-class-exact-sequence]]

[F3] Norm congruence is the prerequisite for compatibility of the finite norm maps. [[lem-strict-ray-class-norm-congruence]]

## Proof

**Given:** The data above.

1.1 At each finite conductor, the multiplication on $A_{\mathfrak f}$ is induced by ideal multiplication, and its invertible classes are exactly the classes of ideals prime to $\mathfrak f$ by the definition of the strict ray class quotient. Therefore its group of units is $G_{\mathfrak f}$. [F1, given]

2.1 Taking inverse limits of the finite unit groups gives $\mathcal G_K=\varprojlim G_{\mathfrak f}$. The norm congruence [F3] makes their norms compatible, and the norm of each unit class is a unit at every rational prime, hence lies in $\widehat{\mathbb Z}^{\times}$. The Artin interpretation remains conditional on the parent definition. [F1, F2, F3, algebra]

## Example references

[[def-totally-real-ray-class-group-and-norm-character]]

[[lem-ray-class-congruence-subgroup-well-defined]]

[[thm-ray-class-exact-sequence]]

[P. Deligne and K. A. Ribet — §2.11–2.12, pp. 241–242; §§4–6, pp. 254–273; §8, pp. 277–285.](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
