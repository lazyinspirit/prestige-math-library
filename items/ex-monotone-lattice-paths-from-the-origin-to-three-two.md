---
id: ex-monotone-lattice-paths-from-the-origin-to-three-two
kind: example
title: "The ten monotone lattice paths from $(0,0)$ to $(3,2)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient, def-monotone-lattice-path, def-binomial-coefficient]
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
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.2'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Example

The ten monotone paths from $(0,0)$ to $(3,2)$ are exactly the length-$5$ words
in $\{E,N\}$ with two $N$ steps. Grouped by the positions of the $N$ steps, they
are:

| positions of the $N$ steps | step word |
|---|---|
| $\{3,4\}$ | `EEENN` |
| $\{2,4\}$ | `EENEN` |
| $\{2,3\}$ | `EENNE` |
| $\{1,4\}$ | `ENEEN` |
| $\{1,3\}$ | `ENENE` |
| $\{1,2\}$ | `ENNEE` |
| $\{0,4\}$ | `NEEEN` |
| $\{0,3\}$ | `NEENE` |
| $\{0,2\}$ | `NENEE` |
| $\{0,1\}$ | `NNEEE` |

## Facts & Assumptions

**Given:** the step set $\{E,N\}$.

[L1] The number of monotone paths from $(0,0)$ to $(m,n)$ is $\binom{m+n}{n}$, and the same translation formula holds for arbitrary endpoints ([[thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]]).

## Verification

**Proof technique:** direct.

1.1 Every word in the table has length $5$ with three $E$ steps and two $N$ steps, so each is a monotone path from $(0,0)$ to $(3,2)$. [given]

1.2 Every monotone path from $(0,0)$ to $(3,2)$ has length $5$ with exactly two $N$ steps, so its step word appears in the table at the row indexed by those two positions. [L1]

2.1 The table has ten rows, which agrees with [L1] because $\binom{5}{2}=10$. [L1, step 1.1, step 1.2]

3.1 The boundary cases of the theorem are visible too: there is one path from $(0,0)$ to $(3,0)$, namely `EEE`, and one path from $(0,0)$ to $(0,0)$, namely the empty path. [L1] ∎

## Remarks

- The table is the concrete instance of the subset bijection used in the proof of the general counting theorem: the path is determined by the positions of its north steps.
