---
id: def-subring
kind: definition
title: "Subring: a subset containing $1_R$ and closed under addition, additive inverses and multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ring, def-subgroup, def-binary-operation, def-identity-element]
justified_by: []
aliases: []
landmark: true
short: "subring"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Subring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subring"
pipeline_run: null
---

## Definition

Let $R$ be a ring ([[def-ring]]) with zero $0_R$ and identity $1_R$. A subset
$S \subseteq R$ is a **subring** of $R$ when

- **(T1)** $1_R \in S$;
- **(T2)** $x, y \in S$ implies $x + y \in S$;
- **(T3)** $x \in S$ implies $-x \in S$;
- **(T4)** $x, y \in S$ implies $xy \in S$.

**Why $S$ is then a ring, with the same zero and the same identity.** From (T1)
and (T3), $-1_R \in S$, and from (T2), $0_R = 1_R + (-1_R) \in S$. So $S$
contains $0_R$, is closed under addition and closed under additive inverses,
which are exactly conditions (S1), (S2) and (S3) of [[def-subgroup]] for the
abelian group $(R,+,0_R)$; hence $S$ is a subgroup of $(R,+,0_R)$, and
[[def-subgroup]] states that a subgroup with the restricted operation is itself
a group, **whose identity and whose inverses are those of the ambient group**.
So $(S,+,0_R)$ is an abelian group, commutativity being inherited.

By (T4) multiplication restricts to a binary operation on $S$
([[def-binary-operation]]), and that restriction is associative because it is
associative on $R$. By (T1) the element $1_R$ lies in $S$ and satisfies
$1_R x = x = x 1_R$ there, so it is a two-sided identity for the restricted
multiplication ([[def-identity-element]]); thus $(S,\cdot,1_R)$ is a monoid.
Both distributive laws hold in $S$ because they hold in $R$ and are equations
between elements of $S$.

Therefore $(S, +, \cdot, 0_R, 1_R)$ is a ring, and

$$0_S = 0_R, \qquad 1_S = 1_R, \qquad -_S x = -_R x \quad (x \in S).$$

This last line is not decoration: it is what makes a statement proved in $S$
transportable to $R$ without translation, and it is used when a subfield of an
ordered field is shown to inherit the order and when scalars are restricted
along a subfield inclusion.

## Remarks

- **(T1) is not redundant, and it is forced by the ring convention.** Because
  [[def-ring]] builds the identity into a ring, a subring must carry the *same*
  identity, and a subset closed under (T2), (T3) and (T4) need not contain it.
  The companion page exhibits the standard witness: the even integers are closed
  under addition, negation and multiplication and do not contain $1$. Such a
  subset is a non-unital ring, not a subring.

- **A subring need not be an ideal and an ideal need not be a subring.** Nothing
  on this page defines ideals; the point of the remark is only that closure
  under multiplication by arbitrary elements of $R$ is not asked for here.

- **The economical test.** Conditions (T2) and (T3) can be replaced by the single
  condition $x - y \in S$, exactly as [[lem-subgroup-criterion]] replaces the
  three subgroup conditions by one; that is [[lem-subring-criterion]], which also
  shows that an intersection of subrings is a subring.
