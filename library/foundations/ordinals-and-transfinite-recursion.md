---
page: ordinals-and-transfinite-recursion
title: "Ordinals, Cardinals, and Transfinite Recursion"
status: draft
items: [def-well-order, def-order-isomorphism, def-initial-segment,
        thm-transfinite-induction, thm-transfinite-recursion,
        lem-well-order-rigid, lem-well-order-comparability, def-ordinal,
        lem-ordinal-basics, lem-ordinal-trichotomy, thm-burali-forti,
        thm-mostowski-collapse, def-limit-ordinal,
        lem-omega-least-limit-ordinal, thm-hartogs,
        thm-well-ordering-theorem, thm-well-ordering-implies-ac,
        cor-ac-iff-well-ordering, def-cardinal, rem-choice-ledger]
examples: [fs-ordinals-form-a-set, fs-every-set-well-orderable-in-zf,
           fs-transfinite-induction-needs-choice]
---

**Objective.** Ordinals arrive here and nowhere earlier. This page builds the
theory of well-orders from scratch, introduces the von Neumann ordinals, proves
the two theorems that make transfinite arguments legitimate, and settles the
exact price in choice of everything it proves.

The order of business is deliberate. **Transfinite induction** and **transfinite
recursion** come first, before ordinals exist, because they are statements about
an arbitrary well-order and need nothing else. Induction is three lines from the
least element property. Recursion is the substantial theorem: it produces a
unique function whose value at each point is prescribed in terms of all its
earlier values, and it does so from Separation, Union and **Replacement**.
Replacement is the whole cost, and no form of the Axiom of Choice appears
anywhere in it. That is worth saying loudly, because the belief that transfinite
methods are inherently choice-laden is the single most common error in this
area, and it is refuted explicitly on this page.

The structural fact that makes everything work is **rigidity**: a strictly
increasing map of a well-order into itself never moves a point down, so a
well-order has no nontrivial symmetry and there is at most one isomorphism
between any two well-orders. Uniqueness of witnesses is what keeps choice out.
It gives **comparability** of well-orders, and then, once ordinals are defined,
it gives each well-order a unique **order type**. Comparability of arbitrary
sets is equivalent to the Axiom of Choice; comparability of well-orders is free,
and the difference is exactly rigidity.

An **ordinal** is a transitive set strictly well ordered by membership, so each
ordinal is literally the set of all smaller ordinals and the order relation is
$\in$. The basic closure properties, trichotomy, and the identification of the
natural numbers as the ordinals below $\omega$ follow. Two boundary results
mark the edges: **Burali-Forti**, that the ordinals are not a set, and
**Hartogs**, that every set $A$ admits a least ordinal $\aleph(A)$ that does not
inject into it. Hartogs is choice-free, and that is its entire point: it is what
survives in ZF when cardinal comparability does not.

Only at the end does choice enter. The **well-ordering theorem** is proved from
Zorn's lemma by ordering the well-ordered subsets of $X$ by end extension, and
the converse is a single line: well order the union of a family and take least
elements. Together with the previous page this closes the circle, so the Axiom
of Choice, Zorn's lemma and the well-ordering theorem stand as equivalent over
ZF. The Axiom of Choice is spent exactly once in the whole development, at one
step inside Zorn's lemma, and every result on this page states whether it
inherits that cost.

Three false statements guard the standard errors. The ordinals do not form a
set, however locally set sized they look. Transfinite induction and recursion do
not need choice; the choosing that often accompanies them does. And the
well-ordering theorem is not a theorem of ZF, a claim kept strictly conditional
on the consistency of ZF, since what is available here is Cohen's result cited
rather than derived. The final remark is the ledger: what is equivalent to the
Axiom of Choice, what is strictly weaker, what is free, and where in this
library the axiom has actually been spent.
