---
id: lem-birational-morphism-principal-open-isomorphism
kind: lemma
title: "Birational morphisms restrict to isomorphisms between principal affine opens"
status: published
origin: pipeline
deps:
  - def-birational-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-integral-scheme
  - lem-integral-finite-type-scheme-function-field
  - def-finite-type-and-module-finite-algebras
  - def-field-of-fractions
  - thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - thm-affine-scheme-ring-anti-equivalence
  - lem-spectrum-localization-open-immersion
  - def-principal-distinguished-subset-of-spectrum
  - thm-universal-property-of-localisation
  - def-open-immersion-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.51.5 (tag 0BAC)"
      url: https://stacks.math.columbia.edu/tag/0BAC
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.51.1 (tag 01RO)"
      url: https://stacks.math.columbia.edu/tag/01RO
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $k$ be a field, let $X$ and $Y$ be integral $k$-schemes of finite type, and
let $f:X\to Y$ be a birational morphism that is locally of finite type. Then
there exist nonempty affine open subschemes $U=\operatorname{Spec}A\subseteq X$
and $V=\operatorname{Spec}B\subseteq Y$ with $f(U)\subseteq V$, the induced
ring map $\varphi:B\to A$ of finite type, and an element
$\sigma\in B\setminus\{0\}$, such that the localised map
$$B_\sigma\longrightarrow A_\sigma,$$
sending $b/\sigma^m$ to $\varphi(b)/\varphi(\sigma)^m$, is an isomorphism,
where $A_\sigma$ denotes the localisation of $A$ at the image of $\sigma$.
Consequently $f$ restricts to an isomorphism
$$f^{-1}(D(\sigma))\cap U=D(\varphi(\sigma))\longrightarrow D(\sigma)$$
of the principal open subschemes determined by $\sigma$: there is a nonempty
open subscheme $V_0=D(\sigma)\subseteq V$ such that
$f^{-1}(V_0)\cap U\to V_0$ is an isomorphism and
$f^{-1}(V_0)\cap U$ is affine, namely $D(\varphi(\sigma))$.

## Facts & Assumptions

**Given:** A field $k$, integral finite-type $k$-schemes $X$ and $Y$, and a birational morphism $f:X\to Y$ that is locally of finite type.

[F1] The morphism $f$ is birational: $f(\eta_X)=\eta_Y$ and the stalk map $\mathcal O_{Y,\eta_Y}\to\mathcal O_{X,\eta_X}$ is an isomorphism. ([[def-birational-morphism-schemes]])

[F2] Let $X$ be an integral finite-type $k$-scheme with generic point $\eta$. For every nonempty affine open $U=\operatorname{Spec}A\subseteq X$ the stalk $K=\mathcal O_{X,\eta}$ is canonically isomorphic to $\operatorname{Frac}\Gamma(U,\mathcal O_X)$; here $\Gamma(U,\mathcal O_X)\cong A$. ([[lem-integral-finite-type-scheme-function-field]])

[F3] A morphism $f:X\to S$ is locally of finite type when every point of $X$ has an affine open neighbourhood $U$ and $f(U)$ lies in an affine open $V=\operatorname{Spec}A$ of $S$ such that $U=\operatorname{Spec}B$ and $A\to B$ is of finite type. ([[def-locally-finite-type-and-finite-type-morphism]])

[F4] A commutative $R$-algebra $A$ is of finite type when $A=R[a_1,\ldots,a_n]$ for some $n\ge 0$ and elements $a_i\in A$. ([[def-finite-type-and-module-finite-algebras]])

[F5] For a domain $D$, the field of fractions $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ consists of fractions $a/b$ with $a,b\in D$, $b\ne0$. ([[def-field-of-fractions]])

[F6] For every integral domain $D$ the localisation $\operatorname{Frac}(D)$ is a field and the canonical map $D\to\operatorname{Frac}(D)$, $d\mapsto d/1$, is an injective unital ring homomorphism. ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]])

[F7] An integral scheme is nonempty and every nonempty affine open is the spectrum of a domain. ([[def-integral-scheme]])

[F8] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ is a natural bijection $\operatorname{Hom}_{\rm CRing}(A,B)\cong \operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$, so $A\mapsto\operatorname{Spec}A$ is a contravariant equivalence with quasi-inverse global sections. ([[thm-affine-scheme-ring-anti-equivalence]])

[F9] For $g\in R$, the morphism induced by $R\to R_g$ identifies $\operatorname{Spec}(R_g)$ with the open locally ringed subspace $D(g)$ of $\operatorname{Spec}R$. ([[lem-spectrum-localization-open-immersion]])

[F10] For $g\in R$, the principal distinguished subset is $D(g)=\{\mathfrak p\in\operatorname{Spec}(R):g\notin\mathfrak p\}$. ([[def-principal-distinguished-subset-of-spectrum]])

[F11] If $f:R\to A$ is a unital homomorphism of commutative rings such that $f(s)$ is a unit for every $s\in S$, then there is a unique unital ring homomorphism $\widetilde f:S^{-1}R\to A$ with $\widetilde f\circ\lambda_S=f$, namely $\widetilde f(r/s)=f(r)f(s)^{-1}$. ([[thm-universal-property-of-localisation]])

[F12] A morphism $j:U\to X$ is an open immersion when it identifies $U$ isomorphically with an open subscheme of $X$. ([[def-open-immersion-schemes]])



## Proof

**Proof technique:** direct: choose an affine chart of finite type at the generic point, clear the finitely many denominators of a finite algebra presentation, and compare the resulting principal localisations.

1.1 Since $f$ is locally of finite type, [F3] applied at the point $\eta_X$ provides a nonempty affine open $U=\operatorname{Spec}A\subseteq X$ and an affine open $V=\operatorname{Spec}B\subseteq Y$ with $f(U)\subseteq V$ and the induced ring map $\varphi:B\to A$ of finite type. [F3, given]

1.2 By [F7] the rings $A$ and $B$ are domains, since $U$ and $V$ are nonempty affine opens of the integral schemes $X$ and $Y$. By [F2] the stalks at the generic points are canonically identified with the fraction fields, $K(X)=\mathcal O_{X,\eta_X}\cong\operatorname{Frac}A$ and $K(Y)=\mathcal O_{Y,\eta_Y}\cong\operatorname{Frac}B$. [F2, F7]

2.1 The stalk map of [F1] is the localisation of the chart map $\varphi$ at the generic point, so under the identifications of step 1.2 it is the map $\operatorname{Frac}B\to\operatorname{Frac}A$ induced by $\varphi$. By [F1] this map is an isomorphism; in particular $\varphi$ is injective, because its composite with the injection $A\hookrightarrow\operatorname{Frac}A$ is the injection $B\hookrightarrow\operatorname{Frac}B$ of [F6]. [F1, F6, step 1.2]

3.1 By [F4] there are finitely many elements $a_1,\ldots,a_n\in A$ with $A=B[a_1,\ldots,a_n]$, the case $n=0$ meaning $A=B[\,]$ is generated by the empty list over $B$; in particular $\varphi$ is then surjective. [F4, step 2.1]

3.2 Since $\operatorname{Frac}B\to\operatorname{Frac}A$ is an isomorphism by step 2.1, and $A\subseteq\operatorname{Frac}A$, each $a_i$ has the form $a_i=b_i/s_i$ with $b_i\in B$ and $s_i\in B\setminus\{0\}$, by [F5]. Multiplying by $s_i$ and using that $A\hookrightarrow\operatorname{Frac}A$ is injective gives the equality $s_ia_i=b_i$ in $A$. Put $\sigma=s_1\cdots s_n$, an element of $B\setminus\{0\}$; when $n=0$ this is $\sigma=1$. [F5, F6, step 2.1]

4.1 In the localisation $A_\sigma$ of $A$ at the image of $\sigma$ the class of every $s_i$ is a unit, because $s_i$ divides $\sigma$; hence the image of $a_i$ equals $\varphi(b_i)\varphi(s_i)^{-1}$, an element in the image of the localised map $B_\sigma\to A_\sigma$. Since $A=B[a_1,\ldots,a_n]$ and localisation of an algebra presentation is generated by the localised generators, [F11] shows that $B_\sigma\to A_\sigma$ is surjective. [F4, F11, step 3.1, step 3.2]

4.2 The composite $B_\sigma\to A_\sigma\to\operatorname{Frac}(A_\sigma)$ is injective: the localisation $A_\sigma$ of the domain $A$ at the nonzero element $\varphi(\sigma)$ is a subring of $\operatorname{Frac}A$ with $\operatorname{Frac}(A_\sigma)=\operatorname{Frac}A$ by [F5] and [F6], and under these identifications the composite is the localisation map $B_\sigma\to\operatorname{Frac}B=\operatorname{Frac}A$ of the domain $B$ at the nonzero element $\sigma$, which is injective by [F6]. [F5, F6, step 3.2]

5.1 Steps 4.1 and 4.2 show that $\varphi_\sigma:B_\sigma\to A_\sigma$ is an isomorphism. By [F8] it corresponds to an isomorphism $\operatorname{Spec}A_\sigma\to\operatorname{Spec}B_\sigma$ of affine schemes. The localisation maps $B\to B_\sigma$ and $A\to A_\sigma$ induce open immersions $\operatorname{Spec}A_\sigma\to\operatorname{Spec}A$ and $\operatorname{Spec}B_\sigma\to\operatorname{Spec}B$ whose images are $D(\varphi(\sigma))$ and $D(\sigma)$ by [F9] and [F10]; the composite $\operatorname{Spec}A_\sigma\to\operatorname{Spec}A\to\operatorname{Spec}B$ is $f$ restricted to the open subscheme $\operatorname{Spec}A_\sigma\subseteq U$ and factors through the isomorphism $\operatorname{Spec}A_\sigma\cong\operatorname{Spec}B_\sigma\to\operatorname{Spec}B$, so by [F12] the restriction of $f$ to $\operatorname{Spec}A_\sigma$ is an isomorphism onto $\operatorname{Spec}B_\sigma$, and it is invertible after restriction to the open subschemes $D(\varphi(\sigma))\subseteq U$ and $D(\sigma)\subseteq V$. [F8, F9, F10, F12, step 4.2]

6.1 Preimages of principal opens under the chart map are principal opens: a prime $\mathfrak p\in\operatorname{Spec}A$ lies over $D(\sigma)$ exactly when $\sigma\notin\varphi^{-1}(\mathfrak p)$, that is $\varphi(\sigma)\notin\mathfrak p$, so $f^{-1}(D(\sigma))\cap U=D(\varphi(\sigma))=\operatorname{Spec}A_\sigma$. Setting $V_0=D(\sigma)$ gives a nonempty open subscheme of $V$, because $\sigma\ne0$ in the domain $B$ makes $(0)\in D(\sigma)$ by [F10], and the restriction $f^{-1}(V_0)\cap U\to V_0$ is an isomorphism by step 5.1. The construction used only the finitely many generators of a finite-type presentation and the finitely many denominators of step 3.2; no infinite choice is made, and for $n=0$ the element is $\sigma=1$, so that $U\to V$ is itself the required isomorphism onto $V_0=V$. ∎ [F10, F11, step 3.2, step 5.1]
