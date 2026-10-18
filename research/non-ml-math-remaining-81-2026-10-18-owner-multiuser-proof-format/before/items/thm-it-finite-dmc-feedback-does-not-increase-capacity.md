---
id: thm-it-finite-dmc-feedback-does-not-increase-capacity
kind: theorem
title: Perfect output feedback does not increase finite DMC capacity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-finite-dmc-feedback-code, def-discrete-memoryless-channel-information-capacity, thm-discrete-memoryless-channel-random-coding-achievability, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule, thm-it-fano-inequality]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; finite random coding ensembles and finite output histories suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 7, §7.12
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, Feedback DMC
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

For a finite DMC $W$ without input-cost constraints, the vanishing-average-error capacity with perfect causal output feedback equals its ordinary information capacity
$$C(W)=\max_{P_X}I(P_X;W)$$
from [[def-discrete-memoryless-channel-information-capacity]]. The feedback code convention is [[def-it-finite-dmc-feedback-code]].

## Facts & Assumptions

**Given:** A finite DMC $W$, a finite-message feedback code, and its average error probability $P_e$.

[F1] [[def-it-finite-dmc-feedback-code]]: the encoder at time $i$ is a deterministic function of $(M,Y^{i-1})$, and the channel conditional on inputs is the memoryless product law.

[F2] [[def-discrete-memoryless-channel-information-capacity]]: $C(W)$ is the supremum of $I(P_X;W)$ over all input probability vectors.

[F3] [[thm-discrete-memoryless-channel-random-coding-achievability]]: every rate below $C(W)$ is achievable by ordinary finite DMC codes.

[F4] [[thm-it-fano-inequality]]: for a finite message and finite observation, $H(M\mid Y^n)\le\ln2+P_e\ln M$.

[F5] [[thm-it-finite-entropy-chain-rule]]: finite output entropy obeys the chain rule, and $I(M;Y^n)=\sum_i I(M;Y_i\mid Y^{i-1})$.

[F6] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: finite conditional mutual information is nonnegative, so conditioning cannot increase finite entropy.

[F7] [[def-it-finite-mutual-information]]: finite mutual information is the joint-to-product KL sum in nats.

[F8] [[def-it-finite-conditional-mutual-information]]: finite conditional mutual information averages the conditional finite-law informations over positive-mass conditioning values.

## Proof

1.1 Every no-feedback code is a feedback code whose maps ignore $Y^{i-1}$. By [F3], each rate below $C(W)$ is therefore feedback-achievable, giving $C_{\rm fb}(W)\ge C(W)$. [F1, F3]

2.1 Fix a length-$n$ feedback code with uniform message $M\in[M]$. By [F4], $nR=H(M)\le I(M;Y^n)+\ln2+P_enR$. [F1, F4, algebra]

2.2 Expand the mutual information using [F5] and the conditional-information definition [F8]. Given $(M,Y^{i-1})$, $X_i$ is fixed and the DMC law makes $Y_i$ have law $W(\cdot\mid X_i)$, so $H(Y_i\mid M,Y^{i-1})=H(Y_i\mid X_i)$. Also $H(Y_i\mid Y^{i-1})\le H(Y_i)$ by [F6]. Hence
$$I(M;Y_i\mid Y^{i-1})\le H(Y_i)-H(Y_i\mid X_i)=I(P_{X_i};W)\le C(W)$$
by [F2]; the identity with entropy differences is the finite mutual-information identity [F7]. [F1, F2, F5, F6, F7, F8, step 2.1, algebra]

2.3 Summing step 2.2 in [F5] and substituting into step 2.1 gives $(1-P_e)nR\le nC(W)+\ln2$. Along any reliable sequence, divide by $n$ and let $n\to\infty$ to obtain $C_{\rm fb}(W)\le C(W)$. Combining with step 1.1 proves equality. [F2, F4, F5, step 1.1, step 2.1, step 2.2, algebra] ∎
