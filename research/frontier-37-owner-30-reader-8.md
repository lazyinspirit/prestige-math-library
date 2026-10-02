# Step 5a reader report — batch 8

Run: `frontier-37-owner-30`  
Role: reader (`reader-8`)  
Scope: A page `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` and B page `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples`.

## Run state and opened pages

- Recomputed `.autopilot/frontier-37-owner-30` with the autopilot status command on 2026-10-01. The run is `running`, Step 5a reader batch 8 is missing, and no workers are in flight. The manifest is therefore in the active run scope.
- Read `research/frontier-37-owner-30-batch-8.pages.json` and `briefs/reader.md`; the manifest lists 47 A items and 11 B examples.
- Opened `library/scheme-theory/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.md` and `library/scheme-theory/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples.md`.
- A-page verdict: sound after two proof-only repairs; the page summary agrees with the reviewed item scope.
- B-page verdict: sound; the summary agrees with all 11 reviewed examples. B-page prose was read-only under this dispatch.

## Item review checkpoint

Reviewed in manifest order (15 of 58):

1. `lem-uniformizer-differential-is-a-basis` — argument and hypotheses are sound; the cotangent isomorphism, Nakayama, localization and completion steps match the cited suppliers.
2. `def-residue-rational-differential-curve-point` — definition is well-defined under its finite separable residue-field hypothesis; the Hensel coefficient-field and power-series identification argument is supported by its listed suppliers.
3. `lem-residue-independent-uniformizer` — change-of-parameter comparison is sound in all characteristics; the universal characteristic-zero polynomial identity correctly specializes integrally.
4. `lem-residue-exact-differential-zero` — formal derivative computation and its passage through the universal property are sound in all characteristics.
5. `lem-finite-potent-trace-existence-and-uniqueness` — existence, independence, T1–T3, and uniqueness are supported by the finite-dimensional quotient arguments.
6. `def-commensurable-subspaces-and-ideals-of-endomorphisms` — repaired the unconditional chain in the final paragraph. The corrected proof conditions each chain on membership in the corresponding $E$ and explicitly derives equality of $E_1$ and $E_2$ from transitivity and finite-dimensional error spaces.
7. `lem-finite-potent-trace-linearity-and-conjugation` — common finite-dimensional stabilization, rectangular trace, and both commutator cases are sound.
8. `lem-e-ideals-and-commutator-trace` — algebra/ideal decomposition and trace consequences are sound.
9. `thm-abstract-residue-exists-unique` — lift independence, bilinearity, Leibniz relation and descent to Kähler differentials are sound.
10. `lem-abstract-residue-basic-properties` — restriction, continuity, power and logarithmic residues, and finite-quotient trace calculation are sound on the stated stable pairs.
11. `lem-abstract-residue-additivity` — stability of the sum/intersection and the two finite-potent comparison spaces support the additivity identity.
12. `lem-abstract-residue-trace-under-finite-free-extension` — the coordinate matrix argument and finite-potent trace formula are sound, including the rank-zero case.
13. `cor-coefficient-trace-residue-agreement` — Laurent truncation and finite-free coefficient trace give the stated formal-field coefficient formula. Its local-field residue restricts to the embedded rational function field on each generator $f\,dg$, by the common defining commutator formula.
14. `lem-adelic-quotient-computes-h1-structure-sheaf` — restricted product, sheaf resolution, cohomology quotient, and constant-field arguments are sound on the stated proper geometrically integral curve.
15. `thm-global-residue-theorem-algebraic-curve` — the local abstract-residue restriction, adelic additivity, finite-support and tail arguments are sound; the local block residue agrees with the coefficient-trace formula.

Reviewed in manifest order (remaining 32 A items):

16. `def-principal-parts-sheaf-line-bundle-curve` — the rational-section quotient, quasi-coherence and finite-support skyscraper description are sound.
17. `lem-principal-parts-cech-h1-presentation` — the principal-parts exact sequence and flasque long-exact-sequence computation give the stated cokernel.
18. `def-residue-pairing-principal-parts` — the local product is representative-independent modulo regular differentials, and finite support makes the pairing sum finite.
19. `lem-residue-pairing-descends-cohomology` — global residue vanishing kills rational-section changes; regular local changes have zero residue.
20. `lem-residue-pairing-functorial-line-bundle` — multiplication and Cartier-boundary formulas, lift independence and local annihilator tests are sound under separability of closed residue fields.
21. `lem-local-residue-annihilator-regular-sections` — both local annihilators follow from finite Laurent tests and the nondegenerate trace form.
22. `lem-global-residue-pairing-injective-left` — a nonzero local coefficient of a nonzero global dual section supplies a detecting principal part.
23. `lem-twisting-sheaf-projective-space-ample` — the identity immersion and cited ample/power/pullback results give the claims.
24. `cor-projective-embedding-every-smooth-proper-curve` — a transcendental function supplies a finite map to the line; finite pullback and ample powers give projectivity.
25. `lem-global-residue-pairing-dimension-balance` — smooth-projective duality gives equal finite dimensions; injectivity then gives perfectness.
26. `thm-serre-duality-curves-line-bundles` — arbitrary-field duality and perfect-field sign comparison are supported by the cited fixed-trace, Ext, Koszul and base-change suppliers; Tate’s local/global residue argument was checked against §3, Theorems 2–3, pp. 155–157.
27. `thm-serre-duality-curves-vector-bundles` — this is the degree-one specialization of the smooth-projective finite locally free duality theorem.
28. `thm-serre-duality-curves-coherent-sheaves` — the finite locally free resolution and the two exact-sequence comparisons support both global-Ext dualities.
29. `cor-h1-line-bundle-dual-sections` — line-bundle duality and the divisor dictionary give the claimed identity.
30. `thm-full-riemann-roch-divisor` — repaired step 4.1: for $K_C'=K_C+\operatorname{div}(f)$, multiplication by $f$ maps $L(K_C'-D)$ to $L(K_C-D)$, with inverse multiplication by $f^{-1}$.
31. `cor-h0-canonical-differentials-genus` — duality and the genus definition give the two dimension identities.
32. `cor-canonical-degree-two-g-minus-two` — evaluating full Riemann–Roch at a canonical divisor gives the degree formula.
33. `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` — the dual twist has negative degree and therefore no sections; Riemann–Roch gives the exact count.
34. `cor-rr-exact-high-degree-formula` — this correctly translates high-degree vanishing into nonspeciality and the exact divisor formula.
35. `thm-degree-two-g-line-bundle-basepoint-free` — geometric-point evaluation after algebraic closure, degree preservation and faithful-flat descent prove generation.
36. `thm-degree-two-g-plus-one-line-bundle-very-ample` — separation of geometric pairs and first jets, followed by the finite local algebra and descent arguments, supports the embedding claim.
37. `def-hyperelliptic-curve` — the split/geometric distinction, positive-genus gonality criterion and degree-two linear-system criterion are correctly qualified.
38. `thm-canonical-map-nonhyperelliptic-curve` — point/tangent failure produces a degree-two map; the finite local criterion and descent support the canonical embedding criterion.
39. `thm-adjunction-smooth-plane-curve` — the conormal adjunction calculation gives $\omega_C\cong\mathcal O_C(d-3)$; the hypothesis that $F$ is a degree-$d$ form with $d\ge1$ makes it nonzero under the repository’s form convention.
40. `cor-genus-degree-smooth-plane-curve` — smoothness forces geometric integrality; weighted Bézout and adjunction yield the genus formula.
41. `lem-degree-pullback-divisor-finite-morphism-curves` — finite maps are flat over the DVR target, and the fibre-degree sum gives pullback degrees.
42. `thm-riemann-hurwitz-complete` — the separable canonical/different formula and pullback-degree identity give the displayed formula.
43. `cor-unramified-cover-curves-genus-complete` — étaleness kills relative differentials; surjectivity and separability are justified before applying Riemann–Hurwitz.
44. `thm-genus-one-canonical-bundle-trivial` — degree zero plus a nonzero canonical section gives triviality and a principal canonical divisor.
45. `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` — Riemann–Roch, very ampleness, the homogeneous ideal and weighted Bézout prove the image is a cubic.
46. `rem-duality-trace-normalization` — its summary matches the sign and field qualifications proved by the line-bundle duality theorem.
47. `rem-general-serre-duality-deferred` — the three curve duality statements and global-Ext scope match their supplier theorems.

Also opened the needed dependency files `thm-riemann-roch-as-l-minus-index.md`, `thm-riemann-roch-euler-characteristic-curve.md`, `thm-canonical-bundle-ramification-formula.md`, `cor-degree-zero-line-bundle-section-trivial.md`, and `def-degree-projective-hypersurface.md`, plus published normalization dependencies `lem-smooth-projective-rational-point-koszul-residue-normalization.md` and `lem-smooth-projective-embedding-gysin-trace-compatibility.md`.

Reviewed in manifest order (11 B examples):

1. `ex-residue-projective-line` — the finite-point and infinity parameters give the stated coefficients; the arbitrary-differential sum uses the global residue theorem, and the supported class has positive residue $1$ and fixed trace $-1$.
2. `ex-serre-duality-projective-line-twists` — the two twisting-sheaf bases pair by $\delta_{j,m+1}$, with the fixed trace sign correctly negative.
3. `ex-full-rr-projective-line` — the $d\ge0$, $d=-1$, and $d\le-2$ section counts give Riemann–Roch in every degree.
4. `ex-genus-one-rr-degree-positive` — nonspeciality gives $h^0=n$; the degree-one case correctly forces a rational effective divisor.
5. `ex-plane-cubic-canonical-trivial` — adjunction and the genus formula give the trivial canonical bundle; no rational point is inferred for every cubic.
6. `ex-plane-quartic-canonical-hyperplane` — the hypersurface sequence identifies the canonical sections with linear forms, yielding the plane embedding.
7. `cex-canonical-map-hyperelliptic-not-embedding` — the Veronese factorization prevents a closed immersion; the generic geometric fiber qualification is correct.
8. `cex-degree-two-g-minus-one-not-always-basepoint-free` — $K_C+p$ has degree $2g-1$ and all sections vanish at the rational point $p$; the example applies to any curve in its hypotheses, so it specializes to hyperelliptic examples with a rational point.
9. `cex-degree-two-g-not-always-very-ample` — the two-jet calculation shows the complete system has zero differential at $p$; the genus-one double-cover case is separately justified.
10. `ex-riemann-hurwitz-double-cover` — the fibre-degree identity fixes the rational residue degrees over branch points, and the tame different gives the stated genus.
11. `ex-residue-pairing-one-cocycle` — the one-cocycle and section bases pair by the identity matrix; the fixed Gysin matrix is its negative.

## Source checked

- John Tate, “Residues of differentials on curves,” *Ann. Sci. École Norm. Sup.* (4) 1 (1968), pp. 149–159, [Numdam full text](https://www.numdam.org/item/10.24033/asens.1162.pdf). Consulted §2, Theorem 1 and properties (R1)–(R6), printed pp. 151–154, and §3, Theorem 2 (printed p. 155) and Theorem 3 with proof (printed pp. 155–157). These passages support the abstract-residue construction, commensurability/continuity/power properties, additivity, finite-free trace, local coefficient formula, and global adelic argument.

## Edits and validation

- Repaired `items/def-commensurable-subspaces-and-ideals-of-endomorphisms.md` in its final Definition paragraph. Updated its proof-contract `iff-forward` and `iff-reverse` evidence with the class-invariance directions; the Definition has no numbered Proof section, so no derivation entry applies. The item had no `verification.judge` record. `reflow.mts` reported unchanged and `precheck.mts` reported 0 failing.
- Repaired `items/thm-full-riemann-roch-divisor.md`, step 4.1, by reversing the claimed multiplication isomorphism and naming its inverse. Updated the step 4.1 claim in the batch-8 proof contracts; the item had no `verification.judge` record. Reflow completed and precheck passed (1 checked, 0 failing).
- No other content was edited.

## Unresolved obligations and next action

- Opened all 58 assigned items, both assigned pages, and the dependencies needed to verify their claims. Tate’s §3, Theorems 2–3 and proofs, printed pp. 155–157, gives the local coefficient formula and global adelic decomposition; the local abstract-residue restriction follows from the shared commutator formula on $f\,dg$.
- No uneditable defect or blocker remains. Both page verdicts are final; the findings array is empty.
