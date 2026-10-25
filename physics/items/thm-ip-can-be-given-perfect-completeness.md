---
id: thm-ip-can-be-given-perfect-completeness
kind: theorem
title: "IP admits perfect completeness"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-ip-equals-pspace, thm-ip-is-contained-in-pspace, thm-pspace-is-contained-in-ip]
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3 (perfect completeness of the TQBF protocol), author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

For every language $L\in\mathrm{IP}$ there is an interactive proof for $L$ with perfect completeness and soundness error at most $1/3$: an honest prover is accepted with probability one on every input of $L$, every prover is accepted with probability at most $1/3$ on every input outside $L$, and the verifier is a probabilistic polynomial-time machine with polynomially many rounds and polynomially bounded communication. The protocol need not be the given protocol for $L$.

## Facts & Assumptions

**Given:** A language $L\in\mathrm{IP}$.

[A1] Every language in IP lies in PSPACE ([[thm-ip-is-contained-in-pspace]], [[thm-ip-equals-pspace]]).

[A2] Every language in PSPACE has an interactive proof with a probabilistic polynomial-time verifier, polynomially bounded interaction, completeness one and soundness error at most $1/3$; the proof is obtained by reducing the input to TQBF and running the arithmetized sum-check-style protocol there ([[thm-pspace-is-contained-in-ip]]).



**Proof technique:** direct.

## Proof

1.1 By [A1] the language $L$ lies in PSPACE. [A1, given]

2.1 By [A2] the language $L$, being in PSPACE, has an interactive proof with perfect completeness and soundness error at most $1/3$, with a probabilistic polynomial-time verifier and polynomially bounded interaction. [step 1.1, A2, given]

3.1 That protocol is an interactive proof for $L$ with perfect completeness and constant soundness error, as required; it is constructed from the deterministic polynomial-time reduction of $L$ to TQBF and therefore may differ from any particular protocol for $L$ that was used to witness $L\in\mathrm{IP}$. [step 2.1, A2, given] ∎
