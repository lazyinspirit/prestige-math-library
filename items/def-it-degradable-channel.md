---
id: def-it-degradable-channel
kind: definition
title: Degradable and antidegradable channels
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-quantum-channel-complement-and-coherent-information
  - def-qc-quantum-channel
justified_by: []
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
    - title: "John Watrous, The Theory of Quantum Information, Exercise 8.3 and §8.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §§13.5 and 24.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $\mathcal N:A\to B$ be a finite-dimensional channel and fix a complementary channel $\mathcal N^c:A\to E$ coming from one finite Stinespring isometry. Relative to this chosen dilation, $\mathcal N$ is **degradable** if there exists a quantum channel $\mathcal D:B\to E$ such that

$$\mathcal N^c=\mathcal D\circ\mathcal N.$$

It is **antidegradable** relative to this dilation if there exists a quantum channel $\mathcal A:E\to B$ such that

$$\mathcal N=\mathcal A\circ\mathcal N^c.$$

All hypotheses and conclusions below use the same fixed complementary dilation and the corresponding degrading or antidegrading channel.
