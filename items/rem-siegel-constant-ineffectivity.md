---
id: rem-siegel-constant-ineffectivity
kind: remark
title: The Siegel constant is not effectively computable by this proof
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - thm-siegel-ineffective-lower-bound-dirichlet-l-at-one
  - thm-siegel-ineffective-lower-bound-dirichlet-zero
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Theorem 10.3 ineffectivity discussion and Corollary 10.5, printed pp. 76–79.
    - title: Philippe Michel, Analytic Number Theory and Families of L-functions, Park City lecture notes
      url: https://www.epfl.ch/labs/tan/wp-content/uploads/2018/10/Parkcitylectures.pdf
      locator: Siegel proof and Remark 1.7, printed pp. 22–23.

---




## Remark

For the Siegel lower bound $L(1,\chi)\ge c_\varepsilon q^{-\varepsilon}$ and its real-zero consequence, this proof is ineffective: it supplies no algorithm that computes a positive numerical value of $c_\varepsilon$ from $\varepsilon$. This records a limitation of the proof, not a claim that no effective proof or value can exist.

## Remark references

[[thm-siegel-ineffective-lower-bound-dirichlet-l-at-one|Siegel lower bound at one]]

[[thm-siegel-ineffective-lower-bound-dirichlet-zero|Siegel lower bound for the distance of a real zero from one]]

## Facts & Assumptions

**Given:** A real $\varepsilon>0$ and the two Siegel lower-bound theorems.

[F1] For each $\varepsilon>0$, the lower bound at one holds with some positive constant, but its proof gives no effective procedure for computing that constant ([[thm-siegel-ineffective-lower-bound-dirichlet-l-at-one]]).

[F2] The real-zero distance bound has a positive constant inherited from the lower bound at one and the derivative estimate ([[thm-siegel-ineffective-lower-bound-dirichlet-zero]]).

## Proof

**Given:** The constants and proof routes in [F1]–[F2].

1.1 The statement of [F1] explicitly qualifies its positive constant as not effectively computable by the proof. This makes ineffectivity a limitation of that argument, not a stronger assertion about every possible proof. [F1, given, algebra]

2.1 The conclusion in [F2] uses the same ineffective lower-bound constant supplied by [F1], so this proof also gives no effective value for the zero-distance constant. This is exactly the limitation stated in the Remark and does not imply that an effective bound is impossible by another method. [F1, F2, step 1.1, algebra] ∎

