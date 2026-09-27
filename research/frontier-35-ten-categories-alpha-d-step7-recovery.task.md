# Step 7 adjudication — group **d**, run `frontier-35-ten-categories`

You are the group Alpha for batches **3**, **4**, **5**: 4 A/B pair(s), 8 page(s), 87 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-35-ten-categories-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `algebraic-differentials-separability-and-smooth-local-presentations` | A | algebraic-geometry | 366.0581 | `dimension-constructible-images-and-dimensions-of-fibres`, `regular-local-rings-and-homological-dimension`, `flatness-and-faithful-flatness`, `tor-flatness-and-global-dimension`, `algebraic-closure-embeddings-and-separability` |
| 3 | `algebraic-differentials-separability-and-smooth-local-presentations-examples` | B | algebraic-geometry | 366.0582 | `algebraic-differentials-separability-and-smooth-local-presentations` |
| 4 | `normalization-finiteness-for-affine-domains` | A | commutative-algebra | 366.0601 | `dedekind-domains-and-ideal-classes`, `noether-normalisation-and-nullstellensatz`, `algebraic-closure-embeddings-and-separability`, `affine-algebraic-sets-and-coordinate-rings`, `morphisms-local-rings-and-rational-maps-of-affine-varieties` |
| 4 | `normalization-finiteness-for-affine-domains-examples` | B | commutative-algebra | 366.0602 | `normalization-finiteness-for-affine-domains` |
| 4 | `algebraic-zariski-main-for-quasi-finite-morphisms` | A | commutative-algebra | 366.0603 | `zariski-topology-on-prime-spectra`, `integral-extensions-and-going-up`, `morphisms-local-rings-and-rational-maps-of-affine-varieties`, `dimension-constructible-images-and-dimensions-of-fibres` |
| 4 | `algebraic-zariski-main-for-quasi-finite-morphisms-examples` | B | commutative-algebra | 366.0604 | `algebraic-zariski-main-for-quasi-finite-morphisms`, `fibre-products-base-change-and-scheme-theoretic-fibres` |
| 5 | `homogeneous-resultants-and-projective-intersection-length` | A | commutative-algebra | 366.0621 | `artinian-rings-and-length`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `koszul-complexes-and-regular-sequences`, `projective-algebraic-sets-projective-morphisms-and-cones`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `dimension-constructible-images-and-dimensions-of-fibres`, `linear-algebra-methods-in-combinatorics`, `the-fundamental-theorem-of-algebra` |
| 5 | `homogeneous-resultants-and-projective-intersection-length-examples` | B | commutative-algebra | 366.0622 | `homogeneous-resultants-and-projective-intersection-length` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `algebraic-differentials-separability-and-smooth-local-presentations` — Algebraic Differentials Separability and Smooth Local Presentations (26 item(s))

- `def-ag-universal-algebraic-differentials` · definition — Ag universal algebraic differentials
- `lem-ag-differentials-universal-property` · lemma — Ag differentials universal property
- `lem-ag-polynomial-quotient-differentials` · lemma — Ag polynomial quotient differentials
- `lem-ag-differentials-localization-base-change` · lemma — Ag differentials localization base change
- `lem-ag-differentials-transitivity` · lemma — Ag differentials transitivity
- `def-ag-separating-transcendence-basis` · definition — Ag separating transcendence basis
- `thm-ag-separating-transcendence-basis-perfect-field` · theorem — Ag separating transcendence basis perfect field
- `thm-ag-field-differentials-separable-rank` · theorem — Ag field differentials separable rank
- `lem-ag-separable-residue-cotangent-sequence` · lemma — Ag separable residue cotangent sequence
- `thm-ag-field-extension-of-schemes` · theorem — Ag field extension of schemes
- `def-ag-geometrically-regular-algebra-and-fibre` · definition — Ag geometrically regular algebra and fibre
- `def-ag-standard-smooth-algebra` · definition — Ag standard smooth algebra
- `lem-ag-base-change-of-standard-smooth-presentations` · lemma — Ag base change of standard smooth presentations
- `lem-ag-standard-smooth-fibre-regular-parameters` · lemma — Ag standard smooth fibre regular parameters
- `lem-ag-local-flatness-regular-parameters` · lemma — Ag local flatness regular parameters
- `lem-ag-standard-smooth-flatness` · lemma — Ag standard smooth flatness
- `lem-ag-standard-smooth-regular-geometric-fibres` · lemma — Ag standard smooth regular geometric fibres
- `lem-ag-flat-local-regularity-ascent-descent` · lemma — Ag flat local regularity ascent descent
- `lem-ag-finite-field-extension-separable-factorization` · lemma — Ag finite field extension separable factorization
- `lem-ag-geometric-regularity-field-tests` · lemma — Ag geometric regularity field tests
- `thm-ag-geometric-regularity-perfect-base` · theorem — Ag geometric regularity perfect base
- `thm-ag-perfect-field-jacobian-regularity` · theorem — Ag perfect field jacobian regularity
- `lem-ag-geometrically-regular-fibres-local-presentation` · lemma — Ag geometrically regular fibres local presentation
- `thm-ag-standard-smooth-geometric-regularity` · theorem — Ag standard smooth geometric regularity
- `thm-ag-standard-smooth-base-change-composition` · theorem — Ag standard smooth base change composition
- `thm-ag-submersion-criterion-standard-smooth` · theorem — Ag submersion criterion standard smooth

### `algebraic-differentials-separability-and-smooth-local-presentations-examples` — Algebraic Differentials Separability and Smooth Local Presentations — Examples (7 item(s))

- `ex-ag-differentials-polynomial-and-hypersurface` · example — Ag differentials polynomial and hypersurface
- `cex-ag-differentials-arbitrary-map-is-not-base-change` · counterexample — Ag differentials arbitrary map is not base change
- `ex-ag-separable-and-inseparable-field-differentials` · example — Ag separable and inseparable field differentials
- `ex-ag-standard-smooth-hypersurface-chart` · example — Ag standard smooth hypersurface chart
- `ex-ag-field-change-inseparable-thickening` · example — Ag field change inseparable thickening
- `cex-ag-regular-factors-product-not-regular` · counterexample — Ag regular factors product not regular
- `ex-ag-projection-submersion-parameters` · example — Ag projection submersion parameters

### `normalization-finiteness-for-affine-domains` — Normalization Finiteness for Affine Domains (11 item(s))

- `lem-integral-closure-unchanged-across-an-integral-intermediate-domain` · lemma — Integral closure is unchanged across an integral intermediate domain
- `lem-finite-purely-inseparable-rational-extension-envelope` · lemma — Finite purely inseparable rational extensions admit a finite Frobenius envelope
- `lem-polynomial-algebras-over-fields-are-integrally-closed` · lemma — Finite-variable polynomial algebras over fields are integrally closed
- `lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct` · lemma — Finite-variable polynomial algebras over fields are Noetherian by finite generators
- `lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct` · lemma — Submodules of finite modules over a Noetherian ring are finite by induction
- `lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite` · lemma — Integral closure in a purely inseparable rational envelope is finite
- `lem-normal-extension-separable-over-maximal-purely-inseparable-subextension` · lemma — A finite normal extension is separable over its purely inseparable fixed field
- `thm-polynomial-algebras-over-fields-have-finite-integral-closures` · theorem — Polynomial algebras over fields have finite integral closures
- `thm-integral-closure-finite-finite-type-domain-over-field` · theorem — A finite-type domain over a field has finite normalization
- `cor-affine-normalization-is-finite` · corollary — The normalization of an irreducible affine variety is finite
- `lem-finite-normalization-compatible-with-principal-opens` · lemma — Finite normalization commutes with principal localization

### `normalization-finiteness-for-affine-domains-examples` — Normalization Finiteness for Affine Domains: Examples (3 item(s))

- `ex-integral-closure-cusp-semigroup-affine-domain` · example — Normalization of the cusp semigroup ring
- `ex-normalization-nodal-coordinate-domain` · example — Normalization of a nodal affine plane curve
- `ex-integral-closure-monomial-curve-t3-t4-t5` · example — Normalization of the t³,t⁴,t⁵ monomial curve

### `algebraic-zariski-main-for-quasi-finite-morphisms` — Algebraic Zariski Main for Quasi-Finite Morphisms (15 item(s))

- `def-integral-subalgebra-of-an-arbitrary-ring-map` · definition — Integral elements subalgebra of an arbitrary ring map
- `def-quasi-finite-at-a-prime-for-finite-type-algebras` · definition — Quasi-finiteness at a prime of a finite-type algebra
- `lem-zmt-polynomial-relation-leading-coefficient-is-integral` · lemma — The leading coefficient times a root is integral
- `lem-zmt-one-variable-integral-correction` · lemma — One-variable integral correction after leading-coefficient localization
- `def-strongly-transcendental-element` · definition — Strong transcendence over a subring
- `lem-strong-transcendence-descends-to-minimal-prime-quotients` · lemma — Strong transcendence descends to reduced minimal-prime quotients
- `lem-zmt-polynomial-rings-over-normal-domains-are-normal` · lemma — Polynomial rings over normal domains are normal
- `lem-zmt-quasi-finite-transfer-through-intermediate-rings` · lemma — Quasi-finite local fibres transfer through quotients and intermediate rings
- `lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite` · lemma — Finite algebras over a strongly transcendental variable are nowhere quasi-finite
- `lem-zmt-one-generator-local-integrality` · lemma — A quasi-finite one-generator quotient is locally its integral closure
- `lem-zmt-conductor-radical-coefficients` · lemma — Conductor radical detects every polynomial coefficient
- `thm-algebraic-zariski-main-localization` · theorem — Algebraic Zariski Main localization at a quasi-finite prime
- `cor-quasi-finite-locus-open-finite-type-algebra` · corollary — The quasi-finite locus of a finite-type algebra is open
- `thm-quasi-finite-algebra-open-finite-factorization` · theorem — A quasi-finite algebra factors openly through a finite algebra
- `cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra` · corollary — Quasi-finite algebras are source locally localizations of finite algebras

### `algebraic-zariski-main-for-quasi-finite-morphisms-examples` — Algebraic Zariski Main for Quasi-Finite Morphisms: Examples (3 item(s))

- `ex-zariski-main-open-immersion-punctured-affine-line` · example — The punctured affine line as an open finite factorization
- `ex-zariski-main-finite-morphism-factorization` · example — A finite algebra is its own Zariski Main factor
- `cex-quasi-finite-morphism-need-not-be-finite` · counterexample — Quasi-finite does not imply finite

### `homogeneous-resultants-and-projective-intersection-length` — Homogeneous Resultants and Projective Intersection Length (18 item(s))

- `def-sylvester-resultant-of-binary-forms` · definition — Sylvester resultant of two positive-degree binary forms
- `lem-binary-resultant-scaling-specialization-and-dehomogenization` · lemma — Scaling, specialization, and the affine and infinite charts of a binary resultant
- `thm-binary-resultant-zero-iff-common-geometric-projective-root` · theorem — The binary Sylvester resultant detects a common geometric projective root
- `lem-finite-variable-polynomial-rings-over-fields-are-ufds` · lemma — Every finite-variable polynomial ring over a field is a UFD
- `lem-coprime-plane-forms-form-a-homogeneous-regular-sequence` · lemma — Coprime positive-degree plane forms form a homogeneous regular sequence
- `lem-complete-intersection-hilbert-series-two-plane-forms` · lemma — Hilbert series of a two-form plane complete intersection
- `def-projective-scheme-from-a-homogeneous-quotient` · definition — Projective scheme of a homogeneous quotient and its standard affine charts
- `lem-projective-standard-chart-prime-and-local-ring-correspondence` · lemma — Prime and local-ring correspondence on standard projective charts
- `lem-standard-open-affine-chart-of-a-projective-quotient` · lemma — The standard open $D_+(f)$ of a projective quotient is the affine chart $\\operatorname{Spec}((S_f)_0)$
- `cor-no-common-component-projective-plane-intersection-is-zero-dimensional` · corollary — Coprime plane forms have a zero-dimensional projective scheme intersection
- `lem-zero-dimensional-projective-scheme-has-finite-local-charts` · lemma — A zero-dimensional projective finite-type scheme is a finite union of finite local Artinian charts
- `def-total-length-of-a-zero-dimensional-projective-scheme` · definition — Total length of a zero-dimensional projective k-scheme
- `lem-localisation-of-a-graded-ring-at-a-homogeneous-element` · lemma — Localisation at a homogeneous element is graded, with graded kernels and dehomogenised degree-zero parts
- `lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union` · lemma — The spectrum of a finite product ring is the disjoint union of the factor spectra
- `lem-base-change-of-a-zero-dimensional-projective-quotient` · lemma — Field extension preserves the graded pieces and the total length of a zero-dimensional projective quotient
- `lem-eventual-hilbert-function-equals-zero-dimensional-projective-length` · lemma — The eventual Hilbert value is the intrinsic length of a finite projective scheme
- `thm-projective-plane-complete-intersection-total-length` · theorem — Two coprime projective plane forms meet in total length equal to their degree product
- `cor-projective-plane-bezout-length-form` · corollary — Algebraic Bézout formula as a sum of local scheme lengths

### `homogeneous-resultants-and-projective-intersection-length-examples` — Homogeneous Resultants and Projective Intersection Length: Examples (4 item(s))

- `ex-binary-resultant-two-linear-forms` · example — Resultant of two binary linear forms
- `ex-resultant-detects-root-at-infinity` · example — A binary resultant detects a common root at infinity lost by naive dehomogenization
- `ex-hilbert-series-plane-complete-intersection` · example — A quadratic-cubic plane complete intersection has eventual Hilbert value six
- `ex-length-intersection-tangent-line-conic` · example — A tangent line and conic have one intersection point of local length two

## Your seams

Another group's pages depend on yours:

- `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` (group a) requires your `algebraic-differentials-separability-and-smooth-local-presentations`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-35-ten-categories-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-35-ten-categories`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow WORKFLOW.md's 7.1–7.10 protocol
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
