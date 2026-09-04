---
id: thm-change-of-variables-for-expectation
kind: theorem
title: "Change of variables for expectation"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-law-or-distribution-of-a-random-element, def-expectation-of-a-nonnegative-or-integrable-random-variable, lem-law-of-a-random-element-is-a-probability-measure, thm-composition-with-borel-functions-preserves-measurability, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.6.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 1.4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 3.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, let
$\mathbb P_X$ be its law, and let $g:(S,\Sigma)\to\mathbb R$ or
$g:(S,\Sigma)\to\mathbb C$ be measurable.

1. If $g\ge0$, then
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$
2. If $g(X)$ is integrable, then $g$ is integrable with respect to
   $\mathbb P_X$ and the same formula holds:
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$

## Facts & Assumptions

**Given:** A random element $X$, its law $\mathbb P_X$, and a measurable map $g$
as in the Statement.

[L1] The law $\mathbb P_X$ is a probability measure on $(S,\Sigma)$
([[def-law-or-distribution-of-a-random-element]],
[[lem-law-of-a-random-element-is-a-probability-measure]]).

[L2] Measurable outer maps preserve measurability under composition
([[thm-composition-with-borel-functions-preserves-measurability]]).

[L3] Every nonnegative measurable function is the increasing limit of nonnegative
simple functions, monotone convergence holds, and the nonnegative integral
agrees with the simple integral on simple functions
([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]],
[[thm-monotone-convergence-for-the-integral]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[def-integral-of-a-nonnegative-simple-function]]).

[L4] Expectation is integration against $\mathbb P$, and real or complex
integrability uses the positive-negative and real-imaginary decompositions
([[def-expectation-of-a-nonnegative-or-integrable-random-variable]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]).

[L5] Measurable functions are closed under the elementary operations used by the
integral, and the Lebesgue integral is linear on $L^1$
([[prop-closure-properties-of-measurable-functions-used-by-the-integral]],
[[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the composite $g\circ X$ is measurable. If $s=\sum_{j=1}^m c_j\chi_{B_j}$ is a nonnegative simple function on $S$ with the $B_j$ pairwise disjoint, then $s\circ X=\sum_{j=1}^m c_j\chi_{X^{-1}(B_j)}$ is a nonnegative simple function on $\Omega$. Using [L1], [L3], and [L4], $$\mathbb E[s(X)]=\sum_{j=1}^m c_j\,\mathbb P(X^{-1}(B_j))=\sum_{j=1}^m c_j\,\mathbb P_X(B_j)=\int_S s\,d\mathbb P_X.$$ [L1, L2, L3, L4]

2.1 Assume now that $g\ge0$. By [L3], choose nonnegative simple functions $s_n\uparrow g$ on $S$. Then $s_n\circ X\uparrow g\circ X$ by step 1.1, so monotone convergence on both spaces and step 1.1 give $$\mathbb E[g(X)]=\lim_{n\to\infty}\mathbb E[s_n(X)]=\lim_{n\to\infty}\int_S s_n\,d\mathbb P_X=\int_S g\,d\mathbb P_X.$$ [step 1.1, L3, L4]

3.1 Assume $g(X)$ is integrable. Then $\mathbb E[|g(X)|]<\infty$, so step 2.1 applied to $|g|$ gives $$\int_S |g|\,d\mathbb P_X=\mathbb E[|g(X)|]<\infty.$$ Hence $g$ is $\mathbb P_X$-integrable. For real-valued $g$, [L4] and [L5] give $g=g^+-g^-$ with both parts nonnegative, so step 2.1 and linearity yield $$\mathbb E[g(X)]=\mathbb E[g^+(X)]-\mathbb E[g^-(X)]=\int_S g^+\,d\mathbb P_X-\int_S g^-\,d\mathbb P_X=\int_S g\,d\mathbb P_X.$$ [step 2.1, L4, L5]

4.1 If $g$ is complex-valued, write $g=u+iv$ with real measurable parts $u,v$. The inequality $|u|,|v|\le|g|$ and step 3.1 show that $u(X)$ and $v(X)$ are integrable, so the real-valued case applied to $u$ and $v$, followed by complex-linearity from [L5], gives $$\mathbb E[g(X)]=\mathbb E[u(X)]+i\mathbb E[v(X)]=\int_S u\,d\mathbb P_X+i\int_S v\,d\mathbb P_X=\int_S g\,d\mathbb P_X.$$ [step 3.1, L4, L5]

5.1 Step 2.1 proves the nonnegative case, while steps 3.1 and 4.1 prove the integrable real and complex cases. [step 2.1, step 3.1, step 4.1] ∎
