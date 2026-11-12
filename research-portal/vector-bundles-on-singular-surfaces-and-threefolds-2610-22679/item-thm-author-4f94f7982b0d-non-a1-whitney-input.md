---
title: External non-A¹ projective-relation filtered and Whitney theorem
status: published
research_item: thm-author-4f94f7982b0d-non-a1-whitney-input
dependency_level: 1
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF,
        14 April 2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3(ii)–(iii), including its full proof,
        printed pp. 30–31; native geometric conventions §§2.1.1–2.1.5, p. 14;
        linear orientation §§3.1.3–3.1.5, pp. 21–22; Definition 3.2.1 and Lemma
        3.2.3, p. 23.
      hypotheses: A qcqs derived base S in the source-native geometric setting with
        compatible size universes; a homotopy-commutative linearly oriented
        motivic ring spectrum over S satisfying the actual class-power PBF; Y is
        smooth and qcqs over S. Definition 4.4.1 requires positive constant
        rank. For the stated Whitney formula each of the three bundles has
        constant rank; the positive-rank cases are imported and rank-zero cases
        are extended locally. No A1-invariance or finite quasi-smooth transfers
        are assumed.
      statement: Definition 4.4.1 defines the unique positive-rank coefficients in
        E^i(Y), with c0=1, by the line-quotient projective relation in
        E^r(P(V)), and defines their total polynomial. Lemma 4.4.3(ii) gives the
        product for a subbundle filtration with line quotients; (iii) gives
        multiplication for a fiber sequence of vector bundles. Lemma 3.2.3
        supplies the bundle PBF used for uniqueness. Zero coefficients above
        rank and the zero-bundle polynomial are explicit local conventions, not
        an assertion about the scope of Definition 4.4.1.
      reading_limits: Read the extracted text of the cached April 14, 2025 primary PDF
        (SHA256 recorded below), printed p. 14, pp. 21–23 and pp. 30–31,
        including the complete proof of Lemma 4.4.3. Opened the live author PDF
        and checked its date and corresponding definition and lemma passages.
        Read both declared supplier bodies and both direct consumer bodies. The
        empty-base extension is a local consequence of the declared
        Zariski-sheaf framework, not an additional imported Whitney theorem. The
        geometric splitting argument and its AI22 input remain imported; neither
        the upstream categorical machinery nor AI22 nor SAG was independently
        reconstructed or audited. This records interface and application
        checking, not acceptance.
      source_sha256: ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261
external_input: true
---

PDF p. 8: Actual Chern and Whitney identities; PDF p. 11: Total virtual Chern class

## Prerequisites

- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input)
- [` Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF, 14 April 2025) · Definition 4.4.1 and Lemma 4.4.3(ii)–(iii), including its full proof, printed pp. 30–31; native geometric conventions §§2.1.1–2.1.5, p. 14; linear orientation §§3.1.3–3.1.5, pp. 21–22; Definition 3.2.1 and Lemma 3.2.3, p. 23. `](https://ryomei.com/papers/MotSp.pdf)


## Statement
Fix compatible size universes and use the source-native derived geometric setting. Let $S$ be a quasi-compact quasi-separated (qcqs) derived scheme and let $\mathrm{Sm}_S$ denote its smooth qcqs derived schemes with the Zariski topology. Let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over $S$, satisfying the actual class-power projective bundle formula (PBF) for its chosen orientation. Here a rank-$r$ vector bundle means a quasicoherent module locally equivalent to $\mathcal O^{\oplus r}$, and a line bundle has rank one. A fiber sequence of bundles means that the first term is the homotopy fiber of the second map in the stable category of quasicoherent modules on the base.

For an $S$-stack $T$, write $E^i(T)=\mathcal E^{2i,i}(T)=\pi_0\operatorname{Map}(\Sigma^\infty_{\mathbb P^1}T_+,\Sigma_{\mathbb P^1}^{i}\mathcal E)$, where the mapping space is taken in motivic spectra over $S$, and write $E^*(T)=\bigoplus_{i\in\mathbb Z}E^i(T)$. Products are the cup products induced by the given ring multiplication; pullback $f^*$ is induced by a map $f$ of $S$-stacks. For a bundle $V$ of positive constant rank $r$ on $Y\in\mathrm{Sm}_S$, let $p:\mathbb P(V)\to Y$ classify line quotients of $V$, let $p^*V\to\mathcal O_{\mathbb P(V)}(1)$ be the tautological quotient, and put $\xi=c_1(\mathcal O_{\mathbb P(V)}(1))\in E^1(\mathbb P(V))$ for the first class of the chosen linear orientation.

There are unique classes $\widetilde c_i(V)\in E^i(Y)$ for $1\leq i\leq r$ satisfying the quotient-projective relation, with $\widetilde c_0(V)=1\in E^0(Y)$:
$$\sum_{j=0}^r(-1)^j\xi^j p^*\widetilde c_{r-j}(V)=0\quad\text{in }E^r(\mathbb P(V)).$$
Define the total polynomial by $\widetilde c_t(V)=\sum_{i=0}^r\widetilde c_i(V)t^i\in E^*(Y)[t]$, where $t$ is a central formal variable. Set $\widetilde c_i(V)=0$ for $i>r$. For the zero bundle of constant rank zero, adopt the local convention $\widetilde c_0(0)=1$, $\widetilde c_i(0)=0$ for $i>0$, and hence $\widetilde c_t(0)=1$.

If $V$ has a subbundle filtration $0=V_0\subset V_1\subset\cdots\subset V_r=V$ with line quotients $L_s=V_s/V_{s-1}$, meaning that each $V_{s-1}\to V_s\to L_s$ is a fiber sequence of vector bundles, then
$$\widetilde c_t(V)=\prod_{s=1}^r(1+c_1(L_s)t)\quad\text{in }E^*(Y)[t].$$
Here $c_1(L_s)$ is the class of the same orientation. Every fiber sequence $V'\to V\to V''$ of vector bundles on $Y$ for which all three bundles have constant ranks $r',r,r''\geq0$ satisfies
$$\widetilde c_t(V)=\widetilde c_t(V')\widetilde c_t(V'')\quad\text{in }E^*(Y)[t].$$
The filtered identity includes the empty filtration of the zero bundle, with empty product $1$; the fiber-sequence identity includes zero end terms with the stated convention. No polynomial for a bundle of varying rank on a disconnected base is being used in these formulas.

## External input
The positive-rank definition, coefficient groups, quotient-projective relation and total polynomial are imported from Annala–Iwasa Definition 4.4.1; the positive-rank filtered and fiber-sequence identities are imported from Lemma 4.4.3(ii)–(iii), printed pp. 30–31 of the author PDF dated 14 April 2025. The geometric splitting and vanishing argument in that lemma is imported as an established result, not claimed as a local reconstruction.

The native derived geometric setting, its vector bundles, smooth site, cohomology notation and linear orientation are those of [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework). The bundle PBF in [thm-author-4f94f7982b0d-p1-spectrum-input](item-thm-author-4f94f7982b0d-p1-spectrum-input) supplies the uniqueness input used by Definition 4.4.1: powers $1,\xi,\ldots,\xi^{r-1}$ give the cohomological direct-sum decomposition, so the expansion of $\xi^r$ determines the displayed coefficients uniquely. This PBF is a hypothesis on the actual oriented spectrum.

The zero-bundle polynomial and the coefficients above rank are local conventions. Their compatibility with the identities is checked as follows. A bundle isomorphism preserves the quotient projective bundle, its tautological line and its first class, hence preserves the uniquely defined coefficients. If an end term in a fiber sequence is zero, the other map is an equivalence, which proves the identity using $\widetilde c_t(0)=1$. When $Y$ is nonempty, take a point $y$ with residue field $\kappa(y)$. Derived pullback along $\operatorname{Spec}\kappa(y)\to Y$ preserves fiber sequences; the pulled-back bundles are vector spaces concentrated in degree zero, so their cohomology gives a short exact sequence and hence $r=r'+r''$. Thus, on a nonempty base, a zero middle term forces both end terms to have rank zero and therefore to be zero bundles. If $Y$ is empty, all its bundles are zero, independently of their specified ranks. The empty-cover condition for Zariski sheaves makes evaluation of each shifted motivic spectrum at $Y$ contractible, so $E^i(Y)=0$ for every $i$; in the resulting zero coefficient ring the unit is zero and all the stated polynomial identities hold. No numerical rank equality is asserted in this empty-base case. The filtered rank-zero identity is the empty product. These elementary extensions are local adaptations, rather than claims that Definition 4.4.1 defines rank-zero classes.

For any specified qcqs derived scheme $X$ and any specified spectrum $\mathcal E_X$ satisfying all the stated ring, linear-orientation and actual PBF hypotheses over $X$, one may specialize to $S=X$ and $Y=X$ with its smooth identity map. This is a conditional specialization: checking those hypotheses for a particular model is required in its application. Smoothness of $X$ over a further ground field is not required by this input.
