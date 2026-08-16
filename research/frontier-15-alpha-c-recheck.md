# frontier-15 — Alpha-c, step-3 fix-pass re-check

**Group:** `c` (label `recheck-c`), covering **batch 7** only.
**Pair:** `monads-comonads-and-their-algebras` (A, 59 items)
· `monads-comonads-and-their-algebras-examples` (B, 13 items).
**Source of findings:** `research/frontier-15-alpha-c-step3-scaffold-review.md`, ids `B7-1` … `B7-13`.

This file records **two** recheck passes on the same batch. The first pass
confirmed every fix in prose and then **failed to update
`research/frontier-15-alpha-c-step3-verdicts.json`**, so the closure gate
(`scaffold-verdicts.mjs --require-sufficient`) went on re-raising B7-1 … B7-4
from the stale rows and held the stage shut. The second pass — this dispatch —
re-verified everything from disk independently and **updated the JSON**, which is
the artifact that actually gates.

Every disposition below was checked against the file as it now stands, not
against the Beta's `## Step-3 fix pass` claims. Four findings of my own arose
across the two passes; all four are repaired, recorded as `R-1` … `R-4`.

---

## Per finding

| id | outcome |
|---|---|
| B7-1 | **confirmed** — and the newly minted source headings verified against Riehl's PDF |
| B7-2 | **confirmed** (with `R-1` repaired) — Cheng's Examples 2.3/2.4 verified against the PDF |
| B7-3 | **confirmed** |
| B7-4 | **confirmed** — the source premise I left open at step 3 is now verified, not reported |
| B7-5 | **confirmed** |
| B7-6 | **confirmed** |
| B7-7 | **confirmed** on the notes; the design amendment was missing (`R-2`) and then mis-ordered (`R-4`) |
| B7-8 | **confirmed** — and independently source-backed by two sources |
| B7-9 | **confirmed** |
| B7-10 | **confirmed** |
| B7-11 | **pushback accepted** |
| B7-12 | **confirmed**, with one item less headroom than forecast |
| B7-13 | **confirmed** |

**The Beta's four `## Scaffold-fix round` pushbacks (B7-1 … B7-4, "stale closure
finding") are ACCEPTED.** They are correct on disk: all four repairs were already
present, the gate was re-raising them out of my own unmutated verdict file, and
the Beta declined to manufacture a second `applied` claim for work it had already
done. That is the right call — a fabricated `applied` row is precisely what this
stage exists to catch, and refusing to write one is not a refusal to work. The
defect was mine, not the Beta's: my prose said "ready for splice" while my
machine-readable attestation still said `insufficient`.

---

### B7-1 — comonads had no instance — **confirmed**

Both halves are on disk. `cor-comonads-on-a-preorder-are-interior-operators` is
item 38 on A, immediately after `cor-algebras-for-a-closure-operator-monad-are-its-fixed-points`
(item 37) as specified; `ex-the-interior-comonad-on-a-topological-space` is item
7 on B, after the closure example. Both carry full proof contracts.

The two mis-dispositioned coverage rows are genuinely split, not relabelled.
Riehl Example 5.1.7 is now four rows — monads/closure operators, comonads/kernel
operators, topological closure, topological interior — and Example 5.2.6(iv) is
two, algebras and coalgebras. Each row names an item that actually contains what
the row names, which is what the gate could not check and what the omission hid.

**Verified against the source in this dispatch.** A split that mints new heading
text is a place where a Beta could invent a heading the source does not carry, so
I opened `https://emilyriehl.github.io/files/context.pdf` and read Example 5.1.7.
It says, verbatim:

> Dually, a comonad on a poset category (P,≤) defines a **kernel operator**: an
> order-preserving function K so that Kp≤p and Kp=K²p. For example, the poset PX
> of subsets of a topological space X admits a closure operator T A↦Ā … and a
> **kernel operator K A↦A°, where A° is the interior of A⊂X**.

Both new headings are faithful to that. The corollary's Statement is the exact
dual and I re-derived it: a comonad on P is a monad on P^op, so G is monotone with
Gp≤p and Gp≤G(Gp); monotonicity applied to Gp≤p gives G(Gp)≤Gp, and on a poset
antisymmetry collapses these to G(Gp)=Gp — Riehl's kernel operator. Riehl states
the comonad clause for a poset; the preorder half is the exact dual of the page's
own preorder theorem, which is what makes this a corollary and not a new claim.

### B7-2 — distributive laws had no example — **confirmed**

The Cheng locator now reads `Section 2, printed pages 5–6, Definition 2.1
through Example 2.4, stopping before Theorem 2.5`. The cut at the source's own
examples is gone, and Examples 2.3 and 2.4 each carry a result-specific
disposition rather than being dropped.

`ex-a-distributive-law-between-two-finite-closure-operator-monads` is on B and
its contract closes: on `P({a,b,c})` under inclusion, `S(A) = A ∪ {a}` and
`T(A) = A ∪ {b}` are both monotone, extensive and idempotent; `S(T(A)) = T(S(A))
= A ∪ {a,b}`, so the law is the identity and all four axioms hold automatically
because the poset is thin; the composite is the closure operator adjoining both
elements. That is a concrete distributive law *together with* the composite
monad it induces, which is what the finding demanded. Recording it as a local
instance rather than attributing it to Cheng is the honest choice and I approve it.

**Verified against the source in this dispatch.** I opened
`https://compositionality.episciences.org/13507/pdf`. Example 2.3 is "(Rings)
C = Set, S = free monoid monad, T = free abelian group monad, λ = the usual
distributive law for multiplication and addition … Then the composite monad TS is
the free ring monad." Example 2.4 is "(2-categories) C = 2-GSet, the category of
2-globular sets … λ is given by the interchange law." Theorem 2.5 is the next
numbered result. Both headings are faithful and the declared stop is exact.

*Advisory, not blocking:* the locator's printed-page numerals are one page short
at the tail — Example 2.4's interchange-law display runs onto printed page 7, not
6. Nothing is hidden by this: the range's endpoint is declared **by result**
("stopping before Theorem 2.5"), which is the binding form and is exactly right,
and every heading inside it has a disposition. The step-6 faithfulness pass
should tighten the numeral.

One defect in a decline reason, repaired as `R-1` below.

### B7-3 — the ultrafilter monad was never computed — **confirmed**

`ex-the-ultrafilter-monad-on-a-finite-set` is on B. The `requires` consequence I
asked not to be skipped was not skipped: `filters-and-ultrafilters-examples` is
in the **B page's** `requires`. I recomputed the closure from `plan-spec.json`
myself — all three published witnesses
(`ex-ultrafilter-selects-a-cell-of-a-finite-partition`, `ex-principal-ultrafilter`,
`ex-free-ultrafilter-on-naturals`) are hosted inside it, so step 4 will not raise
`undeclared-prereq`.

The choice scope is named in the Statement itself — "assuming the ultrafilter
lemma, its unit is not invertible on the natural numbers" — which is what the
finding required. `rem-feferman-no-free-ultrafilter-in-zf` is absent from `deps`;
I named it as the reason the scope must be stated rather than as a required
edge, and the Statement states it, so this is correct as it stands.

The `nonempty-choice` boundary row is a real disposition and not a template:
it distinguishes steps 1.1–3.1, which need no choice, from step 4.1, which
assumes the ultrafilter lemma. The `empty` row proves `β(∅) = ∅` rather than
waving at it — correct, since an ultrafilter on ∅ would have to contain ∅.

### B7-4 — "the category of monads" was `inline` into a definition — **confirmed**

On disk the single Mac Lane heading is now two rows: `Section VI.1 reader task,
morphisms of monads on a fixed category` → `def-monad-morphism`, and `…, the
category of all monads on a fixed category` →
`thm-monad-morphisms-on-a-fixed-category-form-a-category`, both `included`. The
disposition that a definition could not establish is gone. The new theorem is
item 32, immediately after the definition at 31, and its route closes: identity
monad morphisms, closure under composition via naturality and the two
compatibility equations, then associativity and the identity laws inherited from
vertical composition. Its size hypothesis cites
`rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists`,
so the page applies its own size discipline to the harvested result instead of
dropping it — which was the substance of the finding.

**This is the one premise my step-3 review left to the Beta** ("you hold the
source, so check which the row actually says"), and the whole remedy rests on it:
if Mac Lane does not pose the category of monads, the heading is invented and the
right repair was option (b), correcting the heading, not option (a). The Beta
reported option (a). Rather than accept the report, I opened
`https://math.mit.edu/~hrm/palestine/maclane-categories.pdf`. Printed page 139
closes §VI.1 with:

> We leave the reader to describe a morphism ⟨T, μ, η⟩→⟨T, μ', η'⟩ of monads (a
> suitable natural transformation T ⇒ T') and **the category of all monads in a
> given category X**.

The Beta's source claim is true verbatim, option (a) was the right branch, and
both heading texts are faithful shortenings ("in a given category X" → "on a
fixed category"). B7-4 is closed on evidence, not on assertion.

The optional monad-morphism example was not added. It was explicitly
non-blocking and I am not raising it again.

### B7-5 — `undeclared-prereq` — **confirmed**

`categories-functors-and-natural-transformations-examples` is in the A page's
`requires`. I recomputed the transitive closure over both pages from
`plan-spec.json` in this dispatch: **81 pages from A, 82 from B, and every
dependency of every item on either page is hosted inside its own page's closure
and strictly earlier in plan order** — with two exceptions, `thm-int-comm-ring`
and `def-free-abelian-group`, which have no owning page object in `plan-spec.json`
at all. Those are the pre-existing homeless pair the Beta declared and I accepted
at step 3, used only inside `ex-the-free-abelian-group-monad`. Unchanged, still
non-blocking.

(The first recheck pass reported 82 and 84 for the same two closures. The
difference is a seeding convention, not a disagreement about content — both
passes find zero out-of-closure dependencies. The numbers above are the ones I
computed and are the ones I attest to.)

I also checked on-page citation order across both pages mechanically: **no item
cites a later item on its own page**, including all five new items. And no new
id collides with any of the published items in `items/`.

### B7-6 — eleven undeclared load-bearing dependencies — **confirmed**

I checked all eleven individually against `pages.json`, not as a group. Each
addition is present on its item:
`prop-fully-faithful-functors-reflect-isomorphisms` on the conservativity
theorem; `def-monad` on the distributive-law theorem; the adjunction definition
and the induced-monad theorem on both the comparison and the Kleisli
factorisation theorems; `def-semigroup-and-monoid`, `def-group` and
`def-left-and-right-modules` on the three free-algebra theorems;
`def-semigroup-and-monoid` on `fs-every-algebra-for-a-monad-is-free`;
`def-partial-order` on the preorder theorem and on the power-set algebra
theorem; and both order notions on
`cor-algebras-for-a-closure-operator-monad-are-its-fixed-points`.

### B7-7 — the id asserting the negative of its own theorem — **confirmed on the notes; design amendment repaired twice**

The rename holds everywhere it was applied:
`thm-eilenberg-moore-creates-base-colimits-preserved-by-the-monad-and-its-square`
with its positive title in `pages.json` (1 occurrence), `coverage.json` (3), the
contract key in `proof-contracts.json` (2), and — the part owed by the Beta —
notes entry 24 and the component-provenance table row. Both were synced. The old
id survives in exactly two places in the batch, both of them deliberate: the
notes' amendment anchors, which have to quote the design's *current* text to
match it.

What was **not applied** at the first recheck: the notes' `## Applyable edits to
research/plan-category-theory-track.md` section carried no rename instruction, so
applying the amendments as written would have left
`research/plan-category-theory-track.md` line 1318 naming the withdrawn id — a
design entry asserting a negative the item does not prove. Repaired as `R-2`.

What was wrong with that repair, found in **this** dispatch: the added subsection
and the pre-existing `### Insert after the limit theorem` subsection anchor on
the **same** design line, and applying them in the wrong order silently destroys
one anchor. Repaired as `R-4`.

Both defects route past every gate: I confirmed myself that `splice-plan.mjs`
reads no `.md` file at all, so nothing mechanical would catch either.

### B7-8 · B7-9 — **confirmed**

Both titles are on disk verbatim as applied: the preorder theorem biconditional
in both clauses, matching its "exactly" id and its two `checked` iff contract
rows; the free-module theorem fixing the unital ring `R` and concluding in left
`R`-modules.

B7-8 was my own repair at step 3, argued from thinness of the preorder rather
than from a source. Reading the two PDFs for B7-1 and B7-4 incidentally settled
it from the literature as well, and both sources state it biconditionally: Riehl
5.1.7, "A monad on a preorder (P,≤) **is given by** an order-preserving function
T:P→P that is so that p≤Tp and T²p≤Tp"; Mac Lane p. 139, "there are natural
transformations η and μ as in (1) **precisely when** x≤Tx, T(Tx)≤Tx". The
strengthened title is literature-derived, not merely inferred by me.

### B7-10 — the `fs-` item that did not refute its own Statement — **confirmed**

`strategy` is `endomorphism-monoid-count` and all six dependency additions are
present. The check that matters is the contract, because a preserved strategy
string over a stale route would be exactly the failure this stage exists for:
the contract's derivations now run 1.1 (Kleisli endomorphisms of `X` are
`Set(X, X*)`), 2.1 (one if `X = ∅`, infinite otherwise), 3.1 (the two-element
idempotent monoid has exactly two), 4.1 (an equivalence is fully faithful, so no
object of `C_T` can correspond), 5.1 (the positive boundary). `nonfree-monoid-witness`
appears **nowhere in any batch-7 artifact** — the route is gone, not renamed.

I re-derived the argument and it closes as titled: every Kleisli object has one
or infinitely many endomorphisms, `Mon` has an object with exactly two, an
equivalence is fully faithful and essentially surjective and so induces a
bijection on some endomorphism set, contradiction. That refutes the equivalence
of the categories, which is the Statement, and not merely the weaker claim about
the comparison functor.

### B7-11 — templated boundary rows — **pushback accepted**

The Beta left them, which is what I advised. Re-run for myself in this dispatch:
`boundary-audit.mjs` reports 440 rows, 287 `not_applicable`, no template cluster
at or above three members, no contradicted disposition. The instruction to
replace any row that turns out to be live at step 5 is recorded in the notes.

I spot-read the rows on all five new items rather than trusting the aggregate.
None is a template: the ultrafilter example's `nonempty-choice` row separates the
choice-free steps from the ultrafilter-lemma step; the distributive-law example's
`empty` and `one` rows name the actual subsets checked; the category-of-monads
theorem's `empty` row works out the empty fixed category. These are the rows the
`frontier-13`/`frontier-14` defect would have templated, and they are disposed.

### B7-12 — the split contingency — **confirmed, with less headroom than forecast**

No split, correctly. But the A page is at **59**, not the 58 I forecast at step
3: B7-4's theorem also landed on A, which I had not counted when I wrote "58
after B7-1's corollary". Headroom against the 60-item ceiling is **one item**.

That does not change the adjudication — 59 is legal, the design intends one
page, and I am not ordering a split on a forecast — but it tightens the standing
instruction. Every further addition to this pair goes on the **B page**, which
`validate-plan.mjs` does not size-cap. The pre-adjudicated cut (items 1–36 stay;
37 onward move to `standard-monads-ultrafilters-and-comonad-algebras` with its
companion) is recorded verbatim in the Beta's notes and stands unchanged, so
step 6 will not have to improvise it under a frozen text.

### B7-13 — interpretive filler — **confirmed**

The sentence about what the dependencies are "for" is replaced by a fact: "For a
small category, its endofunctors and natural transformations form the functor
category from that category to itself." The summary is two nonempty prose
paragraphs, each well under 150 words.

---

## Findings of my own, raised and repaired across the two passes

### R-1 — a decline reason asserting something untrue of the library

`coverage.json`, Cheng Example 2.3, declined `deferred` with the reason "The
free-ring identification belongs to the polynomial and commutative-ring track
**that constructs free rings**."

No such construction exists. `grep -rlE "free ring|free-ring|monoid ring|tensor
algebra" items/*.md` returns nothing across 4,986 items, and the published ring
track (`polynomial-rings-and-roots`, order 52, and the pages above it) builds
*commutative* polynomial rings only —
`ex-polynomial-ring-represents-the-underlying-set-functor-on-rings` is explicitly
the commutative case. The free ring on a set, which is what Cheng's composite
monad is, is nowhere in the library and on no planned page.

The **disposition is still right**: under the 2026-08-11 rule the free ring on a
set is a subject area the library has not reached, which is a permitted ground
for `deferred`. What was wrong was the ground it named — it pointed at an
existing track and claimed that track already does the work, which converts a
legitimate decline into an unverifiable one and would have been read as
faithful at the step-6 pass.

**Repaired**, reason now: "The composite monad here is the free ring on a set, a
construction the library has not reached: its published ring development builds
commutative polynomial rings only, and no page supplies a free ring, monoid ring
or tensor algebra on a set. A faithful local version would have to construct that
monad first; this pair instead gives a finite dependency-closed distributive-law
instance."

Cheng's own text confirms the premise of the repaired reason: "Then the composite
monad TS is the free ring monad." Nothing about B7-2's blocking requirement
depends on this — that requirement is met by the finite instance, which I
authorised as an acceptable alternative.

### R-2 — the missing design amendment for the B7-7 rename

**Repaired.** Added a `### Colimit-theorem id rename (B7-7)` subsection to the
notes' `## Applyable edits to research/plan-category-theory-track.md`, giving the
exact old text at line 1318 and the exact new text, and noting that
`splice-plan.mjs` reads only the manifest so this one has to be applied by hand.
It now travels with the rest of the Beta's amendments to the lead Alpha at step 4.

### R-3 — the declared mechanical blocker was environmental, and is closed

The Beta recorded one open blocker: `source-fetch-check.mjs --stamp` returning
`ENOTFOUND` for all four source hosts. DNS resolves in my sandbox, so it was run
rather than passed forward: **4/4 fetch-verified, 4 newly stamped**, and
`url-sweep.mjs --recover --fail-on-dead` → **4/4 live, 0 failed, 0 recoverable,
0 suspect**.

Independently corroborated in this dispatch: the Mac Lane stamp records
25,106,952 bytes, which is byte-for-byte the size of the copy I downloaded myself
to check §VI.1. The stamps are of the documents actually cited.

### R-4 — two design amendments anchored on the same line, in the destructive order

**Found and repaired in this dispatch.** `### Insert after the limit theorem`
anchors on design line 1318 *by the old id* and inserts
`cor-every-category-monadic-over-set-is-complete` immediately before it. `###
Colimit-theorem id rename (B7-7)` — R-2's own repair — replaces that same line
1318 outright.

Apply the rename first and the other subsection's anchor text no longer exists.
Since `splice-plan.mjs` reads no prose file (verified: the tool contains no `.md`
read at all), an unmatched anchor produces no gate output and no error — the
corollary entry would simply be dropped from the design with nothing to notice
it. This is the same class of defect as R-2, one layer down: the repair for a
transcription gap introduced a transcription-order gap.

**Repaired**, by adding an explicit application-order paragraph to the rename
subsection naming the other subsection, the required order, and why a wrong order
fails silently.

---

## Provenance of the five new items

Checked because new scaffold items are where an ineligible dependency enters.
Every dependency of every new item resolves on disk to a `status: published` item
or to an earlier item on the same pair, and **not one published target has an
`ai-generated` Statement** — verified mechanically this dispatch, reading the
frontmatter of each target.

Three new items are `literature-derived` in their Statement:
`thm-monad-morphisms-on-a-fixed-category-form-a-category` (Mac Lane §VI.1,
verified above), `cor-comonads-on-a-preorder-are-interior-operators` and
`ex-the-interior-comonad-on-a-topological-space` (Riehl 5.1.7 and 5.2.6(iv),
verified above). All three labels are now backed by the source text I read, not
by the Beta's report of it. Eligible.

Two are `ai-generated` in both components:
`ex-a-distributive-law-between-two-finite-closure-operator-monads` and
`ex-the-ultrafilter-monad-on-a-finite-set`. Both are **B-page examples** — the
one category generated-claim minimization permits — and I verified mechanically
that **neither is used as a dependency by any item on either page** (0
load-bearing uses). Both carry item-specific truth-risk verification obligations
in the notes rather than a generic line, and both are finite, fully checkable
computations that I checked by hand, so no counterexample search is triggered.

Advisory only: `ex-the-ultrafilter-monad-on-a-finite-set` is arguably
over-labelled — every ultrafilter on a finite set being principal is standard,
and the published `ex-ultrafilter-selects-a-cell-of-a-finite-partition` carries
it. Over-labelling costs an extra verification obligation and never costs
correctness, so I am leaving it.

---

## Gates run in this dispatch

| gate | result |
|---|---|
| `coverage-checklist.mjs` | 1 page, **177** harvested results, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only` | **72** scoped items, 0 errors, 0 warnings |
| `boundary-audit.mjs` | 440 rows, 287 `not_applicable`, no template cluster ≥3, no contradicted disposition |
| `url-sweep.mjs --recover --fail-on-dead` | **4/4** live, 0 failed, 0 recoverable, 0 suspect |
| `scaffold-verdicts.mjs --require-sufficient` | red on batch 7 **from the stale verdict file** — the defect this dispatch closes |

All re-run *after* the R-4 repair, not before. `source-fetch-check` stamps are
present on all four sources on disk and were not re-stamped.

Checks I wrote myself, because no gate covers them before the splice: the
`requires` transitive closure with every dependency's hosting page and plan order
(81 pages from A, 82 from B, 0 out-of-closure, 2 homeless and pre-declared);
on-page citation order on both pages (no forward citation); id collision against
every published item (none); load-bearing use of the two `ai-generated` examples
(none); and full-text verification of three of the four sources at the exact
locators carrying a blocking finding.

One methodological correction, recorded because it nearly became a false report:
my first invocation of `coverage-checklist.mjs` followed the `--manifests` form in
the tool's own header comment and reported a `coverage-missing-page` error. The
flag is filtered out and never read — the tool treats *every* non-flag argument
as a coverage file, so passing the manifest alongside makes it parse the manifest
as coverage and fail. The error was mine, it reproduces identically on batch 1,
and the header comment is a doc bug worth fixing separately. The batch is clean.

I did **not** run `validate-plan.mjs` or `depsource.mjs` as authoritative gates
on this batch — the manifest is not spliced until step 4, and a claim that a
gate would pass is not a gate passing. My closure recomputation is the best
available substitute and is stated as such.

---

## Verdict

| pair | verdict |
|---|---|
| `monads-comonads-and-their-algebras` · `-examples` | **ready for splice** |

All four blocking findings (B7-1 … B7-4) are fixed on disk, and the fixes are
real rather than reported: each was checked at the file; B7-10's — where a
preserved strategy string could have covered a stale route — was checked at the
proof contract, where the old route is gone; and B7-1, B7-2 and B7-4, whose
remedies each rested on a claim about what a source says, were checked against
the source PDFs. All six Alpha-applied repairs (B7-5 … B7-10) survived the Beta's
pass intact. The three advisories were disposed as advised.

`research/frontier-15-alpha-c-step3-verdicts.json` is updated to `sufficient` in
this dispatch. That file, not this one, is what the closure gate reads.

Nothing blocks the splice. Two items carry forward, neither of them a blocker:

1. **The design-file rename is the lead Alpha's to apply at step 4**, and the two
   amendments touching line 1318 must be applied **insertion first, rename
   second** (R-4). No gate will catch either, because `splice-plan.mjs` never
   reads the prose design — this needs a human read at step 4, not a green gate.
2. **One item of headroom on the A page.** Put every further addition on B.

One advisory for the step-6 faithfulness pass: the Cheng locator's printed-page
numerals stop one page short of where Example 2.4 ends. The result-named
endpoint is exact and no heading is missing a disposition, so nothing is hidden;
the numeral should be tightened when the sources are reopened.
