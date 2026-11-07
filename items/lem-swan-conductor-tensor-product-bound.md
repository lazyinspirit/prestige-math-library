---
id: lem-swan-conductor-tensor-product-bound
kind: lemma
title: "Tensor-product bound for Swan conductors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-swan-conductor-of-an-l-adic-inertia-representation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: pending
---
## Statement

Let $K_x$ be a geometric local field of residue characteristic $p$, let $\ell\ne p$, and let $V,W$ be finite-dimensional continuous $\mathbb Q_\ell$-representations whose positive upper ramification groups act through finite images. Then
$$\operatorname{Sw}_x(V\otimes W)\leq \dim(W)\operatorname{Sw}_x(V)+\dim(V)\operatorname{Sw}_x(W).$$

## Statement references

[[def-swan-conductor-of-an-l-adic-inertia-representation|Swan conductor of an l-adic inertia representation]]

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, §3.6](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The finite-dimensional representations $V,W$ and their upper-numbering Swan conductors.

[F1] [[def-swan-conductor-of-an-l-adic-inertia-representation]]: $\operatorname{Sw}(V)=\int_0^\infty\operatorname{codim}V^{G^v}\,dv$.

## Proof

1.1 Fix $v>0$, and put $a=\operatorname{codim}V^{G^v}$ and $b=\operatorname{codim}W^{G^v}$. The tensor product of invariant subspaces is fixed, so $V^{G^v}\otimes W^{G^v}\subseteq(V\otimes W)^{G^v}$. Therefore $\operatorname{codim}(V\otimes W)^{G^v}\leq \dim(V)\dim(W)-(\dim(V)-a)(\dim(W)-b)\leq \dim(W)a+\dim(V)b$. The last inequality follows because the difference between its right-hand side and the preceding expression is $ab\geq0$. [F1, given, algebra]

2.1 Integrating the pointwise inequality of step 1.1 over $v>0$ and using [F1] for $V$, $W$, and $V\otimes W$ gives the asserted Swan bound. The integrals are finite by the finite-image hypothesis. [F1, step 1.1, algebra] ∎
