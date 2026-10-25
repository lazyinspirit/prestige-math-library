---
id: cex-subset-closed-under-the-operation-not-a-subgroup
kind: counterexample
title: "A nonempty subset of a group closed under the operation need not be a subgroup: the nonnegative integers inside $(\\mathbb{Z}, +)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-subgroup, lem-subgroup-criterion, def-binary-operation, def-group, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "closed under $+$, not a subgroup"
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
    - title: "Subgroup (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subgroup"
    - title: "Submonoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid#Submonoids"
    - title: "Cancellation property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cancellation_property"
pipeline_run: null
---

## Statement refuted

**False claim:** if $G$ is a group and $H \subseteq G$ is nonempty, contains the
identity, and is closed under the operation of $G$, then $H$ is a subgroup of $G$
([[def-subgroup]]).

The set of nonnegative integers inside the additive group of $\mathbb{Z}$ refutes
it: $H = \{\, x \in \mathbb{Z} : 0 \le x \,\}$ contains $0$, is closed under
addition, and is not a subgroup, because $1 \in H$ while $-1 \notin H$.

## Facts & Assumptions

**Given:** The abelian group $(\mathbb{Z},+,0)$ ([[def-integers]], [[def-int-operations]], [[def-group]]) and the subset $H = \{\, x \in \mathbb{Z} : 0 \le x \,\}$, which by [[lem-nat-embeds-int]] is exactly the image of $\iota : \mathbb{N} \to \mathbb{Z}$.

[L1] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive and is compatible with addition ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[def-int-order]], [[def-int-operations]]).

[L2] $\iota$ is injective with image exactly the nonnegative integers, and $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L3] A subgroup must contain the identity and be closed under the operation **and** under inverses ([[def-subgroup]]); equivalently, a nonempty $H$ is a subgroup exactly when $x - y \in H$ for all $x, y \in H$ ([[lem-subgroup-criterion]]).

[L4] A subset closed under an operation inherits it as a binary operation ([[def-binary-operation]]).

[L5] The refuted claim: a nonempty subset of a group containing the identity and closed under the operation is a subgroup.

## Counterexample

**Proof technique:** direct.

1.1 $0 \in H$, since $0 \le 0$; so $H$ is nonempty and contains the identity of $(\mathbb{Z},+)$. [L1, given]

1.2 $H$ is closed under addition: if $0 \le x$ and $0 \le y$ then $x \le x + y$ by compatibility of the order with addition, and $0 \le x$, so $0 \le x + y$ by transitivity. Hence $+$ restricts to a binary operation on $H$, and $(H,+,0)$ is a commutative monoid. [L1, L4, given]

1.3 $0 < 1$: the integer $1 = \iota(1)$ lies in the image of $\iota$, so $0 \le 1$, and $1 \ne 0$ because $\iota$ is injective and $1 \ne 0$ in $\mathbb{N}$. Hence $1 \in H$. [L2, given]

2.1 $-1 \notin H$: adding $-1$ to both sides of $0 < 1$ gives $-1 < 0$, so $0 \le -1$ fails by antisymmetry. [step 1.3, L1]

3.1 Therefore $H$ is not closed under inverses, since $1 \in H$ and its additive inverse $-1$ is not in $H$; so $H$ is not a subgroup of $(\mathbb{Z},+)$. [step 1.3, step 2.1, L3]

4.1 By steps 1.1, 1.2 and 3.1 the set $H$ is a nonempty subset containing the identity and closed under the operation which is not a subgroup, so the claim of [L5] is false. [step 1.1, step 1.2, step 3.1, L5] ∎

## Remarks

- **Closure under inverses is an independent condition**, and this is why the economical criterion of [[lem-subgroup-criterion]] tests $xy^{-1}$ rather than $xy$: the single expression carries both closure requirements at once.

- **For a finite subset the claim would be true**, since a nonempty finite subset of a group closed under the operation is a subgroup; the witness above is necessarily infinite. That finiteness result is not proved in the library at this point in the reading order, and nothing here rests on it.

- $H$ is a perfectly good commutative monoid, by step 1.2, and $\iota$ is a bijection from $\mathbb{N}$ onto $H$ carrying addition to addition ([[lem-nat-embeds-int]]). So the example is the same phenomenon as [[cex-cancellative-monoid-not-a-group]], seen from inside a group.
