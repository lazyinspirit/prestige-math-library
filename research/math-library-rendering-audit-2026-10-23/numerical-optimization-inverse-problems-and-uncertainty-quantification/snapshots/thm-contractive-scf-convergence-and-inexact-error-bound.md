---
id: thm-contractive-scf-convergence-and-inexact-error-bound
kind: theorem
title: A contractive self-consistent map converges and admits residual and inexact-solve bounds
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, thm-banach-fixed-point, def-lipschitz-holder-contraction]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eric Cancès, Gaspard Kemlin, and Antoine Levitt, Convergence analysis of direct minimization and self-consistent iterations, §3.2
      url: https://arxiv.org/pdf/2004.09088
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §1.3–§1.4
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $(K,d)$ be a nonempty complete metric space and let $\Phi:K\to K$ be a
contraction with constant $0\le q<1$. In the SCF application, $K$ is a
complete invariant subset of the response-map domain from
[[def-self-consistent-projector-response-map]], with $d(X,Y)=\|X-Y\|_F$.
Then $\Phi$ has a unique fixed point $X_*$ and exact iterates
$X_{k+1}=\Phi(X_k)$ satisfy
$$d(X_k,X_*)\le q^k d(X_0,X_*).$$
For every $X\in K$,
$$d(X,X_*)\le\frac{d(X,\Phi(X))}{1-q}.$$
If computed updates $X_{k+1}\in K$ obey
$d(X_{k+1},\Phi(X_k))\le\eta_k$, then
$$e_{k+1}\le q e_k+\eta_k,\qquad e_k\le q^k e_0+\sum_{j=0}^{k-1}q^{k-1-j}\eta_j,$$
where $e_k=d(X_k,X_*)$ and $X_0$ is the supplied initial point.
Use the convention $q^0=1$, including when $q=0$.

## Facts & Assumptions
**Given:** A nonempty complete metric space $(K,d)$, a self-map $\Phi:K\to K$ with $d(\Phi(X),\Phi(Y))\le qd(X,Y)$ for $0\le q<1$, an initial point $X_0$, and inexact updates with errors $\eta_k\ge0$.

[F1] A contraction of a nonempty complete metric space has a unique fixed point and its iterates converge ([[thm-banach-fixed-point]]).

[F2] The response map and, in the projector application, the Frobenius residual are defined as in [[def-self-consistent-projector-response-map]].

[L1] At every strict occupied gap, that response map selects a unique rank-$r$ projector ([[lem-gapped-projector-map-well-defined]]).

[F3] A contraction with factor $q$ means $d(\Phi(X),\Phi(Y))\le qd(X,Y)$ for all $X,Y\in K$ ([[def-lipschitz-holder-contraction]]).

## Proof


1.1 By [F1], there is a unique $X_*$ with $\Phi(X_*)=X_*$. In the projector application, [L1] supplies the stated map wherever the strict gap hypothesis holds. [given, F1, L1]

2.1 For exact iterates, [F3] gives $d(X_{k+1},X_*)=d(\Phi(X_k),\Phi(X_*))\le qd(X_k,X_*)$. Induction from $k=0$ yields $d(X_k,X_*)\le q^k d(X_0,X_*)$. [step 1.1, given, F3, induction]

2.2 For any $X\in K$, [F2] identifies the SCF metric residual with $d(X,\Phi(X))$. The triangle inequality and contraction property give $d(X,X_*)\le d(X,\Phi(X))+d(\Phi(X),\Phi(X_*))\le d(X,\Phi(X))+q d(X,X_*).$ Since $1-q>0$, rearrangement proves the residual error bound. [given, step 1.1, F2, F3, algebra]

2.3 For an inexact update, the triangle inequality gives $e_{k+1}=d(X_{k+1},X_*)\le d(X_{k+1},\Phi(X_k))+d(\Phi(X_k),\Phi(X_*))\le\eta_k+q e_k.$ This is the one-step recurrence. [given, step 1.1, F3, algebra]

3.1 Repeated substitution in the recurrence yields $e_k\le q^ke_0+\sum_{j<k}q^{k-1-j}\eta_j$: it holds at $k=0$ with an empty sum, and substituting its $k$th bound into $e_{k+1}\le qe_k+\eta_k$ gives the formula at $k+1$. [step 2.3, induction, algebra] ∎
