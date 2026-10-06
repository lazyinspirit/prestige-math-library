---
id: lem-arith-effective-ample-pair-and-group-descent
kind: lemma
title: "Effective ample-pair and group descent from a strict henselization"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-ample-invertible-sheaf
  - lem-extend-sections-from-nonvanishing-open
  - lem-arith-finite-translate-group-completion
  - lem-arith-affine-codimension-one-neighbourhood-and-divisors
  - lem-arith-group-model-with-abelian-generic-fibre-quasiprojective
  - lem-nonaffine-effective-affine-algebra-descent
  - lem-fpqc-cover-submersive
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-fpqc-descent-properness-components
  - thm-faithfully-flat-descent-of-flatness
  - lem-ag-geometric-regularity-field-tests
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - cor-morphisms-equal-on-dense-open-reduced-source
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 6.1/4, 6.1/6 and 6.5/1-6.5/2 (effective descent and group completions)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, and let $R^{\mathrm{sh}}$ be a chosen strict henselization. Let $U$ be a smooth separated finite-type $R$-scheme with a strict $R$-birational group law and let $U_{R^{\mathrm{sh}}}$ be its base change.

(a) [ample pair descent] If $(X',\mathcal L')$ is an ample pair over $R^{\mathrm{sh}}$ (a finite-type $R^{\mathrm{sh}}$-scheme with an ample invertible sheaf) equipped with a descent datum relative to $R\to R^{\mathrm{sh}}$, then there are a finite-type $R$-scheme $X$ and an ample invertible sheaf $\mathcal L$ on $X$ with $(X,\mathcal L)_{R^{\mathrm{sh}}}\cong(X',\mathcal L')$ compatibly with the datum.

(b) [group descent] If $H$ is a smooth separated finite-type $R^{\mathrm{sh}}$-group scheme with abelian generic fibre containing a fibre-dense open $U_{R^{\mathrm{sh}}}$ whose descent datum is effective, and if the group operations of $H$ are compatible with the canonical descent datum on $U_{R^{\mathrm{sh}}}$, then the compatible group descent datum on $H$ is effective: there is a smooth separated finite-type $R$-group scheme $G$ with $G_{R^{\mathrm{sh}}}\cong H$ compatibly with the operations and with the descended open $U\subseteq G$.

(c) [completion] In the commissioned abelian completion situation, where $U_K$ is the given abelian variety and $H/R^{\mathrm{sh}}$ is the group completion of the strict law on $U_{R^{\mathrm{sh}}}$ with a stable fibre-dense open $U$, the canonical descent datum on $U_{R^{\mathrm{sh}}}$ satisfies the triple cocycle and extends uniquely to a group descent datum on $H$; this datum is effective by (b), and the descended open is fibre-dense in $G$.

## Facts & Assumptions

**Given:** AC and DC, a discrete valuation ring $R$ with fraction field $K$ and residue field $k$, a strict henselization $R^{\mathrm{sh}}$, a smooth separated finite-type $R$-scheme $U$ with strict $R$-birational group law, and a group completion $H$ of the strict law on $U_{R^{\mathrm{sh}}}$.

[F1] The group completion of a strict birational group law over $R^{\mathrm{sh}}$ exists as a smooth separated finite-type group scheme containing the law as a fibre-dense open subscheme, is unique up to canonical isomorphism, and the stable fibre-dense open $U$ carries the strict law ([[lem-arith-finite-translate-group-completion]]).

[F2] An ample invertible sheaf has a finite cover by affine nonvanishing section opens. Every positive-power section $s$ has quasi-affine nonvanishing locus: raise the affine-cover sections $t_i$ and $s$ to the same degree; on $X_s$ the functions $t_i/s$ have affine principal nonvanishing loci covering $X_s$. Localization of sections identifies each such locus with the corresponding distinguished open of $\operatorname{Spec}\Gamma(X_s,\mathcal O)$, so the canonical map is an open immersion. These localization and section-extension statements are [[lem-extend-sections-from-nonvanishing-open]]; ampleness is [[def-ample-invertible-sheaf]]. The completion with abelian generic fibre is quasi-projective and admits an ample invertible sheaf $\mathcal O(D)$ cut out by a fibre-dense affine-complement divisor, after choosing a fibre-dense affine subopen of the stable open downstairs and pulling it back ([[lem-arith-group-model-with-abelian-generic-fibre-quasiprojective]], [[lem-arith-affine-codimension-one-neighbourhood-and-divisors]]).

[F3] Effective descent of modules and commutative algebras along faithfully flat maps is available, with the descended object described as the invariants; the same holds for graded algebras and their graded pieces ([[lem-nonaffine-effective-affine-algebra-descent]], [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]).

[F4] An fpqc covering morphism is submersive, so images of saturated open subschemes are open and can be tested after base change; compatible morphisms between the quasi-compact quasi-separated schemes used here descend along fpqc covers by the affine-cover argument in step 3.1; quasi-compact quasi-affine schemes embed as open subschemes of the spectra of their global-section algebras, retaining the open subscheme as part of the construction, and finite type, separatedness and flatness descend; smoothness will be checked from finite presentation and geometric regularity, and open immersions will be descended as stable open subschemes ([[lem-fpqc-cover-submersive]], [[lem-fpqc-descent-properness-components]], [[thm-faithfully-flat-descent-of-flatness]], [[lem-ag-geometric-regularity-field-tests]]).

[F5] Morphisms from a reduced source to a separated target agree if they agree on a schematically dense open. Rational maps descend along the faithfully flat smooth source maps in the cited interface; this is distinct from the fpqc base-extension morphism descent proved in step 3.1 ([[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]], [[cor-morphisms-equal-on-dense-open-reduced-source]], [[def-s-dense-open-and-s-rational-map]]).

## Proof

**Proof technique:** direct: descend the graded section algebra of an ample pair, glue the descended quasi-affine opens, then descend the group operations as compatible morphisms and use uniqueness of completions for the cocycle.

1.1 For an ample pair $(X',\mathcal L')$ with its compatible pair descent datum, form the graded section algebra $B=\bigoplus_{n\ge0}\Gamma(X',\mathcal L'^{\otimes n})$. Flat base change of sections on a finite affine cover and its intersections follows by tensoring their equalizer; hence the pair datum induces compatible descent data on each graded piece and on multiplication. Ampleness gives a finite cover of $X'$ by nonvanishing opens of positive-degree sections, each quasi-affine. These opens, rather than an asserted identity with $\operatorname{Spec}B$, will construct the descended scheme. [F2, F3, given, construct]

2.1 By effective affine algebra descent [F3] applied to the graded pieces, the datum descends $B$ to a graded $R$-algebra $B_0$ with $R^{\mathrm{sh}}\otimes_RB_0\cong B$ compatibly with the datum. Every section of $\mathcal L'^{\otimes n}$ over $R^{\mathrm{sh}}$ is a finite sum of $R^{\mathrm{sh}}$-multiples of descended sections of the same degree, because the tensor identification is an isomorphism of graded modules; hence if a section generates $\mathcal L'$ at a point, at least one descended section does too. [F3, step 1.1, algebra]

3.1 Here is the required morphism descent for the faithfully flat quasi-compact base extension $R\to R^{\mathrm{sh}}$, without a local finite presentation assumption on that extension. Given a compatible morphism $v':P_{R^{\mathrm{sh}}}\to Q_{R^{\mathrm{sh}}}$ between descended schemes, cover $Q$ by affine opens $W$. The opens $(v')^{-1}(W_{R^{\mathrm{sh}}})$ are saturated under the cover's kernel pair because the two pullbacks of $v'$ agree. Their images are open in $P$ by fpqc submersivity, and saturation makes their pullbacks exactly the original opens. On an affine open $V$ in such an image, $v'$ corresponds to a ring map $\Gamma(W,\mathcal O)\to\Gamma(V,\mathcal O)\otimes_RR^{\mathrm{sh}}$. Compatibility puts its image in the faithfully flat equalizer $\Gamma(V,\mathcal O)$, by [F3]; it therefore descends a unique morphism $V\to W$. The descended maps agree on overlaps because their pullbacks agree, and glue to $v:P\to Q$. This also descends isomorphisms by descending their inverses. A compatible open immersion is a stable open upstairs, whose open image descends by the same saturated-open argument, and the induced isomorphism descends as just proved. No fppf assertion is applied to $R\to R^{\mathrm{sh}}$. [F3, F4, step 2.1, construct]

4.1 For each descended homogeneous section $s$ of positive degree, its nonvanishing locus $D(s)\subseteq X'$ is a quasi-affine open subscheme stable under the descent datum, and it descends: embed $D(s)$ into $\operatorname{Spec}$ of its global-section algebra, descend that algebra by [F3], and take the image of this stable open in the descended spectrum under the faithfully flat spectrum map; stability makes the inverse image of the image exactly $D(s)$, and submersivity [F4] makes the image open. These descended opens glue compatibly because compatible morphisms and open immersions descend by step 3.1, producing a finite-type $R$-scheme $X$; the invertible sheaf descends on each affine chart by module descent and glues by uniqueness of descent, giving $\mathcal L$ on $X$ with $(X,\mathcal L)_{R^{\mathrm{sh}}}\cong(X',\mathcal L')$. To verify ampleness downstairs, cover each quasi-affine $X_s$ by distinguished affine opens of its global-section spectrum contained in $X_s$. Their defining functions extend after multiplication by powers of $s$ by [F2]; multiplying once more by $s$ makes their global nonvanishing loci lie inside $X_s$, where they are exactly those affine opens. These affine section loci cover $X$, so $\mathcal L$ is ample by its definition. This proves (a). [F3, F4, step 2.1, construct]

5.1 In (b), choose a fibre-dense affine open $V\subseteq U$ downstairs using the codimension-one neighbourhood lemma in [F2]. Its pullback $V'\subseteq H$ is stable under the descent datum. On the regular smooth $R^{\mathrm{sh}}$-scheme $H$, its reduced complement is an effective Cartier divisor $D$ with no vertical components by [F2]; equivalently it is the closure of its generic boundary. Stability of $V'$ makes $D$ and $\mathcal O(D)$ stable with their canonical pair cocycle. Since $H$ has abelian generic fibre and $V'$ is affine and fibre-dense, the ampleness theorem in [F2] makes $\mathcal O(D)$ ample. Apply (a) to this ample pair to obtain the scheme $G$ with its given descent datum. Multiplication, inverse and unit now descend as compatible morphisms by step 3.1, and their group identities hold downstairs since they hold after the faithfully flat extension. The original stable open $U_{R^{\mathrm{sh}}}$ descends to the specified $U\subseteq G$ by morphism and open-immersion descent. [F2, F4, F5, step 4.1, construct]

6.1 The descended $G$ is finite type and separated by fpqc descent of these properties [F4], and flat over $R$ because $H$ is flat and flatness descends [F4]; since $R$ is Noetherian and $G$ is finite type, $G$ is locally of finite presentation. For each residue field, geometric regularity of the fibres descends along the faithfully flat map $R\to R^{\mathrm{sh}}$ by [F4]; the smoothness criterion now gives that $G$ is smooth over $R$. The descended open $U\subseteq G$ is open by descent of open immersions and is fibre-dense because fibre-density is checked after the faithfully flat base change and stabilized by the datum. [F4, step 5.1, algebra]

7.1 Finally consider the case (c): $H$ is the group completion of the strict law on $U_{R^{\mathrm{sh}}}$, and $U$ is the stable fibre-dense open model of the given abelian generic variety. Its generic completion is that abelian variety, so $H$ has the abelian generic fibre required in (b). Over each of the two pullbacks $R^{\mathrm{sh}}\otimes_RR^{\mathrm{sh}}$ and the triple tensor product, the pulled-back completions solve the same strict birational law; by the uniqueness part of [F1] they are canonically isomorphic, so the canonical isomorphism on $U$ extends uniquely to a group isomorphism of completions and the triple cocycle holds automatically since the triple-pullback completion is unique. This extends the datum on $U_{R^{\mathrm{sh}}}$ uniquely to a group descent datum on $H$, which is effective by (b); the descended open remains fibre-dense by step 6.1. [F1, F5, step 5.1, step 6.1, algebra] ∎ 