---
id: lem-fpqc-cover-submersive
kind: lemma
title: "Fpqc covers are universally submersive"
status: draft
origin: pipeline
deps:
  - def-fpqc-morphism-schemes
  - def-axiom-of-choice
  - def-localisation-at-a-prime-ideal
  - def-morphism-of-schemes
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - def-scheme
  - def-affine-scheme-spectrum
  - def-prime-spectrum-and-vanishing-sets
  - cor-affine-scheme-quasi-compact
  - cor-change-of-rings-for-extension-of-scalars
  - lem-base-change-quasi-compact-morphisms
  - lem-base-change-surjective-morphisms
  - lem-quasi-compact-scheme-image-specialization-closed
  - lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - lem-zero-in-a-localised-module
  - lem-zariski-closed-set-axioms
  - prop-extension-of-scalars-preserves-flat-modules
  - prop-transitivity-of-flatness-under-change-of-rings
  - thm-affine-fibre-product-tensor-ring
  - thm-affine-scheme-ring-anti-equivalence
  - thm-direct-sums-and-direct-summands-preserve-flatness
  - thm-flat-going-down
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-localisation-of-modules-is-exact
  - thm-localisation-of-modules-is-tensor-product
  - thm-localisations-are-flat
  - thm-prime-spectrum-of-a-quotient-bijection
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-stalk-structure-sheaf-prime-localization
  - thm-symmetry-and-associativity-over-a-commutative-ring
  - def-morphism-affine-schemes-from-ring-map
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
    - title: "Stacks Project, Morphisms of Schemes, §29.26, Lemmas 29.26.2, 29.26.3, 29.26.8, and 29.26.12"
      url: https://stacks.math.columbia.edu/tag/01U2
    - title: "Stacks Project, Commutative Algebra, Lemma 10.41.5"
      url: https://stacks.math.columbia.edu/tag/00HY
---

## Statement

Assume the Axiom of Choice (AC). For any scheme morphism $f:X\to S$, the
morphism $f$ is flat if and only if every affine chart map
$\mathcal O_S(V)\to\mathcal O_X(U)$ is flat, where $U\subseteq X$ and
$V\subseteq S$ are affine opens with $f(U)\subseteq V$.

If $p:S'\to S$ is a page-local fpqc covering morphism, then for every base
change $T\to S$ the morphism
$p_T:T\times_S S'\to T$ is flat, surjective, and quasi-compact. Moreover,
for every subset $Z\subseteq T$, $Z$ is closed if and only if
$p_T^{-1}(Z)$ is closed.

## Facts & Assumptions

**Given:** AC; a scheme morphism $f:X\to S$; and, for the second assertion, a
page-local fpqc covering morphism $p:S'\to S$ and an arbitrary morphism
$T\to S$.

[F1] A morphism is flat when its local-ring maps
$\mathcal O_{S,f(x)}\to\mathcal O_{X,x}$ are flat; on this page an fpqc
covering morphism is flat, surjective, and quasi-compact
([[def-fpqc-morphism-schemes]]).

[A1] AC says every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

[F2] For affine schemes
$\operatorname{Spec}B\to\operatorname{Spec}A$ induced by $A\to B$, points are
prime ideals and the point map is contraction of primes; the stalks at
$\mathfrak p\subset A$ and $\mathfrak q\subset B$ are $A_{\mathfrak p}$ and
$B_{\mathfrak q}$ ([[def-affine-scheme-spectrum]],
[[thm-affine-scheme-ring-anti-equivalence]],
[[def-morphism-affine-schemes-from-ring-map]],
[[thm-stalk-structure-sheaf-prime-localization]]).

[F3] A module $M$ over a commutative ring $R$ is flat if and only if
$I\otimes_R M\to M$ is injective for every finitely generated ideal
$I\subseteq R$ ([[thm-flatness-criteria-by-injections-and-ideals]]).

[F4] Localization is exact; localizing a module is tensoring with the
localized ring; commutativity gives the tensor symmetry; and change of rings
identifies $N\otimes_R M$ with $N\otimes_S(S\otimes_R M)$ for $R\to S$ and a
right $S$-module $N$. At primes $\mathfrak p$ and $\mathfrak q$, the
corresponding multiplicative sets are $A\setminus\mathfrak p$ and
$B\setminus\mathfrak q$ ([[def-localisation-at-a-prime-ideal]],
[[thm-localisation-of-modules-is-exact]],
[[thm-localisation-of-modules-is-tensor-product]],
[[thm-symmetry-and-associativity-over-a-commutative-ring]],
[[cor-change-of-rings-for-extension-of-scalars]]).

[F5] A fraction $m/s$ in a localized module is zero exactly when some
denominator annihilates $m$
([[lem-zero-in-a-localised-module]]).

[F6] Under AC, every proper ideal of a nonzero commutative ring lies in a
maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[F7] Extension of scalars preserves flatness; every localization is flat; and
composites of flat ring maps are flat
([[prop-extension-of-scalars-preserves-flat-modules]],
[[thm-localisations-are-flat]],
[[prop-transitivity-of-flatness-under-change-of-rings]]).

[F8] An affine fibre product is the spectrum of a tensor product
([[thm-affine-fibre-product-tensor-ring]]).

[F9] A morphism remains quasi-compact and a surjective morphism remains
surjective after arbitrary base change, with AC for the latter
([[lem-base-change-quasi-compact-morphisms]],
[[lem-base-change-surjective-morphisms]]).

[F10] Every point of a scheme has affine open neighborhoods, and every
quasi-compact scheme has a finite subcover from any open cover
([[def-scheme]], [[def-quasi-compact-and-quasi-separated-scheme]]).

[F16] Every affine scheme is quasi-compact
([[cor-affine-scheme-quasi-compact]]).

[F11] The spectrum of a finite product of rings is the disjoint union of the
factor spectra, and finite direct sums of flat modules are flat
([[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]],
[[thm-direct-sums-and-direct-summands-preserve-flatness]]).

[F12] Closed subsets of $\operatorname{Spec}B$ are the sets $V(J)$; primes of
$B/J$ correspond to primes of $B$ containing $J$
([[def-prime-spectrum-and-vanishing-sets]],
[[lem-zariski-closed-set-axioms]],
[[thm-prime-spectrum-of-a-quotient-bijection]]).

[F13] Flat ring maps satisfy going down under AC
([[thm-flat-going-down]]).

[F14] For a quasi-compact morphism, its image is closed if and only if it is
stable under specialization, under AC
([[lem-quasi-compact-scheme-image-specialization-closed]]).

[F15] A morphism is quasi-compact if the inverse image of every affine open
is quasi-compact, and a scheme morphism is continuous
([[lem-base-change-quasi-compact-morphisms]],
[[def-quasi-compact-and-quasi-separated-morphism]],
[[def-morphism-of-schemes]]).

## Proof

**Proof technique:** direct.

1.1 Suppose every affine chart map $A\to B$ is flat and fix $x\in X$ with image $s\in S$. Choose an affine neighborhood $V=\operatorname{Spec}A$ of $s$ and an affine neighborhood $U=\operatorname{Spec}B$ of $x$ contained in $f^{-1}(V)$. For the corresponding primes $\mathfrak p\subset A$ and $\mathfrak q\subset B$, the map $A_{\mathfrak p}\to A_{\mathfrak p}\otimes_A B$ is flat by [F7], and $A_{\mathfrak p}\otimes_A B\to B_{\mathfrak q}$ is a localization, hence flat by [F7]. Their composite is the local-ring map at $x$ by [F2], so $f$ is flat by [F1]. Conversely, if $f$ is flat, fix any affine chart $U=\operatorname{Spec}B\to V=\operatorname{Spec}A$ and let $\mathfrak q\in\operatorname{Spec}B$ contract to $\mathfrak p\subseteq A$. [F1] and [F2] make $A_{\mathfrak p}\to B_{\mathfrak q}$ flat. For a finitely generated ideal $I\subseteq A$, let $K=\ker(I\otimes_A B\to B)$. Exact localization and the tensor-localization isomorphisms of [F4] identify $K_{\mathfrak q}$ with the kernel of $I_{\mathfrak p}\otimes_{A_{\mathfrak p}}B_{\mathfrak q}\to B_{\mathfrak q}$, which is zero by flatness. This holds for every $\mathfrak q$. If $B=0$, $K=0$; otherwise, if $K\ne0$, take $0\ne k\in K$. Its annihilator in $B$ is proper, so under AC [A1] and [F6] give a maximal ideal $\mathfrak q$ containing it. Then $k/1\ne0$ in $K_{\mathfrak q}$ by [F5], a contradiction. Thus $I\otimes_A B\to B$ is injective for every finitely generated $I$, and [F3] makes $B$ flat. This proves both directions of the affine-chart criterion. [A1, F1, F2, F3, F4, F5, F6, F7]

1.2 Since $p$ is quasi-compact and surjective, [F9] says every base change $p_T$ is quasi-compact and surjective. [F1, F9]

1.3 If $Z\subseteq T$ is closed, then $p_T^{-1}(Z)$ is closed because a scheme morphism is continuous. [F15]

2.1 Let $p:S'\to S$ be page-local fpqc and $T\to S$ arbitrary. Choose affine opens $W=\operatorname{Spec}C\subseteq T$ and $V=\operatorname{Spec}A\subseteq S$ with $W$ mapping into $V$, and cover $p^{-1}(V)$ by affine opens $U_i=\operatorname{Spec}B_i$. Since $p$ is flat, step 1.1 shows every $A\to B_i$ is flat. By [F8], the affine schemes $W\times_V U_i=\operatorname{Spec}(B_i\otimes_A C)$ cover $p_T^{-1}(W)$, and each chart map $C\to B_i\otimes_A C$ is flat by [F7]. Step 1.1 then proves that $p_T$ is flat. [F1, F7, F8, step 1.1]

3.1 Assume $p_T^{-1}(Z)$ is closed. For each affine open $U=\operatorname{Spec}A\subseteq T$, the inverse image $Y=p_T^{-1}(U)$ is quasi-compact by steps 1.2, [F15], and [F16], since affine schemes are quasi-compact. Choose a finite affine open cover $Y=\bigcup_{i=1}^n U_i$, where $U_i=\operatorname{Spec}B_i$, omitting empty members; [F10] supplies affine neighborhoods and finite subcover extraction. The finite disjoint union of these charts is $\operatorname{Spec}B$ for $B=\prod_i B_i$ by [F11]. Its map to $U$ is surjective by step 1.2, and $A\to B$ is flat: step 1.1 applies to each chart map $A\to B_i$, while [F11] says the finite direct sum of these flat $A$-modules is flat. The inverse image of $Z\cap U$ in $\operatorname{Spec}B$ is closed, hence equals $V(J)$ for an ideal $J\subseteq B$ by [F12]. If $\mathfrak p\in Z\cap U$, surjectivity gives a prime $\mathfrak q\subseteq B$ above it; since $\mathfrak q$ lies in the inverse image $V(J)$, the quotient-prime correspondence gives a point of $\operatorname{Spec}(B/J)$ above $\mathfrak p$. Conversely every point of $\operatorname{Spec}(B/J)$ corresponds to a prime in $V(J)$ and therefore maps into $Z\cap U$. Hence $Z\cap U=\operatorname{image}(\operatorname{Spec}(B/J)\to\operatorname{Spec}A)$. If $\mathfrak p\subseteq\mathfrak p'$ in $\operatorname{Spec}A$ and $\mathfrak p\in Z\cap U$, surjectivity gives $\mathfrak q'\subseteq B$ over $\mathfrak p'$. Flat going-down [F13] gives $\mathfrak q\subseteq\mathfrak q'$ over $\mathfrak p$. Since the full inverse image of $Z\cap U$ is $V(J)$, $J\subseteq\mathfrak q\subseteq\mathfrak q'$, so $\mathfrak p'$ belongs to the image. Thus this image is stable under specialization. [F2, F10, F11, F12, F13, F15, F16, step 1.1, step 1.2, step 2.1]

4.1 The morphism $\operatorname{Spec}(B/J)\to\operatorname{Spec}A$ is quasi-compact: the inverse image of every affine open is affine by [F8], hence quasi-compact by [F16] and [F15]. Its image is $Z\cap U$ and is stable under specialization by step 3.1, so [F14] makes $Z\cap U$ closed. Since affine opens cover $T$, $Z$ is closed. [F8, F14, F15, F16, step 3.1]

5.1 Step 1.1 proves both directions of the affine-chart flatness criterion; steps 1.2 and 2.1 prove universal quasi-compactness, surjectivity, and flatness; and steps 1.3, 3.1, and 4.1 prove both directions of the closed-subset criterion. The zero-ring chart in step 1.1 has zero kernel; the zero ideal in its flatness test gives the zero map with zero kernel, while the unit ideal gives $A\otimes_A B\cong B$. An empty target chart has empty source, and the empty source is flat vacuously. A nonempty affine target in step 3.1 has nonempty inverse image by surjectivity. AC is used in step 1.1 to find a maximal ideal containing the annihilator; it is also required by the base-change-surjectivity, going-down, and specialization-image suppliers [F9, F13, F14]. Finite affine covers use only finite subcover extraction. [A1, F3, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1]
∎
