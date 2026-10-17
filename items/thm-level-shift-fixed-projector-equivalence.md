---
id: thm-level-shift-fixed-projector-equivalence
kind: theorem
title: A level shift preserves a fixed occupied projector exactly under block ordering
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, def-rank-r-orthogonal-projector-domain, thm-complex-spectral-theorem-for-normal-endomorphisms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.2 and §4
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $U$ and $F:U\to\mathbb H_n$ be as in
[[def-self-consistent-projector-response-map]], and take
$P\in\mathcal P_r\cap U$ so that $F(P)$ is defined and Hermitian. Define the level-shifted
matrix $F_s=F+s(I-P)$ for real $s$, and define the Hermitian compressions
$$F_{occ}:=(PFP)|_{\operatorname{ran}P},\qquad F_{vir}:=((I-P)F(I-P))|_{\operatorname{ran}(I-P)}.$$
For either finite-dimensional Hermitian block, $\sigma$ denotes its finite
eigenvalue set. When $PF=FP$, these compressions are the restrictions of $F$
to the two invariant subspaces. Then
$$\Pi_r(F_s)=P$$
if and only if $PF=FP$ and
$$\max\sigma(F_{occ})<\min\sigma(F_{vir})+s.$$
The strict inequality is the shifted occupied/unoccupied ordering. A level shift
can change the map when either commutation or this ordering fails.

## Facts & Assumptions
**Given:** A rank-$r$ orthogonal projector $P\in U$, a Hermitian matrix $F=F(P)$, and $F_s=F+s(I-P)$.

[F1] A rank-$r$ orthogonal projector satisfies $P=P^*=P^2$ ([[def-rank-r-orthogonal-projector-domain]]).

[F2] A Hermitian matrix admits an orthonormal eigenbasis, and its spectral projector onto an isolated lowest-$r$ cluster commutes with the matrix ([[thm-complex-spectral-theorem-for-normal-endomorphisms]], [[def-self-consistent-projector-response-map]]).

[L1] A strict occupied gap gives the unique rank-$r$ projector selected by the response-map convention ([[lem-gapped-projector-map-well-defined]]).

## Proof


1.1 Assume $PF=FP$. Then both $\operatorname{ran}P$ and $\operatorname{ran}(I-P)$ are invariant under $F$: if $x=Px$, then $P(Fx)=F(Px)=Fx$, and the analogous identity holds when $Px=0$. Relative to their orthogonal direct sum, $F$ is block diagonal and $F_s$ leaves the occupied block unchanged while adding $sI$ on the virtual block. [given, F1, algebra]

2.1 By [F2], the eigenvalues of $F_s$ are exactly those of $F_{occ}$ together with those of $F_{vir}$ shifted by $s$. If $\max\sigma(F_{occ})<\min\sigma(F_{vir})+s$, the lowest $r$ eigenvalues are precisely the occupied block and the gap is strict; [L1] gives $\Pi_r(F_s)=P$. [step 1.1, F2, L1]

3.1 Conversely, if $\Pi_r(F_s)=P$, its defining strict gap makes $P$ the sum of the eigenspace projectors of $F_s$ for the lowest $r$ eigenvalues, so $P$ commutes with $F_s$. Since $[s(I-P),P]=0$, this gives $[F,P]=0$, and the two restrictions are the occupied and virtual blocks of $F$. Their eigenvalues in $F_s$ are respectively $\sigma(F_{occ})$ and $\sigma(F_{vir})+s$. Because $P$ is exactly the lowest-$r$ spectral projector with a strict gap, the largest occupied eigenvalue is strictly smaller than the smallest shifted virtual eigenvalue; hence the displayed ordering holds. [given, step 1.1, F1, F2, L1] ∎
