---


id: thm-hilbert-modular-g-expansion-integrality-at-all-cusps
kind: theorem
title: "Hilbert modular g-expansion integrality at all cusps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-hilbert-modular-form-over-a-ring-and-cusp-expansion
  - thm-hilbert-blumenthal-moduli-irreducibility
  - def-deligne-pappas-hilbert-blumenthal-moduli-problem
  - def-axiom-of-choice
dependency_level: 3
justified_by: []
axiom_use: >-
  AC enters through finite étale moduli and irreducibility suppliers used in the one-cusp injectivity route.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "P. Deligne and G. Pappas"
      url: "https://www.numdam.org/item/CM_1994__90_1_59_0.pdf"
      locator: "Introduction pp. 59\u201360; \u00a7\u00a72.1\u20132.4, 3.1\u20133.5, 4.1\u20134.5."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
    - title: "E. Goren"
      url: "https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf"
      locator: "Ch. 5 \u00a75.1, pp. 65\u201367; \u00a75.2, pp. 147\u2013151."
verification: {}
---
## Statement

Assume AC through the étale moduli suppliers. Let $R_0\subseteq R$ be commutative rings, $N\ge3$ a level prime to the discriminant of a totally real field $K$, and $F$ a Hilbert modular form over $R$ on the corrected Deligne–Pappas moduli problem. Suppose the chosen unramified cusp is defined over $R_0$ and every coefficient of its $g$-expansion lies in $R_0$. Then $F$ descends to a form over $R_0$. In the associated $p$-adic tower, if one cusp expansion has coefficients in $\mathbb Z_p$, then every nonconstant coefficient at every unramified cusp lies in $\mathbb Z_p$, and the difference of the constant coefficients at any two such cusps lies in $\mathbb Z_p$.

## Facts & Assumptions

**Given:** The rings, moduli problem, form, and cusp in the statement.

[F1] A Hilbert modular form over a ring is a scalar-compatible rule on polarized and levelled Hilbert–Blumenthal objects; its evaluation on a Tate object at an unramified cusp is its $g$-expansion. [[def-hilbert-modular-form-over-a-ring-and-cusp-expansion]]

[F2] The corrected moduli model is the Deligne–Pappas functor at all residue characteristics. [[def-deligne-pappas-hilbert-blumenthal-moduli-problem]]

[F3] Geometric irreducibility of the relevant fixed level-pairing/component fibre, at a residue characteristic prime to the level, is needed for the one-cusp expansion map to detect global sections. [[thm-hilbert-blumenthal-moduli-irreducibility]]

[A1] AC enters through the finite étale moduli and irreducibility suppliers. [[def-axiom-of-choice]]

[A2] The one-cusp injectivity and coefficient descent argument in the corrected model, and its $p$-adic compatibility across all cusps, have not been proved from [F1]–[F3] here.

## Proof

**Given:** The rings and form in the statement.

1.1 Evaluating on the Tate object defines a homomorphism from forms to the formal power series ring at the chosen cusp, and its coefficients commute with extension of scalars by [F1]. AC is inherited through the finite étale moduli supplier [A1]. Thus the statement reduces to injectivity of this map and descent of its image. [F1, A1, given]

2.1 The required injectivity uses geometric irreducibility and the local expansion parameter at the cusp, while the all-cusp p-adic assertion requires the comparison of the constant terms under the cusp action. Those two arguments are not supplied by the cited definitions, so the theorem is escalated. [F2, F3, A2]

## Statement references

[[def-hilbert-modular-form-over-a-ring-and-cusp-expansion]]

[[thm-hilbert-blumenthal-moduli-irreducibility]]

[[def-deligne-pappas-hilbert-blumenthal-moduli-problem]]

[P. Deligne and K. A. Ribet, §§5.4–5.5 and 5.13–5.15](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[O. Venjakob, pp. 10–18](https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf)

[E. Goren, Chapter 5 §5.2](https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf)
