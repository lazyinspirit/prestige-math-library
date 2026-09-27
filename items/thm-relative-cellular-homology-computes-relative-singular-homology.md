---
id: thm-relative-cellular-homology-computes-relative-singular-homology
kind: theorem
title: Relative cellular homology computes relative singular homology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cellular-homology-computes-singular-homology, thm-relative-homology-of-consecutive-cw-skeleta, def-skeleta-cw-subcomplex-and-relative-cw-complex, lem-cw-quotient-induces-relative-singular-homology-isomorphisms]
proof_strategy: direct
sources:
  references:
    - title: J. Peter May, A Concise Course in Algebraic Topology, Chapter 13
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
    - title: Allen Hatcher, Algebraic Topology, Proposition A.5 and Section 2.1
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-09-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For a CW pair $(X,A)$, the quotient cellular complex $C_*^{\mathrm{cell}}(X;G)/C_*^{\mathrm{cell}}(A;G)$, whose degree-$n$ group is $\bigoplus_{e^n\subseteq X\setminus A}G$, computes $H_*(X,A;G)$.

## Facts & Assumptions

**Given:** A CW pair $(X,A)$.

## Proof

**Proof technique:** direct.

1.1 If $A=\varnothing$, the assertion is the absolute cellular-homology theorem. Suppose $A\ne\varnothing$. The quotient $X/A$ is a CW complex with one base vertex $*$ coming from $A$ and exactly the cells of $X\setminus A$ otherwise. In degree zero the reduced cellular group is the augmentation kernel in $C_0^{\mathrm{cell}}(X/A;G)$. It is identified with the quotient degree-zero group by sending each outside vertex generator $e$ with coefficient $g$ to $g(e-*)$; this is an isomorphism even when there are infinitely many vertices, since each chain has finite support. In higher degrees the quotient and reduced groups have identical outside-cell bases. Their differentials agree: deleting an $A$-vertex in the quotient is exactly rewriting it as the base vertex in the augmentation-kernel basis. Thus the two complexes are canonically isomorphic in every degree. [given]

2.1 The published CW-quotient comparison [[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]] directly identifies $H_*(X,A;G)$ with $H_*(X/A,\{*\};G)=\widetilde H_*(X/A;G)$ for nonempty $A$, without assuming a pre-existing neighborhood retraction. Applying [[thm-cellular-homology-computes-singular-homology]] to $X/A$ and using step 1.1 gives the claimed groups. Under this identification, the triple connecting maps for the relative skeleta are exactly the quotient cellular differential. [step 1.1] ∎
