---
id: thm-ip-equals-pspace
kind: theorem
title: "IP equals PSPACE"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-pspace-is-contained-in-ip, thm-ip-is-contained-in-pspace, def-ip]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Theorem 8.17, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

$$\mathrm{IP}=\mathrm{PSPACE},$$

where $\mathrm{IP}$ is the class of languages with a constant-error interactive proof ([[def-ip]]) and $\mathrm{PSPACE}$ is the class of languages decidable in polynomial space. Equivalently, a language has an interactive proof with a probabilistic polynomial-time verifier, polynomially bounded interaction and constant gap between completeness and soundness if and only if it is decidable by a deterministic polynomial-space machine.

## Facts & Assumptions

**Given:** The classes IP and PSPACE.

[A1] $\mathrm{PSPACE}\subseteq\mathrm{IP}$: every language in PSPACE has an interactive proof with a probabilistic polynomial-time verifier, polynomially bounded interaction, perfect completeness and soundness error at most $1/3$ ([[thm-pspace-is-contained-in-ip]]).

[A2] $\mathrm{IP}\subseteq\mathrm{PSPACE}$: every language in IP is decidable in polynomial space ([[thm-ip-is-contained-in-pspace]]).

[A3] Two classes of languages are equal exactly when each is contained in the other; IP here is the class defined by the constant-error convention with completeness at least $2/3$ and soundness at most $1/3$ ([[def-ip]]).

## Proof

**Proof technique:** direct.

1.1 The reverse containment $\mathrm{PSPACE}\subseteq\mathrm{IP}$ is [A1]: for every $L\in\mathrm{PSPACE}$ there is an interactive proof whose verifier is probabilistic polynomial time and whose completeness and soundness satisfy the defining constants of IP, so $L\in\mathrm{IP}$. [A1, A3, given]

1.2 The forward containment $\mathrm{IP}\subseteq\mathrm{PSPACE}$ is [A2]: every language with such an interactive proof is decidable by a polynomial-space machine. [A2, given]

2.1 Since each of the two classes is contained in the other, they are equal by [A3]. In particular the equality does not require any strengthening of the space bounds used in either inclusion, and the constant-error convention used on both sides is the one fixed in the definitions. [step 1.1, step 1.2, A3, given] ∎
