---
id: thm-galerkin-v-cycle-work-recurrence-master-regimes
kind: theorem
title: "Work recurrence for fixed-coarsening multigrid cycles in all three regimes"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-finite-galerkin-v-cycle,
       thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: "Susanne C. Brenner and L. Ridgway Scott, The Mathematical Theory of Finite Element Methods, 3rd ed., Chapter 6"
    url: "https://webs.um.es/eliseo/um/uploads/Main/Brenner_Scott_The_Mathematical_Theory_Of_Finite_Element%20Methods_2008.pdf"
  - title: "Numerical Methods II, University of Heidelberg lecture notes, Chapter 10"
    url: "https://conan.iwr.uni-heidelberg.de/data/teaching/finiteelements_ws2021/num2_updated.pdf"
---

## Statement

For any finite Galerkin hierarchy and parameters admitted by
[[alg-finite-galerkin-v-cycle]], every invocation of the recursive procedure
terminates. For the work estimate, fix an integer $d\ge1$ and let $L\ge0$
range over integers. Set $q=2^d$, and let the hierarchy have sizes $N_j=q^j$
for $0\le j\le L$, so its finest size is $N=N_L=q^L$ and each coarsening step
divides the size by the fixed factor $q$.
Suppose each level with $N_j$ unknowns has $cN_j$ arithmetic work outside
recursion for a fixed $c>0$, the base solve at $N_0=1$ has fixed bounded
positive cost, and each cycle makes a fixed positive integer $\gamma$
recursive calls. With $d,c,\gamma$ fixed, the work recurrence

$$T(N)=cN+\gamma T(N/q)$$

has order $\Theta(N)$ when $\gamma<q$, $\Theta(N\log N)$ when $\gamma=q$,
and $\Theta(N^{\log_q\gamma})$ when $\gamma>q$, as $L\to\infty$. These are
arithmetic-work bounds conditional on the stated uniform per-level cost and
coarsening assumptions. They do not imply convergence or include setup cost.

## Facts & Assumptions

**Given:** A finite Galerkin hierarchy and parameters admitted by [[alg-finite-galerkin-v-cycle]]. For the work estimate, a fixed integer $d\ge1$, integer $L\ge0$, $q=2^d$, level sizes $N_j=q^j$ for $0\le j\le L$, $N=N_L=q^L$, a fixed $c>0$, fixed positive integer $\gamma$, and base cost $T(1)=\Theta(1)$.

[F1] [[alg-finite-galerkin-v-cycle]]: the base branch solves $A_0z=b$ exactly; at a positive level, the procedure uses finitely many pre- and post-sweeps and makes exactly $\gamma$ recursive calls at the next coarser level.

[F2] Every real symmetric positive-definite matrix is invertible, so the base system has a unique exact solution ([[thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer]]).

## Proof
1.1 For any admissible finite hierarchy, at level $j=0$ the matrix $A_0$ is real symmetric positive definite, so [F2] gives a unique solution and the base branch is defined. Inductively, if every call at level $j-1$ terminates, then a call at level $j$ terminates: its pre- and post-sweep counts are finite, and its loop makes the finite number $\gamma$ of terminating calls at level $j-1$. Hence every invocation on every admissible finite hierarchy terminates. [given, F1, F2, induction]

2.1 Repeated substitution in the recurrence gives $$T(N)=cN\sum_{r=0}^{L-1}(\gamma/q)^r+\gamma^L T(1).$$ For $L=0$, the sum is empty and this is the base cost; for $L+1$, substituting $T(N/q)$ adds the term $cN(\gamma/q)^L$ and leaves the base term $\gamma^{L+1}T(1)$, proving the formula by induction on $L$. [given, F1, step 1.1, induction, algebra]

3.1 If $\gamma<q$, the ratio $\gamma/q<1$, so the finite geometric sum is bounded above and below by positive constants independent of $L$. Also $\gamma^L=N^{\log_q\gamma}=o(N)$, while $cN$ is a lower bound. Hence $T(N)=\Theta(N)$. [step 2.1, algebra]

3.2 If $\gamma=q$, the sum in step 2.1 is $L$, and $\gamma^LT(1)=N\,T(1)=\Theta(N)$. Since $L=\log_qN$, this gives $T(N)=\Theta(N\log N)$. [step 2.1, algebra]

3.3 If $\gamma>q$, the geometric sum is $\Theta((\gamma/q)^L)$. Thus the first term in step 2.1 is $\Theta(N(\gamma/q)^L)=\Theta(\gamma^L)=\Theta(N^{\log_q\gamma})$; the base term has the same order. Therefore $T(N)=\Theta(N^{\log_q\gamma})$. [step 2.1, algebra]

4.1 The recurrence counts only the per-level cycle work stated in the hypotheses and the recursive calls in [F1]. It contains no setup, floating-point error, or convergence estimate. [given, F1, step 1.1, step 2.1] ∎
