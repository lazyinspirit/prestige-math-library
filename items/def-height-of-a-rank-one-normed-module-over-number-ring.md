---
id: def-height-of-a-rank-one-normed-module-over-number-ring
kind: definition
title: "Height of a rank-one normed module over a number ring"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-archimedean-embeddings-and-number-field-signature
  - def-fractional-ideal
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - lem-rank-one-projective-embedded-as-a-fractional-ideal
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-product-formula-for-number-fields
justified_by:
  - thm-height-of-a-rank-one-normed-module-independent-of-element
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Chapter IV, §6, printed pp. 151–152, definition of normed-module height and Lemma 6.2"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $K$ be a number field, let $R=\mathcal O_K$, and let $M$ be a finitely generated projective $R$-module of rank one, meaning $M\otimes_R K\cong K$. For each archimedean place $v$ of $K$, choose a norm $\|\cdot\|_v$ on the one-dimensional $K_v$-vector space $M\otimes_R K_v$, taking one place from each complex-conjugate pair. For $0\ne m\in M$, the quotient $M/Rm$ is finite and we define
$$H_m(M):=\frac{\#(M/Rm)}{\prod_{v\mid\infty}\|m\|_v^{\epsilon_v}},\qquad \epsilon_v=\begin{cases}1,&v\text{ real},\\2,&v\text{ complex}.\end{cases}$$
The height is the common value $H(M)=H_m(M)$, whose independence of $m$ is established by the accompanying well-definedness theorem, and its logarithmic normalization is $h(M)=[K:\mathbb Q]^{-1}\log H(M)$.

## Definition references

[Milne, Abelian Varieties, Chapter IV, §6](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, its ring of integers $R=\mathcal O_K$, a rank-one projective $R$-module $M$, archimedean norms, and a nonzero $m\in M$.

[F1] A number field is a finite extension of $\mathbb Q$, and $R=\mathcal O_K$ is its ring of integers ([[def-number-field]], [[def-ring-of-integers-of-a-number-field]]).

[F2] A rank-one finite projective module embeds as a fractional ideal; every nonzero number-field ideal has finite additive quotient ([[lem-rank-one-projective-embedded-as-a-fractional-ideal]], [[def-fractional-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F3] The principal ideal norm equals the absolute field norm ([[thm-principal-ideal-norm-is-absolute-field-norm]]).

[F4] The normalized finite and infinite absolute values satisfy the product formula under the Axiom of Choice ([[def-axiom-of-choice]], [[def-archimedean-embeddings-and-number-field-signature]], [[thm-product-formula-for-number-fields]]).
