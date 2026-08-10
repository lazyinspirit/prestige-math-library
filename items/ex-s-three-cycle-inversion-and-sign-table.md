---
id: ex-s-three-cycle-inversion-and-sign-table
kind: example
title: 'The six elements of $S_3$: one-line form, cycle structure, inversions, and sign'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-inversions-inversion-number-and-sign, def-alternating-group,
       thm-number-of-bijections-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
    - title: 'Stanford Math 51H, Permutations'
      url: 'https://math.stanford.edu/~lms/jpg/perms.pdf'
pipeline_run: null
---

## Example

The elements of $S_3$ have the following one-line forms, cycle decompositions,
inversion numbers, and signs:

| permutation | one-line form | inversion number | sign |
|---|---|---:|---:|
| $\operatorname{id}$ | $[0,1,2]$ | $0$ | $+1$ |
| $(0\,1)$ | $[1,0,2]$ | $1$ | $-1$ |
| $(0\,2)$ | $[2,1,0]$ | $3$ | $-1$ |
| $(1\,2)$ | $[0,2,1]$ | $1$ | $-1$ |
| $(0\,1\,2)$ | $[1,2,0]$ | $2$ | $+1$ |
| $(0\,2\,1)$ | $[2,0,1]$ | $2$ | $+1$ |

Thus $A_3=\{\operatorname{id},(0\,1\,2),(0\,2\,1)\}$.

## Facts & Assumptions

**Given:** The symmetric group $S_3$ acting on $3=\{0,1,2\}$.

[L1] The inversion number counts decreasing pairs in one-line notation, sign is $(-1)$ to that number, and $A_3$ is the set of even permutations ([[def-inversions-inversion-number-and-sign]], [[def-alternating-group]]).

[L2] A three-element set has $3!=6$ permutations ([[thm-number-of-bijections-of-a-finite-set]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] there are $3!=6$ permutations. Listing the three transpositions, the two three-cycles, and the identity gives six distinct maps. Counting decreasing pairs in each displayed one-line form gives respectively $0,1,3,1,2,2$, and [L1] gives the signs shown. [given, L1, L2]

2.1 The rows with sign $+1$ are exactly the identity and the two three-cycles, so the displayed set is precisely $A_3$. [step 1.1, L1] ∎
