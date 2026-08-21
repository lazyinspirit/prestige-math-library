---
id: prop-picard-iteration-converges-with-explicit-error-bounds
kind: proposition
title: "Picard iteration converges with geometric short-time and factorial cylinder error bounds"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-picard-lindelof-local-existence-and-uniqueness, def-picard-operator-and-picard-iterates, lem-vector-valued-continuous-curve-space-is-complete, thm-complete-subspace-iff-closed, lem-picard-operator-is-a-short-time-contraction, lem-weissinger-fixed-point-criterion, cor-banach-error-estimates, thm-norm-inequality-for-the-vector-valued-integral, def-factorial-and-falling-factorial, thm-picard-iterates-for-exponential]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal T$ be a Picard operator on an invariant curve ball over a time interval of half-length $h$, and let $L$ be a state-Lipschitz constant. Starting at $x^{(0)}(t)=x_0$, the iterates converge uniformly to the unique fixed point. If $q=Lh<1$, the Banach a priori and a posteriori bounds hold. Without $Lh<1$,

$$d_\infty(\mathcal T^m x,\mathcal T^m y)\le\frac{(Lh)^m}{m!}d_\infty(x,y),$$

and the corresponding factorial-series tail bounds the error.

## Facts & Assumptions

**Given:** The invariant Picard ball, the constant $L$, and the index-zero iterate.

[L1] For a contraction of constant $q<1$, $d(x^*,x_n)\le q^n d(x_1,x_0)/(1-q)$, with the corresponding a posteriori estimate ([[cor-banach-error-estimates]]).

[L2] Summably contracting iterates have a unique fixed point and the iteration tail bounds its error ([[lem-weissinger-fixed-point-criterion]]).

[L3] The exponential-series partial sums converge to $\exp$ uniformly on every bounded interval ([[thm-picard-iterates-for-exponential]]).

[L4] For an integrable vector-valued function on $[a,b]$ with $a\le b$, $\left\|\int_a^b f\right\|_2\le\int_a^b\|f\|_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L5] If $q=Lh<1$, the Picard operator on the invariant curve ball is a contraction with constant $q$ ([[lem-picard-operator-is-a-short-time-contraction]]).

[L6] Continuous $\mathbb R^n$-valued curves on a nonempty compact interval form a complete space in the supremum metric ([[lem-vector-valued-continuous-curve-space-is-complete]]).

[L7] A closed subspace of a complete metric space is complete ([[thm-complete-subspace-iff-closed]]).

## Proof

**Proof technique:** direct.

1.1 When $q=Lh<1$, [L5] makes the Picard operator a contraction with constant $q$, so substitution into [L1] gives the geometric estimates; if $L=0$, all differences vanish after one Picard step. [given, L1, L5, algebra]

1.2 For $m=1$, [L4] gives the pointwise bound $\|\mathcal Tx(t)-\mathcal Ty(t)\|_2\le L|t-t_0|d_\infty(x,y)$. If the corresponding bound holds with $m-1$, another application of [L4] integrates $L^m|s-t_0|^{m-1}/(m-1)!$ from $t_0$ to $t$ and gives $L^m|t-t_0|^m/m!$; induction and $|t-t_0|\le h$ yield the displayed supremum estimate. [given, L4, algebra]

2.1 The invariant curve ball is a closed ball in the supremum metric, hence is nonempty and complete by [L6] and [L7]. By [L3], the series $\sum_{m\ge1}(Lh)^m/m!$ converges, so [L2] applied to step 1.2 gives uniform convergence to the unique fixed point and the stated factorial tail estimate, including $h=0$. [step 1.2, L2, L3, L6, L7, algebra] ∎
