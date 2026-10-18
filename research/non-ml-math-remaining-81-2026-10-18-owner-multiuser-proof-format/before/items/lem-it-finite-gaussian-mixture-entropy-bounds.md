---
id: lem-it-finite-gaussian-mixture-entropy-bounds
kind: lemma
title: Entropy bounds for finite-power Gaussian convolutions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-real-differential-entropy, def-it-two-user-real-awgn-mac-code, thm-tonelli-theorem-for-sigma-finite-product-spaces]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof uses finite-dimensional densities and the scalar inequality t ln t - t + 1 >= 0.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 8, §8.6
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 4, Gaussian MAC converse
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

Let $X=(X_1,\ldots,X_d)$ be a real random vector with $\mathbb E\|X\|^2<\infty$, and let $Z$ be independent of $X$ with density $(2\pi N)^{-d/2}e^{-\|z\|^2/(2N)}$, $N>0$. Then $Y=X+Z$ has a positive density and finite differential entropy. Each coordinate satisfies $h(Y_k)\le\frac12\ln(2\pi e\,\operatorname{Var}Y_k)$, while $h(Y)\le\sum_kh(Y_k)$ and $h(Y)\ge h(Z)=\frac d2\ln(2\pi eN)$. If a side variable $S$ admits a conditional law $P_{X|S=s}$ with finite second moment almost surely, then each conditional Gaussian convolution has finite entropy and
$$h(Y\mid S)\le\frac12\ln\!\left(2\pi e\left[N+\mathbb E\operatorname{Var}(X\mid S)\right]\right).$$

## Facts & Assumptions

**Given:** A finite-dimensional random vector $X$ with finite second moment and independent Gaussian noise $Z$ of variance $N>0$ per coordinate.

[F1] [[def-it-real-differential-entropy]]: $h(f)=-\int f\ln f$ when the entropy integral is finite; conditional differential entropy is the average over conditional densities.

[F2] [[def-it-two-user-real-awgn-mac-code]]: each noise has Lebesgue density $\phi_N(z)=(2\pi N)^{-1/2}e^{-z^2/(2N)}$.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative measurable function on a sigma-finite product has equal iterated and product integrals.

## Proof

1.1 The convolution $f_Y(y)=\mathbb E[(2\pi N)^{-d/2}e^{-\|y-X\|^2/(2N)}]$ is measurable and strictly positive. Tonelli's theorem [F3] gives integral one. Direct Gaussian integration gives $\mathbb E\|Z\|^2=dN$, hence $\mathbb E\|Y\|^2<\infty$. [given, F2, F3, algebra]

1.2 Choose $K$ with $p_0:=\Pr(\|X\|\le K)>0$, which exists because the increasing union of the finite-radius balls is $\mathbb R^d$. For every $y$, $f_Y(y)\le(2\pi N)^{-d/2}$ and $f_Y(y)\ge p_0(2\pi N)^{-d/2}e^{-(\|y\|+K)^2/(2N)}$. Thus $|\ln f_Y(y)|\le C(1+\|y\|^2)$ for a finite constant $C$; [F1] and step 1.1 give $\int f_Y|\ln f_Y|<\infty$. The same argument applies to every coordinate marginal and, for almost every $s$, to the conditional law $P_{X|S=s}$ using a radius $K_s$ with positive conditional mass. [given, F1, step 1.1, algebra]

2.1 For any coordinate density $f_{Y_k}$, let $\mu=\mathbb E Y_k$, $v=\operatorname{Var}Y_k>0$, and let $\phi_{\mu,v}$ be the matching Gaussian density. The inequality $t\ln t-t+1\ge0$ for $t\ge0$ follows by differentiation and its minimum at $1$; integrating it against $\phi_{\mu,v}$ gives $\int f_{Y_k}\ln(f_{Y_k}/\phi_{\mu,v})\ge0$. Step 1.2 gives integrability of the entropy term, and the second moment gives integrability of the Gaussian log density. Expanding that log density yields $h(Y_k)\le\frac12\ln(2\pi ev)$. [F1, step 1.2, algebra, algebra]

2.2 Apply the same inequality to the ratio of the joint density of $Y$ to the product of its coordinate marginals. Step 1.2 makes every log term integrable, and expansion gives $h(Y)\le\sum_kh(Y_k)$. [F1, step 1.2, algebra, algebra]

2.3 Under the reference law $P_X(dx)f_Y(y)dy$, the ratio of the joint law of $(X,Y)$ to that reference is $\phi_N^{\otimes d}(y-x)/f_Y(y)$. Its mean is one; integrating $t\ln t-t+1\ge0$ against the reference gives a nonnegative integral. The logarithm is integrable by step 1.2 and the finite Gaussian second moment. Expanding it gives $h(Y)-h(Z)\ge0$, and direct integration of $\phi_N$ gives $h(Z)=\frac d2\ln(2\pi eN)$. Steps 1.2 and 2.1–2.2 prove the unconditional claims. [F1, F2, step 1.2, step 2.1, step 2.2, algebra, algebra]

2.4 For almost every $s$, repeat steps 1.1–2.3 with the conditional law $P_{X|S=s}$ to get $h(Y|S=s)\le\frac d2\ln(2\pi e[N+\operatorname{Var}(X|S=s)])$; the same proof establishes finite conditional entropy. Averaging and using concavity of $\ln$ (its second derivative is $-1/t^2<0$) gives the displayed conditional bound. [F1, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, algebra, algebra, algebra] ∎
