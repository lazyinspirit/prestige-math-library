---
id: thm-de-boor-forward-error-under-operationwise-model
kind: theorem
title: A successful rounded de Boor evaluation has a degree-dependent forward bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - alg-de-boor-coefficient-evaluation
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - thm-de-boor-coefficient-evaluation-equivalence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Carl de Boor, A Practical Guide to Splines, revised edition, Chapter X,
        pp. 123–126
      url: https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf
    - title: Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes,
        floating-point model
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Use the operationwise model in
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]
with unit roundoff $0<u<1$. Suppose the floating-point mode of
[[alg-de-boor-coefficient-evaluation]] completes successfully on stored
coefficients $c_{k-p},\ldots,c_k$ and every exact intermediate is zero or
normal. Put
$$\eta=\frac{(1+u)^2}{1-u}-1,\qquad e=\eta+u(2+\eta),\qquad W=1+e,\qquad E=e+u(2+u)W.$$
If $S(x)=\sum_i c_iB_{i,p}(x)$ is the exact B-spline value on the supplied
span and $\widehat S(x)$ is the returned value, then
$$|\widehat S(x)-S(x)|\le\bigl((1+2E)^p-1\bigr)\max_{k-p\le i\le k}|c_i|.$$
For $p=0$ the error is zero. The conclusion is conditional on success and
does not certify that the intermediate range conditions will hold.

## Facts & Assumptions

**Given:** A successful operationwise floating-point evaluation of the de Boor recurrence on a nonempty span, with $0<u<1$.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] states that every successful real addition, subtraction, multiplication, and division has relative error at most $u$ for a nonzero normal exact result, while exact zeros are returned exactly; other nonzero range cases return failure.

[F2] [[alg-de-boor-coefficient-evaluation]] first computes the rounded numerator subtraction. If it is zero, the algorithm copies the left coefficient; otherwise it computes the denominator subtraction and division, complement subtraction, two multiplications, and addition in that order.

[F3] [[thm-de-boor-coefficient-evaluation-equivalence]] identifies the exact recurrence output with $S(x)$.

[A1] Every operation in the floating-point run succeeds, as required in the Statement.

## Proof

1.1 At one blend let $\alpha\in[0,1]$ be the exact ratio. If its numerator is zero, the algorithm's exact-zero branch returns the left coefficient copy. Otherwise the two subtractions and division in [F2] give $\widehat\alpha=\alpha(1+\delta_1)(1+\delta_3)/(1+\delta_2)$, with $|\delta_i|\le u$ by [F1]. Hence $|\widehat\alpha-\alpha|\le\eta$. The complement subtraction gives $|\widehat\beta-(1-\alpha)|\le\eta+u(2+\eta)=e$, because $|1-\widehat\alpha|\le2+\eta$. Also $|\widehat\alpha|,|\widehat\beta|\le1+e=W$. [A1, F1, F2, algebra]

1.2 Write the two rounded products and final rounded sum as $\widehat y=\operatorname{fl}(\operatorname{fl}(\widehat\beta a)+\operatorname{fl}(\widehat\alpha b))$. Subtract the exact convex blend $(1-\alpha)a+\alpha b$. The coefficient differences contribute at most $e(|a|+|b|)$; the two product roundings contribute at most $uW(|a|+|b|)$; and the final addition contributes at most $u(1+u)W(|a|+|b|)$. Thus $|\widehat y-((1-\alpha)a+\alpha b)|\le E(|a|+|b|)$. If $M$ is the maximum magnitude in the preceding computed column, this is at most $2EM$. Since the exact blend is a convex combination, its magnitude is at most $M$, so the next computed column has maximum at most $(1+2E)M$. [A1, F1, F2, algebra]

2.1 Let $M_r$ be the maximum magnitude of the computed column after $r$ stages and let $\varepsilon_r$ be the maximum difference from the exact column. Step 1.2 gives $M_r\le(1+2E)^rM_0$. Since the exact weights are nonnegative and sum to one, the previous-column discrepancy contributes at most $\varepsilon_{r-1}$, while the local rounding contributes at most $2EM_{r-1}$. Therefore $\varepsilon_r\le\varepsilon_{r-1}+2E(1+2E)^{r-1}M_0$. Starting with $\varepsilon_0=0$ and summing this geometric series gives $\varepsilon_p\le((1+2E)^p-1)M_0$. [step 1.2, algebra, induction]

3.1 By [F3], the final exact column is $S(x)$; the final computed column is $\widehat S(x)$, and $M_0=\max_{k-p\le i\le k}|c_i|$. Substitution in step 2.1 proves the bound. [F3, step 2.1, algebra] ∎
