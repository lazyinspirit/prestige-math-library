---
id: thm-qc-pauli-commutator-is-symplectic-pairing
kind: theorem
title: Pauli commutator is symplectic pairing
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-qc-pauli-product-and-adjoint
  - def-qc-binary-symplectic-form
justified_by: []
dependency_level: 9
sources:
  references:
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
    - title: "M. Hein et al., Entanglement in Graph States and Its Applications"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406196
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; the proof compares the finite phase-aware products."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For $a=(x,z)$ and $b=(x',z')$ in $V_n$ and any phases $k,k'$, 

$$P(k,x,z)P(k',x',z')=(-1)^{\omega(a,b)}P(k',x',z')P(k,x,z).$$

Thus the Pauli operators commute exactly when their labels are symplectically orthogonal.

## Facts & Assumptions

**Given:** the exact phase-aware product formula and the form $\omega((x,z),(x',z'))=x\cdot z'+z\cdot x'$.

[F1] [[thm-qc-pauli-product-and-adjoint]]: the ordered product phase is $k+k'+2(z\cdot x')$ modulo $4$.

[F2] [[def-qc-binary-symplectic-form]]: $\omega(a,b)=x\cdot z'+z\cdot x'$ over $\mathbb F_2$.

## Proof

1.1 The forward product has phase $k+k'+2(z\cdot x')$ by [F1]; the reversed product has phase $k+k'+2(z'\cdot x)$. Their binary labels agree. The difference of the exponents modulo $4$ is $2((z\cdot x')-(z'\cdot x))$, and subtraction equals addition in $\mathbb F_2$, so this difference is $2\omega(a,b)$ modulo $4$. [given, F1, F2, algebra]

2.1 Multiplication by the phase ratio $i^{2\omega(a,b)}=(-1)^{\omega(a,b)}$ gives the displayed identity. If $\omega=0$ it is commutation; if $\omega=1$, equality with the negative is impossible because a Pauli is a nonzero invertible matrix over $\mathbb C$. [given, step 1.1, algebra] ∎
