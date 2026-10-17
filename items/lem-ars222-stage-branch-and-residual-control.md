---
id: lem-ars222-stage-branch-and-residual-control
kind: lemma
title: "The two implicit ARS stages have selected branches and residual bounds"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-ars222-additive-tableau-and-stages
  - lem-small-step-implicit-rk-branch-and-residual-error
  - def-implicit-residual-and-algebraic-error-units
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.3, local implicit stage branch context, printed pp. 64–65."
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§2.1 and Table 2, PDF pp. 2–3 and 6; the local branch conditions are verified below."
---

## Statement

Let $\gamma=1-1/\sqrt2$ as in [[def-ars222-additive-tableau-and-stages]]. For each of the two implicit stages, let $c_j$ be its center after the previous stages have been selected. Suppose $b$ is bounded by $M$ and $L$-Lipschitz on a closed ball $\overline B(c_j,R_j)\subset U$ with $R_j>0$, and $|\gamma|hM\le R_j$, $|\gamma|hL<1$. Then stage $Y_j=c_j+\gamma h b(Y_j)$ has a unique root in that ball. Every candidate $\widetilde Y_j$ in the same ball with unscaled stage-equation residual $r_j$ satisfies
$$\|\widetilde Y_j-Y_j\|_2\le\frac{\|r_j\|_2}{1-|\gamma|hL}.$$
The claim is local to these stage balls; it asserts no remote-root or large-step branch.

## Facts & Assumptions

**Given:** The ARS(2,2,2) coefficients, $h>0$, and for each sequential stage its center, positive-radius closed ball, bounds $M,L$, and the two small-step inequalities.

[F1] [[def-ars222-additive-tableau-and-stages]]: $Y_2=c_2+\gamma h b(Y_2)$ with $c_2=y+\gamma h a(y)$; after selecting $Y_2$, $Y_3=c_3+\gamma h b(Y_3)$ with $c_3=y+h[\delta a(y)+(1-\delta)a(Y_2)+(1-\gamma)b(Y_2)]$.

[F2] [[lem-small-step-implicit-rk-branch-and-residual-error]]: on an invariant product ball, if $h\|A\|_\infty M\le R$ and $h\|A\|_\infty L<1$, the implicit stages have a unique fixed point and the unscaled residual bounds the stage error by the reciprocal contraction margin.

[A1] The two balls are admitted in $U$, $b$ has the stated bounds on each, and $|\gamma|hM\le R_j$, $|\gamma|hL<1$ for $j=2,3$.

## Proof

1.1 For stage two in [F1], apply [F2] to the one-stage matrix $A=[\gamma]$, the one-block function $F_1=b$, and center $c_2$; its matrix row norm is $\|A\|_\infty=|\gamma|$, so [A1] gives the invariant-ball and contraction hypotheses. Hence the second stage root exists uniquely, and its residual bound is the one in [F2], with contraction factor $|\gamma|hL$. [A1, F1, F2, algebra]

2.1 With that selected $Y_2$, the third-stage center $c_3$ in [F1] is fixed. Apply [F2] again to the one-stage matrix $[\gamma]$, function $b$, and ball centered at $c_3$; [A1] verifies the same hypotheses, giving a unique $Y_3$ and its residual bound with contraction factor $|\gamma|hL$. [A1, F1, F2, step 1.1]

3.1 The stages are solved in order, so step 1.1 determines the center used in step 2.1. Both roots are unique in their selected balls, and the residual estimates hold for every candidate in those balls; no statement is made outside them. [step 1.1, step 2.1] ∎

