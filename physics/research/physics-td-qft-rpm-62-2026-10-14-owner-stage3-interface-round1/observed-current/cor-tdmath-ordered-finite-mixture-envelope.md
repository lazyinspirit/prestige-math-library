---
id: cor-tdmath-ordered-finite-mixture-envelope
kind: corollary
title: "Conditional finite-mixture envelope for an additive ordered representation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
proof_strategy: direct
deps:
  - def-tdmath-tagged-scalable-compound
  - def-tdmath-comparison-and-stability
  - lem-tdmath-compound-mass-well-defined
  - thm-tdmath-additive-entropy-representation
  - thm-tdmath-finite-mixture-envelope
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
  thm-tdmath-finite-mixture-envelope: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
verification:
  precheck: n/a
---

## Statement

Assume the strict-reference representation conclusion of the draft supplier [[thm-tdmath-additive-entropy-representation]] for its nonempty state set $X$ and stated comparison hypotheses. Let $d\ge1$ and $m\ge1$ be integers, and take a finite list of distinct states $s_1,\ldots,s_m\in X$. Let $q_1,\ldots,q_m\in\mathbb R^d$, and let $e_s$ be the unit-state compound defined in [[def-tdmath-tagged-scalable-compound]]; it is a mass-one point mass by [[lem-tdmath-compound-mass-well-defined]]. For $\theta\in\Delta_m$, put $M_\theta=\sum_i\theta_i e_{s_i}$ and set $V(\theta):=\sum_i\theta_iS(s_i)$. Suppose a map $\chi:\{M_\theta:\theta\in\Delta_m\}\to\mathbb R^d$ satisfies $\chi(M_\theta)=\sum_i\theta_iq_i$ for every $\theta\in\Delta_m$. For each $x\in\mathbb R^d$, define the value to be $+\infty$ if no $\theta\in\Delta_m$ has coordinate $x$. Then the minimum represented value among those finite mixtures, with that empty-feasible-set convention, is exactly the finite-mixture envelope $f_{\rm mix}(x)$ of [[thm-tdmath-finite-mixture-envelope]], with all its attainment, convexity, lower-semicontinuity, biconjugation, and supporting-face conclusions. This is the complete conditional transfer under the representation conclusion and affine coordinate assignment; the supplier definition and mass-one fact are provided locally.

## Facts & Assumptions

**Given:** A finite family of states and coordinate data as in the Statement.

[L1] [[thm-tdmath-additive-entropy-representation]]: under its strict-reference hypotheses the normalized $S:X\to\mathbb R$ assigns each compound $\sum_i a_i e_{x_i}$ the finite additive value $\sum_i a_iS(x_i)$ and represents all equal-mass comparisons. Its normalized reference values are $0$ and $1$. The supplier remains draft; this use records no independent proof acceptance.

[A1] Conditional premise: assume the strict-reference representation conclusion [L1] for the chosen state set and its listed comparison hypotheses.

[A3] The coordinate assignment $\chi$ is affine on the finite mixtures of the fixed states, exactly as specified in the Statement.

[L2] [[def-tdmath-tagged-scalable-compound]] defines $e_s(x)=1$ when $x=s$ and $0$ otherwise, nonnegative pointwise scaling with $0e_s=0$, and finite pointwise composition. [[lem-tdmath-compound-mass-well-defined]] proves $m(e_s)=1$, finite mass additivity and homogeneity for every nonnegative scalar, and $m(C)=0$ exactly for the empty compound.

[L3] [[thm-tdmath-finite-mixture-envelope]]: for finite data $(q_i,a_i)$ the minimized weighted value is the proper closed convex envelope with the stated dual and support properties.

## Proof

**Proof technique:** direct.

1.1 By [A1] and [L1], each $a_i=S(s_i)$ is finite. For any $\theta\in\Delta_m$, [L2] gives $m(M_\theta)=\sum_i\theta_i m(e_{s_i})=\sum_i\theta_i=1$. If $\theta_i=0$, its term is the empty compound and contributes zero; equivalently omit such terms, leaving only positive coefficients and never applying a positive-scaling comparison axiom at zero. The representation assigns $M_\theta$ the value $V(\theta)=\sum_i\theta_i a_i$. By [A3], its coordinate is $\sum_i\theta_i q_i$. Since the states are distinct, the coefficient of $s_i$ in $M_\theta$ is exactly $\theta_i$, so this parametrization is injective. Hence mixtures in this fixed family with coordinate $x$ correspond exactly to $\theta\in\Theta_x$ from [L3]. [A1, A3, L1, L2, L3, algebra]

2.1 The minimum of $V(\theta)$ over those mixtures is therefore $\min_{\theta\in\Theta_x}\sum_i\theta_i a_i=f_{\rm mix}(x)$ by [L3], with $+\infty$ when $\Theta_x$ is empty. Every further conclusion in the Statement follows by applying the corresponding conclusion of [L3] to the same finite data. The point-mass and zero-coefficient cases are supplied by [L2]; the transfer remains conditional on [A1] and [A3] and records no independent acceptance of the draft representation. [A1, A3, L3, step 1.1] ∎
