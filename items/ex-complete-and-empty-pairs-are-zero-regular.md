---
id: ex-complete-and-empty-pairs-are-zero-regular
kind: example
title: "Complete and anticomplete disjoint pairs are $0$-regular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-epsilon-regular-pair, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Definition 2.1.1"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

If $X,Y$ are disjoint nonempty vertex sets that form a complete pair or an anticomplete pair, then $(X,Y)$ is $0$-regular.

## Facts & Assumptions

**Given:** A complete or anticomplete disjoint pair $(X,Y)$.

[L1] A pair is $0$-regular when every pair of nonempty subsets $A\subseteq X$, $B\subseteq Y$ has $d(A,B)=d(X,Y)$ ([[def-epsilon-regular-pair]]).

[L2] In a complete pair all possible cross-edges are present, while in an anticomplete pair none are present ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Verification

**Proof technique:** direct.

1.1 In the complete case, [L2] gives $d(X,Y)=1$, and every nonempty subpair $(A,B)$ also has density $1$. [given, L2, algebra]

1.2 In the anticomplete case, [L2] gives $d(X,Y)=0$, and every nonempty subpair has density $0$. [given, L2, algebra]

2.1 Thus the density difference is zero in either case, which is exactly the $0$-regular convention in [L1]. [step 1.1, step 1.2, L1] ∎
