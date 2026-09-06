---
id: thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions
kind: theorem
title: "Finite-dimensional distributions determine a process law on the cylinder sigma-algebra"
status: draft
origin: pipeline
deps: [def-stochastic-process-and-finite-dimensional-distributions, def-coordinate-maps-and-cylinder-sigma-algebra, lem-finite-coordinate-cylinders-form-a-pi-system, thm-dynkin-pi-lambda]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Corollary 2.13"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

If two probability measures on $\mathcal C_I$ have equal finite-dimensional marginals, then they are equal.

## Facts & Assumptions

**Given:** Probability measures $\mu,\nu$ on $\mathcal C_I$ with equal finite-dimensional marginals.

[F1] Finite-coordinate cylinders form a pi-system generating $\mathcal C_I$. ([[lem-finite-coordinate-cylinders-form-a-pi-system]])

[F2] A lambda-system containing a pi-system contains the sigma-algebra it generates. ([[thm-dynkin-pi-lambda]])

## Proof

1.1 On $\mathcal D=\{C\in\mathcal C_I:\mu(C)=\nu(C)\}$, complements and disjoint countable unions preserve equality because both measures are probabilities. Thus $\mathcal D$ is a lambda-system. [F2]

2.1 Equal finite-dimensional marginals put every cylinder in $\mathcal D$. By [F1] and [F2], $\mathcal C_I\subseteq\mathcal D$, hence $\mu=\nu$. [F1, F2] ∎
