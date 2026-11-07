---


id: thm-siegel-rationality-of-totally-real-abelian-l-values
kind: theorem
title: "Rationality of totally real abelian L-values at nonpositive integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-totally-real-ray-class-group-and-norm-character
  - def-schwartz-functions-on-the-total-real-ideal-space
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_level: 21
justified_by: []
axiom_use: >-
  AC, Countable Choice, and DC enter through the finite ray-class/Artin interfaces; the finite linear-combination reduction uses no stronger choice principle.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
verification: {}
---
## Statement

Assume AC, Countable Choice, and DC through the finite ray-class and ideal-space interfaces. Let $K\ne\mathbb Q$ be totally real and let $\phi$ be a $\mathbb Q$-valued Schwartz function on its ideal space. For every integer $k\ge1$, the analytically continued value $L(1-k,\phi)$ is rational. Here $L(s,\phi)=\sum_{\mathfrak a\ne0}\phi(\mathfrak a)N(\mathfrak a)^{-s}$ in its half-plane of absolute convergence, extended linearly from finite ray-class data.

## Facts & Assumptions

**Given:** $K$, $\phi$, and $k$ as in the statement.

[F1] A Schwartz function factors through a discrete ideal-congruence quotient and has support in one bounded-denominator piece, whose reduction is finite. It is therefore a finite rational linear combination of characteristic functions of supported ideal-congruence classes. [[def-schwartz-functions-on-the-total-real-ideal-space]] [[def-totally-real-ray-class-group-and-norm-character]]

[A1] A finite cone decomposition expressing each ray-class partial zeta value at $1-k$ as a rational Bernoulli-polynomial sum is required; that local proof is not yet supplied.

[A2] AC, Countable Choice, and DC are inherited through the ray-class and Artin interfaces used for the finite support reduction; the finite linear-combination reduction itself uses no stronger choice principle. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The hypotheses above.

1.1 Since $\phi$ factors through a discrete ideal-congruence quotient with finite reduction of its bounded-denominator support, it is a finite $\mathbb Q$-linear combination of supported ideal-congruence indicator functions. Splitting the finite integral ray-monoid data after clearing a common denominator groups this Dirichlet series into the corresponding partial zeta functions, with the denominator scaling retained. The finite support reduction uses the inherited choice assumptions [A2]. [F1, A2, given]

2.1 To conclude rationality, one must evaluate each partial zeta by a finite cone decomposition and show every resulting Bernoulli-polynomial value is rational. That argument is not supplied here, so the theorem is escalated and no rationality conclusion is inferred from a citation. [F1, A1]

## Statement references

[[def-totally-real-ray-class-group-and-norm-character]]

[[def-schwartz-functions-on-the-total-real-ideal-space]]

[P. Deligne and K. A. Ribet, Theorem 8.1, p.278](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[E. Goren, Chapter 5 §5.1](https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf)
