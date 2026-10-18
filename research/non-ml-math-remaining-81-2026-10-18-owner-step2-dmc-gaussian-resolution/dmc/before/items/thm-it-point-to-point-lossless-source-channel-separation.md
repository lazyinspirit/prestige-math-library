---
id: thm-it-point-to-point-lossless-source-channel-separation
kind: theorem
title: "Lossless separation for finite IID sources and finite DMCs"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-it-point-to-point-joint-source-channel-code
  - lem-it-finite-iid-source-lossless-code-achievability
  - def-discrete-memoryless-channel
  - def-discrete-memoryless-channel-information-capacity
  - def-discrete-memoryless-channel-operational-capacity
  - thm-discrete-memoryless-channel-capacity-formula
  - lem-discrete-memoryless-channel-n-letter-information-bound
  - thm-it-fano-inequality
  - thm-it-finite-markov-data-processing
  - thm-it-finite-entropy-chain-rule
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets and codebooks are finite."
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
      locator: "Chapter 12, §12.7, printed pp. 269–273, joint source-channel block coding and converse."
verification:
  precheck: pass
---

## Statement

Let $S_1,S_2,\ldots$ be IID with probability vector $P_S$ on a finite nonempty alphabet $\mathcal S$, and let $W$ be a finite DMC with capacity $C(W)$ in nats per channel use. Write $H(P_S):=-\sum_{s:P_S(s)>0}P_S(s)\ln P_S(s)$ for source entropy in nats. Fix positive integers $n_k$ with $n_k/k\to\rho\in(0,\infty)$. A deterministic $(k,n_k)$ joint code is as in [[def-it-point-to-point-joint-source-channel-code]]. If $H(P_S)=0$, a zero-error code sequence exists for every such $W$. If $H(P_S)<\rho C(W)$, there are codes with block error tending to zero. Conversely, every code sequence with block error tending to zero satisfies $H(P_S)\le\rho C(W)$. Thus strict violation $H(P_S)>\rho C(W)$ rules out reliable transmission; the positive-entropy equality boundary is not asserted.

## Facts & Assumptions

**Given:** A finite IID source, a finite DMC, positive blocklengths with $n_k/k\to\rho>0$, and deterministic joint codes.

[A1] The source blocks have law $P_S^{\otimes k}$, and $H(P_S)=-\sum_{s:P_S(s)>0}P_S(s)\ln P_S(s)$ is measured in nats.

[F1] [[def-it-point-to-point-joint-source-channel-code]]: an encoder maps $\mathcal S^k\to\mathcal X^{n_k}$ and a decoder maps $\mathcal Y^{n_k}\to\mathcal S^k$ in the lossless case.

[F2] [[def-discrete-memoryless-channel-information-capacity]]: $C(W)$ is the supremum of single-letter mutual information in nats per channel use.

[F3] [[def-discrete-memoryless-channel-operational-capacity]] and [[thm-discrete-memoryless-channel-capacity-formula]]: the maximal-error capacity is the supremum of maximal-error achievable rates and equals $C(W)$.

[F4] [[lem-it-finite-iid-source-lossless-code-achievability]]: every source-code rate strictly above $H(P_S)$ admits deterministic fixed-length source codes with block error tending to zero.

[F5] [[lem-discrete-memoryless-channel-n-letter-information-bound]]: for every input law on $\mathcal X^n$, $I(X^n;Y^n)\le nC(W)$.

[F6] [[thm-it-fano-inequality]]: for an estimate of a finite-alphabet random variable with error probability $p$, $H(S^k\mid\widehat S^k)\le\ln2+p\ln|\mathcal S|^k$.

[F7] [[thm-it-finite-markov-data-processing]]: along a finite Markov chain, mutual information cannot increase from the first variable to the last.

[F8] [[thm-it-finite-entropy-chain-rule]]: finite entropy and mutual information obey the chain rule, and IID coordinates have $H(S^k)=kH(P_S)$.

## Proof

1.1 If $H(P_S)=0$, each nonzero term $-P_S(s)\ln P_S(s)$ is nonnegative, so exactly one source letter has probability one. Choose that letter $s_0$ and any channel input letter $x_0$, encode every source block as $x_0^{n_k}$, and decode every output to $s_0^k$. This is a deterministic joint code with zero error. [A1, F1, given, choose, construct, algebra]

1.2 Now assume $0<H(P_S)<\rho C(W)$. Choose $\eta>0$ with $H(P_S)+2\eta<\rho C(W)$. By [F4], choose source codes with message counts $M_k$, source block error tending to zero, and $\limsup_k k^{-1}\ln M_k\le H(P_S)+\eta$. Then $\limsup_k n_k^{-1}\ln M_k\le(H(P_S)+\eta)/\rho<C(W)$. [A1, F4, given, choose, algebra]

1.3 For any joint code, $\widehat S^k$ is a function of $Y^{n_k}$, so [F7] gives $I(S^k;\widehat S^k)\le I(S^k;Y^{n_k})$. The encoder is deterministic and the DMC output law given $S^k=s^k$ is $W^{n_k}(\cdot\mid f_k(s^k))$; averaging its finite conditional entropies by the value of $X^{n_k}=f_k(S^k)$ gives $H(Y^{n_k}\mid S^k)=H(Y^{n_k}\mid X^{n_k})$. By [F8], $I(S^k;Y^{n_k})=I(X^{n_k};Y^{n_k})$, which is at most $n_kC(W)$ by [F2] and [F5]. If $p_k=\Pr[\widehat S^k\ne S^k]$, then [F6] and [F8] give $kH(P_S)\le n_kC(W)+\ln2+p_k k\ln|\mathcal S|$. Dividing by $k$ and taking $k\to\infty$ along a reliable code sequence proves $H(P_S)\le\rho C(W)$. [A1, F2, F5, F6, F7, F8, given, algebra]

2.1 Choose a rate $R_c$ strictly between $(H(P_S)+\eta)/\rho$ and $C(W)$. By [F3] and the supremum property, some maximal-error achievable rate $R'>R_c$ exists, so its channel-code sequence has $\liminf_n n^{-1}\ln L_n\ge R'$ and maximal errors tending to zero. Since $n_k\to\infty$, eventually $\ln L_{n_k}/n_k>R_c>\ln M_k/n_k$. Restrict each such code to $M_k$ messages; mapping any discarded decoder output to a retained message preserves every retained message's former correct-decoding event, so maximal error does not increase. [F1, F3, step 1.2, given, construct, algebra]

3.1 Compose the source encoder and decoder from step 1.2 with the restricted channel code from step 2.1. The source-code index can have any distribution, but its channel decoding error is at most the maximal error. The joint block-error event is contained in the union of the source-code error event and the channel message-error event, so its probability is at most the sum of those two probabilities and tends to zero. [F1, step 1.2, step 2.1, given, construct, algebra]

4.1 Step 1.1 gives zero-error achievability when the source entropy is zero; steps 1.2, 2.1, and 3.1 give reliable achievability under the strict positive-entropy threshold; and step 1.3 gives the necessary condition. Thus the stated strict-threshold conclusions hold, with no claim at the positive-entropy equality boundary. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3, algebra] ∎
