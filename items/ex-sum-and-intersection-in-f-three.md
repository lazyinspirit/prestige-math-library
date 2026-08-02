---
id: ex-sum-and-intersection-in-f-three
kind: example
title: "Two planes in $F^{3}$ whose sum is $F^{3}$ and whose intersection is a line, computed explicitly"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sum-of-linear-subspaces, lem-intersection-of-linear-subspaces, lem-span-of-a-single-vector, def-linear-combination-and-span, def-linear-subspace, lem-linear-subspace-criterion, def-internal-direct-sum, def-function-space, def-vector-space, def-field, lem-of-zero-mult, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "two planes in $F^{3}$: sum and intersection"
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
    - title: "Examples of vector spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Examples_of_vector_spaces"
pipeline_run: null
---

## Example

Let $F$ be a field ([[def-field]]) and let $F^{3}$ be the vector space of
functions $3 \to F$ with the pointwise operations ([[def-function-space]]), where
$3 = \{0,1,2\}$, so an element is $x = (x_0, x_1, x_2)$ indexed from $0$. Let
$e_1 \in F^{3}$ have coordinates $(0_F, 1_F, 0_F)$ and put

$$U \;:=\; \{\, x \in F^{3} : x_2 = 0_F \,\}, \qquad W \;:=\; \{\, x \in F^{3} : x_0 = 0_F \,\}.$$

Then:

1. $U$ and $W$ are linear subspaces of $F^{3}$ ([[def-linear-subspace]]);
2. $U + W = F^{3}$ ([[def-sum-of-linear-subspaces]]), a decomposition of $x$
   being $x = (x_0, x_1, 0_F) + (0_F, 0_F, x_2)$;
3. $U \cap W = \{\, x \in F^{3} : x_0 = 0_F \text{ and } x_2 = 0_F \,\} = \operatorname{span}\{e_1\}$;
4. the sum is **not** direct: it is not the case that $F^{3} = U \oplus W$,
   because $U \cap W \ne \{0_V\}$.

$U$ and $W$ are called planes and $U \cap W$ a line, informally and by analogy
only; dimension is not available at this point in the library and nothing below
uses it.

## Facts & Assumptions

**Given:** A field $F$, the vector space $F^{3}$ with pointwise operations, the vector $e_1$, and the sets $U$ and $W$ as displayed.

[L1] $F^{3}$ is the vector space of functions $3 \to F$ with $(x+y)_i = x_i + y_i$ and $(\lambda x)_i = \lambda x_i$, where $3 = \{0,1,2\}$; its zero vector has all three coordinates $0_F$; and two elements are equal exactly when all three coordinates agree ([[def-function-space]], [[def-vector-space]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

[L2] One-step test: a nonempty $T \subseteq V$ with $\lambda u + v \in T$ for all $\lambda \in F$ and $u, v \in T$ is a linear subspace ([[lem-linear-subspace-criterion]], [[def-linear-subspace]]).

[L3] The intersection of a nonempty family of linear subspaces is a linear subspace ([[lem-intersection-of-linear-subspaces]]).

[L4] $U + W = \{\, u + w : u \in U,\ w \in W \,\}$, and it is a linear subspace ([[def-sum-of-linear-subspaces]]).

[L5] $\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$ ([[lem-span-of-a-single-vector]], [[def-linear-combination-and-span]]).

[L6] For two summands, $F^{3} = U \oplus W$ requires $U + W = F^{3}$ and $U \cap W = \{0_V\}$ ([[def-internal-direct-sum]]).

[L7] In a field: $1_F \ne 0_F$; $\lambda 1_F = \lambda$; $0_F \lambda = 0_F$ ([[lem-of-zero-mult]]) and multiplication is commutative, so $\lambda 0_F = 0_F$; and $0_F$ is the additive identity ([[def-field]]).

## Verification

**Proof technique:** direct.

1.1 $F^{3}$ is the set of functions $3 \to F$ with coordinatewise operations, and $e_1$ has coordinates $(0_F, 1_F, 0_F)$, so $e_1 \in F^{3}$. [L1, L7]

1.2 $U$ is a linear subspace: it contains the zero vector, whose coordinate at index $2$ is $0_F$, so it is nonempty; and for $\lambda \in F$ and $u, v \in U$ the vector $\lambda u + v$ has $(\lambda u + v)_2 = \lambda u_2 + v_2 = \lambda 0_F + 0_F = 0_F$, so it lies in $U$. The same argument at index $0$ shows $W$ is a linear subspace. [L1, L2, L7]

1.3 $U \cap W = \{\, x \in F^{3} : x_0 = 0_F \text{ and } x_2 = 0_F \,\}$, directly from the two defining conditions. [L1]

1.4 The scalar multiples of $e_1$ are exactly the vectors with coordinates $(0_F, \lambda, 0_F)$: $(\lambda e_1)_0 = \lambda 0_F = 0_F$, $(\lambda e_1)_1 = \lambda 1_F = \lambda$ and $(\lambda e_1)_2 = \lambda 0_F = 0_F$. Conversely a vector $x$ with $x_0 = x_2 = 0_F$ agrees with $x_1 e_1$ at all three indices, so $x = x_1 e_1$. [L1, L7]

2.1 Claim 1 is step 1.2. [step 1.2, L2]

2.2 Claim 3: by steps 1.3 and 1.4 the intersection $U \cap W$ is exactly $\{\, \lambda e_1 : \lambda \in F \,\}$, which is $\operatorname{span}\{e_1\}$; it is a linear subspace, being an intersection of two of them. [step 1.3, step 1.4, L3, L5]

2.3 Claim 2: given $x \in F^{3}$, put $u := (x_0, x_1, 0_F)$ and $w := (0_F, 0_F, x_2)$. Then $u \in U$ and $w \in W$ by step 1.2, and $u + w$ has coordinates $(x_0 + 0_F,\; x_1 + 0_F,\; 0_F + x_2) = (x_0, x_1, x_2)$, so $u + w = x$. Hence $F^{3} \subseteq U + W$, and the reverse inclusion holds because $U + W$ is a subset of $F^{3}$. [step 1.2, L1, L4, L7]

3.1 Claim 4: $e_1 \in U \cap W$ by step 2.2, and $e_1 \ne 0_V$ because its coordinate at index $1$ is $1_F \ne 0_F$; so $U \cap W \ne \{0_V\}$ and the condition for a direct sum of two summands fails. [step 2.2, L1, L6, L7]

4.1 Claims 1, 2, 3 and 4 are steps 2.1, 2.3, 2.2 and 3.1: the two planes have sum $F^{3}$ and intersection $\operatorname{span}\{e_1\}$, and the sum is not direct. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **A sum can be everything without being direct.** Condition (D1) holds here and
  (D2) fails, and the two are independent: the failure is exactly the nonzero
  overlap $\operatorname{span}\{e_1\}$. Concretely, $e_1$ decomposes in more than
  one way, for instance as $e_1 + 0_V$ with $e_1 \in U$ and as $0_V + e_1$ with
  $e_1 \in W$.

- **The intersection did not have to be computed by hand to know it is a
  subspace**, since intersections of linear subspaces always are
  ([[lem-intersection-of-linear-subspaces]]). What the computation adds is the
  identification of that subspace as $\operatorname{span}\{e_1\}$, which is the
  point of the example.

- **Everything here is over an arbitrary field.** No order, no square roots and no
  counting are used; the only field facts needed are $1_F \ne 0_F$ and the
  identity laws.
