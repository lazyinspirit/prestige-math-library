---
id: thm-zpp-equals-rp-intersection-corp
kind: theorem
title: "ZPP equals RP intersection coRP"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rp-corp-zpp-bpp-and-pp, thm-markov-inequality]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Statement

$$\mathrm{ZPP}=\mathrm{RP}\cap\mathrm{coRP}.$$

## Facts & Assumptions

**Given:** the randomized classes RP, coRP, and ZPP.

[L1] RP, coRP, and ZPP are defined by one-sided error, complementary one-sided error, and zero-error expected polynomial time respectively ([[def-rp-corp-zpp-bpp-and-pp]]).

[L2] If $T$ is a nonnegative random variable and $a>0$, then $\mathbb P(T\ge a)\le \mathbb E[T]/a$ ([[thm-markov-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $L\in\mathrm{ZPP}$ and let $M$ be a zero-error expected-time machine for $L$ with $\mathbb E[T_x]\le p(|x|)$. Run $M$ for exactly $2p(|x|)$ steps and accept iff it has accepted by then. Because $M$ never errs, this truncated machine never accepts a no-instance. By [L2], $\mathbb P(T_x>2p(|x|))\le 1/2$, so on yes-instances it accepts with probability at least $1/2$. Thus $L\in\mathrm{RP}$. By the same truncation with accept and reject swapped, also $L\in\mathrm{coRP}$. [L1, L2, given]

1.2 Conversely, suppose $L\in\mathrm{RP}\cap\mathrm{coRP}$. Choose an RP machine $M_{\mathrm{yes}}$ for $L$ and a coRP machine $M_{\mathrm{no}}$ for $L$. On input $x$, perform independent rounds; in each round run both machines with fresh randomness. If $M_{\mathrm{yes}}$ accepts, accept. If $M_{\mathrm{no}}$ rejects, reject. Otherwise repeat. By [L1], on a yes-instance the first event occurs with probability at least $1/2$ and the second never occurs, while on a no-instance the second occurs with probability at least $1/2$ and the first never occurs. So the algorithm is zero-error and the expected number of rounds is at most $2$. [L1, construct]

2.1 Each round of step 1.2 uses polynomial time, so the expected runtime is polynomial. Hence $L\in\mathrm{ZPP}$, proving the reverse inclusion. Therefore $\mathrm{ZPP}=\mathrm{RP}\cap\mathrm{coRP}$. [step 1.2, L1, algebra] ∎
