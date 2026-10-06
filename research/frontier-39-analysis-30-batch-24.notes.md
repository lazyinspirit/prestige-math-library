# Batch 24 notes — `primitive-ideals-and-duflo-theorem`

Run: `frontier-39-analysis-30`. Pair: `primitive-ideals-and-duflo-theorem`
(A, order 510.019, `lie-theory`) / `primitive-ideals-and-duflo-theorem-examples`
(B, order 510.02). Manifest: `research/frontier-39-analysis-30-batch-24.pages.json`
(15 A items + 5 B items = 20). Coverage:
`research/frontier-39-analysis-30-batch-24.coverage.json` (41 harvested results,
8 stamped source entries). Cross-batch input:
`research/frontier-39-analysis-30-batch-24.cross-batch-dependencies.json` (empty).
No `research/frontier-39-analysis-30-owner-authoring-direction.md` exists.

## Design versus plan

Two design locations were read in full:

* `research/plan-representation-theory-lie-track.md`, section **RL-10**
  (lines ~1158-1190). This is the pair's own design and **controls the
  mathematical scope and inventory**: "Develop only the algebraic annihilator
  and central-reduction prefix. Duflo surjectivity and its localisation
  architecture are prose targets, not planned items [...] No later RL proof may
  cite those targets as established." Its A table (11 ids) and B table (5 ids)
  are the pair's commissioning inventory; the proof route it fixes
  (annihilator -> primitive -> prime -> central character -> central reduction
  -> Verma inclusion -> associated variety -> dot-orbit partition, with the
  sl2 checks on the B side) is the route scaffolded here.
* `research/plan-algebraic-geometry-track.md`, section "Frontier-36 AG supplier
  for the two Lie A shells" (~lines 3291-3470; the binding paragraph for this
  pair is at lines 3436-3447). This paragraph **controls the pair's `requires`
  metadata**: it removes `borel-weil-and-borel-weil-bott-examples` and binds
  the seven published pages now recorded in the manifest, and it states that
  the classical-affine interface page supplies the zero-set /
  associated-variety prefix and that "The Duflo localization theorem remains a
  prose-only held target, so no nonexistent D-module supplier is asserted."

The two locations agree. `research/plan-spec.json` (which the dispatch says
controls the run) records the same `requires` list for the A page, the same
singleton B `requires`, the same orders and companions, and **empty item
inventories** for both pages; the batch manifest supplies the items. **No
design/plan conflict was found, so none is escalated.** The design's
prose-only hold on Duflo surjectivity and localisation is preserved: no item on
either page states, consumes or depends on Duflo surjectivity, Joseph's fibre
theory, or the localisation architecture.

### Design locator defect (recorded, no claim rests on it)

RL-10 and the AG-track paragraph cite "E757 §18.1, pp.92-95" (and
"§§18, 22, pp.92-95, 110-113") for the annihilator / primitive-ideal /
highest-weight material. In the actual Etingof 18.757 notes (MIT OCW 2023,
stamped below) §18.1-18.3 is *maps of finite type and the Duflo-Joseph theorem
for Harish-Chandra bimodules* (printed pp.92-95) and §22 is *projective
functors* (printed pp.110-113). The material this batch scaffolds is at
**§7.2 Lemma 7.2 (Dixmier; printed p.38)**, **§24.2, printed pp.120-122**
(Theorem 24.4 and Corollary 24.5, two-sided ideals of $U_\theta$ versus
submodules of Verma modules) and **§25.1, printed pp.123-124** (Definitions
25.1-25.2, primeness of primitive ideals, Theorem 25.4 = Duflo). The coverage
file cites only these verified locators, and §18.1-18.3 is disposed
out-of-scope with an explanation. The stale design locators should be amended
at the next design touch; no mathematical claim depends on them.

### Other design-record deviations

* The design cites "Duflo pp.107-120" as the full treatment. The Annals 1977
  article exists (`https://annals.math.princeton.edu/1977/105-1/p05`,
  landing page HTTP 200, article body not exposed there; a PDF path probe
  returns 404; the JSTOR copy is paywalled). **No scaffolded item cites
  Duflo's article**, so no `source_resolution` drop record is required; the
  evidence lives here and in the coverage notes. This is an access
  observation, not a claim that the text is permanently unavailable.
* The design's second full treatment, Stanciu arXiv:2103.16890, was downloaded
  and stamped (30 pp.); its introduction pp.1-3 was read. Its §§2-7 proof is a
  localisation/D-module argument that the controlling design holds out of
  scope, so all four harvested rows are disposed `out-of-scope` and no item
  consumes it.
* The design's B inventory is scaffolded exactly (5 ids). The design's A
  inventory (11 ids) is scaffolded with four added local prerequisites (below).

## Inventory

A page, 15 items in `deps` order (dependency level in parentheses; level
recomputed after every edit):

1. `def-annihilator-ideal-of-a-lie-algebra-module` (0)
2. `def-primitive-ideal-of-an-enveloping-algebra` (1)
3. `prop-annihilators-of-simple-highest-weight-modules-are-primitive` (2)
4. `prop-primitive-ideals-are-prime-in-the-noncommutative-sense` (2)
5. `lem-dixmiers-lemma-for-countable-dimensional-algebras` (0) — **added**
6. `prop-a-primitive-ideal-determines-a-central-character` (2)
7. `def-central-reduction-of-the-enveloping-algebra` (0)
8. `prop-verma-annihilator-contains-the-central-character-ideal` (1)
9. `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal` (0) — **added**
10. `def-associated-graded-variety-of-a-two-sided-ideal` (0)
11. `prop-associated-variety-of-a-primitive-ideal-is-conical-and-g-invariant` (1)
12. `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight` (0) — **added**
13. `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character` (3)
14. `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters` (1) — **added**
15. `rem-highest-weights-can-have-the-same-primitive-ideal` (3)

B page, 5 items (levels 1-3): `ex-primitive-ideals-of-usl2-at-a-generic-central-character`,
`ex-annihilator-of-the-trivial-sl2-module`,
`ex-associated-variety-of-a-finite-dimensional-simple-annihilator` (level 1),
`cex-an-intersection-of-two-primitive-ideals-need-not-be-primitive`,
`cex-the-central-character-does-not-determine-the-primitive-ideal`.

### Why the four added ids are prerequisites, not padding

* `lem-dixmiers-lemma-for-countable-dimensional-algebras` is what makes the
  design's `prop-a-primitive-ideal-determines-a-central-character` true: a
  simple module over the countable-dimensional $U(\mathfrak g)$ has scalar
  endomorphisms, so the center acts by a character. The design's proposition
  assumes this silently; the published library had no countable-dimensional
  Quillen/Dixmier lemma. The proof is choice-free (Schur, division-ring
  algebraicity, $1/(x-a)$ independence, uncountability of $\mathbb C$).
* `lem-adjoint-action-preserves-the-associated-graded-of-a-two-sided-ideal` is
  the missing interface between the PBW filtration and $\operatorname{ad}$:
  the design's `prop-associated-variety-...-conical-and-g-invariant` needs
  $D_x(\operatorname{gr}I)\subseteq\operatorname{gr}I$ and
  $\sigma(\operatorname{ad}_xu)=D_x(\sigma(u))$.
* `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight`
  proves that every unital homomorphism $Z(U(\mathfrak g))\to\mathbb C$ is a
  $\chi_\lambda$ (Harish-Chandra + Chevalley-Shephard-Todd freeness +
  determinant trick + Choice); the design's corollary
  "primitive ideals are partitioned by dot-orbit central characters" cannot be
  stated without it, and the published orbit corollary alone only compares
  given $\chi_\lambda,\chi_\mu$.
* `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters`
  is the local input the design's B example
  `ex-primitive-ideals-of-usl2-at-a-generic-central-character` needs: without
  simplicity of $U_\chi$ the example's "unique primitive ideal with central
  character $\chi$" is unproved. Block §5.2 and Gaddis §2 supply the criterion;
  the proof is scaffolded locally in full (see the correction note below).

All four are local (or A-page lemma consumed by the B example) and the A page
has 15 items, far below the 100-item cap. No page split is required.

### Correction made during construction (recorded for Step 3)

The first draft of the sl2 central-reduction lemma proved simplicity under
"no two roots of $p$ in the same $2\mathbb Z$-orbit" and then identified that
condition with criticality $c=n(n+2)/2$. That identification is **false at the
coalesced-root value** $c=-1/2$ (the two roots coincide, so they lie in the
same orbit, yet $U_\chi$ is simple; $-1/2$ is the value of $-\lambda(\lambda+2)/2$
at the non-finite-dimensional weight $\lambda=-1$). The recorded strategy now
separates the three cases (two roots in different orbits -> simple; double root
$c=-1/2$ -> simple; two distinct roots in one orbit, i.e. $c=n(n+2)/2$ with
$n\ge0$ -> $U_\chi$ has the nonzero proper kernel of
$U_\chi\to U(\mathfrak g)/\operatorname{Ann}L(n)$), and the orbit chase and
the multiplicity bookkeeping were flushed out. This matches Gaddis §2
(Joseph's criterion: $J(a)$ simple iff no pair of roots differs by a positive
integer; the coalesced root is not a congruent pair) and Block §5.2
("$U_{s,\gamma}$ is simple except for $\gamma=n^2+2n$"). The lemma's Casimir
normalization is declared in the strategy ($\Omega=ef+fe+\tfrac12h^2$, a
nonzero scalar multiple of the library Casimir
`prop-casimir-eigenvalue-on-a-highest-weight-module`, whose sl2 eigenvalue is
$\lambda(\lambda+2)/8$; the lemma's parameter is $\chi(\Omega)$ and the
criterion is normalization-free). Three statement-level overstatements found
in the same pass were also corrected: the exponential coadjoint curve is
entire, not polynomial; the finite-codimension example's "equivalently" was
weakened to "in fact"; and the trivial-module counterexample sentence now
names the true witness $\chi_0$.

## AC discipline

Items that **declare** "Assume the Axiom of Choice" and carry
`def-axiom-of-choice` in `deps`, with the exact use recorded in the strategy:

* `lem-every-central-character-of-the-enveloping-algebra-arises-from-a-weight`
  — maximal ideal under Choice, Harish-Chandra isomorphism, Chevalley-Shephard-Todd,
  determinant trick, dot-orbit corollary.
* `cor-primitive-ideals-are-partitioned-by-dot-orbit-central-character` —
  inherits the parametrization lemma and the dot-orbit corollary.
* `lem-the-central-reduction-of-usl2-is-simple-away-from-finite-dimensional-characters`
  — uses the AC-stating `cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`
  to identify $Z(U(\mathfrak g))=\mathbb C[\Omega]$ (a choice-free sl2
  computation exists but is not published, so AC is carried rather than
  claimed absent).
* `ex-primitive-ideals-of-usl2-at-a-generic-central-character` — inherits AC
  from that lemma.
* `cex-the-central-character-does-not-determine-the-primitive-ideal` — uses
  `cor-antidominant-verma-modules-are-simple` and
  `cor-central-characters-are-dot-weyl-orbits`.

The remaining items are stated without AC and their strategies use only
choice-free inputs or AC-free parts of published suppliers (Dixmier is
choice-free; the PBW, annihilator, primeness, quotient, Verma-scalar and
central-reduction items are choice-free; the associated-graded items are PBW
bookkeeping). Recorded honestly: a transitive closure over *all* published
`Assume the Axiom of Choice` items reaches essentially every Lie result in the
library through Cartan-subalgebra existence and Zorn-type well-definedness
inputs carried by older pages; this batch follows the direct-use convention
(the convention batch 21 also recorded) and flags the transitive-carrier
question for owner/Step-3 rather than unilaterally retagging published pages.

## Published prerequisites examined (statements and proofs read)

`harish-chandra-isomorphism-casimir-and-central-characters`,
`verma-modules-and-shapovalov-forms`, the linkage/block/category-O pages,
`lie-algebra-representations-enveloping-algebras-and-pbw` and the
classical-affine interface page supply the following actually-used items (all
`status: published`): `def-verma-module`,
`thm-verma-module-has-a-unique-simple-quotient`,
`prop-casimir-eigenvalue-on-a-highest-weight-module`,
`ex-sl2-casimir-and-its-highest-weight-eigenvalue`,
`ex-sl2-reducible-and-generic-verma-modules`,
`ex-all-finite-dimensional-irreducible-sl-two-modules`,
`def-special-linear-lie-algebra-sl-two`,
`lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`,
`lem-harish-chandra-projection-computes-highest-weight-scalars`,
`thm-harish-chandra-isomorphism-for-the-center`,
`cor-central-characters-are-dot-weyl-orbits`,
`cor-the-center-is-a-polynomial-algebra-of-rank-many-generators`,
`thm-chevalley-shephard-todd-for-finite-weyl-groups`,
`lem-determinant-trick-for-nakayama`,
`thm-proper-ideal-contained-in-maximal-ideal`,
`cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field`,
`cor-antidominant-verma-modules-are-simple`,
`prop-weights-of-a-verma-module-lie-below-lambda`,
`thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`,
`thm-schurs-lemma-for-modules`, `def-division-ring`,
`def-endomorphism-ring-of-a-module`, `def-dimension`, `def-countable`,
`def-algebraic-and-transcendental-elements`, `def-field-of-fractions`,
`cor-rational-function-field-as-a-fraction-field`,
`thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`,
`thm-r-uncountable`, `thm-classical-affine-zero-loci-form-zariski-closed-sets`,
`def-classical-affine-algebraic-set-with-empty-boundaries`,
`def-classical-vanishing-ideal`, `def-classical-affine-coordinate-ring`,
`def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra`,
`prop-associated-graded-of-the-pbw-filtration-is-commutative`,
`thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`,
`def-quadratic-casimir-element`, `def-axiom-of-choice`.

Convention checks performed: $\chi_\lambda(z)=\operatorname{pr}(z)(\lambda)$ and
$\operatorname{HC}_\rho(z)(\lambda)=\operatorname{pr}(z)(\lambda-\rho)$ match the
published projection lemma and HC theorem; the dot action is
$w\cdot\lambda=w(\lambda+\rho)-\rho$; the library Casimir is built from
Killing-dual bases and has sl2 eigenvalue $\lambda(\lambda+2)/8$ on a
highest-weight vector of weight $\lambda$ (published example), while the sl2
lemma declares the rescaled generator $\Omega=ef+fe+\tfrac12h^2=4C$ inside its
strategy; Verma reducibility is exactly
$\lambda\in\mathbb Z_{\ge0}$ (published sl2 example) and the antidominant
criterion needs $\langle\lambda+\rho,\alpha^\vee\rangle<0$ for all positive
roots; the associated variety uses the PBW identification
$\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$ and the published affine
zero-locus machinery. **No missing, circular, forward or inadequate dependency
was found**; every wikilink in the manifest resolves to a published item or to
an item of this batch, and the flagged sl2 lemma was re-derived and repaired as
recorded above. The two counterexamples are not dependency targets anywhere.

## Sources

All eight source entries (six distinct documents; Etingof and Block appear on
both pages) were fetched in full and stamped by
`source-fetch-check --stamp` (bytes / pages / sha256-16):

| source | kind | locator actually read | stamps |
|---|---|---|---|
| P. Etingof, *Representations of Lie Groups* (18.757, MIT OCW 2023) | lecture-notes | §7.2 Lemma 7.2 p.38; §24.2 pp.120-122; §25.1 pp.123-124 | 3494075 / 162 / `421fa52f61680e63` |
| R. E. Block, *The irreducible representations of sl(2) and of the Weyl algebra*, Adv. Math. 39 (1981) | paper | Introduction pp.69-74; §5.2 pp.99-102 | 2389412 / 42 / `7342ea0aa0d0b649` |
| J. Gaddis, *The Weyl algebra and its friends* (arXiv:2305.01609) | survey | §2 pp.2-3 (Joseph's criterion, $U_\lambda\cong J(a)$) | 330852 / 20 / `6643fe13d5946ea6` |
| D. Barbasch, *Cells in Weyl groups and primitive ideals* (AIM 2006) | lecture-notes | §§2.1, 3.3 | 156184 / 12 / `5350592b9e395897` |
| A. Fadeev, PhD thesis (Jacobs University) | monograph | §§2.6-2.7 | 590548 / 78 / `00cc503ff60ea4b2` |
| I. Stanciu, *A geometric proof of Duflo's theorem* (arXiv:2103.16890) | paper | Introduction pp.1-3; §§2-7 disposed out-of-scope | 396370 / 30 / `8c0c30eca6282957` |

The requirement "two independent treatments per A page including a book or
full lecture set" is met by Etingof (full lecture notes) plus Block (full
paper) for the sl2 criterion, with Gaddis and Fadeev/Barbasch as independent
checking treatments. Every harvested result has a disposition (included,
inline, already-published, or out-of-scope with a specific reason); see the
coverage file.

**Low-yield warning.** `coverage-checklist` reports 13/34 A-page harvested
results scaffolded. The declines are exactly the material the controlling
design holds prose-only or out of scope: Duflo's Theorem 25.4 and its
projective-functor prerequisites (§18.1-18.3), Kazhdan-Lusztig cell theory and
Barbasch-Vogan character polynomials, the Borho-Brylinski/Joseph nilpotent-orbit
theorem for associated varieties, and the Stanciu localisation architecture.
No decline weakens the scaffolded prefix; the warning is expected and is
confirmed here for Alpha.

## Checks run (actual results)

* `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-24.pages.json`
  -> 20 item(s), 0 normalized, 0 error(s).
* `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-24.pages.json`
  -> 20 scoped item(s), 0 error(s), 0 warning(s).
* `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-24.coverage.json --require-destination`
  -> 2 page(s), 41 harvested result(s), 0 error(s), 1 warning(s) (the low-yield
  warning explained above).
* `node tools/source-fetch-check.mjs --coverage ... --stamp` -> 8/8 newly
  stamped; check mode -> 8/8 fetch-verified, 8/8 resolved, 0 documented drops.
* `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  -> 0 errors on any batch-24 item; the only errors reported are
  `empty scaffold inventory` for batches still unscaffolded while this batch
  ran (44 at the last run), which is the expected whole-run stage state.
* `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` ->
  0 batch-24 findings; all 20 readiness records closed (`ready`), after the
  three records affected by the AC edits were refreshed.
* `node tools/validate-plan.mjs research/plan-spec.json` -> "OK - declared page
  order is acyclic and consistent; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids among the 1420 page(s) with item
  lists" (247 planned pages elsewhere still carry no item lists; warnings
  reported are redundant-prerequisite warnings on other pages).
* `node tools/extcheck.mjs` -> "OK - every recorded-not-proved statement is a
  cited remark with no proof, and every consequence is marked." (No batch-24
  item declares `proved_here: false`; the listed warnings are published items
  on other pages.)
* `node tools/fwdcheck.mjs` -> "OK - every forward reference is declared,
  points strictly forward, is closed by a planned later page, stays off the
  spine unless orientation only, and introduces no cycle." (Batch 24 declares
  no `forward_refs`.)
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  -> refreshed; batch 24 present in `reviewed_batches` with 0 ledger edges.
  `--require-reviewed` still fails because other batches have not yet supplied
  their inputs; that is a whole-run stage state, not a batch-24 finding.

## Cross-batch dependencies

None. Every `deps` edge of both pages targets either a published item or an
item of this same batch; neither page's `requires` names an in-run page (the
seven A suppliers are published, and the B page requires only this A page).
No other in-run batch manifest depends on an item of this batch, and no in-run
page requires either batch-24 page (verified against the unified ledger: 0
edges touching batch 24). The required input file is therefore the empty array
`[]`. Consumers outside this frontier (RL-11/Kostant, later Joseph/KL work)
are planned, not in-run, and are not asserted here.

## Readiness and unresolved uncertainty

All 20 items are recorded `ready`; none is `escalated`. No published defect was
found in any consumed supplier, and every necessary local prerequisite is
scaffolded locally. Residual uncertainty, recorded rather than hidden:

1. The design locators "E757 §18.1 pp.92-95 / §§18,22" are stale for the
   material this batch scaffolds (correct locators: §7.2 p.38, §24.2
   pp.120-122, §25.1 pp.123-124). No claim rests on them; amend at the next
   design touch.
2. Duflo's original article was not obtainable in full in this dispatch; no
   item cites it, so this is neither a source drop nor a coverage failure.
3. The transitive AC-carrier convention (see AC discipline) is flagged for
   owner/Step-3; this batch declares AC on the five items whose proofs use
   AC-stating results directly.
4. The sl2 central-reduction lemma's criterion and its double-root
   exceptional case are the mathematically delicate point of this batch;
   they were re-derived in full and cross-checked against Gaddis §2 and
   Block §5.2, but the proof remains a scaffold-level argument for Step 3 to
   audit line by line.
