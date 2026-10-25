---
id: ex-conditioning-on-trivial-and-full-sigma-algebras
kind: example
title: "Conditioning on trivial and full sigma algebras"
status: published
origin: pipeline
deps: [lem-conditioning-a-known-variable-and-an-independent-variable, def-axiom-of-choice, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Under the AC conditional-class convention, for integrable real X, $E[X\mid\{\varnothing,\Omega\}]=EX$ and $E[X\mid\mathcal F]=X$ as classes.

## Facts & Assumptions

**Given:** A probability space and real integrable X; AC is the conditional-class convention.

[F1] A known variable conditions to itself, and a variable independent of the conditioning sigma-algebra conditions to its mean. ([[lem-conditioning-a-known-variable-and-an-independent-variable]])

[F2] Finite weights summing to one define a probability space. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]])

## Verification

**Proof technique:** direct.

1.1 Every X is independent of the trivial sigma-algebra: for A empty both sides of the rectangle identity are zero, and for A=Omega both equal $P(X\in B)$. Thus [F1] gives the first formula. Since X is F-measurable, the known-variable clause of [F1] gives the second. [F1]

2.1 For example take two atoms a,b of masses $1/4,3/4$ using [F2], and X(a)=0, X(b)=4. Then $EX=0/4+12/4=3$. Under trivial conditioning the version has values (3,3), with integral 3 on Omega; under full conditioning it has values (0,4), with integrals 0 on {a} and 3 on {b}. These verify the two formulas numerically. [step 1.1, F2] ∎

## Source notes

Durrett Examples 4.1.3–4.1.5, printed pp.207–208; van der Vaart Examples 1.4–1.5, printed p.2.
