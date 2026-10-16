---
id: thm-qc-exact-single-qubit-synthesis-correct
kind: theorem
title: The exact single-qubit compiler returns the input matrix
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-exact-single-qubit-clifford-t-synthesis
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-denominator-exponent
  - lem-qc-clifford-t-denominator-descent-and-base
  - lem-qc-dyadic-cyclotomic-unit-circle
  - def-qc-clifford-t-gate-library
  - def-qc-circuit-denotational-semantics
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits
      url: https://arxiv.org/pdf/1206.5236
---

## Statement

For every unitary $U\in M_2(D)$, the procedure in
[[alg-qc-exact-single-qubit-clifford-t-synthesis]] terminates and returns a
finite one-qubit Clifford+T word whose exact matrix is $U$.

## Facts & Assumptions

**Given:** A unitary $U\in M_2(D)$, exact rational coefficient arithmetic,
the descent procedure, and the finite base-column certificate.

[F1] [[alg-qc-exact-single-qubit-clifford-t-synthesis]]: the procedure tests
unitarity, repeatedly applies $M\leftarrow HT^{-k}M$ for a $k$ lowering the
squared-entry denominator exponent, looks up a base-column word $W_0$, and
returns the matrix factorization determined by the recorded $k$ values and
$W_0T^j$.

[F2] [[lem-qc-clifford-t-denominator-descent-and-base]]: each normalized
$D$-column above exponent $3$ has a reducing $k\in\{0,1,2,3\}$, and the
certificate supplies an exact H/T preparation word for every normalized
column in the base regime.

[F3] [[lem-qc-dyadic-cyclotomic-unit-circle]]: if $\lambda\in D$ and
$\lambda\bar\lambda=1$, then $\lambda=\omega^j$ for some $j\in\{0,\ldots,7\}$.

[F4] [[def-qc-denominator-exponent]]: the squared-entry statistic is
$\operatorname{sde}(|M_{00}|^2)$, with $\operatorname{sde}(0)=-\infty$.

[F5] [[def-qc-clifford-t-gate-library]]: $H,T,T^\dagger$ have the displayed
exact matrices, and the matrix of a chronological word is the product with
later gates on the left.

[F6] [[def-qc-circuit-denotational-semantics]]: for chronological layers
$L_1,\ldots,L_d$, the circuit matrix is $U_{L_d}\cdots U_{L_1}$.

## Proof

1.1 Initially $U=I\cdot M$ with $M=U$. If a loop iteration records $k$ and
sets $M'=HT^{-k}M$, then $M=T^kHM'$. Therefore, after $r$ reductions, the
recorded sequence $K=(k_1,\ldots,k_r)$ satisfies
$U=(T^{k_1}H)\cdots(T^{k_r}H)M$. [F1, F5, given, algebra]

1.2 At every iteration, $M$ remains unitary with entries in $D$, since the
matrices in [F5] are unitary over $D$. If its exponent exceeds $3$, [F2]
ensures that the finite search over $k=0,1,2,3$ finds a value reducing that
integer exponent by exactly one. Thus the loop terminates after finitely many
iterations with exponent at most $3$. [F2, F4, F5, step 1.1, algebra]

2.1 Let $W_0$ be the table word for the first column of the terminal $M$.
Then $W_0^*M$ is unitary with first column $(1,0)^T$, hence is
$\operatorname{diag}(1,\lambda)$ for a unit scalar $\lambda$. Its entries
lie in $D$, so [F3] gives $\lambda=\omega^j$ for some $j\in\{0,\ldots,7\}$.
Consequently $M=W_0T^j$. [F1, F2, F3, step 1.2, algebra]

2.2 Substituting this identity into step 1.1 yields exactly the matrix
factorization returned in [F1]. The algorithm emits its factors from right to
left as a chronological gate list; [F6] says later gates multiply on the left,
so that list has the displayed matrix. Hence the returned word implements
$U$ exactly. [F1, F6, step 1.1, step 2.1, algebra] ∎

## Unresolved supplier checks

The actual QC07 gate matrices and QC09 chronological circuit semantics were
inspected. The emitted factor order agrees with the supplier convention.
The local exact synthesis proof and finite table are complete; this records
interface reconciliation, not independent acceptance of QC07/QC09 drafts.

