# Step 3a reader report — batch 67

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader

## Opened inventory

Both assigned pages were opened. The A page, [levine-tristram-signatures-and-arf-invariant](/home/lazyinspirit/Projects/prestige-math-library/library/knot-theory/levine-tristram-signatures-and-arf-invariant.md), and its B page, [levine-tristram-signatures-and-arf-invariant-examples](/home/lazyinspirit/Projects/prestige-math-library/library/knot-theory/levine-tristram-signatures-and-arf-invariant-examples.md), are draft, compact-v1, frontmatter-only pages.

The 20 assigned items were opened in increasing manifest dependency level:

- Level 0: `def-seifert-surface-arc-surgery`, `lem-total-linking-equals-intersection-with-link-seifert-surface`.
- Level 5: `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`, `lem-link-seifert-pairing-well-defined`.
- Level 6: `def-link-seifert-pairing-and-matrix`.
- Level 7: `lem-link-seifert-matrix-enlargement-under-arc-surgery`.
- Level 8: `lem-seifert-matrices-of-a-knot-are-s-equivalent`, `def-knot-arf-invariant-from-seifert-form`.
- Level 9: `lem-arf-quadratic-enhancement-from-seifert-form`.
- Level 12: `lem-levine-tristram-hermitian-form-singular-set`.
- Level 13: `def-levine-tristram-hermitian-form-and-signature`, `def-seifert-s-equivalence-and-conway-normalization`.
- Level 14: `lem-conway-polynomial-from-seifert-determinant`, `lem-levine-tristram-one-sided-averages-exist`.
- Level 15: `lem-arf-seifert-determinant-congruence-near-minus-one`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `cex-knot-kt-12-boundary-case`.
- Level 16: `thm-seifert-s-equivalence-and-conway-arf-bridge`.
- Level 17: `thm-arf-equals-second-conway-coefficient-mod-two`.
- Level 18: `ex-knot-kt-12-worked-cases`.

The direct suppliers used by each assigned claim were opened before their consumers. Two deeper suppliers surfaced while inspecting those suppliers and were opened later; their exact gaps are recorded below.

The 39 distinct external direct dependencies in the assigned manifests were opened at the statement and proof passages used: `cor-knot-alexander-normalization-symmetry-and-genus-bound`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `def-axiom-of-choice`, `def-countable-choice`, `def-covering-map-and-evenly-covered-neighbourhoods`, `def-deck-transformation-and-deck-group`, `def-knot-seifert-pairing-and-matrix`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-seifert-surface`, `def-regular-oriented-link-diagram`, `def-seifert-matrix-s-equivalence`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `ex-knot-kt-07-worked-cases`, `lem-complex-hermitian-eigenvalues-lipschitz`, `lem-every-oriented-link-admits-a-regular-projection`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-square-seifert-presentation-and-alexander-normalization`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-classification-of-connected-covering-spaces`, `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`, `thm-every-oriented-knot-bounds-a-seifert-surface`, `thm-intermediate-value`, `thm-isotopy-extension`, `thm-linking-number-equals-signed-intersection`, `thm-mayer-vietoris-sequence-in-singular-homology`, `thm-parametric-transversality`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `thm-transversality-homotopy-theorem`, `thm-transverse-preimage-theorem`, and `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`.

Additional proof-supplier passages opened where the transitive closure required them included `thm-relative-whitney-approximation-for-manifold-valued-maps`, `alg-seifert-surface-from-diagram`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `alg-oriented-linking-number-from-diagram`, `thm-oriented-linking-number-scan-terminates-and-is-correct`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `lem-knot-normal-circle-bundle-trivialization`, `lem-knot-tubular-exterior-and-boundary`, `thm-knot-exterior-homology-and-longitude`, and `thm-the-alexander-polynomial-is-an-oriented-link-invariant`.

## Repairs and evidence

- In [def-seifert-surface-arc-surgery](/home/lazyinspirit/Projects/prestige-math-library/items/def-seifert-surface-arc-surgery.md), specified that the feet lie in the surface interior, the lateral annulus must admit the compatible orientation, and the seams are rounded. Without interior feet the boundary-preservation clause was not guaranteed, and the literal union could have corners rather than be a smooth surface. The surrounding items use interior feet and remain compatible with the clarified operation.
- In [lem-total-linking-equals-intersection-with-link-seifert-surface](/home/lazyinspirit/Projects/prestige-math-library/items/lem-total-linking-equals-intersection-with-link-seifert-surface.md), added the relative Whitney approximation supplier and the full-choice-to-countable-choice bridge. The original proof applied transversality to a continuous based homotopy without first producing a smooth homotopy transverse on endpoint neighbourhoods. The revised step reparametrizes loops and homotopies to constant collars, smooths relative to those collars, and then applies relative transversality. The local meridian orientation and Hurewicz factorization were unchanged.
- In [lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries](/home/lazyinspirit/Projects/prestige-math-library/items/lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries.md), stated the radial deformation retraction from the open link complement to the compact exterior and used the meridian intersection to establish connectedness of each cut exterior. This supplies the base-space and character identification needed before the two stackings are compared through covering classification.
- In [lem-link-seifert-pairing-well-defined](/home/lazyinspirit/Projects/prestige-math-library/items/lem-link-seifert-pairing-well-defined.md), justified that a transverse perturbation of a representative circle can be chosen arbitrarily C1-small, remain embedded, and stay disjoint from the other compact circle. This makes the use of the knot-linking theorem on the perturbed pair valid.
- In [lem-conway-polynomial-from-seifert-determinant](/home/lazyinspirit/Projects/prestige-math-library/items/lem-conway-polynomial-from-seifert-determinant.md), renamed the Seifert determinant from `D_L` to `\Theta_L` because `D_L` already denotes the knot-normalized Alexander fraction in the published Alexander definition. Added the Mayer–Vietoris calculation that a band on the connected smoothing surface extends the old homology basis by one generator, which justifies the cofactor used in the skein expansion. Expanded the relative general-position construction for the connecting arc to justify its embeddedness.
- In [lem-levine-tristram-hermitian-form-singular-set](/home/lazyinspirit/Projects/prestige-math-library/items/lem-levine-tristram-hermitian-form-singular-set.md), replaced “normalized knot Alexander polynomial \(\Delta_K\)” with an arbitrary unit associate. The zero set is unit-invariant, while the library reserves the normalized symbol \(\Delta_K^\#\).
- In [def-seifert-s-equivalence-and-conway-normalization](/home/lazyinspirit/Projects/prestige-math-library/items/def-seifert-s-equivalence-and-conway-normalization.md), moved the domains of \(x,y,z\) directly to the enlargement formulas.
- Updated the direct consumers [thm-seifert-s-equivalence-and-conway-arf-bridge](/home/lazyinspirit/Projects/prestige-math-library/items/thm-seifert-s-equivalence-and-conway-arf-bridge.md) and [ex-knot-kt-12-worked-cases](/home/lazyinspirit/Projects/prestige-math-library/items/ex-knot-kt-12-worked-cases.md) to use \(\Delta_K^\#\) and \(\Theta_K\) consistently. Refreshed the batch 67 proof-contract citations and derivations for repaired items and consumers of the changed statements. None of the edited items had a stale `verification.judge` record.

The assigned TikZ diagram in `def-seifert-surface-arc-surgery` remains a labeled schematic of the two attaching disks and replacement tube; the text defines the move independently. The diagrams opened in direct suppliers `lem-seifert-matrix-skew-part-is-surface-intersection` and `ex-knot-kt-07-worked-cases` agree with their stated conventions. No other assigned item needs a diagram to make its argument understandable.

## Validation

Reflow reported all nine changed items unchanged. Precheck passed for all nine changed items. The final proof-layout run processed 9 items and 25 proof steps with 0 defects.

## Page verdicts

- `levine-tristram-signatures-and-arf-invariant`: draft, compact-v1, frontmatter-only; the 18-item inventory and all status/requirement metadata are intact. No page-prose defect.
- `levine-tristram-signatures-and-arf-invariant-examples`: draft, compact-v1, frontmatter-only; its two examples remain in the example inventory and status/requirement metadata is intact. No page-prose defect.

## Defects not edited

Two nonfatal proof gaps remain in current-run dependencies outside batch 67. They are reported in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-67.json` with current source hashes:

- `lem-seifert-cut-open-cover-alexander-module-presentation`, batch 61, proof step 3.1: the passage from the finite-stack Mayer–Vietoris sequences to the infinite stack uses exactness of the filtered direct limit without proving it or citing an exactness result. A finite-chain lift/kernel argument or the exactness of filtered colimits of abelian groups closes this short gap. The assigned consumer is `lem-levine-tristram-hermitian-form-singular-set`.
- `lem-seifert-bands-embedded-orientable-boundary-correct`, batch 59, proof step 1.1: the proof asserts nested disk interiors can be separated by heights while retaining their original boundary circles in the projection sphere, but does not describe the boundary-fixed cap construction. Smooth graph caps with height functions vanishing on each boundary and ordered to separate nested disks close this nonfatal construction gap. The assigned consumer is `lem-link-seifert-pairing-well-defined`.

## Blocker and coverage limits

The reader review itself has no blocker. At the status snapshot `2026-10-21T09:08:01.688Z`, the run was running with 70/109 batches counted at 3a-read and batch 67 still absent from the split counter. The engine still reported a separate 3a-collect blocker: `collect-49` had failed three times. I did not change autopilot state.

I checked direct dependencies at the interfaces used and reviewed the additional current-run suppliers listed above; I did not recursively audit every supplier’s entire dependency closure. The two deeper suppliers listed as unedited findings were opened after their assigned consumers, so supplier-first order was not achieved for those two passages. The Conway survey was checked at §2.1, printed pp. 3–4, and §2.4, printed p. 7. Robertello’s §5 Theorem 6 (printed pp. 551–552) was available in indexed text; its scanned PDF pages were not visually inspected, and the determinant congruence was also derived in the local proof. Lickorish’s Theorem 8.2, Chapter 8, pp. 79–81, was checked from indexed text; the full PDF fetch was rejected for size and the mirror returned 403, so I did not inspect its complete printed proof.

