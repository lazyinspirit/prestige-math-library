---
id: ex-normal-mean-exact-likelihood-calibration
kind: example
title: Known-variance normal mean and exact likelihood calibration
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-qmd-path
  - def-wald-score-likelihood-ratio-statistics
  - def-standard-normal-and-normal-laws
  - def-chi-square-law
  - lem-characteristic-function-of-a-normal-law
  - lem-characteristic-functions-under-affine-maps-and-independent-sums
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-ftc-second-part
  - def-axiom-of-choice
  - lem-gaussian-even-moment-bound-for-brownian-increments
  - thm-integration-against-a-density
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 22, PDF pp. 1–3"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/22notes.pdf"
    - title: "John Duchi, Stats 300B Lecture 6, Winter 2018, complete scribe note, PDF pp. 3–5"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2018/lecture-06.pdf"
---

## Example

Assume AC. Let $X_1,\ldots,X_n$ be iid $N(\mu,\sigma^2)$ with known
$\sigma>0$, and test $H_0:\mu=\mu_0$ in the one-dimensional location model.
The sample mean is the unique MLE. In this model, the Wald, score, and
likelihood-ratio statistics are exactly equal to
$n(\bar X-\mu_0)^2/\sigma^2$, which has the exact $\chi_1^2$ law under $H_0$.
The notation $\chi_1^2$ is as in [[def-chi-square-law]]. This is a
special finite-sample identity and does not make the general calibration
theorem exact.

## Facts & Assumptions

**Given:** AC, $n\ge1$, $\sigma>0$, and the iid normal location model in the
Example.

[F1] [[def-standard-normal-and-normal-laws]]: $N(\mu,\sigma^2)$ is the affine image of the standard normal law; the standard normal density is proportional to $e^{-x^2/2}$.

[F2] [[lem-characteristic-function-of-a-normal-law]]: under AC, $N(\mu,\sigma^2)$ has characteristic function $\exp(i\mu t-\sigma^2t^2/2)$.

[F3] [[lem-characteristic-functions-under-affine-maps-and-independent-sums]]: characteristic functions of finite independent sums are the products of their component characteristic functions.

[F4] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: under AC, equality of characteristic functions determines the Borel probability law.

[F5] [[def-qmd-path]]: QMD is the square-root-density $L^2$ expansion, and the score is its first-order coefficient.

[F6] [[def-wald-score-likelihood-ratio-statistics]]: the three statistics are the covariance-normalized estimate, the efficient score quadratic form, and twice the maximized log-likelihood difference.

[F7] [[cor-cauchy-schwarz-inequality-for-l-two]]: for square-integrable functions $g,h$, $\int|gh|\le\|g\|_2\|h\|_2$.

[F8] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for nonnegative product-measurable functions on sigma-finite spaces, the product integral equals either iterated integral.

[F9] [[thm-ftc-second-part]]: if $G'=f$ on a compact interval and $f$ is integrable, then $\int f=G(b)-G(a)$.

[F10] [[def-chi-square-law]]: $\chi_1^2$ is the law of the square of one standard-normal coordinate.

[A1] [[def-axiom-of-choice]]: AC is used in [F1], [F2], [F4], and [F10] to supply the normal laws and characteristic-function uniqueness.

[F11] [[lem-gaussian-even-moment-bound-for-brownian-increments]]: under AC, a centered normal variable of variance $\sigma^2$ has second and fourth moments $\sigma^2$ and $3\sigma^4$. To instantiate the supplier, take the centered normal variable $Y$ as $X_t$, the constant $0$ as $X_s$, and the labels $s=0$, $t=\sigma^2$, then use $m=1,2$; no Brownian process is needed.

[F12] [[thm-integration-against-a-density]]: integration against a density is integration of the product.

[F13] [[thm-continuous-implies-integrable]]: continuous functions on compact parameter intervals are bounded and Riemann integrable.

[F14] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: under Countable Choice, bounded Riemann-integrable functions have the same Lebesgue integral on a compact interval; the assumed AC supplies this premise.

[F15] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translation preserves Lebesgue measurability and measure. For a nonnegative measurable function, translating each simple function below it gives a bijection of the simple minorants with unchanged integrals; taking the defining supremum therefore preserves its nonnegative integral.

## Verification

**Given:** The model and null in the Example.

1.1 Put $q_\mu(x)=(2\pi\sigma^2)^{-1/4}e^{-(x-\mu)^2/(4\sigma^2)}$. Direct differentiation gives $q'_\mu=(x-\mu)q_\mu/(2\sigma^2)$ and $q''_\mu=((x-\mu)^2/(4\sigma^4)-1/(2\sigma^2))q_\mu$. Its square is a polynomial times $p_\mu=q_\mu^2$. By [F11] and [F12], $\int (x-\mu)^2p_\mu\,dx=\sigma^2$ and $\int (x-\mu)^4p_\mu\,dx=3\sigma^4$, so $\|q''_\mu\|_2^2=3/(16\sigma^4)<\infty$. Also $s_\mu=2q'_\mu/q_\mu=(x-\mu)/\sigma^2$ has second moment $1/\sigma^2$. The identity $q''_a(x)=q''_0(x-a)$ and [F15] give the same norm for every real shift $a$. The two-variable functions $(x,v)\mapsto q''_{\mu+v}(x)$ and $(x,u)\mapsto q'_{\mu+u}(x)-q'_\mu(x)$ are continuous. To verify the needed product measurability locally, the rectangles $(a,b)\times(c,d)$ with rational endpoints form a countable base of $\mathbb R^2$: inside any open ball about a point, density of the rationals gives a rational rectangle containing that point and contained in the ball. Every open subset is therefore the union of the subfamily of these rectangles contained in it, hence a countable union of measurable product rectangles. Thus preimages of open subsets under these continuous functions belong to $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)$, and also to the product of the Lebesgue sigma-algebras. Their squares and restrictions to compact parameter intervals are consequently product measurable, as required by Tonelli below. [F11, F12, F15, given, algebra, F1]

2.1 For fixed $x$, the functions $v\mapsto q''_{\mu+v}(x)$ and $u\mapsto q'_{\mu+u}(x)-q'_\mu(x)$ are continuous on each compact interval. By [F13] they are Riemann integrable, by [F9] their integrals are respectively $q'_{\mu+u}(x)-q'_\mu(x)$ and $q_{\mu+t}(x)-q_\mu(x)-tq'_\mu(x)$, and [F14] identifies these with their Lebesgue integrals under the assumed AC. Reversed endpoints give the same identities for negative $u,t$. [F13, F9, F14, step 1.1, given]

3.1 Cauchy–Schwarz [F7] on the interval between $0$ and $u$, then Tonelli [F8] and step 1.1, gives $\|q'_{\mu+u}-q'_\mu\|_2^2\le u^2\|q''_0\|_2^2$. The second identity of step 2.1 and another Cauchy–Schwarz/Tonelli application give $\|q_{\mu+t}-q_\mu-tq'_\mu\|_2^2\le |t|\int_0^{|t|}u^2\|q''_0\|_2^2du=|t|^4\|q''_0\|_2^2/3=o(t^2)$. For negative $t$ use $q'_{\mu-u}$ on the length-$|t|$ interval; the same first bound holds. This proves QMD with the explicitly supplied normal densities, score $s_\mu$, and positive information $1/\sigma^2$ by [F5]. [F7, F8, F5, step 1.1, step 2.1, algebra]

4.1 Use the global chart $V=\mathbb R$ with tested coordinate $\psi=\mu-\mu_0$, so both maximizers always lie in the chart and the off-chart conventions in [F6] never apply. The log likelihood is a constant minus $(2\sigma^2)^{-1}\sum_i(X_i-\mu)^2$. The identity $\sum_i(X_i-\mu)^2=\sum_i(X_i-\bar X)^2+n(\mu-\bar X)^2$ proves $\hat\mu=\bar X$. Since $\sigma^2$ is known, take the exact covariance and information estimates $\widehat V=\sigma^2$ and $\widehat I_{\mathrm{eff}}=1/\sigma^2$; the Wald statistic is $W_n=n(\bar X-\mu_0)^2/\sigma^2$. At the point null the efficient score is $n^{-1/2}\sum_i(X_i-\mu_0)/\sigma^2$, with information $1/\sigma^2$; [F6] gives $S_n=n(\bar X-\mu_0)^2/\sigma^2$. The constrained MLE is $\mu_0$, so twice the log-likelihood difference gives $L_n=n(\bar X-\mu_0)^2/\sigma^2$. [F6, step 3.1, algebra]

5.1 Under $H_0$, put $Z_n=\sqrt n(\bar X-\mu_0)/\sigma$. The affine and independent-sum characteristic-function identities [F3], together with [F2], give $\mathbb E e^{itZ_n}=\prod_i\mathbb E e^{it(X_i-\mu_0)/(\sigma\sqrt n)} =[e^{-t^2/(2n)}]^n=e^{-t^2/2}$. By [F4], $Z_n\sim N(0,1)$, so $W_n=S_n=L_n=Z_n^2$ has the $\chi_1^2$ law by [F10]. The use of AC is exactly that recorded in [A1]. [A1, F2, F3, F4, F10, step 4.1, algebra] ∎

