---
id: thm-kraft-inequality
kind: theorem
title: "Kraft inequality and effective prefix-code allocation"
status: published
origin: session
deps: [def-prefix-free-machine-and-prefix-complexity]
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
    - title: "Simpson, §6.3"
      url: "https://sgslogic.net/t20/notes/cur.pdf"
---
## Statement
If $D\subseteq\{0,1\}^*$ is prefix-free, then $\sum_{p\in D}2^{-|p|}\le1$. Conversely, a computably enumerable request list $(x_i,n_i)$ with $\sum_i2^{-n_i}\le1$ has an effective prefix-free allocation of codewords of lengths $n_i$.
## Proof
**Given:** a prefix-free set or a Kraft-bounded request list.

1.1 At depth $N$, a word $p$ excludes exactly $2^{N-|p|}$ leaves; prefix-freeness makes these excluded sets disjoint. Divide their total by $2^N$ and let $N$ grow to obtain the inequality. [given]

1.2 For requests, maintain a finite prefix-free set $F$ of free tree nodes, initially $F=\{\varepsilon\}$ for the empty word $\varepsilon$. Require that its nodes have pairwise distinct lengths and that their cylinders are exactly the unallocated part of the binary tree. After finitely many requests, the total free capacity is $\sum_{\sigma\in F}2^{-|\sigma|}=1-\sum_{i\text{ already allocated}}2^{-n_i}$. For the next request of length $n$, this capacity is at least $2^{-n}$ by the bound on the entire request list. If every node of $F$ had length greater than $n$, distinctness of the lengths would make its capacity at most $\sum_{j>n}2^{-j}=2^{-n}$, with strict inequality because $F$ is finite. Therefore $F$ contains a node of length at most $n$. Choose the one $\sigma$ of greatest such length $m$; it is unique because the free-node lengths are distinct. [given, construct, algebra]

2.1 Remove $\sigma$ from $F$. Allocate the descendant $\sigma0^{n-m}$ as the requested codeword, and insert the siblings $\sigma0^j1$ for $0\le j<n-m$ into $F$. Their depths are $m+1,\ldots,n$; no existing free node has one of these depths, by maximality of $m$ among depths at most $n$. The new free nodes are prefix-free and partition exactly the part of $[\sigma]$ outside the allocated cylinder, so both invariants and the capacity identity persist. Each step is a finite computable operation on the current finite set $F$. Processing the computable enumeration in order therefore gives distinct codewords of the requested lengths and a prefix-free effective allocation, including the empty-word case $n=0$. [step 1.2, construct, induction] ∎
