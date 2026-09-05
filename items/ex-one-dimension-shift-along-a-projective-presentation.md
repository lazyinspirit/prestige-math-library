---
id: ex-one-dimension-shift-along-a-projective-presentation
kind: example
title: "One dimension shift along a projective presentation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-left-derived-functors-form-a-homological-delta-functor, prop-positive-left-derived-functors-vanish-on-projective-objects, lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Example

Assume the Axiom of Dependent Choice.

Let $P$ be supplied projective resolution data on a class $\mathcal D$ of
objects of $\mathcal A$, let $F:\mathcal A\to\mathcal B$ be additive and right
exact, and let
$$0\to K\to Q\to A\to0$$
be a short exact sequence in $\mathcal D$ with $Q$ projective. Then for every
$n>1$ the
connecting map of the derived long exact sequence gives an isomorphism
$$L_n^PF(A)\xrightarrow{\ \sim\ }L_{n-1}^PF(K).$$
## Facts & Assumptions

**Given:** A short exact sequence $0\to K\to Q\to A\to0$ in $\mathcal D$ with $Q$ projective and an integer $n>1$.

[L1] The left derived functors form a homological delta functor ([[thm-left-derived-functors-form-a-homological-delta-functor]]).

[L2] Positive left derived functors vanish on projective objects ([[prop-positive-left-derived-functors-vanish-on-projective-objects]]).

[L3] When the outer maps in the exact segment vanish, the connecting map is an isomorphism ([[lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], the given short exact sequence yields an exact segment $$L_n^PF(Q)\to L_n^PF(A)\xrightarrow{\partial_n}L_{n-1}^PF(K)\to L_{n-1}^PF(Q).$$ [L1, given, construct]

2.1 Since $Q\in\mathcal D$ is projective and $n>1$, [L2] gives $L_n^PF(Q)=L_{n-1}^PF(Q)=0$. Therefore [L3] turns the connecting map in step 1.1 into the displayed isomorphism. [L2, L3, step 1.1] ∎
