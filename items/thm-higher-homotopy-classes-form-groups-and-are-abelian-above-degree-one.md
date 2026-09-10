---
id: thm-higher-homotopy-classes-form-groups-and-are-abelian-above-degree-one
kind: theorem
title: Higher homotopy classes form groups and are abelian above degree one
deps: ["lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes", "thm-fundamental-group-laws", "def-group"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

For every based space $(X,x_0)$, cubical concatenation makes $\pi_n(X,x_0)$ a group for $n\ge1$, with identity the constant class and inverse given by reversal of coordinate 1. It is abelian for $n\ge2$.

## Facts & Assumptions

[F1] Concatenation and pasted homotopies are continuous and well-defined in a fixed coordinate. [[lem-cubical-concatenation-is-well-defined-on-higher-homotopy-classes]]

[F2] The one-coordinate loop laws use endpoint-fixed reparametrizations; the formulas are replayed below. [[thm-fundamental-group-laws]]

[F3] A group has an associative operation, a two-sided identity and inverses. [[def-group]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 For any continuous $\phi:I\to I$ fixing endpoints, $a((1-t)s+t\phi(s),u)$ is a boundary-fixed homotopy from a to its reparametrization. The coordinate formula is jointly continuous, not merely continuous separately in u. Taking $\phi_R(s)=\min(2s,1)$ and $\phi_L(s)=\max(2s-1,0)$ gives $a*e\simeq a\simeq e*a$. These are the loop-law formulas of F2 with u retained as a parameter. [F1, F2]

2.1 For $w=(a*b)*c$, set $\phi(s)=s/2$ on $[0,1/2]$, $s-1/4$ on $[1/2,3/4]$, and $2s-1$ on $[3/4,1]$. The pieces agree and fix endpoints. Substitution gives $w(\phi(s),u)=(a*(b*c))(s,u)$ on all three intervals. Step 1.1 therefore proves associativity on classes. [F1, F2, step 1.1]

3.1 The map equal to $a(2s(1-t),u)$ for $s\le1/2$ and $a(2(1-s)(1-t),u)$ for $s\ge1/2$ pastes continuously. It fixes the exterior boundary, begins at $a*a^{-}$ and ends at e. Applying the same formula to $a^{-}$ contracts $a^{-}*a$. Together with steps 1.1–2.1 and F1 this verifies the group axioms of F3. [F1, F2, F3, step 1.1, step 2.1]

4.1 For $n\ge2$ let $*$ and $\circ$ concatenate in coordinates 1 and 2. Each has the same two-sided unit by step 1.1. Pasting four quarter-cubes gives $(a\circ b)*(c\circ d)=(a*c)\circ(b*d)$ on representatives. Therefore on classes $a*b=(a\circ e)*(e\circ b)=(a*e)\circ(e*b)=a\circ b$, whereas $a*b=(e\circ a)*(b\circ e)=(e*b)\circ(a*e)=b\circ a$. Hence the common operation commutes. For n=1 there is no second coordinate, and no commutativity claim is made. [F1, step 1.1, step 3.1] ∎
