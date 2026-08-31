---
id: cex-two-formally-distinct-words-that-become-the-same-object
kind: counterexample
title: "Two formally distinct words can become the same object"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-strict-monoidal-category, rem-every-diagram-commutes-is-false-as-stated]
proof_strategy: counterexample
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Counterexample

Let $\mathcal M$ be the one-object category with object $*$ and endomorphism
monoid $\{1,u\}$, where $u\ne1$ and $u^2=u$. Define the tensor on objects by
$*\otimes*=*$ and on morphisms by the same monoid multiplication. Then
$\mathcal M$ is a strict monoidal category in which the formal words $x$ and
$(x\otimes\mathbf 1)$ evaluate to the same object $*$.

## Facts & Assumptions

**Given:** The one-object strict monoidal category $\mathcal M$ just described.

[L1] In a strict monoidal category, the associator and unitors are identities, so $x$ and $(x\otimes\mathbf 1)$ evaluate to the same object on the nose ([[def-strict-monoidal-category]]).

[L2] The slogan "every diagram commutes" fails because formally different vertices can coincide and then a noncanonical endomorphism may be inserted ([[rem-every-diagram-commutes-is-false-as-stated]]).

## Verification

**Proof technique:** counterexample.

1.1 By [L1], the two formal vertices $x$ and $(x\otimes\mathbf 1)$ both evaluate to the single object $*$ of $\mathcal M$. [L1]

1.2 Consider the square all of whose vertices are $*$, whose top edge is $u$, and whose other three edges are $1$. The clockwise composite is $u$, while the counterclockwise composite is $1$, so the square does not commute because $u\ne1$. [given]

2.1 This realizes the mechanism described in [L2]: formally distinct words can collapse to one object, and a noncanonical endomorphism then breaks the blanket slogan. Hence the slogan is false. [L2, step 1.1, step 1.2] ∎
