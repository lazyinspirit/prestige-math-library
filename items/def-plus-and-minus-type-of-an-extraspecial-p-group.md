---
id: def-plus-and-minus-type-of-an-extraspecial-p-group
kind: definition
title: "Plus and minus type of an extraspecial $p$-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial, thm-classification-of-extraspecial-two-groups, thm-classification-of-extraspecial-p-groups-for-odd-p, def-exponent-of-a-finite-group]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.38"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Definition

Let $p$ be a prime and $n\ge1$. By
[[thm-classification-of-extraspecial-p-groups-for-odd-p]] for odd $p$ and by
[[thm-classification-of-extraspecial-two-groups]] for $p=2$, there are exactly
two extraspecial groups of order $p^{1+2n}$ up to isomorphism. They are named as
follows.

For odd $p$, write $p^{1+2n}_{+}$ for the one of exponent $p$ and $p^{1+2n}_{-}$
for the one of exponent $p^2$ ([[def-exponent-of-a-finite-group]]). At $n=1$
these are the Heisenberg group and the modular group
([[prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p]],
[[prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p]]).

For $p=2$, write $2^{1+2n}_{+}$ for the one with $2^{2n}+2^{n}$ solutions of
$x^2=1$ and $2^{1+2n}_{-}$ for the one with $2^{2n}-2^{n}$ solutions. At $n=1$
these are $\operatorname{Dih}(C_4)$ and $Q_8$
([[prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial]]).

The two names are well defined because in each case the two classification
theorems supply exactly two isomorphism classes and an invariant that separates
them, so the label is a property of the isomorphism class and not of a
presentation.

## Remarks

The two source conventions differ in scope and are both recorded here. van
Beek's Definition 2.38 writes $p^{1+2n}_{\pm}$ for every prime, the sign being
read off an iterated central product, which is the convention taken above.
Craven's Definition 3.3 introduces $p^{1+2}_{+}$ only for the odd exponent-$p$
group of order $p^3$ and names the others by their constructions. Where the two
overlap they agree, and the convention in force here is van Beek's.

At $p=2$ the signs multiply under central products, as the counting formula
shows.  At odd $p$ the notation records exponent instead: a central product is
of plus type precisely when every order-$p^3$ factor is Heisenberg.  If a
modular factor occurs, the absorption lemma reduces all modular factors to one,
so the product is of minus type.  Thus the two uses of the signs agree on the
basic plus factors but obey different product rules.
