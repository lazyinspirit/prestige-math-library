---
id: lem-proper-cohomology-field-extension
kind: lemma
title: "Flat field extension commutes with coherent cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-affine-scheme-quasi-compact
  - cor-every-spanning-set-contains-a-basis
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-base-change-map-cohomology
  - def-cech-cochain-complex-open-cover
  - def-coherent-module-scheme
  - def-cohomology-object-of-a-cochain-complex
  - def-dependent-choice
  - def-dimension
  - def-euler-characteristic-coherent-sheaf
  - def-field
  - def-finite-type-finite-presentation-module-sheaf
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-godement-resolution
  - def-linear-combination-and-span
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-noetherian-and-noetherian-scheme
  - def-proper-morphism
  - def-pullback-module-ringed-spaces
  - def-quasi-coherent-module-scheme
  - def-quasi-compact-and-quasi-separated-morphism
  - def-scheme
  - def-sheaf-cohomology-derived-global-sections
  - lem-cohomology-functoriality-sheaf-and-space
  - lem-fibre-product-open-restriction
  - lem-field-is-noetherian
  - lem-higher-direct-image-affine-localization
  - lem-proper-stable-base-change
  - lem-pullback-qc-module-quasi-coherent
  - prop-modules-over-a-field-are-projective-flat-and-injective
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-quasi-coherent-equivalence
  - thm-associativity-of-balanced-tensor-products
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-cech-to-sheaf-cohomology-comparison
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-right-exactness-of-tensor-products
  - thm-separatedness-gluing-overlap-criterion
  - thm-tensor-products-commute-with-arbitrary-direct-sums
  - thm-unit-isomorphisms-for-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Section 30.5, Lemma 30.5.2 (tag 02KH, flat base change) and Lemma 30.5.1 (tag 02KG, affine case)"
      url: "https://stacks.math.columbia.edu/tag/02KH"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Theorem 25.2.9 with Exercise 25.2.M, and Exercise 19.8.B(b)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice, inherited from the proper finiteness corollary
and the Čech comparison cited below ([[def-axiom-of-choice]]). Let $k$ be a
field ([[def-field]]), let $K/k$ be a field extension, let $X$ be a scheme
proper over $k$ ([[def-proper-morphism]]) and let $\mathcal F$ be a coherent
$\mathcal O_X$-module ([[def-coherent-module-scheme]]). Form the base change
$X_K:=X\times_{\operatorname{Spec}k}\operatorname{Spec}K$ with projection
$g:X_K\to X$, and put $\mathcal F_K:=g^*\mathcal F$
([[def-pullback-module-ringed-spaces]]); then $X_K$ is proper over $K$ and
$\mathcal F_K$ is coherent, so both sides below are finite-dimensional by the
corollary cited in [F7].

Then $\kappa^q$ is an isomorphism for every $q\ge0$, where
$$\kappa^q:H^q(X,\mathcal F)\otimes_kK\longrightarrow H^q(X_K,\mathcal F_K)$$
is the natural map of the statement: the base-change map of
[[def-base-change-map-cohomology]] for the Cartesian square over
$\operatorname{Spec}K\to\operatorname{Spec}k$, which on global sections is the
$K$-linear extension of the pullback of cohomology classes along $g$
([[def-sheaf-cohomology-derived-global-sections]]).

In particular, writing $\chi$ for the Euler characteristic
([[def-euler-characteristic-coherent-sheaf]]),
$$\chi(X_K,\mathcal F_K)=\chi(X,\mathcal F).$$

The empty scheme $X=\varnothing$, the zero sheaf $\mathcal F=0$, the degree
$q=0$ and the trivial extension $K=k$ are included; $k$ needs to be neither
perfect nor infinite, and $K/k$ need not be separable, finite or algebraic.

## Facts & Assumptions
**Given:** A field $k$, a field extension $K/k$, a proper morphism $X\to\operatorname{Spec}k$, a coherent $\mathcal O_X$-module $\mathcal F$, the base change $g:X_K\to X$ and $\mathcal F_K=g^*\mathcal F$; the Axiom of Choice is inherited from the cited suppliers.

[F1] Properness unpacked: a proper morphism is separated, of finite type and universally closed; a morphism of finite type is quasi-compact; a quasi-compact morphism pulls quasi-compact open subsets back to quasi-compact open subsets; $\operatorname{Spec}k$ is quasi-compact and affine opens form a basis of every scheme, so $X$ is quasi-compact and admits a finite affine open cover $U_0,\dots,U_r$, the empty cover occurring exactly when $X=\varnothing$. ([[def-proper-morphism]], [[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]], [[cor-affine-scheme-quasi-compact]], [[def-scheme]], [[def-affine-open-subscheme]])

[F2] Properness is stable under arbitrary base change, so the projection $X_K\to\operatorname{Spec}K$ is proper; a proper morphism is separated and quasi-compact, so $X_K$ is quasi-compact and separated over $K$, in particular as a scheme. ([[lem-proper-stable-base-change]], [[def-proper-morphism]])

[F3] Affine intersections: for affine opens of a scheme separated over an affine base, the intersection is affine, so every nonempty finite intersection $U_I=\bigcap_{i\in I}U_i$ of the members of a finite affine open cover of the separated $k$-scheme $X$ is affine, say $U_I=\operatorname{Spec}B_I$ with $B_I=\mathcal O_X(U_I)$, and an empty intersection is the affine scheme $\operatorname{Spec}0$. ([[thm-separatedness-gluing-overlap-criterion]], [[def-affine-scheme-spectrum]])

[F4] Base change of the cover: for every finite $I$ the fibre product $U_{I,K}:=U_I\times_{\operatorname{Spec}k}\operatorname{Spec}K$ is the affine scheme $\operatorname{Spec}(B_I\otimes_kK)$ over $\operatorname{Spec}K$, the projection $U_{I,K}\to X_K$ is an open immersion with image $g^{-1}U_I$, and the opens $U_{0,K},\dots,U_{r,K}$ form a finite affine open cover of $X_K$ whose finite intersections are the $U_{I,K}$, so the base-changed cover has the same index set and the same nerve as $(U_i)$. ([[thm-affine-fibre-product-tensor-ring]], [[lem-fibre-product-open-restriction]])

[F5] Sections of the pullback on the affine charts: $\mathcal F_K$ is quasi-coherent, and for an affine open $U=\operatorname{Spec}B\subseteq X$ with $\mathcal F|_U\cong\widetilde M$ the affine form of the pullback lemma gives a canonical isomorphism $g^*\mathcal F|_{U_K}\cong\widetilde{((B\otimes_kK)\otimes_BM)}\cong\widetilde{(M\otimes_kK)}$; under it the canonical morphism $g^{-1}\mathcal F\to\mathcal F_K$ sends a section $m\in\mathcal F(U)=M$ to $m\otimes1$. Since this morphism is a morphism of sheaves, the identifications commute with restriction maps. In particular $\mathcal F(U_I)=M_I$ with $\mathcal F_K(U_{I,K})\cong M_I\otimes_kK$ for every finite $I$, the associated sheaf being evaluated on the affine scheme $U_{I,K}$. ([[lem-pullback-qc-module-quasi-coherent]], [[thm-affine-quasi-coherent-equivalence]], [[def-associated-sheaf-module-affine-scheme]], [[def-pullback-module-ringed-spaces]], [[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]])

[F6] Flatness of a field extension: every module over the field $k$ is flat ([[prop-modules-over-a-field-are-projective-flat-and-injective]]), so $K$ is flat over $k$ and $-\otimes_kK$ preserves exact sequences ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]); tensoring is right exact ([[thm-right-exactness-of-tensor-products]]) and commutes with arbitrary direct sums and with the unit, $k\otimes_kK\cong K$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[F7] Finiteness on the two sides: for a scheme $Y$ proper over a field $F$ and a coherent $\mathcal G$ on $Y$, every $H^q(Y,\mathcal G)$ is a finite-dimensional $F$-vector space and only finitely many are nonzero, so the Euler characteristic $\chi(Y,\mathcal G)=\sum_{q\ge0}(-1)^q\dim_FH^q(Y,\mathcal G)$ is a well-defined integer, equal to any finite truncation $\sum_{q=0}^{n-1}(-1)^q\dim_FH^q(Y,\mathcal G)$ for a finite affine open cover with $n$ members. ([[cor-projective-cohomology-finite-dimensional-field]], [[def-euler-characteristic-coherent-sheaf]])

[F8] Dimension of an extension of scalars: if $V$ is a finite-dimensional vector space over a field $F$ and $F'/F$ is a field extension, then $\dim_{F'}(V\otimes_FF')=\dim_FV$: a finite basis $v_1,\dots,v_n$ identifies $V$ with $F^n$, hence $V\otimes_FF'\cong F^n\otimes_FF'\cong(F')^n$ by right exactness and the unit and direct-sum compatibilities of the tensor product, and the empty basis covers $V=0$. ([[def-dimension]], [[def-linear-combination-and-span]], [[thm-right-exactness-of-tensor-products]], [[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[thm-unit-isomorphisms-for-module-tensor-products]])

[F9] The base-change map and its Čech description: in the Cartesian square over $\operatorname{Spec}K\to\operatorname{Spec}k$ the base-change map $g^*R^qf_*\mathcal F\to R^qf'_*\mathcal F_K$ is, on an affine open $V'=\operatorname{Spec}B$ lying over an affine open $V=\operatorname{Spec}A$, the extension of scalars of the pullback map $H^q(f^{-1}V,\mathcal F)\to H^q(f'^{-1}V',\mathcal F_K)$; it is functorial in the square and compatible with compositions of base changes. Here both bases are affine, so $g^*R^qf_*\mathcal F(\operatorname{Spec}K)=K\otimes_kH^q(X,\mathcal F)$ and $R^qf'_*\mathcal F_K(\operatorname{Spec}K)=H^q(X_K,\mathcal F_K)$, and the map on global sections is the map $\kappa^q$ of the statement. Under the Čech comparison isomorphisms of [F10], the pullback of cohomology classes is computed by the pullback of Čech cochains: the comparison maps are the canonical maps $H^p(u)^{-1}H^p(w)$ assembled from the Čech–Godement double complex, whose Godement resolution is built from the stalks of the coefficient sheaf, and the pullback map is induced by the section pullback $\Gamma(X,-)\Rightarrow\Gamma(X_K,g^{-1}(-))$ composed with the canonical $g^{-1}\mathcal F\to\mathcal F_K$; by [F5] the latter sends a section $m$ over $U_I$ to $m\otimes1$ over $U_{I,K}$, which is the termwise map $\gamma$ below, so the two canonical maps agree under the comparison isomorphisms. ([[def-base-change-map-cohomology]], [[lem-higher-direct-image-affine-localization]], [[lem-cohomology-functoriality-sheaf-and-space]], [[thm-cech-to-sheaf-cohomology-comparison]], [[def-godement-resolution]])

[F10] Čech comparison: for a quasi-compact separated scheme $Y$ with a finite affine open cover whose finite intersections are affine and a quasi-coherent $\mathcal G$, the ordered Čech cohomology computed from the complex $C^\bullet$ is canonically isomorphic to sheaf cohomology, $\check H^q(\mathcal U,\mathcal G)\cong H^q(Y,\mathcal G)$ for every $q\ge0$, the complex is bounded with $C^p=0$ for $p<0$ and $p>r$, and the comparison is natural in the coefficient sheaf. ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], [[def-cech-cochain-complex-open-cover]], [[def-sheaf-cohomology-derived-global-sections]])

[F11] The Axiom of Choice and the Axiom of Dependent Choice are the choice principles named in the statement; AC is inherited here from the Čech comparison and the finiteness corollary, and DC is inherited from the same suppliers. ([[def-axiom-of-choice]], [[def-dependent-choice]])

[F12] Every field is a Noetherian ring because its only ideals are the zero ideal and the whole field; every finitely generated algebra over a Noetherian ring is Noetherian. ([[lem-field-is-noetherian]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

## Proof

**Proof technique:** direct: compute both sides by the ordered Čech complexes of a finite affine open cover and of its base change, which are related termwise by extension of scalars along the field extension; flatness makes the tensor complex compute the base-changed cohomology, and the comparison isomorphisms identify the resulting map with the natural base-change map.

1.1 The cover and its base change. By [F1] choose a finite affine open cover $U_0,\dots,U_r$ of $X$, with $r=-1$ exactly when $X=\varnothing$, and by [F3] every nonempty finite intersection $U_I$ of its members is affine with ring $B_I$. By [F4] the base-changed opens $U_{I,K}=\operatorname{Spec}(B_I\otimes_kK)$ form a finite affine open cover of $X_K$ with the same index set and the same nerve, and by [F2] the scheme $X_K$ is proper over $K$, hence quasi-compact and separated, while $X$ is quasi-compact and separated by [F1]. [F1, F2, F3, F4]

1.2 Coherence of the pullback. The coherent $\mathcal F$ is quasi-coherent and of finite type, and on the affine open $U_I$ it is $\widetilde{M_I}$ with $M_I=\mathcal F(U_I)$ a finitely generated $B_I$-module. By [F5] the pullback $\mathcal F_K$ is quasi-coherent, and it is of finite type because a surjection $B_I^n\to M_I$ induces a surjection $(B_I\otimes_kK)^n\to M_I\otimes_kK$ for every $I$ by right exactness of the tensor product [F6], so the images of generators of $M_I$ generate the sections over $U_{I,K}$; here $\mathcal F_K|_{U_{I,K}}\cong\widetilde{(M_I\otimes_kK)}$ by [F5]. The scheme $X_K$ is locally Noetherian: it is of finite type over the field $K$ by [F2], and [F12] says $K$ is Noetherian and its finitely generated algebras are Noetherian, so the affine charts $U_{I,K}$ have Noetherian coordinate rings and $X_K$ is locally Noetherian by definition. Hence $\mathcal F_K$ is coherent. [F2, F5, F6, F12, algebra]

1.3 The complexes. For every finite $I$ the canonical morphism $g^{-1}\mathcal F\to\mathcal F_K$ induces the pullback of sections $\gamma_I:\mathcal F(U_I)=M_I\to\mathcal F_K(U_{I,K})$, which under the identification $\mathcal F_K(U_{I,K})\cong M_I\otimes_kK$ of [F5] is $m\mapsto m\otimes1$; extending scalars, $\gamma_I\otimes\operatorname{id}:M_I\otimes_kK\to\mathcal F_K(U_{I,K})$ is an isomorphism. As $\gamma$ comes from a morphism of sheaves it commutes with the restriction maps of the two covers, so these isomorphisms intertwine the Čech differentials; the Čech terms are finite products of the $M_I$, and finite products as well as the coefficient extension commute with $-\otimes_kK$ by [F6]. Hence the ordered Čech complexes satisfy $$C^\bullet(\mathcal U_K,\mathcal F_K)\cong C^\bullet(\mathcal U,\mathcal F)\otimes_kK$$ as complexes of $k$-modules, canonically. [F5, F6, construct]

1.4 Cohomology of the tensor complex. Write $C^\bullet=C^\bullet(\mathcal U,\mathcal F)$ with differentials $d^q$, and put $Z^q=\ker d^q$, $B^q=\operatorname{im}d^{q-1}$, so that $H^q(C^\bullet)=Z^q/B^q$ as quotients of submodules of $C^q$. Since $K$ is flat over $k$ [F6], applying $-\otimes_kK$ to the exact sequences $0\to Z^q\to C^q\to B^{q+1}\to0$ and $0\to B^q\to Z^q\to H^q(C^\bullet)\to0$ preserves exactness; the differential $d^q\otimes\operatorname{id}$ is the composite of the surjection $C^q\otimes_kK\to B^{q+1}\otimes_kK$ with the injection $B^{q+1}\otimes_kK\to C^{q+1}\otimes_kK$, so its kernel and image are $Z^q\otimes_kK$ and $B^{q+1}\otimes_kK$, and the second sequence identifies the cohomology of $C^\bullet\otimes_kK$ with $H^q(C^\bullet)\otimes_kK$, canonically. [F6, algebra]

1.5 The isomorphism and its identification with the natural map. By 1.1 the schemes $X$ and $X_K$ are quasi-compact and separated with the finite affine covers of [F1] and [F4] whose finite intersections are affine, and by 1.2 and [F5] the sheaves $\mathcal F$ and $\mathcal F_K$ are quasi-coherent; the Čech comparison [F10] therefore gives canonical isomorphisms $H^q(X,\mathcal F)\cong H^q(C^\bullet(\mathcal U,\mathcal F))$ and $H^q(X_K,\mathcal F_K)\cong H^q(C^\bullet(\mathcal U_K,\mathcal F_K))$. Combining with 1.3 and 1.4, the composite $$H^q(X,\mathcal F)\otimes_kK\longrightarrow H^q(C^\bullet)\otimes_kK\longrightarrow H^q(C^\bullet\otimes_kK)\longrightarrow H^q(C^\bullet(\mathcal U_K,\mathcal F_K))\longrightarrow H^q(X_K,\mathcal F_K)$$ is an isomorphism for every $q\ge0$. By [F9] this composite is the base-change map $\kappa^q$ of the statement: the base-change map on global sections is the $K$-linear extension of the pullback of cohomology classes, which under the comparison isomorphisms is computed by the pullback of Čech cochains, i.e. by the complex isomorphism of 1.3. Hence $\kappa^q$ is an isomorphism. [F9, F10, 1.3, 1.4]

1.6 The Euler characteristic. By [F2] and 1.2 the scheme $X_K$ is proper over $K$ and $\mathcal F_K$ is coherent, so [F7] applies to both pairs: $\chi(X,\mathcal F)$ and $\chi(X_K,\mathcal F_K)$ are finite alternating sums of the dimensions of the cohomology groups. By 1.5 and [F8], $\dim_KH^q(X_K,\mathcal F_K)=\dim_K(H^q(X,\mathcal F)\otimes_kK)=\dim_kH^q(X,\mathcal F)$ for every $q$, so the two finite alternating sums are equal and $\chi(X_K,\mathcal F_K)=\chi(X,\mathcal F)$. [F7, F8, 1.2, 1.5]

2.1 Boundaries and choice. If $X=\varnothing$ then the cover is empty, the Čech complexes are the zero complex, $\kappa^q$ is the zero map between zero modules and both Euler characteristics are the empty sum $0$ by [F7]; if $\mathcal F=0$ then all groups vanish on both sides and $\kappa^q$ is the zero map between zero modules, with $\chi=0=0$. If $K=k$ then $g$ is an isomorphism, $\mathcal F_K\cong\mathcal F$ and $\kappa^q$ is the identity under $H^q(X,\mathcal F)\otimes_kk\cong H^q(X,\mathcal F)$ [F6]. The extension $K/k$ may be finite, infinite, separable, purely inseparable or transcendental: only the flatness of $K$ over $k$ [F6] and the affine base-change identifications of [F4] and [F5] enter, and neither needs perfection of $k$ nor separability of $K/k$. Degree $q=0$ is included in steps 1.4 and 1.6, where the zeroth cohomology is the kernel of $d^0$ and the dimension count applies. The Axiom of Choice [F11] is used for the finite cover of 1.1 and for the Čech–Godement and sheaf-cohomology suppliers of [F9] and [F10], and the Axiom of Dependent Choice is inherited from those same suppliers; the constructions of 1.3-1.6 involve no further selection. [F6, F7, F9, F10, F11, 1.4, 1.6] ∎
