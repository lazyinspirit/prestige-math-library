---
id: def-associated-sheaf-graded-module-proj
kind: definition
title: "Associated sheaf of a graded module on Proj"
status: published
origin: pipeline
deps:
  - thm-proj-structure-sheaf-scheme
  - def-shifted-graded-module
  - def-associated-sheaf-module-affine-scheme
  - thm-associated-module-sheaf-exists
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Section 27.9 (Tag 01MJ) and Section 27.10 (Tag 01MM)"
      url: https://stacks.math.columbia.edu/tag/01MJ
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 4.5"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Assume the Axiom of Choice as inherited from the affine scheme construction
([[def-axiom-of-choice]]). Let $S=\bigoplus_{d\ge0}S_d$ be a commutative
nonnegatively graded ring with $\operatorname{Proj}S$ a scheme whose charts
$$D_+(f)=\operatorname{Spec}S_{(f)},\qquad S_{(f)}=(S[f^{-1}])_0,$$
are affine opens for every homogeneous $f\in S_+$ of positive degree
([[thm-proj-structure-sheaf-scheme]]), and let
$$M=\bigoplus_{d\in\mathbb Z}M_d$$
be a $\mathbb Z$-graded $S$-module. For a homogeneous $f\in S_+$ of positive
degree put
$$M_{(f)}=(M[f^{-1}])_0,$$
the **degree-zero part of the homogeneous localisation** of $M$ at $f$: the
set of fractions $m/f^k$ with $m\in M$ homogeneous of degree $kd$. This is a
module over the ring $S_{(f)}$ by the same formula as the ring case, and it is
the module denoted $M_{(f)}$ in [[def-graded-ring-and-graded-module]].

**Construction.** On the affine chart $D_+(f)=\operatorname{Spec}S_{(f)}$ let
$\widetilde M_{(f)}$ be the associated sheaf of the $S_{(f)}$-module
$M_{(f)}$ ([[def-associated-sheaf-module-affine-scheme]]), which exists as a
quasi-coherent sheaf by [[thm-associated-module-sheaf-exists]]. The
**associated sheaf $\widetilde M$ of $M$ on $\operatorname{Proj}S$** is the
unique sheaf of $\mathcal O_{\operatorname{Proj}S}$-modules whose restriction
to $D_+(f)$ is $\widetilde M_{(f)}$ under the identification
$D_+(f)=\operatorname{Spec}S_{(f)}$, for every homogeneous $f\in S_+$ of
positive degree.

**Well-definedness.** The data glue. Since the standard opens
$D_+(f)$ form a basis of the topology of $\operatorname{Proj}S$
([[def-standard-open-proj]]), it suffices to specify the sheaf on this basis
and to give compatible restriction isomorphisms. For homogeneous
$f,g\in S_+$ of positive degrees $d=\deg f$, $e=\deg g$, the element
$$\tau_{f,g}=\frac{g^{d}}{f^{e}}\in S_{(f)}$$
is well defined, and $D_+(fg)=D_+(f)\cap D_+(g)$ is the distinguished open
$D(\tau_{f,g})$ of $\operatorname{Spec}S_{(f)}$
([[lem-proj-prime-localization-correspondence]]). Localising the fraction
description of $M_{(f)}$ at $\tau_{f,g}$ performs exactly the further
localisation inverting $g$:
$$(M_{(f)})_{\tau_{f,g}}=\bigl((M[f^{-1}])_0\bigr)_{\tau_{f,g}} =(M[f^{-1},g^{-1}])_0=M_{(fg)},$$ the middle equality because a fraction of fractions $m/f^k$ divided by a power of $\tau_{f,g}$ is a fraction with denominator a power of $fg$, and conversely every class in $M[f^{-1},g^{-1}]$ of degree zero can be written with denominator a power of $fg$ and numerator of matching degree. The two composite identifications of $M_{(fg)}$ obtained from $M_{(f)}$ and from $M_{(g)}$ agree, because both are the canonical localisation maps into the localisation at the product $fg$; the same computation on triple overlaps $D_+(fgh)$ shows the cocycle condition, and gluing the affine localisations of a module along a basis with compatible restrictions is the standard module-sheaf gluing. Consequently $\widetilde M$ is well defined, the identifications are isomorphisms of $S_{(f)}$-modules, and no choice of charts or trivialisations enters: the only appeal to AC is the inherited one through the associated-module-sheaf construction of [[thm-associated-module-sheaf-exists]]. **Functoriality.** A homomorphism of graded $S$-modules of degree zero, $\varphi:M\to N$ with $\varphi(M_d)\subseteq N_d$ for all $d$ ([[def-graded-ring-and-graded-module]]), induces $S_{(f)}$-linear maps $M_{(f)}\to N_{(f)}$ and hence morphisms of associated sheaves on each chart, compatible with the identifications above; they glue to a morphism $\widetilde\varphi:\widetilde M\to\widetilde N$ of $\mathcal O_{\operatorname{Proj}S}$-modules. The construction is additive and respects composition and identities, so $M\mapsto\widetilde M$ is a functor from graded $S$-modules with degree-zero maps to $\mathcal O_{\operatorname{Proj}S}$-modules.

## Remarks

- **Twists.** Applying the construction to the shifted module $S(n)$ of [[def-shifted-graded-module]] defines the sheaves $\mathcal O_X(n)=\widetilde{S(n)}$ studied at [[def-twisting-sheaf-proj]]; the sign convention is the one fixed there.
- **No invertibility claim.** For an arbitrary nonnegatively graded ring the sheaf $\mathcal O_X(1)$ need not be invertible; invertibility is proved in [[thm-twisting-sheaf-invertible-standard-graded]] under the hypothesis that $S$ is generated in degree one over $S_0$.
- **Torsion is not seen.** The construction only uses the localisations $M_{(f)}$; elements of $M$ annihilated by a power of the irrelevant ideal localise to zero on every chart and therefore give the zero sheaf. The precise statement is in [[lem-proj-irrelevant-and-nilpotent-boundaries]].