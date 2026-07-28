# `frontier-2` — staged amendments to PUBLISHED items

**Do not apply these now.** `CLAUDE.md`: amendments to published pages land **in
the same commit that publishes the level**, never before, with
`verification.audited` cleared so `depcheck` forces the owner's re-audit. This
build is not publishing — the owner audits first.

Every entry below was **verified verbatim on disk by the orchestrator**, not
taken from an agent's report. Line numbers are as of 2026-07-29 and should be
re-located by text, not by number, when applied.

---

## A. Claims this build falsifies — found by the `cardinal-arithmetic-and-cofinality` author

These five are **not** staged anywhere else. Each is true today and becomes a
**published falsehood the moment this pair publishes.**

### A1. `items/def-ordinal-exponentiation.md` (published, line 68)

> …[[rem-ordinal-versus-cardinal-exponentiation]] is the standing warning, and
> **cardinal exponentiation is not defined anywhere in this library.**

Falsified by `def-cardinal-arithmetic`. Replace the final clause with a pointer
to that item, in the page-scoped form.

### A2. `items/rem-gitik-all-uncountable-cardinals-singular.md` (published, `proved_here: false`, lines 43–46)

> **Not proved in this library.** No forcing, no large cardinals, and no
> cofinality *function*: the library defines cofinal subsets of an ordinal
> ([[def-cofinal-subset-of-an-ordinal]]) but **neither $\operatorname{cf}(\alpha)$
> nor the words *regular* and *singular*.**

Falsified by `def-cofinality` and `thm-regularity-of-the-alephs`. The forcing and
large-cardinal half stays true; only the cofinality clause needs rewriting.

### A3. `items/rem-choice-ledger.md` (published, line 67–69)

> **Cardinal comparability**, that for any two sets one injects into the other.
> This is Hartogs 1915, and the proof runs through the construction of
> [[thm-hartogs]]. **Not proved here.**

Falsified by `thm-cardinal-comparability-iff-ac`, which proves the full
equivalence. **This item also needs the separate DC amendment** — see §B.

### A4. `items/rem-independence-of-ch-and-gch.md` (published, `proved_here: false`) — three sentences

- line ~51: "using the alephs and beths **that this library has not developed**"
  — falsified by `def-aleph-and-beth-hierarchies`.
- lines ~57–60: "the cardinal arithmetic … is itself only partly available:
  [[def-cardinal]] exists, but **exponentiation of cardinals and the aleph
  hierarchy do not**" — falsified by `def-cardinal-arithmetic`.
- line ~75: "$\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, **which the library has
  not proved** either, so the two forms are not interchangeable there" —
  falsified by `ex-the-cardinality-of-the-continuum`, which proves it **in ZF**.

### A5. `items/rem-gch-implies-ac.md` (published, `proved_here: false`, lines 48–50)

> The proof needs cardinal arithmetic without choice, in particular the behaviour
> of $A + A$ and of $\aleph(A)$ under iterated power sets, and **none of that is
> developed here.**

**Partly** falsified. Choice-free cardinal arithmetic now exists
(`lem-cardinality-of-a-well-orderable-set`, `thm-hessenberg`,
`lem-successor-cardinal-exists`); what remains genuinely absent is $\aleph(A)$
under iterated power sets. **Reword, do not delete** — over-correcting here would
replace one false claim with another.

---

## B. Claims found earlier in the build

Staged in `research/frontier-2-batch-1.notes.md` §3 and repeated here so one file
is the applyable list. All verified on disk.

| item | decayed claim | falsified by |
|---|---|---|
| `rem-ordinal-versus-cardinal-exponentiation` (245) | "cardinal exponentiation **is not defined anywhere in this library**" | `def-cardinal-arithmetic` |
| `def-cofinal-subset-of-an-ordinal` (245) | "belong to a page on cardinal arithmetic and cofinality that this library **has not built**"; also says "regular and singular **ordinals**" where *cardinals* is meant | `def-cofinality` |
| `rem-separation-axiom-conventions` (261) §5 bullet 1 | "this library has **no general topological compactness at this point**" | `compactness`, which sits **below** 261 |
| `def-normal-and-t4-spaces` (261) | "the planned page carrying cardinal arithmetic and cofinality … **is not yet built**" | `cardinal-arithmetic-and-cofinality` |
| `rem-continuum-hypothesis` (18) | "**this library has not proved** $\mathbb{R} \approx \mathcal{P}(\mathbb{N})$" | `ex-the-cardinality-of-the-continuum` |
| `def-order-topology-on-an-ordinal` (261) | *no* decayed claim — this is the **anti-two-notions** addition: record that the ordinal order topology is the special case of `def-order-topology-on-a-linearly-ordered-set` (253, below it, so the citation is backward and legal) | — |
| `def-locally-compact-metric-space` (283) | "This library has **no general topological compactness** at this point in the reading order" — **this is the discharge of the standing obligation recorded on that item** | `compactness` |
| `rem-choice-ledger` (243) | claims a **second** weaker principle is assumed; after this build there is a **third** (DC, in Urysohn/Tietze). Separately it is **already incomplete today**: the published `thm-perfectly-normal-implies-completely-normal` assumes countable choice and is not listed | `urysohn-lemma-and-tietze`, and a pre-existing gap |
| `rem-separation-axiom-conventions` (261) §3 | **NO AMENDMENT.** Its "not available at this point in the reading order … a page proving Urysohn's lemma sits above the present one" stays **true** — 267 > 261. Two agents disagreed; §5 decays and §3 does not | — |

---

## B2. Title-convention amendment found at step 9 (Alpha-F2, 2026-07-29)

Four PUBLISHED `fs-` items carry titles without the `FALSE:` prefix that every
other `fs-` title in the corpus carries (the two draft offenders on
`urysohn-lemma-and-tietze` were repaired at step 9; these four are published and
are therefore staged, not repaired):

- `items/fs-every-nonzero-element-is-a-unit-or-a-zero-divisor.md`
- `items/fs-gcd-times-lcm-equals-the-product.md`
- `items/fs-union-of-two-subgroups-is-a-subgroup.md`
- `items/fs-union-of-two-subspaces-is-a-subspace.md`

Amendment: prepend `FALSE: ` to each title. A title is what listing surfaces
show, and an `fs-` title reading as an assertion is the misreading the prefix
exists to prevent. Prefixing changes no mathematical claim; per SCHEMA §3 it is
not a material rewrite, so judge blocks stay.

## C. Rules for whoever applies these

1. **Clear `verification.audited`** on every item touched, so `depcheck`'s
   `published-unaudited` forces the owner's re-audit.
2. **Delete `verification.judge`** where the rewrite is material — SCHEMA §3 is
   explicit that a correction in Remarks counts.
3. **Re-grep the file you repaired.** A level-8 fix corrected one sentence and
   left the same falsehood sixteen lines away.
4. **Three of the five in §A are `proved_here: false`** (‡ tier). They are
   records, not proofs, so amending their prose is in scope; they carry
   `sources_checked` rather than `audited`, and must not acquire a judge block.
5. Prefer the **order-relative, page-scoped** form over any corpus-wide claim —
   that is the phrasing that survived level 9 untouched.

## D. Step-10a scope-denial sweep (orchestrator, 2026-07-29)

**Coverage caveat, stated plainly: this sweep was run by the orchestrator with
grep plus targeted reading, NOT by a dedicated reading agent.** The agent
dispatched for it died on the weekly API limit before returning. `LEVELS.md`
is explicit that grep is the entry point and never the sweep, and that the
recall test is rediscovering two sentences no negation pattern matches. **That
recall test was not run.** This section is therefore a partial result and the
sweep should be repeated properly before publication.

### D1. `items/lem-tube-lemma-for-a-compact-metric-factor.md` (published, order 283) — DECAYED

> **The general tube lemma, for a compact factor in an arbitrary topological
> product, is not available in this library at this point in the reading order,**
> because compactness is defined here only for metric spaces
> ([[def-metric-compactness]]).

**Both halves are now false.** This build added `def-compact-space` and
`lem-tube-lemma-for-a-compact-factor` on `compactness` at order **255**, which is
*below* 283 — so at this item's point in the reading order the general notion and
the general lemma both exist.

This is the case `LEVELS.md` warns about specifically: the phrasing is the
approved order-relative form, which is decay-**resistant** and not decay-proof,
and it failed because the position it names moved underneath it. Replace with a
pointer to `lem-tube-lemma-for-a-compact-factor` recording that the metric case
here is the special case.

### D2. `items/ex-sorgenfrey-line.md` (published, order 250) — CANDIDATE, lower confidence

> That is not proved here: the standard argument uses a second countability or a
> Baire-type input **that this library does not have**.

The trailing clause is the **corpus-wide** form the prose rules ban, rather than
the page-scoped one. Second countability is genuinely still unbuilt (order 273),
but `def-baire-space` and `thm-baire-category-locally-compact-hausdorff` now
exist at 255, and `thm-baire-category-r` was already published at 133. Reword to
the page-scoped form regardless of how the Baire half is judged.

### Checked and CORRECT — do not amend

- `items/thm-any-two-finite-bases-have-the-same-size.md` (order 74): "cardinal
  numbers being not available at this point in the reading order". Cardinals
  arrived at **247**, above 74, so the claim **stays true**. This is the
  order-relative form working exactly as designed, and it is worth recording as
  the positive control for the sweep.
