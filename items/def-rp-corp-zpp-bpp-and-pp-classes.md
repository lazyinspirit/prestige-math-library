---
id: "def-rp-corp-zpp-bpp-and-pp-classes"
kind: "definition"
title: "Rp corp zpp bpp and pp classes"
status: published
origin: "pipeline"
deps: ["def-probabilistic-polynomial-time-machine-interface", "thm-markov-inequality", "thm-nonnegative-series-bounded-partial-sums"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Arora–Barak §7.3; local finite-prefix expectation convention"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
proof_strategy: "direct"
---

## Definition

For a polynomial all-branch PTM, let $a(x)$ be its acceptance probability as in [[def-probabilistic-polynomial-time-machine-interface]]. RP requires $a(x)\ge1/2$ on L and $a(x)=0$ off L. coRP requires $a(x)=1$ on L and $a(x)\le1/2$ off L. BPP requires $a(x)\ge2/3$ on L and $a(x)\le1/3$ off L. PP requires $a(x)>1/2$ on L and $a(x)\le1/2$ off L. Each class quantifies existence of one fixed PTM with the indicated behavior. In particular PP uses a strict majority on members, not a bounded-error gap.

For a possibly unbounded PTM on fixed x, let $q_j$ be the fraction of length-j bit words on which it has not halted after j transitions. Halting branches are extended by ignored bits, so $q_{j+1}\le q_j$. Define expected runtime by the nonnegative survival sum
$$\mathbb E T=\sum_{j\ge0}q_j\in[0,\infty].$$
The sum is the supremum of its finite partial sums, or infinity if they are unbounded. Define probability-one halting to mean $q_j\to0$. Zero error means every halting branch gives the correct yes/no answer. ZPP consists of languages with such a zero-error PTM and $\mathbb ET\le p(|x|)$ for a fixed positive integer polynomial p. This definition uses finite prefixes and nonnegative series; it does not presuppose an infinite product probability space.

Equivalently, ZPP has a polynomial all-branch PTM with outputs yes/no/unknown, never wrong, and unknown probability at most $1/2$ on each input. Moreover $\mathrm{ZPP}=\mathrm{RP}\cap\mathrm{coRP}$.

## Facts & Assumptions

**Given:** The finite-prefix definitions above. A restart uses a fresh block of bits and restores the initial work configuration.

[F1] Independent uniform bit strings and ignored suffixes implement PTM probabilities ([[def-probabilistic-polynomial-time-machine-interface]]).

[F2] A nonnegative real series is the supremum of its partial sums if bounded, and diverges to infinity otherwise ([[thm-nonnegative-series-bounded-partial-sums]]).

[F3] For a nonnegative finite-space variable Y and $a>0$, $\mathbb P(Y\ge a)\le\mathbb EY/a$ ([[thm-markov-inequality]]).

## Verification

1.1 At a finite cutoff K, $\min(T,K)=\sum_{j<K}\mathbf1_{\{T>j\}}$ on the finite space of K bits, so its expectation is $\sum_{j<K}q_j$. The equality follows pointwise by counting the j before the truncated halt. Thus F2 makes the displayed survival sum an exact extension of finite expected runtime. On the K-bit space $\mathbb P(\min(T,K)\ge K)=q_{K-1}$ for K positive, hence F3 gives $q_K\le q_{K-1}\le\mathbb ET/K$. This also follows by adding the first K decreasing survival terms. If the expectation is finite, choosing arbitrarily large K shows $q_K\to0$. No nonhalting mass has been silently omitted from a sum over halting prefixes. [F1, F2, F3, given]

2.1 Given expected runtime at most p(n), truncate the machine after $2p(n)$ simulated transitions, preserving any halt reached on the last allowed transition, and return unknown otherwise. Step 1.1 bounds unknown probability $q_{2p(n)}\le1/2$. A deterministic counter and a direct simulation of this one fixed machine cost polynomial time even if a counter scan is used at every transition. A returned yes/no is an actual terminal answer, so it is never wrong. This proves the bounded-unknown formulation from the expected-time one. [step 1.1, F1]

2.2 Conversely let a bounded-unknown algorithm cost at most p(n) per attempt. Repeat after unknown, with disjoint fresh blocks, until yes/no. Include input restoration and block generation in a larger polynomial bound P(n). Independence of complete blocks gives probability of reaching attempt r at most $2^{-(r-1)}$, by multiplying the conditional failure probability at each restart. Grouping the first KP(n) survival terms by attempts gives expected runtime at most $P(n)\sum_{r=0}^{K-1}2^{-r}\le2P(n)$. The finite sum identity follows on multiplying by one half and subtracting: $\sum_{r<K}2^{-r}=2(1-2^{-K})$. Every shorter prefix sum has the same upper bound by monotonicity, so F2 gives total expectation at most $2P(n)$. Step 1.1 gives probability-one halting; no attempt can return a wrong answer. [step 1.1, F1, F2]

3.1 If L is in both RP and coRP, run its two bounded machines with independent bit blocks. An RP acceptance certifies membership; a coRP rejection certifies nonmembership; if neither occurs, output unknown. On a member the coRP machine never rejects and the RP machine certifies yes with probability at least one half. On a nonmember the RP machine never accepts and the coRP machine certifies no with probability at least one half. Both certificates cannot occur on any input branch: a zero-probability bad terminal event in a finite uniform space is empty. Thus this procedure is never wrong and has unknown probability at most one half. [F1, step 2.1, step 2.2, given]

4.1 From a bounded-unknown zero-error procedure obtain an RP machine by interpreting unknown as no, and a coRP machine by interpreting unknown as yes. The successful correct answer has probability at least one half on the relevant input side; the opposite wrong certificate has probability zero. Together with step 3.1 and the equivalence established above, this proves $\mathrm{ZPP}=\mathrm{RP}\cap\mathrm{coRP}$. Empty languages, full languages and empty input cause no change: the polynomial guard is positive and the correct deterministic output is permitted. None of these transformations changes PP's strict threshold to a BPP gap. [step 2.1, step 2.2, step 3.1, given] ∎
