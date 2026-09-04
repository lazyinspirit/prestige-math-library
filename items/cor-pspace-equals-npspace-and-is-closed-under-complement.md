---
id: cor-pspace-equals-npspace-and-is-closed-under-complement
kind: corollary
title: "PSPACE equals NPSPACE and is closed under complement"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pspace-and-npspace, thm-savitchs-theorem, def-dtime-ntime-dspace-and-nspace]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Statement

$$\mathrm{PSPACE}=\mathrm{NPSPACE},$$

and if $L\in\mathrm{PSPACE}$ then its complement also lies in PSPACE.

## Facts & Assumptions

**Given:** the classes PSPACE and NPSPACE.

[L1] PSPACE and NPSPACE are the unions of $\mathrm{DSPACE}(p(n))$ and $\mathrm{NSPACE}(p(n))$ over polynomial bounds $p$ ([[def-pspace-and-npspace]]).

[L2] Savitch's theorem gives $\mathrm{NSPACE}(s(n))\subseteq\mathrm{DSPACE}(s(n)^2)$ for every $s$ ([[thm-savitchs-theorem]]).

[L3] A deterministic space class is defined by deterministic deciders ([[def-dtime-ntime-dspace-and-nspace]]).

## Proof

**Proof technique:** direct.

1.1 If $L\in\mathrm{NPSPACE}$, then [L1] gives a polynomial $p$ with $L\in\mathrm{NSPACE}(p(n))$. By [L2], $L\in\mathrm{DSPACE}(p(n)^2)\subseteq\mathrm{PSPACE}$, because the square of a polynomial is again a polynomial. Thus $\mathrm{NPSPACE}\subseteq\mathrm{PSPACE}$. [L1, L2, given]

2.1 The reverse inclusion $\mathrm{PSPACE}\subseteq\mathrm{NPSPACE}$ is immediate from [L1] because every deterministic machine is a special case of a nondeterministic one. Hence $\mathrm{PSPACE}=\mathrm{NPSPACE}$. [L1, step 1.1]

3.1 If $L\in\mathrm{PSPACE}$, choose a deterministic polynomial-space decider $M$ for $L$ using [L1] and [L3]. Swapping the accepting and rejecting halting states of $M$ gives a deterministic polynomial-space decider for the complement of $L$. Therefore PSPACE is closed under complement. [L1, L3, construct] ∎
