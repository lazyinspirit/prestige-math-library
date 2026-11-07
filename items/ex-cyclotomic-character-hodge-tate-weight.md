---
id: ex-cyclotomic-character-hodge-tate-weight
kind: example
title: The cyclotomic character and its Hodge–Tate weight
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-hodge-tate-p-adic-galois-representation
  - def-local-p-adic-cyclotomic-character
  - lem-local-p-adic-cyclotomic-character-is-continuous
  - def-local-p-adic-galois-representation
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 2, Section 2.2
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section II.1.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
proof_strategy: direct
---

## Example

For finite $K/\mathbb Q_p$, the one-dimensional representation $\mathbb Q_p(1)$ has an explicit Hodge–Tate decomposition $C_p\otimes_{\mathbb Q_p}\mathbb Q_p(1)\cong C_p(-(-1))$; under the stated convention it is a single summand of weight index $-1$.

## Example references

[[def-hodge-tate-p-adic-galois-representation]]

[[def-local-p-adic-cyclotomic-character]]

[[lem-local-p-adic-cyclotomic-character-is-continuous]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part I, Chapter 2, §2.2](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §II.1.2](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** finite $K/\mathbb Q_p$, the compatible roots of unity used to define the cyclotomic character, and the one-dimensional $\mathbb Q_p$-space underlying $\mathbb Q_p(1)$.

[F1] [[def-local-p-adic-cyclotomic-character]]: $G_K$ acts on $\mathbb Q_p(1)$ through $\chi_p$.

[F2] [[lem-local-p-adic-cyclotomic-character-is-continuous]]: $\chi_p:G_K\to\mathbb Z_p^\times$ is continuous.

[F3] [[def-local-p-adic-galois-representation]]: a finite-dimensional $\mathbb Q_p$-space with continuous $G_K$-action is a local p-adic representation.

[F4] [[def-hodge-tate-p-adic-galois-representation]]: a decomposition $C_p\otimes V\cong C_p(-j)$ gives a Hodge–Tate summand of weight index $j$.

## Proof

1.1 By [F1] and [F2], the action on the one-dimensional $\mathbb Q_p$-space $\mathbb Q_p(1)$ is a continuous homomorphism $G_K\to\mathbb Q_p^\times$, since $\mathbb Z_p^\times$ has its subspace topology in $\mathbb Q_p^\times$. Thus [F3] makes it a local p-adic representation to which [F4] applies. [given, F1, F2, F3, F4]

1.2 By the definition of the twist, $C_p\otimes_{\mathbb Q_p}\mathbb Q_p(1)=C_p(1)=C_p(-(-1))$ as $G_K$-representations. This is the required one-dimensional decomposition, so its displayed weight index is $-1$. [given, F1, F4, algebra] ∎
