---
id: thm-chebyshev-interpolation-near-best-error-bound
kind: theorem
title: "Chebyshev interpolation error is controlled by best polynomial error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - lem-cardinal-lagrange-interpolation-and-operator-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 5"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Printed pp. 34–36, Lagrange cardinal representation"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Polynomial interpolation"
      url: "https://fncbook.com/polyinterp/"
      locator: "Complete article, Definition 2.1.1 and §2.1.1"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

For either Chebyshev node family, every $n\geq0$, and every
$f\in C[-1,1]$,
$$\|f-I_n^\sigma f\|_\infty \leq (1+\Lambda_n^\sigma)E_n(f).$$
Here $E_n$ is the best degree-$n$ uniform error and $\Lambda_n^\sigma$
is the operator norm defined in
[[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]].

## Facts & Assumptions
**Given:** $f\in C[-1,1]$, $n\geq0$, and $\sigma\in\{R,L\}$.

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]] defines $E_n$, $I_n^\sigma$, and $\Lambda_n^\sigma$.

[F2] [[lem-cardinal-lagrange-interpolation-and-operator-norm]]: $I_n^\sigma p=p$ for every $p\in\mathcal P_n$, and $\|I_n^\sigma\|=\Lambda_n^\sigma$.

## Proof

1.1 Fix $p\in\mathcal P_n$ and put $h=f-p$. By [F2], $I_n^\sigma p=p$, so $f-I_n^\sigma f=h-I_n^\sigma h$. If $\|h\|_\infty=0$, then $h=0$ and the asserted bound follows; otherwise $g=h/\|h\|_\infty$ lies in $C[-1,1]$ with $\|g\|_\infty=1$, so the definition in [F1] gives $\|I_n^\sigma h\|_\infty=\|h\|_\infty\|I_n^\sigma g\|_\infty\leq\Lambda_n^\sigma\|h\|_\infty$. Pointwise, $|h-I_n^\sigma h|\leq|h|+|I_n^\sigma h|$, so taking suprema gives $\|f-I_n^\sigma f\|_\infty\leq(1+\Lambda_n^\sigma)\|f-p\|_\infty$. [F1, F2, given, algebra]

2.1 Step 1.1 holds for every $p\in\mathcal P_n$. The unit ball in [F1] contains the zero function and each norm is nonnegative, so $\Lambda_n^\sigma\geq0$ and $1+\Lambda_n^\sigma>0$. Taking the infimum of the right-hand side over the nonempty set $\mathcal P_n$ therefore gives $(1+\Lambda_n^\sigma)E_n(f)$, proving the claim. [given, F1, step 1.1, algebra] ∎
