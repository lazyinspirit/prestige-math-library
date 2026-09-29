---
id: def-higher-direct-image-sheaf
kind: definition
title: Higher direct image of a sheaf
status: draft
origin: pipeline
deps:
  - def-module-on-ringed-space
  - def-direct-image-sheaf
  - lem-direct-image-is-sheaf
  - thm-pullback-pushforward-module-adjunction
  - cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact
  - lem-ringed-space-module-sheaves-enough-injectives
  - def-right-derived-object-relative-to-injective-resolution-data
  - thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor
  - thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, \u00a7\u00a730.2\u201330.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), \u00a7\u00a719.1, 19.6, 19.9, 28.1\u201328.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Definition

Let $(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$ be a morphism of ringed
spaces and let $\mathcal F$ be an $\mathcal O_X$-module
([[def-module-on-ringed-space]]). The direct image presheaf
$f_*\mathcal F$ is defined on opens $V\subseteq Y$ by
$(f_*\mathcal F)(V)=\mathcal F(f^{-1}(V))$
([[def-direct-image-sheaf]]); when $\mathcal F$ is a sheaf of modules, this
presheaf is again a sheaf of modules on $Y$
([[lem-direct-image-is-sheaf]]), and for a morphism of ringed spaces it is an
$\mathcal O_Y$-module, because $f_*$ is right adjoint to the inverse image
functor $f^*$ on modules ([[thm-pullback-pushforward-module-adjunction]]); a
right adjoint is left exact and additive
([[cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact]]).

Fix the supplied functorial injective resolution datum $I$ on
$\mathrm{Mod}(\mathcal O_X)$ of
[[lem-ringed-space-module-sheaves-enough-injectives]]: it assigns to every
$\mathcal O_X$-module $\mathcal F$ one specific injective resolution
$0\to\mathcal F\to I^0(\mathcal F)\to I^1(\mathcal F)\to\cdots$
([[def-injective-resolution-in-an-abelian-category]]) with deleted complex
$I(\mathcal F)_{\mathrm{del}}$
([[def-right-derived-object-relative-to-injective-resolution-data]]). For
every $q\in\mathbb Z$ define the **$q$-th higher direct image sheaf**

$$R^qf_*\mathcal F:=R_I^qf_*(\mathcal F)=H^q\bigl(f_*I(\mathcal F)_{\mathrm{del}}\bigr),$$

the $q$-th right derived object of the additive left exact functor
$f_*:\mathrm{Mod}(\mathcal O_X)\to\mathrm{Mod}(\mathcal O_Y)$ relative to the
fixed datum $I$ ([[def-right-derived-object-relative-to-injective-resolution-data]]),
the cohomology object being taken in the abelian category of
$\mathcal O_Y$-modules. We also keep the convention $R^qf_*\mathcal F=0$ for
$q<0$.

By the derived-object convention this makes $R^qf_*\mathcal F$ a specific
$\mathcal O_Y$-module for every $\mathcal F$ and $q$, depending on the fixed
datum $I$; in degree zero the left exactness of $f_*$ supplies a canonical
natural isomorphism $R^0f_*\mathcal F\xrightarrow{\sim}f_*\mathcal F$
([[thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor]],
which assumes the Axiom of Dependent Choice
([[def-dependent-choice]])), so the $q=0$ term is the ordinary direct image.
The Axiom of Choice supplies the functorial injective resolution datum of
$\mathrm{Mod}(\mathcal O_X)$ ([[def-axiom-of-choice]]) and implies the
Dependent Choice required by the cited degree-zero and comparison theorems
([[thm-choice-implies-dependent-implies-countable-choice]]). If $J$ is any other supplied injective resolution
datum on $\mathrm{Mod}(\mathcal O_X)$, then the functors $R_I^qf_*$ and
$R_J^qf_*$ are naturally isomorphic
([[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]),
so the higher direct image is independent of the resolution up to a canonical
comparison isomorphism.
