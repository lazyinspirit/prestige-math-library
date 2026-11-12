---
title: Source-specific non-A¹ motivic spectrum framework and hypotheses
status: draft
research_item: def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
dependency_level: 0
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF,
        14 April 2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §§1.1.1–1.1.6, pp. 6–7; §§1.2.1–1.2.4 and 1.3.1–1.3.14, pp. 7–10; §2
        opening and §§2.1–2.2.10, pp. 14–15; §§2.3.1–2.3.2, p. 16; Construction
        2.4.1, p. 18; Theorem 2.4.5, p. 19, and Remark 2.4.6, p. 20;
        §§3.1.1–3.1.5, pp. 21–22; Definition 3.2.1 and Lemma 3.2.3, p. 23
      statement: The native derived smooth Zariski site and space-valued stacks,
        presentable coefficient modules and multiplicativity, pointed projective
        line, symmetric-sequence sphere modules and Ω-condition, motivic
        suspension/evaluation and coefficient stabilization, Picard first-class
        retractions, boundary retraction defining fundamentality, and reduced
        PBF are the framework specified in these sections. Projective bundles
        classify line quotients; their unreduced class-power map has a constant
        summand. Under the two coefficient compactness hypotheses, Theorem 2.4.5
        identifies the fundamental subcategories of motivic spectra with
        coefficients in V and in its ordinary stabilization Sp(V) by the
        coefficient suspension/evaluation adjunction. Remark 2.4.6 gives
        cohomology in every integer bidegree, agreeing with Construction 2.4.1
        and the nonnegative mapping-space convention. In §2.2.8, unreduced and
        reduced evaluation take objects of the coefficient category and its
        pointed category, respectively. In §2.2.1 the multiplicative structure
        supplies the specified symmetric monoidal left adjoint from stacks to
        coefficients.
      hypotheses: Any qcqs derived base in the source’s §2.1 convention, with
        compatible size universes. Coefficients are presentably tensored over
        its stack category. For fundamental stability retain compact generation
        and preservation of filtered colimits by the P¹ cotensor; for
        ring/module assertions retain multiplicativity. PBF is a separate
        property of an oriented spectrum. No A¹-invariance or transfer structure
        is assumed. Stack evaluation in a multiplicative coefficient category
        uses its specified stack-to-coefficient functor; a general coefficient
        module does not carry this additional evaluation convention.
      reading_limits: For this adjudication, read the extracted text of the cached
        April 14, 2025 primary PDF, SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261,
        printed pp. 6–10, 14–16 and 18–23, including the complete Theorem 2.4.5
        statement and proof, Remark 2.4.6, Construction 2.4.1, and
        §§2.2.1–2.2.10. Opened the live author PDF, checked its April 14, 2025
        date, and read its extracted §§2.2.1–2.2.10. In particular §2.2.8
        evaluates coefficient objects, while §2.2.1 supplies the
        stack-to-coefficient functor in the multiplicative case. The item
        explicitly specifies the reduced pointed coefficient image by a pushout;
        its elementary existence justification uses the imported presentability,
        without claiming this formula is quoted verbatim from the source. The
        fundamental-stability application retains compact generation and
        preservation of filtered colimits by the P¹ cotensor; it does not assert
        stability for every motivic spectrum. The native derived geometric
        category is imported from §2.1; SAG was not read and no change-of-model
        comparison is claimed. Brown representability, categorical foundations
        and appendix inputs remain imported, not independently reconstructed or
        audited.
external_input: true
---

PDF p. 8: Framework for actual Chern and Whitney identities; PDF p. 11: Framework for the total virtual Chern class

## Prerequisites

- [` Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF, 14 April 2025) · §§1.1.1–1.1.6, pp. 6–7; §§1.2.1–1.2.4 and 1.3.1–1.3.14, pp. 7–10; §2 opening and §§2.1–2.2.10, pp. 14–15; §§2.3.1–2.3.2, p. 16; Construction 2.4.1, p. 18; Theorem 2.4.5, p. 19, and Remark 2.4.6, p. 20; §§3.1.1–3.1.5, pp. 21–22; Definition 3.2.1 and Lemma 3.2.3, p. 23 `](https://ryomei.com/papers/MotSp.pdf)


## Statement
The source-specific non-A¹ motivic spectrum framework is defined below.

## Definition

Use the derived geometric category fixed in Annala–Iwasa §2.1, including its smooth morphisms and vector bundles, as one imported framework. The source refers to Lurie's Spectral Algebraic Geometry for this category. No comparison with a category built from simplicial commutative rings is asserted here. Let $S$ be any quasi-compact, quasi-separated (qcqs) derived scheme in that convention. Fix compatible universes for its smooth site and the presentable categories below. Write $\mathrm{Sm}_S$ for the $\infty$-category of qcqs smooth derived $S$-schemes with Zariski covers. An $S$-stack is a sheaf of spaces (anima) on this site, and $\mathrm{St}_S$ is their $\infty$-category with cartesian product. These are space-valued sheaves with Zariski descent; no $\mathbb A^1$ localization is imposed.

Write $\mathrm{Pr}^L$ for presentable $\infty$-categories and colimit-preserving functors, with the tensor product of §1.1.4. Presentable means accessible and admitting small colimits. A presentably symmetric monoidal category is a commutative algebra object in $\mathrm{Pr}^L$. A coefficient category $\mathcal V$ defined over $S$ is a $\mathrm{St}_S$-module object in $\mathrm{Pr}^L$; its action preserves colimits in each variable, and a coefficient-linear functor respects that action. It is multiplicative when it also has a presentably symmetric monoidal structure and a compatible symmetric monoidal left adjoint $\mathrm{St}_S\to\mathcal V$. Write $X_{\mathcal V}$ for the image of a stack under this functor and $\mathbf1_{\mathcal V}$ for the tensor unit. A compact object $K$ has $\operatorname{Map}(K,-)$ preserving filtered colimits; compact generation means generation under colimits by a small family of compact objects. The additional compactness hypothesis in §§2.2.1 and 3.1.1 is that $(-)^{\mathbb P^1}:\mathcal V\to\mathcal V$ preserves filtered colimits. The source's fundamental-stability theorem uses both compactness hypotheses; multiplicativity is required for its ring and module assertions.

The pointed category $\mathcal V_*$ consists of objects equipped with a map from the terminal object $\ast_{\mathcal V}$; for any coefficient object $X\in\mathcal V$, write $X_+=X\sqcup\ast_{\mathcal V}$ with the second summand as basepoint. For stacks this is the usual disjoint-basepoint construction in $\mathrm{St}_S$. Pointed stacks act using the pointed tensor product. The projective line $\mathbb P^1$ is pointed at its infinity section, $\mathbb G_m$ is the multiplicative group pointed at $1$, and $S^1$ is the pointed circle. For a pointed stack $A$, the cotensor $E^A$ is right adjoint to $A\otimes-$; in particular $\Sigma_{\mathbb P^1}=\mathbb P^1\otimes-$ and $\Omega_{\mathbb P^1}=(-)^{\mathbb P^1}$. The category $\mathrm{Sp}(\mathcal V)$ is ordinary circle stabilization, that is, spectrum objects in $\mathcal V_*$, with the coefficient adjunction $\Sigma^\infty\dashv\Omega^\infty$. A stable $\infty$-category is pointed, has finite limits and colimits, and has a square cartesian exactly when it is cocartesian. This circle adjunction is distinct from $\mathbb P^1$ suspension and evaluation.

For a presentably symmetric monoidal $\mathcal C$ and a presentable $\mathcal C$-module $\mathcal D$, let $\mathcal D^\Sigma=\operatorname{Fun}(B\Sigma\mathbb N,\mathcal D)$ be symmetric sequences: a sequence of objects with coherent symmetric-group actions, with Day convolution induced by disjoint union of finite sets. Here $B\Sigma\mathbb N=\coprod_{n\geq0}B\Sigma_n$. Let $F_1(c)$ be the free symmetric sequence concentrated in degree one at $c\in\mathcal C$, and $S_c=\operatorname{Sym}(F_1(c))$ its free commutative algebra. A lax symmetric $c$-spectrum is an $S_c$-module in $\mathcal D^\Sigma$. Its bonding map has adjoint $E\to(s^-E)^c$, where $(s^-E)_n=E_{n+1}$ with restricted symmetric-group action. A $c$-spectrum is such a module for which this adjoint is an equivalence. For $\mathcal C=(\mathrm{St}_S)_*$, $\mathcal D=\mathcal V_*$ and $c=\mathbb P^1$, denote this full subcategory by $\mathrm{Sp}_{\mathbb P^1}(\mathcal V)$. Equivalently it is the formal inversion $\mathcal V_*[(\mathbb P^1)^{-1}]$: the universal presentable coefficient construction in which tensoring by $\mathbb P^1$ is invertible. A motivic ring spectrum means a homotopy-associative algebra there when $\mathcal V$ is multiplicative; an $E_1$-ring has coherently associative multiplication, and a commutative ($E_\infty$) algebra has coherently commutative multiplication.

For motivic spectra $R,E$ in $\mathrm{Sp}_{\mathbb P^1}(\mathcal V)$, put $E^{p,q}(R)=\pi_{2q-p}\operatorname{Map}(R,\Sigma_{\mathbb P^1}^qE)$ initially for $2q-p\geq0$, and put $E^n=E^{2n,n}$. Here $\operatorname{Map}$ is the mapping space. For a coefficient object $X\in\mathcal V$, evaluation uses $R=\Sigma^\infty_{\mathbb P^1}X_+$; reduced cohomology of a pointed coefficient object $A\in\mathcal V_*$ uses $R=\Sigma^\infty_{\mathbb P^1}A$ without adding a disjoint point. When $\mathcal V$ is multiplicative, evaluation on an $S$-stack $X$ means evaluation on its specified image $X_{\mathcal V}$, namely $R=\Sigma^\infty_{\mathbb P^1}(X_{\mathcal V})_+$. In the same multiplicative case, for a pointed $S$-stack $A$ with basepoint $\ast_S\to A$, its induced pointed coefficient object is the pushout $A_{\mathcal V}\sqcup_{(\ast_S)_{\mathcal V}}\ast_{\mathcal V}$, with basepoint from $\ast_{\mathcal V}$; reduced cohomology uses the suspension spectrum of that object. In particular, for $\mathcal V=\mathrm{St}_S$ these conventions recover unreduced evaluation on stacks and reduced evaluation on pointed stacks. A general coefficient module without a specified stack-to-coefficient functor has only the coefficient-object evaluation just defined. Cotensors by pointed stacks, such as those in the orientation and PBF clauses, instead use the given stack action and require no such functor. The right adjoint $\Omega^\infty_{\mathbb P^1}$ evaluates a motivic spectrum at level zero. With spectrum-valued coefficients the mapping object is a mapping spectrum and the same homotopy-group formula is defined in every integer degree. The fundamental-stability theorem supplies this interpretation for fundamental space-valued spectra.

The Picard stack $\mathrm{Pic}=\mathrm{Vect}_1$ sends a test scheme to its space of line bundles and isomorphisms, with tensor product and the trivial line as basepoint. More generally $\mathrm{Vect}_r$ classifies vector bundles locally isomorphic to $\mathcal O^{\oplus r}$. The class of the tautological line gives the pointed map $[\mathcal O(1)]:\mathbb P^1\to\mathrm{Pic}$. An orientation of $E$ is a retraction of $[\mathcal O(1)]\otimes\mathrm{id}_E:\mathbb P^1\otimes E\to\mathrm{Pic}\otimes E$, so its composite with this map is the identity of $\mathbb P^1\otimes E$. For a ring spectrum a linear orientation is such a retraction in right $E$-modules. It gives the first-class map $c_1(L):E\to(\Sigma_{\mathbb P^1}E)^{X_+}$ for a line bundle $L$ on a stack $X$; the trivial line gives zero. For a linear ring orientation these maps are multiplication by the corresponding first Chern classes.

The boundary $\partial:\mathbb P^1\to S^1\otimes\mathbb G_m$ comes from the two standard affine charts of $\mathbb P^1$ and their intersection $\mathbb G_m$, as in §2.3.1. A motivic spectrum $E$ is fundamental if $\partial\otimes\mathrm{id}_E$ admits a retraction, meaning a map back whose composite with $\partial\otimes\mathrm{id}_E$ is the identity of $\mathbb P^1\otimes E$. Write $\mathrm{Sp}_{\mathbb P^1}(\mathcal V)^{\mathrm{fd}}$ for this full subcategory. This is a condition on the actual spectrum, rather than an assumption of homotopy invariance.

For an oriented spectrum, PBF is the additional property that the actual first-class-power map $\bigoplus_{i=1}^n\Sigma_{\mathbb P^1}^{-i}E\to E^{\mathbb P^n}$ is an equivalence for every $n\geq1$. Here $\mathbb P^n$ has the standard section as basepoint and the cotensor is reduced; the $i$th map is the iterated, appropriately shifted $c_1(\mathcal O(1))$. For a linearly oriented ring these are its multiplication powers. For a vector bundle $V$ on a stack, $\mathbb P(V)$ uses rank-one quotients and $\mathcal O(1)$ is the tautological quotient line. The unreduced bundle formula uses $E^{\mathbb P(V)_+}$ and includes the $i=0$ pullback term. PBF is not included in the definition of orientation.

## Justification

The cited source supplies the existence and compatibility of the geometric site, coefficient categories and spectrum constructions used in this definition; the retraction and PBF clauses impose properties on these objects and do not assert that every object has them. The definition retains the source-native geometric model and makes no change-of-model claim. The reduced coefficient pushout exists because $\mathcal V$ is presentable and hence has the required colimit; its defining map from $\ast_{\mathcal V}$ supplies the point. For the identity coefficient functor on $\mathrm{St}_S$, the pushout is the original pointed stack.

## External input

The geometric site, higher-categorical coefficient and symmetric-sequence constructions, and the retraction and PBF definitions above are imported together from the specified source sections. Their existence and compatibility are part of that external framework. This item supplies formulation data; it supplies neither PBF for a particular theory nor a local proof of the categorical foundations. The source-native derived geometric category is retained without a change-of-model assertion.
