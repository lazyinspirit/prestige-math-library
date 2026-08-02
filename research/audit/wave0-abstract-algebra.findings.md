# Wave 0, abstract-algebra batch — Audit-Beta findings (A1/A2)

Batch: `research/audit/wave0-abstract-algebra.pages.json` — both pairs owned by
this Beta.

- `monoids-groups-and-subgroups` (A, 29 items)
- `monoids-groups-and-subgroups-examples` (B, 11 items)

Artifacts written: `wave0-abstract-algebra.provenance.jsonl` (40 rows),
`wave0-abstract-algebra.proof-contracts.json` (27 proof-bearing items), this file.
Nothing under `items/` or `library/` was touched.

## Coverage statement

Every one of the 40 in-scope items was read in full from disk: Statement or
Definition, Facts & Assumptions, every numbered proof/verification/refutation
step, and every Remark. Every `[F#]`/`[A#]`/`[L#]` fact was checked against the
on-disk text of each item it wikilinks — 272 distinct (fact, target) pairs, all
of which are recorded in the proof-contract file with an exact quote that was
mechanically verified to occur in the target's `Statement`/`Definition` section.
Every numbered step is mapped in the contract's input map. Both page files
(`library/abstract-algebra/monoids-groups-and-subgroups.md` and
`-examples.md`) were read with proof-step suspicion. No exceptions.

Cross-category dependency targets were opened and read individually and checked
against their on-disk statements: `def-natural-numbers`, `thm-induction-principle`,
`thm-recursion`, `def-nat-addition`, `def-nat-order`, `lem-nat-add-{commutative,
associative,cancellative,identity}`, `lem-nat-order-{add-compatible,is-membership}`,
`lem-nat-{discrete,nonzero-is-successor,trichotomy,transitive-irreflexive}`,
`thm-well-ordering-principle`, `def-{integers,int-operations,int-order}`,
`thm-int-{comm-ring,ordered-ring}`, `lem-nat-embeds-int`, `def-{countable,
equinumerous,injection-surjection-bijection}`, `lem-pigeonhole`, `def-field`,
`thm-rat-field`, `thm-reals-field`. None of them carries provenance yet; that is
their own wave's business and is not treated as a defect here.

## A1 — provenance census (proposed, class (c) retags)

| | count |
|---|---|
| `statement: literature-derived`, evidence `exact-source` | 3 |
| `statement: ai-altered`, evidence `semantic-source` | 37 |
| `statement: ai-generated` | 0 |
| evidence `established-knowledge` (needs Alpha concurrence) | 0 |
| `proof: not-applicable` (definitions) | 13 |
| `proof: ai-altered` | 2 |
| `proof: ai-generated` | 25 |

The three `exact-source` items are `def-identity-element`, `ex-klein-four-group`
and `fs-union-of-two-subgroups-is-a-subgroup`; in each case the source states the
claim with the same hypotheses, quantifiers, direction and conventions, down to
the witness ($2\mathbb{Z} \cup 3\mathbb{Z}$ with $2, 3$ in and $5$ out;
$\{(), (1,2)(3,4), (1,3)(2,4), (1,4)(2,3)\}$ inside $S_4$).

**No item in this batch is AI-invented.** Every statement is a recoverable
restatement, specialisation or merge of an established result, and in all 40
cases an actually-located source was found, so no row falls back to
`established-knowledge` and none is escalated as undecidable. The two
`proof: ai-altered` rows (`lem-identity-unique`, `lem-inverse-unique`) are the
two proofs that literally follow the sourced one-line arguments
($l = l * r = r$ and $l = l*(x*r) = (l*x)*r = r$); every other proof is locally
written.

All 38 distinct URLs appearing in the 40 items were checked and return **HTTP 200**
(13 needed a retry after a Wikipedia 429). One additional URL was located and
verified 200 for `ex-symmetries-of-a-square` claim 4
(`https://www.whitman.edu/documents/Academics/Mathematics/2014/rodriglr.pdf`,
$\operatorname{Aut}(C_n) \cong D_n$), and one for
`cex-subset-closed-under-the-operation-not-a-subgroup`
(`https://en.wikipedia.org/wiki/Cancellation_property`).

**No item in this batch carries the legacy one-axis `authorship` field**, so
owner decision D5 has nothing to delete here.

Convention deltas worth keeping in the ledger (all recorded per row):
`def-symmetric-group` fixes $(f \circ g)(x) = f(g(x))$ and defines
$\operatorname{Sym}(X)$ for arbitrary $X$; `lem-symmetric-group-is-a-group`
replaces the source's cardinality hypothesis by three named distinct points;
`thm-division-algorithm-in-z` specialises the source's $b \ne 0$, $0 \le r < |b|$
to $b > 0$, $0 \le r < b$ because no absolute value exists yet;
`thm-generalised-associativity` renders "bracketing does not matter" as an
explicit block/regrouping law because the library has no formal bracket syntax;
`ex-symmetries-of-a-square` treats the square combinatorially (a 4-cycle edge
relation) rather than in $\mathbb{R}^2$; `def-subgroup` uses the (S1)–(S3)
closure presentation where the source uses "subset that is a group", the two
being reconciled inside the library by `lem-subgroup-criterion`.

## A2 — defects found

### Fatal for the contract gate (blocking `proof-contract.mjs --strict`)

Three declared facts are tagged by no proof step at all, so their
`citation-uses` entries cannot be filled. `node tools/proof-contract.mjs
research/audit/wave0-abstract-algebra.proof-contracts.json --strict` reports
exactly these three errors and nothing else (27/27 items checked).

**D1. `items/lem-group-cancellation.md` — unused declared fact.**
Class: **citation-precision**. Location: Facts & Assumptions.
`[L2] $(g^{-1})^{-1} = g$ ([[lem-group-inverse-laws]])` is declared but no step
cites `[L2]`; only the Remarks mention it ("Fact [L2] records that inversion
pairs $g$ with $g^{-1}$"). The proof genuinely does not need it: step 2.2 only
needs $\lambda_{g^{-1}}$ to be a two-sided inverse map of $\lambda_g$, which
steps 1.3 and 1.4 supply directly. This is the "unused edge" that Beta
dependency discipline forbids.
*Proposed repair, two options for the orchestrator to choose between:*
(a) smallest and additive — extend step 2.2 to record what the fact is for, e.g.
"…with inverse $\lambda_{g^{-1}}$; and $\lambda_{g^{-1}}$ is in turn the left
translation by $g^{-1}$, whose inverse is $\lambda_{(g^{-1})^{-1}} = \lambda_g$
by [L2]", and add `L2` to that step's tag; or
(b) delete the `[L2]` paragraph and the Remarks sentence that names it, leaving
`[L1]` and `[L3]` (labels need not be contiguous). Option (b) leaves
`lem-group-inverse-laws` in `deps` with no fact using it, which is a `deps`
question and therefore a public-interface change; option (a) changes no
interface. **Recommendation: (a).**

**D2. `items/ex-symmetries-of-a-square.md` — load-bearing fact never tagged.**
Class: **citation-precision**. Location: Facts & Assumptions / proof step tags.
`[L1] $1, 2, 3, 4$ are pairwise distinct natural numbers
([[def-natural-numbers]], [[lem-nat-transitive-irreflexive]])` is declared and is
genuinely used — every pointwise computation and every distinctness argument
rests on it — but no step tags `[L1]`. Contrast the two sibling items that get
this right: `ex-klein-four-group` tags `[L1]` in step 1.1 and
`ex-symmetric-group-on-three-letters` tags it in steps 1.1 and 2.1.
*Proposed repair:* add `L1` to the tag of step 1.1 (which asserts "None of $r$,
$r^{2}$, $r^{3}$ is $\mathrm{id}$, each moving $1$") and, if the orchestrator
prefers full coverage, also to steps 2.2 and 3.2. Pure citation-precision; no
mathematical text changes.

Neither D1 nor D2 is a mathematical error. Both are bookkeeping defects in the
declared-fact/step-tag correspondence that the contract gate exists to catch.

### Nonfatal, recorded not chased (triage rule)

**N1. `def-injection-surjection-bijection` is cited for facts that live in its
Remarks, not its Definition.** Affects `lem-group-cancellation` [L3] ("a map is
bijective exactly when it has a two-sided inverse map"),
`lem-symmetric-group-is-a-group` [L1] (composite of bijections is a bijection; a
bijection has a two-sided inverse function which is itself a bijection),
`thm-generalised-associativity` [L6] (composites of injections are injective) and
`def-symmetric-group`'s own prose. The target does state all of this, verbatim
and correctly, in its **Remarks** ("**Composition.** … Hence a composition of
bijections is a bijection… These one-line verifications are used silently
throughout the library" and "**Inverses.** $f$ is bijective exactly when there is
a function $f^{-1}$ … that two-sided inverse is unique, and it is itself a
bijection"). So the citations are accurate; the library explicitly licenses them.
Two consequences worth recording: (i) `proof-contract.mjs`'s `SOURCE_SECTIONS`
only admits `Statement`/`Statement refuted`/`Definition`/`Example`, so the
contract rows for these pairs quote the Definition clause the fact also uses
(injectivity / bijectivity), not the Remarks clause; the Remarks half is
therefore not machine-anchored anywhere. (ii) If the wave ever wants these facts
first-class, the clean fix is a small lemma in the foundations track, which is an
owner-queue reading-order question, not a repair. **No action proposed.**

**N2. "$n \notin n$" attributed to `lem-nat-order-is-membership`.**
`thm-generalised-associativity` [L5] and, indirectly, `lem-order-characterisation`
[L7] read off $n \notin n$ from `lem-nat-order-is-membership`, whose Statement
gives $m < n \iff m \in n$ but does not state irreflexivity. It is immediate
($n < n$ is false by the definition of $<$), and `lem-nat-transitive-irreflexive`
states it outright. Well inside the 30-second threshold. **No action proposed.**

**N3. `ex-integers-mod-n-additive-group` — an unverified aside in the Example.**
The Example says that at $n = 0$, "$\mathbb{Z}/0$ has one class for each integer
and is infinite, and there is no natural number $n$ with $|\mathbb{Z}/0| = n$".
The first two clauses are immediate from $\equiv$ being equality at $n = 0$; the
third needs $\mathbb{Z} \not\approx m$ for every natural $m$, which is true and
available in the library but is not discharged in the Verification and is not in
`deps`. The aside is explicitly outside the numbered claims (claim 3 carries
$n \ge 1$), so nothing on the page rests on it. **Recorded; no repair proposed.**

**N4. `ex-additive-and-multiplicative-groups-of-a-field` — a slightly overstated
Remark.** The Remark says the field axioms leave implicit "that
$F \setminus \{0\}$ is closed under multiplication". `def-field` axiom (M)
actually says "$(F \setminus \{0\}, \cdot)$ is an abelian group with identity
$1$", which does assert closure; what step 2.1 really adds is a derivation of
closure from the *equations* axiom (M) spells out, which is what the item then
says. Prose imprecision only, and the item's own next sentence corrects it.
**No action proposed.**

**N5. A-page summary counts.** `monoids-groups-and-subgroups.md` closes with
"Twenty-nine items are proved here, seven of them marked as landmarks in the
flowchart above." Both numbers are **accurate** (29 items; landmarks are
`def-group`, `def-symmetric-group`, `thm-generalised-associativity`,
`def-subgroup`, `thm-division-algorithm-in-z`, `def-order-in-a-group`,
`lem-order-characterisation`). "Proved" is loose, since 13 of the 29 are
definitions. The B page's "Seven examples and four refutations, three
counterexamples and one false statement" is also accurate. `prosecheck.mjs`
passes corpus-wide, and these legacy summaries predate the two-paragraph
page-summary contract. **Recorded; no repair proposed.**

### Published-claim decay — swept, none found

The page's forward-looking prose claims were re-checked against today's corpus:

- `thm-division-algorithm-in-z` Remarks require that the later divisibility page
  "record that its general divisibility in a ring restricts on $\mathbb{Z}$ to
  the relation defined here". **Discharged:** `items/def-divides-in-z.md` quotes
  that Statement verbatim and proves the two usages agree.
- The same Remarks already document one earlier decay (the metric-spaces
  companion claim about the library having no divisibility theory) and record
  that it was narrowed. Nothing further to do.
- `def-group-homomorphism` ("kernels, images, isomorphisms and the isomorphism
  theorems belong to a later page"), `def-symmetric-group` (disjoint-cycle
  factorisation later), `def-monoid-finite-product` (`def-finite-sum` is a
  different object), and the A-page's "what is deliberately absent" paragraph all
  remain true of the current corpus.

## Mathematical verification notes (the substantive checks)

No fatal mathematical error was found in any of the 40 items. The checks that
took real work, recorded so Alpha's refuters need not redo them:

- **`thm-generalised-associativity`.** The skip map $\delta$ (step 1.10) is
  injective on all three case pairs; step 2.2's claim that $\delta$ maps $n$ onto
  $\sigma(n) \setminus \{k\}$ is correct in both directions, including the
  $y = \sigma(x)$ sub-case; $\pi' = \pi \circ \delta|_n$ really lands in
  $\operatorname{Sym}(n)$ because $\pi(k) = n$ (step 3.2); the second application
  of the splitting law in step 4.2 uses $\sigma(r) = 1 + r$, which needs
  commutativity of $+$ on $\mathbb{N}$ and cites it ([L3]); step 4.3's
  $w_{k+l} = h_{\sigma(k+l)} = h_{k+\sigma(l)}$ is right. Claim 2 admits empty
  blocks ($c_j = 0$), and the proof survives that.
- **`lem-group-power-laws`.** The normal form $g^{x} = g^{a}(g^{b})^{-1}$
  (step 3.2) is correct in both trichotomy cases, and the $a < b$ case really does
  need step 1.7 in the position claimed. Step 6.1's chain
  $(g^{x})^{y} = ((g^{x})^{-y})^{-1} = (g^{x(-y)})^{-1} = (g^{-(xy)})^{-1} = g^{xy}$
  is sound.
- **`thm-division-algorithm-in-z`.** Existence and uniqueness are argued in an
  interleaved step order (uniqueness in 1.5/2.3/2.4/3.2, existence in
  2.2/3.1/4.1/5.1/6.1/7.1); both halves close. Step 2.2's identity
  $a - q_0 b = \iota(a_1) + \iota(a_2)(b-1)$ checks out, and step 3.1's
  nonnegativity of it is what makes $T$ nonempty.
- **`lem-order-characterisation`.** Step 2.4's injection $\sigma(m) \to m$ in the
  infinite-order case is legitimate; step 2.3's $t \le j < n$ chain is right.
- **`ex-symmetries-of-a-square`.** All pointwise computations were recomputed:
  $s \circ r = r^{3} \circ s$ (step 2.1), $r^{2} \circ s$ equals the map
  $1\!\mapsto\!1, 2\!\mapsto\!4, 3\!\mapsto\!3, 4\!\mapsto\!2$ (step 10.1), the
  neighbour sets $\{r(x), r^{3}(x)\}$ (step 8.1), and the case split in step 9.1
  forcing $f_1(3) = 3$. Claim 4 is correct.
- **`ex-klein-four-group`**, **`ex-symmetric-group-on-three-letters`**,
  **`cex-power-of-a-product-in-a-nonabelian-group`**,
  **`fs-union-of-two-subgroups-is-a-subgroup`**: every composite and every
  remainder computation was recomputed by hand and agrees.
- **`lem-order-of-element-exists`.** The hidden boundary $m = 0$ cannot occur
  (a bijection $G \to 0$ would empty $G$ while $e \in G$), so step 2.1's map $F$
  is well defined; recorded in the contract's `degenerate` row.

## Proof-contract file

`research/audit/wave0-abstract-algebra.proof-contracts.json`, version 1, level
`audit-wave0-abstract-algebra`, scope = the 27 proof-bearing items. Every
citation carries `source_section` plus an exact quote verified to occur in that
section; every numbered step has exactly one `derivations` entry whose `inputs`
name every fact and earlier step the step tags, plus its `given`/`choose`/
`base`/`ih`/`construct`/`algebra`/`discharge-induction` markers; all eight
boundary cases are disposed of per item with an anchored evidence line or a
specific not-applicable reason. `finite_smoke` is empty (no finite/combinatorial
claim in this batch matches an implemented check type; the finite computations
here — $S_3$, $V$, $D_4$, $\mathbb{Z}/n$ — are already fully enumerated inside
the items). `risk_review` is `pending` with `reviewer: null` on every item: that
disposition is Alpha's at A6, and `risk-report.mjs --require-reviewed` will
correctly demand it for whatever this batch scores high or critical.

One incidental data point for the orchestrator: `ex-integers-under-addition`'s
`[L1]` wikilinks `[[thm-int-comm-ring]]` twice in the same fact paragraph. The
contract dedupes the (fact, source) pair, as the gate keys on it. Purely
cosmetic; no repair proposed.

## Owner-queue candidates

None. Nothing in this batch needs a deletion, an id change, or a reading-order
change.

## A4 — repairs applied (authorised by `wave0-abstract-algebra.A3.md`, 2026-08-02)

The pre-A4 `touchlog` snapshot was taken by the orchestrator; this Beta did not
run `touchlog`. Nothing outside the 40 in-scope items and the three namespaced
batch files was touched. No id was renamed or removed.

### R1 — provenance retags (class (c)), 40 items, non-material

For each of the 40 items a `provenance:` block was inserted immediately after
the `origin:` line, carrying the two components exactly as adjudicated:

```
provenance:
  statement: <literature-derived | ai-altered>
  proof: <not-applicable | ai-altered | ai-generated>
```

3 `literature-derived` statements (`def-identity-element`, `ex-klein-four-group`,
`fs-union-of-two-subgroups-is-a-subgroup`), 37 `ai-altered`; 13
`proof: not-applicable`, 2 `proof: ai-altered`, 25 `proof: ai-generated`. No
`generation:` block is required anywhere, since no statement is `ai-generated`.
No item carried the legacy one-axis `authorship` field, so D5 deleted nothing.

Three items needed a ledger URL added to `sources.references` so the evidence is
reader-visible (all three verified HTTP 200):

| item | added |
|---|---|
| `cex-power-of-a-product-in-a-nonabelian-group` | `https://en.wikipedia.org/wiki/Exponentiation` — the source of the "true only if the summands commute" caveat the item refutes without |
| `ex-symmetries-of-a-square` | `https://www.whitman.edu/documents/Academics/Mathematics/2014/rodriglr.pdf` — support for claim 4, $\operatorname{Aut}(C_n) \cong D_n$ |
| `cex-subset-closed-under-the-operation-not-a-subgroup` | `https://en.wikipedia.org/wiki/Cancellation_property` — the sharpest statement of the witness |

These are frontmatter-only edits that change no claim, so per SCHEMA's
material-rewrite test the existing `verification.judge` and `audited` stamps were
**kept** on all 40.

### R2 — D1, `items/lem-group-cancellation.md` (class: citation-precision), MATERIAL

Applied as a **fact deletion**, per A3; the step-padding option was declined.

- **Old** (Facts & Assumptions): `[L2] $(g^{-1})^{-1} = g$ ([[lem-group-inverse-laws]]).`
  **New:** paragraph deleted. `[L1]` and `[L3]` keep their labels; the gap is
  deliberate, since renumbering `[L3]` would have forced an edit to step 2.2's
  tag for no gain. `precheck` confirms non-contiguous fact labels are legal.
- **Old** (Remarks): `... $\rho_g$ permute $G$. Fact [L2] records that inversion pairs $g$ with $g^{-1}$, so the two families of translations are indexed by the same elements.`
  **New:** `... $\rho_g$ permute $G$. Inversion pairs $g$ with $g^{-1}$ ([[lem-group-inverse-laws]]), so the two families of translations are indexed by the same elements.`
  The reference stays live as an inline wikilink, so the `deps` entry for
  `lem-group-inverse-laws` remains justified and was **kept**; no public
  interface changed and no `impact-audit` is owed.
- No proof step was added, removed or reworded. The mathematics is untouched.
- Stamps: `verification.judge` (glm-5.2, 2026-07-27) and
  `verification.audited: 2026-07-27` **deleted**; `verification: precheck: pass`
  remains.

### R3 — D2, `items/ex-symmetries-of-a-square.md` (class: citation-precision), MATERIAL

- **Old** step 1.1 tag: `[L2, L3, L6, given]` → **New:** `[L1, L2, L3, L6, given]`.
  Step 1.1 asserts "None of $r$, $r^{2}$, $r^{3}$ is $\mathrm{id}$, each moving
  $1$", which rests on $1, 2, 3, 4$ being pairwise distinct.
- **Old** step 2.2 tag: `[step 1.1, step 1.2, L2]` → **New:** `[step 1.1, step 1.2, L1, L2]`.
  Step 2.2 asserts "$s$ fixes $2$, while $r$, $r^{2}$ and $r^{3}$ send $2$ to
  $3$, $4$ and $1$ respectively", which uses the same distinctness directly.
- **Step 3.2 was left unchanged.** A3 authorised 2.2 and 3.2 "where genuinely
  used"; on re-reading, step 3.2 derives distinctness of the eight elements from
  step 1.1, step 2.2 and cancellation, and never invokes the distinctness of the
  four points itself. Tagging `L1` there would have been an inflated citation.
  Recorded so the judgement is inspectable rather than silent.
- Not tagged either, for the same reason A3 scoped the repair as it did: `[L1]`
  is also implicitly in play in steps 1.2, 7.1 and 9.1. The contract now records
  `L1` as used at 1.1 and 2.2, which is the accurate minimum; a wider sweep was
  outside the authorisation.
- No prose or mathematics changed; only step tags.
- Stamps: `verification.judge` (glm-5.2, 2026-07-27) and
  `verification.audited: 2026-07-27` **deleted**; `precheck: pass` remains.

### Contract updated to the final text

`wave0-abstract-algebra.proof-contracts.json` was patched against the post-repair
disk text, not regenerated from stale inputs: the `L2 -> lem-group-inverse-laws`
citation entry was removed from `lem-group-cancellation` (4 citations to 3), and
every `uses` list and step `inputs` list for both repaired items was recomputed
from the final files. `ex-symmetries-of-a-square`'s two `L1` citations now carry
`uses: ["1.1", "2.2"]`.

### Gate outputs after A4

```
reflow.mts   items/lem-group-cancellation.md items/ex-symmetries-of-a-square.md
             unchanged, unchanged                                    exit 0
precheck.mts PASS items/lem-group-cancellation.md (direct)
             PASS items/ex-symmetries-of-a-square.md (direct)
             2 checked, 0 failing - all clean                        exit 0
proof-contract.mjs --strict
             0 error(s), 0 warning(s), 27/27 item(s) checked          exit 0
content-policy.mjs --audit --ledger ... wave0-abstract-algebra.pages.json
             40 scoped item(s), 0 error(s), 0 warning(s)              exit 0
citecheck / prosecheck / extcheck / fwdcheck                          exit 0
```

`depcheck.mjs` now reports `published-unaudited` for
`items/lem-group-cancellation.md` and `items/ex-symmetries-of-a-square.md`.
**This is the intended §9 state, not a regression:** a material repair removes
the obsolete `audited` stamp, and the independent reading at A6 writes
`verification.verified` with `scope: published-audit` and
`delegated_by: owner`. Both items must also be rejudged by both lanes at A7 on
the new frozen context. The other `published-unaudited` entries in that run
belong to sibling wave-0 batches doing the same thing.

## Checkpoint

Substage: A1, A2 and A4 complete for both pairs. On disk:
`research/audit/wave0-abstract-algebra.{provenance.jsonl,proof-contracts.json,findings.md}`,
40 retagged items, 2 repaired items. Next action: A6 independent reader
certification of R2 and R3 (this Beta authored them and may not certify them),
then `verification.verified` on those two items, then the A7 paired rejudge.
