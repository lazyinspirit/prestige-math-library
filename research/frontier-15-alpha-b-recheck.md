# frontier-15 — Alpha group `b`, step-3 re-check before the step-4 splice

Batches 4, 5, 6. Every disposition below was re-derived from the artifacts on
disk — `*.pages.json`, `*.coverage.json`, `*.proof-contracts.json` and the
published `items/` targets — not from the Betas' `## Step-3 fix pass` prose.

## Finding-id reconciliation (read this before the tables)

My two step-3 artifacts number the findings **differently**, and the Betas read
different ones. `…-step3-scaffold-review.md` is the stable scheme (Beta-4 says so
explicitly and Beta-5 and Beta-6 follow it); `…-step3-verdicts.json` is what the
engine routed. The map, so nothing is scored twice or dropped:

| review `.md` | verdicts `.json` |
|---|---|
| B4-1 (both well-definedness lemmas) | B4-1 (λ-system) + B4-2 (monotone class) |
| B4-2, B4-3 (AC adjudications) | B4-5 |
| B4-4 (hierarchy fallback + condition) | B4-3 |
| B4-5 (unused edges) | B4-4 |
| B5-1 (illegal `kind`) | B5-7 |
| B5-2 … B5-5 | B5-2 … B5-5 (identical) |
| F5-1 … F5-7 | B5-6 |
| B6-1 … B6-5 | B6-1 … B6-5 (identical) |
| F1 … F6 | B6-6 |

Every id in **both** schemes is dispositioned below. That the two disagreed is my
defect, not a Beta's, and it is the exact hazard that hides a dropped finding.

---

## Batch 4 — `sigma-algebras-and-borel-sets`

| id | disposition |
|---|---|
| B4-1 (json B4-1 + B4-2) | **confirmed** |
| B4-2 (json B4-5) | **confirmed** — already correct |
| B4-3 (json B4-5) | **confirmed** — already correct |
| B4-4 (json B4-3) | **pushback accepted**, and closed by me on disk |
| B4-5 (json B4-4) | **confirmed** |

**B4-1 — confirmed.** `lem-generated-lambda-system-exists-and-is-minimal` is item
9, immediately after `def-generated-lambda-system`;
`lem-generated-monotone-class-exists-and-is-minimal` is item 12, immediately
after `def-generated-monotone-class`. The fix is not cosmetic: the contract
derivations now name the new lemma at exactly the steps whose route I said could
not close — `lem-generated-lambda-system-closed-under-intersections` steps 1.1
and 1.2 (`first-good-set-pass`, `second-good-set-pass`),
`lem-generated-monotone-class-closed-under-complements` 1.1/1.2,
`lem-monotone-good-sets-for-algebra-elements` 1.1/1.2 and
`lem-generated-monotone-class-closed-under-intersections` 1.1/1.2. Six manifest
consumers carry the new edge, including `thm-dynkin-pi-lambda` and
`thm-monotone-class`. Both lemmas have contracts with all eight boundary rows,
anchored rather than templated (the `empty` row names the empty ambient set and
the empty generating family; `nonempty-choice` names the power-set witness and
states that no choice principle is used), and both have `canonical` coverage
rows. The mathematics is right: each defining clause of a λ-system and of a
monotone class is preserved under nonempty intersection, and `P(X)` is a member
of each indexing family, so neither lemma needs anything the page lacks.

**B4-2 — confirmed, already correct.** `thm-cardinality-bound-for-generated-sigma-algebras`
and `thm-cardinality-of-the-borel-sigma-algebra-on-rn` both state "Assuming the
Axiom of Choice" in the title and both declare `def-axiom-of-choice`.
`thm-transfinite-description-of-generated-sigma-algebras` still stands on
countable choice alone. My step-3 override of the design's trap 3 is on disk as
adjudicated.

**B4-3 — confirmed, already correct.** The transfinite theorem cites
`thm-countable-subsets-of-omega-one-are-bounded` and does not cite
`thm-regularity-of-the-alephs`, so its hypothesis is still AC$_\omega$ and not AC.

**B4-4 — pushback accepted; I then closed it myself.** Beta-4 recorded the
book-grade locator as a Step-5 obligation and refused to write a URL it could not
fetch-verify (its sandbox returned `ENOTFOUND` for every host). That is faithful
to my own wording — my condition said *"Step 5 must add"*, and
`external_dependency.exact_statement` is item frontmatter that does not exist at
step 3 — and refusing to fabricate a stamp is right. But the deferral left the
ledger backing a `proved_here: false` record with a single unproved course-note
comment, and would have handed the same fetch problem to the step-5 author.
Since my network works where theirs did not, I closed it: I fetched and read
**David Marker, *Descriptive Set Theory* (Fall 2002), §2 Borel Sets, subsection
"The Borel Hierarchy", printed pp. 23–24**, and added it to
`research/frontier-15-batch-4.coverage.json` with a faithful enumeration of that
subsection — Definition 2.36 (universal-$\Sigma^0_\alpha$ sets) and Lemma 2.37
(existence of universal sets) `out-of-scope` as descriptive-set-theory machinery
the library has not reached, and **Corollary 2.38** `included` to
`rem-the-borel-hierarchy-never-stabilizes`. Corollary 2.38 is exactly the
statement needed — for an uncountable Polish $X$ and every $\alpha<\omega_1$,
$\Sigma^0_\alpha(X)\ne\Pi^0_\alpha(X)$, hence
$\Sigma^0_\alpha(X)\subsetneq\Delta^0_{\alpha+1}(X)$ — and unlike the Christ note
it carries a complete proof (universal sets plus diagonalisation). The step-5
obligation is now "quote Marker Corollary 2.38", not "go and find a book".

**B4-5 — confirmed.** `thm-cantor-set-ternary-description` and `lem-of-q-dense`
are gone from `thm-cardinality-of-the-borel-sigma-algebra-on-rn`, and the
contract was rebuilt rather than merely trimmed: the lower bound is now
$x\mapsto\{(x,0,\ldots,0)\}$, justified by the closed-set clause of
`thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn`. I checked the
converse direction of the finding too — all seven retained dependencies have a
named use (`L1` at 1.1, `L2` at 1.4, the other five at 1.2 and 1.3), so the item
now carries no unused edge in either direction. The notes' superseded
dependency-audit rows are marked superseded rather than left to contradict the
fix.

---

## Batch 5 — `the-fundamental-group-of-the-circle`

| id | disposition |
|---|---|
| B5-1 (json B5-7) | **confirmed** — my repair is intact, not reverted |
| B5-2 | **confirmed** |
| B5-3 | **confirmed** |
| B5-4 | **confirmed** |
| B5-5 | **confirmed** |
| F5-1 (json B5-6) | **confirmed** |
| F5-2 condition (json B5-6) | **not applied** in part — repaired by me |
| F5-3 condition (json B5-6) | **confirmed** |
| F5-4, F5-5 (json B5-6) | **confirmed** |
| F5-6 condition (json B5-6) | **not applied** — repaired by me |
| F5-7 (json B5-6) | **confirmed** — correctly left untouched |

**B5-1 — confirmed.** `fs-every-continuous-self-map-of-the-circle-is-nullhomotopic`
still carries `"kind": "false-statement"`. Nothing in the fix pass reverted it.

**B5-2 — confirmed.** `cex-unit-length-interval-need-not-embed-in-real-line-mod-integers`
is on the B page with both witnesses I asked for and a correct route: $p|_{[0,1)}$
is a continuous bijection whose image of the relatively open $[0,1/2)$ pulls back
to $\bigcup_n[n,n+\tfrac12)$, not open at each integer, so it is not open and not
a homeomorphism; and $p(0)=p(1)$ kills injectivity on $[0,1]$. Contract cites
`lem-homeomorphism-criteria` (verified published, statement `ai-altered`, so
eligible) and its boundary rows are anchored to $0$, $1$ and the endpoint
conventions rather than templated.

**B5-3 — confirmed.** `ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected`
cites the published `thm-convex-subsets-have-trivial-fundamental-group`
(`literature-derived`) at $n=1$ and `cor-real-line-mod-integers-is-not-simply-connected`.
Beta declined to assert the design's "first published space with nontrivial
$\pi_1$" phrasing and stated the mathematical boundary instead. **Pushback
accepted**: a self-ranking claim about reading position is banned by SCHEMA §6,
and the mathematics the design wanted is present.

**B5-4 — confirmed.** `ex-a-surjective-circle-loop-of-degree-zero` uses the
out-and-back lift $u(t)=2t$, $2-2t$. I re-derived it: pasting gives continuity,
$u(0)=u(1)=0$ so the degree is $0$, $u([0,\tfrac12])=[0,1]$ so $\alpha$ is onto,
and $\alpha(1/4)=[\tfrac12]$ makes it nonconstant.

**B5-5 — confirmed.** The Hatcher locator now reads pp. 29–33 through Theorem
1.10, and Theorems 1.8, 1.9 and 1.10 each have a `deferred` row with a
result-specific reason naming `applications-of-the-fundamental-group`. I checked
that page id exists in `research/plan-spec.json`; it is HT-7.

**F5-1 — confirmed.** The A page's `requires` is
`[covering-spaces-and-lifting, fundamental-trigonometric-identities]`. No re-pin
was owed and none was made.

**F5-2 — not applied in part; repaired by me.** The structural half is right —
`rem-circle-quotient-model-agrees-with-published-examples` has a single `deps`
entry and no edge to a B-leaf id. The other half of the condition, that the
remark **name the two published pages in prose**, had no carrier anywhere on
disk: the item had no `strategy` field at all, and the notes do not name the
pages. A condition that lives only in my step-3 report is a condition the step-5
author will not see. I wrote the `strategy`, naming
`subspaces-products-and-quotients-examples` and
`covering-spaces-and-lifting-examples` and restating the no-`deps`-edge
constraint.

**F5-3 — confirmed.** `thm-real-line-covers-real-line-mod-integers` claims the
covering clause only; its strategy puts the agreement with
`ex-real-line-mod-integer-translations-is-a-covering` in Remarks and says in
terms "do not put that B id in `deps`". The deck-transformation half stays on the
published example.

**F5-4, F5-5 — confirmed.** The degree pipeline is still the eleven separate
items in the approved order, with well-definedness
(`cor-degree-descends-to-circle-loop-classes`) ahead of every consumer, and the
self-map falsehood still carries the homotopy-lifting route
(`thm-homotopy-lifting-for-covering-maps`, `thm-path-lifting-for-covering-maps`)
rather than a based-degree shortcut.

**F5-6 — not applied; repaired by me.** This is the one entry the fix pass does
not mention at all, and the instruction I declined was still on disk verbatim:
`cor-geometric-unit-circle-has-fundamental-group-z`'s `strategy` ended *"…must
receive that id as an alias when the owner-approved un-deferral is applied."* The
item itself carries no `aliases`, so the manifest is currently safe — but the
sentence is an instruction to the step-5 author to mint one, and
`items/rem-pi1-circle-is-z.md` still exists (`status: draft`), so acting on it
would be an id collision and an owner-only id transfer. I replaced the sentence
with an explicit no-aliases instruction stating why. Related check for 6c, now
done: **no page anywhere in the repo lists `rem-pi1-circle-is-z`**, so there is
no published-page-lists-a-draft-item error to answer.

**F5-7 — confirmed.** `items/ex-circle-as-r-mod-z.md` and
`items/ex-torus-as-a-quotient-of-the-square.md` are untouched, as I required.
The contradiction their prose will acquire once HT-4 publishes remains an owner
decision carried to step 10, not a step-5 edit.

---

## Batch 6 — `goursat-and-cauchys-theorem-in-a-convex-domain`

| id | disposition |
|---|---|
| B6-1 | **confirmed**, with one gap I repaired |
| B6-2 | **confirmed** (Beta took the branch I licensed, not the design's) |
| B6-3 | **confirmed** |
| B6-4 | **confirmed** |
| B6-5 | **confirmed** — author's call, recorded as I required |
| F1 … F6 (json B6-6) | **confirmed** — none reverted |

**B6-1 — confirmed, with one repair.** `cor-goursat-rectangle-theorem` is item 6,
directly after the triangle theorem; both false `inline` rows (Ahlfors §1.4
Theorem 2, Stein–Shakarchi §1 Corollary 1.2) now read `included` to it, and a
`canonical` row records the diagonal-splitting route. What the fix pass did not
carry: the item's `deps` were `thm-goursat-triangle-theorem` and
`prop-reversal-and-concatenation-of-complex-line-integrals` only, so **nothing
declared supplied the filled-triangle notion the proof subdivides, or the
rectangle's oriented boundary contour it integrates over** — the contract's step
1.1 had inputs `["given","construct","algebra"]` while asserting a conclusion
about filled triangles. A newly minted item is exactly where this slips through,
because no earlier review saw it. I repaired it rather than routing it: added
`def-oriented-complex-triangle-and-boundary` (same page, item 1) and the
published `def-complex-contours-reversal-concatenation-and-closedness` to `deps`,
split the contract's step 1.1 into 1.1 (fix the rectangle and define its
positively oriented boundary as the concatenation of its four directed sides) and
1.2 (the diagonal subdivision), re-pointed steps 2.1 and 3.1, and put the same
requirement in the `strategy` so the Statement names its objects before
integrating over them. Both new edges are used, so neither is an inflated
dependency.

**B6-2 — confirmed.** `fs-every-continuous-complex-function-on-a-domain-has-a-primitive`
is gone from both `cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral`
and `cex-connected-domain-need-not-be-star-shaped`, and the "attached only for
provenance continuity" prose is gone with it. Beta took the *drop-the-edge*
branch rather than the *cite-CA-3* branch, so the CA-4 design's "open it and
cite, don't rebuild" instruction is overridden. I accept that: both were
explicitly licensed in my finding, and the local routes cite exact published
clauses (`thm-circle-integrals-of-integer-monomials` at $m=-1$;
`lem-punctured-rn-is-polygonally-connected`), so nothing is rebuilt from a false
statement and no duplicated derivation of substance remains.

**B6-3 — confirmed.** The annulus counterexample declares
`lem-complex-conjugation-and-modulus-laws` and its contract carries the exact
clause as `L5` used at step 1.1, where $\bigl||z|-|w|\bigr|\le|z-w|$ is derived
and a radius below both gaps proves $A$ open **before** `def-complex-domain` is
invoked. The derivation closes.

**B6-4 — confirmed.** `thm-cauchy-integral-formula-higher-derivatives` is retitled
"All higher complex derivatives exist and satisfy Cauchy's integral formula on an
interior circle", and its induction proves existence and the representation
together. Howell–Mathews Corollary 6.5.10 is split honestly in coverage:
existence `included` here, the holomorphicity/smoothness half and Remark 6.5.11
`deferred` naming `cor-holomorphic-functions-are-real-analytic-and-smooth` on
`analyticity-liouville-and-morera`. The title no longer promises less than the
disposition claims.

**B6-5 — confirmed.** The author kept a single `cex-` carrier rather than
duplicating the witness, which was expressly the author's call, and recorded it:
a `canonical` row now accounts for the design's FS ("Cauchy's theorem holds for
every closed rectifiable contour in every complex domain") against the annulus
counterexample, and the counterexample's strategy requires the exact false claim
to be stated. That is the condition I attached.

**F1 … F6 — confirmed, none reverted.** `rem-plane-star-shaped-and-convex-dictionary`
still cites `def-star-shaped-open-subset-of-rn` and
`def-convex-subset-of-euclidean-space` (F1);
`lem-goursat-nested-triangle-selection` still cites `thm-cantor-intersection-metric`
with `thm-complex-plane-is-complete`, and `thm-well-ordering-principle` is still
the ZF least-element statement, not a choice principle (F2);
`prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain` and
`thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain` are both
present (F3); `thm-cauchy-integral-formula-circle` still routes the off-centre
kernel through `thm-uniform-limit-interchanges-complex-line-integrals` and
`lem-geometric-sequence-null` rather than paraphrasing the centred monomial
clause (F4); `cor-cauchy-theorem-convex-domain` is present (F5); the corrected
locators and the Tang-Kai Lee source are in the ledger (F6).

---

## Two findings that are new at re-check

**N1 (batch 6) — a one-page extract was standing in the ledger as a treatment.
Repaired.** `https://math.ucr.edu/~res/math205A/nested.pdf` is a single-page
handout; `source-fetch-check` rejects it as `fetch-check-not-full-text` — "an
abstract or extract, not a citable treatment". It carried one
`already-published` row for `thm-cantor-intersection-metric`, so nothing's
provenance rested on it and RECOVER-BEFORE-REPLACE does not apply (the URL is
live, the document is simply not a treatment). I replaced it with the full note
set that contains it — **Reinhard Schultz, *Mathematics 205A: General Topology*
(2008), §III.2 Complete metric spaces, subsection "Intersections of nested closed
sets", printed p. 50** — which I fetched and read: it states the Nested
Intersection Property for a complete metric space with nested nonempty closed
$A_n$ and $\operatorname{diam}(A_n)\to0$, concluding the intersection is one
point, with proof. Both its rows are `already-published`, so no item's backing or
provenance moves.

**N2 (batch 5) — no `canonical` list at all; recorded, not blocking.** Batches 4
and 6 use a `canonical` array to account for scaffolded results that no harvested
source heading anchors; batch 5's coverage file has no such key, so its whole B
page and several A items (the agreement remark, the Hausdorff and open-arc
lemmas) are accounted for nowhere in the ledger, and the HT-4 design's own A/B
lists — the same kind of record I *required* of batch 6 at B6-5 — have no
carrier. This is bookkeeping, not mathematics: the harvest is source-anchored and
faithful, `coverage-checklist` is clean, and nothing about the splice depends on
it. I am not blocking on it, and I did not patch three rows in myself because a
partial canonical list is worse than none. It is a **step-6b.0 obligation for
Beta-5**, which holds the design mapping.

## What I changed on disk

1. `research/frontier-15-batch-5.pages.json` — `cor-geometric-unit-circle-has-fundamental-group-z`
   `strategy`: alias-transfer instruction replaced by an explicit no-aliases
   instruction (F5-6).
2. `research/frontier-15-batch-5.pages.json` — `rem-circle-quotient-model-agrees-with-published-examples`:
   added the missing `strategy` naming the two published pages in prose and
   forbidding a B-leaf `deps` edge (F5-2).
3. `research/frontier-15-batch-6.pages.json` and
   `research/frontier-15-batch-6.proof-contracts.json` —
   `cor-goursat-rectangle-theorem`: two definitional `deps` added, contract step
   1.1 split into 1.1/1.2 with those inputs named, `endpoints` boundary row
   re-anchored, `strategy` extended to define the rectangle boundary (B6-1).
4. `research/frontier-15-batch-4.coverage.json` — added the Marker source with a
   three-row faithful harvest of its "The Borel Hierarchy" subsection (B4-4).
5. `research/frontier-15-batch-6.coverage.json` — the UCR one-page handout
   replaced by the Schultz note set with a two-row harvest (N1).
6. All three `*.coverage.json` — `fetch_verified` stamps written by
   `source-fetch-check --stamp` (see below).

No item was added, deleted or renamed by me, and no mathematical claim was
weakened or strengthened.

## Gates I ran myself

All three batches, after my edits:

- `coverage-checklist` — 64 / 29 / 92 harvested results, 0 errors, 0 warnings.
- `content-policy --manifest-only` — 60 / 28 / 25 scoped items, 0 errors.
- `splice-plan --dry-run` — accepts all three: 2 pages, 60 / 28 / 25 items, no
  `requires` disagreement, oversize page or duplicate id.
- `prosecheck --warnings` — clean on all twelve artifacts.
- `validate-plan research/plan-spec.json` — clean for the current unspliced spec.
- **`source-fetch-check --stamp` — 17 of 17 sources across the three batches are
  now fetch-verified.** All three Betas reported this as their one open
  mechanical item, blocked by `ENOTFOUND` in their sandboxes; my runner has
  network, so I ran it rather than leaving it for the engine. It is a mechanical
  fetch-and-hash, not an attestation of reading. It is also what surfaced N1.
- Structural contract check: proof-bearing items = scope = contracts (47 / 24 /
  23), and every contract carries all eight boundary cases.
- **Published-quote check: 129 of 129** contract quotes whose source is a
  published `items/*.md` file are literal substrings of that file (79 in-level
  quotes are unverifiable pre-authoring and were skipped).
- Scope check against my step-3 counts: batch 4 42+16 → 44+16, batch 5 21+4 →
  21+7, batch 6 16+8 → 17+8. The deltas are exactly the two lemmas, the three B
  witnesses and the rectangle corollary I approved — no unapproved item was added
  or dropped in the fix pass.

## Obligations carried into step 5

1. **Batch 4** — `rem-the-borel-hierarchy-never-stabilizes` takes
   `external_dependency.exact_statement` from **Marker Corollary 2.38**, now in
   the coverage ledger, with the Christ note kept as corroboration only; keep
   `proved_here: false`, the real `deps` edge, and the failed-local-route
   argument in the notes and contract.
2. **Batch 5** — mint **no** `aliases` on
   `cor-geometric-unit-circle-has-fundamental-group-z`; the agreement remark
   names its two published pages in prose with no B-leaf edge; do **not** apply
   the F5-7 edits to `ex-circle-as-r-mod-z` or `ex-torus-as-a-quotient-of-the-square`.
3. **Batch 5** — Beta-5 adds the missing `canonical` coverage rows (N2) at 6b.0.
4. **Batch 6** — every use of `cor-closed-contour-integral-of-a-derivative-is-zero`
   discharges its **$F'$ continuous** clause explicitly; and
   `cor-goursat-rectangle-theorem` states what its rectangle and oriented
   boundary are before integrating over them.

## Verdicts

| pair | verdict |
|---|---|
| `sigma-algebras-and-borel-sets` (+ `-examples`) | **ready for splice** |
| `the-fundamental-group-of-the-circle` (+ `-examples`) | **ready for splice** |
| `goursat-and-cauchys-theorem-in-a-convex-domain` (+ `-examples`) | **ready for splice** |

Nothing blocks step 4 on any of the three. The two dispositions that were not
true of disk (F5-6, and the incomplete half of F5-2) plus the two gaps found at
re-check (B6-1's undeclared definitions, N1's extract source) are repaired on
disk, not routed, because each was a false or unsupported instruction rather than
missing breadth. The remaining open items are the four step-5 obligations above
and the standing owner decisions F5-6 (un-deferral and id transfer) and F5-7
(stale published scope-denial prose), both carried to step 10.

---

# Round 2 — re-check after the scaffold-fix round (2026-08-17)

The `3-recheck` stage re-fired because my **verdict JSON was never updated after
round 1**. The prose above said "ready for splice" on all three pairs while
`research/frontier-15-alpha-b-step3-verdicts.json` still carried the review-time
`insufficient` rows, so `scaffold-verdicts.mjs --require-sufficient` re-raised
findings that had already been fixed and re-dispatched all three Betas against
them. That is my defect, not a Beta's, and it is the exact failure this dispatch
exists to stop. Every disposition below was **re-derived from disk in this
dispatch**, not carried over from round 1.

## The pushback, adjudicated first

Beta-4 pushed back on all five routed findings, Beta-5 on all six, Beta-6
recorded its fix pass and did not need to. Every pushback says the same thing:
*the finding is stale against the current scaffold*.

**Pushback accepted, on all of them, verified individually from disk.** No Beta
was asked to change anything it had not already changed. The rows they were
routed were verbatim copies of my review-time text, re-emitted by the closure
receipt from my un-updated JSON. Their refusal to re-apply a repair already on
disk was the correct call — re-adding `lem-generated-lambda-system-exists-and-is-minimal`
a second time, or restoring the two dependency edges B4-4 asked to remove, would
have reintroduced the defects. I record specifically that **Beta-4 declined to
fabricate a Kechris URL its sandbox could not resolve** and said so rather than
writing an unverified stamp; that is the right behaviour under the
no-fabricated-verification rule, and the finding was closed instead by the Marker
source I fetched at round 1.

## Per-finding, re-verified from disk in this dispatch

Ids in both my schemes; the round-1 reconciliation table above still maps them.

### Batch 4 — `sigma-algebras-and-borel-sets`

| id | disposition |
|---|---|
| B4-1 (json B4-1) | **confirmed** — lemma at item 9, right after its definition; 2 declared consumers; 8 anchored boundary rows; `canonical` row present |
| B4-1 (json B4-2) | **confirmed** — monotone-class twin at item 12; 4 declared consumers; same contract quality |
| B4-4 / json B4-3 | **confirmed** — Marker, *Descriptive Set Theory* §2, pp. 23–24, in the ledger and `fetch_verified`; Corollary 2.38 `included` to `rem-the-borel-hierarchy-never-stabilizes`, Definition 2.36 and Lemma 2.37 `out-of-scope` with result-specific reasons |
| B4-5 / json B4-4 | **confirmed** — both unused edges gone; all seven retained edges have a named contract use |
| B4-2, B4-3 / json B4-5 | **confirmed, already correct** — transfinite theorem cites `thm-countable-subsets-of-omega-one-are-bounded`, never `thm-regularity-of-the-alephs`; both cardinality theorems state full AC and declare `def-axiom-of-choice` |

### Batch 5 — `the-fundamental-group-of-the-circle`

| id | disposition |
|---|---|
| B5-2 | **confirmed** — I re-derived both witnesses rather than reading the strategy: $p^{-1}\bigl(p[[0,\tfrac12)]\bigr)=\bigcup_n[n,n+\tfrac12)$ fails openness at each integer, and $p(0)=p(1)$ fails injectivity on $[0,1]$ |
| B5-3 | **confirmed**; Beta's refusal of the design's "first published space" wording is **pushback accepted** — SCHEMA §6 bans a reading-position claim, and the mathematics the design wanted is present |
| B5-4 | **confirmed** — re-derived: $u(0)=u(1)=0$ gives degree $0$, $u([0,\tfrac12])=[0,1]$ gives surjectivity, $\alpha(1/4)=[\tfrac12]$ gives nonconstancy |
| B5-5 | **confirmed** — Hatcher locator pp. 29–33 through Theorem 1.10; Theorems 1.8/1.9/1.10 each `deferred` naming `applications-of-the-fundamental-group` |
| B5-6 / F5-1…F5-7 | **confirmed** — every condition on disk: the `requires` re-pin, the agreement remark's prose naming with one non-B-leaf `deps` entry, the covering-only claim, no `aliases` with a step-5 instruction to mint none, and `ex-circle-as-r-mod-z` / `ex-torus-as-a-quotient-of-the-square` untouched (`git status` clean on both) |
| B5-7 / B5-1 | **confirmed** — kind still the legal `false-statement`; the fix round did not revert it |

`rem-pi1-circle-is-z` re-checked: still `status: draft`, and listed by **no** page
anywhere in the repo, so there is no published-page-lists-a-draft-item error.

### Batch 6 — `goursat-and-cauchys-theorem-in-a-convex-domain`

| id | disposition |
|---|---|
| B6-1 | **confirmed** — `cor-goursat-rectangle-theorem` at item 6; both false `inline` rows now `included` to it; my round-1 repair of its two definitional `deps` and its split contract step 1.1/1.2 is intact |
| B6-2 | **confirmed** — the `fs-` edge is gone from both counterexamples, with its "provenance continuity" prose |
| B6-3 | **confirmed, and checked the other direction** — I opened `lem-complex-conjugation-and-modulus-laws`: it states subadditivity $|z+w|\le|z|+|w|$ and **not** the reverse inequality. The contract's L5 quotes the subadditivity clause verbatim and derivation 1.1 *derives* $\bigl||z|-|w|\bigr|\le|z-w|$ from it. That is the correct discipline — cite what the lemma says, derive the rest — and not an inflated restatement |
| B6-4 | **confirmed** — retitled to "All higher complex derivatives exist and satisfy Cauchy's integral formula on an interior circle"; Howell–Mathews 6.5.10 split, existence `included`, smoothness `deferred` to `cor-holomorphic-functions-are-real-analytic-and-smooth` |
| B6-5 | **confirmed** — single `cex-` carrier kept, with the design's FS row accounted for in `canonical` |
| B6-6 / F1…F6 | **confirmed** — none reverted |

Two dependency gaps I chased in `cex-connected-domain-need-not-be-star-shaped`
and **closed as non-defects** by opening the published targets:

- "the rational-function theorem makes it open" is licensed — the Statement of
  `thm-complex-polynomials-and-rational-functions-are-holomorphic` says in terms
  that $D=\{z:Q(z)\ne0\}$ **is open**, and the contract's L1 quotes exactly that
  clause.
- "polygonally connected, hence connected" needs no separate citation:
  `def-polygonal-path-and-polygonal-connectedness` defines a polygonal path *as a
  path* and says so explicitly in its Remarks, so the bridge to
  `thm-path-connected-implies-connected` is definitional.

## New at round 2

**N3 (batch 4) — a dangling contract step reference. Repaired by me.**
`thm-generated-sigma-algebra-exists-and-is-minimal`, derivation `minimality`
(step 1.3), listed inputs `["step 1.1", "step 2.1"]` while the contract has only
steps 1.1, 1.2 and 1.3. Step 2.1 does not exist, so the input map did not cover
its own steps. The intended input is step 1.2 (the power-set witness that makes
the indexing family nonempty), which is exactly what the two lemmas added at
B4-1 use at their own step 1.3. Corrected in
`research/frontier-15-batch-4.proof-contracts.json`. A mechanical sweep for the
same defect across all three batches found **1 dangling step input in 178** — this
one — so it is an isolated transcription slip, not a class.

**N4 (batch 4) — templated boundary rows, 12 clusters. Routed to step 5, not
blocking the splice, and I want the reasoning on the record rather than the
verdict alone.** `tools/boundary-audit.mjs` over the three batches reports 12
template clusters covering 44 of batch 4's 47 contracts — e.g. *"Step 1.1 is
required to handle the empty ambient set, empty family, or vacuous witness
**whenever the statement permits it**"* on 44 `empty` rows, and *"The planned
claim has no zero-sensitive divisor, exponent, stage, or lower index"* on 32
`zero` rows. **Batches 5 and 6 produce zero clusters**, so this is batch 4
specifically, not the run's house style; the two lemmas added at B4-1 are
themselves properly anchored, which shows the Beta can do it and did it when
writing new rows.

I am not holding the splice on this, for a reason I can defend: the owner rule
that a templated `not_applicable` is not a disposition was written about rows on
*authored* proofs, where a false row hides a defect in text that exists — that is
how it played out on `frontier-13` and `frontier-14`. Here no proof exists yet;
`boundary-audit` itself skipped its contradiction detectors on 94 items "not yet
on disk". Writing 220 anchored rows now, against proofs nobody has written, would
manufacture exactly the false confidence the rule targets. The honest disposition
is that these rows are **not yet dispositions and must become them at step 5**,
when the proof they describe exists. `QUALITY-CONTROLS.md` gates `boundary-audit`
after Step 5 and again after Step-6 repairs, which is where this belongs.

Recorded as a step-5 obligation below, and it is the one I would most expect to
be skipped, so it is stated as a requirement rather than a suggestion.

## What I changed on disk in round 2

1. `research/frontier-15-batch-4.proof-contracts.json` — step 1.3 input
   `"step 2.1"` → `"step 1.2"` on `thm-generated-sigma-algebra-exists-and-is-minimal` (N3).
2. `research/frontier-15-alpha-b-step3-verdicts.json` — all three pairs flipped to
   `sufficient`, each with the disk evidence that justifies the flip.

No item was added, deleted or renamed, and no mathematical claim was weakened or
strengthened.

## Gates re-run by me in this dispatch, after the edit

| gate | batch 4 | batch 5 | batch 6 |
|---|---|---|---|
| `coverage-checklist` | 64 harvested, 0 err | 29, 0 err | 92, 0 err |
| `content-policy --manifest-only` | 60 scoped, 0 err | 28, 0 err | 25, 0 err |
| `splice-plan --dry-run` | 2 pages / 60 items | 2 / 28 | 2 / 25 |
| `source-fetch-check` | 6/6 verified | 3/3 | 8/8 |
| `boundary-audit` | 12 template clusters (N4) | clean | clean |
| contract step-reference integrity | 1 dangling, repaired | 0 | 0 |

`validate-plan research/plan-spec.json` is clean for the current unspliced spec.
`scaffold-verdicts --require-sufficient` now passes all three group-b pages; the
run's only remaining `insufficient` is `monads-comonads-and-their-algebras`,
which is batch 7 and not mine.

## Obligations carried into step 5 (round 1's four, plus N4)

1. **Batch 4** — `rem-the-borel-hierarchy-never-stabilizes` takes
   `external_dependency.exact_statement` from **Marker Corollary 2.38**; Christ
   stays corroboration only.
2. **Batch 5** — mint **no** `aliases` on
   `cor-geometric-unit-circle-has-fundamental-group-z`; the agreement remark names
   its two published pages in prose with no B-leaf edge; do **not** apply the F5-7
   edits to `ex-circle-as-r-mod-z` or `ex-torus-as-a-quotient-of-the-square`.
3. **Batch 5** — Beta-5 adds the missing `canonical` coverage rows (N2) at 6b.0.
   Re-confirmed absent at round 2: batches 4 and 6 carry 8 and 13 canonical rows,
   batch 5's coverage file has no `canonical` key at all.
4. **Batch 6** — every use of `cor-closed-contour-integral-of-a-derivative-is-zero`
   discharges its **$F'$ continuous** clause explicitly; `cor-goursat-rectangle-theorem`
   states what its rectangle and oriented boundary are before integrating.
5. **Batch 4 (N4)** — every templated boundary row becomes a real disposition
   anchored to a numbered step of the written proof, or an honest
   `not_applicable` naming why *that* claim has no such case. `boundary-audit`
   after step 5 must show no cluster carried over from the scaffold.

## Verdicts

| pair | verdict |
|---|---|
| `sigma-algebras-and-borel-sets` (+ `-examples`) | **ready for splice** |
| `the-fundamental-group-of-the-circle` (+ `-examples`) | **ready for splice** |
| `goursat-and-cauchys-theorem-in-a-convex-domain` (+ `-examples`) | **ready for splice** |

Nothing blocks step 4 on any of the three, and this time the verdict JSON says so
too. The standing owner decisions F5-6 (un-deferral and id transfer) and F5-7
(stale published scope-denial prose in two B-leaf examples) remain open and are
carried to the step-10 owner report; neither is a step-4 or step-5 action.
