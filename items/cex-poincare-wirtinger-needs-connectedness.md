---
id: cex-poincare-wirtinger-needs-connectedness
kind: counterexample
title: "Poincare-Wirtinger fails on disconnected bounded domains"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-axiom-of-choice, thm-poincare-wirtinger-on-bounded-john-domains, def-ball-average-operator-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, def-weak-derivative-of-a-locally-integrable-function, cor-euclidean-closed-balls-and-spheres-are-compact, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-measure-monotonicity, def-measure, lem-classical-derivatives-are-weak-derivatives, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Remark 3.11 and the discussion of what eliminates constants, printed pp. 68-69."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 4 §4.4, the discussion of conditions eliminating constant functions, printed p. 98."
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega=B(0,1)\cup B(3e_1,1)\subset\mathbb R^2$ (two disjoint unit balls) and $u=\mathbf 1_{B(3e_1,1)}$. Then $Du=0$ almost everywhere and $u$ is not almost everywhere constant on $\Omega$, so $u-u_\Omega$ is nonzero on a set of positive measure and $\|u-u_\Omega\|_{L^p(\Omega)}>0$: the mean-zero Poincare-Wirtinger inequality is false on disconnected bounded open sets, and connectedness is essential for the single-global-mean normalisation.

## Facts & Assumptions

**Given:** Countable Choice; the open bounded set $\Omega=B(0,1)\cup B(3e_1,1)\subseteq\mathbb R^2$; the indicator $u=\mathbf 1_{B(3e_1,1)}$; and $1\le p<\infty$.

[F1] Every Euclidean ball has positive finite Lebesgue measure, measures are monotone and countably additive on disjoint measurable sets ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[prop-measure-monotonicity]], [[def-measure]]).

[F2] $D_iu$ is the weak derivative if $\int_\Omega u\,\partial_i\varphi=-\int_\Omega D_iu\,\varphi$ for every test function $\varphi$, and constant classes have zero weak derivative ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F3] The two open balls are disjoint because $|3e_1|=3>2$; their closures are compact, and each open ball has positive finite measure; the ball average is the normalized integral ([[cor-euclidean-closed-balls-and-spheres-are-compact]], [[def-ball-average-operator-on-r-n]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] Countable Choice is assumed; classical smooth derivatives are weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]). Translated balls have equal measure ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F5] With the additional Axiom of Choice ([[def-axiom-of-choice]]), the mean-zero Poincare-Wirtinger inequality holds on bounded John domains in dimensions $n\ge2$ for every $1\le p<\infty$ ([[thm-poincare-wirtinger-on-bounded-john-domains]]). This positive comparison uses the stronger hypothesis; the two-ball counterexample needs only Countable Choice.

## Counterexample

**Proof technique:** direct.

1.1 The function $u$ is locally constant, hence smooth on $\Omega$, with all classical partial derivatives zero. By [F4] its weak gradient is zero. Since $|u|\le1$ and $\Omega$ has finite measure, $u\in W^{1,p}(\Omega)$ and $\|Du\|_p=0$. The two balls have equal measure by [F4], so $|\Omega|=2|B(0,1)|$ by [F1]. [F1, F2, F3, F4, given, algebra]

2.1 The mean and the oscillation. Since $u=0$ on $B(0,1)$ and $u=1$ on $B(3e_1,1)$ and the two balls have equal measure, $u_\Omega=|\Omega|^{-1}\int_\Omega u=|B(3e_1,1)|/(2|B(0,1)|)=1/2$. Therefore $|u-u_\Omega|=1/2$ on both balls, and $\|u-u_\Omega\|_{L^p(\Omega)}^p=\int_\Omega(1/2)^p=2|B(0,1)|2^{-p}>0$, while $u$ is not almost everywhere constant on $\Omega$ (it takes the values $0$ and $1$ on sets of positive measure). [F1, F3, step 1.1, given, algebra]

3.1 Failure and the role of connectedness. The mean-zero Poincare-Wirtinger inequality would require $\|u-u_\Omega\|_{L^p(\Omega)}\le C\|Du\|_{L^p(\Omega)}$ for a constant $C$ depending only on the domain and $p$; but the left side is $2^{1/p}|B(0,1)|^{1/p}/2>0$ by step 2.1 while the right side is $0$ by step 1.1, so no finite $C$ exists. A zero-set normalisation on only one component does not repair the inequality: this very $u$ vanishes on $B(0,1)$, a set of half the domain measure. Each component must be normalised separately, or connectedness imposed; with the additional Axiom of Choice, bounded John domains, which are connected, satisfy the inequality by [F5]. [F1, F5, step 1.1, step 2.1, given, algebra] ∎

## Source notes

The counterexample is the standard two-ball two-valued function, matching the "what eliminates constants" discussion in Kinnunen's Remark 3.11 and Hunter's Chapter 4: the mean of a nonzero mean-zero function is the only quantity that can fail, and on a disconnected domain a locally constant function need not be constant. The computation uses only that the two balls have equal positive measure and that the gradient of a locally constant class vanishes.
