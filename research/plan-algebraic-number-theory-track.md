# Algebraic number theory and arithmetic frontier — prose scaffold

**Planning snapshot:** 2026-10-23. **Canonical category slug:**
`algebraic-number-theory`. **Status:** prose planning only; no new library
page or mathematical item carrier is authored here. The category's published
pages, pathway and category overview will be built only after the planned
A/B pages exist. The canonical plan splice is owned by `/root`; this track
supplies only the research-side pair fragment and proposed item inventory.

## Executive handoff

This track extends the existing number-theory supplier spine through local and
global fields, class field theory, arithmetic geometry, Iwasawa theory,
Galois representations and selected modern frontiers. It creates a distinct
`algebraic-number-theory` category. The existing `number-theory` pages remain
published prerequisites in their current homes; this plan neither rehomes nor
re-mints their material. The analytic-number-theory track is a separate new
category, with explicit cross-category edges for Hecke (L)-functions,
prime-ideal densities, height counts and Chebotarev estimates where actually
used.

Pair labels in this file are relative identifiers, not canonical plan orders.
The root topologically orders both new categories after the current plan. All
new A/B plan rows have empty canonical `items: []`; the finite proposed
inventories in `research/number-theory-scaffolds-2026-10-23/algebraic/` are
planning projections for checking the intended item DAG, not authored
carriers, proof evidence, or readiness certificates.

The research set is intentionally broader than the currently published
number-theory band. Existing algebraic, analytic, commutative-algebra, group
cohomology and algebraic-geometry results are reused only through the exact
published contracts listed below. Planned suppliers are identified as
planned and are not treated as present until their own source and proof duties
are discharged.

## Category overview and proposed pathway

The proposed category begins with global fields and their places, then builds
local fields, ramification, local reciprocity, adeles and ideles, global
reciprocity, Brauer groups and arithmetic duality. A second arc develops
heights, Jacobians, Mordell–Weil and Selmer theory, Arakelov heights, and
Diophantine finiteness. Further arcs develop (p)-adic (L)-functions and
Iwasawa theory, Galois representations and (p)-adic Hodge theory, modularity
and Langlands correspondences, complex multiplication and ring class fields,
function-field arithmetic, exact algorithms, arithmetic statistics and
explicitly classified open frontiers.

The current pair fragment has a 15-layer prerequisite order. The layers below
list the A-page slugs; each has its reciprocal examples companion. They are
generated from the algebraic page `requires` DAG; published suppliers are
leaves. Cross-track analytic pages interleave at their exact `requires` edges:
the ray-class Hecke density page follows algebraic global CFT and precedes the
algebraic Chebotarev application; natural/effective prime-count estimates
follow the Frobenius/Chebotarev interface. The root assigns canonical numeric
orders after merging both tracks.

1. **Independent foundations and exact methods:**
   `algebraic-jacobians-and-canonical-polarizations`,
   `arithmetic-chow-groups-and-intersection-pairings`,
   `constructible-etale-sheaves-and-lisse-sheaves`,
   `global-fields-and-function-fields`,
   `reduced-binary-forms-and-exact-class-number-computation`,
   `relative-algebraic-k-theory-and-perfect-complexes`.
2. **Field, curve and height interfaces:**
   `anabelian-reconstruction-and-section-conjecture`,
   `compactly-supported-etale-cohomology-and-trace-formula`,
   `function-field-arithmetic-dynamics-and-isotriviality`,
   `global-function-field-lang-neron-and-trace`,
   `local-fields-valuations-and-completions`,
   `weil-heights-and-northcott-finiteness`.
3. **Height, arithmetic and local successors:**
   `arithmetic-dynamics-heights-and-preperiodic-points`,
   `canonical-heights-and-mordell-weil`,
   `exact-number-field-arithmetic-algorithms`,
   `global-function-field-mordell-and-isotriviality`,
   `linear-forms-in-logarithms-and-effective-diophantine-bounds`,
   `local-extensions-ramification-and-different`,
   `perfectoid-fields-spaces-and-tilting`,
   `polarized-dynamical-heights-in-higher-dimension`.
4. **Adeles, quadratic orders and Galois cohomology:**
   `adeles-ideles-and-approximation`,
   `bounded-discriminant-number-field-enumeration`,
   `local-galois-groups-and-continuous-cohomology`,
   `quadratic-orders-gauss-composition-and-ideal-classes`.
5. **Arithmetic duality, Manin and representations:**
   `brauer-groups-and-hasse-invariants`,
   `galois-representations-and-frobenius`,
   `manin-peyre-heights-and-tamagawa-constants`,
   `swan-conductors-and-grothendieck-ogg-shafarevich`.
6. **Class formations and cohomological sheaves:**
   `class-formations-and-tate-cohomology`,
   `deligne-weights-and-finite-field-trace-bounds`,
   `drinfeld-modules-and-function-field-arithmetic`,
   `flat-cohomology-and-finite-flat-duality`,
   `local-weil-deligne-representations-and-langlands`,
   `p-adic-hodge-representations-and-comparison-theorems`.
7. **Local reciprocity and global duality:**
   `categorical-local-langlands-frontier`,
   `fppf-kummer-sequences-and-torsors`,
   `local-class-field-theory-and-lubin-tate`,
   `modular-forms-and-galois-representations`,
   `poitou-tate-duality-and-local-global-obstructions`,
   `prismatic-galois-lattices-and-crystalline-representations`.
8. **Global reciprocity and arithmetic applications:**
   `galois-deformation-rings-and-selmer-conditions`,
   `global-class-field-theory-and-artin-reciprocity`,
   `global-function-field-class-field-theory`,
   `hilbert-symbols-and-norm-residue-reciprocity`,
   `selmer-groups-and-tate-shafarevich`.
9. **Chebotarev, CM and Euler systems:**
   `chebotarev-density-and-frobenius-equidistribution`,
   `cm-types-reflex-fields-and-abelian-variety-reciprocity`,
   `cohen-lenstra-statistics-and-quadratic-class-groups`,
   `drinfeld-shtukas-and-global-langlands-function-fields`,
   `elliptic-cm-and-singular-moduli-ring-class-fields`,
   `explicit-global-and-higher-reciprocity`,
   `heegner-euler-systems-and-kolyvagin-selmer-bounds`,
   `higher-local-fields-and-class-field-frontiers`,
   `hilbert-blumenthal-moduli-and-deligne-ribet-expansions`,
   `modularity-lifting-and-elliptic-curve-modularity`,
   `non-noetherian-iwasawa-theory-and-function-field-class-groups`,
   `rational-points-and-local-global-obstructions`.
10. **Arithmetic finiteness and Iwasawa suppliers:**
    `borel-regulators-higher-k-groups-and-zeta-values`,
    `faltings-heights-and-isogeny-finiteness`,
    `kubota-leopoldt-p-adic-l-functions-and-iwasawa-invariants`,
    `number-field-langlands-and-fontaine-mazur-frontiers`,
    `strong-brumer-stark-and-ray-class-fitting-ideals`.
11. **Main conjectures and abelian-variety finiteness:**
    `beilinson-bloch-kato-tamagawa-conjectures`,
    `classical-iwasawa-main-conjecture-over-totally-real-fields`,
    `shafarevich-finiteness-for-abelian-varieties`.
12. **Equivariant conjectures and curve finiteness:**
    `equivariant-iwasawa-main-conjectures-and-arithmetic-k-theory`,
    `shafarevich-finiteness-for-curves`.
13. **Rational-point finiteness:**
    `mordell-faltings-rational-points-on-curves`.
14. **Integral-point finiteness:**
    `siegel-integral-points-and-effective-bounds`.
15. **Terminal arithmetic-geometry status records:**
    `arithmetic-geometry-open-problems-and-frontiers`.

This is a research plan, not an active `library/algebraic-number-theory`
pathway. The layer listing is the current page-level DAG projection; root's
combined validation may adjust redundant edges or layers. No pathway carrier is
written while its planned pages are absent.

## Boundary and reuse rules

- Existing algebraic number-theory theory in
  `research/plan-number-theory-track.md` NT-17–NT-24 and their published pages
  is prerequisite context. The old track's recorded deferral of class field
  theory and higher Diophantine geometry is the historical scope of that
  earlier scaffold, not a reason to omit the newly commissioned expansion.
- General Galois theory and finite-field algebra remain owned by
  `abstract-algebra`; integral extensions, Dedekind domains, valuation rings,
  localization, completions and general commutative algebra remain owned by
  `commutative-algebra`.
- Scheme, curve, abelian-variety, étale-fundamental-group, divisor and
  deformation foundations remain in their existing `algebraic-geometry` and
  `scheme-theory` homes. Existing complex-analytic Jacobian items are not an
  algebraic Jacobian supplier over number fields. Where that interface is
  missing, this plan adds a bounded algebraic Jacobian pair.
- Analytic continuation and functional equations of the classical zeta and
  Dirichlet (L)-functions remain in `complex-analysis`/the
  `analytic-number-theory` track. Dedekind zeta and ray-class Hecke (L)-input
  needed by the new algebraic branch is supplied by a separate AN pair; the
  algebraic category may depend on that A page but does not duplicate its
  analytic results.
- Number-field, function-field, local-field, Frobenius, reciprocity and
  (L)-function normalizations are fixed per item. An item carries every
  actual `deps` edge. Page-level `requires` is a transitive reduction and must
  still cover the full item closure.
- All proven results have local proof obligations in future item carriers.
  A citation or a theorem's established status never substitutes for the
  future local proof. Genuine unresolved assertions use `open-problem` items
  with formulation/status/source review and never become suppliers.

## Confirmed published suppliers (read from current carriers)

The following existing A pages are actual published suppliers. The listed
item IDs are representative interfaces checked in the current page/item
carriers; each new item must name the exact IDs it uses.

| Current page | Existing exact interfaces used by this track |
|---|---|
| `number-fields-rings-of-integers-and-discriminants` | `def-number-field`; `def-ring-of-integers-of-a-number-field`; `def-order-in-a-number-field`; `def-integral-basis-and-power-integral-basis`; `thm-number-field-discriminant-is-well-defined-and-nonzero`; `cor-ring-of-integers-is-a-dedekind-domain`. |
| `prime-ideal-decomposition-ramification-and-the-different` | `thm-number-field-integral-ideal-factorisation-in-zf`; `def-prime-above-and-residue-degree`; `def-ramification-index`; `thm-fundamental-identity-for-primes-in-number-fields`; `thm-dedekind-kummer-prime-factorisation`; `def-different-of-a-number-field`; `thm-different-exponent-in-tame-and-wild-ramification`. |
| `decomposition-inertia-and-frobenius` | `thm-number-field-places-classification`; `def-completion-of-a-number-field-at-a-prime`; `def-decomposition-group-of-a-prime`; `def-inertia-group-of-a-prime`; `thm-decomposition-inertia-exact-sequence`; `def-arithmetic-frobenius-coset`; `thm-unramified-frobenius-element-exists-uniquely`; `thm-frobenius-elements-above-a-prime-are-conjugate`. |
| `minkowski-theory-and-number-field-class-groups` | `def-minkowski-embedding-of-a-number-field`; `thm-minkowski-bound-for-ideal-classes`; `thm-finiteness-of-the-number-field-class-group`; `cor-class-group-generated-by-small-primes`. Its unscaled embedding convention and Choice assumptions remain binding. |
| `dirichlets-unit-theorem-regulators-and-s-units` | `thm-product-formula-for-number-fields`; `thm-dirichlet-unit-theorem`; `def-s-integers-and-s-units-of-a-number-field`; `thm-s-unit-theorem`. The published Choice assumptions remain binding. |
| `absolute-values-completions-and-p-adic-numbers` and `hilbert-symbols-and-the-quadratic-local-global-principle` | `def-field-of-p-adic-numbers`; `thm-p-adic-completion-is-a-field`; `thm-weak-approximation-for-rational-places`; `thm-hasse-minkowski-over-the-rationals`. These are rational-field suppliers, not generic local/global-field theorems. |
| `cyclotomic-arithmetic-and-reciprocity-via-frobenius` | `thm-cyclotomic-ring-of-integers`; `thm-prime-factorisation-in-a-cyclotomic-field`; `thm-unramified-frobenius-element-exists-uniquely`; `cor-quadratic-reciprocity-via-frobenius`. |
| `homological-algebra/group-cohomology-as-a-derived-functor` | `def-group-cohomology-as-a-derived-functor`; `cor-normalized-cochains-compute-group-cohomology`; `thm-shapiro-lemma-for-group-cohomology`; `def-restriction-and-corestriction-on-group-cohomology`. These are abstract group cohomology, not local/global Galois duality. |
| `algebraic-geometry/etale-covers-and-the-etale-fundamental-group` | `def-etale-fundamental-group-and-fibre-functor`; `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets`. Finite étale covers do not supply étale cohomology or the trace formula. |
| `scheme-theory/smooth-proper-curves-divisors-genus-and-ramification` and `scheme-theory/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` | `def-algebraic-curve-over-field`; `thm-curves-function-fields-equivalence`; `thm-full-riemann-roch-divisor`; `thm-riemann-hurwitz-complete`. |
| `algebraic-geometry/nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties` and `algebraic-geometry/abelian-varieties-base-change-and-arithmetic-models` | `def-abelian-variety-over-a-field`; `thm-plane-cubic-chord-tangent-group-law`; `thm-nonaffine-abelian-multiplication-finite-faithfully-flat`; `def-rigidified-relative-picard-functor-and-dual-abelian-variety`; `def-good-reduction-and-abelian-scheme-model`; `def-neron-model-and-mapping-property`; `thm-neron-model-existence-in-stated-class`; `thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic`. The algebraic Jacobian object and Abel–Jacobi/polarization interface is separately planned. |
| Existing analytic suppliers in `complex-analysis` and `number-theory` | `thm-riemann-zeta-meromorphic-continuation`; `thm-riemann-zeta-functional-equation`; `thm-special-values-of-riemann-zeta-at-integers`; `thm-primitive-dirichlet-l-analytic-continuation`; `thm-primitive-dirichlet-l-functional-equation`; `thm-dirichlet-l-nonzero-at-one`; `thm-dirichlet-primes-arithmetic-progressions`; `thm-prime-number-theorem-arithmetic-progressions`; `thm-riemann-zeta-classical-zero-free-region`. New Dedekind-zeta/ray-class Hecke suppliers are planned in `analytic-number-theory`. |

The published supplier registry above is not an exhaustive proof audit of each
upstream item. Future authoring must check each supplier's actual hypotheses,
provenance, proof and Choice dependencies before using it.

## Shared field and adelic supplier contracts

These two A/B pairs are builder-owned interfaces shared by R2–R5. Their exact
row-level item IDs and direct item dependencies are in
[`proposed-inventories.json`](number-theory-scaffolds-2026-10-23/algebraic/proposed-inventories.json).
The canonical page fragment gives the direct page requirements. These items
are planned; none is a current library supplier.

### `global-fields-and-function-fields` / `global-fields-and-function-fields-examples`

**Direct page requirements:** `number-fields-rings-of-integers-and-discriminants`,
`algebraic-extensions-degree-and-finite-fields`,
`prime-ideal-decomposition-ramification-and-the-different`,
`decomposition-inertia-and-frobenius`,
`absolute-values-completions-and-p-adic-numbers`,
`relations-functions-and-quotients`, `countability-and-uncountability`,
`smooth-proper-curves-divisors-genus-and-ramification`,
`cartier-and-weil-divisors-line-bundles-and-picard-groups`, and
`residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.

| Planned item | Contract and hypotheses |
|---|---|
| `def-global-field` | A global field is either a finite extension of \(\mathbb Q\), or a finitely generated extension \(F/\mathbb F_q\) of transcendence degree one for which \(\mathbb F_q\) is algebraically closed in \(F\) (the exact constant field). The function-field curve correspondence is used through the published smooth-proper-curve/function-field interface. |
| `def-place-of-a-global-field` | A place is an equivalence class of nontrivial absolute values on the field. For a number field, include archimedean and finite places; for a function field over its full finite constant field, places are the normalized discrete valuations of closed points. The number-field classification supplier's Axiom of Choice hypothesis is carried explicitly. |
| `def-completion-of-a-global-field-at-a-place` | The completion \(F_v\) at a place \(v\), with the canonical dense embedding \(F\hookrightarrow F_v\). It specializes the published number-field completion item and the general absolute-value completion theorem; the arbitrary-metric construction uses Countable Choice. |
| `thm-global-field-element-integral-at-all-but-finitely-many-places` | Every number-field element has nonzero valuation at only finitely many prime ideals; every function-field element has finite pole support on its smooth proper curve. This is the support input to the adelic integral-basis comparison. |
| `thm-product-formula-for-function-fields` | For \(F=\mathbb F_q(C)\) with exact constants \(\mathbb F_q\), normalize \(|x|_v=q^{-\operatorname{ord}_v(x)\deg(v)}\). Then \(\prod_v|x|_v=1\) for every \(x\in F^\times\), by degree zero of a principal divisor. The number-field product formula is reused from its published item. |
| `thm-weak-approximation-for-global-fields` | For every finite set of distinct places \(S\), every \(a_v\in F_v\), and every \(\epsilon_v>0\), there is \(a\in F\) with \(|a-a_v|_v<\epsilon_v\) for all \(v\in S\). This is weak approximation only; no strong-approximation assertion is included. |
| `thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field` | For a smooth proper geometrically integral curve over \(\mathbb F_q\), the degree-zero divisor class group is finite. The local proof uses full Riemann–Roch to represent each degree-zero class by an effective divisor of one fixed bounded degree and the finiteness of closed points of bounded degree. It does not assert a degree-one closed point. |

**Choice ledger:** `def-place-of-a-global-field` carries full AC through the
number-field place-classification supplier. `def-completion-of-a-global-field-at-a-place`
carries Countable Choice from the general metric-completion theorem.
`thm-weak-approximation-for-global-fields` uses both place classification and
completions, so its own deps state AC and Countable Choice directly. The B
examples consume these assumptions through their named A suppliers; they do
not add a separate choice-dependent selection.

The examples B page inventories `ex-global-fields-number-field-and-function-field`,
`ex-product-formula-for-t-over-fq`,
`ex-degree-zero-divisor-class-group-of-projective-line`, and
`ex-weak-approximation-in-fq-t`. In the product example, the finite place
defined by \(t\) contributes \(q^{-1}\), the place at infinity contributes
\(q\), and all other factors are \(1\). The projective-line example computes
the degree-zero class group as trivial. The approximation example solves the
finite congruence conditions by a polynomial/CRT construction. The source route is
Milne, *Algebraic Number Theory* v3.08, Ch. VII, “Absolute Values; Local
Fields,” and Ch. VIII, “Global Fields” (printed pp. 105–150, read in the
specified sections in the R2 ledger); the global-function-field divisor and
class inputs use the published curve, divisor and full Riemann–Roch items.
The exact source extents and heading dispositions are in
[`r2-local-global.md`](number-theory-scaffolds-2026-10-23/algebraic/r2-local-global.md)
and [`r2-sources/README.md`](number-theory-scaffolds-2026-10-23/algebraic/r2-sources/README.md).

### `adeles-ideles-and-approximation` / `adeles-ideles-and-approximation-examples`

**Direct page requirements:** the planned global-fields pair, plus the
published number-field foundations, Minkowski/class-group theory, and
Dirichlet units/S-units, local fields, archimedean completions, Euclidean
local-compactness, local extension/completion decomposition, algebraic closure
and separability, the fundamental theorem of algebra, polynomial rings,
Artinian rings/CRT, field norm and trace, full Choice and countable-choice
foundations, and Tychonoff compactness. The new definitions are restricted
products over the places and completions above; number-field ray groups are
deliberately kept separate from function-field divisor-class groups.

| Planned item | Contract and hypotheses |
|---|---|
| `def-adele-ring-of-a-global-field` | \(\mathbb A_F=\prod_v'F_v\), restricted at finite places with respect to valuation rings \(\mathcal O_v\); archimedean factors are unrestricted. The restricted-product topology has basic neighborhoods given by finitely many local open sets and \(\mathcal O_v\) at every other finite place. |
| `def-idele-group-of-a-global-field` | \(\mathbb A_F^\times=\prod_v'F_v^\times\), restricted at finite places with respect to \(\mathcal O_v^\times\), with the corresponding restricted-product topology. |
| `thm-global-field-adeles-and-ideles-locally-compact` | For number fields and function fields with finite exact constant field, \(\mathbb A_F\) and \(\mathbb A_F^\times\) are locally compact Hausdorff groups. The proof uses compact-open valuation rings at finite places and the local compactness of the archimedean factors. Compactness of the infinite product of compact local factors uses Tychonoff under full AC; include both `thm-tychonoff` and `def-axiom-of-choice`. |
| `thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t` | Base cases: for \(\mathbb Q\), \(\mathbb Q\hookrightarrow\mathbb A_\mathbb Q\) is discrete and \([0,1]\times\prod_p\mathbb Z_p\) maps onto the additive quotient. For \(\mathbb F_q(t)\), finite-place principal parts are matched by the PID/CRT argument and a polynomial is subtracted at infinity; \(\prod_v\mathcal O_v\) is a compact fundamental set. Discreteness follows because a rational function integral at all finite places is a polynomial, and a polynomial with positive valuation at infinity is zero. The compact product uses Tychonoff under AC; the CRT and polynomial Euclidean suppliers are explicit. MIT Lecture 25 gives both base proofs; the proposed item spells out the finite-place construction. |
| `thm-global-field-completion-tensor-product-decomposition` | For finite separable \(L/K\) and a nonarchimedean place \(v\), \(L\otimes_K K_v\cong\prod_{w\mid v}L_w\) as topological \(K_v\)-algebras, by factoring a primitive-element polynomial over the completion and applying CRT. |
| `thm-number-field-archimedean-completion-tensor-product-decomposition` | For a finite separable number-field extension and a real place, \(L\otimes_K\mathbb R\cong\mathbb R^r\times\mathbb C^s\) from distinct linear/quadratic factors; at a complex place, \(L\otimes_K\mathbb C\cong\mathbb C^{[L:K]}\). Primitive elements, the fundamental theorem of algebra, real polynomial factorization and CRT give the algebra products; the real and complex embeddings index the places above the chosen place. The local proof also checks the completions in their usual topologies. |
| `thm-almost-all-integral-basis-extension-comparison` | For a chosen \(K\)-basis \(\omega_i\) of finite separable \(L/K\), outside finitely many finite places \(v\), its \(O_v\)-span is \(\prod_{w\mid v}O_w\). The proof excludes the finite places where some \(\omega_i\) is nonintegral or the trace-matrix determinant is nonunit; away from them the trace pairing recovers integral coordinates. |
| `thm-adelic-base-change-for-finite-separable-global-field-extensions` | The restricted-product isomorphism \(\mathbb A_K\otimes_K L\cong\mathbb A_L\) and its additive direct-sum/principal-field form. It consumes the nonarchimedean and archimedean completion decompositions and the almost-all integral comparison. |
| `thm-global-field-additive-adele-quotient-discrete-cocompact` | For every number field and every function field with exact finite constants, \(F\hookrightarrow\mathbb A_F\) is discrete and \(\mathbb A_F/F\) is compact. Reduce number fields to \(\mathbb Q\), and function fields to \(\mathbb F_q(t)\) using a separating transcendence basis over perfect \(\mathbb F_q\), then use finite-separable adelic base change. |
| `thm-global-field-idelic-diagonal-discrete-and-closed` | The diagonal subgroup \(F^\times\hookrightarrow\mathbb A_F^\times\) is discrete and closed for the restricted-product topology. The number-field and function-field proofs use their normalized product formulas; closedness follows from discreteness in a Hausdorff topological group. |
| `def-idele-class-group-of-a-global-field` | The Hausdorff locally compact topological quotient \(C_F=\mathbb A_F^\times/F^\times\), using the closed discrete diagonal subgroup above. Compactness of the degree-zero function-field kernel is a separate R2 theorem, not part of this definition. |
| `def-global-field-modulus` | A number-field modulus consists of a nonzero integral ideal and a selected set of real places; complex places are omitted. |
| `def-ray-class-group` | For that modulus, the ray class group is the group of fractional ideals prime to its finite part modulo principal ideals generated by elements congruent to \(1\) at the finite part and positive at each selected real place. |
| `thm-ray-class-exact-sequence` | State the exact sequence from the image of \(\mathcal O_K^\times\) in the finite residue/sign group, through the ray class group, onto the ordinary ideal class group. Identify the kernel as that unit image; do not silently identify it with the full residue/sign group. |
| `def-ray-class-character` | A finite-order complex character of the finite ray class group, with the conductor convention fixed by the modulus. |
| `thm-ray-class-group-finite` | The number-field ray class group is finite, from the exact sequence, finiteness of the ordinary class group and finiteness of the residue/sign quotient. |

**Choice ledger:** `thm-global-field-adeles-and-ideles-locally-compact` and
`thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t` both depend on
`thm-tychonoff`, which explicitly carries full AC for compact infinite
products. Their place/completion inputs carry the classification AC and
completion Countable Choice through the actual supplier edges. The tensor
factorization, almost-all integral comparison, adelic base-change, global
additive quotient, idelic diagonal and quotient definitions use those named
suppliers; they do not add a duplicate axiom edge when it is already carried
by the supplier theorem/definition. The number-field ray-class sequence and
finiteness likewise consume the existing class-group and unit suppliers under
their stated hypotheses. The B examples consume the relevant A suppliers and
therefore retain the same assumptions.

The B page has `ex-idele-with-a-single-nonunit-component`,
`ex-ray-class-groups-of-q-mod-5-and-5-infinity`, and
`ex-ray-class-character-of-q-mod-5-infinity`, and
`ex-additive-adele-fundamental-domains-for-q-and-fqt`. The additive example
traces the compact fundamental sets in the two base cases. The idele example has valuation
one at 2 and zero at every other finite prime. The ray groups for moduli \((5)\)
and \((5\infty)\) are respectively cyclic of orders 2 and 4; the character
example sends the class of 2 modulo \((5\infty)\) to \(i\). The group
calculations exhibit the finite-unit quotient and the added real-positivity
condition. The definition and class-group sequence are sourced to Milne, *Class Field
Theory* v4.03 (2020), Ch. V §§1, 3–5, read in full for those interfaces; the
number-field finiteness inputs are the existing class-group and unit suppliers.
Analytic continuation, Hecke (L)-values and prime density are not owned here:
the analytic track owns the ray-class Hecke density theorem and its analytic
proof; the algebraic Chebotarev page consumes that exact item downstream of
global CFT.

The local compact-open input is Milne, *Algebraic Number Theory* v3.08,
Ch. VII, Proposition 7.46 and Corollary 7.47 (printed p. 126), read in full.
The restricted-product topology and diagonal idelic discreteness are Milne,
*Class Field Theory* v4.03, Ch. V §4 (printed pp. 169–171), read in full.
The additive discrete/cocompact theorem and finite-separable base-change route
are sourced to Stein, *Algebraic Number Theory: A Computational Approach*,
Ch. 18 §§18.1, 18.3 (printed pp. 181–190), MIT 18.785 Fall 2021 Lecture 25,
and Milne, *Algebraic Number Theory* v3.08 Ch. VIII Prop. 8.2 (printed pp.
135–136). R2 read Stein Lemma 18.1.6, Lemma 18.3.3, Corollary 18.3.4 and
Theorem 18.3.5; Milne Proposition 8.2; and the complete MIT Lecture 25
§§25.1–25.3 (pp. 1–8). Stein's Theorem
18.3.5 writes the $\mathbb Q$ base proof and supplies the separable-base-change
route. MIT Theorem 25.12 explicitly treats both rational bases: at
$\mathbb F_q(t)$, the finite-place CRT step uses $\mathbb F_q[t]$, and the
infinite-place step subtracts the polynomial part of a Laurent expansion.
Milne Proposition 8.2 supplies the local completion tensor product;
Stein Lemma 18.1.6 supplies the almost-all integral comparison. Together they
give the restricted-product base-change isomorphism. R2 records these read
limits and source-to-item edges in its source ledger.
For a function field with exact constants \(\mathbb F_q\), R2 separately proves
compactness of the degree-zero kernel from the valuation/divisor exact sequence,
compact local unit groups, the finite degree-zero divisor-class group and the
degree-map section; see `thm-function-field-idele-class-degree-exact-sequence`
in the R2 inventory. Its Picard/degree-one section uses the R3 \(\mathrm{Pic}^1\)
and Lang items plus finite-field Brauer vanishing, not a rational point.

## Research dossiers: pair contracts and source maps

The following unique researcher dossiers hold the complete A/B pair
inventories, exact theorem/algorithm contracts, direct page and item DAGs,
full-text editions/URLs/locators, heading-by-heading include/reuse/defer/exclude
maps, and unresolved source/proof gates. The combined canonical rows and
ordered item projection are the two JSON files above; the dossiers supply the
mathematical meaning and provenance of those rows.

| Lane | A/B contract dossier | Full-text source and heading ledger |
|---|---|---|
| Foundational number-field algorithms | [`r1-foundations.md`](number-theory-scaffolds-2026-10-23/algebraic/r1-foundations.md) | [`r1-sources/`](number-theory-scaffolds-2026-10-23/algebraic/r1-sources/) — Milne ANT v3.08 Chs. 2–5, Stein Chs. 2–8 selected sections, Lenstra 1992 §§1–6, Neukirch Chs. I–II, LLL 1982 §§1–3 and Conrad, *The Different Ideal* §§1–5; source ranges and per-heading dispositions in the R1 note. |
| Local/global fields, class field theory and duality | [`r2-local-global.md`](number-theory-scaffolds-2026-10-23/algebraic/r2-local-global.md) | [`r2-sources/README.md`](number-theory-scaffolds-2026-10-23/algebraic/r2-sources/README.md) — Milne ANT/CFT v3.08/v4.03, Milne ADT 2e, Fesenko–Vostokov 2e Ch. IV, Neukirch Chs. II, III, V–VII, Stein Ch. 18, MIT 18.785 Lectures 11/25, Yoon full article, Thorner–Zaman full article and the cross-track Lagarias–Odlyzko full text; exact read ranges and gates are indexed in the dossier. |
| Heights, Jacobians and Diophantine arithmetic | [`r3-arithmetic-geometry.md`](number-theory-scaffolds-2026-10-23/algebraic/r3-arithmetic-geometry.md) | [`r3-sources/README.md`](number-theory-scaffolds-2026-10-23/algebraic/r3-sources/README.md) — Poonen, *Rational Points on Varieties*; Milne *Abelian Varieties* and *Elliptic Curves*; ADT; Schanuel's complete article; Silverman height and dynamics notes; Poonen–Stoll; Gillet–Soulé; Evertse; Vojta and the dated frontier papers. Exact ranges and gate limits are source-specific. |
| Galois representations, étale cohomology, Hodge theory and Langlands | [`r4-galois-langlands.md`](number-theory-scaffolds-2026-10-23/algebraic/r4-galois-langlands.md) | [`r4-sources/README.md`](number-theory-scaffolds-2026-10-23/algebraic/r4-sources/README.md) — Deligne, *Weil II*; SGA 5; Milne, *Lectures on Étale Cohomology*; FKM; Brinon–Conrad; Bhatt–Morrow–Scholze; Bhatt–Scholze; Mazur, Wiles, Taylor–Wiles, Lafforgue 1997/2002, Wedhorn, Scholze's perfectoid paper, and 2026 preprints. Exact read ranges and proof gates are recorded there. |
| Iwasawa theory, arithmetic statistics, motivic K-theory and special values | [`r5-iwasawa-statistics.md`](number-theory-scaffolds-2026-10-23/algebraic/r5-iwasawa-statistics.md) | [`r5-sources/`](number-theory-scaffolds-2026-10-23/algebraic/r5-sources/) — Kubota–Leopoldt/Deligne–Ribet, Johnston–Nickel, classical totally-real IMC, Hilbert–Blumenthal forms, Brumer–Stark, relative K-theory, Borel regulators, Beilinson–Bloch–Kato–Tamagawa, Howard, Mazur–Rubin, Smith, Davenport–Heilbronn, Burns–Daoud–Liang and reduced-form sources; exact read ranges and proof gates are in the R5 dossier. |

**Direct prerequisite edge synchronized with the frozen projection:** the R3
`arithmetic-chow-groups-and-intersection-pairings` page requires
`dirichlets-unit-theorem-regulators-and-s-units`. Its normed rank-one module
height uses the number-field product formula carried by that page; the same
edge is present in both the R3 and combined page fragments.

Several proof/readiness gates intentionally remain visible. R2 has now read
Fesenko–Vostokov, *Local Fields and Their Extensions* 2e, Ch. IV §§1–6, which
proves finite-residue equal-characteristic local norm-subgroup existence; the
future local item still needs to reproduce that proof. The function-field
global-existence and nonsplitting-place proofs remain separate local obligations.
The function-field degree section uses Picard descent
plus finite-field Brauer vanishing rather than assuming a rational point. R3
reports full reads of Faltings 1983 §§1–7 and its erratum, the Wüstholz–Faltings
Siegel proof in *Rational Points* Ch. V §5, and Kahn 2006 Appendix B/Theorem 3;
future items still need local proofs. The homogeneous Baker bound is separately
source-read, while the inhomogeneous additive-constant bound retains its
primary-proof gate. The Manin–Peyre, anabelian and dynamics pairs are in the
merged projection with the exact source scopes and their remaining proof/status
limits. R4 now has
explicit étale-site, l-adic system,
derived \(R f_!\), compactification, trace, GOS and weight items; its source
limits still leave Lafforgue's 1997 Arthur–Selberg proofs and 1998
compactification/\(\varphi\)-lattice work, the FKM tensor-conductor estimate,
the full BCDT proof, and several imported modularity/LL inputs as named proof
gates. R5 has bounded supplier pairs for Hilbert–Blumenthal/Deligne–Ribet,
classical Iwasawa, relative K-theory, Brumer–Stark, Borel regulators, and
Beilinson–Bloch–Kato–Tamagawa; its local proofs of those sources and remaining
motivic conjectures stay explicit authoring obligations. These records show
current reading limits, not proof readiness or complete frontier coverage.

