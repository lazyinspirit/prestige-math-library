---
id: alg-relaxed-density-mixing-with-finite-budget
kind: algorithm
title: Finite-budget relaxed density-matrix mixing
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-admissible-hermitian-density-domain, def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, lem-density-mixing-preserves-domain-but-not-projectors, alg-fixed-point-iteration, thm-density-mixing-contracts-under-jacobian-certificate]
justified_by: [lem-finite-budget-scf-iteration-work]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §4.4 and Appendix Lemma 4.1
      url: https://arxiv.org/pdf/2004.09088
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.2
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: n/a
---

## Definition

Input: $D_0\in\mathcal D_r$ from
[[def-admissible-hermitian-density-domain]], a response map $\Phi$ defined at
each required iterate and its Hermitian matrix map $F$ from
[[def-self-consistent-projector-response-map]], a Hermitian eigensolver that
for each $F(D_k)$ returns a certified ordered spectrum and occupied projector
when the gap is strict, a certified no-gap result, or a failure status, a fixed
mixing parameter $\alpha\in[0,1]$, a fixed-point residual tolerance
$\varepsilon\ge0$, and a finite update budget $N\in\mathbb N_0$. For
$k=0,\ldots,N$, first call the eigensolver on $F(D_k)$. If it fails, return
$(D_k,\texttt{eigensolve-failure},\varnothing,k)$; if the gap is absent, return
$(D_k,\texttt{gap-loss},\varnothing,k)$. Otherwise use the returned occupied
projector as $\Phi(D_k)$ and compute
$$r_k=\|D_k-((1-\alpha)D_k+\alpha\Phi(D_k))\|_F.$$
If $r_k\le\varepsilon$, return
$(D_k,\texttt{residual-tolerance-met},r_k,k)$. If $k=N$, return
$(D_k,\texttt{iteration-budget-exhausted},r_k,k)$. Otherwise update
$$D_{k+1}=(1-\alpha)D_k+\alpha\Phi(D_k)$$
and continue.

By [[lem-density-mixing-preserves-domain-but-not-projectors]], each successful
update stays in $\mathcal D_r$; it need not be idempotent. This algorithm uses
the residual and finite-budget update pattern of [[alg-fixed-point-iteration]]
for the relaxed map, with a gap check before each response evaluation. It makes
no convergence claim unless the derivative-bound and invariance
hypotheses in [[thm-density-mixing-contracts-under-jacobian-certificate]] are
verified. If $\alpha=0$, then the relaxed residual is identically zero and the
update does not move; that stop status alone says nothing about the unmixed
response residual.
