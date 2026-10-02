# Frontier 37 owner 30, batch 8: residue and duality audit

Date: 2026-10-01. This report records the detailed audit of the eleven
authorized residue-core items listed below. The other 47 batch-8 IDs are
enumerated for scope clarity but are not audited in this report. No receipts,
item decisions, shared gate state, plans, ledgers, or source-decline records
were changed here.

## Batch-8 inventory

The 58 audit subjects from `research/frontier-37-owner-30-batch-8.pages.json`
are enumerated here. **Bold IDs** are the eleven items audited in detail in
this report; the remaining IDs are listed only and have no findings here.

### A page (47 items)

1. `lem-uniformizer-differential-is-a-basis`
2. `def-residue-rational-differential-curve-point`
3. `lem-residue-independent-uniformizer`
4. `lem-residue-exact-differential-zero`
5. `lem-finite-potent-trace-existence-and-uniqueness`
6. **`def-commensurable-subspaces-and-ideals-of-endomorphisms`**
7. **`lem-finite-potent-trace-linearity-and-conjugation`**
8. **`lem-e-ideals-and-commutator-trace`**
9. **`thm-abstract-residue-exists-unique`**
10. **`lem-abstract-residue-basic-properties`**
11. **`lem-abstract-residue-additivity`**
12. **`lem-abstract-residue-trace-under-finite-free-extension`**
13. **`cor-coefficient-trace-residue-agreement`**
14. `lem-adelic-quotient-computes-h1-structure-sheaf`
15. `thm-global-residue-theorem-algebraic-curve`
16. `def-principal-parts-sheaf-line-bundle-curve`
17. `lem-principal-parts-cech-h1-presentation`
18. **`def-residue-pairing-principal-parts`**
19. `lem-residue-pairing-descends-cohomology`
20. **`lem-residue-pairing-functorial-line-bundle`**
21. **`lem-local-residue-annihilator-regular-sections`**
22. `lem-global-residue-pairing-injective-left`
23. `lem-twisting-sheaf-projective-space-ample`
24. `cor-projective-embedding-every-smooth-proper-curve`
25. `lem-global-residue-pairing-dimension-balance`
26. `thm-serre-duality-curves-line-bundles`
27. `thm-serre-duality-curves-vector-bundles`
28. `thm-serre-duality-curves-coherent-sheaves`
29. `cor-h1-line-bundle-dual-sections`
30. `thm-full-riemann-roch-divisor`
31. `cor-h0-canonical-differentials-genus`
32. `cor-canonical-degree-two-g-minus-two`
33. `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`
34. `cor-rr-exact-high-degree-formula`
35. `thm-degree-two-g-line-bundle-basepoint-free`
36. `thm-degree-two-g-plus-one-line-bundle-very-ample`
37. `def-hyperelliptic-curve`
38. `thm-canonical-map-nonhyperelliptic-curve`
39. `thm-adjunction-smooth-plane-curve`
40. `cor-genus-degree-smooth-plane-curve`
41. `lem-degree-pullback-divisor-finite-morphism-curves`
42. `thm-riemann-hurwitz-complete`
43. `cor-unramified-cover-curves-genus-complete`
44. `thm-genus-one-canonical-bundle-trivial`
45. `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic`
46. `rem-duality-trace-normalization`
47. `rem-general-serre-duality-deferred`

### B page (11 items)

1. `ex-residue-projective-line`
2. `ex-serre-duality-projective-line-twists`
3. `ex-full-rr-projective-line`
4. `ex-genus-one-rr-degree-positive`
5. `ex-plane-cubic-canonical-trivial`
6. `ex-plane-quartic-canonical-hyperplane`
7. `cex-canonical-map-hyperelliptic-not-embedding`
8. `cex-degree-two-g-minus-one-not-always-basepoint-free`
9. `cex-degree-two-g-not-always-very-ample`
10. `ex-riemann-hurwitz-double-cover`
11. `ex-residue-pairing-one-cocycle`

## Audit results and repairs

The eleven owned items preserve their promised claims. The checks found and
repaired the following proof or carrier defects:

- `lem-finite-potent-trace-linearity-and-conjugation`: retained Tate's exact
  finite-potent-family condition; corrected the rectangular trace identity to
  `Tr_V(φψ)=Tr_V′(ψφ)` with its typed domains; supplied the stabilized-image
  inclusion in (T5); and made the (T6)(a)/(b) common finite-potent subspaces
  explicit. Finite-image maps form an exponent-one family; `E_0` has exponent
  two. The final proof summary now points to its actual second (T6)(b) step,
  `14.2`.
- `def-commensurable-subspaces-and-ideals-of-endomorphisms` and
  `lem-e-ideals-and-commutator-trace`: kept the image of `K` only in `E`, typed
  the commensurability/transitivity argument using finite-error witnesses, and
  made the `E_0` exponent-two and projection arguments explicit.
- `thm-abstract-residue-exists-unique`: supplied the `K`-module action
  `a·(f⊗g)=(af)⊗g`, checked stability of the bilinearity and Leibniz relation
  subspaces, and derives `dλ=0` from `1⊗1=0` and `k`-bilinearity.
- `lem-abstract-residue-basic-properties`: restored Tate's full (R2)
  hypothesis `fA+fgA+fg²A⊂A`, rather than the scaffold's refuted
  `fg⁻¹` variant or a weakened substitute. The proof uses the projection onto
  `A` and the actual nilpotent-trace result. In Step 4.2, `(θV+A)/A` is now
  correctly identified as the image of `θV` in the assumed finite-dimensional
  space `V/A`, hence a subspace, not a quotient of `V/A`. Step 4.6 records that
  `πm_h` and `π_gm_h` preserve `N`; it is their difference `θ` that kills
  `N`. No commutation of either projection with multiplication is assumed.
- `lem-abstract-residue-additivity`: the two trace differences use separately
  proved common finite-potent subspaces. The `A⊂A+B` family has exponent 3;
  the `A∩B⊂B⊂A+B` family has exponent 4. Thus the proof does not assume
  arbitrary finite-potent endomorphisms are closed under addition.
- `lem-abstract-residue-trace-under-finite-free-extension`: retained rank zero
  with empty trace, finite `k`-witnesses for each matrix coefficient, an
  exponent inherited independently of extension rank, a basis-extension
  construction of the projection, and the triangular trace decomposition
  inside the resulting common finite-potent matrix subspace.
- `cor-coefficient-trace-residue-agreement`: corrected the coefficient to
  `m a_n b_m` in the sum over `n+m=0`; the scaffold's `n` coefficient is false
  (take `f=t⁻¹`, `g=t`). The formal derivative is used only for coefficient
  extraction through its map out of algebraic Kähler differentials; the proof
  never identifies `Ω¹_{k((t))/k}` with `k((t))dt`. Truncating both series
  proves the general formula without differentiating an infinite series in
  algebraic Kähler differentials.
- `def-residue-pairing-principal-parts` and
  `lem-local-residue-annihilator-regular-sections`: the second local factor is
  required to be regular. Actual local rings and function fields remain
  distinct from their completions. The local proof justifies finite-jet lifts
  from `O_{C,p}` and tests the first nonzero negative coefficient using the
  nondegenerate trace form; it makes no assertion about algebraic duals of
  completed Laurent-series spaces.
- `lem-residue-pairing-functorial-line-bundle`: corrected the sign in
  `O(D)|_U=f⁻¹O_U`, states adjunction with the restriction map to the finite
  local dual, and identifies the kernel with the image of the natural
  inclusion `H⁰(ω_C⊗L′⁻¹)→H⁰(ω_C⊗L⁻¹)`. Step 2.2 now displays the naturality
  diagram from the divisor sequence to the principal-parts sequence, so the
  local lifts representing `δ(g)` are explicit.

The helper edits repaired source fidelity and typed steps without weakening
any promised residue, pairing, or duality statement. The fixed-trace
normalization comparison is outside this eleven-item audit.

## Supplier and escalation disposition

The original Step 3b records for this slice show eight prior accepts and three
owner-held escalations. All eleven review hashes are now stale because the
authorized item proofs changed; this audit wrote no replacement reviews or
receipts. Root owns the final minimal recertification.

The three prior escalations were supplier-evidence holds, not remaining proof
gaps in the repaired eleven items:

- `def-residue-pairing-principal-parts` and
  `lem-local-residue-annihilator-regular-sections` were held through the
  canonical-bundle chain on `thm-line-bundle-rational-section-cartier-divisor`.
  That supplier file is now on disk and its rational-section/divisor interface
  was read. The old review reason is stale; it was not reopened here.
- `lem-residue-pairing-functorial-line-bundle` was held on the old
  `cor-twist-exact-sequence-effective-divisor` scaffold. Its current frontmatter
  instead declares the existing exact-sequence, sheaf, and principal-parts
  suppliers, and the exact local sequence and connecting-map route are proved
  inline. The old missing-supplier reason is stale. No accept or escalation
  decision was written.

The separability boundary is explicit throughout: the uniformizer-basis and
coefficient-trace statements apply at closed points with finite separable
residue field. The all-closed-point curve statements assume `k` perfect. No
imperfect-field closed point is silently treated as having `dt` as a basis.

## Authoritative source check

The full text of Tate's *Residues of differentials on curves* (1968), pp.
149–159, was read. In particular, §1, journal p. 150 gives (T1)–(T5),
including the finite-potent-family reading of (T4) and typed cyclicity (T5);
Propositions 1–2 and Theorem 1, pp. 151–152, give the `E`-filtration,
commutator trace, and abstract residue; (R2)–(R5), pp. 152–153, give the full
continuity condition, power/logarithmic formulas, and additivity; and (R6),
journal p. 154, is the finite-free trace formula. The current `R2` proof and
`R5` trace comparisons were checked against these passages, not the corrupted
scaffold wording.

The local/global residue inputs were also checked against the current
coefficient-trace and principal-parts suppliers. Their hypotheses retain
finite separability where needed; perfectness is what extends the coefficient
formula to every closed point of a curve. The proof-contract source rows cite
the actual numbered statements used, including the general derived
long-exact-sequence and principal-parts presentations for the connecting-map
route.

## Scoped-file digest

SHA-256: `731ceedd73c694397132ad9db9ea25c7788cf3dce5c8970702bde863c862985f`.
The digest covers the eleven audited item files (raw bytes), their eleven
contract objects, their eleven batch-8 manifest item rows, and the A-page
coverage row. JSON objects are serialized with sorted keys, compact separators,
and UTF-8; each record is length-prefixed by its record type, key, and payload
before hashing. The audit report itself is not included.

## Validation and review state

- Targeted `precheck`: 9 proof-bearing files checked, 0 failures.
- Targeted `rendercheck`: all 11 files passed.
- Targeted strict proof-contract audit: 0 errors, 0 warnings, 11/11 items.
- The two definition cards have no numbered proof body and therefore are not
  counted by precheck; both passed rendercheck and strict contract validation.
- No item decision, receipt, or shared gate was retried or refreshed.
