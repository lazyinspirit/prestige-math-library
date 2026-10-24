---
id: thm-discrete-memoryless-channel-random-coding-achievability
kind: theorem
title: "Random coding achieves every rate below finite DMC capacity"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-discrete-memoryless-channel-information-capacity, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel-information-density, lem-discrete-memoryless-channel-iid-information-density-converges, def-finite-stochastic-kernel, def-finite-probability-vector]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; every random-code ensemble has finite support."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.4, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

For every finite DMC $W$ and every $0\le R<C(W)$, there are fixed-length codes with $\liminf_{n\to\infty}n^{-1}\ln M_n\ge R$ and average error tending to zero.

## Facts & Assumptions

**Given:** A finite DMC $W$ and a rate $0\le R<C(W)$.

[F1] [[lem-discrete-memoryless-channel-capacity-is-attained]]: some input law $P_X^*$ satisfies $I(P_X^*;W)=C(W)$.

[F2] [[def-discrete-memoryless-channel-information-density]]: the information density is $\ln(W(y\mid x)/Q_{P_X^*}(y))$ on the induced joint support, with its block value the coordinate sum.

[F3] [[lem-discrete-memoryless-channel-iid-information-density-converges]]: under IID input $P_X^*$ and DMC output, the normalized information density converges in probability to $C(W)$.

[F4] [[def-finite-stochastic-kernel]] and [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: each block transition law is a probability vector.

[F5] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: a selected codebook and deterministic decoder define a code and its average error.

## Proof

1.1 If $R=0$, one message gives zero error. Otherwise choose $\delta:=(C(W)-R)/3>0$ and $M_n:=\lfloor e^{nR}\rfloor$. Then $\ln M_n/n\to R$, so for all sufficiently large $n$, $(\ln M_n+n\delta)/n<C(W)-\delta$. By [F3], the probability that the transmitted IID pair fails the threshold $\imath_{P_X^*}(X^n;Y^n)>\ln M_n+n\delta$ tends to zero. [F1, F3, given, choose]

2.1 Draw $M_n$ codewords independently from $P_X^{*\,n}$. Decode to the unique codeword with information density greater than $\ln M_n+n\delta$, using a fixed default output if there is not exactly one. Conditional on the transmitted message, an error is contained in the union of the true-codeword miss event from step 1.1 and the event that some independent competing word passes the threshold. For one competitor $X'^n\sim P_X^{*\,n}$ independent of $Y^n\sim Q_{P_X^*}^{\,n}$, [F2] gives $\mathbb E e^{\imath_{P_X^*}(X'^n;Y^n)}=\sum_{x^n}P_X^{*\,n}(x^n)\sum_{y^n:Q_{P_X^*}^{\,n}(y^n)>0}W^n(y^n\mid x^n)=1$ by [F4], since every output reachable from a positive-probability input has positive $Q_{P_X^*}$ mass. On a false pass, the nonnegative variable $Z=e^{\imath_{P_X^*}(X'^n;Y^n)}$ exceeds $e^{\ln M_n+n\delta}$, so $1=\mathbb E Z\ge e^{\ln M_n+n\delta}\Pr[Z>e^{\ln M_n+n\delta}]$, and the false-pass probability is at most $e^{-\ln M_n-n\delta}$. A union bound over at most $M_n-1$ competitors makes this term at most $e^{-n\delta}$. [F2, F4, step 1.1, algebra]

3.1 The ensemble-averaged average error is at most the miss probability plus $e^{-n\delta}$, so it tends to zero by step 1.1 and step 2.1. The ensemble has finite support; therefore at each $n$ some deterministic codebook has average error no greater than the ensemble mean. Its rate tends to $R$, proving the claim. [F5, step 1.1, step 2.1, choose] ∎
