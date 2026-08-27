---
id: ex-two-regular-minimal-normal-subgroups
kind: example
title: "A primitive group with two regular minimal normal subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups, lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Example

Primitive groups with two regular minimal normal subgroups do exist; the
standard diagonal-type examples provide them.

## Facts & Assumptions

**Given:** A standard faithful diagonal-type primitive action with socle $T \times T$ for a nonabelian finite simple group $T$.

[A1] In this action the left and right regular copies of $T$ are distinct
minimal normal subgroups.

[L1] Distinct minimal normal subgroups of a finite faithful primitive group are regular
([[lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]]).

## Verification

**Proof technique:** direct.

1.1 The diagonal-type witness has two distinct minimal normal subgroups by [A1]. [given, A1]

2.1 Applying [L1] to those two subgroups shows that both are regular. This is exactly the exceptional case allowed by the socle analysis. [L1, step 1.1] ∎ 
