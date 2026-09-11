---
id: "lem-chernoff-bound-for-independent-bernoulli-trials"
kind: "lemma"
title: "Chernoff bound for independent bernoulli trials"
status: "draft"
origin: "pipeline"
deps: ["def-bernoulli-and-binomial-random-variables", "thm-expectation-of-products-of-independent-random-variables", "thm-markov-inequality", "def-real-exponential-function-and-e", "def-natural-logarithm", "thm-exponential-addition-formula", "cor-exponential-reciprocal-and-positivity", "thm-derivative-of-exponential", "thm-exponential-is-strictly-increasing", "thm-logarithm-derivative-and-integral", "thm-chain-rule", "thm-algebra-of-derivatives", "cor-mean-value-theorem"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Aspnes §§5.2.1–5.2.4 and H.2.2; additive centered-mgf argument is local"
      url: https://cs.yale.edu/homes/aspnes/classes/469/notes.pdf
proof_strategy: "direct"
---

## Statement

Let $X_1,\ldots,X_N$ be mutually independent Bernoulli$(p_i)$ variables on a finite probability space. Set $S=\sum_iX_i$ and $\mu=\sum_i p_i$. For $\delta\ge0$,
$$\mathbb P(S\ge(1+\delta)\mu)\le\exp\{-\mu((1+\delta)\log(1+\delta)-\delta)\}.$$
For $0\le\delta<1$,
$$\mathbb P(S\le(1-\delta)\mu)\le\exp\{-\mu(\delta+(1-\delta)\log(1-\delta))\}.$$
For $0\le\delta\le1$ the upper and lower tails are respectively at most $\exp(-\mu\delta^2/3)$ and $\exp(-\mu\delta^2/2)$, and
$$\mathbb P(|S-\mu|\ge\delta\mu)\le2\exp(-\mu\delta^2/3).$$
At $\delta=1$ the lower optimized bound is $\exp(-\mu)$, proved directly rather than by taking $\log0$. Empty sums and $\mu=0$ are included. Also, for $N>0$ and $t\ge0$,
$$\mathbb P(|S-\mu|\ge t)\le2\exp(-2t^2/N).$$

## Facts & Assumptions

**Given:** The finite mutually independent family above. No AC is assumed.

[F1] Bernoulli probabilities are $p_i$ and $1-p_i$ at 1 and 0 ([[def-bernoulli-and-binomial-random-variables]]).

[F2] Expectation factors for a finite product of mutually independent variables ([[thm-expectation-of-products-of-independent-random-variables]]).

[F3] Finite-space Markov bounds a nonnegative variable at a positive threshold ([[thm-markov-inequality]]).

[F4] Exponential addition and positivity give products and reciprocals of exponentials ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]]); $\exp(0)=1$ by its series ([[def-real-exponential-function-and-e]]). The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]), and log is its inverse on positive reals ([[def-natural-logarithm]]).

[F5] The exponential derivative is exp and the logarithm derivative is $1/x$ on positive reals ([[thm-derivative-of-exponential]], [[thm-logarithm-derivative-and-integral]]). Chain and algebra rules apply where their denominators are nonzero ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F6] The mean value theorem on a closed interval with continuous function and differentiable interior converts a derivative sign to monotonicity ([[cor-mean-value-theorem]]).

## Proof

1.1 The function $h(u)=\exp(u)-1-u$ is zero at zero and has derivative $\exp(u)-1$, nonnegative for $u\ge0$ and nonpositive for $u\le0$. On each compact interval between zero and u it is smooth, so F6 proves $h(u)\ge0$ for either sign of u. Thus $1+u\le\exp(u)$ for every real u. [F4, F5, F6]

2.1 Functions of distinct independent variables remain mutually independent here: for each prescribed transformed value, sum the original joint probabilities over its finite preimage; the product factorization distributes over these finite sums. Consequently F2 and exponential addition give, for every real $\lambda$, $$\mathbb E e^{\lambda S}=\prod_i(1+p_i(e^\lambda-1))\le\prod_i e^{p_i(e^\lambda-1)}=e^{\mu(e^\lambda-1)}.$$ Every factor before the inequality is positive, even when $p_i=0$ or 1, so multiplying the inequalities from step 1.1 preserves order. [step 1.1, F1, F2, F4]

3.1 For $\mu>0,\delta>0$, Markov with $\lambda=\log(1+\delta)>0$ bounds the upper-tail probability by $\exp(\mu(e^\lambda-1)-\lambda(1+\delta)\mu)$, which is exactly the upper displayed expression. For $0<\delta<1$, take $\lambda=\log(1-\delta)<0$; then $S\le(1-\delta)\mu$ implies $e^{\lambda S}\ge e^{\lambda(1-\delta)\mu}$. Markov with this positive threshold gives the lower displayed expression. At $\delta=0$ both rate expressions are zero and the assertion is just a probability at most one; no positive exponential parameter is needed. [step 2.1, F3, F4]

4.1 On $[0,1]$ set $a(u)=\log(1+u)-2u/(2+u)$. Its derivative is $u^2/((1+u)(2+u)^2)\ge0$ and $a(0)=0$, hence $\log(1+u)\ge2u/(2+u)\ge2u/3$. Therefore the derivative of $(1+u)\log(1+u)-u-u^2/3$ is nonnegative and its value at zero is zero. For $0\le u<1$, the derivative of $-\log(1-u)-u$ is $u/(1-u)\ge0$ and its value at zero is zero. It follows that the derivative of $u+(1-u)\log(1-u)-u^2/2$ is nonnegative, with zero initial value. All denominators and logarithm arguments are positive on the compact intervals used. F6 proves the rate bounds $u^2/3$ and $u^2/2$. Substitution in step 3.1 gives the simplified tails away from the lower endpoint $u=1$. [step 3.1, F4, F5, F6]

5.1 At $\delta=1$, independence gives $\mathbb P(S=0)=\prod_i(1-p_i)\le e^{-\mu}$ by step 1.1, including a zero factor when some $p_i=1$. This also implies the weaker lower bound $e^{-\mu/2}$. If $\mu=0$, every $p_i=0$, so each event $X_i=1$ has mass zero; summing the finitely many masses shows $S=0$ almost surely. Both weak multiplicative thresholds then have probability one, matching their bounds one. For $N=0$ this holds identically by the empty-sum convention. Finally $\mathbf1_{A\cup B}\le\mathbf1_A+\mathbf1_B$ and finite summation give the union bound. Applying it to upper and lower deviations and using $e^{-\mu\delta^2/2}\le e^{-\mu\delta^2/3}$ gives the stated two-sided bound, also at $\delta=0$. [step 1.1, step 4.1, F1, F2, F4]

6.1 For a single Bernoulli(p), put $A(\lambda)=1-p+pe^\lambda>0$ and $g(\lambda)=\log A(\lambda)-p\lambda$. Direct differentiation gives $g(0)=g'(0)=0$, $g'=q-p$ and $g''=q(1-q)$, where $q=pe^\lambda/A(\lambda)\in[0,1]$. Thus $g''\le1/4$, since $q(1-q)=1/4-(q-1/2)^2$. The smooth function $v(\lambda)=g(\lambda)-\lambda^2/8$ has $v''\le0$ and $v(0)=v'(0)=0$. Apply F6 first to v' and then to v on either side of zero: v' is nonincreasing, so v is nondecreasing up to zero and nonincreasing after zero. Hence $g(\lambda)\le\lambda^2/8$ for all real $\lambda$, including both deterministic p endpoints. Exponentiating yields $\mathbb E e^{\lambda(X-p)}\le e^{\lambda^2/8}$. [step 5.1, F1, F4, F5, F6]

7.1 Factor the centered exponential expectation using the independence justification of step 2.1 to obtain $\mathbb E e^{\lambda(S-\mu)}\le e^{N\lambda^2/8}$. For $t>0$, Markov with $\lambda=4t/N$ bounds $\mathbb P(S-\mu\ge t)$ by $e^{-2t^2/N}$. Apply the same estimate with $\lambda=-4t/N$ to $S-\mu\le-t$. The union bound from step 5.1 gives the additive assertion. At t=0 its right side is two and is trivially an upper bound. Division by N is licensed by the additive assertion's hypothesis $N>0$; nothing is asserted from that formula at N=0. [step 2.1, step 5.1, step 6.1, F2, F3, F4] ∎
