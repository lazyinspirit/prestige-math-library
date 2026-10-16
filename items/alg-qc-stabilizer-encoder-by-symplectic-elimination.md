---
id: alg-qc-stabilizer-encoder-by-symplectic-elimination
kind: algorithm
title: Stabilizer encoder by symplectic elimination
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-binary-pauli-label-and-quotient
  - def-qc-binary-symplectic-form
  - def-qc-circuit-denotational-semantics
  - def-qc-circuit-syntax-and-register-order
  - def-qc-cnot-and-control-target-order
  - def-qc-controlled-z-and-swap
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-pauli-matrices
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-register-and-computational-basis
  - def-qc-stabilizer-code-space
  - lem-qc-cnot-pauli-action
  - lem-qc-hadamard-pauli-action
  - lem-qc-phase-gate-pauli-action
  - thm-qc-hermitian-pauli-phase-criterion
  - thm-qc-pauli-commutator-is-symplectic-pairing
  - thm-qc-pauli-product-and-adjoint
justified_by:
  - thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §20.3'
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Definition

**Inputs.** An integer $n\ge1$ and $r\le n$ ordered rows
$P(k_i,x_i,z_i)=i^{k_i}X^{x_i}Z^{z_i}$ representing independent,
pairwise-commuting signed Hermitian Pauli generators on the ordered
$n$-qubit register.

**Wire and factor indices.** Tableau coordinates and circuit wire labels are
$q=0,\ldots,n-1$. The one-based Pauli factor index corresponding to wire $q$
is $j=q+1$; factor $j$ occupies tensor position $j-1$. Thus a one-wire gate
on circuit wire $q$ uses supplier factor index $q+1$, and a CNOT or SWAP on
circuit wires $q,s$ uses supplier indices $q+1,s+1$. The stored coordinates
$(x_{i,q},z_{i,q})$ use the same zero-based order.

**Tableau updates.** For a current row $P(k,x,z)$, all phase entries are
updated modulo $4$ and binary entries modulo $2$. Conjugation by $H_q$ sends
$(k,x_q,z_q)$ to $(k+2x_qz_q,z_q,x_q)$; by $S_q$ it sends these entries to
$(k+x_q,x_q,z_q+x_q)$; by $S_q^\dagger$ it sends them to
$(k-x_q,x_q,z_q+x_q)$. Conjugation by $X_q$ adds $2z_q$ to $k$ and leaves
the labels unchanged. Conjugation by $\operatorname{SWAP}_{q,s}$ interchanges
$x_q$ with $x_s$ and $z_q$ with $z_s$ and leaves $k$ unchanged. For
$\operatorname{CNOT}_{q\to s}$, update $x_s\leftarrow x_s+x_q$ and
$z_q\leftarrow z_q+z_s$ and leave $k$ unchanged; all unmentioned binary
coordinates are unchanged. Whenever a gate $U$ is appended to chronological
$D$, replace every current row $R$ by $URU^\dagger$. For a row product
$P(k,x,z)P(k',x',z')$, use the exact update
$(k+k'+2(z\cdot x'),x+x',z+z')$.

**Validity.** If any row is not Hermitian, the binary labels are dependent,
two rows fail to commute, or the generated subgroup contains $-I$, return
INVALID. The independent commuting case with $r=0$ is valid.

**Elementary gate alphabet.** The output is a finite chronological list over
$H,S,S^\dagger,X,\operatorname{CNOT}_{c\to t},\operatorname{SWAP}_{c,t}$.
Here $H,S,X,\operatorname{CNOT},\operatorname{SWAP}$ have the exact matrices
in the cited gate definitions; $S^\dagger=\operatorname{diag}(1,-i)$ is
explicitly admitted as one primitive gate of this algorithm. No inverse or
controlled black-box access is assumed.

**Procedure.** Keep the current rows phase-aware, an invertible binary
row-operation matrix $M\in GL(r,\mathbb F_2)$, and phase-aware input-combination
rows $G_i$. Initially $M=I_r$, $G_i=g_i$ (the $i$th input row), and the
chronological gate list $D$ is empty. The invariant is that current row $i$ is
$D G_iD^\dagger$ and
$$G_i=\prod_{a=0}^{r-1}g_a^{M_{ia}}=P(\kappa_i,\bar x_i,\bar z_i),\quad \bar x_i=\sum_{a=0}^{r-1}M_{ia}x_a,\quad \bar z_i=\sum_{a=0}^{r-1}M_{ia}z_a.$$
where sums in the binary labels are in $\mathbb F_2^n$ and the product is in
increasing input-row order. The input generators commute and square to $I$,
so this product is independent of order. Its phase exponent $\kappa_i\in
\mathbb Z/4\mathbb Z$ is the signed row-operation phase data. On a gate
conjugation update the current tableau row and its phase, leaving $G_i$ and
$M$ unchanged. On a row multiplication $i\leftarrow i+p$, update the current
row by the exact phase-aware product, set $M_i\leftarrow M_i+M_p$ over
$\mathbb F_2$, and set $G_i\leftarrow G_iG_p$ using the exact Pauli product
rule (thereby updating $\kappa_i$). A row interchange swaps the corresponding
rows of the current tableau, $M$, and $G$.

For each pivot position $j=0,\ldots,r-1$:

1. Among rows $j,\ldots,r-1$, take the first row that is not identity on the
   unused wires, and let its row index be $s$. If $s\ne j$, interchange the
   complete current rows $s$ and $j$ and interchange the corresponding rows
   of $M$ and $G$, including the phase entry of $G$. This row interchange is
   not a circuit gate. Take the first unused wire $q$ of the pivot row $j$
   with nonzero Pauli label. If $q\ne j$, append the circuit gate
   $\operatorname{SWAP}_{j,q}$ to $D$ and conjugate every current row by it.
2. On pivot wire $j$ and each later unused wire, normalize the pivot row's
   local factor: apply $H$ to turn $X$ into $Z$; apply $S^\dagger$ followed
   by $H$ to turn $Y$ into $Z$; leave $Z$ and $I$ unchanged. Append each gate
   and update every row, including its phase.
3. For each later wire $q$ where the pivot row has a $Z$, append
   $\operatorname{CNOT}_{q\to j}$ and update every row. The pivot becomes
   either $+Z_j$ or $-Z_j$.
4. If the pivot is $-Z_j$, append $X_j$ and update every row, making it
   $+Z_j$. For each remaining row with a $Z_j$ factor, multiply that row by
   the pivot row and update the binary row-operation matrix to clear $Z_j$.

For $r=0$, return the empty gate list, empty $M$ and $\kappa$, and the
unchanged logical register. On a valid input with $r>0$, return $D$, its
reversed adjoint list $D^\dagger$ as the encoder, and the signed
row-operation data $(M,\kappa)$, with the associated $G_i$ defined by the
invariant above. The returned checks satisfy $D G_iD^\dagger=+Z_i$ for
$i=0,\ldots,r-1$. The logical label basis is the ordered computational
basis on the remaining $n-r$ wires, prefixed by $|0^r\rangle$.

## Remarks

The procedure uses only finite tableau rows, deterministic first-pivot
choices, and the declared gate list. Each appended gate can be read as a
one-occurrence layer in [[def-qc-circuit-syntax-and-register-order]]; the
chronological gate list then denotes the product specified in
[[def-qc-circuit-denotational-semantics]]. The algorithm explicitly lists
$S^\dagger$ as a primitive gate with its matrix and assumes no inverse-query
access.
