# frontier-34 / beta / batch-5 — BLOCKED scaffold

This is a reviewable scaffold, **not ready for publication or consumer use**. It preserves the entire assigned NT-22 inventory: 24 A items and 7 B items. The A page is below the 60-item plan limit. No new prerequisite pair is needed for the geometric supporting lemmas, which fit here. Published supplier defects and incomplete semantic closure remain fatal; the three writable batch artifacts cannot repair published statements or dependency interfaces.

## Scope and plan comparison

Read CLAUDE.md fully, README.md, SCHEMA.md, WORKFLOW.md, both beta task files, the complete NT-22 design and its NT-23 context, current plan rows, and frontier-34 alpha step-0 drift evidence. After context compaction, reread the generated manifest, complete NT-22 design, open supplier obligations, source text for Green’s proof and Milne’s Hermite construction, and the current plan. Historical RESUME claims were not used as run authority; inspected the active `.autopilot/frontier-34` evidence and git history.

The current plan controls: A order 365.917, B order 365.918, number-theory; A requires `decomposition-inertia-and-frobenius-examples`, B requires A. These agree with the dispatch. The canonical plan currently has empty item inventories for both pages. The design’s broader NT-19/NT-20, CA-9 and Euclidean-volume requirements resolve through the earlier page closure; no extra page requirement was silently inserted. An overlaid plan was checked only in `/tmp`, not written to the canonical plan.

Design/source conflicts:

- Milne’s current v3.08 numbering differs materially from the design: Blichfeldt is 4.17, compact Minkowski 4.19, covolume 4.26, small element 4.27, class bound 4.3 (proof p.81), class finiteness 4.4, and ramification 4.9. The manifest/coverage use the fetched version’s actual locators.
- Stein’s class bound is Theorem 7.1.2, convex-body result Lemma 7.1.5, and small-prime generation Lemma 7.3.1; the design’s theorem numbers are stale.
- Dummit Part 9 does not contain successive minima or the second theorem. Green §3.7 was independently read and reharvested for the upper proof; Waldschmidt supplies the two-sided statement and the octahedron volume. Both bounds are retained. Original candidate URLs are retained in coverage.
- “Product region” in the design is made precise as the convex weighted-sum ball, not a norm-product sublevel set. The exact factor `(4/pi)^r2` is preserved.
- The design’s no-additional-Choice claim conflicts with its mandatory CA-9 supplier; see F1. This scaffold does not authorize weakening that target or accepting AC as its resolution.

## Exact additions and proof obligations addressed

All original 16 A and 7 B IDs are retained, with explicit dependency arrays, statements, source locators and proof plans. Added eight supporting A items in proof order:

1. `lem-full-lattice-fundamental-domain-and-bounded-points`: half-open tiling and bounded lattice finiteness.
2. `cor-minkowski-convex-body-theorem-at-equality`: compact equality case, using a finite intersection argument rather than an infinite selection.
3. `lem-successive-minima-attainment-and-adapted-flag`: positivity, attainment, tied minima, and the interior-volume bridge.
4. `lem-triangular-borel-maps-scale-euclidean-volume`: Tonelli supplies the triangular change of variables.
5. `lem-minkowski-successive-minima-volume-deformation`: explicitly enumerable rational slice selectors replace the unsupported differentiability shortcut in Green’s centroid argument.
6. `lem-finitely-many-number-field-ideals-of-bounded-norm`: each norm-m ideal contains m O_K, hence lies over a subset of a finite quotient.
7. `lem-bounded-conjugates-give-finitely-many-integral-polynomials`: explicit coefficient bounds and finite integer enumeration.
8. `lem-hermite-minkowski-bounded-primitive-integral-element`: real and totally complex windows, with exact embedding-fibre multiplicity.

The second theorem includes the lower cross-polytope proof and upper deformation proof; the chosen directional vectors need not be an integral basis. The unscaled embedding contributes `2^(-r2)` to covolume. Fractional ideals are scaled before any integral index formula is applied. For a class represented by I, set a=d I^-1 and b=(alpha)a^-1=(alpha/d)I; the displayed multiplier verifies that b represents the original class. Norm multiplicativity is applied only to integral a,b.

Hermite uses T=sqrt(B)+1, with window volumes `2^r1 T pi^r2` and `4 T pi^(r2-1)`. Milne’s printed volume expressions and its strict claim N(a)>1 are not copied. Restriction fibres are counted using the finite-tower embedding lemma, characteristic-zero separability, and the algebraic numbers inside C as the specified algebraic closure. No unit theorem, Freiman theorem, or later normal-closure finiteness is used.

The numerical bridge `3<pi<4` is included inline in the archimedean lemma using an explicit inscribed twelve-vertex polygon of area 3 and the surrounding square of area 4. The B page retains both quadratic class-number-two computations, a quintic enumeration, discriminant examples, finite ramification, and the scaled-coordinate counterexample. A Node integer-arithmetic check gave resultant(X^5-X+1,5X^4-1)=2869, quadratic remainders modulo 3 equal to 1, 1+X, 1+X, and values 1 at every residue modulo 2 and 3. This verifies that calculation only, not the entire example proof.

## Dependency evidence and fatal findings

**F1 — fatal axiom-interface mismatch.** Exact load-bearing paths:

- `thm-minkowski-bound-for-ideal-classes` → `def-ideal-class-group-of-a-domain` → `thm-unique-factorisation-of-ideals-in-dedekind-domains`. The last published Statement begins “Assume the Axiom of Choice.”
- `thm-minkowski-bound-for-ideal-classes` → `thm-nonzero-ideals-in-dedekind-domains-are-invertible`, whose Statement also explicitly assumes AC.
- Class finiteness, small-prime generation, and the class-group examples inherit these paths.

The volume supplier `thm-linear-change-of-variables-for-lebesgue-measure` explicitly assumes Countable Choice. Its *complete* inherited axiom strength has not been certified as merely Countable Choice. The separate algebraic AC paths nevertheless prevent asserting the design’s specified no-added-choice proof route without further review. A replacement number-field invertibility lemma alone cannot remove the mandated canonical class-group definition’s dependency on AC. Repair requires authorized reconciliation of that published interface/design, outside these files; adding an A/B pair alone would not cure the existing path. No duplicate definition or weakened class-group target was invented.

**F2 — fatal inadequate published proof/dependency interface.** `cor-class-group-generated-by-small-primes` uses `thm-number-field-integral-ideal-factorisation-in-zf`. Read its complete published proof. Its only declared deps are finite quotient and CRT. Step 1.1 also uses integral closedness, Noetherianity and the local-DVR characterization; step 2.1 uses a local equality test through a maximal ideal containing a colon ideal. None of those suppliers is linked there, and the assertion that all choices are finite does not itself prove the needed local criterion in ZF. The result is mathematically standard, but the exact published closure is inadequate for the promised axiom audit. Published content was not edited, and the result was not dropped.

**F3 — fatal incomplete complete-transitive semantic audit.** The audit scanned the plan, all historical batch manifests present at the audit, and published item files (published files take precedence over historical drafts; this batch overrides its own IDs). The rooted page closure contains 399 pages. Every owned direct dependency resolves, lies earlier in the page/item order, and stays in the page closure; local content policy and overlaid-plan validation pass. A conservative traversal includes deps, justified_by and *all* forward_refs. This is an identity/graph inventory, not proof that every transitive statement and hypothesis is adequate. Full mathematical inspection of all 8,207 reached item bodies has not been completed. No claim of complete closure or readiness follows from the resolving IDs. The review must finish exact-statement, hypotheses, direction, convention, axiom and use checks, including the already identified F1/F2 paths.

The full published index corollary was checked: it includes both the determinant-index formula and existence of a square generating matrix for every subgroup of Z^n, so its finite-index specialization supplies the full-lattice step. The finite-tower restriction lemma requires an algebraic closure, not arbitrary C; the explicit algebraic-number closure corollary now supplies that hypothesis. The prime-divisor lemma now explicitly supplies the finite-ramification consequence. Corrected the initially unresolved invented basis ID to published `def-linear-basis`.

**Foundations boundary.** Read the actual catalogue page (the plan’s catalogue inventory is empty), and compared its 22 IDs against the conservative inventory. Five recorded remarks appear in the *whole arithmetic-page* conservative closure: `rem-baire-category-choice-strength`, `rem-cohen-forcing-ac-independent`, `rem-feferman-no-free-ultrafilter-in-zf`, `rem-godel-constructible-universe`, `rem-halpern-levy-bpi-not-ac`. This is not treated as permission to use them. No path was found from the 186 scoped Foundations item roots even when all forward references were conservatively included. Required `extcheck` and plan checks also passed their Foundations gates. No new owned item references the catalogue or its remarks. The broader semantic review must distinguish orientation from load-bearing use; no external reference is accepted as a proof supplier.

## Source evidence and fetch blocker

Coverage records 52 harvested headings/results from four independent texts, with dispositions, exact locators, original URLs for changed treatments, and item/destination links. The declared reading ranges are narrower than whole books. Full relevant PDF text was read through the browser; snippets and abstracts were not used as mathematical evidence. Milne and Stein are independent full lecture-note/textbook treatments. Green’s second-theorem proof was read completely. Waldschmidt’s stated ranges include the two-sided theorem and the iterated integral for cross-polytope volume; a complete upper proof comes from Green, not an assertion that Waldschmidt’s slide alone proves it.

Sources:

- https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 4 pp.70–81, Theorem 8.43 pp.151–152; current fetched PDF has 166 pages.
- https://wstein.org/books/ant/ant.pdf — Proposition 6.3.6; §7.1; Lemma 7.3.1 and the individually harvested §7.3 examples. Stein’s Lemma 7.1.6 needs containment, Lemma 7.1.8 needs fractional scaling, and Example 7.3.2 prints 8/pi where Example 7.1.3 correctly gives 4/pi. The scaffold supplies the repairs and retains the mathematics.
- https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-3.pdf — §3.7 pp.26–29, 13-page PDF. The Bohr-set consequence is deferred to the valid full-Freiman plan destination.
- https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/GeometryNumbers2VI.pdf — slides 8 and 26 in the 9-page PDF; full two-sided statement and lower-bound volume calculation.

**F4 — fatal fetch verification/backing gate.** Browser opening succeeded for these sources. Shell curl attempts failed with error 6 (DNS), and Node fetch checks failed EAI_AGAIN for all four hosts. No byte-level `fetch_verified` stamp was fabricated; source-fetch-check wrote none. URL liveness is therefore 0/4 through the required local checker, and strict source backing reports 26 indexed authored results without verified backing. This does not establish that the URLs are dead on the public web. A Boucksom candidate timed out twice in the browser; a different treatment was reharvested with original_url retained. No mathematics was removed to clear a source check. Conrad–Landesman was not credited as read; it was unnecessary to meet the independent-treatment count, and a citation alone is not evidence.

## Checks actually run

All commands ran from the repository root. Temporary output and the overlaid plan live under `/tmp/frontier34-b5`; they are not additional repository deliverables. No published file, plan file, source cache, or external ledger was intentionally written.

| Command | Observed result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-34-batch-5.coverage.json --require-destination` | Pass: 1 A page, 52 harvested results, 0 errors/warnings. |
| `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json` | Pass at captured run: 769 items, 0 normalized, 0 errors. No write flag used. |
| `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-*.pages.json` | Fail at captured run: 769 scoped items, 100 errors, 0 warnings; exact errors appended below. These belong outside the owned pair. Earlier run found an owned missing basis ID; it was corrected and the owned gate rerun. |
| `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-5.pages.json` | Pass: 31 items, 0 errors/warnings. |
| `node tools/validate-plan.mjs research/plan-spec.json` | Exit 0; 892 pages with item lists, 579 without. Existing redundant-require warnings; canonical own inventories still empty. |
| `node tools/validate-plan.mjs /tmp/frontier34-b5/overlaid-plan.json` | Exit 0; 894 pages with item lists, 577 without; no cycles, forward, B-target, or unresolved item dependencies reported. |
| `node tools/extcheck.mjs --quiet` | Exit 0. Existing unproved-on-published notices do not constitute certification of this scaffold’s mathematical closure. |
| `node tools/url-sweep.mjs --coverage research/frontier-34-batch-5.coverage.json --out /tmp/frontier34-b5/url-liveness.json --timeout-ms 5000 --fail-on-dead` | Exit 1: all four URLs failed local DNS resolution. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-5.coverage.json --stamp --timeout-sec 5` | Exit 1: 0/4 verified, 0 stamped, four EAI_AGAIN failures. |
| `node tools/source-backing.mjs --coverage research/frontier-34-batch-5.coverage.json --liveness /tmp/frontier34-b5/url-liveness.json --require-verified` | Exit 1: 26 indexed authored results lack strict verified backing. |
| Temporary closure inventory and Foundations path scan | No missing owned or transitive IDs in the conservative rooted inventory; no owned direct dependency outside page closure. Semantic audit remains F3. |
| Node exact arithmetic for quintic | Resultant 2869 and all stated modular exclusions verified. |

The workspace was changing concurrently: whole-run item counts and failures are observations at command time, not claims that other batches are frozen. No whole-repository test suite or publication judge was run. Required downstream action is repair/resolve F1–F4 and repeat checks against the final run state before accepting this scaffold.

## Captured whole-run policy failures

```text
ERROR batch-item-already-exists [def-tensor-product-total-complex-of-chain-complexes]: def-tensor-product-total-complex-of-chain-complexes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero]: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-left-module]: def-tor-by-resolving-the-left-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tor-by-resolving-the-right-module]: def-tor-by-resolving-the-right-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-zero-is-the-tensor-product-in-either-construction]: prop-tor-zero-is-the-tensor-product-in-either-construction already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-each-tor-construction-is-covariant-in-both-variables]: prop-each-tor-construction-is-covariant-in-both-variables already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-tensor-double-complex-of-two-projective-resolutions]: def-tensor-double-complex-of-two-projective-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-flat-modules-over-an-arbitrary-ring]: def-left-and-right-flat-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-projective-modules-are-flat-over-an-arbitrary-ring]: lem-projective-modules-are-flat-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [rem-projective-modules-are-flat-is-supplied-by-mod-three]: rem-projective-modules-are-flat-is-supplied-by-mod-three already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]: lem-the-rows-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]: lem-the-columns-of-the-augmented-tensor-double-complex-are-exact already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]: prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-balanced-tor-bifunctor]: def-balanced-tor-bifunctor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-left-module-variable]: thm-long-exact-tor-sequence-in-the-left-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-long-exact-tor-sequence-in-the-right-module-variable]: thm-long-exact-tor-sequence-in-the-right-module-variable already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-tor-dimension-shifting]: prop-tor-dimension-shifting already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes]: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]: thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-of-two-cyclic-abelian-groups]: thm-tor-of-two-cyclic-abelian-groups already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-higher-tor-over-the-integers-vanishes]: thm-higher-tor-over-the-integers-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-torsion-free-abelian-groups-are-flat]: prop-torsion-free-abelian-groups-are-flat already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-over-a-pid-flat-is-equivalent-to-torsion-free]: thm-over-a-pid-flat-is-equivalent-to-torsion-free already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-tor-symmetry-over-a-commutative-ring]: thm-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-flat-dimension-of-a-module]: def-flat-dimension-of-a-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes]: thm-flat-dimension-at-most-n-iff-higher-tor-vanishes already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [def-left-and-right-weak-global-dimension]: def-left-and-right-weak-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-weak-global-dimension-is-at-most-corresponding-global-dimension]: prop-weak-global-dimension-is-at-most-corresponding-global-dimension already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-semisimple-rings-have-vanishing-positive-tor-and-ext]: prop-semisimple-rings-have-vanishing-positive-tor-and-ext already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [prop-the-integers-have-weak-and-global-dimension-one]: prop-the-integers-have-weak-and-global-dimension-one already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-takes-two-left-modules-over-an-arbitrary-ring]: fs-tor-takes-two-left-modules-over-an-arbitrary-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-the-two-tor-constructions-are-equal-by-definition]: fs-the-two-tor-constructions-are-equal-by-definition already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-flat-modules-have-projective-dimension-zero]: fs-flat-modules-have-projective-dimension-zero already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-vanishes-only-when-one-module-is-projective]: fs-tor-one-vanishes-only-when-one-module-is-projective already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-is-symmetric-over-every-noncommutative-ring]: fs-tor-is-symmetric-over-every-noncommutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m]: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution]: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-detects-n-torsion]: ex-tor-detects-n-torsion already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-a-flat-nonprojective-module]: ex-a-flat-nonprojective-module already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-localization-is-flat-and-has-vanishing-positive-tor]: ex-localization-is-flat-and-has-vanishing-positive-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-the-tensor-double-complex-in-low-degrees]: ex-the-tensor-double-complex-in-low-degrees already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-tor-symmetry-over-a-commutative-ring]: ex-tor-symmetry-over-a-commutative-ring already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [cex-a-noncommutative-handedness-error-in-tor]: cex-a-noncommutative-handedness-error-in-tor already has an item file and cannot be minted by this future batch
ERROR batch-item-already-exists [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers]: ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers already has an item file and cannot be minted by this future batch
ERROR batch-dependency-missing [fs-weak-mixing-implies-strong-mixing]: fs-weak-mixing-implies-strong-mixing depends on thm-chacon-transformation-is-weakly-mixing-but-not-mixing, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on def-tempered-distribution, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-translation-invariant-fourier-multiplier-on-schwartz-space]: def-translation-invariant-fourier-multiplier-on-schwartz-space depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-ltwo-fourier-multiplier-bound]: lem-ltwo-fourier-multiplier-bound depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-l-one-l-two-agreement-of-fourier-transform, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-hausdorff-young-for-the-euclidean-fourier-transform]: thm-hausdorff-young-for-the-euclidean-fourier-transform depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on thm-tempered-distributions-embed-continuously-in-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weak-derivatives-are-polynomial-fourier-multipliers]: lem-weak-derivatives-are-polynomial-fourier-multipliers depends on def-weak-derivative-of-a-locally-integrable-function, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-sobolev-space-wkp-and-its-norm, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces depends on def-hk-and-hk-zero-notation, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on def-real-order-bessel-potential-sobolev-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-bessel-potential-completions-embed-in-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-bessel-potentials-shift-sobolev-order-isometrically]: lem-bessel-potentials-shift-sobolev-order-isometrically depends on thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-japanese-bracket-powers-preserve-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces]: lem-schwartz-density-and-order-inclusion-in-hilbert-sobolev-spaces depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-fractional-hilbert-sobolev-difference-quotient-characterisation]: thm-fractional-hilbert-sobolev-difference-quotient-characterisation depends on lem-schwartz-space-is-dense-in-l-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds]: cex-translation-multiplier-need-not-satisfy-mihlin-derivative-bounds depends on thm-fourier-translation-modulation-dilation-and-reflection-laws, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [ex-negative-sobolev-order-containing-a-dirac-mass]: ex-negative-sobolev-order-containing-a-dirac-mass depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cor-birkhoff-strong-law-for-iid-coordinate-shifts]: cor-birkhoff-strong-law-for-iid-coordinate-shifts depends on thm-birkhoff-ergodic-theorem, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-topological-kunneth-short-exact-sequence-for-homology]: thm-topological-kunneth-short-exact-sequence-for-homology depends on thm-pid-kunneth-exactness-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [prop-the-homology-kunneth-sequence-splits-nonnaturally]: prop-the-homology-kunneth-sequence-splits-nonnaturally depends on thm-pid-kunneth-splitting-from-cycle-boundary-presentations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-jacobian-criterion-affine-variety]: thm-jacobian-criterion-affine-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-locus-is-open-variety]: thm-regular-locus-is-open-variety depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-separating-hypersurface-chart-variety]: lem-separating-hypersurface-chart-variety depends on thm-ag-separating-transcendence-basis-perfect-field, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-nonempty-regular-locus-reduced-variety-perfect-field]: thm-nonempty-regular-locus-reduced-variety-perfect-field depends on thm-ag-perfect-field-jacobian-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-to-field-classical]: def-smooth-morphism-to-field-classical depends on thm-ag-field-extension-of-schemes, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-equals-smooth-over-perfect-field]: thm-regular-equals-smooth-over-perfect-field depends on thm-ag-geometric-regularity-perfect-base, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-hypersurface-smooth-iff-multiplicity-one]: lem-hypersurface-smooth-iff-multiplicity-one depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smoothness-stable-under-product-classical]: lem-smoothness-stable-under-product-classical depends on thm-ag-standard-smooth-base-change-composition, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on def-ag-standard-smooth-algebra, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-smooth-morphism-classical]: def-smooth-morphism-classical depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-smooth-map-tangent-surjectivity-criterion]: lem-smooth-map-tangent-surjectivity-criterion depends on thm-ag-submersion-criterion-standard-smooth, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-dominant-map-generic-differential-surjectivity-char-zero]: lem-dominant-map-generic-differential-surjectivity-char-zero depends on thm-ag-field-differentials-separable-rank, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [cex-generic-target-smoothness-needs-smooth-source]: cex-generic-target-smoothness-needs-smooth-source depends on thm-ag-standard-smooth-geometric-regularity, which is neither declared by this batch nor an item on disk
content-policy: 769 scoped item(s), 100 error(s), 0 warning(s)
```

## Final artifact verification

After adding the explicit algebraic-number closure dependency, reran owned content policy, coverage, conservative closure inventory, and the temporary overlaid-plan validator. All four exited 0; coverage remains 52 results and policy 31 items. No new missing or out-of-page dependency was reported. Snapshot hashes/counts (not semantic certification):

```json
{
  "pages": 399,
  "items": 8207,
  "edges": 40681,
  "historical_manifests": 358,
  "missing": [],
  "own_outside": [],
  "closure_inventory_sha256": "a2db3926b2a16b0b8b3d9e418fcd8a68668223288339a52ceeab2926146f03e2",
  "manifest_sha256": "07866ff937d5ecd783c499cc012c9d507f29cf7f62c3f3f575528a12505bc626",
  "coverage_sha256": "d8cee2763fe34f08dd2515b09026532ca762b45bd6639fb6e9c013a265c50299"
}
```
