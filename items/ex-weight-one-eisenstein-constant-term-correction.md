---

id: ex-weight-one-eisenstein-constant-term-correction
kind: example
title: "Weight-one Eisenstein constant-term correction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-hilbert-eisenstein-special-value-expansion
  - thm-deligne-ribet-integrality-congruences-for-special-values
  - thm-functional-equation-for-total-real-ideal-space-l-series
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 25
justified_by: []
axiom_use: >-
  AC and Countable Choice are inherited through the moduli and adelic hypotheses of the Eisenstein/functional-equation suppliers.
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

Assume AC and Countable Choice through the cited moduli and adelic suppliers. For the weight-one Deligne–Ribet Eisenstein series with auxiliary ideal $\mathfrak B$ and cusp class $c$, the constant term is $N(\mathfrak a)2^{-r}L(0,\phi_c+\widetilde\phi_c)$, where $\widetilde\phi$ is supported on integral ideals $\mathfrak x\subseteq\mathfrak B$ with $\widetilde\phi(\mathfrak x)=\phi(\mathfrak x^{-1}\mathfrak B)$ and $\widetilde\phi_c(x)=\widetilde\phi(cx)$. The positive-index coefficients are the finite sums $N(\mathfrak a)\sum_{\mathfrak B\mathfrak a^2\subseteq\mathfrak x}\phi_c(\mu\mathfrak x^{-1})$ for totally positive $\mu$. Thus the $k>1$ constant-term formula cannot be continued to weight one by simply substituting $k=1$; the modified-function contribution must be retained unless its vanishing is proved.

## Facts & Assumptions

**Given:** A weight-one Hilbert Eisenstein series with parity $-1$ and cusp class $c$.

[F1] For $k=1$ the constant term is $N(\mathfrak a)2^{-r}L(0,\phi_c+\widetilde\phi_c)$, distinct from the $k>1$ formula. [[thm-hilbert-eisenstein-special-value-expansion]]

[F2] The correction arises from the zero-index term in the analytic continuation of the lattice sum; it is distinct from the positive-index divisor sum. [[thm-functional-equation-for-total-real-ideal-space-l-series]]

[A1] AC and Countable Choice are inherited through the moduli and adelic suppliers. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The series and cusp in the statement.

1.1 The nonconstant terms are indexed by strictly totally positive elements, so their divisor sums do not include the zero index. The constant coefficient is the zero-index contribution of the lattice sum. AC and Countable Choice enter through [A1]. [F1, A1, given]

2.1 At $k=1$ the zero-index analytic continuation contributes the modified summand $L(0,\widetilde\phi_c)$ inside $L(0,\phi_c+\widetilde\phi_c)$ by [F1]–[F2]. Omitting it changes the constant coefficient whenever this value is nonzero; therefore the $k>1$ formula cannot be used without the stated vanishing hypothesis. [F1, F2, A1, algebra] ∎

## Example references

[[thm-hilbert-eisenstein-special-value-expansion]]

[[thm-functional-equation-for-total-real-ideal-space-l-series]]

[E. Goren, Chapter 5 §5.1](https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf)
