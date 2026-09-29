---
id: def-pcp-class-with-completeness-and-soundness
kind: definition
title: "PCP classes with completeness and soundness"
status: published
origin: pipeline
deps:
  - def-pcp-verifier-randomness-query-and-proof-length
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP Theorem by Gap Amplification"
      url: https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Let $r,q:\mathbb N\to\mathbb N$ be resource bounds and let $0\le s<c\le1$
be constants independent of input length. A language $K\subseteq\{0,1\}^*$
belongs to $\operatorname{PCP}(r,q;c,s)$ exactly when there are a verifier $V$
of the type in [[def-pcp-verifier-randomness-query-and-proof-length]], with
randomness bound $r(n)$ and query bound $q(n)$, a fixed finite proof alphabet,
and a polynomial $p$ such that its addressable proof length $L_V(n)$ is at
most $p(n)$ and the following hold for every input $x$ of length $n$:

- If $x\in K$, there is one fixed proof $\pi$ with
  $\Pr[V^\pi(x)\text{ accepts}]\ge c$.
- If $x\notin K$, every fixed proof $\pi$ satisfies
  $\Pr[V^\pi(x)\text{ accepts}]\le s$.

Both probabilities are over the verifier's coins; the same deterministic
proof is used for every coin string. In the shorthand
$\operatorname{PCP}(\log n,O(1))$, the proof alphabet is $\{0,1\}$, the
randomness is $O(\log n)$, the number of bit queries is bounded by a constant,
completeness is perfect ($c=1$), and soundness is at most some fixed constant
$s<1$. Here $O(1)$ means a constant query bound, not exactly one query.
