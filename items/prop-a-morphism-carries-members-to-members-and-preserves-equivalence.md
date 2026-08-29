---
id: prop-a-morphism-carries-members-to-members-and-preserves-equivalence
kind: proposition
title: "A morphism carries members to members and preserves equivalence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-equivalence-of-members]
justified_by: []
landmark: false
proof_strategy: direct
verification:
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

Let $f:A \to B$ be a morphism.

1. If $x:X \to A$ is a member of $A$, then $f x:X \to B$ is a member of $B$.
2. If $x \equiv y$ as members of $A$, then $f x \equiv f y$ as members of $B$.

## Facts & Assumptions

**Given:** A morphism $f:A \to B$ and members $x:X \to A$, $y:Y \to A$.

[L1] Member equivalence means equality after precomposition by one common pair
of epimorphisms
([[def-equivalence-of-members]]).

## Proof

**Proof technique:** direct.

1.1 The composite $f x:X \to B$ is again a morphism into $B$, so it is a member of $B$. [given]

1.2 If $x \equiv y$, choose epimorphisms $u:W \to X$ and $v:W \to Y$ with $x u = y v$ by [L1]. Postcomposing with $f$ gives $f x u = f y v$, and the same epimorphisms witness $f x \equiv f y$. [L1, algebra]

2.1 Therefore every morphism carries members to members and preserves their equivalence. [step 1.1, step 1.2] ∎
