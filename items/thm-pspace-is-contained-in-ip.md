---
id: thm-pspace-is-contained-in-ip
kind: theorem
title: "PSPACE is contained in IP"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-tqbf-has-a-polynomial-round-interactive-proof, thm-tqbf-is-pspace-complete, def-ip]
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
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Theorem 8.17 and §8.5, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

$\mathrm{PSPACE}\subseteq\mathrm{IP}$: every language in PSPACE has an interactive proof with perfect completeness and soundness error at most $1/3$, whose verifier is a probabilistic polynomial-time machine with polynomially many rounds and polynomially bounded communication. Explicitly, for $L\in\mathrm{PSPACE}$ there is a polynomial-time computable reduction $f$ with $x\in L$ if and only if $f(x)\in\mathrm{TQBF}$, and the protocol that runs the verifier of [[thm-tqbf-has-a-polynomial-round-interactive-proof]] on $f(x)$ is such a proof for $L$.

## Facts & Assumptions

**Given:** A language $L$ in PSPACE.

[A1] TQBF is PSPACE-complete: TQBF lies in PSPACE and every language in PSPACE polynomial-time many-one reduces to TQBF, a reduction being a polynomial-time computable map that preserves yes and no instances exactly ([[thm-tqbf-is-pspace-complete]]).

[A2] TQBF has an interactive proof with a probabilistic polynomial-time verifier, perfect completeness and soundness error at most $1/3$; the verifier's running time, round count and communication are polynomial in its input length ([[thm-tqbf-has-a-polynomial-round-interactive-proof]]).

[A3] A language lies in $\mathrm{IP}$ when it has an interactive protocol with a probabilistic polynomial-time verifier, polynomially bounded interaction, completeness at least $2/3$ and soundness at most $1/3$ ([[def-ip]]).



**Proof technique:** direct.

## Proof

1.1 By [A1] there is a polynomial-time computable map $f$ with $x\in L$ if and only if $f(x)\in\mathrm{TQBF}$; since $f$ runs in polynomial time, there is a polynomial $q$ with $|f(x)|\le q(|x|)$ for every input $x$. [A1, given]

2.1 Define the verifier $V_L$ for $L$ as follows: on input $x$, compute $\Phi_x:=f(x)$ deterministically and then run the TQBF verifier $V$ of [A2] on input $\Phi_x$, forwarding the prover's messages to $V$ and $V$'s messages to the prover. Since $f$ is computable in polynomial time and $V$ runs in time polynomial in $|\Phi_x|\le q(|x|)$, the machine $V_L$ is a probabilistic polynomial-time machine, and the protocol has polynomially many rounds and polynomially bounded communication because those bounds for $V$ are polynomial in $|\Phi_x|$. [step 1.1, A2, construct]

2.2 If $x\in L$ then $\Phi_x\in\mathrm{TQBF}$ by step 1.1, so by [A2] the honest prover for $V$ on $\Phi_x$, used as the prover for $V_L$, is accepted with probability one, in particular at least $2/3$. [step 1.1, A2]

2.3 If $x\notin L$ then $\Phi_x\notin\mathrm{TQBF}$ by step 1.1, so by [A2] every prover for $V$ on input $\Phi_x$ is accepted with probability at most $1/3$; a prover for $V_L$ on $x$ induces such a prover for $V$ on $\Phi_x$, the reduction being deterministic, so no prover for $V_L$ exceeds $1/3$. [step 1.1, A2, given]

3.1 Steps 1.1 and 2.1 exhibit for $L$ a probabilistic polynomial-time verifier with polynomially bounded interaction, and steps 2.2 and 2.3 give completeness $1\ge2/3$ and soundness at most $1/3$; hence $L\in\mathrm{IP}$ by [A3]. Since $L$ was an arbitrary language in PSPACE, $\mathrm{PSPACE}\subseteq\mathrm{IP}$, with perfect completeness for every language in the class. [step 2.1, step 2.2, step 2.3, A3, given] ∎
