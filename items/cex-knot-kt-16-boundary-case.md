---
id: cex-knot-kt-16-boundary-case
kind: counterexample
title: "Noncoprime torus slopes can be links"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 14
deps:
  - thm-torus-knot-alexander-and-genus-formulas
  - def-coprime-torus-knot
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "§5.1, printed pp. 26–27"
verification:
  precheck: pass
---

## Statement refuted

Assume the full Axiom of Choice. The claim that every nonzero integer pair $(p,q)$ determines a single torus knot and satisfies the coprime torus-knot genus formula is false: $(p,q)=(2,2)$ determines a two-component link.

## Statement references

[[def-coprime-torus-knot|The coprime knot and noncoprime link convention]]

[[thm-torus-knot-alexander-and-genus-formulas|The formula's coprime-knot hypotheses]]

[Cattabriga and Francaviglia, §5.1](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

## Facts & Assumptions

**Given:** Full AC and the nonzero parameter pair $(2,2)$.

[A1] Full AC is the choice-function axiom used by the knot and formula statements ([[def-axiom-of-choice]]).

[L1] Full AC implies Countable Choice, the hypothesis of the torus-knot definition ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] [[def-coprime-torus-knot]] specifies that when $d=\gcd(|p|,|q|)>1$, the corresponding torus link is the union of $d$ disjoint parallel copies of the primitive slope $(p/d,q/d)$.

[F2] [[thm-torus-knot-alexander-and-genus-formulas]] assumes coprime nonzero parameters and defines genus for a single knot.

## Counterexample

1.1 The greatest common divisor of $|2|$ and $|2|$ is $d=2>1$, so the pair $(2,2)$ is outside the coprime hypothesis in [F2]. [A1, F2, given, algebra]

2.1 Full AC [A1] supplies the countable-choice hypothesis of [F1] by [L1]. The associated torus link then consists of $d=2$ disjoint parallel copies of the primitive slope $(2/2,2/2)=(1,1)$. The two copies are separate embedded circles, so the result has two components and is not a knot. [A1, L1, F1, step 1.1, construct]

3.1 The knot genus formula in [F2] has no application to this pair: its coprimality hypothesis fails and its knot-genus input is not a single-component knot. Thus this example refutes extending that knot formula to all nonzero integer pairs. [F2, step 1.1, step 2.1, algebra] ∎

