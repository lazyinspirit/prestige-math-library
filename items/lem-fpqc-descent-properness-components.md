---
id: lem-fpqc-descent-properness-components
kind: lemma
title: Fpqc descent of properness components
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-affine-open-subscheme
  - def-affine-scheme-spectrum
  - def-base-change-morphism-schemes
  - def-closed-immersion-schemes
  - def-diagonal-morphism-scheme
  - def-finite-type-and-module-finite-algebras
  - def-fpqc-morphism-schemes
  - def-locally-closed-immersion
  - def-locally-finite-type-and-finite-type-morphism
  - def-morphism-of-schemes
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - def-scheme
  - def-separated-morphism-schemes
  - def-universally-closed-morphism
  - cor-base-change-finite-type-and-products
  - cor-affine-scheme-quasi-compact
  - lem-base-change-composition
  - lem-base-change-quasi-compact-morphisms
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-local-on-target
  - lem-diagonal-base-change-identification
  - lem-fibre-product-open-restriction
  - lem-finite-type-local-on-source-and-target
  - lem-fpqc-cover-submersive
  - lem-immersion-with-closed-image
  - lem-points-of-scheme-fibre-product-residue-tensors
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-direct-sums-and-direct-summands-preserve-flatness
  - thm-faithful-flatness-detected-by-nonzero-modules-and-fibres
  - thm-faithfully-flat-ring-map-characterisations
  - thm-fibre-products-of-schemes-exist
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-right-exactness-of-tensor-products
  - lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - thm-tensor-products-commute-with-arbitrary-direct-sums
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
    - title: \"Stacks Project, Descent, §35.23, Lemmas 35.23.1, 35.23.3, 35.23.6, 35.23.12, 35.23.14, and 35.23.16\"
      url: https://stacks.math.columbia.edu/tag/02YJ
    - title: \"Stacks Project, Commutative Algebra, Lemma 10.126.1\"
      url: https://stacks.math.columbia.edu/tag/00QP
    - title: \"Stacks Project, Morphisms of Schemes, Lemma 29.26.12\"
      url: https://stacks.math.columbia.edu/tag/02JY
---

## Statement

Assume the Axiom of Choice (AC). Let $p:S'\to S$ be an fpqc covering
morphism in the page-local convention, let $f:X\to S$ be a morphism, and put
$f':X\times_S S'\to S'$. Then each of the following properties holds for $f$
if and only if it holds for $f'$: quasi-compactness, finite type,
separatedness, and universal closedness.

## Facts & Assumptions

**Given:** AC, an fpqc covering morphism $p:S'\to S$, and a morphism
$f:X\to S$; write $f':X\times_S S'\to S'$ for its base change.

[A1] AC means every family of nonempty sets has a choice function. In this
proof it is used through the flat-chart and submersiveness conclusions of
[[lem-fpqc-cover-submersive]], the faithfully-flat ring-map criterion
[[thm-faithfully-flat-ring-map-characterisations]],
the prime-existence step in [[thm-proper-ideal-contained-in-maximal-ideal]],
  and the stated closed-immersion quotient/base-change supplier
[[lem-closed-immersion-affine-quotient-and-base-change]].
([[def-axiom-of-choice]])

[F1] In this page's convention, fpqc means flat, surjective, and
quasi-compact. ([[def-fpqc-morphism-schemes]])

[F2] Every base change $p_T:T\times_S S'\to T$ of $p$ is flat, surjective,
and quasi-compact; moreover a subset $Z\subseteq T$ is closed exactly when
$p_T^{-1}(Z)$ is closed. Its flat-morphism clause also gives the affine-chart
criterion for flatness under AC. ([[lem-fpqc-cover-submersive]])

[F3] A morphism is quasi-compact when inverse images of quasi-compact opens
are quasi-compact; equivalently it suffices to test affine opens of the base.
([[def-quasi-compact-and-quasi-separated-morphism]],
[[lem-base-change-quasi-compact-morphisms]])

[F4] Every affine scheme is quasi-compact; every scheme and its open
subschemes have affine-open covers; and a quasi-compact scheme has a finite
subcover from each open cover. ([[cor-affine-scheme-quasi-compact]],
[[def-scheme]], [[def-affine-open-subscheme]], [[def-affine-scheme-spectrum]],
[[def-quasi-compact-and-quasi-separated-scheme]])

[F5] A morphism is locally of finite type when every source point has an
affine neighbourhood over an affine base with a finite-type algebra map, and
it is of finite type when it is locally of finite type and quasi-compact.
([[def-locally-finite-type-and-finite-type-morphism]])

[F6] Finite type is affine-local on source and target; over an affine target
it can be tested on a finite affine source cover.
([[lem-finite-type-local-on-source-and-target]])

[F7] An algebra is of finite type over a ring when it is generated as an
algebra by a finite list of elements. ([[def-finite-type-and-module-finite-algebras]])

[F8] For affine schemes the fibre product is the spectrum of the tensor
product of coordinate rings. ([[thm-affine-fibre-product-tensor-ring]])

[F9] Restricting fibre products to open subschemes gives the corresponding
open fibre product. ([[lem-fibre-product-open-restriction]])

[F10] Under AC, a flat ring map is faithfully flat if and only if its map on
prime spectra is surjective. ([[thm-faithfully-flat-ring-map-characterisations]])

[F11] A faithfully flat module detects nonzero modules: if $M$ is faithfully
flat and $N\ne0$, then $N\otimes_R M\ne0$.
([[thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]])

[F12] The spectrum of a finite product of rings is the disjoint union of
their spectra. ([[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]])

[F13] Finite direct sums of flat modules are flat, and tensor product
commutes with direct sums. ([[thm-direct-sums-and-direct-summands-preserve-flatness]],
[[thm-tensor-products-commute-with-arbitrary-direct-sums]])

[F14] Tensoring a right-exact sequence with a module preserves its
right-exactness. ([[thm-right-exactness-of-tensor-products]])

[F15] Scheme morphisms are continuous maps of the underlying spaces.
([[def-morphism-of-schemes]])

[F16] A morphism is universally closed when every base change sends every
closed subset to a closed subset. ([[def-universally-closed-morphism]])

[F17] A closed immersion is a homeomorphism onto a closed subset, and every
base change of a closed immersion is a closed immersion.
([[def-closed-immersion-schemes]],
[[lem-closed-immersion-affine-quotient-and-base-change]])

[F18] A morphism is separated exactly when its diagonal is a closed
immersion. ([[def-separated-morphism-schemes]])

[F19] The diagonal of a base-changed morphism is the base change of the
original diagonal. ([[lem-diagonal-base-change-identification]])

[F20] Every point of a scheme fibre product over $T$ is represented by points of
the factors over a common point of $T$ and a prime of the tensor product of
their residue fields. ([[lem-points-of-scheme-fibre-product-residue-tensors]])

[F21] An immersion of schemes is a morphism that factors as a closed
immersion into an open subscheme of its target.
([[def-locally-closed-immersion]])

[F22] An AC-dependent maximal-ideal existence theorem supplies a prime in every
nonzero commutative ring. ([[thm-proper-ideal-contained-in-maximal-ideal]])

[F23] An immersion whose image is closed is a closed immersion.
([[lem-immersion-with-closed-image]])

[F24] Quasi-compact and finite-type morphisms remain so after arbitrary base
change. ([[lem-base-change-quasi-compact-morphisms]],
[[cor-base-change-finite-type-and-products]])

[F25] Iterated base change is canonically the base change along the composite
map, compatibly with the induced morphisms. ([[lem-base-change-composition]],
[[def-base-change-morphism-schemes]],
[[thm-fibre-products-of-schemes-exist]])

[F26] The diagonal $\Delta_{X/S}$ is the unique morphism whose composites
with both projections to $X$ are the identity. ([[def-diagonal-morphism-scheme]])

[F27] Ring isomorphisms induce isomorphisms of affine schemes under the
contravariant ring/scheme correspondence.
([[thm-affine-scheme-ring-anti-equivalence]])

[F28] Closed immersions are local on the target: a morphism is a closed
immersion if and only if its restrictions over an open cover are closed
immersions. ([[lem-closed-immersion-local-on-target]])

## Proof

**Proof technique:** direct.

1.1 Assume $f'$ is quasi-compact, and fix an affine open $U=\operatorname{Spec}A\subseteq S$. By [F4], $U$ is quasi-compact, so $p^{-1}(U)$ is a quasi-compact open of $S'$. Its inverse image under $f'$ is quasi-compact, and its projection onto $f^{-1}(U)$ is surjective because it is the base change of $p_U:p^{-1}(U)\to U$ along $f^{-1}(U)\to U$. [F1, F2, F3, F4, F9, F25]

1.2 Suppose $f'$ is universally closed. For any $T\to S$, put $T'=T\times_S S'$ and let $q:T'\to T$ be the projection. The base change $X_{T'}\to X_T$ of $q$ is surjective by [F2]. For a closed subset $Z\subseteq X_T$, its inverse image $Z'\subseteq X_{T'}$ is closed by continuity [F15]. By [F25], $X_{T'}\to T'$ is a base change of $f'$, so [F16] makes the image of $Z'$ closed. The Cartesian square gives $f_{T'}(Z')\subseteq q^{-1}(f_T(Z))$. Conversely, if $t'\in q^{-1}(f_T(Z))$, choose $x\in Z$ above $q(t')$ and write $k=\kappa(q(t'))$. By AC extend $\{1\}\subset\kappa(x)$ to a $k$-basis and take the coordinate functional $\lambda:\kappa(x)\to k$ with $\lambda(1)=1$. Then $\lambda\otimes 1$ sends $1\otimes1$ to $1$, so $\kappa(x)\otimes_k\kappa(t')$ is nonzero. By [F22] it has a prime; [F20] gives a point of $X_{T'}$ over $(x,t')$. Thus $t'\in f_{T'}(Z')$, proving equality. [A1, F2, F15, F16, F20, F22, F25]

1.3 Assume $f'$ is of finite type. To descend this property, take a nonempty affine open $U=\operatorname{Spec}A\subseteq S$ and an affine open $V=\operatorname{Spec}C\subseteq f^{-1}(U)$. Since $p$ is quasi-compact, [F1, F3, F4] show $p^{-1}(U)$ is quasi-compact; choose a finite affine-open cover $U_i=\operatorname{Spec}B_i$. Since $p$ is surjective and $U$ is nonempty, discard empty members and the cover remains nonempty. For each $i$, $V_i=V\times_U U_i$ is affine with coordinate algebra $C\otimes_A B_i$, and its map to $U_i$ is finite type by [F6], because it is an affine-open restriction of the finite-type morphism $f'$. [F1, F3, F4, F6, F8, F9]

1.4 Put $Y=X\times_S X$. Take the family of all pairs of affine opens $U_i=\operatorname{Spec}B_i\subseteq X$ and $V_i=\operatorname{Spec}A_i\subseteq S$ with $f(U_i)\subseteq V_i$; its source opens cover $X$ by [F4]. Let $Q_i=\operatorname{pr}_1^{-1}(U_i)\cap\operatorname{pr}_2^{-1}(U_i)$. By [F9], $Q_i$ is open in $Y$ and represents $U_i\times_{V_i}U_i$, which [F8] identifies with $\operatorname{Spec}(B_i\otimes_{A_i}B_i)$. Set $Q=\bigcup_i Q_i$. By [F26], $\Delta_{X/S}(X)\subseteq Q$ and $\Delta_{X/S}^{-1}(Q_i)=U_i$. On these affine charts the restricted diagonal corresponds to multiplication $\mu_i:B_i\otimes_{A_i}B_i\to B_i$, which is surjective because $b=\mu_i(b\otimes1)$. If $I_i=\ker\mu_i$, the explicit isomorphism $(B_i\otimes_{A_i}B_i)/I_i\to B_i$, $r+I_i\mapsto\mu_i(r)$, identifies this chart map with a quotient map; [F17] and [F27] make each restriction a closed immersion. Since the $Q_i$ cover $Q$, [F28] makes $\Delta_{X/S}:X\to Q$ a closed immersion. The inclusion $Q\hookrightarrow Y$ is open, so [F21] now gives that $\Delta_{X/S}:X\to Y$ is an immersion. [F4, F8, F9, F17, F21, F26, F27, F28]

2.1 A continuous image of a quasi-compact space is quasi-compact, so step 1.1 shows that $f^{-1}(U)$ is quasi-compact for every affine $U$. The affine-open criterion in [F3] proves that $f$ is quasi-compact. Conversely, if $f$ is quasi-compact, [F24] gives that $f'$ is quasi-compact. [F3, F15, F24, step 1.1]

2.2 By [F2], closedness of $q^{-1}(f_T(Z))$ implies that $f_T(Z)$ is closed. Since this holds for every $T\to S$ and every closed $Z\subseteq X_T$, [F16] proves that $f$ is universally closed. Conversely, universal closedness of $f$ implies that of $f'$ directly from [F16] and [F25]. [F2, F16, F25, step 1.2]

2.3 Each $A\to B_i$ is flat by [F2]. Put $B=\prod_i B_i$. The product-spectrum description [F12] and the cover of $p^{-1}(U)$ show that $\operatorname{Spec}B\to\operatorname{Spec}A$ is surjective; [F13] shows that $B$ is flat over $A$. Thus [F10] makes $A\to B$ faithfully flat. [A1, F2, F10, F12, F13, step 1.3]

3.1 Suppose $f'$ is separated, and write $Y=X\times_S X$. By [F19], its diagonal is the base change of $\Delta_{X/S}:X\to Y$ along the fpqc map $Y\times_S S'\to Y$, which is fpqc by [F1, F2]. The diagonal of $f'$ is a closed immersion by [F18], hence universally closed by [F16] and [F17]. The descent proved in steps 1.2 and 2.2, applied to $\Delta_{X/S}$ and this fpqc base change, shows that $\Delta_{X/S}$ is universally closed. [F1, F2, F16, F17, F18, F19, step 1.2, step 2.2]

3.2 Choose finite $B_i$-algebra generators for each $C\otimes_A B_i$, and express each as a finite sum of pure tensors. Let $c_1,\ldots,c_r\in C$ be the finite list of all coefficients from $C$ appearing in those sums, and put $C_0=A[c_1,\ldots,c_r]\subseteq C$. The maps $B_i\otimes_A C_0\to B_i\otimes_A C$ are surjective because their images contain the chosen algebra generators. Since $B=\prod_iB_i$ is a finite direct sum as an $A$-module, [F13] gives a surjection $B\otimes_A C_0\to B\otimes_A C$. By [F14], $B\otimes_A(C/C_0)=0$; [F11] and faithful flatness of $B$ then imply $C/C_0=0$. Hence $C$ is a finite-type $A$-algebra. [F7, F11, F13, F14, step 1.3, step 2.3]

4.1 By [F16] and step 3.1, the image of $\Delta_{X/S}$ is closed: apply universal closedness to the closed whole source. Step 1.4 shows that this diagonal is an immersion. Therefore [F23] makes it a closed immersion, and [F18] gives that $f$ is separated. Conversely, if $f$ is separated, [F18] makes its diagonal a closed immersion; [F19] identifies the diagonal of $f'$ as a base change of it, so [F17] makes that diagonal a closed immersion and [F18] gives that $f'$ is separated. [F16, F17, F18, F19, F23, step 1.4, step 3.1]

4.2 Since $U$ and $V$ were arbitrary nonempty affine opens, [F5] gives that $f$ is locally of finite type. Step 2.1 gives quasi-compactness, hence $f$ is of finite type. Conversely, if $f$ is of finite type, [F24] gives that $f'$ is of finite type. [F5, F24, step 1.3, step 2.1, step 3.2]

5.1 If $S$ or $X$ is empty, the assertions reduce to empty maps and hold directly; empty affine charts are omitted in the finite cover, and the zero algebra is generated by the empty list. If $p$ is the identity, each assertion is tautological. The finite generator lists in step 3.2 require only finite choice. AC is used exactly through [F2] for flat-chart testing, surjectivity and submersiveness, [F10] for the faithfully-flat criterion, [A1] for the linear functional, [F22] for prime existence in the residue-field tensor step, and [F17] for closed-immersion quotient and base change. The module-detection implication [F11] is used only after faithful flatness and requires no additional choice. The family of affine pairs in step 1.4 is the full family and uses no simultaneous pointwise choice. There are no endpoint parameters. The descent directions are proved for quasi-compactness in steps 1.1 and 2.1, finite type in steps 1.3, 2.3, 3.2 and 4.2, universal closedness in steps 1.2 and 2.2, and separatedness in steps 3.1, 1.4, and 4.1. The corresponding ascent directions are proved in steps 2.1, 4.2, 2.2 and 4.1. [A1, F2, F10, F11, F16, F17, F20, F22, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, step 2.3, step 3.1, step 3.2, step 4.1, step 4.2] $\\square$
