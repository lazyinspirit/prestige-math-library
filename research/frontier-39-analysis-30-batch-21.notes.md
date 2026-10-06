# Batch 21 notes — `weyl-character-and-multiplicity-formulas`

Run: `frontier-39-analysis-30`. Pair: `weyl-character-and-multiplicity-formulas`
(A, order 510.013, `lie-theory`) / `weyl-character-and-multiplicity-formulas-examples`
(B, order 510.014). Design: `research/plan-representation-theory-lie-track.md`
L1034 (RL-7) together with its binding 2026-09-08 audit. Manifest:
`research/frontier-39-analysis-30-batch-21.pages.json` (19 A items, 6 B items).
No `research/frontier-39-analysis-30-owner-authoring-direction.md` exists.

## Design versus plan

The design's `requires` list for the pair, its RL-7 item inventory (17 A ids +
6 B ids = 23, the count the 2026-09-08 audit fixes), the proof route (RL-6
Euler identity -> denominator -> numerator -> Weyl character -> Kostant ->
Freudenthal -> dimension limit) and its two warning points (the character
formula is a formal quotient; singular numerators are handled through the
alternant) agree with `research/plan-spec.json` and with the audit. **No
design/plan conflict was found; none is recorded.** The design's conventions —
$Q_+$, $P$, $\rho=\tfrac12\sum_{\alpha>0}\alpha$, $w\circ\lambda=w(\lambda+\rho)-\rho\),
$L(\lambda)$ — are the published library conventions and are used verbatim.

## Inventory

A page (19 items, all with explicit `deps` and `dependency_level`):

1. `def-completed-formal-character-ring-for-downward-cones` (level 0)
2. `def-formal-character-of-a-finite-dimensional-weight-module` (1)
3. `prop-formal-characters-are-additive-and-multiplicative` (2)
4. `def-weyl-alternation-operator` (1)
5. `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` (2)
6. `lem-weyl-length-parity-is-multiplicative` (0) — **added prerequisite**
7. `lem-weyl-alternants-are-skew-invariant` (2)
8. `lem-geometric-series-invertibility-in-the-completed-character-ring` (2) —
   **added prerequisite**
9. `thm-weyl-denominator-identity` (3)
10. `lem-bgg-euler-character-gives-the-weyl-numerator` (4)
11. `thm-weyl-character-formula` (5)
12. `def-kostant-partition-function` (3)
13. `thm-kostant-weight-multiplicity-formula` (6)
14. `lem-casimir-comparison-on-a-weight-vector` (0)
15. `lem-positive-root-strings-sum-the-freudenthal-correction` (1)
16. `thm-freudenthal-weight-multiplicity-recursion` (2)
17. `cor-freudenthal-recursion-terminates-from-the-highest-weight` (3)
18. `lem-regularized-evaluation-of-the-weyl-character-quotient-at-one` (6)
19. `thm-weyl-dimension-formula` (7)

B page (6 design ids, levels 4-9): `ex-weyl-character-and-dimension-formulas-for-sl2`,
`ex-a2-weyl-denominator-expansion`, `ex-kostant-multiplicity-in-the-sl3-adjoint-module`,
`ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`,
`cex-omitting-the-rho-shift-breaks-kostants-formula` (statement and proof
`ai-generated`, `generation.role: counterexample`; not a dependency target),
`ex-weyl-dimension-formula-for-a-fundamental-sl3-module`.

### Why the two added ids are prerequisites, not padding

* `lem-weyl-length-parity-is-multiplicative` is the sign homomorphism
  $(-1)^{\ell}= \det$ used by `lem-weyl-alternants-are-skew-invariant`; the
  reindexing $x\mapsto w^{-1}x$ needs $\ell(w^{-1}y)\equiv\ell(w)+\ell(y)$,
  which the design's `lem-weyl-alternants-are-skew-invariant` assumes silently.
  It is choice-free (determinants over $\mathbb R$, no AC).
* `lem-geometric-series-invertibility-in-the-completed-character-ring` supplies
  the formal inverse of $\prod_{\alpha>0}(1-e^{-\alpha})$ and of $A(\rho)$ that
  the quotient form of the Weyl character formula and the Kostant extraction
  both use; the published `prop-formal-character-of-a-verma-module` asserts the
  geometric series without the invertibility statement. It is choice-free
  (coefficient bounds by height).
* Both are local to the A page, so no cross-batch change or page split is
  required; the page remains far below the 100-item cap.

### AC discipline

The precise assumption has been carried explicitly. Items whose evidence uses
an AC-stating published supplier (`cor-bgg-euler-character-identity`,
`prop-finite-dimensional-representations-...-decompose-into-weight-spaces`,
`thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
`lem-simple-reflections-preserve-weight-multiplicities`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`,
`prop-opposite-root-spaces-bracket-to-the-killing-dual-line`,
`prop-the-adjoint-representation-has-highest-weight-the-highest-root`,
`prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`,
`prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`,
`def-integral-dominant-and-strictly-dominant-weights`,
`thm-the-root-set-is-a-reduced-crystallographic-root-system`) carry "Assume the
Axiom of Choice." and `def-axiom-of-choice` in `deps`. `def-completed-formal-character-ring-for-downward-cones`,
`def-weyl-alternation-operator`, `lem-weyl-length-parity-is-multiplicative`,
`lem-weyl-alternants-are-skew-invariant`,
`lem-geometric-series-invertibility-in-the-completed-character-ring` and
`def-kostant-partition-function` are choice-free and do not: their finiteness
arguments are coefficient bounds by height over the finite Weyl group.

## Published prerequisites examined (statements and proofs read)

`harish-chandra-isomorphism-casimir-and-central-characters`,
`verma-modules-and-shapovalov-forms`, `the-bgg-resolution`,
`category-o-finiteness-duality-and-blocks` and the DG-31/DG-32 pages supply the
following used items, all `status: published` and all homed on A pages:
`def-finite-weyl-root-system-lattice-and-chamber-conventions`,
`lem-finite-weyl-positive-roots-and-simple-reflections`,
`prop-weyl-length-equals-positive-root-inversion-number`,
`prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
`def-root-reflections-and-the-weyl-group-action`,
`def-weyl-vector-rho-for-a-chosen-positive-system`,
`def-integral-dominant-and-strictly-dominant-weights`,
`def-fundamental-weights`, `def-height-of-a-root-and-highest-root`,
`prop-root-systems-of-the-classical-complex-lie-algebras`,
`def-classical-complex-matrix-lie-algebras`,
`lem-positive-root-pairings-of-a-dominant-integral-weight`,
`def-weight-and-weight-space-of-a-lie-algebra-representation`,
`prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`,
`prop-root-vectors-shift-weight-spaces`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`,
`prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`,
`prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`,
`thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
`prop-the-adjoint-representation-has-highest-weight-the-highest-root`,
`lem-simple-reflections-preserve-weight-multiplicities`,
`prop-direct-sum-dual-hom-and-tensor-representations`,
`prop-verma-and-finite-dimensional-modules-lie-in-category-o`,
`prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`,
`def-grothendieck-group-and-character-of-category-o`,
`prop-formal-character-of-a-verma-module`,
`cor-bgg-euler-character-identity`,
`def-quadratic-casimir-element`,
`prop-the-quadratic-casimir-element-is-central`,
`prop-casimir-eigenvalue-on-a-highest-weight-module`,
`def-killing-form-of-a-semisimple-lie-algebra`,
`prop-killing-form-pairs-only-opposite-root-spaces`,
`prop-opposite-root-spaces-bracket-to-the-killing-dual-line`,
`lem-finite-semisimple-cartan-root-and-string-structure`,
`cor-determinant-multiplicativity-from-the-top-exterior-power`,
`cor-the-top-exterior-power-acts-by-the-determinant`.

Every wikilink in a manifest statement resolves to one of these ids, to another
item of this batch, or to `def-axiom-of-choice`. **No missing, circular,
forward or inadequate dependency was found.** The convention checks performed:
$B(e_\alpha,f_\alpha)=1$ with $[e_\alpha,f_\alpha]=H_\alpha$ the Killing-dual of
$\alpha$ (so $\mu(H_\alpha)=(\mu,\alpha)$) is exactly the normalisation under
which the published Casimir eigenvalue is $(\lambda,\lambda+2\rho)$; with it the
trace computation reproduces the design's Freudenthal right side
$2\sum_{\alpha>0}\sum_{j\ge1}(\mu+j\alpha,\alpha)m(\mu+j\alpha)$ and not the
coroot-normalised variant. The published `cor-bgg-euler-character-identity`
uses the same dot action and Verma character as this page.

## Sources

Read in full, harvested in `research/frontier-39-analysis-30-batch-21.coverage.json`:

| source | kind | locator actually read | fetch |
|---|---|---|---|
| P. Etingof, *Lie Groups and Lie Algebras II* (MIT 18.755, 2024) | lecture-notes | §26, printed pp. 138-144 | 4247073 bytes, 284 pp. |
| A. W. Knapp, *Lie Groups Beyond an Introduction*, 2nd ed. | textbook | Ch. V §6, printed pp. 318-324 | 5060066 bytes |
| A. Moreau, *Representation Theory of Lie Algebras* (Paris-Saclay M2, 2025-26) | lecture-notes | §§11.2-11.3 pp. 80-81; §§13.1-13.3 pp. 93-100 | 6139270 bytes |
| B. Weber, *Weyl Dimension Formula II* (Penn Math 651) | course-notes | pp. 1-4 | 175462 bytes, 4 pp. (one HTTP 403 with a non-browser UA, recovered with a browser UA) |
| R. Borcherds, Berkeley Math 261 notes | course-notes | printed pp. 146-148 (Freudenthal formula) | 45573 bytes, 3 pp.; short-document reading receipt attached |

`source-fetch-check --stamp` result: 8/8 sources fetch-verified (the A-page
entry carries five sources, the B-page entry three), then check mode: 8/8
resolved, no documented drops. Coverage gate:
`coverage-checklist: 2 page(s), 56 harvested result(s), 0 error(s), 0 warning(s)`.

### Deviations from the design's source locators, recorded honestly

* The design's second treatment for RL-7 is Humphreys, *Introduction to Lie
  Algebras and Representation Theory*, §§22-24 (djvu.online mirror
  `https://djvu.online/file/Xw7ovfkTWqu21`). That mirror serves a
  JavaScript bot-wall, not the book; a university-repository PDF of the book
  yielded only front matter (12 pp.). It is **not** claimed as read here.
  Humphreys is replaced by Knapp Ch. V §6 (a full book treatment of the
  denominator, character, Kostant and dimension formulas, read in full at
  printed pp. 318-324) plus Moreau §§11-13 and Weber, so the "two independent
  treatments including a book" requirement is met by Etingof §26 + Knapp §6
  with Moreau and Weber as further full checks.
* The design's Freudenthal source is Elduque, *Lie Algebras* notes ch. 3 §5
  (MSU mirror). That host answers every request with a 212-byte bot wall
  (reproduced with and without a browser UA, http and https, and a Wayback
  CDX/ID lookup that returned no snapshot). The Freudenthal rows are instead
  harvested from Moreau Lemmas 11.5-11.6 and Theorem 11.7 and from Borcherds'
  Berkeley notes printed p. 146. No mathematical claim rests on an unread
  source.
* The Borcherds stamp is written by this scaffolder from its own verified
  download (sha256 `7e1f349587064f26...`, 45573 bytes, 3 PDF pages) after the
  fetch tool had recorded six bodies whose classification was rejected only
  because the short-document reading receipt had not yet been supplied; the
  receipt and the attempt history are both preserved in the coverage file and
  `fetch_note`. No retrieval of that source failed.

## Checks run (actual results)

* `node tools/manifest-deps.mjs` on the batch: 25 item(s), 0 missing, 0 errors.
* `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-21.pages.json`:
  25 scoped item(s), 0 errors, 0 warnings.
* `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  no error on any batch-21 item; the only errors reported are
  `empty scaffold inventory` for the other 29 batches, which are still
  unscaffolded while this batch ran (the stage gate runs after all batches).
* `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-21.coverage.json --require-destination`:
  0 errors, 0 warnings.
* `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-21.coverage.json`:
  8/8 fetch-verified, 8/8 resolved.
* `node tools/validate-plan.mjs research/plan-spec.json`: see the check log
  appended below (run from the repository root; it validates the shared plan,
  not this batch's content).
* `node tools/extcheck.mjs`: whole-run external-reference check; scoped to the
  run, it will fail while other batches are empty shells, not on any batch-21
  item. Batch-21 declares no `proved_here: false` item and no `forward_refs`.

## Cross-batch dependencies

None. The A page's `requires` and every item `deps` edge target either a
published item or an item of this same batch. The peer batch 22
(`tensor-product-multiplicities-and-littlewood-richardson`, RL-8) is the known
*consumer* of this batch (it needs the alternant and Weyl/Kostant formulas per
its design), so its cross-batch review input is owed by batch 22, not here;
`research/frontier-39-analysis-30-batch-21.cross-batch-dependencies.json` is
written as the empty list. Batch 22 waits for this batch's scaffold to be
complete through the engine's `unitPrerequisites`.

## Readiness and unresolved uncertainty

All 25 items are recorded `ready`: each has a complete proof strategy, an
explicit dependency list, published and read prerequisites, and a source
locator. No item is escalated. No published defect was found in any supplier
used. Residual uncertainty (recorded, not hidden): the design's Humphreys and
Elduque locators could not be read in this dispatch and were replaced by
accessible full treatments as detailed above; this is a source-substitution
deviation for owner/Step-3 review, not a mathematical gap.

## Check log (verbatim results)

* `node tools/validate-plan.mjs research/plan-spec.json` — OK: declared page
  order is acyclic and consistent; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among the 1420 page(s) with item
  lists.
* `node tools/extcheck.mjs` — OK: every recorded-not-proved statement is a
  cited remark with no proof, and every consequence is marked (three advisory
  `[unproved-on-published]` rows on unrelated published items).
* `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  — `manifest-deps: 215 item(s), 0 normalized, 0 error(s)`.
* `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  — `content-policy: 215 scoped item(s), 0 error(s), 0 warning(s)`.
* `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` —
  no error on any batch-21 item; the only errors are `empty scaffold inventory`
  for batches that had not yet been scaffolded when this batch finished.
* `node tools/coverage-checklist.mjs .../batch-21.coverage.json --require-destination`
  — `2 page(s), 56 harvested result(s), 0 error(s), 0 warning(s)`.
* `node tools/source-fetch-check.mjs --coverage .../batch-21.coverage.json` —
  `8/8 source(s) fetch-verified`, `8/8 source(s) resolved (0 documented drops)`.
* `node tools/url-sweep.mjs --coverage .../batch-21.coverage.json --out <temp> --recover --fail-on-dead`
  — exit 0: `4/5 live; 1 failed (1 previously fetched, 0 blocking)`; the one
  UNAVAILABLE is the Weber URL, whose full-text `fetch_verified` stamp keeps the
  gate continuing with the link maintenance visible.
* `node tools/source-backing.mjs --coverage .../batch-21.coverage.json --liveness <temp>`
  — `22 authored result(s) across 1 file(s), every one still backed by an
  openable source or documented alternative argument`.
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed; batch 21's empty consumer input is accepted. The only run-ledger
  edge touching batch 21 is `page tensor-product-multiplicities-and-littlewood-richardson
  requires weyl-character-and-multiplicity-formulas` (consumer batch 22), whose
  review row is owed by batch 22. No orphaned review.
* `node tools/depcheck.mjs` — FAIL, repo-wide and pre-existing: a list of
  `published-unaudited` items elsewhere in the corpus (e.g.
  `items/thm-zero-free-inner-functions-are-singular-inner.md`,
  `items/thm-zariski-main-open-immersion-factorization-classical.md`). No
  batch-21 item or page appears in the report; the stage gates run this tool
  with the run's audit flags once item files exist.
* Engine status (`autopilot status --state-dir .autopilot/frontier-39-analysis-30`):
  batch 21 is not in the stage's missing-artifact list; the batch's manifest,
  coverage, cross-batch input and all 25 item-readiness records are on disk.

## Readiness records

All 25 items recorded with
`node tools/step1-decisions.mjs record --run frontier-39-analysis-30 --item ID --decision ready --dependencies <the item's deps> --reason <strategy + examined dependency ids + evidence>`;
a direct `step1Decision` pass over the batch reports `closed: 25, open: 0`.
No record is owner-held and no escalation file was written.

## Addendum — post-check statement fixes and re-records

After the first readiness pass, two statement typos were found and fixed in the
manifest: the squared-denominator term of
`cor-freudenthal-recursion-terminates-from-the-highest-weight` (now
$(\lambda+\rho,\lambda+\rho)$) and the sl2 dimension-formula parenthesisation
plus the $m=0$ wording of `ex-weyl-character-and-dimension-formulas-for-sl2`.
Because `step1Decision` hashes the transitive dependency closure, the records
for these two items and for their consumer
`ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` reopened and were
re-recorded `ready`. A fresh `step1Decision` pass reports `batch-21 closed: 25,
open: 0`. All checks above were re-run after the fixes with unchanged results.

## Addendum 2 — Freudenthal termination defect found and repaired (verification pass)

The handoff verification pass re-derived the mathematics of every A item from
the manifest statements and found one genuine defect, in
`cor-freudenthal-recursion-terminates-from-the-highest-weight` part (iii) and
in the tail of `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`,
which propagated the same claim.

**The defect.** Part (iii) asserted that "the extremal weights
$\mu=w\circ\lambda$ are of this kind [the vanishing-coefficient case] and have
$m_\lambda(w\circ\lambda)=1$", citing
[[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]].
Under the library convention $\circ$ is the dot action
$w\circ\lambda=w(\lambda+\rho)-\rho$, and $w\circ\lambda$ is in general **not
a weight of $L(\lambda)$**: for $\mathfrak{sl}_2$,
$s\circ(m\omega)=-(m+2)\omega$, while the weights of $L(m\omega)$ are
$m\omega,(m-2)\omega,\dots,-m\omega$, so $m_\lambda(s\circ\lambda)=0$ and not
$1$. The cited published item proves multiplicity one for the ordinary orbit
$w(\lambda)$, not the dot orbit, and only $\mu=\lambda$ among the weights has
the vanishing coefficient $(\lambda+\rho,\lambda+\rho)-(\mu+\rho,\mu+\rho)$.

**The correct mathematics (verified).** For a dominant integral $\lambda$ and a
weight $\mu$ of $L(\lambda)$ with $\mu\ne\lambda$ one has
$(\mu+\rho,\mu+\rho)<(\lambda+\rho,\lambda+\rho)$ strictly, so the Freudenthal
coefficient never vanishes for a non-top weight and the recursion is gap-free
(the boundary case $0=0$ occurs only at the top weight, whose value is the
base case $m_\lambda(\lambda)=1$). Proof route now recorded in the manifest:
write $\mu=u\mu^{+}$ with $\mu^{+}$ the dominant representative of the weight
orbit (unique, published chamber item); $\mu^{+}$ is a weight
(W-invariance) and $\lambda-\mu^{+}\in Q_+$ (weights lie below the top
weight); then
$|\mu+\rho|^2=|\mu^{+}+u^{-1}\rho|^2\le|\mu^{+}+\rho|^2$ because
$\rho-u^{-1}\rho\in Q_+$ (new identity lemma) pairs nonnegatively with the
dominant $\mu^{+}$; if $\mu^{+}\ne\lambda$ then
$(\lambda+\rho)^2-(\mu^{+}+\rho)^2=(\lambda-\mu^{+},\lambda+\mu^{+}+2\rho)>0$
(strictly dominant second factor; this is Etingof's step in the proof of
Theorem 26.4, printed p. 141, and it is the dominant-weight case); if
$\mu^{+}=\lambda$ and $\mu=u\lambda\ne\lambda$ then
$|u\lambda+\rho|^2-|\lambda+\rho|^2=-2(\lambda-u\lambda,\rho)<0$ since
$\lambda-u\lambda\in Q_+\setminus\{0\}$ (published maxima-of-orbits lemma) and
every $(\alpha_i,\rho)>0$ (published coroot-pairing lemma).

**Independent checks performed.** (a) Cost of the identity
$\rho-w\rho=\sum_{\alpha\in\Phi^+,\ w^{-1}\alpha\in\Phi^-}\alpha$: verified by
exact computation for all six elements of $W(A_2)$ (the naive set
$\{\alpha:w\alpha<0\}$ fails, the correct set is the $w^{-1}$-one), and by the
reduced-word expansion $\rho-w\rho=\sum_j s_{i_1}\cdots s_{i_{j-1}}\alpha_{i_j}$
with every reflected simple root verified positive. (b) The strict inequality:
all weights of $L(\lambda)$ were enumerated for $A_2$ with the Kostant
partition-function formula; multiplicities agree with the Weyl dimension
formula for every $\lambda=(a,b)$, $0\le a,b\le5$ (all match), and over 1960
weight incidences with $a,b\le6$ the shifted-norm difference is never zero
away from $\mu=\lambda$ and never negative. (c) Source support located and
read: Etingof §26.4 printed p. 141 for the dominant strict inequality, Knapp
Ch. II §6 Prop. 2.69 and Prop. 2.70/Lemma 2.71 printed pp. 168-169 for the
reflection and length inputs. (d) The $\mathfrak{sl}_2$ counterexample
$s\circ(m\omega)=-(m+2)\omega\notin\operatorname{wt}L(m\omega)$ was checked
directly.

**The repair (this batch's manifest, coverage, notes, readiness records only).**
Two local prerequisite items were added to the A page:

* `lem-rho-minus-w-rho-is-a-sum-of-positive-roots` (level 0, choice-free):
  $\rho-w\rho=\sum_{\alpha\in\Phi^+,\ w^{-1}\alpha\in\Phi^-}\alpha\in Q_+$.
* `lem-shifted-norm-of-a-weight-is-maximal-only-at-the-top-weight` (level 1,
  carries AC from its published suppliers): for a weight $\mu$ of $L(\lambda)$,
  $(\mu+\rho,\mu+\rho)\le(\lambda+\rho,\lambda+\rho)$ with equality iff
  $\mu=\lambda$.

`cor-freudenthal-recursion-terminates-from-the-highest-weight` was rewritten
accordingly: (i) $m_\lambda(\lambda)=1$ and zero off $\lambda-Q_+$;
(ii) strict positivity of the coefficient for $\mu\ne\lambda$ and the
descending-from-the-top induction; (iii) the boundary case $0=0$ at
$\mu=\lambda$ (base case (i)) and the vacuous case $\nu\not\le\lambda$. This
matches the design's own wording for the corollary ("the recursion determines
lower multiplicities whenever the denominator is nonzero. States the induction
and its boundary cases") and strengthens it with the proof that the
denominator is nonzero at every non-top weight; no design/plan conflict is
introduced. The final sentence of
`ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight` was corrected to
say that the extremal weights are the ordinary Weyl orbit $W\lambda$ with
multiplicity one (published orbit item), and that only the top weight is the
indeterminate case of the recursion.

Inventory is now 21 A items + 6 B items = 27; labels recomputed by hand and by
`item-dependency-levels`: the identity lemma is 0, the norm lemma 1, the
corollary stays 3, `ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`
stays 8, every other label unchanged.

Relation to the plan and design: `research/plan-spec.json` carries page entries
for this pair with **no item lists** (`items: []`), so the plan fixes the page
order, category and `requires` chain (all preserved) and no plan/design conflict
arises from the inventory; the item-level contract is the design's RL-7 plus
the 2026-09-08 audit count of 23 ids (17 A + 6 B). The four local additions
(the two from the first pass and the two repair lemmas) are authorized
prerequisite additions, carry explicit `deps`, introduce no forward or B-page
dependency, and pass `validate-plan`, `manifest-deps` and
`item-dependency-levels`; the page remains far below the 100-item cap. No
selected pair or planned supplier was altered.

**Re-recorded readiness.** The transitive-closure hash of four items reopened;
all four were re-recorded `ready` with the rewritten strategy and examined
published suppliers: the two new items,
`cor-freudenthal-recursion-terminates-from-the-highest-weight`, and
`ex-freudenthal-recursion-for-the-sl3-adjoint-zero-weight`. A fresh
`step1Decision` pass reports no batch-21 item open.

**Fresh check results after the repair.**

* `coverage-checklist ... --require-destination` — 2 page(s), 61 harvested
  result(s), 0 error(s), 0 warning(s) (five new `inline` rows: Etingof §26.4
  and §26.2, Knapp Ch. II §6, Moreau §11.3 effectiveness, Borcherds p. 146;
  the Knapp locator was extended to the Ch. II §6 pages actually read).
* `source-fetch-check` — 8/8 fetch-verified, 8/8 resolved.
* `url-sweep --recover --fail-on-dead` — exit 0: 4/5 live; the Weber URL's 403
  remains non-blocking thanks to its full-text stamp.
* `source-backing --liveness ...` — 22 authored result(s), every one backed.
* `manifest-deps` — 27 item(s), 0 error(s); `content-policy --manifest-only` —
  27 scoped item(s), 0 error(s).
* `item-dependency-levels check --run` — no batch-21 error (remaining errors
  are `empty scaffold inventory` for unscaffolded sibling batches).
* `validate-plan` — OK; `extcheck` — no new finding.

### Independent Step 3b closure audit — 2026-10-05

Re-read the 27 current B21 items in task dependency order, checked the
manifest/frontmatter `deps`, `justified_by` and `forward_refs` arrays for exact
agreement, and refreshed each Step 3b item receipt against its current
transitive input hash. All 27 receipts are `accept`, confidence 1, and current;
the pair scope remains current. The audit found one proof-only defect in
`lem-weyl-alternants-are-skew-invariant`: its first step incorrectly commuted
the Weyl element with the summation index (`wx` versus `xw`). Replaced that
line with a finite-sum reindexing `y=wx`; the wall-fixed case now independently
reindexes `A(s_i nu)` by `y=xs_i`. The Statement, Definition, item inventory,
and direct dependency interfaces did not change. The corrected item receipt
has composite input hash
`3d240fae1b83913ca082f7e3edcd1e76777e06f13d423ffbab448bcdddb96c5f`.

Focused final checks after the edit: `proof-layout` covered 27 items and 70
steps with 0 defects; `proof-contract --strict` checked 27/27 with 0 errors
and 0 warnings. No workflow gate or test suite was run.
