# Wave 4 — orchestrator citation-precision repair

One repair, authored by the orchestrator on the owner's explicit instruction
(2026-08-05, option (c) of the A6 certification stall). Everything else in this
wave was repaired by an Audit-Beta at A4 or by Alpha at A6 and is recorded in
`wave4-alpha.md` and the per-batch findings files.

## Why the orchestrator authored it

A6 stalled: Alpha repaired
`ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not`, correctly lost the
item's `audited` stamp to that material repair, and cannot certify its own work.
Alpha then exited twice without running the round-3 certifier lane it had
templated — the second time treating the lane as running in the background,
though Alpha's own process is what records the verdict. The orchestrator ran
that lane, and it **refused** the item: two citation-fidelity defects survived
the repair, in steps 3.1/3.2 and `[L4]`. The owner directed the orchestrator to
make the repair (class (b), citation precision, inside the standing audit repair
delegation) rather than dispatch Alpha a third time.

## The defect

`[L4]` asserted two propositions that were the Statement of no target it cited:

- "a set injecting into an at most countable set is at most countable" — the
  on-disk target is `lem-subset-of-countable`, *Every subset of an at most
  countable set is at most countable*, which was in neither `deps` nor `[L4]`;
- the countability of a family indexed by **pairs** of rationals, used by step
  3.2 — the on-disk target is `thm-product-of-countable`, *A product of two at
  most countable sets is at most countable*, likewise absent.

`def-countable` defines *at most countable* as finite or countably infinite, so
neither proposition follows from the definition alone. Both steps were
load-bearing for claim 3, that the Sorgenfrey line is Lindelöf.

## The repair (smallest correction; no id renamed or removed)

1. `deps` gained `lem-subset-of-countable` and `thm-product-of-countable`. Both
   are `status: published` on the A page `real-analysis/countability-and-uncountability`,
   so both are legal backward dependencies, not examples-page items.
2. `[L4]` restated so every clause is the Statement of a target it cites:
   the `def-countable` dichotomy, `thm-rationals-countable`, `thm-r-uncountable`,
   `lem-subset-of-countable`, `thm-product-of-countable`, and
   `lem-countable-iff-surjection-from-n`. The union-of-two claim is kept, marked
   as what it is — a consequence obtained by interleaving two of those
   surjections, not a cited proposition.
3. Step 3.1 now names its route: the injection into $\mathbb{Q}$ gives
   equinumerosity with a **subset** of $\mathbb{Q}$, which `[L4]` then bounds.
4. Step 3.2 now names its route: $[p,q) \mapsto (p,q)$ injects the family into
   $\mathbb{Q} \times \mathbb{Q}$, at most countable by the product theorem, and
   the image is a subset of it.

No Statement, title, or mathematical claim changed — this is citation fidelity
only, so it is not a public-interface change and needs no impact closure.

## Validation

- Dedicated pre-edit touch snapshot `pre-orch-citation-repair` (32nd in the
  ledger) taken before the first edit.
- `precheck`: PASS, 1 checked, 0 failing.
- `depcheck`: no new error class; the item's only remaining error is
  `published-unaudited`, which is correct until a certifier signs the current
  text and the stamp is written.
- `citecheck`: no mis-attribution warning on this item.
- Independent certification: lane `certify-round4`, GPT 5.6 Sol, read-only, a
  different family from the orchestrator that authored the repair and not its
  author. **No author certifies its own repair**, and that rule is why this
  record exists rather than a stamp written straight after the edit.

## Stamp

`verification.verified` with `scope: published-audit` and `delegated_by: owner`
is written only if `certify-round4` certifies the current text. A refusal sends
the item back for further repair and is recorded here.

---

# Wave 4 — A8 repairs (Alpha, `claude-opus-5`)

Five repairs, one per `confirmed_fatal` adjudication of a paired-judge rejection.
A8 is fatal-only (R1): the other nine rejections closed on their exact-hash
ledger rows with no mutation. `tools/step8-guard.mjs` against the `pre-a8`
baseline reports **5 changed, 0 created, 0 deleted, 5/5 licensed**.

Every repair below is Alpha's own, so **none is certified by its author**: each
is read on its final on-disk text by an independent GPT 5.6 Sol read-only lane
(`research/audit/wave4-dispatch/certifier-a8-*`), a different model family from
Alpha. The stale `verification.verified` stamp was removed from all five before
certification — `depcheck` went red on exactly those five
`published-unaudited`, which is the gate working — and rewritten only on CERTIFY.

## A8-1 — `def-cofinality` (dependency_citation; DeepSeek V4 Pro)

**Old:** "**Regular and singular.** An **infinite cardinal** $\kappa$
([[def-cardinal]], [[def-aleph-and-beth-hierarchies]]) is"

**The defect.** Neither cited target defines what makes a cardinal *infinite*.
`def-cardinal` defines "cardinal" only ("An ordinal $\kappa$ is a **cardinal** …
when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$"), and
`def-aleph-and-beth-hierarchies` *uses* the phrase without defining it ("An
infinite cardinal $\kappa$ is a **successor cardinal** when …"). The definition
is in `def-cardinal-arithmetic`: "**Finite and infinite cardinals.** A cardinal
$\kappa$ is **finite** when $\kappa \in \omega$ and **infinite** when
$\omega \subseteq \kappa$" — neither cited nor in `deps`. Because "infinite
cardinal" delimits the domain on which *regular* and *singular* are being
defined, this is a miscitation on the definition's own hypothesis.

**New:** "An **infinite cardinal** $\kappa$ — a cardinal ([[def-cardinal]]) with
$\omega \subseteq \kappa$ ([[def-cardinal-arithmetic]]), for instance any
$\aleph_\alpha$ ([[def-aleph-and-beth-hierarchies]]) — is". `deps` gained
`def-cardinal-arithmetic`, which is item 3 on the same A page against this
item's 17, so the new edge is backward and legal. All three links stay live, so
no `deps` entry is orphaned.

**Third instance of one defect class.** A6 confirmed the same fatal in
`thm-every-infinite-cardinal-is-an-aleph` [L5]; the A8 refuter lane found it a
third time in `ex-an-aleph-fixed-point` [L8] (see the A10 carry-list).

**Collateral, repaired:** ten items quote `def-cofinality`'s whole Definition
block in their proof contracts. All ten quotes were updated to the new text —
contract bookkeeping only; not one of those ten item files was touched, as
`step8-guard`'s "5 changed" confirms. `proof-contract --strict` back to
**0 errors, 77/77**.

## A8-2 — `lem-successor-cardinal-exists` (other: false claim in a Remark; Sonnet 5)

**Old:** "…; the cardinal successor is always written $\aleph(\kappa)$ on this page."

**The defect.** False about its own page. `def-aleph-and-beth-hierarchies`, on
the same A page `foundations/cardinal-arithmetic-and-cofinality`, opens
"**The successor cardinal.** For a cardinal $\kappa$ write $\kappa^{+} :=
\aleph(\kappa)$" and declares a "**Notation rule, in force on this page and its
companion.** The superscript $+$ means the **successor cardinal** only on a
cardinal letter", then uses $\kappa^{+}$ throughout ($\aleph_{\alpha+1} =
\aleph_\alpha^{+}$).

**New:** "…it carries the published ordinal meaning $\alpha \cup \{\alpha\}$.
This item writes the cardinal successor as $\aleph(\kappa)$ throughout; the
abbreviation $\kappa^{+} := \aleph(\kappa)$, on a cardinal letter only, is
introduced later on this page, and the superscript on an ordinal letter keeps
the ordinal meaning there too."

**No wikilink was added, deliberately.** `def-aleph-and-beth-hierarchies` is
item 11 on the page against this item's 9, so a link would be an undeclared
forward reference needing a `forward_refs` entry. Same manoeuvre A6 used for the
six real-analysis reading-order Remarks.

## A8-3 — `thm-locally-compact-hausdorff-basics` (other: false claim about the library; Sonnet 5)

**Old:** "**Claim 4 is what the one-point compactification uses.** … that
padding is the standard route to separating a point of $X$ from the added point
$\infty$ ([[thm-one-point-compactification-properties]])."

**The defect.** The cited sibling does not use claim 4. Its [L7] reads "In a
locally compact Hausdorff space every neighbourhood of a point contains a
compact neighbourhood of it ([[thm-locally-compact-hausdorff-basics]],
**claim 1**)", and its step 1.4 separates $x$ from $\infty$ with it: "then [L7]
applied to the neighbourhood $X$ of $x$ gives a compact neighbourhood $C$ of
$x$, closed by [L6]". Measured across the whole corpus, **claim 4 is cited by no
item at all**; only claims 1, 2 and 3 have consumers.

**New:** "**Claim 4 pads a compact set, not a point.** … Separating a single
point of $X$ from the added point $\infty$ costs less than that:
[[thm-one-point-compactification-properties]] does it at step 1.4 from claim 1
alone, taking a compact neighbourhood of the point and using that it is closed."

## A8-4 — `ex-compactness-in-the-standard-topologies` (other: false universal claim; Sonnet 5)

**Old:** "Every theorem on the companion page that concludes something
interesting from compactness carries a Hausdorff hypothesis for exactly this
reason."

**The defect.** False, and the counterexamples are on the very page named. On
`library/topology/compactness.md`, `thm-compactness-under-continuous-maps`
claims 1 and 2 (continuous images of compact spaces are compact; a continuous
real function on a nonempty compact space attains its bounds) carry no Hausdorff
hypothesis; nor do `thm-compact-iff-fip`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-finite-products-of-compact-spaces`, `lem-tube-lemma-for-a-compact-factor`
or `thm-tychonoff`. Only claim 3 of that theorem needs a Hausdorff target.

**New:** the claim is narrowed to *separation* conclusions, and the covering
conclusions that carry no separation hypothesis are named. Same class as the A6
repair to `thm-compactness-variants-hierarchy`'s blanket "none of the reverse
implications holds". No wikilink added, so `deps` is unchanged.

## A8-5 — `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval` (dependency_citation; Sonnet 5)

**Old:** "[L4] The order of $\mathbb{R}$ is total, and $0 \le t \le 1$ for every
$t \in L$ ([[def-real-order]], [[def-interval]])."

**The defect.** `def-real-order` defines the relation and then expressly defers
the property [L4] asserts: its Remarks read "Independence of the representative,
**trichotomy**, and compatibility with the field operations:
[[thm-reals-ordered-field]]." `thm-reals-ordered-field` is what states it — "The
relation of [[def-real-order]] is well defined and makes $\mathbb{R}$ a totally
ordered field" — and [L4] did not cite it. Step 4.1 spends totality on its
dichotomy ("a point $u \in L$ has $u < b$, or else $u \ge b > a$").

**New:** "[L4] The order of [[def-real-order]] makes $\mathbb{R}$ a totally
ordered field, so any two reals are comparable ([[thm-reals-ordered-field]]);
and $0 \le t \le 1$ for every $t \in L$ ([[def-interval]])." `deps` gained
`thm-reals-ordered-field`; the matching citation row was added to the batch
proof contract and re-merged.

**Precedent, and why this one was missed.** This is the fourth in-scope instance
of the $\mathbb{R}$-citation convention A6 §3 flagged: A6 repaired
`ex-the-cardinality-of-the-continuum` [L1] and `thm-compactness-under-continuous-maps`
[L8], and the orchestrator repaired the Sorgenfrey item's [L3], all by declaring
`thm-reals-ordered-field` (and where completeness was also spent,
`cor-cauchy-reals-lub-complete`). The judge caught the one A6 missed, and cited
the Sorgenfrey sibling as its comparator.

## Validation

- `step8-guard --baseline pre-a8`: **5/5 licensed**, exit 0.
- `precheck` on all five: 4 proof-bearing checked, **0 failing** (a definition is `n/a`).
- `proof-contract --strict`: **0 errors, 0 warnings, 77/77**; `finite-smoke` 0 errors.
- `fwdcheck` `extcheck` `citecheck` `rendercheck` `prosecheck` `depsource`: all exit 0.
- `impact-audit --from pre-a8 --to post-a8 --receipt`: exit 0 — **5 changed
  interfaces, 39 dispositions, all `still-licensed`**
  (`research/audit/wave4-a8-impact-audit.json`). Every A8 change is a Remark
  correction or a citation-fidelity correction: no Statement, Definition
  content, title, claim, witness or proof step changed anywhere, so no consumer
  can have lost a licence it held before.
- One stage-level `post-a8` snapshot was taken, because `impact-audit.mjs`
  compares two *snapshots* and has no working-tree mode, so with `pre-a8` as the
  last label it computed `changed: 0` against itself. **No per-item snapshot was
  taken** — the ledger's "51 item(s) now repaired more than once" is the known
  artefact of the three Betas' 22 per-item `pre-A4-<id>` snapshots, recorded as a
  process defect in `wave4-alpha.md` §9 and not a real count.

---

# Wave 4 — deferred A8 coverage receipt (owner, 2026-08-05)

`level-coverage.mjs` halted A8 on `missing-receipt: research/audit/wave4-spine-audit.json`.
`spine-audit.mjs` appears nowhere in `run-wave.mjs`: the coverage gate of record
requires a receipt no step of the unattended driver produces, so no wave driven
by it can satisfy A8's coverage gate. The receipt is not a tool run — it attests
that a reader has audited the proofs among the 100 largest transitive dependency
cones, and its honesty depends on that reading having happened.

The owner directed the wave to proceed to A9 rather than commission the spine
reading now. Consequences, recorded so the A10 rundown states them rather than
implying coverage that does not exist:

- **A8's coverage gate did not pass.** The judge coverage itself is complete —
  182 verdicts, both lanes, all 91 items, zero nulls — and every rejection is
  adjudicated on its exact-hash ledger row. What is unmet is the separate
  spine receipt, i.e. the independent reading of high-fan-out proofs.
- **A10's gate table also carries `AUDIT_COVERAGE()`**, so the same receipt is
  due again at the terminus and will halt there unless it is produced or the
  owner waives it a second time.
- Carry to the wave-5 plan: either `run-wave.mjs` gains a spine-reading stage
  before the coverage gate, or the gate table stops asking A8 for a receipt the
  workflow never commissions.
