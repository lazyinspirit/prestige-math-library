---
id: lem-shamir-qbf-verifier-runs-in-polynomial-time
kind: lemma
title: "Shamir verifier runs in polynomial time"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-shamir-protocol-for-tqbf, lem-each-round-has-polynomial-communication, lem-efficient-prime-field-for-a-polynomial-soundness-budget, def-interactive-proof-transcript-round-and-strategy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 and Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

Let an input $\Phi$ be a closed prenex quantified Boolean formula on $n$ variables whose matrix has $L$ syntax nodes, let $\ell$ be the input length, and let $T=n(n+3)/2$, $D=\max\{L,2\}$, $N=\max\{2,12TD+1\}$ and $p<2N$ be the parameters of the Shamir protocol of [[def-shamir-protocol-for-tqbf]]. Then the verifier of that protocol:

1. uses $p=3$ when $T=0$ and otherwise performs the deterministic prime search of [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]] in $O(N^2\log^2N)$ bit operations; it rejects a malformed input immediately;
2. runs at most $T$ rounds, in each of which it performs $O(D)$ field operations on the received message and, only if that round passes, reads one block of $2\lceil\log_2p\rceil$ fresh random bits; if all round checks pass, it then evaluates the matrix arithmetization at one point in $O(L)$ field operations;
3. consequently runs in worst-case time $O\!\left(N^2\log^2N+(TD+L)\log^2p\right)$ bit operations, which is polynomial in $\ell$, and uses at most $2T\lceil\log_2p\rceil$ random bits.

The verifier is therefore a probabilistic polynomial-time machine in the sense of [[def-interactive-proof-transcript-round-and-strategy]]: a fixed deterministic procedure whose running time on every input and every random tape is bounded by a polynomial in the input length.


## Facts & Assumptions

**Given:** A closed prenex quantified Boolean formula $\Phi$ with $n$ variables and a matrix of $L$ syntax nodes, and the protocol of [[def-shamir-protocol-for-tqbf]].

[A1] On input that is not a well-formed closed prenex formula the verifier rejects immediately; otherwise it runs at most $T$ rounds, checks the format and the identity of each received list, draws one challenge block of $k=2\lceil\log_2p\rceil$ bits per passed round, and, if no round rejects, finishes with the evaluation of $b$ at the current point; the prime $p$ depends on the input alone, being $3$ for $T=0$ and otherwise found by the deterministic search of [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]] ([[def-shamir-protocol-for-tqbf]]).

[A2] The protocol has at most $T$ messages, each with at most $D+1$ entries; the verifier reads at most $2T\lceil\log_2p\rceil$ random bits; per round it performs $O(D)$ field operations, and the terminal evaluation costs $O(L)$ field operations ([[lem-each-round-has-polynomial-communication]]).

[A3] For $T\ge1$, the deterministic search for $p$ performs at most $N^2$ trial divisions and $O(N^2\log^2N)$ bit operations, and $p=O(TD)$ with $\lceil\log_2p\rceil=O(\log(TD))$ ([[lem-efficient-prime-field-for-a-polynomial-soundness-budget]]). For $T=0$ the protocol sets $N=2$ and $p=3$ directly. In both cases $\lceil\log_2p\rceil=O(\log(TD+2))$, and every field operation on residues of $\mathbb Z/p$ costs $O(\log^2p)$ bit operations.

[L1] A probabilistic polynomial-time verifier is a deterministic machine with a read-only random tape whose computation time is bounded by a polynomial in the input length on every input and every random tape ([[def-interactive-proof-transcript-round-and-strategy]]).



**Proof technique:** direct calculation.

## Proof

1.1 The verifier first parses the input and, if the input is malformed, rejects; otherwise it uses $p=3$ when $T=0$, and when $T\ge1$ it runs the deterministic search for $p$, which by [A3] uses at most $N^2$ trial divisions and $O(N^2\log^2N)$ bit operations. The direct $T=0$ choice also fits this bound. [A1, A3, given]

1.2 Fix a round and a received message. Format checking inspects at most $D+1$ coefficients; evaluating the message at $0$ and at $1$ costs $O(D)$ field operations, and the identity test then costs a constant number of field operations. If the check passes, drawing the challenge block costs one read of $k=2\lceil\log_2p\rceil$ bits and one reduction modulo $p$, and the update evaluates $s$ at the challenge, again $O(D)$ field operations. So each round costs $O(D)$ field operations and at most $k$ random bits. [A1, A2, A3, algebra]

2.1 There are at most $T$ rounds, so the rounds cost $O(TD)$ field operations and at most $Tk=2T\lceil\log_2p\rceil$ random bits in total; no step of the verifier loops unboundedly, since the round count and the message-length caps are fixed functions of the input. [step 1.2, A1, A2, algebra]

3.1 If the terminal step is reached, the verifier evaluates $b$ at one point of $F^n$, which costs $O(L)$ field operations by [A2]; together with step 2.1 the field-operation count of the whole run is $O(TD+L)$, which by [A3] is $O((TD+L)\log^2p)$ bit operations. [step 2.1, A2, A3, algebra]

4.1 Adding the search cost of step 1.1 gives the bound $O(N^2\log^2N+(TD+L)\log^2p)$ claimed in item 3; here $T=n(n+3)/2$, $n\le\ell$, $L\le\ell$, $D=\max\{L,2\}$ and $p<2N$. When $T\ge1$, $N=12TD+1$ and hence $2N=24TD+2$; when $T=0$, $N=2$ and the protocol directly sets $p=3<4=2N$. Thus $N$ and $p$ are polynomially bounded in $\ell$, so the displayed bit bound is polynomial in $\ell$. The verifier is a deterministic machine with an explicit polynomial bound on its steps for every input and every random tape, so by [L1] it is a probabilistic polynomial-time machine, as claimed. [step 1.1, step 3.1, A1, A3, L1, algebra] ∎
