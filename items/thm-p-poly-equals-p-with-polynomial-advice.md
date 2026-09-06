---
id: thm-p-poly-equals-p-with-polynomial-advice
kind: theorem
title: "P/poly equals polynomial time with polynomial advice"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-circuit-family-and-p-poly, def-polynomial-advice-machine, thm-p-is-contained-in-p-poly]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Lance Fortnow, Counting Complexity"
      url: "https://lance.fortnow.com/papers/files/counting.pdf"
---

## Statement

$\mathrm{P/poly}$ is exactly the class of languages decided in polynomial time
with polynomial-length advice.

## Facts & Assumptions

**Given:** the circuit-family and advised-machine conventions of the claim.

[L1] A $\mathrm{P/poly}$ language has a polynomial-size circuit $C_n$ at each input length $n$, by [[def-circuit-family-and-p-poly]].

[L2] Advice may depend on the input length and need not be computable, but has polynomial length, by [[def-polynomial-advice-machine]].

[L3] Every polynomial-time language has polynomial-size circuits, by [[thm-p-is-contained-in-p-poly]].

## Proof

**Proof technique:** direct.

1.1 Suppose $(C_n)$ has size at most $p(n)$. Encode $C_n$ as a topologically ordered gate list: each of its at most $p(n)$ records contains a constant-size gate tag and at most two indices of $O(\log(n+p(n)))$ bits. This is polynomial advice. A fixed evaluator scans the list in topological order and computes $C_n(x)$ in polynomial time, so [L2] gives an advised decider. [L1, L2, given]

1.2 Conversely, let $M(x,a_n)$ run in polynomial time with $|a_n|\le p(n)$. Use a fixed self-delimiting encoding $\langle x,a\rangle$ whose length depends only on $|x|$ and $|a|$, and let $B=\{\langle x,a\rangle:M(x,a)=1\}$. This is a language in $\mathrm P$, so [L3] supplies polynomial-size circuits for $B$. For a fixed $n$, put $m_n=|a_n|$ and take the circuit for the common encoding length of $\langle x,a_n\rangle$ with $|x|=n$. Hardwire the delimiter bits and all bits of $a_n$, leaving only the $n$ bits of $x$ free. Because $m_n\le p(n)$, the resulting $n$-input circuit has polynomial size and agrees with the original computation $M(x,a_n)$; no change to the advice string or its length is made. [L2, L3, given, construct]

2.1 Step 1.1 proves the circuit-to-advice inclusion and step 1.2 proves the advice-to-circuit inclusion, including the advice-length and simulation-size bounds. [step 1.1, step 1.2] ∎
