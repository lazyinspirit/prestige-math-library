---
id: cor-baire-sequence-space-is-homeomorphic-to-the-irrationals
kind: corollary
title: "Baire sequence space is homeomorphic to the irrational real numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-baire-sequence-space, thm-simple-continued-fractions-parametrise-the-irrationals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Baire sequence space $\mathbb N^{\mathbb N}$ is homeomorphic to the irrational subspace $\mathbb R\setminus\mathbb Q$.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] The **Baire sequence space** is $\mathcal N:=\mathbb N^{\mathbb N}$, the set of functions from $\mathbb N$ to itself (def-the-set-of-functions-from-one-set-to-another), with the product topology obtained by giving each copy of $\mathbb N$ the discrete topology (def-product-topology, def-standard-topologies). For a finite sequence $s=(s_0,\ldots,s_{k-1})$, its cylinder is $N_s:=\{x\in\mathcal N:x_i=s_i\text{ for }i<k\}$. The empty sequence has cylinder $\mathcal N$, and these cylinders form a basis. ([[def-baire-sequence-space]]).

[F2] The continued-fraction coding determined by def-simple-continued-fraction-coding gives a bijection from the sequences $(a_0,a_1,\ldots)$ with $a_0\in\mathbb Z$ and $a_n\ge1$ for $n\ge1$ onto $\mathbb R\setminus\mathbb Q$. Both the coding map and its inverse are continuous for the cylinder and subspace topologies. ([[thm-simple-continued-fractions-parametrise-the-irrationals]]).

## Proof

**Proof technique:** direct.

1.1 Decode the zero-th coordinate by the fixed zigzag bijection with the integers and shift every later natural coordinate by one to obtain positive partial quotients. [given, F2, F1]

2.1 The coordinatewise coding preserves cylinders, and the continued-fraction parametrisation and its inverse therefore give the required homeomorphism. [step 1.1, F2, F1]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎
