---
id: "def-sheaf-relative-differentials"
kind: "definition"
title: "Sheaf of relative Kähler differentials"
status: draft
origin: "pipeline"
deps: ["def-scheme-over-base", "def-morphism-of-schemes", "def-inverse-image-presheaf-and-sheaf", "def-sheafification", "def-module-on-ringed-space", "def-sheaf-on-topological-space", "def-kahler-differentials-algebra", "thm-kahler-differentials-existence-presentation", "def-derivation-algebra"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks Modules 17.28.4 and 17.28.10, tags 08TD and 08RT"
      url: "https://stacks.math.columbia.edu/tag/08TD"
    - title: "Stacks Morphisms 29.33.1 and 29.33.5, tags 01UQ and 01UT"
      url: "https://stacks.math.columbia.edu/tag/01UM"
    - title: "Vakil §22.2.20, pp.584–585"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Definition

Let $f\colon X\to S$ be a morphism of schemes ([[def-morphism-of-schemes]]), so
that $f$ is in particular a morphism of ringed spaces and comes with a map of
sheaves of rings $f^{\sharp}\colon f^{-1}\mathcal O_S\to\mathcal O_X$
([[def-inverse-image-presheaf-and-sheaf]]); the pair $(X,f)$ is an $S$-scheme
([[def-scheme-over-base]]). Let $\mathcal F$ be a sheaf of $\mathcal O_X$-modules
([[def-module-on-ringed-space]]).

**$S$-derivations.** An **$S$-derivation of $\mathcal O_X$ into $\mathcal F$** is
a morphism of sheaves of abelian groups $D\colon\mathcal O_X\to\mathcal F$ such
that for all local sections $a,a'$ of $\mathcal O_X$ over a common open set
$W\subseteq X$ one has

$$D(a+a')=D(a)+D(a'),\qquad D(aa')=a\,D(a')+a'\,D(a),$$

and such that $D$ annihilates the image of
$f^{\sharp}\colon f^{-1}\mathcal O_S\to\mathcal O_X$: the composite
$f^{-1}\mathcal O_S\xrightarrow{f^{\sharp}}\mathcal O_X\xrightarrow{D}\mathcal F$
is the zero map. Here the products and sums are taken in the rings
$\mathcal O_X(W)$. The set of all such $D$ is written
$\operatorname{Der}_S(\mathcal O_X,\mathcal F)$; it is a $\Gamma(X,\mathcal O_X)$-module
under the pointwise operations, and for a morphism
$\mathcal F\to\mathcal G$ of $\mathcal O_X$-modules, postcomposition
$D\mapsto\alpha\circ D$ maps $\operatorname{Der}_S(\mathcal O_X,\mathcal F)$ to
$\operatorname{Der}_S(\mathcal O_X,\mathcal G)$. For $S$-schemes and
$S$-morphisms the condition is that $D$ kills $f^{-1}\mathcal O_S$; when $S$ is
fixed one simply says **derivation**.

**Construction of $\Omega_{X/S}$.** Consider the presheaf of
$\mathcal O_X$-modules

$$P\colon W\longmapsto\Omega_{\mathcal O_X(W)/(f^{-1}\mathcal O_S)(W)},$$

where $W\subseteq X$ is open, the ring $(f^{-1}\mathcal O_S)(W)$ maps to
$\mathcal O_X(W)$ by $f^{\sharp}_W$, and
$\Omega_{\mathcal O_X(W)/(f^{-1}\mathcal O_S)(W)}$ is the Kähler differential
module of that ring map ([[def-kahler-differentials-algebra]]), which exists by
[[thm-kahler-differentials-existence-presentation]]. For $W'\subseteq W$ the
restriction $P(W)\to P(W')$ is the unique $\mathcal O_X(W)$-linear map induced,
via the universal property of $P(W)$, by the derivation
$\mathcal O_X(W)\to\mathcal O_X(W')\to P(W')$, where $P(W')$ is viewed as an
$\mathcal O_X(W)$-module by restriction of scalars; the restriction maps compose,
so $P$ is a presheaf of
$\mathcal O_X$-modules. Define

$$\Omega_{X/S}:=aP,$$

the sheafification of $P$ ([[def-sheafification]]); this is a sheaf of
$\mathcal O_X$-modules by defining scalar multiplication on local representatives
in the double-plus construction, with equality on germs making the operation
well defined. The universal derivations
$\mathrm d_W\colon\mathcal O_X(W)\to P(W)$ are compatible with the restriction
maps by construction, so they define a morphism of presheaves and hence a
morphism of sheaves

$$\mathrm d_{X/S}\colon\mathcal O_X\longrightarrow\Omega_{X/S},$$

the **universal $S$-derivation** of $X$ over $S$, and $\mathrm d_{X/S}$ is an
$S$-derivation because each $\mathrm d_W$ is an $A_W$-derivation for
$A_W=(f^{-1}\mathcal O_S)(W)$ and the maps $A_W\to\mathcal O_X(W)$ are the
structure maps $f^{\sharp}_W$.

**Local descriptions.** Two descriptions are used constantly and are recorded
here for orientation; both are proved from the universal property in
[[thm-sheaf-differentials-universal-property]] and
[[lem-sheaf-differentials-affine-compatibility]].

1. **Functor of points form.** For every $\mathcal O_X$-module $\mathcal F$
   there is a natural bijection
   $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal F)\cong
   \operatorname{Der}_S(\mathcal O_X,\mathcal F)$, $g\mapsto g\circ\mathrm d_{X/S}$;
   this is the universal property that characterizes $\Omega_{X/S}$.
2. **Affine charts.** If $U=\operatorname{Spec}B\subseteq X$ is an affine open
   subscheme and $f(U)\subseteq V=\operatorname{Spec}A$ for an affine open
   $V\subseteq S$, then the map $B\to\Omega_{X/S}(U)$, $b\mapsto \mathrm d_{X/S}(b)$
   exhibits $\Omega_{X/S}(U)$ as $\Omega_{B/A}$, compatibly with the universal
   derivations, and restriction to a basic open $D(g)\subseteq U$ corresponds to
   the localization $\Omega_{B/A}\to\Omega_{B_g/A}$.

**Affine module convention.** The affine description (2) identifies
$\Omega_{X/S}$ on each affine chart with the
sheaf attached to $\Omega_{B/A}$, with localization as restriction. This local
description is the part used below; it needs no finiteness, flatness or
separatedness hypothesis on $f$ and also applies to the identity $X\to X$.
