---
id: fs-iwasawas-criterion-needs-only-transitivity
kind: false-statement
title: "FALSE: transitivity alone forces nontrivial normal subgroups to be transitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-blocks-in-a-regular-cyclic-action, thm-iwasawa-simplicity-criterion-for-primitive-actions]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
    - title: "P. J. Cameron, Classical Groups, Sections 2.3-2.4"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/class_gps/cg.pdf"
pipeline_run: null
---

## Statement

In every faithful transitive action, each nontrivial normal subgroup acts
transitively.

## Facts & Assumptions

**Given:** The faithful regular action of $C_4$ on itself.

[L1] In a faithful primitive action, every nontrivial normal subgroup is transitive ([[thm-iwasawa-simplicity-criterion-for-primitive-actions]]).

[L2] In the regular cyclic action of composite degree, proper nontrivial subgroups yield nontrivial blocks ([[ex-blocks-in-a-regular-cyclic-action]]).

## Refutation

**Proof technique:** direct.

1.1 The action of $C_4$ on itself is transitive, but [L2] shows it is not primitive. [L2]

2.1 The subgroup $2C_4 = \{0,2\}$ is nontrivial, normal, and not transitive: its orbits are $\{0,2\}$ and $\{1,3\}$. So the transitivity conclusion singled out in [L1] fails once primitivity is removed. [step 1.1, algebra]

3.1 The regular action is faithful and transitive, while step 2.1 gives a nontrivial normal subgroup that is not transitive. Therefore the statement is false. [step 1.1, step 2.1] ∎
