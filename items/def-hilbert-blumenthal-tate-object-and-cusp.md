---


id: def-hilbert-blumenthal-tate-object-and-cusp
kind: definition
title: "Hilbert–Blumenthal Tate object and cusp"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-hilbert-blumenthal-moduli-data-and-polarization
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-invertible-fractional-ideal
  - def-different-of-a-number-field
  - def-axiom-of-choice
dependency_level: 1
justified_by: []
axiom_use: >-
  AC is inherited through the polarized abelian-scheme interface used to specify the Tate object.
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

Assume AC through the polarized abelian-scheme interface. Let $K$ be totally real, $\mathcal O_K$ its ring of integers, $\mathfrak D$ its different, $R$ a commutative coefficient ring, $N\ge3$ a level prime to the discriminant, and $\mathfrak c$ a fixed positive polarization module. An unramified cusp datum is a tuple $(\mathfrak a,\mathfrak b,\phi,j)$ where $\mathfrak a,\mathfrak b$ are nonzero fractional ideals with $\mathfrak a\mathfrak b^{-1}=\mathfrak c$, $\phi:N^{-1}\mathcal O_K/\mathcal O_K\xrightarrow{\sim}N^{-1}\mathfrak a^{-1}/\mathfrak a^{-1}$ is an $\mathcal O_K$-linear isomorphism, and $j:\mathfrak a^{-1}\otimes_{\mathcal O_K}R\xrightarrow{\sim}\mathcal O_K\otimes_{\mathbb Z}R$ is an isomorphism. The associated Hilbert–Blumenthal Tate object is the semi-abelian degeneration (a smooth commutative group scheme extension of an abelian scheme by a torus) obtained from the multiplicative $\mathcal O_K$-torus with character module $\mathfrak a^{-1}$ by the period lattice indexed by $\mathfrak b$; evaluating a modular form on its canonical polarization, level structure, and differential gives the formal expansion $\sum_{\nu}c_\nu q^\nu$, where $\nu\in\mathfrak a\mathfrak b$ and either $\nu=0$ or $\sigma(\nu)>0$ for every real embedding $\sigma:K\hookrightarrow\mathbb R$. The tuple specifies an unramified cusp, and this expansion is its $g$-expansion. The coefficient of $q^0$ is the constant term; all nonzero indices are totally positive.

## Definition references

[[def-hilbert-blumenthal-moduli-data-and-polarization]]

[P. Deligne and K. A. Ribet, §5, pp. 259–262](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

[E. Goren, Hilbert Modular Forms, Chapter 5 §5.2](https://www.wstein.org/people/goren/hilbert_modular_forms_book.pdf)
