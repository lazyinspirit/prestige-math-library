---
id: thm-quotient-module-laws
kind: theorem
title: "The quotient action is well defined and makes $M/N$ a module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-module, def-submodule, def-left-and-right-modules, thm-quotient-group-laws, lem-coset-membership-and-equality, lem-module-elementary-consequences]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

Let $N\le M$ be a submodule of a left $R$-module. The rule

$$r(m+N):=rm+N$$

is independent of the representative $m+N$ and, together with the additive
quotient group, makes $M/N$ a left $R$-module.

## Facts & Assumptions

**Given:** A left $R$-module $M$ and a submodule $N\le M$.

[L1] Additive cosets satisfy $m+N=m'+N$ exactly when $m'-m\in N$
([[lem-coset-membership-and-equality]]).

[L2] A submodule is closed under scalar multiplication and is an additive
subgroup ([[def-submodule]]).

[L3] The additive cosets form a quotient group with the inherited addition
([[thm-quotient-group-laws]]).

[L4] The module axioms give distributivity, associativity of scalar action, and
$1_Rm=m$ ([[def-left-and-right-modules]]).

[L5] Scalar multiplication preserves additive negatives
([[lem-module-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 If $m+N=m'+N$, then $m'-m\in N$ by [L1]. Thus $r(m'-m)=rm'-rm\in N$ by [L2, L4, L5], and [L1] gives $rm+N=rm'+N$; the proposed scalar action is well defined. [L1, L2, L4, L5, given]

1.2 The quotient addition is an abelian group operation: it is a quotient-group operation by [L3], and $(m+N)+(m'+N)=(m+m')+N=(m'+m)+N=(m'+N)+(m+N)$. [L3, L4, given]

1.3 For cosets, the module identities in $M$ give $r((m+N)+(m'+N))=r(m+m')+N=(rm+rm')+N=r(m+N)+r(m'+N)$, $(r+s)(m+N)=r(m+N)+s(m+N)$, $(rs)(m+N)=r(s(m+N))$, and $1_R(m+N)=m+N$. [L4, given]

2.1 Steps 1.1--1.3 verify a well-defined scalar action on an abelian group satisfying all module axioms; hence $M/N$ is a left $R$-module. [step 1.1, step 1.2, step 1.3, L4] ∎
