# Step 3a reader report — batch 80

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: `reader`  
Scope: batch `80` only.

## Opened inventory

Assigned pages:

- `A` [`satellite-operators-and-knot-concordance-filtrations`](library/knot-theory/satellite-operators-and-knot-concordance-filtrations.md): 51 item(s); status `?`, `page_layout: missing`, body empty.
- `B` [`satellite-operators-and-knot-concordance-filtrations-examples`](library/knot-theory/satellite-operators-and-knot-concordance-filtrations-examples.md): 3 item(s); status `?`, `page_layout: missing`, body empty.

Assigned item files opened in dependency order (suppliers within batch before their consumers; total 54):

01. `lem-boundary-homology-cokernels-surject-under-excisive-bordism-gluing`
02. `lem-explicit-integral-seifert-matrices-realize-arbitrarily-small-signature-bumps`
03. `lem-finite-disk-band-knot-longitudes-lie-in-the-second-derived-subgroup`
04. `lem-finite-free-chain-evaluation-over-ore-domains`
05. `lem-finite-standard-skew-seifert-matrices-have-choice-free-disk-band-realizations`
06. `lem-killing-deep-derived-normal-subgroups-preserves-mixed-derived-quotients`
07. `lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice`
08. `lem-ore-localization-is-flat-and-detects-module-torsion`
09. `lem-primitive-laurent-annihilators-preserve-nonzero-values-under-rational-and-prime-reduction`
10. `lem-principal-boundary-chain-evaluation-over-division-fractions`
11. `lem-subgroup-group-ring-extension-is-faithfully-flat-and-preserves-fraction-quotients`
12. `lem-cdr-smooth-s4-complement-is-standard-ball`
13. `lem-choice-free-low-degree-coefficient-bockstein-on-compact-manifolds`
14. `lem-explicit-disk-band-knots-realize-arbitrarily-small-signature-bumps`
15. `lem-finite-prime-families-have-explicit-separating-knot-signature-bumps`
16. `thm-compact-manifolds-have-finite-presentation-complexes-without-choice`
17. `thm-compact-betti-one-manifolds-have-primitive-alexander-annihilators-without-choice`
18. `thm-ptfa-augmentation-detects-projective-injectivity-without-choice`
19. `def-cdr-satellite-concordance-categories`
20. `lem-ptfa-finite-projective-basechange-preserves-euler-characteristic`
21. `lem-ptfa-subgroup-scalar-extension-preserves-blanchfield-self-pairings`
22. `lem-standard-infection-cobordisms-have-boundary-generated-second-homology`
23. `lem-zero-localized-intersection-rank-forces-finite-boundary-union-kernel-isotropy`
24. `thm-integral-classical-blanchfield-self-values-survive-rational-and-prime-reduction-without-choice`
25. `thm-unimodular-intersection-pairs-force-boundary-blanchfield-kernel-isotropy`
26. `lem-concordance-annulus-induces-zero-surgery-cobordism`
27. `def-satellite-induced-concordance-operator`
28. `lem-ptfa-localization-kills-first-homology-of-betti-one-manifolds`
29. `lem-standard-infection-cobordism-adjunction-kills-the-companion-longitude`
30. `thm-cdr-concordance-categories-form-abelian-groups`
31. `thm-ptfa-localized-boundary-intersection-rank-is-no-larger-than-ordinary-rank`
32. `lem-finite-winding-zero-infection-towers-preserve-required-derived-quotients`
33. `lem-satellite-connected-sum-substitution`
34. `lem-satellite-operator-preserves-concordance`
35. `lem-strong-winding-stable-under-companion-insertion`
36. `thm-integral-pair-data-yield-blanchfield-bordisms-after-standard-infections`
37. `thm-winding-zero-infection-preserves-classical-blanchfield-pairings`
38. `lem-cdr-zero-surgery-pattern-homology-cobordism`
39. `op-cha-kim-smooth-graded-quotients-for-topologically-slice-images`
40. `thm-amenable-von-neumann-l2-flatness`
41. `thm-l2-signature-theorem-for-closed-four-manifolds`
42. `lem-amenable-D-R-l2-dimension-estimate`
43. `lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction`
44. `lem-higher-order-blanchfield-pairings-are-nonsingular`
45. `lem-l2-rho-invariant-bordism-independence`
46. `lem-cha-kim-integral-solvability-and-blanchfield-bordism`
47. `thm-cochran-davis-ray-strong-winding-injectivity`
48. `thm-cheeger-gromov-uniform-rho-bound`
49. `thm-amenable-signature-vanishing-for-solvable-bordisms`
50. `lem-cha-kim-higher-order-rho-bound-and-coprime-separation`
51. `thm-cha-kim-winding-zero-iterates-infinite-rank`
52. `cex-ptfa-ore-localization-alone-does-not-give-blanchfield-nonsingularity`
53. `ex-knot-kt-27-worked-cases`
54. `cex-knot-kt-27-boundary-case`

The manifest contains 51 items on the A page and 3 examples on the B page. The current source-evidence artifact lists 30 items; I treated it as navigation evidence and independently opened the full current 54-item manifest inventory.

## Review, repair and validation

The A-page and B-page bodies are empty and their frontmatter inventories match the assigned carrier lists. The `eilenberg-watts-theorem-and-natural-transformations` prerequisite resolves in `library/homological-algebra/`; the remaining A-page prerequisites resolve in their library categories. Both assigned pages retain `page_layout: compact-v1`. No TikZ or tikzcd diagrams occur in the assigned items. A scan of all assigned statement/definition/example/open-problem formulations and prose `Remarks` sections found no inline hyperlinks.

Repaired `lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice`:

- The final statement clause used `P^s` without defining the mixed series or identifying its coefficient ring. The statement now defines the finite ring list, the maps `P^j -> (P^j/[P^j,P^j]) tensor R_j`, and the specialization `N=P^s pi`, `k=R_s`; it also records that the recursively defined subgroups are characteristic.
- The naturality clause previously quantified over a target space without the contractible-neighborhood hypotheses needed for the target path-class cover. It now requires the based target to satisfy the same connected, Hausdorff, and supplied-basis hypotheses. Proof step 5.1 has been aligned with this scope.
- Checked the affected assigned consumer closure: `thm-compact-manifolds-have-finite-presentation-complexes-without-choice`, `thm-compact-betti-one-manifolds-have-primitive-alexander-annihilators-without-choice`, and `thm-integral-classical-blanchfield-self-values-survive-rational-and-prime-reduction-without-choice`. Their maps are between the finite-polyhedron and compact-manifold spaces in the revised naturality scope; no consumer repair was needed.
- Updated the matching step 5.1 derivation in `inverse-problems-knot-theory-all-109-2026-10-19-batch-80.proof-contracts.json`. No `verification.judge` record was present for the repaired item.

Checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice.md` — pass.
- `node tools/proof-contract.mjs inverse-problems-knot-theory-all-109-2026-10-19-batch-80.proof-contracts.json --strict --items lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice` — 0 errors, 0 warnings.
- `node tools/proof-layout.mjs items/lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice.md` — 1 item, 7 steps, 0 defects.

A targeted web check of Cha–Kim's published 2025 paper confirmed that Remark 1.1 still states the smooth graded-quotient question recorded by `op-cha-kim-smooth-graded-quotients-for-topologically-slice-images`; the source is [the Advances in Mathematics article](https://www.sciencedirect.com/science/article/pii/S000187082500101X), Remark 1.1. The review found no defect in that assigned open-problem formulation or its non-exhaustive status note.

## Page verdicts

- `satellite-operators-and-knot-concordance-filtrations`: **pass**. Frontmatter-only, correct current item inventory, all eight required page IDs resolve, and no page body summary is present.
- `satellite-operators-and-knot-concordance-filtrations-examples`: **pass**. Frontmatter-only, correct three-example inventory, required A page resolves, and no page body summary is present.

## Unedited defects and blockers

No confirmed defect remains in an assigned item or assigned A-page prose. No proposed withdrawal was removed. No batch-80 blocker was found. At the 2026-10-21 09:42 UTC run-status check, the run remained active with no active native worker; batch 80 was still awaiting reader collection.

## Coverage limitation

All 54 assigned item carriers and both assigned pages were opened and reviewed. I also opened current prerequisite carriers needed to evaluate the sensitive normal-cover, PTFA/Ore, finite-prime, and L²-signature arguments. I did not independently audit every proof body in the complete nonassigned transitive dependency closure; this report does not certify that entire closure and makes no finding from an unread dependency.
