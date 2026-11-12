---
id: lem-adjudicate-6e70d30b9793-picard-map-detection
kind: lemma
title: The normalized class detects the actual Picard-space map on smooth schemes
status: published
domain: mathematics
deps:
  - thm-adjudicate-6e70d30b9793-oriented-field-map-input
dependency_roles:
  thm-adjudicate-6e70d30b9793-oriented-field-map-input: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
sources:
  references:
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes,
        arXiv:2508.09915v1 (primary HTML)
      url: https://arxiv.org/html/2508.09915v1
      locator: §3.1.1, Picard groupoid and suspension-spectrum adjunction (3.6); §3.2,
        Lemma 3.27 hypotheses (1)–(3) and proof, restriction isomorphism
        immediately after (3.28)
      statement: For a graded A¹-invariant Nisnevich sheaf of commutative ring spectra
        with vanishing negative weights and the spectrum-level projective-space
        bundle formula relative to a first-Chern class, restriction along the
        pointed O(1) map from P¹ to Picard space identifies homotopy classes of
        maps from its reduced suspension spectrum to F¹ with reduced pi_0
        F¹(P¹). The proof kills the inverse-limit obstruction using transition
        equivalences for m >= 1. The pointed
        suspension-spectrum/infinite-loop-space adjunction identifies these maps
        with natural pointed space maps. The numbered lemma starts with spectral
        first-Chern maps and ends with equality on units; the imported
        intermediate restriction isomorphism uses only locality, negative-weight
        vanishing and the projective-space equivalences induced by their natural
        O(1) classes.
      hypotheses: X is qcqs; apply with X=Spec(k), k any field. F is in CAlg(Gr
        Sh_Nis,A¹(Sm_X,Sp)); F^j=0 for j<0 as spectra. The projective bundle
        maps induced by powers of a fixed first-Chern class are equivalences of
        spectra; require them also after every smooth base change. Reduced means
        the fiber of restriction to the infinity section. Only maps out of the
        suspension spectrum of the underlying Picard space are detected; no
        uniqueness of arbitrary maps out of the Picard spectrum is imported.
      reading_limits: In this repair, opened the primary HTML and read §3.1.1 Picard
        and pointed-suspension conventions and §3.2 Lemma 3.27, its three
        hypotheses, the proof of (3.28), the restriction isomorphism and the
        final adjunction argument. The displayed HTML is dated August 24, 2026
        although the URL labels v1; no identity with an unread PDF is asserted.
        The motivic classifying theorem and the inverse-limit exact sequence
        invoked there are imported as established inputs to that published
        argument, not reconstructed here. No other coefficient-comparison,
        purity or slice theorem in this paper is newly checked by this repair.
---

## Statement
Fix a field $k$ and compatible site and universe bounds. Write $\mathrm{Sm}_k$ for smooth finite-type $k$-schemes and $\mathrm{Sp}$ for spectra. Let $F^\star$ be a graded coherently commutative unital ring object in $\operatorname{Sh}_{\mathrm{Nis},\mathbb A^1}(\mathrm{Sm}_k,\mathrm{Sp})$: each component is a presheaf of spectra with Nisnevich descent and $F^j(U)\simeq F^j(U\times_k\mathbb A^1)$. Assume $F^j=0$ as a sheaf of spectra for every $j<0$. The grading is shifted, so in the motivic application $F^j=\mathbb Z(j)[2j]$.

Let $\mathrm{Pic}(U)$ be the nerve of the groupoid of line bundles and their isomorphisms on $U$, pointed by $\mathcal O_U$. Equip $F^\star$ with a pointed natural first-Chern map $c:\mathrm{Pic}\to\Omega^\infty F^1$. Require the projective bundle formula relative to $c$ after every smooth base change: for every $U\in\mathrm{Sm}_k$ and $m,j\geq0$, with $p:\mathbb P^m_U\to U$ and $t_m=c(\mathcal O(1))\in\pi_0F^1(\mathbb P^m_U)$, the map of spectra
$$\bigoplus_{i=0}^m F^{j-i}(U)\longrightarrow F^j(\mathbb P^m_U),\qquad (a_i)\longmapsto\sum_{i=0}^m p^*a_i\,t_m^i$$
is an equivalence. Thus this hypothesis specifies the class, its pullback compatibility and the formula in every homotopy degree, rather than only a formula for degree-zero groups.

Here $\Sigma^\infty$ is the reduced, objectwise suspension-spectrum functor on pointed presheaves of spaces, and $\Omega^\infty$ is its right adjoint. Let $f,g:\mathrm{Pic}\to\Omega^\infty F^1$ be pointed natural maps induced by maps of presheaves of spectra $\alpha,\beta:\Sigma^\infty\mathrm{Pic}\to F^1$. Restrict them along the pointed map $\ell:(\mathbb P^1_k,\infty)\to\mathrm{Pic}$ classifying $\mathcal O(1)$ with its trivialization at $\infty$. If their reduced classes in $\pi_0\widetilde F^1(\mathbb P^1_k)$ agree, then $f$ and $g$ are naturally homotopic. The notation $\widetilde F^1(\mathbb P^m_U)=\operatorname{fib}(F^1(\mathbb P^m_U)\xrightarrow{\infty^*}F^1(U))$ specifies reduction at the chosen infinity section. The assertion concerns full Picard-space maps, including line-bundle descent data, and not merely homomorphisms on Picard groups.

## Statement references

[[thm-adjudicate-6e70d30b9793-oriented-field-map-input]]

## Facts & Assumptions
[F1] The Picard-space detection input in [[thm-adjudicate-6e70d30b9793-oriented-field-map-input]] is the mapping-limit argument of BEM Lemma 3.27, proof of (3.28). In the above setting its restriction map on homotopy classes of presheaf-spectrum maps from $\Sigma^\infty\mathrm{Pic}$ to $F^1$ is an isomorphism onto $\pi_0\widetilde F^1(\mathbb P^1_k)$. This stronger intermediate assertion occurs before the lemma's final consequence about units. Its negative-weight and spectrum-level bundle-formula hypotheses are exactly those made explicit above; the projective-space tower has no first derived inverse-limit obstruction.

[F2] The pointed suspension-spectrum adjunction gives a natural equivalence of mapping spaces between maps $\Sigma^\infty P\to E$ of presheaves of spectra and maps $P\to\Omega^\infty E$ of pointed presheaves of spaces. This is the adjunction used in BEM §3.1.1 and the last paragraph of the proof of Lemma 3.27; in particular it carries homotopies to homotopies.

## External input
The single BEM source record imports the precise restriction isomorphism in [F1], including its inverse-limit justification, and the categorical framework and adjunction in [F2]. The existing oriented-field-map supplier already imports this Picard-space detection argument. This item applies those inputs locally to $\alpha$ and $\beta$; it does not give a new proof of the motivic classifying theorem or the mapping-limit exact sequence. No uniqueness of an entire spectral map out of the Picard spectrum or $R\Gamma\mathbb G_m[1]$ is claimed.

## Proof
**Given:** $k$, $F^\star$, $c$, the spectrum-level bundle formula, negative-weight vanishing, and $f,g$ with adjoints $\alpha,\beta$ as in the Statement.

**Goal:** Identify the two natural pointed Picard-space maps from their reduced projective-line classes.

1.1 Apply the restriction isomorphism [F1] with base $\operatorname{Spec}k$ and coefficients $F^\star$. The cited intermediate mapping-group argument uses locality and homotopy invariance, vanishing as spectra, and the bundle formula induced by compatible projective-space classes, all included in the Statement. It uses no additional additivity property of the chosen map $c$; its role here is to supply those classes and their formula. By naturality of the adjunction in [F2], the images of $[\alpha]$ and $[\beta]$ are exactly the stipulated reduced classes of $f\ell$ and $g\ell$. Their equality and injectivity give $[\alpha]=[\beta]$. [F1, F2]

2.1 Equality of these homotopy classes means that $\alpha$ and $\beta$ lie in the same component of their mapping space. The adjunction in [F2] carries a connecting homotopy to a homotopy of $f$ and $g$ in the category of pointed presheaves of spaces. This is a homotopy of natural maps, retaining their descent data, and proves the asserted conclusion. [F2, step 1.1] ∎
