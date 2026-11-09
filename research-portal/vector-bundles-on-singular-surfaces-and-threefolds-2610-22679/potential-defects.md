---
title: Potential defects
description: Source-specific omissions, correctable errors and substantial proof gaps recorded for Fasel–Yakerson arXiv:2610.22679v1.
status: published
---

This page summarizes findings about the original [Fasel–Yakerson article, arXiv:2610.22679v1](https://arxiv.org/abs/2610.22679v1), using the retained [defects report](https://github.com/lazyinspirit/prestige-math-library/blob/main/defects/vector-bundles-on-singular-surfaces-and-threefolds-2610-22679-defects.md). Findings below retain the report's dispositions; “confirmed” does not mean a theorem is false. Duplicate reports are consolidated. Generated research drafts, prerequisite-source errors and dismissed objections are excluded. The report documents no refutation of the main classification conclusions. Article locations were checked against the supplied PDF and extracted text; the historical external-source audits are attributed to the report.

## Prerequisite omissions (including terse proofs)

### Deferred proof — positive-characteristic torsion-freeness

**Recorded status:** Confirmed, nonfatal missing prerequisite. **Finding:** `author-c5b0693f4fc3-characteristic-p-torsion`. **Location:** Proposition 2.6, [PDF pp. 5–6](https://arxiv.org/pdf/2610.22679v1#page=5).

The proposition asserts that the top motivic cohomology group $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is torsion-free for an affine threefold over any algebraically closed field. Its proof explicitly treats characteristic zero and says the general case will appear in work of Elmanto–Morrow. Thus the positive-characteristic case is an acknowledged omitted proof, rather than a case established by the printed argument. The report records replacement suppliers for arbitrary singular and nonreduced affine threefolds, using a comparison from the cited report and Elmanto–Morrow v1, Lemma 4.16; their substantial foundations remain imported. No counterexample is documented. The appropriate qualification is that the article defers this part of the proof. Nothing in this finding establishes that torsion-freeness fails or warrants restricting the proposition's statement to characteristic zero.

### Citation scope — full cdh descent

**Recorded status:** Confirmed, nonfatal original citation-scope gap. **Finding:** `author-bddd9c2c7ac0-stacks-descent-scope`. **Location:** Proposition 2.6 proof, [PDF p. 6](https://arxiv.org/pdf/2610.22679v1#page=6).

The proof says that $R\Gamma_{\mathrm{et}}(-,\mathbb Z/p)$ is already cdh-local, citing Stacks, Chapter 59, Lemma 59.105.1 ([Tag 0EW5](https://stacks.math.columbia.edu/tag/0EW5)). According to the report's inspection of that lemma's complete statement and proof, it supplies an ordinary-blowup triangle for bounded-below torsion complexes. The citation alone does not provide the full locality assertion on the article's qcqs site. A bridge from these particular descent squares to the required site-wide descent is therefore missing from the cited justification. The report records a separate five-helper route through finite-ring constructible-category hyperdescent and a linear descent criterion, with deeper inputs explicitly imported. No counterexample to the locality conclusion is documented. This finding concerns the article's citation and missing bridge, not an error in the Stacks lemma; it is distinct from the truncation inference discussed below.

### Terse bridge — affine-curve Picard divisibility

**Recorded status:** Confirmed missing prerequisite/citation-scope gap. **Finding:** `source-affine-picard-fulton-scope`. **Location:** Proposition 6.1 proof, [PDF p. 13](https://arxiv.org/pdf/2610.22679v1#page=13), citing Fulton, *Intersection Theory*, Example 1.6.6, p. 17.

The article uses divisibility of the Picard group of a smooth affine curve over an algebraically closed field. The report records that Fulton's cited example discusses degree-zero zero-cycles on complete schemes and their relation to Jacobians; it does not directly state the affine Picard assertion. The omitted bridge is to complete the curve smoothly and projectively, use divisibility of the projective curve's degree-zero Picard group, and use a degree-one point on the nonempty boundary to remove the degree of an extending line bundle. Boundary divisors restrict trivially, so the degree-zero group surjects onto the affine Picard group. This explains the needed additional argument, rather than disproving the assertion. No counterexample is documented. The report records this bridge separately and does not attribute a false claim to Fulton.

## Easily fixable defects

### Missing shift — support cohomology display

**Recorded status:** Confirmed, easily fixable notation/convention gap. **Finding:** `author-6542695536e1-support-indexing-notation`. **Location:** Definitions 2.2 and 2.7, [PDF p. 4](https://arxiv.org/pdf/2610.22679v1#page=4) and [p. 6](https://arxiv.org/pdf/2610.22679v1#page=6).

Definition 2.2 uses an unshifted cochain complex $M_j=\mathbb Z_{\mathrm{mot}}(j)(X/U)$, whereas Definition 2.7 labels $\pi_i(M_j)$ as supported $H^{2j-i,j}$. With ordinary cohomological realization, $\pi_i(M_j)=H^{-i}(M_j)$; the intended degree requires $M_j[2j]$, equivalently $\pi_{i-2j}(M_j)$, or an explicitly declared shifted realization. The report verifies a concrete test: take $X=Y=\operatorname{Spec}\mathbb C$, $U=\varnothing$ and $i=j=1$. The literal unshifted display gives zero, but the intended $H^{1,1}$ is $\mathbb C^\times$, containing the nonidentity unit $2$. This detects the omitted shift under the article's earlier convention. It does not reject alternative conventions when explicitly stipulated, nor refute the subsequent purity conclusions.

### Undefined bundle index — Theorem B

**Recorded status:** Confirmed, nonfatal notation error. **Findings:** `article-theorem-b-surjectivity-bundle-index`; duplicate `critical-rank-article-e1-typo`. **Location:** Proof of Theorem B, final paragraph, [PDF p. 17](https://arxiv.org/pdf/2610.22679v1#page=17).

The surjectivity construction defines bundles $E_2$ and $E_3$ and begins with the class of $E_3\oplus E_2\oplus L$. After listing the vanishing lower Chern classes of $E_3$, the paragraph twice changes its name to $E_1$: once in the Whitney calculation and once in the expression to which Serre splitting is applied. No $E_1$ is defined in this construction. Both occurrences should read $E_3$. The report records these two finding IDs as the same underlying slip and confirms that the replacement construction consistently uses $E_3$. No mathematical counterexample is documented or needed for this editorial correction. The undefined index interrupts the literal notation of the printed proof, but the recorded correction preserves the intended calculation and does not refute Theorem B.

### Wrong identifier — BEM bibliography

**Recorded status:** Confirmed, nonfatal bibliography defect. **Finding:** `article-bem25-arxiv-identifier-typo`. **Location:** Bibliography entry [BEM25], [PDF p. 18](https://arxiv.org/pdf/2610.22679v1#page=18); application in Proposition 2.6, p. 6.

The bibliography prints `arXiv:2508.0991` for Bachmann–Elmanto–Morrow's work on $\mathbb A^1$-invariant motivic cohomology. The report records that this identifier resolves to unrelated astrophysics rather than the intended source. The intended reference is [arXiv:2508.09915v1](https://arxiv.org/abs/2508.09915v1), whose Corollary 7.20 is cited in the characteristic-zero proof of Proposition 2.6. Adding the missing final digit repairs the bibliographic pointer and lets the reader locate the comparison actually invoked. This is an error in the original article, even though the retained report places its finding among other source-related records. No mathematical counterexample is documented. Correcting the identifier does not by itself discharge the separate truncation or cdh-descent proof obligations in that argument, and the identifier typo does not refute the cited comparison theorem.

### Excess scope — smooth-locus restriction

**Recorded status:** Confirmed, nonfatal easily fixable original proof-scope defect. **Finding:** `article-qcqs-smooth-locus-proof-scope`. **Location:** Conventions, p. 3, and Lemmas 5.1–5.2 proofs, [PDF p. 10](https://arxiv.org/pdf/2610.22679v1#page=10).

The rank and first-Chern projection proofs reduce to the smooth locus, asserting density or injectivity of restriction to it. The report verifies that these premises exceed the standing qcqs scope. Its applicable counterexample is the nonaffine normal scheme $X=\mathbb P^1_{k(t)}$, viewed over algebraically closed $k$. Its $k$-smooth locus is empty: a hypothetical smooth affine neighbourhood would be a nonzero finite-type $k$-algebra containing $k(t)$, and a maximal residue field would force an impossible $k$-algebra embedding $k(t)\to k$. Nevertheless $\operatorname{Pic}(X)=\mathbb Z$, so restriction to the empty locus is not injective. The report preserves alternate rank/Picard arguments and does not refute either lemma's conclusion. Its classification of this carrier as nonfatal/easily fixable is retained; the related Lemma 4.1 carrier has a different recorded severity below.

## Substantial defects

### Unsupported global inference — cdh truncation

**Recorded status:** Confirmed original proof-step gap, fatal to the printed argument; categorized in the report as a missing prerequisite. **Finding:** `author-29a96d89220f-cdh-localization-site-gap`. **Location:** Proposition 2.6 proof, [PDF p. 6](https://arxiv.org/pdf/2610.22679v1#page=6).

After applying affine Artin vanishing to the chosen threefold, the proof identifies $L_{\mathrm{cdh}}R\Gamma_{\mathrm{et}}(-,\mathbb Z/p)$ with its globally truncated counterpart. Vanishing on affine opens of this particular $X$ does not by itself establish an equivalence of presheaves after localization on the entire qcqs site, whose objects have no common dimension bound. The report therefore distinguishes the local vanishing input from the additional comparison needed to justify the displayed global equivalence and its evaluation. No concrete counterexample to the intended evaluation equivalence is documented; the objection is an unsupported implication, not proof that the comparison is false. The report records an alternate argument using independently supplied evaluation equivalences in dimension at most three, with explicit coefficient transport. This finding invalidates the printed inference without refuting Proposition 2.6 or the classification theorems.

### False representation premise — perfect K-zero classes

**Recorded status:** Confirmed substantial proof defects. **Findings:** `author-9f7895525f41-bundle-representation-scope`, `author-f83d9cbc480f-perfect-second-whitney-gap`, `author-e216acade157-perfect-second-projection-gap`; related `article-prop-first-chern-perfect-k-zero-proof-gap` is recorded as a missing prerequisite fatal to its printed argument. **Locations:** Conventions p. 3; Proposition 3.2, [p. 8](https://arxiv.org/pdf/2610.22679v1#page=8); Lemma 5.3 and Proposition 5.5, [pp. 11–12](https://arxiv.org/pdf/2610.22679v1#page=11).

The proofs pass from bundle calculations to arbitrary perfect $K_0$ classes without the required global representation theorem. The report verifies a counterexample: glue two copies of $\mathbb A^2_k$ along their punctured planes. This smooth normal qcqs scheme has only trivial vector bundles: Quillen–Suslin trivializes each chart, and transition matrices and their inverses extend across the origin. Yet localization and Mayer–Vietoris inject a nonzero $\mathbb Z$ boundary into its perfect $K_0$; the origin Koszul class has supported length one and ambient Euler class $1-2+1=0$. The boundary has rank and determinant zero and lies in the second filtration, but cannot be a bundle difference. This refutes the representation reduction, not the Chern conclusions. The report records alternate perfect-class arguments without treating those repairs as independently accepted here.

### False smooth-locus premise — low filtration

**Recorded status:** Confirmed substantial original proof defect. **Finding:** `low-filtration-original-smooth-locus-gap`. **Location:** Conventions p. 3; Lemma 4.1 proof, [PDF pp. 8–9](https://arxiv.org/pdf/2610.22679v1#page=8).

The proof identifies the weight-one projection with determinant by restriction to the smooth locus $U$, asserting that normality gives $\mathcal O_X(X)=\mathcal O_U(U)$. The report's verified example within the article's scope is $X=\mathbb P^1_{k(t)}$ over algebraically closed $k$. Its $k$-smooth locus is empty, while its global functions are $k(t)$ and its Picard group is $\mathbb Z$. The hypothetical smooth-neighbourhood argument in the preceding entry explains the emptiness. Thus restriction cannot recover its functions or units, and normality alone does not justify the proof step. The report also mentions $\operatorname{Spec}k(t)$, but explicitly excludes it as an article-scope counterexample because the article separately assumes affine schemes finite type. Neither example refutes Lemma 4.1's conclusion. The recorded remedy uses the actual determinant/weight-one projection directly, preserving the normal qcqs statement rather than narrowing it.
