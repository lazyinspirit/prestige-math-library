---
id: ex-a-small-cancellation-hyperbolic-group
kind: example
title: "A small-cancellation presentation gives a hyperbolic group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An introduction to combinatorial and geometric group theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/IntroCGGT.pdf"
---

## Example

Consider the one-relator presentation

$$
G=\langle x_1,x_2,x_3,x_4,x_5,x_6,x_7 \mid x_1x_2x_3x_4x_5x_6x_7 \rangle.
$$

This is a finite $C'(1/6)$ presentation and hence defines a hyperbolic group.

## Facts & Assumptions

**Given:** The displayed presentation of $G$.

[A1] In the single relator $x_1x_2x_3x_4x_5x_6x_7$, no nonempty subword occurs
as an initial segment of two distinct cyclic conjugates or inverse cyclic
conjugates, so the symmetrized presentation has no nontrivial pieces and
therefore satisfies $C'(1/6)$ vacuously.

[L1] Finite $C'(1/6)$ presentations define hyperbolic groups
([[thm-finite-c-prime-one-sixth-presentations-define-hyperbolic-groups]]).

## Verification

**Proof technique:** direct.

1.1 By [A1], the displayed finite presentation satisfies the $C'(1/6)$ condition. [given, A1]

2.1 Therefore [L1] shows that the presented group $G$ is hyperbolic. [L1, step 1.1] ∎ 