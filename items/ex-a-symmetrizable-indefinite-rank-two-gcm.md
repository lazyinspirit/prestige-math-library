---
id: ex-a-symmetrizable-indefinite-rank-two-gcm
kind: example
title: "A symmetrizable indefinite rank two gcm"
status: draft
origin: pipeline
deps: ["thm-serre-presentation-of-a-kac-moody-algebra", "thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra", "def-real-and-imaginary-kac-moody-roots", "thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §4.1 and Theorem 9.3.5, pp.50–57 and 125–126; local degree-(1,1) calculation"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Example

The symmetric GCM $A=\begin{pmatrix}2&-3\\-3&2\end{pmatrix}$ is indefinite. The nonzero vector $[e_1,e_2]$ has imaginary root $\beta=\alpha_1+\alpha_2$ with squared length $-2$ for $D=I$.

## Facts & Assumptions

**Given:** The displayed rank-two matrix and D=I.

[F1] The positive half is free modulo its positive Serre ideal. ([[thm-serre-presentation-of-a-kac-moody-algebra]]).

[F2] The root metric has entries d_i a_ij. ([[thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra]]).

[F3] Imaginary means a root outside W Pi. ([[def-real-and-imaginary-kac-moody-roots]]).

[F4] A positive vector with negative image characterizes indefinite type. ([[thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms]]).

## Verification

1.1 The matrix meets every GCM condition, is connected and symmetric, has determinant $4-9=-5$, and $A(1,1)^t=(-1,-1)^t$. Hence it is indefinite by F4. [F4, given]

1.2 The two positive Serre generators have degrees $(4,1)$ and $(1,4)$, each of total height five. Every element of their generated positive ideal is a linear combination of these and positive adjoints, so has no component below height five. The free bracket $[e_1,e_2]$ is nonzero: its tensor image is the difference of the distinct words $e_1e_2-e_2e_1$. F1 therefore ensures its degree-(1,1) class survives. It is a root vector of weight $\beta$. [F1, given]

2.1 F2 gives $(\beta,\beta)=2+2-3-3=-2$. For each reflection, $(\alpha_i,\lambda)=\lambda(h_i)$ and $(\alpha_i,\alpha_i)=2$ make expansion of $(\lambda-\lambda(h_i)\alpha_i)^2$ equal to $(\lambda,\lambda)$. Thus every Weyl translate of a simple root has squared length 2. The root from step 1.2 has length −2, so cannot be such a translate and is imaginary by F3. [F2, F3, step 1.2] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §4.1 and Theorem 9.3.5, pp.50–57 and 125–126; local degree-(1,1) calculation.
