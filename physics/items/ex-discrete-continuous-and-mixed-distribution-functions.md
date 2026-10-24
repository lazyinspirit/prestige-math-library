---
id: ex-discrete-continuous-and-mixed-distribution-functions
kind: example
title: "Discrete, continuous, and mixed distribution functions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, def-cumulative-distribution-function-of-a-random-variable, def-atom-and-continuity-point-of-a-law, thm-probability-law-and-distribution-function-correspondence]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "J. R. Norris, Probability and Measure, Section 2.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Three standard distribution functions illustrate three different atom patterns:

$$F_{\mathrm d}(x)=\begin{cases} 0,&x<0,\\ 1/2,&0\le x<1,\\ 1,&x\ge1, \end{cases}$$

$$F_{\mathrm c}(x)=\begin{cases} 0,&x<0,\\ x,&0\le x\le1,\\ 1,&x\ge1, \end{cases}$$

$$F_{\mathrm m}(x)=\begin{cases} 0,&x<0,\\ \frac12+\frac{x}{2},&0\le x<1,\\ 1,&x\ge1. \end{cases}$$

The first law is purely atomic, the second has no atoms on $\mathbb R$, and the
third is mixed: it has an atom at $0$ and a continuous part on $(0,1)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the three displayed functions.

[L1] Assuming the Axiom of Countable Choice, distribution functions determine probability laws ([[thm-probability-law-and-distribution-function-correspondence]]).

[L2] Atoms are positive point masses of the law, while continuity points are points where the distribution function is continuous ([[def-atom-and-continuity-point-of-a-law]]).

## Verification

**Proof technique:** direct.

1.1 Each displayed function is nondecreasing, right-continuous, tends to $0$ at $-\infty$, and tends to $1$ at $+\infty$. Therefore [L1] gives a probability law for each of them. [L1, given]

2.1 The jumps identify the atoms. For $F_{\mathrm d}$, the jumps are $1/2$ at $0$ and $1/2$ at $1$, so the law is purely discrete. For $F_{\mathrm c}$ there are no jumps, hence no atoms. For $F_{\mathrm m}$ there is a jump of size $1/2$ at $0$ and no jump on $(0,1]$, so the law is mixed. [L1, L2, step 1.1]

3.1 Thus the three distribution functions realize discrete, continuous, and mixed behavior without any implication that a density must exist in general. [step 2.1] ∎
