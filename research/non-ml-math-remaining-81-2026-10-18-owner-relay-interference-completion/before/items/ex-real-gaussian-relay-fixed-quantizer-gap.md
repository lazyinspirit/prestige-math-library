---
id: ex-real-gaussian-relay-fixed-quantizer-gap
kind: example
title: A two-hop Gaussian relay with a half-bit quantization penalty
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-axiom-of-choice, def-real-gaussian-multicast-relay-network, thm-real-gaussian-multicast-noisy-network-coding-inner-bound, lem-real-vector-gaussian-maximum-differential-entropy]
aliases: []
proof_strategy: direct-computation
axiom_use: AC is inherited through the Gaussian-law and entropy suppliers referenced by the conditional NNC results.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §IV, three-node Gaussian relay example and single-relay NNC specialization, PDF pp. 12–14.
    - title: Thomas M. Cover and Abbas A. El Gamal, Capacity Theorems for the Relay Channel, IEEE Transactions on Information Theory 25(5), 1979
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J003.pdf
      locator: §IV, decode-forward and relay capacity bounds, printed pp. 577–580.
---

## Example

Consider a real three-node relay with unit power and unit noise variance at every node, source-to-relay gain $\sqrt{10}$, relay-to-destination gain $\sqrt{10}$, and zero direct gain. Use independent $X,X_r\sim N(0,1)$, a constant reconstruction at the source, the unquantized destination output, and the fixed relay quantizer $\hat Y_r=Y_r+\hat Z_r$ with independent $\hat Z_r\sim N(0,1)$. The noisy-network-coding rate for this fixed test channel is
$$R_{\rm NNC}=\min\left\{\frac12\log_2 6,\;\frac12\log_2 11-\frac12\right\}=\frac12\log_2 11-\frac12\approx1.2297$$
bits per use. The cut-set value is $\frac12\log_2 11\approx1.7297$, so this fixed quantizer's NNC rate is half a bit below that outer bound.

## Facts & Assumptions

**Given:** The three-node Gaussian relay with the stated gains, power constraints, independent inputs, and fixed quantizer.

[A1] [[def-axiom-of-choice]]: AC is inherited through the continuous Gaussian law used here.

[F1] [[def-real-gaussian-multicast-relay-network]]: the channel is memoryless additive Gaussian with per-node unit power and unit noise variance.

[F2] [[thm-real-gaussian-multicast-noisy-network-coding-inner-bound]]: for a cut $A$ and destination $d$, NNC subtracts $I(Y_A;\hat Y_A|X_{[N]},Y_d,\hat Y_{A^c})$ from $I(X_A;Y_d,\hat Y_{A^c}|X_{A^c})$; constant reconstructions are allowed.

[F3] [[lem-real-vector-gaussian-maximum-differential-entropy]]: Gaussian laws maximize differential entropy at fixed covariance, so the cut mutual informations are bounded by the corresponding Gaussian log expressions.

## Proof

1.1 Under the Gaussian-law convention carried by [A1], choose the independent unit-variance Gaussian inputs and quantizer noise stated in the example. For the cut separating the source alone, the relay sees $\sqrt{10}X+Z_r$, and adding independent unit-variance quantization noise makes total noise variance $2$. Thus the NNC first-cut mutual information is $\frac12\log_2(1+10/2)=\frac12\log_2 6$. The destination has no direct source term, so its observation adds zero information across this cut. [A1, F1, given, algebra]

1.2 For the cut containing source and relay, the destination observes $\sqrt{10}X_r+Z_d$, so $I(X,X_r;Y_d)=\frac12\log_2(1+10)=\frac12\log_2 11$. Given all inputs and $Y_d$, the relay observation noise and independent quantization noise have variances $1$ and $1$, hence $I(Y_r;\hat Y_r|X,X_r,Y_d)=\frac12\log_2(2)=\frac12$. The two NNC cut rates are therefore the values in the minimum in the statement. [F1, F2, given, algebra]

1.3 The first cut is larger because $6>11/2$ (equivalently $12>11$), so the minimum is $\frac12\log_2 11-\frac12$. In the cut-set expression, the source cut is $I(X;Y_r,Y_d|X_r)=I(X;Y_r|X_r)\le\frac12\log_2 11$ and the relay-to-destination cut is $I(X,X_r;Y_d)=I(X_r;Y_d)\le\frac12\log_2 11$, since the direct gain is zero; [F3] gives each Gaussian upper bound. Independent unit-power Gaussian inputs attain both terms, so the cut-set value is $\frac12\log_2 11$. Subtracting gives a gap of exactly $1/2$ bit. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎

## Scope note

This is the rate of the stated fixed quantizer, not the optimized NNC rate. Its numerical evaluation is complete, but achievability still depends on the unproved continuous-alphabet NNC extension flagged in [F2].
