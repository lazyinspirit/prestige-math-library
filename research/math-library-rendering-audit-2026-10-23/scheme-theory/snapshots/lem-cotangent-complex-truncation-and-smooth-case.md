---
id: "lem-cotangent-complex-truncation-and-smooth-case"
kind: "lemma"
title: "Truncation, differentials and the cotangent complex of a smooth morphism"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 12
justified_by: []
aliases: []
deps:
  - "def-derived-hom-in-the-bounded-setting"
  - "def-ext-groups-of-the-cotangent-complex"
  - "def-cotangent-complex-of-a-scheme-morphism"
  - "def-cotangent-complex-of-a-ring-map"
  - "lem-cotangent-complex-h0-and-polynomial-case"
  - "lem-cotangent-complex-resolution-independence"
  - "def-sheaf-relative-differentials"
  - "def-kahler-differentials-algebra"
  - "def-smooth-morphism-schemes"
  - "def-etale-morphism-schemes"
  - "thm-smooth-local-standard-form"
  - "thm-jacobian-criterion-smooth-morphism"
  - "thm-differentials-smooth-locally-free"
  - "thm-formally-unramified-differentials-zero"
  - "thm-etale-equivalent-flat-unramified-fp"
  - "thm-transitivity-exact-sequence-differentials"
  - "lem-differentials-base-change"
  - "def-canonical-truncation-of-a-complex"
  - "lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology"
  - "def-quasi-isomorphism"
  - "def-axiom-of-choice"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.4.5 and Lemma 92.4.7 (tags 08QF, 08QH) for H^0(L)=Omega and the polynomial case; Section 92.8 (tags 08QY-08R1) for localization and etale ring maps; Lemma 92.9.1 (tag 08R5) for the smooth case; Lemma 92.11.3 (tag 08RB) for the naive cotangent complex; Lemma 92.24.2 (tag 08T3) for the affine comparison (printed pages 15-18, 19-22, 39-40, read 2026-10-05)"
    - title: "The Stacks Project, Deformation Theory, complete chapter (Chapter 91)"
      url: "https://stacks.math.columbia.edu/download/defos.pdf"
      locator: "Sections 91.7-91.8 (tags 08U6-08V5, 0D13-0D14): first-order thickenings and the naive cotangent complex in the deformation-theoretic form (printed pages 30-33, read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice for the resolution comparisons
([[def-axiom-of-choice]]). (1) For a ring map $A\to B$ one has
$H^0(L_{B/A})\cong\Omega_{B/A}$ ([[def-kahler-differentials-algebra]],
[[def-cotangent-complex-of-a-ring-map]]), and for a presentation
$\alpha\colon P\to B$ the naive cotangent complex $NL(\alpha)$ is canonically
identified with the truncation $\tau_{\ge-1}L_{B/A}$; hence for every
$B$-module $M$ the natural maps
$\operatorname{Ext}^i_B(L_{B/A},M)\to\operatorname{Ext}^i_B(NL(\alpha),M)$
are isomorphisms for $i=0,1$. (2) If $A\to B$ is smooth then
$L_{B/A}\simeq\Omega_{B/A}[0]$ in $D(B)$, and if $A\to B$ is etale then
$L_{B/A}\simeq0$. (3) For a morphism $f\colon X\to S$ of schemes one has
$H^0(L_{X/S})\cong\Omega^1_{X/S}$ ([[def-sheaf-relative-differentials]]), the
truncation $\tau_{\ge-1}L_{X/S}$ is the naive cotangent complex of $f$ and
computes $\operatorname{Ext}^0$ and $\operatorname{Ext}^1$ of $L_{X/S}$; if
$f$ is smooth ([[def-smooth-morphism-schemes]]) then
$L_{X/S}\simeq\Omega^1_{X/S}[0]$, in particular
$L_{X/k}\simeq\Omega^1_{X/k}[0]$ for a smooth $k$-scheme $X$; if $f$ is etale
([[def-etale-morphism-schemes]]) then $L_{X/S}\simeq0$. Consequently, for
smooth $f$, $\operatorname{Ext}^i_{\mathcal O_X}(L_{X/S},M)\cong\operatorname{Ext}^i_{\mathcal O_X}(\Omega^1_{X/S},M)$
for all $i$.

## Facts & Assumptions

**Given:** a ring map $A\to B$ with a presentation $\alpha\colon P\to B$ (a polynomial $A$-algebra $P$ with kernel $I$), a morphism of schemes $f:X\to S$, and the Axiom of Choice.

[F1] $L_{B/A}$ is a complex of $B$-modules concentrated in cohomological degrees $\le0$ (so bounded above), functorial in the ring map, and $L_{X/S}$ is glued from the affine complexes $L_{\mathcal O_X(U)/\mathcal O_S(V)}$ with canonical affine comparison isomorphisms. ([[def-cotangent-complex-of-a-ring-map]], [[def-cotangent-complex-of-a-scheme-morphism]])

[F2] For every ring map $A\to B$ one has $H^0(L_{B/A})\cong\Omega_{B/A}$, and if $B$ is a polynomial $A$-algebra then $L_{B/A}$ is quasi-isomorphic to $\Omega_{B/A}$ in degree $0$. ([[lem-cotangent-complex-h0-and-polynomial-case]])

[F3] The canonical truncation $\tau_{\ge-1}$ is a functor on complexes that preserves quasi-isomorphisms, with $H^i(\tau_{\ge-1}K)=H^i(K)$ for $i\ge-1$ and $0$ for $i\le-2$. ([[def-canonical-truncation-of-a-complex]], [[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]])

[F4] For $K$ concentrated in degrees $\le0$, let $T=\tau_{\ge-1}K$. The truncation triangle has fibre $C=\tau_{\le-2}K$. Represent $C$ in degrees $\le-2$ and resolve $M$ injectively in degrees $\ge0$. Then $\operatorname{Hom}^r(C,J)=0$ for $r<2$, so $\operatorname{Ext}^0(C,M)=\operatorname{Ext}^1(C,M)=0$. The long exact Hom sequence gives $\operatorname{Ext}^i(T,M)\xrightarrow{\sim}\operatorname{Ext}^i(K,M)$ for $i=0,1$, with canonical inverse. ([[def-canonical-truncation-of-a-complex]], [[def-ext-groups-of-the-cotangent-complex]], [[def-derived-hom-in-the-bounded-setting]])

[F5] For a smooth morphism of schemes one has the etale-local standard form $U\to\mathbf A^n_S\to S$ with $U\to\mathbf A^n_S$ etale, the differentials $\Omega^1_{X/S}$ are locally free, and for an etale morphism $\Omega_{X/S}=0$; moreover $\Omega_{X/S}$ is compatible with base change and satisfies the transitivity exact sequence. ([[thm-smooth-local-standard-form]], [[thm-jacobian-criterion-smooth-morphism]], [[thm-differentials-smooth-locally-free]], [[thm-formally-unramified-differentials-zero]], [[thm-etale-equivalent-flat-unramified-fp]], [[thm-transitivity-exact-sequence-differentials]], [[lem-differentials-base-change]])

[F6] For the affine comparison of the scheme cotangent complex: for affine opens $\operatorname{Spec}B=U\subseteq X$ and $\operatorname{Spec}A=V\subseteq S$ with $f(U)\subseteq V$, the canonical map $L_{B/A}\to L_{X/S}|_U$ is an isomorphism in $D(\mathcal O_U)$, compatibly with restrictions. ([[def-cotangent-complex-of-a-scheme-morphism]])

## Proof

**Proof technique:** read off $H^0$ and the truncation from the affine complex, use the standard etale-local form of a smooth morphism together with the polynomial case and localization compatibility, then glue over affine charts.

1.1 Part (1), first assertion: for every ring map $A\to B$ the isomorphism $H^0(L_{B/A})\cong\Omega_{B/A}$ is [F2]. For a presentation $\alpha\colon P\to B$ with kernel $I$, the naive cotangent complex is the two-term complex $I/I^2\to\Omega_{P/A}\otimes_PB$ placed in cohomological degrees $-1,0$; by Stacks, *The Cotangent Complex*, tag 08RB the canonical comparison map $NL(\alpha)\to\tau_{\ge-1}L_{B/A}$ is a quasi-isomorphism, so $\tau_{\ge-1}L_{B/A}$ is canonically identified with $NL(\alpha)$. Applying the truncation argument [F4] to $K=L_{B/A}$ gives the isomorphisms $\operatorname{Ext}^i_B(L_{B/A},M)\to\operatorname{Ext}^i_B(NL(\alpha),M)$ for $i=0,1$. This is the exact source theorem 08RB applied to the polynomial presentation; no stronger assertion about untruncated complexes is used. [F1, F2, F3, F4, given]

1.2 Part (2), polynomial case: if $A\to B$ is polynomial, $L_{B/A}\simeq\Omega_{B/A}[0]$ by [F2]. For a general smooth $A\to B$ the same conclusion follows by etale-localizing: by [F5] after covering $\operatorname{Spec}B$ by standard smooth opens, each chart has an etale map from a polynomial $A$-algebra $C$ (the affine form of the standard smooth presentation), and the localization and etale compatibility of the cotangent complex (Stacks, *The Cotangent Complex*, tags 08QY-08R1 and 08R5) gives $L_{B/A}\simeq L_{C/A}\otimes_CB\simeq\Omega_{C/A}\otimes_CB\simeq\Omega_{B/A}[0]$. For an etale $A\to B$ this specializes to $L_{B/A}\simeq\Omega_{B/A}[0]$ with $\Omega_{B/A}=0$ by [F5]. These are the precise cited source results 08R5 and its localization/etale inputs, applied on those charts; quasi-isomorphisms can be checked locally. [F2, F5, given]

1.3 Part (3), differentials and truncation: by [F6] the scheme complex restricts on an affine chart $U$ to $L_{B/A}$, so $H^0(L_{X/S})|_U\cong H^0(L_{B/A})\cong\Omega_{B/A}=\Omega^1_{X/S}|_U$ by [F1] and part (1); the sheaves glue by the sheaf property, giving $H^0(L_{X/S})\cong\Omega^1_{X/S}$. The truncation statement is local as well, and the comparison with the naive cotangent complex of $f$ on charts gives the asserted $\operatorname{Ext}^0$ and $\operatorname{Ext}^1$ computation as in part (1). If $f$ is smooth, then over each affine chart the ring map is smooth and part (2) yields $L_{B/A}\simeq\Omega_{B/A}[0]$; these local quasi-isomorphisms are compatible with the restriction maps because both sides are functorial in the ring map and the localizations are compatible with [F6], so they glue to $L_{X/S}\simeq\Omega^1_{X/S}[0]$. If $f$ is etale the same gluing gives $L_{X/S}\simeq0$ from part (2). [F1, F2, F5, F6, given]

2.1 Consequence: a quasi-isomorphism $L_{X/S}\simeq\Omega^1_{X/S}[0]$ is an isomorphism in the derived category, so the functor $\mathbf R\operatorname{Hom}(-,M)$ sends it to an isomorphism. Taking degree-$i$ cohomology gives the asserted Ext equality for every $i$. This step uses derived Hom and does not assert that global Hom out of a locally free sheaf is exact. The case $S=\operatorname{Spec}k$ is the absolute specialization. [F1, F5, step 1.3, given] ∎

**Source applications.** The comparison with the naive cotangent complex uses Stacks tag 08RB (and its sheaf analogue 08UW); the smooth and etale assertions use tag 08R5 and its inputs. These exact results were read with their full proofs and are applied with the hypotheses stated above.
