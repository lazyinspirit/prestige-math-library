---
title: Exact primary unit, Picard and smooth-purity inputs for field compatibility
status: published
research_item: thm-adjudicate-6e70d30b9793-oriented-field-map-input
dependency_level: 0
---

PDF p. 17: Corollary 6.9; integral Chern and support comparison

## Prerequisites

None.


## Statement
The following established inputs are used integrally, with the versions, hypotheses and reading limits in the source records.

For any qcqs scheme $X$ with structure map $g:X\to\operatorname{Spec}\mathbb Z$, the unit induces an equivalence of motivic $E_\infty$ rings $s^0\mathbf1_X\to s^0KGL_X$, compatible with the equivalences obtained by base change from $\mathbb Z$. Over $\mathbb Z$, the canonical framed vector-bundle map is an equivalence $\Sigma^\infty_{\rm fr}\mathrm{Vect}\simeq f_0KGL$. Its rank-induced Bott-cofiber map to $\Sigma^\infty_{\rm fr}\mathbb Z$ is an equivalence. The latter object is naturally Spitzweck's absolute integral $HZ$ as an $E_\infty$ ring, by the adjunction construction from constant integers; constant $1$ is the ring unit. The required condition $f_1HZ=0$ holds over the Dedekind base $\mathbb Z$. No characteristic inversion or $1/2$ assumption is imposed on this KGL assertion.

For a prime field $F$, EM supplies natural multiplicative augmented comparison maps from its motivic K-filtration to its cdh KH-filtration, hence natural graded coefficient maps $\eta:\mathbb Z(\star)_{\rm mot}\to\mathbb Z(\star)_{\rm cdh}$. Each $\eta_j(X)$ is an equivalence when $X/F$ is regular Noetherian. On smooth $F$-schemes the composite of the classical-to-EM map with $\eta$ is the canonical classical left-Kan/cdh comparison. EM's actual first-Chern map is obtained from the classical weight-one map on smooth $F$-algebras by left Kan extension and Nisnevich sheafification, as in Lemma 5.1.

BEM supplies natural multiplicative graded maps from cdh coefficients through its base-changed represented coefficients to $\mathbb Z(\star)^{\mathbb A}$ represented by the KGL slices. Their composite is an equivalence on equal-characteristic schemes. Its cdh coefficients restrict along every field extension by the canonical base-independent left-Kan/cdh construction. The represented theory has zero negative weights, the projective bundle formula and the Picard first class induced by $1-[L^\vee]$. On regular Noetherian bases its spectral Picard map is the determinant/unstable-slice-edge map of Construction 4.35; the cdh-local left Kan extension in Theorem 4.39(4), followed by Remark 4.45, supplies the indicated map on all qcqs schemes. For an $\mathbb A^1$-invariant Nisnevich graded ring theory with zero negative weights in every degree and PBF after every smooth base change, the mapping-limit argument in the proof of BEM Lemma 3.27 detects the Picard-space maps in (3.28) by the reduced $\mathbb P^1$ class: the projective-space tower has zero $\lim^1$ obstruction. This is a statement about these Picard-space maps, not arbitrary higher spectral maps.

Over a perfect field, Spitzweck's integral field spectrum identifies with ordinary Voevodsky motivic cohomology and the Bloch cycle model, compatibly with the product and actual $\mathbb G_m$ bonding map. Its canonical orientation classifies its tautological Picard line. Integral positive-characteristic specialization and arbitrary field extension have the hypotheses of Theorem 9.16 and Lemma 9.17. The occurrence of the tautological subline $\mathcal O(-1)$ in its line-projectivization convention does not replace the class of a given line by the class of its dual.

For a closed immersion $Z\hookrightarrow V$ between smooth separated finite-type schemes over a perfect field, smooth homotopy purity gives the coefficient-independent pointed equivalence $V/(V\setminus Z)\simeq\operatorname{Th}(N_{Z/V})$ by the canonical deformation maps. On these regular smooth pairs the refined motivic Gysin map is the Thom isomorphism followed by purity; its forget-support map is the quotient projection. Navarro's supported Chern maps arise from the actual universal pointed K-space map and commute with forgetting support. Only this smooth-pair Gysin construction is used in the field-comparison application.

## External input
The stated zero-slice, regular comparison, base-independence and smooth homotopy-purity theorems are imported on their exact hypotheses. The five local application lemmas prove the local compatibility consequences. BEM(6.4) is deliberately not the multiplicative bridge. The coefficient functors in this proposal use the canonical structured maps described in EM Constructions4.34/4.36 and BEM(4.19)/(7.14), with the canonical field-identification counits. Equivalences are inverted in the functor category; no unrelated objectwise inverses are selected.

## Integral unit-arrow supplement
The first zigzag arrow is proved with the canonical rank-induced equivalence over Spec Z from Bachmann Theorem1.1(1)/Lemma2.1, Hoyois Theorem21 (including its actual E∞ unit), and the base-change square of BEM Corollary9.7. No integral characteristic-p conclusion is inferred solely from the classical field coefficient model or from Spitzweck Remark11.2.
