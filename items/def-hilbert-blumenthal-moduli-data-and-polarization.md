---


id: def-hilbert-blumenthal-moduli-data-and-polarization
kind: definition
title: "Hilbert–Blumenthal moduli data and polarization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-abelian-scheme
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - def-invertible-fractional-ideal
  - def-axiom-of-choice
dependency_level: 0
justified_by: []
axiom_use: >-
  AC is used by the relative Picard/dual abelian supplier to construct A^vee as a representing sheaf; the datum uses that dual in its polarization map.
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

Assume AC for the relative-dual abelian-scheme interface. Let $K\ne\mathbb Q$ be a totally real number field of degree $d$, with ring of integers $\mathcal O_K$, and let $S$ be a scheme. A Hilbert–Blumenthal datum over $S$ consists of an abelian scheme $A\to S$ of relative dimension $d$, a unital embedding $\iota:\mathcal O_K\hookrightarrow\operatorname{End}_S(A)$ for which $\operatorname{Lie}(A/S)$ is locally free of rank one over $\mathcal O_K\otimes_{\mathbb Z}\mathcal O_S$, an invertible fractional $\mathcal O_K$-ideal $\mathfrak c$, and a positive $\mathcal O_K$-linear polarization isomorphism $\lambda:A\otimes_{\mathcal O_K}\mathfrak c\xrightarrow{\sim}A^\vee$. Here positivity means that on each geometric fibre the associated symmetric $\mathcal O_K$-linear homomorphisms are induced by ample line bundles and lie in the positive cone. A full level-$\mathfrak n$ structure, when used, is an $\mathcal O_K$-linear isomorphism $\eta:(\mathcal O_K/\mathfrak n)^2\xrightarrow{\sim}A[\mathfrak n]$ preserving the alternating pairing induced by the polarization, for an ideal $\mathfrak n$ prime to the residue characteristic and the different; the level datum is recorded separately from the unlevelled tuple.

## Definition references

[P. Deligne and K. A. Ribet, “Values of Abelian L-Functions at Negative Integers over Totally Real Fields”](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[P. Deligne and G. Pappas, “Singularités des espaces de modules de Hilbert, en les caractéristiques divisant le discriminant”](https://www.numdam.org/item/CM_1994__90_1_59_0.pdf)
