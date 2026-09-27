---
id: thm-martin-lof-randomness-implies-computable-randomness
kind: theorem
title: "Martin-Löf randomness implies computable randomness"
status: published
origin: session
deps: [def-martin-lof-test-and-random-sequence, def-computable-martingale]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Franklin and Porter, Theorem 2.7"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Statement
Every Martin-Löf random sequence is computably random.
## Proof
**Given:** a computable martingale $d$ and a sequence on which it succeeds.

1.1 A successful martingale has $d(\varepsilon)>0$, since a nonnegative martingale starting at $0$ is identically $0$. Enumerate the pairs $(n,\sigma)$ satisfying $d(\sigma)>2^n d(\varepsilon)$ and let $U_n$ be the union of the cylinders of strings enumerated with first coordinate $n$. Strict comparison of computable reals is semidecidable uniformly in $(n,\sigma)$, so one algorithm enumerates all these pairs and $(U_n)$ is uniformly effectively open. [given, construct]

2.1 The prefix-minimal threshold-crossing strings have the same union as $U_n$ and are prefix-free. For any finite set $S$ of them, the martingale conservation equation [[def-computable-martingale]] gives $\sum_{\sigma\in S}2^{-|\sigma|}d(\sigma)\le d(\varepsilon)$: extend the strings to one common length, where their descendant cylinders are disjoint. Since every $d(\sigma)>2^n d(\varepsilon)$, it follows that $\sum_{\sigma\in S}2^{-|\sigma|}\le2^{-n}$. Taking increasing finite subsets gives $\mu(U_n)\le2^{-n}$, so $(U_n)$ is a Martin-Löf test. [step 1.1, given, algebra]

3.1 Success puts the sequence in every level of that test, contradicting Martin-Löf randomness as defined in [[def-martin-lof-test-and-random-sequence]]. [step 2.1, contradiction] ∎
