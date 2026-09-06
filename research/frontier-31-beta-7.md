# frontier-31 beta batch 7 — scaffold notes

## Scope and design control

- Owns only A `tensor-and-fusion-categories` (365.035) and B
  `tensor-and-fusion-categories-examples` (365.036).  The manifest uses the
  spec’s sole prerequisite, `enriched-categories-examples`.
- The L2992 design instead names five older prerequisites (duality/rigidity,
  abelian categories, subobjects/generators, exactness, and monoidal functors).
  This disagreement is recorded, not resolved: the spec controls here.
- Both requested design locations were read. L2992 controls the mathematical
  route and traps; L3169 controls the B contingencies, sources, and boundaries
  where it elaborates the pair. Verified source text controls source repairs.

## Sources read and verified

1. Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories* (author-final monograph),
   <https://math.mit.edu/~etingof/egnobookfinal.pdf>. Complete 362-page PDF
   opened 2026-09-05. Read: contents pp. vii–viii; §1.2 pp. 1–2; §1.8 pp. 9–10;
   §§4.1–4.3 pp. 65–70; §4.5 pp. 71–72; §4.8 p. 76.
2. Catherine Meusburger, *Tensor Categories* (complete FAU lecture notes),
   <https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf>.
   Complete 215-page PDF opened 2026-09-05. Read: contents pp. 2–3; §8.1 pp.
   141–144; §8.2 pp. 145–151.

EGNO is the primary monograph; Meusburger independently checks the finite,
semisimple, tensor, and fusion conventions.  Every heading/result in these
ranges and its disposition is recorded in `frontier-31-batch-7.coverage.json`.

## Source repairs and settled conventions

- Work over a fixed algebraically closed field $k$. “Tensor category” means
  EGNO’s locally finite $k$-linear abelian rigid monoidal category with the
  canonical scalar map $k\to\operatorname{End}(\mathbf1)$ an isomorphism; it
  never means merely “monoidal.”
- EGNO Theorem 4.3.1 says `End(1)` is semisimple, and Corollary 4.3.2 says the
  unit splits into pairwise nonisomorphic **indecomposables**. They do *not*
  prove the unit semisimple. EGNO Theorem 4.3.8(ii), under left duals, proves
  that. The manifest therefore adds the two intermediate items and assigns the
  unit-semisimplicity theorem to 4.3.8. This repairs the design’s material
  misattribution without deleting its result.
- The unit proof route is source-faithful: biexactness, image compatibility,
  semisimplicity of `End(1)`, the component decomposition, then 4.3.8’s
  exact-duality proof. It does not assume ambient semisimplicity.
- EGNO Def. 4.2.5 defines tensor functors for **multiring** categories as exact,
  faithful, $k$-linear monoidal functors. The retained stable id must state that
  scope before giving the tensor-category restriction; it enables the strong,
  nonfaithful projection witness.
- The double-dual item remains a remark. EGNO Question 4.8.3 asks whether every
  semisimple tensor category has a pivotal/spherical structure, so an `fs-`
  counterexample would be dishonest. Objectwise isomorphisms are not the data of
  a monoidal natural isomorphism.

## Scaffold, dependencies, and authoring obligations

- A has 34 items; B has 7, so no split is required. Every manifest item has an
  explicit `deps` array.
- A items 1–7 provide $k$-linear, locally finite, finite, semisimple,
  (multi)tensor and (multi)fusion definitions plus terminology. Item 4 is needed
  before “semisimple category” is used and follows Meusburger Def. 8.1.4.
- Items 8–19 are the exactness/projective/unit/tensor-functor spine; items 20–23
  construct $K_0$, descend its product, define supplied simple-family fusion
  rules, and obtain the dual anti-involution. No skeleton or global choice is
  used: finite simple representatives are supplied data.
- Items 24–26 retain the pivotal warning and explicitly defer Frobenius–Perron,
  module-category, centre/modularity, Deligne-product, and reconstruction work.
- Items 27–34 first construct witnesses: dual numbers, $\mathbf{Vec}_k\times
  \mathbf{Vec}_k$, a multitensor projection, and $\mathbf{Vec}_G$ for finite
  nonabelian $G$, then use them in the corresponding false statements.
- B remains non-load-bearing. Vector-space and finite-group examples are
  contingent on `tensor-products-of-modules` and
  `maschkes-theorem-and-complete-reducibility`; neither is an A dependency.
  EGNO Example 4.2.7 supports retention of the 3-cocycle/associator witness.

## Next action

Before authoring, reread EGNO pp. 65–72 and 76, especially the proof of 4.3.8;
verify the two contingent B prerequisites are published; author in manifest order
with literature-derived statements. Never restore the unsupported pivotal
false-statement formulation.

## Validation

- `manifest-deps` passed: 41 items, every object with an explicit dependency
  array, no normalization and no errors. `content-policy --manifest-only`
  passed with 41 scoped items and no errors or warnings.
- `coverage-checklist --require-destination` passed: one A page, 63 harvested
  source results, no errors or warnings. `source-fetch-check` accepted both
  verified full-text source records (2/2).
- An in-memory overlay of this manifest on the current plan passed
  `validate-plan`: no new unresolved ids, cycles, forward references, B-page
  dependencies, or undeclared prerequisites. `git diff --check` is clean for
  the batch artifacts.
