---
id: thm-it-stationary-ergodic-rate-distortion-bounded-distortion
kind: theorem
title: "Stationary-ergodic bounded-distortion rate-distortion theorem"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-finite-alphabet-stationary-source
  - def-it-operational-rate-distortion-function
  - def-it-finite-mutual-information
  - def-it-stationary-finite-block-information-rdf
  - lem-it-random-cut-ergodic-block-channel-approximation
  - lem-it-stationary-block-rdf-limit-and-endpoint-continuity
  - cor-ergodic-shannon-mcmillan-breiman
  - thm-stationary-entropy-rate-limit
  - thm-birkhoff-ergodic-theorem
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-markov-data-processing
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used through the random-cut product construction and the stated standard-Borel source suppliers."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 10, §10.6: stationary-source block rate-distortion limit and random-blocking coding argument."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 3, §§3.2–3.4: finite-block converse and stationary-ergodic coding theorem."
---

## Statement

Assume AC. Let $(X_t)_{t\in\mathbb Z}$ be a stationary ergodic finite-alphabet source, let $\widehat{\mathcal X}$ be finite nonempty, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be bounded. With the positive-slack operational definitions of [[def-it-operational-rate-distortion-function]] and the stationary quantities of [[def-it-stationary-finite-block-information-rdf]], for every $D\ge D_{\min}$,
$$
R_{\rm op}^{\rm avg}(D)=R_{\rm op}^{\rm slack}(D)=R_{\rm block}(D)=R_{\rm erg}(D).
$$
All four quantities are $+\infty$ for $D<D_{\min}$. At $D=D_{\min}$, no assertion is made for the stricter exact-threshold requirement $\mathbb P(d_n>D)\to0$.

## Facts & Assumptions

**Given:** AC; a stationary ergodic finite-alphabet source; finite reproduction alphabet; bounded finite nonnegative distortion; and a distortion budget $D\ge0$.

[A1] [[def-axiom-of-choice]]: AC is required by the random-cut product construction and standard-Borel information suppliers.

[F1] [[def-it-operational-rate-distortion-function]]: the two operational rates use deterministic fixed-length codes, normalized log codebook size, expected distortion, and every positive slack in the excess-distortion condition.

[F2] [[def-it-stationary-finite-block-information-rdf]]: $R_n(D)$, $R_{\rm block}(D)$, $R_{\rm erg}(D)$, and $D_{\min}$ have the stated finite-block and stationary-process meanings.

[F3] [[lem-it-stationary-block-rdf-limit-and-endpoint-continuity]]: $R_n(D)\to R_{\rm block}(D)$, which is right-continuous at $D_{\min}$.

[F4] [[lem-it-random-cut-ergodic-block-channel-approximation]]: every rate strictly above $R_{\rm block}(D)$ is achieved by a jointly stationary ergodic pair with mean distortion at most $D$.

[F5] [[cor-ergodic-shannon-mcmillan-breiman]]: for a stationary ergodic finite-alphabet process, normalized block self-information converges almost surely to its entropy rate.

[F6] [[thm-birkhoff-ergodic-theorem]]: time averages of bounded functions of a stationary ergodic pair converge almost surely to their mean.

[F7] [[thm-it-finite-markov-data-processing]] and [[thm-it-finite-entropy-chain-rule]]: finite mutual information obeys data processing, and conditional entropy obeys the chain rule.

[F8] [[thm-stationary-entropy-rate-limit]]: for each stationary finite-alphabet process, normalized block entropies converge to its entropy rate.

[F9] [[def-it-finite-mutual-information]] and [[thm-it-finite-entropy-chain-rule]]: finite-block mutual information is the finite KL sum and, by the chain rule, equals the sum of the source and reproduction entropies minus the joint entropy.

## Proof




**Given:** The hypotheses and suppliers [A1], [F1]–[F9].

1.1 For any source word $x_0^{n-1}$, every reconstruction word satisfies $$ d_n(x_0^{n-1},\hat x_0^{n-1})\ge\frac1n\sum_{i=0}^{n-1}\min_{\hat x}d(x_i,\hat x). $$ The right side has expectation $D_{\min}$ by stationarity. Thus every code has expected distortion at least $D_{\min}$. If $D<D_{\min}$, choose $\epsilon>0$ with $D+\epsilon<D_{\min}$; [F6] makes the right side converge almost surely to $D_{\min}$, so the probability that the code distortion exceeds $D+\epsilon$ tends to one. Both operational criteria are therefore infeasible below $D_{\min}$. By [F2], no stationary coupling with mean distortion below $D_{\min}$ exists either, so $R_{\rm erg}(D)=+\infty$; [F3] gives $R_{\rm block}(D)=+\infty$. [F1, F2, F3, F6, given, algebra]

1.2 Let a deterministic length-$n$ code have $M_n$ messages and reconstruction $\widehat X^n$. Since $X^n\to f_n(X^n)\to\widehat X^n$ is a Markov chain, [F7] gives $I(X^n;\widehat X^n)\le H(f_n(X^n))\le\log_2M_n$. Its induced joint law is feasible in the definition of $R_n(D_n)$, where $D_n=\mathbb E d_n(X^n,\widehat X^n)$, so $R_n(D_n)\le n^{-1}\log_2M_n$. [F1, F2, F7, given, algebra]

1.3 For every jointly stationary ergodic pair feasible at $D$, the finite-block law is feasible in $R_n(D)$, so $R_n(D)\le n^{-1}I(X_0^{n-1};\widehat X_0^{n-1})$. Taking limits and then the infimum over such pairs gives $R_{\rm block}(D)\le R_{\rm erg}(D)$. [F2, F3, given]

2.1 For expected-distortion codes with $\limsup D_n\le D$, eventually $D_n\le D+\epsilon$, giving $R_n(D+\epsilon)\le n^{-1}\log_2M_n$. For a positive-slack excess code, boundedness gives $D_n\le D+\epsilon+d_{\max}\mathbb P(d_n>D+\epsilon)$, so eventually $D_n\le D+2\epsilon$; then $R_n(D+2\epsilon)\le n^{-1}\log_2M_n$. Taking limits and using [F3], followed by right-continuity as $\epsilon\downarrow0$, proves $R_{\rm block}(D)\le R_{\rm op}^{\rm avg}(D)$ and $R_{\rm block}(D)\le R_{\rm op}^{\rm slack}(D)$. [F1, F2, F3, step 1.2, given, algebra]

2.2 Conversely, for any $r>R_{\rm block}(D)$, [F4] supplies a jointly stationary ergodic pair with mean distortion at most $D$ and mutual-information rate less than $r$. Thus $R_{\rm erg}(D)\le r$; letting $r\downarrow R_{\rm block}(D)$ proves $R_{\rm erg}(D)=R_{\rm block}(D)$. [A1, F2, F4, step 1.3, given, algebra]

3.1 Fix a jointly stationary ergodic pair $(X,\widehat X)$ supplied by step 2.2. By [F8], each of the source, reproduction, and joint-pair normalized block entropies has a limit; [F9] therefore gives convergence of $n^{-1}I(X_0^{n-1};\widehat X_0^{n-1})$ to a finite rate $\bar I\le\limsup n^{-1}I(X_0^{n-1};\widehat X_0^{n-1})<r$. By [F5] applied to those three stationary ergodic processes, their normalized negative log probabilities converge almost surely to their entropy rates. Subtracting the three limits shows that the information density $$ i_n(x^n;\hat x^n):=\log_2\frac{P_{\widehat X^n|X^n}(\hat x^n|x^n)}{P_{\widehat X^n}(\hat x^n)} $$ divided by $n$ converges almost surely to $h(X)+h(\widehat X)-h(X,\widehat X)=\bar I$. [F2, F5, F8, F9, step 2.2, given, algebra]

4.1 By [F6], $d_n(X^n,\widehat X^n)\to\bar d:=\mathbb E d(X_0,\widehat X_0)\le D$ almost surely. Fix $\eta>0$ and $\delta>0$. The event $$ G_n:=\{d_n(X^n,\widehat X^n)\le D+\eta,\ i_n(X^n;\widehat X^n)\le n(\bar I+\delta)\} $$ has probability tending to one by step 3.1 and the almost-sure distortion convergence just obtained from [F6]. Hence the set of source words whose conditional probability of this event is at least $1/2$ has source probability tending to one: its complement probability is at most twice $\mathbb P(G_n^c)$. [F1, F6, step 3.1, given, algebra]

5.1 For any such source word $x^n$, on its good reproduction set the likelihood ratio $P_{\widehat X^n|x^n}/P_{\widehat X^n}$ is at most $2^{n(\bar I+\delta)}$. Therefore an independent reproduction word sampled from $P_{\widehat X^n}$ lands in that set with probability at least $\frac12 2^{-n(\bar I+\delta)}$. Draw $M_n=\lceil2^{n(\bar I+2\delta)}\rceil$ independent reproduction words. The probability that none works for this source word is at most $(1-q)^{M_n}\le e^{-M_nq}\le e^{-2^{n\delta}/2}$. Averaging over source words shows the expected failure probability of the random codebook tends to zero. [F1, F2, step 4.1, given, algebra]

6.1 Some deterministic realization of each random codebook has failure probability at most twice its ensemble mean (if the mean is zero, choose a realization with zero failure). Encode a source word by the first codeword satisfying the good conditions, and use a fixed default reproduction if none does. The decoder outputs the selected codeword, so the code is deterministic and has $M_n$ messages. On success its distortion is at most $D+\eta$; on failure it is at most $d_{\max}$. [F1, step 5.1, given, construct]

7.1 To obtain expected distortion at most $D$ in the limit and positive-slack excess distortion, choose a decreasing sequence $\eta_j\downarrow0$. For each $j$, the failure probability in step 6.1 is at most $1/j$ for all sufficiently large $n$; choose increasing thresholds and at each length use the largest such $j=j(n)$ available. Then $j(n)\to\infty$, expected distortion is at most $D+\eta_{j(n)}+d_{\max}/j(n)$, and for every fixed slack $\epsilon>0$, eventually $\eta_{j(n)}<\epsilon$, so $\mathbb P(d_n>D+\epsilon)\le1/j(n)\to0$. The code rate has limsup at most $\bar I+2\delta$. [F1, step 6.1, given, algebra]

8.1 Given any target rate $R_{\rm block}(D)+\epsilon$, choose $r=R_{\rm block}(D)+\epsilon/3$. Step 2.2 gives $\bar I<r$, so choose $\delta>0$ with $\bar I+2\delta<R_{\rm block}(D)+\epsilon$. Steps 5.1–3.5 give both operational criteria at rate below the target. Thus $R_{\rm op}^{\rm avg}(D)\le R_{\rm block}(D)$ and $R_{\rm op}^{\rm slack}(D)\le R_{\rm block}(D)$. Together with steps 2.1 and 2.2 this proves all equalities. The excess criterion used positive slack throughout; it does not imply the unclaimed exact-threshold assertion at $D_{\min}$. [F1, F2, step 2.1, step 2.2, step 5.1, step 6.1, step 7.1, given, algebra] ∎
