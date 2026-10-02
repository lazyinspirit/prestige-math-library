# B8 foundations: final mathematical review

Date: 2026-10-01. Run: `frontier-37-owner-30`. Lane: the first 29 A-page
items in `research/frontier-37-owner-30-batch-8.pages.json`, from
`lem-uniformizer-differential-is-a-basis` through
`cor-h1-line-bundle-dual-sections`, inclusive. I read `CLAUDE.md` and
`README.md` before reviewing the repository.

This is a mathematical review of current item and supplier bodies. It does
not record Step 3 decisions and does not change item, carrier, contract,
coverage, plan, receipt, baseline, or gate files. The only file written for
this lane is this report.

## Manifest snapshot and Step 3 API

The initial lane snapshot is the 29 IDs in manifest order below. At the
2026-10-01T04:29:28Z post-review checkpoint the full batch-8 manifest
SHA-256 is
`e822af81c8e596fa0224ddf28055035145f4b0d05908388d6810c4ca6e10e33d`;
the first 29 IDs match the initial slice captured at audit start. A- and
B-page counts are 47 and 11, respectively.

The actual API is `recordStep3` in `tools/step3-decisions.mjs`:

- Reviewer item decisions are `accept`, `repaired`, or `escalate`.
- A non-escalation review requires `confidence: 1` and an explicit
  `dependencies` array; the API hashes the item plus its full transitive input
  closure.
- The item's pair must have a current closed Step 3a scope decision first.
- A current owner hold or escalation receipt must be reopened by the owner
  before a reviewer can replace it.

The run status file showed the Step 3a and 3b gates still unrun. Item 5
(`lem-finite-potent-trace-existence-and-uniqueness`) and item 23
(`lem-twisting-sheaf-projective-space-ample`) already have current accepted
receipts; those receipts should be reused. The remaining old item receipts
are pending, hash-stale, or historical escalations and need the current scope
closure and any required owner reopens before recording.

## Dispositions

All 29 current proof bodies are mathematically acceptable at confidence 1.
“Accept” below is the proposed ordinary reviewer disposition on the current
bytes; no disposition has been recorded. Existing B8 escalation reasons that
say a supplier file is absent are historical: I read the current supplier
bytes and the consumer steps that use them.

| # | Item | Disposition | Main route checked |
|---:|---|---|---|
| 1 | `lem-uniformizer-differential-is-a-basis` | Accept | Smoothness gives a finite free stalk; the separable residue-cotangent isomorphism makes the class of the uniformizer a basis, hence `dt` is a basis; localization and completion preserve it. |
| 2 | `def-residue-rational-differential-curve-point` | Accept | The simple-root Hensel lift gives the unique compatible coefficient field; the parameter power-series map identifies the completion with `κ(p)[[t]]`; the trace formula is restricted to finite separable residue fields. |
| 3 | `lem-residue-independent-uniformizer` | Accept | The map from algebraic differentials to Laurent coefficients is induced by the universal property; the formal change-of-parameter coefficient identity is proved over a universal characteristic-zero field and then as an integral polynomial, so it specializes to every characteristic. |
| 4 | `lem-residue-exact-differential-zero` | Accept | The formal derivative comparison is typed through algebraic Kähler differentials; only the constant term could contribute to `t⁻¹`, with coefficient zero. No completed-field differential-module identification is used. |
| 5 | `lem-finite-potent-trace-existence-and-uniqueness` | Accept; reuse current receipt | The trace is computed on a finite stable image; index independence, the quotient formula, nilpotent vanishing, and uniqueness follow from finite-dimensional trace additivity. |
| 6 | `def-commensurable-subspaces-and-ideals-of-endomorphisms` | Accept | The finite-error quotient convention yields the stated relation properties and the correct `E`, `E₁`, `E₂`, `E₀` definitions. |
| 7 | `lem-finite-potent-trace-linearity-and-conjugation` | Accept | T4 uses a common finite-dimensional stable space for a fixed-exponent finite-potent family; T5 has correctly typed rectangular maps; T6 bounds both products in `E₀` using separate finite-dimensional witnesses. |
| 8 | `lem-e-ideals-and-commutator-trace` | Accept | The projection decomposition proves `E₁+E₂=E`; ideal properties and the exponent-two proof for `E₀` support both commutator cases. |
| 9 | `thm-abstract-residue-exists-unique` | Accept | Lift independence, commutator identity, bilinearity, and Leibniz descend through the explicit universal Kähler-differential presentation. |
| 10 | `lem-abstract-residue-basic-properties` | Accept | The continuity proof uses Tate’s full `fA+fgA+fg²A⊂A` condition; the logarithmic trace formula is computed on `(A+gA)/(A∩gA)`. |
| 11 | `lem-abstract-residue-additivity` | Accept | Additivity uses two separate common finite-potent families, with exponents 3 and 4; it does not assume arbitrary finite-potent subspaces are closed under sums. |
| 12 | `lem-abstract-residue-trace-under-finite-free-extension` | Accept | The `K'`-action and block coordinates follow from tensor balancing; the finite free trace is defined over a commutative base ring and is basis-independent; matrix trace is reduced blockwise. |
| 13 | `cor-coefficient-trace-residue-agreement` | Accept | Truncation proves the Laurent convolution formula for arbitrary series without identifying `Ω¹_{k((t))/k}` with `k((t))dt`; finite-free trace is coefficientwise field trace. |
| 14 | `lem-adelic-quotient-computes-h1-structure-sheaf` | Accept | The restricted-product pair is stable; the flasque sequence is exact by stalks and completion density; its long exact sequence gives the finite-dimensional `H¹` quotient. |
| 15 | `thm-global-residue-theorem-algebraic-curve` | Accept | Tate additivity makes the adelic residue zero; finite blocks split into local residues and the tail vanishes by the full continuity condition. Regular `f,g` give regular `f dg`, proving finite support. |
| 16 | `def-principal-parts-sheaf-line-bundle-curve` | Accept | Local finite support of rational sections gives the morphism to the direct sum of closed-point skyscrapers; the map is an isomorphism on each stalk, including the generic stalk. |
| 17 | `lem-principal-parts-cech-h1-presentation` | Accept | The exact principal-parts sequence, flasqueness of the constant rational-section sheaf, and the long exact sequence give the stated cokernel. |
| 18 | `def-residue-pairing-principal-parts` | Accept | Changing a local lift changes the product by a regular differential; finite support makes the defining sum finite. |
| 19 | `lem-residue-pairing-descends-cohomology` | Accept | The functional kills regular families and diagonal rational sections; the latter follows from the global residue theorem. |
| 20 | `lem-residue-pairing-functorial-line-bundle` | Accept | The current proof has the correct `O(D)` local equation, the exact Cartier-twist sequence, its connecting map, and the finite-jet trace tests for the kernel. |
| 21 | `lem-local-residue-annihilator-regular-sections` | Accept | Both annihilator claims use finite Laurent coefficients and the nondegenerate separable trace form; no dual of a completed Laurent space is asserted. |
| 22 | `lem-global-residue-pairing-injective-left` | Accept | The proof first obtains a nonzero stalk coefficient, then constructs a principal part pairing nontrivially. This proves injectivity only; item 25 supplies the independent dimension equality. |
| 23 | `lem-twisting-sheaf-projective-space-ample` | Accept; reuse current receipt | `O(1)` is closed H-very ample via the identity embedding; the stated ampleness consequences use their exact suppliers. |
| 24 | `cor-projective-embedding-every-smooth-proper-curve` | Accept | The actual route uses the current proper-normal-curve rational-function map, finite pullback of `O(1)`, and the ample-powers theorem; it does not depend on the old bounded-pole/finite-map escalation text. |
| 25 | `lem-global-residue-pairing-dimension-balance` | Accept | Published smooth-projective duality gives equality of the finite dimensions; combined with item 22’s injection this, and only this, gives perfectness of the residue pairing. |
| 26 | `thm-serre-duality-curves-line-bundles` | Accept | The arbitrary-field pairing is the fixed Gysin-trace pairing; over perfect fields the rational-point Koszul normalization gives `t_C = −residue-sum`, and Cartier connecting maps give the same sign for every line bundle. |
| 27 | `thm-serre-duality-curves-vector-bundles` | Accept | This is the `n=q=1` specialization of published smooth-projective duality with `ω_C=Ω¹_{C/k}`. |
| 28 | `thm-serre-duality-curves-coherent-sheaves` | Accept | A coherent sheaf has a two-term finite locally free resolution. The Hom and Ext pairings are defined from global Ext; the cohomology and Ext long exact sequences are dualized, and the connecting square is checked with positive Yoneda sign before applying the five lemma. No `Ext²` vanishing is used. |
| 29 | `cor-h1-line-bundle-dual-sections` | Accept | The current Cartier/rational-section dictionary identifies `ω_C⊗O_C(−D)` with `O_C(K_C−D)`; the current Riemann–Roch `l−i` identity and `L(D)=H⁰(O_C(D))` give the displayed corollary. |

## Supplier and remaining-gap disposition

No mathematical gap remains in the 29 current item bodies or in the
load-bearing routes checked above. The specific old escalation reasons for
items 16–22, 24, 25–27 and 29 describe supplier files as absent; those files
are now present, and I read the actual current interfaces and consuming
steps. In particular:

- `def-principal-parts-sheaf-line-bundle-curve` steps defining finite support
  use current `lem-principal-weil-divisor-locally-finite` and
  `thm-line-bundle-rational-section-cartier-divisor` bodies.
- `lem-residue-pairing-functorial-line-bundle` steps 1.3, 2.2 and 5.1 use
  current `cor-twist-exact-sequence-effective-divisor` and its stated
  connecting map.
- `cor-projective-embedding-every-smooth-proper-curve` uses
  `lem-proper-normal-curve-rational-function-map`; its old B7 bounded-pole
  escalation route is no longer the live proof route.
- `cor-h1-line-bundle-dual-sections` steps 4.1, 5.1 and 6.1 use the current
  Cartier/rational-section dictionary and Riemann–Roch `l−i` chain. The
  current `def-riemann-roch-space-of-divisor`, one-point exact sequence,
  one-point Euler shift, positive/negative divisor chain, and Euler
  characteristic shift bodies establish the required route. Their old
  escalation receipts remain stale; I did not treat those receipts as
  mathematical rejections.

Operationally, the actual Step 3 API still prevents any receipt now: the B8
pair scope is not recorded closed, and stale owner escalation receipts require
owner `reopen` before reviewer replacement. These are the exact remaining
actions before ordinary receipts can be written. In the read-only
`itemDecision` snapshot, items 1–4 and 6–15 report `current item audit
required`; items 16–22 and 24–29 report an owner-held historical escalation;
items 5 and 23 are closed by current accepted receipts and should remain
untouched. The item 29 dictionary/Riemann–Roch route was read through the
current bodies of `def-riemann-roch-space-of-divisor`,
`def-index-speciality-divisor`, `thm-riemann-roch-as-l-minus-index`,
`thm-riemann-roch-euler-characteristic-curve`,
`thm-euler-characteristic-degree-shift-curve`,
`lem-divisor-decomposition-positive-negative-points`,
`lem-add-one-point-euler-characteristic`, and
`lem-add-one-point-exact-sequence-line-bundle`. The old receipts for those
in-run suppliers still cite earlier missing-file reasons; I verified their
current proofs against the divisor dictionary, the point sequence, and the
finite-support principal-parts route. Root should decide when those historical
supplier holds have been reopened/refreshed. No blanket acceptance of
upstream items is implied by this report.

## Sources and route notes consulted

I read the current full proofs and the load-bearing suppliers named above,
including the current finite-potent trace/Tate foundation, abstract residue
and local residue routes; the principal-parts, cohomology and connecting-map
routes; the Cartier/rational-section dictionary; the proper-normal-curve
function map; and the smooth-projective, vector-bundle and coherent-sheaf
duality routes. I used the prior `residue-principal-parts`, `tate-foundations`,
`tate-residue-tail`, residue-duality, canonical-interface, and degree reports
to find the delicate arguments, then checked each against the current item
and supplier text rather than treating prior dispositions as proof acceptance.
