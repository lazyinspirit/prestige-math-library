---
id: ex-cm-math-evidence-chebyshev-sample-mean-check
kind: example
title: "Finite check of the IID sample-mean variance and Chebyshev bound"
status: draft
origin: pipeline
domain: mathematics
deps: [cor-iid-finite-variance-weak-law, def-cm-iid-sampling-model, def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-identically-distributed-and-iid-random-variables, def-independence-of-finite-random-variables, def-moments-variance-and-covariance, def-uniform-finite-probability-space, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]
dependency_roles:
  cor-iid-finite-variance-weak-law: mathematical-premise
  def-cm-iid-sampling-model: mathematical-premise
  def-expectation-on-a-finite-probability-space: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-identically-distributed-and-iid-random-variables: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  def-uniform-finite-probability-space: mathematical-premise
  thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces: mathematical-premise
dependency_level: 1
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
of [[cor-iid-finite-variance-weak-law]] read
$$E\bigl\lvert\overline X\bigr\rvert^2=\frac12=\frac{\sigma^2}{2},\qquad \mathbb P\bigl(\lvert\overline X\rvert\ge1\bigr)=\frac12 =\frac{\sigma^2}{2\cdot1^2},$$
so the bound is attained at $a=1$, while
$$\mathbb P\Bigl(\lvert\overline X\rvert\ge\frac12\Bigr)=\frac12 \le2=\frac{\sigma^2}{2\cdot(1/2)^2}$$
is strict. This is a finite check inside the stated model; it evaluates no
measurement and estimates no physical quantity.

## Facts & Assumptions

**Given:** The uniform finite probability space on $\{-1,1\}^2$ and the coordinate maps $X_1,X_2$ of the Example.

[L1] Let $(X_k)_{k\ge1}$ be IID square-integrable real random variables with $\mu=E[X_1]$ and $\sigma^2=\operatorname{Var}(X_1)$; then for $S_n=\sum_{k=1}^nX_k$ and every $\varepsilon>0$, $E\lvert S_n/n-\mu\rvert^2=\sigma^2/n$ and $\mathbb P(\lvert S_n/n-\mu\rvert\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)$. ([[cor-iid-finite-variance-weak-law]])

[L2] A repeated-observation sampling model is a family of real random variables together with the adopted hypotheses that the family is IID and that $E[Y_0^2]<+\infty$. ([[def-cm-iid-sampling-model]])

[L3] On a finite probability space, expectations are the finite weighted sums of [[def-expectation-on-a-finite-probability-space]], and the finite model agrees with the probability measure $\mathbb P(A)=\sum_{\omega\in A}w(\omega)$, whose expectations coincide with those integral expectations. ([[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]], [[def-finite-probability-space-and-event]])

[L4] A finite family of finite-valued random variables is mutually independent exactly when $\mathbb P(X_j=x_j\text{ for all }j\in J)=\prod_{j\in J}\mathbb P(X_j=x_j)$ for every nonempty $J$ and every choice of values; it is identically distributed when the individual distributions agree. ([[def-independence-of-finite-random-variables]], [[def-identically-distributed-and-iid-random-variables]])

## Verification

**Proof technique:** direct enumeration of four outcomes.

1.1 The four outcomes have weight $1/4$ each, so $\mathbb P(X_1=-1)=\mathbb P(X_1=1)=1/2$ and the same for $X_2$; for every pair $(a,b)\in\{-1,1\}^2$ one has $\mathbb P(X_1=a,X_2=b)=1/4=\mathbb P(X_1=a)\mathbb P(X_2=b)$. By [L4] the family is independent, the two distributions agree, and $E[X_1]=\frac12(-1)+\frac12(1)=0$, $E[X_1^2]=\frac12(1)+\frac12(1)=1$ by [L3]. [given, L3, L4, algebra]

1.2 Enumerating $\overline X=(X_1+X_2)/2$ on the four outcomes gives the values $1,0,0,-1$, each with weight $1/4$; hence $$\mathbb P(\lvert\overline X\rvert\ge1)=\frac{2}{4}=\frac12,\qquad \mathbb P\Bigl(\lvert\overline X\rvert\ge\frac12\Bigr)=\frac{2}{4}=\frac12 .$$ [given, L3, algebra]

2.1 By [L4] and step 1.1 the family $(X_1,X_2)$ satisfies the hypotheses of [L1] with $\mu=0$, $\sigma^2=1$ and $n=2$, so it is a repeated-observation sampling model in the sense of [L2] and $E\lvert\overline X\rvert^2=\sigma^2/2=1/2$. [step 1.1, L1, L2, algebra]

3.1 Substituting $n=2,\mu=0,\sigma^2=1$ into [L1]: the identity gives $E\lvert\overline X\rvert^2=1/2$, and the bound at $\varepsilon=1$ gives $\mathbb P(\lvert\overline X\rvert\ge1)\le1/2$, which by step 1.2 is an equality; at $\varepsilon=1/2$ it gives $\mathbb P(\lvert\overline X\rvert\ge1/2)\le2$, which by step 1.2 is strict. [step 2.1, step 1.2, L1, algebra] ∎
