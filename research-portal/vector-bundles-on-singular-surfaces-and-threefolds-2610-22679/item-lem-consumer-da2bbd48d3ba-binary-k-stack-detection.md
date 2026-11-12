---
title: Binary detection by the ordinary rank-zero K-stack comparison
status: draft
research_item: lem-consumer-da2bbd48d3ba-binary-k-stack-detection
dependency_level: 15
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (14 April
        2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §3.3.2–3.3.4, printed p. 24, especially the localization-generators
        description in the proof of Lemma 3.3.4
      statement: Elementary-blowup excision localizes motivic spectra at all maps R
        tensor chi_n, with R any motivic spectrum.
      hypotheses: The source-native qcqs derived base, presentable stack-module
        coefficient category and compatible size bounds; chi_n is the elementary
        blowup-square pushout map.
      reading_limits: For this repair, read the live April 14, 2025 primary PDF text
        of §§3.3.1–3.3.4, including the displayed proof of Lemma 3.3.4. Import
        only its localization test; the cotensor application is local. Also
        checked §§2.2.1–2.2.6, 2.2.10, Theorem 2.4.5 and its displayed proof,
        Corollary 2.4.8, and §§3.1.5–3.1.7 against the existing
        fundamental-stabilization supplier. Brown representability and the
        categorical foundations remain imported, not reconstructed. No
        independent source audit or binary theorem is claimed.
---

## Prerequisites

- [thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)
- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory (14 April 2025) · §3.3.2–3.3.4, printed p. 24, especially the localization-generators description in the proof of Lemma 3.3.4 `](https://ryomei.com/papers/MotSp.pdf)


## Statement
Assume the Axiom of Choice and compatible site and universe bounds, with $\omega$ in the data universe. Use the source-native smooth Zariski stack category over a qcqs base $S$. Let $E$ be a homotopy-commutative oriented motivic ring satisfying PBF and the coefficient hypotheses of the supplied K-stack mapping theorem. Let $M$ be an $E$-module in its elementary-blowup-excision localization, and put $Y=\Omega^\infty_{\mathbb P^1}M$. Write $B_\infty=\operatorname*{colim}_n\mathrm{Vect}_{n,S}$ under addition of a trivial line, $\widetilde{\mathcal K}$ for the rank-zero K-theory stack, and $u:B_\infty\to\widetilde{\mathcal K}$ for the canonical reduced object map. For every stack $T$, restriction induces an equivalence of unpointed mapping spaces
$$\operatorname{Map}(\widetilde{\mathcal K}\times T,Y)\simeq\operatorname{Map}(B_\infty\times T,Y).$$
In particular $u\times u$ detects homotopy classes of maps from $\widetilde{\mathcal K}\times\widetilde{\mathcal K}$ to $Y$. These are maps in the ordinary source-native Zariski sheaf category, before any optional hypercompletion. No additivity of the tested map is assumed.

## Statement references
[thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input)

[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible universe closure convention of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), with the separate existence and size bounds in the Statement. These are the inherited premises of the categorical and K-stack inputs in steps 1.1–2.1.

[F1] [thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input](item-thm-adjudicate-0e33ede8caef-k-stack-mapping-and-extension-input) supplies the pointed equivalence $u^*:\operatorname{Map}_*(\widetilde{\mathcal K},\Omega^\infty_{\mathbb P^1}N)\simeq\operatorname{Map}_*(B_\infty,\Omega^\infty_{\mathbb P^1}N)$ for every excisive $E$-module $N$, natural in $N$. The sources and their specified basepoints are those of that supplier.

[F2] The framework supplies presentable coefficient categories, their colimit-preserving stack action, motivic suspension and its evaluation adjunction. For an unpointed stack $T$, write $N^{T_+}$ for the cotensor, right adjoint to $T_+\otimes-$. It retains the $E$-module action by transposing the action on $N$. Evaluation gives $(\Omega^\infty_{\mathbb P^1}N)^T\simeq\Omega^\infty_{\mathbb P^1}(N^{T_+})$. Here $T_+$ adjoins a disjoint point, and the superscript on spaces is cartesian internal Hom. [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)

[F3] Source record 0 supplies the excision localization test: its generating maps are $R\otimes\chi_n$ for all motivic spectra $R$, where $\chi_n$ is the map from the pushout of the three other corners of the elementary blowup square to $\mathbb A^n$. Being local means that mapping these maps into the target gives equivalences.

[F4] [thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input) supplies orientation inheritance by $E$-modules, orientable implies fundamental, and the fundamental coefficient-stabilization equivalence. Its hypotheses are the already assumed compact generation, preservation of filtered colimits by $(-)^{\mathbb P^1}$, and multiplicativity of the ambient coefficient category $\mathcal V=\mathrm{St}_S$; the K-stack supplier retains these hypotheses and includes this coefficient category. The cotensor in [F2] stays in that same category. Consequently every $E$-module $N$, including $N^{T_+}$, has a lift $\widehat N$ to motivic spectra with coefficients in $\mathrm{Sp}(\mathrm{St}_S)$, with $N\simeq\Omega^\infty\widehat N$. Here $\Omega^\infty$ is ordinary coefficient evaluation, applied levelwise, distinct from $\Omega^\infty_{\mathbb P^1}$. Thus $\Omega^\infty_{\mathbb P^1}N\simeq\Omega^\infty(\Omega^\infty_{\mathbb P^1}\widehat N)$ is a group-like infinite-loop object of $\mathrm{St}_S$, with zero, addition and inverse. Ordinary spectral conventions are those of [def-stable-spectra-interface](item-def-stable-spectra-interface); the passage from these motivic modules to spectral coefficients uses the fundamental-stabilization supplier. No compactness or filtered-colimit preservation of $(-)^{T_+}$ is required.

## External input
Source record 0 imports only the excision-localization test in [F3]. The one-variable K-stack comparison is supplied by [F1], and the orientation and fundamental-stabilization inputs by [F4]. The product comparison below is a local composition using cotensor adjunctions; it is not attributed to a stated binary theorem in that paper and does not identify ordinary and hypercomplete sections.

## Proof
**Given:** $S,E,M,T,u$, Choice and the compatible size bounds as in the Statement.

**Goal:** Apply the supplied one-variable comparison to a second source variable without changing the coefficient target or sheaf category.

1.1 If $N$ is excision-local, then so is $N^{T_+}$. Indeed [F2] identifies the mapping test for $R\otimes\chi_n$ into this cotensor with the test for $(R\otimes T_+)\otimes\chi_n$ into $N$. This is an equivalence by [F3], since $R\otimes T_+$ is another permitted motivic spectrum. The action in [F2] makes the cotensor an $E$-module, so [F1] applies to it. For either this cotensor or the original module, [F4] supplies an orientation, hence fundamentality, and then fundamental stabilization in the same compactly generated multiplicative coefficient category with filtered-colimit-preserving $\mathbb P^1$ cotensor. For each such module $Q$, its evaluated target $Z=\Omega^\infty_{\mathbb P^1}Q$ is therefore a group-like infinite-loop sheaf: its lift evaluates to a spectrum object, whose compatible circle-loop structures supply coherent addition and inverse. For a pointed stack $p:\mathbf1\to P$, let $!:P\to\mathbf1$ be the terminal map. Evaluation and subtraction define $f\mapsto(f\circ p,f-(f\circ p)\circ!)$ from $\operatorname{Map}(P,Z)$ to $\operatorname{Map}(\mathbf1,Z)\times\operatorname{Map}_*(P,Z)$; the second component includes the zero homotopy supplied by inverse and unit. Its inverse sends $(a,g)$ to $a\circ!+g$. The coherent group identities give the two composite homotopies, so this is an equivalence of spaces, natural for pointed maps of $P$. Since $u$ preserves the specified basepoints, restriction is the identity on the constant-value factor and is [F1] on the pointed factor. Hence [F1] also gives the unpointed equivalence, including paths. [A1, F1, F2, F3, F4]

2.1 Cartesian currying and the evaluation adjunction in [F2] identify maps $\widetilde{\mathcal K}\times T\to Y$ with maps $\widetilde{\mathcal K}\to\Omega^\infty_{\mathbb P^1}(M^{T_+})$, and similarly with $B_\infty$ in place of $\widetilde{\mathcal K}$. Apply step 1.1 to obtain the displayed equivalence. First take $T=\widetilde{\mathcal K}$, and then interchange factors and take $T=B_\infty$. The resulting composite is restriction along $u\times u$, so it is an equivalence on mapping spaces and injective on their components. In particular a map becoming nullhomotopic after that restriction is already nullhomotopic. All adjunctions and [F1] operate in the ordinary source-native category, so this conclusion uses no replacement of the coefficient sections by hypercomplete ones. [F1, F2, F4, step 1.1] ∎
