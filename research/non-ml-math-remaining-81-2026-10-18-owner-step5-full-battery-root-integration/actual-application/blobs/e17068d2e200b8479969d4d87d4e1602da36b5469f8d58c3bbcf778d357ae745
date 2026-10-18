---
id: thm-it-one-shot-decision-threshold-achievability
kind: theorem
title: Finite-DMC dependence-testing achievability bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-discrete-memoryless-channel-information-density, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-finite-probability-vector]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the codebook ensemble and alphabets are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Use the strict-threshold decoder with a fixed tie rule and derive the average false-alarm term.
  - Convert the threshold expression to the dependence-testing expectation, retaining its exact factor one half.
  - State that the conclusion controls ensemble-average error only.
sources:
  references:
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: "Theorem 17 and its proof, PDF pp. 15–16; dependence-testing achievability expression."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 18 §18.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 18, §18.3; finite-blocklength threshold and dependence-testing bounds.
---

## Statement

Let $W^n$ be the block channel of a finite DMC, let $P_{X^n}$ be any input law, and let $M\ge2$. Define the charged information density $\imath(x^n;y^n)=\ln[W^n(y^n\mid x^n)/(P_{X^n}W^n)(y^n)]$ on the support of $P_{X^n}W^n$. There is a deterministic length-$n$ code with $M$ messages and average error at most
$$\mathbb E\exp\left(-\left[\imath(X^n;Y^n)-\ln\frac{M-1}{2}\right]_+\right),$$
where $(X^n,Y^n)\sim P_{X^n}W^n$. For $M=1$, a zero-error code exists. The conclusion is an average-error bound and does not by itself bound every message's error.

## Facts & Assumptions

**Given:** A finite DMC, its product block kernel $W^n$, an input law $P_{X^n}$, and an integer $M\ge2$.

[F1] [[def-discrete-memoryless-channel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: the block law is $W^n(y^n\mid x^n)=\prod_iW(y_i\mid x_i)$ and is a stochastic kernel.

[F2] [[def-discrete-memoryless-channel-information-density]]: information density is the natural-log likelihood ratio between the channel output law given the input and the output marginal, evaluated on charged support.

[F3] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: a code has a deterministic encoder and decoder, and its average error is the uniform-message average of its message errors.

## Proof

1.1 Draw codewords $X^n(1),\ldots,X^n(M)$ independently from $P_{X^n}$. Put $Q=P_{X^n}W^n$ and $\tau=\ln((M-1)/2)$. For decoder tests extend $\imath(x^n;y^n)$ to $-\infty$ whenever $P_{X^n}(x^n)W^n(y^n\mid x^n)=0$; on its positive support $Q(y^n)>0$, so the stated logarithm is finite. The decoder selects the lowest index $j$ for which $\imath(X^n(j);y^n)>\tau$; if no index passes, it outputs message $1$. This defines a deterministic code decoder for each realized codebook. [F1, F2, F3, given, construct]

2.1 If message $j$ is sent, an error can occur only if its own test fails or an earlier codeword passes. Thus its conditional error is at most $\Pr[\imath(X^n(j);Y^n)\le\tau\mid X^n(j)]+\sum_{k<j}\Pr[\imath(X^n(k);Y^n)>\tau\mid X^n(j)].$ The first probability averaged over the true codeword and output is $\Pr_{P_{X^n}W^n}[\imath\le\tau]$. Each earlier independent codeword and the true output have law $P_{X^n}\otimes Q$, so its averaged term is $\Pr_{P_{X^n}\otimes Q}[\imath>\tau]$. [F1, F2, step 1.1]

3.1 Averaging over the uniform message index gives ensemble-average error at most $\Pr_{P_{X^n}W^n}[\imath\le\tau]+\frac{M-1}{2}\Pr_{P_{X^n}\otimes Q}[\imath>\tau],$ because $M^{-1}\sum_{j=1}^M(j-1)=(M-1)/2$. On the event $\imath>\tau$, the likelihood ratio identity gives $\Pr_{P\otimes Q}[\imath>\tau]=\mathbb E_{PW}[e^{-\imath}\mathbf1_{\{\imath>\tau\}}]$. Therefore this bound equals $\mathbb E_{PW}[e^{-(\imath-\tau)_+}]$. [F2, step 2.1, algebra]

4.1 The finite random codebook ensemble has some realization whose average error is no larger than its expectation; otherwise every realization would exceed the ensemble average. With $\tau=\ln((M-1)/2)$, this realization proves the stated bound. A one-message code has no decoding error. [F3, step 3.1, choose] ∎
