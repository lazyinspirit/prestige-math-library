---
id: ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory
kind: example
title: "The essential supremum precedes the Holder representative in De Giorgi theory"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 13
deps: [thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, thm-harnack-inequality-for-nonnegative-weak-solutions, thm-de-giorgi-nash-interior-holder-regularity, def-local-weak-solution-for-a-divergence-form-operator, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-essential-supremum-with-respect-to-a-measure, def-l-p-space-as-a-quotient-by-null-functions, lem-weak-derivative-is-independent-of-lp-representatives, def-countable-choice, def-axiom-of-choice]
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
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorem 1 and the pointwise-versus-essential distinction in the statement of the L^p means, printed pp. 1-2 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "The conventions (i)-(iv) on boundary and essential suprema in Lecture 13, printed pp. 153-154 (read in full)"
verification:
  precheck: pass
---

## Example

**Example.** On $\Omega=B_1(0)\subset\mathbb R^2$ let $u$ be the zero class of $H^1(\Omega)$ (the class of the function that vanishes a.e.), and let $\hat u=\mathbf 1_{\{0\}}$ be the representative that equals $1$ at the origin and $0$ elsewhere. Then:
1. $u$ is a weak solution of $-\Delta u=0$ on $\Omega$ ([[def-local-weak-solution-for-a-divergence-form-operator]]);
2. $\hat u$ differs from the zero function on the Lebesgue-null set $\{0\}$, so $u$ and $\hat u$ determine the same class and the same weak derivatives ([[lem-weak-derivative-is-independent-of-lp-representatives]]);
3. $\sup_\Omega\hat u=1$ while $\operatorname{ess\,sup}_\Omega u=0$ ([[def-essential-supremum-with-respect-to-a-measure]]), so the pointwise supremum of an arbitrary representative is not the quantity controlled by the local boundedness estimate [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]] or by the Harnack bound [[thm-harnack-inequality-for-nonnegative-weak-solutions]].
To read these class estimates as pointwise bounds, use the continuous representative produced by [[thm-de-giorgi-nash-interior-holder-regularity]]; its pointwise and essential extrema agree.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the unit disc $\Omega=B_1(0)\subset\mathbb R^2$; the zero class $u\in H^1(\Omega)$ and the representative $\hat u=\mathbf 1_{\{0\}}$.

[F1] The local weak formulation: $u$ is a local weak solution of $-\Delta u=0$ on $\Omega$ if $\int_\Omega\nabla u\cdot\nabla v\,dx=0$ for every $v\in H^1_0(\Omega)$; the zero class satisfies this identically ([[def-local-weak-solution-for-a-divergence-form-operator]]).

[F2] Weak derivatives depend only on the class: two $L^1_{\mathrm{loc}}$ representatives of the same class have the same weak derivatives, and the set $\{0\}$ is Lebesgue-null, so $\hat u$ and the zero function determine the same class ([[lem-weak-derivative-is-independent-of-lp-representatives]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Essential versus pointwise suprema: the essential supremum of a class is the infimum of the essential bounds, hence $\operatorname{ess\,sup}_\Omega u=0$ for the zero class, whereas the pointwise supremum of the particular function $\hat u$ is $\sup_\Omega\hat u=1$ ([[def-essential-supremum-with-respect-to-a-measure]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F4] The estimates of the page are stated for essential extrema of classes: the local boundedness theorem bounds $\operatorname{ess\,sup}_{B_{\rho R}}u$ by an $L^p$ mean of the class, and the Harnack inequality bounds $\operatorname{ess\,sup}_{B_{R/2}}u$ by $\operatorname{ess\,inf}_{B_{R/2}}u$ ([[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], [[thm-harnack-inequality-for-nonnegative-weak-solutions]], [[thm-de-giorgi-nash-interior-holder-regularity]]).

## Verification

1.1 The zero class is a weak solution. For every $v\in H^1_0(\Omega)$ one has $\int_\Omega\nabla u\cdot\nabla v\,dx=0$ because $\nabla u=0$ a.e. for the zero class, so [F1] exhibits $u$ as a local weak solution of $-\Delta u=0$ on $\Omega$; equivalently, the classical zero solution restricted to $\Omega$. [given, F1]

2.1 The two representatives differ on a null set. The set $\{0\}$ has Lebesgue measure zero, so $\hat u=0$ a.e. and $\hat u$ represents the class $u$; by [F2] $\hat u$ and the zero function have the same weak derivatives, so every weak formulation tested against $\hat u$ gives the same value as against the zero function. [step 1.1, F2]

3.1 The suprema differ, so only the essential supremum is controlled. By [F3], $\operatorname{ess\,sup}_\Omega u=0$ while $\sup_\Omega\hat u=1$: the pointwise supremum of the particular representative $\hat u$ exceeds the essential supremum of the class. The local boundedness and Harnack estimates of [F4] control only essential extrema of the class, so they cannot be applied to an arbitrary pointwise representative; the class estimates give pointwise bounds for the Holder representative produced by [[thm-de-giorgi-nash-interior-holder-regularity]], which for the zero class is the zero function and for which pointwise and essential extrema agree. All verifications use the explicit functions and the cited interface items, with no choice principle beyond the declared Axiom of Choice and Countable Choice. [step 2.1, F3, F4] ∎
