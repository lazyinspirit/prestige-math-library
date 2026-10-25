---
id: cex-harnack-requires-nonnegativity
kind: counterexample
title: "The Harnack inequality requires nonnegativity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-harnack-inequality-for-nonnegative-weak-solutions, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-ball-average-operator-on-r-n, def-essential-supremum-with-respect-to-a-measure, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 1: the Harnack inequality is stated for u >= 0, printed p. 211 (read in full)"
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Theorem 4: the sign hypothesis u >= 0 is removed only by adding sup|u|, printed pp. 2-3 (read in full)"
verification:
  precheck: pass
---

## Statement refuted

**Statement refuted.** There is a positive constant $C$ such that every weak solution $u\in H^1(B_1(0);\mathbb R)$ of $-\Delta u=0$ on the unit ball $B_1(0)\subset\mathbb R^2$ satisfies $\sup_{B_{1/2}(0)}u\le C\inf_{B_{1/2}(0)}u$.

**Counterexample.** Take $u(x)=x_1$, the first coordinate. Then $u$ is harmonic, hence a weak solution of $-\Delta u=0$, but
$$\sup_{B_{1/2}(0)}u=\tfrac12,\qquad \inf_{B_{1/2}(0)}u=-\tfrac12,$$
so $\sup\le C\inf$ fails for every positive constant $C$: the right-hand side is negative while the left-hand side is $\tfrac12$. The nonnegativity hypothesis in [[thm-harnack-inequality-for-nonnegative-weak-solutions]] cannot be omitted; the theorem assumes a nonnegative class on its domain.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the unit ball $B_1(0)\subset\mathbb R^2$; the linear function $u(x)=x_1$.

[F1] Harmonic linear functions are weak solutions: $\Delta x_1=0$ classically, so $\int_{B_1}\nabla u\cdot\nabla v\,dx=0$ for every $v\in H^1_0(B_1)$ by the divergence theorem, and $u$ is a local weak solution of $-\Delta u=0$ in the sense of [[def-local-weak-solution-for-a-divergence-form-operator]] with the coefficients of [[def-uniformly-elliptic-divergence-form-operator]] ($a^{ij}=\delta^{ij}$, $b=c=0$).

[F2] On the open half-ball $B_{1/2}(0)$, the values $u(x)=x_1$ approach $1/2$ along $x_j=(1/2-1/j,0)$ and $-1/2$ along $y_j=(-1/2+1/j,0)$ for $j>2$. Thus $\sup_{B_{1/2}}u=1/2$ and $\inf_{B_{1/2}}u=-1/2$, although neither boundary value is attained; by continuity these also equal the essential extrema ([[def-ball-average-operator-on-r-n]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F3] The Harnack statement: for a nonnegative weak solution of $L_0u=-F$ one has $\operatorname{ess\,sup}_{B_{R/2}}u\le C(\operatorname{ess\,inf}_{B_{R/2}}u+R^{2-n/q}\|F\|_{L^q(B_{2R})})$; the sign hypothesis is used in the proof through the test functions with $u^\beta$ for negative exponents and through the weak Harnack inequality ([[thm-harnack-inequality-for-nonnegative-weak-solutions]]).

## Counterexample

1.1 The linear function is a weak solution. By [F1] $u(x)=x_1$ is harmonic on $B_1(0)$ and hence a weak solution of $-\Delta u=0$ in the local sense; in particular it belongs to $H^1(B_1(0))$ and is smooth. [given, F1]

2.1 The extrema have opposite signs. By [F2], $\sup_{B_{1/2}(0)}u=\tfrac12$ and $\inf_{B_{1/2}(0)}u=-\tfrac12$; therefore for every positive constant $C$ one has $\sup_{B_{1/2}(0)}u=\tfrac12>-\tfrac12C=C\inf_{B_{1/2}(0)}u$, so no positive constant satisfies the claimed comparison. [step 1.1, F2]

3.1 The nonnegativity hypothesis is essential. The function takes both positive and negative values on the half-ball: by [F2], its supremum is $1/2$ and its infimum is $-1/2$. For every positive Harnack constant $C$, $C\inf_{B_{1/2}}u=-C/2<1/2=\sup_{B_{1/2}}u$, so the displayed comparison fails. The theorem uses nonnegativity in the weak-Harnack argument [F3]. All verifications use the explicit linear function, with no choice principle beyond the declared Axiom of Choice and Countable Choice. [step 2.1, F2, F3, algebra] ∎
