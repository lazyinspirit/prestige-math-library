---
id: thm-lehmer-code-is-a-bijection
kind: theorem
title: "The Lehmer code is a bijection $S_n\\to\\prod_{i=1}^{n}\\{0,\\dots,i-1\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lehmer-code, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Felix Gotti, MIT 18.211 Combinatorial Analysis, Lecture 5"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/5.%20Permutation%20Inversions%20and%20q-Binomials/Permutation%20Inversions%20and%20q-Binomials.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$, the Lehmer-code map

$$L : S_n \to \prod_{i=1}^{n}\{0,\dots,i-1\}$$

is a bijection.

## Facts & Assumptions

**Given:** A natural number $n$ and the Lehmer code map $L : S_n \to \prod_{i=1}^{n}\{0,\dots,i-1\}$.

[L1] A function is bijective if it is both injective and surjective ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** constructive.

1.1 For $\sigma \in S_n$, the component $\ell_i(\sigma)$ counts entries to the right of position $n-i$, and there are exactly $i-1$ such positions, so $0 \le \ell_i(\sigma)\le i-1$. Thus $L(\sigma)$ lies in the stated codomain. [given]

1.2 Conversely, let $(c_1,\dots,c_n)$ lie in the codomain. Begin with the increasing list $R=[0,1,\dots,n-1]$ of unused values. For $i=n,n-1,\dots,1$, put in position $n-i$ the value of $R$ having exactly $c_i$ smaller elements in $R$, and delete that value from $R$. This choice exists and is unique because $R$ has $i$ elements and $0\le c_i<i$. Call the resulting permutation $\sigma_c$. [construct]

2.1 The permutation $\sigma_c$ has Lehmer code $(c_1,\dots,c_n)$. At the stage for $i$, all values then left in $R$ will occupy the $i-1$ positions to the right of position $n-i$. The chosen value has exactly $c_i$ smaller values in $R$, so exactly $c_i$ later entries of $\sigma_c$ are smaller than it. This is the defining equality $\ell_i(\sigma_c)=c_i$. [step 1.2, algebra]

3.1 The construction is unique. At position $0$, all $n$ values are unused and the code coordinate $c_n$ requires the entry with exactly $c_n$ smaller unused values. After deleting it, coordinate $c_{n-1}$ uniquely determines the next entry among the remaining values, and so on. Thus any permutation with code $c$ is exactly $\sigma_c$. Step 2.1 gives surjectivity and this uniqueness gives injectivity. [step 1.2, step 2.1, L1]

4.1 Therefore $L$ is a bijection. The case $n=0$ is included: both sides are the singleton empty object. [step 3.1, L1, discharge-construct] ∎
