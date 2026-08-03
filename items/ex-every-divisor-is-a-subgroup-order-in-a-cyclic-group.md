---
id: ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group
kind: example
title: "Every positive divisor of the order of a finite cyclic group occurs as the order of a subgroup"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-divides-in-z, def-order-in-a-group, lem-order-characterisation, def-group-power, lem-group-power-laws, def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, lem-nat-embeds-int, thm-int-comm-ring, thm-int-ordered-ring, lem-int-cancellation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cyclic Groups"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §4.1: Cyclic Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/04%3A_Cyclic_Groups/4.01%3A_Cyclic_Subgroups"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Example

Let $G=\langle g\rangle$ be finite of order $n$. If the positive integer $d$
divides $n$, write $n=dq$ with $q>0$. Then

$$H=\langle g^q\rangle$$

is a subgroup of order $d$.

## Facts & Assumptions

**Given:** A finite cyclic group $G=\langle g\rangle$ of order $n$, and positive integers $d,q$ satisfying $n=dq$.

[L1] The generator has $\operatorname{ord}(g)=|G|=n$, and $g^k=e$ exactly when $n\mid k$ ([[def-order-in-a-group]], [[lem-order-characterisation]]).

[L2] Integer powers satisfy $(g^q)^k=g^{qk}$ ([[def-group-power]], [[lem-group-power-laws]]).

[F1] The generated set $\langle g^q\rangle$ is a subgroup, and its cardinality is the order of $g^q$ ([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]], [[lem-order-characterisation]]).

[L3] The canonical embedding preserves products and order; $\mathbb Z$ is an ordered commutative ring and multiplication by a nonzero integer is cancellative ([[lem-nat-embeds-int]], [[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-int-cancellation]], [[def-divides-in-z]]).

[L4] If a positive natural exponent $r$ satisfies $x^r=e$, then $x$ has finite order, and its order is the least such positive exponent and is at most $r$; if there is no such exponent, its order is $\infty$ ([[def-order-in-a-group]]).

## Verification

**Proof technique:** direct.

1.1 Put $h=g^q$. Then $h^d=g^{qd}=g^n=e$, so $h$ has finite order and $\operatorname{ord}(h)\le d$. [given, L1, L2, L3, L4]

1.2 If $h^k=e$ for a positive natural $k$, then $g^{qk}=e$, so [L1] gives $n\mid qk$. Thus $qk=n m=qdm$ for some integer $m$, and cancellation by the positive integer $q$ gives $k=dm$. [L1, L2, L3]

2.1 No positive $k<d$ satisfies $h^k=e$: step 1.2 would give $k=dm$; positivity forces $m\ge1$, hence $k\ge d$, a contradiction. Together with step 1.1, this gives $\operatorname{ord}(h)=d$. [step 1.1, step 1.2, L3]

3.1 Therefore $H=\langle h\rangle$ is a subgroup with $|H|=\operatorname{ord}(h)=d$. [step 2.1, F1] ∎
