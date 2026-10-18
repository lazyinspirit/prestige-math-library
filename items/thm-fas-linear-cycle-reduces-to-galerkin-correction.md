---
id: thm-fas-linear-cycle-reduces-to-galerkin-correction
kind: theorem
title: "Linear FAS exactly reduces to a Galerkin correction V/W cycle"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-fas-vw-cycle
  - alg-finite-galerkin-v-cycle
  - thm-galerkin-coarse-correction-is-energy-orthogonal-projector
  - lem-fas-linear-vw-cycle-translation
justified_by: []
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "William L. Briggs, Van Emden Henson, and Steve F. McCormick, A Multigrid Tutorial, 2nd ed., Chapter 6"
      url: "https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf"
    - title: "Harald van Brummelen, Basics of Multigrid Methods, SINTEF winter-school lecture notes"
      url: "https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf"
    - title: "Van Emden Henson, Multigrid Methods for Nonlinear Problems: An Overview, UCRL-JC-150259"
      url: "https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf"
---

## Statement

Let $A_j\in\mathbb R^{n_j\times n_j}$, $0\le j\le J$, be a finite SPD
Galerkin hierarchy with full-column-rank prolongations $P_j$ and
$A_{j-1}=P_j^{\mathsf T}A_jP_j$. At each level set $F_j(u)=A_ju$,
$R_j=P_j^{\mathsf T}$, and use the exact Galerkin coarse operator
$F_{j-1}(v)=A_{j-1}v$, matching residual-correction pre/post smoothers, and
the same finite sweep and V/W cycle counts in [[alg-fas-vw-cycle]] and
[[alg-finite-galerkin-v-cycle]]. The exact-branch FAS V/W procedure returns
exactly the same iterate as the corresponding linear Galerkin correction
V/W-cycle. The iterate restriction $I_j$ may be any linear map of the stated
dimensions.

## Facts & Assumptions

**Given:** The finite SPD Galerkin hierarchy, $R_j=P_j^{\mathsf T}$, matching residual-correction smoothers and cycle counts, exact coarse branches, and exact coarsest solves.

[F1] [[alg-fas-vw-cycle]]: a noncoarsest FAS level forms $g_H=F_H(I_ju)+R_j(f_j-F_j(u))$, recurses from $I_ju$, and corrects by $u+P_j(z-I_ju)$.

[F2] [[alg-finite-galerkin-v-cycle]]: a linear Galerkin level pre-smooths, restricts the residual $r_j=f_j-A_ju$, starts the coarse correction at $e=0$, repeatedly calls the lower cycle with right side $P_j^{\mathsf T}r_j$, prolongs the returned error, and post-smooths by residual correction.

[F3] [[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]]: for SPD $A_j$ and full-column-rank $P_j$, the Galerkin matrix $A_{j-1}=P_j^{\mathsf T}A_jP_j$ is SPD and invertible.

[F4] [[lem-fas-linear-vw-cycle-translation]]: the lower linear V/W cycle obeys $\operatorname{Cycle}(j-1,x+a,b+A_{j-1}a)=a+\operatorname{Cycle}(j-1,x,b)$.

[A1] At level $j-1$, assume equality of the FAS and correction-cycle outputs for every initial iterate and right side.

## Proof


**Proof technique:** induction on the hierarchy level.

1.1 At level $0$, both procedures use the same exact solve $A_0^{-1}f_0$, so they return the same iterate for every input. [given, F1, F2, F3, base]

1.2 At a noncoarsest level $j$, the fine pre-smoothers agree, so they produce the same current iterate $u$ and residual $r_j=f_j-A_ju$. Put $u_H=I_ju$. The FAS coarse target is $g_H=A_{j-1}u_H+P_j^{\mathsf T}r_j,$ so its residual relative to the starting coarse value $u_H$ is exactly $P_j^{\mathsf T}r_j$. [given, F1, F2, F3, A1, algebra]

2.1 Let $e_t=z_t-u_H$ be the current coarse difference after $t$ recursive coarse calls. By [A1], the next FAS coarse call equals the correction-cycle call with initial iterate $z_t$ and right side $g_H$. Applying [F4] with $a=u_H$, $x=e_t$, and $b=P_j^{\mathsf T}r_j$ gives $\operatorname{Cycle}(j-1,z_t,g_H)=u_H+\operatorname{Cycle}(j-1,e_t,P_j^{\mathsf T}r_j).$ Thus each coarse difference update is exactly the error update in [F2], including repeated W-cycle calls. [F1, F2, F4, A1, ih, step 1.2, algebra]

3.1 After the same number of coarse calls, [F1] prolongs the same error correction as [F2]. Their post-smoothers are identical residual-correction updates, so their returned fine iterates agree. The base case and this induction step prove equality at every level. [F1, F2, F3, step 1.1, step 1.2, step 2.1, discharge-induction: step 2.1, algebra] ∎
