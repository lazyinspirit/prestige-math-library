---
id: "thm-ag-field-extension-of-schemes"
kind: "theorem"
title: "Extension of scalars of a scheme along a field extension"
status: draft
origin: "pipeline"
deps: ["thm-gluing-affine-schemes", "thm-affine-scheme-ring-anti-equivalence", "thm-sections-basic-open-affine-scheme", "lem-intersection-affine-opens-covered-principal-opens", "thm-localisation-of-modules-is-tensor-product", "thm-universal-property-of-localisation", "thm-coproduct-property-of-tensor-products-of-commutative-algebras", "thm-associativity-of-balanced-tensor-products", "def-residue-field-scheme-point", "def-scheme", "def-axiom-of-choice"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks common principal neighbourhoods, Lemma 26.11.5"
      url: "https://stacks.math.columbia.edu/tag/01IW"
    - title: "Stacks Algebra 10.131.12 and standard affine tensor base change"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be a scheme ([[def-scheme]]) with a morphism $X\to\operatorname{Spec}k$, and
let $K/k$ be a field extension. Then:

1. **Construction.** For every affine open $U=\operatorname{Spec}A\subseteq X$
   the ring $A$ is a $k$-algebra, the $k$-algebra map $A\to A\otimes_kK$ gives a
   morphism $\operatorname{Spec}(A\otimes_kK)\to U$
   ([[thm-affine-scheme-ring-anti-equivalence]]), and for a principal open
   $\operatorname{Spec}A_f=\operatorname{Spec}B_g$ of $X$ the canonical
   identifications $A_f=B_g=\Gamma(W,\mathcal O_X)$
   ([[thm-sections-basic-open-affine-scheme]]) identify the corresponding open
   subschemes of $\operatorname{Spec}(A\otimes_kK)$ and
   $\operatorname{Spec}(B\otimes_kK)$. These data satisfy the identity and
   cocycle conditions, so [[thm-gluing-affine-schemes]] glues the affine schemes
   $\operatorname{Spec}(A\otimes_kK)$, over all affine opens $U=\operatorname{Spec}A$
   of $X$, to a $K$-scheme $X_K$ with a morphism $X_K\to X$ over $k$.
2. **Independence of the cover.** If $X_K$ and $X_K'$ arise from two affine
   covers of $X$ by this construction, there is a unique isomorphism
   $X_K\to X_K'$ commuting with both the morphisms to $X$ and the structure
   morphisms to $\operatorname{Spec}K$.
3. **Affine restrictions and fibres.** For every affine open
   $U=\operatorname{Spec}A\subseteq X$ the restriction of $X_K\to X$ over $U$
   is canonically $\operatorname{Spec}(A\otimes_kK)\to\operatorname{Spec}A$. For
   $x\in X$ with residue field $\kappa(x)$ ([[def-residue-field-scheme-point]])
   and any affine open $U=\operatorname{Spec}A$ containing $x$, the fibre of
   $X_K\to X$ over $x$, computed as
   $\operatorname{Spec}\bigl((A\otimes_kK)\otimes_A\kappa(x)\bigr)$, is
   independent of $U$ up to canonical isomorphism and is canonically
   $\operatorname{Spec}(\kappa(x)\otimes_kK)$.
4. **Transitivity.** For a tower of fields $K\subseteq L$ the canonical
   morphism $(X_K)_L\to X_L$ is an isomorphism, canonically over $X$.

The Axiom of Choice is used only to present the affine cover as a family of
affine opens indexed by the points of $X$; the same construction runs on the
set of all affine opens of $X$, which needs no choice. The assumption is
declared and is inherited by consumers, since the statement promises it.

## Facts & Assumptions

**Given:** A field $k$, a scheme $X$ with a morphism to $\operatorname{Spec}k$, a field extension $K/k$ (and a tower $K\subseteq L$ for clause 4), and the Axiom of Choice.

[F1] [[thm-gluing-affine-schemes]]: affine schemes equipped with open subschemes and isomorphisms on overlaps satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism respecting the chart identifications, and the given affine schemes become an open affine cover.

[F2] [[thm-affine-scheme-ring-anti-equivalence]]: $\operatorname{Hom}_{\rm CRing}(A,B)\cong\operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A)$ naturally, and $\operatorname{Spec}$ is a contravariant equivalence with quasi-inverse global sections.

[F3] [[thm-sections-basic-open-affine-scheme]]: for $f\in A$, $\Gamma(D(f),\mathcal O)=A_f$, and if $D(g)\subseteq D(f)$ the restriction is the canonical localisation $A_f\to A_g$.

[F4] [[lem-intersection-affine-opens-covered-principal-opens]]: if $U,V$ are affine open subschemes of a scheme, then $U\cap V$ is covered by open subschemes that are principal opens in $U$ and principal opens in affine open charts of $V$.

[F5] [[thm-localisation-of-modules-is-tensor-product]]: for a multiplicative set $S\subseteq R$ and an $R$-module $M$ the map $(S^{-1}R)\otimes_RM\to S^{-1}M$, $(a/s)\otimes m\mapsto am/s$, is an isomorphism.

[F6] [[thm-universal-property-of-localisation]]: a unital ring homomorphism $R\to A$ carrying every element of $S$ to a unit factors uniquely through $S^{-1}R$.

[F7] [[thm-coproduct-property-of-tensor-products-of-commutative-algebras]]: $A\otimes_RB$ is the coproduct of the commutative $R$-algebras $A$ and $B$, with the universal map $h(a\otimes b)=f(a)g(b)$ for each pair of $R$-algebra maps $f,g$ into a common $R$-algebra $C$.

[F8] [[thm-associativity-of-balanced-tensor-products]]: there is a canonical isomorphism $(M\otimes_RN)\otimes_SP\to M\otimes_R(N\otimes_SP)$, $((m\otimes n)\otimes p)\mapsto m\otimes(n\otimes p)$, respecting compatible outer module actions.

[F9] [[def-residue-field-scheme-point]]: $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$, and for $x=\mathfrak p$ in an affine spectrum the canonical isomorphisms $\kappa(\mathfrak p)\cong A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}\cong\operatorname{Frac}(A/\mathfrak p)$ hold.

[F10] [[def-scheme]]: a scheme is a locally ringed space every point of which has an open neighbourhood that is an affine scheme with the restricted structure sheaf.

[F11] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

## Proof

1.1 Principal opens under base change. Let $A$ be a $k$-algebra and $f\in A$. The $k$-algebra map $A_f\to(A\otimes_kK)_{f\otimes1}$, $a/f^n\mapsto(a\otimes1)(f\otimes1)^{-n}$, is well defined by [F6], and after tensoring with $K$ gives a $(A\otimes_kK)_{f\otimes1}$-linear map $A_f\otimes_kK\to(A\otimes_kK)_{f\otimes1}$, because $(A\otimes_kK)_{f\otimes1}$ is an $A_f$-algebra by [F7]. Conversely $a\otimes\lambda\mapsto(a/1)\otimes\lambda$ is a $k$-algebra map $A\otimes_kK\to A_f\otimes_kK$ carrying $f\otimes1$ to a unit, so by [F6] it factors through a map $(A\otimes_kK)_{f\otimes1}\to A_f\otimes_kK$. The two maps are inverse on the generators $a\otimes\lambda$ and $1/(f\otimes1)$; composing with $\operatorname{Spec}$ by [F2], the principal open $D(f\otimes1)$ of $\operatorname{Spec}(A\otimes_kK)$ is canonically $\operatorname{Spec}(A_f\otimes_kK)$, compatibly with further principal localisations $f\mapsto f^n$ and with the restriction maps of [F3]. [F2, F3, F6, F7, F10, F11]

1.2 Fibre rings. Let $A$ be a $k$-algebra and $\mathfrak p\in\operatorname{Spec}A$ with residue field $\kappa(\mathfrak p)$ as in [F9]; then $\kappa(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}=A/\mathfrak p\otimes_AA_{\mathfrak p}$, and the composite of the canonical isomorphisms $(A\otimes_kK)\otimes_A\kappa(\mathfrak p)\cong\kappa(\mathfrak p)\otimes_A(A\otimes_kK)\cong(\kappa(\mathfrak p)\otimes_AA)\otimes_kK\cong\kappa(\mathfrak p)\otimes_kK$ of [F5] and [F8] sends $(a\otimes\lambda)\otimes c$ to $(ca)\otimes\lambda$. Hence there is a canonical $\kappa(\mathfrak p)$-linear isomorphism $(A\otimes_kK)\otimes_A\kappa(\mathfrak p)\cong\kappa(\mathfrak p)\otimes_kK$. [F5, F8, F9]

1.3 Common principal neighbourhoods. For affine opens $U=\operatorname{Spec}A$, $V=\operatorname{Spec}B$ and $x\in U\cap V$, first take $x\in D_U(f)\subseteq V$ using the principal-open basis. Then take $x\in D_V(g)\subseteq D_U(f)$. The restriction of $g$ to $D_U(f)$ is $a/f^r\in A_f$ by [F3], and its nonvanishing locus there is both $D_V(g)$ and $D_U(fa)$: the equality follows by applying the residue-field maps of the open immersion to this section. Thus $D_V(g)=D_U(fa)$ is principal in both original affines. This supplies the common principal refinements needed below, with independent denominators in the two coordinate rings. [F2, F3, F4, F9, algebra]

2.1 Gluing. Let $X$ be a scheme over $k$ and let $\{U_i=\operatorname{Spec}A_i\}$ be a family of affine opens covering $X$; each $A_i$ is a $k$-algebra because $X\to\operatorname{Spec}k$ restricts to $U_i$. For each $i$ the $k$-algebra map $A_i\to A_i\otimes_kK$ gives by [F2] a morphism $\operatorname{Spec}(A_i\otimes_kK)\to U_i\subseteq X$, and the affine pieces over distinct $i$ are to be identified over the principal opens. Whenever $W$ is an open subscheme of $X$ which is principal in $U_i$ and in $U_j$, say $W=\operatorname{Spec}(A_i)_f=\operatorname{Spec}(A_j)_g$, the rings $(A_i)_f$ and $(A_j)_g$ are both $\Gamma(W,\mathcal O_X)$ by [F3] and hence canonically equal, and the identity of rings induces by step 1.1 an identification of the corresponding open subschemes $\operatorname{Spec}((A_i)_f\otimes_kK)$ and $\operatorname{Spec}((A_j)_g\otimes_kK)$. These identifications are induced by identities of section rings and are therefore compatible: the identity and cocycle conditions hold on triple overlaps because all the identifications are the canonical comparison of $\Gamma(W,\mathcal O_X)\otimes_kK$ with itself. Since step 1.3 covers every overlap by such common principal opens, the data satisfy the hypotheses of [F1], which glues the schemes $\operatorname{Spec}(A_i\otimes_kK)$ to a scheme $X_K$ with open affine cover $\{\operatorname{Spec}(A_i\otimes_kK)\}$, and the morphisms to $X$ glue to $X_K\to X$. The maps to $\operatorname{Spec}K$ induced by $\lambda\mapsto1\otimes\lambda$ also agree on overlaps, so they glue to the $K$-scheme structure on $X_K$. [F1, F2, F3, F4, step 1.1, step 1.3]

3.1 Affine restriction. Let $U=\operatorname{Spec}A$ be any affine open of $X$. By step 1.3 cover each $U_i\cap U$ by common principal opens $W=D_{U_i}(f)=D_U(h)$. Their section rings $(A_i)_f$ and $A_h$ are canonically identified by [F3]. Step 1.1 identifies the corresponding base-changed opens with $\operatorname{Spec}(\Gamma(W,\mathcal O_X)\otimes_kK)$ on either side. These opens cover the inverse image of $U$ in $X_K$ and cover $\operatorname{Spec}(A\otimes_kK)$: a principal cover remains a cover under inverse image, since $D(h\otimes1)$ is precisely the inverse image of $D(h)$. The identifications agree on common refinements by step 1.1, so glue to an isomorphism over both $U$ and $\operatorname{Spec}K$ by [F1]. Hence the restriction is the asserted affine base change. [F1, F2, F3, step 1.1, step 1.3, step 2.1]

3.2 Independence of the cover. Let $\{U_i\}$ and $\{V_j\}$ be two affine covers of $X$. By step 1.3 the family of open subschemes $W$ of $X$ that are principal in some $U_i$ and in some $V_j$ covers $X$. For such a $W=\operatorname{Spec}B$, with $B=\Gamma(W,\mathcal O_X)$ by [F3], the construction of step 2.1 attaches to $W$ the affine scheme $\operatorname{Spec}(B\otimes_kK)$ in the glueing over $\{U_i\}$ and, by the same computation, in the glueing over $\{V_j\}$: in both cases $W$ arises as a principal open of an affine chart, and the attached piece is $\operatorname{Spec}$ of the localisation of the chart ring tensored with $K$, which is $B\otimes_kK$ by step 1.1. Both glued schemes are therefore obtained by glueing the same family $\{\operatorname{Spec}(B\otimes_kK)\}$ along the same canonical identifications over principal opens of $W$. By the uniqueness clause of [F1], applied to the two open affine covers of $X_K$ and $X_K'$, the canonical chart identifications glue to an isomorphism $X_K\to X_K'$ over $X$ and $\operatorname{Spec}K$. Any other such isomorphism must preserve each inverse image of $W$; on its ring $\Gamma(W,\mathcal O_X)\otimes_kK$, the induced map fixes both factors because it is over $W$ and over $K$. It is therefore the identity by [F7]. These opens cover, proving uniqueness with both compatibilities. [F1, F3, F7, step 1.1, step 1.3, step 2.1]

4.1 Fibres. Let $x\in X$ and let $U=\operatorname{Spec}A\subseteq X$ be an affine open containing $x$. By step 3.1 the preimage of $U$ in $X_K$ is $\operatorname{Spec}(A\otimes_kK)$ over $U$, and the scheme over $\kappa(x)$ attached to the point $x$ of that affine piece is $\operatorname{Spec}\bigl((A\otimes_kK)\otimes_A\kappa(x)\bigr)$, which by step 1.2 is canonically $\operatorname{Spec}(\kappa(x)\otimes_kK)$ over $\operatorname{Spec}\kappa(x)$. If $V=\operatorname{Spec}B$ is a second affine open containing $x$, choose $W$ principal in $U$ and in $V$ with $x\in W$, say $W=\operatorname{Spec}(A_f)=\operatorname{Spec}(B_g)$, using step 1.3 and [F3]; then $(A\otimes_kK)\otimes_AA_f\cong A_f\otimes_kK$ and $(B\otimes_kK)\otimes_BB_g\cong B_g\otimes_kK$ are canonically the same ring, so tensoring the identification with $\kappa(x)$ over the common ring $A_f=B_g=\Gamma(W,\mathcal O_X)$ identifies $(A\otimes_kK)\otimes_A\kappa(x)$ with $(B\otimes_kK)\otimes_B\kappa(x)$ canonically. Hence the fibre is independent of the affine neighbourhood and is $\operatorname{Spec}(\kappa(x)\otimes_kK)$ as asserted. [F3, F4, step 1.1, step 1.2, step 3.1]

5.1 Transitivity. Let $K\subseteq L$ be a tower, and write $(X_K)_L$ for the construction applied over the base field $K$ to the extension $L/K$. The affine pieces $\operatorname{Spec}(A_i\otimes_kK)$ constructed in step 2.1 form an affine cover of $X_K$, so the construction of $(X_K)_L$ glues the schemes $\operatorname{Spec}((A_i\otimes_kK)\otimes_KL)$. The canonical isomorphisms $(A_i\otimes_kK)\otimes_KL\cong A_i\otimes_kL$ of [F7] and [F8] are compatible with the transition identifications of step 2.1, because those are induced by identities of section rings; hence $X_L$, which is glued from the pieces $\operatorname{Spec}(A_i\otimes_kL)$, and $(X_K)_L$ are glued from corresponding pieces with corresponding identifications. By step 3.2 (applied to the two covers of the same scheme, or directly by the uniqueness clause of [F1]) the displayed chart isomorphisms glue to an isomorphism $(X_K)_L\to X_L$ over $X$ and $\operatorname{Spec}L$. It is unique with both compatibilities, by the same two-factor argument as step 3.2, proving clause 4. [F1, F7, F8, step 2.1, step 3.1, step 3.2] ∎
