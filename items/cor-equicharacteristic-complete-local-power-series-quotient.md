---
id: cor-equicharacteristic-complete-local-power-series-quotient
kind: corollary
title: "A complete equicharacteristic Noetherian local ring is a power-series quotient"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-equicharacteristic-complete-local-ring-has-coefficient-field, lem-cohen-presentation-surjective-by-completeness]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 22.33"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $(A,\mathfrak m)$ be a complete equicharacteristic Noetherian local ring,
let $k=A/\mathfrak m$, and let
$$e=\dim_k(\mathfrak m/\mathfrak m^2).$$
Then there is a surjective $k$-algebra homomorphism
$$k\llbracket X_1,\ldots,X_e\rrbracket \twoheadrightarrow A.$$

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local ring $(A,\mathfrak m)$ and the Axiom of Choice.

[L1] The ring $A$ contains a coefficient field mapping isomorphically to its
residue field ([[cor-equicharacteristic-complete-local-ring-has-coefficient-field]]).

[L2] Once the coefficient field and lifts of a basis of $\mathfrak m/\mathfrak m^2$
are chosen, the associated formal-series map is surjective
([[lem-cohen-presentation-surjective-by-completeness]]).

## Proof

**Proof technique:** choose a coefficient field and generators of $\mathfrak m/\mathfrak m^2$.

1.1 By [L1], choose a coefficient field $k \subseteq A$. Choose elements $x_1,\ldots,x_e \in \mathfrak m$ lifting a $k$-basis of $\mathfrak m/\mathfrak m^2$. [L1, given, choose]

2.1 The universal substitution construction gives a continuous $k$-algebra map $$\phi:k\llbracket X_1,\ldots,X_e\rrbracket \to A, \qquad X_i \mapsto x_i.$$ By [L2], this map is surjective. [L2, step 1.1]

3.1 Therefore $A$ is a quotient of the formal power-series ring in $e$ variables over its residue field. [step 2.1] ∎
