---

id: ex-two-cusp-integrality-for-hilbert-eisenstein-series
kind: example
title: "Two-cusp integrality for a Hilbert Eisenstein series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-hilbert-modular-g-expansion-integrality-at-all-cusps
  - thm-hilbert-eisenstein-special-value-expansion
  - def-axiom-of-choice
dependency_level: 24
justified_by: []
axiom_use: >-
  AC is inherited from the moduli and irreducibility hypotheses of the all-cusp supplier.
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
## Example

Assume AC through the moduli suppliers. Fix a prime $p$. Let $F$ be a Hilbert Eisenstein series over $\mathbb Q_p$ in the corrected Deligne–Pappas moduli problem, with integral nonconstant coefficients at a chosen unramified cusp $x$. For any second unramified cusp $y$, the nonconstant coefficients at $y$ lie in $\mathbb Z_p$, and the difference between the constant coefficients at $x$ and $y$ lies in $\mathbb Z_p$. If the constant coefficient at $x$ lies in $\mathbb Z_p$, then the entire expansion at $y$ lies in $\mathbb Z_p$.

## Facts & Assumptions

**Given:** The form and the two unramified cusps in the statement.

[F1] The Eisenstein expansion has the special-value constant term and finite divisor-sum nonconstant coefficients. [[thm-hilbert-eisenstein-special-value-expansion]]

[F2] The all-cusp g-expansion integrality theorem transfers nonconstant integrality and constant-term differences. [[thm-hilbert-modular-g-expansion-integrality-at-all-cusps]]

[A1] AC is inherited through the finite étale moduli and irreducibility suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The stated form and cusps.

1.1 The hypothesis makes every nonconstant coefficient at $x$ integral; applying [F2] transfers that integrality to every nonconstant coefficient at $y$. AC is inherited through [A1]. [F1, F2, A1, given]

2.1 The same theorem [F2] gives $a_0(y)-a_0(x)\in\mathbb Z_p$ at the fixed prime. Adding this integral difference to the assumed $a_0(x)\in\mathbb Z_p$ proves $a_0(y)\in\mathbb Z_p$. The example remains conditional on completing [F2]. [F2, algebra]

## Example references

[[thm-hilbert-modular-g-expansion-integrality-at-all-cusps]]

[[thm-hilbert-eisenstein-special-value-expansion]]

[O. Venjakob, pp. 10–18](https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf)
