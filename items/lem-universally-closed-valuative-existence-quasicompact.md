---
id: lem-universally-closed-valuative-existence-quasicompact
kind: lemma
title: Valuation lifts detect universal closedness
status: draft
origin: pipeline
deps:
  - cor-affine-scheme-quasi-compact
  - cor-specialisation-order-is-prime-inclusion
  - def-affine-scheme-spectrum
  - def-affine-open-subscheme
  - def-axiom-of-choice
  - def-base-change-morphism-schemes
  - def-closed-immersion-schemes
  - def-discrete-valuation
  - def-discrete-valuation-ring
  - def-field-of-fractions
  - def-fibre-product-schemes-universal-property
  - def-local-ring
  - def-localisation-at-a-prime-ideal
  - def-morphism-of-schemes
  - def-open-immersion-schemes
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - def-quasi-compact-and-quasi-separated-morphism
  - def-residue-field-scheme-point
  - def-scheme
  - def-specialisation-and-generic-point
  - def-universally-closed-morphism
  - def-valuation-on-a-field
  - def-valuation-ring
  - def-valuative-diagram-separatedness
  - lem-base-change-quasi-compact-morphisms
  - lem-field-valued-points-of-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-local-domain-dominated-by-valuation-overring
  - lem-quasi-compact-scheme-image-specialization-closed
  - lem-spectrum-localization-open-immersion
  - lem-valuation-ring-is-local
  - thm-affine-scheme-ring-anti-equivalence
  - thm-gluing-affine-schemes
  - thm-radical-as-intersection-of-primes
  - thm-sections-basic-open-affine-scheme
  - thm-stalk-structure-sheaf-prime-localization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: Stacks Project, Schemes, Lemma 26.19.8 (tag 01K9)
      url: https://stacks.math.columbia.edu/tag/01K9
    - title: Stacks Project, Schemes, Lemmas 26.20.2, 26.20.4–5 and Proposition 26.20.6 (tags 01KC, 01J8, 01KE, 01KF)
      url: https://stacks.math.columbia.edu/tag/01KF
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$f:X\to S$ be a quasi-compact morphism. Then $f$ is universally closed if and
only if every valuative diagram for $f$ over every valuation ring
$R\subseteq K$ has a lift $\operatorname{Spec}R\to X$. The quantifier cannot
be restricted to discrete valuation rings under these hypotheses: a
quasi-compact open immersion can fail to be universally closed while every
valuative diagram for it over a discrete valuation ring lifts.

## Facts & Assumptions

**Given:** AC, a quasi-compact morphism $f:X\to S$, and, when proving the
forward implication, a valuative diagram with valuation ring $R$, fraction
field $K$, generic map $\operatorname{Spec}K\to X$, and base map
$\operatorname{Spec}R\to S$.

[F1] AC asserts that every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F2] Universal closedness means that every base-changed projection
$X_T=X\times_ST\to T$ is a closed map. ([[def-universally-closed-morphism]])

[F3] A base change is the fibre product with its second projection.
([[def-base-change-morphism-schemes]])

[F4] Compatible maps to $X$ and $T$ over $S$ induce a unique map to
$X\times_ST$. ([[def-fibre-product-schemes-universal-property]])

[F5] A valuative diagram uses a valuation ring $R$ with fraction field $K$,
the generic map $\operatorname{Spec}K\to X$, and a compatible base map
$\operatorname{Spec}R\to S$; a lift is a map $\operatorname{Spec}R\to X$
compatible with both. ([[def-valuative-diagram-separatedness]])

[F6] A local ring is a nonzero commutative ring with exactly one maximal
ideal. ([[def-local-ring]])

[F7] A valuation ring $R\subseteq K$ satisfies, for each $a\in K^\times$,
$a\in R$ or $a^{-1}\in R$. ([[def-valuation-ring]])

[F8] Under AC, a local subring of a field is dominated by a valuation
overring in that field with the same fraction field. ([[lem-local-domain-dominated-by-valuation-overring]])

[F9] A morphism is quasi-compact when inverse images of quasi-compact opens
are quasi-compact. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F10] Quasi-compact morphisms remain quasi-compact after arbitrary base
change, and quasi-compactness can be checked on an affine cover of the target.
([[lem-base-change-quasi-compact-morphisms]])

[F11] Under AC, the image of a quasi-compact morphism is closed exactly when
it is stable under specialization. ([[lem-quasi-compact-scheme-image-specialization-closed]])

[F12] The points of $\operatorname{Spec}A$ are the prime ideals of $A$, and
the distinguished opens $D(a)$ form its basic open basis.
([[def-affine-scheme-spectrum]])

[F13] In an affine spectrum, $\mathfrak q$ is a specialization of
$\mathfrak p$ exactly when $\mathfrak p\subseteq\mathfrak q$.
([[cor-specialisation-order-is-prime-inclusion]])

[F14] At the point $\mathfrak q$ of $\operatorname{Spec}B$, the stalk is
$B_{\mathfrak q}$. ([[thm-stalk-structure-sheaf-prime-localization]])

[F15] A ring map induces the corresponding morphism of affine schemes, and
the affine spectrum of a localization is the corresponding distinguished
open subscheme and open immersion. ([[thm-affine-scheme-ring-anti-equivalence]], [[lem-spectrum-localization-open-immersion]], [[def-open-immersion-schemes]])

[F16] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F17] A discrete valuation ring is the nonnegative part of a surjective
integer-valued valuation; every nonzero element of its maximal ideal has
positive integer value. ([[def-discrete-valuation-ring]], [[def-discrete-valuation]], [[def-valuation-on-a-field]])

[F18] Affine quotient charts whose overlap restrictions agree glue to a
scheme, and quotient ring maps give closed immersions.
([[def-closed-immersion-schemes]], [[lem-closed-immersion-affine-quotient-and-base-change]], [[thm-gluing-affine-schemes]])

[F19] The nonunits of a valuation ring form its unique maximal ideal.
([[lem-valuation-ring-is-local]])

[F20] Every point of a scheme has an affine open neighbourhood, with its
restricted structure sheaf. ([[def-scheme]], [[def-affine-open-subscheme]])

[F21] A field-valued point with image $x$ is equivalent to an embedding
$\kappa(x)\hookrightarrow K$; maps from the spectrum of a local ring are
equivalent to local maps from the target stalk. ([[lem-field-valued-points-of-schemes]])

[F22] For an ideal $I$, the closed set $V(I)$ consists of the primes
containing $I$. ([[def-prime-spectrum-and-vanishing-sets]])

[F23] The principal open is
$D(a)=\{\mathfrak p\in\operatorname{Spec}A:a\notin\mathfrak p\}$.
([[def-principal-distinguished-subset-of-spectrum]])

[F24] A point $y$ is a specialization of $x$ if $y$ belongs to the closure
of $\{x\}$. ([[def-specialisation-and-generic-point]])

[F25] Under AC, the radical $\sqrt I$ is the intersection of the prime ideals
containing $I$. ([[thm-radical-as-intersection-of-primes]])

[F26] A morphism of schemes is a morphism of the underlying locally ringed
spaces, so its underlying map is continuous. ([[def-morphism-of-schemes]])

[F27] On an affine spectrum, sections on $D(a)$ are the localization $A_a$.
([[thm-sections-basic-open-affine-scheme]])

[F28] At an affine point $\mathfrak p$, its residue field is canonically
$\operatorname{Frac}(B/\mathfrak p)$. ([[def-residue-field-scheme-point]])

[F29] The localization at a prime $\mathfrak q$ is $B_{\mathfrak q}$.
([[def-localisation-at-a-prime-ideal]])

[F30] For a domain $D$, its field of fractions is the localization at all
nonzero elements of $D$. ([[def-field-of-fractions]])

## Proof

**Proof technique:** specialize a generic point in each valuation base
change; then convert specialization lifting back to valuation existence. A
separate composite-valuation calculation rules out a DVR-only shortcut.

1.1 Assume first that $f$ is universally closed and fix a valuative diagram. By [F3] and [F4] the generic map and the identity of $\operatorname{Spec}R$ give a map $\operatorname{Spec}K\to X_R:=X\times_S\operatorname{Spec}R$. The projection $f_R:X_R\to\operatorname{Spec}R$ is closed by [F2]. The closure of the image point of $\operatorname{Spec}K$ is closed in $X_R$; its image is closed, contains the generic point of $\operatorname{Spec}R$, and therefore is all of $\operatorname{Spec}R$. Choose a point $z$ in this closure over the closed point of $\operatorname{Spec}R$. [F2, F3, F4, given]

1.2 Conversely, assume every valuative diagram for $f$ has a lift. Fix an arbitrary base change $T\to S$ and a closed subset $Z\subseteq X_T$. Give $Z$ its reduced closed-subscheme structure. On an affine chart $U=\operatorname{Spec}C$ of $X_T$, write $Z\cap U=V(I_U)$ and use the quotient chart $\operatorname{Spec}(C/\sqrt{I_U})$. If $a\in C$, localization gives $(\sqrt{I_U})_a=\sqrt{(I_U)_a}$: if $(x/1)^n$ belongs to $(I_U)_a$, some power $a^m x^n$ lies in $I_U$, whence $(a^m x)^n\in I_U$ and $x/1$ lies in $(\sqrt{I_U})_a$. The reverse inclusion follows directly from the definition of radical. Therefore the quotient charts restrict to reduced closed subschemes on principal opens. Given two affine charts $U,U'$ and a point of $U\cap U'$, choose a principal open $D_U(a)$ around it contained in $U'$, then a principal open $D_{U'}(b)$ around it contained in $D_U(a)$. By [F27], the restriction of $b$ to $D_U(a)$ is $c/a^n$ for some $c\in C$; hence this common neighborhood is $D_U(ac)=D_{U'}(b)$, principal in both charts. On it the two quotient restrictions define radical ideals with the same vanishing set $Z\cap D_U(ac)$. By [F25] the two ideals are equal, so the identity on this quotient gives their canonical overlap isomorphism. These isomorphisms satisfy the cocycle condition because they are induced by the same restrictions of $\mathcal O_{X_T}$. The quotient charts glue by [F18] to a reduced closed subscheme with underlying set $Z$. Let $g:Z\to T$ be its composite map. [F12, F15, F18, F20, F22, F25, F27, given]

1.3 To verify the DVR clause, fix a field $k$. Let $F=\operatorname{Frac}(k[\mathbb Q])$, where $k[\mathbb Q]$ is the group algebra with monomials $t^q$ for $q\in\mathbb Q$. The product of the least-exponent monomials is the unique least term of the product and has nonzero coefficient, so $k[\mathbb Q]$ is a domain. The least exponent of a nonzero Laurent polynomial defines a valuation $w:F^\times\to\mathbb Q$; for a fraction $P/Q$, its value is the least exponent of $P$ minus that of $Q$; additivity of least exponents under multiplication makes this independent of the representative. The least exponent of a sum of two nonzero Laurent polynomials is at least the minimum of their least exponents, with strict increase possible when leading terms cancel; after clearing denominators this gives the valuation inequality for fractions. Let $W=\{0\}\cup\{a\in F^\times:w(a)\ge0\}$, and put $K=F((u))$. For $h\in K^\times$, define $v(h)=(\operatorname{ord}_u(h),w(\operatorname{lc}_u(h)))$ in $\mathbb Z\times\mathbb Q$ with lexicographic order. Multiplication adds the $u$-orders and multiplies leading coefficients; for a sum with unequal $u$-orders, the lower-order term determines the leading term, while for equal orders the leading coefficients add and the valuation inequality for $w$ handles their sum. Leading terms show $v(hh')=v(h)+v(h')$ and $v(h+h')\ge\min(v(h),v(h'))$ when $h+h'\ne0$. Set $v(0)=\infty$. Thus $R=\{0\}\cup\{h\in K^\times:v(h)\ge(0,0)\}$ is a valuation ring: if $v(h)<(0,0)$ then $v(h^{-1})= -v(h)>(0,0)$. Every element of $K^\times$ is therefore a quotient of elements of $R$, so $\operatorname{Frac}(R)=K$. [F7, F30, construct]

2.1 Let $x$ be the image of the generic point. Choose an affine open $U=\operatorname{Spec}B$ around $z$; it also contains $x$, since $x$ is a generalization of $z$. Write $x=\mathfrak p$ and $z=\mathfrak q$. By [F12] and [F13], $\mathfrak p\subseteq\mathfrak q$; [F24] gives the generalization relation used here. The map $B\to K$ from the given field-valued point has kernel $\mathfrak p$ and induces the specified embedding $\operatorname{Frac}(B/\mathfrak p)=\kappa(x)\hookrightarrow K$ by [F21], [F28], and [F30]. Every element outside $\mathfrak q$ is outside $\mathfrak p$, so the map extends to $B_{\mathfrak q}=\mathcal O_{X_R,z}\to K$ by [F14] and [F29]. Its kernel is $\mathfrak pB_{\mathfrak q}$, contained in the maximal ideal $\mathfrak qB_{\mathfrak q}$; hence its image $A\cong B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ is local with maximal ideal $\mathfrak qB_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ by [F6]. The structural local map $R\to\mathcal O_{X_R,z}$ followed by this quotient map is local, and its composite with $A\hookrightarrow K$ is the original inclusion $R\hookrightarrow K$. Thus it identifies $R$ with a subring of $A$ and contracts the maximal ideal of $A$ to that of $R$, so $A$ dominates $R$. [F6, F12, F13, F14, F20, F21, F24, F26, F28, F29, F30, given, step 1.1]

2.2 Suppose $t'\in g(Z)$ and $t$ is a specialization of $t'$. Fix $z'\in Z$ over $t'$ and put $K=\kappa(z')$. By [F21], the residue-field point gives $\operatorname{Spec}K\to Z$, with its induced field embedding $\kappa(t')\hookrightarrow K$. Choose an affine open $\operatorname{Spec}C$ around $t$; since it is open and contains the specialization $t$, it also contains $t'$. Write $t'=\mathfrak p$ and $t=\mathfrak q$, so [F13] gives $\mathfrak p\subseteq\mathfrak q$. By [F28] and [F30], $\kappa(t')=\operatorname{Frac}(C/\mathfrak p)$. Every denominator outside $\mathfrak q$ is outside $\mathfrak p$, so the stalk map $\mathcal O_{T,t}=C_{\mathfrak q}\to\kappa(t')$ has image exactly $(C/\mathfrak p)_{\mathfrak q/\mathfrak p}$ by [F14] and [F29]. This is a local domain, and its embedding in $K=\kappa(z')$ preserves that local-domain structure. By [F8], choose a valuation ring $V\subseteq K$ dominating that image. The resulting local map $\mathcal O_{T,t}\to V$ gives $\operatorname{Spec}V\to T$ by [F21], with closed point over $t$ by [F19] and generic point over $t'$. [F6, F8, F13, F14, F19, F20, F21, F28, F29, F30, step 1.2]

2.3 Write $u\in K$ for the series parameter and $t=t^1\in F$ for the coefficient monomial. Every element of $R$ is a power series in $u$ whose constant coefficient lies in $W$. Taking that coefficient is a surjective ring map $R\to W$ with kernel $P=\{0\}\cup\{h\in R:\operatorname{ord}_u(h)>0\}$; hence $P$ is prime and $R/P\cong W$. An element of $R$ is a unit exactly when its value is $(0,0)$: a positive value makes its inverse leave $R$, while value zero puts both it and its inverse in $R$. Hence [F19] identifies the maximal ideal as $\mathfrak m=\{h:v(h)>(0,0)\}$. We have $v(u)=(1,0)$ and $v(t)=(0,1)$, so $u\in P$ and $t\in\mathfrak m\setminus P$. Moreover $\sqrt{tR}=\mathfrak m$: for nonzero $h\in\mathfrak m$ with value $(n,q)$ and $n>0$, $v(h/t)=(n,q-1)>(0,0)$, so $h/t\in R$ and $h\in tR$. If its value is $(0,q)$ with $q>0$, choose a positive integer $N$ with $Nq\ge1$; then $v(h^N/t)=(0,Nq-1)\ge(0,0)$ and $h^N/t\in R$. Conversely, since the maximal ideal is prime and contains t, it contains every element whose positive power belongs to tR; this proves the reverse inclusion in the radical equality. Thus the only prime containing $t$ is $\mathfrak m$. By its definition, every nonzero element of P has positive first value, so P is contained in the maximal ideal. By [F13], $P$ specializes to $\mathfrak m$. [F12, F13, algebra, step 1.3]

3.1 Let $D(t)\hookrightarrow\operatorname{Spec}R$ be the principal open immersion. It is quasi-compact: its source is affine by [F15] and hence quasi-compact by [F16], and the single affine cover of the target suffices in [F10]. It is not closed, since it contains $P$ but omits its specialization $\mathfrak m$; therefore it is not universally closed by [F2], using the identity base change. [F2, F10, F13, F15, F16, F23, F24, step 2.3]

3.2 Consider any valuative diagram for this open immersion with a DVR $A\subseteq L$, fraction field $L$, ring map $\phi:R\to A$, and generic map factoring through $D(t)$. Its kernel $\mathfrak p=\ker(R\to L)$ avoids $t$ by [F23]. We claim $\mathfrak p\in\{(0),P\}$. If $r\in\mathfrak p$ is nonzero and has value $(0,q)$, then $q\ge0$. If $q=0$, $r$ is a unit, impossible; if $q>0$, $r/t^q$ is a unit, so primality gives $t^q\in\mathfrak p$, and a positive integer power of $t^q$ is a positive integer power of $t$, forcing $t\in\mathfrak p$, also impossible. Thus every nonzero element of $\mathfrak p$ has value $(n,q)$ with $n>0$. For such an element $r$, if $q\le0$ then $u^n/r\in R$, so $u^n\in\mathfrak p$ and $u\in\mathfrak p$. If $q>0$, write $r=u^n c$ with $c=r/u^n\in R$ of value $(0,q)$; the previous argument rules out $c\in\mathfrak p$, so primality again gives $u\in\mathfrak p$. For any $s\in P$ of value $(m,q')$, if $q'\ge0$, then $s/u^m\in R$, so $s\in(u^m)\subseteq\mathfrak p$. If $q'<0$, then $u^m/s\in R$ and $u^m=s(u^m/s)$, where $u^m/s$ has value $(0,-q')>0$; it cannot belong to $\mathfrak p$ by the earlier argument, so primality gives $s\in\mathfrak p$. Thus $P\subseteq\mathfrak p$. Therefore every nonzero prime avoiding $t$ equals $P$, proving the claim. [F7, F12, F17, F23, algebra, step 1.3, step 2.3]

3.3 The valuation ring $R$ has no proper local overring inside $K$ that dominates it. Indeed, if $a\in A\setminus R$, [F7] gives $a^{-1}\in R$. This inverse is not a unit of $R$, since otherwise $a\in R$; hence $a^{-1}\in\mathfrak m_R$. Domination puts $a^{-1}$ in the maximal ideal of $A$, contradicting $a a^{-1}=1$. Thus $A=R$. The quotient map $\mathcal O_{X_R,z}\to A=R$ is local, so [F21] gives a map $\operatorname{Spec}R\to X_R$. The valuation ring $R$ is local by [F19], and every point of $\operatorname{Spec}R$ generalizes its closed point, whose image is $z$; since $U$ is open and contains $z$, the whole map lands in $U$. Its generic restriction is the original $\operatorname{Spec}K$ map because the two maps into $U=\operatorname{Spec}B$ induce the same ring map $B\to K$. Composing with $X_R\to X$ gives the required lift. [F6, F7, F21, step 2.1]

3.4 Compose $\operatorname{Spec}K\to Z\to X_T\to X$ and $\operatorname{Spec}V\to T\to S$. They form a valuative diagram for $f$. Its lift $\operatorname{Spec}V\to X$, paired with $\operatorname{Spec}V\to T$, gives a map to $X_T$ by [F4]. By uniqueness in [F4], its generic restriction is the original map through $z'$. The closed point is a specialization of the generic point of $\operatorname{Spec}V$ by [F24], so continuity of the resulting scheme map [F26] and closedness of $Z$ put its image in $Z$ as well. Consequently $t\in g(Z)$; hence $g(Z)$ is stable under specialization. [F4, F5, F19, F24, F26, step 2.2]

4.1 If $\phi(t)$ were a nonunit, its contraction $\mathfrak q=\phi^{-1}(\mathfrak m_A)$ would contain $t$, hence would equal $\mathfrak m$ by step 2.3. Thus $\phi(u),\phi(t)\in\mathfrak m_A$. If $\mathfrak p=(0)$, the discrete valuation $v_A$ has $v_A(\phi(u)),v_A(\phi(t))\ge1$. For every $n\ge1$, $u/t^n\in R$ since its value is $(1,-n)> (0,0)$, whence $v_A(\phi(u))\ge n v_A(\phi(t))\ge n$, impossible for all $n$. If $\mathfrak p=P$, the induced map $R/P\cong W\to A$ is injective. For each $n\ge1$, the constant-series lifts of $b_n=t^{1/(2n)}$ and $t$ lie in $\mathfrak m_R$. Since $\mathfrak q=\mathfrak m$, their images are nonzero elements of $\mathfrak m_A$, so have positive integer $v_A$-values. The relation $t=b_n^n t^{1/2}$ gives $v_A(\phi(t))\ge n$ for every $n$, again impossible. Thus $\phi(t)$ is a unit. The whole map $\operatorname{Spec}A\to\operatorname{Spec}R$ then factors through $D(t)$, giving the required lift for every DVR diagram. [F17, step 2.3, step 3.2]

4.2 The morphism $X_T\to T$ is quasi-compact by [F10]. For every affine open $U\subseteq T$, its inverse image is quasi-compact. Its intersection with the closed subset $Z$ is closed in that quasi-compact space and therefore quasi-compact. This intersection is $g^{-1}(U)$, so [F9] shows $g$ is quasi-compact. Now [F11] and step 3.4 show that $g(Z)$ is closed. Since $T$ and $Z$ were arbitrary, every base change of $f$ is closed on every closed subset, which is universal closedness by [F2]. [F2, F9, F10, F11, step 1.2, step 3.4]

5.1 The universally closed-to-lift implication is completed in step 3.3, and the converse in step 4.2. AC is used in step 1.2 through [F25] to identify radical ideals from their vanishing sets, in step 2.2 through [F8] to dominate the local image, and in step 4.2 through [F11] to apply the quasi-compact image criterion; the forward implication and the DVR counterexample use no AC. If $X$ or $Z$ is empty, the relevant image is empty and the closedness assertions are vacuous. A valuation ring that is a field has $\operatorname{Spec}R=\operatorname{Spec}K$ and its generic map itself is the lift. A zero affine chart represents the empty scheme and contributes no points. There is no interval or endpoint parameter in the claim. [F1, F2, F8, F11, F25, step 1.2, step 2.2, step 3.3, step 4.2, step 4.1] ∎
