# Representation theory of symmetric groups

Status: research-backed prose scaffold complete, 2026-09-07. This file
proposes future pages and item identities; it does not claim that a page with an
empty live plan inventory is published. Absolute orders are deliberately
omitted for the supervising integrator.

## 0. Scope and reading architecture

This category begins after the planned ordinary foundations RG-8 through RG-11
and builds three branches which later meet without an artificial serial chain:

1. **ordinary and combinatorial:** stable symmetric functions, Frobenius
   characteristic, rim-hook character computation, outer induction/skew
   modules, and the Jucys--Murphy seminormal calculus;
2. **modular, Hecke, and categorical:** integral Specht lattices, modular
   simples, cores and blocks, modular branching, type-A/cyclotomic Hecke
   representation theory, level-one Fock space, KLR grading, and Ariki-style
   categorification;
3. **stable and asymptotic:** Kronecker coefficients with Murnaghan stability,
   FI-module representation stability, and Plancherel asymptotics.

Every A page has a B companion containing finite computations and sharp
hypothesis failures. B pages are dependency leaves and require only their own
A page; all external suppliers are reached through that A page. The exact proposed page
records are in `research/symmetric-group-planning/pages.json`; their `items`
arrays are intentionally empty until the normal frontier build authors the
content.

| label | A page | mathematical role |
|---|---|---|
| SYMR-1 | `symmetric-functions-hall-inner-product-and-schur-bases` | stable ring, bases, Hall pairing, Schur identities |
| SYMR-2 | `frobenius-characteristic-and-the-symmetric-group-character-dictionary` | isometric character/symmetric-function dictionary |
| SYMR-3 | `outer-products-skew-specht-modules-and-littlewood-richardson` | induction product, restriction coproduct, skew modules and LR coefficients |
| SYMR-4 | `rim-hooks-and-the-murnaghan-nakayama-rule` | recursive ordinary character computation |
| SYMR-5 | `jucys-murphy-elements-and-seminormal-forms` | commuting family, Gelfand--Tsetlin algebra, explicit Young forms |
| SYMR-6 | `integral-specht-modules-and-modular-simple-modules` | Specht lattices, radicals and simple classification in characteristic p |
| SYMR-7 | `type-a-hecke-specht-modules-and-cellular-bases` | Hecke module theory beyond RG-13 and q-Schur suppliers |
| SYMR-8 | `cores-quotients-and-blocks-of-symmetric-groups` | abacus combinatorics, Nakayama blocks and defect/weight |
| SYMR-9 | `modular-branching-and-the-good-node-crystal` | exact modular restriction/induction and good nodes |
| SYMR-10 | `level-one-fock-space-and-residue-crystals` | symmetric-group convention bridge to QG-6's Fock/crystal/global-basis theory |
| SYMR-11 | `cyclotomic-hecke-and-quiver-hecke-algebras` | cyclotomic Hecke--KLR bridge and transported grading |
| SYMR-12 | `ariki-categorification-and-graded-decomposition-numbers` | QG-8 categorification transported to Hecke decomposition numbers |
| SYMR-13 | `kronecker-coefficients-and-internal-products` | internal tensor products, exact character formulas and open boundary |
| SYMR-14 | `character-polynomials-fi-modules-and-representation-stability` | functorial sequences and eventual characters |
| SYMR-15 | `murnaghan-stability-via-fi-modules` | complete FI-module proof, reduced coefficients and exact global thresholds |
| SYMR-16 | `plancherel-measure-and-asymptotic-young-diagrams` | random partitions, limit shape and Kerov central limit theorem |

## 1. Exact inherited ownership

The disk audit is recorded in
`research/symmetric-group-planning/initial-audit.md`. The following inheritance
is binding.

### Planned, not yet published

- RG-8, `young-diagrams-tableaux-and-permutation-modules`, owns partitions,
  diagrams, standard/semistandard tableaux, dominance, Young subgroups,
  tabloids/permutation modules, stabilizers, and Kostka numbers.
- RG-9, `specht-modules-and-the-irreducibles-of-the-symmetric-group`, owns
  polytabloids, standard bases, characteristic-zero irreducibility, and the
  complete complex Specht classification.
- RG-10, `the-branching-rule-and-the-young-graph`, owns ordinary restriction
  and induction branching, Young's rule, and the Schur--Weyl interface.
- RG-11, `the-hook-length-formula-and-rsk-correspondence`, owns hook lengths,
  the hook-length formula, row insertion, RSK, and the ordinary
  sum-of-squares consequences.
- RG-13, `principal-series-representations-of-gl-n-over-a-finite-field`, owns
  the generic type-A Hecke algebra, its standard basis, specializations, and
  Tits deformation. SYMR-7 starts with Specht/cellular representation theory,
  not a second Hecke presentation.
- RL-8, `tensor-product-multiplicities-and-littlewood-richardson`, owns the
  stable `def-littlewood-richardson-tableau-and-coefficient` and the
  polynomial-GL tensor-product LR theorem. SYMR-3 consumes that exact
  coefficient while proving the distinct symmetric-group outer-induction and
  skew-module statements; it does not mint another LR tableau convention.
- The quantum-group track owns quantized enveloping algebras, divided powers,
  crystals, balanced triples/global bases, quantum affine type-A Fock space,
  generic KLR categorification, and cyclotomic highest-weight categorification.
  SYMR consumes the exact QG-6/QG-7/QG-8 items and retains only
  symmetric-group convention and Hecke-bridge statements.
- The Kazhdan--Lusztig track owns category O, parabolic Fock bases,
  Arakawa--Suzuki functors and the **degenerate** Ariki theorem. That route is
  recorded as a separate parameter regime; it is not used for SYMR-12's
  nondegenerate root-of-unity theorem.

### Published suppliers

The abstract-algebra pages for group algebras, Maschke, ordinary characters,
and finite induction are published and supply their exact item IDs. The
group-theory pages `modular-representations-and-projective-covers` and
`brauer-characters-and-decomposition-matrices` are also published. They supply
the splitting p-modular system, reduction, projective covers, Brauer
characters, decomposition/Cartan matrices, and the general block partition.
SYMR specializes and strengthens these for symmetric groups rather than
redefining them. The published `symmetric-polynomials` page is finite-variable;
SYMR-1 genuinely extends it to the stable graded ring and Hall/Schur structure.

## 2. Coefficient, diagram, and product conventions

- Diagrams are English, rows increase downward, and a node is `(r,c)`. The
  content is `c-r`. Conjugate partitions use a prime.
- Ordinary characters and modules are over the complex numbers unless a
  characteristic-zero splitting field is explicitly substituted.
- Modular results fix a prime `p` and the published splitting p-modular system
  `(K,O,k)` for `S_n`, with `k` a splitting field of characteristic `p`.
  Claims that require `k` algebraically closed or require a particular
  valuation ring say so separately.
- For a Hecke parameter `q` in a field `F`, quantum characteristic `e` is the
  least integer `e>=2` for which `1+q+...+q^{e-1}=0`, and is infinity when no
  such integer exists. The `q=1` case therefore gives `e=char(F)` in positive
  characteristic and infinity in characteristic zero. Any source using order
  of `q` instead is translated only after checking this exceptional case.
- `Ind_{S_m x S_n}^{S_{m+n}}` is the **outer product**. Tensoring two modules
  for the same `S_n` is the **internal/Kronecker product**. The two
  multiplications are never denoted by the same unqualified symbol.
- The stable symmetric-function ring is graded over the integers first; the
  power-sum orthogonality and character formulas may extend scalars to the
  rationals. Completion is introduced only for infinite Cauchy products.
- A categorification theorem distinguishes the Grothendieck group of finite
  modules from that of finitely generated projectives and distinguishes an
  ungraded specialization from a graded Laurent-polynomial statement.

## 3. Deliberate limits

- No general positive combinatorial rule for Kronecker coefficients is
  asserted. SYMR-13 records exact internal-product formulas and SYMR-15 proves
  stability and thresholds while keeping the unsolved positivity boundary
  explicit.
- No claim says that decomposition numbers for symmetric groups in arbitrary
  positive characteristic are generally known. Canonical-basis theorems are
  stated in their exact Hecke/characteristic regimes; adjustment matrices or
  remaining positive-characteristic gaps are not suppressed.
- The braid category owns geometric braid models, Burau/LKB representations,
  Jones traces and link invariants, braid-specific categorical actions,
  Soergel/Rouquier theory, and link homology. KLR/Fock categorification here is
  a representation-category action; it does not re-mint those braid results.
- Deligne--Lusztig theory, Schur algebras in full generality, spin/projective
  representations of double covers, Deligne categories, and representations
  of the infinite symmetric group are successor tracks unless a retrieved
  source proves that a small interface is essential to a proposed theorem.
- The Plancherel limit shape and Kerov character CLT remain central. SYMR-16
  explicitly scaffolds their shifted-observable, Ivanov--Kerov multiplication,
  probability, RSK tightness, topology and moment-method joints. The imported
  multiplication source was read through its finite support-union proof and
  algebra isomorphism. Determinantal-process and Tracy--Widom refinements remain
  outside this page because no proposed result depends on them.

## 4. Research evidence status

Seven externally produced reports in `research/symmetric-group-planning/` are
retained as useful but unauthenticated evidence. Separately, all seven locally
commissioned Terra-high assignments completed and returned through the
collaboration tool; their reviewed reports and authenticated roster are in
`research/symmetric-group-planning-main-review/`. They validate James and
Macdonald as the two subject textbooks and Peter Webb's complete 294-page
author-posted *A Course in Finite Group Representation Theory* as the third
full textbook. Mathas's 73-page Hecke/q-Schur notes remain a valuable complete
lecture-note source and are not relabelled as a textbook. Every source record
distinguishes complete-file validation from the exact proof ranges read.

## 5. Proposed item inventory

The proposed inventory is
`research/symmetric-group-planning/proposed-inventory.md`. It gives every new
item an explicit `deps` list, statement, proof route with intermediate joints,
purpose and exact source locator. Existing RG/RL/published items appear only as
dependencies or interfaces and are not assigned new IDs here. Headings contain
the exact A/B page title and page ID used by `pages.json`, whose item arrays
remain intentionally empty. The mechanically extracted audit manifest
`research/symmetric-group-planning/proposed-items.json` contains exactly
`{id,kind,page,deps}` for cross-track collision and cycle checks.

## 6. Worked-example policy

Every B-page computation will expose enough arithmetic or tableau/residue
steps to verify the claim. At minimum the ordinary branch computes full small
character data in two independent ways; the modular branch gives a reducible
Specht example, an abacus/core calculation, and a good-node restriction; the
Hecke/KLR branch checks a low-rank specialization and grading; and the stable
branch separates an outer LR coefficient from a Kronecker coefficient of the
same-looking shapes.

## 7. Proof dependency and acyclicity plan

The ordinary symmetric-function/Frobenius branch and the JM branch meet only
where a character-value theorem genuinely needs both. Modular Specht theory
depends on RG-9 plus the published modular entry pages, not on future Fock or
categorification. Modular branching uses its exact q-Schur first-level
comparison but does not use Ariki to prove simple classification. SYMR-7
consumes RG-13. QG-6 supplies Fock/global bases to SYMR-10 and the cyclic
type-A Cartan datum to SYMR-11; QG-7/QG-8 supply the remaining KLR structure
to SYMR-11; QG-8 and the local Hecke--KLR isomorphism meet at
SYMR-12. SYMR-13 and SYMR-14 meet only on the post-FI SYMR-15 stability page.
SYMR-16 depends on the ordinary dictionary and RSK/probability suppliers, not
on modular theory.

## 8. Source-heading dispositions

Every heading in the read source ranges will be marked `included`, `inline`,
`inherited`, `deferred`, or `out-of-scope`; included headings name the exact
item IDs that carry them. This crosswalk follows the item inventory after the
research reports are merged.

## 9. Measurements and final validation

Mechanical validation is rerun after every guarded reconciliation: unique item
and page IDs, exact dependency reachability, page cycles, B-leaf status, empty
`pages.json` item arrays, companion symmetry, and fewer than 60 A items.
Completion additionally requires source-byte/hash/page validation and closure
of every central proof route. The final disposition is recorded in
`research/symmetric-group-planning-main-review/gap-dependency-closure-ledger.md`:
Nakayama is closed by the q-Schur/Jantzen route; modular branching by
Kleshchev's first-level calculation, Brundan's q-Schur comparison, modular JM
primary idempotents and finite-group biadjunction; quantum/global bases and
nondegenerate Ariki by QG-6/QG-8 plus the Hecke--KLR bridge; Murnaghan by CEF;
and shifted-character multiplication by Ivanov--Kerov. No central item remains
licensed only by an unaudited citation.

## 10. Reconciliation decisions reserved for the supervisor

1. **Shared LR combinatorics (resolved).** RL-8 retains
   `def-littlewood-richardson-tableau-and-coefficient` and its GL tensor
   theorem. SYMR-3 requires the RL-8 page and consumes those exact items. There
   is no duplicate LR definition and no reverse edge.
2. **Braid/Hecke direction.** RG-13 supplies the generic Hecke algebra to
   SYMR-7. The braid page on Hecke/Jones traces may then consume RG-13 and, only
   for module-theoretic consequences it actually uses, SYMR-7. No SYMR page
   requires braid categorification, which prevents a cycle.
3. **Quantum/Ariki prerequisite (resolved).** SYMR-10 consumes QG-6, SYMR-11
   consumes QG-6/QG-7/QG-8, and SYMR-12 uses the direct chain QG-8 global-basis
   categorification -> blockwise Hecke--KLR isomorphism -> graded
   Specht/standard-Fock comparison. KL-6--KL-8 retain the distinct degenerate
   category-O route, whose parameter range is never used for the nondegenerate
   theorem.
4. **Category ownership (resolved).** The commission's descriptive category
   name is “Representation Theory of Symmetric Groups,” but the application
   already owns the filesystem/app slug `representation-theory`. The page
   manifests therefore use `category: representation-theory`; no undocumented
   parallel app category is introduced.
