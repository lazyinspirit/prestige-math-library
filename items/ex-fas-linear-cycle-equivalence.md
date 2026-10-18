---
id: ex-fas-linear-cycle-equivalence
kind: example
title: "A one-level linear FAS correction is the Galerkin correction"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [alg-fas-two-grid-cycle, thm-fas-linear-cycle-reduces-to-galerkin-correction]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Take $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$,
$P=(1,1)^{\mathsf T}$, $Iu=(u_1+u_2)/2$, $R=P^{\mathsf T}$, and the Galerkin
coarse matrix $A_H=P^{\mathsf T}AP=2$. For any fine iterate $u$ and right
side $f$, the coarse FAS difference $v-Iu$ is exactly
$A_H^{-1}R(f-Au)$, and the prolongated update is the ordinary Galerkin
coarse correction.

## Facts & Assumptions

**Given:** The two-dimensional linear system, the specified transfers, exact coarse solution, and exact real arithmetic.

[F1] [[alg-fas-two-grid-cycle]]: FAS solves the tau-corrected coarse equation and corrects by $u+P(v-Iu)$.

[F2] [[thm-fas-linear-cycle-reduces-to-galerkin-correction]]: for a linear Galerkin hierarchy with $R=P^{\mathsf T}$, the full recursive FAS cycle is the same as the linear correction V/W cycle.

## Example

**Given:** The matrix $A$, prolongation $P$, restriction $I$, and residual restriction $R$ in the Statement.

## Verification

1.1 Direct multiplication gives $AP=(1,1)^{\mathsf T}$ and $A_H=P^{\mathsf T}AP=2$. Write $m=Iu$ and $r=f-Au$. The FAS coarse target is $A_Hm+Rr=2m+r_1+r_2.$ The exact coarse solution is therefore $v=m+(r_1+r_2)/2$. [given, F1, algebra]

2.1 Since $A_H^{-1}Rr=(r_1+r_2)/2$, the coarse difference is $v-Iu=A_H^{-1}R(f-Au)$ and the fine update is $u+P(v-Iu)=u+PA_H^{-1}P^{\mathsf T}(f-Au),$ the standard Galerkin correction. With matching residual-correction smoothers, [F2] identifies the full V/W iterate as well. [F1, F2, step 1.1, algebra] ∎
