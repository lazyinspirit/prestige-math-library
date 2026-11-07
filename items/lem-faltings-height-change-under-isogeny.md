---
id: lem-faltings-height-change-under-isogeny
kind: lemma
title: "Faltings height change under a semiabelian isogeny"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-abelian-variety-over-a-field
  - def-dependent-choice
  - def-faithfully-flat-morphism-schemes
  - def-finite-morphism-schemes
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-locally-free-sheaf-finite-rank
  - def-group-scheme-over-a-scheme
  - def-height-of-a-rank-one-normed-module-over-number-ring
  - def-archimedean-embeddings-and-number-field-signature
  - def-neron-model-and-mapping-property
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fiberwise-semiabelian-group-scheme
  - def-smooth-morphism-schemes
  - def-base-change-morphism-schemes
  - def-jacobson-radical-of-a-ring
  - def-local-ring
  - def-artinian-ring
  - def-sheaf-relative-differentials
  - def-sheaf-total-quotient-rings
  - def-integral-scheme
  - lem-flat-morphisms-stable-base-change
  - lem-flatness-affine-local-source-target
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-noetherian-ring-quotients-and-localisations
  - thm-finite-flat-modules-over-local-rings-are-free
  - lem-differentials-commute-base-change-schemes
  - thm-structure-theorem-for-artinian-rings
  - thm-holomorphic-inverse-function-theorem-several-variables
  - lem-smooth-projective-analytification-has-rational-kahler-polarization
  - thm-fundamental-theorem-of-algebra-liouville-proof
  - thm-affine-fibre-product-tensor-ring
  - thm-cotangent-space-maximal-ideal-quotient
  - lem-faltings-cotangent-sequence-for-fppf-isogeny
  - lem-faltings-differentials-module-has-rank-one
  - lem-faltings-finite-flat-isogeny-kernel-differential-is-finite
  - lem-finite-cokernel-determinant-index-equals-module-order
  - thm-height-of-a-rank-one-normed-module-independent-of-element
  - thm-nakayama-lemma
  - def-stable-faltings-height-of-an-abelian-variety
  - thm-stable-faltings-height-independent-of-semistable-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, ‘Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,’ §4, Lemma 5"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed p. 358, isogeny height formula and kernel differential term."
    - title: "J. I. Burgos Gil and J. Kramer, *On the height of the universal abelian variety*, arXiv:2403.11745v2"
      url: "https://arxiv.org/pdf/2403.11745"
      locator: "§5.4, equation (5.5), printed pp. 42–43, positive normalization of the Faltings metric."
verification:
  precheck: pending
axiom_use: "AC and DC are declared to match the stable-height interface; the local determinant and metric calculation uses neither choice principle."
---

## Statement

Assume AC and DC. Let $K$ be a number field, $R=\mathcal O_K$, and let $A_1,A_2/K$ be abelian varieties of dimension $g$ with semistable reduction at every finite place. Let $\mathcal N_i/R$ be their Néron models and $\mathcal A_i=\mathcal N_i^0$ their fiberwise semiabelian identity components, with identity sections $e_i$. Let $\phi:\mathcal A_1\to\mathcal A_2$ be a finite faithfully flat homomorphism whose generic fibre $\phi_K:A_1\to A_2$ is finite and surjective, and suppose its kernel $G$ is finite flat over $R$, with identity section $e$. Put $E_i=e_i^*\Omega^1_{\mathcal A_i/R}$, $\omega_i=\bigwedge^g_RE_i$, and equip $\omega_i$ at the archimedean places with the Faltings metric. Write $h_F(A_i)=h_R(\omega_i)$ for the stable Faltings height and set $d=[K(A_1):K(A_2)]$, the function-field degree of $\phi_K$. Then
$$h_F(A_2)=h_F(A_1)+\frac12\log d-\frac1{[K:\mathbb Q]}\log\#\bigl(e^*\Omega^1_{G/R}\bigr).$$

## Statement references

[[def-stable-faltings-height-of-an-abelian-variety]]

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[def-height-of-a-rank-one-normed-module-over-number-ring]]

[[thm-stable-faltings-height-independent-of-semistable-extension]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-integral-scheme]]

[[def-sheaf-total-quotient-rings]]


[Faltings 1983, Lemma 5, printed p. 358](https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf)

[Burgos Gil–Kramer, §5.4, equation (5.5)](https://arxiv.org/pdf/2403.11745)

## Facts & Assumptions

**Given:** AC and DC; the semistable abelian varieties, their Néron identity-component models, the finite faithfully flat isogeny $\phi$, and its finite flat kernel $G$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis of the stable-height interface used here; no selection is made in the local calculation.

[A2] [[def-dependent-choice]]: DC is an explicit hypothesis of the stable-height interface used here; no recursive selection is made in the local calculation.

[F1] [[def-height-of-a-rank-one-normed-module-over-number-ring]]: for every nonzero $m$ in a rank-one normed $R$-module, $h_R$ is $[K:\mathbb Q]^{-1}$ times the logarithm of $\#(\omega/Rm)$ divided by the weighted archimedean norm product.

[F2] [[thm-height-of-a-rank-one-normed-module-independent-of-element]]: the quotient-and-norm expression in [F1] is independent of the nonzero element used to compute it.

[F3] [[lem-faltings-cotangent-sequence-for-fppf-isogeny]]: for $E_i=e_i^*\Omega^1_{\mathcal A_i/R}$ and $M=e^*\Omega^1_{G/R}$, the sequence $E_2\xrightarrow{\phi^*}E_1\to M\to0$ is right-exact.

[F4] [[lem-faltings-finite-flat-isogeny-kernel-differential-is-finite]]: the generic kernel has zero cotangent space at the identity, $d\phi_e:T_eA_1\to T_eA_2$ is an isomorphism, and $M$ is finite as an abelian group.

[F5] [[def-stable-faltings-height-of-an-abelian-variety]]: the Faltings metric on top invariant differentials is induced by the positive Hermitian pairing $\frac{i^{g^2}}{2^g}\int_{A_i(\mathbb C)}\alpha\wedge\overline\beta$ with canonical complex orientation.

[F6] [[def-fiberwise-semiabelian-group-scheme]], [[def-smooth-morphism-schemes]], and [[def-ring-of-integers-of-a-number-field]]: each $\mathcal A_i/R$ is smooth of relative dimension $g$, so $E_i$ is locally free of rank $g$ and torsion-free over the domain $R$.

[F7] [[lem-faltings-differentials-module-has-rank-one]]: the invariant top-differential module of each Néron model is projective of rank one; because $\mathcal A_i=\mathcal N_i^0$ is open and contains $e_i$, its identity pullback is the same module $\omega_i$.

[F8] [[lem-finite-cokernel-determinant-index-equals-module-order]]: if $E_2\to E_1$ is injective with finite cokernel $M$, the index of its determinant image in $\omega_1$ is multiplied by $\#M$.

[F9] [[def-finite-flat-group-scheme-and-cartier-dual]] and [[def-locally-free-sheaf-finite-rank]]: a finite flat group scheme is finite locally free over its base, with locally constant rank; since $\operatorname{Spec}R$ is connected, the kernel $G$ has one common rank, say $r$.

[A3] [[thm-stable-faltings-height-independent-of-semistable-extension]]: its statement identifies the stable Faltings height with the normalized module height on the chosen semistable model.

[F10] [[lem-differentials-commute-base-change-schemes]]: relative differentials pull back to the relative differentials after base change, including the base change from $K$ to each archimedean copy of $\mathbb C$.

[F11] [[def-artinian-ring]] and [[thm-structure-theorem-for-artinian-rings]]: a finite-dimensional commutative $\mathbb C$-algebra is Artinian, since descending chains of ideals are descending chains of finite-dimensional vector subspaces, and under AC it is the finite product of its localizations at maximal ideals.

[F12] [[def-local-ring]], [[def-jacobson-radical-of-a-ring]], and [[thm-nakayama-lemma]]: in an Artinian local $\mathbb C$-algebra with maximal ideal $\mathfrak m$, $\mathfrak m/\mathfrak m^2=0$ implies $\mathfrak m=0$ under AC, because $J(B)=\mathfrak m$.

[F13] [[lem-smooth-projective-analytification-has-rational-kahler-polarization]]: its general clause gives complex manifold analytifications and holomorphic maps for morphisms between smooth separated finite-type complex schemes; applied to the group operations, it gives the complex analytic group structure used below.

[F14] [[thm-holomorphic-inverse-function-theorem-several-variables]]: a holomorphic map between complex manifolds of the same positive dimension with invertible differential is biholomorphic on suitable neighbourhoods.

[F15] [[thm-fundamental-theorem-of-algebra-liouville-proof]]: $\mathbb C$ is algebraically closed, so any finite residue-field extension of $\mathbb C$ is $\mathbb C$.

[F16] [[def-base-change-morphism-schemes]] and [[def-faithfully-flat-morphism-schemes]]: surjectivity is preserved by base change. Indeed, each new fibre is obtained from a nonempty old fibre by field extension, and a nonempty affine chart $\operatorname{Spec}B$ remains nonempty because tensoring $B\ne0$ with a field extension is faithfully flat.

[F17] [[def-group-scheme-over-a-scheme]]: translation by a group-scheme point is an isomorphism with inverse translation by its inverse, and a homomorphism satisfies $\phi\circ t_x=t_{\phi(x)}\circ\phi$.

[F18] [[thm-cotangent-space-maximal-ideal-quotient]]: at a $\mathbb C$-rational point $z$ of a $\mathbb C$-scheme, the relative cotangent space is $\mathfrak m_z/\mathfrak m_z^2$.

[F19] [[def-sheaf-total-quotient-rings]] and [[def-integral-scheme]]: for an integral scheme $X$, $K(X)$ is the local ring at its generic point; on a nonempty affine open $\operatorname{Spec}A\subseteq X$ this is $\operatorname{Frac}(A)$.

[F20] [[def-finite-morphism-schemes]], [[def-faithfully-flat-morphism-schemes]], [[lem-flat-morphisms-stable-base-change]], and [[lem-flatness-affine-local-source-target]]: the generic map $\phi_K$ is finite and flat; over an affine open $U=\operatorname{Spec}A\subseteq A_2$ its inverse image is affine $\operatorname{Spec}B$ with $B$ a finite flat $A$-module.

[F21] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: because $A_2$ is finite type over the field $K$, every affine coordinate ring $A$ of an open chart is Noetherian.

[F22] [[thm-noetherian-ring-quotients-and-localisations]] and [[thm-finite-flat-modules-over-local-rings-are-free]]: $A_{\mathfrak m}$ at a maximal ideal is Noetherian local, and the finite flat module $B_{\mathfrak m}$ is free of some rank.

[F23] [[def-group-scheme-over-a-scheme]], [[def-base-change-morphism-schemes]], and [[thm-affine-fibre-product-tensor-ring]]: the scheme-theoretic kernel is the fibre over the identity, and on affine charts that fibre has coordinate algebra $B\otimes_A\kappa(e_2)$.

[F24] [[def-abelian-variety-over-a-field]]: an abelian variety is a proper, smooth, geometrically connected finite-type group variety and is geometrically integral; hence each $A_i$ is integral and finite type, and every nonempty open in it is integral.

[F25] [[def-archimedean-embeddings-and-number-field-signature]]: the archimedean weights satisfy $\sum_{v\mid\infty}\epsilon_v=r_1+2r_2=[K:\mathbb Q]$.

## Proof

**Proof technique:** compare the finite index of the determinant map on invariant differentials with its archimedean metric scaling.

**Given:** AC and DC, [A3], [F1]–[F9], and [F10]–[F24], together with $\phi$, its kernel $G$, and $0\ne m\in\omega_2$.

1.1 By [F9], the kernel $G$ is finite locally free, so the cotangent sequence [F3] applies and gives $E_2\xrightarrow{\phi^*}E_1\to M\to0$. After tensoring with $K$, the module $M$ is zero by [F4], which states that the cotangent space of the generic kernel at the identity vanishes. Thus $E_2\otimes_RK\to E_1\otimes_RK$ is surjective; both vector spaces have dimension $g$ by [F6], so this map is an isomorphism. Since $E_2$ is torsion-free, the original map has zero kernel. It is injective with cokernel $M$, which is finite by [F4]. [F3, F4, F6, F9, given, algebra]

1.2 Apply [F8] to the injection $E_2\to E_1$ and the nonzero element $m\in\omega_2$. It gives $$\#(\omega_1/R\phi^*m)=\#M\,\#(\omega_2/Rm).$$ [F4, F8, given, algebra]

1.3 Choose a nonempty affine open $U=\operatorname{Spec}A$ of $A_2$ containing the identity; because $A_2$ is integral, $U$ contains its generic point, so [F19] gives $\operatorname{Frac}(A)=K(A_2)$. Write $\phi_K^{-1}(U)=\operatorname{Spec}B$. By [F20], $B$ is a finite flat $A$-module; it is a domain because this inverse image is a nonempty open in the integral variety $A_1$. Surjectivity of $\phi_K$ makes $A\to B$ injective. By [F21], $A$ is Noetherian. Let $\mathfrak m$ be the maximal ideal of the identity point. Then [F22] gives a free module $B_{\mathfrak m}\cong A_{\mathfrak m}^{s}$ for some finite integer $s$. Tensoring with $\operatorname{Frac}(A)$ shows $\dim_{\operatorname{Frac}(A)}(B\otimes_A\operatorname{Frac}(A))=s$. This tensor product is a finite-dimensional domain over a field, hence a field; it contains $B$ and lies in $\operatorname{Frac}(B)$, so it equals $\operatorname{Frac}(B)=K(A_1)$. Thus $s=[K(A_1):K(A_2)]=d$. By [F23] the kernel fibre at the identity has coordinate algebra $B\otimes_AK$; since $\kappa(e_2)=K$ and $B_{\mathfrak m}$ is free of rank $s$, this algebra has $K$-dimension $s=d$. Because $G/R$ is finite locally free and $R$ is a domain, every complex base change of $G$ also has coordinate-algebra dimension $d$. [F9, F19, F20, F21, F22, F23, F24, given, algebra]

2.1 Fix an embedding $K\hookrightarrow\mathbb C$. The base-changed kernel $G_\mathbb C$ has coordinate algebra of $\mathbb C$-dimension $d$ by step 1.3. By [F4] and [F10], its cotangent space at the identity is zero. For every $z\in G_\mathbb C(\mathbb C)$, [F17] gives a translation isomorphism carrying the identity to $z$, so the cotangent space at $z$ is also zero. By [F18], this says $\mathfrak m_z/\mathfrak m_z^2=0$ for the maximal ideal of $\mathcal O_{G_\mathbb C,z}$. This local ring is finite-dimensional over $\mathbb C$, so $\mathfrak m_z$ is finitely generated; [F12] applied with $I=M=\mathfrak m_z$ gives $\mathfrak m_z=0$. Its residue field is $\mathbb C$ by [F15]. Thus every local factor is $\mathbb C$, and [F11] shows that $G_\mathbb C$ has exactly $d$ complex points. [F4, F10, F11, F12, F15, F17, F18, step 1.3, given, algebra]

3.1 The generic differential $d\phi_e$ is an isomorphism by [F4]. The group identity [F17] transports it to the differential at every complex point. If $g>0$, [F13] gives complex manifold structures on $A_i(\mathbb C)$ and makes $\phi_{\mathbb C}$ holomorphic; [F14] makes it a local biholomorphism. Its kernel is the discrete finite group $G_{\mathbb C}(\mathbb C)$, which has $d$ points by step 2.1, and the map is surjective by [F16]. Choose an identity neighbourhood $W_0$ on which $\phi_{\mathbb C}$ is biholomorphic onto $V_0$ and shrink $W_0$ so that $(W_0W_0^{-1})\cap G_{\mathbb C}(\mathbb C)=\{e\}$. Then $\phi_{\mathbb C}^{-1}(V_0)$ is the disjoint union of the $d$ translates $zW_0$: for any $x$ above $V_0$, the unique $w\in W_0$ with $\phi_{\mathbb C}(w)=\phi_{\mathbb C}(x)$ has $xw^{-1}$ in the kernel. Translating this neighbourhood construction to every target point proves a $d$-sheeted covering. A holomorphic local biholomorphism preserves complex orientation, and change of variables sheet by sheet (equivalently, using a partition of unity subordinate to evenly covered neighbourhoods) gives $\|\phi^*m\|_v^2=d\|m\|_v^2$ in the metric [F5]. If $g=0$, choose a nonempty affine open $U_i=\operatorname{Spec}D_i$ of each $A_i$ containing the identity. By [F24], each $D_i$ is a zero-dimensional domain and hence a field; evaluation at the $K$-rational identity is a unital $K$-algebra map $D_i\to K$, so it is injective and its image contains $K$, forcing $D_i=K$. Thus [F19] gives $K(A_i)=K$, $\phi_K$ is the identity, and $d=1$. By step 1.3, the finite locally free coordinate algebra $C=\Gamma(G,\mathcal O_G)$ has rank one over $R$. The identity section gives an augmentation $\epsilon:C\to R$ splitting the unit map $\eta:R\to C$, hence $C=\eta(R)\oplus P$ for $P=\ker\epsilon$. The rank-one locally free $R$-module $C$ is torsion-free: on an affine open cover trivializing it, multiplication by a nonzero element of the domain $R$ is injective, so a global section annihilated by it vanishes on the cover and is zero. Since $C\otimes_RK$ is one-dimensional and $\eta_K:K\to C\otimes_RK$ is a nonzero map of one-dimensional $K$-vector spaces, it is an isomorphism; therefore $P\otimes_RK=0$. Every $p\in P$ is then killed by a nonzero element of $R$, so torsion-freeness gives $P=0$. Thus $C=R$, $G=\operatorname{Spec}R$, and $M=e^*\Omega^1_{G/R}=0$. The complex map is the identity on a point, so its norm factor is $d=1$. In either dimension case, [F25] gives $\sum_{v\mid\infty}\epsilon_v=[K:\mathbb Q]$, and the weighted archimedean denominator in [F1] is multiplied by $d^{[K:\mathbb Q]/2}$. [F4, F5, F9, F13, F14, F16, F17, F19, F23, F24, F25, step 1.3, step 2.1, given, algebra]

4.1 Compute both module heights in [F1] using $m$ and $\phi^*m$, which are nonzero by step 1.1. Step 1.2 multiplies the finite-index numerator by $\#M$, and step 3.1 multiplies the weighted norm denominator by $d^{[K:\mathbb Q]/2}$. Conditional on [A3], these module heights are the stable Faltings heights in the Statement. Taking logarithms, dividing by $[K:\mathbb Q]$, and using $M=e^*\Omega^1_{G/R}$ yields the displayed formula; without [A3] this last identification remains unresolved. [A3, F1, F2, step 1.2, step 3.1, algebra] ∎
## Proof status

The determinant and archimedean calculations prove the Statement using the declared stable-height independence theorem. Readiness remains dependent on that theorem and its prerequisites.
