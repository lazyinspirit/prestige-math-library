---
id: ex-commuting-coordinate-fields-and-their-commuting-flows
kind: example
title: "Commuting coordinate fields have commuting flows"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-coordinate-vector-fields-commute, thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

On $\mathbb R^2$, the coordinate vector fields
$X=\partial/\partial x$ and $Y=\partial/\partial y$ have flows

$$ \Phi_t^X(x,y)=(x+t,y), \qquad \Phi_s^Y(x,y)=(x,y+s), $$

and these flows commute.

## Facts & Assumptions

**Given:** The coordinate vector fields $X=\partial/\partial x$ and $Y=\partial/\partial y$ on $\mathbb R^2$.

[L1] Coordinate vector fields commute ([[prop-coordinate-vector-fields-commute]]).

[L2] Vanishing Lie bracket is equivalent to commuting local flows ([[thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute]]).

## Verification

**Proof technique:** direct.

1.1 The explicit integral curves give the flows $\Phi_t^X(x,y)=(x+t,y)$ and $\Phi_s^Y(x,y)=(x,y+s)$. [given]

2.1 Their compositions satisfy $$ \Phi_t^X(\Phi_s^Y(x,y))=(x+t,y+s)=\Phi_s^Y(\Phi_t^X(x,y)). $$ This agrees with [L1] and [L2]. [L1, L2, step 1.1] ∎
