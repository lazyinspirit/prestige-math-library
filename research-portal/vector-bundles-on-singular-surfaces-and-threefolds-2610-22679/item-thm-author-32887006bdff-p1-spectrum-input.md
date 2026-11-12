---
title: External symmetric P¹ model, orientation criterion and fundamental
  stabilization
status: published
research_item: thm-author-32887006bdff-p1-spectrum-input
dependency_level: 1
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF,
        14 April 2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §1.3 Definitions 1.3.4/1.3.8, Lemma 1.3.9, Remark 1.3.10, Lemma 1.3.13
        and Proposition 1.3.14, pp. 8–10; §§2.2.3–2.2.10, pp. 15–16; Theorem
        2.4.5 and Corollary 2.4.8, pp. 19–20; Lemma 3.1.4, Remarks 3.1.5–3.1.6
        and Lemma 3.1.7, pp. 21–22; Definition 3.2.1 and Lemma 3.2.3, p. 23
      hypotheses: Source-native qcqs derived base S and Zariski stacks on qcqs smooth
        derived S-schemes; coefficients presentably tensored over the stack
        category. Retain compact generation and preservation of filtered
        colimits by P¹ cotensor for fundamental stabilization and the cited
        stable-module consequence. Ring/module and monoidal coefficient-change
        assertions require multiplicative coefficient categories and the stated
        monoidality. The bundle formula requires an oriented spectrum already
        satisfying the source’s reduced PBF, a rank-r vector bundle (r≥1), and
        an S-stack X. No A¹-invariance or finite quasi-smooth-transfer
        hypothesis.
      statement: Sphere modules in symmetric sequences give lax P¹-spectra and the
        adjoint-bonding Ω-condition gives the symmetric monoidal localized
        model. Coefficient change induces adjunctions, with the stated monoidal
        structure and shift/evaluation rules. A pointed Picard class lifting the
        unit specifies a linear orientation; orientable spectra are fundamental.
        Under the coefficient compactness hypotheses, stabilization is an
        equivalence on fundamental spectra; in multiplicative coefficients,
        modules over a fundamental E1-ring are stable. Only for an oriented
        spectrum satisfying PBF does Lemma 3.2.3 give the unreduced actual
        class-power equivalence, with summands i=0,...,r−1, for a rank-r bundle
        on any S-stack over the qcqs derived base.
      reading_limits: "Historical source-reading record from the incoming item: Read
        this round the cached primary author PDF dated April 14, 2025, SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261:
        printed pp. 6–10, 14–16, 19–23, including the full displayed proof of
        Theorem 2.4.5 on p. 19, Corollary 2.4.8 on p. 20, Lemma 3.1.4 through
        Lemma 3.1.7 on pp. 21–22, and Definition 3.2.1/Lemma 3.2.3 with proof on
        p. 23. Opened the live primary PDF and compared the date, definitions
        and theorem hypotheses through web extraction. Brown representability,
        the foundational higher-category results, SAG and the categorical
        appendices are imported, not reconstructed or independently re-proved.
        The application here is only this formal framework; no EM-specific PBF
        is inferred from orientation. Current consumer maintenance read this
        item, its exact declared supplier interfaces and the retained citation
        contract. It adds the explicit formulation and argument dependency-use
        declarations without changing the body or claiming fresh primary-source
        reading, proof reconstruction or independent acceptance."
external_input: true
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF, 14 April 2025) · §1.3 Definitions 1.3.4/1.3.8, Lemma 1.3.9, Remark 1.3.10, Lemma 1.3.13 and Proposition 1.3.14, pp. 8–10; §§2.2.3–2.2.10, pp. 15–16; Theorem 2.4.5 and Corollary 2.4.8, pp. 19–20; Lemma 3.1.4, Remarks 3.1.5–3.1.6 and Lemma 3.1.7, pp. 21–22; Definition 3.2.1 and Lemma 3.2.3, p. 23 `](https://ryomei.com/papers/MotSp.pdf)


## Statement

Use the source-specific non-$\mathbb A^1$ framework over any qcqs derived base $S$, with the compatible universe bounds and coefficient hypotheses specified there. For a coefficient category $\mathcal V$ defined over $S$, the symmetric lax $\mathbb P^1$-spectrum category is the sphere-module category in symmetric sequences, and its full subcategory of $\Omega$-$\mathbb P^1$ spectra is the accessible localization imposing the adjoint bonding equivalences. In the multiplicative setting this localization is symmetric monoidal. Thus a commutative algebra under the image of $S_{\mathbb P^1}$ in coefficient symmetric sequences gives a commutative motivic ring spectrum when its adjoint bonding maps are equivalences.

A coefficient-linear left adjoint $F:\mathcal V\to\mathcal V'$ induces an adjunction on motivic spectra; if the coefficient categories are multiplicative and $F$ is symmetric monoidal, its induced left adjoint is symmetric monoidal and its right adjoint is lax symmetric monoidal. In particular ordinary coefficient stabilization gives $\Sigma^\infty:\mathrm{Sp}_{\mathbb P^1}(\mathcal V)\rightleftarrows\mathrm{Sp}_{\mathbb P^1}(\mathrm{Sp}(\mathcal V)):\Omega^\infty$. The projective-line shift is $\Sigma_{\mathbb P^1}\simeq s^-$: for an $\Omega$-spectrum $E$ with levels $E_n$, evaluation of $\Sigma_{\mathbb P^1}E$ in degree $n$ is $E_{n+1}$. Its inverse is $\Omega_{\mathbb P^1}$; evaluation of $\Sigma_{\mathbb P^1}^{-m}E$ in degree zero is $\Omega_{\mathbb P^1}^m E_0$ for $m\geq1$.

Let $\mathcal V$ be multiplicative and $E$ a motivic ring spectrum. A pointed Picard class in $\widetilde E^{2,1}(\mathrm{Pic}_{\mathcal V})$ whose restriction along $[\mathcal O(1)]$ is the suspended unit, under $\widetilde E^{2,1}(\mathbb P^1_{\mathcal V})\simeq E^0(\mathbf1_{\mathcal V})$, specifies a linear orientation. Every orientable motivic spectrum is fundamental. If $\mathcal V$ is compactly generated and its $\mathbb P^1$ cotensor preserves filtered colimits, coefficient stabilization restricts to an adjoint equivalence $\mathrm{Sp}_{\mathbb P^1}(\mathcal V)^{\mathrm{fd}}\simeq\mathrm{Sp}_{\mathbb P^1}(\mathrm{Sp}(\mathcal V))^{\mathrm{fd}}$. Under these compactness hypotheses and multiplicativity, every fundamental motivic $E_1$-ring spectrum, in particular an orientable one, has a stable category of left modules.

PBF means the reduced class-power equivalences in the framework definition; it is an additional hypothesis. Suppose $E$ is an oriented motivic spectrum in $\mathcal V$ satisfying PBF, with $\mathcal V$ defined over the qcqs derived base $S$. For every rank-$r$ vector bundle $V$, $r\geq1$, on an $S$-stack $X$, the actual class-power map is an equivalence:

$$\sum_{i=0}^{r-1}c_1(\mathcal O(1))^i p^*:\bigoplus_{i=0}^{r-1}\Sigma_{\mathbb P^1}^{-i}E^{X_+}\xrightarrow{\ \simeq\ }E^{\mathbb P(V)_+},\qquad p:\mathbb P(V)\to X.$$

The $i=0$ term is pullback, and all higher terms use the same first-class maps; for a linearly oriented ring they are the actual multiplication powers. This is the bundle version of PBF under its stated hypothesis, over arbitrary qcqs derived bases. None of these constructions assumes $\mathbb A^1$-invariance or finite quasi-smooth transfers.

## Statement references

[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)

## External input

Import the symmetric model, coefficient adjunctions and shift identifications, orientation criterion, fundamental-stability theorem and conditional bundle formula only at the specified source locators, in the framework supplied by the declared definition. No local proof of these substantial inputs is claimed. Applications must supply the actual spectrum, its orientation, the compactness or multiplicative hypotheses required by the invoked assertion, and PBF before applying the bundle formula. An abstract bigraded oriented theory alone does not provide those data.
