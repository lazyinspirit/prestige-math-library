# Batch 11 notes — `characteristic-numbers-and-cobordism-obstructions`

Run `frontier-41-ha-dt-29`, role beta, label batch-11. Owned pair: DT-19
`characteristic-numbers-and-cobordism-obstructions` (A, order 553) /
`characteristic-numbers-and-cobordism-obstructions-examples` (B, order 554),
`differential-topology`. Outputs written: this batch's manifest
(`research/frontier-41-ha-dt-29-batch-11.pages.json`, 17 A + 4 B items),
coverage (`…-batch-11.coverage.json`, 50 harvested rows), the URL-liveness and
reharvest artifacts, the cross-batch input
(`…-batch-11.cross-batch-dependencies.json`), per-item readiness records
(`research/frontier-41-ha-dt-29-step1-*.json`; see §7 for the current 21-item readiness state),
and this note. No published content, shared plan, engine state or verdict was
edited.

## 1. Design, plan and task comparison

- The dispatch task, the scope ledger and `research/plan-spec.json` agree
  exactly on the A/B ids, orders 553/554, category, companion pointers and the
  A page's twelve-page `requires` array. The design section
  `research/plan-differential-topology-track.md` L1048–1085 lists the same 15
  A rows and 4 B rows. No design/plan conflict of scope, order or dependency
  array exists.
- The plan's §12.5 binding amendment for DT-19 (“add AT-9 as in §12.4; the
  proof of Thom's unoriented bordism detection theorem must explicitly use
  Thom-space cohomology operations and the stable PT map”) is honoured: AT-9
  (`bocksteins-steenrod-squares-and-cohomology-operations`) is in the page's
  `requires`, and the detection item's strategy is written in exactly that
  form. The planned seam ("DT-19 owns its Thom-space detection argument and
  must cite AT-18/AT-19 as well as AT-21", AT plan §13.3 item 11) is
  implemented by the local conversion lemma and the universal PT
  correspondence, which cite AT-18/AT-19/AT-21 items.
- **Recorded gap.** The plan's DT-19 `requires` array omits
  `hurewicz-whitehead-freudenthal-and-cw-approximation` (AT-12) and
  `the-serre-spectral-sequence-and-applications` (AT-14), yet the classical
  proofs of the two remaining detection statements need a rational Hurewicz /
  epsilon-Hurewicz comparison whose only library-grade proofs run through
  Serre's finiteness theorem and the Hurewicz comparison (see §5 below). This
  is a plan-level prerequisite gap for the *completion* of two of the
  commissioned claims; it is escalated, not silently repaired, and the exact
  missing statements with a proposed new pair are recorded in §5.
- The current plan controls; the design's citations of "MS Chs. 16–18" and
  "TW §§9–18" were followed through the fetched full texts. The re-typeset
  Milnor–Stasheff scan shifts chapter numbers relative to the original
  pagination, so all locators in this batch identify sections by title and
  give the original printed pages; this is a locator convention, not a
  mathematical conflict.

## 2. Inventory, inheritance and deviations (all recorded)

A-page order (17 items): `lem-kronecker-pairing-is-multiplicative-under-cross-products`,
`lem-fundamental-class-of-a-product-of-closed-manifolds`,
`lem-characteristic-numbers-of-products-follow-the-whitney-sum-and-kunneth-formulas`,
`thm-characteristic-numbers-are-cobordism-invariants`,
`cor-all-relevant-characteristic-numbers-vanish-on-null-cobordant-manifolds`,
`lem-collapse-of-an-embedded-manifold-classifies-through-the-universal-thom-prespectrum`,
`lem-every-unoriented-and-oriented-bordism-class-is-realized-by-an-embedded-collapse`,
`thm-universal-pontryagin-thom-correspondence-for-unoriented-and-oriented-bordism`,
`lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem`,
`thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism` **(owner-reviewed; ready record awaits hash refresh)**,
`rem-pontryagin-numbers-do-not-detect-integral-oriented-bordism-torsion`,
`lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes`,
`lem-projective-space-products-have-triangular-characteristic-number-matrix`,
`lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism`,
`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`,
`thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`,
`rem-characteristic-class-constructions-and-normalizations-are-at-owned`.

B page (4 items): `ex-stiefel-whitney-number-of-real-projective-space`,
`ex-pontryagin-numbers-of-complex-projective-two-space`,
`ex-characteristic-numbers-of-a-product`,
`ex-orientation-reversal-negates-pontryagin-numbers`.

**Inherited design slots (no new item minted; exact published homes).**

- Design item 1 (`def-stiefel-whitney-number-of-a-closed-manifold`) and design
  item 2 (`def-pontryagin-number-of-a-closed-oriented-manifold`) are the two
  published definitions the owner direction names as inherited from
  `smooth-cobordism-relations-groups-and-rings`; they are cited, not
  duplicated.
- Design item 3 (`lem-characteristic-number-degree-constraint`): the degree
  bookkeeping is already part of those published definitions (both assign
  value $0$ to monomials of the wrong total degree and state the pairing
  convention), so no separate lemma is minted and no claim is lost.
- Design item 4 (`lem-stiefel-whitney-numbers-ignore-orientation-and-pontryagin-numbers-change-with-it`):
  both halves are already stated and proved inside the published definitions
  (the SW number “does not change when an orientation is supplied or
  reversed”; the Pontryagin number “negates … by linearity of the pairing”,
  including the componentwise case). No separate lemma is minted.
- Design item 5 (`lem-stable-tangent-bundle-of-an-oriented-boundary-is-the-restriction-of-tw`):
  published verbatim as `lem-boundary-stable-tangent-splits-off-a-trivial-line`
  (DT-15 page), whose statement is $TW|_M\cong TM\oplus\varepsilon^1$. It is
  cited by the invariance theorem and not re-minted.

**Added local prerequisites.** The DT-19 page retains the cross-product pairing
multiplicativity lemma and product-fundamental-class lemma (both consumed by
the product formula), the collapse-class lemma and surjectivity lemma
(consumed by the universal PT correspondence), plus the complex-projective
tangent-bundle computation (consumed by triangularity). The shared Thom
prespectrum definition was moved to the new AT A page, which now precedes
DT-19. The batch-11 A/B inventory is 17 + 4 items.

**Restatements, splits and escalations (each with its reason).**

- Design item 13 (`prop-products-of-complex-projective-spaces-span-rational-oriented-bordism`)
  is split into the scaffolded linear-independence lemma
  (`lem-projective-space-products-are-linearly-independent-in-rational-oriented-bordism`,
  the rational rank lower bound) and the spanning proposition itself. The
  proposition keeps its full claim; its stable rational upper bound is now
  supplied by the local range calculation and dependencies recorded below.
  No claim was weakened.
- Design item 15 (`rem-characteristic-class-constructions-and-normalizations-are-at-owned`)
  is scaffolded as a seam remark with the exact published ids.
- The B-page items follow the design's four rows. B1's computation of
  $w(T\mathbb{RP}^n)=(1+x)^{n+1}$ is carried in the example's own
  Verification through the double-cover splitting
  $T\mathbb{RP}^n\oplus\varepsilon\cong(n+1)\gamma$; the published surface
  counterexample is cited as context without a wikilink because it is homed on
  a B page (B pages are leaves and cannot be dependencies of another page).
- Still escalated: `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`
  (design item 9). The rational spanning proposition (design item 13) and
  rational Pontryagin-number detection theorem (design item 11) now have full
  local strategies and current Step-1 readiness records; their statements and
  all downstream claims are unchanged.

## 3. Source record

Full texts used, all fetched and stamped by
`node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-11.coverage.json --stamp`
(6/6 source rows fetch-verified after recovery; the stamps live in the coverage
file):

1. John Milnor and James Stasheff, *Characteristic Classes* (textbook),
   `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf`.
   Chapters 16–19, original printed pp. 183–230: §16.1–16.3 (characteristic
   numbers, degree and orientation conventions), §16.5 (product formula),
   §16.6 (linear independence of projective-space products), §17.1–17.5
   (oriented bordism, Pontryagin numbers, rank lower bound), §18.1–18.4 (Thom
   spaces, transversality, Lemma 18.7, Theorems 18.6/18.8, Corollaries
   18.9/18.10, Wall's remark), Chapter 19 (signature theorem, deferred to
   DT-20). **Recovery history:** the plan register's Rochester URL
   (`https://people.math.rochester.edu/faculty/doug/otherpapers/milnor-stasheff2.pdf`)
   was attempted six times (initial plus five retries) and timed out every
   time (`UND_ERR_CONNECT_TIMEOUT`); the identical document (byte size
   13,204,109) was then fetched from the Edinburgh mirror already cited by the
   published DT-15 items. The attempts are preserved in the coverage row's
   `recovery_attempts` and the row carries a `recovery_note`.
2. Tom Weston, *An Introduction to Cobordism Theory* (lecture-notes, 37 pp.),
   `https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf`.
   Part 2 §§6–13, printed pp. 11–26 (Hopf algebras; partitions and dyadic
   partitions; the Steenrod algebra; SW classes via Thom and Steenrod squares;
   cohomology of Grassmann manifolds; projective-space computations;
   cohomology of $TBO_r$; determination of the unoriented cobordism ring);
   Part 3 §§14–18, printed pp. 26–34 (Euler, Chern, Pontryagin classes;
   cohomology of $BSO_r$ away from 2; $\Omega^{SO}\otimes\mathbb Q$); §19
   (signature theorem, deferred to DT-20).
3. Daniel S. Freed, *Bordism: Old and New* (lecture-notes),
   `https://people.math.harvard.edu/~dafr/bordism.pdf`.
   Lecture 1, printed pp. 5–14 (cobordism, characteristic numbers, Thom's
   theorem stated); Lectures 7–10, printed pp. 55–91 (characteristic classes,
   the Thom isomorphism, tangential structures, Thom spectra); Lectures 11–12,
   printed pp. 92–105 (signature, rational oriented bordism, the
   $\mathbb Q$-Hurewicz step (12.13), the projective-space basis).

Additional cited treatment for one computation: Allen Hatcher, *Vector Bundles
& K-Theory*, `https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf`, cross products
and the Euler sequence for projective space; it is cited inside item references
and was already used by published library items, so it is not counted in the
pair's two-treatment harvest. Every harvested heading in the coverage file has
a disposition; the declines carry ≥40-character reasons, and every `deferred`
row names a destination (`owner-decision` or the planned DT-20 page).

## 4. Dependency verification

- All 21 manifest items carry explicit `deps`; every target resolves to a
  published item file or to an item of this run (own batch, batch 2, batch 9's
  DT-17, or batch 30's AT support pair). No B-page-only item is a dependency
  outside its own page, no forward, circular or missing edge remains. Verified with
  `tools/manifest-deps.mjs` (21 items, 0 missing), the whole-run
  `tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json`
  (329 scoped items, 0 errors, 0 warnings) and the run-wide
  `tools/validate-plan.mjs research/plan-spec.json` (no item-level cycle,
  forward reference, B-page dependency or unresolved id among the 1420 pages
  with item lists).
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29`
  reports no batch-11 level mismatch. The rational spanning proposition remains
  level 8 and its Pontryagin-number consumer level 9; the Stiefel–Whitney
  detector is level 15 through the batch-30 detection chain. Adding the published
  Axiom-of-Choice dependency does not change in-run levels. The run-wide command
  still reports unrelated stale levels in batch 23 and empty inventories in
  batch 24; those batches were not changed.
- Actual supplier interfaces were read, not inferred: DT-15's cobordism,
  group and boundary-vanishing items (published); DT-16's Thom-space,
  stable-normal-bundle, collapse, transverse-preimage and homotopy-cobordism
  items (published, frontier-38-owner-30); AT-18's Thom/Gysin items, AT-19's
  SW-class and $H^*(BO(n);\mathbb F_2)$ theorem, AT-20's Pontryagin and
  rational $BO/BSO$ items, AT-9's Steenrod-square calculus, AT-21's
  prespectrum and stable-homotopy items, AT-15's classification and
  Grassmannian items (all published); the DG Whitney-embedding, tubular-
  neighbourhood and transversality items (published); and batch 9's DT-17
  manifest entries (in-run, open cross-batch row recorded). Hypotheses,
  directions, coefficient conventions (mod 2 vs integral vs rational),
  orientation signs and axiom strength were checked where the items are used.
  Smooth normal data and classifying maps use the AC/AC_ω premises of their
  cited suppliers. The rational spanning proposition also uses full AC in
  its vector-space duality/dimension argument: its Statement now assumes AC
  and its dependencies include `def-axiom-of-choice`. Its direct consumer,
  `thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers`, now
  states the inherited AC premise and includes the same dependency. The ten
  batch-12 indirect consumers already state AC and directly depend on the
  axiom. The Thom/Stiefel--Whitney detection theorem also directly depends on
  the axiom; following owner direction, its Statement now explicitly assumes
  AC as inherited from its bundle, cohomology, and AT suppliers. Full AC
  covers their AC_ω premises; no AC_ω-only proof is claimed. This and the
  updated AT support cards invalidate its earlier owner-held hash, so the
  readiness record remains pending a stable-input refresh.
- Two implicit uses were made explicit as dependencies: the multiplicativity
  of the Kronecker pairing under cross products and the product fundamental
  class — both needed by the product formula and neither stated as a
  standalone published item. They are scaffolded here as the first two A
  items instead of being hidden inside the product-formula proof.
- The cross-batch input currently has 12 item edges and 3 declared page edges,
  all open: the batch-9 neat-cobordism collapse; batch-30 rational Hurewicz,
  rationalization, shared prespectrum, lifted-cell and detector suppliers; and
  the page edges to batch 9, batch 2 and the AT support page. No edge changes
  because the AC dependency is published. No unified ledger refresh was run in
  this repair.

## 5. Owner-approved Algebraic Topology support pair and required local proofs

The unoriented detection theorem (design item 9) remains Step-1 escalated.
Its source route needs local Steenrod, Thom-cohomology, metastable
Eilenberg–MacLane, Hopf-freeness and stable-comparison proofs; the published
operations page supplies Adem relations but does not assert that admissible
composites form a basis. The approved batch-30 AT page now inventories local
suppliers for this route, while the DT-19 theorem must remain escalated until
those suppliers and its exact item dependencies close. Searches of the
published library for `Steenrod algebra`, `K(Z/2,n)`, `rational Hurewicz` and
`finiteness of the homotopy groups of spheres` found no prior suppliers. The
new AT items are in-run planned suppliers, not published results.

The batch-11 matrix repair is complete in its manifest. The ordinary
Pontryagin-number matrix is now claimed to be invertible, not triangular. A
triangular Newton power-sum matrix, its repeated-part diagonal factor, and an
invertible rational change of row basis prove nonsingularity locally. The
degree-eight check gives the ordinary matrix $\begin{pmatrix}10&9\\25&18\end{pmatrix}$
and Newton matrix $\begin{pmatrix}5&0\\25&18\end{pmatrix}$. The projective
tangent-bundle supplier now uses the canonical Euler exact sequence and a
justified metric splitting, not a claimed canonical direct-sum splitting.

**Source proof gaps and corresponding local AT obligations for the
unoriented detection theorem (all full-text sources already fetched):**

1. A locally proved presentation/basis theorem for the mod-two Steenrod
   algebra: admissible composites satisfy the Adem relations and form a
   basis. The published Adem theorem supplies only the relations. The dyadic
   dimension count is not needed for detection once the stable homotopy
   comparison below is proved.
2. The stable-range computation
   $\widetilde H^{q+i}(K(\mathbb F_2,q);\mathbb F_2)\cong\mathcal A^i$ for
   $0\le i<q$ (Weston §8, from the mod-two Serre computation). Existence and
   representability of these Eilenberg–MacLane spaces are published, as is the
   evaluation identity
   `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces`;
   together with naturality it gives $f^*(a\iota)=a(f^*\iota)$. That identity
   is not a missing result.
3. A connected graded module-coalgebra freeness theorem with its field,
   coaugmentation, counit, grading and diagonal-action hypotheses stated:
   injectivity of the unit-action map $\mathcal A\to M$ must imply freeness
   of $M$ over $\mathcal A$ (Weston Proposition 6.2).
4. A correct injection of the Steenrod action into the stable mod-two Thom
   cohomology of $MO$, with compatible stabilization, the Whitney-sum
   coalgebra, Cartan compatibility and a valid linear-independence argument.
   Weston's Lemma 12.2 disjoint-support argument is false: for $P=xyz$, both
   $Sq^3(P)$ and $Sq^2Sq^1(P)$ contain $x^2y^2z^2$. A triangular
   leading-term proof could replace it, but is not supplied there.
5. A finite-range homology-to-homotopy comparison for the product of
   Eilenberg–MacLane spaces used to detect the relevant unstable Thom-space
   homotopy groups. Ordinary Whitehead alone does not supply this comparison;
   the local proof must include the relative-Hurewicz/CW mapping-cylinder
   argument and prove that integral homology equivalence actually holds.
6. For Weston's integral route, the coefficient calculation is for Thom
   spaces, not vanishing of odd-primary cohomology of $BO_r$ or $BSO_r$.
   Prove the away-from-two $BO/BSO$ computation, strict-range odd-primary
   Thom-space vanishing, prime-to-two/rational acyclicity of
   $K(\mathbb F_2,q)$, finite-type/integral finiteness, and the UCT/mapping-cone
   passage. These comparisons must stay strictly below degree $2r$: products
   of degree-$r$ classes enter at the endpoint, and for even $r$ an
   Euler/Pontryagin class gives nonzero degree-$2r$ odd-primary Thom
   cohomology. A localized comparison using the exponent-two property of
   unoriented bordism may avoid the odd-primary route, but it also needs a
   local proof. Equality of unstable dimensions alone does not prove that
   stabilization preserves the groups; apply a proved detection result at
   sufficiently large rank.
The rational oriented branch (items 13 and 11) is resolved locally in
`frontier-41-ha-dt-29-rational-bordism-step1-repair-draft.md` and in the full
strategy fields of the batch-11 manifest. Its direct suppliers are the batch-30
finite-range rational Hurewicz theorem, exact rationalization, the moved shared
Thom prespectrum definition, and the published Thom, CW, field-duality and
zero-dimensional bordism interfaces. For $T_r=Th(\gamma_r^+)$ the proof sets
$c=r$ and $i=n+r$ and takes $r\ge n+2$; it then dualizes the cohomological
Thom comparison to prove the homology transition maps are isomorphisms. It
does not use Milnor–Stasheff Theorem 18.3, Serre homotopy finiteness, or a
homology Thom theorem as a black box. DT-20 must wait for the support page
and these updated item records to close through the applicable workflow
stages.

The full-text audit found source errors that must not be copied into local
proofs. Weston's §8 identification of integral and mod-two cohomology of
$K(\mathbb F_2,q)$ is false for $q\ge2$:
$H^q(K(\mathbb F_2,q);\mathbb Z)=0$ while
$H^q(K(\mathbb F_2,q);\mathbb F_2)=\mathbb F_2$; use only the mod-two
computation. His Lemma 12.2's disjoint-support argument fails already on
$xyz$, where $Sq^3(xyz)$ and $Sq^2Sq^1(xyz)$ both contain $x^2y^2z^2$; a
replacement triangular argument is required. Use Theorem 13.2 only strictly
below degree $2r$: its endpoint admits products of degree-$r$ classes, and
for even $r$ odd-primary degree-$2r$ Thom cohomology is nonzero. Its
prime-field comparisons do not imply integral homology equivalence without
finite-generation and UCT/mapping-cone arguments. Normal and tangent
Stiefel–Whitney monomials are related by degreewise inverse substitution, not
termwise equality. Milnor–Stasheff Theorem 4.10 refers the converse to Stong,
and Chapter 18 proves only a partial Pontryagin–Thom statement before its
rational calculation; neither closes Thom detection.

The independent audit of Weston Proposition 6.2 also found that its
“choose any $k$-splitting” proof step must require a degree-preserving
splitting: an ungraded section can make the proposed free-module map
nonsurjective. The proof also needs a finite largest-second-degree argument
to prevent cancellation and a separate degree-zero coproduct calculation.
The theorem's corrected graded version is fully proved in
`research/frontier-41-ha-dt-29-at-support-hopf-freeness-draft.md`.
The finite-range integral homology-to-homotopy comparison is fully proved
from the local relative-Hurewicz, CW mapping-cylinder and weak-approximation
suppliers in
`research/frontier-41-ha-dt-29-at-support-finite-range-comparison-draft.md`.
Its strict range is essential: integral homology equivalence below $2r$
gives homotopy isomorphism only through $2r-2$, so detecting
$\pi_{r+n}$ requires $r\ge n+2$. The source drafts do not close the separate
integral coefficient comparison from mod-two computations.

**Owner-approved placement (pair integration in progress).** Add one new
algebraic-topology A/B pair:

| | |
|---|---|
| A page | `thom-spectra-and-unoriented-bordism-detection` |
| B page | `thom-spectra-and-unoriented-bordism-detection-examples` |
| placement | orders `548.5`/`548.6`, after published Thom-spaces A/B at `547`/`548` and before DT-9 at `549` and DT-19 at `553`; this supersedes the earlier invalid `366.0245`/`366.0246` and `366.0385`/`366.0386` proposals |
| requires | exactly `thom-spaces-normal-data-and-collapse-maps` (A page 547; its prerequisite closure contains all 1,476 cited published item files across 119 page homes, including the Chern/Pontryagin suppliers at 366.039) |

The AT page proves its own prespectrum and detection interfaces. It may use
the already-published generic Thom quotient and metric Thom-space interfaces
on page 547, but it must not depend on the DT-19 prespectrum definition,
since DT-19 will consume the new AT results. The current 29-pair scope is
expanded by exactly this pair, to 30 pairs total. The complete item inventory and proof routes are in
`research/frontier-41-ha-dt-29-at-support-thom-detection-integration-draft.md`:
54 new A items plus the one combined MO/MSO prespectrum definition moved from
DT-19, and four B examples. Two explicit local lemmas justify the Whitney-sum
coalgebra and finite detector map definitions. The A inventory includes the complete
Steenrod/EM chain, generic module-coalgebra freeness theorem, prespectrum
cohomology interface, odd-primary and finite-generation route, finite-range
homotopy comparison, rational-Hurewicz proof for DT-19, and the integrated
stable Thom detection theorem. The B items are
`ex-low-degree-admissible-steenrod-monomials`,
`ex-strict-metastable-eilenberg-maclane-range`,
`ex-universal-thom-class-steenrod-operation`, and
`ex-rational-hurewicz-range-for-the-four-sphere`.

The integration has independent mathematical passes for the module-coalgebra
freeness application, Whitney coproduct, detector comparisons and stable
compatibility. The mod-two comparison remains strict below $2r$, the integral
comparison is an isomorphism below $2r-1$ and surjective at $2r-1$, and the
homotopy comparison is an isomorphism through $2r-2$, requiring $r\ge n+2$
in stable degree $n$. The page-order walk confirms page 547 is sufficient; DT-9 remains outside the MO/MSO prespectrum dependency seam. The A/B pages are now registered at 548.5/548.6, and batch 30 was appended without renumbering prior batches. The combined definition was moved out of batch 11 after recording a preservation baseline. Batch-11 cross-batch records now include the AT page, rational Hurewicz, rationalization, prespectrum and oriented-Grassmannian edges. The AC contract repair changes the transitive item hashes for the spanning proposition and its rational Pontryagin-number consumer; both batch-11 Step-1 records are owner-held and must be refreshed by the owner. Their ten batch-12 consumers already contractually assume AC; their non-owner readiness receipts are left for the dependency-ordered integration pass. No coverage disposition or cross-batch item edge changes: AC is an existing published dependency. The owner-held Stiefel–Whitney detection receipt is not refreshed by this work.

Sources for the proposed pair: Weston §§6–13 and §17 (complete PDF already
fetched); Milnor–Stasheff Chapters 16–18 plus the cited Serre finiteness
theorem (complete PDF already fetched); Freed Lecture 10–12 (complete PDF
already fetched); Mosher–Tangora for the Steenrod algebra; Félix–Halperin–
Thomas or Hatcher's spectral-sequence notes for the rational Hurewicz theorem.

Dependency chains: DT-19 `lem-pontryagin-thom-converts-bordism-detection-to-a-thom-space-homotopy-problem`
uses new A `thm-stable-unoriented-thom-homotopy-is-injectively-detected` →
DT-19 `thm-thom-stiefel-whitney-number-detection-of-unoriented-bordism`;
and the DT-19 rational spanning proposition consumes new A
`thm-rational-hurewicz-for-highly-connected-cw-complexes`, the shared Thom
prespectrum and rationalization suppliers before feeding
`thm-rational-oriented-bordism-is-detected-by-pontryagin-numbers` and the
DT-20 spanning-family items. The support pair supplies the local
rational-Hurewicz and other algebraic-topology theorems; it does not claim a
Pontryagin–Thom bordism theorem itself. DT-20 must wait until the support
items and the updated DT-19 consumers close through the applicable workflow
stages; the two rational items are no longer Step-1 escalations.

## 6. Published material findings (for the canonical ledger)

No mathematical defect was found in any actual prerequisite read for this
pair. One evidence-state finding is recorded because these items are actual
prerequisites of batch-11 items:

- **Publication-evidence gap (class `published-unaudited`).** In the
  transitive published closure of this batch's items, 35 published items carry
  `status: published` but no `verification.audited` or `verification.verified`
  marker (most carry only a `judge` stamp). The load-bearing ones for DT-19
  are the two inherited definitions
  `def-stiefel-whitney-number-of-a-closed-manifold` and
  `def-pontryagin-number-of-a-closed-oriented-manifold`, the DT-15 boundary
  propositions `prop-boundaries-have-zero-stiefel-whitney-numbers` and
  `prop-oriented-boundaries-have-zero-pontryagin-numbers`, the DT-15 cobordism
  and group/ring items
  (`def-unoriented-smooth-cobordism-of-closed-manifolds`,
  `def-oriented-smooth-cobordism`, `def-null-cobordant-closed-manifold`,
  `def-unoriented-and-oriented-bordism-groups`,
  `thm-disjoint-union-makes-bordism-classes-abelian-groups`,
  `thm-cartesian-product-makes-bordism-a-graded-ring`,
  `lem-boundary-stable-tangent-splits-off-a-trivial-line`,
  `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero`), the DT-16
  Thom-space and collapse items
  (`def-disk-bundle-sphere-bundle-and-thom-space`,
  `def-stable-normal-bundle-of-a-compact-smooth-manifold`,
  `def-pontryagin-thom-collapse-of-an-embedded-submanifold`,
  `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint`,
  `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy`,
  `prop-transverse-preimage-carries-a-pulled-back-normal-structure`,
  `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms`,
  `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual`,
  `lem-stabilizing-a-normal-bundle-suspends-its-thom-space`,
  `thm-stable-normal-bundle-is-independent-of-the-embedding`), and two DG
  transversality items
  (`thm-strong-whitney-approximation-by-transverse-maps`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`). All belong to
  `frontier-38-owner-30` and were inherited as published at preflight.
  Planned repair: an owner audit or delegated `verification.verified` marker
  recording the already-completed frontier-38 Step-5 review; no statement or
  proof change is proposed. This is a publication-evidence gap and not a
  mathematical defect, and it does not block this batch's readiness records.

## 7. Checks run (actual results) and unresolved findings

The AC-repair entries below are a targeted 2026-10-05 refresh. Other whole-run rows record the earlier scaffold pass; no full-run gate or global ledger refresh was performed for this contract correction.

| check | command | result |
|---|---|---|
| manifest items explicit | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-11.pages.json` | 21 items, 0 missing, 0 errors |
| manifest policy (whole run) | `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | 329 scoped items, 0 errors, 0 warnings |
| coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-11.coverage.json --require-destination` | 2 pages, 50 harvested results, 0 errors, 1 warning (`coverage-low-yield`, 9/38 scaffolded on the A page — expected because the declines are the detection machinery and deferred DT-20 content; recorded for Alpha) |
| full text | `node tools/source-fetch-check.mjs --coverage …batch-11.coverage.json --stamp` | 6/6 source rows fetch-verified (after the documented mirror recovery for Milnor–Stasheff) |
| URL liveness | `node tools/url-sweep.mjs --coverage …batch-11.coverage.json --out …batch-11-url-liveness.json --recover --fail-on-dead` | 3/3 live, 0 failed, 0 recoverable |
| source backing | `node tools/source-backing.mjs --coverage research/frontier-41-ha-dt-29-batch-11.coverage.json --liveness research/frontier-41-ha-dt-29-batch-11-url-liveness.json` | 11 authored results, every one backed |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | page order acyclic; no item cycle/forward/B-page/unresolved id among pages with item lists |
| external refs | `node tools/extcheck.mjs` | OK (no new findings; pre-existing unrelated rows only) |
| forward refs | `node tools/fwdcheck.mjs` | OK (no new findings) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | target and direct consumer remain at levels 8 and 9; no batch-11 mismatch. Run-wide output still has unrelated stale levels in batch 23 and empty inventories in batch 24. |
| readiness records | targeted `step1Decision` helper inspection | 21 batch-11 items: 18 closed; three owner-held ready receipts have stale hashes (the rational spanning proposition, its Pontryagin-number consumer, and the Stiefel–Whitney detection theorem). |
| cross-batch input | read-only inspection; no refresh in this repair | 12 item edges and 3 page edges, all `open`; this AC change adds no cross-batch edge because the axiom is published. |

Unresolved findings: (1) the rational spanning proposition and its Pontryagin-number consumer have owner-held Step-1 records whose hashes are stale after the direct AC contract repair; the Thom/Stiefel--Whitney detection record is stale after the explicit Statement premise and support-chain update. Refresh these three owner records only after their supplier inputs stabilize. (2) The ten non-owner batch-12 descendants have stale transitive Step-1 hashes; they already assume AC and depend on the axiom, so their content is unchanged and their receipts are left for the final dependency-ordered integration pass. (3) The `published-unaudited` evidence class of §6 and the existing coverage low-yield warning remain. No coverage disposition, dependency level, cross-batch edge, or global ledger entry changes in this AC contract repair. No Step-1 record was rewritten here.
