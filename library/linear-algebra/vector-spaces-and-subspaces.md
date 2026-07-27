---
page: vector-spaces-and-subspaces
title: "Vector Spaces, Subspaces, Span and Direct Sums"
status: draft
items: [def-vector-space, lem-vector-space-elementary-consequences,
        def-function-space, def-matrix-space, lem-restriction-of-scalars,
        def-linear-subspace, lem-linear-subspace-is-a-subgroup,
        lem-linear-subspace-criterion, lem-intersection-of-linear-subspaces,
        def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations,
        lem-span-monotone-and-idempotent, lem-span-of-a-single-vector,
        def-sum-of-linear-subspaces, lem-sum-is-span-of-union,
        def-internal-direct-sum, lem-direct-sum-criterion]
examples: []
---

**Objective.** This page opens the linear algebra track. It defines a vector
space over an arbitrary field and develops the structure theory that needs no
counting: linear subspaces, the span, sums of subspaces and internal direct sums.
Every result below holds over any field and for any vector space whatever. No
proof on this page assumes a basis or a dimension, and none assumes that a vector
space, an index set or a spanning set is finite; the only finiteness anywhere is
the length of an individual sum of vectors and of a family of summands.

**The field and the additive group are the published ones.** A vector space here
is over a field in the sense of [[def-field]], and no field axiom is restated.
Its addition is an abelian group in the sense of [[def-group]], so associativity,
commutativity, the uniqueness of the zero vector ([[lem-identity-unique]]), the
uniqueness of negatives ([[lem-inverse-unique]]) and cancellation
([[lem-group-cancellation]]) are inherited rather than re-derived.
[[def-vector-space]] therefore adds exactly four axioms, relating the scalars to
the addition, and one warning: **scalar multiplication is a map
$F \times V \to V$ and is not a binary operation on a set**, so
[[def-binary-operation]] applies to the vector addition and never to it. The
fourth axiom $1_F v = v$ is an axiom, not a consequence, as the definition shows
by exhibiting a structure satisfying the other three and failing it.
[[lem-vector-space-elementary-consequences]] then extracts what the axioms do not
say outright: $0_F v = 0_V$, $\lambda 0_V = 0_V$, $(-\lambda)v = -(\lambda v)$,
$(-1_F)v = -v$, and that $\lambda v = 0_V$ forces $\lambda = 0_F$ or $v = 0_V$.
The identity $(-1_F)v = -v$ is used constantly below, since it says that closure
under scalar multiplication already gives closure under negatives.

**The two families of examples that carry the page.**
[[def-function-space]] makes the set $F^{X}$ of all functions $X \to F$ a vector
space with the pointwise operations, for an arbitrary index set $X$. Taking
$X = n$, a natural number, gives $F^{n}$; and because a natural number is a von
Neumann natural, $n = \{0, \dots, n-1\}$, so **the coordinates of an element of
$F^{n}$ are $x_0, \dots, x_{n-1}$ and every index on this page starts at $0$**.
The two boundary cases are stated there rather than left implicit: $F^{0}$ has
exactly one element, the empty function, so it is the zero space, and $F^{1}$ is
carried to $F$ by the bijection sending a vector to its single coordinate.
[[def-matrix-space]] is the case $X = m \times n$: it gives
$M_{m \times n}(F) = F^{\,m \times n}$ its vector-space structure and its entry
notation $a_{ij}$, with both indices from $0$, **and nothing else**: there is no
matrix product, no identity matrix and no determinant on this page, and a later
page must add the product to this object rather than define a second one.
[[def-function-space]] also records a dictionary that would otherwise be a silent
double definition: the same set $F^{X}$ carries the ring structure of
[[def-ring-of-functions]], with the **same** addition and with the pointwise
product of two functions in place of the scalar multiplication used here. The two
second operations do not even share a domain, and the relation between them is
that $\lambda f$ equals the ring product of $f$ with the constant function at
$\lambda$.

**Changing the field without changing the set.**
[[lem-restriction-of-scalars]] proves that a field is a vector space over itself,
and that an $F$-vector space becomes a $K$-vector space for any subfield
$K \subseteq F$ ([[def-subfield]]) by restricting the scalar multiplication. This
is the one place where the ring page is a genuine prerequisite. Its consequence
for reading everything below is that the field is part of the data: "the vector
space $V$" is incomplete language, and every statement on this page names its
field.

**Linear subspaces, and why they are called that.** The word *subspace* is
already in use in this library for the topological notion, so the names here all
say **linear**: [[def-linear-subspace]], [[lem-linear-subspace-criterion]],
[[lem-intersection-of-linear-subspaces]], [[lem-linear-subspace-is-a-subgroup]],
[[def-sum-of-linear-subspaces]]. The definition asks for three closure conditions
and shows that the restricted operations make such a subset a vector space in its
own right, with the zero and the negatives of the ambient space.
[[lem-linear-subspace-is-a-subgroup]] states the dictionary in both directions:
the linear subspaces of $V$ are exactly the subgroups of $(V,+,0_V)$
([[def-subgroup]]) that are closed under scalar multiplication, so everything the
library proves about subgroups is available here at once.
[[lem-linear-subspace-criterion]] compresses the three conditions into the single
test $\lambda u + v \in W$ on a nonempty subset, the linear counterpart of
[[lem-subgroup-criterion]], and [[lem-intersection-of-linear-subspaces]] shows
that intersections of nonempty families are again linear subspaces.

**The span, defined from outside and identified from inside.** The intersection
lemma is what licenses [[def-linear-combination-and-span]] to define
$\operatorname{span}(S)$ as the intersection of all linear subspaces containing
$S$, exactly as [[def-generated-subgroup]] is defined; a linear combination is a
finite sum $\sum_{i<n} \lambda_i v_i$, the finite sum being the published
[[def-monoid-finite-product]] read additively in the abelian group $(V,+,0_V)$.
[[def-finite-sum]] cannot serve here, being stated for sequences into the
complete ordered field. [[lem-span-is-the-set-of-linear-combinations]] then gives
the description from inside, that $\operatorname{span}(S)$ is precisely the set of
linear combinations of finite lists of elements of $S$, and with it
$\operatorname{span}(\varnothing) = \{0_V\}$ as a consequence of the empty sum
being $0_V$, not as a stipulation.
[[lem-span-monotone-and-idempotent]] records that the span is extensive, monotone
and idempotent, and that $\operatorname{span}(S) = S$ characterises the linear
subspaces among all subsets; [[lem-span-of-a-single-vector]] computes
$\operatorname{span}\{v\} = \{\, \lambda v : \lambda \in F \,\}$ and shows that
for $v \ne 0_V$ distinct scalars give distinct multiples.

**Sums and direct sums.** [[def-sum-of-linear-subspaces]] defines
$\sum_{i<n} U_i$ as the set of sums $\sum_{i<n} u_i$ with $u_i \in U_i$, proves
that it is a linear subspace rather than assuming it, and collects the three
facts about finite sums of vectors that the rest of the page uses. Its empty case
is $\{0_V\}$. [[lem-sum-is-span-of-union]] identifies the sum with
$\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$, so it is the smallest linear
subspace containing every summand. [[def-internal-direct-sum]] then states the
condition that matters: **for each $j$, $U_j$ meets the sum of the *other*
summands only in $0_V$**, and not merely that the summands meet each other
pairwise only in $0_V$. The definition proves that its condition implies the
pairwise one and states that the converse fails from three summands on, the
witness being on the companion page; for two summands the two conditions coincide
and the definition reads $U + W = V$ with $U \cap W = \{0_V\}$. The payoff is
[[lem-direct-sum-criterion]]: a direct sum is exactly the situation in which every
vector decomposes in exactly one way, and equally exactly the situation in which
only the all-zero list sums to $0_V$.

**What this page does not develop.** Linear independence, bases, dimension,
linear maps, the matrix product, quotient spaces and external direct sums are all
absent, and no proof above uses any of them. The empty family, the empty sum and
the index $0$ are treated as genuine cases throughout rather than as edge cases,
which is why $F^{0}$, $\operatorname{span}(\varnothing)$, $\sum_{i<0} U_i$ and
$\bigoplus_{i<0} U_i$ all appear explicitly. Seventeen items make up this page,
seven definitions and ten lemmas, six of them marked as landmarks in the
flowchart above.
