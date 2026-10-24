---
id: cor-busy-beaver-is-not-computable
kind: corollary
title: "The busy beaver function is not computable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-busy-beaver-function, thm-busy-beaver-dominates-every-total-computable-function, def-computable-and-partial-computable-function]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Adam Yedidia and Scott Aaronson, A Relatively Small Turing Machine Whose Behavior Is Independent of Set Theory"
      url: "https://www.scottaaronson.com/busybeaver.pdf"
---

## Statement

The busy beaver function $BB:\mathbb N\to\mathbb N$ is not computable.

## Facts & Assumptions

**Given:** The busy beaver function $BB$.

[L1] Every total computable function is eventually dominated by $BB$, by [[thm-busy-beaver-dominates-every-total-computable-function]].

[L2] "Computable" means total computable in the sense of [[def-computable-and-partial-computable-function]].

[L3] The function named $BB$ is the busy beaver function of [[def-busy-beaver-function]].

## Proof

**Proof technique:** direct.

1.1 Suppose for contradiction that $BB$ were computable in the sense of [L2]. Then the function $g(n):=BB(n)+1$ would also be total computable. [assume-contra, L2, L3, algebra]

2.1 Applying [L1] to the computable function $g$ yields an $N$ such that $BB(n)\ge g(n)=BB(n)+1$ for every $n\ge N$. That is impossible. [L1, step 1.1, contradiction]

3.1 Therefore $BB$ is not computable. [step 2.1, discharge-contradiction: a computable busy beaver would dominate itself plus one] ∎
