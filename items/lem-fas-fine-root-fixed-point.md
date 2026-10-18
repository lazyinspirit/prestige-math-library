---
id: lem-fas-fine-root-fixed-point
kind: lemma
title: "An exact fine root is fixed by the FAS V/W cycle"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [alg-fas-vw-cycle]
justified_by: []
proof_strategy: induction
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

For a level-$j$ invocation of [[alg-fas-vw-cycle]], let $u^*$ satisfy
$F_j(u^*)=f_j$. Suppose each selected pre/post smoother leaves every exact
root fixed, every restriction $I_ju^*$ lies in $U_{j-1}$ and is selected as
the exact coarse root at its zero-defect target, and the base solver returns
any initial exact root unchanged. Then the exact-branch FAS V/W cycle leaves
$u^*$ fixed. This holds for arbitrary admissible transfer maps $I_j,R_j,P_j$;
no identity such as $R_j=I_j$ or $I_jP_j=I$ is needed.

## Facts & Assumptions

**Given:** A finite hierarchy, an exact fine root, root-fixing smoothers, restrictions of each root in the next-level domain, zero-defect coarse branches selecting those restrictions, and a base solver that preserves an initial exact root.

[F1] [[alg-fas-vw-cycle]]: a noncoarsest level restricts the current iterate, forms $g_H=F_H(Iu)+R(f-F_h(u))$, solves the coarse FAS problem, corrects by $u+P(v-Iu)$, and applies finitely many pre/post sweeps; its base solver preserves an initial exact root.

[A1] For every right-hand side at level $j-1$, assume the exact-branch cycle leaves any exact root of that equation unchanged.

## Proof


**Proof technique:** induction on the level.

1.1 At level $0$, the input is the exact root $u_0^*$ and the base solver sees zero residual. Its stated contract in [F1] returns that initial root unchanged. Thus the level-$0$ call fixes its exact root. [given, F1, base]

1.2 At a noncoarsest level, each pre-smoothing sweep leaves $u^*$ unchanged. Thus $f_j-F_j(u^*)=0$ and the restricted coarse target is $g_H=F_{j-1}(I_j u^*)$. The hypothesis gives $I_j u^*\in U_{j-1}$ and selects it as the exact coarse root. The coarse call starts there, so [A1] makes each of the $\gamma_j$ recursive calls return $I_j u^*$; hence the prolongated difference is zero and every post-smoothing sweep fixes $u^*$. [given, F1, A1, ih, algebra]

2.1 Induction proves the exact-root fixed-point property at every finite level. The calculation used only that the transfers have the stated domains and codomains; no algebraic relation among them was used. [step 1.1, step 1.2, discharge-induction: step 1.2, algebra] ∎
