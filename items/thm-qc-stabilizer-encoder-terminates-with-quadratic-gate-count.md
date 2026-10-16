---
id: thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count
kind: theorem
title: Termination and gate count of symplectic stabilizer elimination
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qc-stabilizer-encoder-by-symplectic-elimination
  - lem-qc-cnot-pauli-action
  - lem-qc-hadamard-pauli-action
  - lem-qc-phase-gate-pauli-action
justified_by: []
proof_strategy: direct
axiom_use: "None; the loop is finite and each input row is a finite binary string."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

On every valid input of $r$ independent commuting signed Hermitian Pauli
generators on $n$ wires, the phase-aware symplectic-elimination encoder
terminates after $r$ pivots, uses at most $r(3n+1)$ elementary gates, and
stores $O(rn+r^2+rn\log(n+1))$ bits including its output gate list, excluding
the read-only input tableau and the implicit wire count.

## Facts & Assumptions

**Given:** A valid tableau with $r\le n$ independent commuting rows and the
procedure in the stabilizer encoder definition.

[F1] [[alg-qc-stabilizer-encoder-by-symplectic-elimination]]: each pivot
interchanges the selected row into row $j$ when needed, normalizes it to
$+Z_j$, clears all remaining rows on wire $j$, and records the gates and
signed row-operation data.

[F2] [[lem-qc-hadamard-pauli-action]]: conjugation by $H$ exchanges the
binary $X$ and $Z$ coordinates.

[F3] [[lem-qc-phase-gate-pauli-action]]: conjugation by $S$ updates the
binary label and tracks the phase exactly; its inverse gate has the inverse
update.

[F4] [[lem-qc-cnot-pauli-action]]: CNOT conjugation updates the binary
coordinates and phase exactly.

## Proof

1.1 After $j$ pivots, the first $j$ rows are $+Z_0,\ldots,+Z_{j-1}$, and every remaining row has zero $X$ and $Z$ coordinates on those $j$ wires. This holds before the first pivot. At pivot $j$, the selected row is interchanged into row $j$ when necessary; the interchange also updates the signed row-operation data and is not a circuit gate. All circuit gates act only on unused wires. For any zero-based circuit wire $q$, the one-based factor index in [F2]–[F4] is $q+1$; a CNOT with circuit control $q$ and target $s$ therefore uses supplier indices $q+1,s+1$. The local Clifford gates turn each nonidentity pivot factor into $Z$, and [F4] clears every other pivot-row $Z$ using a control on that wire and target $j$. Commutation is preserved by conjugation, so remaining rows have no $X_j$ factor. Row multiplication by the pivot then clears $Z_j$ without changing earlier wires. [F1, F2, F3, F4, algebra]

2.1 The remaining $r-j$ binary row labels are independent on the unused $n-j$ wires: a dependence there would be a dependence among the original labels because all earlier coordinates are already zero. Since $r-j>0$ when $j<r$, at least one remaining row is nonidentity on an unused wire. Thus every valid pivot finds a row and a wire, and the loop executes exactly $r$ iterations. This proves termination, including $r=0$. [F1, step 1.1, algebra]

3.1 During one pivot, at most one SWAP is used. On each of at most $n$ unused wires, normalization uses at most two one-qubit gates. Clearing the pivot's other $Z$ factors uses at most $n-1$ CNOTs, and correcting its sign uses at most one $X$. The total is at most $1+2n+(n-1)+1=3n+1$ gates per pivot, hence at most $r(3n+1)$ overall. [F1, step 2.1, algebra]

4.1 The current phase-aware tableau and the phase-aware input-combination rows together store $4rn$ label bits and $O(r)$ phase bits. The signed row-operation output stores $r^2$ bits for $M$ and $O(r)$ bits for $\kappa$. The output has at most $r(3n+1)$ gates; each gate type takes constant space and each wire index takes at most $\lceil\log_2(n+1)\rceil$ bits. Their total is $O(rn+r^2+rn\log(n+1))$. For $r=0$, the output and signed row-operation data are empty, as specified. [F1, step 3.1, algebra] ∎
