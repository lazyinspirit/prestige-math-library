---
id: lem-sum-check-verifier-is-polynomial-time-given-point-evaluation
kind: lemma
title: "Sum-check verifier resources"
status: published
origin: pipeline
deps: [def-sum-check-instance-and-protocol]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a74.1 Discussion of costs, Table 4.1 and Remark 4.2, pp.37\u201339"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

With $D=\sum_{i=1}^n(d_i+1)$, call a prover transcript **well formed** when every coefficient list meets its format and degree cap. In the next paragraph, “execution” means an execution whose received transcript is well formed, and “$n$ rounds” is the protocol's schedule; an early-rejecting execution may complete fewer. Under streaming reception, an arbitrary execution receives at most $D+1$ prover field elements before the verifier can detect and reject the first excess coefficient.

In sum-check with $n\geq1$, put $D=\sum_{i=1}^n(d_i+1)$. An execution uses at most $D$ prover field elements, at most $n$ verifier field elements, $n$ independent uniform field samples on a full execution, and $n$ rounds. The verifier uses $O(D)$ field operations plus at most one trusted point evaluation; a full execution reaching the terminal check uses exactly one such evaluation. Early rejection may shorten these costs. Coefficient lists may be zero-padded to attain the $D$ bound.

With supplied $b$-bit field representations, efficient encoding checks and field operations of bit cost at most $A(b)$, the bit work is $O(D(A(b)+b))$ plus trusted evaluation and sampling costs. Polynomial time is conditional on polynomial bounds for these quantities and $D$. With an efficient bijective indexing of field elements by $\{0,\ldots,q-1\}$, $q=|F|$, rejection sampling uses expected $O(\lceil\log_2 q\rceil)$ random bits per sample. If $q=2^b$ with such a $b$-bit encoding, a full execution uses exactly $nb$ random bits.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Sum-check caps each coefficient list at d_i+1, samples a fresh challenge each round and uses trusted evaluation only for the terminal comparison ([[def-sum-check-instance-and-protocol]]).

## Proof

1.1 At round $i$ a well-formed coefficient list has at most $d_i+1$ entries. Under streaming reception, read at most $d_i+2$ field elements and reject immediately upon receiving the first excess coefficient; an explicit valid length prefix can make this detection cheaper. For a well-formed list, evaluate $h_i$ at $0,1,r_i$ by the recurrence $v\leftarrow Tv+a_j$ from highest coefficient downwards. Each evaluation costs $O(d_i+1)$ field operations, also for a zero or constant message. [F1, algebra]

2.1 Summing the per-round work for a well-formed transcript gives $O(D)$ operations and at most $D$ received field elements. If the first overlength message occurs in round $i$, the earlier rounds contribute at most $\sum_{j<i}(d_j+1)$ elements and that round contributes at most $d_i+2$, for a total at most $D+1$; other malformed messages stop no later. The protocol uses one fresh sample per completed round and sends at most one field element per round; the last need not be sent. It makes its only call to $g$ at the terminal comparison. Encoding checks and reading cost $O(Db)$, and arithmetic costs $O(DA(b))$; adding evaluation and sampling costs gives the stated bit bound. This includes $n=1$ and every zero bound $d_i=0$. [F1, step 1.1, algebra]

3.1 For indexed sampling put $c=\lceil\log_2 q\rceil$. Draw $c$ fair bits as an integer $J$ and retry if $J\geq q$. The acceptance probability is $q/2^c>1/2$ (or one if $q$ is a power of two), and conditional on acceptance every valid index has probability $1/q$. The expected number of trials is $\sum_{k\geq0}(1-q/2^c)^k=2^c/q<2$. Thus expected random-bit use is less than $2c$ per sample; for $q=2^b$ every trial succeeds and exactly $nb$ bits suffice for all rounds. Efficient index conversion is part of the sampling assumption, not a consequence of arbitrary encodings. [given, algebra] ∎
