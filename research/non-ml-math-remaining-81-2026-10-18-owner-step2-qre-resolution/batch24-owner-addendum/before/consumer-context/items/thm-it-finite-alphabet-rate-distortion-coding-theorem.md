---
id: thm-it-finite-alphabet-rate-distortion-coding-theorem
kind: theorem
title: "Finite-alphabet memoryless rate-distortion coding theorem"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-mutual-information
  - def-it-information-rate-distortion-function
  - def-it-operational-rate-distortion-function
  - lem-it-finite-rate-distortion-minimum-attained
  - lem-it-rate-distortion-convexity-and-monotonicity
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-finite-markov-data-processing
  - cor-iid-finite-variance-weak-law
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all random variables in the coding argument have finite alphabets."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "MIT OpenCourseWare 6.441, Chapter 24: Rate-distortion achievability bounds"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/aaa8d18ddecde45f97134d3f3dcee4a3_MIT6_441S16_chapter_24.pdf"
      locator: "§24.2.2, Theorem 24.2 proof; Theorems 24.3–24.4 and their random-code bounds, PDF pp. 2–10 / printed pp. 247–254."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "Chapter 3, §§3.2–3.3: finite-block converse and random-coding achievability."
---

## Statement

Let $(X_i)_{i\ge0}$ be iid with a pmf on a finite nonempty alphabet $\mathcal X$, let $\widehat{\mathcal X}$ be finite nonempty, and let $d:\mathcal X\times\widehat{\mathcal X}\to[0,d_{\max}]$ be finite nonnegative distortion. For every $D\ge0$, the expected-distortion and positive-slack excess-distortion operational rates of [[def-it-operational-rate-distortion-function]] both equal the finite information rate-distortion function of [[def-it-information-rate-distortion-function]], with value $+\infty$ when $D<D_{\min}$.

## Facts & Assumptions

**Given:** An iid finite-alphabet source, finite reproduction alphabet, bounded finite nonnegative distortion, and budget $D\ge0$.

[F1] [[def-it-information-rate-distortion-function]]: $R(D)$ is the minimum test-channel mutual information in bits, with infeasible value $+\infty$.

[F2] [[def-it-operational-rate-distortion-function]]: operational rates use deterministic fixed-length codes; the expected criterion has limiting expected distortion at most $D$, and the excess criterion requires every positive slack.

[F3] [[lem-it-finite-rate-distortion-minimum-attained]]: feasible finite test-channel minima are attained exactly for $D\ge D_{\min}$.

[F4] [[lem-it-rate-distortion-convexity-and-monotonicity]]: $R$ is nonincreasing and right-continuous throughout its feasible domain.

[F5] [[def-it-finite-mutual-information]] and [[thm-it-finite-entropy-chain-rule]]: finite mutual information equals $H(X)-H(X|Y)$, and conditional entropy obeys the chain rule. The source identities are stated with natural logarithms; all entropy and information terms in this proof use bits, obtained by dividing those identities by $\ln2$.

[F6] [[thm-it-finite-markov-data-processing]]: finite mutual information cannot increase along a Markov chain.

[F7] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: finite conditional mutual information is nonnegative, so conditioning cannot increase entropy.

[F8] [[cor-iid-finite-variance-weak-law]]: averages of iid square-integrable real variables converge in probability to their common mean.

## Proof




**Given:** The source, alphabets, distortion and budget, together with suppliers [F1]–[F8].

1.1 Let a deterministic length-$n$ code have $M_n$ messages and reconstruction $\widehat X^n$. Data processing [F6] gives $I(X^n;\widehat X^n)\le H(f_n(X^n))\le\log_2M_n$. Put $D_n=\mathbb E d_n(X^n,\widehat X^n)$, and let $T$ be uniform on $\{0,\ldots,n-1\}$, independent of all variables; set $(X,Y)=(X_T,\widehat X_T)$. Since the source symbols are iid, $H(X^n)=\sum_iH(X_i)$. By [F5], the chain rule, and conditioning reducing entropy from [F7], $$ I(X^n;\widehat X^n)=\sum_i\bigl[H(X_i)-H(X_i\mid X^{i-1},\widehat X^n)\bigr]\ge\sum_i I(X_i;\widehat X_i). $$ Also $I(X;Y\mid T)=n^{-1}\sum_iI(X_i;\widehat X_i)$, while $I(X;T)=0$; the chain rule and nonnegative conditional information [F7] imply $I(X;Y)\le I(X;Y,T)=I(X;Y\mid T)$. Thus $R(D_n)\le I(X;Y)\le n^{-1}I(X^n;\widehat X^n)\le n^{-1}\log_2M_n$, since $\mathbb E d(X,Y)=D_n$. [F1, F5, F6, F7, given, algebra]

1.2 Assume $D\ge D_{\min}$, and choose a minimizing test channel $W(\hat x|x)$ by [F3]. Let $Y$ have its induced output pmf, and let $(X_i,Y_i)$ be iid copies of the test-channel pair. Its information density $\imath(X;Y)=\log_2[W(Y|X)/P_Y(Y)]$, on positive joint support, is finite-valued because the alphabets are finite; it has mean $I:=R(D)$. The block distortion is bounded with mean at most $D$. The iid law of large numbers therefore gives, for every $\eta,\delta>0$, $$ \mathbb P\{d_n(X^n,Y^n)\le D+\eta,\ \sum_{i<n}\imath(X_i;Y_i)\le n(I+\delta)\}\longrightarrow1. $$ The distortion and information-density summands are bounded on finite alphabets, hence square-integrable; [F8] applied to each iid sequence proves both convergences in probability and the displayed joint event. [F1, F3, F8, given, algebra]

2.1 For an expected-distortion code sequence with $\limsup_nD_n\le D$, eventually $D_n\le D+\epsilon$, so step 1.1 and monotonicity give $R(D+\epsilon)\le n^{-1}\log_2M_n$. For an excess-distortion sequence and any $\epsilon>0$, boundedness gives $D_n\le D+\epsilon+d_{\max}\mathbb P(d_n>D+\epsilon)$, hence eventually $D_n\le D+2\epsilon$; then $R(D+2\epsilon)\le n^{-1}\log_2M_n$. Taking limsups and using [F4] as $\epsilon\downarrow0$ proves both operational rates are at least $R(D)$ whenever feasible. If $D<D_{\min}$, every reconstruction has block distortion at least $n^{-1}\sum_i\min_{\hat x}d(X_i,\hat x)$; its mean is $D_{\min}$, and the iid law of large numbers makes it converge in probability to $D_{\min}$. Thus neither operational criterion is feasible below $D_{\min}$. [F1, F2, F3, F4, step 1.1, given, algebra]

2.2 For each source word $x^n$, let $G_n(x^n)$ be the reproduction words satisfying both inequalities in step 1.2. The joint probability of this event tends to one, so the source probability of the set where $P(Y^n\in G_n(X^n)\mid X^n)<1/2$ is at most twice the probability of the complement and tends to zero. On the other source words, every $y^n\in G_n(x^n)$ satisfies $P(y^n|x^n)/P_Y^n(y^n)\le2^{n(I+\delta)}$; summing this likelihood-ratio inequality over the good set yields $P_Y^n(G_n(x^n))\ge\frac12 2^{-n(I+\delta)}$. [F1, step 1.2, given, algebra]

3.1 Draw $M_n=\lceil2^{n(I+2\delta)}\rceil$ reproduction words independently from $P_Y^n$. For each source word in the high-probability set of step 2.2, the chance that no codeword belongs to $G_n(x^n)$ is at most $(1-q)^{M_n}\le e^{-M_nq}\le e^{-2^{n\delta}/2}$. Source words outside that set have probability tending to zero, so the expected failure probability of the random codebook tends to zero. Since the codebook alphabet is finite, for each n there is a deterministic realization whose failure probability is at most twice this expectation (and if the expectation is zero, a realization with zero failure exists). [step 2.2, given, construct, algebra]

4.1 Encode each source word by the first codebook word in its good set; if there is none, use a fixed default reproduction word. Decode the selected codeword. This is a deterministic fixed-length code; its rate is at most $I+2\delta+o(1)$. Its distortion is at most $D+\eta$ on success and at most $d_{\max}$ on failure. Choose $\eta_j\downarrow0$; for each j the failure probability is at most $1/j$ for all sufficiently large n by step 3.1. Use increasing thresholds and at length n the largest available j=j(n). Then $j(n)\to\infty$, expected distortion has limsup at most $D$, and for every fixed $\epsilon>0$, eventually $\eta_{j(n)}<\epsilon$, so $\mathbb P(d_n>D+\epsilon)\le1/j(n)\to0$. [F2, step 1.2, step 3.1, given, construct]

5.1 For any target rate $R(D)+\epsilon$, choose $\delta>0$ with $2\delta<\epsilon$. Steps 1.2, 2.2, 3.1, and 4.1 give codes with both operational criteria and limiting rate at most $R(D)+2\delta<R(D)+\epsilon$. Taking the infimum proves both operational rates are at most $R(D)$. Together with step 2.1 this proves the theorem. [F1, F2, step 2.1, step 1.2, step 2.2, step 3.1, step 4.1, given, algebra] ∎
