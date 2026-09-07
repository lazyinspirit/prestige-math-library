# Symmetric-group scaffold gap and dependency closure ledger

Independent review stream: `/root/symmetric_scaffold`, 2026-09-07. The final
section below records the reconciled canonical disposition. Later headings
labelled historical preserve the earlier defect discovery trail; their former
“open” statuses are superseded by the final closure table.

## Gate semantics

Every central theorem must have all three of the following:

1. an exact claim, including coefficient field, parameter, rank, convention
   and exceptional cases;
2. a dependency path through exact item IDs, not merely a broad page/category;
3. a proof-bearing source route whose invoked intermediate results have been
   read and are either locally scaffolded or exactly inherited.

`proved_here:false` is not closure for a central result merely because it is
deep. It is reserved for a genuinely optional endpoint or frontier claim.

## Final mathematical closure disposition — 2026-09-07

| cluster | exact indispensable route now present | disposition |
|---|---|---|
| SYMR-1 symmetric functions | finite-variable stabilization -> stable bases -> Hall duality -> Cauchy/Jacobi--Trudi/skew tableaux, with completion only by bidegree | closed |
| SYMR-2 Frobenius characteristic | Young's Rule plus Kostka unitriangularity fixes Specht labels; class indicators/power sums prove the isometric integral dictionary | closed |
| SYMR-3 outer/LR | Young-subgroup Mackey proves bialgebra compatibility; the exact RL-8 LR definition is inherited; over `C`, the skew multiplicity module is decomposed by semisimplicity and Frobenius reciprocity | closed |
| SYMR-4 Murnaghan--Nakayama | James's determinant/rim-hook cancellation uses the exact binomial sign sum `sum_x (-1)^(r-x) binom(m-1,c-x)`; no generic Mackey shortcut remains | closed |
| SYMR-5 JM/seminormal | integral JM elements -> local relations -> multiplicity-free branching/GZ algebra -> recursive projectors -> exact left seminormal and real orthogonal formulas; Hecke formulas remain on SYMR-9 | closed |
| SYMR-6 modular simples | integral Specht form, submodule theorem, exact Gram-gcd nonvanishing, absolute-irreducibility scalar extension and p-regular/p-restricted sign dictionary | closed |
| SYMR-7 blocks | abacus/core independence plus q-Schur Gram determinant, Jantzen/Schaper formula, block separation and Schur-corner transfer prove Nakayama; Young--Brauer is optional only | closed |
| SYMR-8 modular branching | modular JM CRT primary idempotents -> Kleshchev first-level multiplicity -> Brundan q-Schur weight-space comparison -> normal formula; finite-group `Ind isomorphic to Coind` gives the conormal formula; Kleshchev II separately proves head/socle | closed |
| SYMR-9 Hecke cellular | RG-13 generic algebra -> Murphy cellular basis/form -> simple heads -> exact seminormal/Jantzen/q-Schaper formulas and q-Schur Schur functor | closed |
| SYMR-10 Fock convention bridge | QG-6 semi-infinite-wedge/action/crystal/global-basis proofs -> exact charge-zero residue, node-order and restricted/regular label reconciliation | closed |
| SYMR-11 Hecke--KLR | QG-7 generic KLR PBW/grading plus QG-8 cyclotomic quotient -> exact type-A specialization -> Brundan--Kleshchev intertwiners and mutually inverse block maps | closed |
| SYMR-12 Ariki | QG-8 cyclotomic KLR highest-weight/global-basis categorification -> local Hecke--KLR isomorphism -> graded Specht restriction and standard-Fock comparison -> graded decomposition polynomials | closed in the declared nondegenerate characteristic-zero level-one regime |
| SYMR-13 internal products | Maschke plus self-dual Specht characters -> three-character inner product -> power-sum diagonalization; row-gap stability is stated only under its exact hypothesis | closed |
| SYMR-14 FI modules | coinvariant exactness/detection -> CEF Noetherian theorem -> weight+stability range -> finite-generation equivalence and character polynomials; tensor closure is explicit | closed over the declared characteristic-zero/Noetherian-Q regimes |
| SYMR-15 Murnaghan | CEF constructs each padded irreducible FI family; tensor closure and uniform stability prove eventual Kronecker constancy; BOR's finite nonnegative expansion proves support/top-degree/exact whole-product threshold | closed |
| SYMR-16 Plancherel | RSK law -> shifted observables -> Ivanov--Kerov support-union multiplication and algebra isomorphism -> IO filtration/moments; local RSK union-bound tightness proves uniform limit shape; normalized Hermite leading terms plus the multivariate moment theorem prove Kerov's finite-dimensional CLT | closed |

The deliberate negative/frontier statements are not proof gaps: no general
positive Kronecker rule, no arbitrary-positive-characteristic decomposition
formula, and no Tracy--Widom/determinantal-process endpoint is claimed. The
degenerate category-O Ariki theorem remains KL-8-owned and is not used to
license the nondegenerate theorem.

**Atomic-pair integration audit (2026-09-07).** Every SYMR B page now requires
only its own A page. In particular, the integral-Specht, modular-branching, and
type-A-Hecke companions had stale external page requirements even though their
proposed items cite only their own A-page items; those requirements were
removed. Their mathematical suppliers remain on the corresponding A pages, so
this scheduling repair weakens no item-level proof route and preserves the
B-page dependency-leaf contract.

## Historical guarded reconciliation checkpoint — 2026-09-07 16:17 AEST

The canonical inventory now incorporates the safe conclusions of this audit:

- 247 proposed rows (185 A, 62 B), no duplicate IDs, no direct item cycle, no
  cross-page dependency on a B item, and maximum A-page size 18;
- every substantive A/B heading carries the exact `pages.json` title and ID;
- the SYMR-6/SYMR-9 cycle, KLR noncyclotomic/cyclotomic conflation, HA-18/19
  seam, five original alias errors, FI combined-definition gap and Plancherel
  probability/topology omissions are repaired;
- `pages.json` still has 30 paired records and empty item arrays, with direct
  suppliers added for SYMR-7--15 as needed.

The FI characteristic-zero chain is now locally explicit from `Phi_a` through
the exact CEFS Noetherian proof, free-module bounds, uniform stability and
character polynomials. The Plancherel page now exposes the complete endpoint
route and replaces Hammersley by a local RSK/union-bound tightness proof, but
remains blocked on the imported Ivanov--Kerov shifted-character multiplication
formula. RG-11 now owns the exact Schensted LIS/LDS supplier consumed there.

Unresolved central obligations remain Nakayama's Young/p-permutation/Brauer
chain, the full modular-branching proof, quantum/global-basis foundations,
nondegenerate root-of-unity Ariki geometry (or a genuinely equivalent proof),
and Ivanov--Kerov's multiplication theorem. The third textbook slot also needs
actual validation: Mathas's 73-page notes do not satisfy it; Webb is the
candidate full textbook. The first required local Terra assignment was
attempted after a reported slot release but failed with `agent thread limit
reached`; no unauthenticated external roster entry is counted as that launch.

## Cross-page cycles and page-level omissions already detected

1. **SYMR-6/SYMR-9 cycle.**
   `prop-group-and-hecke-specht-conventions-are-related-by-conjugate-duality`
   on SYMR-6 depends on
   `prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one` on
   SYMR-9, while `pages.json` makes SYMR-9 require SYMR-6. Replace the SYMR-6
   row by a group-only James/dual-Specht conjugate-sign statement proved at
   `q=1`; let the SYMR-9 specialization depend on that group statement. No
   SYMR-6 item may depend on SYMR-9, including its general-open-problem remark.
2. **SYMR-9 uses SYMR-4 without declaring it.** Its q-Schaper theorem depends
   on `def-removable-border-strip-and-height`. Add the A-page requirement
   `rim-hooks-and-the-murnaghan-nakayama-rule` or move the optional Jantzen
   cluster to a later page that declares it.
3. **SYMR-7 uses SYMR-4 and SYMR-9 without declaring either.** Core removal
   uses border strips and the weight-one proof uses q-Schaper. Add both direct
   page requirements if those rows remain.
4. **SYMR-7 consumes planned block-local theory without declaring its supplier.**
   `def-defect-group-and-numerical-defect-of-a-block` is owned by planned
   RG-14 `blocks-defect-groups-and-the-brauer-homomorphism`, and the
   O'Donovan route uses block/Green compatibility from planned RG-16
   `brauers-first-main-theorem`. Add the exact relevant page requirements; do
   not cite only the earlier published introductory Brauer page.
5. **SYMR-8 residue summands lack their algebraic supplier.** Generalized
   Jucys--Murphy primary idempotents are neither supplied by the current
   complex-only SYMR-5 definition nor by the page's declared requirements.
   Make the JM elements integral/base-changeable and add SYMR-5, or consume
   the exact block-idempotent construction from SYMR-11 after an acyclic
   reorder.
6. **SYMR-15 needs real probability, not only finite probability.** A limit
   shape in probability requires at least
   `modes-of-convergence-for-random-variables` plus the exact Chebyshev and
   moment/expectation items. `finite-probability-spaces-and-random-variables`
   alone cannot license the asymptotic statement.
7. **SYMR-13 consumes SYMR-3.** Both the reduced-coefficient expansion and the
   exact stabilization threshold use the outer LR theorem, so add
   `outer-products-skew-specht-modules-and-littlewood-richardson`.
8. **SYMR-14 consumes a SYMR-13 item without declaring the page.** Either split
   neutral `def-first-row-padded-partition` from the combined
   padding/reduced-Kronecker definition and assign it to a shared earlier
   owner, or add SYMR-13 as a direct page prerequisite.
9. **SYMR-15 consumes SYMR-2.** Its shifted-character observables depend on the
   Frobenius/character-value dictionary, so add
   `frobenius-characteristic-and-the-symmetric-group-character-dictionary`.

The 230-row canonical Markdown inventory has five dependency IDs that resolve
neither to a published item nor to an existing prose-plan proposal. Repair
them as follows:

| unresolved ID | exact repair |
|---|---|
| `def-quiver-and-path` | define the cyclic/infinite quiver locally from vertex/arrow/source/target data, or consume `def-category` plus the already published free-quiver example only as illustration; no standalone quiver definition exists |
| `def-polynomial-ring-in-finitely-many-indeterminates` | use `def-polynomial-ring-on-a-family-of-indeterminates` (and its finite-family corollary if needed) |
| `prop-hom-from-a-projective-is-exact` | use `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact` |
| `def-categories-functors-and-natural-transformations` | use the two actual IDs `def-category` and `def-functor-and-contravariant-functor`; natural transformations are not needed merely to define FI-modules |
| `def-convergence-in-distribution` | use `def-convergence-in-distribution-for-real-random-variables`, or add a genuinely multivariate-law version for the joint Gaussian theorem |

## SYMR-1 — symmetric functions

Status: close after two exactness repairs.

- Remove “it is zero unless `mu subseteq lambda`” from
  `def-skew-schur-function-by-hall-adjointness`; that is a theorem proved by
  the skew Jacobi--Trudi/tableau row.
- State the target of the infinite Cauchy identity as the product completed by
  total bidegree. Each fixed bidegree is finite. Do not transfer this
  completion language to the restriction coproduct.
- The stabilization, unitriangular, Newton, Cauchy and Jacobi--Trudi proof
  routes otherwise have their needed finite-variable/tableau suppliers and no
  major hidden theorem.

## SYMR-2 — Frobenius characteristic

Status: one missing identification joint.

- The proof that `ch(chi^lambda)=s_lambda` is not licensed by orthonormality and
  the existence of Specht simples alone; those data allow a permutation of the
  labels. Add inherited `thm-youngs-rule-for-permutation-modules` and the
  Kostka-unitriangular comparison, then compare
  `ch(M^mu)=h_mu=sum_lambda K_{lambda,mu}s_lambda` with Young's Rule and invert
  the finite unitriangular matrix. Alternatively depend on the exact
  determinantal Specht-character theorem, but that currently lives later on
  SYMR-4 and would reverse the desired edge.
- Distinguish the rational class-function map from its integral restriction to
  the representation ring. Surjectivity via the `h_lambda` basis plus
  isometry then proves the stated integral isomorphism.

## SYMR-3 — outer products and skew Specht modules

Status: Hopf repair plus a central skew-module source decision.

- `Delta[V]=sum_{a+b=n}Res V` is an ordinary finite graded tensor sum, not a
  completion.
- Add or inline the theorem that a connected graded bialgebra has its unique
  recursive antipode before calling the structure Hopf. The bialgebra
  compatibility itself must be proved by the Young-subgroup Mackey formula,
  not by associativity/coassociativity alone.
- Freeze RL-8 ownership of
  `def-littlewood-richardson-tableau-and-coefficient`; SYMR consumes it and the
  supplier page. Remove the two near-duplicate LR B rows already identified
  in `evidence-review.md`.
- The current arbitrary-field skew-Specht filtration row is a placeholder.
  Two valid closures are available. Preferred minimal closure: over `C`,
  define the skew multiplicity module
  `S^{lambda/mu}=Hom_{S_|mu|}(S^mu,Res S^lambda)` with the commuting
  `S_{|lambda|-|mu|}` action; Frobenius reciprocity, semisimplicity and the
  outer LR theorem give its exact Schur decomposition. If the classical skew
  polytabloid module and an integral Specht filtration remain in scope, obtain
  and read a complete James--Peel proof source and scaffold its straightening
  and filtration joints. Muth's KLR skew module is not that proof.

## SYMR-4 — Murnaghan--Nakayama

Status: main MN route is close; one separate algorithmic theorem is underproved.

- Remove the generic Mackey dependency from MN unless the authored proof uses
  it. The James route needs Frobenius/outer product, the hook full-cycle value,
  LR, and the explicit disconnected-rim cancellation involution.
- State the cancellation involution/binomial identity in the proof, not only
  “contributions cancel.” This is the decisive sign joint.
- The fixed-tabloid reconstruction theorem has only one inspected treatment.
  Its matrices `A` and `B`, order, diagonal scalars and Gram identity must be
  stated exactly; a vague “upper-triangular scaled multiplicity matrix” is not
  authorable. Add the exact factorization/dimension proof or isolate this as a
  separate algorithm cluster with a second check. It is not needed by MN.

## SYMR-5 — Jucys--Murphy/seminormal

Status: exact formula and base-ring repairs required.

- Define `X_k=sum_{j<k}(jk)` first in `Z[S_n]` and base change. Keep the GZ
  spectrum/seminormal conclusions over `C`. This supplies the modular residue
  use without pretending simultaneous diagonalization survives reduction.
- Add ordinary branching to the relative-centralizer generation proof, and
  add the lemma that partition shapes are determined by their content
  multisets before interpolating the full center.
- Give the actual seminormal two-by-two formula in one declared right/left
  eigenbasis convention. “Exact S2 coefficients” is not an exact claim.
- Replace “over `R`” in the orthogonal form with `mathbb R` and fix the signs
  and positive square root relative to the tableau order.
- The modular-collision B row must exhibit a same-stage collision among
  addable-node eigenvalues and the resulting zero Lagrange denominator.

## SYMR-6 — modular simple modules

Status: core proof is supportable, after cycle and wording repairs.

- Break the SYMR-9 cycle as described above. Use a group-only dual/conjugate
  Specht proposition, with a general modular-dual item rather than
  `def-dual-complex-representation`.
- James's submodule theorem gives absolute irreducibility only after its
  scalar-extension argument; make that last step explicit rather than treating
  absolute irreducibility as immediate from the submodule dichotomy.
- Define the Gram gcd exactly as the gcd of all integral polytabloid pairings.
  Lemma 10.4 bounds it between the row-multiplicity factorial products, and
  Corollary 10.5 gives `p | g_lambda` iff p-singular. This—not an unnamed
  “Gram determinant”—is the nonvanishing joint.
- Remove the dependency on SYMR-9's open-problem remark. The arbitrary
  defining-characteristic gap follows from James/Kleshchev evidence and may
  be stated locally without a forward item edge.

## SYMR-7 — cores, quotients and blocks

Status: abacus half closes; Nakayama and defect half has missing infrastructure.

Required local/inherited chain for the central Nakayama theorem:

1. `def-p-permutation-module-and-permutation-basis`;
2. `def-brauer-quotient-of-a-p-permutation-module`, including all relative
   trace subspaces and the `N_G(P)/P` action;
3. `thm-brauer-quotient-detects-vertices-of-p-permutation-modules`;
4. `thm-broue-correspondence-for-indecomposable-p-permutation-modules`;
5. `def-young-module-as-the-distinguished-summand-containing-the-specht-module`;
6. the Young-module triangular decomposition/Krull--Schmidt lemma;
7. the p-adic expansion of a partition and p-type/Young-vertex theorem;
8. the explicit Brauer quotient decomposition of a Young permutation module;
9. the tensor-product formula for the Green correspondent of a Young module;
10. exact block transfer through Brauer/Green correspondence, consuming the
    planned RG-14--RG-16 items;
11. O'Donovan's four induction steps, including projective p-restricted labels,
    duality and Mullineux.

O'Donovan proves items 5--9 and the induction, but states/cites Broue's vertex
and correspondence theorems and the decisive block-transfer lemma. Therefore
the currently read source set does not close items 3, 4 and 10 by itself. The
final scaffold must attach the exact RG supplier items where they coincide and
retrieve/read a proof-bearing Broue/p-permutation source for the remainder.
Calling Nakayama recorded and non-load-bearing is not acceptable under the hard
gate.

For weight/defect:

- add `blocks-defect-groups-and-the-brauer-homomorphism` as a page supplier;
- derive weight-zero defect-zero from the exact defect-zero criterion and the
  symmetric-group hook valuation, not from a vague “projective behavior”;
- the Sylow-`S_{pw}` defect theorem/abelian iff `w<p` currently has only the
  deliberately non-counted dissertation cross-check. Obtain eligible proof
  support or do not use it to prove another result;
- if the weight-one matrix stays, add SYMR-9 and state the convention-translated
  bidiagonal matrix exactly.

## SYMR-8 — modular branching

Status: claims are exact in p-restricted convention, but the claimed proof is
not dependency-closed.

- Replace complex-character Frobenius reciprocity in the induction proof by
  module induction/restriction adjunction and the symmetric/Frobenius tower
  duality over the modular field.
- Define residue summands using exact generalized JM primary idempotents over
  the splitting field; ordinary central block projections alone do not produce
  the individual `E_i,F_i` functors.
- Agent 5 read Brundan's theorem and final criterion, but only used the
  intervening quantum-GL/q-Schur sections as a roadmap. The proof invokes the
  quantum hyperalgebra integral form, q-Schur algebra, Weyl/costandard/simple
  modules, standard-basis and branching filtrations, lowering operators,
  universal highest-weight property, Schur functor, and radical-survival
  criteria. Either add that narrow chain as explicit supplier items and read
  every invoked section, or reorganize the branch so an already proof-complete
  KLR categorification proves the modular branching theorem without a cycle.
- If using p-regular James labels, state the conjugation/order/residue-negation
  translation. The safest local presentation keeps the theorem p-restricted
  and provides a separate exact dictionary.
- Keep normal-node composition multiplicity, good-node head/socle, and the
  uncoloured-socle corollary as separate theorems; none is a direct-sum formula
  for the whole restriction.

## SYMR-9 — Hecke cellular/Specht theory

Status: coherent core; exact formula and specialization gaps remain.

- Give Mathas Theorem 3.34's actual one-/two-dimensional `T_i` formulas.
- State the complete q-Schaper/Jantzen virtual sum, including indexing,
  valuations and signs; “the stated ... combination” is not a claim.
- State PID/prime-element/fraction/residue data exactly for the Jantzen
  filtration, or explicitly localize to a DVR.
- State exactly which Mathas cell module specializes to which
  Dipper--James/James module under conjugation and duality.
- Fix both nonexact B rows: choose the cell module/parameter/Gram matrix for the
  cellularity counterexample, and translate the `(3,2),e=2` q-Schaper example
  into the chosen label convention.

## SYMR-10 — level-one Fock and crystals

Status: missing exact quantum suppliers and a dependency cycle risk.

- `def-kac-moody-algebra-associated-to-a-gcm` plus a classical integrability
  theorem does not license a quantum affine algebra. The local definition must
  include the coefficient field, Cartan matrix (especially `e=2`), divided
  powers and all quantum Serre relations. Add the quantum highest-weight
  universal module/integrability theorem rather than cite a classical RL item.
- `thm-fock-space-formulas-define-a-quantum-affine-representation` needs the
  complete local two-node cancellation proof for every Cartan case; a section
  citation is insufficient.
- Do not use SYMR-8 reachability to prove the Fock crystal and then use Fock/
  Ariki to justify SYMR-8 branching labels. Acyclic option: place the pure
  residue-signature crystal definition and combinatorial reachability on
  SYMR-10, prove the Fock action/crystal there, prove categorification on
  SYMR-12, then let SYMR-8 consume those results for the modular interpretation.
  If the current order is retained, the Brundan quantum-GL proof chain must be
  complete independently.
- The global-basis theorem needs explicit balanced-triple data, bar lattice,
  integral lattice, intersection map and the uniqueness lemma. “Unitriangular
  correction recursively” does not prove existence unless the integrality and
  bar-triangularity lemmas are separately supplied.

## SYMR-11 — cyclotomic Hecke/KLR

Status: strongest currently closed deep page, with three corrections.

- State every KLR quadratic/braid case in the claim or attached definition,
  including the `e=2` double-arrow polynomial; no “corrected braid relations”
  shorthand.
- The polynomial basis theorem is for the noncyclotomic algebra. Its dependency
  should be a noncyclotomic KLR definition, not a cyclotomic quotient whose
  presentation forgets the free polynomial basis.
- `def-klr-induction-and-restriction-bimodules` must use the general
  tensor-with-bimodule/extension-restriction supplier, not the group-specific
  induction item. Exactness and projective preservation then require the
  principal-idempotent/freeness proof. The nil-Hecke divided-power idempotent is
  a separate construction, not a consequence of an unspecified split summand.
- The Brundan--Kleshchev isomorphism route is otherwise proof-bearing in the
  fully read S1: eigen-idempotents, local nilpotent coordinates, intertwiners,
  rank-two checks, inverse generators and finite evaluation of power series.

## SYMR-12 — categorification and decomposition numbers

Status: formal KLR categorification can close; Ariki remains a hard central
proof blocker in the current evidence.

- Consume the proposed homological-algebra K0 seams below instead of
  `def-grothendieck-ring-of-a-tensor-category`, which is the wrong object:
  module `G_0`, split projective `K_0`, graded shifts, exact-functor maps,
  Cartan map/pairing and projective-cover basis.
- The noncyclotomic KLR projective categorification is proof-bearing from
  Khovanov--Lauda: polynomial basis, divided-power projectives, bilinear form,
  rank/injectivity, induction and twisted restriction. State the integral form
  and completion restrictions exactly.
- The cyclotomic categorification theorem must expose the quotient's
  highest-weight relation, vacuum projective, dual maps, Shapovalov/Cartan
  pairing and rank/character comparison. Do not infer it merely from the
  noncyclotomic theorem.
- Brundan--Kleshchev's graded decomposition theorem ultimately invokes Ariki's
  geometric Theorem 5.1. Its paper explicitly says so. The original Ariki
  article has now been recovered as a complete 20-page PDF (DOI
  `10.1215/KJM/1250518452`) and §§3--4/Theorem 4.4 were read. It supplies the
  induction transplant and final argument but explicitly imports the
  Kazhdan--Lusztig/Steinberg/IC/quiver-sheaf/global-basis joints. Thus the
  current `thm-ariki... (recorded)` and every dependent decomposition row fail
  the hard gate. Closure requires a retrieved/read proof source and the exact
  geometric or alternative supplier chain. At minimum this chain must explain:
  the integrable categorification map; bar/duality; standard/Specht triangular
  basis; self-dual indecomposable projectives; and the canonical-basis
  characterization that identifies them. If the chosen proof uses affine
  Hecke geometry, add its convolution/IC/canonical-basis supplier page(s); if
  it uses higher-level Schur--Weyl/Kazhdan--Lusztig theory, declare those exact
  suppliers and its parameter range. An original citation alone is not closure.
- Positive-characteristic adjustment factorization is formal after a valid
  lattice/base-change item and the characteristic-zero theorem. Supply an
  actual nontrivial adjustment example or replace the held counterexample by a
  precise boundary example that does not claim one.

### Exact hard-gate supplement for SYMR-10/SYMR-12

The current nine SYMR-10 rows compress several independent theorems into
definitions. At minimum split the quantum/global-basis prerequisite into the
following A-page items before the Fock action:

| proposed exact item id | dependencies and proof obligation |
|---|---|
| `def-quantized-enveloping-algebra-for-the-cyclic-type-a-cartan-datum` | Define the weight/coweight pairing, `U_v`, divided powers, quantum Serre relations, triangular parts and the `e=2` Cartan entry. It consumes only the classical GCM/root datum and q-integers. |
| `def-lusztig-integral-form-bar-and-contravariant-anti-involutions` | Define the `A=Z[v,v^-1]` divided-power form, bar, and the anti-involution used by the Shapovalov/Cartan pairing; prove each preserves the relations. |
| `thm-integrable-quantum-highest-weight-module-exists-and-is-unique` | Construct the quotient of the quantum Verma module by the divided-power integrability relations; prove integrability, unique simple quotient and the universal property. A classical Kac--Moody highest-weight theorem is not this supplier. |
| `def-kashiwara-i-string-decomposition-and-crystal-operators` | On an integrable module, state and prove the unique divided-power `i`-string expansion and define `tilde e_i,tilde f_i`. |
| `def-crystal-lattice-crystal-basis-and-highest-weight-crystal` | Give the local ring at `v=0`, lattice, mod-`v` basis, weight and string axioms; define `B(Lambda)` and tensor convention used later. |
| `thm-highest-weight-crystal-exists-and-is-unique` | Prove the crystal lattice for `V(Lambda)` and the connected-highest-weight uniqueness theorem used to identify the partition component. Do not fold this into a Fock definition. |
| `def-balanced-triple-and-globalization-map` | Define the bar lattice, `v=0` lattice, integral form, balancedness and the reduction isomorphism whose inverse globalizes crystal elements. |
| `thm-balanced-triple-produces-unique-lower-and-upper-global-bases` | Prove existence, bar invariance, congruence mod `v`, duality and uniqueness. This is the missing logical joint behind “unitriangular correction.” |
| `thm-canonical-and-global-bases-agree-in-the-selected-normalization` | Match Lusztig and Kashiwara conventions using the contravariant form and the same integral/bar data; record whether the page uses lower, upper, canonical or dual-canonical basis. |

Then the existing Fock rows consume these exact suppliers: the node formulas
prove the `U_v` relations; the empty vector plus the quantum highest-weight
universal property identifies its generated submodule; residue-signature arrows
plus highest-weight-crystal uniqueness identify the empty component; and the
balanced-triple theorem produces the basis. This makes SYMR-10 independent of
SYMR-8 and removes the potential branching/crystal cycle.

The **degenerate higher-level Schur--Weyl/category-O route** of
Brundan--Kleshchev, arXiv:0901.0057, is a useful parameter-specific alternative
to hiding affine-Hecke geometry inside one row. That complete 44-page source is
retrievable, but its load-bearing imported theorems still require their own
source audit. More importantly, it proves the degenerate cyclotomic theorem;
at level one its characteristic-zero symmetric-group specialization is
semisimple, so it does **not** replace the nondegenerate root-of-unity Ariki
theorem or close the intended decomposition-number result. If this narrower
route is retained for its own regime, add a new A page, provisionally
`parabolic-category-o-and-degenerate-schur-weyl-categorification`, between
SYMR-10/11 and SYMR-12, with these exact items:

| proposed exact item id | exact role and route |
|---|---|
| `def-integral-parabolic-category-o-block-and-its-standard-costandard-simple-projective-objects` | Fix finite type-A `gl_N`, the standard parabolic/Levi determined by the charge, integral block, and its standard/costandard/simple/projective labels. This requires exact BGG-category and highest-weight-category suppliers; no such published library page currently exists. |
| `thm-parabolic-kazhdan-lusztig-multiplicity-formula` | State the standard-to-simple and projective-to-standard multiplicities with the precise parabolic KL-polynomial orientation. Its proof route is the finite-type-A Kazhdan--Lusztig theorem (localization/IC or an independently scaffolded equivalent), not the braid page's mere Hecke decategorification. |
| `thm-parabolic-category-o-grothendieck-group-is-the-fock-module-with-four-bases` | Map standards, simples, projectives and tiltings to standard monomial, dual-canonical, quasi-canonical and canonical bases in the source's exact convention; use BGG reciprocity and the preceding multiplicity formula. |
| `def-arakawa-suzuki-casimir-action-and-degenerate-affine-hecke-functor` | Construct the commuting `x_r` and simple-transposition actions on tensor functors and verify every degenerate affine-Hecke relation. |
| `thm-higher-level-schur-weyl-double-centralizer` | For the projective generator `T^Lambda_alpha`, identify `End_g(T)^op` with the degenerate cyclotomic Hecke block and prove the double-centralizer statement. This is the central BK3 supplier imported by BK5 §3.5. |
| `thm-schur-functor-images-of-standard-simple-and-projective-objects` | Prove standards map to the exact cyclotomic Specht convention; simples map to the labelled Hecke simple or zero; projectives map to its projective cover. Include the kernel/label criterion and full-faithfulness on projectives. |
| `thm-category-o-translation-functors-intertwine-klr-induction-and-restriction` | Identify the exact Chevalley/translation functors with residue induction/restriction through Schur--Weyl duality, including adjunction and graded/ungraded specialization. |
| `thm-degenerate-ariki-categorification-from-schur-weyl-and-parabolic-kl` | The induced projective `K_0` isomorphism sends indecomposable projectives to canonical-basis elements and Specht classes to standard monomials; derive it by the commuting Grothendieck square and the four preceding basis/image results. This is BK5 Theorem 3.10's proof route in its exact degenerate parameter regime; do not present its semisimple level-one `C S_n` case as the nondegenerate root-of-unity theorem. |

The new page must not call
`thm-parabolic-kazhdan-lusztig-multiplicity-formula` proved until the library
adds exact category-O/localization/IC suppliers or a complete alternative
proof. A BGG-category-O page has been drafted by the active frontier-33 run but
is not published and, in any case, does not itself supply the parabolic
Kazhdan--Lusztig character formula. BK5 says its categorification theorem starts
from that known theorem and BK3 Schur--Weyl duality. Thus this list identifies
an exact chain for a narrower theorem; it neither declares that chain closed
nor discharges the separate nondegenerate Ariki obligation.

Once that page is genuinely supplied, SYMR-12 may add the separate
`thm-degenerate-ariki-categorification-for-level-one-symmetric-groups`,
depending on the last theorem above, the level-one degenerate Hecke/KLR
identification and HA-19's projective/simple pairing, but this is not a
replacement for the general/nondegenerate row. In the applicable regime the
graded decomposition theorem then adds
only: homogeneous Specht bases and degrees; graded self-dual normalization;
bar-invariant adjustment terms; positivity plus specialization at `v=1` to
kill the characteristic-zero adjustment terms. Brundan--Kleshchev Theorem
5.14 gives that final graded lifting argument, but its Theorem 5.1 is exactly
the ungraded Ariki input and may not be omitted.

## SYMR-13 — Kronecker and Murnaghan stability

Status: source evidence is strong; final inventory must preserve exact ranges.

- Define the internal product through same-rank tensor characters and state
  `p_rho*p_sigma=delta_{rho,sigma}z_rho p_rho` separately from outer
  multiplication.
- Remove `cex-outer-induction-is-not-the-kronecker-product` from the A-page
  definition's dependencies: that item is on a B page, so the current row
  violates the rule that B pages are dependency leaves. The distinction belongs
  in prose or through the A-page outer-product definition.
- Define `alpha[n]` only for `n>=|alpha|+alpha_1`.
- Scaffold Briand--Orellana--Rosas Lemma 2.1's nonnegative LR/Kronecker
  expansion, the maximum characterization of stabilization, upper bound via LR
  and the attaining `alpha+beta` constituent before the exact threshold
  `|alpha|+|beta|+alpha_1+beta_1`.
- Keep Pak--Panova's conditional row-gap stability and reduction lemma separate
  from global first-row Murnaghan stability. Their hypotheses and conclusions
  are not substitutes.
- The absence of a general positive combinatorial Kronecker rule is a frontier
  boundary, not evidence for any positive formula.

## SYMR-14 — FI-modules

Status: central noetherian/stability theorem needs its entire local chain.

Required items from the fully read CEFS source:

1. finite sets/injections category, FI-module and finite generation;
2. free FI-modules `M(W)` and the adjunction/universal property;
3. generation degree and the degreewise spanning criterion;
4. coinvariant functors `Phi_a`, transition map `T`, injectivity/surjectivity
   and stability degree;
5. characteristic-zero weight and its subquotient/tensor bounds;
6. finite generation of the `k[T]`-modules `Phi_a(V)`;
7. the characteristic-zero Noetherian proof for sub-FI-modules, including the
   induction on generation degree and kernel quotient—not simply Hilbert basis
   by name;
8. free-module representation decomposition via ordinary branching/Pieri;
9. stability degree plus weight implies uniform representation stability;
10. finite generation iff uniform representation stability for finite-
    dimensional characteristic-zero sequences;
11. character polynomials for padded irreducibles and their uniqueness;
12. the exact `n>=stabdeg(V)+weight(V)` character-polynomial range.

This fits on one A page below the 60-item cap. Do not mark Noetherianity
recorded: CEFS contains its proof. If extending from rings containing `Q` to all
Noetherian rings, retrieve/read CEFN and state that stronger theorem separately.

The current canonical rows need additional exact repairs. The combined
`def-finite-generation-weight-and-stability-degree-of-an-fi-module` is not a
valid definition because `Phi_a`, its transition operator and the separate
injectivity/surjectivity degrees have not been defined. Split it according to
CEFS Definitions 2.3.3--2.3.7 and 3.1.1--3.1.5. Likewise,
`lem-free-fi-modules-have-explicit-weight-and-stability-bounds` must state the
numbers: `inj-deg M(W)=0`, `surj-deg M(W)<=m` when `W` is supported through
degree `m`; for irreducible `W=V_lambda`, weight is `|lambda|` and stability
degree is `lambda_1`.

The current Noetherian proof route mentions ordering injection monomials, which
is not the proof in the retrieved CEFS paper. The actual characteristic-zero/
`Q subset k` proof is: exactness of `Phi_a`; finite generation of the graded
`k[T]`-module `Phi_a(V)`; Hilbert basis for its submodule `Phi_a(W)`; lift a
finite homogeneous generating set to a finite sub-FI-module `W_tilde`; then use
the weight bound plus nonvanishing of suitable symmetric-group coinvariants to
show `Phi_a(W/W_tilde)=0` forces `W/W_tilde=0`. Scaffold those joints rather
than importing a later Gröbner proof by accident.

## SYMR-15 — Plancherel and asymptotic diagrams

Status: finite normalization is elementary; the central limit-shape theorem
needs the full shifted-symmetric/moment chain.

Required items for the Ivanov--Olshanski proof route:

1. Plancherel measure and normalization by the regular representation;
2. Russian 1-Lipschitz profile, `sqrt(n)` scaling and the explicit curve
   `Omega`, with the outside-`[-2,2]` branch stated;
3. shifted-symmetric algebra/polynomial observables on diagrams;
4. normalized character observables `p_rho^#` and the exact regular-character
   expectation formula;
5. the weight filtration and top-degree multiplicativity/product estimate;
6. identification of the limiting transition-measure moments with `Omega`;
7. expectation and variance bounds for every fixed polynomial test observable;
8. Chebyshev conversion to convergence in probability;
9. tight-support/tail estimate for scaled diagrams;
10. the lemma upgrading polynomial/weak profile convergence to uniform
    convergence for the 1-Lipschitz profile family;
11. the Logan--Shepp/Vershik--Kerov uniform-profile limit-shape theorem.

The source report says §§1--9 were actually read and sketches each joint, so
these can be scaffolded rather than recorded. Add the page requirement
`modes-of-convergence-for-random-variables` and exact analysis items used by
9--10. The Gaussian/profile CLT is optional beyond the page title; if retained,
it additionally needs Hermite leading terms, joint method of moments, moment
determinacy and the transform inversion of source Propositions 7.3--7.4.

The current canonical definitions are not exact enough: write
`Omega(x)=|x|` for `|x|>=2`; write
`bar(lambda)(x)=n^{-1/2}lambda(n^{1/2}x)` in the source's Russian-profile
notation; and state
`p_rho^#(lambda)=n^{\downarrow r} chi^lambda_{rho union 1^{n-r}}/f^lambda`
for `r=|rho|<=n` (zero otherwise). Then Proposition 5.1 is the exact formula
`E_n[p_rho^#]=n^{\downarrow r}` for `rho=(1^r)` and zero otherwise.

Ivanov--Olshanski Lemma 5.6 is not actually proved there; it cites
Hammersley. This hidden gap can be closed locally without a new asymptotic
source: via RSK, `lambda_1` and `lambda'_1` are longest increasing/decreasing
subsequence lengths of a uniform permutation, and the union bound gives
`P(LIS>=L)<=binom(n,L)/L!`. With `L=C sqrt(n)` and any fixed `C>e`, Stirling's
elementary bounds make this tend to zero; the same holds for decreasing
subsequences. Add
`lem-plancherel-first-row-and-column-have-root-n-tight-tails` with dependencies
on RSK and the Plancherel-shape law. This supplies the fixed compact support in
probability needed by Lemma 5.7, whose Lipschitz/continuous-test proof is fully
present in the retrieved paper.

If the Kerov character CLT row remains, it too must pass the hard gate rather
than stay recorded: add the normalized `eta_k`, weight-filtration/Hermite
leading-term lemma, joint moment calculation, Gaussian moment determinacy and
the resulting finite-dimensional convergence theorem. The profile-fluctuation
CLT additionally needs the explicit transform inversion; it is not implied by
the character CLT alone.

## Homological-algebra seam required by SYMR

The useful additions are exact-category decategorification tools, not a broad
derived detour:

- `def-grothendieck-group-of-an-abelian-category` (`G_0`, short-exact
  relations);
- `def-split-grothendieck-group-of-an-idempotent-complete-additive-category`
  and the projective specialization (`K_0`);
- exact/additive functors induce maps and naturally isomorphic functors induce
  the same map;
- graded shift gives a `Z[v,v^{-1}]` module;
- Cartan map from projective `K_0` to module `G_0` and graded Hom Cartan
  pairing, with additivity/nondegeneracy hypotheses explicit;
- projective covers give the projective `K_0` basis for a finite-dimensional
  split algebra;
- tensor-with-bimodule, restriction and extension of scalars: exactness,
  projective preservation, adjunction and biadjunction under precise
  flat/free/Frobenius-extension hypotheses.

Perfect/derived categories, change-of-rings spectral sequences and Tate/
self-injective resolutions are not used by the present SYMR central proofs and
must not become decorative dependencies. A symmetric-Frobenius algebra result
is useful only for modular/Hecke tower biadjunction and should be consumed where
that exact algebra/freeness hypothesis is proved.

The supervising HA track has reserved the exact page IDs
`graded-bimodules-and-tensor-functors` and
`grothendieck-groups-and-graded-cartan-pairings`. The second may honestly
consume `modular-representations-and-projective-covers` for the already
published general finite-dimensional-algebra projective-cover and
Krull--Schmidt items despite the page title. Exact existing names are
`thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`
and `thm-krull-schmidt-for-finite-dimensional-kg-modules`. For Hom exactness
use `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact`; the
canonical SYMR inventory's `prop-hom-from-a-projective-is-exact` does not
exist. Do not rehome or duplicate these stable IDs.

### Independent review of the frozen HA-18/HA-19 suppliers

The enrichment is mathematically useful, but the following corrections are
needed before SYMR may treat it as closed infrastructure.

**HA-18 (`graded-bimodules-and-tensor-functors`).**

- Row 18.1 correctly translates the published convention: since the existing
  definition has `M(a)_n=M_{n+a}`, its new `M{r}_d=M_{d-r}` is exactly
  `M(-r)`, not `M(r)`. The apparently broad page prerequisite
  `rees-modules-artin-rees-and-hilbert-samuel-theory` is nevertheless the
  actual page supplier of the stable item
  `def-graded-ring-and-graded-module`; the prose must name that exact item so
  no Artin--Rees mathematics is mistaken for a prerequisite.
- Row 18.3 must call `\bigoplus_d Hom_d(P,M)` the **finite-support homogeneous
  Hom**. It is not the set of all underlying module maps for arbitrary
  unbounded graded modules; those can have infinitely many nonzero homogeneous
  components. The degree-zero enriched tensor--Hom adjunction remains valid,
  but the scope has to be stated.
- Rows 18.5--18.6 are presently circular in wording. Define a *finitely
  generated graded projective* to mean a projective object of the degree-zero
  graded-module category which is generated by finitely many homogeneous
  elements. Then prove it is equivalent to being a graded direct summand of a
  finite direct sum of shifts of `A`. Do not put the latter characterization
  into the definition and then announce it as the theorem.
- Row 18.6 does not need an unsafe unqualified claim that forgetting the
  grading detects projectivity. Its internal proof is: a finite homogeneous
  generating set gives a degree-zero epimorphism from finite shifted free;
  graded projectivity splits it; shifted graded-free modules have the
  degree-zero lifting property; direct summands inherit it. If an ungraded
  comparison is retained, prove separately that the degree-zero component of
  a lift exists under the stated finite-support hypotheses.
- Rows 18.7 and 18.9 have the correct sidedness and must preserve it in the
  authored statements: for a `B`--`A` bimodule `M`, right-`A` flatness gives
  exactness of `M tensor_A -`, while finite projectivity of `M` as a **left
  `B`-module** makes images of finite projectives finite projective; restriction
  along `A -> B` preserves finite projectives when `B` is finite projective as
  a **left `A`-module**. These are independent hypotheses.
- Khovanov--Seidel §§2a--2c only instantiate these constructions for their
  particular algebras/bimodules; it is not a general proof source for all of
  18.2--18.9. That is acceptable only because the rows give elementary local
  proofs from the existing tensor/projective suppliers. The final source
  ledger should say explicitly which claims are local adaptations rather than
  suggesting KS proves the generic package.

**HA-19 (`grothendieck-groups-and-graded-cartan-pairings`).**

- State once that rows 19.5--19.12 are over a fixed field `k`, and distinguish
  finite-dimensional graded modules from finitely generated graded
  projectives. This matters because noncyclotomic KLR projectives can be
  infinite-dimensional even when the finite-module side is finite length.
- Row 19.7 is true, but its present proof route skips the decisive step. Use
  the exact graded version of the already-published proof: take a
  minimal-dimensional **graded projective direct summand** `P` of a finite
  shifted-free module that still surjects degree zero onto `M`; for every
  graded submodule `N` with `N+ker(pi)=P`, projectivity gives a degree-zero
  endomorphism `f` with image in `N` and `pi f=pi`; stabilized graded kernels
  and images of `f^n` split `P`; minimality kills the kernel, so `N=P`.
  This proves the cover. Apply the same degree-zero Fitting/local-endomorphism
  argument to finite-length graded objects for graded Krull--Schmidt. Merely
  saying “Fitting gives a local endomorphism ring and a cover” is not proof
  closure.
- Row 19.7 should inherit the exact stable definition
  `def-essential-epimorphism-and-projective-cover`, as well as the published
  ungraded comparison theorem. Row 19.8 then needs an explicit argument that
  every graded simple/projective is a shift of exactly one chosen orbit
  representative; the extremal supported-degree observation only proves that
  a nonzero finite-dimensional graded object is not isomorphic to a nontrivial
  shift of itself.
- Row 19.11 needs the head factorization in its dependency/proof route. The
  stable generic theorem
  `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules`
  has a group-specific ID but an explicitly general finite-dimensional-algebra
  statement, and may be reused just as the cover and Krull--Schmidt items are.
  With `End_A(S_i)=k`, it gives the diagonal `1`; without absolute splitting,
  the diagonal is `dim_k End_A(S_i)`. The row is right not to infer a
  unimodular projective--projective Cartan matrix.
- The retrieved Weibel K-book chapter genuinely supports group completion,
  abelian-category `G_0`, exact-functor functoriality and the Cartan map
  (Chapter II §§1, 6). Its §6.12 is only an exercise for nonnegatively graded
  Noetherian rings, and KS §2e.1 proves the projective Laurent basis only for
  the special algebra `A_m`. Neither is by itself a source for the general
  graded-cover theorem or shift-orbit basis. Those claims must therefore retain
  their full local graded adaptations above and must not be labelled as
  directly source-proved.
- HA-21 is not a SYMR prerequisite. Its rows 21.4--21.6 have the right bounded
  hypotheses: a bounded acyclic complex of projectives splits successively
  from an endpoint, and the separate `K_0(perf A)=K_0(proj A)` and
  `K_0(D^b(C))=G_0(C)` comparisons need no finite-global-dimension assumption.
  Row 21.7 should say “bounded finite-projective resolutions” rather than the
  ambiguous “finite-dimensional-resolution bounds”; left Noetherianity is
  what keeps syzygies finitely generated.

**Exact SYMR consumers after these corrections.**

- SYMR-11 `prop-quiver-hecke-relations-are-homogeneous` consumes HA-18.1 for
  the associative Z-grading convention (not the narrower published
  commutative/nonnegative definition).
- SYMR-11 `def-klr-induction-and-restriction-bimodules` consumes HA-18.1,
  18.3--18.4 and the scalar-change formulation 18.9 to define the homogeneous
  idempotent bimodules and tensor functors.
- SYMR-11 `thm-klr-induction-and-restriction-preserve-graded-projectives`
  consumes HA-18.7 and 18.9. The KLR page must still prove the tower-specific
  bimodules are flat/projective on the required sides and must construct the
  nil-Hecke divided-power idempotents; HA-18 does not supply those facts.
- SYMR-12 `def-graded-module-and-projective-grothendieck-groups-for-klr-towers`
  should consume HA-19.1--19.3 and 19.6, rather than reminting the two
  Grothendieck-group definitions or depending on the tensor-category
  Grothendieck ring.
- SYMR-12 `def-graded-cartan-pairing-between-projectives-and-modules` should
  become a KLR specialization of HA-19.9--19.10; its current dependency
  `prop-hom-from-a-projective-is-exact` is nonexistent and is replaced by the
  HA theorem backed by
  `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact`.
- SYMR-12 `thm-cyclotomic-klr-categorification-has-distinct-projective-and-module-sides`
  consumes HA-19.12 for adjoint operators, but must prove the KLR functors meet
  the finite/exact/projective-preserving and degree-compatible hypotheses.
- SYMR-12 `prop-self-dual-indecomposable-projectives-and-simples-give-dual-bases`
  consumes HA-19.7--19.11. SYMR still owns self-duality and the unique grading
  shifts that normalize its KLR simples/projectives; HA-19 supplies only the
  general projective-cover/Hom-pairing mechanism.

No central SYMR result consumes HA-20 or HA-21. Adding either to a SYMR page
would be decorative and would unnecessarily import the braid-only derived
branch.

## Research-contract blockers

- The James and Macdonald books are complete full texts.
- The Mathas source is a complete 73-printed-page prepublication manuscript
  that calls itself notes; the xiii+188-page AMS book body was not retrieved.
  It may support mathematics, but it does not satisfy the mandated third
  complete-textbook assignment absent owner exception or replacement.
- All claimed SYMR agents/research launches were written by an external stream
  not visible in this collaboration tree. Their files can be mathematically
  reviewed, but the roster cannot be tool-authenticated here.
- The original Ariki proof source failed retrieval. This is a mathematical
  proof blocker as well as an evidence gap under the new hard gate.
- A complete classical James--Peel skew-Specht proof source was not retrieved.
  Resolve by the precise characteristic-zero Hom multiplicity-module route or
  retrieve the source.
