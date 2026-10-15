---
id: thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
kind: theorem
title: "Existence of a Dirichlet process by normalized gamma Poisson random measure"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-dirichlet-process
  - def-poisson-random-measure
  - def-poisson-law
  - lem-poisson-count-law-normalization-and-moments
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-binomial-theorem
  - def-gamma-distribution-shape-rate
  - lem-gamma-density-normalization
  - def-standard-borel-space
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-real-power-continuity-and-derivatives
  - thm-derivative-of-exponential
  - def-polish-space
  - thm-euclidean-space-complete
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-countable-discrete-space-is-standard-borel
  - lem-borel-subspaces-admit-polish-presentations
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-law-or-distribution-of-a-random-element
  - def-measurable-function-between-measurable-spaces
  - def-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-change-of-variables-for-expectation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-nonnegative-weighted-sums-of-measures
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-dirichlet-density-kernel
  - def-dirichlet-distribution
  - thm-dirichlet-density-normalization
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-euler-integral-convergence
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-integral-exponential-agrees-with-exponential
  - thm-exponential-limits-and-range
  - thm-logarithm-derivative-and-integral
  - lem-uniqueness-of-a-multivariate-exponential-transform
  - def-pi-system
  - thm-dynkin-pi-lambda
  - lem-finite-measure-uniqueness-on-a-pi-system
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is used for the countable standard-Borel product construction through Kolmogorov extension; AC implies the Countable Choice required by the Gamma and Dirichlet density normalizations."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapters 1 and 3"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Sections 2 and 3"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(\mathsf X,\mathcal A)$ be a standard Borel
space and let $\alpha$ be a finite nonzero measure on it. Then there is a
measurable random probability measure $G$ whose law on the evaluation
sigma-algebra of $\mathcal P(\mathsf X)$ is $DP(\alpha)$. For every finite
measurable partition $(A_1,\ldots,A_k)$, the unnormalized increments are
independent with
$\Gamma(A_j)\sim\operatorname{Gamma}(\alpha(A_j),1)$ when
$\alpha(A_j)>0$, and $\Gamma(A_j)=0$ almost surely when $\alpha(A_j)=0$.
Consequently the normalized masses have the finite-partition Dirichlet laws
in [[def-dirichlet-process]]. These laws determine the probability law on
$\mathcal P(\mathsf X)$ uniquely.

The construction uses the Poisson random measure with intensity
$$\mu(dx,dt)=\alpha(dx)t^{-1}e^{-t}\,dt\quad\text{on }\mathsf X\times(0,\infty),$$
and normalizes its weighted projection onto $\mathsf X$. It does not assume a
gamma-process existence theorem.

## Facts & Assumptions

**Given:** Full AC, a standard Borel space $(\mathsf X,\mathcal A)$, and a finite measure $\alpha$ with $0<\alpha(\mathsf X)<\infty$.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]].

[A2] Full AC implies Countable Choice, which is the choice strength required by the local Gamma and Dirichlet normalization interfaces. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]].

[F1] Countable products of standard Borel coordinate spaces admit the consistent product law under AC, and finite products remain standard Borel. The countable discrete space $\mathbb N_0$ is standard Borel. [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]] [[def-standard-borel-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]] [[lem-countable-discrete-space-is-standard-borel]].

[F2] A Poisson count with finite mean $c$ has mass $e^{-c}c^j/j!$ and mean $c$, including the degenerate $c=0$ case. [[def-poisson-law]] [[lem-poisson-count-law-normalization-and-moments]].

[F3] Finite product measures satisfy the rectangle product formula, and Tonelli applies to nonnegative functions on their sigma-finite products. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F4] Under Countable Choice, the shape-rate Gamma law has density $x\mapsto x^{a-1}e^{-x}/\Gamma(a)$ at rate $1$, normalized for $a>0$. [[def-gamma-distribution-shape-rate]] [[lem-gamma-density-normalization]].

[F5] For nonnegative measurable functions, Lebesgue change of variables holds under Countable Choice. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F6] The exponential integral and natural logarithm satisfy $\int_0^\infty e^{-ct}dt=1/c$ for $c>0$ and $\int_0^s(1-v)^{-1}dv=-\log(1-s)$ for $s<1$. [[thm-integral-exponential-agrees-with-exponential]] [[thm-exponential-limits-and-range]] [[thm-logarithm-derivative-and-integral]].

[F7] A finite complex measure on $\mathbb R^k$ with an exponential moment is determined by its Laplace transform on a real neighborhood of zero under AC. [[lem-uniqueness-of-a-multivariate-exponential-transform]].

[F8] A countable nonnegative weighted sum of measures is a measure, and each $\delta_x$ is a probability measure. [[thm-nonnegative-weighted-sums-of-measures]] [[def-dirac-measure]] [[prop-dirac-measure-is-a-probability-measure]].

[F9] For positive Dirichlet parameters, the simplex density is normalized; the one-category law is the point mass at one. [[def-dirichlet-distribution]] [[def-dirichlet-density-kernel]] [[thm-dirichlet-density-normalization]].

[F10] Finite measures agreeing on a generating pi-system and the whole space are equal by finite-measure uniqueness and Dynkin's pi-lambda theorem. [[def-pi-system]] [[lem-finite-measure-uniqueness-on-a-pi-system]] [[thm-dynkin-pi-lambda]].

[F11] Expectations of measurable functions are integrals against the random element's law. [[thm-change-of-variables-for-expectation]] [[def-law-or-distribution-of-a-random-element]] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].

[F12] Measurability of random elements is tested against the target sigma-algebra, and their laws are probability measures. [[def-random-element-and-real-random-variable]] [[def-measurable-function-between-measurable-spaces]] [[def-probability-measure]].

[F13] Finite families of mutually independent random elements have the product joint law. [[thm-independent-random-elements-have-product-joint-law]].

[F14] A finite measure is one with finite total mass, and sigma-finiteness is exhaustion by countably many finite-measure sets. [[def-measure]] [[def-finite-sigma-finite-and-semifinite-measures]].

[F15] A law with the finite-partition Dirichlet conditions, when it exists, is denoted $DP(\alpha)$, and there is at most one such law. [[def-dirichlet-process]].

[F16] Monotone convergence passes increasing nonnegative limits through the integral, and dominated convergence applies under an integrable bound. [[thm-monotone-convergence-for-the-integral]] [[thm-dominated-convergence]].

[F17] The Poisson mass formula and the exponential series give $\mathbb E[c^N]=e^{\lambda(c-1)}$ for $c\ge0$ when $N\sim\operatorname{Pois}(\lambda)$. [[def-poisson-law]] [[def-real-exponential-function-and-e]] [[thm-exponential-addition-formula]].

[F18] The binomial theorem gives $\sum_{h=0}^k\binom{k}{h}a^hb^{k-h}=(a+b)^k$. [[thm-binomial-theorem]].


[F19] The Euler integral defines $\Gamma(a)$ and is finite and positive for $a>0$. [[def-real-gamma-function-by-the-euler-integral]] [[thm-real-gamma-euler-integral-convergence]].

[F20] Independence means mutual factorization on measurable rectangles. [[def-independent-random-elements]].

[F21] The usual real line is Polish: the usual metric is complete and the rationals are countable and dense. [[def-polish-space]] [[thm-euclidean-space-complete]] [[thm-rationals-countable]] [[lem-rat-embeds-dense]].

[F22] Under Countable Choice, Lebesgue measure is a complete measure and every Borel set is Lebesgue measurable. Restrict it to the Borel sigma-algebra on $(0,\infty)$. The function $t\mapsto t^{-1}e^{-t}$ is nonnegative and Borel measurable because its factors are continuous there, so its integral over Borel sets defines a measure. [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-borel-sets-are-lebesgue-measurable]] [[thm-real-power-continuity-and-derivatives]] [[thm-derivative-of-exponential]] [[def-measurable-function-between-measurable-spaces]] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F23] Every Borel subset of a Polish space, with its trace Borel sigma-algebra, is standard Borel under AC. The set $(0,\infty)$ is open in the usual real line, hence Borel; apply [F21]. [[lem-borel-subspaces-admit-polish-presentations]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $\rho(dt)=t^{-1}e^{-t}dt$ on $(0,\infty)$; [A2] and [F22] make this a measure on the Borel sigma-algebra with a nonnegative density relative to Lebesgue measure, and partition the mark axis into $I_0=[1,\infty)$ and $I_m=[1/(m+1),1/m)$ for $m\ge1$. These disjoint strips cover $(0,\infty)$. For $m\ge1$, $\rho(I_m)\le 1/m$ because $t^{-1}\le m+1$ and $e^{-t}\le1$ there, while $\rho(I_m)\ge1/(e(m+1))>0$ because $t^{-1}\ge m$, $e^{-t}\ge e^{-1}$, and the interval length is $1/(m(m+1))$. Also $\rho(I_0)\le\int_1^\infty e^{-t}dt<\infty$ and $\rho(I_0)\ge e^{-2}/2>0$ by restricting to $[1,2]$. Thus every strip has finite positive mass. By [F3] and [F14], $\mu=\alpha\otimes\rho$ is sigma-finite and $\mu_m:=\mu|_{\mathsf X\times I_m}$ has finite positive total $\lambda_m=\alpha(\mathsf X)\rho(I_m)$. Let $Q_m=\mu_m/\lambda_m$. [given, A2, F3, F6, F14, F22, construct]

2.1 Index count coordinates by $m\ge0$ and mark coordinates by $(m,\ell)$ with $m\ge0,\ell\ge1$. Their spaces are $\mathbb N_0$ and $\mathsf X\times(0,\infty)$, respectively, hence standard Borel by [F1], [F21], and [F23]. Assign every finite set of coordinates the product of the laws $\operatorname{Pois}(\lambda_m)$ and $Q_m$. These finite-dimensional laws are consistent because coordinate projections of a finite product recover the corresponding marginal products. By [F1] and [A1] they extend to one probability law. The product rectangle formula gives mutual independence of each finite coordinate family by [F20], and [F13] identifies its joint law with the product. Thus it supports mutually independent $N_m\sim \operatorname{Pois}(\lambda_m)$ and $Z_{m\ell}=(X_{m\ell},T_{m\ell})\sim Q_m$. [A1, F1, F3, F13, F20, F21, F23, step 1.1, construct]

3.1 Define $N=\sum_{m\ge0}\sum_{\ell\ge1}\mathbf1_{\{\ell\le N_m\}}\delta_{Z_{m\ell}}$. Each $N_m$ is finite, so this is a countable sum of Dirac measures and is a counting measure by [F8]. For every measurable $B$, its evaluation is the increasing limit of finite sums of measurable functions of the coordinates; hence $N(B)$ is measurable. Thus $N$ is a random counting measure. [F8, F12, step 2.1, construct]

3.2 Fix pairwise-disjoint measurable sets $B_1,\ldots,B_r$ with $\mu(B_j)<\infty$. Within strip $m$, put $q_{jm}=Q_m(B_j)$ and $q_{0m}=1-\sum_{j=1}^r q_{jm}$. Conditional on $N_m=n$, independent marks assign counts $(k_0,k_1,\ldots,k_r)$ with $n=k_0+\cdots+k_r$. There are $n!/\prod_{j=0}^r k_j!$ assignments of the $n$ mark indices to these cells, and each assignment has probability $\prod_{j=0}^r q_{jm}^{k_j}$, so the count vector has mass $n!\prod_{j=0}^r q_{jm}^{k_j}/\prod_{j=0}^r k_j!$ (with $0^0=1$). Summing over $k_0$ and using the Poisson mass in [F2] gives $\Pr\{N_m(B_j)=k_j,\ 1\le j\le r\}=e^{-\lambda_m}\bigl(\prod_{j=1}^r(\lambda_mq_{jm})^{k_j}/k_j!\bigr)e^{\lambda_mq_{0m}}=\prod_{j=1}^r e^{-\mu_m(B_j)}\mu_m(B_j)^{k_j}/k_j!$; here $\lambda_mq_{jm}=\mu_m(B_j)$ and $\lambda_m(1-q_{0m})=\sum_j\mu_m(B_j)$. Thus the strip counts are independent Poisson variables with means $\mu_m(B_j)$. The series over $k_0$ is the exponential series [F17]. [F2, F17, F22, step 1.1, step 2.1, algebra]

3.3 Define $\Gamma(A)=\sum_{m\ge0}\sum_{\ell\ge1} \mathbf1_{\{\ell\le N_m\}}T_{m\ell}\mathbf1_{\{X_{m\ell}\in A\}}$ for $A\in\mathcal A$. This is a measurable nonnegative weighted sum of Dirac measures, hence a measure by [F8]. For each strip, independence of $N_m$ and its marks [F13], expectation against their law [F11], and $\mathbb E N_m=\lambda_m$ from [F2] give $\mathbb E\sum_{\ell=1}^{N_m}T_{m\ell}\mathbf1_{\{X_{m\ell}\in A\}} =\lambda_m\int t\mathbf1_A(x)\,Q_m(dx,dt) =\int_{A\times I_m}t\,\mu(dx,dt)$. Monotone convergence [F16] then gives $\mathbb E\Gamma(A)=\sum_m\int_{A\times I_m}t\,\mu(dx,dt) =\alpha(A)\int_0^\infty e^{-t}dt=\alpha(A)$ by [F3] and [F6]. [F2, F3, F6, F8, F11, F13, F16, step 1.1, step 2.1]

3.4 Let $A_1,\ldots,A_r$ be pairwise disjoint and choose $|u_j|<\delta<1$. On strip $m$, define $g_m(x,t)=\sum_{j=1}^r e^{u_jt}\mathbf1_{A_j}(x) +\mathbf1_{\mathsf X\setminus\cup_jA_j}(x)$. Conditional on $N_m=n$, the independent marks give the exponential factor $(\int g_m\,dQ_m)^n$. Summing its Poisson series yields $\mathbb E\exp(\sum_j u_j\Gamma_M(A_j)) =\exp(\sum_j\alpha(A_j)\int_{\cup_{m\le M}I_m} (e^{u_jt}-1)\rho(dt))$, where $\Gamma_M$ sums the first $M+1$ strips. The mark integral is finite on each strip because the strips are bounded away from zero and $u_j<1$; the Poisson series is [F17]. [F2, F17, F22, step 1.1, step 2.1, algebra]

4.1 For each finite $M$, the sums over $m\le M$ are independent Poisson counts: convolution and [F18] give $\sum_{h=0}^k e^{-a}a^h/h!\,e^{-b}b^{k-h}/(k-h)! =e^{-(a+b)}(a+b)^k/k!$, and iteration handles $M$. By [F16], their increasing total counts have $\mathbb E N(B_j)=\lim_{M\to\infty}\sum_{m\le M}\mu_m(B_j)=\mu(B_j)<\infty$. Thus the full counts are finite almost surely and the truncated integer counts eventually stabilize. Their joint point probabilities converge both to the point probabilities of the full count vector (by eventual stabilization) and to the product Poisson masses with means $\mu(B_j)$ (by continuity of the Poisson mass formula in its mean). Hence the full counts are independent Poisson variables with means $\mu(B_j)$. Therefore $N$ satisfies [[def-poisson-random-measure]]. [step 1.1, step 2.1, step 3.2, F2, F16, F18, algebra]

4.2 Since $\mathbb E\Gamma(\mathsf X)=\alpha(\mathsf X)<\infty$, $\Gamma(\mathsf X)<\infty$ almost surely: if it were infinite on a set of positive probability, its expectation would exceed every finite bound. Also, $\Gamma(A)$ is measurable for every $A$ as a monotone limit of finite coordinate sums. [given, F11, F12, step 3.3]

4.3 For $u<1$, $\int_0^\infty(e^{ut}-1)t^{-1}e^{-t}dt =\int_0^u(1-v)^{-1}dv=-\log(1-u)$: use $(e^{ut}-1)/t=\int_0^u e^{vt}dv$, Tonelli on the positive or negative part, and [F6]. In particular $\mathbb E e^{\delta\Gamma(\mathsf X)} =(1-\delta)^{-\alpha(\mathsf X)}<\infty$, by monotone convergence [F16] on the nonnegative truncations. For general $|u_j|<\delta$, the truncated exponentials are dominated by $e^{\delta\Gamma(\mathsf X)}$; [F16] therefore gives $\mathbb E e^{\sum_j u_j\Gamma(A_j)} =\prod_j(1-u_j)^{-\alpha(A_j)}$. [F3, F6, F16, F22, step 1.1, step 3.3, step 3.4, algebra]

5.1 Let $J_+=\{j: \alpha(A_j)>0\}$. For $j\in J_+$, [F4], [F5], and the Euler integral [F19], with $t=(1-u)y$, give $\mathbb E e^{uY}=\Gamma(a)^{-1}\int_0^\infty y^{a-1}e^{-(1-u)y}dy=(1-u)^{-a}$ for $Y\sim\operatorname{Gamma}(a,1)$ and $u<1$. Thus the vector $(\Gamma(A_j))_{j\in J_+}$ and the product of the corresponding Gamma laws have the same moment-generating transform near zero by step 4.3; [F3] supplies that finite product law, and [F7] identifies the distributions when $J_+$ is nonempty; if $J_+$ is empty this clause is vacuous. For each $j\notin J_+$, step 3.3 gives $\mathbb E\Gamma(A_j)=0$. If $\Gamma(A_j)>0$ with positive probability, some event $\{\Gamma(A_j)\ge1/q\}$ has positive probability, forcing its nonnegative expectation to be positive; hence $\Gamma(A_j)=0$ almost surely. Since there are finitely many cells, these zero coordinates are simultaneously zero almost surely. Their events in any measurable rectangle have probability zero or one, so adjoining these constants preserves the product law and independence. [A1, A2, F3, F4, F5, F7, F19, step 3.3, step 4.3, cases, algebra]

6.1 For a partition with $r\ge2$ positive cells and parameters $a_1,\ldots,a_r$, the independent Gamma increments have product density $\prod_j z_j^{a_j-1}e^{-z_j}/\Gamma(a_j)$. Change variables to $s=\sum_j z_j$ and $p_j=z_j/s$ for $j<r$, with $p_r=1-\sum_{j<r}p_j$. Its Jacobian has absolute value $s^{r-1}$: factor $s$ from each of the $r-1$ proportion columns, then add the first $r-1$ rows of the remaining matrix to its last row, whose first entry becomes $\sum_jp_j=1$ and whose other entries become zero. The inverse map is $s=\sum_jz_j$, $p_j=z_j/s$, so this is a $C^1$ diffeomorphism on the positive orthant and open simplex. The joint density factors as the Gamma$(\sum_j a_j,1)$ density in $s$ times $\Gamma(\sum_j a_j)\prod_jp_j^{a_j-1}/\prod_j\Gamma(a_j)$ on the simplex. Integrating the normalized Gamma factor in $s$, which has total mass one by [F4], leaves the second factor as the marginal density of $p$. By [F9] this is the Dirichlet law. With one positive cell the normalized mass is one, and zero-base cells have zero mass by step 5.1. [A2, F5, F4, F9, step 5.1, algebra]

7.1 The total $\Gamma(\mathsf X)$ is Gamma$(\alpha(\mathsf X),1)$ by step 5.1, so it is strictly positive almost surely; step 4.2 gives finiteness. Since $\alpha(\mathsf X)>0$, the space $\mathsf X$ is nonempty; choose $x_0\in\mathsf X$ and set $G(A)=\Gamma(A)/\Gamma(\mathsf X)$ on that probability-one event, assigning $\delta_{x_0}$ on its null complement. The event is measurable and each evaluation $G(A)$ is measurable, so [F12] makes $G$ a random probability measure with the partition laws from step 6.1. [given, F8, F12, step 4.2, step 5.1, step 6.1, choose, construct]

8.1 Finite evaluation cylinders form a generating pi-system for the evaluation sigma-algebra. For any $A_1,\ldots,A_s\in\mathcal A$, the nonempty intersections of $A_i$ and $A_i^c$ form a finite partition, and each $G(A_i)$ is the sum of the corresponding cell masses. Hence its joint law is fixed by step 6.1. Two probability laws with those partition laws therefore agree on the generating pi-system; [F10] gives equality on the entire evaluation sigma-algebra. By [F15], this is uniqueness of $DP(\alpha)$. [F10, F15, step 6.1, algebra] ∎
