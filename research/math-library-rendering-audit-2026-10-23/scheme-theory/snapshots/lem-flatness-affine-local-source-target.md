---
id: lem-flatness-affine-local-source-target
kind: lemma
title: "Affine-local flatness"
status: published
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-affine-scheme-ring-anti-equivalence
  - thm-localisation-of-modules-is-exact
  - thm-stalk-structure-sheaf-prime-localization
  - thm-localisations-are-flat
  - def-axiom-of-choice
  - thm-proper-ideal-contained-in-maximal-ideal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.25"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "The Stacks Project, Commutative Algebra, Section 10.39 and Lemma 10.18.7"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
---

## Statement

Assume the Axiom of Choice for the converse direction of the second
assertion; the pointwise equivalence and the forward direction use no choice.

Let $f:X\to S$ be a morphism of schemes, let $U=\operatorname{Spec}B\subseteq X$
and $V=\operatorname{Spec}A\subseteq S$ be affine open subschemes with
$f(U)\subseteq V$, and let $x\in U$ correspond to $\mathfrak q\in\operatorname{Spec}B$
with $\mathfrak p=\mathfrak q\cap A$. Then $f$ is flat at $x$ if and only if
$B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$. Moreover $f$ is flat at every
point of $U$ if and only if $B$ is flat over $A$, and these tests agree when the
affine charts are refined to smaller affine charts.

## Facts & Assumptions

**Given:** A morphism $f:X\to S$, affine open subschemes $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$, and a point $x\in U$ with corresponding primes $\mathfrak q\subseteq B$, $\mathfrak p=\mathfrak q\cap A$; AC is assumed only for the converse of the on-$U$ assertion.

[F1] For $\mathfrak p\in\operatorname{Spec}A$ there is a canonical isomorphism
$\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$
([[thm-stalk-structure-sheaf-prime-localization]]).

[F2] A morphism $f:X\to S$ is flat at $x\in X$ when $\mathcal O_{X,x}$ is a
flat module over $\mathcal O_{S,f(x)}$ for the local ring map, and flat when
this holds at every point of $X$ ([[def-flat-morphism-schemes]]).

[F3] For an $R$-module $M$: $M$ is flat if and only if for every finitely
generated ideal $I\subseteq R$ the multiplication map $I\otimes_RM\to M$ is
injective ([[thm-flatness-criteria-by-injections-and-ideals]], criterion 4).

[F4] Let $S\subseteq R$ be a multiplicative set. The localisation $S^{-1}R$ is
a flat $R$-algebra, and if $N$ is a flat $R$-module then $S^{-1}N$ is flat over
$S^{-1}R$ ([[thm-localisations-are-flat]]).

[F5] Localisation is exact: a short exact sequence of $R$-modules remains
short exact after applying $S^{-1}$; consequently kernels and images localise
([[thm-localisation-of-modules-is-exact]]).

[F6] The spectrum construction is a contravariant equivalence between rings
and affine schemes, so an open immersion of affine schemes $\operatorname{Spec}B\to\operatorname{Spec}A$
is induced by a ring map $A\to B$, and affine charts of a morphism compose to
ring maps with compatible localisations
([[thm-affine-scheme-ring-anti-equivalence]]).

[F7] Assume the Axiom of Choice: every proper ideal of a nonzero commutative
ring is contained in a maximal ideal
([[thm-proper-ideal-contained-in-maximal-ideal]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix affine opens $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$; by [F6] the restriction corresponds to a ring map $\varphi:A\to B$. Let $x\in U$ correspond to $\mathfrak q\in\operatorname{Spec}B$ and put $\mathfrak p=\mathfrak q\cap A$, so $s=f(x)$ corresponds to $\mathfrak p$. By [F1], $\mathcal O_{X,x}=\mathcal O_{U,x}\cong B_{\mathfrak q}$ and $\mathcal O_{S,s}=\mathcal O_{V,s}\cong A_{\mathfrak p}$, and the local ring map is the localisation of $\varphi$ at $\mathfrak q$. Hence by [F2], $f$ is flat at $x$ if and only if $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$. [F1, F2, F6]

1.2 If $B$ is flat over $A$, then $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$ for every $\mathfrak q\in\operatorname{Spec}B$: localising $B$ at the multiplicative set $A\setminus\mathfrak p$ gives the flat $A_{\mathfrak p}$-module $B\otimes_AA_{\mathfrak p}$, and localising that further at the image of $B\setminus\mathfrak q$ gives $B_{\mathfrak q}$, flat over $A_{\mathfrak p}$ by [F4] applied twice. Thus $B$ flat over $A$ implies $f$ is flat at every point of $U$. [F1, F4]

2.1 Conversely assume $B_{\mathfrak q}$ flat over $A_{\mathfrak p}$ for every $\mathfrak q\in\operatorname{Spec}B$. To prove $B$ flat over $A$ it suffices by [F3] to show that for every finitely generated ideal $I\subseteq A$ the kernel $K$ of $I\otimes_AB\to B$ is zero. By exactness of localisation [F5], for $\mathfrak q\in\operatorname{Spec}B$ we have $K\otimes_BB_{\mathfrak q}=\ker(I\otimes_AB_{\mathfrak q}\to B_{\mathfrak q})$, and this vanishes: $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$, so the multiplication map $I_{\mathfrak p}\otimes_{A_{\mathfrak p}}B_{\mathfrak q}\to B_{\mathfrak q}$ is injective by [F3], and $I\otimes_AB_{\mathfrak q}=I_{\mathfrak p}\otimes_{A_{\mathfrak p}}B_{\mathfrak q}$. If $K\ne0$, then choosing a maximal ideal of $B$ containing the annihilator of a nonzero element of $K$ — here the Axiom of Choice is used, [F7] — produces $\mathfrak q\in\operatorname{Spec}B$ with $K_{\mathfrak q}\ne0$. Hence $K=0$ for every finitely generated ideal $I$, and $B$ is flat over $A$ by [F3]. [F3, F5, F7, step 1.1]

3.1 The last sentence of the statement: if $U'=\operatorname{Spec}B'\subseteq U$, $V'=\operatorname{Spec}A'\subseteq V$ is a refinement of affine charts with $f(U')\subseteq V'$, then for $x\in U'$ the local rings computed in the small and large charts are canonically the same local rings by [F1] applied to the two affine descriptions of the same open neighbourhoods, so the test of step 1.1 gives the same answer for the two charts. Hence flatness of $f$ at $x$ is independent of the chosen affine charts, flatness on $U$ is exactly flatness of $B$ over $A$ by steps 1.2 and 2.1, and the affine tests are compatible on refinements. [F1, step 1.1, step 1.2, step 2.1] $\square$
