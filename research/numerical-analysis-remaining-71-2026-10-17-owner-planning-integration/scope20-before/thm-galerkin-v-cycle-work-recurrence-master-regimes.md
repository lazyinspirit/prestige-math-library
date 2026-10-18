---
id: thm-galerkin-v-cycle-work-recurrence-master-regimes
kind: theorem
title: "Work recurrence for fixed-coarsening multigrid cycles in all three regimes"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-finite-galerkin-v-cycle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Statement

Suppose each level with $N$ unknowns has $cN$ arithmetic work outside
recursion, its next level has $N/q$ unknowns for a fixed $q=2^d>1$, the base
solve at $N=1$ has bounded positive cost, and each cycle makes $\gamma\ge1$
recursive calls as in [[alg-finite-galerkin-v-cycle]]. For $N=q^L$ the work
recurrence

$$T(N)=cN+\gamma T(N/q)$$

has order $\Theta(N)$ when $\gamma<q$, $\Theta(N\log N)$ when $\gamma=q$,
and $\Theta(N^{\log_q\gamma})$ when $\gamma>q$. These are arithmetic-work
bounds conditional on the stated uniform per-level cost and coarsening
assumptions. They do not imply convergence or include setup cost.

## Facts & Assumptions

**Given:** $q=2^d>1$, an integer $L\ge0$, $N=q^L$, $c>0$, integer $\gamma\ge1$, base cost $T(1)=\Theta(1)$, and the recursive cycle of [[alg-finite-galerkin-v-cycle]].

[F1] [[alg-finite-galerkin-v-cycle]]: one call makes exactly $\gamma$ calls on the next coarser level, with finite recursion down to the coarsest solve.

## Proof
1.1 Repeated substitution in the recurrence gives $$T(N)=cN\sum_{r=0}^{L-1}(\gamma/q)^r+\gamma^L T(1).$$ For $L=0$, the sum is empty and this is the base cost; for $L+1$, substituting $T(N/q)$ adds the term $cN(\gamma/q)^L$ and leaves the base term $\gamma^{L+1}T(1)$, proving the formula by induction on $L$. [given, F1, induction, algebra]

2.1 If $\gamma<q$, the ratio $\gamma/q<1$, so the finite geometric sum is bounded above and below by positive constants independent of $L$. Also $\gamma^L=N^{\log_q\gamma}=o(N)$, while $cN$ is a lower bound. Hence $T(N)=\Theta(N)$. [step 1.1, algebra]

2.2 If $\gamma=q$, the sum in step 1.1 is $L$, and $\gamma^LT(1)=N\,T(1)=\Theta(N)$. Since $L=\log_qN$, this gives $T(N)=\Theta(N\log N)$. [step 1.1, algebra]

2.3 If $\gamma>q$, the geometric sum is $\Theta((\gamma/q)^L)$. Thus the first term in step 1.1 is $\Theta(N(\gamma/q)^L)=\Theta(\gamma^L)=\Theta(N^{\log_q\gamma})$; the base term has the same order. Therefore $T(N)=\Theta(N^{\log_q\gamma})$. [step 1.1, algebra]

3.1 The recurrence counts only the per-level cycle work stated in the hypotheses and the recursive calls in [F1]. It contains no setup, floating-point error, or convergence estimate. [given, F1, step 1.1] ∎
