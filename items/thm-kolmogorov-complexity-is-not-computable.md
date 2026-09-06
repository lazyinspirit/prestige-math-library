---
id: thm-kolmogorov-complexity-is-not-computable
kind: theorem
title: "Kolmogorov complexity is not computable"
status: published
origin: session
deps: [def-optimal-description-machine, def-computable-and-partial-computable-function]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, Theorem 3"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement
For a fixed optimal description machine $U$, the function $x\mapsto C_U(x)$ is not computable.
## Proof
**Given:** an optimal machine $U$.

1.1 Suppose for contradiction that $C_U$ is computable. For each $n$, search lexicographically among strings of length $n$ for the first $x_n$ with $C_U(x_n)\ge n$; such an $x_n$ exists because fewer than $2^n$ programs have length below $n$. [assume-contra, given]

2.1 The search makes $n\mapsto x_n$ computable, so a fixed description machine maps a self-delimiting encoding of $n$ to $x_n$ using $O(\log n)$ bits. Optimality [[def-optimal-description-machine]] transfers this to $C_U(x_n)\le O(\log n)$, contradicting $C_U(x_n)\ge n$ for large $n$. [step 1.1, discharge-contradiction] ∎
