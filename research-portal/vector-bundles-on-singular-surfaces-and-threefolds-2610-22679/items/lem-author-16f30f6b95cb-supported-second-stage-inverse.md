---
id: lem-author-16f30f6b95cb-supported-second-stage-inverse
kind: lemma
title: The supported second stage has the actual augmentation inverse
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-16f30f6b95cb-curve-supported-bloch-bottom
  - lem-author-16f30f6b95cb-augmented-filtered-support-transport
  - lem-filtered-support-exactness
  - def-cohomology-with-support
  - def-motivic-filtration
  - def-supported-higher-cycle-complex
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - def-motivic-cohomology
  - lem-eilenberg-maclane-shift-index
  - lem-author-75596422a482-open-restriction
  - math:def-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-closed-immersion-schemes
  - math:def-open-immersion-schemes
  - math:def-dimension-noetherian-topological-space
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:thm-long-exact-sequence-in-homology
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-16f30f6b95cb-curve-supported-bloch-bottom: mathematical-premise
  lem-author-16f30f6b95cb-augmented-filtered-support-transport: mathematical-premise
  lem-filtered-support-exactness: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-supported-higher-cycle-complex: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  lem-author-75596422a482-open-restriction: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-integral-scheme: mathematical-premise
  math:def-closed-immersion-schemes: mathematical-premise
  math:def-open-immersion-schemes: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:thm-long-exact-sequence-in-homology: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 16
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-16f30f6b95cb-curve-supported-bloch-bottom
  - lem-author-16f30f6b95cb-augmented-filtered-support-transport
  - lem-filtered-support-exactness
  - def-cohomology-with-support
  - def-motivic-filtration
  - def-supported-higher-cycle-complex
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - def-motivic-cohomology
  - lem-eilenberg-maclane-shift-index
  - math:def-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-closed-immersion-schemes
  - math:def-open-immersion-schemes
  - math:def-dimension-noetherian-topological-space
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-16f30f6b95cb-curve-supported-bloch-bottom
  - lem-author-16f30f6b95cb-augmented-filtered-support-transport
  - lem-filtered-support-exactness
  - def-cohomology-with-support
  - def-motivic-filtration
  - def-supported-higher-cycle-complex
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - def-motivic-cohomology
  - lem-eilenberg-maclane-shift-index
  - lem-author-75596422a482-open-restriction
  - math:def-field
  - math:def-scheme-over-base
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-integral-scheme
  - math:def-closed-immersion-schemes
  - math:def-open-immersion-schemes
  - math:def-dimension-noetherian-topological-space
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:thm-long-exact-sequence-in-homology
sources:
  references:
    - title: Stefan Schwede and Brooke Shipley, Classification of stable model
        categories, arXiv:math/0108143v1
      url: https://arxiv.org/pdf/math/0108143v1
      locator: "Appendix B.1: Definition B.1.1, printed p.35; Theorem B.1.3(i), p.36;
        construction and (B.1.9), p.39; Remark B.1.10 and Theorem B.1.11 with
        proof, pp.39–40."
      statement: For unbounded complexes of abelian groups the functor H commutes with
        limits, sends epimorphisms to fibrations of Omega spectra and
        quasi-isomorphisms to stable equivalences, and has natural stable
        homotopy groups H_n of the complex.
      hypotheses: The one-object ringoid with endomorphism ring Z; unbounded
        homological complexes, with the projective model structure. Use
        underlying naive spectra, with the suspension-coordinate switch of the
        declared stable interface, and fixed compatible universes under AC.
      reading_limits: Read the primary arXiv PDF extraction at the named passages,
        including the full proof of B.1.11. No page-image inspection or
        reconstruction of Dold–Kan, Alexander–Whitney, model-structure or
        Quillen-equivalence foundations. Only the listed properties are
        imported; the restriction-fiber application below is local.
    - title: The Stacks Project, Algebraic schemes
      url: https://stacks.math.columbia.edu/tag/06LF
      locator: Definition 33.20.1 and the immediately following Noetherianity paragraph.
      statement: Every finite-type scheme over a field is Noetherian.
      hypotheses: A scheme with finite-type structure morphism to the spectrum of a
        field; no separatedness hypothesis.
      reading_limits: Read the displayed definition and following Noetherianity
        paragraph in the primary HTML. Its cited Morphisms Lemma 29.15.6 is
        imported, not reconstructed.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Definition 28.5.1 and Lemma 28.5.4 with its displayed proof.
      statement: A Noetherian scheme is quasi-compact and locally Noetherian. Every
        locally Noetherian scheme is quasi-separated.
      hypotheses: A Noetherian scheme for the first clause, and a locally Noetherian
        scheme for the second.
      reading_limits: Read the named definition and the statement and displayed proof
        of Lemma 28.5.4 in the primary HTML. The linked immersion and
        affine-spectrum facts are imported, not reconstructed.
---

## Statement
Assume the Axiom of Choice and the fixed compatible universes and smallness conventions of the supplied spectral constructions. Let $U$ be a smooth finite-type scheme of pure dimension three over a field $k$, and let $C\subset U$ be an integral closed curve of codimension two. Put $V=U\setminus |C|$ with its open-subscheme structure. Let $F^\bullet K$ be the specified motivic filtration, with its actual stage-zero identification and coherent augmentation to $K$.

For a homological complex $D_\bullet$, write $\mathcal H(D_\bullet)$ for its Eilenberg–Mac Lane realization in spectra, with $\pi_i\mathcal H(D_\bullet)=H_i(D_\bullet)$ for every integer $i$. Set $B_j(Y)=\mathcal H(z^j(Y,\bullet))$ and $M_j(Y)=H(\mathbb Z(j)_{\mathrm{mot}}(Y))$, where the latter $H$ realizes a cochain complex with $\pi_iH(A)=H^{-i}(A)$. Assume that, for $j=0,1,2$, the actual smooth comparison supplies specified equivalences
$$\operatorname{gr}^jK(Y)\simeq M_j(Y)[2j]\simeq B_j(Y),\qquad Y=U,V,$$
compatible with the restriction arrow from $U$ to $V$. Thus the actual layer shift and the cycle-spectrum convention are part of the comparison premise, rather than consequences of an abstract isomorphism of groups. Here $[m]$ is spectral suspension by the integer $m$.

Define
$$K_C(U)=\operatorname{fib}(K(U)\to K(V)),\qquad F^j_CK(U)=\operatorname{fib}(F^jK(U)\to F^jK(V)),$$
$$\operatorname{gr}^j_CK(U)=\operatorname{cofib}(F^{j+1}_CK(U)\to F^j_CK(U)).$$
Then the supported graded spectra in weights zero and one are zero, and the augmentations
$$F^2_CK(U)\longrightarrow F^1_CK(U)\longrightarrow F^0_CK(U)=K_C(U)$$
are equivalences. Thus its supported leading weight-two homomorphism is unambiguously
$$\pi_0K_C(U)\xrightarrow{(\pi_0\epsilon_2)^{-1}}\pi_0F^2_CK(U)\longrightarrow\pi_0\operatorname{gr}^2_CK(U),$$
where $\epsilon_2$ is the actual stage-to-zero augmentation. Under the specified comparison its target is
$$\pi_0\operatorname{gr}^2_CK(U)=H_C^{4,2}(U)=H_0z_C^2(U,\bullet)=\mathbb Z[C].$$
Here $H_C^{a,j}(U)=\pi_{-a}\operatorname{fib}(M_j(U)\to M_j(V))$, and $\mathbb Z[C]$ is the group of integral multiples of the positive formal cycle $[C]$, not its image in an ambient Chow group.

For any specified natural augmented tower comparison, the leading maps commute with the induced maps on support fibers and supported graded spectra provided the target supported stage-two augmentation is also an equivalence. In particular, this condition holds for comparisons which are equivalences on all stages and on the underlying spectra on both $U$ and $V$. Its generator value remains a separate normalization input; it is not implied by the equivalence alone.

## Statement references

[[math:def-axiom-of-choice]]

[[lem-author-16f30f6b95cb-curve-supported-bloch-bottom]]

[[lem-author-16f30f6b95cb-augmented-filtered-support-transport]]

[[lem-filtered-support-exactness]]

[[def-cohomology-with-support]]

[[def-motivic-filtration]]

[[def-supported-higher-cycle-complex]]

[[def-stable-spectra-interface]]

[[def-decreasing-filtered-spectrum]]

[[def-motivic-cohomology]]

[[lem-eilenberg-maclane-shift-index]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:thm-long-exact-sequence-in-homology]]

[[lem-author-75596422a482-open-restriction]]

[[math:def-field]]

[[math:def-scheme-over-base]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-integral-scheme]]

[[math:def-closed-immersion-schemes]]

[[math:def-open-immersion-schemes]]

[[math:def-dimension-noetherian-topological-space]]

## Facts & Assumptions
**Given:** AC and the compatible size conventions, $U,C,k,V$ as stated, the specified coherently augmented filtration, and the specified restriction-compatible equivalences $\operatorname{gr}^jK\simeq M_j[2j]\simeq B_j$ for $j=0,1,2$ on both schemes. The supported Bloch comparison is deduced below from localization, rather than added as an unstated premise. For inverse-augmentation transport the target supported stage-two augmentation is also an equivalence; equivalences on all stages and underlying spectra on both schemes are a sufficient condition.

**Goal:** Justify the domain, target and exact meaning of the leading supported map before its generator is computed.

[A1] The assumed AC discharges the Choice hypotheses of the supplied K-theory, filtration, stable-spectrum, Eilenberg–Mac Lane and supported Bloch interfaces. The same fixed compatible universes and smallness conventions apply throughout; no additional choice of an inverse or a normalization is made. [[math:def-axiom-of-choice]], [[def-motivic-filtration]], [[def-stable-spectra-interface]], [[lem-eilenberg-maclane-shift-index]], [[def-supported-higher-cycle-complex]]

[F1] Under AC and the stated smooth finite-type pure-three-dimensional and integral codimension-two curve hypotheses, the two lower supported cycle complexes vanish and the bottom weight-two group is $\mathbb Z[C]$. [[lem-author-16f30f6b95cb-curve-supported-bloch-bottom]]

[F2] The support construction preserves the graded cofiber sequences and naturally identifies supported graded cofibers with fibers of graded restriction. [[lem-filtered-support-exactness]]

[F3] The specified motivic filtration has stage zero naturally $K$ and a coherent augmentation. Decreasing filtrations have graded cofibers $\operatorname{cofib}(F^{j+1}\to F^j)$; support spectra and supported cohomology use fibers of restriction. [[def-motivic-filtration]], [[def-decreasing-filtered-spectrum]], [[def-cohomology-with-support]]

[F4] A specified natural augmented filtered comparison which is an equivalence on all stages and underlying spectra on a scheme and its open complement induces supported stage, underlying and graded equivalences, preserving augmentations and graded projections. [[lem-author-16f30f6b95cb-augmented-filtered-support-transport]]

[F5] The supported Bloch complex $z_C^j(U,\bullet)$ is the free subcomplex on admissible cycles contained in $|C|\times\Delta^n$, with zero negative terms. For $A_\bullet=z^j(U,\bullet)$, $B_\bullet=z^j(V,\bullet)$ and restriction $f:A_\bullet\to B_\bullet$, its inclusion into the homotopy-fiber model $A_n\oplus B_{n+1}$, with differential $(a,b)\mapsto(\partial a,f(a)-\partial b)$, is a quasi-isomorphism. Equivalently, $\ker f=z_C^j(U,\bullet)$ and the cokernel of restriction is acyclic. This localization comparison holds under the stated smooth finite-type hypotheses, without a separatedness assumption. [[def-supported-higher-cycle-complex]]

[F6] Spectra form the supplied stable category; fibers and cofibers are coherent pullbacks and pushouts along zero, and the constructions and all integer homotopy groups are functorial. A zero cofiber makes the original map an equivalence, since its defining pushout square is also a pullback. Spectral suspension is an equivalence and commutes with fibers. [[def-stable-spectra-interface]]

[F7] The motivic coefficient complex is $\mathbb Z(j)_{\mathrm{mot}}$; its unshifted realization is $M_j$. The realization convention gives $\pi_iH(A)=H^{-i}(A)$ for cochains, and $\pi_i(E[2j])=\pi_{i-2j}E$. The support convention therefore gives $\pi_i(M_{j,C}[2j])=H_C^{2j-i,j}(U)$, where $M_{j,C}=\operatorname{fib}(M_j(U)\to M_j(V))$. These conventions do not themselves supply the actual graded equivalences assumed in the Statement. [[def-motivic-cohomology]], [[lem-eilenberg-maclane-shift-index]], [[def-cohomology-with-support]]

[F8] A field and a $k$-scheme have their usual field and structure-morphism meanings. Smoothness and finite type refer to $U\to\operatorname{Spec}k$; finite type includes quasi-compactness. Integral means nonempty, reduced and irreducible; closed subschemes are closed immersions. The complement carries its restricted structure sheaf and open immersion. Dimension is the supremum of lengths of strict chains of nonempty irreducible closed subsets. Pure dimension three means that every irreducible component has dimension three, and a curve has dimension one; codimension two here means that the local ring of $U$ at the generic point of $C$ has dimension two. [[math:def-field]], [[math:def-scheme-over-base]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-finite-type-and-finite-type-morphism]], [[math:def-integral-scheme]], [[math:def-closed-immersion-schemes]], [[math:def-open-immersion-schemes]], [[math:def-dimension-noetherian-topological-space]]

[F9] Open restriction in a smooth finite-type scheme gives the smooth finite-type open complement and its actual Bloch restriction chain map. Reference 1 in External input makes both schemes Noetherian; reference 2 makes them quasi-compact and quasi-separated (qcqs). These terms have the meanings of the declared scheme definitions, so both schemes lie in the domains of the specified motivic and K-theory functors. [[lem-author-75596422a482-open-restriction]], [[math:def-locally-noetherian-and-noetherian-scheme]], [[math:def-quasi-compact-and-quasi-separated-scheme]]

[F10] Reference 0 in External input supplies the Eilenberg–Mac Lane functor's limit, epimorphism, quasi-isomorphism and homology properties. Use the underlying naive spectra, passed through the supplied stable interface; this is the same realization convention as the indexing supplier. [[def-stable-spectra-interface]], [[lem-eilenberg-maclane-shift-index]]

[F11] A short exact sequence of complexes of abelian groups gives a long exact sequence of homology groups. Thus an injection of complexes with acyclic cokernel is a quasi-isomorphism. [[math:thm-long-exact-sequence-in-homology]]

## External input
Reference 0 imports the realization properties in [F10] from [Schwede–Shipley, Appendix B.1](https://arxiv.org/pdf/math/0108143v1). Reference 1 imports finite-type Noetherianity from [Stacks, Section 33.20](https://stacks.math.columbia.edu/tag/06LF); reference 2 imports the Noetherian qcqs implications from [Stacks, Section 28.5](https://stacks.math.columbia.edu/tag/01OU). The restriction-fiber argument and the leading-map construction below are local deductions. The geometric comparisons remain the explicit premises in the Statement; this citation supplies no motivic comparison or generator normalization.

## Proof
1.1 By [F8] and [F9], both schemes meet the domains of [F3], [F5] and the assumed comparison, under [A1]. First justify passage from [F5]'s complexes to spectra. For the actual restriction $f:A_\bullet\to B_\bullet$, write $S=\ker f$ and $Q=A_\bullet/S$. The exact sequence $0\to Q\to B_\bullet\to\operatorname{coker}f\to0$, [F5] and [F11] show that $Q\to B_\bullet$ is a quasi-isomorphism. The epimorphism $A_\bullet\to Q$ realizes by [F10] to a fibration between Omega spectra, and its strict fiber is $\mathcal H(S)$ because realization preserves limits and zero. It is thus its homotopy fiber. Realizing $Q\to B_\bullet$ gives an equivalence by [F10]; replacing that endpoint identifies $\mathcal H(S)$ naturally with $\operatorname{fib}(B_j(U)\to B_j(V))$. The enhanced interpretation and its functoriality are those of [F6]. Now [F2] and the restriction-compatible graded comparison identify $\operatorname{gr}^j_CK(U)$ with this fiber, hence with $\mathcal H(z_C^j(U,\bullet))$. By [F1] the layers for $j=0,1$ are zero. Their supported transition maps have zero cofibers and are equivalences by [F6]. Their composite to $F^0_CK=K_C$ is precisely the actual augmentation by the coherence in [F3]. [A1, F1, F2, F3, F5, F6, F8, F9, F10, F11, given]

2.1 Invert this equivalence on $\pi_0$ and then take the weight-two graded projection to obtain the displayed homomorphism. Step 1.1 and the homology property in [F10] give target $H_0z_C^2(U,\bullet)=\mathbb Z[C]$ by [F1]. Independently, the specified equivalence $\operatorname{gr}^2K\simeq M_2[4]$ on both schemes, [F2] and preservation of fibers by suspension in [F6] give $\operatorname{gr}^2_CK\simeq M_{2,C}[4]$. Its zeroth homotopy group is $\pi_{-4}M_{2,C}=H_C^{4,2}(U)$ by [F7]. Thus the cycle target and cohomological target use exactly the stated comparison and shift. [F1, F2, F3, F6, F7, F10, step 1.1, given]

3.1 Let a specified natural augmented comparison have target supported stage-two augmentation $\epsilon'_2$ which is an equivalence. Write $\phi_K$, $\phi_2$ and $\phi_{\mathrm{gr}^2}$ for its maps on underlying support fibers, supported second stages and supported second layers, and write $q_2,q'_2$ for the stage-to-layer projections. Functoriality of support fibers and graded cofibers gives $\epsilon'_2\phi_2=\phi_K\epsilon_2$ and $q'_2\phi_2=\phi_{\mathrm{gr}^2}q_2$ in the homotopy category. Since both augmentations are invertible, these identities imply $q'_2(\epsilon'_2)^{-1}\phi_K=\phi_{\mathrm{gr}^2}q_2\epsilon_2^{-1}$. Taking $\pi_0$ proves commutation of the leading homomorphisms, without requiring the comparison maps themselves to be equivalences. [F2, F3, F6, step 1.1, step 2.1, given, algebra]

4.1 Under the stronger equivalence hypotheses of [F4] on $U$ and $V$, the induced maps $\phi_K$ and $\phi_2$ are equivalences. Their commuting augmentation square and step 1.1 imply that $\epsilon'_2$ is an equivalence. Step 3.1 therefore applies, in particular to any specified classical slice/coniveau comparison satisfying those hypotheses. This preserves the actual leading map; its generator value still requires the separate normalization input. [F4, F6, step 1.1, step 3.1] ∎
