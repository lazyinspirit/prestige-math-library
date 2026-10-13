---
id: def-gr-smooth-lorentzian-objects
kind: definition
title: "Smooth time-oriented Lorentzian four-manifolds: the geometric objects of the model"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gr-smooth-covariant-two-tensor-field, def-smooth-manifold, def-derivation-at-a-point-and-tangent-space, def-smooth-vector-field-as-a-tangent-bundle-section, def-countable-choice, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, lem-lorentz-form-has-orthonormal-basis, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-velocity-derivation-of-a-smooth-curve, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-real-power-continuity-and-derivatives, cor-primitives-of-a-continuous-function, cor-mean-value-theorem, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-intermediate-value]
dependency_roles:
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-velocity-derivation-of-a-smooth-curve: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-intermediate-value: mathematical-premise
justified_by: [lem-gr-future-causal-classification-by-a-timelike-field, lem-gr-timelike-fields-define-equal-or-opposite-future-cones]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'the metric again' and 'canonical form of the metric', printed pp. 47-50 (PDF pp. 54-57)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 printed pp. 25-28 (PDF pp. 26-29); Conventions, PDF p. 1"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 3.1.2-3.1.3 printed pp. 93-95 (PDF pp. 100-102)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Definition

Let $M$ be a smooth four-manifold without boundary, so that $M$ is Hausdorff
and second countable and carries a maximal smooth atlas
([[def-smooth-manifold]]). Let $g$ be a smooth covariant $2$-tensor field on $M$
in the sense of [[def-gr-smooth-covariant-two-tensor-field]]. Then $g$ assigns
to every $p\in M$ a bilinear form $g_p:T_pM\times T_pM\to\mathbb R$
([[def-derivation-at-a-point-and-tangent-space]]).

**(a) Lorentzian metric.** The field $g$ is a **Lorentzian metric of signature
$(-,+,+,+)$** on $M$ when it is symmetric and nondegenerate, and at every
$p\in M$ the pair $(T_pM,g_p)$ is a Lorentz vector space of signature
$(-,+,+,+)$ in the sense of [[def-lorentz-form-and-inertia]]: that is, $g_p$ has
inertia $(3,1,0)$, so that some — equivalently every — basis of $T_pM$ in which
the matrix of $g_p$ is diagonal has exactly one negative and three positive
diagonal entries. The pair $(M,g)$ is a **smooth Lorentzian four-manifold** (or
Lorentzian manifold of signature $(-,+,+,+)$). In a smooth chart $(U,x)$ the
**components** of $g$ are the $C^\infty$ functions
$g_{ab}(q)=g_q(\partial_a|_q,\partial_b|_q)$ of
[[def-gr-smooth-covariant-two-tensor-field]], and $g_{ab}=g_{ba}$ by symmetry.
We use indices $a,b,c,d=0,1,2,3$ and the Einstein summation convention, with
components in a chart written as lower-case indexed symbols and equations
between indexed fields understood basis-independently. These conventions are
fixed once for this library and the physical reading of the symbols is recorded
with the framework postulates, separately from this mathematical definition.

**(b) Pointwise causal structure.** For every $p\in M$ the vocabulary of
[[def-causal-classification-of-lorentz-vectors]] applies to the Lorentz vector
space $(T_pM,g_p)$: a tangent vector $v\in T_pM$ is **timelike** when
$g_p(v,v)<0$, **null** when $v\neq0$ and $g_p(v,v)=0$, **spacelike** when
$g_p(v,v)>0$, and **causal** when it is timelike or null. Every nonzero
$v\in T_pM$ has exactly one causal character. The **timelike set**
$T_p:=\{v\in T_pM:g_p(v,v)<0\}$ has exactly two connected components, each
nonempty, open, convex and path-connected; each $g_p$-orthonormal basis
$e_0,e_1,e_2,e_3$ of $T_pM$ satisfies $g_p(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$
for some ordering, so in particular nonzero orthonormal vectors exist at every
point ([[lem-lorentz-form-has-orthonormal-basis]],
[[lem-timelike-cone-has-two-convex-components]]).

**(c) Time orientation.** A **time orientation** of $(M,g)$, also called a
**choice of future cone**, is a smooth vector field $N$ on $M$
([[def-smooth-vector-field-as-a-tangent-bundle-section]], whose tangent-bundle
smooth structure uses the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]]; this is the only use of that axiom in this
definition) such that

$$g_p(N_p,N_p)<0\qquad\text{for every }p\in M .$$

The function $p\mapsto g_p(N_p,N_p)$ is $C^\infty$ because $g$ is a smooth
covariant $2$-tensor field and $N$ a smooth field, so the condition is a
pointwise strict inequality between a smooth function and $0$; since
$g_p(N_p,N_p)<0$ implies $N_p\neq0$, a time orientation is nowhere vanishing.
A **time-oriented smooth Lorentzian four-manifold** is a triple $(M,g,N)$
consisting of a smooth Lorentzian four-manifold and a time orientation $N$.

Given a time orientation $N$ and $p\in M$, the vector $N_p$ is timelike, and we
**define** a nonzero causal vector $v\in T_pM$ to be **future-directed** when
$g_p(v,N_p)<0$ and **past-directed** when $g_p(v,N_p)>0$. The classification of
nonzero causal vectors into exactly these two classes, and its agreement with
the two components of the timelike set (the future component is the component
$C_p^+$ containing $N_p$, and the future causal vectors form
$\operatorname{cl}(C_p^+)\setminus\{0\}$), is proved in
[[lem-gr-future-causal-classification-by-a-timelike-field]]; in particular no
nonzero causal $v$ satisfies $g_p(v,N_p)=0$, so the definition is exhaustive and
mutually exclusive. Replacing $N$ by $-N$ reverses every future/past label, and
two time orientations $N,N'$ determine the same future-directed causal vectors
at every point where $g_p(N_p,N'_p)<0$, while they determine opposite ones
where $g_p(N_p,N'_p)>0$, by
[[lem-gr-timelike-fields-define-equal-or-opposite-future-cones]]; that lemma
also shows the sign of $p\mapsto g_p(N_p,N'_p)$ is constant on every connected
component of $M$.

**(d) The inverse metric.** Because $g_p$ is nondegenerate, it induces at each
$p$ an isomorphism $\flat_p:T_pM\to T_p^*M$, $v\mapsto g_p(v,\cdot)$, and an
inverse metric $g_p^{-1}$ on the dual space; the inverse metric, the musical
isomorphisms and the components $g^{ab}$ are defined separately on this page,
where the smoothness of those components is also proved. Neither construction
uses any choice principle beyond the one already recorded in (c).


**(e) Smooth timelike curves and their scalar normalization.** Before using
these quantities in the physical conventions, fix a positive real scaling
parameter $c$ (with no physical meaning or dimension in this mathematical
item). A **smooth future timelike curve** is a smooth map $\gamma:I\to M$
from a nonempty open real interval $I$ ([[def-interval]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]) whose velocity derivation
$\gamma'(s)\in T_{\gamma(s)}M$
([[def-velocity-derivation-of-a-smooth-curve]]) satisfies
$g(\gamma',\gamma')<0$ and $g(\gamma',N)<0$ at every $s\in I$.
In a chart its components are $d(x^a\circ\gamma)/ds$, $a=0,1,2,3$.
For a supplied base point $s_0\in I$ and additive constant $\tau_0\in\mathbb R$
define

$$h(s):=\sqrt{-g_{\gamma(s)}(\gamma'(s),\gamma'(s))},\qquad \tau(s):=\tau_0+\frac1c\int_{s_0}^{s}h(r)\,dr,\qquad U(s):=\frac{c\gamma'(s)}{h(s)}.$$

The integral is oriented when $s<s_0$. The function $\tau$ is called
**proper time** for this scaling and $U$ the **four-velocity** of the smooth
curve; its increment times $c$ is the Lorentzian length. The well-definedness
proof below shows $\tau'>0$, that $\tau:I\to\tau(I)$ is a smooth
diffeomorphism, and that $U$ is the velocity of $\gamma\circ\tau^{-1}$.
Thus $g(U,U)=-c^2$ and $U$ is future timelike. This introduces the smooth
case before any physical unit reading; the later worldline definition extends
it to its stated $C^k$, endpoint and piecewise-$C^1$ classes. It asserts no
clock coupling, motion law or physical value of $c$.

**Convention and scope.** The physical reading of a smooth time-oriented
Lorentzian four-manifold as a classical spacetime model, and the domain in which
that reading is adopted, are recorded in the framework postulate
`post-gr-spacetime-and-classical-domain`; the words spacetime and event carry no
mathematical content beyond this definition, and this item asserts no claim
about nature. The dimension $4$ and the absence of boundary are part of the
data; nothing in the definition assumes that $M$ is nonempty or connected, and
no completeness, extendibility or maximality property of $(M,g)$ is asserted.


## Facts & Assumptions

**Given:** The Lorentzian data of the Definition, a smooth future timelike curve $\gamma:I\to M$, and supplied $c>0$, $s_0\in I$, $\tau_0\in\mathbb R$.

[F1] Coordinates of smooth maps and their finite sums, products and compositions are smooth; the curve velocity has components $d(x^a\circ\gamma)/ds$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-velocity-derivation-of-a-smooth-curve]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F2] For every real $\alpha$, $x^\alpha$ is continuous on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]). Repeated application gives, for every integer $m\ge0$, $D^m(x^\alpha)=\bigl(\prod_{j=0}^{m-1}(\alpha-j)\bigr)x^{\alpha-m}$, where the empty product is $1$: differentiating the $m$th formula gives the $(m+1)$st. Each right side is continuous by the same supplier, so $x^\alpha$ is smooth; in particular $\sqrt{x}=x^{1/2}$ is smooth on $(0,\infty)$.  A continuous function on a real interval has the primitive $s\mapsto\int_{s_0}^{s}h$ ([[cor-primitives-of-a-continuous-function]]).

[F3] The mean value theorem applies on each compact subinterval of $I$ ([[cor-mean-value-theorem]]), and a smooth map with nonzero derivative has a smooth local inverse ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]). The intermediate value theorem gives every intermediate image value ([[thm-intermediate-value]]). Velocities transform by the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F4] In an orthonormal basis a Lorentz form has exactly two open convex timelike components and the stated causal closures ([[lem-timelike-cone-has-two-convex-components]]).

## Proof

1.1 For any two ordered bases of a four-dimensional real vector space their coordinate change is an invertible matrix $B$. In the Euclidean maximum norm, $\|Bz\|_\infty\le C\|z\|_\infty$ with $C=\max_i\sum_j|B_{ij}|$; applying the same estimate to $B^{-1}$ proves continuity in both directions. Consequently the Euclidean topologies transported by arbitrary bases coincide, so open sets, connected components, paths and closures are independent of the basis. Applying this to an orthonormal basis transports all the component and closure conclusions of [F4] to any basis of $T_pM$. Linear changes of coordinates also preserve convexity. This supplies the general basis argument needed in (b)-(c), independently of the narrower orthonormal-basis argument in the draft SR exposition. [F4, algebra]

1.2 On any chart traversed locally by $\gamma$, $-g(\gamma',\gamma')=-\sum_{a,b=0}^3(g_{ab}\circ\gamma)(x^a\circ\gamma)'(x^b\circ\gamma)'$ is smooth by [F1] and strictly positive by the timelike hypothesis. Thus $h$ is a well-defined smooth positive function on $I$ by [F2]. Every closed subinterval with endpoints $s_0,s$ lies in $I$, so [F2] defines the integral and gives $\tau'=h/c>0$. Since this derivative is smooth, $\tau$ is smooth. [given, F1, F2, algebra]

2.1 If $a<b$ in $I$, [F3] gives $\tau(b)-\tau(a)=\tau'(r)(b-a)>0$ for some $r\in(a,b)$, so $\tau$ is injective. At every $s$ its nonzero derivative supplies a smooth inverse on an open neighbourhood of $\tau(s)$ by [F3]; the union of these image neighbourhoods is $\tau(I)$, which is open. By injectivity every local inverse equals the set-theoretic inverse on its domain, so they agree on overlaps and make $\tau^{-1}$ smooth globally. The image is an interval: continuity and strict monotonicity put every value between $\tau(a)$ and $\tau(b)$ in the image by the intermediate value property. No simultaneous choices of neighbourhoods are required. [step 1.2, F3, algebra]

3.1 In a chart, [F3] gives $(x^a\circ\gamma\circ\tau^{-1})'(\tau(s))=(x^a\circ\gamma)'(s)/\tau'(s)=c(x^a\circ\gamma)'(s)/h(s)$; equality of coordinate components gives velocity $U(s)$. Bilinearity then gives $g(U,U)=c^2g(\gamma',\gamma')/h^2=-c^2$ and $g(U,N)=(c/h)g(\gamma',N)<0$. The same coordinate expressions show $U$ is a smooth vector field along the curve. Replacing $s_0$ or $\tau_0$ changes only the additive constant by the primitive uniqueness of [F2]. These constructions are therefore well defined with exactly the supplied data and assumptions. [step 1.2, step 2.1, F1, F2, F3, algebra] ∎
