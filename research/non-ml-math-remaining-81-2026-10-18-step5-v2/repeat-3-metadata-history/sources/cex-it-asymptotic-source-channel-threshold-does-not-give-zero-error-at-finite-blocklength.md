---
id: cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength
kind: counterexample
title: "Strict asymptotic separation need not give zero finite-block error"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - def-it-point-to-point-joint-source-channel-code
  - thm-it-point-to-point-lossless-source-channel-separation
  - def-discrete-memoryless-channel
  - def-discrete-memoryless-channel-information-capacity
  - thm-discrete-memoryless-channel-capacity-formula
  - thm-it-finite-entropy-chain-rule
  - def-it-finite-conditional-entropy
  - def-it-finite-mutual-information
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - thm-it-finite-kl-nonnegative-equality
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: counterexample
axiom_use: "No choice axiom is used; the source and channel alphabets are finite."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy, MIT OpenCourseWare 6.441 Information Theory, Chapter 20: Advanced Channel Coding and Source-Channel Separation"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf"
      locator: "§20.5, printed pp. 215–217 / PDF pp. 9–11: Theorem 20.3 is asymptotic."
    - title: "Robert M. Gray, Entropy and Information Theory, author-hosted full text"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 12, §12.7, printed pp. 269–271: asymptotic joint block-code performance."
---

## Statement refuted

For every finite IID source and finite DMC, if $H(P_S)<\rho C(W)$, then every finite blocklength ratio $n/k=\rho$ admits a deterministic joint code with zero block error.

## Facts & Assumptions

**Given:** A uniform binary IID source, a BSC with crossover probability $1/4$, channel blocklength $n_k=6k$, and a deterministic joint code as in [[def-it-point-to-point-joint-source-channel-code]].

[A1] Every word $s^k\in\{0,1\}^k$ has source probability $2^{-k}>0$.

[A2] In this verification, $H(P_S):=-\sum_sP_S(s)\ln P_S(s)$ and $h(q):=-q\ln q-(1-q)\ln(1-q)$, with $0\ln0:=0$.

[F1] [[def-discrete-memoryless-channel]]: for the BSC with crossover probability $1/4$, each coordinate transition probability is either $1/4$ or $3/4$, so every output word has positive probability under every input word.

[F2] [[def-discrete-memoryless-channel-information-capacity]] and [[thm-discrete-memoryless-channel-capacity-formula]]: $C(W)=\max_{P_X}I(X;Y)$ in nats per use.

[F3] [[def-it-finite-conditional-entropy]], [[def-it-finite-mutual-information]], and [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(Y)-H(Y\mid X)$.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]] and [[thm-it-finite-kl-nonnegative-equality]]: for binary $q$, $h(q)\le\ln2$, with equality at $q=1/2$.

[F5] [[thm-it-point-to-point-lossless-source-channel-separation]]: a strict entropy-capacity gap ensures reliable transmission by a sequence of codes, asymptotically.

## Counterexample


1.1 The source entropy is $H(P_S)=\ln2$. For a BSC with crossover $1/4$ and input $X\sim\operatorname{Bern}(r)$, the output parameter is $q=1/4+r/2$, and [F3] gives $I(X;Y)=h(q)-h(1/4)$. By [F4], the maximum is at $r=1/2$, so $C(W)=\ln2-h(1/4)=\tfrac34\ln3-\ln2$. [A1, A2, F2, F3, F4, given, algebra]

1.2 Fix any $k\ge1$, any deterministic encoder $f_k:\{0,1\}^k\to\{0,1\}^{6k}$, and decoder $g_k:\{0,1\}^{6k}\to\{0,1\}^k$. Choose any output word $y_0$ and then a source word $s^k\ne g_k(y_0)$, which exists because $|\{0,1\}^k|\ge2$. By [A1] and [F1], $\Pr[S^k=s^k,Y^{6k}=y_0]=2^{-k}W^{6k}(y_0\mid f_k(s^k))>0$. On this event the decoder is wrong, so the block-error probability is positive for every finite code. [A1, F1, given, choose, algebra]

2.1 Hence $6C(W)-H(P_S)=\tfrac92\ln3-7\ln2>0$, since $3^9=19683>16384=2^{14}$. The asymptotic threshold is strict, so [F5] gives a reliable code sequence at ratio six. [A1, A2, F5, step 1.1, algebra]

3.1 The strict asymptotic threshold in step 2.1 therefore cannot imply a zero-error code at each finite blocklength ratio. This refutes the statement while leaving the asymptotic separation conclusion intact. [F5, step 2.1, step 1.2, algebra] ∎
