---
id: ex-cm-math-evidence-chebyshev-sample-mean-check
kind: example
title: "Finite check of the IID sample-mean variance and Chebyshev bound"
status: published
origin: pipeline
domain: mathematics
deps: [def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-identically-distributed-and-iid-random-variables, def-independence-of-finite-random-variables, def-moments-variance-and-covariance, def-uniform-finite-probability-space, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
dependency_roles:
  def-expectation-on-a-finite-probability-space: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-identically-distributed-and-iid-random-variables: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  def-uniform-finite-probability-space: mathematical-premise
  thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces: mathematical-premise
dependency_level: 0
proof_strategy: direct computation
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.2.1 (the variance of a sum of independent variables and the Chebyshev bound for the i.i.d. sample mean)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
---

## Example

Let $\Omega=\{(\sigma_1,\sigma_2):\sigma_1,\sigma_2\in\{-1,1\}\}$ be the uniform
finite probability space with four outcomes of weight $1/4$, and let
$$X_1(\sigma_1,\sigma_2):=\sigma_1,\qquad X_2(\sigma_1,\sigma_2):=\sigma_2 .$$
Then $(X_1,X_2)$ is an IID family with $\mu=E[X_1]=0$ and
$\sigma^2=\operatorname{Var}(X_1)=1$; the sample mean
$\overline X=(X_1+X_2)/2$ takes the values $-1,0,1$ with probabilities
$1/4,1/2,1/4$ respectively. The exact second moment and the Chebyshev bound
computed directly below read
$$E\bigl\lvert\overline X\bigr\rvert^2=\frac12=\frac{\sigma^2}{2},\qquad \mathbb P\bigl(\lvert\overline X\rvert\ge1\bigr)=\frac12 =\frac{\sigma^2}{2\cdot1^2},$$
so the bound is attained at $a=1$, while
$$\mathbb P\Bigl(\lvert\overline X\rvert\ge\frac12\Bigr)=\frac12 \le2=\frac{\sigma^2}{2\cdot(1/2)^2}$$
is strict. This is a finite check inside the stated model; it evaluates no
measurement and estimates no physical quantity.

## Facts & Assumptions

**Given:** The uniform finite probability space on $\{-1,1\}^2$ and the coordinate maps $X_1,X_2$ of the Example.

[L3] On a finite probability space, expectations are the finite weighted sums of [[def-expectation-on-a-finite-probability-space]], and the finite model agrees with the probability measure $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$, whose expectations coincide with those integral expectations. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]], [[def-finite-probability-space-and-event]])

[L4] A finite family of finite-valued random variables is mutually independent exactly when $\mathbb P(X_j=x_j\text{ for all }j\in J)=\prod_{j\in J}\mathbb P(X_j=x_j)$ for every nonempty $J$ and every choice of values; it is identically distributed when the individual distributions agree. ([[def-independence-of-finite-random-variables]], [[def-identically-distributed-and-iid-random-variables]])

## Verification

**Proof technique:** direct enumeration of four outcomes.

1.1 The four outcomes have weight $1/4$ each, so $\mathbb P(X_1=-1)=\mathbb P(X_1=1)=1/2$ and the same for $X_2$; for every pair $(a,b)\in\{-1,1\}^2$ one has $\mathbb P(X_1=a,X_2=b)=1/4=\mathbb P(X_1=a)\mathbb P(X_2=b)$. By [L4] the family is independent, the two distributions agree, and $E[X_1]=\frac12(-1)+\frac12(1)=0$, $E[X_1^2]=\frac12(1)+\frac12(1)=1$ by [L3]. [given, L3, L4, algebra]

1.2 Enumerating $\overline X=(X_1+X_2)/2$ on the four outcomes gives the values $1,0,0,-1$, each with weight $1/4$; hence $$\mathbb P(\lvert\overline X\rvert\ge1)=\frac{2}{4}=\frac12,\qquad \mathbb P\Bigl(\lvert\overline X\rvert\ge\frac12\Bigr)=\frac{2}{4}=\frac12 .$$ [given, L3, algebra]

2.1 By the enumeration in step 1.2 and the expectation formula [L3], $E[\overline X]=0$ and $E|\overline X|^2=\tfrac14+\tfrac14=\tfrac12=\sigma^2/2$. For any $a>0$, the pointwise inequality $a^2\mathbf1_{\{|\overline X|\ge a\}}\le|\overline X|^2$ and summation with nonnegative weights give $\mathbb P(|\overline X|\ge a)\le E|\overline X|^2/a^2=\sigma^2/(2a^2)$. [step 1.1, step 1.2, L3, algebra]

3.1 At $a=1$ the bound of step 2.1 is $1/2$, equal to the exact probability from step 1.2; at $a=1/2$ it is $2$, strictly larger than the exact probability $1/2$. These establish the displayed finite-sample identity and bounds without requiring an infinite IID extension. [step 1.2, step 2.1, algebra] ∎
