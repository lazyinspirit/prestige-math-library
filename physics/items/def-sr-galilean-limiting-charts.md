---
id: def-sr-galilean-limiting-charts
kind: definition
domain: mathematics
title: 'Galilean limiting chart maps and bounded chart regions'
status: published
origin: session
dependency_level: 8
deps: [def-sr-affine-minkowski-model, def-lorentz-boost, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-rational-power, lem-boost-is-proper-orthochronous-with-inverse]
dependency_roles:
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-rational-power: mathematical-premise
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Section 4.2 pp. 82-86 (relativistic kinetic energy; Example 5 p. 86, the Newtonian prediction eV = (1/2)mv^2), Section 4.3.3 Example 8 p. 91 (the Newtonian limit v = p/m), Section 4.3.4 p. 96 (p = m gamma v; the momentum of a material particle approaches infinity as its speed approaches c) and problems 11-12 p. 116 (expand K = m(gamma-1) and p = m gamma v in Taylor series; show the first terms are the nonrelativistic expressions)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
verification:
  precheck: pass
---

## Definition

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model and let $c>0$ be a fixed mathematical speed scale, with the coordinate convention $x^0=ct$, let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame with inertial chart $x$ and spatial Euclidean structure $(S,\delta,|\cdot|)$ ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]), and write the points of $\mathbb R\times S$ as $(t,x)$.

(a) *Lorentz boost charts with a variable speed scale.* For $v\in S$ and a real $C>|v|$ put $\gamma_C(v):=(1-|v|^2/C^2)^{-1/2}$ ([[def-rational-power]]) and define the affine map $\Phi_{v,C}:\mathbb R\times S\to\mathbb R\times S$ by $$\Phi_{v,C}(t,x):=\Bigl(\gamma_C(v)\bigl(t-\tfrac{\delta(v,x)}{C^2}\bigr),\ \ x+\tfrac{\gamma_C(v)-1}{|v|^2}\delta(v,x)\,v-\gamma_C(v)\,t\,v\Bigr)\quad(v\ne0),$$ with $\Phi_{0,C}:=\mathrm{id}$; when $|v|<c$, at $C=c$ this is the coordinate expression, in the convention $x^0=ct$, of the passive Lorentz boost $B(v/c)$ of [[def-lorentz-boost]]: if an event has coordinates $(ct,x)$ in the unprimed inertial chart of the frame, then $\Phi_{v,c}(t,x)$ are its coordinates $(x'^0/c,\,x'^1,x'^2,x'^3)$ in the boosted inertial chart with parameter $v/c$.

(b) *Galilean boost.* For $v\in S$ define the affine map $G_v:\mathbb R\times S\to\mathbb R\times S$ by $G_v(t,x):=(t,\,x-tv)$.

(c) *Bounded chart region.* For reals $T,R>0$ put $D_{T,R}:=\{(t,x)\in\mathbb R\times S:|t|\le T,\ |x|\le R\}$, with $|\cdot|$ the norm of the named frame.

(d) *Scope of the family.* The parameter $C$ is a variable speed scale inside a family of coordinate expressions; it is not a change of the model's adopted constant $c$, and the members with $C\ne c$ are auxiliary mathematical maps used only to state the limit of [[lem-sr-uniform-galilean-limit-of-boost-charts]]. Nothing here asserts a physical limit of the framework, and no limiting trajectory, force or interaction is defined.

## Remarks

- **Well-definedness.** For $v\ne0$ and $C>|v|$ the base $1-|v|^2/C^2$ lies in $(0,1]$; it equals $1$ only at $v=0$, which the nonvanishing branch excludes, so $\gamma_C(v)$ is a positive rational power ([[def-rational-power]]) and the displayed formulas assign to each pair $(t,x)\in\mathbb R\times S$ a pair of elements of $\mathbb R\times S$, using the bilinear form $\delta$ and the vector-space operations of $S$. For $v=0$ the coefficient $(\gamma_C(0)-1)/|0|^2$ in the nonvanishing branch is the indeterminate form $0/0$, so the map is declared separately to be the identity; this is the same convention as in [[def-lorentz-boost]]. The family is total in the parameter: for every $v$ the admissible speeds are exactly $C>|v|$, an open interval, and $C=c$ belongs to it precisely when $|v|<c$.

- **The identification at $C=c$ is a substitution.** Writing $\beta:=v/c$ and $x^0:=ct$ in the definition of $B(\beta)$ in [[def-lorentz-boost]] gives $x'^0=\gamma(x^0-\beta\cdot x)$ and $x'=x+\tfrac{\gamma-1}{|\beta|^2}(\beta\cdot x)\beta-\gamma\beta x^0$ with $\gamma=\gamma_c(v)$; since $\beta\cdot x=\delta(v,x)/c$, $|\beta|^2=|v|^2/c^2$ and $\beta x^0=(v/c)(ct)=vt$, this is exactly $x'^0/c=\gamma_c(v)(t-\delta(v,x)/c^2)$ and $x'=x+\tfrac{\gamma_c(v)-1}{|v|^2}\delta(v,x)v-\gamma_c(v)tv$, that is $\Phi_{v,c}$. To verify that the new chart is inertial, let $B=B(v/c)$ act on $V$ in the given frame and set $e_a^{\prime}=B^{-1}e_a$, with the same origin $o$. By [[lem-boost-is-proper-orthochronous-with-inverse]]\,(i),(iii), $B^{-1}$ preserves $\eta$, the future cone and orientation, so $(o;e_0^{\prime},\ldots,e_3^{\prime})$ is an inertial frame; its coordinate map is $E^{-1}B(p-o)$, since its frame isomorphism is $B^{-1}E$. Thus its coordinates are the displayed passive-boost coordinates. The boost $B(v/c)$ is a linear map of $V$ acting on coordinates in the frame basis, while $\Phi_{v,c}$ is the induced affine coordinate expression on the chart domain $\mathbb R\times S$; those two descriptions agree by the displayed computation, which is why the definition records the identification rather than asserting a new map.

- **No uniform limit and no physical interpretation are asserted here.** The definition proves no limit of the family and states no convergence of trajectories; the bounded-region rate and the failure off bounded regions are proved in [[lem-sr-uniform-galilean-limit-of-boost-charts]]. The variable $C$ is an auxiliary parameter of a mathematical family, not a change of the model's adopted constant $c$; the model's Lorentz form, time orientation and inertial frames are those of [[def-sr-affine-minkowski-model]], and no choice principle is used.
