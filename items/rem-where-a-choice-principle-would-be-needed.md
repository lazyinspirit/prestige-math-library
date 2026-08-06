---
id: rem-where-a-choice-principle-would-be-needed
kind: remark
title: "The Axiom of Choice is stated on this page and assumed by no proof on it; the two statements that would need it are identified and left unsettled"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse, cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse, prop-products-over-small-index-sets, lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product, def-product-of-an-indexed-family, def-choice-function, def-axiom-of-choice, def-indexed-family, def-indexed-union-and-intersection, def-the-identity-and-membership-relations-on-a-set, lem-the-composite-of-two-functions-is-a-function, thm-universal-property-of-the-quotient, lem-equivalence-classes-partition, def-injection-surjection-bijection]
justified_by: []
forward_refs: [rem-choice-ledger]
aliases: []
landmark: false
short: "the choice ledger for this page"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §5"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
pipeline_run: null
---

## Remark

The Axiom of Choice is stated on this page, at [[def-axiom-of-choice]], together
with the notion of a choice function it is stated in terms of,
[[def-choice-function]]. Nothing on the page assumes it: every proof here is
carried out without any choice principle, and two natural-looking statements are
missing from the page for exactly that reason. This is the account of where the
line falls.

**What is proved without choice, and why.** A construction is choice-free when
the object it produces is *determined* by the data rather than *selected* from
several candidates. The two-sided inverse of
[[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]] is
determined: for a bijection $f$ and a point $b$ of the codomain there is exactly
one $a$ with $f(a) = b$, so no selection is made. The left inverse of
[[cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse]]
needs one arbitrary point $a_{0}$ of a nonempty set, which is a single
existential instantiation and not a choice principle: one point is chosen once,
not one point for each index. The function produced by
[[thm-universal-property-of-the-quotient]] is likewise determined, because its
value on a class is forced to be the common value of $f$ on that class, and
[[lem-equivalence-classes-partition]] is proved from the three defining
properties alone.

**A choice function is an element of a product, and the two formulations of the
axiom are one statement.** [[def-axiom-of-choice]] gives the axiom twice, once
as "every family of nonempty sets has a choice function" and once as "a product
of nonempty sets is nonempty", and both objects are now defined on this page, so
the passage between the two readings can be written out. Let $\mathcal{F}$ be a
set all of whose members are nonempty, and index it by itself: the identity
relation $\Delta_{\mathcal{F}}$ of
[[def-the-identity-and-membership-relations-on-a-set]] is a function with domain
$\mathcal{F}$ sending each $S$ to itself, by clause (ii) of
[[lem-the-composite-of-two-functions-is-a-function]], hence an indexed family
([[def-indexed-family]]) whose range is $\mathcal{F}$, so its indexed union is
$\bigcup \mathcal{F}$ ([[def-indexed-union-and-intersection]]). Unfolding
[[def-product-of-an-indexed-family]] for that family gives the set of functions
$g : \mathcal{F} \to \bigcup \mathcal{F}$ with $g(S) \in S$ for every
$S \in \mathcal{F}$, which is word for word the set of choice functions for
$\mathcal{F}$ in [[def-choice-function]]. So a choice function for $\mathcal{F}$
is exactly an element of the product of the members of $\mathcal{F}$, and the
two formulations assert the same thing about the same object.

**The first statement that would need choice: a right inverse for a
surjection.** For a surjection $f : A \to B$
([[def-injection-surjection-bijection]]) each $b \in B$ has at least one
preimage, and a right inverse is a rule picking one preimage for every $b$ at
once. That is a simultaneous selection over the whole of $B$, and no proof on
this page makes one: the assertion that every surjection has a right inverse is
equivalent to the Axiom of Choice.

**The second: a nonempty product.**
[[prop-products-over-small-index-sets]] settles
$\prod_{i \in I} A_i$ when $I$ has no element, when some member is empty, and
when $I$ has exactly one element, and
[[lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product]]
settles the two-index case, in each case by writing an element down. For an
arbitrary index set the assertion that $\prod_{i \in I} A_i$ is nonempty whenever
every $A_i$ is nonempty is the product formulation of the axiom, which by the
identification above is the choice-function formulation read at the family
indexed by itself; [[def-product-of-an-indexed-family]] says so where the
product is introduced.

**Where the rest of the library's account of choice lives.** The strength of the
weaker choice principles relative to one another, and what survives without any
of them, is recorded at [[rem-choice-ledger]].
