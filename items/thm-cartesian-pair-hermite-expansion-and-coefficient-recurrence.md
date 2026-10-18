---
id: thm-cartesian-pair-hermite-expansion-and-coefficient-recurrence
kind: theorem
title: Finite Hermite expansion and coefficient recurrences for a Cartesian Gaussian pair
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-cartesian-gaussian-primitives-and-contractions, def-hermite-gaussian-coulomb-auxiliary-functions, thm-gaussian-product-theorem-and-polynomial-shift, thm-derivative-of-exponential, lem-derivative-algebra-and-chain-rules]
proof_strategy: direct
axiom_use: None. Coefficients are obtained by finite polynomial algebra and induction on total degree.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; Hermite Gaussian definition, multiplication recurrence, and McMurchie–Davidson coefficient recursion, pp. 6–13 and 23–27."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §II, pp. 5–9, Hermite expansion coefficients and recurrence identities."
---

## Statement

In one dimension, let $g_i(x_A,a)=x_A^ie^{-ax_A^2}$ and $g_j(x_B,b)=x_B^je^{-bx_B^2}$, with $x_A=x-A$, $x_B=x-B$, $p=a+b$, $P=(aA+bB)/p$, and $K=e^{-ab(A-B)^2/p}$. There are unique coefficients $E_{ij}^t$ such that
$$g_i(x_A,a)g_j(x_B,b)=\sum_{t=0}^{i+j}E_{ij}^t\Lambda_t(x;p,P).$$
With $E_{00}^0=K$ and $E_{ij}^t=0$ outside $0\le t\le i+j$, they satisfy
$$E_{i+1,j}^t=\frac{E_{ij}^{t-1}}{2p}+(P-A)E_{ij}^t+(t+1)E_{ij}^{t+1},$$
$$E_{i,j+1}^t=\frac{E_{ij}^{t-1}}{2p}+(P-B)E_{ij}^t+(t+1)E_{ij}^{t+1}.$$
In three dimensions the pair expansion is the product of the three one-dimensional expansions, so it is a finite sum of $\Lambda_{tuv}$ with $0\le t\le\alpha_1+\beta_1$, $0\le u\le\alpha_2+\beta_2$, and $0\le v\le\alpha_3+\beta_3$.

## Facts & Assumptions

**Given:** Primitive Gaussian factors and indices as above, the product identity of [[thm-gaussian-product-theorem-and-polynomial-shift]], and $\Lambda_t$ from [[def-hermite-gaussian-coulomb-auxiliary-functions]].

[F1] [[thm-gaussian-product-theorem-and-polynomial-shift]]: the product exponential equals $K e^{-p(x-P)^2}$ and the remaining polynomial has degree at most $i+j$.

[F2] [[def-hermite-gaussian-coulomb-auxiliary-functions]]: $\Lambda_t=\partial_P^t e^{-p(x-P)^2}$.

[L9] [[thm-derivative-of-exponential]] and [[lem-derivative-algebra-and-chain-rules]]: the exponential is smooth with derivative itself; finite sums, products and polynomial compositions obey the product, power and chain rules. Applying these rules one coordinate or parameter at a time justifies every displayed finite Gaussian derivative.

## Proof

1.1 Differentiating [F2] once gives $\Lambda_{t+1}=2p\,\partial_P^t((x-P)e^{-p(x-P)^2})$. The product rule applied $t$ times gives $\partial_P^t((x-P)h)=(x-P)\partial_P^th-t\partial_P^{t-1}h$, hence $$ (x-P)\Lambda_t=\frac{\Lambda_{t+1}}{2p}+t\Lambda_{t-1},$$ with the last term zero for $t=0$. [given, F2, algebra, induction, L9]

2.1 The polynomial factors $x_A^ix_B^j$ have degree at most $i+j$. By [F1] they multiply a common Gaussian. The polynomial part of $\Lambda_t$ has degree $t$ and leading coefficient $(2p)^t$, as follows inductively from $\Lambda_{t+1}=2p(x-P)\Lambda_t-2pt\Lambda_{t-1}$. Thus these polynomials form a triangular basis of the polynomials of degree at most $i+j$, which gives existence and uniqueness of the finite coefficients $E_{ij}^t$. [given, F1, F2, step 1.1, algebra, induction]

3.1 Multiplying the expansion for $g_i g_j$ by $x_A=(x-P)+(P-A)$ gives the expansion for $g_{i+1}g_j$. Substitute the identity in step 1.1 and collect the coefficient of each $\Lambda_t$; it is $E_{ij}^{t-1}/(2p)+(P-A)E_{ij}^t+(t+1)E_{ij}^{t+1}$. Replacing $x_A$ by $x_B=(x-P)+(P-B)$ proves the second recurrence. The zero-outside-range convention handles both endpoints. [step 1.1, step 2.1, algebra]

4.1 In three dimensions the primitive product factors into the product of its three one-dimensional coordinate factors. Multiplying their finite expansions gives the stated rectangular index range and a finite expansion in $\Lambda_{tuv}$. [given, F1, step 2.1, algebra] ∎
