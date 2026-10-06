---
id: def-khovanov-seidel-bigraded-cover-and-bigraded-curves
kind: definition
title: "The Z^2 cover of the projectivized tangent bundle and bigraded curves"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - thm-covering-space-lifting-criterion
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-homotopy-lifting-for-covering-maps
  - def-axiom-of-choice
  - def-curves-and-geometric-intersection-numbers-on-the-marked-disk
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-deck-transformation-and-deck-group
  - thm-classification-of-connected-covering-spaces
  - thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk
  - thm-the-artin-presentation-is-complete-for-geometric-braids
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Section 3d"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Section 3d, printed pp. 23-24 (the Z^2-cover, the map delta_P, bigradings, the preferred lifts)"
verification:
  precheck: n/a
---

## Definition

**The braid action is used only through the mapping class group.** Assume the
Axiom of Choice ([[def-axiom-of-choice]]), used here only to pass between braid
classes and boundary-fixed mapping classes of the punctured disk, so that the
braid group acts on bigraded curves through
$G=\pi_0\operatorname{Diff}(D,\partial D;\Delta)$ via Artin presentation completeness
[[thm-the-artin-presentation-is-complete-for-geometric-braids]] and the smooth
configuration-space comparison of Khovanov–Seidel, Section 3b, equation (3.1),
printed p. 19. The corresponding topological comparison uses
[[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]
and AC. Everything
else in this definition — the cover, its deck group and the preferred lifts — is
produced by the covering-space classification and the lifting criterion and is
choice-free.

Let $(D,\Delta)$ be the marked disk of
[[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]], and let
$$D\setminus\Delta\subseteq\mathbb C$$
carry its subspace topology. Write
$$P:=\mathbf P\bigl(T(D\setminus\Delta)\bigr)$$
for the real projectivization of the tangent bundle, the space of tangent lines
$T_zc$ of curves at unmarked points; the embedding $D\subset\mathbb C$
trivializes $TD$, so $P$ is identified with $(\mathbb C^*/\mathbb R^\times)\times(D\setminus\Delta)$
and is a smooth manifold of real dimension $3$ with boundary. Fix once and for all a
polynomial $h\in\mathbb C[z]$ with simple zeros exactly at the points of
$\Delta$ (for instance $h(z)=\prod_{a\in\Delta}(z-a)$), and define
$$\delta_P\colon P\longrightarrow(\mathbb C^*/\mathbb R_{>0})\times(\mathbb C^*/\mathbb R_{>0}), \qquad \delta_P(\zeta,z):=\bigl(h(z)^{-2}\zeta^2,\,-h(z)\bigr).$$
This is well defined: $\zeta$ is a class modulo real scalars, so $\zeta^2$ is a
class modulo positive real scalars and $h(z)^{-2}\zeta^2$ likewise, and both
coordinates are nonzero because $\zeta\ne0$ and $h(z)\ne0$ on $D\setminus\Delta$.

**The cover.** Let
$$\exp\colon\mathbb R^2\longrightarrow(\mathbb C^*/\mathbb R_{>0})^2,\qquad \exp(\xi_1,\xi_2):=(e^{2\pi i\xi_1},e^{2\pi i\xi_2}),$$
the universal covering of the two-torus
$(\mathbb C^*/\mathbb R_{>0})^2$; it is a regular covering with deck group
$\mathbb Z^2$ acting by translation ([[def-covering-map-and-evenly-covered-neighbourhoods]],
[[def-deck-transformation-and-deck-group]],
[[thm-classification-of-connected-covering-spaces]]). Define
$$\widetilde P:=\bigl\{(x,p)\in\mathbb R^2\times P:\exp(x)=\delta_P(p)\bigr\}$$
with the subspace topology and the projection $\widetilde\pi(x,p):=p$. Then
$\widetilde\pi:\widetilde P\to P$ is a covering map with deck group $\mathbb Z^2$
acting by
$$\chi(r_1,r_2)(x,p):=(x+(r_1,r_2),\,p),$$
the pullback of the universal covering along $\delta_P$. This is the source's
$\mathbb Z^2$-cover of $P$.

**Bigradings and bigraded curves.** For a curve $c$ (unoriented, as in
[[def-curves-and-geometric-intersection-numbers-on-the-marked-disk]]) the
canonical section is
$$s_c\colon c\setminus\Delta\longrightarrow P,\qquad s_c(z):=T_zc .$$
It is well defined because a curve meets $\Delta$ in at most its two endpoints,
so $T_zc$ exists for every $z\in c\setminus\Delta$, and it is continuous. A
**bigrading** of $c$ is a continuous lift
$$\widetilde c\colon c\setminus\Delta\longrightarrow\widetilde P,\qquad \widetilde\pi\circ\widetilde c=s_c,$$
of the canonical section. Pairs $(c,\widetilde c)$ consisting of a curve and a
bigrading are **bigraded curves**; we often write $\widetilde c$ in place of
$(c,\widetilde c)$. A curve need not admit a bigrading — the obstruction for
simple closed curves is computed by the source — and precisely the arcs admit bigradings. An arc with its marked endpoints removed is contractible, so its tangent section lifts. A simple closed curve enclosing $k\ge1$ marked points has tangent-section monodromy $\pm(2-2k,k)\ne0$: the tangent makes one full turn and $h$ winds $k$ times, so the two coordinates of $\delta_P$ wind $2-2k$ and $k$. Hence its tangent section cannot lift (Khovanov--Seidel, Lemma 3.12, printed p. 24). The bigradings of any fixed arc form a $\mathbb Z^2$-torsor by uniqueness of path lifting, and are acted on by the deck group $\chi$:
$$\chi(r_1,r_2)\widetilde c:=\chi(r_1,r_2)\circ\widetilde c .$$

**The diffeomorphism and mapping-class actions.** Let $\mathcal D:=\operatorname{Diff}(D,\partial D;\Delta)$ be the actual orientation-preserving diffeomorphism group; its component group is the mapping class group $G$ used in the marked-disk Definition. For $f\in\mathcal D$, the derivative induces $P\to P$, $[v]\mapsto[Df(v)]$. It preserves the monodromy homomorphism: a fibre loop maps to a fibre loop of degree one, and a positively oriented puncture loop maps to the corresponding loop about the permuted puncture. No extra fibre winding occurs because $Df:D\to\mathrm{GL}^+(2,\mathbb R)$ is defined on the whole disk, so its restriction to any loop in $D$ is null-homotopic. The monodromy images of a fibre generator and a puncture generator are $(1,0)$ and $(-2,1)$; they generate $\mathbb Z^2$, so the pullback cover is connected and its deck group is exactly $\mathbb Z^2$.

There is a unique deck-equivariant preferred lift $\widetilde f$ fixing every point of the fibre over one chosen boundary tangent line $T_z\partial D$. This base tangent line is fixed by the derivative, so the lifting criterion gives the based lift ([[thm-covering-space-lifting-criterion]]), and monodromy preservation makes it deck-equivariant. Along the connected boundary tangent section the derivative is the identity; lifting its paths shows that $\widetilde f$ fixes every fibre over every $T_w\partial D$. Uniqueness of based lifts ([[thm-uniqueness-of-lifts-from-a-connected-space]]) gives $\widetilde{fg}=\widetilde f\widetilde g$. The action on bigraded curves is parametrization-aware: the bigrading of $f(c)$ at $f(z)$ is $\widetilde f(\widetilde c(z))$. An isotopy of actual diffeomorphisms lifts from the identity by homotopy lifting ([[thm-homotopy-lifting-for-covering-maps]]) and hence carries bigraded curves through bigraded isotopies; therefore the action on bigraded isotopy classes descends to $G=\pi_0(\mathcal D)$.
**Isotopy.** A **bigraded isotopy** between bigraded curves
$(\widetilde c_0,\widetilde c_1)$ is an isotopy $c_t$ of curves, together with
a continuous family of lifts $\widetilde c_t$ through bigraded curves; the deck
action and the $\mathcal D$-action take bigraded isotopy classes to bigraded isotopy
classes. Two bigraded curves are **isotopic** when such a family exists, and
isotopy relates only bigradings of curves in the same curve-isotopy class.
