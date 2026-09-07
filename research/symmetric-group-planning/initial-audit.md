# Symmetric-group representation track: initial ownership and supplier audit

Audit date: 2026-09-07. This is planning evidence, not a claim that the
proposed category or its mathematics is published.

## Identity and publication state

- The requested display title is **Representation theory of symmetric groups**;
  the category slug is `representation-theory-of-symmetric-groups`.
- The reserved relative label prefix `SYMR` has no match in the repository as
  of this audit.
- RG-8 through RG-11 and RG-13 are registered in `research/plan-spec.json`, but
  their live `items` arrays are empty and their page files do not exist. They
  are planned suppliers, not published prerequisites.
- The exact planned suppliers and page-level chain are:
  - `young-diagrams-tableaux-and-permutation-modules` (RG-8, order 510.045),
    then its B companion;
  - `specht-modules-and-the-irreducibles-of-the-symmetric-group` (RG-9,
    order 510.047), then its B companion;
  - `the-branching-rule-and-the-young-graph` (RG-10, order 510.049), then its
    B companion;
  - `the-hook-length-formula-and-rsk-correspondence` (RG-11, order 510.051),
    then its B companion;
  - `principal-series-representations-of-gl-n-over-a-finite-field` (RG-13,
    order 510.055), then its B companion.

RG-8 already owns partitions/Young diagrams, standard and semistandard
tableaux, dominance, Young subgroups/tabloids/permutation modules, row and
column stabilizers, and Kostka numbers. RG-9 owns polytabloids and complex
Specht classification, the standard basis, and characteristic-zero
irreducibility. RG-10 owns ordinary restriction/induction branching, the Young
graph, Young's rule, and the Schur--Weyl interface. RG-11 owns hook lengths and
formula, row insertion, Robinson--Schensted/RSK, and the sum-of-squares identity.
RG-13 owns the generic type-A Hecke algebra, its standard basis, group-algebra
and finite-field specializations, and Tits deformation. No new `SYMR` item may
restate these claims. A new item must add a genuine conclusion, coefficient
regime, structure, or algorithm and cite the inherited ID it extends.

## Published suppliers actually present on disk

The following are published and have nonempty page inventories.

| page | usable interface |
|---|---|
| `symmetric-polynomials` | finite-variable elementary, complete, monomial, and power-sum symmetric polynomials and their generating identities; it does **not** supply the stable symmetric-function ring, Schur basis, Hall inner product, or Frobenius characteristic |
| `the-group-algebra-and-representations` | group algebras/modules, irreducibility, intertwiners, regular/permutation/sign representations, Schur's lemma |
| `maschkes-theorem-and-complete-reducibility` | ordinary semisimplicity, isotypic decomposition, regular multiplicities, Wedderburn and number-of-simples results under the stated characteristic hypotheses |
| `characters-and-the-orthogonality-relations` | complex characters/class functions, inner product, tensor/dual/permutation characters, orthogonality, multiplicity extraction, regular character |
| `induced-representations-and-frobenius-reciprocity` | finite induction/restriction, Frobenius reciprocity, virtual character rings, Mackey formula |
| `modular-representations-and-projective-covers` | a fixed splitting p-modular system, lattices and reduction, radicals/socles/Loewy series, projective covers, vertices and sources |
| `brauer-characters-and-decomposition-matrices` | p-regular elements, Brauer characters, decomposition map/numbers/matrix, projective indecomposable characters, Cartan matrix, block partition |
| `integer-partitions-and-the-twelvefold-way` | Ferrers/Young diagrams, conjugation and elementary partition generating functions; where RG-8 is the direct representation-theory supplier, this page is agreement/background rather than a substitute |
| `permutation-statistics-inversions-and-eulerian-numbers` | descents, major index, inversion q-factorial, and related bijections; available for fake-degree/major-index examples only when logically used |
| `abelian-categories` and the homological-algebra spine through `derived-categories` | exact/abelian, complexes, homotopy and derived-functor infrastructure; `derived-categories` now has a nonempty 60-item inventory but its page file is **draft**, so it is not a published supplier |
| `monoidal-categories-and-monoidal-functors`, `braided-and-symmetric-monoidal-categories`, `duality-and-rigidity-in-monoidal-categories`, `tensor-and-fusion-categories` | monoidal/braided/rigid vocabulary and Grothendieck rings; the last page supplies a Grothendieck ring but not graded categorification or KLR 2-representations |

## Other planned suppliers and ownership seams

- RL-8, `tensor-product-multiplicities-and-littlewood-richardson`, is planned
  and unbuilt. It owns the stable-rank polynomial-`GL_r` Schur-character and
  Littlewood--Richardson tensor-product theorem. The symmetric-group track
  should own the *outer induction product* and restriction coproduct for
  `\bigoplus_n R(S_n)`, plus skew Specht/character consequences. Its LR
  coefficient may identify with RL-8's coefficient, but it should not mint a
  second unconstrained `GL_r` tensor-product theorem.
- RL-12 through RL-15 (Kac--Moody, affine, integrable highest-weight modules,
  Weyl--Kac) are planned and unbuilt. The Lie scaffold explicitly leaves
  quantum groups and crystal/global bases outside its scope. The corrected
  design therefore builds a narrowly scoped level-one
  `U_v(\widehat{\mathfrak{sl}}_e)` and crystal interface inside the Fock-space
  page. It does not cite the classical RL pages as if they supplied quantum
  affine representation theory.
- The braid-group lead owns geometric braid theory, braid representations,
  Jones traces/link invariants, categorical braid actions, Soergel bimodules,
  Rouquier complexes, and link homology. The symmetric-group track may use
  braid/Coxeter relations inside Hecke or KLR presentations and may categorify
  Fock-space actions, but it must not duplicate those braid-specific results.
  The acyclic default seam is: inherited RG-13 generic Hecke algebra -> new
  symmetric-group Hecke/cellular/KLR representation theory; braid pages may
  consume the resulting representation-theoretic interface, but no `SYMR`
  proof should require a later braid-categorification page.

## Source-informed provisional mathematical spine

This is an architecture to test against the seven required research reports,
not a finished inventory.

1. Stable symmetric functions, Hall inner product, and the Frobenius
   characteristic of the graded representation ring of the symmetric groups.
2. Determinantal and rim-hook character methods: Jacobi--Trudi/skew Schur,
   Murnaghan--Nakayama, and worked character-table calculations.
3. Outer induction product, restriction coproduct, Littlewood--Richardson and
   skew Specht modules, carefully separated from the internal/Kronecker tensor
   product.
4. Jucys--Murphy elements, the Gelfand--Tsetlin algebra, Young seminormal and
   orthogonal forms, with collision/denominator hypotheses stated.
5. Integral and modular Specht theory: invariant form, radicals, simple
   modules indexed by p-regular partitions over a splitting field, and explicit
   failure of ordinary semisimplicity.
6. p-cores, p-quotients/abaci, block classification and weight, followed by
   modular branching via normal/conormal or good nodes.
7. Type-A Hecke representation theory beyond RG-13: semisimplicity criterion,
   Murphy/cellular bases, Specht modules, residues, and simple-module labels at
   roots of unity.
8. A narrow quantum-affine/Fock-space interface followed by cyclotomic Hecke
   and quiver Hecke/KLR algebras, with an exact
   Brundan--Kleshchev-style interface and all field/quantum-characteristic
   restrictions exposed.
9. Fock spaces, crystals/canonical bases, Ariki categorification and graded
   decomposition numbers; full categorification statements must not be used as
   black boxes by earlier modular classification pages.
10. Internal tensor products and Kronecker coefficients, including basic
    symmetries, character formulae, Murnaghan stability/reduced coefficients,
    and a prominent statement that no general positive combinatorial rule is
    known.
11. A source-supported asymptotic endpoint, likely Plancherel growth/limit
    shape or stable character theory, only if the research report yields a
    proof route compatible with the library's probability/analysis suppliers.

No page count or serial dependency chain has yet been fixed. Independent
ordinary, modular, and asymptotic branches should share only genuine suppliers.

## Open checks before the scaffold is final

- Complete all seven requested full-text retrieval/reading assignments and
  record the actual roster, model, effort, cache paths, hashes, and page counts.
- Verify exact field assumptions for the modular simple classification,
  Nakayama block theorem, modular branching, Hecke semisimplicity, and the
  Hecke--KLR isomorphism.
- Decide whether p-core block classification receives a supplied proof or is a
  non-load-bearing recorded result; do not disguise a citation as a proof.
- Reconcile the exact LR coefficient owner with RL-8 and the exact Hecke/Jones
  consumer seam with the braid scaffold after both inventories are complete.
- Check every proposed ID against live items, aliases, plan inventories, and
  both concurrent scaffold files before delivery.
