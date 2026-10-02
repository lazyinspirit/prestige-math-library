# RR-adjacent B7 supplier audit

Audit date: 2026-10-01. Scope is limited to these six stable B7 item bodies:

* `lem-divisor-order-monotonicity-sections`
* `lem-add-one-point-euler-characteristic`
* `lem-divisor-decomposition-positive-negative-points`
* `lem-projective-line-divisors-classified-by-degree`
* `cor-degree-zero-line-bundle-section-trivial`
* `cor-nontrivial-degree-zero-line-bundle-no-sections`

I read each full target body and its current loadbearing interfaces. The first
three use the Euler-characteristic, finite-dimensionality, and exact-sequence
route; this audit records their interfaces without taking over or recertifying
those separate suppliers. The last three use the Cartier/Weil/Picard dictionary
and the plane-cubic map-to-\(\mathbb P^1\) route; this audit does not take over
the separate Picard/Riemann--Hurwitz supplier work.

## Current source state

The repeated target-body statements that listed sources were “not yet authored
on disk” are stale. The named files are now present, including
`def-riemann-roch-space-of-divisor`,
`def-principal-weil-divisor-and-class-group`,
`def-invertible-sheaf-of-cartier-divisor`,
`thm-line-bundle-rational-section-cartier-divisor`,
`cor-degree-descends-picard-curve`,
`thm-cartier-weil-divisors-curves-agree`,
`thm-cartier-divisors-mod-principal-to-picard`,
`lem-add-one-point-exact-sequence-line-bundle`, and
`lem-riemann-roch-space-finite-dimensional`. These files remain `draft`; their
presence resolves missing authoring, not mathematical acceptance. In
particular, the current exact-sequence lemma states and proves the one-point
short exact sequence and the effective-shift cokernel facts used by the Euler
characteristic lemma, while the current finite-dimensionality lemma explicitly
assumes AC.

The `def-axiom-of-choice` and AC-to-DC implication are published. The current
smooth-plane-curve genus corollary is also on disk as a draft. Its proof derives
geometric integrality from smoothness using the projective hypersurface's
actual local equations, Bezout intersections, and the local Jacobian
criterion, then computes the genus in arbitrary field characteristic. That
provides the existing route for the plane-cubic scope note below; its draft
status does not itself certify that route.

## Item-by-item findings

| Item | Proof-route audit | Current local finding |
| --- | --- | --- |
| `lem-divisor-order-monotonicity-sections` | The chosen uniformizer map is `f ↦ t^(a+1) f mod (t)`, where `a` is the coefficient of `D` at `p`. Its kernel is exactly the order condition for `L(D)`; the quotient embeds in `kappa(p)`, and adding the finitely many points gives the degree bound. | One real premise defect: the proof uses the AC-dependent `lem-riemann-roch-space-finite-dimensional`, but the Statement does not assume AC. Either state the inherited AC premise or replace that route. The Statement also calls the evaluation map canonical although its displayed construction depends on a chosen uniformizer; say “choose a uniformizer `t`” (the kernel and bound are independent of that choice). Its own `deps` omits the four B5/B6 interfaces it explicitly names: `def-riemann-roch-space-of-divisor`, `def-principal-weil-divisor-and-class-group`, `def-invertible-sheaf-of-cartier-divisor`, and `thm-cartier-weil-divisors-curves-agree`. |
| `lem-add-one-point-euler-characteristic` | Additivity applied to the current exact-sequence supplier gives the one-point identity; the current supplier's `Q_E` sequence, vanishing, and dimension formula give the effective-divisor identity. | No independent gap found in this target conditional on its declared supplier. Its “not yet authored” language is stale: the exact-sequence file is present with the needed current interface, but is still draft. Keep certification of that supplier and its cohomology inputs with their owners. |
| `lem-divisor-decomposition-positive-negative-points` | Expand positive and negative coefficients into finite signed symbols, apply the one-point shift to each addition or removal, and telescope. The signed residue-degree total is independent of the ordering. | No independent proof gap found conditional on the one-point Euler result. Its flagged `def-invertible-sheaf-of-cartier-divisor` and `thm-cartier-weil-divisors-curves-agree` files are present but absent from this item's `deps`; reconcile the direct dependency list. The Statement does assume AC. |
| `lem-projective-line-divisors-classified-by-degree` | The two standard charts identify finite closed points with monic irreducibles; a monic irreducible `g` has order `1` at `V(g)` and `-deg(g)` at infinity. UFD factorization then reduces every divisor to its degree times infinity. The chart and divisor calculations support all fields. | No intrinsic proof gap found. Its Cartier/Weil and line-bundle steps rely on present but draft sources. Explicitly named direct sources absent from `deps` include `def-invertible-sheaf-of-cartier-divisor`, `thm-line-bundle-rational-section-cartier-divisor`, `thm-cartier-weil-divisors-curves-agree`, `def-principal-weil-divisor-and-class-group`, and `cor-degree-descends-picard-curve` (used for the degree of `O(1)`). Its “not yet authored” text is stale. |
| `cor-degree-zero-line-bundle-section-trivial` | A nonzero section gives an effective divisor; degree descent and nonnegative effective degree force the divisor to vanish, so the line bundle is trivial. The converse uses `H^0(C,O_C)=k`. | One genuine proof-interface gap: `thm-line-bundle-rational-section-cartier-divisor` takes a **nonzero rational section** as input; it does not by itself show that a nonzero global section has nonzero generic germ. Prove this using integrality and local freeness, or cite `lem-nonzero-map-invertible-to-locally-free-injective` (currently draft) and declare it. Also declare the explicitly used direct sources `def-invertible-sheaf-of-cartier-divisor`, `thm-line-bundle-rational-section-cartier-divisor`, and `cor-degree-descends-picard-curve`; these are present but draft. The current claim that the global-to-rational-section fact is supplied by the rational-section theorem is inaccurate. |
| `cor-nontrivial-degree-zero-line-bundle-no-sections` | The general vanishing is the contrapositive of the preceding corollary. In the integral plane-cubic instance, a hypothetical trivialization yields a function with divisor `P-Q`, hence a degree-one finite map to `P^1`, an isomorphism of smooth proper curves, and the genus contradiction. | The conditional proof is sound with its stated suppliers. The item still narrows the smooth-cubic promise to an already integral “plane cubic curve” and records the passage from a smooth pure one-dimensional plane cubic as open. The current `cor-genus-degree-smooth-plane-curve` supplies that passage: its scheme-level proof establishes geometric integrality from smoothness, and gives genus one for degree three. Reconcile the item with this existing draft route rather than treating the mathematical result as absent. The counterexample does not currently declare that corollary. Also missing from its `deps`, though explicitly used in Facts, are `def-invertible-sheaf-of-cartier-divisor`, `thm-line-bundle-rational-section-cartier-divisor`, `cor-degree-descends-picard-curve`, `thm-cartier-divisors-mod-principal-to-picard`, and `def-principal-weil-divisor-and-class-group`. |

Five Statements explicitly assume AC; the first target is the exception and
needs the premise correction above. All six `Facts & Assumptions` **Given**
sentences omit AC even where their Statements state it; align those checkable
inputs with the declared premise. The AC accounting in
`cor-degree-zero-line-bundle-section-trivial` also omits its use of the
AC-assuming `thm-h0-structure-sheaf-proper-curve` in the converse, although AC
is already a Statement premise. No field or characteristic restriction was
found in the six claims; the smooth-plane-cubic bridge is valid over arbitrary
fields and characteristics under its current AC premise.

## Stable target hashes

The six mathematical item files were read-only throughout this audit. Their
SHA-256 hashes are:

* `lem-divisor-order-monotonicity-sections`:
  `c5e9c9d9160e7f9137f216662233cbcba53bf8b8732cbfc45022c536b860c04e`.
* `lem-add-one-point-euler-characteristic`:
  `0d5fbaa6872d6b70adda9a06f315c3eec412544a07dd03b7b446b77c80ca9227`.
* `lem-divisor-decomposition-positive-negative-points`:
  `83bf829ef762581c5f1795a17d4b6c9d16f0309f82559c8c4679b15a34ee41e2`.
* `lem-projective-line-divisors-classified-by-degree`:
  `e29c34595f41d60460a2c8d882db2948db00379d5ec9ea3649d9142d9c9aff4e`.
* `cor-degree-zero-line-bundle-section-trivial`:
  `1f6bbb32043a03185fb2b9487134d3ad418d5577c0504e257ae5d064ae5f0ac8`.
* `cor-nontrivial-degree-zero-line-bundle-no-sections`:
  `e85fb46b13e37c814d8e77350a44882edde16ffefa1cde382284cd521d5b55cb`.

This audit changed only this report. It records no receipts, carrier edits,
scope decisions, strict checks, or gates, and it does not mark any draft source
as accepted.
