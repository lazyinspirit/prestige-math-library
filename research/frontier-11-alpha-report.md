# frontier-11 — Alpha report

Alpha: Claude Opus 5 (`claude-opus-5[1m]`), `claude` runner, `xhigh`,
1,000,000-token window. Prior artifacts:
`research/frontier-11-alpha-step3-scaffold-review.md` (step 3) and
`research/frontier-11-alpha-recheck.md` (step-3 re-check and the D1 sequencing
plan). This file is the running Alpha report from step 4 onward.

---

# Stage 1 — step 4: propagation into the prose scaffolds (2026-08-12)

I am the single writer of `research/plan-*.md`. I touched **only** those files:
not `plan-spec.json`, not `items/`, not `library/`, not any batch artifact, not
any normative doc. Five prose files changed; `git diff --stat` is 281 insertions
and 12 deletions across them, and **no gate reads any of them** — I checked
`tools/*.mjs` and `tools/*.mts` for a reference to `plan-*.md` and there is none.
So this stage carries no gate consequence, and `validate-plan.mjs --rehomed`
still returns `OK` (220 pages with item lists) after the edits.

Orders in every one of these prose files predate the `frontier-11` renumbering.
I did **not** renumber any heading. A partial renumber is worse than a
consistent stale one, and the standing rule is that `order` is not stable and
must never be quoted from memory. Every amendment block I added says so and
points at `research/plan-spec.json` as the machine authority.

## 1. `plan-combinatorics-and-categories.md` §CT-2 — D9, applied in full

The four amendments Beta-5 proposed and the orchestrator approved.

**(a) The `Nat(F,G)` false-statement clause is removed from the FS line**, and
replaced by a Remark instruction. The clause asserted that
$\operatorname{Nat}(F,G)$ is a set for arbitrary functors between locally small
categories, and then instructed that its "honest refutation is a size argument".
It was **false as written**, so it was never an `fs-` item to refute — it was an
error, and I say that in the amendment rather than letting it read as a
withdrawn preference. What replaces it is what §6.3(2) of the same file and the
published `def-functor-category` actually support: local smallness alone does
not give sethood, whereas the explicit Yoneda bijection *proves* sethood when
the source functor is representable. **No global counterexample is asserted** —
its proper-class calculation is not provable from the size machinery this
library owns, and Beta-5 was right to decline both scaffolding the false claim
and asserting a counterexample it could not prove.

I verified §6.3(2) itself is **correct** and needs no change: it says the
functor category is a legitimate locally small category only when $\mathcal C$
is small and $\mathcal D$ locally small, citing Riehl's "if both are large but
locally small, $\mathcal D^{\mathcal C}$ need not be locally small". The defect
was CT-2's misreading of it, not §6.3.

**(b) The size convention** for $y:\mathcal C\to[\mathcal C^{op},\mathbf{Set}]$.
Checked against the published `def-functor-category` on disk, which forms the
construction only when the source is small and says in terms that for a large
source "the same notation may be used only as metatheoretic shorthand … this
definition does not form those proper-class-sized data into a category". The
amendment therefore instructs: state the objectwise Yoneda assignment and its
local full-faithfulness bijections directly for an arbitrary locally small
$\mathcal C$, and do not silently form a large-source functor category.

**(c) "Full embedding" is reserved.** Checked against published
`def-embedding-of-categories`: an embedding is faithful **and injective on
objects**; a full embedding is an embedding that is also full; and the item
itself notes a fully faithful functor need not be an embedding. So the Yoneda
functor is fully faithful, and is a full embedding only where object-injectivity
actually holds. "Yoneda embedding" is retained as the traditional proper name.

**(d) The $\mathbf{Ring}\to\mathbf{Set}$ example keeps its noncommutative-target
proof note.** The B-page clause is correct as it stands and I confirmed the
mathematics: a homomorphism out of $\mathbb Z[x]$ into an arbitrary unital ring
is determined by the image of $x$, and evaluation is multiplicative because
integer scalars are central and the powers of the chosen element commute with
one another. The amendment records the trap it exists for: **do not cite the
published polynomial universal-property theorem as though its target were
arbitrary**, because that theorem assumes a commutative target. Prove the
convolution formula directly.

I also recorded there that the §CT-2 heading still reads order 289 while
`plan-spec.json` has 361/362, and that no prose renumbering is required.

## 2. `plan-algebra-track.md` §AA-12 — D2, and the D1/D12 re-home

**`requires` now reads `polynomial-rings-and-roots`, `roots-and-rational-powers`**
(D2). The prose already named $\sqrt{\ }$ "from `roots-and-rational-powers`" in
its own square-root clause, so this makes an actually-used dependency declared
rather than hidden inside "elementary algebra".

Five amendments recorded under the Traps paragraph:

1. The `requires` addition and its reason.
2. **The four ℂ items are re-homed here and materially rewritten** (owner D1 of
   2026-08-11, re-decided as D12 on 2026-08-12). Ids unchanged; receipt
   `research/frontier-11-rehomed.json`; the note states plainly that this is a
   material rewrite under SCHEMA §3 and not a relocation, that the model changes
   from the plane $\mathbb R^2$ to the stem field $\mathbb R[x]/(x^2+1)$, and
   why a pure relocation is impossible — published
   `lem-complex-conjugation-and-modulus-laws` takes the triangle inequality from
   `def-p-norms-on-rn` at order 167, and the rewrite derives it from Lagrange's
   identity instead, whose inputs sit at order $\le 9$.
3. **The bridge item** `thm-complex-numbers-are-the-real-coordinate-plane`, with
   the explicit boundary that it states the coordinate bijection and transported
   arithmetic **only**, not the norm identification.
4. **The "no degree here" trap is superseded for this run.** The prose said
   $[K:F]$ belongs at order 92; the `frontier-11` dispatch requires the power
   basis and degree on this page. The scaffold resolves it by getting the degree
   from the proved unique coordinates $1,a,\dots,a^{n-1}$ without importing the
   general dimension theory, which stays at 92. Left unrecorded, this would read
   as the page violating its own design.
5. **Simple transcendental extensions are on the page and $F(x)$ is not** — my
   step-3 overturn of the `out-of-scope` decline (D3), with the standing warning
   that **no field-of-fractions or localisation construction exists anywhere in
   this library** (D10) and nothing here may depend on the term.

## 3. `plan-algebra-track.md` §LA-7 — D6, D7, and my own D-2 correction

The LA-7 prose was already **right** and the `frontier-11` batch-4 dispatch brief
was wrong: LA-7 places minors, cofactors, Laplace expansion, the adjugate, the
adjugate identity and Cramer's rule on this page, not on the determinants page
below it. I recorded that, with the disk evidence (order 82 owns the Leibniz
determinant, alternation, multiplicativity, elementary-row effects, triangular
determinants and similarity invariance, and none of the cofactor block), so the
error is recorded rather than quietly dropped.

Three more: the basis-free characterisation added ahead of basis independence
(the operator determinant scales every alternating top-degree form, via LA-6's
rigidity lemma, top-degree forms only, no exterior algebra); **the rank-one route
to adjugate similarity-equivariance, with an explicit instruction not to
"simplify" it through a rational function field that does not exist** (D7, and
the same D10 gap); and the note that the non-additivity false statement already
exists published as `fs-determinant-is-additive-on-matrices`, so the B page
carries a distinct companion instead of a duplicate id. That last one is **my own
step-3 error**, corrected: I asked for a counterexample id that already exists,
and minting a second would violate SCHEMA §2.

## 4. `plan-algebra-track-expansion.md` §AG-1 — the answer trap (iv) asked for

AG-1's trap (iv) says the cycle-type conjugacy theorem may instead be homed at
order 40 and **"record whichever is chosen"**. It was never recorded. It is now:
the theorem and its relabelling lemma are homed on **this** page; the
prerequisite page keeps only the disjoint-cycle decomposition, transposition
factorisation and $\operatorname{sgn}$ it already publishes. Verified from
`plan-spec.json` — the two ids sit on order 64 and the order-44 page has no
conjugacy or cycle-type item.

Three further records, all correctness-relevant rather than cosmetic: cycle type
is the **published multiplicity tuple** $(c_1,\dots,c_n)$, not the multiset the
DEFS line and most sources use, so every class-size and centraliser formula is
translated rather than copied; **fixed points count as $1$-cycles in the $A_n$
splitting criterion and omitting them makes the criterion false**, with the page
now proving the criterion itself from a general index-two lemma rather than
leaving splitting to the `fs-` item; and "an $n$-cycle and a transposition
generate $S_n$" is false without a relative-position hypothesis, so the A page
proves the standard pair and the B page refutes the unrestricted form.

## 5. `plan-realanalysis-pages.md` §RA-33 — the construction of ℂ leaves the page

`requires` gains `field-extensions-and-the-complex-numbers`, and the DEFS and
THMS lines are **cut**: "C as R^2 with arithmetic and real embedding" and
"conjugate, real and imaginary parts and modulus" leave DEFS; "C is a field and
complete" becomes "C is complete" and "conjugation and modulus laws" leaves
THMS. The page now begins at complex integer powers and the metric.

The amendment states the two things that deliberately **stay**: (1)
`def-complex-metric-convergence-and-continuity` and its "identification
C = R^2" sentence keep their warrant from the new order-54 bridge item; (2) the
identification of the complex modulus with the Euclidean norm $d_2$ needs
`def-p-norms-on-rn` at order 167 and therefore stays here, where the metric item
already cites it directly. And it records that until the step-10 publish commit
the four items are still on disk under this page, with the re-home receipt as
the recorded reconciliation.

## 6. `plan-realanalysis-pages.md` §RA-39 — the refinements-page ruling (D5)

Recorded my step-3 ruling, so that a step-6 reader or a later auditor does not
read 10 items on a page titled *The Fundamental Theorems of Calculus* as
thinness: both theorems are published in sharp form on RA-19, relocating them is
foreclosed (29 published items reference the two ids, 22 with a `deps` edge, and
consumers lie throughout the interval — including this run's own
`arc-length-and-rectifiable-curves`), so the page is legitimately a refinements
page and `rem-ftc-roadmap` is what makes the title an accurate index. The note
lists what the page adds, and gives each of D4's three deferrals its
subject-area reason plus Cousin's lemma's separate one (constructible here, but
no retained result consumes a gauge-fine partition once Botsko is proved by
absorption).

## 7. `plan-realanalysis-pages.md` §RA-29 — arc length, including a miss of mine

Recorded the `sine-cosine-and-the-definition-of-pi` prerequisite addition and
its reason (until the circular-arc computation was added, the pair's main
computational theorem had no worked example anywhere — every B entry was
qualitative), and the three standard results that appeared in **no** source's
contents and are now scaffolded.

And one **open item, recorded against myself**: the **Koch snowflake** and the
**Schwarz lantern** are in RA-29's B inventory and appear in neither the
scaffold nor the coverage ledger — not built, not disposed. I grepped
`frontier-11-batch-2.coverage.json` for `Koch`, `Schwarz`, `snowflake` and
`lantern`: zero hits each. My step-3 review did not catch this, and I used
exactly the "the library's own page design is the naming authority" argument to
require `rem-ftc-roadmap` and Botsko on the sibling page, so consistency
requires flagging it. See §Open items below.

## 8. `plan-realanalysis-pages.md` §RA-27b — D8 recorded, design NOT rewritten

RA-27b is an owner design and I did not touch its content. I added a clearly
labelled note recording how one clause was executed: the design asks the new
companion to relate $\log 2$ to `ex-alternating-harmonic-series-sums-to-log-two`,
but that published id lives on the B page `the-logarithm-and-general-powers-examples`,
and the same B-page leaf rule the design invokes ten lines further down —
`validate-plan.mjs` rule 6 — forbids it as a formal dependency. Beta-4 cites the
A-page `thm-log-one-plus-x-power-series` and proves the $x=1$ specialisation
directly; the older example may still be named in reader-facing prose. Nothing
else changes and $\log 2$ is still computed four ways. **Flagged for the
step-10 report as a deviation from the letter of the owner's design, forced by a
structural rule the design did not anticipate at that clause.**

I put it in the plan file as well as here on purpose: a future Beta scaffolding
or auditing RA-27b reads the plan file, and if the deviation lived only in the
run record they would re-apply the design's letter and reintroduce the forbidden
B-page dependency.

## 9. `plan-complex-analysis-track.md` — the two mirror rows

This file mirrors RA-33 and AA-12 ("Source: `plan-realanalysis-pages.md` §RA-33")
and its order-167 row still read "ℂ as ℝ²; modulus, conjugate". Corrected, the
order-50 row gained the coordinate-plane bridge, and a short amendment under the
table records the re-home, points at the receipt and the full note, and states
that **the modulus/Euclidean-norm identification stays at 167/189** so this track
cites it there and nowhere earlier.

## 10. `plan-combinatorics-and-categories.md` §CB-4 and §GT-6 — batch 3

Batch 3 proposed no amendment, and I invented none. What I recorded are two live
questions the prose itself asks to have answered, plus the two step-3 fixes that
bear on how the prose reads.

**GT-6.** Trap (i) says "Decide once, on this page, and record it" about
asymptotic notation — the scaffold defines $O$, $o$, $\Omega$, $\Theta$ and edge
density in `def-asymptotic-extremal-notation-and-edge-density`, and that is now
recorded. Trap (ii) says Erdős–Stone is denied — but **§9.5's own denial licenses
it on "a dedicated extremal page", which this is**, and the scaffold proves it
through a locally built hypergraph Kővári–Sós–Turán bound with no regularity
lemma. Left unrecorded, a step-6 reader comparing plan to page would read
`thm-erdos-stone-simonovits` as a violation of the page's own design; it is the
opposite, and the 2026-08-11 build-the-machinery rule is what makes the
hypergraph lemma a thing to build. Also recorded: the
$\operatorname{ex}(n,K_{2,2})=\Theta(n^{3/2})$ `fs-` is **dropped on the FS
line's own instruction** with both source headings `deferred` to named receiving
pages, and "$H$-free" means ordinary-subgraph avoidance here while the published
library uses the phrase for induced subgraphs.

**CB-4.** Trap (ii) makes the dictionary item mandatory precisely to stop the
library owning two unrelated formal-series objects. I verified the published
`def-formal-laurent-series` builds $\mathbb R((t^{-1}))$ as functions
$\mathbb Z\to\mathbb R$ with support bounded below — the *same* construction the
scaffold's `def-formal-laurent-series-and-residue` generalises to a field $K$,
citing that item and its ring and valuation lemmas and naming the indeterminate
change $t^{-1}\to x$. So the anti-duplication guarantee holds, in a generalised
shape rather than the isomorphism-to-$\mathbb R((t^{-1}))$ shape #14 describes.
Recorded, **with an instruction that a step-6 reader confirm the published-object
relation is written into the authored text and not merely into the strategy
field** — that is where it currently lives. Also recorded: no fraction field,
localisation, quotient representation or universal property is named (C1), and
D10's absence stands.

---

## What I did not propagate, and why

- **Batch 2's two `requires` additions** (`uniform-convergence-of-functions` on
  the FTC page, `sine-cosine-and-the-definition-of-pi` on arc length) are **not**
  written into the RA-39/RA-29 `<-` prerequisite lines. Those lines are
  design-level sketches, not literal `requires` lists — RA-39's already names
  RA-11, which `plan-spec.json` does not carry as a prerequisite — so editing
  them would imply a mechanical claim they do not make. `plan-spec.json` is the
  authority and already carries both. I recorded the arc-length one in prose
  because the reason for it (the missing worked computation) is design
  information; the FTC one needs no prose.
- **No prose renumbering anywhere.** See above.
- **Nothing marked declined** by the orchestrator was propagated, and I invented
  no amendment a Beta did not propose except where the plan file itself asks for
  a record (AG-1 trap (iv), GT-6 trap (i)) or where an approved change would
  otherwise leave the prose asserting something now false (§RA-33, §AA-12,
  §GT-6 trap (ii), the complex-analysis mirror rows). Each such case is named
  above.
- **I declined nothing a Beta proposed.** Every amendment in a batch's
  `.notes.md` amendment or prose-scaffold section is applied.

## Verification run for this stage

- `node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-11-rehomed.json`
  → **OK**, 220 pages with item lists, no cycles, forward references, B-page
  dependencies or unresolved ids. Only the pre-existing `redundant-prereq`
  warnings.
- `node tools/content-policy.mjs research/frontier-11-batch-1.pages.json --manifest-only --rehomed research/frontier-11-rehomed.json`
  → **54 scoped items, 0 errors, 0 warnings.** **B2 is closed**, verified rather
  than assumed. It had been red with 8 errors since the scaffold was written.
- `research/frontier-11-touches.json` carries the `pre-d1-rewrite` snapshot,
  timestamped 2026-08-11T16:50:19Z — taken before any edit to `items/` or
  `library/`, as S2 requires. It is the baseline `impact-audit.mjs` runs from.
- Order 54 carries 21 items in `plan-spec.json` including all four re-homed ids
  and the bridge; order 189 carries 28 and requires
  `field-extensions-and-the-complex-numbers`. Read from the spec, not from the
  decision record.
- No tool reads `research/plan-*.md`.

## Open items and blockers

- **OPEN (new, step 6) — RA-29's Koch snowflake and Schwarz lantern.** Neither
  built nor disposed; my step-3 miss, recorded in §7 above and in the plan file.
  A faithfulness gap is a **step-6** repair, before the text is frozen. The Koch
  curve's infinite length looks buildable in scope as a uniform limit of
  polygonal paths of length $(4/3)^n$ against the page's own
  lower-semicontinuity theorem; its Hausdorff dimension is not (no Hausdorff
  measure exists here) and the Schwarz lantern needs surface area, which does
  not exist either. **I have not verified those two reasons against the reading
  order** — that verification, and a written disposition naming the specific
  missing machinery for whatever is not built, belongs to step 6.
- **OPEN (step 6) — CB-4's dictionary relation lives in a strategy field.** See
  §10. Confirm it reaches the authored text.
- **B3 remains open — Apostol's internal numbering is unverified.** Section
  titles and page numbers were verified exactly from the book's own contents;
  Definition 6.16 and Theorems 6.17–6.20 could not be read (403/401 on every
  full-text copy I reached). The batch-2 harvest rows citing those numbers are
  unconfirmed at item granularity. Carries into step 6.
- **The `published-unaudited` window is still a decision the owner has not
  taken.** From step 5 until the step-10 publish commit the four re-homed items
  are `status: published`, still listed by published order 189, with their
  `verification.audited` deleted — so `depcheck` raises `published-unaudited`, an
  **error**, for that whole window. `depcheck --pending-audit-ok` exists for
  exactly this class, but its stated sole caller was a legacy gate,
  so using it inside a build is a deviation to record explicitly, not to assume.
  I flagged it in the re-check and I flag it again; it is unavoidable under the
  rewrite reading, because deferring the rewrite to the publish commit would
  mean the step-7 judges never see the final text.
- **No blocker prevents step 5.** No permission prompt was raised or needed;
  `WebFetch` is available now, and I used no web access this stage — every claim
  above is from disk.

---

## Readiness: the run is ready for step-5 authoring

All nine pairs are `sufficient` on breadth and depth, the splice is applied, both
step-4 gates pass, batch 1's manifest gate is now verified green, and the prose
scaffolds no longer contradict the approved plan. Step 5 can start.

### What the authoring Betas must be told, beyond their scaffolds

**Batch 1, the four re-homed ℂ items — this is the part most likely to go wrong.**

1. **They are rewritten in place in `items/`, and they stay `status: published`.**
   Do not flip them to draft: a published page listing a draft item is a hard
   error, and order 189 still lists them until the step-10 commit.
2. **Delete `verification.audited` from all four.** They are dated 2026-08-02 and
   a material rewrite voids them.
3. **There is no `verification.judge` on any of the four** — I read all four
   frontmatter blocks. Nothing to delete there; do not add one. Both judge lanes
   see the new text at step 7 inside order 54/55's frozen pair context.
4. **Re-run `precheck.mts` on all four and record the result.** On disk today
   `thm-complex-numbers-form-a-field` and `lem-complex-conjugation-and-modulus-laws`
   carry `precheck: pass`; the two definitions carry `precheck: n/a`. Those
   stamps describe text that is being replaced.
5. **Ids are immutable and no `aliases` entry is needed**, because no id is
   renamed. Titles and dependency sets do change — that is the rewrite.
6. **`lem-complex-conjugation-and-modulus-laws` must not cite `def-p-norms-on-rn`
   or anything on `rn-as-a-normed-space`.** That is the order-167 forward
   reference the whole re-home exists to remove. The triangle inequality comes
   from Lagrange's identity
   $(a^2+b^2)(u^2+v^2)-(au+bv)^2=(av-bu)^2\ge 0$ plus squaring monotonicity; I
   checked the identity and its inputs (`thm-of-square-roots`,
   `lem-of-square-monotone`, `lem-of-square-positive`) all sit at order $\le 9$.
7. **The bridge item states the coordinate bijection and arithmetic only.** Do
   not let `thm-complex-numbers-are-the-real-coordinate-plane` assert the modulus
   *is* the Euclidean norm $d_2$ — that identification needs order 167 and stays
   on order 189.
8. **The relocated items keep their existing component provenance.** Nothing is
   retro-tagged and no provenance is fabricated; retag only a component the
   rewrite materially alters, and say so in the batch notes.
9. **Do not construct or name a field of fractions or a localisation** anywhere
   in this run (D10). Batch 1's transcendental items work inside an ambient
   field by generated-subfield minimality; batch 3's Laurent dictionary is an
   embedding, not a fraction field; batch 4's adjugate equivariance goes through
   the rank-one update.

**Every batch.**

10. **`plan-spec.json` is the machine authority for orders and item lists.** The
    prose scaffolds carry pre-`frontier-11` orders throughout and are not being
    renumbered. Recompute; never quote a remembered `order`.
11. **The `[rehome]` line disappearing is not proof the move landed.** From the
    moment `library/abstract-algebra/field-extensions-and-the-complex-numbers.md`
    exists, `validate-plan` builds `homePageOf` by walking `library/` and keeping
    the first hit; `abstract-algebra` precedes `real-analysis`, so the
    destination wins by traversal order and `dup-id` passes without consulting
    the receipt. **The only proof the move landed is order 189's page file no
    longer listing the four ids**, which happens in the step-10 commit.
12. **`depcheck` will raise `multi-home` ×4 from the moment both pages list the
    four.** That is a warning and it is the truth; readers see the four exactly
    once, on published order 189, and the second listing is a draft page the
    renderer shows only to the signed-in owner. It is benign and expected.
13. **Write natural numbers directly; no applied `\iota(n)`.** Bare `\iota` as a
    basis inclusion in a universal property is untouched and still correct —
    which matters for batch 5, where free-object universal properties appear.
14. Each Beta authors only what it scaffolded, maintains its own namespaced
    proof-contract file, and at step 6 audits nothing it authored.
