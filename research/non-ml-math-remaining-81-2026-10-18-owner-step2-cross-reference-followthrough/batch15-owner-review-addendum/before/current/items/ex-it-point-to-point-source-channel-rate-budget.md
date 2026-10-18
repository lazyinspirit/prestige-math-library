---
id: ex-it-point-to-point-source-channel-rate-budget
kind: example
title: "A finite-alphabet source-channel rate budget"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps:
  - thm-it-point-to-point-lossless-source-channel-separation
  - def-discrete-memoryless-channel
  - def-discrete-memoryless-channel-information-capacity
  - thm-discrete-memoryless-channel-capacity-formula
  - def-it-finite-mutual-information
  - def-it-finite-conditional-entropy
  - thm-it-finite-entropy-chain-rule
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - thm-it-finite-kl-nonnegative-equality
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
axiom_use: "No choice axiom is used; all entropy and capacity calculations are finite."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Yury Polyanskiy, MIT OpenCourseWare 6.441 Information Theory, Chapter 20: Advanced Channel Coding and Source-Channel Separation"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf"
      locator: "§20.5, printed pp. 215–217 / PDF pp. 9–11."
    - title: "Robert M. Gray, Entropy and Information Theory, author-hosted full text"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 12, §12.7, printed pp. 269–271."
---

## Example

Take an IID Bernoulli source with $P_S(1)=1/4$ and a binary symmetric channel with crossover probability $1/4$. Use five channel symbols per source symbol. Both the source entropy and the channel capacity are in nats; this example computes the strict asymptotic lossless separation margin exactly.

## Facts & Assumptions

**Given:** A finite IID source, a finite DMC, and the formulas for finite mutual information and entropy.

[A1] $S_i$ are IID Bernoulli$(1/4)$, and $W$ is the BSC with input and output alphabets $\{0,1\}$ and crossover probability $1/4$.

[A2] Write $h(q):=-q\ln q-(1-q)\ln(1-q)$ for the entropy in nats of a Bernoulli$(q)$ variable, with $0\ln0:=0$.

[F1] [[def-discrete-memoryless-channel]]: the BSC is a finite DMC; [[def-discrete-memoryless-channel-information-capacity]] defines $C(W)=\sup_{P_X}I(X;Y)$ in nats per use.

[F2] [[def-it-finite-mutual-information]], [[def-it-finite-conditional-entropy]], and [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(Y)-H(Y\mid X)$ for finite alphabets.

[F3] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: the entropy of a binary probability vector $(q,1-q)$ is $-q\ln q-(1-q)\ln(1-q)$, with $0\ln0=0$.

[F4] [[thm-it-finite-kl-nonnegative-equality]]: $D(\operatorname{Bern}(q)\|\operatorname{Bern}(1/2))=\ln2-h(q)\ge0$.

[F5] [[thm-discrete-memoryless-channel-capacity-formula]]: the operational DMC capacity equals the single-letter information capacity $C(W)$.

[F6] [[thm-it-point-to-point-lossless-source-channel-separation]]: if source entropy in nats is strictly below $\rho C(W)$, reliable transmission is achievable asymptotically.

## Verification

1.1 For an input $X\sim\operatorname{Bern}(r)$, the BSC output is Bernoulli with parameter $q=1/4+r/2$, while $H(Y\mid X)=h(1/4)$. By [F2], [F3], and the notation in [A2], $I(X;Y)=h(q)-h(1/4)$. [A1, A2, F2, F3, given, algebra]

2.1 By [F4], $h(q)\le\ln2$, with equality at $q=1/2$, which is attained by $r=1/2$. Hence [F5] gives $C(W)=\ln2-h(1/4)=\tfrac34\ln3-\ln2$, with $C(W)$ interpreted as in [F1]. The source entropy is $H(P_S)=h(1/4)=2\ln2-\tfrac34\ln3$. [A1, A2, F1, F4, F5, step 1.1, algebra]

3.1 At $\rho=5$, the gap is $5C(W)-H(P_S)=\tfrac92\ln3-7\ln2>0$, because $3^9=19683>16384=2^{14}$ and the natural logarithm is increasing. Therefore the strict hypothesis of [F6] holds, so asymptotically reliable lossless transmission is achievable at this ratio. [A1, F6, step 2.1, algebra] ∎
