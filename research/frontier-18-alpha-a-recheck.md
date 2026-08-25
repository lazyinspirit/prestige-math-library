# frontier-18 · Alpha group `a` · step-3 fix-pass re-check

Group `a` covers batches **6, 7, 8**. Reviewed at step 3 in
`research/frontier-18-alpha-a-step3-scaffold-review.md`; verdicts in
`research/frontier-18-alpha-a-step3-verdicts.json`, updated by this dispatch.

Every disposition below was checked against the file as it stands now, not
against what the Beta reported. Where a claim was cheap to test against the
live source I tested it there too, because B6-1 was a source-fidelity finding
and re-checking it from the same notes that made it would prove nothing.

---

## 1. Findings, one line each

| id | batch | disposition | outcome |
|---|---|---|---|
| **B6-1** | 6 | `applied` | **confirmed** |
| **B6-2** | 6 | `applied` | **confirmed** |
| **B6-3** | 6 | `applied` (4 rows) + partial push-back (1 row) | **confirmed; pushback accepted** |
| B6-4 | 6 | `already correct` | **confirmed** — record only, no change requested, none made |
| **B7-1** | 7 | `applied` | **confirmed** |
| **B7-2** | 7 | `applied` | **confirmed in substance; one stated sub-claim is not true of disk** (below) |
| **B7-3** | 7 | `applied` (7 rows) + push-back (1 row) | **confirmed; pushback accepted** |
| **B7-4** | 7 | `applied` | **confirmed** |
| B8-1 | 8 | `already correct` (my own repair) | **confirmed** — still on disk, verified independently |
| B8-2 | 8 | `already correct` | **confirmed** |
| B8-3 | 8 | `already correct` | **confirmed** — the build is in place, positions 14/15 ahead of consumer 16 |
| B8-4 | 8 | decline accepted | **confirmed** — carried to the lead Alpha at step 4 |

One repair of my own, in §5.

---

## 2. Batch 6 — `the-divergence-theorem-and-classical-stokes`

### B6-1 · **confirmed**

Both halves are on disk and the source premise re-verified live.

*The row.* `research/frontier-18-batch-6.coverage.json` now carries
`Corollary 4.18 (the flux of the curl of a smooth vector field through any
closed surface is zero)` → `included` →
`cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`,
and the Theorem 4.17 row above it keeps `thm-the-divergence-of-a-curl-vanishes`.
The duplication is gone. I re-fetched the LibreTexts page in this dispatch and
the two statements read, verbatim:

> **Theorem 4.17:** For any smooth vector field **f**(x, y, z), ∇· (∇ × **f**) = 0.
> **Corollary 4.18:** The flux of the curl of a smooth vector field f(x, y, z)
> through any closed surface is zero.

The row's parenthetical is now the source's own sentence.

*The item.* `cor-the-flux-of-a-curl-through-the-boundary-of-a-glued-elementary-solid-vanishes`
sits at **position 33**, directly after
`cor-a-divergence-free-field-has-zero-outward-flux-through-a-glued-elementary-solid`
(position 32) as required. The A page is **45 items**.

- **No forward reference.** Its five in-run dependencies sit at positions 1, 6,
  27, 29 and 32, all earlier. The three external ones
  (`def-finitely-patched-regular-surface-and-integrals`,
  `def-ck-and-multi-index-notation-in-several-variables`,
  `def-euclidean-inner-product`) are `status: published` on disk, checked
  individually.
- **The title does not overclaim.** Corral says "any closed surface"; the item
  says "the boundary of a glued elementary solid", which is what the route
  delivers. That narrowing is the right call and it is what makes the item
  provable here.
- **$C^2$ is stated where it is used.** The strategy and the contract both put
  the hypothesis at the step that makes $\operatorname{curl}F$ a $C^1$ field,
  not inherited silently from the identity, and derivation `why-c1-is-not-enough`
  records what fails at $C^1$.
- **The contract is real, not templated.** Seven citations, six derivations,
  and eight boundary rows of which four are `checked` with concrete evidence and
  four `not_applicable` with reasons specific to this item — the `iff-reverse`
  row states the actual false converse rather than "asserts no equivalence".
  `boundary-audit.mjs` puts the new entry in no template cluster and raises no
  contradiction.
- The three published quotes occur verbatim in the items on disk
  (`def-finitely-patched-…` line-matched, `def-ck-and-multi-index-…`
  line-matched, `def-euclidean-inner-product` at line 51).

### B6-2 · **confirmed**

The row is present, `out-of-scope`, with the reason I proposed: CLP-4 normalises
a component and integrates the other two, this page reaches the vector potential
by the homotopy formula, so the lemma is a step of a route this page does not
take. I re-fetched `sec_graadDivCurl.html` and Lemma 4.1.13 reads

> If the vector field **B** has a vector potential, then, in particular, there is
> a vector potential **A** for **B** with A₃ = 0.

The harvest parenthetical ("a vector potential may be chosen with a specified
vanishing component") is faithful. Re-enumerating §4.1's named results against
the harvest, all thirteen — Definitions 4.1.1 and 4.1.11, Theorems 4.1.3–4.1.7,
4.1.12 and 4.1.16, Lemmas 4.1.8, 4.1.13, 4.1.20 and 4.1.25 — now carry a row.

### B6-3 · **confirmed on four rows; the partial push-back is accepted**

Four rows are `already-published` naming the item, as required
(`def-finitely-patched-regular-surface-and-integrals`,
`def-surface-area-and-scalar-surface-integral-of-a-patch`,
`def-oriented-unit-normal-and-flux-of-a-surface-patch`, `ex-torus-surface-area`),
and all four items are `status: published`, checked individually. No row
anywhere in the file still carries a draft-state reason; the file now has 18
`already-published` rows.

**The push-back on CLP-4 Lemma 4.1.8 is right, and I verified it rather than
taking it.** I opened
`lem-cross-product-is-bilinear-alternating-and-orthogonal`: its Statement is
"the cross product is bilinear and alternating,
$\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to both
$u$ and $v$" — four claims, none of them the vector triple product expansion, and
its four proof steps derive exactly those four. A corpus search for the expansion
returns nothing. Marking the row `already-published` against that item would have
been an inaccurate citation, which is the class B6-1 was about; the Beta declining
to repeat it one source down is the correct instinct.

The split on the source's own sub-labels is enumeration, not invention:

- **4.1.8.a → `inline`** is true of disk. `cor-vector-forms-of-the-divergence-theorem`'s
  contract, derivation `rewrite-the-boundary-integrand` at step 2.2, reads "The
  scalar triple product identity rewrites $\langle F\times c,n\rangle$ as the
  determinant with columns $F$, $c$, $n$, and cycling those columns, an even
  permutation, turns it into $\langle c,n\times F\rangle$." The identity is used
  here, from the published determinant identity, and not restated as an item.
- **4.1.8.b → `deferred`, destination `owner-decision`** is the honest
  disposition. It is cross-product algebra whose consumers on this page are nil —
  `lem-the-divergence-and-curl-of-a-cross-product`,
  `cor-the-curl-of-a-curl-of-a-c2-field` and
  `lem-curl-is-the-antisymmetric-part-of-the-total-derivative` are each scaffolded
  as direct coordinate expansions — and its natural home,
  `regular-surfaces-and-surface-integrals`, is published and not retrofitted. That
  is a result with a real statement and nowhere to put it, which is what
  `owner-decision` names; `coverage-checklist.mjs:255` accepts it as a literal.
  This is **not** the 2026-08-11 build rule biting: nothing on this page is
  blocked for want of it, so scaffolding it would be the padding the
  scaffold-richness rule forbids.

  It belongs on the lead Alpha's step-9 list as a scope denial with a named
  destination.

### B6-4 · **confirmed**

Record only; no scaffold change was requested and none was made. Still a step-9
check: if `library/not-proved-here/deferred-algebraic-topology.md` publishes
before step 10, the two `external_refs` entries go in then.

**Batch 6: ready for splice.**

---

## 3. Batch 7 — `lebesgue-measure-on-euclidean-space`

### B7-1 · **confirmed**

I re-derived the check rather than reading the count. Over all 60 entries of
`research/frontier-18-batch-7.proof-contracts.json`: **233 citations, every one
matching `^[FAL]\d+$`**, no label repeated inside an entry, and every fact token
appearing in a `derivations[].inputs` resolves to a citation declared in its own
entry — zero dangling references. No `T#`, `P#`, `C#`, `E#` or `X#` survives.

Batches 6 (51 entries) and 8 (81 entries) are clean on the same check, as my
step-3 report said.

### B7-2 · **confirmed in substance; one sentence of the notes is not true of disk**

The finding required a treatment that *states* the theorem, for three items.
That is now on disk, and I verified the sources themselves rather than the
harvest rows.

*Tao, GSM 126.* I fetched the PDF and read the pages. **Exercise 1.6.8
(Steinhaus theorem), printed p. 140**: "Let E ⊂ R^d be a Lebesgue measurable set
of positive measure. Show that the set E − E := {x − y : x, y ∈ E} contains an
open neighbourhood of the origin." **Exercise 1.6.25, printed p. 153**: part (i)
"there exists a cube Q ⊂ R^d of positive sidelength such that m(E∩Q) > (1−ε)m(Q)",
part (ii) the proof avoiding the differentiation theorem with the hint "reduce to
the case when E is bounded, then approximate E by an almost disjoint union of
cubes", part (iii) the alternate proof of Steinhaus. Both are exactly as the
notes quote them, and (ii)–(iii) are this page's route in the source's own words.

*Ye–Yu–Zhao, arXiv:2505.00556.* Fetched the HTML. **Theorem 1.1 (Steinhaus)**:
"Suppose A ⊆ R^n is Lebesgue measurable and has positive measure. Then the
difference set A − A := {x − y : x, y ∈ A} contains a ball with positive radius
whose center is at the origin." **Corollary 1.2**: "If A is a Lebesgue measurable
proper subgroup of R (view it as an additive group), then A has Lebesgue measure
zero." Both verbatim as recorded. It is stamped `kind: paper` and is not counted
as primary backing; the pair's three primary treatments (Hunter, Tao, Carlen) are
unchanged, so the two-independent-treatments rule is satisfied without it.

*The new harvest is faithful.* I enumerated Tao §§1.6.1–1.6.2 from the PDF
independently — 38 numbered items — and diffed against the 37 new rows. The only
numbered item in the section range absent from the harvest is **Exercise 1.6.28
(Weierstrass function)**, which is in §1.6.3, the section the locator explicitly
stops before. Two apparent gaps are not gaps: Corollary 1.6.10 sits at printed
p. 135, in §1.6's unnumbered preamble and outside the range, and "Lemma 1.6.5" on
p. 145 is Tao's own cross-reference to Exercise 1.6.5, not a separate statement —
it occurs exactly once in the book and states nothing. The 33 `deferred` rows all
name a plan-spec page that resolves; `coverage-checklist --require-destination`
is clean.

*Provenance.* `thm-steinhaus-difference-set-contains-a-ball` is in the notes'
`literature-derived` block on Tao Ex. 1.6.8 with Ye–Yu–Zhao Thm. 1.1 corroborating
the ball form the title uses — correct, since Tao writes "open neighbourhood of
the origin" and the item writes "open ball about the origin".
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn` stays `ai-altered`,
which is right: the source states the null-set contrapositive over $\mathbb R$ and
the item states the positive form over $\mathbb R^n$.

**Not true of disk:** the notes say "the Wikipedia row now backs no item". Two
Wikipedia rows still carry `included` naming
`thm-steinhaus-difference-set-contains-a-ball` and
`cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn`. I am **not**
requiring a change — the rows are true statements about what that article
contains, and the finding's requirement was that the three items stop resting on
Wikipedia *alone*, which they now do. It is recorded here because a step-5 author
reading the notes could take "backs no item" as settled and it is not: the
reader-visible `sources.references` for those two items must be Tao and
Ye–Yu–Zhao, never the encyclopedia entry.

`source-fetch-check` reports 5/5 verified and `url-sweep --recover
--fail-on-dead` reports 14/14 live across all three of my batches.

### B7-3 · **confirmed on seven rows; the push-back is accepted**

The seven `already-published` re-dispositions are on disk exactly as tabled
(Hunter §2.3 and Definition 2.8 → `def-caratheodory-measurable-set`, Hunter
Theorem 2.9 → `thm-caratheodory-outer-measure-theorem`, Tao Exercise 1.2.1 →
`cex-rational-points-in-unit-square-have-no-jordan-content`, Tao Remark 1.2.4 →
`def-outer-measure`, Tao Lemma 1.2.5 → `def-metric-outer-measure`, Carlen
Theorem 1.3 → `thm-caratheodory-extension-theorem`).

**The push-back on Tao Exercise 1.2.4 is right and I verified it from disk.**
`ex-distance-to-a-set-is-attained-on-a-compact-set` is titled and stated for
"two disjoint **compact** sets", and its Example section says so in two numbered
clauses; `cex-set-distance-is-not-a-metric` refutes separation for two disjoint
**closed** subsets of $\mathbb R$ at distance $0$. The compact-plus-closed
statement between them is on neither, and a corpus search for a positive-separation
result of that shape returns only proof-internal uses
(`lem-metric-outer-measure-boundary-layer-continuity`,
`prop-closed-sets-are-caratheodory-measurable-for-metric-outer-measures`), never a
statement. `already-published` would have been the inaccurate citation this stage
exists to catch. Declining to build it here is also right: this page separates
compact from closed through Heine–Borel and $\sigma$-compactness and needs
nothing from it, so a metric-topology item on a Lebesgue-measure page would be
the silent seam. `deferred → owner-decision` accepted, and it goes on the lead
Alpha's step-9 list with B6-3's 4.1.8.b.

### B7-4 · **confirmed**

`thm-lebesgue-inner-regularity-by-closed-and-compact-sets` now reads "Assuming
countable choice, the Lebesgue measure of a measurable set is the supremum of the
measures of its compact subsets", carries `def-countable-choice` in `deps`, and
its `strategy` opens by attributing the hypothesis to the cited Littlewood
theorem. Both neighbours match: `thm-lebesgue-outer-regularity-for-arbitrary-subsets`
and `thm-littlewood-characterisations-of-lebesgue-measurability` each open
"Assuming countable choice" and each carry `def-countable-choice`. The three
statements now declare one scope, which is what the finding asked for.

The page is unchanged at **55 A items** — B7-2 added sources, not items.

**Batch 7: ready for splice.**

---

## 4. Batch 8 — both pairs

No finding was routed to Beta-8 and no scaffold file of its was changed; I
confirmed that rather than assuming it.

- **B8-1 · confirmed.** My own step-3 repair survives. A sweep of every item in
  all four manifests of `research/frontier-18-batch-8.pages.json` finds **zero**
  `deps` arrays containing `cex-partial-derivatives-without-continuity`; both
  `fs-separately-real-analytic-functions-are-jointly-continuous` and
  `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`
  carry seven deps. The `fs-` contract's facts are `F1`–`F7`, contiguous, and
  all 81 entries of the batch match the `^[FAL]\d+$` grammar with every
  derivation input resolving. The hand-renumbering is clean.
- **B8-2 · confirmed.** Record only; the six deps and their home page are
  published and cited as ordinary published dependencies.
- **B8-3 · confirmed.** The scaffold builds the prerequisite instead of citing
  the design's phantom: `lem-plane-exterior-of-a-closed-disc-is-path-connected`
  at position 14 and `thm-complement-of-a-compact-plane-set-has-one-unbounded-component`
  at 15, with their consumer `thm-winding-number-zero-unbounded-component` at 16.
  Correcting the CA-7 design line is the lead Alpha's step-4 edit.
- **B8-4 · confirmed.** The decline of the spec edit stands; the unused
  `fubini-and-change-of-variables` prerequisite is recorded for the lead Alpha at
  step 4 and `validate-plan` passes.

The step-5 authoring obligations Beta-8 transcribed from my report (A1–A6) match
what I wrote, including the one that matters most: the (ii)⇒(iii) arrow of
`thm-homological-simple-connectivity-equivalences` must **not** cite item 38.

**Batch 8: both pairs ready for splice.**

---

## 5. The one repair I made in this dispatch

`research/frontier-18-batch-7.coverage.json`, Tao's locator. It claimed
"§1.6.1 … and §1.6.2 … **complete**, printed pp. 137–155 (PDF pp. 153–171),
Theorem 1.6.11 through Exercise 1.6.27". §1.6.1 begins at printed **p. 136** — I
located the heading at that page's character offset 732 — and Exercise 1.6.5, at
offset 1671 on the same page, is inside §1.6.1 and **is** harvested. So the
harvest was complete and the locator understated it, and "Theorem 1.6.11 through
Exercise 1.6.27" named the wrong first item. Corrected to

> printed pp. 136–155 (PDF pp. 152–171), Exercise 1.6.5 through Exercise 1.6.27

`coverage-checklist --require-destination` re-run clean afterwards. Nothing
mathematical changed; a locator that does not contain the rows harvested under it
is unreproducible for the next reader, which is the whole value of the harvest.

---

## 6. Gates re-run in this dispatch

| gate | result |
|---|---|
| `coverage-checklist.mjs --require-destination` on batches 6, 7, 8 | **pass** — 94 / 166 / 163 harvested results, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json` | **pass** — 796 scoped items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | **pass** — acyclic and consistent (validates the spec's current state; these manifests splice at step 4) |
| `url-sweep.mjs --coverage <6,7,8> --recover --fail-on-dead` | **pass** — 14/14 live, 0 failed, 0 suspect |
| `source-fetch-check.mjs --coverage <batch 7>` | **pass** — 5/5 fetch-verified |
| `boundary-audit.mjs` on batches 6 and 7 | no contradicted dispositions; batch 6's 11 template clusters are all pre-existing `iff-*`/`empty` rows on non-equivalence statements, and the new B6-1 entry is in none of them |
| contract label sweep, batches 6/7/8 | 51 + 60 + 81 entries, every `fact` matching `^[FAL]\d+$`, no in-entry duplicates, every derivation input resolving |

---

## 7. Per-pair verdict

| pair | verdict |
|---|---|
| `the-divergence-theorem-and-classical-stokes` | **ready for splice** |
| `lebesgue-measure-on-euclidean-space` | **ready for splice** |
| `the-winding-number-and-the-global-cauchy-theorem` | **ready for splice** |
| `holomorphic-functions-of-several-variables` | **ready for splice** |

`research/frontier-18-alpha-a-step3-verdicts.json` is updated to `sufficient` on
all four in this dispatch, on the checks above and nothing else.

## 8. Carried forward, not blocking

1. **Two scope denials with named destinations, for step 9.** CLP-4 Lemma
   4.1.8.b (the vector triple product expansion) and Tao Exercise 1.2.4 (two
   disjoint closed sets, one compact, are positively separated). Each has a real
   statement, no consumer in this run, and a natural home that is already
   published — so each is an owner decision, not a page to invent.
2. **The Wikipedia rows in batch 7**, §3 above: the notes overstate what changed,
   and `sources.references` for the two Steinhaus items must name Tao and
   Ye–Yu–Zhao.
3. **Batch 6's `iff-reverse` template clusters** (11 and 9 members) are honest —
   an equivalence row on a statement that asserts no equivalence — but they are
   the shape the owner's rule warns about, so the step-6 reader should sample two
   or three rather than trust the count.
