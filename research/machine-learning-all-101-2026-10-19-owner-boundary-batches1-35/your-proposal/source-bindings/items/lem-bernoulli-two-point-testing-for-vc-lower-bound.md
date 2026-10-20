---
id: lem-bernoulli-two-point-testing-for-vc-lower-bound
kind: lemma
title: "A Bernoulli two-point testing lower bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 3 §3.4, Lemma 3.21"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning, Chapter 28 §28.2.1"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

For $0<u<1$, let $P_-$ and $P_+$ be the Bernoulli laws on $\{0,1\}$ with success probabilities $(1-u)/2$ and $(1+u)/2$. For an integer $k\ge1$, a randomized test is a function $\psi:\{0,1\}^k\to[0,1]$, interpreted as the probability of deciding $+$. Its equal-prior average error is
$$e_k(\psi):=\frac12\left(E_{P_-^k}\psi+E_{P_+^k}(1-\psi)\right).$$
For finite probability laws $Q,R$ on a common finite set, define $\operatorname{aff}(Q,R):=\sum_\omega\sqrt{Q(\omega)R(\omega)}$ and $\operatorname{TV}(Q,R):=\frac12\sum_\omega|Q(\omega)-R(\omega)|$. Set
$$\Phi(t,u):=\frac14\left(1-\sqrt{1-\exp\left(-\frac{tu^2}{1-u^2}\right)}\right)\qquad(t\ge0).$$
Then every such test satisfies
$$e_k(\psi)\ge\frac12\left(1-\sqrt{1-(1-u^2)^k}\right)\ge2\Phi(2\lceil k/2\rceil,u).$$
With no observations ($k=0$), every equal-prior test has average error exactly $1/2$.

## Statement references

[Mohri et al., Foundations of Machine Learning, 2nd ed., Lemma 3.21 and Exercise D.3](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1)

[Shalev-Shwartz and Ben-David, an independent two-point testing treatment with different hypotheses and constants, §28.2.1](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf)

## Facts & Assumptions

**Given:** $0<u<1$, the stated Bernoulli laws, and a randomized test $\psi$.

[A1] The sign has prior probability $1/2$ for each value, and $\psi(s)\in[0,1]$ is the conditional probability of deciding $+$ after observing sample $s$.

## Proof

1.1 For any randomized test, its average error is at least $\bigl(1-\operatorname{TV}(P_-^k,P_+^k)\bigr)/2$: writing the two error expectations over the common finite sample space gives $e_k(\psi)=\frac12\left(1-\sum_\omega\psi(\omega)(P_+^k(\omega)-P_-^k(\omega))\right)$. Each $\psi(\omega)\in[0,1]$ makes the signed sum at most the sum of the positive differences; these differences sum to $\frac12\sum_\omega|P_+^k(\omega)-P_-^k(\omega)|$ because their total signed sum is zero. This is $\operatorname{TV}(P_-^k,P_+^k)$ by the definition in the statement. [A1, algebra]

2.1 For any finite laws $Q,R$, write $|Q(\omega)-R(\omega)|=|\sqrt Q-\sqrt R|(\sqrt Q+\sqrt R)$. The finite Cauchy–Schwarz inequality follows by expanding $\sum_i(a_i-\lambda b_i)^2\ge0$ with $\lambda=(\sum_i a_i b_i)/(\sum_i b_i^2)$ when the denominator is positive, and is immediate when it is zero. Apply it to $a_\omega=|\sqrt{Q(\omega)}-\sqrt{R(\omega)}|$ and $b_\omega=\sqrt{Q(\omega)}+\sqrt{R(\omega)}$ to obtain $\operatorname{TV}(Q,R)^2\le\frac14\left(\sum_\omega(\sqrt Q-\sqrt R)^2\right)\left(\sum_\omega(\sqrt Q+\sqrt R)^2\right)=1-\operatorname{aff}(Q,R)^2$. Thus $e_k(\psi)\ge\frac12(1-\sqrt{1-\operatorname{aff}(P_-^k,P_+^k)^2})$. [A1, algebra, step 1.1]

3.1 The single-observation affinity is $2\sqrt{(1-u^2)/4}=\sqrt{1-u^2}$. Finite product distributivity makes the $k$-observation affinity its $k$th power, $(1-u^2)^{k/2}$; substituting gives the first displayed lower bound. [A1, algebra, step 2.1]

4.1 For $0\le x<1$, $g(x)=\log(1-x)+x/(1-x)$ satisfies $g(0)=0$ and $g'(x)=x/(1-x)^2\ge0$, so $(1-u^2)^k\ge\exp(-ku^2/(1-u^2))$. Since $2\lceil k/2\rceil\ge k$, the exponential with exponent $-ku^2/(1-u^2)$ is at least the one with exponent $-2\lceil k/2\rceil u^2/(1-u^2)$. The map $s\mapsto1-\sqrt{1-s}$ is increasing on $[0,1]$, so the first lower bound is at least $2\Phi(2\lceil k/2\rceil,u)$. [A1, algebra, step 3.1]

5.1 With no observations the test's decision distribution is the same under both signs, so its equal-prior error is $\frac12(q+(1-q))=\frac12$ for its probability $q$ of deciding $+$. [A1, algebra] ∎
