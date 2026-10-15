---
id: lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance
kind: lemma
title: Oppositely monotone functions of independent coordinates have nonpositive covariance
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-independent-random-elements, def-moments-variance-and-covariance, thm-independent-random-elements-have-product-joint-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, cor-cauchy-schwarz-for-random-variables, lem-variance-and-covariance-identities-for-random-variables, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-change-of-variables-for-expectation, thm-dominated-convergence]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 8, §8.2, pp. 6–7
      url: https://artowen.su.domains/mc/Ch-var-basic.pdf
    - title: Paul Glasserman, Monte Carlo Methods in Financial Engineering, Chapter 4, §4.2, p. 207
      url: https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf
---

## Statement

Let $d\ge1$, let $U_1,\ldots,U_d$ be independent real random variables, and let $G,H:\mathbb R^d\to\mathbb R$ be Borel functions with $E[G(U)^2]<\infty$ and $E[H(U)^2]<\infty$. A function is nondecreasing in coordinate $j$ when increasing only its $j$th input cannot decrease its value; nonincreasing is defined with the reverse inequality. Suppose $G$ is nondecreasing in each coordinate and $H$ is nonincreasing in each coordinate. Then $\operatorname{Cov}(G(U),H(U))\le0$.

## Facts & Assumptions

**Given:** The independent real coordinates and square-integrable, coordinatewise oppositely monotone functions in the Statement.

[F1] [[def-independent-random-elements]]: Random elements are independent when their generated sigma-algebras are independent.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: A finite independent family has the product of its marginal laws as its joint law.

[F3] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: Integrable functions on a finite product of probability spaces can be integrated by iterated integrals.

[F4] [[cor-cauchy-schwarz-for-random-variables]]: $E|XY|\le(E X^2)^{1/2}(E Y^2)^{1/2}$ for square-integrable real variables.

[F5] [[lem-variance-and-covariance-identities-for-random-variables]]: Covariance is $E[XY]-EX\,EY$ for square-integrable real variables.

[F6] [[thm-dominated-convergence]]: A pointwise convergent sequence dominated in absolute value by an integrable function has convergent integrals.

[F7] [[thm-change-of-variables-for-expectation]]: If a random element has law $\mu$, expectations of its measurable integrable functions equal their integrals against $\mu$.

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Expectation is linear on finite integrable sums and satisfies $|E X|\le E|X|$.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 In dimension one, let $\mu$ be the law of $U_1$. By [F7], the expectations defining the covariance are the corresponding $\mu$-integrals. Expanding those integrals using [F8] and applying [F3] gives $2\operatorname{Cov}(G(U_1),H(U_1))=\int\!\int (G(x)-G(y))(H(x)-H(y))\,\mu(dx)\mu(dy)$. The integrand is nonpositive for every $x,y$ because the two functions have opposite monotonicity, so the covariance is nonpositive. The two differences are square-integrable on $(\mathbb R^2,\mu\times\mu)$, so [F4] makes their product integrable and justifies the double integral. [F3, F4, F5, F7, F8, algebra]

2.1 Assume the claim holds for $d-1$ and first suppose $G,H$ are bounded. By [F2] the joint law is $\mu\times\nu$, where $\mu$ is the first $d-1$ coordinate laws and $\nu$ is the law of $U_d$. The change-of-variables formula [F7] identifies expectations under the joint law with integrals against $\mu\times\nu$. Define $G_0(x)=\int G(x,z)\,\nu(dz)$ and $H_0(x)=\int H(x,z)\,\nu(dz)$. Fubini [F3] makes these measurable and bounded; they retain their respective coordinate monotonicities. For each fixed $x$, step 1.1 applied to the last coordinate gives $\operatorname{Cov}_\nu(G(x,U_d),H(x,U_d))\le0$, and the induction hypothesis gives $\operatorname{Cov}_\mu(G_0,H_0)\le0$. [F1, F2, F3, F7, step 1.1, induction]

3.1 Expanding both sides by the covariance formula [F5], using expectation linearity [F8], the joint law identity [F7], and Fubini [F3] yields $\operatorname{Cov}(G(U),H(U))=\int \operatorname{Cov}_\nu(G(x,U_d),H(x,U_d))\,\mu(dx)+\operatorname{Cov}_\mu(G_0,H_0)\le0$. Thus the bounded case holds in dimension $d$, completing the induction. [F3, F5, F7, F8, step 2.1, algebra]

4.1 For general square-integrable $G,H$, clamp each function to $[-m,m]$. The clamps remain coordinatewise monotone and bounded, with $|G_m|\le|G|$, $|H_m|\le|H|$, $|G_m-G|^2\le G^2$, and $|H_m-H|^2\le H^2$. Applying [F6] to the squared differences gives $L^2$ convergence, while $\|G_m\|_2\le\|G\|_2$ and $\|H_m\|_2\le\|H\|_2$. Cauchy–Schwarz [F4] shows that $E|G_m-G|$ and $E|H_m-H|$ tend to zero, and that $E|G_mH_m-GH|\le\|G_m-G\|_2\|H_m\|_2+\|G\|_2\|H_m-H\|_2$ tends to zero. Thus expectation linearity [F8] and the covariance identity [F5] imply $\operatorname{Cov}(G_m(U),H_m(U))\to\operatorname{Cov}(G(U),H(U))$. Each bounded covariance is nonpositive by step 3.1, so the limit is nonpositive. [F4, F5, F6, F8, step 3.1] ∎
