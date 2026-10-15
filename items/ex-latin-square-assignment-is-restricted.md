---
id: ex-latin-square-assignment-is-restricted
kind: example
title: A Latin-square assignment is a strict subset of RCBD assignments
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-randomized-complete-block-design
  - def-randomized-latin-square-design
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.3.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Example

With treatments $A,B,C$, the cyclic array
$$\begin{matrix}A&B&C\\B&C&A\\C&A&B\end{matrix}$$
is a Latin square. The array with all three rows equal to $A,B,C$ is an
allowed RCBD assignment of three blocks, but is not a Latin square. Under
the uniform RCBD law that particular assignment has probability $1/216$;
under the uniform Latin-square law it has probability zero.

## Verification


**Given:** Three treatments, three blocks, and the two displayed assignments in the Example.

[F1] An RCBD assignment consists of an independently randomized treatment permutation in each block ([[def-randomized-complete-block-design]]).

[F2] A Latin-square assignment uses every treatment once in every row and every column, and the specified law is uniform on all such squares ([[def-randomized-latin-square-design]]).

1.1 In the cyclic array, each row and each column contains $A,B,C$ once, so it belongs to the Latin-square sample space. [F2, given]

1.2 In the repeated-row array, each row contains $A,B,C$ once, so it is an RCBD assignment; each column repeats a single treatment, so it is not a Latin square. [F1, F2, given]

2.1 There are $3!=6$ permutations per RCBD block and the blocks are independently uniform, so the particular repeated-row assignment has probability $6^{-3}=1/216$. It has probability zero under a law supported only on Latin squares. [F1, F2, step 1.2, algebra] ∎