---
id: lem-it-rate-distortion-convexity-and-monotonicity
kind: lemma
title: "Convexity, monotonicity, and continuity of finite rate-distortion"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-finite-mutual-information
  - def-it-information-rate-distortion-function
  - lem-it-finite-log-sum-inequality
  - lem-it-finite-rate-distortion-minimum-attained
  - thm-heine-borel-rn
  - thm-it-finite-kl-nonnegative-equality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses finite probability vectors and channels."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 4, §4.1, printed pp. 80–86: convexity and monotonicity of finite-alphabet rate-distortion."
    - title: "MIT OpenCourseWare 6.441, Chapter 23: Rate-distortion theory"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf"
      locator: "§23.2, convexity of R(D) and finite-alphabet formulation, PDF pp. 7–9."
---

## Statement

Let the source and reproduction alphabets be finite nonempty sets and let the distortion be finite-valued and nonnegative. The finite-alphabet information rate-distortion function \(R(D)\) of [[def-it-information-rate-distortion-function]] is finite and nonincreasing on \([D_{\min},\infty)\), convex there, zero for \(D\ge D_{\rm c}:=\min_{\hat x}\mathbb E d(X,\hat x)\), and right-continuous at every feasible distortion, including \(D_{\min}\).

## Facts & Assumptions

**Given:** A finite source pmf, finite nonempty reproduction alphabet, and finite nonnegative distortion.

[F1] [[def-it-information-rate-distortion-function]]: \(R(D)\) minimizes finite mutual information over channels meeting the mean-distortion constraint and is \(+\infty\) when infeasible.

[F2] [[lem-it-finite-rate-distortion-minimum-attained]]: feasibility is equivalent to \(D\ge D_{\min}\), and every feasible minimum is attained on a finite channel simplex.

[F3] [[lem-it-finite-log-sum-inequality]]: the finite log-sum inequality applies to nonnegative finite arrays, with zero terms interpreted by continuity.

[F4] [[def-it-finite-mutual-information]]: mutual information is the finite joint-KL sum; it is finite for finite alphabets.

[F5] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative.

[F6] [[thm-heine-borel-rn]]: closed bounded subsets of a finite-dimensional Euclidean space are compact.

## Proof

1.1 Feasibility at every \(D\ge D_{\min}\) and attainment are given by [F2], so \(R(D)\) is finite there; [F5] gives \(R(D)\ge0\). If \(D_2\ge D_1\), every channel feasible at \(D_1\) is feasible at \(D_2\), so the infimum cannot increase. [F1, F2, F5, given]

1.2 The constant channel outputting a minimizer of \(\mathbb E d(X,\hat x)\) has distortion \(D_{\rm c}\) and zero mutual information. For \(D\ge D_{\rm c}\), this channel is feasible, so [F5] gives \(R(D)=0\). [F1, F5, step 1.1, given]

2.1 Fix \(D_0,D_1\ge D_{\min}\), \(t\in[0,1]\), and channels \(W_0,W_1\) feasible at those budgets. Set \(W=tW_0+(1-t)W_1\); its distortion is at most \(tD_0+(1-t)D_1\). For each \((x,\hat x)\), apply [F3] to the two joint-mass terms \(t p(x)W_0(\hat x|x),(1-t)p(x)W_1(\hat x|x)\) and corresponding product-marginal terms \(t p(x)q_0(\hat x),(1-t)p(x)q_1(\hat x)\), then sum over \((x,\hat x)\). The resulting inequality is \(I_W(X;\hat X)\le tI_{W_0}(X;\hat X)+(1-t)I_{W_1}(X;\hat X)\), in nats and therefore also in bits. [F1, F3, F4, given, algebra]

2.2 Choose minimizing channels at \(D_0,D_1\) by [F2] and use their mixture from step 2.1. The mixture is feasible at \(tD_0+(1-t)D_1\) and has rate at most \(tR(D_0)+(1-t)R(D_1)\); taking the infimum proves convexity. [F1, F2, step 2.1, algebra]

3.1 Fix feasible \(D\) and any sequence \(D_k\downarrow D\). The values \(R(D_k)\) increase to a finite limit \(L\le R(D)\) by step 1.1. Choose a minimizing channel \(W_k\) at each \(D_k\). The finite channel simplex is a closed bounded subset of finite-dimensional Euclidean space, hence compact by [F6]; a subsequence converges to a channel \(W_\infty\). Distortion is a finite linear function of channel entries, hence \(W_\infty\) is feasible at \(D\). Mutual information is continuous on the finite channel simplex by the entropy formula and continuity of \(-u\ln u\) at zero, so along this subsequence \(I(W_k)\to I(W_\infty)\ge R(D)\). Since the same subsequence of values converges to \(L\), we obtain \(L\ge R(D)\), proving right-continuity. [F1, F2, F6, step 1.1, given, algebra]

3.2 Steps 1.1–3.1 prove every assertion, including the degenerate case \(D_{\rm c}=D_{\min}\), where the constant channel already gives zero on the entire feasible interval. [step 1.1, step 1.2, step 2.2, step 3.1] ∎
