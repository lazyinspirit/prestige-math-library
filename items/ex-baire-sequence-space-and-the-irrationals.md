---
id: ex-baire-sequence-space-and-the-irrationals
kind: example
title: "Cylinder sets and continued fractions exhibit the homeomorphism $\\mathbb N^{\\mathbb N}\\cong\\mathbb R\\setminus\\mathbb Q$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-baire-sequence-space-is-homeomorphic-to-the-irrationals, lem-simple-continued-fraction-convergents-and-cylinders]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
pipeline_run: null
---

## Example

Under the homeomorphism $\mathbb N^{\mathbb N}\cong\mathbb R\setminus\mathbb Q$, a finite cylinder corresponds to the irrational points in the continued-fraction interval determined by the same finite prefix; extension of prefixes gives nested intervals.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Baire sequence space $\mathbb N^{\mathbb N}$ is homeomorphic to the irrational subspace $\mathbb R\setminus\mathbb Q$. ([[cor-baire-sequence-space-is-homeomorphic-to-the-irrationals]]).

[F2] For simple continued fractions with $a_0\in\mathbb Z$ and $a_n\ge1$ for $n\ge1$, the convergents satisfy $p_n=a_np_{n-1}+p_{n-2}$ and $q_n=a_nq_{n-1}+q_{n-2}$, with $p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$. The cylinder for a fixed prefix is the interval between its two adjacent continued-fraction endpoints; these cylinders are nested and their diameters tend to zero. ([[lem-simple-continued-fraction-convergents-and-cylinders]]).

## Verification

**Proof technique:** direct.

1.1 Work out the first continued-fraction cylinders and show how extending a finite sequence nests the corresponding irrational interval. [given, F2, F1]

2.1 Use the established parametrisation to identify cylinder convergence with ordinary convergence of irrational values, including the zero-th coordinate convention. [step 1.1, F2, F1]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
