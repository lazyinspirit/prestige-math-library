---
title: External formal universal Chern maps and supported construction
status: published
research_item: thm-author-d026a7b99ace-universal-chern-space
dependency_level: 17
---

PDF p. 17: Corollary6.9 supported factor calculation

## Prerequisites

- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input)
- [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input)
- [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [def-cohomology-with-support](item-def-cohomology-with-support)
- [Asakura–Sato, Chern Class and Riemann–Roch Theorem for Cohomology Theory without Homotopy Invariance, J. Math. Sci. Univ. Tokyo26(2019) · §5 pp269–272: Steps1–3, Proposition5.3 and formula(5.3.1); §6 pp272–273, definition and Proposition6.1(1)](https://www.ms.u-tokyo.ac.jp/journal/26-3-1.pdf)
- [Annala–Iwasa, Motivic spectra and universality of K-theory (14April2025 PDF) · Definition4.4.1 p30, for vector bundles on S-stacks; Lemma3.2.3 p23; Lemma4.4.3 pp30–31](https://ryomei.com/papers/MotSp.pdf)

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds. For every qcqs scheme $X$ over a field and every integer $i\geq1$, the specified natural stable pointed universal bundle maps $c_{i,n}:BGL_n\to K(D_i,2i)$ extend by the formal Gillet completion construction to pointed operations on the local perfect K-space model. Here $D_i$ denotes the weight-$i$ coefficient complex, and $K(D_i,2i)=\Omega^\infty(D_i[2i])$ is its derived Eilenberg target. The construction uses the local equivalence $\Omega BQ\mathcal P\simeq\underline{\mathbb Z}\times\mathbb Z_\infty BGL$, projection away from trivial rank, completion of the specified stable class, and $\mathbb Z_\infty K(D_i,2i)\simeq K(D_i,2i)$. It is natural in the coefficient maps and restrictions and retains the original universal bundle classes.

For the actual EM complexes, the supplied non-$\mathbb A^1$ $\mathbb P^1$-model and its actual orientation provide these projective-relation classes on $\mathrm{Vect}_{n,X}$, with their stability. The natural full affine comparison, including degree zero, identifies the sheaf Q-space model with the local sheaf model of the specified perfect K-space. Compose with the canonical perfect K-space local-replacement unit to obtain the actual operations on global perfect K-spaces and their restriction arrows. This applies on the small site of opens of $X$ and on its smooth big site, with Zariski or Nisnevich topology and the same stalkwise local homotopy convention for the source and derived Eilenberg targets. The affine-basis comparison is valid before and after this local replacement; no identification of ordinary and hypercomplete localizations is required. It requires neither global bundle-difference representatives for perfect $K_0$ nor $\mathbb A^1$-invariance of EM.

For every closed support $Z\subseteq X$, taking the homotopy fibers of these pointed restriction arrows gives the supported operations and their forget-support squares. For a non-quasi-compact open complement, extend the actual K-spaces and coefficient targets by the inverse limits over its quasi-compact open subsets, using the declared support convention; the compatible operations extend by the same limits. When the complement is quasi-compact, identification with category-defined supported perfect K-theory uses the separate localization input when that interpretation is needed. No such category comparison is inferred for an arbitrary open complement. The index-zero convention is separately $C_0=1$ as an unpointed constant. It is the constant term of the total Chern series, not a pointed map to the additive coefficient target; no index-zero support-fiber operation is supplied by this pointed construction.

## Statement references
[lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)

[lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)

[lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)

## Facts & Assumptions
[A1] Choice and the fixed universes are inherited by the actual EM and enhanced perfect K-theory models. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The actual graded algebra, model and orientation preserve the coefficient products, pointed Picard first class and projective bundle formula over every qcqs base. The spectrum-model input gives the level/evaluation and shift rule, so the positive coefficient target is the actual $\Omega^\infty(\mathbb Z(i)_{\rm mot}[2i])$. The negative-coefficient helper computes vanishing of the represented model in every negative weight and cohomological degree; it is not inferred just from a formal convention on symbols. [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) [thm-author-32887006bdff-em-graded-input](item-thm-author-32887006bdff-em-graded-input) [thm-author-32887006bdff-p1-spectrum-input](item-thm-author-32887006bdff-p1-spectrum-input) [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients)

[F2] Annala–Iwasa, April 14, 2025 PDF, Lemma 3.2.3 and Definition 4.4.1, define the unique projective-relation classes on vector bundles on stacks. Lemma 4.4.3 gives the bundle Whitney identity. Asakura–Sato, 2019, §5 Steps 1–3, Proposition 5.3 and (5.3.1), supply only the formal local completion construction for the specified stable pointed classes and abelian targets. Its §6 construction and Proposition 6.1(1) give support and restriction naturality. These are the precise external inputs at the frontmatter locators.

[F3] The full affine comparison and its sheafification, including the canonical unit for global perfect K-spaces, are supplied explicitly here. [lem-adjudicate-10deda40f9da-affine-k-space-sheafification](item-lem-adjudicate-10deda40f9da-affine-k-space-sheafification)

[F4] The supplied actual complexes have derived Nisnevich descent, hence Zariski descent, and restrict to the small or smooth sites by their actual pullback maps. This identifies their derived coefficient targets and restrictions with those used here. For arbitrary open complements use exactly the inverse-limit extension of the support definition. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) [def-cohomology-with-support](item-def-cohomology-with-support)

## Proof
**Given:** The qcqs base, actual coefficient model, universal bundle classes, positive index and foundation bounds in the Statement.

**Goal:** Apply the formal completion construction in the actual perfect model, with the correct degree-zero boundary.

1.1 Apply [F2]'s projective relation using [F1]. The level/evaluation rule identifies the represented positive targets with the actual coefficient complexes; the supplied negative-coefficient calculation also validates the low-level boundary in the oriented projective bundle formula. The trivial line has first class zero by the pointed Picard orientation. Whitney therefore gives $c_t(E\oplus\mathcal O)=c_t(E)$ on the smooth simplicial levels classifying universal bundles; naturality gives the compatible stable universal class. Positive classes vanish on the trivial bundle, yielding the pointed maps required by the formal construction. Thus the coefficient targets, normalization and stability are those actually required in [F2], without importing the source's full admissibility package. [A1, F1, F2]

2.1 Complete the stable class as in [F2], project away from trivial rank and use Z-completeness of the derived simplicial abelian target. Use [F3] to transport the resulting local Q-space map to the actual local perfect model. On derived sections compose with its canonical perfect-space unit. The entire affine comparison, rather than a $\pi_1$-only interface, supplies both the component identification and the actual object maps. By [F4] the actual coefficient restrictions on these sites are the ones used in the construction. This retains the universal classes, coefficient comparisons and restriction maps. The argument is local on affine charts of every stated site, so it applies to nonnoetherian and nonseparated qcqs bases as well. No filtration comparison, convergence theorem or global bundle-representation premise is used in this formal construction. [F1, F2, F3, F4, step 1.1]

3.1 If the open complement is not quasi-compact, first take inverse limits of the natural operations over its quasi-compact open subsets as prescribed in [F4]. These subsets are qcqs because $X$ is quasi-separated. The resulting restriction arrow is compatible with the maps out of $X$. Now apply the pointed natural maps of step 2.1 to the restriction arrow for $(X,X\setminus Z)$ and take homotopy fibers. Naturality gives restriction and the fiber projections give the forget-support squares. For the coefficient target, $\Omega^\infty$ preserves fibers, so this is the fiber of the actual shifted coefficient complexes. Index zero is treated separately in the source as unpointed constant one and cannot be substituted into this additive pointed-fiber argument. The formal-series constant remains one. These observations prove every asserted construction and its index restriction, with the declared extension convention on non-quasi-compact complements. [F2, F3, F4, step 2.1] ∎

## External input
Only the formal construction at the stated locators is imported from Asakura–Sato. Their §3.1 and Appendix A Theorem A.1 have an explicit resolution hypothesis for motivic admissibility. Neither that theorem nor a resolution hypothesis for the EM complexes is used here. The class inputs and full-space affine comparison are supplied separately. No general determinant coherence theorem is needed for this formal construction beyond the actual Picard orientation already in the EM supplier.

## Source versions
The Asakura–Sato 2019 primary PDF read here has SHA256 `6736b9710dd4d8d5fd89dfa2863a72cf90fc274ba47a45651fc7024209b4dcbf`. The Annala–Iwasa April 14, 2025 primary PDF has SHA256 `ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261`. The live source URLs were independently opened; actual reading is limited to the passages specified above.
