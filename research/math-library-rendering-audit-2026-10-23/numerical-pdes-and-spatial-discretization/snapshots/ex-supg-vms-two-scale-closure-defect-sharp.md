---
id: ex-supg-vms-two-scale-closure-defect-sharp
kind: example
title: "A two-scale VMS closure attains its Schur defect bound"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-supg-variational-multiscale-block-closure, thm-supg-vms-schur-defect-bound]
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
sources:
  references:
    - title: "Thomas J. R. Hughes, Guglielmo Scovazzi, and Leopoldo P. Franca, Multiscale and Stabilized Methods, Encyclopedia of Computational Mechanics, ICES Report 04-18 (2004)"
      url: "https://www.oden.utexas.edu/media/reports/2004/0418.pdf"
      locator: "§3.2.1, equations (57)–(68): exact fine-scale elimination and the residual-driven coarse equation."
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "§5.3.2, printed pp. 56–60: residual models require their own parameter and stability analysis."
---

## Example

Let each resolved and unresolved space be $\mathbb R$ with the absolute-value norm (and give its dual the corresponding dual norm). Take the block matrix $\begin{pmatrix}2&1\\1&2\end{pmatrix}$, load $(1,0)$, and closure inverse $T=1/4$. The exact and modeled coarse solutions differ by exactly the defect bound in [[thm-supg-vms-schur-defect-bound]].

## Facts & Assumptions

**Given:** The two-block VMS decomposition and approximate closure, with scalar block entries $A_{cc}=A_{ff}=2$, $A_{cf}=A_{fc}=1$, load $F_c=1$, $F_f=0$, and $T=1/4$.

[F1] [[def-supg-variational-multiscale-block-closure]]: if $G=A_{ff}^{-1}$, the exact coarse Schur system is $(A_{cc}-A_{cf}GA_{fc})u_c=F_c-A_{cf}GF_f$ and the modeled system replaces $G$ by $T$.

[F2] [[thm-supg-vms-schur-defect-bound]]: the coarse error is bounded by $\|\widetilde S^{-1}\|\|A_{cf}\|\|T-G\||F_f-A_{fc}u_c|$.

## Verification

1.1 Here $G=1/2$, so the exact Schur coefficient is $2-1/2=3/2$ and the exact coarse solution is $u_c=2/3$. The exact unresolved component is $u_f=G(F_f-A_{fc}u_c)=-1/3$. [F1, given, algebra]

2.1 Replacing $G$ by $T=1/4$ gives the approximate Schur coefficient $2-1/4=7/4$, hence $\widetilde u_c=4/7$, and $\widetilde u_f=T(F_f-A_{fc}\widetilde u_c)=-1/7$. The coarse error is $|4/7-2/3|=2/21$. [F1, step 1.1, algebra]

3.1 The bound in [F2] equals $(4/7)\cdot1\cdot(1/4)\cdot(2/3)=2/21$, because $\|\widetilde S^{-1}\|=4/7$, $|A_{cf}|=1$, $|T-G|=1/4$, and $|F_f-A_{fc}u_c|=2/3$. Thus the defect bound is attained exactly in this finite example. [F1, F2, step 1.1, step 2.1, algebra] ∎
