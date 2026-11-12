---
id: lem-author-d026a7b99ace-actual-edge
kind: lemma
title: The actual supported third edge sends the positive point class to its
  residue object
status: published
domain: mathematics
deps:
  - lem-author-d026a7b99ace-positive-coordinates
  - thm-author-16f30f6b95cb-supported-slice-positive-cycle-input
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - lem-author-16f30f6b95cb-augmented-filtered-support-transport
  - def-motivic-filtration
  - def-third-edge-map
  - math:def-axiom-of-choice
  - lem-smooth-point-motivic-purity
  - prop-motivic-graded-spectral-sequence
  - lem-filtered-support-exactness
  - def-cohomology-with-support
  - def-stable-spectra-interface
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-closed-point-scheme
  - math:def-affine-scheme
  - math:def-residue-field-scheme-point
  - math:def-perfect-field
  - math:def-grothendieck-universe-closure-convention
  - math:def-closed-immersion-schemes
  - math:def-quasi-projective-morphism
  - math:lem-affine-finite-type-source-immerses-in-relative-projective-space
  - math:lem-inverse-of-bijective-group-homomorphism
  - prop-perfect-k-localization-input
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
dependency_roles:
  lem-author-d026a7b99ace-positive-coordinates: mathematical-premise
  thm-author-16f30f6b95cb-supported-slice-positive-cycle-input: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison: mathematical-premise
  lem-author-16f30f6b95cb-augmented-filtered-support-transport: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-third-edge-map: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-smooth-point-motivic-purity: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  lem-filtered-support-exactness: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-closed-point-scheme: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-quasi-projective-morphism: mathematical-premise
  math:lem-affine-finite-type-source-immerses-in-relative-projective-space: mathematical-premise
  math:lem-inverse-of-bijective-group-homomorphism: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  lem-adjudicate-6e70d30b9793-field-unit-zigzag: mathematical-premise
  lem-adjudicate-6e70d30b9793-em-picard-square: mathematical-premise
  lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 24
sources:
  references:
    - title: Kahn and Levine, Motives of Azumaya algebras, published final, JIMJ 9
        (2010), 481–599
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Notation p. 487; §2.1, formulas (2.1)–(2.2), p. 494; Lemmas
        2.3.1–2.3.2, pp. 499–500; Definition 3.1.5 and Lemmas 3.1.6–3.1.8, pp.
        503–504; Definition 3.1.9, p. 505; §5.9, pp. 531–532; Lemma 6.2.1, p.
        535; Lemmas 6.4.1–6.4.2, p. 539.
      statement: Codimension-at-least-q supports have the stage-q augmentation
        equivalence. The leading map uses its inverse. The generic coordinate is
        constructed by deformation purity and passage to the zeroth slice; for
        ordinary K-theory its coordinate agrees with coherent-cohomology
        dévissage and field dimension, with the rank-one class positive.
      hypotheses: Perfect base field; smooth quasi-projective finite-type ambient and
        closed support of codimension at least q. The purity computation uses a
        smooth closed point with a trivialized rank-q normal vector space. Here
        q=3, the ambient is the smooth affine neighbourhood V and the point has
        finite separable residue field L.
      reading_limits: "Historical scope retained from the incoming record: The prior
        repair read the primary final-PDF text at the p.487 notation and
        perfect-field convention, Lemmas 2.3.1–2.3.2, Definition 3.1.5, the
        ordinary-coefficient passage of §5.9 and the generic-restriction
        construction in Lemma 6.2.1. The full slice-cycle and current-model
        comparison proofs are used through the declared supported-slice
        supplier, not reconstructed here. No whole-paper reading is claimed.
        Fresh in this maintenance pass: read the primary final-PDF text of §2.1,
        formulas (2.1)–(2.2); Definition 3.1.5; Lemmas 3.1.6–3.1.8 and their
        displayed purity diagrams and proofs; Definition 3.1.9; and Lemmas
        6.4.1–6.4.2 including the complete 6.4.2 proof on printed p. 539. These
        passages were read through the web PDF text extraction, without a
        page-image check. No fresh reading of the remaining historical passages,
        Spitzweck, EM, BEM or the full coniveau/cycle proof is claimed. The
        current selected-cycle identification uses the declared smooth Gysin
        transport supplier; it is not attributed to Kahn–Levine."
    - title: Levine, The homotopy coniveau tower, arXiv:math/0510334v1 (2005)
      url: https://arxiv.org/pdf/math/0510334v1
      locator: §8.3 pp.46–47 through (8.3.1); Theorem 9.0.3 and Remark 9.0.4 p.47.
      statement: Over a perfect field, the augmentation-adjoint
        stable-coniveau-to-slice comparison is an isomorphism.
      hypotheses: Perfect field k and E in SH(k); the §8.3 construction uses a fibrant
        P1-Omega-spectrum and its specified coherent bonding maps. Apply to the
        Bott-periodic KGL realization and coherent augmented tower specified by
        the existing supported-slice supplier. Remark 9.0.4 includes finite
        perfect fields.
      reading_limits: "Historical reading record retained from the incoming item; this
        maintenance pass read current item and supplier bodies, and claims no
        fresh primary-source reading or independent acceptance. Previously
        recorded scope: The prior repair read the §8.3 construction and
        coherence convention through (8.3.1), Theorem 9.0.3 and Remark 9.0.4 in
        the primary v1 PDF text. The §9.1 proof remains imported through the
        supported-slice supplier; no reconstruction or reading of the published
        2008 version is claimed."
    - title: Elmanto and Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv:2309.08463v1
      url: https://arxiv.org/html/2309.08463v1
      locator: Remark 3.6; Construction 4.36; Theorem 6.1(2), Remark 6.3, Corollary
        6.4 and footnote 12.
      statement: Construction 4.36 defines the natural filtered EM-to-cdh comparison
        with stage-zero map K to KH. Theorem 6.1(2), together with the
        regular-Noetherian K-to-KH equivalence as explained in Remark 6.3, makes
        that filtered map an equivalence. Remark 3.6 states the cdh-KH/slice
        comparison.
      hypotheses: Both V and V minus x are regular Noetherian over the prime field of
        k; smoothness over that prime field is not required here.
      reading_limits: "Historical reading record retained from the incoming item; this
        maintenance pass read current item and supplier bodies, and claims no
        fresh primary-source reading or independent acceptance. Previously
        recorded scope: The prior repair read Construction 4.36, Theorem 6.1(2),
        Remark 6.3, the Corollary 6.4 statement and footnote 12, and Remark 3.6
        in primary v1 HTML. The Corollary 6.4 proof was recorded as read in the
        earlier item, but was not freshly read here. Remark 3.6 attributes its
        slice identification to then-in-preparation [7]; that proof was not read
        or reconstructed. The actual augmented comparison is used through the
        declared local supplier with this qualification retained."
formulation_deps:
  - lem-author-d026a7b99ace-positive-coordinates
  - def-motivic-filtration
  - def-third-edge-map
  - def-cohomology-with-support
  - def-stable-spectra-interface
  - math:def-axiom-of-choice
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-closed-point-scheme
  - math:def-affine-scheme
  - math:def-residue-field-scheme-point
  - math:def-perfect-field
  - math:def-grothendieck-universe-closure-convention
  - math:def-closed-immersion-schemes
  - math:lem-inverse-of-bijective-group-homomorphism
argument_deps:
  - lem-author-d026a7b99ace-positive-coordinates
  - thm-author-16f30f6b95cb-supported-slice-positive-cycle-input
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - lem-author-16f30f6b95cb-augmented-filtered-support-transport
  - def-motivic-filtration
  - def-third-edge-map
  - math:def-axiom-of-choice
  - lem-smooth-point-motivic-purity
  - prop-motivic-graded-spectral-sequence
  - lem-filtered-support-exactness
  - def-cohomology-with-support
  - def-stable-spectra-interface
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:def-scheme-over-base
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-smooth-morphism-schemes
  - math:def-closed-point-scheme
  - math:def-affine-scheme
  - math:def-residue-field-scheme-point
  - math:def-perfect-field
  - math:def-grothendieck-universe-closure-convention
  - math:def-closed-immersion-schemes
  - math:def-quasi-projective-morphism
  - math:lem-affine-finite-type-source-immerses-in-relative-projective-space
  - math:lem-inverse-of-bijective-group-homomorphism
  - prop-perfect-k-localization-input
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be algebraically closed of arbitrary characteristic, let $X$ be a finite-type $k$-scheme of pure dimension three, and let $x$ be a smooth closed point. Let $i:\operatorname{Spec}k(x)\hookrightarrow X$ be the closed immersion. Write $u_x=[i_*k(x)]\in K_{0,x}(X)$ and let $\delta_x\in H^{6,3}_x(X,\mathbb Z)$ be the positive fundamental point-cycle class. Put $F^3_xK(X)=\operatorname{fib}(F^3_{\mathrm{mot}}K(X)\to F^3_{\mathrm{mot}}K(X\setminus\{x\}))$, and define $K_x(X)$ by the analogous restriction fiber of $K$. For this pair, the actual stage augmentation $a_{3,x}:F^3_xK(X)\to K_x(X)$ is an equivalence and its stage-to-layer map induces an isomorphism $p_{3,x}:\pi_0F^3_xK(X)\to H^{6,3}_x(X,\mathbb Z)$. The supported edge $\epsilon_{3,x}=\pi_0a_{3,x}\circ p_{3,x}^{-1}$ satisfies $\epsilon_{3,x}(\delta_x)=u_x$. It is the inverse of the actual inverse-augmentation leading projection, not an independent group identification.

## Facts & Assumptions
[F0] A $k$-scheme has a structure morphism to $\operatorname{Spec}k$, as in [[math:def-scheme-over-base]]; finite type and smoothness at $x$ concern this morphism, as in [[math:def-locally-finite-type-and-finite-type-morphism]] and [[math:def-smooth-morphism-schemes]]. A closed point has closed singleton by [[math:def-closed-point-scheme]], and an affine scheme is the prime spectrum of a commutative ring with its structure sheaf by [[math:def-affine-scheme]]. The residue field is $k(x)=\mathcal O_{X,x}/\mathfrak m_x$, as in [[math:def-residue-field-scheme-point]]. The closed point immersion has the meaning of [[math:def-closed-immersion-schemes]]; its existence and perfect residue object here are supplied by [F2]. Pure dimension three means that every irreducible component has dimension three, where dimension counts lengths of strict chains of nonempty irreducible closed subsets. Algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. Thus every irreducible polynomial is linear and separable, so $k$ is perfect in the sense of [[math:def-perfect-field]].

[F1] [[thm-author-16f30f6b95cb-supported-slice-positive-cycle-input]] is explicitly a codimension-$q$ theorem. For a smooth affine neighbourhood $V$, integral support $\{x\}$ and $q=3$, its leading map is stage augmentation inverse followed by slice projection, with coefficient $K_0^x(V)\to G_0(x)\to K_0(k(x))\xrightarrow{\dim}\mathbb Z$.

[F2] [[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison]] and [[lem-author-16f30f6b95cb-augmented-filtered-support-transport]] identify the actual EM augmented tower and its support projections with that classical tower on smooth pairs. [[lem-author-d026a7b99ace-positive-coordinates]] fixes both current positive coordinates and the actual motivic-support excision for the chosen affine neighbourhood. K-support excision for that neighbourhood is supplied separately in [F8]. For arbitrary $k$, the tower bridge uses the regular-Noetherian comparison of EM Theorem 6.1(2)/Remark 6.3 and the stated slice identification of Remark 3.6; that identification is explicitly attributed in v1 to then-in-preparation [7], whose proof is not reconstructed here.

[F3] [[math:def-axiom-of-choice]] is the inherited assumption used by the positive-coordinate supplier and by the perfect-K and motivic constructions in [[def-motivic-filtration]]. The fixed size bounds are those of these constructions: assume compatible nested Grothendieck universes $\mathscr U\in\mathscr V\in\mathscr W$ with $\omega\in\mathscr U$, containing the scheme and site data, and larger bounds for the enhanced categories as required. Their closure convention is [[math:def-grothendieck-universe-closure-convention]]; their existence is a separate assumption, not a consequence of Choice. The edge notation agrees with [[def-third-edge-map]]: inverse stage-to-layer projection followed by augmentation, with the global codomain restricted to its image. Here the supported codomain is $K_{0,x}(X)$ because the supported augmentation is proved to be an equivalence.

[F4] [[lem-smooth-point-motivic-purity]] gives $H^{a,j}_x(Y,\mathbb Z)=0$ for every integer $a$ and $0\leq j<3$ for each pure-three-dimensional pair used here, including $Y=X$ and the smooth affine neighbourhood $Y=V$. [[prop-motivic-graded-spectral-sequence]] supplies the actual natural graded triangles. [[lem-filtered-support-exactness]] identifies their restriction fibers as the supported graded triangles. [[def-cohomology-with-support]] fixes the actual support model and $\pi_n\operatorname{gr}^j_xK=H^{2j-n,j}_x$. These assertions use the same Choice and compatible size premises as [F3].

[F5] [[def-stable-spectra-interface]], through the spectral-equivalence criterion in its Facts and External input sections, supplies detection of equivalences in the actual stable infinity-category of spectra by all integer homotopy groups. In particular, if every $\pi_nE$ is zero, $E\to0$ is an equivalence. Its stability convention makes a map with zero cofiber an equivalence: the defining cofiber pushout square is also a pullback. The same interface supplies functorial homotopy groups, coherent fibers and cofibers. This applies to the spectra of [F4], without a connectivity or CW hypothesis, under [F3].

[F6] [[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]] proves under Choice that a finite-type field-scheme has Noetherian underlying space and all its opens are quasi-compact and qcqs. This checks the evaluation domains of [F4] for $X,V$ and their punctured opens. [[math:lem-affine-finite-type-source-immerses-in-relative-projective-space]] supplies an immersion of the affine finite-type $V$ into some $\mathbb P^N_k$. Every inverse image of an affine target open is an open of $V$, hence quasi-compact by the first input. Thus the immersion is quasi-compact and $V$ is quasi-projective in the convention of [[math:def-quasi-projective-morphism]], as required by [F1].

[F7] [[math:lem-inverse-of-bijective-group-homomorphism]] supplies the inverse homomorphism of each group isomorphism used below. Composition of the homomorphisms supplied by [F5] and their inverses gives the displayed leading and edge homomorphisms; no independent choice of generator or inverse is made.

[F8] [[prop-perfect-k-localization-input]] supplies localization and actual open restriction excision for nonconnective perfect-complex K-theory: if $T$ is closed in a qcqs scheme $Y$, $Y\setminus T$ is quasi-compact, and $T\subseteq W\subseteq Y$ is a quasi-compact open, then restriction identifies the supported categories' K-spectra and, naturally, their restriction-fiber models. It is compatible with restriction of the same perfect objects and their support-to-global classes. Apply this with $Y=X$, $T=\{x\}$ and $W=V$. Closedness is in [F0]; [F6] makes $X$, $V$, $X\setminus\{x\}$ and $V\setminus\{x\}$ qcqs and every required open quasi-compact. The Choice and size premises are those of [F3]. This application requires no regularity of $X$ and no descent assertion from the positive-coordinate supplier.

**Given:** The stated finite-type pure threefold, smooth closed point, algebraically closed and hence perfect field, Axiom of Choice, and fixed site and universe bounds.

**Goal:** Identify the actual supported augmentation and edge on X before transporting the local positive generator.

[F9] [[lem-adjudicate-6e70d30b9793-field-unit-zigzag]] fixes the unital graded equivalence $\rho_j:S_j\simeq A_j$ from Spitzweck/classical to represented KGL-slice coefficients, using the common Tate object $T=(\mathbb P^1,\infty)$. Here $S_j$ and $A_j$ are unshifted weight-$j$ coefficient spectra. The third-layer coefficient group is $\pi_0(A_{3,x}(V)[6])$, with the same $[6]$ shift for $S_3$ and $M_3^{\rm EM}$. The reduced K-theory Tate class is $1-[\mathcal O(-1)]$ from [F2], whose positive first-Chern image is fixed by the Picard square. [[lem-adjudicate-6e70d30b9793-em-picard-square]] fixes the actual structured map $\theta_j=\gamma_j\eta_j:M_j^{\rm EM}\simeq A_j$; $\eta$ is the graded EM-to-cdh comparison in [F2] and $\gamma$ is the canonical represented-slice comparison under its supplied tower identification. Write $e_j=\theta_j^{-1}\rho_j$. [[lem-adjudicate-6e70d30b9793-smooth-supported-gysin-transport]] proves that $e_3$ takes the classical refined unit class of a smooth codimension-three point to the actual selected $\delta_x$ of [F2]. Its Definition identifies refined Gysin with the oriented Thom class followed by the coefficient-independent deformation-purity map. For a point, a trivialization of the normal vector space therefore identifies that refined unit with the coefficient unit. Reference 0, §2.1, Lemmas 3.1.6–3.1.8 and Definition 3.1.9, describes the slice generic coordinate by this same deformation purity followed by the zeroth-slice coefficient. Lemmas 6.4.1–6.4.2 compare it with the K-theoretic generic coordinate used in [F1]. These passages supply a comparison of the actual purity maps, not an assertion that arbitrary cycle equivalences coincide.

## External input
Reference 0 documents [F1]'s codimension-three augmentation, inverse-augmentation projection and positive dimension coefficient. Its perfect-field, smooth quasi-projective ambient and closed-support hypotheses are checked in step 2.1. The full classical-to-current supported comparison is used through the declared supported-slice supplier, rather than reconstructed from the historically read source passages.

Reference 1 documents the augmentation-adjoint coniveau-to-slice comparison in [F1]–[F2] over a perfect field, with the coherent tower convention of its §8.3. The Bott-periodic realization and its application to the specified tower are supplied by the supported-slice supplier; the source's deep comparison proof is imported.

Reference 2 documents the natural filtered comparison and its regular-Noetherian equivalence locus used in [F2]. Construction 4.36 defines the map; Theorem 6.1(2) and the K-to-KH equivalence in Remark 6.3 supply the equivalence. The actual augmented-comparison supplier checks this on $V$ and $V\setminus\{x\}$ over the prime field. Remark 3.6 states the slice identification and attributes its proof to then-in-preparation [7], whose proof is not supplied here. The regular-Noetherian argument, rather than Corollary 6.4 alone, is the arbitrary-field bridge. The deduction in this item's Proof remains local.

Reference 0 additionally supplies the purity-coordinate construction in [F9], on its perfect-field, smooth ambient and codimension-three smooth-point domain. The unit maps, actual EM comparison and comparison with the selected positive cycle are the declared local suppliers in [F9]. Step 3.1 composes these inputs; the item remains a locally proved consequence rather than an external-input theorem as a whole.

## Proof
1.1 By [F6], $X$ and its open complement are qcqs, so [F4] applies to the actual restricted tower on $X$ under [F3]. For $j=0,1,2$ and every $n\in\mathbb Z$, it gives $\pi_n\operatorname{gr}^j_xK(X)=H^{2j-n,j}_x(X,\mathbb Z)=0$. Apply the all-integer detection criterion of [F5] to the map from each supported graded spectrum to zero. These graded spectra are zero; by the zero-cofiber criterion of [F5], the three supported graded triangles make $F^3_xK(X)\to F^2_xK(X)\to F^1_xK(X)\to F^0_xK(X)$ equivalences. Stage zero is $K_x(X)$ by the actual stage-zero identifications on $X$ and its complement in [F3]–[F4]. Their composite is exactly $a_{3,x}$, so this augmentation is an equivalence on the possibly singular ambient $X$. [F3, F4, F5, F6, given]

2.1 Choose the smooth affine pure-three-dimensional finite-type neighbourhood $V$ of $x$ from [F2]. The same argument as step 1.1, using [F4]–[F6] on $V$, gives its actual stage-three augmentation equivalence. By [F2], the local ring at $x$ is regular of dimension three. The reduced point support is $\operatorname{Spec}k(x)$, an integral scheme because its coordinate ring is a field and hence a nonzero domain; its codimension is $\dim\mathcal O_{V,x}=3$. The base is perfect by [F0], and $V$ is quasi-projective by [F6]. Apply [F1] at $q=3$ and transport through the actual augmented comparison in [F2]. This gives the actual inverse-augmentation leading isomorphism $\psi_{x,V}:K_{0,x}(V)\to H^{6,3}_x(V)$, with inverse homomorphisms as in [F7]. Its represented-slice generic coefficient on $u_{x,V}$ is $+1$ by the residue-object Euler/dimension coordinate in [F1]. Its comparison with the particular positive cycle selected in [F2] is established in the next step. [F0, F1, F2, F4, F5, F6, F7, step 1.1]

3.1 Set $L=k(x)$. The coordinate lemma in [F2] supplies a regular-sequence Koszul neighbourhood, the regular codimension-three point immersion and a finite separable residue extension; it also checks that $\operatorname{Spec}L$ is smooth of finite type over $k$. Thus the smooth refined-point clause of [F9] applies to $(V,x)$ under [F3]; $V$ is already smooth, pure of dimension three and separated. Let $g_S$ be its classical refined unit class and put $g_A=\rho_{3,x}(g_S)$ in the represented supported coefficient group. Choose a basis of the point's three-dimensional normal vector space. The same coefficient-independent deformation-purity map in [F9] computes its generic coordinate: the Thom class of this trivial normal bundle is the threefold suspension of the unit, and $\rho$ preserves that unit with the same ordered Tate coordinate. Hence the generic coordinate of $g_A$ is $+1$ in $\pi_0(s^0KGL_k(L))=\mathbb Z$, with the rank-unit normalization of [F9]. By [F1]'s generic detection, the represented-slice class with that coefficient is unique. Step 2.1 gives coefficient $+1$ for the represented leading image of $u_{x,V}$, so that image equals $g_A$. Under the actual augmented comparison its EM image is $\theta_{3,x}^{-1}(g_A)=e_{3,x}(g_S)$: taking fibers of the coefficient maps uses the same support restriction arrow as [F2]. The smooth Gysin transport clause of [F9] identifies this last class with the particular $\delta_{x,V}$ chosen in [F2]. Therefore $\psi_{x,V}(u_{x,V})=\delta_{x,V}$. This uses the purity-coordinate formula and the actual field maps, without identifying two cycle normalizations merely because their groups are infinite cyclic. [F1, F2, F3, F9, choose, step 2.1]

4.1 Restriction from $X$ to $V$ commutes with augmentations and stage-to-layer maps by the actual natural triangles and support construction in [F4]. Apply [F8] with the domain checks in [F6]: it gives the equivalence $r_K:K_x(X)\to K_x(V)$ on the actual restriction fibers. This equivalence preserves the residue generator: for an open $A\subseteq V$, the residue sheaf $i_*k(x)$ has sections $k(x)$ if $x\in A$ and zero otherwise, with scalar action through the residue map and the same restrictions as the residue sheaf on $V$. Thus its restriction is exactly the latter perfect residue object, so $\pi_0r_K(u_x)=u_{x,V}$. The actual motivic-support restriction $r_H:H^{6,3}_x(X)\to H^{6,3}_x(V)$ is an isomorphism taking $\delta_x$ to $\delta_{x,V}$ by [F2]. Because both stage-three augmentations are equivalences by steps 1.1 and 2.1, their commuting square with $r_K$ also makes the stage-three support restriction an equivalence. Consequently, for $\psi_{x,X}=p_{3,x}(\pi_0a_{3,x})^{-1}$, the natural projection square gives $r_H\psi_{x,X}=\psi_{x,V}\pi_0r_K$. All three other maps are isomorphisms by [F2], [F8] and step 2.1, so $\psi_{x,X}$ is an isomorphism. Evaluating this identity at $u_x$ and using the two generator compatibilities gives $r_H\psi_{x,X}(u_x)=\delta_{x,V}=r_H(\delta_x)$; injectivity of $r_H$ gives $\psi_{x,X}(u_x)=\delta_x$. [F2, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1]

5.1 Since $a_{3,x}$ is an equivalence and $\psi_{x,X}$ is an isomorphism, the equality $p_{3,x}=\psi_{x,X}\pi_0a_{3,x}$ makes $p_{3,x}$ an isomorphism. Inverting this equality gives $\epsilon_{3,x}=\pi_0a_{3,x}\,p_{3,x}^{-1}=\psi_{x,X}^{-1}$ and hence $\epsilon_{3,x}(\delta_x)=u_x$. These are the actual augmented tower maps, consistent with the supported version of the global edge notation in [F3]. [F3, F5, F7, step 1.1, step 4.1] ∎

## Maintenance scope
The Statement and coverage are unchanged. Step 3.1 now compares the represented leading class with the selected positive cycle through its purity coefficient, the unital field zigzag, the actual structured EM comparison and the existing smooth Gysin transport lemma. The unchanged K-excision and all-degree lower-weight augmentation arguments are retained. Both direct consumers, prop-smooth-point-third-chern-factor and lem-author-d026a7b99ace-rr-and-global-square, were read in their complete current bodies; they use the unchanged actual edge and positive normalization and require no edit. Fresh primary reading is limited to the Kahn–Levine purity and coefficient passages specified in reference 0; references 1–2 retain their historical scopes and source-version qualification. This is generated-content maintenance, without an original-author defect attribution, independent rejudgment, publication or acceptance.
