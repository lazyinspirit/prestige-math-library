---
id: thm-it-point-to-point-lossy-source-channel-separation
kind: theorem
title: "Lossy separation for finite IID sources and finite DMCs"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-it-point-to-point-joint-source-channel-code
  - def-it-information-rate-distortion-function
  - def-it-operational-rate-distortion-function
  - def-it-single-letter-distortion-and-block-distortion
  - lem-it-finite-rate-distortion-minimum-attained
  - lem-it-rate-distortion-convexity-and-monotonicity
  - thm-it-finite-alphabet-rate-distortion-coding-theorem
  - lem-it-finite-iid-rate-distortion-mutual-information-bound
  - def-discrete-memoryless-channel
  - def-discrete-memoryless-channel-information-capacity
  - def-discrete-memoryless-channel-operational-capacity
  - def-fixed-length-channel-code
  - def-fixed-length-channel-code-errors
  - thm-discrete-memoryless-channel-capacity-formula
  - lem-discrete-memoryless-channel-n-letter-information-bound
  - thm-it-finite-markov-data-processing
  - thm-it-finite-entropy-chain-rule
  - def-it-finite-mutual-information
  - thm-it-finite-kl-nonnegative-equality
  - thm-it-information-unit-conversion
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets, conditional laws, and codebooks are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy, MIT OpenCourseWare 6.441 Information Theory, Chapter 20: Advanced Channel Coding and Source-Channel Separation"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf"
      locator: "§20.5, printed pp. 215–217 / PDF pp. 9–11, Theorem 20.3 and proof."
    - title: "Robert M. Gray, Entropy and Information Theory, author-hosted full text"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 12, §12.7, printed pp. 269–273, especially Theorem 12.7.1 and its complete proof."
verification:
  precheck: pass
---

## Statement

Let $S_1,S_2,\ldots$ be IID with probability vector $P_S$ on a finite nonempty alphabet $\mathcal S$. Let $\widehat{\mathcal S}$ be finite nonempty, let $d:\mathcal S\times\widehat{\mathcal S}\to[0,d_{\max}]$ be finite-valued distortion, and let $D_{\min}:=\sum_sP_S(s)\min_{\hat s}d(s,\hat s)$. For $D\ge D_{\min}$, let $R(D)$ be the finite-alphabet information rate-distortion function in bits from [[def-it-information-rate-distortion-function]] and put $r(D):=(\ln2)R(D)$ nats per source symbol. Let $W$ be a finite DMC with capacity $C(W)$ nats per channel use, and fix positive integers $n_k$ with $n_k/k\to\rho\in(0,\infty)$. For either criterion separately—expected distortion $\limsup_k\mathbb E d_k\le D$, or positive-slack excess distortion $\Pr[d_k>D+\varepsilon]\to0$ for every $\varepsilon>0$—the following hold for deterministic joint codes as in [[def-it-point-to-point-joint-source-channel-code]]:

- If $r(D)<\rho C(W)$, codes achieving the criterion exist.
- If $R(D)=0$, a one-message constant-reproduction code achieves both criteria for every channel.
- Any code sequence achieving either criterion must satisfy $r(D)\le\rho C(W)$. Thus $r(D)>\rho C(W)$ is impossible; the positive-rate equality boundary is not asserted.

## Facts & Assumptions

**Given:** A finite IID source, finite reproduction alphabet, bounded finite distortion, feasible budget $D$, finite DMC, and $n_k/k\to\rho>0$.

[A1] The source blocks have law $P_S^{\otimes k}$; distortion is the normalized additive block distortion $d_k$ of [[def-it-single-letter-distortion-and-block-distortion]], with $0\le d_k\le d_{\max}$.

[F1] [[def-it-information-rate-distortion-function]] and [[lem-it-finite-rate-distortion-minimum-attained]]: $R(D)$ is the minimum test-channel mutual information in bits for a feasible distortion budget, and the minimum is attained.

[F2] [[def-it-operational-rate-distortion-function]] and [[thm-it-finite-alphabet-rate-distortion-coding-theorem]]: for each of the expected and positive-slack excess criteria, source codes exist at rates arbitrarily close above $R(D)$; expected distortion has limsup at most $D$, and every positive-slack excess probability tends to zero.

[F3] [[def-discrete-memoryless-channel-operational-capacity]], [[def-fixed-length-channel-code]], [[def-fixed-length-channel-code-errors]], and [[thm-discrete-memoryless-channel-capacity-formula]]: maximal-error capacity is the supremum of maximal-error achievable rates and equals $C(W)$; per-message errors define maximal error.

[F4] [[lem-it-finite-iid-rate-distortion-mutual-information-bound]]: for any reconstruction of $S^k$ with expected distortion $D_k$, $r(D_k)\le k^{-1}I(S^k;\widehat S^k)$.

[F5] [[lem-it-rate-distortion-convexity-and-monotonicity]]: $R(D)$ is nonincreasing and right-continuous on the feasible distortion interval.

[F6] [[lem-discrete-memoryless-channel-n-letter-information-bound]]: $I(X^n;Y^n)\le nC(W)$ for every DMC input law.

[F7] [[thm-it-finite-markov-data-processing]]: if $\widehat S^k$ is a function of $Y^n$, then $I(S^k;\widehat S^k)\le I(S^k;Y^n)$.

[F8] [[def-it-finite-mutual-information]] and [[thm-it-finite-kl-nonnegative-equality]]: mutual information is the KL divergence from the joint law to the product law, and it is zero exactly when those laws agree.

[F9] [[thm-it-information-unit-conversion]]: bits equal nats divided by $\ln2$.

[F10] [[thm-it-finite-entropy-chain-rule]]: finite mutual information is $I(U;V)=H(V)-H(V\mid U)$.

## Proof

1.1 Suppose $R(D)=0$. By [F1] choose a minimizing test channel; its mutual information is zero in bits and hence in nats by [F9]. By [F8], source and reproduction under that test channel are independent. If $q(\hat s)$ is its reproduction marginal, then $\sum_{\hat s}q(\hat s)\mathbb E d(S,\hat s)\le D$. This finite weighted average implies some $\hat s_0$ has $\mathbb E d(S,\hat s_0)\le D$. Use one message, a fixed channel input word, and the constant reproduction $\hat s_0^k$. Its expected distortion is at most $D$. For each $\varepsilon>0$, the IID bounded variables $Z_i=d(S_i,\hat s_0)$ have mean at most $D$, finite variance, and variance of their average equal to $\operatorname{Var}(Z_1)/k$; the pointwise bound $\mathbf1_{\{|\overline Z-\mathbb EZ_1|\ge\varepsilon\}}\le(\overline Z-\mathbb EZ_1)^2/\varepsilon^2$ gives $\Pr[k^{-1}\sum_iZ_i>D+\varepsilon]\le\operatorname{Var}(Z_1)/(k\varepsilon^2)\to0$. [A1, F1, F8, F9, given, choose, construct, algebra]

1.2 Now assume $R(D)>0$ and $r(D)<\rho C(W)$. Choose $R_c$ with $r(D)/\rho<R_c<C(W)$, then choose $\eta>0$ so that $(\ln2)(R(D)+\eta)/\rho<R_c$. For either chosen source performance criterion, [F2] gives deterministic source codes with message counts $M_k$, that criterion, and $\limsup_k k^{-1}\log_2M_k\le R(D)+\eta$. Therefore $\limsup_k n_k^{-1}\ln M_k\le(\ln2)(R(D)+\eta)/\rho<R_c$. [A1, F2, F9, given, choose, algebra]

1.3 For any joint code, [F7] gives $I(S^k;\widehat S^k)\le I(S^k;Y^{n_k})$. Given $S^k=s^k$, the DMC output has law $W^{n_k}(\cdot\mid f_k(s^k))$; averaging conditional entropies over source words and grouping them by $X^{n_k}=f_k(S^k)$ gives $H(Y^{n_k}\mid S^k)=H(Y^{n_k}\mid X^{n_k})$. Therefore [F10] yields $I(S^k;Y^{n_k})=I(X^{n_k};Y^{n_k})$, and [F6] bounds this by $n_kC(W)$. The rate-distortion bound [F4] at the actual expected distortion $D_k=\mathbb E d_k$ then gives $r(D_k)\le(n_k/k)C(W)$. [A1, F4, F6, F7, F10, given, algebra]

2.1 Since $R_c<C(W)$, [F3] and the supremum definition of maximal-error capacity give a maximal-error achievable rate strictly greater than $R_c$. Its channel code sequence has enough messages to include $M_k$ for all sufficiently large $n_k$; restrict to those messages, mapping discarded decoder outputs to a retained message. Correct-decoding regions for retained messages are preserved, so maximal error does not increase. The source-code index may be nonuniform, but its channel error is the weighted average of per-message errors and is bounded by the maximal error. [F3, step 1.2, given, construct, algebra]

2.2 If the expected-distortion criterion holds, then for every $\varepsilon>0$, eventually $D_k\le D+\varepsilon$. Monotonicity in [F5] and step 1.3 imply $r(D+\varepsilon)\le(n_k/k)C(W)$; taking $k\to\infty$, then $\varepsilon\downarrow0$, and using right-continuity in [F5] yields $r(D)\le\rho C(W)$. [A1, F5, step 1.3, given, algebra]

3.1 Compose the source and channel codes. On channel success the reproduction equals the source-code reproduction, while on channel error the normalized distortion is at most $d_{\max}$. Hence expected distortion is at most the source-code expected distortion plus $d_{\max}$ times the maximal channel error, so its limsup is at most $D$. For the excess criterion, for every $\varepsilon>0$, the event $\{d_k^{\rm joint}>D+\varepsilon\}$ is contained in the union of the source excess event $\{d_k^{\rm source}>D+\varepsilon\}$ and the channel error event. Both probabilities tend to zero. [A1, F2, step 2.1, given, construct, algebra]

3.2 If the positive-slack excess criterion holds, fix $\varepsilon>0$. Splitting expected distortion at $D+\varepsilon/2$, boundedness gives $D_k\le D+\varepsilon/2+d_{\max}\Pr[d_k>D+\varepsilon/2]$, which is at most $D+\varepsilon$ for all sufficiently large $k$. Step 2.2's monotonicity, information bound, and right-continuity argument therefore also gives $r(D)\le\rho C(W)$. [A1, F5, step 1.3, step 2.2, given, algebra]

4.1 The zero-rate construction in step 1.1, the strict-rate construction in steps 1.2, 2.1 and 3.1, and the two converse cases in steps 2.2 and 3.2 prove the stated conclusions; no positive-rate equality case is used. [step 1.1, step 1.2, step 2.1, step 3.1, step 2.2, step 3.2, algebra] ∎
