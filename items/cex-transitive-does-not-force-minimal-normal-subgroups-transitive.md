---
id: cex-transitive-does-not-force-minimal-normal-subgroups-transitive
kind: counterexample
title: "A transitive imprimitive action can have a nontransitive minimal normal subgroup"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types, thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Leonard H. Soicher, Primitive permutation groups"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
---

## Statement refuted

The theorem
[[thm-minimal-normal-subgroups-of-faithful-primitive-groups-are-transitive]]
requires primitivity. Mere transitivity does not force a minimal normal subgroup
to be transitive.

## Facts & Assumptions

**Given:** A nonabelian finite simple group $T$ and the action of $(T \times T) \rtimes C_2$ on the disjoint union of two copies of $T$, where $T \times T$ acts by left regular action on each copy and $C_2$ swaps the two copies.

[A1] This action is transitive because the swapping involution exchanges the two
blocks, but it is imprimitive because the two copies of $T$ form a nontrivial
block system.

[A2] The subgroup $T \times T$ is a minimal normal subgroup of the full
semidirect product, and it preserves each block setwise.

## Counterexample

**Proof technique:** direct.

1.1 By [A1], the action is transitive and imprimitive. [given, A1]

1.2 By [A2], the subgroup $N=T \times T$ is minimal normal, but because $N$ preserves each copy of $T$ setwise, it has two orbits and is therefore not transitive. [A2]

2.1 Hence a transitive action can have a nontransitive minimal normal subgroup once primitivity is dropped. [step 1.1, step 1.2] ∎ 