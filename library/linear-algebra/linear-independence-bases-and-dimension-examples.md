---
page: linear-independence-bases-and-dimension-examples
title: "Bases and Dimension: Examples and Counterexamples"
status: draft
items: []
examples: [ex-coordinates-depend-on-the-ordered-basis,
           ex-basis-of-the-eventually-zero-families,
           ex-hamel-basis-of-r-over-q,
           cex-independent-set-that-does-not-span,
           cex-spanning-set-that-is-not-independent,
           cex-proper-subspace-with-an-equinumerous-basis,
           cex-dimension-formula-fails-for-three-subspaces,
           fs-union-of-two-independent-sets-is-independent]
---

**Objective.** This page is the worked companion to Linear Independence, Bases
and Dimension, linked under Prerequisites above. That page proves the general
theory with almost no example in sight; this one supplies the instances, and the
witnesses for the four places where the general page had to be careful. Three
examples, four counterexamples and one false statement are recorded here.

**Coordinates belong to an ordered basis, not to a basis.**
[[ex-coordinates-depend-on-the-ordered-basis]] takes the single vector
$(1,2) \in \mathbb{R}^{2}$ and computes its coordinate list in three ordered
bases: $(1,2)$ in the standard one, $(2,1)$ in its reversal, and $(2,-1)$ in the
ordered basis $\bigl((1,1),(1,0)\bigr)$. The first two ordered bases have the
**same image**, so the difference between their coordinate lists is not a
difference of bases at all; it is what the word *ordered* is doing in
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]], whose uniqueness
clause is uniqueness for a fixed ordered basis and nothing more. The passage
between two such lists is a change of basis, which needs linear maps and belongs
to a later page.

**An infinite basis that is written down.**
[[ex-basis-of-the-eventually-zero-families]] builds the linear subspace $E$ of
eventually zero families inside $F^{\mathbb{N}}$, over an arbitrary field, and
shows that the standard unit families $e_k$ form a basis of it: they span $E$,
they are linearly independent, and $k \mapsto e_k$ is a bijection from
$\mathbb{N}$ onto the basis. $E$ is therefore infinite-dimensional, and **no
choice principle is used**: the independence argument is a pointwise evaluation
and the spanning argument exhibits the finite combination. Its first two claims
agree exactly with the first two claims of
[[ex-sequence-space-and-eventually-zero-subspace]] on the order-69 examples
page — that $E$ is a linear subspace and that it is the span of the $e_k$ — and
they are rebuilt here rather than quoted, because an examples page is a leaf of
the library and nothing outside it may depend on the items homed there. What is
new here is independence, which that page had no notion of, and the conclusion
about dimension.

**An infinite basis that is not.** [[ex-hamel-basis-of-r-over-q]] rebuilds
$\mathbb{R}$ as a vector space over the embedded copy $\iota[\mathbb{Q}]$ of the
rationals, again natively rather than by citing the order-69 example that states
the same construction, and applies [[cor-every-vector-space-has-a-basis]]: a
basis exists. Every such basis is infinite, because a finite one would give an
injection from $\mathbb{R}$ into a finite power of a countable set, making
$\mathbb{R}$ countable and contradicting [[thm-r-uncountable]]. The item is
explicit about what it does **not** say: the proof of existence exhibits no
basis, which is a statement about that proof, and it is not claimed that no basis
can be exhibited by any means — that would be a metamathematical assertion this
library has not established. Nor is the sharper statement made, that no basis is
countably infinite; that would need [[thm-countable-union-of-countable]], which
costs the Axiom of Countable Choice, and it is not needed, since
*infinite-dimensional* means only "no finite basis". Reading this item beside the
previous one is the point of the page: two infinite-dimensional spaces, one whose
basis is written down for free and one whose basis costs the Axiom of Choice and
is never seen.

**Independent does not mean spanning, and spanning does not mean independent.**
[[cex-independent-set-that-does-not-span]] takes the same $e_i$, now as a subset
of the whole of $F^{\mathbb{N}}$: they are independent and infinite, the space is
infinite-dimensional, and yet their span is only $E$, the constant family $1_F$
lying outside it. The whole content of the failure is that a linear combination
is finite. In finite dimension the corresponding statement is true, since an
independent set of full size cannot be enlarged; infinitude is not a substitute
for maximality, and the item notes that this set does extend to a basis by
[[thm-every-independent-set-extends-to-a-basis]].
[[cex-spanning-set-that-is-not-independent]] is the other direction, in $F^{2}$
over an arbitrary field: $\{(1,0),(0,1),(1,1)\}$ spans and is dependent, and each
of its three two-element subsets is a basis. That makes
[[cor-every-spanning-set-contains-a-basis]] concrete and shows the contained
basis is not unique.

**Where finite dimension is doing the work.**
[[cex-proper-subspace-with-an-equinumerous-basis]] refutes the claim that a
subspace whose basis is equinumerous with a basis of the ambient space must be
the whole space. Inside $E$, the span of $\{\, e_i : i \ge 1 \,\}$ is a proper
linear subspace, $e_0$ lying outside it, and its basis is equinumerous with a
basis of $E$ through the explicit enumeration $k \mapsto e_{k+1}$ of the smaller
basis by $\mathbb{N}$, set against the enumeration $k \mapsto e_k$ of the larger.
That is exactly the hypothesis
that [[thm-dimension-of-a-linear-subspace]] carries in its equality clause, and
the item is careful to compare two named bases through a named bijection rather
than to compare dimensions: neither space is assigned a dimension, since neither
has a finite basis.

**The dimension formula does not extend to three subspaces.**
[[cex-dimension-formula-fails-for-three-subspaces]] takes the three lines spanned
by $(1,0)$, $(0,1)$ and $(1,1)$ in $F^{2}$. Each has dimension $1$, all three
pairwise intersections and the triple intersection are $\{0_V\}$, and the sum is
$F^{2}$ of dimension $2$; the inclusion-exclusion analogue of
[[thm-dimension-formula]], written without subtraction so that both sides are
natural numbers, predicts $3$ against the true $2$. The same three lines appear
on the order-69 examples page in
[[cex-pairwise-trivial-intersection-is-not-a-direct-sum]], for a different
failure: there they show that pairwise trivial intersection does not make a sum
direct. Same witness, different failure, and neither statement follows from the
other.

**Unions.** [[fs-union-of-two-independent-sets-is-independent]] records as a
false statement the claim that a union of two linearly independent sets is
independent, refuted by $\{(1,0),(0,1)\}$ together with $\{(1,1)\}$ in $F^{2}$.
Its remarks name what survives: every **subset** of an independent set is
independent, and adjoining a vector **outside the span** preserves independence
([[lem-adjoining-a-vector-outside-the-span]]). The false claim is precisely what
is left when the second hypothesis is dropped.

**What is deliberately absent.** There is no polynomial space $F[x]$ here, and so
no basis $\{1, x, x^{2}, \dots\}$: polynomial rings belong to a page that has not
been built, so $F[x]$ does not exist as an object anywhere in the library yet and
the example cannot be stated without pointing at something that is not there. It
is deferred, not deleted, and belongs on the first examples page above the
polynomial-ring page. There is also no discussion of non-measurable sets built
from a basis of $\mathbb{R}$ over $\mathbb{Q}$. That needs a measure defined on
more than the null sets: the library develops measure zero and content zero in
$\mathbb{R}$, but Lebesgue measure and measurability are recorded among its
deferred results rather than proved, so nothing here could state what
"non-measurable" means. The clause was withdrawn for that reason.
