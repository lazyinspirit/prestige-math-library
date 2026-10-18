---
id: thm-discrete-memoryless-channel-capacity-formula
kind: theorem
title: "Operational capacity formula for a finite DMC"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-discrete-memoryless-channel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-discrete-memoryless-channel-operational-capacity, def-discrete-memoryless-channel-information-capacity, def-it-finite-mutual-information, thm-it-finite-kl-nonnegative-equality, lem-discrete-memoryless-channel-capacity-is-attained, lem-discrete-memoryless-channel-average-to-maximal-expurgation, thm-discrete-memoryless-channel-average-error-converse, thm-discrete-memoryless-channel-random-coding-achievability]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all claims concern finite-alphabet codes and distributions."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §§19.1–19.2"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §§8.7.2–8.7.4, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

For every finite DMC $W$ with no input-cost constraint,
$$C_{\rm av}(W)=C_{\max}(W)=C(W)=\max_{P_X}I(P_X;W),$$
with rates and mutual information measured in nats per channel use.

## Facts & Assumptions

**Given:** A finite DMC $W$ with finite nonempty input and output alphabets.

[F1] [[def-discrete-memoryless-channel-operational-capacity]]: $C_{\rm av}$ and $C_{\max}$ are the suprema of rates achievable with vanishing average and maximal error, respectively.

[F2] [[def-discrete-memoryless-channel-information-capacity]] and [[lem-discrete-memoryless-channel-capacity-is-attained]]: $C(W)=\max_{P_X}I(P_X;W)$.

[F3] [[thm-discrete-memoryless-channel-average-error-converse]]: any vanishing-average-error code sequence has limsup rate at most $C(W)$.

[F4] [[thm-discrete-memoryless-channel-random-coding-achievability]]: every $0\le R<C(W)$ is achievable with vanishing average error.

[F5] [[lem-discrete-memoryless-channel-average-to-maximal-expurgation]]: each code can be replaced by a subcode with rate loss at most $\ln2/n$ and maximal error at most twice its average error.

[F6] [[def-it-finite-mutual-information]] and [[thm-it-finite-kl-nonnegative-equality]]: mutual information is a finite KL divergence and is nonnegative, so $C(W)\ge0$.

[F7] [[def-discrete-memoryless-channel]] and [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: the nonempty input alphabet supplies one input word, and decoding every output to the sole message gives a one-message code with rate zero and zero error.

## Proof

1.1 A maximal-error reliable sequence is also average-error reliable because $\varepsilon_{\rm av}\le\varepsilon_{\max}$. Thus [F3] gives $C_{\max}(W)\le C_{\rm av}(W)\le C(W)$. [F1, F3, given, algebra]

1.2 By [F4], every $0\le R<C(W)$ is average-error achievable, so $C_{\rm av}(W)\ge C(W)$ after taking the supremum when $C(W)>0$. If $C(W)=0$, [F7] gives $C_{\rm av}(W)\ge0$. The case split is exhaustive by [F6]; in either case $C_{\rm av}(W)=C(W)$. [F1, F2, F4, F6, F7, algebra]

2.1 If $C(W)>0$, fix any $0\le R<C(W)$. By [F4] there is an average-error reliable sequence at rate at least $R$. Apply [F5] to each code: the maximal errors tend to zero and the log message count loses at most $\ln2$ at blocklength $n$, so the resulting rate is still at least $R$ in the limit. Thus $C_{\max}(W)\ge R$ for every such $R$, and hence $C_{\max}(W)\ge C(W)$. If $C(W)=0$, [F7] gives $C_{\max}(W)\ge0=C(W)$. The cases are exhaustive by [F6], and step 1.1 gives equality. [F1, F4, F5, F6, F7, step 1.1, algebra] ∎
