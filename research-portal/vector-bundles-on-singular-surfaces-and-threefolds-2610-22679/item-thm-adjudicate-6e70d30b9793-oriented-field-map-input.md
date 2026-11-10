---
title: Exact primary unit, Picard and smooth-purity inputs for field compatibility
status: published
research_item: thm-adjudicate-6e70d30b9793-oriented-field-map-input
dependency_level: 0
---

PDF p. 17: Corollary 6.9; integral Chern and support comparison

## Prerequisites

- [Spitzweck, A commutative P¹-spectrum representing motivic cohomology over Dedekind domains, arXiv1207.4078v3 · Lemma6.6 and Theorem6.7 pp55–56; Theorem9.16/Lemma9.17 p77; Proposition11.1/Remark11.2 p79](https://arxiv.org/pdf/1207.4078v3)
- [Elmanto–Morrow, Motivic cohomology of equicharacteristic schemes, arXiv2309.08463v1 · Theorem 3.5/Remark 3.6, printed pp.14–16; Constructions 4.34–4.36/Remark 4.37, pp.31–32; Lemma 5.1/Definition 5.2, pp.33–34; Lemmas 5.10/5.12 and Construction 5.11, p.36; Theorem 6.1(2), Remark 6.3/Corollary 6.4 and footnote 12, pp.44–45](https://arxiv.org/pdf/2309.08463v1)
- [Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes, arXiv2508.09915v1 · Proposition 3.15/Definition 3.16; Remarks 3.21/3.23; Lemma 3.27 proof (3.28); §4.1.2; Definitions 4.15/4.17, Remarks 4.18/4.20–4.23, Theorem 4.25/Remark 4.28; Lemma 4.33 and Construction 4.35/(4.36); Theorem 4.39/Remark 4.45; Corollaries 1.11/6.26; Theorem 6.3 coefficient-comparison paragraphs and (6.4) qualification; Proposition 7.4, Theorem 7.5/Remarks 7.6–7.10; Theorem 7.12/(7.14); Corollary 9.7/(9.8)](https://arxiv.org/html/2508.09915v1)
- [Navarro, On the higher Riemann–Roch without denominators · Navarro §§2.1–2.2 p4; §2.6 p6, final regular-pair paragraph; Theorem3.1 pp7–8; smooth homotopy purity as cited there](https://arxiv.org/pdf/1901.09337v1)
- [Morel–Voevodsky, A¹-homotopy theory of schemes, Publications Mathématiques IHES90(1999) · §3.2 Theorem2.23, printedp115/PDFp72; canonical blowup/purity maps in its proof; Proposition2.24](https://www.numdam.org/item/PMIHES_1999__90__45_0.pdf)
- [Tom Bachmann, The very effective covers of KO and KGL over Dedekind schemes, EMS online-first PDF, DOI 10.4171/JEMS/1458 · Online-first PDF p.2: Theorem 1.1(1), Remark 1.2 and Example 1.3; p.3: Lemma 2.1 with proof and proof of Theorem 1.1(1)](https://ems.press/content/serial-article-files/47441)
- [Marc Hoyois, The localization theorem for framed motivic spaces, Compositio157(2021),1–11 · Theorem18 and §4 introduction PDFp7; Lemma20 and Theorem21 with full proof PDFpp8–9](https://hoyois.app.uni-regensburg.de/papers/framedgluing.pdf)

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
