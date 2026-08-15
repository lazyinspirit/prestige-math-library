## Batch 6 fix task — `adjunctions-units-and-counits` (365.001)

Alpha verdict: **sufficient**. Three corrections, all **edits to existing items,
not additions** — your 51-item page keeps its 9 items of headroom under the 60
ceiling. Do not add items; do not split.

### F6.1 — a title that claims more than its hypotheses give (must fix)

`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` asserts
**equality** while depending only on a **preorder** definition. Riehl Cor. 4.2.10
states it for **posets**: "If $A$ and $B$ are posets…". Without antisymmetry you
get only $FGF\cong F$, not $FGF=F$.

A title or Statement asserting more than the proof gives is a **fatal** class at
step 6, and the paired judges read Statements and cannot see a false title. Fix it
now, at step 3, where it costs a scaffold edit. Either add the poset hypothesis
and keep the equality, or keep the preorder generality and weaken to natural
isomorphism — your call on which matches the page's use, but the title, Statement
and dependency set must agree.

### F6.2 — the ideal/variety example cites the wrong definition

That example is **antitone**, but it cites the monotone `def-galois-connection`.
Riehl homes it under Def. 4.4.1. Repoint it to
`def-mutually-left-and-mutually-right-adjoint-contravariant-functors` — which, as
Alpha notes, currently has **no consumer at all**, so this fix also stops you
shipping an item nothing uses.

### F6.3 — an adjoint triple with no support for one of its adjoints

`ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` claims a **triple** but
has no dependency supporting the groupoid-of-fractions left adjoint, and there is
**no localisation page anywhere in `research/plan-spec.json`** — Alpha checked.
Narrow the item to the right adjoint it can actually support, and adjust the title
so it does not promise a triple.

### F6.4 — proof-contract citations

8 of your 49 contracts have empty `citations`. Populate those 8.

### Confirmed by Alpha — leave alone

- **The Riehl locators are correct.** Alpha downloaded the 2nd-edition PDF (build
  `D:20260728`) and read Chapter 4: §4.6 genuinely is "Adjunctions, limits, and
  colimits", the adjoint functor theorems are Thms 4.7.3/4.7.10/4.7.17 in §4.7,
  and you cite §4.7 only for Lemma 4.7.1. Every page boundary is exact; no
  first-edition locator was carried over. The orchestrator's step-0 concern here
  is retired.
- **MA-1 item 40** dropped to the Hom side and recorded — correct.
- **The RAPL split** is intact: `thm-right-adjoints-preserve-limits` and
  `thm-representable-second-proof-of-rapl-under-local-smallness` separate,
  reconciled by `rem-rapl-carries-no-size-hypothesis`.
- **The choice wording survived in four places**, not the three required.
- Both published B-leaf traps avoided by local construction.
- Your 43 deferrals are well-founded: the tensor bucket names batch 5, the adjoint
  functor theorem bucket names `reflective-subcategories-and-the-adjoint-functor-theorems`
  (order 365.003, which requires this pair's B page). Leave them.

### Spec change you should know about

The orchestrator **removed** the D1 `requires` edge on
`conjugacy-and-simplicity-in-the-symmetric-groups`: zero of your items cite any of
its 18 items, and `def-abelianisation-of-a-group` is homed on
`free-groups-and-presentations`, which was already in your closure. The other two
D1 edges stand (`free-modules-and-exact-sequences`, cited twice;
`tychonoff-embedding-and-stone-cech`, cited three times). Re-verified: every one of
your dependencies remains in closure. Do not edit `plan-spec.json`.
