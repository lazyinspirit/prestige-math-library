---
id: lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold
kind: lemma
title: "TV-close laws have identical Huber mixtures at the contamination threshold"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-probability-measure
  - def-huber-contamination-model
  - def-total-variation-distance-for-probability-laws
  - def-axiom-of-choice
  - def-radon-nikodym-derivative
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-extended-real-valued-measurable-function
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - lem-convex-mixture-of-probability-laws
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model, §5, Theorem 5.1 and proof in the supplement"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997: High-Dimensional Statistics, Lecture Notes, Chapter 5, §5.3"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $P_0,P_1$ be probability measures on one measurable space. If $0\le\epsilon<1$ and $\|P_0-P_1\|_{TV}\le\epsilon/(1-\epsilon)$, there are probability measures $Q_0,Q_1$ for which
$$
(1-\epsilon)P_0+\epsilon Q_0=(1-\epsilon)P_1+\epsilon Q_1.
$$
At $\epsilon=1$, the same equality is possible without a TV condition.

## Facts & Assumptions

**Given:** The Axiom of Choice, probability measures $P_0,P_1$, and the stated total-variation condition.

[A1] [[def-axiom-of-choice]]: the proof uses the choice-qualified Radon–Nikodym supplier to obtain nonnegative density representatives.

[F1] [[def-total-variation-distance-for-probability-laws]]: $\|P_0-P_1\|_{TV}=\sup_{A}|P_0(A)-P_1(A)|$.

[F2] [[def-probability-measure]]: $P_0$ and $P_1$ are nonnegative measures of total mass one.

[F3] [[def-radon-nikodym-derivative]]: the Radon–Nikodym derivative is an almost-everywhere class of densities satisfying the setwise integral formula, under the hypotheses of its existence theorem.

[F4] [[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]: under AC, if $\mu$ and $\lambda$ are sigma-finite positive measures on the same measurable space and $\lambda\ll\mu$, then $d\lambda/d\mu$ has a finite-valued nonnegative measurable representative.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]] and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: integrable differences have linear integrals, and order bounds pass to their nonnegative integrals.

[F6] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: sums, differences, and positive and negative parts of measurable real functions are measurable.

[F7] [[def-extended-real-valued-measurable-function]]: the level sets of a measurable real-valued function are measurable.

[F8] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: a nonnegative measurable density defines a measure by integration over measurable sets.

[F9] [[lem-convex-mixture-of-probability-laws]]: convex mixtures of probability measures are probability measures.

[F10] [[def-huber-contamination-model]]: the one-observation law is the mixture $(1-\epsilon)P_\theta+\epsilon Q$.

## Proof

1.1 If $\epsilon=1$, set $Q_0=Q_1=P_0$; both displayed mixtures equal $P_0$. If $\epsilon<1$ and $\|P_0-P_1\|_{TV}=0$, [F1] gives $P_0=P_1$, so again set $Q_0=Q_1=P_0$. It remains to consider $0<\epsilon<1$ and $\delta:=\|P_0-P_1\|_{TV}>0$. [given, F1, choose]

1.2 Put $\nu=P_0+P_1$. Countable additivity and nonnegativity of $P_0,P_1$ show that $\nu$ is a positive measure, and $\nu(X)=2$, so it is finite and sigma-finite. If $\nu(A)=0$, then $P_0(A)+P_1(A)=0$ with both terms nonnegative, so each is zero; hence $P_i\ll\nu$. By [A1], [F3], and [F4], choose nonnegative measurable densities $p_i$ with $P_i(A)=\int_Ap_i\,d\nu$ for every measurable $A$. In particular $\int p_i\,d\nu=1$, so $p_i\in L^1(\nu)$. [A1, F2, F3, F4, choose]

2.1 Let $g=p_0-p_1$, with measurable positive and negative parts $g^+,g^-$ by [F6]. Since $\int g\,d\nu=0$, [F5] gives $\int g^+\,d\nu=\int g^-\,d\nu$. For every measurable $A$, $|\int_Ag\,d\nu|\le\max(\int g^+\,d\nu,\int g^-\,d\nu)$; the set $A=\{g>0\}$ is measurable by [F7] and attains $\int_Ag\,d\nu=\int g^+\,d\nu$. Therefore [F1] gives $\delta=\int g^+\,d\nu=\int g^-\,d\nu$. [F1, F5, F6, F7, step 1.2, algebra]

3.1 Define $Q_0(A)=\delta^{-1}\int_Ag^-\,d\nu$ and $Q_1(A)=\delta^{-1}\int_Ag^+\,d\nu$. By [F8] these are measures; step 2.1 gives total mass one, so they are probability measures. [F8, step 2.1, algebra]

4.1 Let $\epsilon'=\delta/(1+\delta)$. The assumed inequality implies $\epsilon'\le\epsilon$, and $\epsilon'/\delta=1-\epsilon'$. The densities of $(1-\epsilon')P_0+\epsilon'Q_0$ and $(1-\epsilon')P_1+\epsilon'Q_1$ are respectively $(1-\epsilon')(p_0+g^-)=(1-\epsilon')\max(p_0,p_1)$ and $(1-\epsilon')(p_1+g^+)=(1-\epsilon')\max(p_0,p_1)$. Both mixtures are probability measures by [F9], and equal densities give equality of the measures. [given, F2, F3, F4, F9, step 3.1, algebra]

5.1 By [F10], the target laws have the Huber mixture form. Since $\epsilon>0$, set $\widetilde Q_i=(\epsilon'/\epsilon)Q_i+(1-\epsilon'/\epsilon)P_i$. By [F9] each $\widetilde Q_i$ is a probability measure, and $(1-\epsilon)P_i+\epsilon\widetilde Q_i=(1-\epsilon')P_i+\epsilon'Q_i$. Step 4.1 therefore gives the required equality at the original fraction $\epsilon$. [F9, F10, step 4.1, algebra]

6.1 Steps 1.1 and 5.1 cover all endpoint and positive-distance cases, respectively. [step 1.1, step 5.1] ∎
