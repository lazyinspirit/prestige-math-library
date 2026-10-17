---
id: alg-certified-scf-with-diis-safeguard
kind: algorithm
title: Finite-budget certified SCF with safeguarded DIIS and a contractive fallback
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, alg-undamped-scf-with-gap-and-residual-status, alg-capped-diis-projector-proposal, thm-contractive-scf-convergence-and-inexact-error-bound]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Thorsten Rohwedder, An analysis for some methods and algorithms of quantum chemistry, Chapter 4 §4.4
      url: https://depositonce.tu-berlin.de/bitstreams/7a3115d5-2ab7-4041-b9ea-5259a6659a2e/download
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §3.2
      url: https://arxiv.org/pdf/2004.09088
verification:
  precheck: n/a
---

## Definition

Input: a complete invariant set $K$ and a gapped response map $\Phi:K\to K$
with a certified contraction factor $q<1$; an initial projector $P_0\in K$;
a certified initial error bound $E_0\ge\|P_0-P_*\|_F$ for the unique fixed
point $P_*$; residual tolerance $\varepsilon\ge0$; finite update budget
$N\in\mathbb N_0$; memory $m\ge1$; coefficient cap $C\ge1$; and an eigensolver
which, on success at $X$, returns $\widetilde\Phi(X)\in K$ and a certified
$\eta(X)\ge0$ with $\|\widetilde\Phi(X)-\Phi(X)\|_F\le\eta(X)$. The solver
returns a separate failure status if it cannot certify the gap or this error.

For $k=0,\ldots,N$:

1. If no certified response evaluation is cached for $P_k$, evaluate the finite-basis matrix $F(P_k)$ and its occupied projector solver. If the gap fails, return $\texttt{gap-loss}$; if the eigensolver cannot certify its output/error, return $\texttt{eigensolve-failure}$. Cache the certified evaluation $(F(P_k),\widetilde\Phi(P_k),\eta(P_k))$ at exactly $P_k$. Whether this evaluation is newly obtained or already cached, use that current evaluation, check the certified baseline output belongs to $K$ (return $\texttt{invariance-certificate-failure}$ if not), and retain the current pair $(P_k,F(P_k))$ for this proposal step. Set $\bar\rho_k=\|P_k-\widetilde\Phi(P_k)\|_F+\eta(P_k)$. If $\bar\rho_k\le\varepsilon$, return $\texttt{residual-tolerance-met}$ with error bound $\bar\rho_k/(1-q)$.
2. If $k=N$, return $\texttt{iteration-budget-exhausted}$ with current bound $E_k$.
3. Call [[alg-capped-diis-projector-proposal]] with the up-to-$m-1$ preceding stored pairs and the current pair $(P_k,F(P_k))$. For a candidate $Y$, certify $Y\in K$, the gap at $Y$, and one eigensolver evaluation $\widetilde\Phi(Y)$ with error $\eta(Y)$. Accept $Y$ only if all certificates succeed and
$$\frac{\|Y-\widetilde\Phi(Y)\|_F+\eta(Y)}{1-q}\le qE_k.$$
If accepted, set $P_{k+1}=Y$ and $E_{k+1}=qE_k$.
4. If step 3 does not accept a candidate for any reason, use the certified baseline update from step 1. In particular this includes a singular/uncertified least-squares solve, coefficient-cap or affine-constraint failure, failed candidate $K$-membership, failed candidate gap, failed candidate eigensolver output/error certificate, or failed candidate fixed-point residual test. In this fallback branch, set $P_{k+1}=\widetilde\Phi(P_k)$ and $E_{k+1}=qE_k+\eta(P_k)$. If the baseline certificate or $K$-membership check fails, return its distinct gap, eigensolver, or invariance-certificate failure status.
5. Append the current pair $(P_k,F(P_k))$ to the preceding-iterate history, retaining at most the newest $m-1$ preceding pairs. If step 3 accepted $Y$, cache its certified evaluation $(F(Y),\widetilde\Phi(Y),\eta(Y))$ as the next iteration's current evaluation; if the baseline branch was used, evaluate its new iterate when the next loop begins. Never attach a response matrix evaluated at one density to a different density.

The DIIS commutator objective is only a proposal score. Acceptance uses the
separate fixed-point residual $\|Y-\Phi(Y)\|_F$ with its additive eigensolver
error certificate. The algorithm makes no unconditional success claim: finite
budget exhaustion and each certificate failure are explicit outcomes.
