---


id: def-hilbert-modular-form-over-a-ring-and-cusp-expansion
kind: definition
title: "Hilbert modular forms over a ring and cusp expansions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-hilbert-blumenthal-moduli-data-and-polarization
  - def-deligne-pappas-hilbert-blumenthal-moduli-problem
  - def-hilbert-blumenthal-tate-object-and-cusp
  - def-axiom-of-choice
dependency_level: 2
justified_by: []
axiom_use: >-
  AC is inherited through the abelian-scheme dual and corrected moduli interfaces on which the form is evaluated.
provenance:
  statement: literature-derived
  proof: not-applicable
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
## Definition

Assume AC through the polarized moduli interface. Let $K$ be totally real, $N\ge3$ a level prime to its discriminant, $R$ a commutative ring, and $\mathfrak c$ a fixed positive polarization module. A Hilbert modular form of parallel weight $k\ge0$ over $R$ is a rule assigning to each $R$-algebra $R'$ and each Deligne–Pappas Hilbert–Blumenthal object $(A,\iota,\lambda,\eta)$ over $R'$ with an invariant differential $\omega$ a value $F(A,\iota,\lambda,\eta,\omega)\in R'$, invariant under isomorphism, compatible with extension of scalars, and satisfying $F(A,\iota,\lambda,\eta,u\omega)=\operatorname{Nm}_{(\mathcal O_K\otimes R')/R'}(u)^{-k}F(A,\iota,\lambda,\eta,\omega)$ for every unit $u\in(\mathcal O_K\otimes R')^\times$, where $\operatorname{Nm}_{(\mathcal O_K\otimes R')/R'}(u)$ is the determinant of multiplication by $u$ on the finite free $R'$-module $\mathcal O_K\otimes R'$. For each unramified cusp datum $(\mathfrak a,\mathfrak b,\phi,j)$ its evaluation on the associated Tate object is a formal series $g_{\mathfrak a,\mathfrak b,\phi,j}(F)=\sum_{\substack{\nu\in\mathfrak a\mathfrak b\\ \nu=0\text{ or }\sigma(\nu)>0\;\forall\sigma:K\hookrightarrow\mathbb R}}c_\nu q^\nu$ over $R$. These series, one for each cusp, are the cusp expansions of $F$.

## Level component convention

The pairing-preserving Deligne–Pappas problem in this definition uses a fixed level-pairing base. Evaluation at a cusp refers to that same component. No one-cusp determination across distinct components of the full unconstrained level-basis functor is implicit. Dropping the Rapoport Lie-freeness condition in the corrected model does not provide an invariant-differential trivialization at its non-Rapoport points; the rule above evaluates objects equipped with the stated differential. Construction and extension of the modular-form bundle over the whole corrected model remain separate obligations.

## Definition references

[[def-deligne-pappas-hilbert-blumenthal-moduli-problem]]

[[def-hilbert-blumenthal-tate-object-and-cusp]]

[P. Deligne and K. A. Ribet, §5, pp. 259–262](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[E. Goren, Hilbert Modular Forms, Chapter 5 §5.2](https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf)
