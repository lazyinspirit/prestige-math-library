---
id: thm-lasso-prediction-and-l1-error-under-incoherence
kind: theorem
title: "Lasso prediction and coefficient bounds under incoherence"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-fixed-design-incoherence-condition
  - def-lasso-estimator
  - def-subgaussian-fixed-design-regression-model
  - lem-fixed-design-subgaussian-score-concentration
  - lem-incoherence-implies-restricted-eigenvalue
  - lem-lasso-objective-has-minimizer
  - thm-cauchy-schwarz-finite
  - thm-lasso-basic-inequality
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics, Lemma 2.17 and Theorem 2.18"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Lemma 2.17 and Theorem 2.18"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "Peter J. Bickel, Ya'acov Ritov and Alexandre B. Tsybakov, Simultaneous Analysis of Lasso and Dantzig Selector, Theorem 7.2"
      url: "https://www.stat.berkeley.edu/~bickel/BickelRitovTsybakov2009aos.pdf"
---

## Statement

Let $n,d,s$ be integers with $n\ge2$, $d\ge1$, $1\le s\le d$, and let $\sigma>0$, $\delta\in(0,1)$. In the model $Y=X\theta^\ast+\varepsilon$ of [[def-subgaussian-fixed-design-regression-model]], suppose $|\{j:\theta_j^\ast\ne0\}|\le s$ and the deterministic design satisfies the incoherence condition of [[def-fixed-design-incoherence-condition]]. Define
$$\tau=4\sigma\left(\sqrt{\frac{\log(2d)}{n}}+\sqrt{\frac{\log(1/\delta)}{n}}\right).$$
For every response realization the minimizer set in [[def-lasso-estimator]] is nonempty by [[lem-lasso-objective-has-minimizer]]. The measurable score event has probability at least $1-\delta$, and on that event every minimizer $\hat\theta$ in the set satisfies
$$\frac{\|X\hat\theta-X\theta^\ast\|_2^2}{n}\le576\,s\sigma^2\frac{\log(2d/\delta)}n, \qquad \|\hat\theta-\theta^\ast\|_1\le96\sqrt2\,s\sigma\sqrt{\frac{\log(2d/\delta)}n}.$$
In particular, the prediction and coefficient rates are respectively $O(s\sigma^2\log(2d/\delta)/n)$ and $O(s\sigma\sqrt{\log(2d/\delta)/n})$. Incoherence is sufficient for these bounds, but not necessary. Without any design restriction, the coefficient bound can fail.

## Facts & Assumptions

**Given:** The hypotheses in the Statement, the fixed design, response and noise, and an arbitrary minimizer $\hat\theta$ for each response realization.

[F1] For every response the Lasso objective has a nonempty minimizer set ([[def-lasso-estimator]], [[lem-lasso-objective-has-minimizer]]).

[F2] On the event $\|X^{\mathsf T}\varepsilon/n\|_\infty\le\tau/2$, the basic inequality gives $a^2+\tau\|\Delta_{S^c}\|_1\le3\tau\|\Delta_S\|_1$, where $\Delta=\hat\theta-\theta^\ast$ and $a=\|X\Delta\|_2/\sqrt n$ ([[thm-lasso-basic-inequality]]).

[F3] If $\|\Delta_{S^c}\|_1\le3\|\Delta_S\|_1$, the exact incoherence bound implies $a^2\ge\frac12\|\Delta_S\|_2^2$ for the support $S$ with $|S|\le s$ ([[lem-incoherence-implies-restricted-eigenvalue]]).

[F4] With the displayed $\tau$, the score event in [F2] has probability at least $1-\delta$ ([[lem-fixed-design-subgaussian-score-concentration]]).

[F5] For $|S|\le s$, $\|\Delta_S\|_1\le\sqrt s\|\Delta_S\|_2$ ([[thm-cauchy-schwarz-finite]]).

## Proof



1.1 Work on the event in [F4], whose probability is at least $1-\delta$, and choose any minimizer, which exists by [F1]. Let $S=\{j:\theta_j^\ast\ne0\}$ and $\Delta=\hat\theta-\theta^\ast$. Since $a^2\ge0$ and $\tau>0$, [F2] gives $\|\Delta_{S^c}\|_1\le3\|\Delta_S\|_1$, so [F3] applies. If $a=0$, [F3] gives $\Delta_S=0$; then [F2] gives $\Delta_{S^c}=0$, and both conclusions hold. If $a>0$, [F3] and [F5] imply $\|\Delta_S\|_1\le\sqrt{2s}\,a$. From [F2], $a^2\le3\tau\|\Delta_S\|_1\le3\sqrt{2s}\tau a$, hence $a^2\le18s\tau^2$. [given, F1, F2, F3, F4, F5, cases]

2.1 The cone inequality from [F2] gives $\|\Delta\|_1\le4\|\Delta_S\|_1$. Using [F3], [F5] and $a\le3\sqrt{2s}\tau$ from step 1.1 yields $\|\Delta\|_1\le4\sqrt{2s}a\le24s\tau$. [F2, F3, F5, step 1.1, algebra]

3.1 Put $L=\log(2d/\delta)=\log(2d)+\log(1/\delta)$. Since $(u+v)^2\le2(u^2+v^2)$, $\tau^2\le32\sigma^2L/n$ and $\tau\le4\sigma\sqrt{2L/n}$. Substitution into steps 1.1 and 2.1 gives the two displayed bounds; the event probability is at least $1-\delta$. [step 1.1, step 2.1, algebra]

4.1 To check the design caveats, take $n=2$, $d=s=1$ and $\varepsilon=0$, which satisfies the noise condition for every $\sigma>0$ and makes the score event certain. Choose $X$ with $X^{\mathsf T}X/n=4/5$. Its diagonal deviation $1/5>1/14$ violates incoherence, yet [F2] gives $(4/5)|\Delta|^2\le3\tau|\Delta|$, hence $|\Delta|\le15\tau/4$ and $\|X\Delta\|_2^2/n\le45\tau^2/4$ for every minimizer and every $\theta^\ast$. Step 3.1 then gives both displayed bounds with smaller constants. Conversely, for $X=0$ and $\varepsilon=0$, the objective is $2\tau\|\theta\|_1$, whose unique minimizer is zero. Taking $\theta^\ast=M\in\mathbb R$ with $M>96\sqrt2\sigma\sqrt{L/n}$ violates the coefficient bound. [given, F1, F2, step 3.1, construct, algebra] ∎

