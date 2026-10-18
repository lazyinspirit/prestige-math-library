---
id: lem-it-finite-iid-rate-distortion-mutual-information-bound
kind: lemma
title: "Finite-IID rate-distortion mutual-information converse"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-information-rate-distortion-function
  - def-it-single-letter-distortion-and-block-distortion
  - lem-it-finite-rate-distortion-minimum-attained
  - def-it-finite-mutual-information
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-information-unit-conversion
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all alphabets, conditional laws, and time-sharing variables are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy, MIT OpenCourseWare 6.441 Information Theory, Chapter 20: Advanced Channel Coding and Source-Channel Separation"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf"
      locator: "§20.5, printed pp. 215–217 / PDF pp. 9–11: source-channel converse by Fano and data processing."
    - title: "Robert M. Gray, Entropy and Information Theory, author-hosted full text"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 12, §12.7, Theorem 12.7.2, printed pp. 271–272: finite-information converse for bounded additive distortion."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $S_1,\ldots,S_k$ be IID with law $P_S$ on a finite nonempty alphabet $\mathcal S$, let $\widehat{\mathcal S}$ be finite nonempty, and let $d:\mathcal S\times\widehat{\mathcal S}\to[0,\infty)$ be finite-valued. For any joint law of $S^k$ and $\widehat S^k$, put $D_k:=\mathbb E d_k(S^k,\widehat S^k)$, using the normalized block distortion of [[def-it-single-letter-distortion-and-block-distortion]]. If $R(D)$ is the finite-alphabet information rate-distortion function in bits from [[def-it-information-rate-distortion-function]], then

$$\ln2\,R(D_k)\le\frac1k I(S^k;\widehat S^k),$$

where mutual information on the right is in nats. The test channel induced by the joint law is feasible at distortion $D_k$, so the rate-distortion minimum is attained there by [[lem-it-finite-rate-distortion-minimum-attained]].

## Facts & Assumptions

**Given:** A finite IID source, finite reproduction alphabet, finite nonnegative distortion, and any joint distribution of $S^k,\widehat S^k$.

[A1] $S_1,\ldots,S_k$ are IID with common law $P_S$; hence each coordinate has law $P_S$ and is independent of its predecessors.

[F1] [[def-it-information-rate-distortion-function]] and [[lem-it-finite-rate-distortion-minimum-attained]]: $R(D)$ is the minimum finite mutual information in bits over test channels with source law $P_S$ and expected distortion at most $D$; every feasible minimum is attained.

[F2] [[def-it-single-letter-distortion-and-block-distortion]]: $d_k(s^k,\hat s^k)=k^{-1}\sum_{i=1}^k d(s_i,\hat s_i)$.

[F3] [[def-it-finite-mutual-information]] and [[thm-it-finite-entropy-chain-rule]]: finite mutual information has the chain rule, including $I(U;V,Z)=I(U;Z)+I(U;V\mid Z)$.

[F4] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: finite conditional mutual information is nonnegative.

[F5] [[thm-it-information-unit-conversion]]: information in bits equals information in nats divided by $\ln2$.

## Proof

1.1 Let $T$ be uniform on $[k]$, independent of $(S^k,\widehat S^k)$, and put $(S,\widehat S)=(S_T,\widehat S_T)$. By [A1], $S$ has law $P_S$; by [F2], $\mathbb E d(S,\widehat S)=k^{-1}\sum_i\mathbb E d(S_i,\widehat S_i)=D_k$. For each $s$ with $P_S(s)>0$, the conditional law of $\widehat S$ given $S=s$ is a probability vector; choose any probability-vector row for zero-mass $s$. This gives a finite test channel with source law $P_S$ and distortion $D_k$, so it is feasible in [F1]. [A1, F1, F2, given, construct]

1.2 The chain rule [F3] gives $I(S^k;\widehat S^k)=\sum_{i=1}^k I(S_i;\widehat S^k\mid S^{i-1})$. Since $I(S_i;S^{i-1})=0$ by [A1], the chain rule gives $I(S_i;\widehat S^k\mid S^{i-1})=I(S_i;\widehat S^k,S^{i-1})$. Write $U_i=(\widehat S^k,S^{i-1})$; its coordinate $\widehat S_i$ is a function of $U_i$, so $I(S_i;U_i,\widehat S_i)=I(S_i;U_i)$. Expanding the left side by [F3] and using [F4] yields $I(S_i;U_i)=I(S_i;\widehat S_i)+I(S_i;U_i\mid\widehat S_i)\ge I(S_i;\widehat S_i)$. Summing proves $\sum_i I(S_i;\widehat S_i)\le I(S^k;\widehat S^k)$. [A1, F3, F4, given, algebra]

2.1 By the chain rule, $I(S;\widehat S\mid T)=k^{-1}\sum_i I(S_i;\widehat S_i)$. Since $S$ and $T$ are independent, $I(S;\widehat S,T)=I(S;\widehat S\mid T)$; also $I(S;\widehat S,T)=I(S;\widehat S)+I(S;T\mid\widehat S)\ge I(S;\widehat S)$ by [F3]–[F4]. Thus $I(S;\widehat S)\le k^{-1}\sum_iI(S_i;\widehat S_i)\le k^{-1}I(S^k;\widehat S^k)$ by step 1.2. The test channel in step 1.1 is feasible, so [F1] gives $R(D_k)\le I_2(S;\widehat S)$, where the subscript denotes bits. Multiply by $\ln2$ and use [F5] to obtain the claimed nats inequality. [F1, F3, F4, F5, step 1.1, step 1.2, algebra] ∎
