---
id: ex-trivial-crystalline-lattice-and-its-prismatic-f-crystal
kind: example
title: "The trivial crystalline lattice and its prismatic F-crystal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-prismatic-f-crystal-over-a-p-adic-formal-scheme
  - def-p-adic-period-rings
  - def-crystalline-p-adic-galois-representation
  - thm-p-adic-period-rings-have-invariants-and-regularity
  - thm-prismatic-f-crystals-over-ok-classify-crystalline-galois-lattices
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Bhatt and Scholze, Prismatic F-crystals and Crystalline Galois Representations, Constructions 4.8 and 5.6"
      url: "https://arxiv.org/pdf/2106.14735v2.pdf"
    - title: "Brinon and Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II §9.1, Theorem 9.1.5 and the following invariant deduction"
      url: "https://math.stanford.edu/~conrad/papers/notes.pdf"
---

## Example

Let $K/\mathbb Q_p$ be a finite extension with valuation ring $O_K$, residue field $k$, bounded absolute prismatic ringed site $(\operatorname{Spf}(O_K)_\Delta,\mathcal O_\Delta)$, and absolute Galois group $G_K=\operatorname{Gal}(\overline K/K)$ with its profinite topology. Put $K_0=W(k)[1/p]$, and let $B_{\mathrm{crys}}$ be the crystalline period ring for $K$ with its $G_K$-action. For a one-dimensional representation $V$, crystalline means $\dim_{K_0}(B_{\mathrm{crys}}\otimes_{\mathbb Q_p}V)^{G_K}=1$. The trivial rank-one lattice is $\mathbb Z_p$ with trivial $G_K$-action, and its rational representation is $\mathbb Q_p$ with trivial action. The unit prismatic F-crystal is $(\mathcal O_\Delta,\phi_{\mathcal O_\Delta})$, where $\phi_{\mathcal O_\Delta}$ is the structure Frobenius from the prismatic F-crystal definition. Its étale realization is the constant rank-one $\mathbb Z_p$-local system, so under the prismatic classification equivalence it corresponds to the trivial crystalline lattice.

## Example references

[Bhargav Bhatt and Peter Scholze, *Prismatic F-crystals and Crystalline Galois Representations*, Constructions 4.8 and 5.6](https://arxiv.org/pdf/2106.14735v2.pdf)

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II §9.1, Theorem 9.1.5 and its following invariant-field deduction](https://math.stanford.edu/~conrad/papers/notes.pdf)

## Remaining local proof obligations

The monoidal-unit computation follows from the symmetric monoidal étale realization in the prismatic F-crystal definition. The actual batch 82 crystalline-representation definition has been read and is scoped to finite $K/\mathbb Q_p$, which matches this example, and it now contains a filtration well-definedness proof using [[lem-p-adic-period-ring-comparison-embedding-is-injective]], which also now contains a local proof. The period-ring construction obligations remain separately recorded in [[def-p-adic-period-rings]]; the presence of these proofs supplies no acceptance or readiness for this example. [[thm-p-adic-period-rings-have-invariants-and-regularity]] has an actual finite-$K$ statement but no supplied proof; its invariant $B_{\mathrm{crys}}^{G_K}=K_0$ is needed to verify directly that the trivial representation is crystalline. Brinon–Conrad Theorem 9.1.5 states the injectivity of $K\otimes_{K_0}B_{\mathrm{crys}}\to B_{\mathrm{dR}}$ and the associated-graded isomorphism; the invariant-field deduction follows immediately afterward, but the notes say the needed injectivity proof is omitted for ramified extensions. The classification theorem itself also remains escalated. The example therefore remains escalated pending those exact supplier proofs.

