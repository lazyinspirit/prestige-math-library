---
id: ex-left-regular-action-is-free-and-transitive
kind: example
title: "Left multiplication gives a free and transitive action of every group on itself"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, def-free-group-action, def-orbit-and-stabilizer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Example

Every group $G$ acts on its underlying set by left multiplication,
$g\cdot x=gx$. This **left regular action** is free and transitive, and every
stabilizer is the trivial subgroup.

## Facts & Assumptions

**Given:** A group $G$ acting on its underlying set by $g\cdot x=gx$.

[L1] A left action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ and is transitive when some group element carries any point to any other ([[def-group-action]]).

[L2] An action is free when $g\cdot x=x$ implies $g=e$ ([[def-free-group-action]]).

[L3] The stabilizer is $G_x=\{g:g\cdot x=x\}$ ([[def-orbit-and-stabilizer]]).

## Verification

**Proof technique:** direct.

1.1 The identities $e\cdot x=ex=x$ and $(gh)\cdot x=(gh)x=g(hx)=g\cdot(h\cdot x)$ verify the action laws. [L1, algebra]

2.1 Given $x,y\in G$, the element $g=yx^{-1}$ satisfies $g\cdot x=y$, so the action is transitive. [step 1.1, L1, choose, algebra]

3.1 If $g\cdot x=x$, then $gx=x$ and right cancellation gives $g=e$; by [L2] the action is free, and [L3] gives $G_x=\{e\}$ for every $x$. [step 1.1, L2, L3, algebra] ∎
