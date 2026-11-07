---
id: ex-elliptic-curves-good-outside-fixed-set
kind: example
title: "Elliptic curves over Q with good reduction outside {2}"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-number-field
  - def-abelian-variety-over-a-field
  - def-good-reduction-and-abelian-scheme-model
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-shafarevich-finiteness-for-abelian-varieties
justified_by: []
proof_strategy: direct
axiom_use: "The example inherits AC, DC, and Countable Choice from the applied theorem; the specialization adds no choice principle."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

Assume AC, DC, and Countable Choice. In this example, an elliptic curve means a one-dimensional abelian variety. Let $\mathcal E_2$ be the set of $\mathbb Q$-isomorphism classes of elliptic curves over $\mathbb Q$ with good reduction at every odd prime. Good reduction means extension to an abelian scheme over $\mathbb Z_p$ at each such prime $p$. Then $\mathcal E_2$ is finite.

## Example references

[[thm-shafarevich-finiteness-for-abelian-varieties]]

## Facts & Assumptions

**Given:** AC, DC, Countable Choice, and the family $\mathcal E_2$ defined above.

[A1] [[def-axiom-of-choice]]: AC says every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: DC says that if a relation is entire on a nonempty set, then from any prescribed starting point there is a sequence following that relation.

[A3] [[def-countable-choice]]: Countable Choice says every sequence of nonempty sets has a choice function indexed by $\mathbb N$.

[F1] [[def-number-field]]: a number field is a finite extension of $\mathbb Q$, so $\mathbb Q$ is a number field.

[F2] [[def-abelian-variety-over-a-field]]: an abelian variety is a proper geometrically connected group variety; in this example the objects have dimension one.

[F3] [[def-good-reduction-and-abelian-scheme-model]]: good reduction at $p$ means existence of an abelian scheme model over the valuation ring $\mathbb Z_p$.

[F4] [[thm-shafarevich-finiteness-for-abelian-varieties]]: under AC, DC, and Countable Choice, for any number field $K$, dimension $g\ge1$, and finite set $S$ of finite places, only finitely many $K$-isomorphism classes of dimension-$g$ abelian varieties have good reduction outside $S$.

## Verification

**Given:** [F1]–[F4], AC, DC, and Countable Choice.

1.1 The field $\mathbb Q$ is a number field by [F1]; take $g=1$ and $S=\{(2)\}$, which is a finite set of finite places. By [F2] and [F3], $\mathcal E_2$ is exactly the family of dimension-one abelian varieties in the theorem for these parameters. [given, F1, F2, F3, construct]

2.1 Apply [F4] with $K=\mathbb Q$, $g=1$, and $S=\{(2)\}$. Its conclusion is precisely that $\mathcal E_2$ is finite. [A1, A2, A3, F4, step 1.1] ∎
