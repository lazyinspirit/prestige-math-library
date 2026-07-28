# Scaffold expansion, 2026-07-28 — orchestrator's integration notes

The owner commissioned four scaffold jobs on 2026-07-28:

1. integrate Tom's stack and specify first/second countability — **DONE**, commit
   `1e2c7e5`; see `research/plan-topology-set-theory-track.md` (TS-D2 applied)
   and §T8a of `research/plan-topology-track.md`;
2. combinatorics and graph theory, category theory, abelian and monoidal
   categories, homological algebra — `research/plan-combinatorics-and-categories.md`;
3. advanced group theory, modules, group algebra, representation theory, free
   groups and universal properties — `research/plan-algebra-track-expansion.md`;
4. complex analysis through several variables —
   `research/plan-complex-analysis-track.md`.

This file holds the cross-cutting decisions that belong to no single scaffold,
and the findings verified from disk rather than taken from an agent's prose.

---

## The splice is ONE operation, not three

Jobs 2, 3 and 4 were scaffolded concurrently, and **each proposed its orders
against the same 230-page baseline**. Their renumbers therefore do not compose:
applying job 3's insertion at 98–107 shifts everything job 2 and job 4 measured.

So the three are spliced **together**, in one pass, with orders recomputed
globally — not one at a time as each agent reports. Any order quoted in the three
scaffold files is a PROPOSAL against the 230-page baseline and must be
recomputed from `research/plan-spec.json` after the splice. The files say this
themselves; believe the spec, never the prose.

---

## Verified from disk (not taken from the agents' reports)

### The three universal-property ids really are taken, and they are topological

`thm-quotient-universal-property`, `thm-quotient-canonical-factorisation` and
`thm-coproduct-universal-property` all exist and are **published**, and all three
are about topological spaces — quotient maps and disjoint unions. Item ids are
IMMUTABLE on `main` (SCHEMA §2), so the algebraic versions cannot reuse them.
Namespacing is mandatory: `thm-quotient-group-universal-property`,
`thm-quotient-ring-universal-property`, `thm-quotient-module-universal-property`,
and `thm-quotient-space-universal-property` for the existing topological one **if
and only if** it is ever renamed, which would go through `aliases` and is not
proposed here.

This is a general hazard for every scaffold that adds universal properties: the
library has been minting them per-category since the topology track, and the
unqualified name is gone. Check before coining.

### The quotient-group universal property is a SCAFFOLD gap, not a published one

Order 32 `group-homomorphisms-and-the-isomorphism-theorems` is in the spec with
**an empty item list and no file under `library/`**. So adding the factorisation
of $\varphi$ through $G/N$ is an ordinary scaffold amendment: nothing is
re-audited, no `verification.audited` is cleared, and it does not wait for a
publishing commit. Contrast the `ts-d2-published-amendments.md` entries, which do.

### The field of fractions is used by published items and is constructed nowhere

**A real gap, found while checking job 3's claim, and worse than the claim.**
No page in the 230-page spec constructs the field of fractions of an integral
domain — no fractions page, no localisation page. Yet two **published** items take
it as given:

- `items/cex-ordered-field-not-archimedean.md`, in its **Given** line: *"$\mathbb{R}(t)$, the field of fractions of the polynomial ring $\mathbb{R}[t]$"*;
- `items/ex-rational-function-field-order.md`, in its Statement: *"Let $\mathbb{R}(t)$ be the field of fractions of the polynomial ring $\mathbb{R}[t]$"*, with a Wikipedia reference standing in for a construction.

Both are ordered-field counterexamples, and both rest on an object the library
neither builds nor plans to build. Under the **self-contained scope** rule (owner,
2026-07-27) an item may not rest on a result the library has not established.

**These two are grandfathered, not defects to repair.** That rule is explicitly
forward-looking — "published items are not retrofitted" — and both items predate
it. But the gap is real, it is the kind that compounds, and job 3 independently
proposed a fractions page at order 46 for its own reasons (Frac of a domain, with
a mandatory $\operatorname{Frac}(\mathbb{Z}) \cong \mathbb{Q}$ dictionary item).
**Adopting that page discharges the published gap as a side effect**, which is a
good reason to take it even though nothing forces it.

Recorded here rather than in a published-amendments file because no amendment is
owed: when the fractions page publishes, the two items may be amended to cite it
instead of assuming it, and that is an improvement rather than a repair.

---

## Standing rule this episode confirms

Job 3 reported "$\mathbb{C}$ exists (order 50)". True, and it matters that the
report said **order 50, planned** rather than "the library has $\mathbb{C}$":
`field-extensions-and-the-complex-numbers` has an empty item list. Every scaffold
in this batch is proposing pages on top of pages that do not exist yet. That is
legitimate — the plan is a plan — but it means **no build-frontier claim in any of
the three files may be trusted without recomputing which of its prerequisites are
actually authored.** The `items` array in the spec is the only honest signal, and
it is what the frontier computation must read.
