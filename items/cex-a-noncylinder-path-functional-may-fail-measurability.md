---
id: cex-a-noncylinder-path-functional-may-fail-measurability
kind: counterexample
title: "A noncylinder path functional may fail to be measurable"
status: published
origin: pipeline
deps: [ex-uncountable-bernoulli-coordinate-process, lem-cylinder-sigma-events-depend-on-countably-many-coordinates, def-random-element-and-real-random-variable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shalizi, Building Processes, proof of Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
---

## Statement refuted

Every set-defined path functional on the uncountable Bernoulli path space is measurable for its cylinder sigma-algebra.

## Counterexample

Assume AC. For uncountable $I$, let
$A=\{x\in\{0,1\}^I:\{i:x_i=1\}\text{ is uncountable}\}$ and put
$f=\mathbf1_A$.

**Given:** AC, an uncountable index set $I$, and its Bernoulli cylinder space.

1.1 If $A$ were cylinder-measurable, the countable-coordinate lemma would give a countable $J\subseteq I$ determining it. [given]

2.1 Choose $i\in I\setminus J$. The all-zero path and the path with ones on $I\setminus J$ agree on $J$, but only the latter belongs to $A$; this contradicts determination by $J$. [step 1.1]

3.1 Hence $A$ is not cylinder-measurable and $f$ is not a real random variable on the canonical cylinder probability space. [step 2.1] ∎
