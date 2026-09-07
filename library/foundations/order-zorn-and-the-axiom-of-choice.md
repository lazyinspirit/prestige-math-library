---
page: order-zorn-and-the-axiom-of-choice
title: "Order, Zorn's Lemma, and the Axiom of Choice"
status: published
items: [def-chain, def-upper-bound, def-maximal-element,
        def-chain-complete-poset,
        lem-finite-choice, def-admissible-set, lem-admissible-set-exists,
        def-bw-extremal, lem-extremal-cut-closed-under-f,
        lem-extremal-cut-closed-under-sups, lem-extremal-comparability,
        lem-successor-of-extremal, lem-sup-of-extremals, lem-all-extremal,
        lem-admissible-is-chain, thm-bourbaki-witt, thm-zorn,
        thm-zorn-implies-ac, cor-ac-iff-zorn]
examples: [fs-maximal-is-greatest]
---

Natural-number induction and recursive addition provide the background for
finite choice: a selection from a family indexed by a natural number is built
one value at a time. The page proves implications and equivalences over ZF; it
does not use an independence theorem to classify what ZF itself can prove.

The development introduces chains, upper bounds, maximal elements and
chain-complete posets over the partial orders it requires, and applies the
Axiom of Choice. For
a progressive self-map, the least admissible set is closed under the map and
chain suprema; its extremal elements are comparable, and minimality makes the
set a chain. Its supremum is fixed, yielding Bourbaki-Witt without monotonicity
or Choice. Applying that theorem to chains ordered by inclusion proves Zorn's
lemma once Choice selects strict upper bounds. Conversely, Zorn applied to
partial choice functions yields a maximal function whose domain is the whole
family. Hence Zorn's lemma and Choice are equivalent over ZF, while maximal and
greatest elements remain distinct.
