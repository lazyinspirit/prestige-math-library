---
id: lem-commutative-division-ring-is-a-field
kind: lemma
title: "Every commutative division ring is a field, so \"field\" and \"commutative division ring\" name the same structures and the published definition and the ring-theoretic one agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-division-ring, def-commutative-ring, def-ring, def-field, lem-ring-elementary-consequences, lem-ring-units-form-a-group, lem-field-is-a-commutative-ring, def-invertible-element, def-group]
justified_by: []
aliases: []
landmark: true
short: "commutative division ring ⇒ field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
    - title: "Division ring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Division_ring"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.4: Integral Domains and Fields"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.04%3A_Integral_Domains_and_Fields"
pipeline_run: null
---

## Statement

Let $D$ be a commutative division ring ([[def-division-ring]],
[[def-commutative-ring]]), with addition $+$, multiplication $\cdot$, zero $0$
and identity $1$. Then $D$, with the same operations and the same two
distinguished elements, satisfies the axioms (A), (M) and (D) of [[def-field]];
that is, $D$ is a field.

Together with [[lem-field-is-a-commutative-ring]] this says that "field" and
"commutative division ring" name exactly the same structures, so the published
definition of a field and the ring-theoretic description of one agree and no
second notion of field is introduced on this page.

## Facts & Assumptions

**Given:** A commutative division ring $D$ with zero $0$, identity $1$, $1 \ne 0$, and $x^{-1}$ the two-sided multiplicative inverse of each $x \ne 0$ ([[def-division-ring]], [[def-commutative-ring]]).

[L1] $(D,+,0)$ is an abelian group, $(D,\cdot,1)$ is a monoid, both distributive laws hold, and multiplication is commutative ([[def-ring]], [[def-commutative-ring]], [[def-group]]).

[L2] $1 \ne 0$, and every $x \ne 0$ has a two-sided inverse $x^{-1}$; equivalently $D^{\times} = D \setminus \{0\}$ ([[def-division-ring]]).

[L3] $D^{\times}$ contains $1$, is closed under multiplication and under inversion, and is a group under the restricted multiplication; and $0 \in D^{\times}$ only when $1 = 0$ ([[lem-ring-units-form-a-group]], [[def-invertible-element]], [[def-group]]).

[L4] $x \cdot 0 = 0 = 0 \cdot x$ for every $x \in D$ ([[lem-ring-elementary-consequences]]).

[L5] The field axioms to be verified: (A) $(F,+)$ is an abelian group with identity $0$; (M) multiplication is associative and commutative on all of $F$ with $x \cdot 1 = x$ for every $x \in F$, and $(F \setminus \{0\}, \cdot)$ is an abelian group with identity $1$, each $x \ne 0$ having an inverse; (D) $x(y+z) = xy + xz$; and $0 \ne 1$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Axiom (A) holds: $(D,+,0)$ is an abelian group by [L1], which is precisely what (A) asserts. [L1, L5]

1.2 Axiom (D) holds: the left distributive law $x(y+z) = xy + xz$ is one of the two distributive laws of a ring. [L1, L5]

1.3 $0 \ne 1$ holds, by [L2]. [L2, L5]

1.4 $D^{\times} = D \setminus \{0\}$: every nonzero element is a unit by [L2]; and $0$ is not a unit, since $0 \cdot v = 0$ for every $v$ by [L4], so $0 \cdot v = 1$ would force $1 = 0$, contradicting [L2]. [L2, L3, L4]

2.1 $D \setminus \{0\}$ is a group under the restricted multiplication, with identity $1$: this is [L3] applied to $D^{\times}$, which by step 1.4 is $D \setminus \{0\}$. In particular $D \setminus \{0\}$ is closed under multiplication, so $D$ has no zero divisors. [step 1.4, L3]

2.2 That group is abelian, since multiplication is commutative on all of $D$ and therefore on the subset $D \setminus \{0\}$. [step 1.4, L1]

3.1 Axiom (M) holds in both of its clauses: multiplication is associative and commutative on all of $D$ with $x \cdot 1 = x$ for every $x \in D$, since $(D,\cdot,1)$ is a commutative monoid by [L1]; and $(D \setminus \{0\}, \cdot)$ is an abelian group with identity $1$ by steps 2.1 and 2.2. [step 2.1, step 2.2, L1, L5]

4.1 By steps 1.1, 1.2, 1.3 and 3.1 the structure $(D,+,\cdot,0,1)$ satisfies (A), (M), (D) and $0 \ne 1$, so it is a field. [step 1.1, step 1.2, step 1.3, step 3.1, L5] ∎

## Remarks

- **Both directions are needed, and each is a numbered item.** This lemma turns a commutative division ring into a field; [[lem-field-is-a-commutative-ring]] turns a field into a commutative division ring. Without the pair, the page would carry two unrelated words for one class of structures, which is exactly the defect the page exists to avoid.

- **Both clauses of axiom (M) are verified separately.** (M) asserts associativity, commutativity and $x \cdot 1 = x$ on all of $F$, and that $(F \setminus \{0\}, \cdot)$ is an abelian group. A commutative division ring supplies the first clause directly from its ring axioms, its multiplication being a commutative monoid operation on all of $D$, and the second from steps 2.1 and 2.2; nothing about $0$ is left implicit.

- **Why step 1.4 is not a triviality.** "Every nonzero element is a unit" does not by itself say that the units are exactly the nonzero elements: the extra content is that $0$ is not a unit, and that needs $0 \cdot v = 0$ ([[lem-ring-elementary-consequences]]) together with $1 \ne 0$. In the one-element ring, where $1 = 0$, the units are all of the ring and axiom (M) of [[def-field]] would fail for want of $0 \ne 1$.
