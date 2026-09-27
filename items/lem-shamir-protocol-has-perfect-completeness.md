---
id: lem-shamir-protocol-has-perfect-completeness
kind: lemma
title: "Shamir protocol has perfect completeness"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-honest-prover-maintains-the-claim-invariant, def-shamir-protocol-for-tqbf, def-ip]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

Let $\Phi$ be a true closed prenex quantified Boolean formula and let the Shamir protocol of [[def-shamir-protocol-for-tqbf]] run on $\Phi$ with its honest prover $P_h$. Then $P_h$ is a legal prover strategy and the verifier accepts on every random tape, so the protocol has completeness $1$ on $\Phi$. Consequently every true TQBF input has an honest prover that is accepted with probability one.

## Facts & Assumptions

**Given:** A true closed prenex quantified Boolean formula $\Phi$ and the Shamir protocol for $\Phi$ with its honest prover $P_h$.

[A1] For every fixed random tape, every verifier test of the run passes and the terminal test accepts ([[lem-honest-prover-maintains-the-claim-invariant]]).

[A2] The honest prover's message in a round is determined by the node index and the public current point and claim, both of which are produced by the verifier from the messages exchanged so far; illegal or malformed prover messages are rejected, and an input that is not a well-formed closed prenex formula is rejected immediately ([[def-shamir-protocol-for-tqbf]]).

[A3] $c$-completeness of a protocol means that on every input of the language an honest prover strategy makes the verifier accept with probability at least $c$, the probability being over the verifier's coins; the class $\mathrm{IP}$ requires some constant-gap protocol with completeness at least $2/3$ ([[def-ip]]).

## Proof

**Proof technique:** direct.

1.1 Fix a random tape. By [A1] every test of the run passes and the terminal test accepts, so this tape leads to acceptance; since the tape was arbitrary, the honest prover is accepted for every one of the $2^{p(|x|)}$ random tapes of the verifier, hence with probability one on $\Phi$. [A1, given]

1.2 The honest prover is a legal strategy: in each round its message is a coefficient list of degree at most $D$ as stated in [[def-shamir-protocol-for-tqbf]], it is determined by the public information of the current point and claim, and it never waits on private verifier history; the verifier's own rejection rules for malformed messages therefore never fire. [A2, given]

2.1 Combining the two steps, on the true input $\Phi$ the honest prover makes the verifier accept with probability $1$, so $\Phi$ has completeness $1$; in particular $1\ge2/3$, and since $\Phi$ was an arbitrary true TQBF input the same holds for every true input, which is exactly the statement. [step 1.1, step 1.2, A3, given] ∎
