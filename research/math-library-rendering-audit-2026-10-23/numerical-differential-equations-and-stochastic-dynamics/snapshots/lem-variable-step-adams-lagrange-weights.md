---
id: lem-variable-step-adams-lagrange-weights
kind: lemma
title: "Variable-step Adams weights are integrals of the actual-node Lagrange bases"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III.5, pp. 397–400"
      url: "https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §6.6"
      url: "https://fncbook.com/multistep/"
dependency_level: 0
---

## Statement

Let $k\ge1$ and let $t_{n+1}>t_n>\cdots>t_{n-k+1}$ be distinct time nodes. For $j=0,\ldots,k-1$, let

$$L_j^{P}(s)=\prod_{\substack{0\le\ell<k\\\ell\ne j}}\frac{s-t_{n-\ell}}{t_{n-j}-t_{n-\ell}},\qquad b_j^n=\int_{t_n}^{t_{n+1}}L_j^P(s)\,ds.$$

These coefficients give the explicit Adams predictor

$$Y_{n+1}^P=Y_n+\sum_{j=0}^{k-1}b_j^nf(t_{n-j},Y_{n-j})$$

obtained by integrating the degree-$(k-1)$ interpolant through the known derivative values $f(t_{n-j},Y_{n-j})$.

For the corrector, let $\widehat L_j(s)$, $j=0,\ldots,k$, be the Lagrange basis on the $k+1$ distinct nodes $t_{n+1},t_n,\ldots,t_{n+1-k}$ and define $\widehat b_j^n=\int_{t_n}^{t_{n+1}}\widehat L_j(s)\,ds$. These are the coefficients of the integrated degree-$k$ interpolant, with $j=0$ the endpoint derivative at $t_{n+1}$. The fully implicit corrector is

$$Y_{n+1}=Y_n+\sum_{j=0}^{k}\widehat b_j^nf(t_{n+1-j},Y_{n+1-j}),$$

where the $j=0$ term uses the unknown new endpoint value.

## Facts & Assumptions

**Given:** Strictly increasing time nodes, derivative samples at the listed nodes, and the Lagrange basis polynomials defined in the statement.

[A1] The integer $k$ is at least one and all listed nodes are distinct; a product over an empty index set, which occurs in the predictor when $k=1$, equals $1$.

## Proof

1.1 Every denominator $t_{n-j}-t_{n-\ell}$ in $L_j^P$ is nonzero because the nodes are distinct. Direct substitution gives $L_j^P(t_{n-r})=1$ if $j=r$ and $0$ otherwise; for $k=1$ the empty product is $1$, so this also covers the one-node predictor. [given, A1, algebra]

2.1 Therefore $P(s)=\sum_{j=0}^{k-1}L_j^P(s)f(t_{n-j},Y_{n-j})$ is the unique polynomial of degree at most $k-1$ interpolating the known derivative samples: it has the prescribed value at each node, and the difference of two such polynomials would have $k$ distinct roots while having degree at most $k-1$. [step 1.1, algebra]

3.1 Integrating the identity defining $P$ from $t_n$ to $t_{n+1}$ gives $\int_{t_n}^{t_{n+1}}P(s)\,ds=\sum_{j=0}^{k-1}b_j^nf(t_{n-j},Y_{n-j})$. The Adams relation $Y_{n+1}^P=Y_n+\int P$ yields exactly the predictor coefficients stated. [step 2.1, algebra]

4.1 The same cardinal-value argument on the $k+1$ corrector nodes gives the unique degree-at-most-$k$ interpolant; integrating it gives $\sum_{j=0}^{k}\widehat b_j^nf(t_{n+1-j},Y_{n+1-j})$, with the $j=0$ term evaluated at the new endpoint for the fully implicit formula. [given, algebra] ∎
