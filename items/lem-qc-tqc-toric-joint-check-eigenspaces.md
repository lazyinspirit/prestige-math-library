---
id: lem-qc-tqc-toric-joint-check-eigenspaces
kind: lemma
title: Toric checks decompose into joint syndrome eigenspaces
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-qc-tqc-toric-checks
  - def-qc-tqc-toric-excitations
  - lem-qc-tqc-toric-check-commutation
  - lem-qc-tqc-toric-incidence-ranks
  - def-qc-pauli-matrices
justified_by: []
proof_strategy: direct
axiom_use: "None; all syndrome projectors are finite products and sums."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Statement

Delete the star $A_{0,0}$ and plaquette $B_{0,0}$ from the full check list,
and call the remaining $r=2L^2-2$ checks $g_1,\ldots,g_r$. They are
independent commuting Hermitian involutions. For each sign string
$s\in\mathbb F_2^r$, the operator

$$P_s=\prod_{a=1}^r\frac{I+(-1)^{s_a}g_a}{2}$$

is the orthogonal projection onto the corresponding joint eigenspace; the
$P_s$ are pairwise orthogonal and sum to the identity. The omitted checks
are determined by the retained ones, so every nonzero syndrome sector has
an even number of e defects and an even number of m defects.

## Facts & Assumptions

**Given:** The periodic toric checks for $L\ge3$ and the physical Hilbert space on $2L^2$ qubits.

[F1] [[def-qc-tqc-toric-checks]]: every check is a Hermitian involution supported on four distinct edge qubits.

[F2] [[lem-qc-tqc-toric-check-commutation]]: all checks commute, and the product of all stars and the product of all plaquettes are both $I$.

[F3] [[lem-qc-tqc-toric-incidence-ranks]]: after deleting one fixed star and one fixed plaquette, the remaining star and face-boundary supports are independent within their respective X and Z coordinates.

[F4] [[def-qc-tqc-toric-excitations]]: e and m defects are exactly the negative star and plaquette checks, respectively.

## Proof

1.1 A product of retained checks with identity binary support must have zero X support and zero Z support separately. By [F3], this forces the selected star subset and plaquette subset both to be empty, so the retained checks are independent. By [F1] and [F2] they are commuting Hermitian involutions. For a retained check $g_a$ and sign $s_a$, put $p_{a,s_a}=(I+(-1)^{s_a}g_a)/2$. Direct expansion using $g_a^*=g_a$ and $g_a^2=I$ gives $p_{a,s_a}^*=p_{a,s_a}$ and $p_{a,s_a}^2=p_{a,s_a}$. The checks commute, so their factors commute; hence $P_s$ is a self-adjoint idempotent, thus an orthogonal projection. [F1, F2, F3, given, algebra]

2.1 If $s\ne t$, choose an index $a$ with $s_a\ne t_a$. Then $p_{a,s_a}p_{a,t_a}=(I-g_a^2)/4=0$, so $P_sP_t=0$. Summing over all sign strings and distributing the finite product gives $\sum_sP_s=\prod_a(p_{a,0}+p_{a,1})=I$. Thus the ranges are pairwise orthogonal and their direct sum is the whole Hilbert space; zero projections are allowed. [F1, step 1.1, algebra]

3.1 By [F2], the omitted star is the product of all retained stars, so on $\operatorname{ran}P_s$ its eigenvalue is the product of their signs; the product of the eigenvalues over all stars is therefore $+1$. A finite list of signs in $\{+1,-1\}$ has product $+1$ exactly when it contains an even number of minus signs. The same argument for the omitted plaquette gives even parity for the negative plaquette checks. By [F4], these are the e and m defect parities. The projectors therefore decompose the register into the stated full-check syndrome sectors. [F2, F4, step 2.1, algebra] ∎

