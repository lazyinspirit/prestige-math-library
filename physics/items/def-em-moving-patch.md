---
id: def-em-moving-patch
kind: definition
title: "Moving parametrized surface patches and their flux"
status: draft
origin: pipeline
domain: mathematics
deps: [def-type-i-type-ii-and-elementary-green-regions, def-positive-orientation-for-elementary-region-boundaries, def-admissible-regular-parametrized-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-cross-product-in-r3, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-continuous-functions-on-compact-jordan-sets-are-integrable, cor-jordan-content-finite-additivity, thm-jordan-boundary-criterion, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, lem-compact-null-iff-content-zero-in-rn]
dependency_roles:
  def-type-i-type-ii-and-elementary-green-regions: mathematical-premise
  def-positive-orientation-for-elementary-region-boundaries: mathematical-premise
  def-admissible-regular-parametrized-surface-patch: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  cor-jordan-content-finite-additivity: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  lem-null-sets-in-rn-closed-under-subsets-and-countable-unions: mathematical-premise
  lem-compact-null-iff-content-zero-in-rn: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.2 and §4.4"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "J. Feldman, A. Rechnitzer, E. Yeager, CLP-4 Vector Calculus (UBC), §4.1 (Theorems 4.1.4-4.1.16)"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/sec_graadDivCurl.html"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $D\subseteq\mathbb R^2$ be a nonempty finite elementary Green region in the sense of [[def-type-i-type-ii-and-elementary-green-regions]], written as $D=D_1\cup\cdots\cup D_N$ with its supplied decomposition into elementary Green regions of pairwise disjoint interiors and with the shared-arc structure of that definition, and let $\partial D$ be its positive boundary chain ([[def-positive-orientation-for-elementary-region-boundaries]]). We require in addition that $D$ be Jordan measurable; this is explained below and holds for every finite elementary Green region. Let $I\subseteq\mathbb R$ be an interval and let

$$r:D\times I\to\mathbb R^3$$

be a map that extends to a $C^2$ map ([[def-ck-euclidean-maps-and-diffeomorphisms]]) on an open neighbourhood of $D\times I\subseteq\mathbb R^3$. Write $p=(u,v)$ for the parameter point, write $r_u(p,t),r_v(p,t),r_t(p,t)\in\mathbb R^3$ for the partial derivatives of that $C^2$ extension at $(p,t)$, and require

$$r_u(p,t)\times r_v(p,t)\ne0\qquad\text{for every }(p,t)\in D^\circ\times I^\circ,$$

the cross product being that of [[def-cross-product-in-r3]]. For every $t\in I^\circ$ this gives rank two on $D^\circ$. It does not imply the connectedness or interior injectivity required by [[def-admissible-regular-parametrized-surface-patch]]; neither is a standing hypothesis here. At endpoint or singleton times the rank condition is not imposed.

The **swept set** of the family is

$$S:=\bigcup_{t\in I}r(D\times\{t\})\subseteq\mathbb R^3,\qquad \Sigma:=\{(r(p,t),t):p\in D,\ t\in I\}\subseteq\mathbb R^4 .$$

A **velocity field for $r$** is a pair $(W,v)$ consisting of an open set $W\subseteq\mathbb R^4$ with $\Sigma\subseteq W$ and a map $v:W\to\mathbb R^3$ of class $C^1$ such that

$$v\bigl(r(p,t),t\bigr)=r_t(p,t)\qquad\text{for every }(p,t)\in D\times I .$$

Such a pair is required to exist: the standing hypothesis of this definition is that a velocity field for $r$ is given, and $v$ denotes it. The equality above is what single-valuedness means here: whenever two parameter points at the same time map to the same spatial point, their time derivatives agree. Values at different times may differ.

Finally let $B:V\to\mathbb R^3$ be a $C^1$ field on an open set $V\subseteq\mathbb R^4$ containing $\Sigma$. The **flux of $B$ through the patch at time $t\in I$** is

$$\Phi(t):=\int_D\bigl\langle B\bigl(r(p,t),t\bigr),\,r_u(p,t)\times r_v(p,t)\bigr\rangle\,du\,dv,$$

the integral being the Riemann integral over the compact Jordan measurable set $D$ of the displayed continuous integrand, and the pairing being the Euclidean inner product of [[def-euclidean-inner-product]]. This is a parametrized flux, counted with the supplied parametrization. When $(D,r(\cdot,t))$ satisfies the regular-patch definition, it agrees with [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]. In general different parameter points may represent the same spatial point with different normals. At a rank-two slice the unit normal means $N(p,t)=(r_u\times r_v)/\lVert r_u\times r_v\rVert_2$ on $D^\circ$, not necessarily a function of the spatial image alone.

For an injectively parametrized material-sheet interpretation, require in addition that $r(\cdot,t):D\to\mathbb R^3$ be injective for every $t\in I$. Injectivity alone does not imply $r_u\times r_v\ne0$: a regular-slice interpretation also requires this condition on $D^\circ\times I$, including endpoint and singleton times. These additional requirements are not standing hypotheses and are not used by the flux formula above.

### Well-definedness and conventions

*Jordan measurability of $D$.* Each piece is compact and Jordan measurable by [[def-type-i-type-ii-and-elementary-green-regions]]. The topological boundary of their finite union is contained in the finite union of their content-zero boundaries: a point outside all those boundaries is either interior to one piece or exterior to every piece. Combining finite cube covers proves content zero without Countable Choice. Thus $D$ is compact and Jordan measurable by [[thm-jordan-boundary-criterion]]; the positive boundary chain $\partial D$ is separate supplied orientation data.

*Extension independence.* Each elementary piece is the closure of its interior by its strict graph inequalities, so $D=\overline{D^\circ}$. Two $C^2$ extensions agree on $D\times I$, and their spatial difference quotients agree at interior parameter points. Their continuous spatial partials therefore agree on all of $D\times I$: a nonzero difference at a boundary point would remain nonzero nearby and contradict the dense-interior equality. For nondegenerate $I$, the same argument on the dense set $D^\circ\times I^\circ$ makes $r_t$ extension-independent. For singleton $I=\{t_0\}$ it does not: the same zero restriction admits extensions $0$ and $(t-t_0)\chi(p)$ with different time derivatives. In that case the chosen extension is part of the velocity data; the flux still depends only on the spatial partials.

*Integrability.* For fixed $t\in I$, the map $p\mapsto B(r(p,t),t)$ is continuous on $D$ as a composition of continuous maps, the maps $p\mapsto r_u(p,t)$ and $p\mapsto r_v(p,t)$ are continuous on $D$, and the cross product and inner product are continuous bilinear operations; hence the integrand is continuous on the compact set $D$. A continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]), so $\Phi(t)$ is defined for every $t\in I$.

*Degenerate time domains.* If $I$ is empty then $D\times I$ is empty, the family is vacuous and no flux value is asserted. If $I=\{t_0\}$ is a singleton, the compatibility condition still reads $v(r(p,t_0),t_0)=r_t(p,t_0)$, but it can always be met: choosing the extension $\tilde r(p,t):=r(p,t_0)$, which is constant in the time variable, gives $r_t\equiv0$ and admits the compatible $C^1$ velocity field $v\equiv0$. A different extension may require a different velocity field or may fail compatibility; as explained above, $r_t(p,t_0)$ is not determined by $r$ alone in this case. The flux $\Phi(t_0)$ involves only $r_u\times r_v$, so it is the parametrized flux of the fixed map and does not depend on that choice. The condition $r_u\times r_v\ne0$ is imposed only on $D^\circ\times I^\circ$, so rank failures on the boundary of the parameter region (seams) are permitted exactly as in [[def-admissible-regular-parametrized-surface-patch]], and at an endpoint time of a nondegenerate $I$ the definition asserts no regularity of the slice.

*No physical assertion.* This is a definition of a mathematical object: a time-dependent parametrized family, a velocity field compatible with it, and the flux integral. It asserts nothing about electromagnetic fields, about which vector fields occur in nature, or about the derivative of $\Phi$; the transport identity for $\Phi'$ is proved separately.
