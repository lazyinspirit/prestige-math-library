---
id: alg-certified-scf-with-diis-safeguard
kind: algorithm
title: Finite-budget certified SCF with safeguarded DIIS and a contractive fallback
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, alg-undamped-scf-with-gap-and-residual-status, alg-capped-diis-projector-proposal, thm-contractive-scf-convergence-and-inexact-error-bound]
justified_by: [lem-finite-budget-scf-iteration-work]
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

Input: an open domain $U$, a Hermitian response matrix map $F:U\to\mathbb H_n$,
and its gapped occupied-projector map $\Phi$ from
[[def-self-consistent-projector-response-map]]; a nonempty complete invariant
set $K\subseteq U\cap\mathcal P_r$ with $\Phi(K)\subseteq K$ and certified
contraction factor $0\le q<1$; an initial projector $P_0\in K$; a certified
initial error bound $E_0\ge\|P_0-P_*\|_F$ for the unique fixed point $P_*$;
residual tolerance $\varepsilon\ge0$; finite update budget $N\in\mathbb N_0$;
memory $m\ge1$; coefficient cap $C\ge1$; a Hermitian eigensolver that, for a
matrix $M$, returns a certified ordered spectrum and occupied projector when
the $r$th gap is strict, a certified no-gap result, or a failure to certify the
spectrum; an approximate response evaluator that at $X\in K$ returns
$\widetilde\Phi(X)\in K$ and $\eta(X)\ge0$ with
$\|\widetilde\Phi(X)-\Phi(X)\|_F\le\eta(X)$, or a failure status; and a
constrained least-squares solver that either returns the certified global
minimizer with the minimum-norm tie-break for the residuals and cap $C$, or
reports failure. Every called solver returns one of its specified results.

The terminal output is $(P_k,\texttt{status},b,k)$, where $P_k$ is the current
projector and $b$ is its certified error bound. The current budget $E_k$
remains valid at gap, eigensolver, response-evaluation, or invariance-certificate
failure statuses.

For $k=0,\ldots,N$:

1. If no certified response evaluation is cached for $P_k$, compute $F(P_k)$ and call the eigensolver on it. If the eigensolver certifies no strict gap, return $(P_k,\texttt{gap-loss},E_k,k)$; if it fails to certify the spectrum, return $(P_k,\texttt{eigensolve-failure},E_k,k)$. With a certified strict gap, call the approximate response evaluator. If it fails, return $(P_k,\texttt{response-evaluation-failure},E_k,k)$. Cache $(F(P_k),\widetilde\Phi(P_k),\eta(P_k))$ at exactly $P_k$. Whether this evaluation is new or cached, check that the certified baseline output belongs to $K$; if not, return $(P_k,\texttt{invariance-certificate-failure},E_k,k)$. Retain the current pair $(P_k,F(P_k))$ for this proposal step. Set $\bar\rho_k=\|P_k-\widetilde\Phi(P_k)\|_F+\eta(P_k)$. If $\bar\rho_k\le\varepsilon$, return $(P_k,\texttt{residual-tolerance-met},\bar\rho_k/(1-q),k)$.
2. If $k=N$, return $(P_k,\texttt{iteration-budget-exhausted},E_k,k)$.
3. Call [[alg-capped-diis-projector-proposal]] with the up-to-$m-1$ preceding stored pairs, the current pair $(P_k,F(P_k))$, the constrained least-squares solver, the eigensolver, $m$, and $C$. For a candidate $Y$, certify $Y\in K$, compute $F(Y)$, certify its strict gap with the eigensolver, and obtain one approximate response evaluation $\widetilde\Phi(Y)$ with error $\eta(Y)$. Accept $Y$ only if all certificates succeed and
$$\frac{\|Y-\widetilde\Phi(Y)\|_F+\eta(Y)}{1-q}\le qE_k.$$
If accepted, set $P_{k+1}=Y$ and $E_{k+1}=qE_k$.
4. If step 3 does not accept a candidate for any reason, use the certified baseline evaluation already obtained and checked in step 1. In particular, this includes a least-squares failure, coefficient-cap or affine-constraint failure, failed candidate $K$-membership, failed candidate gap, failed candidate response-error certificate, or failed candidate fixed-point residual test. Set $P_{k+1}=\widetilde\Phi(P_k)$ and $E_{k+1}=qE_k+\eta(P_k)$.
5. Append the current pair $(P_k,F(P_k))$ to the preceding-iterate history, retaining at most the newest $m-1$ preceding pairs. If step 3 accepted $Y$, cache its certified evaluation $(F(Y),\widetilde\Phi(Y),\eta(Y))$ as the next iteration's current evaluation; if the baseline branch was used, evaluate its new iterate when the next loop begins. Never attach a response matrix evaluated at one density to a different density.

The DIIS commutator objective is only a proposal score. Acceptance uses the
separate fixed-point residual $\|Y-\Phi(Y)\|_F$ with its additive eigensolver
error certificate. The algorithm makes no unconditional success claim: finite
budget exhaustion and each certificate failure are explicit outcomes.
