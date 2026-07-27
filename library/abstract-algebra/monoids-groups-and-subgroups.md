---
page: monoids-groups-and-subgroups
title: "Binary Operations, Monoids, Groups and Subgroups"
status: published
items: [def-equivalence-relation, lem-equivalence-classes-partition,
        def-binary-operation, def-identity-element, lem-identity-unique,
        def-semigroup-and-monoid, def-invertible-element, lem-inverse-unique,
        def-group, lem-group-inverse-laws, lem-group-cancellation,
        lem-monoid-units-form-a-group, def-symmetric-group,
        lem-symmetric-group-is-a-group, def-monoid-finite-product,
        thm-generalised-associativity, def-group-power, lem-group-power-laws,
        def-subgroup, lem-subgroup-criterion, lem-intersection-of-subgroups,
        def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers,
        thm-division-algorithm-in-z, lem-order-of-element-exists,
        def-order-in-a-group, lem-order-characterisation,
        def-group-homomorphism, lem-group-homomorphism-basic-properties]
examples: []
---

**Objective.** This page opens the abstract algebra track. Everything the library
has built so far, the naturals, the integers, the rationals and the reals, was
built one structure at a time, and each construction re-proved the same handful
of facts about its own operation: associativity, an identity, inverses,
cancellation. This page isolates that handful into axioms and proves the facts
once, for every structure satisfying them at once. The axioms themselves say
nothing about numbers, and no result below is about a particular number system.
Numbers do enter, in three specific places and as the library's own $\mathbb{N}$
and $\mathbb{Z}$: as exponents, as counts, and in the division algorithm that
the order of an element turns out to need, which is proved here for want of an
earlier home. The number systems reappear as *examples of groups* only on the
companion page linked under Prerequisites above.

**Equivalence relations, minted here.** The library has used specific equivalence
relations from its first pages, in the construction of $\mathbb{Z}$ and of
$\mathbb{Q}$, but it has never defined the general notion, so
[[def-equivalence-relation]] does that and
[[lem-equivalence-classes-partition]] proves the partition theorem: the classes
are nonempty, they cover the set, any two are equal or disjoint, and conversely
every partition arises from exactly one equivalence relation. Cosets, quotient
groups, congruence classes and quotient rings on later pages are all instances,
and each would otherwise re-prove the same three lines.

**One operation, and the two uniqueness results that license the notation.**
[[def-binary-operation]] fixes what an operation is and what it means for a
subset to be closed under it; [[def-identity-element]] keeps left, right and
two-sided identities apart. The separation matters, because
[[lem-identity-unique]] then proves the sharp statement that a left identity and
a right identity for the same operation are *equal*, so a two-sided identity is
unique when it exists. That is what makes "the identity" legitimate language in
[[def-semigroup-and-monoid]]. One level up the same device recurs:
[[def-invertible-element]] separates left, right and two-sided inverses and
[[lem-inverse-unique]] proves that in a monoid a left inverse and a right inverse
of the same element coincide, this time using associativity, which is essential.
Only then does [[def-group]] define a group as a monoid in which every element is
invertible and write $g^{-1}$.

**The first consequences.** [[lem-group-inverse-laws]] gives $e^{-1} = e$,
$(g^{-1})^{-1} = g$ and $(gh)^{-1} = h^{-1}g^{-1}$, and settles that the reversal
in the last is essential by showing $(gh)^{-1} = g^{-1}h^{-1}$ holds exactly when
$g$ and $h$ commute. [[lem-group-cancellation]] proves cancellation on both
sides, in the form that left and right translation by $g$ are bijections of $G$,
so each of $gx = h$ and $xg = h$ has exactly one solution.
[[lem-monoid-units-form-a-group]] runs the construction in the other direction:
the invertible elements of any monoid form a group, and a monoid is a group
exactly when that is all of it.

**The symmetric group, homed here rather than later.**
[[def-symmetric-group]] introduces $\operatorname{Sym}(X)$, the bijections of a
set under composition, together with cycle notation, and
[[lem-symmetric-group-is-a-group]] proves it is a group and that it fails to be
abelian as soon as $X$ has three distinct elements. The non-abelian clause is
phrased with three named points and no counting, so it is available for any set
whatever. This material is placed here, rather than with the combinatorics of
$S_n$, because group actions need $\operatorname{Sym}(X)$ earlier than the finite
symmetric groups are studied, and because it supplies this page's own
non-abelian witnesses.

**Long products, and the exponent laws.** Associativity is an axiom about three
factors; that brackets may be dropped in a product of any length is a theorem.
[[def-monoid-finite-product]] defines $\prod_{i<n} g_i$ by recursion, with the
empty product equal to the identity, and [[thm-generalised-associativity]] proves
the splitting law, the regrouping law that is the precise form of "the bracketing
does not matter", and, in a commutative monoid, invariance under permuting the
factors. [[def-group-power]] then defines $g^{n}$ for natural $n$ in a monoid and
for integer $n$ in a group, splitting on the sign of the exponent rather than on
a representative of it, and [[lem-group-power-laws]] proves the exponent laws.
The last of those, $(gh)^{n} = g^{n}h^{n}$, carries the hypothesis that $g$ and
$h$ commute, in its statement and in its title, because it is false without it;
the companion page exhibits the failure at $n = 2$.

**Subgroups.** [[def-subgroup]] asks for three closure conditions;
[[lem-subgroup-criterion]] replaces them by the single test $gh^{-1} \in H$ on a
nonempty subset, and settles the point that a subset which happens to be a group
under the restricted operation must carry the identity and the inverses of the
ambient group, cancellation being what forces it.
[[lem-intersection-of-subgroups]] shows intersections of subgroups are subgroups,
which is exactly what makes [[def-generated-subgroup]] work: $\langle S \rangle$
is defined from outside, as the intersection of all subgroups containing $S$, and
[[lem-cyclic-subgroup-is-the-set-of-powers]] identifies the single-generator case
from inside, $\langle g \rangle = \{\, g^{n} : n \in \mathbb{Z} \,\}$, and deduces
that every cyclic group is abelian. Unions of subgroups are almost never
subgroups, which the companion page records.

**Division with remainder, minted here too.** Nothing earlier in the library
supplies division with remainder in $\mathbb{Z}$, and two results below are
unprovable without it, so [[thm-division-algorithm-in-z]] proves it, for a
positive divisor, from the ordered ring structure and the well-ordering
principle. No absolute value on $\mathbb{Z}$ is needed and none is used. The
relation "$b$ divides $a$" is defined there for use here; the systematic theory
of divisibility belongs to a later page, which must record that its general
notion restricts to this one rather than introduce a second silently.

**Order.** The order of an element is definable only once something is known to
exist, so the existence comes first: [[lem-order-of-element-exists]] proves that
in a finite group some positive power of every element is the identity, using the
pigeonhole principle directly on the map $k \mapsto g^{k}$ rather than any
statement about subsets of finite sets. [[def-order-in-a-group]] then defines
$|G|$, using the fact that a finite set is equinumerous with exactly one natural
number, and $\operatorname{ord}(g)$ as the least positive $n$ with $g^{n} = e$,
using the well-ordering principle, with $\operatorname{ord}(g) = \infty$ when no
such $n$ exists. [[lem-order-characterisation]] is the payoff: $g^{k} = e$ exactly
when $\operatorname{ord}(g)$ divides $k$, the powers $g^{0}, \dots, g^{n-1}$ are
distinct, and $|\langle g \rangle| = \operatorname{ord}(g)$, so the order of an
element is the order of the group it generates.

**Homomorphisms, definition only.** [[def-group-homomorphism]] defines monoid and
group homomorphisms, and [[lem-group-homomorphism-basic-properties]] explains why
the two definitions differ: a group homomorphism automatically preserves the
identity, the inverses and all integer powers, whereas for monoids preservation
of the identity has to be assumed, as the constant map $0$ on $(\mathbb{Z},\cdot)$
shows. Kernels, images, isomorphisms and the isomorphism theorems belong to a
later page and are not used here.

**What is deliberately absent.** There is no direct product of groups on this
page, since the page that develops products already lists it; no greatest common
divisor, since nothing here needs one; and no notion of isomorphism, since the
homomorphism theory is developed later. Twenty-nine items are proved here, seven
of them marked as landmarks in the flowchart above.
