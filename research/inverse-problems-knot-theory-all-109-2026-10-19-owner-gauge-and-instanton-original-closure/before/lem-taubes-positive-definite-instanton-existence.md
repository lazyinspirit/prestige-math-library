---
id: lem-taubes-positive-definite-instanton-existence
kind: lemma
title: Taubes existence of an irreducible self-dual instanton on a positive-definite four-manifold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - thm-asd-deformation-complex-index-formula
  - lem-asd-regularity-perturbation-and-orientability
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §I.5, printed pp. 285–286, identifying Taubes Theorem 1.1 under vanishing of anti-self-dual harmonic two-forms
---

## Statement

Let $X$ be a compact simply connected oriented smooth four-manifold with a Riemannian metric whose intersection form is positive definite, and let $P\to X$ be a principal $SU(2)$-bundle with $c_2(P)[X]=-1$. For the equation $F_A^-=0$ in the stated orientation convention, the moduli space contains an irreducible smooth connection. The conclusion is existence for the given metric and bundle; it does not assert that every connection is irreducible or that the unperturbed moduli space is regular.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §I.5, citing Taubes Theorem 1.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

**Given:** The positive-definite simply connected manifold, metric, bundle charge, and sign-fixed equation.

[F1] The equation and charge convention are $F_A^-=0$ and $c_2(P)[X]=-1$. [[def-asd-moduli-fredholm-index-and-lattice-setup]]

[F2] The local deformation problem has the index and generic-regularity interfaces stated in the preceding modules. [[thm-asd-deformation-complex-index-formula]] [[lem-asd-regularity-perturbation-and-orientability]]

[L1] `thm-taubes-self-dual-instanton-existence-when-b2minus-zero` is the proposed A-page supplier for the existence construction, with the exact metric, $SU(2)$ charge, and $F_A^-=0$ convention in the statement. Its proof is not present locally.

## Proof

**Given:** The positive-definite bundle setup [F1] and the Fredholm/regularity interfaces [F2].

1.1 The local setup fixes the precise equation and charge, while [F2] records the expected deformation dimension and regularity interface needed by the subsequent moduli argument. [given, F1, F2]

1.2 Those data do not construct a self-dual connection. The existence conclusion is Taubes's theorem [L1], whose complete proof is not supplied in this batch, so no existence claim is derived here. [L1, step 1.1]

## Unresolved proof obligations

Donaldson attributes this existence theorem to Taubes and states that positive definiteness is exactly the required vanishing condition for anti-self-dual harmonic two-forms. The Taubes construction itself is not proved in the cited Donaldson paper. The complete Taubes source and construction have not been supplied as a local proof in this batch; neither the citation nor the statement alone closes this item. Escalated pending the exact Taubes theorem proof and verification that its orientation and charge conventions match the present interface.
