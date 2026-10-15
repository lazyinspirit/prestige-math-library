---
dependency_level: 0
id: lem-independent-tail-replacement-errors-are-monotone
kind: lemma
title: Independent-tail replacement errors are decreasing and summability implies the rate condition
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-l2-m-approximable-causal-bernoulli-shift
  - thm-independent-random-elements-have-product-joint-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-fatou-lemma
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-cauchy-schwarz-for-random-variables
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
axiom_use: The innovation arrays and separable Hilbert space are supplied as in the replacement definition, with its countable-choice and dependent-choice conventions. The proof adds no full axiom of choice and constructs its conditional means explicitly.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Horvath, Kokoszka and Reeder, Estimation of the Mean of Functional Time Series and a Two-Sample Problem, Section 1.1
      url: https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf
---

## Statement

Use the actual independent-tail replacement construction of [[def-l2-m-approximable-causal-bernoulli-shift]], and put $X=X_0$, $\mathcal F_m=\sigma(\delta_0,\ldots,\delta_{-m+1})$ and $\delta_m=(\mathbb E\|X-X_{0,m}\|_H^2)^{1/2}$. There is an $\mathcal F_m$-measurable square-integrable conditional mean $g_m$ such that
$$\delta_m^2=2\mathbb E\|X-g_m\|_H^2.$$
The conditional mean minimizes $\mathbb E\|X-Y\|_H^2$ over all square-integrable $\mathcal F_m$-measurable $H$-valued $Y$. Consequently $\delta_{m+1}\le\delta_m$ for every $m\ge1$, and
$$\sum_{m\ge1}\delta_m<\infty\quad\Longrightarrow\quad m\delta_m\longrightarrow0.$$
In particular no process under this replacement definition has summable replacement errors while failing the displayed rate condition.

## Facts & Assumptions

**Given:** The separable real Hilbert space, supplied mutually independent original and replacement innovations, measurable filter, and finite second moment in the Statement.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]] supplies the measurable filter, separable complete Hilbert target, independent tail arrays and their matching product laws.

[F2] [[thm-independent-random-elements-have-product-joint-law]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] identify the joint law of independent prefix and tail variables with its product and permit nonnegative section integrals.

[F3] [[thm-dominated-convergence]], [[thm-fatou-lemma]] and [[cor-cauchy-schwarz-for-random-variables]] give the scalar dominated limits, lower integral bound and square-integrable product estimates below.

[F4] [[thm-finite-and-countable-subadditivity-of-measures]] gives the null-union rule. The finite Pythagorean identity follows from the inner-product axioms in [F1], and Hilbert-space Cauchy–Schwarz is [[thm-cauchy-schwarz-in-an-inner-product-space]].

## Proof

1.1 Fix $m$. Write the innovation input as $(A,B)$, with $A$ its first $m$ coordinates and $B$ its remaining tail. Its law is a product by [F2]. The replacement uses $(A,B')$, where $B,B'$ have the same tail law and are independent of one another and of $A$. To construct the conditional mean without assuming a vector conditional-expectation theorem, take finite-valued measurable approximants $f_j(A,B)$ to the filter $f(A,B)$ with $\|f_j-f\|_{L^2(H)}\le2^{-2j}$. They exist explicitly: include zero in a fixed dense sequence in $H$, use the first nearest point among its first $N$ points, and let $N$ increase. The error is at most $\|f\|$ and tends pointwise to zero, so [F3] gives $L^2$ convergence; choose the first $N$ achieving the indicated bound. For each finite-valued $f_j$, its tail average $g_j(A)=\int f_j(A,b)\,\nu_{\rm tail}(db)$ is a finite linear combination of measurable section probabilities, hence is measurable by [F2]. Convexity of the squared Hilbert norm for finite averages, extended by simple scalar integration, gives $\mathbb E\|g_j-g_k\|^2\le\mathbb E\|f_j-f_k\|^2$. [F1, F2, F3, F4, given, construct]

2.1 The last inequality implies $\sum_j\mathbb E\|g_{j+1}-g_j\|<\infty$, by [F3] and the chosen error bounds. Tonelli [F2] makes the sum of these norms finite almost surely. Completeness of $H$ gives a measurable pointwise limit $g_m$, set to zero on the null complement. Fatou [F3], applied to $\|g_j-g_k\|^2$ as $k\to\infty$, gives $g_j\to g_m$ in $L^2(H)$. In particular $g_m$ is square integrable. For finite-valued $\mathcal F_m$-measurable $Y$, finite sums and the section-integral identity give $\mathbb E\langle f_j(A,B),Y\rangle=\mathbb E\langle g_j(A),Y\rangle$. Pass to the limit by Cauchy–Schwarz. Approximate any square-integrable $\mathcal F_m$-measurable $Y$ by its finite nearest-point approximants as in step 1.1, and pass to the limit again. Thus $\mathbb E\langle X-g_m,Y\rangle=0$ for every such $Y$, which is the conditional-mean identity and implies $\mathbb E\|X-Y\|^2=\mathbb E\|X-g_m\|^2+\mathbb E\|g_m-Y\|^2.$ This proves the stated minimization, without a regular conditional law on the innovation space. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Conditional product integration for the two copies of the finite-valued $f_j$ gives $\mathbb E\langle f_j(A,B),f_j(A,B')\rangle=\mathbb E\|g_j(A)\|^2$. Passing to the $L^2$ limits by [F3] and Hilbert-space Cauchy–Schwarz [F4] gives $\mathbb E\langle X,X_{0,m}\rangle=\mathbb E\|g_m\|^2$. The two copies have the same second moment by [F1]. Expanding their squared difference therefore yields $\delta_m^2=2(\mathbb E\|X\|^2-\mathbb E\|g_m\|^2)=2\mathbb E\|X-g_m\|^2$, the final equality also following from step 2.1 with $Y=g_m$. The sigma-fields increase with $m$, so every $\mathcal F_m$-measurable competitor is an $\mathcal F_{m+1}$-measurable competitor. The minimum residual squared norm cannot increase; hence $\delta_{m+1}\le\delta_m$. [F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 For $m\ge2$, monotonicity gives $\lfloor m/2\rfloor\delta_m\le\sum_{j=\lceil m/2\rceil}^{m}\delta_j$. If the full nonnegative series is summable, its right-hand tail tends to zero. Since $m/\lfloor m/2\rfloor\le3$, this implies $m\delta_m\to0$. Thus the rate-separation example requested in the former design cannot exist under the actual independent-tail replacement convention. This is a proved implication, not an absence of a known counterexample. [step 3.1, given, algebra] ∎
