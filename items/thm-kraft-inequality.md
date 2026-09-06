---
id: thm-kraft-inequality
kind: theorem
title: "Kraft inequality and effective prefix-code allocation"
status: draft
origin: session
deps: [def-prefix-free-machine-and-prefix-complexity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Simpson, §6.3"
      url: "https://sgslogic.net/t20/notes/cur.pdf"
---
## Statement
If $D\subseteq\{0,1\}^*$ is prefix-free, then $\sum_{p\in D}2^{-|p|}\le1$. Conversely, a computably enumerable request list $(x_i,n_i)$ with $\sum_i2^{-n_i}\le1$ has an effective prefix-free allocation of codewords of lengths $n_i$.
## Proof
**Given:** a prefix-free set or a Kraft-bounded request list.

1.1 At depth $N$, a word $p$ excludes exactly $2^{N-|p|}$ leaves; prefix-freeness makes these excluded sets disjoint. Divide their total by $2^N$ and let $N$ grow to obtain the inequality. [given]

2.1 For requests, assign the leftmost currently available node of the requested depth. The Kraft bound says fewer than all leaves are occupied, so induction never gets stuck and keeps the allocated set prefix-free, as required by [[def-prefix-free-machine-and-prefix-complexity]]. [step 1.1, construct] ∎
