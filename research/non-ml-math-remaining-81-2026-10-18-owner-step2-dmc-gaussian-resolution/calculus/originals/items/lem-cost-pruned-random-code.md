---
id: lem-cost-pruned-random-code
kind: lemma
title: A low-error random code can be pruned to satisfy a strict average cost constraint
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [thm-chebyshev-markov-inequality-for-the-integral, thm-finite-union-bound]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: The statement is per blocklength and makes no sequence-wide selections; no choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Robert Gallager, Principles of Digital Communication I, Chapter 8 §8.7.4, MIT OpenCourseWare"
      url: https://ocw.mit.edu/courses/6-450-principles-of-digital-communications-i-fall-2006/f6c75b427b022503f5c605db7de4d46f_book_8.pdf
---

## Statement

Fix a blocklength $n$, a message count $M\ge2$, a codebook ensemble with exchangeable message codewords, and a decoder for each sampled codebook. Let $B_n$ be the random fraction of codewords whose normalized cost exceeds $\Gamma$, and let $\bar\varepsilon_n$ be the ensemble codebook's average error. If $q_n:=\mathbb E B_n$ and $a_n:=\mathbb E\bar\varepsilon_n$ satisfy $q_n+a_n<1$, then some deterministic subcode has every retained codeword of normalized cost at most $\Gamma$, average error at most $\sqrt{q_n+a_n}/(1-\sqrt{q_n+a_n})$, and at least $M(1-\sqrt{q_n+a_n})$ messages.

If this construction is available for each sufficiently large $n$, with $q_n+a_n\to0$, then the retained code's rate differs from $n^{-1}\ln M_n$ by a quantity tending to zero.

## Facts & Assumptions

**Given:** A random length-$n$ codebook with $M\ge2$ exchangeable message codewords, nonnegative normalized codeword cost, and a decoder whose per-message errors define $\bar\varepsilon_n$.

[F1] [[thm-chebyshev-markov-inequality-for-the-integral]]: for a nonnegative measurable random variable $V$ and $a>0$, $\Pr[V\ge a]\le\mathbb E[V]/a$.

[F2] [[thm-finite-union-bound]]: the probability of a union of two events is at most the sum of their probabilities.

## Proof

1.1 If $q_n+a_n=0$, nonnegativity implies $B_n=\bar\varepsilon_n=0$ almost surely, so a realization has both equal to zero. If $q_n+a_n>0$, put $s_n=\sqrt{q_n+a_n}<1$. By [F1], $\Pr[B_n>s_n]\le q_n/s_n$ and $\Pr[\bar\varepsilon_n>s_n]\le a_n/s_n$. The union bound [F2] makes the probability of either failure at most $s_n<1$, so a realization exists with both quantities at most $s_n$. [F1, F2, given, cases, algebra]

2.1 Retain exactly the codewords in that realization whose normalized cost is at most $\Gamma$, and let $M'$ be their number. Since $B_n\le s_n$, $M'\ge M(1-s_n)>0$. Change the decoder only by mapping decisions for removed messages to one fixed retained message. An originally correct decision for a retained message is unchanged, so its error probability cannot increase; hence the retained average error is at most $M\bar\varepsilon_n/M'\le s_n/(1-s_n)$. Each retained word satisfies the cost constraint by construction. [step 1.1, algebra, cases]

3.1 If $q_n+a_n\to0$ along blocklengths, then $s_n\to0$ and $\ln M'/n\ge\ln M/n+\ln(1-s_n)/n$. Since $\ln(1-s_n)\to0$, the rate loss tends to zero; the error bound in step 2.1 also tends to zero. The conclusion is per blocklength, so no sequence of witnesses is selected in this lemma. [step 1.1, step 2.1, given, algebra] ∎