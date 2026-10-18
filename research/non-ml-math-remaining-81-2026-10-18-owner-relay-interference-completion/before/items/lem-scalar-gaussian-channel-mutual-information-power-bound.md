---
id: lem-scalar-gaussian-channel-mutual-information-power-bound
kind: lemma
title: Power bound for real and complex scalar Gaussian channels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-axiom-of-choice, def-measure-theoretic-mutual-information, def-it-real-differential-entropy, lem-bounded-density-finite-second-moment-has-finite-differential-entropy, lem-real-vector-gaussian-maximum-differential-entropy, lem-complex-scalar-gaussian-maximum-differential-entropy]
aliases: []
proof_strategy: density-identity-and-maximum-entropy
axiom_use: AC is inherited through the Gaussian maximum-entropy and measure-theoretic mutual-information suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 2, §2.3, Theorem 2.8, Gaussian maximum entropy at fixed covariance.
    - title: John Duchi, Lecture Notes on Statistics and Information Theory
      url: https://web.stanford.edu/class/stats311/lecture-notes.pdf
      locator: Chapter 2, §2.1.2, Proposition 2.1.8, printed pp. 16–17, Gaussian maximum entropy at fixed covariance.
---

## Statement

Assume AC. Let $X$ be real or complex with finite second moment, let $Z$ be independent unit-variance Gaussian noise, and let $Y=aX+Z$. In the real case take $Z\sim N(0,1)$ and $a\in\mathbb R$; in the complex case take $Z\sim\mathcal{CN}(0,1)$ with density $\pi^{-1}e^{-|z|^2}$ and $a\in\mathbb C$. Put $v=\mathbb E|X-\mathbb EX|^2$ and $\kappa=1/2$ in the real case, $\kappa=1$ in the complex case. Then
$$I(X;Y)\le\kappa\ln(1+|a|^2v)\le\kappa\ln(1+|a|^2\mathbb E|X|^2)$$
in nats; division by $\ln2$ gives the corresponding bit formula.
Equality in the first inequality holds when $X$ is Gaussian in the real case or circular complex Gaussian in the complex case, including the zero-variance case.

## Facts & Assumptions

**Given:** AC, an input law with finite second moment, independent unit-variance Gaussian noise of the stated type, and the scalar channel $Y=aX+Z$.

[A1] [[def-axiom-of-choice]]: AC is inherited from the real and complex Gaussian entropy bounds and the measure-theoretic information definition.

[F1] [[def-measure-theoretic-mutual-information]]: $I(X;Y)$ is the KL divergence from the joint law to the product of its marginals.

[F2] [[def-it-real-differential-entropy]]: when $Y$ has a density with absolutely integrable $f_Y\ln f_Y$, $h(Y)=-\int f_Y\ln f_Y$.

[F3] [[lem-real-vector-gaussian-maximum-differential-entropy]]: for real $Y$, $h(Y)\le\frac12\ln(2\pi e\operatorname{Var}Y)$.

[F4] [[lem-complex-scalar-gaussian-maximum-differential-entropy]]: for complex $Y$, $h(Y)\le\ln(\pi e\mathbb E|Y-\mathbb EY|^2)$.

[F5] [[lem-bounded-density-finite-second-moment-has-finite-differential-entropy]]: a bounded density with finite second moment has absolutely integrable $f\ln f$.

## Proof

1.1 The output density is the convolution $f_Y(y)=\int g_Z(y-ax)P_X(dx)$, so $0<f_Y\le\|g_Z\|_\infty<\infty$, and $Y$ has finite second moment. By [F5], $\int f_Y|\ln f_Y|<\infty$, so [F2] defines a finite differential entropy $h(Y)$. [F2, F5, given, algebra]

1.2 The positive Gaussian noise density makes $f_Y(y)>0$. Relative to $P_X(dx)f_Y(y)dy$, the joint law of $(X,Y)$ has density $g_Z(y-ax)/f_Y(y)$. By [F1],
$$I(X;Y)=\int P_X(dx)\int g_Z(y-ax)\ln\frac{g_Z(y-ax)}{f_Y(y)}dy=h(Y)-h(Z).$$
The two logarithmic integrals are finite by step 1.1 and the Gaussian density formula, so this identity involves no subtraction of infinite quantities. [A1, F1, F2, step 1.1, algebra]

1.3 Independence gives $\operatorname{Var}(Y)=1+|a|^2v$. Apply [F3] and the real Gaussian noise entropy in the real case, or [F4] and $h(Z)=\ln(\pi e)$ in the complex case. Step 1.2 then yields $I(X;Y)\le\kappa\ln(1+|a|^2v)$ nats. Since $v\le\mathbb E|X|^2$, division by $\ln2$ gives the corresponding bit bound. For the stated Gaussian inputs, the output is Gaussian of the same real or circular complex type and attains the matching maximum-entropy equality. [F3, F4, step 1.2, given, algebra] ∎
