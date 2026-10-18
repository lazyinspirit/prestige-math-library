---
id: ex-fas-reaction-poisson-tau-cancellation
kind: example
title: "The tau term recovers the restricted root in reaction Poisson"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-fas-two-grid-cycle, lem-fas-fine-root-fixed-point]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Statement

For the finite-difference semilinear reaction operator
$F_h(u)=Au+(u_1^3,u_2^3)$ with
$A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, take
$P=(1,1)^{\mathsf T}$, $Iu=(u_1+u_2)/2$, $R=P^{\mathsf T}$, and the Galerkin
coarse operator $F_H(v)=P^{\mathsf T}F_h(Pv)=2v+2v^3$. For the manufactured
fine root $u_*=(1,0)$ and $f_h=F_h(u_*)$, the tau correction is $-3/4$ and
the exact coarse branch returns $Iu_*=1/2$, so the corrected fine iterate is
still $u_*$.

## Facts & Assumptions

**Given:** The two residual maps, the transfers, $u_*=(1,0)$, and $f_h=F_h(u_*)$.

[F1] [[alg-fas-two-grid-cycle]]: the coarse target is $F_H(Iu)+R(f_h-F_h(u))=Rf_h+\tau(u)$, where $\tau(u)=F_H(Iu)-RF_h(u)$, and the fine correction is $u+P(v-Iu)$.

[F2] [[lem-fas-fine-root-fixed-point]]: if the smoother fixes the fine root and the exact coarse solver selects its restriction at zero defect, FAS leaves the root fixed.

## Example

**Given:** Exact real arithmetic and the direct coarse root $v=1/2$ on the selected branch.

## Verification

1.1 Direct multiplication gives $Au_*=(2,-1)$ and $(u_{*,1}^3,u_{*,2}^3)=(1,0)$, so $f_h=F_h(u_*)=(3,-1)$. The restricted iterate is $Iu_*=1/2$, while $Rf_h=3-1=2$. [given, algebra]

2.1 The Galerkin coarse value at the restricted iterate is $F_H(1/2)=1+1/4=5/4$. Thus [F1] gives $\tau(u_*)=F_H(Iu_*)-RF_h(u_*)=5/4-2=-3/4$ and the tau-corrected coarse right side is $Rf_h+\tau(u_*)=2-3/4=5/4$. [F1, step 1.1, algebra]

3.1 Since $F_H(1/2)=5/4$, the exact selected coarse solution is $v=Iu_*=1/2$. Therefore $P(v-Iu_*)=0$ and the fine correction leaves $u_*$ unchanged; the pre/post residual smoothers also leave it fixed because $F_h(u_*)=f_h$. This is the instance of [F2] with the actual tau value verified above. [given, F2, step 1.1, step 2.1, algebra] ∎
