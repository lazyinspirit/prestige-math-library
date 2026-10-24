---
id: cex-boundary-null-has-nonstandard-lr-limit
kind: counterexample
title: A boundary null has a nonstandard likelihood-ratio limit
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-wald-score-likelihood-ratio-statistics
  - def-qmd-path
  - def-standard-normal-and-normal-laws
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - def-chi-square-law
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-ftc-second-part
  - def-axiom-of-choice
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-integration-against-a-density
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 26, PDF pp. 18–20"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/26notes.pdf"
    - title: "Yen-Chi Chen, STAT 581 Chapter 4: Hypothesis tests in likelihood models, geometry discussion"
      url: "https://faculty.washington.edu/yenchic/26A_stat581/Lec4_Test.html"
---

## Statement refuted

For the one-sided null $H_0:\mu\le0$ in a smooth normal location model, the
likelihood-ratio statistic has a $\chi_1^2$ limit at $\mu=0$ merely because
$\mu=0$ is interior to the full parameter space.

## Facts & Assumptions

**Given:** AC, a known $\sigma>0$, and iid observations from $N(\mu,\sigma^2)$ with null set $\Theta_0=(-\infty,0]$ and true value $\mu=0$.

[F1] [[def-wald-score-likelihood-ratio-statistics]]: the likelihood-ratio statistic is twice the unrestricted-minus-restricted maximized log likelihood.

[F2] [[def-qmd-path]]: in one dimension, QMD with score $s_\mu$ requires $\|\sqrt{p_{\mu+t}}-\sqrt{p_\mu}-\tfrac12t s_\mu\sqrt{p_\mu}\|_2=o(|t|)$ and $s_\mu\in L^2(P_\mu)$.

[F3] [[def-standard-normal-and-normal-laws]]: $N(0,1)$ has the even density $e^{-x^2/2}/\sqrt{2\pi}$, and $N(\mu,\sigma^2)$ is its affine image.

[F4] [[lem-characteristic-function-of-a-normal-law]]: a $N(m,\tau^2)$ variable has characteristic function $\exp(imt-\tau^2t^2/2)$, mean $m$, and variance $\tau^2$.

[F5] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]: affine maps and finite independent sums transform characteristic functions by the affine rule and product rule.

[F6] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: under AC, equal characteristic functions determine equal Borel probability laws.

[F7] [[def-chi-square-law]]: $\chi_1^2$ is the law of the square of one standard-normal coordinate.

[F8] [[cor-cauchy-schwarz-inequality-for-l-two]]: for square-integrable functions, the integral of the absolute product is at most the product of their $L^2$ norms.

[F9] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative product-measurable function on sigma-finite spaces can be integrated by either iterated integral.

[F10] [[thm-ftc-second-part]]: if $G'=f$ on a compact interval and $f$ is integrable, then $\int f=G(b)-G(a)$.

[A1] [[def-axiom-of-choice]]: AC is used by the normal characteristic-function, uniqueness, and chi-square-law suppliers [F4], [F6], and [F7].

[F11] [[lem-gaussian-even-moment-bound-for-brownian-increments]]: under AC, a centered normal variable of variance $\sigma^2$ has second and fourth moments $\sigma^2$ and $3\sigma^4$. To instantiate the supplier, take the centered normal variable $Y$ as $X_t$, the constant $0$ as $X_s$, and the labels $s=0$, $t=\sigma^2$, then use $m=1,2$; no Brownian process is needed.

[F12] [[thm-integration-against-a-density]]: integration against a density is integration of the product.

[F13] [[thm-continuous-implies-integrable]]: continuous functions on compact parameter intervals are bounded and Riemann integrable.

[F14] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: under Countable Choice, bounded Riemann-integrable functions have the same Lebesgue integral on a compact interval; the assumed AC supplies this premise.

[F15] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translation preserves Lebesgue measurability and measure. For a nonnegative measurable function, translating each simple function below it gives a bijection of the simple minorants with unchanged integrals; taking the defining supremum therefore preserves its nonnegative integral.

## Counterexample

Take the full parameter space $\Theta=\mathbb R$ and the null $\Theta_0=(-\infty,0]$. The true point $\mu=0$ is interior to $\Theta$ but is the boundary point of $\Theta_0$.

**Given:** The model, null, and true value above.

1.1 Put $q_\mu(x)=(2\pi\sigma^2)^{-1/4}e^{-(x-\mu)^2/(4\sigma^2)}$. Direct differentiation gives $q'_\mu=(x-\mu)q_\mu/(2\sigma^2)$ and $q''_\mu=((x-\mu)^2/(4\sigma^4)-1/(2\sigma^2))q_\mu$. Its square is a polynomial times $p_\mu=q_\mu^2$. By [F11] and [F12], $\int (x-\mu)^2p_\mu\,dx=\sigma^2$ and $\int (x-\mu)^4p_\mu\,dx=3\sigma^4$, so $\|q''_\mu\|_2^2=3/(16\sigma^4)<\infty$. Also $s_\mu=2q'_\mu/q_\mu=(x-\mu)/\sigma^2$ has second moment $1/\sigma^2$. The identity $q''_a(x)=q''_0(x-a)$ and [F15] give the same norm for every real shift $a$. The two-variable functions $(x,v)\mapsto q''_{\mu+v}(x)$ and $(x,u)\mapsto q'_{\mu+u}(x)-q'_\mu(x)$ are continuous. To verify the needed product measurability locally, the rectangles $(a,b)\times(c,d)$ with rational endpoints form a countable base of $\mathbb R^2$: inside any open ball about a point, density of the rationals gives a rational rectangle containing that point and contained in the ball. Every open subset is therefore the union of the subfamily of these rectangles contained in it, hence a countable union of measurable product rectangles. Thus preimages of open subsets under these continuous functions belong to $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)$, and also to the product of the Lebesgue sigma-algebras. Their squares and restrictions to compact parameter intervals are consequently product measurable, as required by Tonelli below. [F11, F12, F15, given, algebra]

1.2 The log likelihood is a constant minus $(2\sigma^2)^{-1}\sum_i(X_i-\mu)^2$. Completing the square shows that the unrestricted MLE is $\hat\mu=\bar X$ and the constrained MLE is $\tilde\mu=\min(0,\bar X)$: when $\bar X\le0$ the unrestricted maximum is feasible, and when $\bar X>0$ the closest feasible point is $0$. [given, algebra]

2.1 For fixed $x$, the functions $v\mapsto q''_{\mu+v}(x)$ and $u\mapsto q'_{\mu+u}(x)-q'_\mu(x)$ are continuous on each compact interval. By [F13] they are Riemann integrable, by [F10] their integrals are respectively $q'_{\mu+u}(x)-q'_\mu(x)$ and $q_{\mu+t}(x)-q_\mu(x)-tq'_\mu(x)$, and [F14] identifies these with their Lebesgue integrals under the assumed AC. Reversed endpoints give the same identities for negative $u,t$. [F13, F10, F14, step 1.1, given]

2.2 Substituting these maximizers into [F1] gives $$L_n=2\{\ell_n(\hat\mu)-\ell_n(\tilde\mu)\}=\frac{n(\bar X_+)^2}{\sigma^2},\qquad \bar X_+=\max(\bar X,0).$$ This follows from $\sum_i(X_i-\mu)^2=\sum_i(X_i-\bar X)^2+n(\mu-\bar X)^2$: the difference is zero for $\bar X\le0$, and otherwise it is $n\bar X^2/\sigma^2$ after multiplication by $2$. [F1, step 1.2, algebra]

3.1 Cauchy–Schwarz [F8] on the interval between $0$ and $u$, then Tonelli [F9] and step 1.1, gives $\|q'_{\mu+u}-q'_\mu\|_2^2\le u^2\|q''_0\|_2^2$. The second identity of step 2.1 and another Cauchy–Schwarz/Tonelli application give $\|q_{\mu+t}-q_\mu-tq'_\mu\|_2^2\le |t|\int_0^{|t|}u^2\|q''_0\|_2^2du=|t|^4\|q''_0\|_2^2/3=o(t^2)$. For negative $t$ use $q'_{\mu-u}$ on the length-$|t|$ interval; the same first bound holds. This proves QMD with the explicitly supplied normal densities, score $s_\mu$, and positive information $1/\sigma^2$ by [F2]. [F8, F9, F2, step 1.1, step 2.1, algebra]

4.1 Under $\mu=0$, put $Z=\sqrt n\bar X/\sigma$. By [F4] and [F5], $\mathbb E e^{itZ}=\prod_{i=1}^n e^{-t^2/(2n)}=e^{-t^2/2}$; uniqueness [F6] gives $Z\sim N(0,1)$ exactly. Its even density [F3] gives $\mathbb P(Z\le0)=1/2$, and for $t\ge0$ the distribution function of $L_n=(Z_+)^2$ is $\mathbb P(Z\le\sqrt t)=\Phi(\sqrt t)$, where $\Phi(x):=\mathbb P(Z\le x)$. Thus its law is $\tfrac12\delta_0+\tfrac12\chi_1^2$, by [F7]. Since [F3] gives $\mathbb P(Z=0)=0$, $\chi_1^2$ has no atom at zero, so this mixture is not the ordinary $\chi_1^2$ law. The failure comes from the null's half-line local tangent, not a boundary of the full parameter space. [A1, F3, F4, F5, F6, F7, step 2.2, algebra] ∎

