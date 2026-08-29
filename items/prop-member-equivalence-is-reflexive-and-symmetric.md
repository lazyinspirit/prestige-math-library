---
id: prop-member-equivalence-is-reflexive-and-symmetric
kind: proposition
title: "Member equivalence is reflexive and symmetric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-equivalence-of-members]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For members of one object, the relation $\equiv$ is reflexive and symmetric.

## Facts & Assumptions

**Given:** Members $x:X \to A$ and $y:Y \to A$.

[L1] By definition, $x \equiv y$ means there are epimorphisms
$u:W \to X$ and $v:W \to Y$ with $x u = y v$
([[def-equivalence-of-members]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity uses $W = X$ with $u = v = 1_X$. The identity is epic and $x 1_X = x 1_X$, so $x \equiv x$ by [L1]. [L1, algebra]

1.2 If $x \equiv y$, choose $W,u,v$ as in [L1] with $x u = y v$. Reading the same equality backwards gives $y v = x u$, so $y \equiv x$. [L1]

2.1 Therefore the member relation is reflexive and symmetric. [step 1.1, step 1.2] ∎
