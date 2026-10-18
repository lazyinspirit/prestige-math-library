---
id: lem-it-stationary-block-rdf-limit-and-endpoint-continuity
kind: lemma
title: "Stationary block rate-distortion limit and endpoint continuity"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-mutual-information
  - def-it-stationary-finite-block-information-rdf
  - thm-it-information-unit-conversion
  - lem-finite-block-entropy-chain-rule
  - lem-it-finite-log-sum-inequality
  - lem-it-finite-rate-distortion-minimum-attained
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-markov-data-processing
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; each block optimization is finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 10, §10.6: subadditive block rate-distortion quantities and the block limit."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 3, §3.4 and Chapter 4, §4.1: stationary block coding and finite-alphabet rate-distortion."
---

## Statement

For a stationary finite-alphabet source and bounded additive distortion as in [[def-it-stationary-finite-block-information-rdf]], the sequence \(R_n(D)\) has a limit for every feasible \(D\), and
\[
\lim_{n\to\infty}R_n(D)=\inf_{n\ge1}R_n(D)=R_{\rm block}(D).
\]
The function \(R_{\rm block}\) is nonincreasing and convex on \([D_{\min},\infty)\), is zero for \(D\ge D_{\rm c}\), and is right-continuous at \(D_{\min}\). It is infinite below \(D_{\min}\).

## Facts & Assumptions

**Given:** A stationary process on a finite nonempty source alphabet, a finite nonempty reproduction alphabet, and bounded finite nonnegative distortion.

[F1] [[def-it-stationary-finite-block-information-rdf]]: \(nR_n(D)\) is the minimum block mutual information in bits subject to normalized additive distortion; \(D_{\min}\) is the pointwise minimum mean distortion and \(D_{\rm c}\) is the best constant-reproduction distortion.

[F2] [[def-it-finite-mutual-information]] and [[thm-it-information-unit-conversion]]: finite mutual information is a finite KL sum and bits equal nats divided by \(\ln2\).

[F3] [[lem-finite-block-entropy-chain-rule]] and [[thm-it-finite-entropy-chain-rule]]: finite entropy is subadditive and the chain rule holds.

[F4] [[lem-it-finite-log-sum-inequality]]: finite log-sum gives convexity of mutual information in a channel for fixed input law.

[F5] [[lem-it-finite-rate-distortion-minimum-attained]]: every feasible finite block channel minimum is attained.

[F6] [[thm-it-finite-markov-data-processing]]: finite information cannot increase under deterministic postprocessing.

## Proof

1.1 Write \(a_n(D)=nR_n(D)\), and choose minimizing channels for blocks of lengths \(m\) and \(n\), available by [F5]. Use their conditional product as a channel on the concatenated block. Stationarity gives the same marginal laws for the second block as for a block of length \(n\); each part has mean distortion at most \(D\), so the concatenated normalized distortion is at most \(D\). [F1, F5, given, construct]

1.2 Let \((X_1,Y_1)\) and \((X_2,Y_2)\) denote the two source/output block pairs under that channel. Conditional independence of the two channel outputs given the full source block gives \(H(Y_1,Y_2\mid X_1,X_2)=H(Y_1\mid X_1)+H(Y_2\mid X_2)\). Entropy subadditivity gives \(H(Y_1,Y_2)\le H(Y_1)+H(Y_2)\). Subtracting these finite quantities and using [F3] yields \(I(X_1,X_2;Y_1,Y_2)\le I(X_1;Y_1)+I(X_2;Y_2)\), so \(a_{m+n}(D)\le a_m(D)+a_n(D)\). The source blocks need not be independent. [F2, F3, step 1.1, algebra]

1.3 Fix \(k\ge1\), write \(n=qk+r\) with \(0\le r<k\), and put \(a_0=0\). Repeated subadditivity gives \(a_n\le qa_k+a_r\). The finite set \(\{a_r:0\le r<k\}\) is bounded, so \(\limsup_n a_n/n\le a_k/k\). Taking the infimum over \(k\), while \(\inf_k a_k/k\le\liminf_n a_n/n\), proves \(a_n/n\to\inf_k a_k/k\). [step 1.2, algebra]

2.1 For each fixed \(n\), the feasible block-channel sets are nested as \(D\) increases, so \(R_n(D)\) is nonincreasing. Mixing two block channels and applying [F4] shows \(R_n\) is convex. Passing to the pointwise limit from step 1.3 preserves both monotonicity and the convexity inequality. [F1, F4, step 1.3]

2.2 A best constant reconstruction has normalized expected distortion \(D_{\rm c}\) and zero mutual information for every block; nonnegativity of finite KL gives \(R_n(D)=0\) for \(D\ge D_{\rm c}\). If \(D<D_{\min}\), every coordinate distortion is at least its pointwise minimum, so no block channel is feasible and each \(R_n(D)=+\infty\). [F1, F2, given, algebra]

3.1 Suppose \(D_{\rm c}>D_{\min}\), and let \(\gamma\) be the smallest positive value among the finite gaps \(d(x,\hat x)-\min_zd(x,z)\); thus \(\gamma>0\). Fix \(0<\epsilon<\gamma/2\). Since \(D_{\min}+\epsilon\) is feasible, [F5] supplies a minimizing length-\(n\) channel at that distortion budget. Let \(S_i=1\) when its chosen reproduction has positive gap from the pointwise minimum, and let \(\alpha=n^{-1}\sum_i\mathbb P(S_i=1)\). The excess above the block minimum is at least \(\gamma\sum_i S_i/n\), so \(\alpha\le\epsilon/\gamma\). [F1, F5, given, algebra]

3.2 Keep the selected channel's original reproduction at coordinates with \(S_i=0\), and replace coordinates with \(S_i=1\) by a pointwise minimizing symbol for the observed source letter; call the resulting reproduction \(\widehat X'^n\). Its distortion is exactly \(D_{\min}\) coordinatewise. The original output, flags, and correction symbols determine \(\widehat X'^n\), so [F6] and the chain rule/entropy bounds give
\[
I(X^n;\widehat X'^n)\le I(X^n;\widehat X^n)+H(S^n)+\sum_i\mathbb P(S_i=1)\log_2|\widehat{\mathcal X}|.
\]
By entropy subadditivity and concavity of binary entropy, \(H(S^n)\le n h_2(\alpha)\). Thus \(R_n(D_{\min})\le R_n(D_{\min}+\epsilon)+h_2(\epsilon/\gamma)+(\epsilon/\gamma)\log_2|\widehat{\mathcal X}|\), since \(h_2\) is increasing on \([0,1/2]\). [F1, F3, F6, step 3.1, algebra, construct]

3.3 Taking infima over \(n\) in step 3.2 gives the same inequality for \(R_{\rm block}\). The two error terms tend to zero as \(\epsilon\downarrow0\); monotonicity from step 2.1 gives the reverse bound \(R_{\rm block}(D_{\min}+\epsilon)\le R_{\rm block}(D_{\min})\), proving right-continuity. If \(D_{\rm c}=D_{\min}\), step 2.2 already gives zero on the entire feasible interval. [step 2.1, step 2.2, step 3.2, algebra] ∎
