---
id: lem-fas-linear-vw-cycle-translation
kind: lemma
title: "A linear Galerkin V/W cycle is translation-covariant"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-finite-galerkin-v-cycle]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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

For the linear Galerkin V/W-cycle procedure of [[alg-finite-galerkin-v-cycle]],
on any level $j$ and for all $x,a,b\in\mathbb R^{n_j}$,
$$\operatorname{Cycle}(j,x+a,b+A_ja)=a+\operatorname{Cycle}(j,x,b).$$
The identity is in exact arithmetic and uses the same hierarchy, smoothing
matrices, sweep counts, and cycle count on both sides.

## Facts & Assumptions

**Given:** A finite SPD Galerkin hierarchy, residual-correction pre/post updates, fixed finite sweep and cycle counts, and the exact coarsest solve from [[alg-finite-galerkin-v-cycle]].

[F1] [[alg-finite-galerkin-v-cycle]]: a noncoarsest call pre-smooths by $x\leftarrow x+K^{\rm pre}(b-A_jx)$, restricts $r=b-A_jx$, starts the coarse correction at $e=0$, makes recursive calls with right side $P_j^{\mathsf T}r$, prolongs by $P_je$, and post-smooths by the same residual-correction form.

## Proof

1.1 At level $j=0$, [F1] returns $A_0^{-1}b$. Since $A_0$ is invertible, $A_0^{-1}(b+A_0a)=A_0^{-1}b+a,$ so the identity holds at the base level. [given, F1, algebra]

1.2 At a noncoarsest level, if the current state is shifted from $x$ to $x+a$ and the right side from $b$ to $b+A_ja$, then the residual is unchanged because $(b+A_ja)-A_j(x+a)=b-A_jx$. Each pre-smoothing update in [F1] therefore preserves the shift by $a$ and gives the same fine residual in the two executions. [given, F1, algebra]

2.1 With identical fine residuals, both executions start the coarse correction at $e=0$ and call the same deterministic recursive procedure with the same right side $P_j^{\mathsf T}r$. Thus every call returns the same coarse correction $e$, including every repeated W-cycle call. Prolongation adds the same $P_je$ to both shifted states, and the post-smoothing residuals are again identical, so every post-update preserves the shift. [F1, step 1.2, algebra]

3.1 The base calculation and the noncoarsest calculation establish the stated identity for every level of the finite hierarchy. [step 1.1, step 1.2, step 2.1] ∎
