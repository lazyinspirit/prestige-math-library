---
id: thm-relative-cellular-homology-computes-relative-singular-homology
kind: theorem
title: Relative cellular homology computes relative singular homology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cellular-homology-computes-singular-homology, thm-relative-homology-of-consecutive-cw-skeleta, def-skeleta-cw-subcomplex-and-relative-cw-complex, cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: J. Peter May, A Concise Course in Algebraic Topology, Chapter 13
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
    - title: Allen Hatcher, Algebraic Topology, Proposition A.5 and Section 2.1
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For a CW pair $(X,A)$, the quotient cellular complex $C_*^{\mathrm{cell}}(X;G)/C_*^{\mathrm{cell}}(A;G)$, whose degree-$n$ group is $\bigoplus_{e^n\subseteq X\setminus A}G$, computes $H_*(X,A;G)$.

## Facts & Assumptions

**Given:** A CW pair $(X,A)$.

## Proof

**Proof technique:** direct.

1.1 If $A=\varnothing$, the assertion is the absolute cellular-homology theorem.  Suppose $A\ne\varnothing$.  The quotient $X/A$ is a CW complex with one base vertex coming from $A$ and exactly the cells of $X\setminus A$ otherwise.  Consequently its reduced cellular complex is canonically $C_*^{\mathrm{cell}}(X;G)/C_*^{\mathrm{cell}}(A;G)$, including in degree zero. [given]

2.1 A CW subcomplex is closed.  The cellwise radial collar construction, assembled over the skeleta by the weak topology, gives an open neighborhood $V$ of $A$ that deformation retracts onto $A$ while fixing $A$; equivalently, every nonempty CW pair is a good pair.  Therefore [[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]] identifies $H_*(X,A;G)$ with $\widetilde H_*(X/A;G)$.  Applying [[thm-cellular-homology-computes-singular-homology]] to $X/A$ and using step 1.1 proves the claim.  Under this identification, the triple connecting maps for the relative skeleta are exactly the quotient cellular differential. [step 1.1, construct] ∎
