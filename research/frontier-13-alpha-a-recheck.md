# frontier-13 — Alpha group A, step-3 → 4 re-check

**Group A (LEAD): batches 1, 2, 5 — five A/B pairs, ten pages.**
Alpha: Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window.
Every verdict below was confirmed against the artifact on disk. No Beta's summary
of its own repair was accepted as evidence; in two cases the notes claim and the
disk agree, and in two cases the fix was never attempted at all.

I authored nothing and edited no batch file, no `plan-spec.json` entry and no
published item.

---

## 0. Verdicts

| batch | pair | verdict | blocking work |
|---|---|---|---|
| 1 | `symmetric-polynomials` (58) | **not-ready** | F1.2, F1.3 — never attempted |
| 1 | `algebraic-extensions-degree-and-finite-fields` (96) | **ready-for-splice** | — |
| 2 | `primitive-roots-and-unit-groups-modulo-n` (57.001) | **not-ready** | one item of F2.1 outstanding |
| 2 | `semidirect-products-and-automorphism-groups` (68) | **ready-for-splice** | — |
| 5 | `tensor-products-of-modules` (106) | **ready-for-splice** | — (one step-5 obligation recorded) |

**F5.1, the one that mattered, is fixed and I confirmed the mathematics, not just
the graph.** The two `not-ready` verdicts are not Beta failures: in both cases the
orchestrator's fix brief did not contain the finding. See §5.1 — this is a routing
drop, and groups B and C should be checked for the same shape.

---

## 1. Finding-by-finding

| id | batch | verdict | evidence |
|---|---|---|---|
| **F5.1** out-of-closure deps | 5 | **fixed** | §2 |
| **F5.2** deferrals name no licensing page | 5 | **fixed** | §2.3 |
| **F5.3** 41 empty contract citation arrays | 5 | **fixed** | §2.4 |
| **F1.1** two false resultant declines | 1 | **fixed** | §3 |
| **F1.4** Conrad *Finite Fields* harvest 13/25 | 1 | **fixed** | §3.3 |
| **F2.1** §C.III skipped, capstone missing | 2 | **partially fixed** | §4 |
| **R2.1** root-bound rebind | 2 | **fixed** | §4.2 |
| **F1.2** Grinberg locator self-contradictory | 1 | **not fixed** | §5 |
| **F1.3** Grinberg §7.1 harvest 9/17 | 1 | **not fixed** | §5 |

---

## 2. Batch 5 · `tensor-products-of-modules` — **READY-FOR-SPLICE**

### 2.1 F5.1 — fixed, and the substitution is real

`def-tensor-product-of-modules-by-generators-and-relations` now declares

```
def-balanced-and-bilinear-maps
def-free-module-on-a-set-and-standard-basis      ← was def-free-abelian-group
thm-universal-property-of-free-modules           ← was thm-abelianisation-of-a-free-group-is-free-abelian
def-generated-subgroup
def-quotient-group
```

Both new targets are homed on `free-modules-and-exact-sequences` (104), which is
the page's first `requires` entry. `free-abelian`, `free-group` and
`abelianisation` now appear **zero times** in `frontier-13-batch-5.pages.json`.
No `requires` edge to `free-groups-and-presentations` was added, as instructed.

**I re-ran my step-3 disk-home closure sweep over all ten pages in my group.** All
450-odd dependency edges resolve, every same-page dependency precedes its consumer,
and there are **0 out-of-closure edges and 0 unresolved ids**. The one offender in
the run is gone and the repair introduced none.

### 2.2 The identification — stated, and the contract moved with it

This was the named challenge, so I checked it three ways rather than reading the
Beta's claim.

The **title changed with the deps**: it now reads "…from the additive group
underlying the free $\mathbb Z$-module on $M\times N$…". That phrasing is better
than what I asked for — it works with the underlying additive group of
$\mathbb Z^{(M\times N)}$ directly, so the construction never needs the
identification as a lemma.

The **proof-contract input map moved with it too**, which is the failure shape the
orchestrator caught in batch 6. `thm-universal-property-of-module-tensor-products`
now carries [L3] `def-free-module-on-a-set-and-standard-basis` and [L4]
`thm-universal-property-of-free-modules`, each quoting the published Statement in
full. The stale free-group facts are gone, not orphaned.

The strategy states the target-side step explicitly — "View the target abelian
group as a $\mathbb Z$-module" — and **this matches published, judged precedent**:
`lem-every-abelian-group-embeds-in-a-divisible-group`, on the very page being
cited, opens `**Given:** An abelian group $A$, viewed as a $\mathbb Z$-module` with
no citation, and carries `verification.verified … scope: published-audit`. So batch
5 is following the library's established convention, not waving something through.

**One step-5 obligation, recorded rather than blocking.** The strategy's sentence
"regard its underlying additive group explicitly as the free abelian group on that
set" is not actually the step the proof needs, and naming it may crowd out the step
that is. `thm-universal-property-of-free-modules` yields a unique **$R$-module
homomorphism**; the theorem concludes a unique **group homomorphism**. At
$R=\mathbb Z$ those coincide because additivity forces $\mathbb Z$-linearity — and
that equivalence appears nowhere in the item, the strategy, or the contract. It is
a 30-second step and therefore nonfatal, but it is the actual hinge of the whole
substitution and must appear as a numbered step, not as a phrase. Flagging it now
because at step 8 it would be unfixable.

### 2.3 F5.2 — fixed, both licensing pages verified in the spec

Both deferral rows now name a destination, and I checked the ids against
`research/plan-spec.json` myself rather than taking the row's word:

| deferral | names | in spec |
|---|---|---|
| Stacks 10.39.3, directed colimits of flat modules | `subobject-lattices-generators-and-the-grothendieck-axioms` | ✓ order **365.017** |
| Barr §5.19, Tor formulation of flatness | `tor-flatness-and-global-dimension` | ✓ order **365.055** |

Both reasons now say where the result lives and that it is not silently assumed
here. A deferral that names a destination is recoverable; these are.

### 2.4 F5.3 — fixed, and the citations are not hollow

41 contracts, **0 empty**, 147 citations — the claimed figures are exact. Because a
populated-but-hollow contract passes the same count check as a real one, I
extracted every citation whose source is a published item and matched the quote
against the item file on disk:

**51 published-target quotes, 51 exact matches, 0 mismatches, 0 unresolved
sources.** These are genuine multi-line Statement and Definition clauses carrying
hypotheses and displays, not labels. At step 3 batch 5 had pre-verified none of
these; it has now pre-verified all of them.

### 2.5 Nothing else moved

The Beta's repair record correctly reasons that a dependency swap changes the
licensed in-library route and neither mathematical claim, so no provenance
retag and no coverage `included` transition were owed — and none were made. Item
counts are unchanged at 38 A / 11 B. The guard item, its $2\otimes1=1\otimes2$
failure witness, the construction/module-structure separation, the
`already-published` enough-injectives disposition and the
$\mathbb C\otimes_{\mathbb R}\mathbb C$ licensing are all still in place. **No
split** (38 of 60).

---

## 3. Batch 1 · `symmetric-polynomials` — **NOT-READY**

### 3.1 F1.1 — fixed, exactly and without smuggling

The three items I named are present at positions 26–28, each immediately after the
theorem it consumes:

| item | title carries | route |
|---|---|---|
| `thm-monic-resultant-as-a-double-root-product` | "For monic $f,g$ … $\operatorname{Res}(f,g)=\prod_i\prod_j(\alpha_i-\beta_j)$" | ← pos 25 root-product thm + `def-polynomials-that-split-and-splitting-fields` |
| `cor-monic-resultant-symmetry` | "For monic $f,g$ of degrees $n,m$ … $(-1)^{mn}\operatorname{Res}(g,f)$" | ← pos 26 + `thm-splitting-fields-exist-for-nonzero-polynomials` |
| `cor-monic-resultant-is-unchanged-modulo-f` | "For monic $f$, if $g-g_1=qf$ …" | ← pos 25 + `def-polynomial-evaluation-and-root` |

Checked against the four things the dispatch asked:

- **They follow from the product definition.** Every one routes through
  `thm-monic-resultant-root-product-and-common-root-criterion`, i.e. through
  $\prod_i g(\alpha_i)$, which is Milne's 4.35(b). Correct.
- **No Sylvester matrix is smuggled in.** The word does not occur in any of the
  three strategies, and no dependency reaches order 82. `cor-monic-resultant-symmetry`
  takes a splitting field of $fg$ and reverses $mn$ differences; that is Milne's
  one-line argument, not a determinant one.
- **`cor-monic-resultant-symmetry` states "both monic".** This was my specific
  worry — $\operatorname{Res}(g,f)$ is undefined under `def-monic-resultant` unless
  $g$ is monic. The title reads "For monic $f,g$". Correct.
- **The Sylvester decline still stands, and is now recorded in the right place.**
  The Milne harvest has zero declines (all 10 rows `included`); the determinant
  decline has moved to the Conrad row "Determinant formulas for the first power
  sums", reasoned as *"the determinant page is later than order 58 and outside this
  page's declared prerequisite closure."* That is the true reason I confirmed at
  step 3, replacing the false one.

Coverage rows retired as required: Prop 4.35(a) → `included | cor-monic-resultant-symmetry`,
Prop 4.35(c) → `included | cor-monic-resultant-is-unchanged-modulo-f`, and the
defining display → `included | thm-monic-resultant-as-a-double-root-product`.

Component provenance is recorded for all three on both axes in the notes
(`literature-derived` statement / `ai-altered` proof) with a per-item rationale.
**No statement is `ai-generated`**, so the load-bearing prohibition is not engaged.
Each has a contract with two disk-verified citations.

**Ids versus content: all three are honest.** Each says "monic" in its own id, which
is the restriction that distinguishes it from Milne's general statement. No id
overclaims.

### 3.2 F1.2 and F1.3 — NOT FIXED, and not attempted

The Grinberg locator is **byte-identical to step 3**:

> `Chapter 7, Section 7.1, printed pp. 434-449, in full; stopping before Section 7.2`

Still self-contradictory — §7.2 begins on printed p. 449, which the range includes.
The harvest still records **9 rows against 7.1.1–7.1.17**. Convention 7.1.1,
Def 7.1.2, Ex 7.1.3, Prop 7.1.4, Prop 7.1.5, Thm 7.1.6, Def 7.1.7, Def 7.1.8,
Def 7.1.9, Ex 7.1.10 and Lemma 7.1.17 remain undisposed.

**This is worse than an artifact tidy, and I want to be precise about why.** The
notes' provenance table still credits

- `def-monomial-symmetric-polynomials` → "DG-7's orbit sums indexed by partitions"
  (= Grinberg **Definition 7.2.4**), and
- `thm-monomial-symmetric-polynomials-form-a-basis` → "DG-7's basis result"
  (= Grinberg **Theorem 7.2.7(a)**),

both tagged `literature-derived`, while the source ledger entry for DG-7 at notes
line 152 still declares the read range as "§7.1 … stopping before §7.2". **Two
items claim source backing from a range their own source declaration excludes.**
That is a provenance-integrity defect, not a formatting one, and
`coverage-checklist.mjs` cannot see it — it checks that the rows present are
disposed, never that the declared range contains the results the items are credited
to.

The Beta's repair record contains exactly two sections, "F1.1 — monic resultant
consequences restored" and "F1.2 — Conrad finite-fields harvest completed". The
second is my F1.4. My F1.2 and F1.3 appear nowhere. See §5.1.

**Remaining work, exactly:** extend the DG-7 locator (both in the coverage file and
in the notes source ledger) to §7.1–§7.2 through Theorem 7.2.7; add the eleven
missing §7.1 rows; add §7.2 rows 7.2.1–7.2.9 with **7.2.4 → `def-monomial-symmetric-polynomials`**
and **7.2.7 → `thm-monomial-symmetric-polynomials-form-a-basis`**. §7.3 stays out.
No item, dependency or proof changes — this is a scaffold-artifact repair and costs
nothing beyond the edit, which is the whole reason to do it before step 4.

### 3.3 F1.4 — fixed (order 96)

Conrad *Finite Fields* went **13 → 25 rows** over the declared "§§1–2 and Appendix A
in full": 12 `included`, 12 `inline`, 1 `already-published`, **zero declines**, every
row disposed, no decline missing a reason. The 12 added Example/Remark rows are
exactly the ones I enumerated. The order-96 pair is otherwise untouched and stays
**ready-for-splice**; **no split** (35 of 60), holding the cut line I recorded at
step 3.

---

## 4. Batch 2 · `primitive-roots-and-unit-groups-modulo-n` — **NOT-READY**

### 4.1 F2.1 — partially fixed

**The hypotheses survived into the Statement.** This was the dispatch's named worry
and the run's most common failure shape, so it is the first thing I checked. The
title of `thm-eulers-criterion-for-binomial-congruences` reads:

> "if $n$ has a primitive root, $\gcd(a,n)=1$, and $m\ge1$, then $x^m\equiv a\pmod n$
> is solvable if and only if $a^{\varphi(n)/\gcd(\varphi(n),m)}\equiv1\pmod n$"

All three of Hackman's hypotheses — primitive root, coprimality, positive exponent —
are present in the title itself, not just the strategy. The strategy carries the
index-calculus route and explicitly retains the $n=1$ and $m=1$ endpoints. Its five
dependencies are three earlier same-pair items plus two published items in closure;
its contract has five citations, and the two published ones match disk exactly.
Provenance is `literature-derived` / `ai-altered`, recorded inline on the item.

**§C.III's other headings all got dispositions**, which was the dispatch's second
question. The locator was rewritten to
`§C.III (C.III.1–C.III.2 and the C.III Exercises heading)` and the harvest went
31 → 35 rows. All four §C.III rows are disposed, and both `out-of-scope` rows carry
a reason about that specific result rather than a reused excuse.

**The Legendre specialisation was correctly not imported** — `legendre` occurs zero
times in the batch's pages file, and both §C.III declines name
`quadratic-residues-and-the-legendre-symbol` as the home for the quadratic cases.

**What is outstanding.** F2.1 named **two** items; the page went 26 → **27**, not 28.
`cor-number-of-solutions-of-a-binomial-congruence` — when solvable, the solution
count is exactly $\gcd(\varphi(n),m)$ — was not added. This is not a large gap and
it is not a mathematical error, but it should be closed now rather than at step 5:

- The machinery is already cited. `thm-linear-congruence-solvability-and-solution-count`
  is **already a declared dependency of the new theorem**, and that published item
  supplies the count as well as the solvability. The corollary is one step from
  material the page has in hand.
- The page is currently asymmetric. It carries
  `cor-power-congruence-solution-count-modulo-a-prime` — the $a=1$, prime-$n$
  **count** — and now a general **solvability** criterion, but no general count. The
  narrower result states more than the general one.

One corollary, at scaffold cost. After step 4 it is a rewrite.

### 4.2 R2.1 — fixed

`polynomial-rings-and-roots` (52) is present in the order-68 `requires` in **both**
`plan-spec.json` and the batch pages file. `lem-power-congruence-root-bound-modulo-a-prime`
now cites `thm-root-bound-for-polynomials-over-a-domain` and no longer re-derives
coefficient arrays; its strategy routes $\mathbb Z/q\mathbb Z$ → field → domain →
published root bound applied to $X^d-1$.

**I checked this for the batch-6 failure shape — a changed Statement whose
dependency set did not move with it — and it is clean, contrary to my first read.**
The lemma needs an *integral domain* and declares `lem-field-is-a-commutative-ring`,
whose name suggests it supplies only a commutative ring. It does not: its title is
"Every field is a commutative ring with $1\ne0$; **it is an integral domain**, and it
is a commutative division ring", and clause 2 of its Statement says so. The
dependency set is sufficient as declared.

**This also withdraws a step-5 obligation I recorded at step 3.** My §3.1 note that
the field-to-domain step "is not currently in the contract's inputs" and "must
appear as a step" was wrong — I reasoned from the item's short name instead of
opening it. The dependency already carries the domain clause; no inline derivation
is owed. `cor-unit-group-modulo-prime-is-cyclic` is clean for the same reason.

`semidirect-products-and-automorphism-groups` stays **ready-for-splice**; **no
split** (23 of 60). My two §4.3 notes carry forward unchanged as step-5 reconcile
items, neither worsened by the repair: `thm-automorphisms-of-a-finite-rank-free-abelian-group`
still under-declares what makes $\mathbb Z^n$ free of rank $n$, and its strategy now
explicitly says "define the pre-matrix notation explicitly rather than citing the
later matrix page", which honours the $GL_n(\mathbb Z)$ point I raised.

---

## 5. For the orchestrator

### 5.1 A routing drop lost two findings, and it is checkable in one pass

My step-3 report listed nine findings, F1.1–F1.4, F2.1, F5.1–F5.3 and R2.1. The fix
brief written to Beta 1 contained **two** items: F1.1, and a section headed "F1.2"
that is in fact my **F1.4** (the order-96 Conrad harvest). My actual F1.2 and F1.3 —
both on `symmetric-polynomials`, both Grinberg — were **renumbered out of existence**
and never reached the Beta. Beta 1's repair record uses the brief's numbering, so it
executed its brief faithfully and completely. The defect is upstream of it.

Batch 2 shows a milder version of the same: F2.1 named two items, the brief said
"Add it", and one item arrived.

**Recommended before step 4:** diff each group's step-3 finding ids against the
finding ids named in the corresponding fix brief, and re-check by name in groups B
and C. Renumbering findings between report and brief is what made this invisible —
the brief's "F1.2" collided with a real, different F1.2, so the loss looked like a
completed item. Carrying my ids verbatim into the briefs would have prevented it.

### 5.2 "0 empty citations" conflates two different things

Across my three batches: **594 citations, 0 empty**. Split by target:

| batch | published-target | quote matches disk | in-pair scaffold |
|---|---|---|---|
| 1 | 98 | **98** | 120 |
| 2 | 136 | **136** | 93 |
| 5 | 51 | **51** | 96 |

Every one of the **285** published-target quotes matches the item file on disk
byte-for-byte after whitespace normalisation, with zero unresolved sources. That is
a genuinely strong result and it is the answer to the dispatch's hollowness
question — these are not placeholders.

But the other **309** cite items that **do not exist yet**, and their "quote" is
necessarily the planned item's *title*, because there is no text to quote. That is
the honest thing to record at scaffold time and I am not calling it a defect. It
does mean the headline "0 empty / N citations" is measuring two different things at
once, and roughly **half** of the run's citation obligations are not yet checkable
against anything. Step 5 must re-quote every in-pair citation against the text it
actually authors; a contract that still quotes a title after step 5 is a hollow
contract, and at that point it will pass `proof-contract.mjs --strict` all the same.

### 5.3 Contract derivation granularity is inconsistent across batches

Batch 2 wrote multi-step planned derivations (up to 4 steps, 45 of 66 contracts with
more than one). Batches 1 and 5 wrote a single `planned-step-1-1` per contract whose
`claim` is the strategy text copied verbatim, so **every** citation in those batches
has `uses: ["1.1"]`. No gate distinguishes these. It is legitimate at scaffold stage
— the numbered steps do not exist yet — but batch 2's step-5 author inherits a
partial input map and batches 1 and 5's authors inherit none, and the step-5
requirement that the input map cover every numbered step exactly once will be
correspondingly heavier there. Worth knowing when sizing step 5, not worth a fix now.

### 5.4 Two small things I did not act on

- **`thm-eulers-criterion-for-binomial-congruences` claims a famous name.**
  Hackman calls C.III.1 "Euler's Criterion", so the item follows its source, and the
  `-for-binomial-congruences` qualifier disambiguates. But in the wider literature
  "Euler's criterion" means the quadratic case $a^{(p-1)/2}\equiv\pm1$, which belongs
  to `quadratic-residues-and-the-legendre-symbol` (57.003) — currently `items: []`,
  i.e. unscaffolded. There is no `dup-id` today and the qualifier leaves room for
  `thm-eulers-criterion-for-quadratic-residues` later. Recording it only because ids
  are immutable on `main` and 57.003 will be scaffolded by someone who did not read
  this.
- **One coverage row is slightly generous.** Milne's "Definition preceding
  Proposition 4.35" is the *general* resultant $a^mb^n\prod(\alpha_i-\beta_j)$; the row
  is `included` naming `thm-monic-resultant-as-a-double-root-product`, which is the
  monic case only. Nothing in the content overclaims — every item says "monic" in its
  own title — but the harvest row reads as fuller coverage than the page gives. A
  faithfulness nit for step 6, not a step-4 blocker.

### 5.5 What step 4 and step 5 should carry forward

- The step-3 decisions record still needs the batch-1 correction from my §7.3 (it
  asserts determinants are in `symmetric-polynomials`' closure; they are not, and
  the Sylvester decline is structurally forced).
- Every pair in my group is well under the 60-item ceiling — 29, 35, 27, 23, 38 —
  and none is at risk of crossing it during authoring. The additions I asked for
  total four items across two pages, one of which is still outstanding.
- The `undeclared-prereq` blind spot I documented at step 3 §7.1 is unchanged in the
  tooling. F5.1 is fixed, but the gate that missed it would miss the next one. My
  disk-home closure sweep is cheap and I have now run it twice; it should become a
  step-2 or step-4 mechanical check rather than something an Alpha happens to do.

---

## 6. Summary

Seven of nine findings are fixed and verified against disk, including all three on
batch 5 — the substitution's mathematics is written out, the contract input map
moved with the Statement, and both licensing pages exist at the ids Beta named.
F2.1 is one corollary short. F1.2 and F1.3 were never routed to the Beta and remain
exactly as they were at step 3, with the consequence that two items on
`symmetric-polynomials` currently claim `literature-derived` backing from a source
range their own declaration excludes.

Three pairs are **ready-for-splice**. Two are **not-ready**, and between them the
remaining work is one corollary, one locator, and roughly twenty coverage rows —
no item rewrites, no dependency changes, no proof changes.
