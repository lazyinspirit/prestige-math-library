---
id: def-it-cq-channel-block-code-and-error
kind: definition
title: Finite cq block codes, average error, and capacity
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-classical-quantum-memoryless-channel
  - def-it-von-neumann-entropy
  - def-qc-povm-and-outcome-law
  - thm-qc-povm-probabilities-normalize
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §§16.2 and 20.3.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Definition

Fix a finite-input cq channel as in [[def-it-classical-quantum-memoryless-channel]]. For integers $n,M\ge1$, an $(n,M)$ **cq block code** consists of a deterministic encoder $m\mapsto x^n(m)\in\mathcal X^n$ for $m\in[M]:=\{1,\ldots,M\}$ and a finite POVM ([[def-qc-povm-and-outcome-law]]) $(\Lambda_m)_{m\in[M]}$ on $H_B^{\otimes n}$. Under a uniform message, its **average block error** is
$$e_n:=\frac1M\sum_{m=1}^M\left(1-\operatorname{tr}(\Lambda_m\rho_{x^n(m)})\right).$$
Its rate is $n^{-1}\ln M$ nats per channel use, using the natural-log unit convention of [[def-it-von-neumann-entropy]]. A sequence of such codes is reliable if $e_n\to0$. The **classical capacity** $C_{\rm cq}$ is the supremum of $\liminf_{n\to\infty}n^{-1}\ln M_n$ over reliable sequences.

For each transmitted state, the POVM outcome weights sum to one by [[thm-qc-povm-probabilities-normalize]], so $e_n$ is the uniform-message block error probability.
