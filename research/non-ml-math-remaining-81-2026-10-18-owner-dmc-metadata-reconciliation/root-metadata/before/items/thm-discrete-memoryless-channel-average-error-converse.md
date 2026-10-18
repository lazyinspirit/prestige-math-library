---
id: thm-discrete-memoryless-channel-average-error-converse
kind: theorem
title: "Reliable average-error DMC rates do not exceed capacity"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-discrete-memoryless-channel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, def-discrete-memoryless-channel-information-capacity, lem-discrete-memoryless-channel-n-letter-information-bound, thm-it-fano-inequality, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the message and channel alphabets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 17 §17.3 and Chapter 19 §19.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.3, MIT OpenCourseWare"
      url: "https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf"
---

## Statement

For any sequence of fixed-length codes over a finite DMC with average errors $\varepsilon_{\rm av}(n)\to0$, one has $\limsup_{n\to\infty}n^{-1}\ln M_n\le C(W)$.

## Facts & Assumptions

**Given:** A finite DMC $W$ and a length-$n$ code with $M$ messages, uniform message $J$, input word $X^n=e(J)$, output $Y^n$, and estimate $\widehat J=d(Y^n)$.

[F1] [[thm-it-fano-inequality]]: for a uniform variable on $M$ messages decoded from $Y^n$ with error probability $\varepsilon$, $H(J\mid Y^n)\le\ln2+\varepsilon\ln M$.

[F2] [[thm-it-finite-entropy-chain-rule]]: $I(J;Y^n)=H(J)-H(J\mid Y^n)=H(Y^n)-H(Y^n\mid J)$, with all terms finite.

[F3] [[def-fixed-length-channel-code]] and [[def-discrete-memoryless-channel]]: $X^n$ is a deterministic function of $J$, and conditional on $J=m$ the output law is $W^n(\cdot\mid e(m))$.

[F4] [[lem-discrete-memoryless-channel-n-letter-information-bound]]: $I(X^n;Y^n)\le nC(W)$ for every input law.

## Proof

1.1 Since the encoder is deterministic and the channel law given $J=m$ depends on $m$ only through $X^n=e(m)$, $H(Y^n\mid J)=H(Y^n\mid X^n)$. By [F2], $I(J;Y^n)=I(X^n;Y^n)$. [F2, F3, given, algebra]

2.1 By [F1] and [F2], $\ln M=I(J;Y^n)+H(J\mid Y^n)\le I(X^n;Y^n)+\ln2+\varepsilon_{\rm av}\ln M\le nC(W)+\ln2+\varepsilon_{\rm av}\ln M$ using [F4]. [F1, F2, F4, step 1.1, algebra]

3.1 For a reliable code sequence, rearrange step 2.1 to get $(1-\varepsilon_{\rm av}(n))n^{-1}\ln M_n\le C(W)+n^{-1}\ln2$. The left coefficient tends to one and the right side tends to $C(W)$, so $\limsup n^{-1}\ln M_n\le C(W)$. [step 2.1, given, algebra] ∎
