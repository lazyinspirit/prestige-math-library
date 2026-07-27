---
id: cex-subset-closed-under-scaling-but-not-addition
kind: counterexample
title: "The union of the two coordinate axes of $F^{2}$ is closed under scalar multiplication and is not closed under addition, so neither closure condition implies the other"
status: draft
origin: session
deps: [def-linear-subspace, lem-linear-subspace-criterion, lem-span-of-a-single-vector, def-linear-combination-and-span, def-function-space, def-vector-space, def-field, lem-of-zero-mult, def-natural-numbers, lem-nat-order-is-membership, cex-subset-closed-under-addition-but-not-scaling]
justified_by: []
aliases: []
landmark: false
short: "union of two axes is not closed under $+$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
pipeline_run: null
---

## Statement refuted

**False claim:** if $V$ is a vector space over a field $F$ and $W \subseteq V$
contains $0_V$ and is closed under scalar multiplication, then $W$ is a linear
subspace of $V$ ([[def-linear-subspace]]).

The union of the two coordinate axes of $F^{2}$ refutes it, over any field $F$.
Let $e_0, e_1 \in F^{2}$ be the vectors with coordinates $(1_F, 0_F)$ and
$(0_F, 1_F)$ ([[def-function-space]]), let
$L_j := \operatorname{span}\{e_j\}$ ([[def-linear-combination-and-span]]), and put
$A := L_0 \cup L_1$. Then $0_V \in A$ and $A$ is closed under scalar
multiplication, while $e_0, e_1 \in A$ and $e_0 + e_1 \notin A$.

Together with [[cex-subset-closed-under-addition-but-not-scaling]], which
exhibits a subset closed under addition and not under scalar multiplication, this
shows that neither of the two closure conditions in [[def-linear-subspace]]
implies the other.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{2}$ over $F$, the vectors $e_0, e_1$, the sets $L_0, L_1$ and their union $A$, as displayed.

[L1] $F^{2}$ is the vector space of functions $2 \to F$ with $(x+y)_i = x_i + y_i$ and $(\lambda x)_i = \lambda x_i$, where $2 = \{0,1\}$, and its zero vector has both coordinates $0_F$ ([[def-function-space]], [[def-vector-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L2] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$, and a span is a linear subspace ([[lem-span-of-a-single-vector]], [[def-linear-combination-and-span]]).

[L3] A linear subspace satisfies (W1) $0_V \in W$, (W2) closure under $+$, and (W3) closure under scalar multiplication ([[def-linear-subspace]]); on a nonempty subset the three are equivalent to the one-step test ([[lem-linear-subspace-criterion]]).

[L4] In a field: $1_F \ne 0_F$; $\lambda 1_F = \lambda$; $0_F \lambda = 0_F$ ([[lem-of-zero-mult]]) and multiplication is commutative, so $\lambda 0_F = 0_F$; and $0_F$ is the additive identity, so $1_F + 0_F = 1_F = 0_F + 1_F$ ([[def-field]]).

[L5] There is a subset of a vector space that contains the zero vector and is closed under addition and is not closed under scalar multiplication ([[cex-subset-closed-under-addition-but-not-scaling]]).

[L6] The refuted claim: a subset of a vector space containing the zero vector and closed under scalar multiplication is a linear subspace.

## Counterexample

**Proof technique:** direct.

1.1 $F^{2}$ is the set of functions $2 \to F$ with coordinatewise operations and $2 = \{0,1\}$, so an element is $x = (x_0, x_1)$; and $L_j = \{\, \lambda e_j : \lambda \in F \,\}$ is a linear subspace of $F^{2}$ for $j \in \{0,1\}$. [L1, L2]

1.2 $L_j = \{\, x \in F^{2} : x_i = 0_F \text{ for the index } i \ne j \,\}$. Indeed $(\lambda e_j)_j = \lambda 1_F = \lambda$ and $(\lambda e_j)_i = \lambda 0_F = 0_F$ for $i \ne j$; conversely a vector $x$ whose other coordinate is $0_F$ agrees with $x_j e_j$ at both indices, so $x = x_j e_j$. [L1, L2, L4]

1.3 $0_V \in A$: the vector $0_F e_0$ has both coordinates $0_F \cdot (e_0)_i = 0_F$, so it is the zero vector, and it lies in $L_0 \subseteq A$. [L1, L2, L4]

1.4 $A$ is closed under scalar multiplication: if $x \in A$ then $x \in L_j$ for some $j \in \{0,1\}$, and $L_j$ is a linear subspace, so $\lambda x \in L_j \subseteq A$ for every $\lambda \in F$. [L2, L3]

1.5 $e_0 + e_1$ has coordinates $(1_F + 0_F,\; 0_F + 1_F) = (1_F, 1_F)$. [L1, L4]

2.1 $e_0 + e_1 \notin A$: membership in $L_0$ requires the coordinate at index $1$ to be $0_F$ and membership in $L_1$ requires the coordinate at index $0$ to be $0_F$, and both coordinates of $e_0 + e_1$ are $1_F \ne 0_F$. [step 1.2, step 1.5, L4]

2.2 $e_0 \in A$ and $e_1 \in A$, since $e_j = 1_F e_j \in L_j$. [step 1.2, L2, L4]

3.1 So $A$ contains the zero vector and is closed under scalar multiplication, while $e_0$ and $e_1$ lie in $A$ and their sum does not; condition (W2) therefore fails and $A$ is not a linear subspace of $F^{2}$. The claim of [L6] is false. [step 1.3, step 1.4, step 2.1, step 2.2, L3, L6]

4.1 Combining with [L5]: closure under addition does not imply closure under scalar multiplication, and closure under scalar multiplication does not imply closure under addition, so neither of the two conditions implies the other, even for subsets containing the zero vector. [step 3.1, L5] ∎

## Remarks

- **The witness works over every field**, including $F$ with two elements: the
  argument uses only $1_F \ne 0_F$, and never counts the elements of $F$ or the
  linear subspaces of $F^{2}$. No claim is made here about how many subsets of
  $F^{2}$ of this kind there are.

- **The union of two linear subspaces is the general phenomenon.** $A$ is a union
  of two linear subspaces, neither of which contains the other, and such a union
  is never a linear subspace; that is recorded separately as
  [[fs-union-of-two-subspaces-is-a-subspace]], of which this item is the concrete
  instance closed under scalar multiplication.

- **"Axis" is informal here**, as "line" is elsewhere on this page: it names the
  set $\operatorname{span}\{e_j\}$ and carries no claim about dimension, which is
  not available at this point in the library.
