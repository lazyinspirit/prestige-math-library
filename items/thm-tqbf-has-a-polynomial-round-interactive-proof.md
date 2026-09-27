---
id: thm-tqbf-has-a-polynomial-round-interactive-proof
kind: theorem
title: "TQBF has a polynomial-round interactive proof"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-shamir-protocol-has-perfect-completeness, lem-total-soundness-follows-by-union-bound, lem-shamir-qbf-verifier-runs-in-polynomial-time, lem-each-round-has-polynomial-communication, def-shamir-protocol-for-tqbf, def-ip]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Theorem 8.17 and §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

$\mathrm{TQBF}\in\mathrm{IP}$: the language of true closed prenex quantified Boolean formulas has a public-coin interactive proof with perfect completeness and soundness error at most $1/3$, in which the verifier is a probabilistic polynomial-time machine and the number of rounds and the communicated bits are bounded by polynomials in the input length. Concretely, on input $\Phi$ the verifier runs the Shamir protocol of [[def-shamir-protocol-for-tqbf]] for $\Phi$ with the following public-coin message convention: after a passed round check it sends the full fresh block $U_t\in\{0,1\}^{2\lceil\log_2p\rceil}$ instead of just its residue $r_t$, and both parties compute $r_t=U_t\bmod p$; the honest prover is accepted with probability $1$ when $\Phi\in\mathrm{TQBF}$, and no prover is accepted with probability more than $1/3$ when $\Phi\notin\mathrm{TQBF}$, including malformed inputs.

## Facts & Assumptions

**Given:** The language TQBF of true closed prenex quantified Boolean formulas under a fixed effective encoding.

[A1] The class $\mathrm{IP}$ consists of the languages having an interactive protocol with a probabilistic polynomial-time verifier, polynomially bounded rounds and communication, completeness at least $2/3$ and soundness at most $1/3$ ([[def-ip]]).

[A2] On every true input the honest prover of the Shamir protocol is accepted with probability one ([[lem-shamir-protocol-has-perfect-completeness]]).

[A3] On every false input the acceptance probability of every prover is at most $2TD/p<1/6<1/3$ ([[lem-total-soundness-follows-by-union-bound]]).

[A4] The verifier is a probabilistic polynomial-time machine; it rejects malformed inputs immediately, parses it otherwise, and its running time, randomness consumption and communication are polynomial in the input length ([[lem-shamir-qbf-verifier-runs-in-polynomial-time]]).

[A5] The protocol has at most $T=O(n^2)$ rounds with one message per round, each message of at most $D+1$ field elements of $O(\log(TD+2))$ bits, and its verifier state updates and tests use each sampled block only through its residue ([[lem-each-round-has-polynomial-communication]], [[def-shamir-protocol-for-tqbf]]).



**Proof technique:** direct.

## Proof

1.1 By [A4] the verifier runs in polynomial time and, by [A5], the interaction has polynomially many rounds and messages of polynomial total length; in the variant specified in the statement each verifier message is its full fresh random block, and these blocks are all its coins. Thus this variant is public-coin. It sends at most $2T\lceil\log_2p\rceil$ verifier bits and at most $T(D+1)\lceil\log_2p\rceil$ prover bits; computing the same residues leaves the verifier time polynomial. [A4, A5, given]

1.2 If $\Phi\in\mathrm{TQBF}$ then $\Phi$ is true and the honest prover computes each residue from the revealed block and otherwise uses the original strategy. On every random tape the messages and verifier state coincide with the original run, so [A2] gives acceptance with probability one, so completeness is $1\ge2/3$. [A2, given]

1.3 For any prover in the public-coin variant, construct a randomized prover in the residue-message protocol as follows. Upon receiving $r_t$, independently sample a uniformly distributed block from the nonempty finite set $\{U\in\{0,1\}^k:U\bmod p=r_t\}$, and give this block to the simulated prover. Conditional on $r_t$, this is exactly the distribution of the verifier's real block; the verifier uses no other information from that block. Induction over reached rounds therefore gives the same joint law of prover messages, residues and acceptance in the two protocols. The simulation uses no future verifier coins, so it is an allowed randomized strategy in [A3]. Thus on a well-formed false input [A3] gives acceptance probability at most $2TD/p<1/3$ also in the public-coin variant. Malformed inputs reject immediately by [A4]. [A3, A4, A5, given]

2.1 Steps 1.1, 1.2 and 1.3 verify every clause of the definition of $\mathrm{IP}$ in [A1] for the language TQBF: a probabilistic polynomial-time verifier, polynomially bounded interaction, completeness at least $2/3$ and soundness at most $1/3$; hence $\mathrm{TQBF}\in\mathrm{IP}$, which is the statement. [step 1.1, step 1.2, step 1.3, A1] ∎
