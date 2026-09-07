# Homological Algebra enrichment review — 2026-09-07

Owner request: enrich the existing HA prose scaffold to supply missing
foundations for the braid-group and symmetric-group representation plans.
The separate owner hard gate requires no significant mathematical gaps or
inadequate dependencies in those plans.

## Scope and current outcome

The canonical design is `research/plan-homological-algebra-track.md`,
HA-18–HA-24. `pages.json` contains fourteen future page records with empty item
arrays. The two HA-24 future rows and their load-bearing downstream page edges
are registered in `research/plan-spec.json`; no authored mathematical item or
runtime state was changed by this enrichment.

| A page | proposed A items | principal consumer |
|---|---:|---|
| Graded Bimodules and Tensor Functors | 9 | both tracks |
| Grothendieck Groups and Graded Cartan Pairings | 14 | symmetric Hecke/KLR; split-K0 formalism also braid |
| Bounded Bimodule Complexes and Derived Tensor | 6 | braid categorical actions |
| Perfect Complexes and Triangulated Grothendieck Groups | 8 | braid decategorification |
| Hochschild Homology and Diagonal Koszul Resolutions | 14 | braid link homology |
| Hochschild Hyperhomology and Cyclic Tensor Invariance | 8 | braid link homology |
| Homological Gaussian Elimination | 9 | Khovanov–Seidel and Rouquier complex cancellations |

The seven A pages contain 68 proposed items in total. Their twenty-four proposed
examples/counterexamples live only on B companions. None is a proof supplier.

## Mathematical corrections made during review

- Distinguished internal degree from complex degree and fixed the shift
  dictionary against the existing commutative-algebra item.
- Defined homogeneous Hom as a direct sum, not automatically all underlying
  maps. Projectivity is intrinsic to the degree-zero graded category.
- Separated right-side flatness/exactness from left-side finite-projectivity
  of outputs; neither is substituted for the other.
- Added explicit graded Fitting, Krull–Schmidt, projective-cover, and simple
  shift-orbit arguments. The published finite-dimensional-algebra proofs are
  inherited and adapted, not claimed to be generic results of the special
  Khovanov–Seidel example.
- Separated G0, split K0, triangulated K0, the Cartan map, and the
  projective/simple pairing. Field splitting and finite-dimensionality are
  explicit; the Cartan map is not presumed invertible.
- Kept the bounded-derived/G0 comparison separate from finite-global-dimension
  assumptions needed to identify all bounded finite modules with perfect
  complexes.
- Built Hochschild homology from an unnormalized bar complex with explicit
  enveloping-algebra handedness; no unsupported normalized-bar construction
  or projectivity of the coefficient bimodule is assumed.
- Inherited general Koszul regularity from commutative algebra and added only
  the polynomial diagonal specialization and its comparison to the bar model.
- Distinguished termwise Hochschild homology followed by complex cohomology
  from total hyperhomology. The spectral sequence has a finite filtration in
  each total degree; no unproved collapse or preservation of all three
  gradings in the abutment is asserted.
- Added separate total and termwise cyclicity proof routes, with the tensor
  projectivity conditions and cochain/bar signs exposed.
- Added the additive-category extension of complex/homotopy language needed by
  the generic theorem, rather than importing the published abelian-only
  definition without its stronger hypothesis.
- Fixed ordered block conventions and proved the minus Schur-complement formula
  by explicit triangular basis changes, including the adjacent differential
  blocks forced to zero by `d^2=0`.
- Recorded the complete projection, inclusion, and contraction maps with all
  strong-deformation-retract side conditions. Finite iteration requires each
  current Schur pivot to remain invertible; no infinite-series or general
  confluence claim is made.
- Separated strict naturality from transfer in the homotopy category and added
  explicit sign, nonunit-pivot, cancellation-order, and strict-functoriality
  witnesses.

## Independent review

The local symmetric lead reviewed HA-18/HA-19 and relevant HA-21 claims. Its
initial findings are retained in
`research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md`.
After the corrections above it reported its substantive HA gaps closed.
Root additionally found and repaired a missing page-level dependency on
`exactness-and-the-member-calculus`, and explicitly added the category/projective
object suppliers to HA-18. The braid lead and researcher 7 reviewed HA-20–HA-23
and required an explicit free RIGHT enveloping-module bar model and the exact
Rep-sided projectivity hypotheses for cyclicity. Root implemented both; the
lead verified the corrected formulas on disk and reported the shared interface
ready for the final combined splice. This is not a mathematical publication
certificate.

## Structural verification

Read-only checks against the current live plan and new page records found:

- no new page-ID collisions;
- no missing page prerequisite;
- no cycle reachable from a new HA page;
- symmetric A/B companion links and no new B-page prerequisite targets;
- no duplicate proposed A-item IDs or collision with an authored item;
- every explicitly named inherited item ID resolves on disk;
- named inherited item owners are reachable from the page prerequisites after
  the exactness-page correction;
- all A inventories are strictly below sixty items;
- clean scoped whitespace check after using blank lines instead of trailing
  Markdown line-break spaces.

The source URLs, actual reading ranges, complete-article retrieval checks, PDF
and extracted-text hashes are in the canonical scaffold and
`source-manifest.json`. The CMW and Bar-Natan author copies are cached locally
in full; only the recorded Gaussian-elimination ranges were read closely. No
retrieval is misreported as a complete reading or as an additional textbook.

## Remaining gate

Independent HA-18–HA-24 review is closed. Reconcile final consumer IDs and page
requirements and rerun the structural checks on the combined final inventory.
The braid and symmetric scaffolds retain their separate proof obligations.
In particular, this HA enrichment does not supply quantum global bases,
parabolic Kazhdan–Lusztig multiplicities, or Ariki's theorem by itself.
