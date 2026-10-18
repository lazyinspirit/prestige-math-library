---
id: lem-fas-vw-cycle-work-and-status
kind: lemma
title: "A finite FAS V/W cycle terminates with bounded stated work"
status: published
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

Consider an invocation of [[alg-fas-vw-cycle]] on levels $0,\ldots,J$, where
the base solver uses at most $B_0<\infty$ counted operations, every nonlinear
smoother update and residual evaluation returns in finite work, and every
transfer and correction is a finite-dimensional map evaluation. The
invocation terminates with one of its declared statuses. If $W_j$ is the
maximum counted work of a level-$j$ invocation, then
$$W_0\le B_0,\qquad W_j\le C_j+\gamma_jW_{j-1}\quad(1\le j\le J),$$
where $C_j$ is the finite work of that level's pre-smoothing, residual and
transfer evaluations, correction, post-smoothing, and status/diagnostic
bookkeeping. This recurrence counts the actual nonlinear smoother,
coarse-solve, and returned-diagnostic work; it implies no blanket $O(n_J)$
estimate.

## Facts & Assumptions

**Given:** A finite hierarchy, finite pre/post sweep counts, $γ_j\in\{1,2\}$, a finite base-solver budget, and terminating individual function, transfer, smoother, and correction evaluations.

[F1] [[alg-fas-vw-cycle]]: recursion decreases the level, the base solver has budget $B_0$, and a level-$j$ cycle has finite pre/post loops and makes $γ_j$ recursive calls.

[A1] At a level $j>0$, assume the claimed termination and work bound for level $j-1$.

## Proof


**Proof technique:** induction.

1.1 At level $0$, the procedure makes one base-solver call with at most $B_0$ update calls. Each residual evaluation and status check terminates by the given operational assumptions, so the base invocation returns a declared status and $W_0\le B_0$. [given, F1, base]

1.2 A level-$j$ invocation performs its finite pre-smoothing sweeps, one residual and restriction evaluation, and at most $\gamma_j$ calls at level $j-1$. By [A1], each such call terminates with work at most $W_{j-1}$. Recording each returned status, residual, and nested diagnostic list is finite work included in $C_j$. If any call fails, the algorithm returns immediately; otherwise it performs one finite prolongation/correction and its finite post-smoothing sweeps. Thus every branch terminates and its work is at most $C_j+\gamma_jW_{j-1}$. [given, F1, A1, ih, algebra]

2.1 Induction from level $0$ through the finite maximum level $J$ proves termination and the displayed recurrence for every invocation. Early failure only shortens the corresponding counted work. [step 1.1, step 1.2, discharge-induction: step 1.2, algebra] ∎
