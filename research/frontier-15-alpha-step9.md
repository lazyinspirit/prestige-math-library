# Step 9 — scope-denial sweep, run `frontier-15`

Lead Alpha (Claude Opus 5, `xhigh`, 1M window). Stage `9-scope`, 2026-08-17.
Machine-readable companion: `research/frontier-15-step9-decline-verdicts.json`
(one row per decline, all 168, with its verdict and the destinations its reason
names).

## Headline

**168 declines** were collected from the seven `frontier-15-batch-<i>.coverage.json`
files and every one was tested against disk. **Three were overturned and built**;
**four more stand on substance but rested on a claim that is false of disk**, and
their reasons were rewritten. The remaining 161 stand.

Six items were authored, contracted, gated and judged as a result. Both open
ledger rows were swept: **B41 is closed `fixed`**; **f15-a-rr-005 is deliberately
left `open`** and is the one row that will fail the step-10 `--no-open` gate.

| verdict | count |
|---|---|
| **overturned and built** | 3 |
| stands, reason was false of disk and is corrected | 4 |
| stands, names a destination verified in `plan-spec.json` | 75 |
| stands, destination real but named only in prose | 65 |
| stands, no destination exists anywhere in the plan (owner decision) | 21 (candidate list; see §5) |
| | **168** |

The last two rows are the finding this sweep exists for, and are read together:
**86 of 168 declines name no page id, no slot code and no item id.** On
`frontier-13` that number was 52 of 68 and it is what made a silent drop
indistinguishable from a considered deferral. It has not improved
proportionally.

---

## 1. Overturned and built

### 1.1 Craven Theorem 2.13 (Philip Hall) — batch 2

**Recorded decline:** `deferred` — *"This self-centralizing theorem belongs to the
soluble-group structure theory and requires an abelian-normal-subgroup argument
unused by this pair."* No destination named.

**Why it falls.** Both halves fail a standing rule. Dropping a result for want of
a lemma that could have been written is not a permitted disposition (owner,
2026-08-11); and a decline with no home is exactly the shape this stage exists to
catch. The hole was also structurally visible without reading any mathematics:
Craven's declared harvest range is *"Theorem 2.11 through Proposition 2.14"*, and
2.11, 2.12 and 2.14 are all `included` — **2.13 was the only decline inside a
fully harvested block**, on the very page that defines $F(G)$ and proves it is
the largest normal nilpotent subgroup.

**Disk evidence.** Every dependency the proof needs was already published and
inside `sylow-theorems-and-nilpotent-groups`' transitive closure (order 70,
closure of 32 pages): `thm-subgroups-and-quotients-of-solvable-groups-are-solvable`,
`thm-correspondence-theorem-groups`, `lem-dedekind-modular-law-for-subgroups`,
`thm-quotient-abelian-iff-contains-commutator-subgroup`,
`lem-intersection-of-normal-subgroups`, `def-upper-central-series`,
`lem-center-is-normal`,
`lem-characteristic-subgroup-of-a-normal-subgroup-is-normal`. The one genuine
gap was that the library had only the **element** centralizer $C_G(x)$
(`def-conjugacy-class-and-centralizer`) and no centralizer of a subgroup — a
missing prerequisite definition, which the 2026-08-11 rule says to build.

**Built — four items**, source read from the PDF (printed pp. 30–31) rather than
from memory:

| id | kind | note |
|---|---|---|
| `def-centralizer-of-a-subgroup` | definition | $C_G(H)$; the library had only $C_G(x)$. Cites Milne, *Group Theory*, Prop. 3.22, which displays the definition |
| `lem-centralizer-of-a-normal-subgroup-is-normal` | lemma | $N\trianglelefteq G\Rightarrow C_G(N)\trianglelefteq G$ |
| `lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup` | lemma | the claim opening Craven's proof, extracted because the theorem runs long |
| `thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group` | theorem | `landmark: true` |

**The Statement was narrowed and that is on the record.** Craven says *"Let $G$ be
a soluble group"*; the item says **finite** solvable, because the library's
`def-fitting-subgroup-of-a-finite-group` is a finite-group notion and the proof
needs $F(G)$ nilpotent, which can fail for infinite soluble groups.
`provenance.statement: ai-altered` for exactly that reason.

### 1.2 Mac Lane §VI.2, the group-action monad — batch 7

**Recorded decline:** `out-of-scope` — *"The fixed-group action monad belongs to
the published group-actions development; it is independent of the free algebraic
monads needed on this page."*

**Why it falls.** The named home cannot receive it.
`group-actions-and-cayleys-theorem` is order 42; monads are not defined until
365.005; and published pages are not retrofitted. So the destination guaranteed
the result would land nowhere — the frontier-13 pattern exactly.

The split is visible inside the same harvest: Riehl Exercise 5.5.iv (*"G-sets are
monadic over Set"*) is correctly deferred to MA-4 because it needs Beck's
theorem, while the algebra **identification**, which needs nothing beyond this
page's own definitions, was dropped.

**Built:** `ex-the-group-action-monad-and-its-algebras` on the B page (the A page
is at 59 of the 60-item cap). Source read from the PDF, printed p. 141.

It is **not** the writer monad already on the page: `ex-the-writer-monad-from-a-monoid`
is $X\times M$ with the multiplication on the right, whose algebras are *right*
actions. $G\times(-)$ was built directly so its algebras are *left* $G$-sets in
`def-group-action`'s sense, and it cites no page-mate, so no B-page leaf edge is
created.

### 1.3 Dembo Definition 1.1.36, the λ-system axiomatisation — batch 4

**Recorded decline:** `deferred` — *"including it would add a separate equivalence
proof without supporting an authored result."* The only slot code in the reason
was MT-1 itself, the declining page.

**Why it falls.** A no-consumer reason for an equivalent characterisation of a
definition made **on that page** is neither permitted ground (another page's
topic, or an unreached subject area).

**Built:** `prop-complement-and-disjoint-union-axioms-for-a-lambda-system`, both
directions, in ZF.

**And it corrects its source, which is a second finding — see §3.**

---

## 2. Four declines whose stated reason is false of disk

All four **stand on substance**; each was recorded against a claim that is not
true, so a reader following the reason would look in the wrong place. Ledger row
`f15-S9-005`.

| # | decline | what the reason said | what disk says | corrected to |
|---|---|---|---|---|
| 1 | b2, Crawley-Boevey §1.3 **Snake Lemma** | "belongs to the later homological-algebra development" | `thm-snake-lemma-for-modules` is **published** on `free-modules-and-exact-sequences` at order **104** — *earlier* than this page's 108, and inside its closure via `tensor-products-of-modules` | `already-published`, naming the item |
| 2 | b3, Milne **Remark 6.4** (choice strength of maximal/prime ideal principles) | "treated on `order-zorn-and-the-axiom-of-choice`" | that page's 21 items are chains, Bourbaki–Witt, Zorn and Zorn⟺AC, and **nothing** about weaker principles. The equivalences are `rem-choice-strengths` on `filters-and-ultrafilters` (12) and `rem-halpern-levy-bpi-not-ac` on `deferred-set-theory-beyond-choice`; **neither is in this pair's closure** | reason rewritten, naming both real homes and the closure fact |
| 3 | b4, Tao **Exercise 1.4.11** | Lebesgue/null/elementary/Jordan algebras "assigned to MT-5" | MT-5 is `non-measurable-sets-and-the-cost-of-choice`. The Lebesgue and null algebras and the elementary algebra are **MT-4** `lebesgue-measure-on-euclidean-space`; Jordan content is **already published** at order 235. The neighbouring row correctly says MT-4 for elementary sets, so the file contradicted itself | reason rewritten to MT-4 |
| 4 | b7, Riehl **Example 5.1.4(vi)** (free-category monad) | "belongs to the categorical-graphs track" | **no such track exists** in `plan-spec.json`; no page carries quiver or free-category-monad content. The real obstruction is that `ex-the-free-category-on-a-quiver` is homed on the B page `adjunctions-units-and-counits-examples`, and B pages are leaves (`depcheck` error `b-leaf-content`), so no A-page item may cite it | reason rewritten; **flagged as an owner decision** (§5) |

Item 4 is the one that changed my verdict: I had it down as an overturn candidate
until I checked the leaf rule, which is a real and checkable obstruction rather
than a stated one.

---

## 3. A source that is wrong, and a harvest that silently repaired it

Ledger row `f15-S9-004`, and the most interesting thing this sweep found.

Batch 4's harvested heading reads *"Definition 1.1.36, equivalent
complement-and-disjoint-union formulation of a lambda-system"*. **Dembo's Remark
does not say that.** Read from the PDF at printed p. 15, it offers

> "One may equivalently define λ-system with $A^c\in L$ whenever $A\in L$,
> **instead of** requiring that $B\setminus A\in L$ whenever $A\subseteq B$"

— keeping the increasing-limit clause. **That system is not equivalent.** On
$X=\{1,2,3,4\}$ take

$$\mathcal D=\{\emptyset,\{1\},\{1,2\},\{3,4\},\{2,3,4\},X\}.$$

It contains $X$; it is closed under complements ($\emptyset\!\leftrightarrow\!X$,
$\{1\}\!\leftrightarrow\!\{2,3,4\}$, $\{1,2\}\!\leftrightarrow\!\{3,4\}$); and it
is closed under increasing unions, since $X$ is finite so every increasing chain
terminates. Yet $\{1,2\}\setminus\{1\}=\{2\}\notin\mathcal D$.

So the source's Remark as printed is wrong, and the harvest silently repaired it
into the form that **is** equivalent. Two defects in one row, and the harvest's
version is the true one. The item built at §1.3 proves the
complement-and-**countable-disjoint-union** form, matching the heading rather
than the source, with `provenance` `ai-altered` on both components.

The independent DeepSeek refuter checked the witness element by element — all six
complement pairs and both maximal chains — and agreed, adding the correct
precision that it refutes *that form only* and does not touch the item, since
$\{1\}$ and $\{3,4\}$ are disjoint with union outside $\mathcal D$, so clause 3
already fails there.

This survived the step-6 harvest-faithfulness read because **the heading is more
plausible than the source**. Nothing mechanical will catch that; opening the
exact locator will.

---

## 4. Declines that stand, and how each was checked

**75 name a destination that was verified in `plan-spec.json`** — the id exists,
and its order is later than the declining page's. Spot-verified against the
brief's expected homes, all of which check out:

| expected | verified |
|---|---|
| batch 3 → the Galois correspondence at order 100 | `the-galois-correspondence` = **100** ✓ (declining page at 98) |
| batch 6 → Morera / Liouville / analyticity at order 311 | `analyticity-liouville-and-morera` = **311** ✓ (declining page at 309). Batch 6's other homes also check: `the-identity-theorem-and-the-open-mapping-theorem` 313, `the-winding-number-and-the-global-cauchy-theorem` 315, `isolated-singularities-and-laurent-series` 317, `the-residue-theorem` 319, `harmonic-functions-and-the-poisson-integral` 327 |
| batch 7 → Manes and monadicity to MA-4 at order 365.007 | `monadicity-and-becks-theorem` = **365.007** ✓ (MA-3 at 365.005) |
| batch 5 → π₁(Sⁿ≥²), van Kampen, classification at 297/299 | **not declines at all** — see below |

**Batch 5 needs stating plainly, because the brief expected declines that are not
there.** `the-fundamental-group-of-the-circle` has only four declines and none
concerns those three results. They were excluded at *source-range selection*, not
at disposition: the Hatcher locator is "Chapter 1, Section 1.1, subsection *The
Fundamental Group of the Circle*, pp. 29–33, from Theorem 1.7 through Theorem
1.10", which stops before §1.2 where van Kampen lives. The exclusion is recorded
in prose in `research/frontier-15-batch-5.notes.md` (lines 452–455), naming
`the-seifert-van-kampen-theorem` and `classification-of-covering-spaces`, both of
which exist at **297** and **299**. So the destinations are right and the
reasoning is sound — but it lives in the batch notes, where no gate reads it, and
not in the coverage file, where every other decline lives. **Recorded as a
finding, not repaired**, because retro-fitting harvest rows for headings the
declared range never covered would be inventing a harvest.

**65 stand with a real destination named only in prose.** These are checkable and
I checked the ones with a unique referent — e.g. batch 2's three PID-module
declines say "the next module page" / "the next A page where the PID structure
theorem is proved", which is `modules-over-a-pid-and-canonical-forms` at order
**110**, the immediate next A page after 108. Correct, and unnamed.

Two more I verified rather than accepted:

- **Batch 2, SL₂(ℤ/3) (Conrad Examples 1.6 and 5.7), twice:** "the
  special-linear-group definition and matrix infrastructure … occurs after this
  page's reading-order slot". **True.** There is no `def-special-linear-group`
  anywhere on disk, and `matrices-and-the-matrix-of-a-linear-map` is order **78**
  against the Sylow page's **70**. Stands.
- **Batch 2, Conrad Theorem 2.8 (Sylow counts in Aff(F) for a finite field):**
  "requires finite fields of nonprime order, which occur after this page". This
  looked like an overturn — `thm-existence-of-finite-fields` and
  `thm-uniqueness-of-finite-fields` are published. But
  `algebraic-extensions-degree-and-finite-fields` is order **96**, after the Sylow
  page's **70**. **Published and in closure are different facts**, which is the
  converse case the brief names. Stands.

**Batch 4's descriptive-set-theory declines stand on the permitted ground.** "The
library has not reached that subject area" is true: nothing in `library/`
mentions descriptive set theory, and `rem-the-borel-hierarchy-never-stabilizes`
exists on disk as a `proved_here: false` record, which is the documented fallback
working as designed.

---

## 5. Results with a real statement and nowhere to put them — owner decisions

These are recorded, not invented around: no page in `research/plan-spec.json`
could host them, and step 9 does not mint pages or change reading order. This is
a **candidate list from a keyword pass over the decline reasons plus per-item
checks**, not a count I would defend to the last row; the seven below I verified
individually against the plan.

| result | declining batch | what the plan lacks |
|---|---|---|
| **Solovay–Strassen primality test** (Shoup Ex. 12.6) | 1 | no `primality*`, `probabilistic-primality*` or cryptography page exists |
| **Character sums over a complete residue system** (Gorodnik Ex. 1.8, §2, Thm 2.1) | 1 | no `character-sum*` page |
| **Which integers occur as Sylow counts** (Conrad Rem. 2.9) | 2 | genuinely open research; no destination and none should be invented |
| **The free ring on a set / monoid ring / tensor algebra** (Cheng Ex. 2.3) | 7 | verified: no `free-ring*`, `monoid-ring*` or `tensor-algebra*` page. The decline's own claim that the library's ring development builds commutative polynomial rings only is **true of disk** |
| **Lawvere theories, category of models for an algebraic theory** (Riehl 5.5.5, 5.5.vii) | 7 | no `lawvere*` or `universal-algebra*` page |
| **Affine spaces** (Riehl 5.2.1–5.2.3) | 7 | no `affine-geometry*` or `affine-space*` page |
| **Free-category monad on quivers** (Riehl 5.1.4(vi)) | 7 | no quiver page; and the published adjunction is B-page-homed, so it would need a **re-home**, which is owner-only |

The Giry monad and Markov kernels (Riehl 5.1.5(iv), 5.2.11(iv)) are a near miss
worth naming: `markov-kernels-and-markov-chains` is planned at **288.125**, well
before MA-3 at 365.005, so the prerequisites will exist — but they are not in
MA-3's `requires`, and no *categorical-probability* page exists to host the monad
itself. The decline is right today.

---

## 6. The two open ledger rows

### B41 — `rem-plane-star-shaped-and-convex-dictionary`, Lebl citation → **CLOSED `fixed`**

Its recorded condition was a fresh `url-sweep --recover --fail-on-dead` over its
batch, closing only if the Lebl citation answers alive.

Re-swept: **8/8 live, 0 failed**, artifact
`research/frontier-15-step9-b41-url-liveness.json`, which additionally reports the
archive snapshot as `superseded`.

What had changed since the row was opened is that the **okstate host outage
ended**. Commit `1be001f2` had already swapped the *coverage* row to the recovered
origin with a `fetch_verified` record of 2,078,845 bytes — but
`items/rem-plane-star-shaped-and-convex-dictionary.md` **was never swapped** and
still carried the dead archive URL. So the reader-facing citation stayed broken
while the artifact the gate reads was green. That gap is the finding.

Verified by hand at step 9:

| URL | result |
|---|---|
| `https://math.okstate.edu/people/lebl/osu5283-s20/ca.pdf` | **200**, `application/pdf`, **2,078,845 bytes** — matching the coverage row's `fetch_verified` byte count exactly |
| `https://web.archive.org/web/20260108042400if_/…ca.pdf` | **404** (it was 503 when the row was opened) |
| `https://web.archive.org/` | **503** — archive.org itself still degraded |

Under RECOVER BEFORE REPLACE this is a **URL swap on the item, not a re-source**:
same document, same source, no re-harvest, no provenance change. The item now
carries the coverage row's exact string, so the two artifacts no longer disagree.
The item rejudged (both lanes pass).

### f15-a-rr-005 — batch-2 generated boundary worksheets → **STAYS `open`**

Its recorded closing condition is a rewrite of the batch-2 boundary worksheets by
the owning Beta. No Beta runs at step 9, so **the condition is not met and the row
stays open deliberately.** It will fail the step-10 `--no-open` gate, and that is
the designed escalation: this is a row the owner should personally read.

What step 9 did establish, so it is not a bare "unfinished":

1. **The measurement in the row's own `prevention` field was implemented.** 454
   of batch 2's 720 boundary rows match a stock tail or the `is resolved in step
   X.Y:` frame under a conservative detector — 7 items fully generated, 81 partly.
   (The row's own count is 518; my stock-tail list is narrower, so treat 454 as a
   floor.)
2. **`boundary-audit` still reports 0 template clusters and 0 contradicted over
   those 720 rows**, confirming the interpolated title defeats its normalizer
   exactly as the row says.
3. **An independent targeted detector was run across all seven batches** for the
   one sub-class whose falsity is airtight — a `not_applicable` iff row on an item
   whose title or Statement carries two directions. It returned 18 candidates: **16
   over-fires and 2 real**, both in batch 2, both now repaired (ledger `f15-S9-006`):

   - `fs-finite-nilpotent-and-solvable-groups-coincide` — the refuted claim is an
     equality of classes, and the item's own step 1.1 says the forward inclusion
     holds and only the converse can fail. Rows rewritten `checked`, naming step
     1.1 (forward, true and cited) and step 2.1 (reverse, refuted by $S_3$).
   - `cor-classification-of-groups-of-order-one-hundred-five` — "exactly two
     isomorphism classes" carries an exhaustiveness obligation and a distinctness
     obligation, both discharged in its step 5.1. Rows rewritten `checked`.

4. **Neither concealed a mathematical defect.** Each item's own proof discharges
   exactly the obligation its row denied existed. So on the evidence available at
   step 9 the residue is **contract quality, not a hidden fatal defect** — which
   is why it is nonfatal, and why it is not the frontier-13/14 pattern where two
   and three false rows each hid a confirmed-fatal defect.

What remains is the ~450 generated rows themselves. Rewriting them at scale is
still the owning Beta's work with its sources to hand: a bulk rewrite by me would
reproduce the original defect in a new hand, which is the judgement Alpha-b
already put on the record and which I have no new evidence to overturn.

---

## 7. What was built, and its gates

Six items, all `status: draft`, all authored to step-5 standard:

| id | batch | page | provenance (statement / proof) |
|---|---|---|---|
| `def-centralizer-of-a-subgroup` | 2 | `sylow-theorems-and-nilpotent-groups` | literature-derived / not-applicable |
| `lem-centralizer-of-a-normal-subgroup-is-normal` | 2 | ″ | literature-derived / ai-altered |
| `lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup` | 2 | ″ | literature-derived / literature-derived |
| `thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group` | 2 | ″ | **ai-altered** (narrowed to finite) / literature-derived |
| `prop-complement-and-disjoint-union-axioms-for-a-lambda-system` | 4 | `sigma-algebras-and-borel-sets` | **ai-altered** (corrects the source) / ai-altered |
| `ex-the-group-action-monad-and-its-algebras` | 7 | `monads-comonads-and-their-algebras-examples` | literature-derived / literature-derived |

I authored every proof. Page sizes after: Sylow 46 (cap 60), MT-1 45, MA-3 B 14.
`splice-plan --batch 2/4/7 --update` was run, so plan and manifests agree.

### Risk review and refutation

Four of the six are `high` or `critical` in `risk-report.mjs` and carry a complete
`risk_review`. **The chartered Sol refuter lane is quota-locked until 2026-08-20**
— re-tested live at step 9 rather than assumed
(`research/frontier-15-dispatch/refuter-step9-risk-a.result.json`, exit 1, *"You've
hit your usage limit"*). The documented substitute was used: DeepSeek V4 Pro,
read-only and tool-less, context packed by `tools/pack-refuter-task.mjs`, split
into three dispatches so no pack exceeded the ~60 KB silent-truncation ceiling
(48.9 KB / 26.1 KB / 35.2 KB).

Per the ordering fixed in commit `efa3b0cb`, **each disposition was written from
my own verification before any refuter returned**; the refuters are corroboration
on the record. All three returned **exit 0 with no findings**:

- `step9-rr-hall` — *"No defect found in this 1 item."* Re-derived steps 1.1–11.1;
  confirmed the Dedekind substitution in step 7.1 discharges both hypotheses
  despite the variable clash ($A:=F$, $B:=C$, $C:=A$); confirmed step 9.1 uses **no**
  upper/lower central series equivalence; confirmed all 14 `[L#]` restatements
  with no widening; confirmed the narrowing to finite is faithful; re-instantiated
  all eight boundary rows as true, including the $Q_8$ witness; ran its own
  counterexample check over $C_2, S_3, S_4, D_8, Q_8, A_4, A_5$.
- `step9-rr-abel` — *"No defect found in this 1 item."* Independently confirmed the
  $n=1$ degeneration of step 3.1's characteristic chain and the $A_5\times C_2$
  witness.
- `step9-rr-mix` — *"No defect found in these 2 items."* Verified both λ-system
  directions and the ∅-padding in step 2.2; checked my counterexample family
  element by element; confirmed the monad's two algebra laws are *exactly*
  `def-group-action`'s two clauses, "not a weaker pair".

### Judge

Seven items rejudged (the six built plus `rem-plane-star-shaped-and-convex-dictionary`,
whose URL moved). **One rejection**, DeepSeek on the λ-system proposition:

> "Step 2.1 is placed after the 'Conversely' switch but cites step 1.1, which was
> proved only under the lambda-system assumption."

**Adjudicated `confirmed_nonfatal`** and repaired anyway — ledger `f15-S9-007`.
The mathematics is licensed (step 2.1 cites step 1.1 and `[L1]` and nothing else,
so the branch is unambiguous *from the citations*), but the lane read the prose
correctly: **precheck's canonical stratification orders steps by citation depth,
not by narrative direction**, so an iff proof's two branches interleave as
1.1/2.1/3.1 forward and 1.2/2.2/4.1 reverse, and step 1.2's opening "Conversely"
appears to scope everything after it. Repaired rather than closed because this is
step-9 text I had authored minutes earlier, not step-8 frozen text, so R1's
no-mutation rule does not bind. Every step now names its branch. Both lanes pass
the repaired text.

**Worth generalising, and it is in the ledger row:** any two-direction proof will
be interleaved this way, so the branch label has to be *inside each step*, never
in a heading or a single opening word.

### Gates, all green at `9-scope`

```
precheck            4269 checked, 0 failing
depcheck / fwdcheck / extcheck / rendercheck / prosecheck / depsource   OK
manifest-integrity  no scope drift        splice-verify  16 pages, plan and manifests agree
merge-proof-contracts  329 scoped items from 7 batch contracts
proof-contract --strict   0 errors, 329/329
finite-smoke        0 errors, 4 checks    risk-report --require-reviewed  0 errors, 329 routed
boundary-audit --fail-on-contradicted --fail-on-template   rc=0
citation-fidelity --fail-on-missing-quote                  rc=0
gate-liveness       all live
judge-closure       398/398 current pairs; 0 rejudge, 0 unadjudicated, 0 open fatal; closed: true
defect-ledger check 91 rows, 0 errors
coverage-checklist  7/7 batches, 0 errors (740 harvested results)
```

`defect-ledger check --no-open` — the step-10 form — fails on **f15-a-rr-005
alone**, by design (§6).

---

## 8. Ledger rows written

Seven new rows, all `caught_at_stage` `9-scope` except `f15-S9-007`
(`7-judge`), plus the two sweeps of pre-existing rows.

| id | class / subclass | disposition |
|---|---|---|
| `f15-S9-001` | richness / false-decline — Craven 2.13 | fixed (built, 4 items) |
| `f15-S9-002` | richness / false-decline — Mac Lane §VI.2 | fixed (built) |
| `f15-S9-003` | richness / false-decline — Dembo 1.1.36 | fixed (built) |
| `f15-S9-004` | accuracy / citation-misattributed — the source's Remark is wrong and the harvest repaired it silently | fixed |
| `f15-S9-005` | richness / false-decline — four reasons false of disk (`class:4-items`) | fixed |
| `f15-S9-006` | accuracy / false-boundary-disposition — two false iff rows (`class:2-items`), `recurrence_of: f15-a-rr-005` | fixed |
| `f15-S9-007` | accuracy / other — interleaved-branch scope ambiguity | fixed |
| `frontier-15-B41` | (existing) | **open → fixed** |
| `f15-a-rr-005` | (existing) | **stays open**, note extended with step-9 evidence |

Four of the seven carry a `prevention.kind: mechanical` ref. The one most worth
building is the detector behind `f15-S9-001`: **89 of 168 declines named neither a
page id nor an item id**, and `coverage-checklist` already requires a reason for
every `deferred`/`out-of-scope` — requiring that reason to contain a page id
resolvable in `plan-spec.json` or an item id on disk would have caught the Craven
hole at step 2 rather than at step 9.

---

## 9. Honest remaining gaps

1. **`f15-a-rr-005` is open** and will red-light step 10's `--no-open` gate. Not a
   mathematical blocker on the evidence in §6.4, but an owner read.
2. **Seven results with no destination in the plan** (§5). Each needs a page that
   does not exist, or — for the free-category monad — a **re-home** of a published
   B-page item, which is owner-only.
3. **86 declines still name no destination.** All were checked here and all stand,
   but nothing on disk records *where* they went, so the next sweep repeats this
   work. That is a tooling gap, not a content one.
4. **Batch 5's three excluded topology results live in the batch notes, not the
   coverage file** (§4). Correct destinations, invisible to every gate.
5. **The `stands-no-destination-in-plan` count of 21 is a candidate total**, from a
   keyword pass. The seven in §5 are individually verified; the rest are not, and
   I am not reporting 21 as a finding count.

Nothing in this report flips `status`. Step 10 makes the publishability call; on
the mathematics touched at step 9, judge closure is `closed: true` with zero open
fatal findings.
