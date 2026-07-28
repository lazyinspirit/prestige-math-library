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
