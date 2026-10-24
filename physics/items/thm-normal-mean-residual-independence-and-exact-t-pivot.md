---
id: thm-normal-mean-residual-independence-and-exact-t-pivot
kind: theorem
title: "Normal sample mean and residual are independent, giving the exact t pivot"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - cor-continuous-functions-are-borel-measurable
  - def-axiom-of-choice
  - def-chi-square-law
  - def-countable-choice
  - def-statistic-and-estimator
  - def-standard-normal-and-normal-laws
  - lem-axiom-of-choice-implies-countable-choice
  - lem-measurable-functions-preserve-independence
  - lem-positive-df-chi-square-has-density-and-regular-cdf
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - thm-orthogonal-projection-has-independent-chi-square-sums
  - thm-independent-random-elements-have-product-joint-law
  - def-multivariate-normal-law
  - def-student-t-and-f-laws
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2003, Lecture 17"
      url: "https://mitocw.ups.edu.ec/courses/mathematics/18-443-statistics-for-applications-fall-2003/lecture-notes/18443.pdf"
    - title: "Aditya Guntuboyina, UC Berkeley Stat 201A Fall 2019, Lecture Notes, §5.5"
      url: "https://www.stat.berkeley.edu/~aditya/resources/FullLectureNotes201AFall2019.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Lecture Notes, Chapter 8, §8.7.1"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
---

## Statement

Assume the Axiom of Choice. Use the experiment with data space $(\mathbb R^n,\mathcal B(\mathbb R^n))$, parameter set $\mathbb R\times(0,\infty)$, and sampling law $P_{\mu,\sigma^2}=N(\mu,\sigma^2)^{\otimes n}$. Let $n\ge2$, $\sigma>0$, and let $X_1,\ldots,X_n$ be the independent coordinates of the observation. Define
$$\bar X=\frac1n\sum_{i=1}^nX_i,\qquad S^2=\frac1{n-1}\sum_{i=1}^n(X_i-\bar X)^2,\qquad S=\sqrt{S^2}.$$
The map $x\mapsto\bar x$ is a statistic. The sample mean $\bar X$ and residual sum $S^2$ are independent,
$$\frac{(n-1)S^2}{\sigma^2}\sim\chi_{n-1}^2,\qquad S>0\ \text{almost surely},\qquad \widetilde T:=\begin{cases} \dfrac{\bar X-\mu}{S/\sqrt n},&S>0,\\ 0,&S=0 \end{cases} \sim t_{n-1}.$$
For every $0<\alpha<1$, the interval
$$\left[\bar X-q_{n-1}(1-\alpha/2)\frac{S}{\sqrt n},\ \bar X+q_{n-1}(1-\alpha/2)\frac{S}{\sqrt n}\right]$$
has exact coverage $1-\alpha$, where $q_{n-1}(u)$ is the unique $u$-quantile of $t_{n-1}$ established in [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]].

## Facts & Assumptions

**Given:** The Axiom of Choice, $n\ge2$, $\sigma>0$, and an independent sample $X_i\sim N(\mu,\sigma^2)$.

[A1] The Axiom of Choice is assumed by the normal-law and orthogonal-invariance suppliers. [[def-axiom-of-choice]]

[A2] Under the Axiom of Choice, the sequence-selection conclusion of the countable-choice lemma gives Countable Choice, the hypothesis of the continuous-map measurability corollary. [[def-countable-choice]] [[lem-axiom-of-choice-implies-countable-choice]] [[cor-continuous-functions-are-borel-measurable]]

[F1] The law $N(\mu,\sigma^2)$ is the pushforward of $N(0,1)$ by the map $z\mapsto\mu+\sigma z$; measurable functions of independent random elements remain independent. [[def-standard-normal-and-normal-laws]] [[lem-measurable-functions-preserve-independence]]

[F2] A statistic is a measurable data map; under Countable Choice, continuous maps between Euclidean spaces are Borel measurable. [[def-statistic-and-estimator]] [[cor-continuous-functions-are-borel-measurable]]

[F3] For $Z\sim N_n(0,I_n)$ and a rank-$r$ orthogonal projection $P$, $PZ$ and $(I-P)Z$ are independent and their squared norms have laws $\chi_r^2$ and $\chi_{n-r}^2$. [[thm-orthogonal-projection-has-independent-chi-square-sums]]

[F4] The joint law of independent standard-normal coordinates is $N_n(0,I_n)$, and each linear projection of that law is normal with the corresponding projected mean and variance. [[thm-independent-random-elements-have-product-joint-law]] [[def-multivariate-normal-law]]

[F5] Positive-degree chi-square denominators are positive almost surely; $t_k$ has a continuous symmetric CDF with unique quantiles, and its law is the piecewise ratio $G/\sqrt{Q_k/k}$ set to zero when $Q_k=0$, for independent $G\sim N(0,1)$ and $Q_k\sim\chi_k^2$. [[lem-positive-df-chi-square-has-density-and-regular-cdf]] [[def-student-t-and-f-laws]] [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 By [A2], Countable Choice holds, so [F2] applies to the linear continuous map $x\mapsto\bar x$; hence it is a statistic on the stated Borel data space. Put $Z_i=(X_i-\mu)/\sigma$. The affine pushforward definition in [F1] gives each $Z_i\sim N(0,1)$, and [F1] preserves their independence. Thus $Z=(Z_1,\ldots,Z_n)\sim N_n(0,I_n)$ by [F4]. [A1, A2, F1, F2, F4]

2.1 Define $\bar Z=n^{-1}\sum_{i=1}^nZ_i$, $u=n^{-1/2}(1,\ldots,1)^T$, and $P=uu^T$. Since $u^Tu=1$, $P$ is a rank-one orthogonal projection. We have $u^TZ=\sqrt n\,\bar Z$ and $X-\bar X(1,\ldots,1)^T=\sigma(I_n-P)Z$. Therefore $\bar X=\mu+\sigma u^TZ/\sqrt n$ and $S^2=\sigma^2\|(I_n-P)Z\|^2/(n-1)$. [step 1.1, algebra]

3.1 By [F3], $PZ$ and $(I_n-P)Z$ are independent and $Q:=\|(I_n-P)Z\|^2\sim\chi_{n-1}^2$. The continuous linear map $z\mapsto u^Tz$ is Borel by [A2] and [F2], and $u^TZ=u^TPZ$; the continuous squared-norm map on the complementary vector is likewise Borel. Thus $G:=u^TZ$ and $Q$ are measurable functions of the independent vectors in [F3], so they are independent by [F1]. By [F4], $G\sim N(0,1)$. [A2, F1, F2, F3, F4, algebra, step 2.1]

4.1 The formulas in step 2.1 express $\bar X$ as an affine function of $G$ and $S^2$ as $\sigma^2 Q/(n-1)$. Hence $\bar X$ and $S^2$ are independent, $(n-1)S^2/\sigma^2=Q\sim\chi_{n-1}^2$, and $S>0$ almost surely by [F5]. [step 2.1, step 3.1, F1, F5, algebra]

5.1 The set $\{S>0\}$ is Borel and the displayed quotient is continuous there; assigning $0$ on $\{S=0\}$ therefore makes $\widetilde T$ measurable. Since $S=0$ exactly when $Q=0$, step 2.1 gives $\widetilde T=G/\sqrt{Q/(n-1)}$ on $\{Q>0\}$ and both versions are $0$ on $\{Q=0\}$. The variables $G$ and $Q$ are independent with laws $N(0,1)$ and $\chi_{n-1}^2$, so [F5] gives $\widetilde T\sim t_{n-1}$. [step 2.1, step 3.1, step 4.1, F5, algebra]

6.1 Let $q=q_{n-1}(1-\alpha/2)$. By [F5], the $t_{n-1}$ CDF is continuous and symmetric, so $F_{t_{n-1}}(0)=1/2<1-\alpha/2$ and strict increase gives $q>0$; symmetry then gives $F_{t_{n-1}}(-q)=\alpha/2$. Step 5.1 therefore gives $\mathbb P(-q\le\widetilde T\le q)=1-\alpha$. On the full-probability event $\{S>0\}$ from step 4.1, this event is exactly $\{\mu\text{ lies in the displayed interval}\}$ by multiplying by $S/\sqrt n$ and rearranging. The events agree almost surely, so the interval has exact coverage $1-\alpha$. [F5, step 4.1, step 5.1, algebra] ∎
