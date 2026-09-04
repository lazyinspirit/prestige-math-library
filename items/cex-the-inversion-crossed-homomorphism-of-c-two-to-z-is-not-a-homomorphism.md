---
id: cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism
kind: counterexample
title: "The inversion crossed homomorphism C_2 → Z is not an ordinary homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-every-crossed-homomorphism-is-an-ordinary-homomorphism]
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
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement refuted

Every crossed homomorphism is an ordinary homomorphism.

Let the nontrivial element of $C_2$ act on $\mathbb Z$ by negation. Then the map
$z(1)=0$, $z(t)=1$ is a crossed homomorphism but not a homomorphism.

## Facts & Assumptions

**Given:** The false claim of [[fs-every-crossed-homomorphism-is-an-ordinary-homomorphism]].

[L1] The crossed-homomorphism identity for abelian coefficients is
$z(gh)=z(g)+g\cdot z(h)$ ([[fs-every-crossed-homomorphism-is-an-ordinary-homomorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 With the negation action, $z(t^2)=0=1+(-1)=z(t)+t\cdot z(t)$, so $z$ is a crossed homomorphism. [given, L1, algebra]

2.1 But $z(t)=1$ has infinite order in $\mathbb Z$, so $z$ cannot be an ordinary homomorphism from the order-two group $C_2$. Therefore the displayed map is a counterexample to the claim. [L1, step 1.1] ∎
