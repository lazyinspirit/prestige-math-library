---
id: thm-author-32887006bdff-non-a1-whitney-input
kind: theorem
title: External non-A¹ projective-relation filtered and Whitney theorem
status: published
domain: mathematics
deps:
  - thm-author-32887006bdff-p1-spectrum-input
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
dependency_roles:
  thm-author-32887006bdff-p1-spectrum-input: mathematical-premise
  def-adjudicate-c387df8ff29b-non-a1-spectrum-framework: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author
        PDF,14April2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: §§2.1.1–2.1.5, p. 14; §2.2.8, p. 15; §§3.1.3–3.1.8, pp. 21–22;
        Definition 3.2.1 and Lemma 3.2.3, p. 23; Definition 4.4.1, §4.4.2 and
        Lemma 4.4.3(ii)–(iii), including the full proof, pp. 30–31 (printed
        pagination).
      hypotheses: Homotopy-commutative linearly oriented motivic ring spectrum over a
        qcqs derived scheme S in the source-native geometry and compatible
        universes; PBF is assumed separately. Bundles have positive constant
        rank on Y in Sm_S; the Whitney input is a fiber sequence of vector
        bundles. The positive-rank coefficient definition is not a definition
        for the zero bundle. No A¹-invariance or smoothness over a field is
        required.
      statement: Definition 4.4.1 uniquely defines c_i(V) in E^{2i,i}(Y) by the
        quotient-projective relation in E^{2r,r}(P_Y(V)), with c_0=1, and
        defines the total polynomial. Lemma 4.4.3(ii) gives its product over
        line quotients of a subbundle filtration; part (iii) gives
        multiplicativity for a fiber sequence of vector bundles.
      reading_limits: "Historical source-reading record from the incoming item: This
        repair read the retained primary PDF dated April 14, 2025 (SHA256
        ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261),
        printed pp. 14–15, 21–23 and 30–31, and checked the matching live author
        PDF text and date. Read Definition 4.4.1, §4.4.2, Lemma 4.4.3 with its
        complete proof across pp. 30–31, and Lemma 3.1.8 with its proof. The
        splitting trick cited there from AI22, the flag reduction, and the
        formal-group-law construction are accepted only as parts of the
        precisely imported theorem; AI22, SAG and the categorical foundations
        were not independently read or reconstructed. The two direct consumer
        bodies were inspected for compatibility; their deeper supplier chains
        were not re-audited. Web PDF screenshots failed; no visual source check
        is claimed. Current consumer maintenance read this item, its exact
        declared supplier interfaces and the retained citation contract. It adds
        the explicit formulation and argument dependency-use declarations
        without changing the body or claiming fresh primary-source reading,
        proof reconstruction or independent acceptance."
dependency_level: 2
formulation_deps:
  - thm-author-32887006bdff-p1-spectrum-input
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
argument_deps:
  - thm-author-32887006bdff-p1-spectrum-input
  - def-adjudicate-c387df8ff29b-non-a1-spectrum-framework
---

## Statement

Use the source-native derived geometry and motivic spectrum framework, with compatible universe and site-size bounds. Let $S$ be a quasi-compact, quasi-separated (qcqs) derived scheme and let $\mathcal E$ be a homotopy-commutative linearly oriented motivic ring spectrum over $S$, satisfying the source's actual class-power projective bundle formula (PBF) as an additional hypothesis. Write $\mathrm{Sm}_S$ for its qcqs smooth derived $S$-schemes. For $Z\in\mathrm{Sm}_S$, write $\mathcal E^i(Z)=\mathcal E^{2i,i}(Z)$ and $\mathcal E^*(Z)=\bigoplus_{i\in\mathbb Z}\mathcal E^i(Z)$, with the cohomology products induced by the ring spectrum. Here $c_1(L)\in\mathcal E^1(Z)$ is the first Chern class of a line bundle $L$ from the chosen linear orientation.

Let $V$ be a vector bundle of constant rank $r\geq1$ on $Y\in\mathrm{Sm}_S$. Let $p:\mathbb P_Y(V)\to Y$ classify rank-one quotients of $V$, let $\mathcal O(1)$ be its tautological quotient line, and set $\xi=c_1(\mathcal O(1))\in\mathcal E^1(\mathbb P_Y(V))$. There are unique coefficients $\widetilde c_i(V)\in\mathcal E^i(Y)$ for $1\leq i\leq r$, with $\widetilde c_0(V)=1$, such that

$$\sum_{j=0}^r(-1)^j\xi^j p^*\widetilde c_{r-j}(V)=0\quad\text{in }\mathcal E^r(\mathbb P_Y(V))=\mathcal E^{2r,r}(\mathbb P_Y(V)).$$

For a formal variable $t$, define the total Chern polynomial $\widetilde c_t(V)=\sum_{i=0}^r\widetilde c_i(V)t^i\in\mathcal E^*(Y)[t]$. If $0=V_0\subset V_1\subset\cdots\subset V_r=V$ is a filtration by subbundles with line quotients $L_s=V_s/V_{s-1}$, then

$$\widetilde c_t(V)=\prod_{s=1}^r(1+c_1(L_s)t).$$

Every fiber sequence $V'\to V\to V''$ of positive-constant-rank vector bundles on $Y$ satisfies

$$\widetilde c_t(V)=\widetilde c_t(V')\widetilde c_t(V'').$$

The fiber sequence is taken in the source's derived category of quasi-coherent modules on $Y$. Both identities are in $\mathcal E^*(Y)[t]$. The coefficient definition here starts at positive rank; rank-zero conventions in applications are separate from this defining relation.

## Statement references

[[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework]]

[[thm-author-32887006bdff-p1-spectrum-input]]

## External input

Import the coefficient definition and both identities from Annala–Iwasa Definition 4.4.1 and Lemma 4.4.3(ii)–(iii), at the exact source locators above. The declared framework supplies the source-native derived objects, smooth site, cohomology and linear first-class conventions. The declared spectrum theorem supplies the actual bundle PBF used for existence and uniqueness of the coefficients. The full geometric argument for the identities, including its flag reduction, splitting trick, vanishing argument and formal group law, is imported through this reference; no local reconstruction of that argument is claimed.

This item is the general conditional theorem. Each application must separately supply its actual spectrum, products, linear orientation and PBF. No particular $X$ or spectrum over $X$ is supplied here, and no smoothness of the base over a field is assumed. Definition 4.4.1 does not define a rank-zero class by a relation on the empty projective bundle; applications may explicitly set $\widetilde c_t(0)=1$ and handle zero ranks separately.
