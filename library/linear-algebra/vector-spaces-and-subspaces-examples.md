---
page: vector-spaces-and-subspaces-examples
title: "Vector Spaces and Subspaces: Examples and Counterexamples"
status: draft
items: []
examples: [ex-r-as-a-vector-space-over-q,
           ex-f-n-and-its-coordinate-subspaces,
           ex-sequence-space-and-eventually-zero-subspace,
           cex-subset-closed-under-addition-but-not-scaling,
           cex-subset-closed-under-scaling-but-not-addition,
           cex-pairwise-trivial-intersection-is-not-a-direct-sum,
           ex-sum-and-intersection-in-f-three,
           fs-union-of-two-subspaces-is-a-subspace]
---

**Objective.** This page is the worked companion to Vector Spaces, Subspaces,
Span and Direct Sums, linked under Prerequisites above. That page fixes the
axioms and proves the general theory with almost no example in sight; this one
supplies the instances, and the witnesses for the three places where the general
page had to be careful. Four examples, three counterexamples and one false
statement are recorded here.

**A field seen over itself and over a smaller field.**
[[ex-r-as-a-vector-space-over-q]] runs restriction of scalars on the library's own
$\mathbb{R}$. It is a vector space over itself; the unique field homomorphism
$\iota : \mathbb{Q} \to \mathbb{R}$ ([[lem-of-q-embeds]]) has as its image a
subfield of $\mathbb{R}$, over which $\mathbb{R}$ is a vector space by
[[lem-restriction-of-scalars]]; and setting $q \cdot x := \iota(q)x$ makes it a
vector space over $\mathbb{Q}$ itself. The item is explicit that the subfield is
the image $\iota[\mathbb{Q}]$ and not $\mathbb{Q}$, which is not a subset of
$\mathbb{R}$ in this library. Nothing is claimed about how large $\mathbb{R}$ is
over $\mathbb{Q}$; that is a question about dimension, which this page does not
touch.

**Coordinate spaces, and the two boundary cases.**
[[ex-f-n-and-its-coordinate-subspaces]] works inside $F^{3}$ over an arbitrary
field: the three coordinate lines $L_0, L_1, L_2$ are the spans of the standard
unit vectors, and $F^{3} = \bigoplus_{j<3} L_j$, the unique decomposition of $x$
being $x_0 e_0 + x_1 e_1 + x_2 e_2$. Because $3 = \{0,1,2\}$, the coordinates and
the summands are indexed from $0$; the same item records that $F^{0}$ has exactly
one element, the empty function, and so is the zero space rather than the empty
set. [[ex-sequence-space-and-eventually-zero-subspace]] moves to the infinite
index set $\mathbb{N}$: the eventually zero families form a linear subspace of
$F^{\mathbb{N}}$, that subspace is the span of the standard unit families
$e_k$, and it is not all of $F^{\mathbb{N}}$, the constant family at $1_F$ lying
outside it. That last point is the concrete form of the fact that a span consists
of the vectors built from **finitely** many elements of the spanning set, however
infinite the set is.

**Neither closure condition implies the other.**
[[def-linear-subspace]] asks for closure under addition and closure under scalar
multiplication, and two items show that neither can be dropped in favour of the
other. [[cex-subset-closed-under-addition-but-not-scaling]] takes the first
quadrant of $\mathbb{R}^{2}$: it contains the zero vector and is closed under
addition, and it fails to be a linear subspace at the single scalar $-1$, so it
is not even a subgroup of the additive group.
[[cex-subset-closed-under-scaling-but-not-addition]] takes the union of the two
coordinate axes of $F^{2}$, over any field: it contains the zero vector and is
closed under scalar multiplication, and $e_0 + e_1$ lies outside it. The first
witness needs an order and is therefore stated over $\mathbb{R}$; the second
needs only $1_F \ne 0_F$ and is stated over an arbitrary field.

**Why the direct sum condition is what it is.**
[[cex-pairwise-trivial-intersection-is-not-a-direct-sum]] is the item
[[def-internal-direct-sum]] was written around. In $F^{2}$, over any field, the
spans of $e_0$, of $e_1$ and of $e_0 + e_1$ have all their pairwise intersections
equal to $\{0_V\}$ and their sum equal to $F^{2}$, and yet $e_0 + e_1$
decomposes in two different ways, so condition (D2) fails at the third summand.
Pairwise trivial intersection is therefore strictly weaker than the condition in
the definition, and the characterisation by unique decomposition
([[lem-direct-sum-criterion]]) would be false for the pairwise notion. The item
makes no claim about how many such lines $F^{2}$ contains, which depends on the
field.

**A sum that is everything without being direct.**
[[ex-sum-and-intersection-in-f-three]] computes both operations explicitly on two
planes in $F^{3}$, the sets $x_2 = 0_F$ and $x_0 = 0_F$: their sum is all of
$F^{3}$ and their intersection is $\operatorname{span}\{e_1\}$, so the sum is not
direct. It is the smallest illustration of the two conditions of a direct sum
being independent, one holding and the other failing. Here, as on the A page, the
words *plane* and *line* are used informally and by analogy; dimension is not
available and no item uses it.

**Unions.** [[fs-union-of-two-subspaces-is-a-subspace]] records as a false
statement the claim that a union of two linear subspaces is a linear subspace,
refuted by the two coordinate axes of $F^{2}$, and its Remarks give the exact
condition: the union is a linear subspace precisely when one of the two contains
the other. Intersections behave, by
[[lem-intersection-of-linear-subspaces]], and the construction that repairs the
union is the sum, which [[lem-sum-is-span-of-union]] identifies with the span of
the union.

**What is deliberately absent.** There is no polynomial space $F[x]$ here and no
reading of $\mathbb{C}$ as a real and as a complex vector space: both need
material developed on later pages, polynomial rings for the first and the complex
numbers for the second, so neither can be stated at this point in the reading
order without pointing forward. They are recorded as belonging to a later page
rather than written here.
