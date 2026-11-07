---


id: def-deligne-pappas-hilbert-blumenthal-moduli-problem
kind: definition
title: "Deligne–Pappas Hilbert–Blumenthal moduli problem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-hilbert-blumenthal-moduli-data-and-polarization
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-different-of-a-number-field
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - def-axiom-of-choice
dependency_level: 1
justified_by: []
axiom_use: >-
  AC is inherited through the relative Picard/dual abelian supplier used for A^vee and the polarization isomorphism.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Deligne and G. Pappas, Singularités des espaces de modules de Hilbert, en les caractéristiques divisant le discriminant"
      url: "https://www.numdam.org/item/CM_1994__90_1_59_0.pdf"
      locator: "§§2.1–2.4, printed pp.64–65; Corollary2.9 and §2.13, printed pp.66–67."
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
verification: {}
---
## Definition

Assume AC through the relative-dual abelian-scheme interface. Fix a totally real field $K\ne\mathbb Q$ of degree $d$, an invertible fractional $\mathcal O_K$-ideal $\mathfrak c$ with its positive cone, and $N\ge3$ prime to the discriminant of $K$. For a $\mathbb Z[1/N]$-scheme $S$, the full Deligne–Pappas problem assigns isomorphism classes of tuples $(A,\iota,\lambda,\eta)$ with the following data. The abelian scheme $A/S$ has relative dimension $d$, the map $\iota:\mathcal O_K\to\operatorname{End}_S(A)$ is a unital action, and $\lambda$ is a positive $\mathcal O_K$-linear polarization family of type $\mathfrak c$ inducing an isomorphism
$$A\otimes_{\mathcal O_K}\mathfrak c\xrightarrow{\sim}A^\vee.$$
The level map is an $\mathcal O_K$-linear isomorphism $\eta:(\mathcal O_K/N\mathcal O_K)^2\xrightarrow{\sim}A[N]$. Isomorphisms preserve all four entries. **No Rapoport Lie-freeness condition is imposed** in this corrected problem. The condition that $\operatorname{Lie}(A/S)$ be locally free of rank one over $\mathcal O_K\otimes\mathcal O_S$ describes its Rapoport locus; it is not retained merely by referring to the narrower Hilbert–Blumenthal datum.

Let $\mathfrak D$ be the different. Pulling back the polarization pairing by $\eta$ gives a generator of the rank-one $\mathcal O_K/N\mathcal O_K$-module $\mathfrak c^{-1}\mathfrak D^{-1}\otimes\mu_N$. Fixing such a pairing generator $\tau$ is the meaning of requiring the level map to preserve the alternating pairing. Thus the pairing-preserving problem is the fibre over $\tau$ of the full-level problem's pairing-invariant map. The pairing-generator functor is a finite étale base over $\mathbb Z[1/N]$; the fixed pairing is part of that base data. In the source's case $\mathfrak c=\mathfrak D^{-1}$, choosing a primitive $N$th root of unity gives this base as $\mathbb Z[\zeta_N,1/N]$ with its specified pairing invariant. Full-level geometric fibres with different pairing invariants are kept distinct.

This is the Deligne–Pappas correction at all residue characteristics allowed by the base, including primes dividing the discriminant. Representability, normality, deformation comparison and geometric irreducibility require their separate proofs; this definition does not identify the Rapoport locus with the whole corrected model at discriminant primes.

## Source convention

Deligne–Pappas §2.1 lists the abelian scheme, real multiplication, polarization-isomorphism condition and full level without Lie-freeness. Their Corollary 2.9 recovers Lie-freeness away from the discriminant, and §2.13 specifies the level-pairing invariant and cyclotomic base. The original carrier had incorrectly imported Lie-freeness at the bad primes and left this pairing base implicit.

## Definition references

[[def-hilbert-blumenthal-moduli-data-and-polarization]]

[P. Deligne and G. Pappas, Introduction pp. 59–60 and §§2–4](https://www.numdam.org/item/CM_1994__90_1_59_0.pdf)

[O. Venjakob, “Deligne–Ribet’s work on L-values”](https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf)
