---
id: thm-it-expurgated-error-exponent-lower-bound
kind: theorem
title: Gallager expurgated exponent lower bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-reliability-function, def-it-gallager-and-expurgated-exponent-functions, def-discrete-memoryless-channel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the codebook and message set are finite at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Derive the pairwise Bhattacharyya bound on ML error and tensorize it across a DMC block.
  - Apply subadditivity for the power 1/rho and expurgate messages with large pairwise sums.
  - State the resulting guarantee as a lower bound, not an exact low-rate formula.
sources:
  references:
    - title: MIT 6.441 Information Theory, Lecture 12, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/107335d1797be9009a90467e27d1fd7a_MIT6_441S10_lec12.pdf
      locator: PDF pp. 2–4; expurgation and low-rate exponent discussion.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.4*"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.4*, printed pp. 432–433; expurgated exponent and its scope.
---

## Statement

For every finite unconstrained DMC and rate $R>0$, the liminf average- and maximal-error exponents satisfy
$$E^-_{\rm av}(R)\ge E_{\rm ex}(R),\qquad E^-_{\rm max}(R)\ge E_{\rm ex}(R),$$
where $E_{\rm ex}$ is defined in [[def-it-gallager-and-expurgated-exponent-functions]]. This is a lower bound; it is not asserted to equal the general reliability function.

## Facts & Assumptions

**Given:** A finite DMC $W$, a rate $R>0$, and the sequence $M_n=\lceil e^{nR}\rceil$.

[F1] [[def-discrete-memoryless-channel]]: for a block input and output, $W^n(y^n\mid x^n)=\prod_iW(y_i\mid x_i)$.

[F2] [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: ML decoding defines a deterministic length-$n$ code, and maximal error is the largest per-message error.

[F3] [[def-it-gallager-and-expurgated-exponent-functions]]: $B(x,x')=\sum_y\sqrt{W(y\mid x)W(y\mid x')}$ and $E_{0x}(\rho,P)=-\rho\ln\sum_{x,x'}P(x)P(x')B(x,x')^{1/\rho}$ for $\rho\ge1$.

## Proof

1.1 For fixed distinct codewords $x^n,x'^n$, if ML decoding chooses the competitor when $x^n$ was sent, then $W^n(y^n\mid x'^n)\ge W^n(y^n\mid x^n)$. On that event $W^n(y^n\mid x^n)\le\sqrt{W^n(y^n\mid x^n)W^n(y^n\mid x'^n)}.$ Summing over outputs and using a union bound over competitors gives message error at most $f_m:=\sum_{j\ne m}B^n(x_m^n,x_j^n)$, where $B^n(x^n,x'^n)=\prod_iB(x_i,x'_i)$. [F1, F2, algebra]

2.1 Draw $M'$ codewords independently from $P^n$. For fixed $m$ and $\rho\ge1$, subadditivity of $t^{1/\rho}$ on nonnegative reals gives; for $r=1/\rho\in(0,1]$, $(a+b)^r\le a^r+b^r$ follows by differentiating $1+t^r-(1+t)^r$ for $t>0$, then scaling and induction handle any finite sum. $\mathbb E f_m^{1/\rho}\le\sum_{j\ne m}\mathbb E B^n(X_m^n,X_j^n)^{1/\rho}=(M'-1)\left(\sum_{x,x'}P(x)P(x')B(x,x')^{1/\rho}\right)^n.$ The last equality follows from independent coordinates and the product form of $B^n$. [F1, F3, step 1.1]

3.1 Averaging [2.1] over messages and codebooks gives a codebook with $M'^{-1}\sum_m f_m^{1/\rho}\le(M'-1)z^n$, where $z=\sum_{x,x'}P(x)P(x')B(x,x')^{1/\rho}$. At least $M'/2$ messages satisfy $f_m^{1/\rho}\le2(M'-1)z^n$; otherwise their sum would exceed $M'(M'-1)z^n$. Restrict the code to $M'/2$ such messages, using ML decoding among the retained words. Removing competitors cannot increase their ML error, so maximal error is at most $[2(M'-1)z^n]^\rho$. [F2, step 2.1]

4.1 Set $M'=2M_n$, retain exactly $M_n$ messages, and take $-n^{-1}\ln$ of the bound in step 3.1. Since $n^{-1}\ln(M'-1)\to R$, this gives $E^-_{\rm max}(R)\ge -\rho\ln z-\rho R=E_{0x}(\rho,P)-\rho R$. Optimizing over $P$ and $\rho\ge1$ proves the maximal-error bound. Average error is no larger than maximal error for the same code, so its liminf exponent satisfies the same lower bound. [F2, F3, step 3.1] ∎
