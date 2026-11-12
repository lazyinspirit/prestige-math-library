---
id: lem-author-16f30f6b95cb-lowweight-first-chern-and-k-one-determinant
kind: lemma
title: Actual first-Chern and determinant maps of the first EM layer
status: published
domain: mathematics
deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard
  - lem-unit-section-of-k-one-determinant
  - lem-nisnevich-line-bundle-torsors
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - lem-filtered-stage-exact-sequence
  - lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target
  - def-stable-spectra-interface
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_roles:
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  lem-author-16f30f6b95cb-lowweight-zero-projection-rank: mathematical-premise
  lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard: mathematical-premise
  lem-unit-section-of-k-one-determinant: mathematical-premise
  lem-nisnevich-line-bundle-torsors: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 20
formulation_deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard
  - lem-unit-section-of-k-one-determinant
  - lem-nisnevich-line-bundle-torsors
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-derived-sections-on-sites
  - def-stable-spectra-interface
argument_deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard
  - lem-unit-section-of-k-one-determinant
  - lem-nisnevich-line-bundle-torsors
  - math:def-axiom-of-choice
  - math:def-field
  - math:def-scheme
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-grothendieck-universe-closure-convention
  - def-motivic-filtration
  - def-motivic-cohomology
  - def-derived-sections-on-sites
  - lem-eilenberg-maclane-shift-index
  - lem-filtered-stage-exact-sequence
  - lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target
  - def-stable-spectra-interface
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
sources:
  references:
    - title: "Jacob Lurie, Higher Topos Theory: discrete spaces"
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Section 5.5.6 opening and Definition 5.5.6.1, pp.492–493; Remark
        5.5.6.4, p.494; Proposition 5.5.6.18, p.497 (PDF indices 509–511,514).
      statement: Vanishing positive homotopy groups at all basepoints characterize
        discrete spaces. Zero-truncation is the discrete component set,
        universal for maps to discrete spaces.
      hypotheses: Kan-complex spaces in compatible universes; apply the
        presentable-category truncation adjunction only to spaces.
      reading_limits: Freshly read these statements in primary PDF text. Import their
        foundations; no sheaf-level Whitehead principle is used.
---

## Statement
Assume the Axiom of Choice and fixed universe bounds for the supplied perfect K-model and derived sections. For each scheme use the small Nisnevich site specified by the torsor comparison: a sufficiently small full subcategory of étale schemes containing the terminal scheme and closed under the fibre products and Zariski refinements used in descent. Work on a compatible universe-bounded smooth big Nisnevich site when comparing stack maps, and restrict to these small sites for derived sections.

Let X be smooth of finite type over any field k. Under the canonical weight-one comparison, the actual first-stage projection induces

$$\widetilde K_0(X)=\pi_0Fil^1K(X)\longrightarrow H^{2,1}_{mot}(X)=\operatorname{Pic}(X),\qquad x\longmapsto c_1(x)=\det(x),$$

and

$$K_1(X)=\pi_1Fil^1K(X)\longrightarrow H^{1,1}_{mot}(X)=\Gamma(X,\mathcal O_X)^\times,\qquad z\longmapsto\det(z).$$

The first determinant/Pic map is the actual natural perfect-complex determinant map, with the alternating graded-line convention, and on [E]−rank(E) it is the determinant line of E. It is not inferred by comparing Picard groups only on affine trivializations. No smooth projection is identified here with a singular motivic projection without a separate functorial comparison.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. Use compatible nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, with the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence is separately assumed. Retain the supplied perfect-model, torsor and derived-section bounds. For the weight-zero comparison use the very same universe-bounded general qcqs prime-field cdh site used by [F1], small in the larger universe, with its specified scheme objects; do not replace it by a small Nisnevich or finite-type site. Stack comparison uses the compatible smooth big Nisnevich site, and line-bundle evaluation uses the stated small sites. Choice is inherited by the enhanced-model and spectral inputs in [F2] and [F5], by derived sections in [F5], and by the torsor-section selections in [F3]. These uses occur at steps 1.1–2.1.

**Given:** Choice, the stated universe and site-size bounds, the smooth scheme, the actual EM projection and its canonical gr¹ comparison.

**Goal:** Identify both homotopy-group maps with the fixed first-Chern/determinant operations.

[F0] The field and scheme meanings are those of [[math:def-field]] and [[math:def-scheme]]. A $k$-scheme is a scheme with structure morphism $X\to\operatorname{Spec}k$, as in [[math:def-scheme-over-base]]; smoothness and finite type refer to that morphism, using [[math:def-smooth-morphism-schemes]] and [[math:def-locally-finite-type-and-finite-type-morphism]]. The rank supplier in [F1] proves its qcqs domain check for these schemes in its Facts [F0] and step 1.1. Perfect complexes, the actual perfect K-space, its zero pointing, graded lines, the Euler-rank map and the line-bundle stack are specified in [F2]. The line-bundle, Picard group and unit conventions are those in [F3]. Write $\widetilde K_0$ for the kernel of the locally constant rank map. The complexes and cohomological notation $H^{p,q}_{\mathrm{mot}}(X)=H^p(\mathbb Z(q)_{\mathrm{mot}}(X))$ use [[def-motivic-cohomology]], with the arbitrary field specified here.

[F1] [[lem-author-16f30f6b95cb-lowweight-zero-projection-rank]] identifies $\pi_0q_0$ with the locally constant rank function and identifies the first-stage groups. [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] supplies the actual natural weight-zero equivalence $\operatorname{gr}^0K\simeq R\Gamma_{\mathrm{cdh}}(-,\mathbb Z)$, with $\mathbb Z$ in degree zero and $H^0$ equal to locally constant integers on smooth finite-type field schemes. It also identifies $\Omega^\infty\operatorname{gr}^1K$ with the actual line-bundle stack $B\mathbb G_m$ via $c_1$, and supplies the natural pointed lift $\kappa=-a$ of $L\mapsto[L]-1$, retaining line isomorphisms.

[F2] [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] supplies the canonical perfect-complex determinant/Pic map and its first-Postnikov description, with local $\pi_0K=\mathbb Z$ and π₁K=$G_m$ through the actual rank/determinant maps.

[F3] [[lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard]] proves q₁κ=id as a stack map under [A1]. Under the same assumptions, [[lem-unit-section-of-k-one-determinant]] supplies the actual K₁ determinant and its section through the specified enhanced realizations. [[lem-nisnevich-line-bundle-torsors]] fixes the frame-torsor conventions for Pic and units on the specified small Nisnevich sites; its inverse uses Choice to select a set-indexed family of local torsor sections, followed by effective descent. These inherited uses enter steps 1.1–2.1.

[F4] In [F2], the connected rank fiber is formed after ordinary space-valued Nisnevich sheafification. Its left exact sheafification preserves the rank-fiber square and its unit has the mapping universal property into sheaves. Thus a comparison proved on that sheafified fiber must be precomposed with this unit before it is evaluated on the original perfect K-space. No commutation of truncation with global sections is asserted.

[F5] [[def-motivic-filtration]] supplies the actual tower and its stage-zero equivalence with $K$. [[lem-filtered-stage-exact-sequence]] supplies its defining spectral fiber sequence $\operatorname{Fil}^1K\to K\xrightarrow{q_0}\operatorname{gr}^0K$. On the same cdh site of [A1], [[def-derived-sections-on-sites]] gives $H^n_{\mathrm{cdh}}(T,\mathbb Z)=0$ for $n<0$. [[lem-eilenberg-maclane-shift-index]] gives $\pi_i\operatorname{gr}^0K(T)=H^{-i}_{\mathrm{cdh}}(T,\mathbb Z)$. Use the homotopy-group and sphere-suspension conventions of [[def-stable-spectra-interface]] and the pointed adjunction $\Sigma^\infty\dashv\Omega^\infty$ of [[thm-author-e0b0bf18ed2b-stable-enhancement-input]]. In particular, applying that adjunction to pointed spheres identifies $\pi_i\Omega^\infty E$ with $\pi_iE$ for $i\geq0$ (components at $i=0$). [[lem-adjudicate-fd6358d333ef-spectrum-lifts-to-discrete-target]] proves preservation of the defining spectral fiber by $\Omega^\infty$, for any infinity-category with finite limits. Apply it to spaces object by object; naturality gives the corresponding fiber identity of presheaves.

[F6] Reference 0 supplies recognition of discrete spaces from vanishing positive homotopy groups and the universal factorization of a map into a discrete space through the component set. Apply this objectwise to spaces; no hypercompleteness or homotopy-sheaf detection principle is used.

## External input
Import only [F6] from [Lurie's Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf), at reference 0's locators and hypotheses. The rank-target identification, fiber comparison and determinant equality below are local deductions from the declared suppliers and this foundational input.

## Proof
**Given:** The actual first-stage projection and line-class lift, the canonical weight-one comparison, and the Choice and compatible site and universe hypotheses above.

**Goal:** Identify both original, globally evaluated maps by first comparing their factorizations into the line-bundle sheaf.

1.1 Work on the bounded smooth finite-type $k$-site of [F0], before sheafification. Put $D=\Omega^\infty\operatorname{gr}^0K$ and let $T$ be any object. By [F1] and [F5], $\pi_iD(T)=H^{-i}_{\mathrm{cdh}}(T,\mathbb Z)=0$ for every $i>0$. Translation in the infinite loop space identifies the homotopy groups in all components with those at zero, so [F6] makes $D(T)$ discrete. Its canonical component map and the natural $H^0$ identification in [F1] therefore give an objectwise natural equivalence $D\simeq\underline{\mathbb Z}$, where $\underline{\mathbb Z}(T)$ is the set of locally constant integer functions. The truncation universal property in [F6] applies to compatible presheaf maps as well: their factors are determined by their component functions. Consequently [F1]'s equality of $\pi_0q_0$ with rank identifies the actual space map $\Omega^\infty q_0$ with rank into this discrete presheaf, not just its induced group map. The target is the locally constant integer sheaf of [F2]. Apply [F5]'s fiber-preservation result objectwise to the supplied spectral fiber sequence; its naturality retains all presheaf restrictions. It gives $S_0:=\Omega^\infty\operatorname{Fil}^1K\simeq\operatorname{fib}_0(\Omega^\infty K\to\underline{\mathbb Z})$, naturally with its map to the original K-space. Now let $a$ be the ordinary space-valued Nisnevich sheafification of [F2] and [F4]. Left exactness and the rank-map comparison therefore identify $\widehat S=aS_0$ with the connected sheaf rank fiber in [F2]. Let $\eta:S_0\to\widehat S$ be the unit. Let $d:S_0\to B\mathbb G_m$ be the restriction of the actual determinant map of [F2]. Both $d$ and the actual $q_1:S_0\to B\mathbb G_m$ factor through $\eta$, since their target is already a sheaf. Write their factors as $\widehat q_1,\widehat d$ and put $\widehat\kappa=\eta\kappa$. The supplied determinant map makes $\widehat d_*:\pi_1\widehat S\to\mathbb G_m$ an isomorphism. The lift $\kappa$ lies over the actual line-class map $L\mapsto[L]-1$ of [F1], retaining line isomorphisms: an automorphism $u$ of the trivial line maps to its K-theory automorphism loop. By the unit-section and determinant normalization of [F2] and [F3], $\widehat d_*\widehat\kappa_*=1$. Also $\widehat q_1\widehat\kappa=q_1\kappa\simeq1$ by [F3]. Hence $\widehat\kappa_*=\widehat d_*^{-1}$ and $\widehat q_{1,*}=\widehat d_*$. Both factors have the pointed connected one-type $B\mathbb G_m$ as target, so truncation and the fully faithful one-type classification in [F2] identify them as pointed maps from $\widehat S$. Precomposing their homotopy with $\eta$ gives $q_1\simeq d$ on the original presheaf. This step uses neither sheafhood of the original K-space nor a claim that its global sections are connected. [A1, F0, F1, F2, F3, F4, F5, F6]

2.1 Evaluate this single homotopy of original maps at $X$, then take components and fundamental groups. By [F1], the source groups are the actual reduced $K_0$ and $K_1$, with the canonical stage identifications stated there. The canonical weight-one comparison and [F3] identify the target groups with $\operatorname{Pic}(X)$ and $\Gamma(X,\mathcal O_X)^\times$. By [F2], the determinant's component map is the class of the alternating determinant line of a perfect complex; at rank zero this is its ordinary determinant/Picard class, and on $[E]-\operatorname{rank}(E)$ it is $\det(E)$. Its loop map is the actual K-one determinant of [F3], normalized by matrix automorphisms and the unit section. These give exactly the two displayed formulas with the positive normalization fixed by $q_1\kappa\simeq1$. Pullback of the homotopy along the sheafification unit occurred before evaluation, so the conclusion retains global line-bundle gluing data. No assertion of global-section invariance under arbitrary sheafification, or comparison with a singular projection, is used. [A1, F0, F1, F2, F3, F4, F5, step 1.1] ∎
