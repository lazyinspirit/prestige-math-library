---
id: cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable
kind: counterexample
title: "The sine integral is improperly Riemann integrable and not Lebesgue integrable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integrable-real-and-complex-functions-and-their-integrals, def-absolute-and-conditional-improper-convergence, def-improper-integral-at-infinity, thm-dirichlet-test-for-improper-integrals, thm-absolute-divergence-from-uniform-tail-mass, thm-additivity-over-subintervals, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Exercise 9.2"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice.

If an improper Riemann integral converges on a half-line, then the same function
is Lebesgue integrable there.

## Facts & Assumptions

**Given:** Assume the Axiom of Countable Choice. Let $$f(x):=\begin{cases} 1,&x=0,\\ \sin x/x,&x>0. \end{cases}$$

[L1] Dirichlet's test makes $\int_1^\infty \sin x/x\,dx$ converge. ([[thm-dirichlet-test-for-improper-integrals]])

[L2] Uniform oscillatory tail mass forces failure of absolute convergence. ([[thm-absolute-divergence-from-uniform-tail-mass]])

[L3] Proper Riemann integrals add over adjacent subintervals. ([[thm-additivity-over-subintervals]])

[L4] The improper integral over a half-line is the limit of the truncated integrals. ([[def-improper-integral-at-infinity]])

[L5] A real measurable function is Lebesgue integrable exactly when the integral of its absolute value is finite. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L6] An improper integral is absolutely convergent when the corresponding improper integral of the absolute value converges, and conditionally convergent when the original improper integral converges but the absolute one does not. ([[def-absolute-and-conditional-improper-convergence]])

[L7] A continuous function on a closed bounded interval is Riemann integrable. ([[thm-continuous-implies-integrable]])

[L8] Assuming the Axiom of Countable Choice, on every compact interval a bounded Riemann integrable function has the same Lebesgue and Riemann integrals. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[L9] Monotone convergence holds for nonnegative measurable functions. ([[thm-monotone-convergence-for-the-integral]])

## Counterexample

**Proof technique:** direct.

1.1 The function $f$ is continuous on $[0,1]$, so its proper integral there exists. By [L1], the improper integral $$\int_1^\infty \frac{\sin x}{x}\,dx$$ converges. For $R>1$, [L3] gives $$\int_0^R f(x)\,dx=\int_0^1 f(x)\,dx+\int_1^R \frac{\sin x}{x}\,dx.$$ Passing to the limit as $R\to\infty$ and using [L4], the improper integral $$\int_0^\infty \frac{\sin x}{x}\,dx$$ converges. In the terminology of [L6], the sine integral is convergent. [L1, L3, L4, L6]

1.2 Apply [L2] with the nonincreasing function $g(x)=1/x$, the bounded-gap sequence $x_j=j\pi$, and the locally integrable oscillatory factor $u(x)=\sin x$. Since $$\int_{j\pi}^{(j+1)\pi}|\sin x|\,dx=2\qquad(j\ge1),$$ [L2] yields divergence of $$\int_1^\infty \frac{|\sin x|}{x}\,dx.$$ Because $|f|$ is continuous on $[0,1]$, its proper integral there exists, so [L3] and [L4] show that $$\int_0^\infty |f(x)|\,dx$$ also diverges. Thus the improper integral of $\sin x/x$ is not absolutely convergent. [L2, L3, L4, algebra]

2.1 By [L6], steps 1.1 and 1.2 show that the sine integral is only conditionally convergent. If $f$ were Lebesgue integrable on $[0,\infty)$, then [L5] would force $$\int_{[0,\infty)} |f|\,d\lambda_1<+\infty,$$ so $|f|$ would be Lebesgue integrable on the half-line. For each natural number $n\ge1$, put $$h_n:=|f|\,\chi_{[0,n]}.$$ Then $0\le h_n\le h_{n+1}$ and $h_n(x)\uparrow |f(x)|$ for every $x\ge0$. Since $|f|$ is continuous on $[0,n]$, [L7] makes it Riemann integrable there, and [L8] gives $$\int_{[0,\infty)} h_n\,d\lambda_1=\int_{[0,n]} |f|\,d\lambda_1=\int_0^n |f(x)|\,dx.$$ Because $h_n\uparrow |f|$, [L9] yields $$\lim_{n\to\infty}\int_0^n |f(x)|\,dx=\lim_{n\to\infty}\int_{[0,\infty)} h_n\,d\lambda_1=\int_{[0,\infty)} |f|\,d\lambda_1<+\infty.$$ By [L4], that finite limit is exactly the improper integral $$\int_0^\infty |f(x)|\,dx,$$ so the absolute improper integral converges, contradicting step 1.2. Therefore $f$ is not Lebesgue integrable on the half-line, and the statement is false. [step 1.1, step 1.2, L4, L5, L6, L7, L8, L9] ∎
