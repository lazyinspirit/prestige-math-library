---
id: thm-one-step-simultaneous-root-extension
kind: theorem
title: "Assuming Choice, every field has an algebraic extension containing roots of all nonconstant base polynomials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-artin-simultaneous-root-ideal-is-proper, thm-proper-ideal-contained-in-maximal-ideal, thm-quotient-is-field-iff-ideal-maximal, thm-finitely-generated-algebraic-extensions-are-finite, thm-zorn, thm-finite-field-extensions-are-algebraic]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. For every field $F$ there is an algebraic extension
$L/F$ such that every nonconstant polynomial in $F[x]$ has a root in $L$. The
construction uses Zorn's lemma to place Artin's proper ideal inside a maximal
ideal.

## Facts & Assumptions

**Given:** A field $F$, the set $\mathcal S$ of its monic nonconstant polynomials, $A=F[x_f:f\in\mathcal S]$, and $I=(f(x_f):f\in\mathcal S)$.

[L1] Artin's ideal $I$ is proper ([[lem-artin-simultaneous-root-ideal-is-proper]]).

[L2] Assuming Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L3] The quotient of a commutative ring by a maximal ideal is a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L4] If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] Assuming Choice, a nonempty poset whose chains have upper bounds has a maximal element ([[thm-zorn]]).

[L6] Every finite field extension $K/F$ is algebraic: each $a\in K$ is a root of a nonzero polynomial in $F[t]$ ([[thm-finite-field-extensions-are-algebraic]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$. [L1, L2, L5, choose]

2.1 Put $L=A/M$. By [L3] this is a field. The composite $F\to A\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\in M$, so it identifies $F$ with a subfield of $L$. [step 1.1, L3, construct]

3.1 For each $f\in\mathcal S$, the residue $\overline{x_f}\in L$ satisfies $f(\overline{x_f})=0$ because $f(x_f)\in I\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$. [step 1.1, step 2.1, algebra]

4.1 Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\ldots,x_{f_r}$, hence lies in $F(\overline{x_{f_1}},\ldots,\overline{x_{f_r}})$. Each residue is algebraic over $F$, so [L4] makes this subextension finite and [L6] makes it algebraic. Thus $L/F$ is algebraic. [step 2.1, step 3.1, L4, L6]

5.1 The field $L$ constructed above is the required algebraic root extension, and the only choice principle used is the maximal-ideal application in step 1.1. [step 1.1, step 3.1, step 4.1, discharge-construct] ∎
