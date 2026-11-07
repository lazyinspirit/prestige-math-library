---
id: thm-faltings-hodge-tate-decomposition-for-smooth-proper-varieties
kind: theorem
title: Faltings Hodge–Tate decomposition for smooth proper varieties
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-hodge-tate-p-adic-galois-representation
  - def-p-adic-etale-and-crystalline-cohomology
  - lem-p-adic-etale-cohomology-is-a-continuous-finite-dimensional-representation
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part I, Chapter 2, Theorem 2.2.3
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section II.1.2
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Statement

Let $K/\mathbb Q_p$ be finite, let $X$ be a smooth proper $K$-scheme, and let $\bar X=X\times_K\bar K$. For every integer $n\ge0$, there is a canonical $G_K$-equivariant isomorphism of semilinear $C_p$-representations
$$C_p\otimes_{\mathbb Q_p}H^n_{\acute et}(\bar X,\mathbb Q_p)\cong\bigoplus_{q=0}^{n}\left(C_p(-q)\otimes_K H^{n-q}(X,\Omega^q_{X/K})\right),$$
where $G_K$ acts diagonally on each summand and trivially on the Hodge cohomology factor.

## Statement references

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part I, Chapter 2, Theorem 2.2.3](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §II.1.2](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** finite $K/\mathbb Q_p$, a smooth proper $K$-scheme $X$, and its geometric étale cohomology representation.

[F1] [[def-p-adic-etale-and-crystalline-cohomology]]: $H^n_{\acute et}(\bar X,\mathbb Q_p)$ is the inverse-limit p-adic étale cohomology group with its natural $G_K$-action, while $H^{n-q}(X,\Omega^q_{X/K})$ is Zariski sheaf cohomology of relative differentials.

[F2] [[def-hodge-tate-p-adic-galois-representation]]: a decomposition into $C_p(-q)$ twists is the Hodge–Tate convention, with weight index $q$.

[F3] [[lem-p-adic-etale-cohomology-is-a-continuous-finite-dimensional-representation]]: the source cohomology is a finite-dimensional continuous $G_K$-representation. This prerequisite is escalated pending its finite-level descent and proper-base-change proof inputs.

[A1] [[def-axiom-of-choice]]: the current étale-site and derived-cohomology formalization inherits AC through its injective-resolution suppliers; no additional choice is introduced in the comparison statement.

The source gives the exact comparison statement but not a complete local proof in the read material. Its proof also consumes the escalated finite-dimensionality/continuity prerequisite. The statement is retained without a proof and this item is escalated.
