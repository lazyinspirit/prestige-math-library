# frontier-13 — Step 4 report (lead Alpha, group A)

**All seven batches spliced, all seven receipts emitted clean. No blocker.**
463 items across 11 pairs and 22 pages. The zero-seam property that licenses the
pipeline held for every batch, so no receipt was withheld and the pipeline never
stopped.

Everything below was recomputed from disk in this session.

---

## 1. The splice, batch by batch

`research/plan-spec.json` was backed up to
`scratchpad/frontier-13-plan-spec.pre-splice.json` before the first edit. The
splice tool is `scratchpad/frontier-13-splice.mjs`; the standing closure check —
the one that resolves every published dependency to its **home page on disk** and
requires that page to be in the pair's declared closure — is
`scratchpad/frontier-13-closure-check.mjs`.

| batch | pages | items | `validate-plan` | out-of-closure | cross-pair | b-leaf | dup ids | receipt |
|---|---|---:|---|---:|---:|---:|---:|---|
| 1 | 58/59, 96/97 | 87 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-1.json` |
| 2 | 57.001/57.002, 68/69 | 77 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-2.json` |
| 3 | 88/89, 94/95 | 88 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-3.json` |
| 4 | 395/396, 399/400 | 55 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-4.json` |
| 5 | 106/107 | 49 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-5.json` |
| 6 | 365.001/365.002 | 60 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-6.json` |
| 7 | 195/196 | 47 | exit 0 | 0 | 0 | 0 | 0 | `frontier-13-splice-7.json` |

**Whole run, recomputed after the last splice:** 22 pages, **463 items, 1431
dependency occurrences** (712 published, 719 in-pair), **0 out-of-closure, 0
cross-pair, 0 B-leaf, 0 unresolved, 0 same-page order violations, 0 duplicate
ids.** `validate-plan.mjs research/plan-spec.json` exits 0 with 301 warnings,
**every one `redundant-prereq` and byte-for-byte the pre-splice baseline** — the
same 301 the backup produces, so the splice introduced no warning of any kind.
Largest A page: `adjunctions-units-and-counits` at 51, nine under the ceiling, so
no `size` error anywhere.

### The splice touched item lists and nothing else

Diffed against the pre-splice backup: 1176 pages before and after; `note` and
`generated` unchanged; **22 pages changed their `items` array and 0 pages changed
anything else.** No `requires` edge was added, removed or tidied, exactly as the
dispatch required — D1, D1-amend, D3.1, D5.1, D5.2, R2.1, R7.1 and
`splitting-fields` on order 88 were already applied and I left them alone.

### Metadata disagreements, all resolved in the spec's favour and logged

Five, all cosmetic, all in each receipt's `metadata_log`:

- Four B-page **titles** differ (the batch files prefer "… — Examples and
  Counterexamples" or "Examples: …" over the spec's "… — Examples"). Spec kept.
- Both batch-1 B pages carry a non-schema `companion` key pointing back at their
  A page. Spec form kept — `companion` is declared on the A page only, which is
  what `validate-plan` reads.
- **`requires` agreed exactly on all 22 pages.** Nothing was unioned in.

### Three step-0 risks, closed from disk rather than from a report

- **Batch 2's illegal edge did not happen.** `thm-automorphisms-of-a-finite-cyclic-group`
  (order 68, item 15) is built locally, and `lem-power-congruence-root-bound-modulo-a-prime`
  (item 20) rebuilds the root bound it needs from `thm-root-bound-for-polynomials-over-a-domain`
  and `thm-z-mod-p-is-a-field`. Zero cross-pair edges over 257 dependency
  occurrences.
- **Batch 6 dropped MA-1 item 40 to the Hom side and recorded it.**
  `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars` is
  present; nothing on the page resolves to `tensor-products-of-modules`.
- **Neither published B-leaf trap is cited.**
  `ex-free-monoid-universal-property-as-a-representation` and
  `ex-function-sets-as-exponential-representing-objects` appear in no dep list;
  the free-monoid universal property is proved locally as
  `lem-words-satisfy-the-free-monoid-universal-property` (item 39).

D1 and D7.1 also earned their keep: both D1 edges are cited (item 38 uses
`thm-universal-property-of-free-modules`; item 43 uses three
`tychonoff-embedding-and-stone-cech` items), D1-amend was right to drop the
conjugacy edge (zero citations), D3.1's room is used by items 5 and 8 on order
88, R7.1's edge is used by `cor-rational-function-field-as-a-fraction-field`, and
all four D7.1 adjugate ids are cited from their published home rather than
re-minted.

---

## 2. Summary verdicts — all eleven rewritten

The corrections are in each receipt's `summary_corrections` map as exact
replacement prose, with the reasoning in `summary_rationale`. The authoring brief
and every `frontier-13-beta-<i>-author.task.md` already instruct the Beta to read
its receipt first and treat that map as binding, so the routing is closed.

**Ten of the eleven had a paragraph 1 that was the page's own development**, not
background from the declared dependencies. The failure was much more widespread
than group C's sample suggested — it is not, as the dispatch's example pair
implied, split roughly down the middle:

| page | what failed |
|---|---|
| `symmetric-polynomials` | **partial.** P1's background is otherwise correct, but it names Vieta's formulas as background when the Vieta expansion is items 4–5 *on this page*, and P2 never names them. One clause moved; the rest of P1 kept. |
| `algebraic-extensions-degree-and-finite-fields` | P1's central sentence is a development list ("The page proves the product-basis lemma and finite tower law, then develops …"). |
| `primitive-roots-and-unit-groups-modulo-n` | P1 entirely development; **P2 surveys the companion page** (SCHEMA §6). |
| `semidirect-products-and-automorphism-groups` | P1 entirely development; **P2 surveys the companion page**. |
| `diagonalisation-and-the-minimal-polynomial` | P1 entirely development; **P2 claims what other pages hold** ("Triangularisation, Jordan canonical form, and the spectral theorem remain on their assigned downstream pages"). |
| `inner-product-spaces-and-orthogonality` | P1 entirely development; P2 ends on a scope disclaimer rather than the progression. |
| `erdos-hajnal-property-and-homogeneous-sets` | both paragraphs development; math set in backticks rather than TeX. |
| `regular-pairs-and-induced-counting` | both paragraphs development; math in backticks. |
| `tensor-products-of-modules` | P1 entirely development; the one piece of real dependency background sat in P2. |
| `adjunctions-units-and-counits` | P1 entirely development; **P2 surveys the companion page**. |
| `linear-recurrences-and-rational-generating-functions` | both paragraphs development; math in backticks. |

Every replacement was checked mechanically: **exactly two paragraphs, every
paragraph under 150 words** (largest: 142), and all eleven clear
`prosecheck.mjs`'s `count-in-prose`, `count-of-this-page`, `library-scope-denial`
and positional-claim rules. Each paragraph 1 names only results the page's items
actually cite — I took the dependency list for each page from the spliced spec
and resolved every one to its published home before naming it.

**B pages: nothing to delete.** The three B-page summary drafts recorded as
removed during repair (batch 4's two under F4.2, batch 7's one under F7.7, and
batch 3's stray paragraph under F3.7) are all absent from the notes on disk. Each
receipt still carries an explicit `"no authored summary body"` entry for both B
pages so the instruction reaches the author.

---

## 3. Design-document amendments

### 3.1 Batch 5's five amendments, applied

They target `research/plan-algebra-track-expansion.md`. Note that the notes name
"§II.4 MOD-3", but the exact old strings live in **Part I's `## MOD-3` block** —
Part II's §II.4 had already been corrected on three of the five points. All five
were applied where the text actually was:

1. `order 102` → `order 106`.
2. The one-entry `requires` → the live three (`free-modules-and-exact-sequences`,
   `dual-spaces-bilinear-forms-and-inertia`, `field-extensions-and-the-complex-numbers`).
3. `estimate A 21, B 12` → `scaffold A 38, B 11 (frontier-13 batch 5; no split proposed)`.
4. The "every module embeds in an injective module" THMS clause → the
   enough-injectives-is-already-published paragraph.
5. The `$\mathbb{C}\otimes_{\mathbb{R}}\mathbb{C}$` "or drop with a note" B-page
   sentence → the retained $\mathbb R$-algebra calculation.

**Two deliberate deviations, both formatting, neither content.** (a) Beta wrote
the replacements as bare prose with `Hom_Z(R,D)` and unbacked ids; I rendered
them in the file's own idiom — backticked ids and `$\operatorname{Hom}_{\mathbb{Z}}(R,D)$`.
(b) Replacements 4 and 5 were three-sentence paragraphs sitting inside
semicolon-separated THMS/B lists; I shortened the list entry and placed the
explanation as the paragraph immediately after, rather than embedding prose
mid-list. I also fixed Part I's now-false trap (iii), which still told a Beta
that "enough injectives" had to be built here.

### 3.2 The drift sweep — and the one seam it found

Beyond the two patterns named in the dispatch, the sweep turned up a **cross-track
stable-id break**, which is the most consequential thing in this report after the
splice itself.

**Seam R-1 promised `def-flat-module`. It does not exist and never will.** Batch 5
minted **`def-flat-and-faithfully-flat-modules-and-ring-maps`** instead, and ids
are immutable now that the splice has landed. Worse than a dangling id: the
scaffolded definition is **wider than R-1 anticipated** — one item defines flat
module, faithfully flat module, flat ring map *and* faithfully flat ring map — and
page 106 also proves `thm-flatness-criteria-by-injections-and-ideals`,
`thm-projective-modules-are-flat`, `cor-free-modules-are-projective-and-flat`,
`prop-extension-of-scalars-preserves-flat-modules` and
`prop-transitivity-of-flatness-under-change-of-rings`. So the commutative-algebra
track was scaffolded to mint five items that are now published upstream:
`def-flat-ring-homomorphism`, `def-faithfully-flat-module-and-ring-map`,
`lem-ring-map-flatness-is-target-flatness`, `cor-free-modules-are-flat` and
`cor-projective-modules-are-flat`. Left alone, a future CA-12 Beta either cites a
dangling id or ships duplicates of published mathematics.

Applied: the live id and the moved boundary in `plan-algebra-track-expansion.md`
(§II.4.c and the subjects-01 receipt), ten edits in
`plan-commutative-algebra-track.md` (the inherited-interface row, CA-12's
`requires`, the R-1 ownership receipt, the harvest disposition of Altman–Kleiman
(9.5), the flatness-ownership convention row, the reserved-seam list, and the five
duplicating rows struck through with the upstream id to cite), five in
`plan-homological-algebra-track.md`, and a dated correction note under R-1 in
`research/subjects-01-SEAMS.md` — the ruling stands, the id and the boundary move.
I did not rewrite the historical `subjects-01-APPLY-REPORT.md` or
`-RECONCILIATION.md` run records.

### 3.3 The rest of the sweep

| file | what was stale |
|---|---|
| `plan-algebra-track.md` | Batch 1's eight exact find/replace edits (the $n!\,1_R$ ring hypothesis; the characteristic-2 discriminant scoping; the monic resultant replacing the Sylvester-determinant presentation; the discriminant/resultant paragraph; the algebraic-extension definition already published; the AA-15 DEFS list; the tower law's cardinal-dimension deferral; primitive-root terminology handed back to NT-1) — all applied. Plus stale Part I orders `AA-14 (order 54)` → 58 and `AA-15 (order 92)` → 96, both size-table rows, and AA-15's retained-result list extended with relative algebraic closure, transitivity of algebraicity, Frobenius, the subfield lattice and cyclicity of $\mathbb F_q^\times$. |
| `plan-algebra-track.md` §II.5 / §II.7 | **LA-9's `requires` was labelled "(spec, unchanged and correct)" and was neither** — the live spec has four edges, including D3.1's `field-extensions-and-the-complex-numbers` and `splitting-fields`. Corrected, with D3.1's reason recorded. LA-12's list was right; both size rows and estimates updated to the live scaffolds. |
| `plan-algebra-track-expansion.md` AG-3 | Part I said `order 64` with three prerequisites; live is 68 with four (R2.1). Sizes updated in both the Part I block and §II.2. |
| `plan-number-theory-track.md` NT-1 | Block rebuilt against the live scaffold: live `requires` (one declared edge, with the four Part I named pages recorded as transitive), the live 28-item and 11-item tables, and a paragraph naming the twelve additions. **Three ids in the Part I table are dead** — `lem-order-of-power-of-a-primitive-root`, `thm-unit-group-crt-decomposition`, `thm-unit-group-modulo-n-structure` — and are now called out by name so they are not revived. A fourth, live citation of `thm-unit-group-crt-decomposition` in the NT-3 table was repointed. The proof-strategy and well-definedness prose was kept: the proofs still have to discharge it. |
| `plan-category-theory-track.md` MA-1 | The seven-entry `requires` replaced with the live three, recording D1-amend and the Beta's finding that `def-abelianisation-of-a-group` is homed on `free-groups-and-presentations` (which is what made the conjugacy edge zero-citation). Item 40's **CONTINGENT** note resolved to the Hom-side fallback, with the dead id `thm-restriction-of-scalars-has-a-left-and-a-right-adjoint` named. Both size rows 45 → 51. |
| `plan-combinatorics-and-categories.md` | Batch 4's two §16.2 table rows applied (I set their mathematics in TeX rather than the proposal's backticks, matching the correction I made to the same page summaries). CB-5's anchor block: live orders 195/196, live `requires` with R7.1, and the **D7.1 instruction reversed** — CB-5 told the Beta the cofactor/adjugate machinery "the determinant page does not have" must be minted here; all four ids are published on `the-determinant-of-a-linear-operator`, inside the closure, and are cited. The stale `177/178 … 18 / 12` inventory row corrected to `195/196 … 32 / 15`. |

---

## 4. One finding, routed to step 6, not a splice blocker

**Batch 2 declined Milne's $Q_8$ nonsplitting witness partly on a false premise.**
The coverage row (Example 3.9(c)) gives two reasons: that it is a second
nonsplitting witness where the pair already proves nonsplitting through
`cex-cyclic-prime-square-extension-does-not-split`, and that "quaternion
multiplication and its subgroup lattice are homed on a different algebra page".
The batch notes escalate the second into "the current Pair-B closure does not
contain the quaternion page".

That is false. `def-quaternions` and `thm-quaternions-form-a-division-ring` are
`status: published`, homed on **`rings-subrings-and-integral-domains`**, which is
inside order 68's 31-page declared closure — page 68 already cites
`lem-field-is-a-commutative-ring` from it. The seed of the error is in the design:
Part I's AG-3 block located the quaternions at "order 42, an A-page spine", and
order 42 is `group-actions-and-cayleys-theorem`. I corrected the design block.

**Disposition.** Not a splice blocker and receipt 2 stands: no duplicate id, no
cross-batch citation, no `size` violation, and the mathematical content — that
not every extension splits — *is* on the page via the $C_{p^2}$ witness. So the
decline is defensible on its first reason and only its second reason is wrong.
But under the 2026-08-11 rule a decline's stated reason has to be true, and the
richness is real: $Q_8$ not being a semidirect product of proper subgroups
(every subgroup contains $-1$) is the sharper witness, and RT-3's $D_4$/$Q_8$
comparison wants it. Page 68 has 23 items against a 60 ceiling, and the two items
are cheap and legal from the published division ring.

**Recommended at step 6, where adding a result is still in scope: correct the
coverage row's reason, and add $Q_8$ and the nonsplitting theorem. I will author
both proofs personally if the orchestrator routes it.** I did not add them now:
receipt 2 had already released Beta 2 to author against the frozen list, and the
pipeline's safety argument is that a later edit cannot reach back into a released
batch.

---

## 5. What step 5 must inherit

1. **A repair is not done when the claim is fixed — only when its obligations
   are.** Four items this run had a Statement, title or id changed while their
   `deps`, contract input map, provenance row or coverage row stayed put. Every
   repair at step 5 moves all five.
2. **`--strict`'s "input map covers every step exactly once" passes vacuously**
   when a contract declares one derivation at step 1.1 with every fact attached.
   All 46 batch-4 contracts have exactly one step; that is how 18 hollow
   citations across 10 items in batch 6 quoted a clause's opening words and
   stopped while passing every count and verbatim check. Step 5 re-anchors every
   citation. Exact list: `research/frontier-13-alpha-c-recheck2.md`. The
   highest-leverage single case is batch 4's `def-erdos-hajnal-property-and-constant`,
   cited **ten times** by its planned title — a noun phrase stating no
   proposition — and it is the definition every EH proof on page 395 rests on
   (the quantifier order on $\epsilon$, whether $\epsilon$ depends on the class
   or the graph, and that the bound is $\operatorname{hom}(G)\ge|V(G)|^\epsilon$).
3. **Half the run's citations are not yet checkable.** Of 594 in group A's
   batches, 285 target published items and all 285 match disk byte-for-byte; the
   other 309 cite items that do not exist yet, so their "quote" is necessarily
   the planned title — and after step 5 a contract still quoting a title passes
   `--strict` all the same.
4. **Batch 5's ℤ-module/group-hom identification exists only in Alpha reports.**
   The universal property yields a unique **ℤ-module** hom while the theorem
   concludes a unique **group** hom; they coincide because additivity forces
   ℤ-linearity. That sentence appears in no batch-5 file and must be written into
   the proof.
5. **Two round-1 findings were never routed.** The Chernikov/Zhao section titles;
   and `def-gram-matrix-and-gram-determinant` and
   `thm-gram-determinant-detects-linear-independence` are tagged
   `literature-derived` while "Gram matrix"/"Gram determinant" occur **0 times**
   in all 404 pages of Axler and 0 times in Treil Ch. 5. **Do not let step 5 write
   Axler as their reference** — either find the source that carries them or retag.
   My page-94 summary names the Gram determinant test, which is correct
   mathematics; the provenance question is separate and still open.
6. **Citation liveness is a gate at steps 2 and 6** (`url-sweep.mjs --recover
   --fail-on-dead`). If a source dies between now and step 6, **recover it from
   the archive under host variants before re-sourcing anything** — querying the
   citation's own host reads as "never archived" when a document has moved behind
   a new subdomain, and re-sourcing a recoverable source already cost this run a
   42-minute re-harvest.
7. **New, from this stage: a coverage row's reason is a checkable claim, and one
   of them is false.** See §4. When a Beta declines a heading "because the
   machinery is on another page", the question is whether that page is in the
   closure — not whether the material is elsewhere.

---

## 6. Blockers

**None.** Nothing was withheld, nothing needed authority I did not have, and no
segment of any command raised a permission prompt.
