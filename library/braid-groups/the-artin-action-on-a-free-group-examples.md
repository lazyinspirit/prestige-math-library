---
page: the-artin-action-on-a-free-group-examples
title: "The Artin Action on a Free Group — Examples"
status: draft
requires: [the-artin-action-on-a-free-group]
items: []
examples: [ex-the-artin-action-of-the-b-three-generators,
           ex-the-full-twist-acts-by-boundary-conjugation,
           cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin,
           cex-the-induced-permutation-does-not-determine-a-braid]
---

These four entries make the companion page's representation concrete: two
computations with the frozen Nielsen substitutions and two counterexamples
delimiting what the representation can detect.

The first example tabulates the Artin action of the two generators of $B_3$ on
the basis $x_1,x_2,x_3$ of $F_3$ and verifies the braid relation
$\rho(\sigma_1)\rho(\sigma_2)\rho(\sigma_1)=
\rho(\sigma_2)\rho(\sigma_1)\rho(\sigma_2)$ by direct substitution and free
reduction, so the sign and conjugation conventions of the companion definition
are visible in the smallest nontrivial case. The second computes the full
twist: with $\Delta^2=(\sigma_1\sigma_2\cdots\sigma_{n-1})^n$ and
$\delta=x_1x_2\cdots x_n$, an induction on the exponent of the composite
$U=\rho(\sigma_1\sigma_2\cdots\sigma_{n-1})$ gives $\rho(\Delta^2)(x_i)=
\delta x_i\delta^{-1}$ for every $i$, so the full twist acts by conjugation
by the boundary word — the element represented by the positively oriented
boundary loop on the companion page. The example records that Artin's original
letter convention would read the same computation as conjugation by
$\delta^{-1}$.

The two counterexamples show that neither of the two natural invariants of a
braid is complete by itself. The endpoint permutation does not determine a
braid: the identity and the pure word $\sigma_1^2$ in $B_3$ both induce the
trivial permutation of the strands, while
$\rho(\sigma_1^2)(x_1)=x_1x_2x_1x_2^{-1}x_1^{-1}\ne x_1$, so the two braids
are distinct already at the level of the Artin action, without appealing to
faithfulness. And the peripheral condition alone does not suffice for the
characterization: the basis permutation $x_1\leftrightarrow x_2$ sends every
generator to a generator but changes the ordered product
$x_1x_2\cdots x_n$ to $x_2x_1x_3\cdots x_n$, so it cannot be in the image of
$\rho$ by the choice-free necessary direction of the characterization. Both
computations are finite, use only the frozen substitutions and unique reduced
forms, and carry no choice principle.
