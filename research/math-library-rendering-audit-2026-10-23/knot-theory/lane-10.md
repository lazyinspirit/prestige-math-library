# Knot Theory rendering audit — lane 10

Read-only review of the frozen local source snapshots, local HTML, and assigned PNG tiles. No live route, network source, app item, publication state, build, test, or gate was accessed. All 94 assigned source/HTML hash pairs matched the manifest. Every one of the 207 assigned PNGs was opened individually with `tools.view_image` at original resolution. Full path, SHA-256, and per-tile view record are in [lane-10.json](lane-10.json).

## Findings

- **ex-unknot-zero-trace-and-dualizable-cancellation — rendering defect.** The Diagram section’s TikZ fence renders the literal source code in the local HTML instead of a diagram. The handlebody cancellation sketch is therefore absent. Confirmed rendering defect. Source lines 89, 91, 92, 93, 94, 95, 96, 97, 98, 99; evidence: `screenshots/ex-unknot-zero-trace-and-dualizable-cancellation--02.png`.
- **lem-rational-ball-b2-bounds-lens-l4 — rendering defect.** The Remark’s TikZ fence renders literal commands and labels instead of the one-component +4 surgery diagram. Confirmed rendering defect. Source lines 103, 105, 106, 107, 108, 109, 110; evidence: `screenshots/lem-rational-ball-b2-bounds-lens-l4--03.png`.
- **lem-seifert-matrix-skew-part-is-surface-intersection — rendering defect.** The schematic is shown in a red “diagram failed to render” block containing the complete TikZ source; neither local panel is drawn. This is a confirmed render failure. Source lines 106, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125; evidence: `screenshots/lem-seifert-matrix-skew-part-is-surface-intersection--04.png`.
- **lem-cdr-zero-surgery-pattern-homology-cobordism — rendering defect.** Statement and Given text contain unmarked formula notation such as “n≠0”, “P(U)”, “H_i(B;R_n)”, “S³”, “[mu_K]=n[mu_{P(K)}]”, and “Z[1/|n|]”; the HTML displays the ASCII-style indices/variable names literally rather than as math. Confirmed typography/math-markup defect. Source lines 51, 67; evidence: `screenshots/lem-cdr-zero-surgery-pattern-homology-cobordism--01.png`, `screenshots/lem-cdr-zero-surgery-pattern-homology-cobordism--03.png`.
- **lem-satellite-operator-preserves-concordance — rendering defect.** The statement displays plain-text notation “P⊂S¹×D²”, “K₀/K₁”, “C_sm”, “C_top”, “C_ex”, and “C^{1/n}” without math markup; category subscripts and exponent syntax remain literal in the local HTML. Confirmed rendering defect. Source lines 47; evidence: `screenshots/lem-satellite-operator-preserves-concordance--01.png`.
- **thm-cha-kim-winding-zero-iterates-infinite-rank — rendering defect.** The statement is a plain-text math run: “P⊂S¹×D²”, “C_top/C_sm”, “Pⁿ”, “⟨Pⁿ(C)⟩/⟨Pⁿ⁺¹(C)⟩”, and “dim_Q(A⊗_Z Q)” retain literal notation and unformatted subscripts/exponents. Confirmed rendering defect. Source lines 57; evidence: `screenshots/thm-cha-kim-winding-zero-iterates-infinite-rank--01.png`.
- **ex-knot-kt-43-worked-cases — rendering defect.** The title renders “5_2” literally (“Trefoil and 5_2 knot…”); the knot-table subscript is not typeset in the heading. Confirmed heading typography defect. Source lines 4; evidence: `screenshots/ex-knot-kt-43-worked-cases--01.png`.
- **thm-amenable-von-neumann-l2-flatness — rendering defect.** The statement contains unmarked plain-text algebra notation “CG”, “q>0”, “N G”, and “Tor_q^{CG}(M,N G)”; the rendered HTML leaves the group-ring and Tor indices as literal ASCII. Confirmed math-markup defect. Source lines 47; evidence: `screenshots/thm-amenable-von-neumann-l2-flatness--01.png`.
- **thm-l2-signature-theorem-for-closed-four-manifolds — rendering defect.** The equality is typed as plain text “sign_Γ^(2)(X,φ)=sign(X)” and displays with literal underscore/caret syntax. Confirmed math-markup defect. Source lines 38; evidence: `screenshots/thm-l2-signature-theorem-for-closed-four-manifolds--01.png`.

## Source-supported candidate diagrams

- **alg-kauffman-bracket-state-sum**, source lines 45, 46, 47, 48, 49, 50: local crossing and smoothing convention. The algorithm is defined by endpoint pairings at a single crossing, and a small diagram would let readers see both the crossing chart and the A/B pairings at a glance. No such diagram is present in this item. Draw/check: Show the southwest-to-northeast over-strand with a gap in the northwest-to-southeast under-strand; in separate A and B panels connect left-to-left plus right-to-right (weight A), and top-to-top plus bottom-to-bottom (weight A^-1). Preserve the source’s orientation-preserving coordinate transport convention. This is an editorial candidate, not a confirmed error.
- **def-planar-diagram-gauss-and-dowker-codes**, source lines 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80: crossing chart / dart rotation system. The definition introduces darts, fixed-point-free edge involution, cyclic order, over/under opposite pairs, orientation arrows, and a positive/negative sign convention, but only prose is shown. A local labelled crossing would anchor the many coding conventions. Draw/check: One positive and one negative crossing panel; mark four darts clockwise beginning with outgoing over-dart, identify opposite over and under pairs, incoming/outgoing arrows, over-gap, determinant sign, and the passage to the edge involution. Check the displayed convention against the source’s stated outgoing-over dart order. This is an editorial candidate, not a confirmed error.
- **thm-knot-exterior-homology-and-longitude**, source lines 56, 68: tubular neighborhood and peripheral torus. The item defines a knot, oriented normal disk bundle, product tubular map, exterior, boundary torus, meridian, and preferred longitude; the local render has no accompanying diagram. Draw/check: Draw K with product tube N(K), exterior E_K, common boundary T_K, a meridian mu bounding a normal disk, and a section curve lambda with p_*[lambda]=1 and i_*[lambda]=0. Label the ordered basis ([mu],[lambda]) on T_K. This is an editorial candidate, not a confirmed error.
- **lem-dehn-twist-of-heegaard-gluing-is-integral-surgery**, source lines 35, 51: annular Dehn twist to framed surgery slope. The statement translates an annular twist on a Heegaard surface into surgery on the pushed-in knot, with a sign-dependent slope; a paired before/after sketch would clarify the correspondence. Draw/check: Show c on Sigma, its annular neighborhood and push-in knot K in H_-, the annulus framing lambda_A, and the two twist choices with meridian slopes mu+lambda_A and mu-lambda_A. Check the sign against the chosen twist direction and annular coordinates. This is an editorial candidate, not a confirmed error.

## Existing diagrams reviewed

- **alg-twisted-burau-determinant-for-colored-braid-closure**: present and visually legible in `screenshots/alg-twisted-burau-determinant-for-colored-braid-closure--01.png`, `screenshots/alg-twisted-burau-determinant-for-colored-braid-closure--02.png`; no defect recorded.
- **ex-knot-kt-03-worked-cases**: present and visually legible in `screenshots/ex-knot-kt-03-worked-cases--01.png`; no defect recorded.
- **ex-knot-kt-33-worked-cases**: present and visually legible in `screenshots/ex-knot-kt-33-worked-cases--01.png`; no defect recorded.
- **lem-branched-cover-surgery-presentation-from-seifert-surface**: present and visually legible in `screenshots/lem-branched-cover-surgery-presentation-from-seifert-surface--03.png`; no defect recorded.
- **lem-positive-torus-knot-hopf-plumbing-surface**: present and visually legible in `screenshots/lem-positive-torus-knot-hopf-plumbing-surface--02.png`; no defect recorded.
- **lem-trefoil-knot-group-is-nonabelian-with-abelianization-z**: present and visually legible in `screenshots/lem-trefoil-knot-group-is-nonabelian-with-abelianization-z--01.png`; no defect recorded.

No reference-title leaks or Scratch text were observed. Uppercase technique labels, intentional source-authored inline IDs, block-rendered links, and punctuation wrapping were not treated as defects. No clipping defects were recorded; the rendering failures above concern TikZ diagrams.

## Exact assigned tile coverage

Each tile was viewed separately at original resolution; hashes are in the JSON coverage record. Tile basenames below are shown in numeric order.

- `alg-kauffman-bracket-state-sum`: `alg-kauffman-bracket-state-sum--01.png`
- `alg-twisted-burau-determinant-for-colored-braid-closure`: `alg-twisted-burau-determinant-for-colored-braid-closure--01.png`, `alg-twisted-burau-determinant-for-colored-braid-closure--02.png`
- `cex-knot-kt-09-boundary-case`: `cex-knot-kt-09-boundary-case--01.png`
- `cex-knot-kt-19-boundary-case`: `cex-knot-kt-19-boundary-case--01.png`
- `cex-knot-kt-29-boundary-case`: `cex-knot-kt-29-boundary-case--01.png`
- `cex-knot-kt-39-boundary-case`: `cex-knot-kt-39-boundary-case--01.png`
- `cex-knot-kt-49-boundary-case`: `cex-knot-kt-49-boundary-case--01.png`, `cex-knot-kt-49-boundary-case--02.png`
- `cor-knot-alexander-normalization-symmetry-and-genus-bound`: `cor-knot-alexander-normalization-symmetry-and-genus-bound--01.png`, `cor-knot-alexander-normalization-symmetry-and-genus-bound--02.png`, `cor-knot-alexander-normalization-symmetry-and-genus-bound--03.png`
- `def-barnatan-tangle-cobordism-category`: `def-barnatan-tangle-cobordism-category--01.png`
- `def-conway-polynomial`: `def-conway-polynomial--01.png`, `def-conway-polynomial--02.png`
- `def-dualizable-handle-link`: `def-dualizable-handle-link--01.png`, `def-dualizable-handle-link--02.png`
- `def-finite-volume-hyperbolic-knot-exterior`: `def-finite-volume-hyperbolic-knot-exterior--01.png`
- `def-heegaard-floer-correction-term`: `def-heegaard-floer-correction-term--01.png`
- `def-integral-intersection-lattice-of-a-simply-connected-four-manifold`: `def-integral-intersection-lattice-of-a-simply-connected-four-manifold--01.png`
- `def-knot-a-polynomial`: `def-knot-a-polynomial--01.png`
- `def-knot-seifert-pairing-and-matrix`: `def-knot-seifert-pairing-and-matrix--01.png`
- `def-locally-flat-pl-knot-concordance`: `def-locally-flat-pl-knot-concordance--01.png`
- `def-normalized-colored-jones-sequence`: `def-normalized-colored-jones-sequence--01.png`, `def-normalized-colored-jones-sequence--02.png`, `def-normalized-colored-jones-sequence--03.png`
- `def-planar-diagram-gauss-and-dowker-codes`: `def-planar-diagram-gauss-and-dowker-codes--01.png`, `def-planar-diagram-gauss-and-dowker-codes--02.png`
- `def-reverse-mirror-of-oriented-knot`: `def-reverse-mirror-of-oriented-knot--01.png`
- `def-singular-knot-and-vassiliev-derivative`: `def-singular-knot-and-vassiliev-derivative--01.png`, `def-singular-knot-and-vassiliev-derivative--02.png`
- `def-sutured-floer-chain-complex`: `def-sutured-floer-chain-complex--01.png`
- `ex-knot-kt-03-worked-cases`: `ex-knot-kt-03-worked-cases--01.png`, `ex-knot-kt-03-worked-cases--02.png`
- `ex-knot-kt-13-worked-cases`: `ex-knot-kt-13-worked-cases--01.png`, `ex-knot-kt-13-worked-cases--02.png`
- `ex-knot-kt-23-worked-cases`: `ex-knot-kt-23-worked-cases--01.png`, `ex-knot-kt-23-worked-cases--02.png`
- `ex-knot-kt-33-worked-cases`: `ex-knot-kt-33-worked-cases--01.png`, `ex-knot-kt-33-worked-cases--02.png`
- `ex-knot-kt-43-worked-cases`: `ex-knot-kt-43-worked-cases--01.png`, `ex-knot-kt-43-worked-cases--02.png`
- `ex-unknot-zero-trace-and-dualizable-cancellation`: `ex-unknot-zero-trace-and-dualizable-cancellation--01.png`, `ex-unknot-zero-trace-and-dualizable-cancellation--02.png`
- `lem-alternating-state-adequacy-and-jones-span`: `lem-alternating-state-adequacy-and-jones-span--01.png`
- `lem-based-odd-barnatan-movie-maps-and-localized-concordances`: `lem-based-odd-barnatan-movie-maps-and-localized-concordances--01.png`, `lem-based-odd-barnatan-movie-maps-and-localized-concordances--02.png`, `lem-based-odd-barnatan-movie-maps-and-localized-concordances--03.png`, `lem-based-odd-barnatan-movie-maps-and-localized-concordances--04.png`
- `lem-bmw-markov-trace-stabilization`: `lem-bmw-markov-trace-stabilization--01.png`, `lem-bmw-markov-trace-stabilization--02.png`
- `lem-branched-cover-surgery-presentation-from-seifert-surface`: `lem-branched-cover-surgery-presentation-from-seifert-surface--01.png`, `lem-branched-cover-surgery-presentation-from-seifert-surface--02.png`, `lem-branched-cover-surgery-presentation-from-seifert-surface--03.png`
- `lem-cdr-zero-surgery-pattern-homology-cobordism`: `lem-cdr-zero-surgery-pattern-homology-cobordism--01.png`, `lem-cdr-zero-surgery-pattern-homology-cobordism--02.png`, `lem-cdr-zero-surgery-pattern-homology-cobordism--03.png`
- `lem-colored-jones-generic-quotient-is-laurent`: `lem-colored-jones-generic-quotient-is-laurent--01.png`, `lem-colored-jones-generic-quotient-is-laurent--02.png`, `lem-colored-jones-generic-quotient-is-laurent--03.png`
- `lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams`: `lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams--01.png`, `lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams--02.png`, `lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams--03.png`
- `lem-conway-polynomial-from-seifert-determinant`: `lem-conway-polynomial-from-seifert-determinant--01.png`, `lem-conway-polynomial-from-seifert-determinant--02.png`, `lem-conway-polynomial-from-seifert-determinant--03.png`
- `lem-dehn-twist-of-heegaard-gluing-is-integral-surgery`: `lem-dehn-twist-of-heegaard-gluing-is-integral-surgery--01.png`, `lem-dehn-twist-of-heegaard-gluing-is-integral-surgery--02.png`
- `lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation`: `lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation--01.png`, `lem-embedded-projective-planes-meet-the-one-skeleton-of-a-finite-three-triangulation--02.png`
- `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal`: `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal--01.png`, `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal--02.png`, `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal--03.png`, `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal--04.png`, `lem-essential-surface-in-seifert-piece-is-vertical-or-horizontal--05.png`
- `lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings`: `lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings--01.png`, `lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings--02.png`, `lem-finite-compatible-pl-surfaces-admit-relative-smooth-roundings--03.png`
- `lem-finite-prime-families-have-explicit-separating-knot-signature-bumps`: `lem-finite-prime-families-have-explicit-separating-knot-signature-bumps--01.png`
- `lem-framed-knot-push-off-self-linking-well-defined`: `lem-framed-knot-push-off-self-linking-well-defined--01.png`, `lem-framed-knot-push-off-self-linking-well-defined--02.png`
- `lem-grid-alexander-grading-integral`: `lem-grid-alexander-grading-integral--01.png`, `lem-grid-alexander-grading-integral--02.png`
- `lem-heegaard-floer-correction-terms-lens-space-lp1`: `lem-heegaard-floer-correction-terms-lens-space-lp1--01.png`, `lem-heegaard-floer-correction-terms-lens-space-lp1--02.png`
- `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel`: `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel--01.png`, `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel--02.png`, `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel--03.png`, `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel--04.png`, `lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel--05.png`
- `lem-isometry-preserves-finite-volume-integral`: `lem-isometry-preserves-finite-volume-integral--01.png`, `lem-isometry-preserves-finite-volume-integral--02.png`
- `lem-kh-to-instanton-resolution-spectral-sequence`: `lem-kh-to-instanton-resolution-spectral-sequence--01.png`, `lem-kh-to-instanton-resolution-spectral-sequence--02.png`, `lem-kh-to-instanton-resolution-spectral-sequence--03.png`
- `lem-knot-admits-morse-height-representative`: `lem-knot-admits-morse-height-representative--01.png`
- `lem-knot-exterior-is-irreducible`: `lem-knot-exterior-is-irreducible--01.png`
- `lem-knot-kt41-whitehead-double-values`: `lem-knot-kt41-whitehead-double-values--01.png`, `lem-knot-kt41-whitehead-double-values--02.png`, `lem-knot-kt41-whitehead-double-values--03.png`
- `lem-kontsevich-integral-finite-type-truncation`: `lem-kontsevich-integral-finite-type-truncation--01.png`, `lem-kontsevich-integral-finite-type-truncation--02.png`
- `lem-lee-filtered-spectral-sequence-and-two-orientation-classes`: `lem-lee-filtered-spectral-sequence-and-two-orientation-classes--01.png`, `lem-lee-filtered-spectral-sequence-and-two-orientation-classes--02.png`, `lem-lee-filtered-spectral-sequence-and-two-orientation-classes--03.png`
- `lem-link-surgery-e-one-differential-is-reduced-khovanov`: `lem-link-surgery-e-one-differential-is-reduced-khovanov--01.png`, `lem-link-surgery-e-one-differential-is-reduced-khovanov--02.png`
- `lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark`: `lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark--01.png`, `lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark--02.png`, `lem-marked-knot-concordances-admit-finite-movies-away-from-the-mark--03.png`
- `lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors`: `lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors--01.png`, `lem-minimum-boundary-exchange-leaves-have-single-leaf-zero-edge-corridors--02.png`
- `lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold`: `lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold--01.png`, `lem-no-twofold-cover-forces-spherical-boundary-in-finite-pl-three-manifold--02.png`
- `lem-normal-exchange-disk-patches-have-positive-edge-weight`: `lem-normal-exchange-disk-patches-have-positive-edge-weight--01.png`, `lem-normal-exchange-disk-patches-have-positive-edge-weight--02.png`
- `lem-original-between-copy-exchanges-contained-in-normal-products-are-vertical`: `lem-original-between-copy-exchanges-contained-in-normal-products-are-vertical--01.png`, `lem-original-between-copy-exchanges-contained-in-normal-products-are-vertical--02.png`
- `lem-piccirillo-knot-lee-computations`: `lem-piccirillo-knot-lee-computations--01.png`, `lem-piccirillo-knot-lee-computations--02.png`, `lem-piccirillo-knot-lee-computations--03.png`, `lem-piccirillo-knot-lee-computations--04.png`, `lem-piccirillo-knot-lee-computations--05.png`
- `lem-positive-torus-knot-hopf-plumbing-surface`: `lem-positive-torus-knot-hopf-plumbing-surface--01.png`, `lem-positive-torus-knot-hopf-plumbing-surface--02.png`
- `lem-ptfa-groups-have-finite-folner-sets`: `lem-ptfa-groups-have-finite-folner-sets--01.png`, `lem-ptfa-groups-have-finite-folner-sets--02.png`
- `lem-rational-ball-b2-bounds-lens-l4`: `lem-rational-ball-b2-bounds-lens-l4--01.png`, `lem-rational-ball-b2-bounds-lens-l4--02.png`, `lem-rational-ball-b2-bounds-lens-l4--03.png`
- `lem-reduced-two-disk-sums-of-least-fundamental-disks-have-no-closed-exchanges`: `lem-reduced-two-disk-sums-of-least-fundamental-disks-have-no-closed-exchanges--01.png`, `lem-reduced-two-disk-sums-of-least-fundamental-disks-have-no-closed-exchanges--02.png`
- `lem-right-trefoil-has-genus-one`: `lem-right-trefoil-has-genus-one--01.png`, `lem-right-trefoil-has-genus-one--02.png`
- `lem-satellite-operator-preserves-concordance`: `lem-satellite-operator-preserves-concordance--01.png`, `lem-satellite-operator-preserves-concordance--02.png`
- `lem-seifert-matrix-skew-part-is-surface-intersection`: `lem-seifert-matrix-skew-part-is-surface-intersection--01.png`, `lem-seifert-matrix-skew-part-is-surface-intersection--02.png`, `lem-seifert-matrix-skew-part-is-surface-intersection--03.png`, `lem-seifert-matrix-skew-part-is-surface-intersection--04.png`
- `lem-sl2-character-trace-coordinate-algebra`: `lem-sl2-character-trace-coordinate-algebra--01.png`
- `lem-slice-knot-floer-complex-stably-equivalent-to-unknot`: `lem-slice-knot-floer-complex-stably-equivalent-to-unknot--01.png`, `lem-slice-knot-floer-complex-stably-equivalent-to-unknot--02.png`
- `lem-smooth-slice-iff-concordant-to-unknot`: `lem-smooth-slice-iff-concordant-to-unknot--01.png`, `lem-smooth-slice-iff-concordant-to-unknot--02.png`
- `lem-strong-lp-neumann-inverse-on-four-dimensional-balls`: `lem-strong-lp-neumann-inverse-on-four-dimensional-balls--01.png`, `lem-strong-lp-neumann-inverse-on-four-dimensional-balls--02.png`, `lem-strong-lp-neumann-inverse-on-four-dimensional-balls--03.png`
- `lem-torsion-free-abelian-extensions-preserve-group-ring-domains`: `lem-torsion-free-abelian-extensions-preserve-group-ring-domains--01.png`, `lem-torsion-free-abelian-extensions-preserve-group-ring-domains--02.png`
- `lem-trefoil-knot-group-is-nonabelian-with-abelianization-z`: `lem-trefoil-knot-group-is-nonabelian-with-abelianization-z--01.png`, `lem-trefoil-knot-group-is-nonabelian-with-abelianization-z--02.png`
- `lem-uhlenbeck-compactness-and-removable-singularities`: `lem-uhlenbeck-compactness-and-removable-singularities--01.png`, `lem-uhlenbeck-compactness-and-removable-singularities--02.png`, `lem-uhlenbeck-compactness-and-removable-singularities--03.png`, `lem-uhlenbeck-compactness-and-removable-singularities--04.png`, `lem-uhlenbeck-compactness-and-removable-singularities--05.png`
- `lem-zero-filling-of-fibered-knot-is-a-torus-bundle`: `lem-zero-filling-of-fibered-knot-is-a-torus-bundle--01.png`, `lem-zero-filling-of-fibered-knot-is-a-torus-bundle--02.png`
- `op-two-boundary-slopes-characterize-torus-knots`: `op-two-boundary-slopes-characterize-torus-knots--01.png`
- `thm-amenable-von-neumann-l2-flatness`: `thm-amenable-von-neumann-l2-flatness--01.png`, `thm-amenable-von-neumann-l2-flatness--02.png`
- `thm-bracket-state-sum-exponential-bound`: `thm-bracket-state-sum-exponential-bound--01.png`, `thm-bracket-state-sum-exponential-bound--02.png`
- `thm-cha-kim-winding-zero-iterates-infinite-rank`: `thm-cha-kim-winding-zero-iterates-infinite-rank--01.png`, `thm-cha-kim-winding-zero-iterates-infinite-rank--02.png`, `thm-cha-kim-winding-zero-iterates-infinite-rank--03.png`
- `thm-compact-twisted-signature-operators-give-additive-bundle-indices`: `thm-compact-twisted-signature-operators-give-additive-bundle-indices--01.png`, `thm-compact-twisted-signature-operators-give-additive-bundle-indices--02.png`, `thm-compact-twisted-signature-operators-give-additive-bundle-indices--03.png`
- `thm-e8-lattice-is-even-unimodular-and-nondiagonal`: `thm-e8-lattice-is-even-unimodular-and-nondiagonal--01.png`
- `thm-finite-atlas-manifold-compact-support-duality-in-zf`: `thm-finite-atlas-manifold-compact-support-duality-in-zf--01.png`, `thm-finite-atlas-manifold-compact-support-duality-in-zf--02.png`
- `thm-fundamental-quandle-and-adjoint-group-from-wirtinger`: `thm-fundamental-quandle-and-adjoint-group-from-wirtinger--01.png`, `thm-fundamental-quandle-and-adjoint-group-from-wirtinger--02.png`, `thm-fundamental-quandle-and-adjoint-group-from-wirtinger--03.png`
- `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant`: `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant--01.png`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant--02.png`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant--03.png`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant--04.png`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant--05.png`
- `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties`: `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties--01.png`, `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties--02.png`, `thm-kauffman-polynomial-from-bmw-braid-closure-procedure-properties--03.png`
- `thm-knot-exterior-homology-and-longitude`: `thm-knot-exterior-homology-and-longitude--01.png`, `thm-knot-exterior-homology-and-longitude--02.png`, `thm-knot-exterior-homology-and-longitude--03.png`
- `thm-l2-signature-theorem-for-closed-four-manifolds`: `thm-l2-signature-theorem-for-closed-four-manifolds--01.png`
- `thm-linking-number-equals-signed-intersection`: `thm-linking-number-equals-signed-intersection--01.png`, `thm-linking-number-equals-signed-intersection--02.png`, `thm-linking-number-equals-signed-intersection--03.png`, `thm-linking-number-equals-signed-intersection--04.png`
- `thm-normalized-bracket-is-an-oriented-link-invariant`: `thm-normalized-bracket-is-an-oriented-link-invariant--01.png`, `thm-normalized-bracket-is-an-oriented-link-invariant--02.png`
- `thm-property-p-for-nontrivial-knots`: `thm-property-p-for-nontrivial-knots--01.png`, `thm-property-p-for-nontrivial-knots--02.png`
- `thm-reduced-khovanov-over-f2-link-invariance`: `thm-reduced-khovanov-over-f2-link-invariance--01.png`, `thm-reduced-khovanov-over-f2-link-invariance--02.png`
- `thm-seifert-determinant-is-the-knot-alexander-polynomial`: `thm-seifert-determinant-is-the-knot-alexander-polynomial--01.png`, `thm-seifert-determinant-is-the-knot-alexander-polynomial--02.png`
- `thm-smooth-knot-has-compatible-pl-exterior-model`: `thm-smooth-knot-has-compatible-pl-exterior-model--01.png`, `thm-smooth-knot-has-compatible-pl-exterior-model--02.png`
- `thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures`: `thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures--01.png`, `thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures--02.png`
- `thm-upsilon-additivity-mirror-and-genus-bound`: `thm-upsilon-additivity-mirror-and-genus-bound--01.png`, `thm-upsilon-additivity-mirror-and-genus-bound--02.png`, `thm-upsilon-additivity-mirror-and-genus-bound--03.png`
