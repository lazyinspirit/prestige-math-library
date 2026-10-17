---
id: thm-certified-diis-error-inheritance
kind: theorem
title: Residual-certified DIIS candidates inherit the contractive SCF error budget
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [alg-certified-scf-with-diis-safeguard, thm-contractive-scf-convergence-and-inexact-error-bound]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Thorsten Rohwedder, An analysis for some methods and algorithms of quantum chemistry, Chapter 4 §4.4
      url: https://depositonce.tu-berlin.de/bitstreams/7a3115d5-2ab7-4041-b9ea-5259a6659a2e/download
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §3.2
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: pending
---

## Statement

Assume the hypotheses and certificates in
[[alg-certified-scf-with-diis-safeguard]]: $\Phi$ is a $q$-contraction on the
complete invariant set $K$, its fixed point is $P_*$, the starting error is at
most $E_0$, and every baseline response error is at most $\eta_k$. Let $E_k$
be updated by that algorithm. Then every produced iterate obeys
$$\|P_k-P_*\|_F\le E_k\le q^kE_0+\sum_{j=0}^{k-1}q^{k-1-j}\eta_j.$$
An accepted DIIS candidate has certified error at most $qE_k$; the commutator
least-squares residual alone is not used as an error bound. If the procedure is
continued indefinitely with successful certificates and $\eta_k\to0$, then
$P_k\to P_*$; a finite update cap still may return budget exhaustion.
Use the convention $q^0=1$, including when $q=0$.

## Facts & Assumptions
**Given:** The certified algorithm's hypotheses, starting error bound $E_0$, contraction factor $0\le q<1$, and nonnegative baseline error budgets $\eta_k$.

[F1] For every $X\in K$, $\|X-P_*\|_F\le\|X-\Phi(X)\|_F/(1-q)$ ([[thm-contractive-scf-convergence-and-inexact-error-bound]]).

[F2] A DIIS candidate is accepted only when its certified residual bound divided by $1-q$ is at most $qE_k$; otherwise the baseline update is used and its error bound is added to $qE_k$ ([[alg-certified-scf-with-diis-safeguard]]).

## Proof


1.1 Initially $\|P_0-P_*\|_F\le E_0$ by input. Suppose $\|P_k-P_*\|_F\le E_k$. If the algorithm accepts candidate $Y=P_{k+1}$, [F2] gives a certified upper bound $\bar\rho(Y)$ for $\|Y-\Phi(Y)\|_F$ with $\bar\rho(Y)/(1-q)\le qE_k$. Applying [F1] at $Y$ proves $\|P_{k+1}-P_*\|_F\le qE_k=E_{k+1}$. [given, F1, F2]

2.1 If the baseline is used, its evaluator certifies $\|P_{k+1}-\Phi(P_k)\|_F\le\eta_k$. The triangle inequality and contraction give $\|P_{k+1}-P_*\|_F\le\eta_k+\|\Phi(P_k)-\Phi(P_*)\|_F\le\eta_k+q\|P_k-P_*\|_F\le qE_k+\eta_k=E_{k+1}.$ Thus induction proves $\|P_k-P_*\|_F\le E_k$ at every step. [given, step 1.1, F2, algebra]

3.1 By [F2], both update branches obey $E_{k+1}\le qE_k+\eta_k$ (accepted DIIS uses $\eta_k=0$ for this upper estimate). Iterating this scalar recurrence by induction gives $E_k\le q^kE_0+\sum_{j<k}q^{k-1-j}\eta_j$. [step 2.1, F2, induction, algebra]

4.1 If the run continues indefinitely with $\eta_j\to0$, the convolution tends to zero: for any $\epsilon>0$, choose $J$ so $\eta_j\le(1-q)\epsilon/2$ for $j\ge J$. The tail sum is at most $\epsilon/2$, while the finite head and $q^kE_0$ tend to zero as $k\to\infty$. If $q=0$, the recurrence is $E_{k+1}\le\eta_k\to0$ directly. Hence $E_k\to0$ and step 2.1 gives $P_k\to P_*$. The conclusion is conditional on indefinite successful continuation and does not assert that a finite budget must meet its stopping tolerance. [given, step 2.1, step 3.1, algebra] ∎
