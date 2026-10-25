---
id: fs-every-lie-subalgebra-is-an-ideal
kind: false-statement
title: Not every Lie subalgebra is an ideal
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-subalgebra-ideal-and-center]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Lie subalgebras and ideals in §8.3, printed pp. 50–51"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

Every Lie subalgebra is an ideal.

## Facts & Assumptions

**Given:** The asserted implication from Lie subalgebra to ideal.

[L1] A subalgebra is closed under its internal brackets, whereas an ideal must be closed under brackets with every ambient element ([[def-lie-subalgebra-ideal-and-center]]).

## Refutation

**Proof technique:** direct counterexample.

1.1 Over any field, inside the commutator Lie algebra of $2\times2$ matrices take $h=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$. Their span $\mathfrak g=kh\oplus ke$ is bracket-closed and satisfies $[h,e]=e$. [construct, algebra]

2.1 The line $kh$ is a Lie subalgebra because $[h,h]=0$, but it is not an ideal because $[e,h]=-e\notin kh$. This violates the asserted implication in every characteristic. [step 1.1, L1] ∎
