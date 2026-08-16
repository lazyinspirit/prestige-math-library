---
id: ex-jordan-chevalley-decomposition-from-jordan-blocks
kind: example
title: "Computing commuting diagonal and nilpotent parts of a split Jordan matrix"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-primary-projections-are-polynomials-in-the-endomorphism, prop-generalised-eigenspaces-and-algebraic-multiplicity]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Over any field, put $T=J_2(0)\oplus J_2(1)$. Then
$$D=0I_2\oplus I_2=3T^2-2T^3,\qquad N=T-D=J_2(0)\oplus J_2(0).$$
Thus $T=D+N$, the operator $D$ is diagonal, $N^2=0$, and $DN=ND$.

## Facts & Assumptions

**Given:** The displayed block diagonal operator $T$.

[L1] For a split minimal polynomial, the primary projections are polynomials in the endomorphism ([[cor-primary-projections-are-polynomials-in-the-endomorphism]]).

[L2] On each generalised eigenspace, the operator is the eigenvalue scalar plus a nilpotent operator ([[prop-generalised-eigenspaces-and-algebraic-multiplicity]]).

## Verification

**Proof technique:** computation.

1.1 For $h(x)=3x^2-2x^3$, one has $h(0)=h'(0)=0$ and $h(1)=1$, $h'(1)=0$; evaluating on the two size-two blocks therefore gives $h(J_2(0))=0$ and $h(J_2(1))=I_2$. These identities remain valid in characteristics $2$ and $3$ by direct reduction. [L1, algebra]

2.1 Hence $D=h(T)$ is the scalar part on the two generalised eigenspaces, while $N=T-D$ is the direct sum of their nilpotent parts as in [L2]. [step 1.1, L2]

3.1 The displayed blocks give $N^2=0$ and $DN=ND$; commutation also follows because both $D$ and $N=T-h(T)$ are polynomials in $T$. [step 2.1, algebra] ∎
