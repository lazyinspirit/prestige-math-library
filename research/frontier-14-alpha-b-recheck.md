# frontier-14 — group Alpha **b**, step-3 fix re-check (batches 4, 5, 6)

Alpha: Claude Opus 5, `xhigh`, 1M window. Read-only on `items/`, `library/`,
`plan-spec.json` and every Beta artifact; nothing outside this file and
`scratchpad/alpha-b/` was written. Re-checked from disk, not from the Betas'
reports.

**Every one of the eleven findings was reported `applied`. No Beta pushed back on
any of them.** That is the pattern this stage exists to distrust, so each was
verified against the file rather than the claim.

## One-line verdicts

| finding | batch | verdict |
|---|---|---|
| B4-1 | 4 | **confirmed** |
| B4-2 | 4 | **confirmed** |
| B4-3 | 4 | **confirmed** |
| B4-4 | 4 | **confirmed** |
| B5-1 | 5 | **confirmed** |
| B5-2 | 5 | **confirmed** |
| B5-3 | 5 | **confirmed** |
| B6-1 | 6 | **confirmed** |
| B6-2 | 6 | **confirmed** |
| B6-3 | 6 | **confirmed** |
| B6-4 | 6 | **confirmed** |

Eleven of eleven on disk. No `not applied`, no pushback to adjudicate.

Two **new** findings, **B4-5** and **B6-5**, are raised below. Neither is a
splice blocker; both are routed to step 6 with exact ids. Numbering continues
each batch's existing sequence and nothing above was renumbered.

---

## The whole-diff check

The fix pass is committed at `3c4e52f8`. Against its parent, the six scaffold and
coverage artifacts changed by **37 insertions and 15 deletions**, and I read every
line. **Every changed line traces to a numbered finding; there are no unrequested
edits, no silent renames, and no item removals.** This is the strongest check
available at this stage and it is clean.

Gates re-run by me rather than relayed, on the post-fix files:

| gate | batch 4 | batch 5 | batch 6 |
|---|---|---|---|
| `coverage-checklist.mjs` | 124 rows, 0 err, 0 warn | 70 rows, 0 err, 0 warn | 64 rows, 0 err, 0 warn |
| `content-policy.mjs --manifest-only` | 53 items, 0 err | 25 items, 0 err | 53 items, 0 err |
| `validate-plan.mjs` | exit 0 | exit 0 | exit 0 |
| `scratchpad/alpha-b/depcheck.py` | 34 external deps, **0 problems** | 32 external deps, **0 problems** | 55 external deps, **0 problems** |
| intra-page forward-ref scan | clean | clean | clean |

`depcheck.py` re-classifies every dep after the edits: zero out-of-closure, zero
unresolved, zero A-depends-on-B, every external dep `status: published`. Batch 6's
external count rose 49 → 55, exactly the six ring dependencies B6-1 added.
Batch 4's harvest is unchanged at 124, batch 5's rose 67 → 70 (B5-1's three rows),
batch 6's is unchanged at 64 (B6-1 flipped a row rather than adding one). Batch 6's
manifest rose 52 → 53 scoped items, the single item B6-1 required. All arithmetic
agrees.

`plan-spec.json` still carries **0 items** for all three pages, so step 4 has not
spliced yet and this re-check is still ahead of the freeze.

---

## Batch 4 — `triangularisation-and-jordan-canonical-form`

**B4-1 — confirmed.** `research/frontier-14-batch-4.coverage.json`, the Axler
Result 5.47 row. The old reason ("requires proving that C is algebraically
closed, which belongs to the planned page…") is gone; the row now reads that
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` **is published**, is
homed on `the-complex-exponential-and-eulers-formula` at order 189, and is
therefore above and outside this page's closure. I re-confirmed both halves: the
item is `status: published`, and `the-complex-exponential-and-eulers-formula` is
not in the order-90 page's `requires` closure (39 pages). The disposition stays
`deferred` to `the-fundamental-theorem-of-algebra`, which is correct. The false
claim about disk is removed and the correct call is preserved — the §A5 shape is
closed.

**B4-2 — confirmed**, all three, in `pages.json` **and** in the matching
`proof-contracts.json` citation blocks:

| item | dep added | present in contract |
|---|---|---|
| `prop-characteristic-polynomial-factors-over-an-invariant-subspace` | `prop-induced-quotient-operator-is-well-defined` | yes |
| `cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial` | `thm-cyclic-subspace-power-basis-and-companion-matrix` | yes |
| `thm-jordan-form-uniqueness-from-ranks-of-powers` | `def-rank-and-nullity`, `def-internal-direct-sum` | yes |

*Correction to my own finding text, which changes nothing in the fix.* B4-2 said
"all three targets are already published". Two of them —
`prop-induced-quotient-operator-is-well-defined` and
`thm-cyclic-subspace-power-basis-and-companion-matrix` — are **in-batch A-page
items**, not published ones, at indices 6 and 32 against citing items at 8 and 35.
They are legal dependencies under the self-contained-scope rule (an earlier item
inside the pair), and the forward-reference scan confirms no ordering violation.
`def-rank-and-nullity` and `def-internal-direct-sum` are published as stated.

**B4-3 — confirmed.** The three design-mandated Remarks are recorded in
`research/frontier-14-batch-4.notes.md` §"Step-3 fix pass" as step-5 authoring
obligations, which is exactly what the finding prescribed — Remarks live inside
items, and no item file exists yet. Each names an item that exists in the
scaffold and is homed where the design requires:

- quotient-space motivation → `def-quotient-vector-space-and-canonical-projection`,
  **A page index 0**, i.e. the first item, as §II.6.a requires;
- the `thm-rank-nullity` agreement record → `thm-first-isomorphism-theorem-for-vector-spaces`,
  A page index 4;
- the $\mathbb F_8/\mathbb F_2$ Frobenius orientation → `ex-a-cyclic-companion-operator`,
  **B page** index 15, as §II.6's B-page list requires.

I additionally checked the one thing that could make Remark 2 fail at step 5:
`thm-rank-nullity` is published, homed on
`linear-maps-rank-nullity-and-quotient-spaces`, and **in this page's closure**, so
its wikilink will resolve. The Beta's rendering also adds a SCHEMA §6 guardrail
of its own ("it does not make a survey claim about what the library contains
elsewhere") that the finding did not ask for and that is correct.

**B4-4 — confirmed, including the part I did not ask for.** Both titles now open
"For an endomorphism with split characteristic polynomial":

- `prop-generalised-eigenspaces-and-algebraic-multiplicity`
- `cor-jordan-block-data-controls-eigenspaces-and-polynomials`

The Beta also propagated the rename into `proof-contracts.json`: all eight
occurrences of the two old title strings — four `claim` fields and four
`source_section: Statement` quotes — carry the prefixed form. A stale quote there
would have been an inflated-restatement row pointing at a title that no longer
exists, so this propagation matters and it is complete.

### B4-5 — new: ten scaffold items carry no harvest or canonical row

This is the **B5-1 defect class, which I under-scoped**. B5-1 named two batch-5
A-page items; I did not check whether the same class existed in batches 4 and 6.
It does. Batch 4 has ten items that no source heading and no `canonical` row ever
names, so `coverage-checklist` — which walks sources → contents → item and never
the reverse — reports 124 rows, 0 errors while these items have no recorded
backing at all.

A page (4): `cor-nilpotent-similarity-classified-by-power-ranks`,
`cor-jordan-block-data-controls-eigenspaces-and-polynomials`,
`lem-a-vector-realises-the-minimal-polynomial`,
`cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial`.

B page (6): `ex-first-isomorphism-theorem-for-a-coordinate-map`,
`ex-a-split-triangularisable-but-nondiagonalisable-operator`,
`fs-every-endomorphism-is-triangularisable`,
`fs-every-endomorphism-has-jordan-form-over-its-base-field`,
`fs-jordan-canonical-form-is-a-unique-matrix`,
`ex-jordan-chevalley-decomposition-from-jordan-blocks`.

The batch already has an eleven-row `canonical` array, so the mechanism is in use
and simply not applied exhaustively; `cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial`
is a standard Hoffman–Kunze result and is the one likeliest to be a genuine
harvest miss rather than a house-minted item. **Not a splice blocker:** step 4
freezes the item list into `plan-spec.json`, not the coverage artifact, so the
repair costs the same coverage rows after the splice as before, and the coverage
gate re-runs at step 6 with Alpha checking faithfulness. Route to step 6.

---

## Batch 5 — `quadratic-residues-and-the-legendre-symbol`

**B5-1 — confirmed, all three parts.**

1. Both Mascot p. 8 rows are present in `coverage.json`: "Theorem: exactly
   (p-1)/gcd(k,p-1) of the nonzero classes modulo p are kth powers" and
   "Corollary: the kth-power map on units modulo p is gcd(k,p-1)-to-one", both
   `included` → `thm-count-of-quadratic-residues-modulo-prime`.
2. `prop-quadratic-residue-is-representative-independent` now has a `canonical`
   `included` row, which is the right instrument for a house-minted bridge.
3. The provenance rationale is corrected in the notes table: statement moved
   `literature-derived` → **`ai-altered`**, with the reason recorded that
   Gorodnik Thm. 1.6(ii) is about the Legendre symbol rather than this earlier
   residuosity proposition. That is the correction the finding asked for, and
   `ai-altered` is the honest label — the proposition is a restatement of the
   residue definition through published quotient-ring machinery, not a novel
   claim. It is not load-bearing on any `ai-generated` statement.

I re-ran my own reverse-coverage check: **the batch 5 A page now has 0 items
without a row**, down from 2. The Beta's claim is true of disk.

**B5-2 — confirmed.** The Mascot locator reads "Chapter 3, 'k-th roots mod p,'
PDF pp. 8–10, stopping before the next topic". The cube-root example row is
inside the widened range, and the two new p. 8 rows are too.

**B5-3 — confirmed.** The title is now
`The discriminant counts roots of $Ax^2+Bx+C\equiv0\pmod p$ for odd prime $p\nmid A$`.
The load-bearing $p\nmid A$ hypothesis is in the title, where the judges can see
it. I checked the proof contract as well: the `degenerate` boundary row already
carried "The assumptions exclude $A\equiv0$ and $p=2$, precisely when $2A$ need
not be invertible", so the Beta's claim that no contract change was needed is
true rather than a way of doing less.

*Not raised as a finding:* three **B-page** items carry no harvest or canonical
row (`ex-quadratic-congruence-from-its-discriminant`,
`cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning`,
`cex-quadratic-residue-definition-excludes-nonunits`). B5-1 was scoped to the A
page and the A page is now clean. These three fall under the same step-6 routing
as B4-5 and B6-5.

---

## Batch 6 — `reflective-subcategories-and-the-adjoint-functor-theorems`

**B6-1 — confirmed, and the added theorem is sound.** This was the finding that
made the pair `insufficient`, so I checked it hardest.

- `thm-commutative-rings-are-reflective-in-rings` exists on the **A page at index
  38**, in the applications block beside `thm-abelian-groups-are-reflective-in-groups`
  and `thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups`, which is
  where the finding said it should land. The A page is **44 items**, 16 under the
  ceiling; no split.
- The Riehl Example 4.5.13(ii) commutative-ring coverage row is `included` →
  that id. The old `out-of-scope` reason is deleted rather than left alongside.
- All eight deps resolve, are `status: published` or earlier in-batch, and are in
  closure. None has an `ai-generated` Statement: five are `literature-derived`,
  and `def-ring-homomorphism` is `ai-altered`.
- **The degenerate case closes.** The commutator ideal $C$ can be all of $R$ —
  $M_2(k)$ is simple and noncommutative, so its commutativisation is the zero
  ring — and with (RH3) unit-preservation there would be no reflection at all if
  the zero ring were excluded. `items/def-ring.md` states in as many words:
  "Nothing above requires $1\ne0$. A ring in which $1=0$ has exactly one element;
  the companion page records it as the **zero ring**." So the reflector is total.
  `def-generated-and-principal-ideals` is two-sided as the finding asserted, and
  `thm-quotient-ring-universal-property` carries the exact factorisation clause.
  I checked this because I ordered the item added; a defect in it would have been
  mine.
- A three-derivation proof contract with all eight boundary rows was added. Six
  of the eight are `not_applicable` with item-specific reasons rather than
  template text, and the `risk_review` is honestly `pending` for Alpha at step 6.
  *One authoring note, not a finding:* the `degenerate` row's evidence is
  "step 1.1", which does not name the $R/C=0$ case. Step 5 should make that
  boundary explicit in the item, since it is the one place the theorem could look
  false to a skeptical reader.

**B6-2 — confirmed.** `prop-preorders-as-categories-and-monotone-maps-as-functors`
is gone from the deps of both
`fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint` and
`cex-a-category-that-is-not-well-powered`, and both now carry
`rem-category-theory-class-and-size-conventions` (published, in closure). The
counterexample retains `lem-ordinal-basics` and `fs-ordinals-form-a-set` as
prescribed. `ex-the-adjoint-functor-theorem-for-ordered-sets` on the B page
**keeps** the proposition, which is right — ordered sets are what it is about.
The proof contracts for both items no longer cite the set-sized proposition
either, so the set-restated-over-a-class defect is closed on both artifacts.

**B6-3 — confirmed.** `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`
now lists `def-limit-and-colimit-of-a-diagram` (and `def-monomorphism-and-epimorphism`,
which its split-mono step needs and which was already there);
`thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object`
now lists both. Both contracts carry the corresponding citation entries, so the
cone existence-and-uniqueness clause the repair's step 4 turns on is recorded
where a step-6 reader will look for it.

**B6-4 — confirmed, and the two refusals are right.** The Riehl 4.5.13(iv)
restriction-of-scalars row now names `tensor-products-of-modules` as its
licensing page; I confirmed that page is at **order 106** in `plan-spec.json` and
is **not** in this page's 78-page closure, so the decline itself still stands.
The sheafification row names `presheaves-sheaves-stalks-and-sheafification`
(366.057, confirmed in spec). The two simplicial-set rows still state that no
planned page licenses the construction rather than naming
`simplicial-complexes-and-simplicial-homology` — **that is what I asked for**; my
finding said I would not force a fabricated id where the nearest page is a
different mathematical object. The Beta did not take the easy route of naming it
anyway, which is the correct reading of the finding.

### B6-5 — new: eleven scaffold items carry no harvest or canonical row

Same class as B4-5. Batch 6 has a sixteen-row `canonical` array and still leaves
eleven items unnamed by any row:

A page (5): `def-the-solution-set-condition`,
`thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces`,
`prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses`,
`fs-every-reflective-subcategory-is-closed-under-colimits`,
`fs-a-reflective-inclusion-creates-colimits`.

B page (6): `ex-the-subobject-poset-of-the-integers-in-abelian-groups`,
`ex-subobjects-in-set-are-subsets`,
`ex-the-solution-set-for-groups-computed-on-a-two-element-set`,
`cex-two-monomorphisms-representing-the-same-subobject`,
`cex-a-category-that-is-not-well-powered`, `ex-torsion-free-reflection-computed`.

Three of these are not house-minted and the backing exists in the declared read
range, which is what makes it a harvest gap rather than a sourcing one:

- `def-the-solution-set-condition` — the solution-set condition is stated inside
  Riehl Thm. 4.7.3 and Leinster Thm. 6.3.10, both harvested, but both rows are
  dispositioned to the GAFT theorem items, so the definition item inherits
  nothing. It needs a `canonical` row, or a second row against Riehl 4.7.3.
- `thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces`
  and `prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses`
  — Mac Lane's row "Compact-Hausdorff example following the corollary, with the
  unit interval as cogenerator" is dispositioned solely to
  `thm-saft-yields-the-stone-cech-adjunction`. That example is the source for all
  three items; it needs rows naming the other two.

Not a splice blocker, for the same reason as B4-5. Route to step 6.

*Detector written.* The class has now appeared twice, so
`scratchpad/alpha-b/reverse-coverage.py` implements the items → rows direction
(`reverse-coverage.py <run> [batch ...]`, exit 1 on any unbacked item). It
reproduces B5-1 on the pre-fix batch 5 and finds B4-5 and B6-5. It is the check
`coverage-checklist.mjs` structurally cannot do, and it is cheap enough to run at
step 2 on every batch — see mechanism observation 2 in my step-3 report, which
this makes concrete.

---

## Per-pair verdict

| pair | verdict |
|---|---|
| `triangularisation-and-jordan-canonical-form` | **ready for splice** |
| `quadratic-residues-and-the-legendre-symbol` | **ready for splice** |
| `reflective-subcategories-and-the-adjoint-functor-theorems` | **ready for splice** |

Batch 6's step-3 `insufficient` is lifted: B6-1 was the sole blocker and the
theorem is on the A page with its coverage row, its dependencies, and a contract.

Nothing blocks the splice on any of the three pairs. Carried forward to step 6,
not to step 4: **B4-5**, **B6-5**, batch 5's three unbacked B-page items, and the
$R/C=0$ authoring note on `thm-commutative-rings-are-reflective-in-rings`. All
four are coverage-artifact or item-text work that costs exactly the same after
the splice as before it.

## Still standing from the step-3 report, for the orchestrator

Unchanged by the fix pass, and none of it is a Beta's to fix:

1. **Design amendments due at step 4** — NT-2's Hackman locators (D.I.3/D.I.7
   cited for the wrong results), MA-2's Riehl section numbers (§4.6 → §4.5/§4.7),
   MA-2's "item 12" pointer for the §6 repair (it lands on item 18, copied
   verbatim into two task files), MA-2 item 26's unqualified Riehl SAFT wording,
   and the two prose page-order figures (86 → 90, 106 → 110).
2. **`PREVENTIONS` §A4 calls a check mechanical that is not.**
   `coverage-checklist.mjs` lines 203–219 test reason length and duplicate
   strings, never a page id. Either reword §A4 as advice or grow the gate.
3. **`thm-fundamental-theorem-of-algebra-minimum-modulus-proof` is published at
   order 189 while `the-fundamental-theorem-of-algebra` sits planned at order
   139.** Whoever builds 139 will re-prove a published theorem from below it.

## Not checked, stated plainly

- I did not re-extract any PDF in this pass. The locator faithfulness work is in
  the step-3 report; the only locator that changed is Mascot pp. 8–9 → 8–10,
  whose p. 10 content I had already extracted and verified when raising B5-2.
- The exhaustive-harvest gaps named in the step-3 report are unchanged: Axler
  §3E/§5C/§8A–8C and Hoffman–Kunze Ch. 6 §6.4 / Ch. 7 §§7.1–7.2 were sampled, not
  enumerated; Stein §§4.1–4.3 and the Leinster rows were not extracted. B4-5 and
  B6-5 are the items → rows direction and say nothing about whether the declared
  ranges were read completely.
- No proofs reviewed — none exist. Proof contracts were opened only where a
  finding touched them, plus the new B6-1 contract; auditing their contents is
  the step-5/6 gate's job.
- I did not re-litigate the batching, the split decisions, or any decline I
  upheld at step 3.
