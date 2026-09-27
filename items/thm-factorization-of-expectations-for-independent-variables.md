---
id: thm-factorization-of-expectations-for-independent-variables
kind: theorem
title: "Expectations factor over finite products of independent random variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-independent-random-elements-have-product-joint-law, def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-change-of-variables-for-expectation, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-monotone-convergence-for-the-integral, lem-measurable-functions-preserve-independence, def-product-sigma-algebra-and-finite-product-sigma-algebras, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
proof_strategy: direct
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.12"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "S. R. S. Varadhan, Probability Theory, Section 1.6"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-factorization-of-expectations-for-independent-variables). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a
common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel
measurable for each $i<n$.

1. If every $g_i$ is nonnegative, then
   $$\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$$
   in $[0,+\infty]$. In this finite product of expectations, a zero factor
   makes the product zero even when another factor is $+\infty$; otherwise
   multiplication has its usual extended nonnegative meaning.
2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable
   and the same factorization holds in $\mathbb R$.

## Facts & Assumptions

**Given:** Independent real random variables $X_0,\dots,X_{n-1}$ and Borel measurable functions $g_i:\mathbb R\to\mathbb R$.

[L1] Measurable coordinatewise functions preserve independence. ([[lem-measurable-functions-preserve-independence]])

[L2] Independent random elements have product joint law. ([[thm-independent-random-elements-have-product-joint-law]])

[L3] Expectation is integration against the law after a measurable change of variables. ([[thm-change-of-variables-for-expectation]])

[L4] Tonelli evaluates nonnegative product-measurable integrands on a sigma-finite product space. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L5] Fubini evaluates absolutely integrable product-measurable integrands on a sigma-finite product space. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[L6] On a product measurable space, coordinate projections are measurable, and finite sums and products of measurable real-valued functions remain measurable. ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L7] A nonnegative measurable function has zero integral exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[L8] Increasing nonnegative measurable functions pass to the limit under the integral ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Put $Y_i:=g_i(X_i)$. By [L1], the family $Y_0,\dots,Y_{n-1}$ is independent. On $\mathbb R^n$ with the finite product sigma-algebra, each coordinate projection $\pi_i$ is measurable because $\pi_i^{-1}(B)=\mathbb R^i\times B\times\mathbb R^{n-1-i}$ is a measurable rectangle. Repeated use of [L6] therefore makes the product map $m(y_0,\dots,y_{n-1})=\prod_{i<n}y_i$ measurable. [L1, L6]

2.1 Assume each $g_i$ is nonnegative. If some $\mathbb E[g_j(X_j)]=0$, [L7] gives $Y_j=0$ almost surely. The finite product $\prod_iY_i$ is then zero almost surely, so [L7] gives expectation zero, agreeing with the Statement's explicit zero-factor convention even if another expectation is infinite. [step 1.1, L7]

2.2 Otherwise every $\mathbb E[g_i(X_i)]$ is positive (possibly infinite). Let $\mu_i$ be the law of $Y_i$ and let $\mu=\bigotimes_{i<n}\mu_i$. By [L2], the joint law of $Y=(Y_0,\dots,Y_{n-1})$ is $\mu$. For each integer $k\ge1$, put $Y_i^{(k)}=Y_i\wedge k$. The finite product $\prod_iY_i^{(k)}$ is bounded, so [L3] and repeated [L4] give $\mathbb E[\prod_iY_i^{(k)}]=\prod_i\mathbb E[Y_i^{(k)}]$ with only finite factors. As $k\uparrow\infty$, the products increase pointwise to $\prod_iY_i$; [L8] passes the limit through the left integral and each factor on the right. Since all limiting factors are strictly positive, the finite product of their increasing approximants tends to their ordinary extended product without an indeterminate zero-times-infinity expression. [step 1.1, L2, L3, L4, L8]

3.1 Now assume every $g_i(X_i)$ is integrable. Applying steps 2.1–2.2 to the nonnegative functions $|g_i|$ gives $\mathbb E[\prod_{i<n}|g_i(X_i)|]=\prod_{i<n}\mathbb E[|g_i(X_i)|]<\infty$. So $\prod_{i<n}g_i(X_i)$ is integrable. [step 2.1, step 2.2]

4.1 Let $\mu_i$ be the law of $Y_i=g_i(X_i)$ and $\mu=\bigotimes_{i<n}\mu_i$ as in step 2.2. Step 3.1 shows that the product map $m$ is $\mu$-integrable. By [L2], [L3], and repeated use of [L5], $\mathbb E[\prod_{i<n}g_i(X_i)]=\int_{\mathbb R^n}m\,d\mu=\prod_{i<n}\int_{\mathbb R}y\,d\mu_i=\prod_{i<n}\mathbb E[g_i(X_i)]$. [step 1.1, step 3.1, L2, L3, L5]

5.1 Steps 2.1–2.2 prove the nonnegative case, and step 4.1 proves the integrable case. [step 2.1, step 2.2, step 4.1] ∎
