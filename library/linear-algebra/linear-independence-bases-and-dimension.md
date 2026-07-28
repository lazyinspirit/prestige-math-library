---
page: linear-independence-bases-and-dimension
title: "Linear Independence, Bases and Dimension"
status: draft
items: [def-linear-independence, lem-independent-list-is-injective,
        lem-dependent-iff-a-vector-lies-in-the-span-of-the-others,
        lem-independence-has-finite-character,
        lem-adjoining-a-vector-outside-the-span,
        def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis,
        lem-basis-iff-maximal-independent-iff-minimal-spanning,
        thm-steinitz-exchange,
        cor-independent-set-is-no-larger-than-a-finite-spanning-set,
        thm-any-two-finite-bases-have-the-same-size, def-dimension,
        thm-every-independent-set-extends-to-a-basis,
        cor-every-spanning-set-contains-a-basis,
        cor-every-vector-space-has-a-basis, lem-standard-basis-of-f-n,
        thm-dimension-of-a-linear-subspace,
        cor-a-linear-subspace-has-a-complement, thm-dimension-formula,
        cor-dimension-of-a-direct-sum]
examples: []
---

**Objective.** This page discharges the promise made at the end of Vector
Spaces, Linear Subspaces, Span and Direct Sums, which says in as many words that
it does not develop linear independence, bases or dimension. Here they are
developed, over an arbitrary field and for an arbitrary vector space: what it
means for a list or a set of vectors to be linearly independent, what a basis is,
that any two finite bases of a space have the same number of elements, and what
that number — the dimension — controls. Three definitions, six lemmas, six
theorems and five corollaries make up the page, thirteen of them marked as
landmarks in the flowchart above.

**Two notions of independence, defined together because the page needs both.**
[[def-linear-independence]] calls a finite list $v : n \to V$ independent when
$\sum_{i<n}\lambda_i v_i = 0_V$ forces every $\lambda_i = 0_F$, and calls a
**subset** $S \subseteq V$ independent when every **injective** finite list into
$S$ is. The injectivity clause is load bearing and the definition says why: a
linear combination as fixed by [[def-linear-combination-and-span]] is indexed by
an arbitrary list, which may repeat, and $1_F w + (-1_F)w = 0_V$ would make every
nonempty set dependent if repetitions were allowed. Lists carry order, and an
ordered list is what a coordinate system is; subsets carry no order, and it is
subsets that the Zorn argument runs over. That the two notions agree —
a list is independent exactly when it is injective with independent image — is
claim 6 of [[lem-independent-list-is-injective]], which also collects the three
facts about finite sums the page uses throughout: re-indexing a sum along an
injection, deleting an index carrying $0_V$, and concatenating two lists. The
boundary cases are treated as cases: the empty list and $\varnothing$ are
independent, and $\{0_V\}$ is dependent.

**Dependence without lists, and the one-vector step.**
[[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]] removes the
existential over lists from the statement: $S$ is dependent exactly when some
$s \in S$ lies in $\operatorname{span}(S \setminus \{s\})$. Its second claim is
used constantly below and is not available from
[[lem-span-is-the-set-of-linear-combinations]] alone: the span of $S$ is already
the set of combinations of **injective** lists into $S$, so a vector of the span
always comes with a list in which the coefficient of a chosen entry is
meaningful. [[lem-adjoining-a-vector-outside-the-span]] is the engine of every
existence argument on the page: adjoining a vector outside the span preserves
independence and strictly enlarges the span, while adjoining one inside the span
changes nothing. [[lem-independence-has-finite-character]] supplies the other
half of what Zorn needs: independence is decided by finite subsets, so the union
of a nonempty chain of independent sets is independent.

**Bases, coordinates and the three characterisations.**
[[def-linear-basis]] defines a basis as an independent spanning subset and an
**ordered** basis as an injective finite list whose image is a basis; it records
the naming decision, that the unqualified word *basis* is already in use in this
library for a basis of a topology, exactly as [[def-linear-subspace]] reserved
*subspace* for the topological notion. It also proves once, for the whole page,
that independence and spans of subsets of a linear subspace agree with those
computed in the ambient space, so "basis of $U$" is unambiguous.
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] is the reason ordered
bases are worth having: a list is an ordered basis exactly when every vector has
exactly one coordinate list in it. The coordinates belong to the **ordered**
basis and not to the underlying set, which the companion page shows by computing
one vector's coordinates in three ordered bases of $\mathbb{R}^{2}$, two of which
have the same image. [[lem-basis-iff-maximal-independent-iff-minimal-spanning]]
gives the order-theoretic reading: a basis is a maximal independent subset and
equally a minimal spanning subset, maximality and minimality taken in the
inclusion order.

**Counting, and what it is that is counted.** [[thm-steinitz-exchange]] is the
one hard computation of the page: an independent set cannot outnumber a finite
spanning set, and vectors of the former can be exchanged one at a time for
vectors of the latter without losing the spanning property. Its immediate
consequence [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]] is
the form later items use, including the clause that a space with a finite
spanning set has no independent subset equinumerous with $\mathbb{N}$. Applying
that corollary in both directions gives
[[thm-any-two-finite-bases-have-the-same-size]], which is the well-definedness
obligation for [[def-dimension]] and is listed among its prerequisites rather
than left implicit. Sizes are compared through equinumerosity
([[def-equinumerous]]) and through claim 3 of [[lem-pigeonhole]]; no cardinal
number is used anywhere on this page.

**What is deliberately not claimed about infinite bases.** This page does **not**
assert that any two infinite bases of a space are equinumerous. The Steinitz
argument gives invariance only when one basis is finite, and the standard proof
of the infinite case is cardinal arithmetic, which is not available at this point
in the reading order. Accordingly [[def-dimension]] defines $\dim_F V$ only for a
space with a finite basis, defines *infinite-dimensional* as the bare negation,
and attaches no symbol such as $\infty$ to such a space. The subscript on
$\dim_F$ is not ornamental either: by [[lem-restriction-of-scalars]] the same set
carries a vector space structure over any subfield, with different bases and a
different dimension, so "the dimension of $V$" is incomplete language in exactly
the way "the vector space $V$" is.

**Existence of bases, and what it costs.**
[[thm-every-independent-set-extends-to-a-basis]] is the page's single Zorn
argument, stated once in the form that yields both classical statements: between
any independent $L$ and any spanning $S \supseteq L$ there is a basis. The poset
is the independent sets between $L$ and $S$ under inclusion, and the **empty
chain is handled separately**, its upper bound being $L$ — [[thm-zorn]] as proved
in this library quantifies over every chain, and the union of the empty chain is
$\varnothing$, which need not contain $L$. The two corollaries follow by
specialising: [[cor-every-spanning-set-contains-a-basis]] at $L = \varnothing$,
and [[cor-every-vector-space-has-a-basis]] at $L = \varnothing$, $S = V$. The
Axiom of Choice is declared, not hidden: it is used exactly once, inside
[[thm-zorn]]. The converse — that the existence of bases implies the Axiom of
Choice — is a theorem of Blass from 1984 which this library does **not** prove
and does not use; it is recorded in that corollary's remarks, with its reference,
because it fixes the exact strength of the statement.

**The concrete side, and what finite dimension controls.**
[[lem-standard-basis-of-f-n]] writes down the standard basis of $F^{n}$ and
computes $\dim_F F^{n} = n$, with no choice principle anywhere; it also proves,
for the whole library, that a finite sum in a function space is computed
pointwise. [[thm-dimension-of-a-linear-subspace]] then shows that a linear
subspace of an $n$-dimensional space is finite-dimensional of dimension at most
$n$, with equality only when the subspace is everything — and it too uses no
choice, obtaining a basis of the subspace as an independent subset of greatest
size via [[thm-well-ordering-principle]]. Its third claim is the
finite-dimensional extension statement, that a linearly independent subset of a
finite-dimensional space is contained in a basis of it, again with no choice
principle; that is what the dimension formula below runs on. [[cor-a-linear-subspace-has-a-complement]]
returns to Zorn and produces a complement for an arbitrary linear subspace of an
arbitrary vector space, with no finiteness assumed. [[thm-dimension-formula]] is
the page's second main computation, $\dim_F(U+W) + \dim_F(U \cap W) = \dim_F U +
\dim_F W$ for finite-dimensional subspaces of an arbitrary ambient space, and
[[cor-dimension-of-a-direct-sum]] iterates it along a finite direct sum, using
condition (D2) of [[def-internal-direct-sum]] rather than pairwise trivial
intersections, which would not suffice. **Neither of those two costs a choice
principle**: the dimension formula extends a basis of $U \cap W$ to bases of $U$
and of $W$ through claim 3 of [[thm-dimension-of-a-linear-subspace]], the
finite-dimensional extension statement, which is proved from the size bound of
[[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], the least-element
principle [[thm-well-ordering-principle]] and
[[lem-adjoining-a-vector-outside-the-span]], none of which costs a choice
principle. So the whole finite-dimensional theory on this page is choice-free, and
the Axiom of Choice appears only where an arbitrary vector space does: in
[[thm-every-independent-set-extends-to-a-basis]], its two corollaries and
[[cor-a-linear-subspace-has-a-complement]].

**What this page does not develop.** There are no linear maps here, and
therefore no rank, no matrix of a linear map, no change-of-basis matrix and no
statement that $F^{m}$ and $F^{n}$ are isomorphic only when $m = n$; isomorphism
needs a linear map, which is the subject of a later page, and what that page will
need from this one is $\dim_F F^{n} = n$. There are no quotient spaces, no
external direct sums and no infinite direct sums. Dimension is finite dimension
throughout. The companion page carries the witnesses for the places where this
page had to be careful: that an infinite independent set need not span, that a
spanning set need not be independent, that a proper subspace can carry a basis
equinumerous with a basis of the whole space, and that the dimension formula has
no inclusion-exclusion analogue for three subspaces.
