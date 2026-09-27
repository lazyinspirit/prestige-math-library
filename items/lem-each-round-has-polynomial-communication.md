---
id: lem-each-round-has-polynomial-communication
kind: lemma
title: "Explicit communication, round, and evaluation bounds"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-shamir-protocol-for-tqbf, lem-multilinearization-preserves-boolean-values, lem-efficient-prime-field-for-a-polynomial-soundness-budget, lem-formula-arithmetization-degree-and-evaluation-cost]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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

Let $\Phi$ be a closed prenex quantified Boolean formula on $n$ variables whose quantifier-free matrix $\psi$ has $L$ syntax nodes, let $T=n(n+3)/2$ and $D=\max\{L,2\}$, and let $p$ be the prime chosen by the verifier of the Shamir protocol of [[def-shamir-protocol-for-tqbf]], so that $p<2N$ for $N=\max\{2,12TD+1\}$. Then:

1. The protocol has at most $T=O(n^2)$ prover messages, one per reached round (exactly $T$ if all round checks pass), and no other prover messages.
2. Each prover message is a coefficient list with at most $D+1$ entries, each represented by an integer in $\{0,\dots,p-1\}$, hence by $\lceil\log_2p\rceil=O(\log(TD+2))$ bits. The prover sends at most $T(D+1)\lceil\log_2p\rceil$ bits; including the residue challenges, total communication is at most $T(D+2)\lceil\log_2p\rceil$, which is polynomial in the input length.
3. The verifier draws at most $2T\lceil\log_2p\rceil$ random bits, in blocks of $2\lceil\log_2p\rceil$ bits, and evaluates each legal received polynomial at $0,1$ and, if the check passes, at the challenge with $O(D)$ field operations per round.
4. If reached, the terminal evaluation of the matrix arithmetization costs $O(L)$ field operations, and every field operation used costs $O(\log^2p)$ bit operations. The rounds and the terminal step together cost $O\!\left((TD+L)\log^2p\right)$ bit operations. Including the deterministic prime search, the verifier's total cost is $O\!\left(N^2\log^2N+(TD+L)\log^2p\right)$ bit operations, still polynomial in the input length; when $T=0$, setting $p=3$ costs only constant time.

## Facts & Assumptions

**Given:** A closed prenex quantified Boolean formula $\Phi$ with $n$ variables and matrix $\psi$ of $L$ syntax nodes, and the protocol of [[def-shamir-protocol-for-tqbf]].

[A1] The protocol runs for at most $T$ rounds, stopping at a failed check, one prover message per round, each message a list of $D+1$ coefficients of a univariate of degree at most $D$; the challenge is read as one block of $k=2\lceil\log_2p\rceil$ random bits and reduced modulo $p$; the terminal evaluation of $b$ at the current point uses the arithmetic circuit of $\psi$ ([[def-shamir-protocol-for-tqbf]]).

[A2] The operator list has $T=n(n+3)/2$ entries and every node polynomial, after substituting arbitrary field elements for the variables other than its active variable, has degree at most $D=\max\{L,2\}$ in that active variable ([[lem-multilinearization-preserves-boolean-values]]).

[A3] The prime $p$ satisfies $12TD<p<2N\le\max\{4,24TD+2\}$, hence for $T\ge1$ one has $p=O(TD)$ and $\lceil\log_2p\rceil=O(\log(TD+2))$; for $T=0$ the protocol sets $N=2$ and $p=3$, so the same logarithmic bound holds; each residue occupies $\lceil\log_2p\rceil$ bits, addition and subtraction of residues cost $O(\log p)$ bit operations and multiplication costs $O(\log^2p)$ bit operations, so Horner evaluation of a degree-$D$ polynomial costs $O(D)$ field operations and $O(D\log^2p)$ bit operations ([[lem-efficient-prime-field-for-a-polynomial-soundness-budget]]).

[L1] The arithmetization $b=P_\psi$ of the matrix, with $L$ syntax nodes, is evaluated at any supplied point with $O(L)$ field operations ([[lem-formula-arithmetization-degree-and-evaluation-cost]]).

## Proof

**Proof technique:** direct calculation.

1.1 The protocol has one prover message in each reached round of its $T$-round schedule and no other prover message, because the initial claim $1$ is the verifier's own constant and the terminal step uses the verifier's evaluation of $b$; the operator list has $T=n(n+3)/2=n^2/2+3n/2$ entries by [A2], so at most $T=O(n^2)$ prover messages are sent, with equality if all checks pass, and claim 1 holds. This includes $n=0$, where $T=0$ and there is no message at all. [A1, A2, algebra]

1.2 Each message is a list of $D+1$ coefficients by [A1], and a coefficient is a residue represented by an integer in $\{0,\dots,p-1\}$; by [A3] each such integer needs $\lceil\log_2p\rceil=O(\log(TD+2))$ bits, so a message costs $(D+1)\lceil\log_2p\rceil$ bits and the prover communication is at most $T(D+1)\lceil\log_2p\rceil$ bits. At most $T$ residue challenges add at most $T\lceil\log_2p\rceil$ bits, giving the stated two-way bound. Since $n$ and $L$ are bounded by the input length and $D=\max\{L,2\}$, this is polynomial in the input length, which is claim 2. [A1, A3, algebra]

1.3 Each round whose check passes reads exactly one block of $k=2\lceil\log_2p\rceil$ bits, so the run reads at most $2T\lceil\log_2p\rceil$ random bits in total. In a round with a legal message the verifier evaluates it at the two Boolean points and, if the check passes, at the challenge, which is at most three Horner evaluations of a degree-$D$ polynomial: by [A3] this costs $O(D)$ field operations, or $O(D\log^2p)$ bit operations, per round. This is claim 3. [A1, A3, algebra]

2.1 If the terminal step is reached, the verifier evaluates $b$ at one point of $F^n$ using the arithmetic circuit of $\psi$; by [L1] this costs $O(L)$ field operations, hence $O(L\log^2p)$ bit operations by [A3]. The rounds contribute $O(TD\log^2p)$ bit operations by step 1.3, including the constant-size identity checks, fixed-width message checks and reduction of each challenge block modulo $p$. Thus the rounds and terminal step together cost $O((TD+L)\log^2p)$ bit operations. [step 1.3, A1, A3, L1, algebra]

3.1 For $T\ge1$, the prime-search clause of [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]] supplies the additional $O(N^2\log^2N)$ bit-operation cost: there are at most $N^2$ trial divisions, each on $O(\log N)$-bit integers. For $T=0$, [A1] sets $p=3$ in constant time, also within that bound. Adding this setup cost to step 2.1 gives claim 4. Since $N=\max\{2,12TD+1\}$ and $n,L$ are bounded by the input length, the total bound is polynomial. All bounds hold for every random tape and every prover, with malformed messages rejected at the fixed message-length cap, so they are worst-case bounds. [step 2.1, A1, A3, algebra] ∎
