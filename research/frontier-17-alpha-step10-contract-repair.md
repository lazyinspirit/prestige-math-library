# Alpha — step 10 contract repair, run `frontier-17`

Lead Alpha, dispatch label `step10-contract-repair`. Two narrow repairs, both
needing the role that owns `research/*.proof-contracts.json`. Nothing outside
the two named items was touched. Tau's analysis was verified from disk and is
correct on both counts; S-001 and S-003 were left exactly as Tau landed them.

---

## Repair 1 — Sigma S-002, `thm-the-contravariant-power-set-functor-is-monadic`

### The defect

Proof step 1.4 was three Markdown blocks separated by blank lines around a `$$`
display. The app's step parser (`paragraphs()` in `web/lib/item-sections.ts`)
matches `/^(\d+\.\d+)\s+/` per block, so only the first block carried the number
and the chips; the display and the trailing clause rendered as unnumbered rows
and the tag printed as the literal text `[step 1.3, L3, algebra]`. Step 2.1 cites
"step 1.4" for exactly the content that had fallen out of the numbered step —
including the quantifier "for every $S\subseteq A$", which is what makes the
displayed identity a statement rather than an equation about one set.

### What was applied

**1. The join.** The two blank lines inside step 1.4 were replaced with single
spaces. Nothing else: no word, symbol, display, citation tag or dependency
changed. This is Sigma's repair verbatim, and Tau had already verified it through
the app's own `remark-gfm` + `remark-math` + `rehype-katex` pipeline — identical
math nodes (9 `inlineMath`, `e[e^{-1}[S]]=g^{-1}[f[S]]=S\cap e[E]` with its
brackets intact), no `katex-error`, byte-identical rendered text, 3 paragraphs to
1, and both the step number and the chips parsing.

**2. The stratification.** Joined, the step's citation of step 1.3 becomes
visible to `tools/precheck.mts`, which failed and printed the canonical form
`1.4 -> 2.1`, `2.1 -> 3.1`, `3.1 -> 4.1`. That was adopted, and it is honest
rather than forced: step 1.4 is the only step citing a phase-1 step, so it alone
moves to phase 2, and its two consumers shift behind it. Nothing about which step
depends on which changed — only the labels.

Every reference moved with the step:

| old | new | references rewritten |
|---|---|---|
| 1.1, 1.2, 1.3 | unchanged | — |
| 1.4 | **2.1** | — (cites `step 1.3`, unmoved) |
| 2.1 | **3.1** | prose "using step 1.4" → "using step 2.1"; tag `[step 1.4, construct]` → `[step 2.1, construct]` |
| 3.1 | **4.1** | tag `[…, step 2.1, L4]` → `[…, step 3.1, L4]`; prose "steps 1.1, 1.2, and 2.1 give the left adjoint, conservativity, and preservation hypotheses" → "steps 1.1, 1.2, and 3.1" |

That last prose fix is the one precheck's own auto-repair does **not** make: its
rewrite catches `step N.M` but not the list form `steps 1.1, 1.2, and 2.1`.
Left as printed, step 4.1 would have named the pullback step (new 2.1) where the
preservation step (new 3.1) was meant — a citation that reads plausibly and is
wrong. It was corrected by hand.

`precheck` on the item: **PASS**, 1 checked / 0 failing.

**3. The contract.** `research/frontier-17-batch-9.proof-contracts.json`, entry
`thm-the-contravariant-power-set-functor-is-monadic`, renumbered in the same act:

- citations: `L3.uses` `1.4` → `2.1`; `L4.uses` `3.1` → `4.1`. `L1`/`L2`/`L5`
  unchanged (their steps did not move).
- derivations: the three moved rows re-keyed (`step-1-4`→`step-2-1`,
  `step-2-1`→`step-3-1`, `step-3-1`→`step-4-1`), each `step` and each `step N.M`
  input remapped, and every `claim` refreshed from the item on disk. Note that
  `step-2-1`'s claim had been **truncated at "Hence [L3] gives"** — the same
  fragmentation that broke the rendering had also truncated the contract's record
  of what the step claims. It now carries the whole step.
- boundaries: `empty` and `degenerate` evidence re-pointed from `step 2.1` to
  `step 3.1`, which is the step each was describing (the surjective
  inverse-image factorization, and the identity coreflexive equalizers). No
  disposition, status or reason changed.

Re-merged with `merge-proof-contracts.mjs --level frontier-17` over batches 1–9
into `research/frontier-17-proof-contracts.json`; the merge is byte-reproducible
and the diff against the previous merged file is confined to this one entry
(scope list identical, 384 items).

`proof-contract --strict` on this item: **11 errors → 0**.

**4. No stamping.** The item's `verification:` block carries only
`precheck: pass` — there was no `verification.judge` to delete. Its normalized
`item_sha256` is now
`f8dc34fd6f02d9e24ca5cbfa1b1ce1342b519b73058fe86b1f8ae4c4d768e945`; the five
verdict rows already in `research/frontier-17-judge.jsonl` for this id are stale
and the session's rejudge covers it.

Nothing was deleted, narrowed or weakened. The renumbering was checkable rather
than forced, so no blocker was recorded.

---

## Repair 2 — contract desync, `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent`

`proof-contract --strict` reported `citation-quote-mismatch`: the recorded L1
quote did not occur in
`lem-transitive-subgroups-of-s-four-and-the-resolvent-action`'s Statement.
Confirmed on disk — exactly one line differs, the header row of the lemma's
table:

```
recorded:  | $H$ | $|H\cap V_4|$ | image on pairings | $H\le A_4$ |
on disk:   | $H$ | $\lvert H\cap V_4\rvert$ | image on pairings | $H\le A_4$ |
```

The previous Tau run changed the lemma to `\lvert…\rvert` for S-001 so its GFM
table would parse. `\lvert…\rvert` and `|…|` render identically and mean the
same thing, so the mathematics is untouched and the lemma was **not** changed
back. The recorded quote in `research/frontier-17-batch-3.proof-contracts.json`
was updated to the lemma's current spelling (+13 bytes, the exact expansion) and
re-merged.

**Checked first, as instructed:** the consuming item's own `[L1]` fact line is

> `[L1] The transitive subgroups of $S_4$ are $S_4,A_4,D_4,C_4$, and $V_4$, with the stated action on the three pairings ([[lem-transitive-subgroups-of-s-four-and-the-resolvent-action]]).`

It restates the lemma's first sentence and does not reproduce the table row, so
it never carried the stale spelling and no citation-fidelity repair was needed on
the item. A repo-wide grep confirms no item file carries `$|H\cap V_4|$`.

---

## Files changed

| file | change |
|---|---|
| `items/thm-the-contravariant-power-set-functor-is-monadic.md` | step 1.4 joined; steps renumbered 1.4→2.1, 2.1→3.1, 3.1→4.1 with every prose and tag reference moved |
| `research/frontier-17-batch-9.proof-contracts.json` | that item's citations, derivations and boundary evidence renumbered; one truncated claim restored |
| `research/frontier-17-batch-3.proof-contracts.json` | L1 quote for `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent` updated to the lemma's `\lvert…\rvert` spelling |
| `research/frontier-17-proof-contracts.json` | re-merged from the nine batch contracts |
| `research/frontier-17-tau.json` | S-002 reconciled to `repaired`, `changed_files` and `summary` updated |

No item other than `thm-the-contravariant-power-set-functor-is-monadic.md` was
edited. `research/frontier-17.proof-contracts.json` (an older, differently-named
merged artifact from 18:44, not the path `contractsPath()` reads) still carries
the stale quote; it is not on any gate's path and was deliberately left alone.

---

## Gate results, from the repo root

| gate | result |
|---|---|
| `precheck` on both changed items | **PASS** — 2 checked, 0 failing |
| `proof-contract --strict` | **0 errors**, 1 warning, 384/384 items — the warning is the pre-existing `shotgun-bracket` on `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor`, untouched by this dispatch |
| `depcheck` | **exit 0** — no cycles, all references resolve, no draft items on published pages |
| `rendercheck` | **exit 0** — 6517 files, every math span parses under real KaTeX |
| `citation-fidelity --fail-on-missing-quote` | **exit 0** — 1390 citations over 384 items; **no quote-not-found**, no widening candidates |
| `boundary-audit --fail-on-contradicted --fail-on-template` | **exit 0** |
| `finite-smoke` | **exit 0** — 3 checks, no counterexample |
| `visual-repair check --run frontier-17` | **exit 1** — see below |

## `visual-repair check` — what is still red, and why it is not content

All three content-side problems are gone. Before this dispatch the check
reported four problems; it now reports two, and neither concerns the corpus:

```
visual-repair: research/frontier-17-alpha-step10-contract-repair.task.md: Tau created an unauthorised file
visual-repair: research/frontier-17-dispatch/alpha-step10-contract-repair.prompt.md: Tau created an unauthorised file
```

Both files were written at 23:50 by the dispatcher that started this stage; the
Tau baseline in `.autopilot/render/frontier-17/tau-baseline.json` was taken at
23:36. They are controller artifacts of a **later** stage, exactly like the three
entries already in the `workflowOwned` exemption at `tools/visual-repair.mjs:127`
(`tool-tau-baseline-v2.result.json`, `tau-repair-v2.prompt.md`,
`tau-repair-v2.result.json`). The exemption simply does not name this dispatch,
because `10-tau-guard-v2` has no `onGateFailure` route and no hand-started
adjudicator was anticipated. This report file makes a third.

Every guard that is actually about content passes: the changed set equals
Sigma's `allowed_files`, no scoped file changed outside Sigma authority, no
tracked file was deleted, no protected frontmatter, heading, numbered step or
TikZ block was lost, and `tau.changed_files` now equals the observed changes.
The three Sigma findings all read `repaired` with `content_removed: false`.

**I did not widen the guard to clear this.** Editing `workflowOwned` is outside
this dispatch's scope ("nothing outside these two items"), and turning a red
gate green by editing the gate is the failure mode the run's own rules name. Two
consequences the owner should know:

1. `research/frontier-17-tau-rejudge-targets.json` has **never been written** —
   `check` writes it only on full success, and it has not passed. So
   `visual-repair verify`, which reads that file, cannot run either, and the
   step-10 close chain stays held.
2. The fix is one line and is a bookkeeping decision, not a mathematical one:
   add this dispatch's three controller artifacts to the `workflowOwned` set,
   keeping the exemption exact and adding no directory-wide carve-out. Re-taking
   the baseline is **not** an option — it would snapshot after the content edits
   and void the guard entirely.

## Rejudge

One id changed text and needs a paired rejudge:

- `thm-the-contravariant-power-set-functor-is-monadic` — new normalized
  `item_sha256` `f8dc34fd6f02d9e24ca5cbfa1b1ce1342b519b73058fe86b1f8ae4c4d768e945`.

Nothing was stamped. The two contract-only repairs changed no item text and
generate no rejudge target; `thm-galois-group-of-an-irreducible-quartic-by-its-resolvent`
and `lem-transitive-subgroups-of-s-four-and-the-resolvent-action` are both
untouched on disk by this dispatch.
