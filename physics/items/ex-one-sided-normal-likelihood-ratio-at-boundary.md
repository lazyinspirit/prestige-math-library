---
id: ex-one-sided-normal-likelihood-ratio-at-boundary
kind: example
title: "A one-sided normal likelihood ratio at the boundary"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model
  - def-qmd-path
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
  - def-chi-square-law
  - def-identically-distributed-and-iid-random-variables
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-convergence-in-distribution-for-real-random-variables
  - thm-lindeberg-levy-iid-central-limit-theorem
  - thm-portmanteau-theorem
  - thm-continuous-mapping-theorem
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-integration-against-a-density
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-ftc-second-part
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "Steven G. Self and Kung-Yee Liang, Asymptotic Properties of Maximum Likelihood Estimators and Likelihood Ratio Tests Under Nonstandard Conditions"
      url: "https://www.stat.cmu.edu/~brian/763-2015/week06/papers/self-liang-1987.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X_i$ be iid $N(\mu,1)$, let the full parameter space be $\Theta=\mathbb R$, and test $H_0:\mu\le0$ against the full model at the boundary value $\mu=0$. The likelihood-ratio statistic converges to $(G\vee0)^2$, where $G\sim N(0,1)$; by [[def-chi-square-law]] this is $\tfrac12\chi_0^2+\tfrac12\chi_1^2$, not the ordinary $\chi_1^2$ law.

## Facts & Assumptions

**Given:** The normal-location model, the one-sided null, and iid sampling at $\mu=0$.

[A1] AC is used by the normal-law convention and the iid central limit theorem ([[def-axiom-of-choice]]).

[F1] $N(0,1)$ has density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$; affine transformations define $N(\mu,1)$ ([[def-standard-normal-and-normal-laws]]).

[F2] $\chi_0^2=\delta_0$ and, for $k\ge1$, $\chi_k^2$ is the law of the sum of squares of $k$ independent standard normals ([[def-chi-square-law]]).

[F3] The local-cone likelihood-ratio theorem gives the Fisher-distance difference when QMD, local set convergence, a uniform local quadratic expansion and tight local maximizers hold ([[thm-likelihood-ratio-limit-for-local-cones-in-a-qmd-model]]).

[F4] The iid central limit theorem applies to real observations with finite nonzero variance ([[thm-lindeberg-levy-iid-central-limit-theorem]]); the definition of iid includes mutual independence ([[def-identically-distributed-and-iid-random-variables]]).

[F5] A continuous function of a weakly convergent random variable converges in distribution ([[thm-continuous-mapping-theorem]]). Weak convergence also gives the closed-set probability upper bound ([[thm-portmanteau-theorem]]).

[F6] Expectation is integration against the law, and variance is the centered second moment ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

[F7] QMD at an interior point is the square-root-density score expansion in $L^2(\mu)$ with squared remainder $o(\|h\|_2^2)$ ([[def-qmd-path]]).

[F8] [[lem-gaussian-even-moment-bound-for-brownian-increments]]: under AC, a centered normal variable of variance $1$ has second and fourth moments $1$ and $3$. To instantiate the supplier, take the centered standard normal variable $Y$ as $X_t$, the constant $0$ as $X_s$, and the labels $s=0$, $t=1$, then use $m=1,2$; no Brownian process is needed.

[F9] [[thm-integration-against-a-density]]: integration against a density is integration of the product.

[F10] [[thm-continuous-implies-integrable]]: continuous functions on compact parameter intervals are bounded and Riemann integrable.

[F11] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: under Countable Choice, bounded Riemann-integrable functions have the same Lebesgue integral on a compact interval; the assumed AC supplies this premise.

[F12] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translation preserves Lebesgue measurability and measure. For a nonnegative measurable function, translating each simple function below it gives a bijection of the simple minorants with unchanged integrals; taking the defining supremum therefore preserves its nonnegative integral.

[F13] [[cor-cauchy-schwarz-inequality-for-l-two]]: the integral of an absolute product is bounded by the product of the $L^2$ norms.

[F14] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions on sigma-finite spaces admit either order of integration.

[F15] [[thm-ftc-second-part]]: an integrable derivative integrates to its endpoint difference.

## Verification

**Given:** The model and hypotheses above. Let $\ell_n(\mu)=\sum_{i=1}^n\log\phi(X_i-\mu)$.

In this unit-variance example put $\sigma=1$.

1.1 Put $q_\mu(x)=(2\pi\sigma^2)^{-1/4}e^{-(x-\mu)^2/(4\sigma^2)}$. Direct differentiation gives $q'_\mu=(x-\mu)q_\mu/(2\sigma^2)$ and $q''_\mu=((x-\mu)^2/(4\sigma^4)-1/(2\sigma^2))q_\mu$. Its square is a polynomial times $p_\mu=q_\mu^2$. By [F8] and [F9], $\int (x-\mu)^2p_\mu\,dx=\sigma^2$ and $\int (x-\mu)^4p_\mu\,dx=3\sigma^4$, so $\|q''_\mu\|_2^2=3/(16\sigma^4)<\infty$. Also $s_\mu=2q'_\mu/q_\mu=(x-\mu)/\sigma^2$ has second moment $1/\sigma^2$. The identity $q''_a(x)=q''_0(x-a)$ and [F12] give the same norm for every real shift $a$. With $\sigma=1$, Cauchy–Schwarz [F13] gives $E|X-\mu|\le1$, so the even normal density [F1] gives $E(X-\mu)=0$ and $\operatorname{Var}(X)=1$. The two-variable functions $(x,v)\mapsto q''_{\mu+v}(x)$ and $(x,u)\mapsto q'_{\mu+u}(x)-q'_\mu(x)$ are continuous. To verify the needed product measurability locally, the rectangles $(a,b)\times(c,d)$ with rational endpoints form a countable base of $\mathbb R^2$: inside any open ball about a point, density of the rationals gives a rational rectangle containing that point and contained in the ball. Every open subset is therefore the union of the subfamily of these rectangles contained in it, hence a countable union of measurable product rectangles. Thus preimages of open subsets under these continuous functions belong to $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)$, and also to the product of the Lebesgue sigma-algebras. Their squares and restrictions to compact parameter intervals are consequently product measurable, as required by Tonelli below. [F1, F8, F9, F12, F13, given, algebra, F6]

2.1 For fixed $x$, the functions $v\mapsto q''_{\mu+v}(x)$ and $u\mapsto q'_{\mu+u}(x)-q'_\mu(x)$ are continuous on each compact interval. By [F10] they are Riemann integrable, by [F15] their integrals are respectively $q'_{\mu+u}(x)-q'_\mu(x)$ and $q_{\mu+t}(x)-q_\mu(x)-tq'_\mu(x)$, and [F11] identifies these with their Lebesgue integrals under the assumed AC. Reversed endpoints give the same identities for negative $u,t$. [F10, F15, F11, step 1.1, given]

3.1 Cauchy–Schwarz [F13] on the interval between $0$ and $u$, then Tonelli [F14] and step 1.1, gives $\|q'_{\mu+u}-q'_\mu\|_2^2\le u^2\|q''_0\|_2^2$. The second identity of step 2.1 and another Cauchy–Schwarz/Tonelli application give $\|q_{\mu+t}-q_\mu-tq'_\mu\|_2^2\le |t|\int_0^{|t|}u^2\|q''_0\|_2^2du=|t|^4\|q''_0\|_2^2/3=o(t^2)$. For negative $t$ use $q'_{\mu-u}$ on the length-$|t|$ interval; the same first bound holds. This proves QMD with the explicitly supplied normal densities, score $s_\mu$, and positive information $1/\sigma^2$ by [F7]. [F13, F14, F7, step 1.1, step 2.1, algebra]

4.1 Under $\mu=0$, the local sets are $C_n=\mathbb R$ and $C_{0n}=(-\infty,0]$ for every $n$, so they are already their limiting closed convex cones. Direct expansion gives $\ell_n(h/\sqrt n)-\ell_n(0)=hZ_n-h^2/2$ with $Z_n=\sqrt n\bar X_n$ and zero remainder. The full and null local maximizers are $Z_n$ and $\min(0,Z_n)$. By [F4] and the mean and variance from step 1.1, $Z_n\Rightarrow G\sim N(0,1)$. Choose a large $R$ with $P(|G|\ge R)$ small and apply [F5] to the closed tails to see that both maximizer sequences are tight. Thus all hypotheses of [F3] hold with $I=1$. [A1, F3, F4, F5, given, step 1.1, choose, algebra, step 3.1]

5.1 Completing the square in $\ell_n(\mu)$ gives the full MLE $\bar X_n$ and the constrained MLE $\min(0,\bar X_n)$. Hence the finite-sample likelihood-ratio statistic is $T_n=2[\ell_n(\bar X_n)-\ell_n(\min(0,\bar X_n))]=n(\bar X_n\vee0)^2=(Z_n\vee0)^2$. By [F5], $T_n\Rightarrow(G\vee0)^2$. Its CDF is $0$ for $t<0$ and $P(G\le\sqrt t)=\Phi(\sqrt t)$ for $t\ge0$, so it has mass $1/2$ at zero. By symmetry, $P(G^2\le t)=2\Phi(\sqrt t)-1$ for $t\ge0$, while [F1] gives $P(G=0)=0$; hence $(G\vee0)^2$ has the mixture law $\tfrac12\delta_0+\tfrac12\mathcal L(G^2)=\tfrac12\chi_0^2+\tfrac12\chi_1^2$, not $\chi_1^2$. [A1, F1, F2, F5, step 4.1, given, algebra] ∎

## Remarks

The null tangent is a half-line rather than a linear subspace. The atom at zero is the concrete failure of the regular interior chi-square calibration at this boundary.
