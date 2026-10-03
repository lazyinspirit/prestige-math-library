# Step 5b cross-batch audit — frontier-38-owner-30

Reviewer: alpha / 5b-lead. Scope: the dispatched 102 cross-batch edges,
four forward references, and both full impact windows. This report records
local review; it is not a judge verdict, stamp, or engine gate result.

The original computed work list contains no structural changes. Neither
checkpoint-import nor merge-import exists. The published-repair handoff is
preserved, and published content remains read-only.

Citation review: all 24 citing carriers and the 37 suppliers'
operative statements/definitions have been inspected. Particular supplier
proof constructions were checked where the consumer uses more than the
exported statement, notably the punctured-disk arc lemma, proof 1.1–7.1.
The finite-normalization, closed-immersion strict-transform, DVR contact,
residue-degree intersection, group-scheme, and Artin action interfaces match
the uses described in the per-edge verdict notes to follow.

Source check: Farb–Margalit, author draft v5, cached PDF/text at
`scratchpad/source-cache/braid-groups/farb-margalit-primer-v5-author-draft`,
Proposition 1.10 and its complete proof, printed pp. 35–36; section 1.2.7,
printed pp. 37–38; Proposition 2.8 and Lemma 2.9 with its complete proof,
printed pp. 62–66. The arc convention is an unoriented image in the compact
marked surface; the boundary-fixed half-bigon caveat must be retained.
The adjacent-edge consumer assumes purity, including n=2, and separately
completes the slit complement before applying compact-annulus classification.
Attempts to fetch the archived author PDF through web access failed; the
complete relevant argument was available in the existing local source cache.

Repair: `rem-normalization-not-resolution-higher-dimension`
has an illustrative forward link under the heading `Normalization versus
resolution`, outside the permitted `Remarks` section. Rename that heading
to `Remarks`, preserving every mathematical assertion and reference.
The target is already authored on a strictly later planned page; the quadric
cone proof verifies normality by R1/S2 and the singular origin in characteristic
different from two. This is a citation-placement repair, not new mathematics.

Impact result: pre-author → post-5a computes 696 changed interfaces
(637 newly introduced and 59 pre-existing) and 1,674 affected items, including
694 current run items and 980 outside-run items. Every affected item now has a
specific disposition, exact changed-supplier IDs, a current dependency path,
the immediate consumed clause and current citation use, and raw carrier hashes.
The post-5a → current receipt has one changed interface and no affected items.
Both receipt commands pass with zero errors and zero warnings. The original
touch baseline and all original review attribution are preserved.

Citation dispositions on current carriers:

1. `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` → `thm-affine-blowup-standard-charts`: accurate. The reduced cusp ring k[t^2,t^3] has finite normalization k[t] and a nonregular origin; the two blowup charts give the regular affine-line strict transform. Use: 2.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

2. `cex-finite-normalization-does-not-make-the-curve-regular-before-blowups` → `thm-normalization-reduced-curve-exists-finite`: accurate. The reduced cusp ring k[t^2,t^3] has finite normalization k[t] and a nonregular origin; the two blowup charts give the regular affine-line strict transform. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

3. `def-multiplicative-type-coordinate-hopf-algebra` → `def-group-scheme-over-a-field`: accurate. The contravariant affine structure morphisms give a commutative coordinate Hopf algebra; the group-scheme interface retains nilpotents and scheme-valued points. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

4. `def-strict-normal-crossings-divisor` → `thm-nonaffine-regular-local-ring-is-ufd`: accurate. At a closed point of the reduced pure one-dimensional support, the ambient regular local ring has dimension two; its height-one primes have prime generators, whose product generates the radical ideal. The empty divisor has unit ideal. Use: [R1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

5. `ex-cusp-resolution-and-delta-drop` → `def-normalization-defect-of-reduced-curve`: accurate. The cusp is reduced finite type; charts and saturation give k[t], and the defect formula is applied to the projective cubic on P^2 with ample O(1), r=1 and m=2, rather than to the affine cusp. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

6. `ex-cusp-resolution-and-delta-drop` → `lem-blowup-multiplicity-euler-characteristic-drop`: accurate. The cusp is reduced finite type; charts and saturation give k[t], and the defect formula is applied to the projective cubic on P^2 with ample O(1), r=1 and m=2, rather than to the affine cusp. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

7. `ex-cusp-resolution-and-delta-drop` → `thm-affine-blowup-standard-charts`: accurate. The cusp is reduced finite type; charts and saturation give k[t], and the defect formula is applied to the projective cubic on P^2 with ample O(1), r=1 and m=2, rather than to the affine cusp. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

8. `ex-cusp-resolution-and-delta-drop` → `thm-blowup-closed-immersion-transform-universal`: accurate. The cusp is reduced finite type; charts and saturation give k[t], and the defect formula is applied to the projective cubic on P^2 with ample O(1), r=1 and m=2, rather than to the affine cusp. Use: 3.2. The exact cited interface and both current item hashes are bound in the matching JSONL row.

9. `ex-cusp-resolution-and-delta-drop` → `thm-normalization-reduced-curve-exists-finite`: accurate. The cusp is reduced finite type; charts and saturation give k[t], and the defect formula is applied to the projective cubic on P^2 with ample O(1), r=1 and m=2, rather than to the affine cusp. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

10. `ex-intersection-pairing-on-blowup-of-p2` → `def-blowup-scheme-along-ideal`: accurate. The center is k-rational, so r=1; all Cartier pullbacks exist on the integral surface, and the reduced line through the center has multiplicity one. Bilinearity yields l^2=1, lE=0, E^2=-1 and (l-E)^2=0. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

11. `ex-intersection-pairing-on-blowup-of-p2` → `def-exceptional-divisor-blowup`: accurate. The center is k-rational, so r=1; all Cartier pullbacks exist on the integral surface, and the reduced line through the center has multiplicity one. Bilinearity yields l^2=1, lE=0, E^2=-1 and (l-E)^2=0. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

12. `ex-intersection-pairing-on-blowup-of-p2` → `def-strict-transform-closed-subscheme`: accurate. The center is k-rational, so r=1; all Cartier pullbacks exist on the integral surface, and the reduced line through the center has multiplicity one. Bilinearity yields l^2=1, lE=0, E^2=-1 and (l-E)^2=0. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

13. `ex-intersection-pairing-on-blowup-of-p2` → `def-total-transform-divisor`: accurate. The center is k-rational, so r=1; all Cartier pullbacks exist on the integral surface, and the reduced line through the center has multiplicity one. Bilinearity yields l^2=1, lE=0, E^2=-1 and (l-E)^2=0. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

14. `ex-intersection-pairing-on-blowup-of-p2` → `lem-exceptional-curve-normal-bundle-minus-one`: accurate. The center is k-rational, so r=1; all Cartier pullbacks exist on the integral surface, and the reduced line through the center has multiplicity one. Bilinearity yields l^2=1, lE=0, E^2=-1 and (l-E)^2=0. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

15. `ex-intersection-pairing-on-blowup-of-p2` → `lem-total-transform-strict-plus-exceptional-multiplicity`: accurate. The center is k-rational, so r=1; all Cartier pullbacks exist on the integral surface, and the reduced line through the center has multiplicity one. Bilinearity yields l^2=1, lE=0, E^2=-1 and (l-E)^2=0. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

16. `ex-node-resolved-by-one-blowup` → `def-blowup-scheme-along-ideal`: accurate. Characteristic differs from two; the reduced integral node normalizes to k[t], and saturation gives t^2-x-1. Both exceptional points t=1,-1 are reduced. The regular-source contact lemma is explicitly not applied at the original singular center. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

17. `ex-node-resolved-by-one-blowup` → `thm-affine-blowup-standard-charts`: accurate. Characteristic differs from two; the reduced integral node normalizes to k[t], and saturation gives t^2-x-1. Both exceptional points t=1,-1 are reduced. The regular-source contact lemma is explicitly not applied at the original singular center. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

18. `ex-node-resolved-by-one-blowup` → `thm-normalization-reduced-curve-exists-finite`: accurate. Characteristic differs from two; the reduced integral node normalizes to k[t], and saturation gives t^2-x-1. Both exceptional points t=1,-1 are reduced. The regular-source contact lemma is explicitly not applied at the original singular center. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

19. `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` → `def-pontryagin-dual-and-compact-open-topology`: accurate. The exponential identification of R/Z with the multiplicative circle supplies the compact abelian Hausdorff group and its continuous characters. Only the compact-group direction of dual discreteness is used. Use: [F5], [F7]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

20. `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` → `lem-unit-circle-is-a-compact-metrizable-topological-group`: accurate. The exponential identification of R/Z with the multiplicative circle supplies the compact abelian Hausdorff group and its continuous characters. Only the compact-group direction of dual discreteness is used. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

21. `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` → `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`: accurate. The exponential identification of R/Z with the multiplicative circle supplies the compact abelian Hausdorff group and its continuous characters. Only the compact-group direction of dual discreteness is used. Use: [F7]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

22. `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power` → `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`: accurate. F1 uses the arc supplier proof constructions, not an unsupported stronger smooth extension theorem. Purity fixes both edge endpoints, including n=2; the last-region and graph moves preserve the previous chain. The slit is completed to a compact boundary-fixed annulus before classifying twists. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

23. `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions` → `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`: accurate. F2 cites the actual arc supplier proof 1.1–6.1: finite transverse representatives, compact homotopy strips, actual-cover bigon projection and supported endpoint-sector pushes. C has proper endpoints and cannot be a floating interior obstacle. Shared boundary endpoints are excluded from the intersection count. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

24. `lem-band-exchanges-decompose-into-ordinary-markov-moves` → `def-artin-automorphisms-of-the-free-group`: accurate. F4 uses the frozen positive Nielsen substitutions with rightmost factor acting first, and injectivity only after equality on every free generator. Core strands are fixed; p=0 or q=0 gives identical endpoints, and positive widths place all generators in their stated ranks. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

25. `lem-band-exchanges-decompose-into-ordinary-markov-moves` → `def-the-artin-representation-on-a-free-group`: accurate. F4 uses the frozen positive Nielsen substitutions with rightmost factor acting first, and injectivity only after equality on every free generator. Core strands are fixed; p=0 or q=0 gives identical endpoints, and positive widths place all generators in their stated ranks. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

26. `lem-band-exchanges-decompose-into-ordinary-markov-moves` → `thm-the-artin-representation-is-faithful`: accurate. F4 uses the frozen positive Nielsen substitutions with rightmost factor acting first, and injectivity only after equality on every free generator. Core strands are fixed; p=0 or q=0 gives identical endpoints, and positive widths place all generators in their stated ranks. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

27. `lem-blowup-intersection-matrix-at-smooth-point` → `cor-blowup-birational-integral-scheme`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

28. `lem-blowup-intersection-matrix-at-smooth-point` → `cor-exceptional-divisor-smooth-center-normal-bundle`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

29. `lem-blowup-intersection-matrix-at-smooth-point` → `def-blowup-fractional-ideal`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

30. `lem-blowup-intersection-matrix-at-smooth-point` → `def-blowup-scheme-along-ideal`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

31. `lem-blowup-intersection-matrix-at-smooth-point` → `def-exceptional-divisor-blowup`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

32. `lem-blowup-intersection-matrix-at-smooth-point` → `def-strict-transform-closed-subscheme`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F6]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

33. `lem-blowup-intersection-matrix-at-smooth-point` → `def-total-transform-divisor`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F6]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

34. `lem-blowup-intersection-matrix-at-smooth-point` → `lem-blowup-isomorphism-off-center`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

35. `lem-blowup-intersection-matrix-at-smooth-point` → `lem-blowup-point-pushforward-vanishing`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F5]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

36. `lem-blowup-intersection-matrix-at-smooth-point` → `lem-exceptional-curve-normal-bundle-minus-one`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

37. `lem-blowup-intersection-matrix-at-smooth-point` → `lem-exceptional-fiber-line-bundle-euler-characteristic`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

38. `lem-blowup-intersection-matrix-at-smooth-point` → `lem-projection-formula-invertible-twist`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F5]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

39. `lem-blowup-intersection-matrix-at-smooth-point` → `lem-total-transform-strict-plus-exceptional-multiplicity`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F6]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

40. `lem-blowup-intersection-matrix-at-smooth-point` → `thm-blowup-projective`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

41. `lem-blowup-intersection-matrix-at-smooth-point` → `thm-blowup-regular-surface-closed-point-regular`: accurate. The center of a finite-type regular projective surface has local dimension two and finite residue degree r. The ideal is nonzero coherent; an ample fractional twist gives absolute projectivity. Euler characteristics over k give E^2=-r, orthogonality and pullback invariance, hence C prime squared=C squared-m^2r. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

42. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `def-blowup-scheme-along-ideal`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

43. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `def-exceptional-divisor-blowup`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

44. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `lem-affine-blowup-algebra-properties`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 2.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

45. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `lem-blowup-isomorphism-off-center`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 4.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

46. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `lem-blowup-local-on-base-scheme`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 1.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

47. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `thm-affine-blowup-standard-charts`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 2.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

48. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `thm-blowup-base-change-flat`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 1.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

49. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `thm-blowup-effective-cartier-divisor-isomorphism`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 2.2. The exact cited interface and both current item hashes are bound in the matching JSONL row.

50. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `thm-exceptional-divisor-normal-cone-proj`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 5.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

51. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `thm-nonaffine-regular-local-ring-is-ufd`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

52. `lem-blowup-of-closed-point-of-regular-surface-is-regular` → `thm-pullback-center-ideal-invertible`: accurate. Localize the center flatly before taking Rees charts. In dimension two the chart has no power torsion and regular quotient local rings; dimension one is the Cartier identity case. The normal-cone calculation gives P^1 only in the two-dimensional case, with no assertion of smoothness over an imperfect field. Use: 5.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

53. `lem-compensated-band-kinks-decompose-into-ordinary-markov-moves` → `def-artin-automorphisms-of-the-free-group`: accurate. F1/F2 apply the same frozen Artin homomorphism to the full free basis, then use faithfulness for packet equalities. m=0 is empty and m=1 is ordinary stabilization. Every surrounding box is retained without commuting a partial twist through it; reversal gives the reverse-order packet. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

54. `lem-compensated-band-kinks-decompose-into-ordinary-markov-moves` → `def-the-artin-representation-on-a-free-group`: accurate. F1/F2 apply the same frozen Artin homomorphism to the full free basis, then use faithfulness for packet equalities. m=0 is empty and m=1 is ordinary stabilization. Every surrounding box is retained without commuting a partial twist through it; reversal gives the reverse-order packet. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

55. `lem-compensated-band-kinks-decompose-into-ordinary-markov-moves` → `thm-the-artin-representation-is-faithful`: accurate. F1/F2 apply the same frozen Artin homomorphism to the full free basis, then use faithfulness for packet equalities. m=0 is empty and m=1 is ordinary stabilization. Every surrounding box is retained without commuting a partial twist through it; reversal gives the reverse-order packet. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

56. `lem-intersection-multiplicity-drop-under-point-blowup` → `def-blowup-scheme-along-ideal`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

57. `lem-intersection-multiplicity-drop-under-point-blowup` → `def-exceptional-divisor-blowup`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

58. `lem-intersection-multiplicity-drop-under-point-blowup` → `def-strict-transform-closed-subscheme`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 3.1, 4.2. The exact cited interface and both current item hashes are bound in the matching JSONL row.

59. `lem-intersection-multiplicity-drop-under-point-blowup` → `lem-affine-blowup-algebra-properties`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 3.1, 4.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

60. `lem-intersection-multiplicity-drop-under-point-blowup` → `thm-affine-blowup-standard-charts`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 3.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

61. `lem-intersection-multiplicity-drop-under-point-blowup` → `thm-blowup-base-change-flat`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 1.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

62. `lem-intersection-multiplicity-drop-under-point-blowup` → `thm-blowup-closed-immersion-transform-universal`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 2.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

63. `lem-intersection-multiplicity-drop-under-point-blowup` → `thm-blowup-effective-cartier-divisor-isomorphism`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 2.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

64. `lem-intersection-multiplicity-drop-under-point-blowup` → `thm-blowup-universal-property`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 3.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

65. `lem-intersection-multiplicity-drop-under-point-blowup` → `thm-pullback-center-ideal-invertible`: accurate. The integral curve is regular at p, so its pulled-back center ideal is a nonzero principal DVR ideal. Its intrinsic blowup is the identity. Saturation in the uniformizer chart contains f/x, lowering N to at most N-1; N=1 gives disjointness. The arbitrary ambient scheme is locally Noetherian. Use: 4.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

66. `lem-multiplicative-type-affineness-by-field-descent` → `def-group-scheme-over-a-field`: accurate. G is finite type as a scheme, not just on field-valued points. Step 1.1 obtains separatedness from the closed rational identity and the group-law diagonal. Faithful field descent then descends the affine global-sections inverse; nilpotents are permitted. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

67. `lem-normalization-factors-through-blowup-of-curve-point` → `cor-blowup-birational-integral-scheme`: accurate. The integral one-dimensional Noetherian curve has a given finite normalization. Its nonzero point ideal pulls back to a nonzero DVR ideal, so the universal lift is unique; the point blowup is integral and finite, and the finite normal source remains the normalization. Use: [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

68. `lem-normalization-factors-through-blowup-of-curve-point` → `def-blowup-scheme-along-ideal`: accurate. The integral one-dimensional Noetherian curve has a given finite normalization. Its nonzero point ideal pulls back to a nonzero DVR ideal, so the universal lift is unique; the point blowup is integral and finite, and the finite normal source remains the normalization. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

69. `lem-normalization-factors-through-blowup-of-curve-point` → `thm-blowup-universal-property`: accurate. The integral one-dimensional Noetherian curve has a given finite normalization. Its nonzero point ideal pulls back to a nonzero DVR ideal, so the universal lift is unique; the point blowup is integral and finite, and the finite normal source remains the normalization. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

70. `lem-normalization-factors-through-blowup-of-curve-point` → `thm-normalization-reduced-curve-exists-finite`: accurate. The integral one-dimensional Noetherian curve has a given finite normalization. Its nonzero point ideal pulls back to a nonzero DVR ideal, so the universal lift is unique; the point blowup is integral and finite, and the finite normal source remains the normalization. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

71. `lem-point-blowup-of-integral-curve-is-finite` → `def-blowup-scheme-along-ideal`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

72. `lem-point-blowup-of-integral-curve-is-finite` → `def-exceptional-divisor-blowup`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

73. `lem-point-blowup-of-integral-curve-is-finite` → `lem-blowup-isomorphism-off-center`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: 1.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

74. `lem-point-blowup-of-integral-curve-is-finite` → `thm-blowup-effective-cartier-divisor-isomorphism`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: 2.2. The exact cited interface and both current item hashes are bound in the matching JSONL row.

75. `lem-point-blowup-of-integral-curve-is-finite` → `thm-blowup-projective`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: 1.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

76. `lem-point-blowup-of-integral-curve-is-finite` → `thm-exceptional-divisor-normal-cone-proj`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: 2.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

77. `lem-point-blowup-of-integral-curve-is-finite` → `thm-pullback-center-ideal-invertible`: accurate. The center ideal is coherent. Only local H-projectivity and global properness are taken from the projectivity supplier; no global projective-space presentation is inferred. The normal-cone fiber and eventual constant Hilbert function give zero-dimensional fibers; invertibility detects the regular iff case. Use: 2.2. The exact cited interface and both current item hashes are bound in the matching JSONL row.

78. `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` → `def-blowup-scheme-along-ideal`: accurate. The closed one-dimensional integral curve has finite normalization. Its intrinsic closed centers are also ambient closed points, with finite center ideals. Closed-immersion strict transforms identify each ambient stage with the intrinsic point blowup; finite Rees-chart covers preserve Noetherianity. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

79. `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` → `def-strict-transform-closed-subscheme`: accurate. The closed one-dimensional integral curve has finite normalization. Its intrinsic closed centers are also ambient closed points, with finite center ideals. Closed-immersion strict transforms identify each ambient stage with the intrinsic point blowup; finite Rees-chart covers preserve Noetherianity. Use: [F2], [F4]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

80. `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` → `thm-affine-blowup-standard-charts`: accurate. The closed one-dimensional integral curve has finite normalization. Its intrinsic closed centers are also ambient closed points, with finite center ideals. Closed-immersion strict transforms identify each ambient stage with the intrinsic point blowup; finite Rees-chart covers preserve Noetherianity. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

81. `lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups` → `thm-blowup-closed-immersion-transform-universal`: accurate. The closed one-dimensional integral curve has finite normalization. Its intrinsic closed centers are also ambient closed points, with finite center ideals. Closed-immersion strict transforms identify each ambient stage with the intrinsic point blowup; finite Rees-chart covers preserve Noetherianity. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

82. `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` → `cor-blowup-birational-integral-scheme`: accurate. A nonregular center makes the finite intrinsic blowup nontrivial; equality of its affine pushforward algebra would imply an isomorphism. Integrality is inherited from blowing up a nonzero finite ideal. Exact faithful restriction of scalars makes each successive inclusion strict. Use: 3.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

83. `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` → `def-blowup-scheme-along-ideal`: accurate. A nonregular center makes the finite intrinsic blowup nontrivial; equality of its affine pushforward algebra would imply an isomorphism. Integrality is inherited from blowing up a nonzero finite ideal. Exact faithful restriction of scalars makes each successive inclusion strict. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

84. `lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center` → `thm-blowup-effective-cartier-divisor-isomorphism`: accurate. A nonregular center makes the finite intrinsic blowup nontrivial; equality of its affine pushforward algebra would imply an isomorphism. Integrality is inherited from blowing up a nonzero finite ideal. Exact faithful restriction of scalars makes each successive inclusion strict. Use: [F2]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

85. `lem-the-first-four-band-comparison-is-a-compensated-band-stabilization` → `def-artin-automorphisms-of-the-free-group`: accurate. F3 uses the frozen homomorphism and faithful action on every numeric free generator in both routing identities. All shifted words fit B_n or B_(n+d); d=0 is identity, c=0 deletes only free-product rows, and arbitrary boxes remain. The algebraic word result is separated from diagram orientation. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

86. `lem-the-first-four-band-comparison-is-a-compensated-band-stabilization` → `def-the-artin-representation-on-a-free-group`: accurate. F3 uses the frozen homomorphism and faithful action on every numeric free generator in both routing identities. All shifted words fit B_n or B_(n+d); d=0 is identity, c=0 deletes only free-product rows, and arbitrary boxes remain. The algebraic word result is separated from diagram orientation. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

87. `lem-the-first-four-band-comparison-is-a-compensated-band-stabilization` → `thm-the-artin-representation-is-faithful`: accurate. F3 uses the frozen homomorphism and faithful action on every numeric free generator in both routing identities. All shifted words fit B_n or B_(n+d); d=0 is identity, c=0 deletes only free-product rows, and arbitrary boxes remain. The algebraic word result is separated from diagram orientation. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

88. `lem-the-second-four-band-comparison-is-a-compensated-band-destabilization` → `def-artin-automorphisms-of-the-free-group`: accurate. F3 uses the same numeric free basis and frozen composition order for both sides of the routing equality; injectivity supplies the braid equality. d=0 gives identical words, c=0 keeps arbitrary boxes, and the reverse-order packet removes the last d new strands. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

89. `lem-the-second-four-band-comparison-is-a-compensated-band-destabilization` → `def-the-artin-representation-on-a-free-group`: accurate. F3 uses the same numeric free basis and frozen composition order for both sides of the routing equality; injectivity supplies the braid equality. d=0 gives identical words, c=0 keeps arbitrary boxes, and the reverse-order packet removes the last d new strands. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

90. `lem-the-second-four-band-comparison-is-a-compensated-band-destabilization` → `thm-the-artin-representation-is-faithful`: accurate. F3 uses the same numeric free basis and frozen composition order for both sides of the routing equality; injectivity supplies the braid equality. d=0 gives identical words, c=0 keeps arbitrary boxes, and the reverse-order packet removes the last d new strands. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

91. `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` → `def-exceptional-divisor-blowup`: accurate. The Noetherian surface is regular and pure dimension two, with reduced one-dimensional support. Height-one prime products give Cartier equations, and blowup charts preserve their nonzerodivisors. Existing finite-normalization component suppliers drive regularization, contact decrease and removal of triple points, retaining regular rather than field-smooth components. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

92. `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` → `def-strict-transform-closed-subscheme`: accurate. The Noetherian surface is regular and pure dimension two, with reduced one-dimensional support. Height-one prime products give Cartier equations, and blowup charts preserve their nonzerodivisors. Existing finite-normalization component suppliers drive regularization, contact decrease and removal of triple points, retaining regular rather than field-smooth components. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

93. `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` → `def-total-transform-divisor`: accurate. The Noetherian surface is regular and pure dimension two, with reduced one-dimensional support. Height-one prime products give Cartier equations, and blowup charts preserve their nonzerodivisors. Existing finite-normalization component suppliers drive regularization, contact decrease and removal of triple points, retaining regular rather than field-smooth components. Use: 3.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

94. `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` → `lem-affine-blowup-algebra-properties`: accurate. The Noetherian surface is regular and pure dimension two, with reduced one-dimensional support. Height-one prime products give Cartier equations, and blowup charts preserve their nonzerodivisors. Existing finite-normalization component suppliers drive regularization, contact decrease and removal of triple points, retaining regular rather than field-smooth components. Use: 3.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.

95. `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` → `thm-nonaffine-regular-local-ring-is-ufd`: accurate. The Noetherian surface is regular and pure dimension two, with reduced one-dimensional support. Height-one prime products give Cartier equations, and blowup charts preserve their nonzerodivisors. Existing finite-normalization component suppliers drive regularization, contact decrease and removal of triple points, retaining regular rather than field-smooth components. Use: [F1]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

96. `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface` → `thm-pullback-center-ideal-invertible`: accurate. The Noetherian surface is regular and pure dimension two, with reduced one-dimensional support. Height-one prime products give Cartier equations, and blowup charts preserve their nonzerodivisors. Existing finite-normalization component suppliers drive regularization, contact decrease and removal of triple points, retaining regular rather than field-smooth components. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

97. `thm-regularization-of-finite-normalization-curve-by-point-blowups` → `cor-blowup-birational-integral-scheme`: accurate. The integral Noetherian curve has a finite normalization. Each chosen nonregular closed center has a nonzero finite ideal, whose blowup remains integral; finite birationality preserves dimension. Strict coherent subalgebra increase terminates inside the finite normalization. Already regular curves use the empty sequence. Use: [F3]. The exact cited interface and both current item hashes are bound in the matching JSONL row.

98. `thm-regularization-of-finite-normalization-curve-by-point-blowups` → `def-blowup-scheme-along-ideal`: accurate. The integral Noetherian curve has a finite normalization. Each chosen nonregular closed center has a nonzero finite ideal, whose blowup remains integral; finite birationality preserves dimension. Strict coherent subalgebra increase terminates inside the finite normalization. Already regular curves use the empty sequence. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

99. `thm-regularization-of-finite-normalization-curve-by-point-blowups` → `lem-blowup-reduced-integral-under-domain-rees`: accurate. The integral Noetherian curve has a finite normalization. Each chosen nonregular closed center has a nonzero finite ideal, whose blowup remains integral; finite birationality preserves dimension. Strict coherent subalgebra increase terminates inside the finite normalization. Already regular curves use the empty sequence. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

100. `thm-separation-of-regular-curve-components-by-point-blowups` → `def-blowup-scheme-along-ideal`: accurate. The curves are distinct integral closed one-dimensional subschemes of a Noetherian ambient scheme. Intrinsic blowups identified by the closed-immersion supplier preserve finite normalization and regularity of already regular components; finite contact maxima decrease and contacts of length one separate. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

101. `thm-separation-of-regular-curve-components-by-point-blowups` → `def-strict-transform-closed-subscheme`: accurate. The curves are distinct integral closed one-dimensional subschemes of a Noetherian ambient scheme. Intrinsic blowups identified by the closed-immersion supplier preserve finite normalization and regularity of already regular components; finite contact maxima decrease and contacts of length one separate. Use: declared construction prerequisite and the displayed calculation. The exact cited interface and both current item hashes are bound in the matching JSONL row.

102. `thm-separation-of-regular-curve-components-by-point-blowups` → `thm-blowup-closed-immersion-transform-universal`: accurate. The curves are distinct integral closed one-dimensional subschemes of a Noetherian ambient scheme. Intrinsic blowups identified by the closed-immersion supplier preserve finite normalization and regularity of already regular components; finite contact maxima decrease and contacts of length one separate. Use: [F2], 1.1. The exact cited interface and both current item hashes are bound in the matching JSONL row.


Forward-reference dispositions:

- `rem-mihlin-does-not-assert-strong-endpoint-bounds` → `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`: orientation-reviewed. Remarks illustrates absence of a compatible strong L infinity endpoint: the same indicator transform has logarithmic essential blowup near both endpoints. The target makes the compatibility restriction explicit and does not claim to refute BMO. Planned homes: calderon-zygmund-decomposition-and-singular-integrals (458.02605) -> calderon-zygmund-decomposition-and-singular-integrals-examples (458.02606), strictly increasing.

- `rem-mihlin-does-not-assert-strong-endpoint-bounds` → `cex-calderon-zygmund-strong-lone-bound-fails`: orientation-reviewed. Remarks illustrates absence of a compatible strong L^1 endpoint via the interval indicator: the exact L^2 Hilbert transform is pi inverse log|x/(x-1)| and its 1/x tail is not integrable. The multiplier remark establishes its own weak endpoint using its actual prerequisites; the link does not prove that endpoint. Planned homes: calderon-zygmund-decomposition-and-singular-integrals (458.02605) -> calderon-zygmund-decomposition-and-singular-integrals-examples (458.02606), strictly increasing.

- `rem-normalization-not-resolution-higher-dimension` → `cex-normal-not-smooth-quadric-cone`: orientation-reviewed. The existing explanatory prose is now under Remarks. It illustrates the boundary of curve normalization, without supplying a curve proof or a higher-dimensional resolution theorem. The authored target proves R1/S2 normality and a singular origin for xy=z^2 over algebraically closed characteristic not two; its normalization is itself. The perfectness and projective hypotheses on the actual curve prerequisites are preserved. Planned homes: normal-varieties-normalization-and-zariskis-main-theorem (366.061) -> normal-varieties-normalization-and-zariskis-main-theorem-examples (366.062), strictly increasing.

- `thm-blowup-base-change-flat` → `cex-blowup-arbitrary-base-change-failure`: orientation-reviewed. Remarks points to the already-authored nonflat y=0 specialization. The theorem itself proves its flat comparison and its failure example in proof 4.1, including the nonzero xy torsion class; the later example adds exposition, not a load-bearing prerequisite. Planned homes: blowups-exceptional-divisors-and-strict-transforms (366.091) -> blowups-exceptional-divisors-and-strict-transforms-examples (366.092), strictly increasing.


Repair: `item:1:rem-normalization-not-resolution-higher-dimension`, repaired. Current composite carrier hash `978ef13a258b8772c38d972a6a6de83bb210f55c4375d78655b7c62e1c4960c3`; closed unique defect `frontier-38-owner-30-5b-normalization-forward-placement`. No page addition, removal, reading-order change, item removal or other carrier repair was made. No gate finding was dispatched and no gate verdict is invented.

Impact evidence and review limits:

- The 643 reused risk reviews retain their original reviewer and specific
  mathematical notes, bound to the exact current contract row and raw post-5a
  carrier. Every nonempty quoted supplier clause was checked against its
  current item text; none was stale. All combined cross-batch uses were checked
  separately above. This reuses existing mathematical evidence and does not
  attribute those original whole-item reviews to this lead.
- The other 51 in-run impact subjects were checked on their current content,
  including the 46 lower-risk subjects without a complete risk-review record,
  the four already inspected circle/Artin/Mihlin endpoint carriers, and the
  repaired normalization remark. Their receipt notes describe the actual
  conventions, calculations and supplier uses. Two heat definition/remark
  items have no contract row; their current Gaussian, Young and diffusivity
  uses were checked directly and recorded in the receipt.
- The 980 outside-run subjects are impact dispositions, not new whole-item
  audits. Their unchanged public interfaces are matched to the pre-author
  baseline, except three independently inspected current published consumers:
  relative transversality, transverse-map density, and the comparison-sign
  example. The two countable-choice hypotheses are explicit; the comparison
  example's exported Example is unchanged from its preserved preimage.
  The exact root supplier and dependency path distinguish direct uses from
  later consequences; no published content was edited.
- The ball positivity/finiteness Statement and Countable Choice premise, and
  the affine quotient-spectrum Statement, are byte-identical to their original
  preserved preimages, whose surface and guard hashes match pre-author.
  Their new dependency/citation evidence therefore does not change the
  consumed result. The affine classification proof was read on current
  content, including empty and zero-ring cases.
- The ODE supplier's Statement now requires joint smoothness in time, state
  and parameters. Its six outside-run direct consumers were read fully:
  `ex-smooth-dependence-in-an-ode-with-a-parameter`,
  `lem-local-solvability-of-the-augmented-characteristic-ode`,
  `prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball`,
  `thm-a-flat-connection-admits-local-parallel-frames`,
  `thm-fundamental-theorem-for-nonautonomous-smooth-odes`, and
  `thm-the-double-has-a-well-defined-smooth-structure`.
  Their fields meet that hypothesis. The connection arguments already have
  unique linear solutions on the supplied compact segments; finite local
  parameter patches and uniqueness glue the required smooth dependence.
  The collar field is jointly smooth in its interpolation parameter. No
  consumer Statement/Definition needed an additional repair.

Additional focused mathematics:

The complete Bigelow 2002 sections 3.2–3.4 and 4.1, printed pp. 6–10, were
read in `scratchpad/source-cache/braid-groups/bigelow-lawrence-krammer.txt`
(author paper [arXiv:math/0204057](https://arxiv.org/abs/math/0204057)).
The current LKB consumer preserves absolute versus auxiliary end-relative
modules and the genus-one/two/three factors. The source's extra off-diagonal
unit assertion is not adopted: the current two-configuration calculation
has opposite signs and relative deck character t inverse, hence is a Laurent
unit times (1-t), a nonunit. Unit diagonal still suffices for the triangular
matrix argument. Exact rational merged-track computations independently
verified the two- and four-crossing example mutual-exponent matrices and
collision avoidance. Direct multiplication over integer Laurent polynomials
verified the B3 braid relation and full-twist value q^6 t^2; both generator
determinants are the unit -q^3 t. These were finite mathematical checks in
`/tmp`, not new repository tests or judgments.

The time-sensitive open-status sentence in the Fourier orientation remark
was checked against Niedorf, *Restriction type estimates on general two-step
stratified Lie groups*, January 26, 2026, section 1.1, PDF p. 1, lines 19–38
([primary paper](https://journals.sns.it/index.php/annaliscienze/article/download/7285/2843)).
It still records the sphere conjecture as open for n at least three and gives
the Stein–Tomas L2 range. A search hit claiming a three-dimensional solution
used an obsolete title: the current [arXiv record, v8](https://arxiv.org/abs/2411.18457)
records testing comparisons and the history identifies v4 as withdrawn.
No claim of having read or verified a proof of that conjecture is made.

Local validation:

- `node tools/cross-group-edges.mjs check --run frontier-38-owner-30`:
  102 edges, four forward references, zero errors. The one introduced item
  carrier change has its own current-hash repaired verdict and unique closed
  5b defect row; the original computed list remains unchanged.
- `node tools/impact-audit.mjs --touches research/frontier-38-owner-30-touches.json --from pre-author --to post-5a --receipt research/frontier-38-owner-30-impact.json`:
  696 interfaces, 1,674 affected items, zero errors or warnings, exit 0.
- `node tools/impact-audit.mjs --touches research/frontier-38-owner-30-touches.json --from post-5a --current --receipt research/frontier-38-owner-30-impact-5b.json`:
  one interface, zero affected items, zero errors or warnings, exit 0.
- All 30 owning contracts passed `risk-report.mjs` both without and with
  `--require-reviewed` (60 successful local checks). Current historical risk
  evidence was preserved; these checks do not constitute new proof acceptance.
- The changed remark passes `rendercheck.mjs`. `precheck.mts` examined zero
  proof carriers, as expected for this remark. The final explicit item-layout
  command was `node tools/proof-layout.mjs items/rem-normalization-not-resolution-higher-dimension.md`:
  one item, zero numbered steps, zero defects. No item edit or formatter ran
  after it.

Published handoff and remaining work:

`research/frontier-38-owner-30-step7-published-repairs.jsonl` remains exactly
unchanged (SHA-256
`2d9a0343089b9b6b96ef8d478b3166aa66ea2441619d454d7549dddd616b8e72`).
Its two historical `thm-affine-closed-immersions-quotient-rings` repair rows,
including the later v2 receipt, are preserved rather than collapsed into a
new lead review. Their later handoff judgments remain owed as instructed.
There is no unresolved finding in this dispatched cross-batch audit and no
new published defect. Existing published repair debt is not erased by these
local receipts. The engine owns decision stamping, the complete Step 5
closure battery, routing and subsequent transitions; none was initiated here.

The decisions artifact is the task-named 5b verdict JSONL: 107 rows comprising
102 clean edge verdicts, four clean orientation verdicts, and one repaired
item-carrier verdict. No additional 5a decisions file is owed by this 5b task.
