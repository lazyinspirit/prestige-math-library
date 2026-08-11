---
id: cex-free-action-need-not-be-transitive
kind: counterexample
title: 'The action of $\mathbb Z/2$ on two disjoint two-point orbits is free but not transitive'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-action, def-free-group-action, def-orbit-and-stabilizer, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Statement refuted

**False claim.** Every free group action is transitive.

## Facts & Assumptions

**Given:** The additive group $A=\mathbb Z/2$ and the set $X=A\times\{0,1\}$, with $a\cdot(b,i)=(a+b,i)$.

[L1] A left action satisfies the identity and composition laws and is transitive when one orbit is the whole set ([[def-group-action]]).

[L2] An action is free when $a\cdot x=x$ implies that $a$ is the identity ([[def-free-group-action]]).

[L3] The orbit of $x$ is the set of all $a\cdot x$ ([[def-orbit-and-stabilizer]]).

[L4] The residue classes modulo $2$ form an additive group ([[thm-integers-modulo-n-basic-algebra]]).

[L5] The classes $0$ and $1$ are the two elements of $\mathbb Z/2$ ([[thm-standard-representatives-modulo-n]]).

## Counterexample

**Proof technique:** direct.

1.1 The identity class satisfies $0\cdot(b,i)=(b,i)$, and $(a+c)\cdot(b,i)=(a+c+b,i)=a\cdot(c\cdot(b,i))$, so [L1] and [L4] give an action. [L1, L4]

2.1 If $a\cdot(b,i)=(b,i)$, then $a+b=b$ in $\mathbb Z/2$ and cancellation gives $a=0$; hence the action is free by [L2]. [step 1.1, L2, L4, L5]

3.1 The second coordinate is unchanged by the action, so the two sets $A\times\{0\}$ and $A\times\{1\}$ are distinct orbits by [L3]. The action is not transitive, refuting the claim. [step 1.1, L1, L3] ∎
