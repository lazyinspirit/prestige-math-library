---
id: thm-qc-dirac-adjoint-amplitude-translation
kind: theorem
title: Dirac Adjoint Amplitude Translation
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-linear-map
  - def-qc-dirac-notation-conversion
  - def-real-and-complex-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
justified_by: []
proof_strategy: direct
axiom_use: None; only the finite-dimensional adjoint theorem is used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapters 1–2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.5 and A.10"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, let $T:H\to K$
be linear, and let $x\in K$, $y\in H$. With the Dirac conversion
[[def-qc-dirac-notation-conversion]],

$$\langle x|T|y\rangle_D:=\langle x|Ty\rangle_D =\langle Ty,x\rangle_{K,\mathrm{root}} =\langle y,T^*x\rangle_{H,\mathrm{root}} =\langle T^*x|y\rangle_D.$$

## Facts & Assumptions
**Given:** Finite-dimensional complex inner-product spaces $H,K$, a linear map
$T:H\to K$, and vectors $x\in K$, $y\in H$.

[F1] The Dirac pairing reverses the root pairing:
$\langle a|b\rangle_D=\langle b,a\rangle_{\mathrm{root}}$
([[def-qc-dirac-notation-conversion]]).

[F2] The adjoint satisfies
$\langle Tv,w\rangle_K=\langle v,T^*w\rangle_H$
([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F3] Every linear map between finite-dimensional inner-product spaces has a
unique adjoint ([[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

## Proof

1.1 The adjoint $T^*$ exists by [F3]. The definition [F1] gives $\langle x|T|y\rangle_D=\langle Ty,x\rangle_{K,\mathrm{root}}$. [given, F1, F3]

2.1 Apply [F2] with $v=y$ and $w=x$, then apply [F1] again. This gives $\langle Ty,x\rangle_{K,\mathrm{root}}=\langle y,T^*x\rangle_{H,\mathrm{root}} =\langle T^*x|y\rangle_D$, proving the stated chain. [F1, F2, step 1.1] ∎
