---
id: ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three
kind: example
title: "With trivial C_2-action on S_3, the nonabelian H^1 pointed set has two classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-nonabelian-cohomology-as-a-pointed-set, thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set, def-symmetric-group]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
---

## Example

For the trivial action of $C_2$ on $S_3$, the pointed set
$H^1_{\mathrm{nab}}(C_2,S_3)$ has exactly two elements.

## Facts & Assumptions

**Given:** The trivial action of $C_2$ on $S_3$ ([[def-symmetric-group]]).

[L1] Nonabelian first cohomology is the orbit set of crossed homomorphisms under
coefficient-group conjugation ([[def-first-nonabelian-cohomology-as-a-pointed-set]]).

[L2] It classifies complements as a pointed set
([[thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set]]).

## Verification

**Proof technique:** direct.

1.1 Under the trivial action, a cocycle is just a homomorphism $C_2\to S_3$. The image of the generator is therefore either the identity or an element of order $2$, that is, a transposition. [given, L1, algebra]

2.1 All transpositions are conjugate in $S_3$, so [L1] leaves exactly two orbits of cocycles: the trivial one and the orbit of any transposition-valued cocycle. Thus $H^1_{\mathrm{nab}}(C_2,S_3)$ has two points, with the trivial one as basepoint. This matches the complement picture from [L2]. [L1, L2, step 1.1] ∎
