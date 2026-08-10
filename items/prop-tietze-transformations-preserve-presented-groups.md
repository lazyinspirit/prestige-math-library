---
id: prop-tietze-transformations-preserve-presented-groups
kind: proposition
title: "Each Tietze transformation preserves the isomorphism type of the presented group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tietze-transformations, thm-von-dyck, def-normal-closure]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.6"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_homs_tietze.html"
pipeline_run: null
---

## Statement

Each dictionary-generator, redundant-relator, or renaming transformation of
[[def-tietze-transformations]], in either legal direction, carries a
presentation to a presentation of an isomorphic group.

## Facts & Assumptions

**Given:** A formal presentation $\mathcal P=\langle X\mid R\rangle$ and one legal Tietze transformation applied to it.

[L1] A map $u:X\to H$ that sends every relator in $R$ to the identity extends uniquely to a homomorphism $\langle X\mid R\rangle\to H$ ([[thm-von-dyck]]).

[F1] The normal closure of $R$ is the smallest normal subgroup containing $R$ ([[def-normal-closure]]).

## Proof

**Proof technique:** constructive.

1.1 For a dictionary move adjoining $y$ with $y=w(X)$, [L1] gives a homomorphism from the enlarged presentation to the original one by fixing every old generator and sending $y$ to the element represented by $w$; [L1] also gives a homomorphism in the other direction from the inclusion of the old generators, and their composites fix every generator, so uniqueness makes them inverse isomorphisms. The stated inverse condition removes exactly such a generator after all other occurrences of it have disappeared. [L1, given, construct]

1.2 If $r\in\langle\!\langle R\rangle\!\rangle$, then $\langle\!\langle R\cup\{r\}\rangle\!\rangle=\langle\!\langle R\rangle\!\rangle$: one inclusion follows from $R\subseteq R\cup\{r\}$ and the other because the old normal closure already contains every new generator of the closure. Thus adding $r$ leaves the quotient unchanged, and the inverse condition states exactly that the same equality remains true after $r$ is deleted. [F1, given]

1.3 For a renaming bijection $\alpha:X\to Y$, the maps $x\mapsto\alpha(x)$ and $y\mapsto\alpha^{-1}(y)$ send the corresponding relators to the identity, so [L1] extends them to homomorphisms between the two presented groups; their composites fix all generators and are identities by uniqueness. [L1, given, construct]

2.1 Each allowed forward move is covered by steps 1.1 through 1.3, and each inverse is legal under the side condition that makes it the reverse of the same construction; hence every Tietze transformation preserves the presented group's isomorphism type. [step 1.1, step 1.2, step 1.3, discharge-construct] ∎
