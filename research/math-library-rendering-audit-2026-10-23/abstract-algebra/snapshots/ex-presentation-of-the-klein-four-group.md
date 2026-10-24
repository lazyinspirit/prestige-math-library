---
id: ex-presentation-of-the-klein-four-group
kind: example
title: '$\langle a,b\mid a^2,\ b^2,\ aba^{-1}b^{-1}\rangle\cong(\mathbb Z/2)\times(\mathbb Z/2)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, thm-von-dyck, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, thm-external-direct-product-is-a-group, def-group, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. J. Cameron, Group Theory revision notes"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gtrev.pdf"
    - title: "J. Aspnes, Group Theory"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/GroupTheory.html"
pipeline_run: null
---

## Example

The Klein four-group has the presentation

$$\langle a,b\mid a^2,\ b^2,\ aba^{-1}b^{-1}\rangle\cong(\mathbb Z/2)\times(\mathbb Z/2),$$

where $a$ and $b$ correspond to $(1,0)$ and $(0,1)$.

## Facts & Assumptions

**Given:** The presentation $P=\langle a,b\mid a^2,b^2,aba^{-1}b^{-1}\rangle$ and the direct-product group $(\mathbb Z/2)\times(\mathbb Z/2)$.

[L1] A map of generators that sends every relator to the identity extends uniquely to a homomorphism from the presented group ([[thm-von-dyck]]).

[L2] Every residue class modulo $2$ has exactly one representative in $\{0,1\}$ ([[thm-standard-representatives-modulo-n]]).

## Verification

**Proof technique:** constructive.

1.1 Sending $a$ to $(1,0)$ and $b$ to $(0,1)$ kills the two square relators and the commutator in the abelian direct product, so [L1] constructs a homomorphism $\pi:P\to(\mathbb Z/2)\times(\mathbb Z/2)$. [L1, construct]

1.2 The commutator relation gives $ab=ba$, and the square relations reduce both exponents modulo $2$, so every element of $P$ has one of the forms $e,a,b,ab$. [given]

2.1 Their images are $(0,0),(1,0),(0,1),(1,1)$, which are distinct and exhaustive by [L2]; together with step 1.2, this makes $\pi$ bijective. [L2, step 1.1, step 1.2]

3.1 Hence $P$ is isomorphic to $(\mathbb Z/2)\times(\mathbb Z/2)$, the Klein four-group. [step 2.1, discharge-construct] ∎
