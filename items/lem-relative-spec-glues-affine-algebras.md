---
id: lem-relative-spec-glues-affine-algebras
kind: lemma
title: Glue relative spectra of affine-local algebras
status: draft
origin: pipeline
deps:
  - def-affine-local-quasi-coherent-algebra
  - thm-affine-scheme-ring-anti-equivalence
  - thm-gluing-affine-schemes
  - thm-gluing-ringed-and-locally-ringed-spaces
  - lem-spectrum-localization-open-immersion
  - lem-fibre-product-open-restriction
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
    - title: Stacks Project, Constructions of Schemes, §27.2 Lemma 27.2.1
      url: https://stacks.math.columbia.edu/tag/01LH
    - title: Stacks Project, Constructions of Schemes, §27.3 Relative spectrum via glueing
      url: https://stacks.math.columbia.edu/tag/01LL
    - title: Stacks Project, Schemes, §26.5 Definition 26.5.3 and Lemma 26.5.4
      url: https://stacks.math.columbia.edu/tag/01HR
---

## Statement

Let $S$ be a scheme and let $\mathcal A$ be an affine-locally
module-associated sheaf of commutative unital $\mathcal O_S$-algebras, as in
[[def-affine-local-quasi-coherent-algebra]]. Put
$B_U=\Gamma(U,\mathcal A)$ for each affine open $U\subseteq S$. The affine
schemes $\operatorname{Spec}B_U$, with their structure morphisms to $U$, glue
canonically to an $S$-scheme $\pi:\operatorname{Spec}_S\mathcal A\to S$.
For every affine open $U$, the inverse image $\pi^{-1}(U)$ is canonically
isomorphic over $U$ to $\operatorname{Spec}\Gamma(U,\mathcal A)$. For every
principal open $D(r)\subseteq U$, its inverse image is the distinguished open
defined by the image of $r$ in $B_U$, equivalently
$$
\pi^{-1}(D(r))\cong\operatorname{Spec}\Gamma(D(r),\mathcal A)\cong\operatorname{Spec}\bigl(B_U[\varphi_U(r)^{-1}]\bigr).
$$
For every open subscheme $T\subseteq S$, the construction for
$\mathcal A|_T$ is canonically isomorphic over $T$ to
$\operatorname{Spec}_S\mathcal A\times_S T$.

## Facts & Assumptions

**Given:** A scheme $S$ and an affine-locally module-associated sheaf of
commutative unital $\mathcal O_S$-algebras $\mathcal A$.

[F1] On each affine $U=\operatorname{Spec}R$, the algebra sheaf is associated
to an $R$-algebra $B_U$, and its sections on a principal open $D(r)$ are
$B_U[\varphi_U(r)^{-1}]$, with the canonical localization restrictions.
([[def-affine-local-quasi-coherent-algebra]])

[F2] A ring homomorphism $C\to D$ induces the corresponding morphism
$\operatorname{Spec}D\to\operatorname{Spec}C$, and this correspondence is
contravariantly functorial. ([[thm-affine-scheme-ring-anti-equivalence]])

[F3] The spectrum of a principal localization is the distinguished open:
$\operatorname{Spec}(C_f)\cong D(f)\subseteq\operatorname{Spec}C$ as a
locally ringed space. ([[lem-spectrum-localization-open-immersion]])

[F4] Affine schemes with open overlap subschemes and isomorphisms satisfying
the identity and cocycle conditions glue to a scheme, uniquely up to unique
chart-compatible isomorphism. ([[thm-gluing-affine-schemes]])

[F5] Compatible open pieces of locally ringed spaces glue to a locally ringed
space with the given pieces as an open cover. ([[thm-gluing-ringed-and-locally-ringed-spaces]])

[F6] For a morphism $f:X\to S$ and an open subscheme $T\subseteq S$, the open
subscheme $f^{-1}(T)$ represents the fibre product $X\times_S T$.
([[lem-fibre-product-open-restriction]])

## Proof
**Proof technique:** direct affine-chart gluing.

1.1 For every affine open $U\subseteq S$, let $R_U=\Gamma(U,\mathcal O_S)$, $B_U=\Gamma(U,\mathcal A)$, and let $\varphi_U:R_U\to B_U$ be the algebra structure map. The affine-local presentation in [F1] identifies these global sections with its chart algebra. Thus [F2] gives a morphism $p_U:Y_U=\operatorname{Spec}B_U\to U=\operatorname{Spec}R_U$. For an inclusion of affine opens $U\subseteq V$, restriction of sections gives $B_V\to B_U$ and hence a morphism $\rho^V_U:Y_U\to Y_V$ over $U\to V$. Identity and composition of these chart maps follow from identity and composition of sheaf restrictions. [given, F1, F2]

2.1 Fix affine opens $U\subseteq V$. The distinguished opens $D_V(f)\subseteq U$, for $f\in R_V$, cover $U$ because distinguished opens form a basis in the affine scheme $V$. Write $\bar f$ for the restriction of $f$ to $U$; the same open is $D_U(\bar f)$. By [F1], the restriction map identifies $B_V[\varphi_V(f)^{-1}]$ and $B_U[\varphi_U(\bar f)^{-1}]$ with the same ring $\Gamma(D_V(f),\mathcal A)$. Therefore [F2] and [F3] identify the restriction of $\rho^V_U$ on the corresponding distinguished spectrum opens with an isomorphism. These opens cover both $Y_U$ and $p_V^{-1}(U)$, so $\rho^V_U$ identifies $Y_U$ with the full open subscheme $p_V^{-1}(U)$. If $U=\varnothing$, both sides are empty; localization at $0$ gives the empty distinguished open and localization at $1$ is the identity. [F1, F2, F3, step 1.1]

3.1 For affine opens $U,V\subseteq S$, the affine opens $W\subseteq U\cap V$ cover their intersection. By step 2.1, each $Y_W$ is identified with $p_U^{-1}(W)$ and with $p_V^{-1}(W)$. These identifications define isomorphisms between the two inverse-image opens over $U\cap V$. They agree on overlaps: cover any $W\cap W'$ by affine opens $T$ contained in it, and on each $Y_T$ both composites are induced by the same restriction maps of $\mathcal A$. The sheaf restriction maps compose, so the local isomorphisms glue uniquely. [F1, F5, step 2.1]

4.1 The overlap isomorphisms of step 3.1 are the identity when $U=V$ and inverse to one another when the indices are reversed. On a triple overlap, affine opens $T\subseteq U\cap V\cap W$ cover the base overlap; over each $T$, all three chart identifications are the maps from the same chart $Y_T$. The restriction-map composition from step 1.1 therefore gives the cocycle condition. Apply [F4] to glue the affine charts to a scheme $Y$. The maps $p_U:Y_U\to U\to S$ agree on overlaps. Their continuous maps glue; for each open $Q\subseteq S$, the local pullbacks of sections of $\mathcal O_S(Q)$ agree on chart overlaps and glue by the sheaf axiom to the structure-sheaf map. Stalk locality is checked on each chart. This defines $\pi:Y\to S$, and [F4] gives uniqueness up to unique isomorphism over $S$. [F4, F5, step 1.1, step 3.1]

5.1 The chart $Y_U$ maps into $\pi^{-1}(U)$. Conversely, a point of $\pi^{-1}(U)$ lies in some chart $Y_V$ and maps to a point of $V\cap U$; choose an affine open $W$ around that base point with $W\subseteq V\cap U$. The overlap identification from step 3.1 moves the point into $Y_U$, proving $\pi^{-1}(U)=Y_U$. Taking $D(r)\subseteq U$ in step 2.1 and using [F1] and [F3] gives the asserted principal-open localization formula. [F1, F3, step 2.1, step 3.1, step 4.1]

6.1 Let $T\subseteq S$ be any open subscheme. Its affine opens are exactly the affine opens of $S$ contained in $T$. If a point of $\pi^{-1}(T)$ lies in a chart $Y_V$, an affine open $U$ around its base point with $U\subseteq V\cap T$ moves it into $Y_U$ by step 3.1. Thus the charts over affines contained in $T$ are precisely an open cover of $\pi^{-1}(T)$ with the restriction maps from the original atlas. The glued construction for $\mathcal A|_T$ is canonically this open subscheme, including when $T=\varnothing$. By [F6] it represents $Y\times_S T$, proving the restriction claim. No choice axiom is used: all affine opens and distinguished opens in the proof are considered as sets, and the local cover arguments select no simultaneous family of points or charts. [F1, F4, F6, step 3.1, step 4.1] ∎
