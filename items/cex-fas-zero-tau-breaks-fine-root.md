---
id: cex-fas-zero-tau-breaks-fine-root
kind: counterexample
title: "Omitting tau can move an exact fine root"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-fas-two-grid-cycle, lem-fas-fine-root-fixed-point]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

The claim that replacing the tau-corrected coarse right side by the restricted
fine right side $Rf_h$ always preserves an exact fine-grid root is false.

## Facts & Assumptions

**Given:** The two-dimensional fine residual $F_h(u)=Au$ with
$A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, right side $f_h=A(1,0)^{\mathsf T}$,
prolongation $P=(1,1)^{\mathsf T}$, iterate restriction
$Iu=(u_1+u_2)/2$, residual restriction $R=P^{\mathsf T}$, and rediscretized
coarse residual $F_H(v)=3v$.

[F1] [[alg-fas-two-grid-cycle]]: the FAS coarse right side includes $F_H(Iu)+R(f_h-F_h(u))$ and the prolongated update is $u+P(v-Iu)$.

[F2] [[lem-fas-fine-root-fixed-point]]: with the tau-corrected right side and the selected zero-defect coarse root, an exact fine root is fixed.

## Counterexample

1.1 Set $u_*=(1,0)^{\mathsf T}$. Then $f_h=A u_*=(2,-1)^{\mathsf T}$, so $u_*$ is an exact fine root. Its restriction is $Iu_*=1/2$ and the restricted right side is $Rf_h=2-1=1$. [given, algebra]

2.1 With tau omitted, the coarse equation is $3v=Rf_h=1$, whose exact solution is $v=1/3$. The fine correction is $u_*+P(v-Iu_*)=(1,0)^{\mathsf T}+(1,1)^{\mathsf T}(1/3-1/2)=(5/6,-1/6)^{\mathsf T},$ which is not $u_*$. Thus the false claim fails for this SPD fine system and this specified rediscretized coarse operator. [F1, step 1.1, algebra]

3.1 For the same inputs, the correct tau is $F_H(Iu_*)-Rf_h=3/2-1=1/2$, so the tau-corrected coarse right side is $3/2$ and its selected root is $v=1/2=Iu_*$. The resulting correction is zero, in accord with [F2]. [F1, F2, step 1.1, algebra] ∎
