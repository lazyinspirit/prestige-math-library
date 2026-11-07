---
id: def-p-typical-witt-vectors-of-a-perfect-field
kind: definition
title: P-typical Witt vectors of a perfect field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-p-typical-witt-vectors-of-a-perfect-ring
justified_by:
- lem-perfect-field-witt-ring-is-a-complete-discrete-valuation-ring
- lem-finite-field-witt-ring-is-unramified-of-residue-degree
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Joseph Rabinoff, The theory of Witt vectors, Theorem 2.6, Corollary 2.10,
      Theorem 2.13, section 5
    url: https://arxiv.org/abs/1409.7445
  - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge
      Theory, section 4.2, printed pages 48–51
    url: https://math.stanford.edu/~conrad/papers/notes.pdf
verification:
  precheck: n/a
---

## Definition

Let $p$ be a prime and $k$ a perfect field of characteristic $p$. The ring of $p$-typical Witt vectors $W_p(k)$ is the perfect-ring Witt construction for $R=k$: its underlying set is $k^{\mathbb N}$ and its operations are the unique integral coordinate polynomials satisfying the formal ghost identities over integer polynomial rings, evaluated in $k$. Its Witt Frobenius is $\sigma((a_i))=(a_i^p)$, an automorphism lifting Frobenius on the residue field.

For every such perfect field, $W_p(k)$ is a characteristic-zero complete discrete valuation ring with uniformizer $p$, residue field $k$ and normalized valuation $v_p(p)=1$. Its fraction field is
$$K_0:=W_p(k)[1/p].$$
These assertions, including the full infinite perfect-field scope, are proved in the perfect-field complete DVR lemma. If $k$ is finite of degree $f$ over $\mathbb F_p$, then $W_p(k)$ is free of rank $f$ over $\mathbb Z_p$, $K_0$ is the unramified extension of $\mathbb Q_p$ of degree $f$ up to $\mathbb Q_p$-isomorphism, and $\sigma$ has exact order $f$ (in particular $\sigma^f=1$), by the finite-field unramified-degree lemma. No choice axiom is used in these assertions.

## Definition references

[[def-p-typical-witt-vectors-of-a-perfect-ring]]

[[lem-perfect-field-witt-ring-is-a-complete-discrete-valuation-ring]]

[[lem-finite-field-witt-ring-is-unramified-of-residue-degree]]

[Joseph Rabinoff, *The theory of Witt vectors*, sections 2–5](https://arxiv.org/abs/1409.7445)

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, §4.2, pp.48–51](https://math.stanford.edu/~conrad/papers/notes.pdf)
