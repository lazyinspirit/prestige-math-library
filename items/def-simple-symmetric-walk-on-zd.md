---
id: def-simple-symmetric-walk-on-zd
kind: definition
title: "Simple symmetric walk on the integer lattice"
status: draft
origin: pipeline
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
---
## Definition

For an integer $d\ge1$, the simple symmetric nearest-neighbor transition matrix on $\mathbb Z^d$ is

$$p(z,z+e_j)=p(z,z-e_j)=\frac1{2d}\quad(j=1,\ldots,d),$$

with every other entry zero. Here $e_j$ is the $j$th standard basis vector. The $2d$ neighbors $z\pm e_j$ are distinct when $d\ge1$, so each row sums to $2d/(2d)=1$; this is a transition matrix in the sense of [[def-transition-matrix-and-n-step-transition-probabilities]]. The definition uses no Choice.
