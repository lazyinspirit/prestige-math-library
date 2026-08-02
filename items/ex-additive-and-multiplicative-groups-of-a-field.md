---
id: ex-additive-and-multiplicative-groups-of-a-field
kind: example
title: "For any field $F$, $(F, +)$ and $(F \\setminus \\{0\\}, \\cdot)$ are abelian groups; in particular $(\\mathbb{Q}, +)$, $(\\mathbb{Q} \\setminus \\{0\\}, \\cdot)$, $(\\mathbb{R}, +)$ and $(\\mathbb{R} \\setminus \\{0\\}, \\cdot)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-field, def-group, def-semigroup-and-monoid, def-binary-operation, def-identity-element, def-invertible-element, thm-rat-field, thm-reals-field]
justified_by: []
aliases: []
landmark: false
short: "the two groups of a field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
    - title: "Abelian group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abelian_group"
pipeline_run: null
---

## Example

Let $F$ be a field ([[def-field]]). Then

- $(F, +, 0)$ is an abelian group ([[def-group]]), the **additive group** of $F$;
- $(F \setminus \{0\}, \cdot, 1)$ is an abelian group, the **multiplicative
  group** of $F$, often written $F^{\times}$.

Since the rationals ([[thm-rat-field]]) and the reals ([[thm-reals-field]]) are
fields, this gives four groups at once: $(\mathbb{Q},+)$,
$(\mathbb{Q} \setminus \{0\}, \cdot)$, $(\mathbb{R},+)$ and
$(\mathbb{R} \setminus \{0\}, \cdot)$. All four are infinite and abelian.

## Facts & Assumptions

**Given:** A field $F$ with operations $+$ and $\cdot$ and distinguished elements $0 \ne 1$ ([[def-field]]).

[L1] Axiom (A): addition is associative and commutative, $x + 0 = x$ for all $x \in F$, and every $x$ has an additive inverse $-x$ with $x + (-x) = 0$ ([[def-field]]).

[L2] Axiom (M): multiplication is associative and commutative, $x \cdot 1 = x$ for all $x \in F$, and every $x \ne 0$ has a multiplicative inverse $x^{-1}$ with $x \cdot x^{-1} = 1$ ([[def-field]]).

[L3] Axiom (D): $x(y+z) = xy + xz$; and $0 \ne 1$ ([[def-field]]).

[L4] A group is a monoid in which every element is invertible; a monoid is an associative binary operation on a set together with a two-sided identity; abelian means the operation is commutative; a subset closed under an operation inherits it ([[def-group]], [[def-semigroup-and-monoid]], [[def-binary-operation]], [[def-identity-element]], [[def-invertible-element]]).

[L5] $\mathbb{Q}$ is a field ([[thm-rat-field]]) and $\mathbb{R}$ is a field ([[thm-reals-field]]).

## Verification

**Proof technique:** direct.

1.1 Addition is a binary operation on $F$, associative and commutative by (A). [L1]

1.2 $0$ is a two-sided identity for $+$: $x + 0 = x$ by (A), and $0 + x = x + 0 = x$ by commutativity. So $(F,+,0)$ is a commutative monoid. [L1, L4]

1.3 Every $x \in F$ is invertible for $+$: $x + (-x) = 0$ by (A) and $(-x) + x = 0$ by commutativity, so $-x$ is a two-sided inverse. Hence $(F,+,0)$ is an abelian group. [L1, L4]

1.4 For every $z \in F$, $z \cdot 0 = 0$: by (D), $z \cdot 0 = z(0 + 0) = z \cdot 0 + z \cdot 0$, and adding $-(z \cdot 0)$ to both sides gives $0 = z \cdot 0$. [L1, L3]

2.1 $F \setminus \{0\}$ is closed under multiplication. Let $x, y \ne 0$ and suppose $xy = 0$. Multiplying by $x^{-1}$ and regrouping, $y = 1 \cdot y = (x^{-1}x)y = x^{-1}(xy) = x^{-1} \cdot 0 = 0$, contradicting $y \ne 0$. So $xy \ne 0$, and multiplication restricts to a binary operation on $F \setminus \{0\}$. [step 1.4, L2, L4]

3.1 $1 \in F \setminus \{0\}$ because $0 \ne 1$, and $x \cdot 1 = x = 1 \cdot x$ for every $x$ by (M) and commutativity; the restricted operation is associative and commutative because it is so on $F$. Hence $(F \setminus \{0\}, \cdot, 1)$ is a commutative monoid. [step 2.1, L2, L3, L4]

4.1 Every $x \in F \setminus \{0\}$ is invertible there: (M) supplies $x^{-1} \in F$ with $x x^{-1} = 1$, and $x^{-1} \ne 0$ since otherwise $1 = x \cdot 0 = 0$, contradicting $0 \ne 1$; commutativity gives $x^{-1} x = 1$ as well, so $x^{-1}$ is a two-sided inverse lying in $F \setminus \{0\}$. [step 1.4, step 3.1, L2, L3]

5.1 By steps 1.3, 3.1 and 4.1, $(F,+,0)$ and $(F \setminus \{0\}, \cdot, 1)$ are abelian groups, and applying this to the fields $\mathbb{Q}$ and $\mathbb{R}$ gives the four groups listed. [step 1.3, step 3.1, step 4.1, L4, L5] ∎

## Remarks

- **This is the cheapest bridge from the analysis half of the library to the algebra half.** The field axioms as stated in [[def-field]] already say "$(F,+)$ is an abelian group" and "$(F \setminus \{0\},\cdot)$ is an abelian group"; what the verification above adds is that the group axioms in the sense of [[def-group]] really do all follow from the equations that axiom spells out, including the one thing the spelling out leaves implicit, namely that $F \setminus \{0\}$ is closed under multiplication.

- Step 2.1 is where the absence of zero divisors is used, and it is a consequence of the field axioms rather than an extra hypothesis. In a general commutative ring the corresponding statement is false, and the nonzero elements need not be closed under multiplication.
