---
id: ex-a-small-cancellation-hyperbolic-group
kind: example
title: "A small-cancellation presentation gives a hyperbolic group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-presentation, prop-finite-and-free-groups-are-hyperbolic]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An introduction to combinatorial and geometric group theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Consider the one-relator presentation

$$ G=\langle x_1,x_2,x_3,x_4,x_5,x_6,x_7 \mid x_1x_2x_3x_4x_5x_6x_7 \rangle. $$

This is a finite $C'(1/6)$ presentation and hence defines a hyperbolic group.

## Facts & Assumptions

**Given:** The displayed presentation of $G$.

[A1] In the single relator $x_1x_2x_3x_4x_5x_6x_7$, no nonempty subword occurs as an initial segment of two distinct cyclic conjugates or inverse cyclic conjugates, so the symmetrized presentation has no nontrivial pieces and therefore satisfies $C'(1/6)$ vacuously.

[F1] A presentation is the quotient of the free group by the normal closure of its relators ([[def-group-presentation]]).

[L1] Every finite-rank free group is hyperbolic ([[prop-finite-and-free-groups-are-hyperbolic]]).

## Verification

**Proof technique:** direct.

1.1 By [A1], the displayed finite presentation satisfies the $C'(1/6)$ condition. [given, A1]

1.2 The relator gives $x_7=(x_1x_2x_3x_4x_5x_6)^{-1}$ in $G$, so the first six generators generate $G$. The natural map $F(x_1,\ldots,x_6)\to G$ is therefore onto. Conversely send $x_i$ to the identically named free generator for $1\le i\le6$ and send $x_7$ to $(x_1\cdots x_6)^{-1}$. The relator maps to $1$, so [F1] factors this assignment through a homomorphism $G\to F(x_1,\ldots,x_6)$. The two composites fix every respective generator, hence are identities. Thus $G\cong F_6$. [F1, given, algebra]

2.1 By [L1], $F_6$ is hyperbolic, and the explicit isomorphism in step 1.2 transfers its Cayley tree to $G$ with the corresponding generating set. Hence this finite $C'(1/6)$ presentation defines a hyperbolic group, without importing the general linear-isoperimetric theorem. [L1, step 1.1, step 1.2] ∎
