---
id: ex-random-forest-strength-correlation-tradeoff
kind: example
title: "A two-stump strength and correlation calculation"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
deps:
  - alg-bagged-random-forest
  - thm-random-forest-strength-correlation-bound
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - thm-independent-random-elements-have-product-joint-law
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Leo Breiman, "Random Forests," Machine Learning 45 (2001), 5–32; full text hosted by the University of Chicago Macro Finance Research Program'
      url: 'https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

Let $X\in\{0,1\}$, $Y=X$, with $P(X=0,Y=0)=3/4$ and $P(X=1,Y=1)=1/4$. Conditional on fixed training data, let each randomized tree independently be the constant class-$0$ stump with probability $3/4$ and the constant class-$1$ stump with probability $1/4$. For a randomization $\theta$, write $p_c(x)=Q\{h(x,\theta)=c\}$; for $y\in\{0,1\}$ define $m(x,y)=p_y(x)-p_{1-y}(x)$, $s=\mathbb E[m(X,Y)]$, and $PE^*=P\{m(X,Y)<0\}$. For each tree set $r_\theta(x,y)=\mathbf1\{h(x,\theta)=y\}-\mathbf1\{h(x,\theta)=1-y\}$ and $sd(\theta)=\sqrt{\operatorname{Var}_{X,Y}(r_\theta(X,Y))}$. For independent randomizations $\Theta,\Theta'$ let $d=\mathbb E_Qsd(\Theta)$ and $\rho=\mathbb E_{Q\times Q}[\operatorname{Cov}_{X,Y}(r_\Theta,r_{\Theta'})]/d^2$. Then the limiting margins at the two test pairs are $m(0,0)=1/2$ and $m(1,1)=-1/2$, so $s=1/4$ and $PE^*=1/4$. Each tree's raw-margin standard deviation is $\sqrt{3/4}$, the covariance numerator defining $\rho$ is $3/16$, and $\rho=1/4$. The strength-correlation bound has right-hand side $15/4$ in this example.

## Example references

[[thm-random-forest-strength-correlation-bound|Strength, raw margins, and the correlation bound]]

[Breiman, “Random Forests,” Definitions 2.1–2.2 and Theorem 2.3, printed pp. 8–9](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

## Facts & Assumptions

**Given:** The test law and independent two-stump randomization law in the Example.

[F1] [[alg-bagged-random-forest]]: A regression or classification forest aggregates trees with a fixed class order, and a classification tree casts one class vote.

[F2] [[thm-random-forest-strength-correlation-bound]]: The strength is $s=\mathbb E_Pm$, tree standard deviations are $sd(\theta)=\sqrt{\operatorname{Var}_P(r_\theta)}$, and for $d>0$ the correlation parameter is the expected independent-pair covariance divided by $d^2$.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Expectation on a probability space is integration against its probability measure.

[F4] [[def-moments-variance-and-covariance]]: Variance and covariance are expectations of the corresponding centered products.

[F5] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family of random elements is the product of their marginal laws.

## Verification

1.1 By the tree-vote convention [F1], at $Z=(0,0)$ the correct class receives probability $3/4$ and the wrong class $1/4$, giving margin $1/2$. At $Z=(1,1)$, the correct class receives probability $1/4$ and the wrong class $3/4$, giving margin $-1/2$. Therefore $s=(3/4)(1/2)+(1/4)(-1/2)=1/4$ and $PE^*=1/4$. [F1, F2, F3, algebra]

1.2 For tree type $A$, the raw margin is $+1$ at $(0,0)$ and $-1$ at $(1,1)$; its mean is $1/2$ and its second moment is $1$, so its variance is $3/4$. Type $B$ reverses the two signs, giving mean $-1/2$ and the same variance $3/4$. Thus $sd(A)=sd(B)=\sqrt{3/4}$ and $d^2=3/4$. [F2, F3, F4, algebra]

2.1 The independent pair has probabilities $P(A,A)=9/16$, $P(B,B)=1/16$, and total mixed probability $6/16$. The covariance over $Z$ is $3/4$ for equal types and $-3/4$ for mixed types, so its expectation is $[(9+1-6)/16](3/4)=3/16$. By [F2] and [F5], $\rho=(3/16)/(3/4)=1/4$. [F2, F4, F5, step 1.2, algebra]

3.1 Substitution gives $\rho(1-s^2)/s^2=(1/4)(15/16)/(1/16)=15/4$, and the example's error $1/4$ satisfies the bound. [F2, step 1.1, step 2.1, algebra] ∎
