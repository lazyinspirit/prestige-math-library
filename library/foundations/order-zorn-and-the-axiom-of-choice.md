---
page: order-zorn-and-the-axiom-of-choice
title: "Order, Zorn's Lemma, and the Axiom of Choice"
status: published
items: [def-partial-order, def-chain, def-upper-bound, def-maximal-element,
        def-chain-complete-poset, def-choice-function, def-axiom-of-choice,
        lem-finite-choice, def-admissible-set, lem-admissible-set-exists,
        def-bw-extremal, lem-extremal-cut-closed-under-f,
        lem-extremal-cut-closed-under-sups, lem-extremal-comparability,
        lem-successor-of-extremal, lem-sup-of-extremals, lem-all-extremal,
        lem-admissible-is-chain, thm-bourbaki-witt, thm-zorn,
        thm-zorn-implies-ac, cor-ac-iff-zorn]
examples: [fs-zorn-provable-in-zf, fs-maximal-is-greatest]
---

**Objective.** This page proves **Zorn's lemma** from the Axiom of Choice, and
proves the converse, so that the two stand as equivalent over ZF. It was written
as the first of two foundations pages leading to the ultrafilter lemma, the
second being [[filters-and-ultrafilters|Filters and Ultrafilters]]; the order
vocabulary and Zorn's lemma proved here are also what the later pages on
ordinals and on countability draw on.

The order-theoretic vocabulary comes first: partial order, chain, upper bound,
maximal element. Two distinctions carry the whole page and are easy to lose. A
**maximal** element has nothing strictly above it, while a **greatest** element
is above everything, and only the second is unique; conflating them is the
standard way to misapply Zorn's lemma, so it is recorded as a false statement
with an explicit refutation. A **least upper bound** is not merely an upper
bound, and the difference is what makes the fixed point argument work.

The engine is the **Bourbaki-Witt fixed point theorem**: on a chain-complete
poset, any map satisfying $x \le f(x)$ has a fixed point. Two features of it are
worth stating in advance. It assumes no monotonicity, so it applies to maps built
from arbitrary choices; and it uses **no form of the Axiom of Choice**. The proof
avoids transfinite recursion entirely, which is why this page needs no ordinals,
no transfinite induction and no Hartogs numbers. In their place it takes the
smallest subset closed under $f$ and under suprema of chains, and shows by two
applications of minimality that this set is totally ordered. Its supremum is the
fixed point.

Zorn's lemma then follows in a single further move, and the Axiom of Choice is
used exactly once in the whole development: to select, for every chain at once, a
strict upper bound. Isolating that one step is the point of keeping Bourbaki-Witt
separate. Every later page that invokes Zorn can state precisely what it costs,
and every page that avoids it can say so honestly.

The converse direction orders the partial choice functions by extension and
applies Zorn to them, so that the equivalence with the Axiom of Choice is proved
here rather than asserted. What is **not** proved here is that either statement
is independent of ZF: Gödel's and Cohen's results need the constructible universe
and forcing, which this library does not yet contain, and they are cited rather
than derived.
