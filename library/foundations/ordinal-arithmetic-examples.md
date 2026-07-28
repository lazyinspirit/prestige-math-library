---
page: ordinal-arithmetic-examples
title: "Ordinal Arithmetic and the First Uncountable Ordinal — Examples"
status: draft
items: []
examples: [ex-one-plus-omega-and-omega-plus-one,
           ex-omega-times-two-and-two-times-omega,
           ex-omega-plus-omega-is-countable,
           ex-powers-of-omega-and-epsilon-zero,
           ex-cantor-normal-form-computed,
           ex-ordinal-subtraction-and-division-computed,
           ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum,
           cex-omega-one-has-no-at-most-countable-cofinal-subset]
---

**Objective.** Eight worked computations for
[[ordinal-arithmetic|Ordinal Arithmetic and the First Uncountable Ordinal]].
The main page proves the laws; this one runs them on concrete ordinals, where
the failures of commutativity stop being abstract and the normal form becomes an
algorithm.

**The two smallest asymmetries, computed twice each.**
[[ex-one-plus-omega-and-omega-plus-one]] evaluates $1 + \omega$ and $\omega + 1$
both from the recursive clauses and from the order-type description, and the two
routes are independent: one uses the limit clause together with closure of
$\omega$ under adding a natural number, the other exhibits an explicit
order isomorphism. [[ex-omega-times-two-and-two-times-omega]] does the same for
$2 \cdot \omega$ and $\omega \cdot 2$, and its block pictures are proofs rather
than illustrations, because
[[lem-ordinal-product-as-an-order-type]] says the product **is** the order type
of the block arrangement.

**Order type is not cardinality.**
[[ex-omega-plus-omega-is-countable]] separates the two invariants explicitly:
$\omega + \omega$ is an at most countable set
carrying a well-order that is not a copy of $\omega$. Reading "$\omega + \omega$
is bigger than $\omega$" as a statement about size is the confusion that item
exists to prevent.

**Climbing with exponentiation.**
[[ex-powers-of-omega-and-epsilon-zero]] builds the $\omega$-tower
$\omega, \omega^{\omega}, \omega^{\omega^{\omega}}, \dots$ and proves that its
supremum $\varepsilon_0$ satisfies $\omega^{\varepsilon_0} = \varepsilon_0$.
The fixed point is exhibited **by hand**, from continuity of
$\beta \mapsto \omega^{\beta}$ at limits; no fixed-point theorem is used, and
none that this library proves applies here, every fixed-point theorem on disk
being stated for a *set* carrying an order or a metric while the ordinals are not
a set. The tower is built with
[[lem-recursion-on-the-ordinals]] rather than the published
[[thm-recursion]], because the step $\beta \mapsto \omega^{\beta}$ is a class
operation and the recursion theorem over $\mathbb{N}$ needs a set-sized
codomain.

**The normal form as an algorithm.**
[[ex-cantor-normal-form-computed]] evaluates
$(\omega^{2} + \omega \cdot 3 + 5) \cdot \omega^{2}$, which turns out to be
$\omega^{4}$: multiplying on the right by a limit ordinal keeps only the leading
behaviour and annihilates the whole tail. The same item computes a sum, where
the tail is **not** annihilated and the coefficients of a matching power add.
[[ex-ordinal-subtraction-and-division-computed]] solves
$\omega + \gamma = \omega \cdot 2$ and divides $\omega^{2} + \omega + 3$ by
$\omega$, quoting the uniqueness halves of [[thm-ordinal-subtraction]] and
[[thm-ordinal-division-with-remainder]] — without those, each computation would
exhibit *an* answer rather than *the* answer.

**Where the choice principle bites.** The last two items are about $\omega_1$.
[[ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum]] shows that a
strictly increasing $\omega$-sequence of countable ordinals has a countable
limit ordinal as its supremum, and computes the instance
$\sup_n \omega \cdot (n+1) = \omega^{2}$ — an instance that needs **no** choice
principle at all, even though the general statement does.
[[cex-omega-one-has-no-at-most-countable-cofinal-subset]] then refutes the
natural guess that every limit ordinal has an at most countable cofinal subset:
every *countable* limit ordinal does, being cofinal in itself, and $\omega_1$
does not. That refutation assumes the Axiom of Countable Choice and says so in
its own title, because without a choice principle it fails outright
([[rem-omega-one-and-the-cost-of-choice]]).
