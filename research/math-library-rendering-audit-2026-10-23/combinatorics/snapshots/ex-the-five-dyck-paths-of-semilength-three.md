---
id: ex-the-five-dyck-paths-of-semilength-three
kind: example
title: "The five Dyck paths of semilength $3$, with their height functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dyck-path-and-semilength, def-catalan-number, cor-catalan-closed-formula, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, lecture of February 6, 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Example

The five Dyck paths of semilength $3$ are:

| step word | height sequence |
|---|---|
| `UUUDDD` | $0,1,2,3,2,1,0$ |
| `UUDUDD` | $0,1,2,1,2,1,0$ |
| `UUDDUD` | $0,1,2,1,0,1,0$ |
| `UDUUDD` | $0,1,0,1,2,1,0$ |
| `UDUDUD` | $0,1,0,1,0,1,0$ |

## Facts & Assumptions

**Given:** the Dyck paths of semilength $3$.

[L1] $C_3$ is the number of Dyck paths of semilength $3$ ([[def-catalan-number]]).

[L2] The closed formula gives $(3+1)C_3=\binom{6}{3}$ ([[cor-catalan-closed-formula]]).

## Verification

**Proof technique:** direct.

1.1 Every word in the table has three up steps, three down steps, starts at height $0$, ends at height $0$, and never drops below height $0$, so every row is a Dyck path of semilength $3$. [given]

2.1 Any Dyck path of semilength $3$ must begin with `U`; listing the five possible continuations that keep the height nonnegative gives exactly the five rows of the table and no others. [step 1.1]

3.1 The table therefore has all the Dyck paths of semilength $3$, so [L1] gives $C_3=5$. This matches [L2], since $\binom{6}{3}=20$ and therefore $4C_3=20$. [L1, L2, step 2.1] ∎

## Remarks

- The five words are the first nontrivial Catalan family large enough for the reflection, cycle-lemma and triangulation examples to display all members explicitly.
