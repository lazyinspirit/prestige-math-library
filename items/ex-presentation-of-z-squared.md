---
id: ex-presentation-of-z-squared
kind: example
title: '$\langle a,b\mid aba^{-1}b^{-1}\rangle\cong(\mathbb Z,+)\times(\mathbb Z,+)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, thm-von-dyck, thm-int-comm-ring, thm-external-direct-product-is-a-group, lem-group-power-laws, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Exercises §1.6"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_homs_tietze.html"
    - title: "John McKernan, Presentations and Groups of Small Order, Lecture 12"
      url: "https://math.mit.edu/~mckernan/Teaching/12-13/Spring/18.703/l_12.pdf"
pipeline_run: null
---

## Example

The free abelian group on two generators has the presentation

$$\langle a,b\mid aba^{-1}b^{-1}\rangle\cong(\mathbb Z,+)\times(\mathbb Z,+),$$

where $a$ and $b$ correspond to $(1,0)$ and $(0,1)$.

## Facts & Assumptions

**Given:** The presentation $P=\langle a,b\mid aba^{-1}b^{-1}\rangle$.

[L1] A map of generators that sends every relator to the identity extends uniquely to a homomorphism from the presented group ([[thm-von-dyck]]).

[L2] $(\mathbb Z,+,\cdot,0,1)$ is a commutative ring ([[thm-int-comm-ring]]).

[L3] Integer powers satisfy $g^{m+n}=g^mg^n$; powers of commuting elements satisfy $(gh)^n=g^nh^n$ ([[lem-group-power-laws]]).

## Verification

**Proof technique:** constructive.

1.1 Sending $a$ to $(1,0)$ and $b$ to $(0,1)$ kills the commutator in the abelian direct product, so [L1] constructs a homomorphism $\pi:P\to\mathbb Z\times\mathbb Z$. [L1, L2, construct]

1.2 The relator gives $ab=ba$, so group algebra and [L3] move all powers of $a$ before all powers of $b$ and write every element of $P$ as $a^mb^n$ for integers $m,n$. [L3, given]

2.1 The map $\pi$ sends $a^mb^n$ to $(m,n)$ by [L2], so it is surjective and step 1.2 shows that its kernel is trivial: an element mapping to $(0,0)$ has the form $a^0b^0=e$. [L2, step 1.1, step 1.2]

3.1 Therefore $\pi$ is the claimed isomorphism $P\cong\mathbb Z\times\mathbb Z$. [step 2.1, discharge-construct] ∎
