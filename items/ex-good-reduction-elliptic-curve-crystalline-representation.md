---
id: ex-good-reduction-elliptic-curve-crystalline-representation
kind: example
title: Crystalline representation from an elliptic curve with good reduction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - thm-good-reduction-etale-cohomology-is-crystalline
  - def-p-adic-etale-and-crystalline-cohomology
  - lem-p-adic-etale-cohomology-is-a-continuous-finite-dimensional-representation
  - def-smooth-proper-model-over-a-p-adic-dvr
  - def-abelian-variety-over-a-field
  - def-good-reduction-and-abelian-scheme-model
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Takeshi Tsuji, Semi-stable conjecture of Fontaine–Jannsen: a survey, Theorem 1.1 and Section 4"
      url: https://www.numdam.org/item/AST_2002__279__323_0.pdf
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 7, Section 7.3
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
verification:
  precheck: n/a
---

## Example

Let $K/\mathbb Q_p$ be finite and let $E/K$ be an elliptic curve with good reduction. Its first geometric $p$-adic étale cohomology representation $H^1_{\acute et}(E\times_K\bar K,\mathbb Q_p)$ is crystalline.

## Example references

[[thm-good-reduction-etale-cohomology-is-crystalline]]

[[def-p-adic-etale-and-crystalline-cohomology]]

[[def-good-reduction-and-abelian-scheme-model]]

[Takeshi Tsuji, *Semi-stable conjecture of Fontaine–Jannsen: a survey*, Theorem 1.1 and §4](https://www.numdam.org/item/AST_2002__279__323_0.pdf)

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 7, §7.3](https://math.stanford.edu/~conrad/papers/notes.pdf)

## Facts & Assumptions

**Given:** a finite extension $K/\mathbb Q_p$, an elliptic curve $E/K$, and a good-reduction model over $\mathcal O_K$.

[F1] [[def-abelian-variety-over-a-field]]: an elliptic curve is a one-dimensional abelian variety.

[F2] [[def-good-reduction-and-abelian-scheme-model]]: good reduction supplies an abelian-scheme model over $\mathcal O_K$, whose structure morphism is proper and smooth.

[F3] [[thm-good-reduction-etale-cohomology-is-crystalline]]: every geometric p-adic étale cohomology representation of a proper smooth good-reduction model is crystalline. This theorem remains escalated, so it is not a proof-complete supplier.

[A1] [[def-axiom-of-choice]] is inherited through the étale cohomology foundations.

The example depends on the unresolved p-adic étale–crystalline comparison and on the finite-dimensional continuous representation prerequisite. It is retained at full strength and escalated; no proof or acceptance is inferred from the theorem statement.
