---
page: rings-subrings-and-integral-domains
title: "Rings, Subrings, Integral Domains and Fields"
status: draft
items: [def-ring, def-commutative-ring, lem-ring-elementary-consequences,
        lem-integer-multiples-in-a-ring, lem-ring-units-form-a-group,
        def-zero-divisor-and-integral-domain, lem-domain-cancellation,
        def-division-ring, lem-field-is-a-commutative-ring,
        lem-commutative-division-ring-is-a-field, def-quaternions,
        thm-quaternions-form-a-division-ring, def-ordered-ring,
        lem-ordered-ring-cone-and-order-agree,
        lem-ordered-field-is-an-ordered-ring, def-subring, lem-subring-criterion,
        def-subfield, def-ring-homomorphism,
        lem-ring-homomorphism-basic-properties,
        lem-ring-homomorphism-of-fields-is-a-field-homomorphism,
        def-product-ring, def-ring-of-functions,
        lem-integer-multiples-agree-with-canonical-natural,
        def-ring-characteristic, lem-characteristic-and-additive-order]
examples: []
---

**Objective.** A group has one operation. Every number system this library has
built has two, and every one of them re-proved the same handful of facts about
how the two interact: that multiplying by zero gives zero, that a product of
negatives is positive, that cancellation works away from zero. This page
isolates that interaction into axioms. A **ring** is an abelian group under
addition and a monoid under multiplication, with multiplication distributing
over addition on both sides. The first two facts are then proved once, for every
structure satisfying the axioms. The third is not: cancellation away from zero
is *equivalent* to the absence of zero divisors, not a consequence of the ring
axioms, and that equivalence is what the definition of an integral domain is
built on.

**The convention, stated once and kept.** Here a ring **has** a multiplicative
identity, because axiom (R2) of [[def-ring]] asks $(R,\cdot,1)$ to be a monoid.
A structure satisfying the other axioms without an identity is called a
**non-unital ring** where it occurs and is not called a ring. That decision has
consequences the page carries openly: a subring must contain the identity of the
ambient ring, and the companion page's [[cex-2z-is-not-a-subring]] is the witness
that the requirement is not automatic. Nothing here requires $1 \ne 0$ of a ring;
the definitions that need it — integral domain, division ring, field — say so,
and the companion page records the one ring where the difference bites.

**This page does not define a field.** [[def-field]] is already in the library
and is the definition; what this page adds is the translation between it and the
ring vocabulary, and the translation is four numbered items, never a remark.
[[lem-field-is-a-commutative-ring]] shows a field is a commutative ring with
$1 \ne 0$, an integral domain and a division ring;
[[lem-commutative-division-ring-is-a-field]] shows every commutative division
ring satisfies the published axioms, so the two words name the same structures;
[[lem-ordered-field-is-an-ordered-ring]] does the same for the order; and
[[lem-ring-homomorphism-of-fields-is-a-field-homomorphism]] shows a ring
homomorphism between fields is exactly a field homomorphism in the published
sense, and is injective. Getting these wrong would leave the library with two
notions wearing one name, which is the defect the four items exist to prevent.

**A reading of the published field axioms, declared where it is load bearing.**
Axiom (M) of [[def-field]] is headed by a statement about $F \setminus \{0\}$ and
glossed by a sentence with no restriction on the variable. Two steps of
[[lem-field-is-a-commutative-ring]] need the unrestricted reading: that
$(F,\cdot,1)$ is a monoid, which is a statement about all of $F$ including $0$,
and right distributivity, which follows from the left form only by commuting a
product one of whose factors may be $0$. That lemma states the reading it uses in
its Facts & Assumptions and names those two steps. No published item is amended
by this page.

**Elementary consequences, and integer multiples.**
[[lem-ring-elementary-consequences]] proves $0 \cdot a = a \cdot 0 = 0$,
$(-a)b = a(-b) = -(ab)$, $(-a)(-b) = ab$, $(-1)a = -a$ and $a(b-c) = ab - ac$,
each on both sides because multiplication is not assumed commutative, and records
that a ring with $1 = 0$ has exactly one element. [[lem-integer-multiples-in-a-ring]]
develops the notation $ma$ for $m \in \mathbb{Z}$: it is not a product in the ring
but the integer power of $a$ in the additive group ([[def-group-power]]), so the
exponent laws are quoted from [[lem-group-power-laws]] rather than reproved, and
what is genuinely new is $(ma)b = m(ab) = a(mb)$, together with the identity
$ma = (m\,1)a$ that the characteristic later depends on.
[[lem-ring-units-form-a-group]] names the units and obtains the group $R^{\times}$
from [[lem-monoid-units-form-a-group]] applied to the multiplicative monoid,
adding only the ring-specific fact that $0$ is a unit exactly in the zero ring.

**Domains, division rings, and the quaternions.**
[[def-zero-divisor-and-integral-domain]] fixes one convention for a zero divisor
and keeps it: $0$ is never one, and $1 \ne 0$ is a hypothesis rather than a
consequence. [[lem-domain-cancellation]] proves that in a commutative ring with
$1 \ne 0$ the cancellation law and the absence of zero divisors are equivalent,
so a commutative ring with $1 \ne 0$ is a domain exactly when cancellation works
there. [[def-division-ring]]
asks instead that every nonzero element be invertible, and the two conditions are
genuinely different in both directions: $\mathbb{Z}$ is a domain and not a
division ring, and $\mathbb{H}$ is a division ring and not a domain, since a
domain is required to be commutative. [[def-quaternions]] builds $\mathbb{H}$ as
$\mathbb{R}^{4}$ with an explicit product formula in the eight real coordinates,
and [[thm-quaternions-form-a-division-ring]] proves it is a division ring with
$q^{-1} = \widehat{N(q)^{-1}}\,\bar q$, that $ij = k$ while $ji = -k$, and
therefore that it is not a field. Associativity is the whole cost of that proof,
and it is paid without any notion of linearity: the product is put in coefficient
form, both bracketings expand into the same shape of finite real sum, the sixty
four basis triples reduce to twenty seven by the identity law and to nine by a
cyclic symmetry that is checked rather than asserted.

**Order.** [[def-ordered-ring]] asks for a total order compatible with addition
whose positive elements are closed under multiplication, in the strict form that
the published [[thm-int-ordered-ring]] proves and the published
[[def-ordered-field]] requires. [[lem-ordered-ring-cone-and-order-agree]] then
shows the order presentation and the positive-cone presentation determine each
other, which is what keeps one notion of "ordered" in the library rather than
two, and [[lem-ordered-field-is-an-ordered-ring]] applies it to fields.

**Substructures and maps.** [[def-subring]] asks for the ambient identity and
closure under addition, additive inverses and multiplication, and shows the
subset is then a ring with the *same* zero and the *same* identity;
[[lem-subring-criterion]] compresses the closure conditions to $a - b \in S$ and
$ab \in S$ and proves intersections of subrings are subrings. [[def-subfield]]
adds closure under inverses of nonzero elements, discharges the claim that a
subfield is a field by way of the two bridge lemmas, and records that a subfield
of an ordered field inherits the order. [[def-ring-homomorphism]] imposes
$f(1) = 1$ rather than deriving it, for the reason [[def-group-homomorphism]]
gives: the additive part is a group homomorphism, where identity preservation is
free, and the multiplicative part is only a monoid homomorphism, where it is not.
[[lem-ring-homomorphism-basic-properties]] collects what does follow.

**Two constructions and the characteristic.** [[def-product-ring]] gives
$R \times S$ componentwise, computes its units as $R^{\times} \times S^{\times}$,
and records that a product of two rings with $1 \ne 0$ always has zero divisors.
[[def-ring-of-functions]] gives $R^{X}$ pointwise, and records that it has zero
divisors as soon as $X$ has two distinct points and $R$ is not the zero ring; it
is minted here so that the addition on that set has a single home, since the same
set carries a second structure with the same addition elsewhere in the library's
plan. Finally [[lem-integer-multiples-agree-with-canonical-natural]]
proves that in a field the multiple $n \cdot 1_F$ is the canonical natural
$\iota(n)$ of [[def-canonical-natural]] — proved, because assuming it is exactly
the two-notions defect this page is built to avoid — and
[[def-ring-characteristic]] defines $\operatorname{char}(R)$ as the least
$n \ge 1$ with $n \cdot 1_R = 0$, or $0$ when there is none. That value $0$ is the
**opposite** convention to the $\infty$ of [[def-order-in-a-group]], deliberately,
and [[lem-characteristic-and-additive-order]] shows why: with it, "the
characteristic divides $n$" is a single statement covering both cases, and the
characteristic is exactly the additive order of $1_R$, shared by every nonzero
element when the ring is a domain.

**What is deliberately absent.** Ideals, quotient rings and the isomorphism
theorems belong to a later page and are used nowhere here; the injectivity of a
ring homomorphism between fields is proved without them. Polynomial rings are not
constructed. The further property of the characteristic of an integral domain
that would say more than "it is $0$ or at least $2$" requires the notion of a
prime number, which no definition on this page or among the items it cites
introduces, so it is not stated here. Twenty-six items are proved on this page,
eleven of them marked as landmarks in the flowchart above. Every instance lives
on the companion page except one: the quaternions are built here, because
companion pages are leaves in the reading order and later pages need them.
