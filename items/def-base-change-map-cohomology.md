---
id: def-base-change-map-cohomology
kind: definition
title: "Cohomology and base-change map"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-higher-direct-image-sheaf
  - lem-higher-direct-image-affine-localization
  - def-residue-field-scheme-point
  - def-fibre-of-module-at-point
  - def-proper-morphism
  - lem-proper-stable-base-change
  - def-quasi-coherent-module-scheme
  - def-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - def-pullback-module-ringed-spaces
  - lem-pullback-qc-module-quasi-coherent
  - lem-cohomology-functoriality-sheaf-and-space
  - def-sheaf-cohomology-derived-global-sections
  - def-fibre-product-schemes-universal-property
  - thm-gluing-sheaves
  - def-sheaf-on-topological-space
  - def-module-on-ringed-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f:X\to S$ be a
proper morphism of schemes ([[def-proper-morphism]]), let $\mathcal F$ be a
coherent $\mathcal O_X$-module ([[def-coherent-module-scheme]]), and let
$R^qf_*\mathcal F$ be its $q$-th higher direct image sheaf
([[def-higher-direct-image-sheaf]]), an $\mathcal O_S$-module.

**Fibre map.** Let $s\in S$ be a point with residue field $\kappa(s)$
([[def-residue-field-scheme-point]]), let
$$X_s:=X\times_S\operatorname{Spec}\kappa(s)$$
be the fibre of $f$ over $s$ ([[def-fibre-product-schemes-universal-property]])
with structure morphism $f_s:X_s\to\operatorname{Spec}\kappa(s)$ and projection
$g'_s:X_s\to X$, and let $\mathcal F_s:=g_s'^*\mathcal F$
([[def-pullback-module-ringed-spaces]]). Write
$(R^qf_*\mathcal F)(s)=(R^qf_*\mathcal F)_s\otimes_{\mathcal O_{S,s}}\kappa(s)$
for the fibre of the $\mathcal O_S$-module $R^qf_*\mathcal F$ at $s$
([[def-fibre-of-module-at-point]]). The **cohomology and base-change map at
$s$** is the $\kappa(s)$-linear map
$$\varphi^q_s:\ (R^qf_*\mathcal F)(s)\longrightarrow H^q(X_s,\mathcal F_s)$$
induced by pullback of cohomology classes: for every affine open
$V=\operatorname{Spec}A\subseteq S$ containing $s$ the pullback along
$X_s\to f^{-1}V$ and the canonical map $g_s'^{-1}\mathcal F\to\mathcal F_s$
produce
$H^q(f^{-1}V,\mathcal F)\to H^q(X_s,\mathcal F_s)$
([[lem-cohomology-functoriality-sheaf-and-space]]), these maps are compatible
under passage to smaller affine neighbourhoods of $s$, and they induce the
displayed map out of the colimit
$(R^qf_*\mathcal F)_s=\operatorname{colim}_V H^q(f^{-1}V,\mathcal F)$
([[lem-higher-direct-image-affine-localization]]).

**Base-change map.** For a morphism $g:S'\to S$ form the Cartesian square with
$X'=X\times_SS'$, projections $g':X'\to X$ and $f':X'\to S'$ over $S'$;
as a base change of the proper morphism $f$, the morphism $f'$ is proper
([[lem-proper-stable-base-change]]) and $g'^*\mathcal F$ is quasi-coherent on
$X'$. The **base-change map**
for this square is the $\mathcal O_{S'}$-linear morphism
$$g^*R^qf_*\mathcal F\longrightarrow R^qf'_*g'^*\mathcal F$$
obtained as follows: on an affine open $V'=\operatorname{Spec}B\subseteq S'$
whose image lies in an affine open $V=\operatorname{Spec}A\subseteq S$ one has
$g^*R^qf_*\mathcal F(V')=B\otimes_AH^q(f^{-1}V,\mathcal F)$
([[lem-pullback-qc-module-quasi-coherent]],
[[def-associated-sheaf-module-affine-scheme]]), while
$R^qf'_*g'^*\mathcal F(V')=H^q(f'^{-1}V',g'^*\mathcal F)$
([[lem-higher-direct-image-affine-localization]]); pullback of cohomology
classes along $X'_{V'}:=f'^{-1}V'\to f^{-1}V$ composed with the canonical map
$g'^{-1}\mathcal F\to g'^*\mathcal F$ gives an $A$-linear map
$H^q(f^{-1}V,\mathcal F)\to H^q(f'^{-1}V',g'^*\mathcal F)$, hence by extension
of scalars the required $B$-linear map on sections. These maps are compatible
with restriction to smaller affine open pairs, so by [[thm-gluing-sheaves]]
they define a unique morphism of sheaves on $S'$; it is functorial in the
Cartesian square and compatible with composition of base changes.

**Not asserted to be isomorphisms.** The maps $\varphi^q_s$ and
$g^*R^qf_*\mathcal F\to R^qf'_*g'^*\mathcal F$ are not isomorphisms without
hypotheses: injectivity may fail when $\mathcal F$ is not flat over $S$, and
surjectivity may fail when the fibre dimensions jump. Criteria under which
they are isomorphisms are the content of the cohomology-and-base-change
theorems, and the failure of automatic base change is recorded separately.
In degree $q=0$ the fibre map is the evaluation of local sections,
$(f_*\mathcal F)_s\otimes_{\mathcal O_{S,s}}\kappa(s)\to H^0(X_s,\mathcal F_s)$;
the global restriction $H^0(X,\mathcal F)\to H^0(X_s,\mathcal F_s)$ factors
through it. The base-change map is the canonical map
$g^*f_*\mathcal F\to f'_*g'^*\mathcal F$.

## Facts & Assumptions
**Given:** The Axiom of Choice, a proper morphism $f:X\to S$, a coherent $\mathcal O_X$-module $\mathcal F$, a point $s\in S$, and a morphism $g:S'\to S$ with Cartesian square $X'=X\times_SS'$.

[F1] Higher direct images: $R^qf_*\mathcal F$ is a specific $\mathcal O_S$-module
depending on the fixed functorial injective resolution datum, functorially in
$\mathcal F$, with $R^qf_*\mathcal F=0$ for $q<0$ and
$R^0f_*\mathcal F\cong f_*\mathcal F$. For $f$ quasi-compact and separated and
$\mathcal F$ quasi-coherent, each $R^qf_*\mathcal F$ is quasi-coherent, and on
an affine open $V=\operatorname{Spec}A\subseteq S$ it is the associated sheaf
of the $A$-module $H^q(f^{-1}V,\mathcal F)$, so in particular
$(R^qf_*\mathcal F)(V)=H^q(f^{-1}V,\mathcal F)$
([[def-higher-direct-image-sheaf]],
[[lem-higher-direct-image-affine-localization]]). A proper morphism is
separated, of finite type and quasi-compact
([[def-proper-morphism]]), and a coherent module is quasi-coherent
([[def-quasi-coherent-module-scheme]], [[def-coherent-module-scheme]]), so
these descriptions apply to $f$ and $\mathcal F$; the base-changed
morphism $f'$ is again proper ([[lem-proper-stable-base-change]]) and
$g'^*\mathcal F$ is quasi-coherent ([[lem-pullback-qc-module-quasi-coherent]]),
so the descriptions apply to $f'$ and $g'^*\mathcal F$ as well.

[F2] Contravariance of sheaf cohomology in the space: a continuous map
$u:Y\to Z$ and a morphism of sheaves $\psi:u^{-1}\mathcal G\to\mathcal H$ on
$Y$ induce maps $H^q(Z,\mathcal G)\to H^q(Y,\mathcal H)$, natural in the data
and compatible with composition; in degree $0$ they are the section pullback
with $\psi$. In particular pullback along a morphism of schemes $X'_{V'}\to
f^{-1}V$ combined with the canonical map
$g'^{-1}\mathcal F\to g'^*\mathcal F$ gives $H^q(f^{-1}V,\mathcal F)\to
H^q(f'^{-1}V',g'^*\mathcal F)$.
([[lem-cohomology-functoriality-sheaf-and-space]],
[[def-sheaf-cohomology-derived-global-sections]],
[[def-sheaf-on-topological-space]]).

[F3] Pullback of quasi-coherent modules: $g'^*\mathcal F$ is quasi-coherent.
For affine opens $V'=\operatorname{Spec}B\subseteq S'$ and
$V=\operatorname{Spec}A\subseteq S$ with $g(V')\subseteq V$, if the
quasi-coherent module $R^qf_*\mathcal F$ restricts to $\widetilde M$ on $V$,
then $g^*R^qf_*\mathcal F$ restricts to the associated sheaf of
$B\otimes_A M$ on $V'$. There is a canonical morphism
$g'^{-1}\mathcal F\to g'^*\mathcal F$
([[lem-pullback-qc-module-quasi-coherent]],
[[def-pullback-module-ringed-spaces]],
[[def-associated-sheaf-module-affine-scheme]],
[[def-module-on-ringed-space]]).

[F4] Morphisms of sheaves glue: a collection of morphisms of abelian groups on
the members of a basis of a topological space, compatible under restriction to
smaller basis members, defines a unique morphism of the associated sheaves
([[thm-gluing-sheaves]]).

[F5] Fibre of a module at a point: for an $\mathcal O_S$-module
$\mathcal G$ and $s\in S$, the fibre
$\mathcal G(s)=\mathcal G_s\otimes_{\mathcal O_{S,s}}\kappa(s)$ is a
$\kappa(s)$-vector space, and for $\mathcal G$ quasi-coherent it is the
pullback of $\mathcal G$ to $\operatorname{Spec}\kappa(s)$ evaluated there
([[def-fibre-of-module-at-point]],
[[lem-pullback-qc-module-quasi-coherent]]).



## Proof

**Proof technique:** direct: build the fibre map as the colimit of restrictions of cohomology classes to the fibre over affine neighbourhoods, and build the base-change map affine-locally by tensoring the pullback map on cohomology over the base ring, then glue over a basis.

1.1 The fibre map of the definition is well defined: for affine open neighbourhoods $V\subseteq V_0$ of $s$ the pullback maps $H^q(f^{-1}V_0,\mathcal F)\to H^q(X_s,\mathcal F_s)$ and $H^q(f^{-1}V,\mathcal F)\to H^q(X_s,\mathcal F_s)$ agree, because the pullback squares $X_s\to f^{-1}V\to f^{-1}V_0$ compose and the maps of [F2] are compatible with composition; hence the colimit description $(R^qf_*\mathcal F)_s=\operatorname{colim}_VH^q(f^{-1}V,\mathcal F)$ of [F1] yields a well-defined $\mathcal O_{S,s}$-linear map $(R^qf_*\mathcal F)_s\to H^q(X_s,\mathcal F_s)$. [F1, F2]

1.2 The map of 1.1 is $\mathcal O_{S,s}$-linear and its target carries the $\mathcal O_{S,s}$-action through $\kappa(s)$, so it factors uniquely through $(R^qf_*\mathcal F)(s)=(R^qf_*\mathcal F)_s\otimes_{\mathcal O_{S,s}}\kappa(s)$: this is the $\kappa(s)$-linear fibre map $\varphi^q_s$ of the definition. [F1, F2, F5]

1.3 The affine-local recipe for the base-change map is well defined: for affine $V'=\operatorname{Spec}B$ over $V=\operatorname{Spec}A$ the extension-of-scalars map $B\otimes_AH^q(f^{-1}V,\mathcal F)\to H^q(f'^{-1}V',g'^*\mathcal F)$ is defined by the $A$-linear pullback map of [F2] and the identifications of [F3], and it is $B$-linear. [F2, F3]

1.4 The recipes of 1.3 are compatible with restriction: replacing $(V,V')$ by a smaller pair $(V_0,V_0')$ restricts both sides and the pullback maps compose, by the compatibility clause of [F2]; the affine pairs cover $S'$, and every intersection of two such pairs is covered by smaller affine pairs over affine opens in $S$; compatibility on these common refinements lets [F4] glue the maps to a unique $\mathcal O_{S'}$-linear morphism $g^*R^qf_*\mathcal F\to R^qf'_*g'^*\mathcal F$. [F2, F3, F4]

2.1 Boundaries and conventions. For $q<0$ both sides vanish by [F1] and the map is the zero map; for $q=0$ the fibre map is evaluation of germs of local sections on the fibre (and global restriction factors through it), while the base-change map reduces to the canonical $g^*f_*\mathcal F\to f'_*g'^*\mathcal F$ given by adjunction; if $S'=\varnothing$ or $\mathcal F=0$ both sides are zero; if $S$ (and hence $X$) is empty there are no points $s$ and no fibre maps, and the base-change map is the zero map between zero sheaves on $S'$. The Axiom of Choice is a hypothesis, consumed through the injective resolution datum defining the higher direct images [F1] and through the cohomology functoriality of [F2]. No choice is made in the constructions of 1.1-1.4. [F1, F2, F5] ∎
