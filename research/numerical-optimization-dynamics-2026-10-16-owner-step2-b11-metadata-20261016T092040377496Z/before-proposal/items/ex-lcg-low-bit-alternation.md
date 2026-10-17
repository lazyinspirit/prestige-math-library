---
id: ex-lcg-low-bit-alternation
kind: example
title: "A full-period LCG can alternate its low bit"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-linear-congruential-generator-mod-power-of-two
  - thm-lcg-full-period-and-adjacent-dependence
  - def-uniform-finite-probability-space
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. Jung, Monte-Carlo Methods lecture notes, §3.1 and Theorem 3.6"
      url: "https://jjung.perso.univ-pau.fr/Enseignements/AlgoAv/MonteCarlo.pdf"
---

## Example

Take $w=3$, $a=5$, $c=1$, and seed $x_0=0$. The recurrence visits every residue modulo $8$ before returning to $0$, yet its least significant bit alternates at every step.

## Facts & Assumptions

**Given:** The LCG recurrence with modulus $8$, multiplier $5$, increment $1$, and a seed chosen uniformly from the eight states.

[F1] Under $a\equiv1\pmod4$ and odd increment, every seed has full period $2^w$, but a uniform seed does not make adjacent states independent. [[thm-lcg-full-period-and-adjacent-dependence]]

[F2] The state update is $x_{n+1}=[ax_n+c]_{2^w}$. [[alg-linear-congruential-generator-mod-power-of-two]]

[F3] The uniform law on eight states assigns mass $1/8$ to each state. [[def-uniform-finite-probability-space]]

## Verification

1.1 Direct iteration gives $0,1,6,7,4,5,2,3,0$. These are the eight residues modulo $8$, so the cycle is full. The parameters satisfy $5\equiv1\pmod4$ and $1$ is odd, also verifying [F1]'s hypotheses. [given, F1, F2, algebra]

2.1 Reducing [F2] modulo $2$ gives $x_{n+1}\equiv x_n+1\pmod2$, because $5\equiv1\pmod2$ and $c=1$. Thus the low bit alternates deterministically. By [F3], a uniform seed gives each state mass $1/8$; since the update is a permutation, each time marginal is uniform. The adjacent pair lies on the eight-point graph of the recurrence rather than the 64-point product space, so the pair is dependent. [F1, F2, F3, step 1.1, algebra] ∎
