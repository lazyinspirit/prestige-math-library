---
id: thm-it-cover-leung-feedback-mac-inner-bound
kind: theorem
title: Cover-Leung inner bound for the two-user DM-MAC with feedback
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-two-user-discrete-memoryless-mac, def-it-two-user-discrete-memoryless-mac-feedback-code, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; finite codebooks are selected from finite ensembles and all maps are deterministic after selection.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: T. M. Cover and C. S. K. Leung, An Achievable Rate Region for the Multiple Access Channel with Feedback, IEEE Transactions on Information Theory 27 (1981), 292–298
      url: https://isl.stanford.edu/~cover/papers/transIT/0292cove.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 18, Cover–Leung Inner Bound
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

For each finite law $P_UP_{X_1|U}P_{X_2|U}W_{Y|X_1X_2}$, let $\mathcal R(P)$ be the set of nonnegative rate pairs satisfying
$$R_1\le I(X_1;Y\mid X_2,U),\qquad R_2\le I(X_2;Y\mid X_1,U),\qquad R_1+R_2\le I(X_1,X_2;Y).$$
For the two-user finite DM-MAC with perfect causal output feedback in [[def-it-two-user-discrete-memoryless-mac-feedback-code]], every rate pair in the closure of the union of these sets over all such finite laws is achievable. This is an inner bound; no general feedback-capacity equality is asserted.

## Facts & Assumptions

**Given:** A finite DM-MAC, independent private messages, separate causal encoders observing common noiseless $Y^{i-1}$, a joint decoder and average joint error.

[F1] [[def-it-two-user-discrete-memoryless-mac-feedback-code]]: encoder $j$ uses only $(M_j,Y^{i-1})$ and the common decoder estimates the independent private-message pair.

[F2] [[def-it-two-user-discrete-memoryless-mac]]: conditional on the input symbols, the output law is the memoryless kernel $W(y\mid x_1,x_2)$.

[F3] [[def-it-finite-conditional-mutual-information]]: $I(A;B\mid C)$ is a finite average of conditional mutual informations in nats.

[F4] [[def-it-finite-mutual-information]]: $I(A;B)$ is the finite mutual information of the joint law.

## Proof

1.1 Fix a finite law $P_UP_{X_1|U}P_{X_2|U}$. Use $b$ blocks of length $n$ and $b-1$ independent message chunks $M_{1j},M_{2j}$, $1\le j<b$, with sizes $\lceil e^{nR_1}\rceil,\lceil e^{nR_2}\rceil$; set $M_{10}=M_{1b}=M_{2b}=1$. In each block independently generate clouds $u^n(\ell)\sim P_U^n$ for $\ell\in[M_2]$, and, conditionally on every cloud, independent satellite words $x_1^n(m_1,\ell)$ and $x_2^n(m_2,\ell)$ with coordinate laws $P_{X_1|U}$ and $P_{X_2|U}$. [given, F1, choose, construct]

2.1 In block $j$, sender 2 sends $x_2^n(M_{2j},M_{2,j-1})$. Sender 1 sends $x_1^n(M_{1j},\widetilde M_{2,j-1})$, where it sets $\widetilde M_{20}=1$ and after block $j-1$ estimates $M_{2,j-1}$ from its own $M_{1,j-1}$, its already known previous state, and the feedback output of that block. If $R_2=0$, the $M_2$ chunks are singletons and sender 1 sets $\widetilde M_{2,j-1}=1$ without a test. If $R_2>0$, then $I(X_2;Y\mid X_1,U)>0$; choose $R_2<\tau_2<I(X_2;Y\mid X_1,U)$ and test each candidate $m_2$ using $$\imath_2=\sum_i\ln\frac{W(Y_i\mid X_{1i},X_{2i})}{P_{Y|X_1,U}(Y_i\mid X_{1i},U_i)},$$ with a summand defined as $-\infty$ whenever its numerator is zero. Set $\widetilde M_{2,j-1}$ to the unique candidate with $\imath_2>n\tau_2$, or to the fixed default $1$ if zero or multiple candidates pass. [F1, F2, F3, step 1.1, choose]

2.2 The receiver decodes backward. In the last block it knows the dummy current message $M_{2b}=1$ and searches for the preceding state $M_{2,b-1}$; in each earlier block $j$, it knows $M_{2j}$ from the already decoded next block and searches for the unique pair $(M_{1j},M_{2,j-1})$. It uses a single test for each positive-rate error class: the user-1 test is $$\sum_i\ln\frac{W(Y_i\mid X_{1i},X_{2i})}{P_{Y|X_2,U}(Y_i\mid X_{2i},U_i)}>n\tau_1,$$ and the pair/state test is $$\sum_i\ln\frac{W(Y_i\mid X_{1i},X_{2i})}{P_Y(Y_i)}>n\tau_\Sigma.$$ A test for a zero-rate user is omitted because its message set is a singleton; if both rates are zero, there is only one message pair. A summand with zero numerator is $-\infty$, and the decoder returns the sole candidate passing all retained tests, or the fixed default $1$ or $(1,1)$ if zero or multiple candidates pass. Choose $R_1<\tau_1<I(X_1;Y\mid X_2,U)$ when $R_1>0$ and $R_1+R_2<\tau_\Sigma<I(X_1,X_2;Y)$ when $R_1+R_2>0$. The latter is the mean of the second test because $Y$ is conditionally independent of $U$ given $(X_1,X_2)$. [F2, F3, F4, step 1.1, choose]

3.1 For fixed $b$ and $R_2>0$, the true $\imath_2/n$ in each data block converges in probability to $I(X_2;Y\mid X_1,U)$ by the weak law for IID finite-valued information-density terms. A wrong $X_2$ satellite is independent of the output conditional on the known $(U,X_1)$, and its likelihood ratio in step 2.1 has expectation one. Markov's inequality and the union bound over $e^{nR_2+o(n)}$ candidates show sender 1 decodes each $M_{2j}$ correctly with probability tending to one. If $R_2=0$, there is no sender-decoding error because every $M_2$ chunk is fixed. [F2, F3, step 2.1, algebra, algebra]

3.2 For the true tuple, each retained receiver information density converges in probability to its mean. When $R_1>0$, a wrong satellite with the true cloud has likelihood-ratio expectation one under the conditional product law and is bounded by $e^{-n\tau_1}$; there are at most $e^{nR_1+o(n)}$ such candidates. When $R_1+R_2>0$, a wrong preceding state or message pair changes the cloud and both satellite codebook groups; each candidate is independent of the output and has product law $P_UP_{X_1|U}P_{X_2|U}$, so the second likelihood ratio has expectation one and threshold probability at most $e^{-n\tau_\Sigma}$. There are at most $e^{n(R_1+R_2)+o(n)}$ such candidates. The strict gaps make all extant error classes vanish; absent zero-rate candidate classes require no test. In the terminal dummy block, the preceding state has $e^{nR_2+o(n)}$ candidates when $R_2>0$, and is fixed when $R_2=0$. [F2, F3, F4, step 2.2, algebra, algebra]

4.1 With $b$ fixed, the finitely many sender-decoding and receiver backward-decoding errors vanish as $n\to\infty$ by steps 3.1 and 3.2; blockwise dependence causes no issue because a union bound is used and a correct prior decode makes the next encoder state correct. The random codebook ensemble is finite, so one deterministic codebook has no greater average error than its ensemble mean. The achieved rates are $(b-1)R_j/b$. [F1, step 3.1, step 3.2, choose, algebra]

5.1 Letting $b\to\infty$ after the blocklength limit makes $(b-1)R_j/b\to R_j$. A diagonal sequence of blocklengths gives vanishing error and rates tending to each strict pair; a zero-rate coordinate uses a singleton message and omits its tests. For each fixed law, scaling the positive coordinates of a point in $\mathcal R(P)$ by $1-\varepsilon$ gives strict gaps for every nonempty error class, and the origin is achieved with one message pair. Letting $\varepsilon\downarrow0$ and taking the union over laws proves the stated closed inner bound. Only sender 1's causal estimate from the shared output is used, which is permitted by [F1]. [F1, step 4.1, algebra] ∎

