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

## The three owner decisions, taken 2026-07-28

Each was escalated by its scaffolder as an owner call and each was answered.
**Do not re-open these**; they are the settled input to the splice.

### SE-D1. Elementary counting is inserted at order 20

The two elementary counting pairs — binomial coefficients, inclusion–exclusion,
pigeonhole — go in at order 20, the earliest legal slot. **211 of 230 pages shift
by +4.** Relative order is preserved, so no existing citation can become
forward-pointing.

The reasons the cost is worth paying, both verified from disk rather than argued:
the library has **no binomial coefficient anywhere** (zero items use `\binom`),
and `research/plan-realanalysis-pages.md` already records an obligation for
`darboux-lhopital-and-taylor` to mint one itself — so a low counting page
*discharges* an existing obligation rather than merely adding pages. And the
reserved band at 60–67 cannot host this, because it sits **above** the symmetric
groups and the number-theory block, which would therefore go on inventing their
own counting.

### SE-D2. The whole 40-pair combinatorics and category-theory block is spliced

Not the three-phase alternative. The reasoning is specific to what the level
table is for: **phasing is already expressible IN the table.** Every pair carries
a level and a blocked-on column, so build order is readable off it directly.
Withholding pages from the spec expresses the same intent far worse — it makes
the table silently incomplete, which is exactly the failure mode where a later
session re-proposes work that was already planned.

### SE-D3. Global choice is NOT adopted; the split forms are primary

The exempt axiom list stays at **AC, countable choice, dependent choice** and the
independence facts about them. It does not grow a fourth member.

The three category-theory theorems that wanted global choice — limits assembling
into a functor, `L_nF` being well defined, and fully-faithful-plus-essentially-
surjective implying equivalence for LARGE categories — are stated in their
**data-supplied** form: a *choice* of limit cone for each diagram, or of a
resolution for each object, is structure the reader supplies, and the conclusion
is relative to that choice. The unconditional "the limit functor exists" is not
stated.

This is standard careful practice in category theory rather than a compromise,
and it is what the scaffold already built, so nothing downstream moves.

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

**Splice by ANCHOR PAGE ID, never by composing the three shift tables.** Each
group is inserted before or after a named page, the groups are applied in
ascending anchor order, and every anchor's position is re-read from the live spec
immediately before its group goes in. Composing `+4` / `+10` / `+18` / `+42`
arithmetic by hand is how a page silently lands in the wrong band.

### HAZARD: do not splice while an authoring agent is running

Authoring briefs tell their agent to enumerate its items **from
`research/plan-spec.json` by ORDER** — "orders 131 and 132", "orders 137 and 138"
— because that is the only non-stale source. A renumber therefore moves the
ground under any agent mid-build: the agent re-reads the spec and finds different
pages at its assigned orders.

Round 3 of level 9 (mixed) is authoring orders 131/132 and 137/138 right now, and
job 3's own proposal inserts representation theory immediately below old order
129, which would shift both of them. **So the splice waits for round 3 to land.**

This is a general rule, not an incident: **the spec is a shared mutable resource,
and a renumber is a write to every row of it.** Take it only when no agent holds
a read on it. The alternative — briefing agents by page id rather than by order —
would remove the hazard, and is worth doing if splices become frequent.

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

## Collision between jobs 2 and 3, resolved

The two scaffolds were written concurrently and both claim two ids:

| id | job 2 (combinatorics/categories) | job 3 (algebra) | **ruling** |
|---|---|---|---|
| `tensor-products-of-modules` | a **contingent** page at 299, written so the gap could not be silent | a real page at 102/103 in the modules band | **job 3 owns it.** Job 2's contingent page is DROPPED at splice. |
| `def-module` | consumed via its module interface §5 | minted on `modules-and-module-homomorphisms` | **job 3 mints it**, job 2 cites it. |

Job 2 anticipated this and said so in its own report — the contingent page exists
precisely so the orchestrator would notice and delete one of the two. That is the
right instinct and it worked; the alternative was a silent duplicate id, which
`validate-plan` would have caught only if both were spliced.

Both scaffolds also reference `vector-spaces-and-subspaces`. That is not a
collision: it is a published page and both correctly cite it.

## Verified: the library has no binomial coefficient

Job 2 claimed it; it is exactly right, and stronger than it sounds. **Zero items
use the `\binom` macro** and no item defines $\binom{n}{k}$ under any name. The
single occurrence of the word in 998 published items is a passing mention of "the
binomial theorem" in a Remark of `def-integer-power`, as motivation for a
convention.

`research/plan-realanalysis-pages.md` had already recorded an obligation for
`darboux-lhopital-and-taylor` to mint one itself when it reaches Taylor's theorem.
A combinatorics page below it discharges that obligation instead, which is a real
argument for placing elementary counting LOW rather than appending it.

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
