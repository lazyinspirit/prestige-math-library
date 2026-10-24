---
id: lem-fas-inexact-coarse-solve-residual-defect
kind: lemma
title: "An inexact FAS coarse solve contributes a bounded correction defect"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-fas-two-grid-cycle
  - thm-fas-local-contraction-under-derivative-bound
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

Consider one two-grid FAS cycle with fixed pre-smoothing result, exact selected
coarse root $v(u)$, prolongation $P$, and a post-smoother that is
$L_{\rm post}$-Lipschitz on the relevant corrected states. Suppose a coarse
solver returns $\widehat v$ with residual
$\eta=\|F_H(\widehat v)-g_H(u)\|_2$ and a separately verified
residual-to-solution estimate
$$\|\widehat v-v(u)\|_2\le M_H\eta.$$
Then the inexact-cycle output $\widehat E(u)$ and exact-cycle output $E(u)$
satisfy
$$\|\widehat E(u)-E(u)\|_2\le L_{\rm post}\|P\|_{\rm op}M_H\eta.$$
If the exact cycle satisfies the root-error estimate
$\|E(u)-u_*\|_2\le\kappa\|u-u_*\|_2$ on a stated invariant region, then
for every iteration input $u_k$ in that region whose exact and inexact
corrected states satisfy the preceding hypotheses,
$$\|u_{k+1}-u_*\|_2\le\kappa\|u_k-u_*\|_2+L_{\rm post}\|P\|_{\rm op}M_H\eta_k.$$
Invertibility of $DF_H$ alone is not asserted to imply the stated
residual-to-solution estimate; that bound must be proved under additional
coarse-operator hypotheses.

## Facts & Assumptions

**Given:** The two-grid FAS correction formula, the same fine pre-smoothing state in both cycles, a residual-to-solution bound with constant $M_H$, a post-smoother Lipschitz constant $L_{\rm post}$, and (for the iteration inequality) an exact-cycle root-error factor $\kappa$.

[F1] [[alg-fas-two-grid-cycle]]: the coarse difference is prolonged by $P(\widehat v-Iu)$ before post-smoothing.

[F2] [[thm-fas-local-contraction-under-derivative-bound]]: under its stated hypotheses, the exact cycle has a root-error factor $\kappa=q+Lr/2<1$ on the invariant ball.

[A1] On the chosen region, the exact selected coarse root and the inexact returned value satisfy $\|\widehat v-v(u)\|_2\le M_H\|F_H(\widehat v)-g_H(u)\|_2$.

[A2] The post-smoother has Lipschitz constant $L_{\rm post}$ on the segment joining the exact and inexact corrected states.

## Proof

1.1 Let $z=u_{\rm pre}+P(v(u)-Iu_{\rm pre})$ and $\widehat z=u_{\rm pre}+P(\widehat v-Iu_{\rm pre})$ be the exact and inexact corrected states. By [F1], subtraction cancels $u_{\rm pre}$ and $Iu_{\rm pre}$, so $\widehat z-z=P(\widehat v-v(u))$. Hence [A1] gives $\|\widehat z-z\|_2\le\|P\|_{\rm op}\|\widehat v-v(u)\|_2\le\|P\|_{\rm op}M_H\eta.$ [F1, A1, algebra]

2.1 Applying the same post-smoother to the two corrected states and using [A2] yields $\|\widehat E(u)-E(u)\|_2\le L_{\rm post}\|P\|_{\rm op}M_H\eta$. For an iteration, the triangle inequality and [F2] therefore give $\|u_{k+1}-u_*\|_2\le\|\widehat E(u_k)-E(u_k)\|_2+\|E(u_k)-u_*\|_2\le L_{\rm post}\|P\|_{\rm op}M_H\eta_k+\kappa\|u_k-u_*\|_2.$ [A2, F2, step 1.1, algebra] ∎
