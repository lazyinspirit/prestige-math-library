## Batch 6 second pass — two residues from the first repair

Your first repair (49 contracts, 0 empty, 118 citations; F6.1/F6.2/F6.3 applied)
was verified on disk and is otherwise accepted. Item counts unchanged at 51/9 and
all gates green. Two things the repair left behind. Both are small; change nothing
else.

### F6.5 — the poset hypothesis has no dependency supplying it

`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` now reads, and
correctly:

- title: "A Galois connection between **posets** satisfies $FGF=F$ and $GFG=G$"
- strategy: "…$FGFa\le Fa\le FGFa$…; **antisymmetry** gives $FGF=F$…"

But its only dependency is `def-galois-connection`, whose own title is "Galois
connection between **preorders**" and whose deps are `def-preorder` and
`prop-preorders-as-categories-and-monotone-maps-as-functors`. **Nothing in the
dependency set supplies antisymmetry**, which is the entire load-bearing step.

`def-partial-order` is published, homed on `relations-functions-and-quotients`,
and **already in this page's closure** — verified by the orchestrator. Add it to
the corollary's `deps` and cite it at the antisymmetry step in the proof contract's
stated input map.

This is the proof-obligation-map rule: every substantive subclaim maps to an exact
dependency or an inline derivation. "Posets" is a hypothesis the item now states
and uses, so it needs a source.

### F6.6 — the id still describes the item you replaced

The id is `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple`. It names
**fractions** and an **adjoint triple**. After your repair the item is:

- title: "The inclusion of groupoids into categories is left adjoint to the
  maximal-subgroupoid functor"
- deps: no fractions adjoint, no triple

The id now misdescribes its own content. **Item ids are immutable once on `main`** —
this item is still an unauthored scaffold entry, so this is the last moment it can
be corrected for free. Rename it to match what it proves (for example
`ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid`; choose the id
that matches the title). Update every reference to the old id in your
`pages.json`, `coverage.json` and `proof-contracts.json`, and confirm nothing else
in the batch referenced it.

Since the id has never been published, no `aliases` entry is needed and none
should be added.

### Re-run and report

The three gates in the brief, plus your dependency-closure audit. Report the new
id, the corollary's new `deps`, and the gate output.
