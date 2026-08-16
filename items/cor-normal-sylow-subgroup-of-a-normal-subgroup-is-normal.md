---
id: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal
kind: corollary
title: "A normal Sylow subgroup of a normal subgroup is normal in the whole group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-sylow-subgroup-normal-iff-unique, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L2] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** direct.

1.1 A unique Sylow subgroup is preserved by every automorphism of its ambient normal subgroup, so it is characteristic there; characteristic-in-normal gives normality in the whole group. [L1, L2, given, algebra]

2.1 Step 1.1 uses only that $P$ is the unique Sylow $p$-subgroup of $N$, so the degenerate cases are covered as well: if $p\nmid|N|$ then $P=\{1\}$, which is normal in $G$; if $N=\{1\}$ then $P=\{1\}$ likewise; and if $N=G$ the asserted normality is the hypothesis itself. This proves the stated claim. [step 1.1, given, algebra] ∎
