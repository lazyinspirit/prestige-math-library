---
id: cex-subset-closed-under-addition-but-not-scaling
kind: counterexample
title: "The first quadrant of $\\mathbb{R}^{2}$ contains $0$ and is closed under addition and is not a linear subspace, since it is not closed under multiplication by $-1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-subspace, lem-linear-subspace-criterion, lem-linear-subspace-is-a-subgroup, lem-vector-space-elementary-consequences, def-subgroup, def-function-space, def-vector-space, def-ordered-field, lem-of-square-positive, thm-reals-field, thm-reals-ordered-field, def-real-numbers, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: []
landmark: false
short: "first quadrant is not a linear subspace"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, 2.6 Subspaces"
      url: "https://math.libretexts.org/Bookshelves/Linear_Algebra/Interactive_Linear_Algebra_(Margalit_and_Rabinoff)/02%3A_Systems_of_Linear_Equations-_Geometry/2.06%3A_Subspaces"
pipeline_run: null
---

## Statement refuted

**False claim:** if $V$ is a vector space over a field $F$ and $W \subseteq V$
contains $0_V$ and is closed under the vector addition, then $W$ is a linear
subspace of $V$ ([[def-linear-subspace]]).

The **first quadrant** of $\mathbb{R}^{2}$ refutes it. Take $F = \mathbb{R}$
([[thm-reals-field]]) and $V = \mathbb{R}^{2}$ ([[def-function-space]]), and put

$$Q \;:=\; \{\, x \in \mathbb{R}^{2} \;:\; 0 \le x_0 \text{ and } 0 \le x_1 \,\}.$$

Then $0_V \in Q$ and $Q$ is closed under addition, but the vector $e_0$ with
coordinates $(1,0)$ lies in $Q$ while $(-1)e_0$, with coordinates $(-1,0)$, does
not. So $Q$ is not closed under scalar multiplication and is not a linear
subspace.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$ ([[thm-reals-field]], [[def-real-numbers]]) with its order, the vector space $\mathbb{R}^{2}$ over $\mathbb{R}$, and the subset $Q$ displayed above.

[L1] $\mathbb{R}$ is an ordered field with positive cone $P$: (O1) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds; (O2) $P$ is closed under addition and multiplication; $x > 0$ means $x \in P$, and $a \le b$ means $a < b$ or $a = b$ ([[thm-reals-ordered-field]], [[def-ordered-field]]).

[L2] Every nonzero square of an ordered field is positive ([[lem-of-square-positive]]).

[L3] $\mathbb{R}^{2}$ is a vector space over $\mathbb{R}$ with $(x+y)_i = x_i + y_i$ and $(\lambda x)_i = \lambda x_i$ for $i \in 2 = \{0,1\}$, and its zero vector has both coordinates $0$ ([[def-function-space]], [[def-vector-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L4] A linear subspace satisfies (W1) $0_V \in W$, (W2) closure under $+$, and (W3) closure under scalar multiplication ([[def-linear-subspace]]); the three conditions are together equivalent to the one-step test on a nonempty subset ([[lem-linear-subspace-criterion]]).

[L5] Every linear subspace is a subgroup of the additive group of the space, and a subgroup is closed under inverses ([[lem-linear-subspace-is-a-subgroup]], [[def-subgroup]]).

[L6] $(-1_F)v = -v$ in any vector space ([[lem-vector-space-elementary-consequences]]).

[L7] Field arithmetic in $\mathbb{R}$: $1 \ne 0$; $1 \cdot a = a$; $a \cdot 0 = 0$; $0$ is the additive identity; and $-(-1) = 1$, since $(F,+,0)$ is an abelian group ([[def-field]]).

[L8] The refuted claim: a subset of a vector space containing the zero vector and closed under addition is a linear subspace.

## Counterexample

**Proof technique:** direct.

1.1 $\mathbb{R}^{2}$ is the vector space of functions $2 \to \mathbb{R}$ with coordinatewise operations, $2 = \{0,1\}$, so an element is $x = (x_0, x_1)$ and the zero vector is $(0,0)$. [L3]

1.2 The zero vector lies in $Q$, since $0 \le 0$; in particular $Q$ is nonempty. [L1, L3]

1.3 $0 < 1$ in $\mathbb{R}$: $1 \ne 0$ and $1 = 1 \cdot 1$ is a square, so $1 \in P$. [L1, L2, L7]

1.4 If $a, b \in \mathbb{R}$ satisfy $0 \le a$ and $0 \le b$, then $0 \le a + b$: if $a = 0$ then $a + b = b$; if $b = 0$ then $a + b = a$; and otherwise $a, b \in P$, so $a + b \in P$ by (O2). [L1, L7]

2.1 $Q$ is closed under addition: for $x, y \in Q$ and $i \in \{0,1\}$ we have $(x+y)_i = x_i + y_i$ with $0 \le x_i$ and $0 \le y_i$, hence $0 \le (x+y)_i$. [step 1.4, L1, L3]

2.2 It is not the case that $0 \le -1$: applying trichotomy to $-1$, exactly one of $-1 \in P$, $-1 = 0$, $-(-1) = 1 \in P$ holds, and the last one does, so $-1 \notin P$ and $-1 \ne 0$. [step 1.3, L1, L7]

2.3 The vector $e_0$ with $(e_0)_0 = 1$ and $(e_0)_1 = 0$ lies in $Q$, since $0 \le 1$ and $0 \le 0$. [step 1.3, L1, L3]

3.1 $(-1)e_0$ has coordinates $((-1)\cdot 1, (-1)\cdot 0) = (-1, 0)$, and its coordinate at index $0$ fails $0 \le -1$, so $(-1)e_0 \notin Q$. Hence $Q$ is not closed under scalar multiplication: condition (W3) fails, and $Q$ is not a linear subspace of $\mathbb{R}^{2}$. [step 2.2, step 2.3, L3, L4, L7]

4.1 So $Q$ contains the zero vector and is closed under addition, by steps 1.2 and 2.1, and is not a linear subspace, by step 3.1; the claim of [L8] is therefore false. The failure can also be read in the additive group: $(-1)e_0 = -e_0$ lies outside $Q$, so $Q$ is not even a subgroup of the additive group of $\mathbb{R}^{2}$, whereas a linear subspace always is. [step 1.2, step 2.1, step 3.1, L5, L6, L8] ∎

## Remarks

- **Exactly one of the three conditions fails.** $Q$ satisfies (W1) and (W2) and
  fails (W3), and it fails it at a single scalar, $-1$. The reverse failure, a
  subset closed under scalar multiplication but not under addition, is recorded in
  [[cex-subset-closed-under-scaling-but-not-addition]], so neither closure
  condition implies the other.

- **What the order is doing here.** The example needs a field in which some
  element is not the negative of a nonnegative one, so it needs an order; over an
  arbitrary field there is no "first quadrant" to speak of. That is why this
  witness is stated over $\mathbb{R}$ while its companion is stated over an
  arbitrary field.

- **$Q$ is closed under multiplication by nonnegative scalars.** If $0 \le \lambda$
  and $x \in Q$ then $\lambda x \in Q$, by the closure of $P$ under multiplication
  together with the zero cases. So the failure is confined to the negative
  scalars; a subset with this weaker closure property is a cone, not a linear
  subspace, and the difference is exactly what the example isolates.
