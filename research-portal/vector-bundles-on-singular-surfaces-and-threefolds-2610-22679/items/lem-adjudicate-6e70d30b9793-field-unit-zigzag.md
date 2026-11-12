---
id: lem-adjudicate-6e70d30b9793-field-unit-zigzag
kind: lemma
title: A unit-induced integral field coefficient zigzag
status: published
domain: mathematics
deps:
  - math:def-perfect-field
  - thm-adjudicate-6e70d30b9793-oriented-field-map-input
dependency_roles:
  math:def-perfect-field: mathematical-premise
  thm-adjudicate-6e70d30b9793-oriented-field-map-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Bachmann–Elmanto–Morrow, A¹-invariant motivic cohomology of schemes,
        arXiv2508.09915v1
      url: https://arxiv.org/html/2508.09915v1
      locator: §3.1 setup and Remark 3.1; §3.2 (3.7), Remark 3.8 and the lax E1
        construction before Remark 3.10; Proposition 3.15/Definition 3.16;
        Remarks 3.21/3.23; §3.3 (3.36), Remarks 3.39/3.41; §4.1.2 (4.7),
        Definition 4.15, Remarks 4.21/4.22/4.28; Corollary 9.7/(9.8)
      statement: The effective-cover adjunctions and cofiber slices exist, are
        multiplicative and have natural pullback comparisons. The common
        Tate-power graded coefficient functor is lax E1-monoidal. Periodized
        theories recover its underlying E1 products and unit-adjoint reduced
        projective-line class. KGL slice coefficients have their Bott
        periodization. Corollary 9.7 gives the integral unit-induced E-infinity
        zeroth-slice and base-change equivalences.
      hypotheses: Qcqs bases, applied only to Spec Z and Spec k; smooth schemes over
        the fixed field for coefficient sheaves. Use the common pointed Tate
        coordinate (P1,infinity) and integer tensor powers. Only the lax E1
        graded functor is applied to arbitrary ring maps; the stronger symmetric
        statement requires a specified periodization. No prime or 2 is inverted.
      reading_limits: "For this repair read the hash-qualified cached primary HTML,
        and opened the primary URL: §3.1 setup/Remark 3.1; §3.2 formula (3.7),
        indexing warning, the complete lax E1 construction and Remark 3.10
        warning, Proposition 3.15 with its proof, Definition 3.16, Remarks
        3.21/3.23; §3.3 effective adjunctions, orthogonality, multiplicativity
        and naturality; §4.1.2 Bott description, Definition 4.15, Remarks
        4.21/4.22/4.28; Corollary 9.7 with its proof. Cache:
        scratch/integral-field-model/BEM.html in the frozen article run, SHA-256
        98d10fba0a574dc9d82876855a7dac72428186893218590b2056601faaee839d. The
        cached HTML displays August 24, 2026; no identity with an unread PDF
        edition is asserted. Existence and deeper foundational results are
        imported, not reconstructed; the mapping-property application and
        coefficient-map verification below are local arguments. Bachmann, Hoyois
        and Spitzweck inputs remain supplied by the declared primary-input item.
        Their cached primary extracts were also read at Bachmann pp.2–3, Hoyois
        pp.7–9, and Spitzweck pp.3–4,55–56,77,79; no deeper cited proofs or
        fresh acceptance is claimed."
    - title: Spitzweck, A commutative P¹-spectrum representing motivic cohomology over
        Dedekind domains, arXiv1207.4078v3
      url: https://arxiv.org/pdf/1207.4078v3
      locator: Introduction p.4; Theorem 6.7 and proof p.56; Proposition 11.1 and
        Remark 11.2 p.79
      statement: The motivic complexes extracted from Spitzweck's spectrum have the
        indicated unital associative products, coming from strong periodization.
        The field identification respects the product model. Remark 11.2 obtains
        strong periodizability from the canonical E-infinity orientation map
        from MGL.
      hypotheses: Spitzweck's integral spectrum pulled back from Spec Z; apply the
        field product comparison only over the fixed perfect field. Keep the
        actual projective-line bonding coordinate and the same line in the
        line/quotient conventions.
      reading_limits: Read the supplied cached Spitzweck-primary-extract.txt at
        original PDF pp.3–4,55–56,77,79, including the product and
        strong-periodization statements on p.4, Theorem 6.7 with its proof, and
        Remark 11.2. Import the strong periodization and field comparison as
        stated; neither section 8 nor its foundational references was
        reconstructed, and no separate published edition was read. The
        accompanying primary extract PDF is in scratch/purity-source-resolution
        of the frozen article run; no fresh visual inspection is claimed.
dependency_level: 1
---

## Statement
Fix a perfect field $k$. Write $H_{\rm Spi}$ for Spitzweck's integral field spectrum, $H_{\mathbb A}=s^0KGL_k$, and $U=s^0\mathbf1_k$. There is a specified zigzag of unital motivic $E_\infty$ ring equivalences
$$H_{\rm Spi}\xleftarrow{u_{\rm Spi}}U\xrightarrow{u_K}H_{\mathbb A}.$$
Both arrows are induced by units and the zeroth-slice functor. Their integral equivalence, including in characteristic $p$, is justified below using the canonical rank construction over $\operatorname{Spec}\mathbb Z$ and base change. For the shifted graded coefficient functor $C_E^j(Y)=\operatorname{map}_{\mathrm{SH}(k)}(M_k(Y),E\otimes\mathbb T_k^{\otimes j})$, $j\in\mathbb Z$, on smooth $k$-schemes, the induced graded equivalences preserve products, units and the unit-adjoint reduced $\mathbb P^1$ class. The common Tate coordinate is $\mathbb T_k=M_k(\mathbb P^1,\infty)$; the products are the canonical graded $E_1$ products, agreeing with the products underlying the given Spitzweck/classical and KGL-slice coefficient theories.

## Statement references

[[math:def-perfect-field]]

[[thm-adjudicate-6e70d30b9793-oriented-field-map-input]]

## Definition
Use the compatible site and universe bounds of the primary-input supplier. For $X=\operatorname{Spec}\mathbb Z$ or $\operatorname{Spec}k$, $\mathrm{SH}(X)$ is its stable symmetric monoidal motivic category, $\mathbf1_X$ its tensor unit, and $M_X(Y)=\Sigma^\infty_{\mathbb P^1}Y_+$ the motive of a smooth $X$-scheme. Its invertible Tate object is the reduced motive $\mathbb T_X=M_X(\mathbb P^1,\infty)$, equivalently the fiber of $M_X(\mathbb P^1)\to\mathbf1_X$ using the infinity section. A motivic $E_\infty$ ring is a coherently commutative unital algebra in this category; its underlying $E_1$ ring retains coherent associativity and the unit. Here $\operatorname{map}$ denotes a mapping spectrum, and $\operatorname{Map}$ its underlying mapping space.

Let $\mathcal C_X(j)=\mathbb T_X^{\otimes j}\otimes\mathrm{SH}(X)^{\rm eff}$, where the effective subcategory is generated under colimits and stable operations by motives of smooth schemes. For its inclusion $i_j$ and right adjoint $r_j$, put $f_j=i_jr_j$ and $s^jD=\operatorname{cofib}(f_{j+1}D\to f_jD)$. The counit induces $\operatorname{map}(A,f_jD)\simeq\operatorname{map}(A,D)$ for $A\in\mathcal C_X(j)$. A zero-slice target here means an effective $E$ with $f_1E=0$. Pullback $g^*$ is the symmetric monoidal motivic base-change functor; the slice comparisons are its canonical maps $g^*f_jD\to f_jg^*D$ and $g^*s^jD\to s^jg^*D$.

For any motivic ring map $h:E\to E'$, define $C_h^j$ by postcomposition with $h\otimes\operatorname{id}_{\mathbb T^{\otimes j}}$. Write $E(j)=C_E^j[-2j]$, so these are precisely the shifted coefficients $E(j)[2j]$. Their product is induced by the diagonal of $Y$, the multiplication of $E$, and the common ordered tensor-power identifications $\mathbb T^{\otimes a}\otimes\mathbb T^{\otimes b}\simeq\mathbb T^{\otimes(a+b)}$. In the category of integer-graded sheaves, Day convolution means that the degree-$n$ tensor is the coproduct of the tensors of degrees $a,b$ with $a+b=n$ (in the local sheaf category). The resulting graded algebra structure is the canonical lax $E_1$-monoidal construction. A periodization is additional compatible $E_\infty$ structure on $E\otimes\mathbb T^{\otimes\star}$; none is inferred just from a ring being unital. The normalized reduced class $c_E:\Sigma^\infty(\mathbb P^1,\infty)\to C_E^1$ is adjoint to $\eta_E\otimes\operatorname{id}_{\mathbb T}:\mathbb T\to E\otimes\mathbb T$, where $\eta_E$ is the ring unit.

## Facts & Assumptions
[F1] [[thm-adjudicate-6e70d30b9793-oriented-field-map-input]] imports BEM Corollary 9.7: the unit induces the integral $E_\infty$ equivalence $u_K:s^0\mathbf1\to s^0KGL$ over both bases, with the compatible equivalence $g^*s^0\mathbf1_{\mathbb Z}\simeq s^0\mathbf1_k$ for $g:\operatorname{Spec}k\to\operatorname{Spec}\mathbb Z$. No prime is inverted.

[F2] The same supplier imports Bachmann Theorem 1.1(1), Example 1.3 and Lemma 2.1. Over $\mathbb Z$ the canonical framed vector-bundle map gives $\Sigma^\infty_{\rm fr}\mathrm{Vect}\simeq f_0KGL$, and rank induces an equivalence
$$(\Sigma^\infty_{\rm fr}\mathrm{Vect})/\beta\longrightarrow\Sigma^\infty_{\rm fr}\mathbb Z\simeq H_{\rm Spi}.$$
Here $\mathrm{Vect}$ is the groupoid of finite locally free sheaves and their isomorphisms; rank takes values in locally constant integers and sends $\mathcal O$ to $1$. Framed suspension has the meaning in that supplier, and $/\beta$ means the cofiber of Bott multiplication, not prime inversion. Bott periodicity identifies this cofiber with $s^0KGL_{\mathbb Z}$. The hypothesis $f_1H_{\rm Spi}=0$ holds over $\mathbb Z$; $H_{\rm Spi}$ is effective. The $1/2$ assumption belongs only to Bachmann's separate KO assertion.

[F3] The same supplier imports Hoyois Theorem 21 and its proof: framed integers identify naturally with Spitzweck's absolute $HZ$ by an $E_\infty$ equivalence adjoint to the ring isomorphism on constant integers. This sends constant $1$ to the ring unit and commutes with arbitrary base change. Spitzweck Remark 11.2 supplies the canonical unit-induced map $s^0\mathbf1\to s^0H_{\rm Spi}\simeq H_{\rm Spi}$ on the stated bases. Lemma 6.6/Theorem 6.7 and Proposition 11.1 identify its integral field product/bonding model and the tautological-line normalization. The line itself, rather than its dual, is kept fixed when passing between line and quotient projectivization conventions.

[F4] The precise BEM formalism in the source record supplies the adjunctions, stable mapping spectra, multiplicative slices and natural base-change comparisons used in the Definition. In §3.2 the integer Tate-power functor is monoidal at the $E_1$ level, and its right adjoint $E\mapsto C_E^\star$ is lax $E_1$-monoidal. Proposition 3.15 and Remarks 3.21/3.23 identify the underlying $E_1$ products of a given periodized theory with these canonical products and identify its reduced class with $c_E$. On the KGL side the specified periodization is $s^\star KGL\simeq H_{\mathbb A}\otimes\mathbb T^{\otimes\star}$, with its Bott-coordinate identifications, by §4.1.2 and Remarks 4.22/4.28. Thus $C_{H_{\mathbb A}}^j$ is the represented $\mathbb Z(j)^{\mathbb A}[2j]$ with its existing products. On the Spitzweck side use its given strong periodization (Introduction p.4 and Remark 11.2, second source record) and classical product model in [F3]; the same underlying-$E_1$ identification applies. This does not assert that an arbitrary motivic ring map respects all additional $E_\infty$ periodization data.

## External input
The BEM categorical existence and structured coefficient facts are imported exactly as stated in [F4] and the first source record, on the two indicated bases. Spitzweck's strong periodization and its product interpretation are imported from the second source record, on the stated perfect-field scope. The integral rank, framed-integer and field-normalization inputs [F1]–[F3] are supplied by the declared primary-input item. The following proof is a local composition of these inputs, including the slice mapping-property argument; it is not a claimed reconstruction of the imported theorems.

## Proof
**Given:** The fixed perfect field, the specified integral spectra, their actual units, and the compatible site and universe bounds above.

**Goal:** Establish the canonical unit zigzag and its product, unit and reduced-class compatibility for the defined shifted graded coefficients.

1.1 Over $\mathbb Z$, [F2]–[F3] give an equivalence $a:s^0KGL_{\mathbb Z}\to H_{{\rm Spi},\mathbb Z}$ induced by rank and the framed-integer comparison. The composite of the sphere unit through $f_0KGL$, the Bott cofiber and $a$ is the actual unit of $H_{\rm Spi}$: the tensor unit is $\mathcal O$, rank sends it to $1$, and the adjunction in [F3] sends $1$ to that ring unit. To justify the required factorization, let $E$ be any effective target with $f_1E=0$. For every $A\in\mathcal C_X(1)$ the cover adjunction gives $\operatorname{map}(A,E)\simeq\operatorname{map}(A,f_1E)=0$. Apply the contravariant mapping-spectrum functor to the defining cofiber sequence $f_1D\to f_0D\to s^0D$. Since $f_1D\in\mathcal C_X(1)$, it gives $\operatorname{map}(s^0D,E)\simeq\operatorname{map}(f_0D,E)$. In particular $f_0\mathbf1=\mathbf1$, so maps $s^0\mathbf1\to E$ are determined, with their homotopies, by maps $\mathbf1\to E$. With $E=H_{{\rm Spi},\mathbb Z}$ this identifies the unit-induced map $b=s^0\eta_E:s^0\mathbf1_{\mathbb Z}\to s^0E\simeq E$ with $a\circ u_{K,\mathbb Z}$ on underlying spectra. Consequently $b$ is an integral equivalence by [F1]–[F2]. Its $E_\infty$ structure is the canonical one from multiplicative slices and the unit in [F3]–[F4]; the argument requires no chosen multiplicative structure on the Bott cofiber map $a$. [F1, F2, F3, F4]

2.1 Pull this unit triangle back along $g$. By absoluteness of $H_{\rm Spi}$ and the sphere-slice comparison in [F1], it gives an equivalence $s^0\mathbf1_k\to H_{{\rm Spi},k}$ factoring the actual field unit. The field version of the mapping equivalence in step 1.1 identifies it with the canonical $u_{{\rm Spi},k}$ of [F3]; thus that $E_\infty$ map is an equivalence. Together with $u_K$ it gives the claimed integral zigzag, without a characteristic-zero inference in characteristic $p$. Apply the lax $E_1$ functor in [F4] to its underlying unital $E_1$ maps. For either arrow $h$, the equality $h\mu_E\simeq\mu_{E'}(h\otimes h)$, the fixed Tate-power identifications and the same diagonal of $Y$ identify $C_h^{a+b}(xy)$ with $C_h^a(x)C_h^b(y)$, coherently; $h\eta_E\simeq\eta_{E'}$ identifies the degree-zero units. By postcomposition, each $C_h^j$ is an equivalence natural in smooth $Y$. The underlying-$E_1$ identifications in [F4] place these products in the given endpoint theories, without transporting a new endpoint multiplication. Finally $(h\otimes\operatorname{id}_{\mathbb T})(\eta_E\otimes\operatorname{id}_{\mathbb T})\simeq\eta_{E'}\otimes\operatorname{id}_{\mathbb T}$; adjunction gives $C_h^1c_E\simeq c_{E'}$. This is the actual unit-adjoint reduced class with the common $(\mathbb P^1,\infty)$ Tate coordinate. Its original field normalization is [F3]. Hence all the asserted shifted graded product, unit and reduced-class comparisons hold integrally. [F1, F3, F4, step 1.1] ∎
