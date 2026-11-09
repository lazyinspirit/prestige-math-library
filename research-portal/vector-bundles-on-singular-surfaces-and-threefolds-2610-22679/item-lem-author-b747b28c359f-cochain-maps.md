---
title: Cohomology maps induced by cochain maps
status: draft
research_item: lem-author-b747b28c359f-cochain-maps
dependency_level: 1
---

PDF p. 4: Definition 2.2

## Prerequisites

- [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology)

## Statement
A cochain map $f:C\to D$ induces a homomorphism $H^i(f):H^i(C)\to H^i(D)$ for every integer $i$. These homomorphisms preserve identities and composition. A cochain map is a family of homomorphisms $f^i:C^i\to D^i$ satisfying $d_D^if^i=f^{i+1}d_C^i$.

## Facts & Assumptions

[F1] Cohomology is the group of cocycles modulo coboundaries, as in [lem-author-b747b28c359f-cochain-cohomology](item-lem-author-b747b28c359f-cochain-cohomology).

## Proof

**Given:** Cochain complexes and cochain maps between them.

**Goal:** Construct the induced maps and establish their functoriality.

1.1 The defining commutation relation sends cocycles to cocycles and coboundaries to coboundaries. Thus $[x]\mapsto[f^i(x)]$ is a well-defined homomorphism on the quotient in [F1]. [F1, construct]

2.1 Applying the identity or a composite to a cocycle gives respectively the same cocycle or the successive images. Hence the induced maps preserve identities and composition. [step 1.1] ∎
