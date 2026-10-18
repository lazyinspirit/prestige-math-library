---
id: thm-supg-vms-schur-defect-bound
kind: theorem
title: "Finite-dimensional VMS residual closure has an explicit Schur defect bound"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-supg-variational-multiscale-block-closure]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Thomas J. R. Hughes, Guglielmo Scovazzi, and Leopoldo P. Franca, Multiscale and Stabilized Methods, Encyclopedia of Computational Mechanics, ICES Report 04-18 (2004)"
      url: "https://www.oden.utexas.edu/media/reports/2004/0418.pdf"
      locator: "§§3.2.1–3.2.2: exact residual-driven fine scales, Schur elimination, and the warning that the exact fine-scale Green operator is generally nonlocal."
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "§5.3.2, printed pp. 56–60: residual-based stabilization and the need to quantify the modeling parameter."
---

## Statement

Use the block operators and residual closure of [[def-supg-variational-multiscale-block-closure]]. Equip $X_c,X_f$ and their duals with norms, and use the corresponding induced operator norms. Let $G:=A_{ff}^{-1}$, assume the exact Schur system has a solution $u_c$, and put $r_f:=F_f-A_{fc}u_c$. Suppose the closure map $T$ has $\widetilde S:=A_{cc}-A_{cf}TA_{fc}$ invertible, and let $\widetilde u_c$ solve the approximate Schur system. Then
$$\|\widetilde u_c-u_c\|\le\|\widetilde S^{-1}\|\,\|A_{cf}\|\,\|T-G\|\,\|r_f\|,$$
and for the modeled fine component $\widetilde u_f=T(F_f-A_{fc}\widetilde u_c)$,
$$\|\widetilde u_f-u_f\|\le\|T-G\|\,\|r_f\|+\|T\|\,\|A_{fc}\|\,\|\widetilde u_c-u_c\|.$$
The exact fine scale is $u_f=G r_f$. These bounds concern finite-dimensional algebraic blocks; they do not certify a universal PDE subgrid model.

## Facts & Assumptions

**Given:** The direct-sum block system and residual closure in [[def-supg-variational-multiscale-block-closure]], an invertible exact fine block $A_{ff}$, and an invertible approximate Schur operator $\widetilde S$.

[F1] [[def-supg-variational-multiscale-block-closure]]: exact elimination uses $G=A_{ff}^{-1}$ and residual $r_f=F_f-A_{fc}u_c$; the closure replaces $G$ by $T$ in both the Schur operator and load.

## Proof

1.1 Write the exact Schur operator and load as $S=A_{cc}-A_{cf}GA_{fc}$ and $g=F_c-A_{cf}GF_f$, so $Su_c=g$. Put $\Delta:=T-G$. The approximate quantities satisfy $\widetilde S=S-A_{cf}\Delta A_{fc}$ and $\widetilde g=g-A_{cf}\Delta F_f$. [F1, given, algebra]

2.1 Since $\widetilde S\widetilde u_c=\widetilde g$, step 1.1 gives $\widetilde S(\widetilde u_c-u_c)=\widetilde g-\widetilde S u_c=-A_{cf}\Delta(F_f-A_{fc}u_c)=-A_{cf}\Delta r_f$. Apply the induced operator norms and multiply by $\|\widetilde S^{-1}\|$ to prove the coarse bound. [step 1.1, given, algebra]

3.1 The exact fine component is $u_f=G r_f$. The modeled component is $\widetilde u_f=T(r_f-A_{fc}(\widetilde u_c-u_c))$. Subtracting gives $\widetilde u_f-u_f=(T-G)r_f-TA_{fc}(\widetilde u_c-u_c)$. The triangle inequality and operator norms give the stated fine-scale bound. [F1, step 2.1, algebra] ∎
