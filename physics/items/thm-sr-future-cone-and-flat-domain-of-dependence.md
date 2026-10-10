---
id: thm-sr-future-cone-and-flat-domain-of-dependence
kind: theorem
title: "Future causal reachability, absence of causal loops, time monotonicity and the straight-worldline proper-time maximum"
status: draft
origin: pipeline
domain: mathematics
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-sr-affine-minkowski-model, def-affine-space-and-displacement, def-time-orientation-and-future-causal-sets, def-causal-classification-of-lorentz-vectors, def-sr-regular-causal-curve-and-worldline, def-sr-proper-time, def-inertial-frame-and-inertial-chart, def-spatial-euclidean-structure-of-an-inertial-frame, def-euclidean-inner-product, def-interval, def-oriented-integral, def-vector-valued-derivative-and-integral, cor-vector-valued-ftc-and-lipschitz-bound, thm-norm-inequality-for-the-vector-valued-integral, thm-continuous-implies-integrable, thm-monotonicity-of-the-integral, thm-linearity-of-the-integral, thm-additivity-over-subintervals, thm-nonnegative-continuous-with-zero-integral-vanishes, thm-algebra-of-continuous-functions, thm-real-power-continuity-and-derivatives, def-derivative, def-lorentz-boost, def-lorentz-map-and-lorentz-group, lem-boost-is-proper-orthochronous-with-inverse, def-linear-isomorphism-and-invertible-linear-map, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-sr-proper-orthochronous-lorentz-algebra, def-lorentz-form-and-inertia, lem-sr-weak-piecewise-causal-integrability, def-sr-piecewise-proper-time, cor-zero-derivative-implies-constant, cor-mean-value-theorem, thm-intermediate-value]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-affine-space-and-displacement: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  thm-sr-proper-orthochronous-lorentz-algebra: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  lem-sr-weak-piecewise-causal-integrability: mathematical-premise
  def-sr-piecewise-proper-time: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-intermediate-value: mathematical-premise
dependency_level: 11
aliases: []
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 1.3.2 pp. 22-23 (light-rectangles as causal diamonds with invariant area), Section 2.1 pp. 43-45 (the modest causality postulate P1 and the limits of a general causality principle), Section 4.7 pp. 110-113 (superluminal transmission of information, the tachyonic antitelephone attributed to Tolman, reported tachyon searches); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 5-7 (light cones; timelike, null and spacelike separation; no coordinate-independent future for a spacelike-separated event), Chapter 4 pp. 124-127 (no signals faster than light; information flows only along timelike or null trajectories; future domain of dependence; Misner space with closed timelike curves as a warning about other topologies); PDF page = printed page + 7"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision): Sections 2.1-2.3 pp. 25-30 (Minkowski metric (2.6) and inertial frames; timelike, null, spacelike and causal vectors with the light-cone double cone and its two disconnected causal sets; timelike and causal curves; proper time (2.19); curves of extremal proper time, straight lines in inertial frames and the unproved maximization statement); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space with
the reachability objects $\le$, $<$, $J^+$, $I^+$ and $R^+$ of
[[def-sr-causal-reachability-in-affine-minkowski-space]].

**(a) Displacement of a future causal path.** Let $a<b$ be real numbers and let
$x:[a,b]\to A$ be a piecewise $C^1$ future causal path with $D:=x(b)-x(a)$. Then
$D\in\overline{C^+}$. If $x$ has a future timelike one-sided tangent at some
point of $[a,b]$, then $D\in C^+$. If $x$ is nonconstant, then $D\ne 0$.

**(b) Reachability and straight segments.** The relation $\le$ is reflexive and transitive, and $J^+(p)=R^+(p)$, and for $q\ne p$
one has $q\in J^+(p)$ if and only if the straight path
$s\mapsto p+s(q-p)$, $s\in[0,1]$, is a future causal path; moreover
$$I^+(p)=\{q:\text{the straight path from }p\text{ to }q\text{ is future timelike}\} =\{q:q\text{ is reachable from }p\text{ by a piecewise }C^1\text{ future causal path having a future timelike one-sided tangent at some point}\},$$
and $p$ is in neither of these two sets.

**(c) No causal loops.** If $p\le q$ and $q\le p$ then $p=q$; equivalently
there is no nonconstant piecewise $C^1$ future causal path $x:[a,b]\to A$ with
$x(b)=x(a)$.

**(d) Time monotonicity.** For the chart $x$ of every inertial frame and every
piecewise $C^1$ future causal path $y:[a,b]\to A$, the composition $x^0\circ y$
is nondecreasing, and if $y$ is nonconstant on a subinterval $[a',b']$ of
$[a,b]$ then $(x^0\circ y)(b')>(x^0\circ y)(a')$; in particular every inertial
frame agrees that a nonconstant future causal path does not go backwards in
coordinate time.

**(e) Straight-worldline maximum.** Let $p,q$ be events with $q\in I^+(p)$, put
$D:=q-p$ and $T:=\sqrt{-\eta(D,D)}>0$. Then for every piecewise $C^1$ future
timelike worldline $y:[a,b]\to A$ with $y(a)=p$ and $y(b)=q$, the elapsed
proper time
$$\Delta\tau(y)=c^{-1}\sum_i\int_{(a_i,b_i)}\sqrt{-\eta(y',y')},$$
defined by the finite improper-piece sum of
[[def-sr-piecewise-proper-time]] on the weak $C^1$ pieces
$a=a_1<b_1=a_2<\dots<b_m=b$, is at most $T/c$; equality holds if and only if
the image of $y$ is the straight segment from $p$ to $q$ and $y$ traverses it
with a strictly increasing time coordinate, that is, $y$ is a strictly
increasing reparametrization of $s\mapsto p+sD$.

**(f) Invariance.** For every proper orthochronous affine Lorentz map $F$ of the
model one has $F(J^+(p))=J^+(F(p))$ and $F(I^+(p))=I^+(F(p))$ for every event
$p$, and $p\le q$ if and only if $F(p)\le F(q)$ for all events $p,q$.

**(g) Scope.** The theorem concerns the affine model: it attaches no physical
interpretation to $\le$, $J^+$, $I^+$ and $R^+$, asserts nothing about partial
differential equations, propagation of particular fields or differentiability
beyond piecewise $C^1$, and uses no choice principle.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and the objects $\le$, $<$, $J^\pm$, $I^\pm$, $R^+$ of [[def-sr-causal-reachability-in-affine-minkowski-space]]; a fixed inertial frame with chart $x$; events $p,q\in A$ with $q\in I^+(p)$, $D=q-p$, $T=\sqrt{-\eta(D,D)}>0$; a piecewise $C^1$ future timelike worldline $y:[a,b]\to A$ with $y(a)=p$, $y(b)=q$ and weak pieces $a=a_1<b_1=a_2<\dots<b_m=b$, whose partition knots are $s_0:=a$ and $s_i:=b_i$ for $1\le i\le m$.

[L1] Weak piecewise causal integrability: for a piecewise $C^1$ curve with nonzero future causal one-sided tangents and any inertial chart with coordinates $(y^0,z)$, $z\in\mathbb R^3$, one has $y^{0'}\ge|z'|\ge0$ and $y^{0'}>0$ on the open pieces; every coordinate derivative is absolutely improperly Riemann integrable with signed improper integral equal to the corresponding endpoint increment; $f=\sqrt{(y^{0'})^2-|z'|^2}=\sqrt{-\eta(x',x')}$ has finite nonnegative improper integrals with $\int f\le\int y^{0'}=y^0(\beta)-y^0(\alpha)$ on each piece; the improper values are independent of the intermediate point and additive under subdivision and the finite piece sums are independent of the admissible partition; $D=x(b)-x(a)$ is nonzero future causal with $D^0>0$ and $|D_s|\le D^0$ in every inertial chart; if some interior or one-sided endpoint tangent is future timelike then $D$ is future timelike; coordinate time is strictly increasing on every nondegenerate subinterval; no derivative-limit hypothesis and no choice principle is used ([[lem-sr-weak-piecewise-causal-integrability]]).

[L2] Total proper time of a piecewise $C^1$ future timelike worldline is $\Delta\tau=c^{-1}\sum_i\int_{(a_i,b_i)}g_i$ with $g_i=\sqrt{-\eta(y',y')}>0$ the improper integrals of [L1]; it is independent of the partition, additive over concatenation, positive, and carries exactly one factor $c^{-1}$; under the corner hypothesis (finite derivative limits) the improper integrals are ordinary Riemann integrals ([[def-sr-piecewise-proper-time]], [[def-sr-proper-time]]).

[L3] Cone description and coordinate criterion: $C^+=\{v:v^0>|v_s|\}$, $\overline{C^+}=\{v:v^0\ge|v_s|\}$, $C^-=\{v:-v^0>|v_s|\}$, $\overline{C^-}=\{v:-v^0\ge|v_s|\}$, every nonzero $v\in\overline{C^+}$ satisfies $v^0>0$, $v$ is future null exactly when $|v_s|=v^0>0$, and $q\in J^+(p)$ iff $D^0\ge|D_s|$, $q\in I^+(p)$ iff $D^0>|D_s|$ for $D=x(q)-x(p)$; the closed cones are convex cones with $\overline{C^+}\cap\overline{C^-}=\{0\}$ and a causal vector is future or past but not both ([[def-time-orientation-and-future-causal-sets]]), while the two displayed descriptions give $\overline{C^-}=-\overline{C^+}$. Finite sums of vectors in $\overline{C^+}$ remain in that cone, and a sum with a summand in $C^+$ lies in $C^+$ ([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]).

[L4] Reachability: $p\le q$ iff $q-p\in\overline{C^+}$ and $p<q$ iff $q-p\in C^+$; $J^+(p)=p+\overline{C^+}$, $I^+(p)=p+C^+$ and the past versions; a piecewise $C^1$ future causal path is a piecewise $C^1$ curve whose one-sided tangents at every point are future causal; $q$ is reachable from $p$ by a future causal path when $p=q$ or when a piecewise $C^1$ future causal path joins them, and $R^+(p)$ is the set of such $q$ ([[def-sr-causal-reachability-in-affine-minkowski-space]]).

[L5] Coordinates: in the ordered basis $(e_0,e_1,e_2,e_3)$ of an inertial frame one has $\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)$, so for $v=\sum_a v^ae_a$, $w=\sum_a w^ae_a$ one has $\eta(v,w)=-v^0w^0+\delta(v_s,w_s)$ with $v_s= v^1e_1+v^2e_2+v^3e_3$ and the positive-definite restriction $\delta=\eta|_S$; in particular $\eta(v,v)=-(v^0)^2+|v_s|^2$ and $|v_s|^2=\delta(v_s,v_s)=\sum_{i=1}^3(v^i)^2$ ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-lorentz-form-and-inertia]], [[def-euclidean-inner-product]]).

[L6] Curves: differentiability, $C^1$ and piecewise $C^1$ regularity with finite one-sided difference-quotient tangents, and the tangent $x'(s)$ of a curve in $A$; for the straight path $\sigma(s)=p+sD$ one has $\sigma(s+h)-\sigma(s)=hD$, so $\sigma'\equiv D$; the path intervals here are the nondegenerate compact intervals $[a,b]$ with $a<b$ of [[def-interval]] ([[def-sr-regular-causal-curve-and-worldline]], [[def-affine-space-and-displacement]], [[def-sr-affine-minkowski-model]], [[def-derivative]]).

[L7] Boosts: for $\beta\in\mathbb R^3$ with Euclidean norm $|\beta|<1$, the passive boost $B(\beta):V\to V$ sends a vector with coordinates $(x^0,x_{\mathrm{vec}})$, $x_{\mathrm{vec}}\in\mathbb R^3$, to a vector whose time coordinate is $x'^0=\gamma(x^0-\beta\cdot x_{\mathrm{vec}})$, where $\cdot$ is the Euclidean scalar product and $\gamma=(1-|\beta|^2)^{-1/2}$; $B(0)=\operatorname{id}_V$. The boost is a proper orthochronous Lorentz map with $B(\beta)^{-1}=B(-\beta)$; if $u$ is future unit timelike with coordinates $(u^0,u_{\mathrm{vec}})$ then $B(\beta)u=e_0$ for $\beta=u_{\mathrm{vec}}/u^0$ ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]]).

[L8] Lorentz maps: an affine Lorentz map has the form $F(r)=F(p_0)+L(r-p_0)$ with $L$ a linear Lorentz map, uniquely determined, satisfying $\eta(Lv,Lw)=\eta(v,w)$; every linear Lorentz map is a bijection, $L(C^+)$ is $C^+$ or $C^-$, and every element of $SO^+(V,\eta)$ preserves $\eta$, the causal character of every nonzero vector, the future and past closed cones, the orientation and the oriented volume form; the composition and inverse of affine Lorentz maps are affine Lorentz maps ([[def-lorentz-map-and-lorentz-group]], [[thm-sr-proper-orthochronous-lorentz-algebra]], [[def-linear-isomorphism-and-invertible-linear-map]], [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L9] Integral toolkit: the oriented integral and vector-valued derivative and integral; the fundamental theorem and Lipschitz bound $\|\int f\|\le\int\|f\|$; continuity implies Riemann integrability on compact intervals; linearity, monotonicity and additivity over subintervals; a nonnegative continuous function with vanishing integral vanishes; the algebra of continuous functions; continuity of real powers ([[def-oriented-integral]], [[def-vector-valued-derivative-and-integral]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-continuous-implies-integrable]], [[thm-monotonicity-of-the-integral]], [[thm-linearity-of-the-integral]], [[thm-additivity-over-subintervals]], [[thm-nonnegative-continuous-with-zero-integral-vanishes]], [[thm-algebra-of-continuous-functions]], [[thm-real-power-continuity-and-derivatives]]).

[L10] Vector classification: $v$ is timelike, null or spacelike according as $\eta(v,v)$ is negative, zero with $v\ne0$, or positive, and the zero vector is none of these; a function with zero derivative on an interval is constant on it ([[def-causal-classification-of-lorentz-vectors]], [[cor-zero-derivative-implies-constant]], [[def-derivative]]).

[L11] Mean value theorem: for reals $a_0<b_0$ and a real function $f$ continuous on $[a_0,b_0]$ and differentiable at every point of $(a_0,b_0)$ there is $\xi\in(a_0,b_0)$ with $f(b_0)-f(a_0)=f'(\xi)(b_0-a_0)$ ([[cor-mean-value-theorem]]).

[L12] Intermediate value theorem: if $f:[a,b]\to\mathbb R$ is continuous and $f(a)\le r\le f(b)$, then $f(s)=r$ for some $s\in[a,b]$ ([[thm-intermediate-value]]).

## Proof

**Proof technique:** direct.

The steps are grouped in citation order: (a) first; then the two reachability characterizations of (b) and the time monotonicity (d); then the loop statement (c), the normalization for (e) and the invariance (f); then the proper-time inequality and its equality case in (e).

1.1 Let $a<b$ and let $x:[a,b]\to A$ be a piecewise $C^1$ future causal path with $D=x(b)-x(a)$, and fix an inertial chart, writing $\mathrm{x}=(\mathrm{x}^0,z)$ for the coordinate path of $x$; by [L6] the coordinate path is piecewise $C^1$ with the same partition and with one-sided tangents $\mathrm{x}'=E^{-1}x'$, which are nonzero future causal because $x'$ is and $E^{-1}$ is linear with the coordinate criterion of [L3] read in this basis. Applying [L1] to the coordinate path on each piece: every coordinate derivative is absolutely improperly integrable with signed improper integral equal to the corresponding endpoint increment, so the coordinates of $D$ are the sums of these increments and $D\in\overline{C^+}$ by the description $\overline{C^+}=\{v:v^0\ge|v_s|\}$ of [L3]; indeed [L1] gives $D$ nonzero future causal with $D^0>0$ and $|D_s|\le D^0$. If some one-sided tangent of $x$ is future timelike, [L1] gives $D$ future timelike, that is $D\in C^+$ by [L3]. In particular $D\ne0$ for every such path with $a<b$, so the third clause of (a) holds; this is (a). [given, L1, L3, L6]

2.1 For (b) first: $p\le p$ because $p-p=0\in\overline{C^+}$; if $p\le q$ and $q\le r$, then $r-p=(q-p)+(r-q)\in\overline{C^+}$ by [L3], so $p\le r$. Thus $\le$ is reflexive and transitive. Also $p\in R^+(p)$ by [L4] and $p\in J^+(p)$ because $0\in\overline{C^+}$ by [L3]. If $q\in R^+(p)$ with $q\ne p$, then a piecewise $C^1$ future causal path joins $p$ to $q$, so its displacement $D=q-p$ lies in $\overline{C^+}$ by step 1.1, that is $q\in J^+(p)$ by [L4]; hence $R^+(p)\subseteq J^+(p)$. Conversely let $q\in J^+(p)$ with $q\ne p$; then $D=q-p$ is a nonzero element of $\overline{C^+}$, hence future causal by [L3], and the straight path $\sigma(s)=p+sD$, $s\in[0,1]$, has the constant tangent $\sigma'\equiv D$ by [L6], a nonzero future causal vector, so $\sigma$ is a piecewise $C^1$ future causal path from $p$ to $q$; therefore $q\in R^+(p)$ and the straight path from $p$ to $q$ is a future causal path. Conversely, if the straight path from $p$ to $q$ with $q\ne p$ is a future causal path, its constant tangent $D$ is future causal and nonzero, so $D\in\overline{C^+}$ and $q\in J^+(p)$ by [L4]; thus $J^+(p)=R^+(p)$ and the straight-segment criterion holds for $q\ne p$. [step 1.1, L3, L4, L6]

2.2 For (b) second: if $q\in I^+(p)$ then $D=q-p\in C^+$ by [L4], so $D$ is future timelike and nonzero, and the straight path from $p$ to $q$ has the constant tangent $D$, so it is a future timelike path; conversely, if the straight path from $p$ to $q$ is future timelike then its tangent $D$ is future timelike, that is $D\in C^+$, so $q\in I^+(p)$ by [L4]: this proves the first displayed equality. For the second, every $q\in I^+(p)$ is reachable from $p$ by the straight path, which has a future timelike tangent at every point, so $I^+(p)$ is contained in the third set; conversely, if $q$ is reachable from $p$ by a piecewise $C^1$ future causal path having a future timelike one-sided tangent at some point, then $q\ne p$ or $q=p$; in the first case step 1.1 gives $D\in C^+$, so $q\in I^+(p)$, while in the second case there is a path from $p$ to itself with a future timelike tangent, which step 1.1 turns into $0\in C^+$, a contradiction; hence the third set is contained in $I^+(p)$. Finally $p\notin I^+(p)$ because $0\notin C^+$ by [L4], and $p$ is not in the first or third set because the straight path from $p$ to $p$ has the constant tangent $0$, which is not future timelike, and a path from $p$ to itself with a future timelike tangent cannot exist as just shown. [step 1.1, L3, L4, L6]

2.3 For (d): let $[a',b']\subseteq[a,b]$ and let $y$ be a piecewise $C^1$ future causal path. If $a'=b'$, the coordinate increment is zero. Otherwise the restriction $y|_{[a',b']}$ is again a piecewise $C^1$ future causal path, so step 1.1 gives $D':=y(b')-y(a')\in\overline{C^+}$; writing $\mathrm{y}$ for the coordinate path of $y$ in the chart $x$, one has $(\mathrm{x}^0\circ y)(b')-(\mathrm{x}^0\circ y)(a')=D'^0$ by [L6], and $D'^0\ge|D'_s|\ge0$ by [L3]; hence $x^0\circ y$ is nondecreasing. If $y$ is nonconstant on $[a',b']$ then $y|_{[a',b']}$ is nonconstant, so step 1.1 gives $D'\ne0$, and a nonzero element of $\overline{C^+}$ has positive time coordinate by [L3], that is $(\mathrm{x}^0\circ y)(b')>(\mathrm{x}^0\circ y)(a')$; this is (d). [step 1.1, L3, L6]

3.1 For (c): if $p\le q$ and $q\le p$ then $D=q-p\in\overline{C^+}$ and $p-q=-D\in\overline{C^+}$, so $D\in\overline{C^-}=-\overline{C^+}$ and $D\in\overline{C^+}\cap\overline{C^-}=\{0\}$ by [L3], that is $p=q$. Conversely, if antisymmetry fails, that is $p\ne q$ with $p\le q$ and $q\le p$, then step 2.1 makes the straight paths from $p$ to $q$ and from $q$ to $p$ future causal, and their concatenation $z:[0,2]\to A$, $z(s)=p+s(q-p)$ for $s\in[0,1]$ and $z(s)=q+(s-1)(p-q)$ for $s\in[1,2]$, is a closed piecewise $C^1$ future causal path with $z(0)=z(2)=p$ and $z(1)=q\ne p$; conversely, if a nonconstant closed piecewise $C^1$ future causal path $x:[a,b]\to A$ with $x(b)=x(a)=p$ exists, choose $s\in(a,b)$ with $x(s)\ne p$, which exists because $x$ is nonconstant on $[a,b]$ and $x(a)=x(b)$; applying step 1.1 to the restrictions to $[a,s]$ and $[s,b]$ gives $x(s)-p\in\overline{C^+}$ and $p-x(s)\in\overline{C^+}$, that is $p\le x(s)$ and $x(s)\le p$ with $x(s)\ne p$, so antisymmetry fails. Hence the antisymmetry of $\le$ is equivalent to the absence of a nonconstant closed piecewise $C^1$ future causal path; this is (c). [step 1.1, step 2.1, L3, L4, L6]

3.2 For (e), normalization: since $q\in I^+(p)$, step 2.2 says the straight path from $p$ to $q$ is future timelike; in particular $D=q-p$ is a future timelike vector, so $\eta(D,D)<0$ and $T=\sqrt{-\eta(D,D)}>0$, and $D\in C^+$ by [L4]. Choose the inertial frame with origin event $p$, so that $x(p)=0$ and the coordinates of $D$ in this frame are those of $x(q)$. The vector $v:=D/T$ satisfies $\eta(v,v)=\eta(D,D)/T^2=-1$ and $v\in C^+$ (a positive multiple of a future timelike vector), so $v$ is future unit timelike; write $v=(v^0,v_{\mathrm{vec}})$ in coordinates, so that $v^0>0$, $|v_{\mathrm{vec}}|<v^0$ and $(v^0)^2-|v_{\mathrm{vec}}|^2=1$ by [L3] and [L5]. Put $\beta:=v_{\mathrm{vec}}/v^0$; then $|\beta|<1$ and $B:=B(\beta)$ is proper orthochronous by [L7], so $Bv$ is future unit timelike, and its time coordinate is $\gamma(v^0-\beta\cdot v_{\mathrm{vec}})=\gamma\bigl((v^0)^2-|v_{\mathrm{vec}}|^2\bigr)/v^0=\gamma/v^0$ with $\gamma=(1-|\beta|^2)^{-1/2}=v^0$; hence $(Bv)^0=1$, and since $\eta(Bv,Bv)=-1$ the spatial part of $Bv$ satisfies $|(Bv)_{\mathrm{vec}}|^2=((Bv)^0)^2-1=0$ by [L5], so $Bv=e_0$ and $BD=T\,e_0$. The ordered basis $e'_a:=B^{-1}e_a$ is $\eta$-orthonormal, future and positively oriented because $B^{-1}$ is a proper orthochronous Lorentz map and such maps preserve $\eta$, the cone $C^+$, the orientation and the volume form by [L7] and [L8], so $(p;e'_0,e'_1,e'_2,e'_3)$ is an inertial frame; its chart $x_1$ satisfies $x_1=M_B\circ x$ (same origin $p$), where $M_B:=E^{-1}\circ B\circ E$, because with $E_1(u)=\sum_a u^ae'_a=B^{-1}\bigl(E(u)\bigr)$ one has $E_1^{-1}=E^{-1}B$ and $x_1(r)=E_1^{-1}(r-p)=E^{-1}\bigl(B(r-p)\bigr)=E^{-1}\bigl(B(E(x(r)))\bigr)=M_Bx(r)$ for the matrix $M_B$ of $B$ by [L8] and [L6]; therefore $x_1(q)-x_1(p)=E^{-1}(BD)=(T,0,0,0)$. [step 2.2, L3, L4, L5, L6, L7, L8]

3.3 For (f): let $F$ be a proper orthochronous affine Lorentz map, so $F(r)=F(p_0)+L(r-p_0)$ with $L$ a linear Lorentz map, and $F(r+v)=F(r)+Lv$ for all $r\in A$ and $v\in V$ by [L8]. For a piecewise $C^1$ curve $z:[a,b]\to A$ the composition $F\circ z$ is piecewise $C^1$ on the same partition with $(F\circ z)'=L\circ z'$: the difference quotients satisfy $\bigl(F(z(s+h))-F(z(s))\bigr)/h=L\bigl((z(s+h)-z(s))/h\bigr)$, and $L$ is continuous and linear, so the limit is $L(z'(s))$ by [L6] and [L8]. Since $L$ and $L^{-1}$ preserve the causal character of every nonzero vector and the cone $C^+$ by [L8], the composition $F\circ z$ is a future causal path, respectively a future timelike path, exactly when $z$ is; with the definition of $R^+$ in [L4] this gives $F(R^+(p))=R^+(F(p))$, and with $J^+=R^+$ from step 2.1 it gives $F(J^+(p))=J^+(F(p))$. For the chronological future, $q\in I^+(p)$ iff the straight path from $p$ to $q$ is future timelike by step 2.2; its image under $F$ is the straight path from $F(p)$ to $F(q)$ with constant tangent $L(q-p)$ by [L6], and $L(q-p)$ is future timelike exactly when $q-p$ is by [L8], so $F(I^+(p))=I^+(F(p))$ (the reverse inclusion follows by applying the same argument to $F^{-1}$, which is again a proper orthochronous affine Lorentz map). Finally $F(q)-F(p)=L(q-p)$, so $q-p\in\overline{C^+}$ iff $L(q-p)\in\overline{C^+}$ by the cone preservation, that is $p\le q$ iff $F(p)\le F(q)$; this is (f). [step 2.1, step 2.2, L4, L6, L8]

4.1 For the inequality of (e): let $y:[a,b]\to A$ be a piecewise $C^1$ future timelike worldline with $y(a)=p$ and $y(b)=q$, with weak pieces $a=a_1<b_1=\dots<b_m=b$, and let $y_1:=x_1\circ y$ be its coordinate path in the chart $x_1$ of step 3.2. By [L6] and the affinity of $x_1$ from step 3.2, $y_1$ is piecewise $C^1$ on the same partition with coordinate tangents $y_1'=E^{-1}(B y')$; the vectors $B y'\in V$ are future timelike because $y'$ is and $B$ preserves $\eta$ and the cone by [L8]; writing $y_1=(y_1^0,z_1)$ with spatial part $z_1$, [L3] gives $y_1^{0'}\ge|z_1'|\ge0$ and $y_1^{0'}>0$ on each open piece. For such numbers $0\le|z_1'|\le y_1^{0'}$ one has $\sqrt{(y_1^{0'})^2-|z_1'|^2}\le y_1^{0'}$ with equality exactly when $z_1'=0$. Applying [L1] to the coordinate path $y_1$ on each piece $(a_i,b_i)$ gives finite nonnegative improper integrals with $\int_{(a_i,b_i)}\sqrt{(y_1^{0'})^2-|z_1'|^2}\le\int_{(a_i,b_i)}y_1^{0'}=y_1^0(b_i)-y_1^0(a_i)$, and summing over the finitely many pieces [L2] and telescoping across the continuous junctions give $c\,\Delta\tau(y)=\sum_i\int_{(a_i,b_i)}\sqrt{(y_1^{0'})^2-|z_1'|^2}\le y_1^0(b)-y_1^0(a)=x_1^0(q)-x_1^0(p)=T$, because $x_1(q)-x_1(p)=(T,0,0,0)$ by step 3.2; hence $\Delta\tau(y)\le T/c$. [step 1.1, step 3.2, L1, L2, L3, L6, L8, algebra]

5.1 For the equality case of (e): $\Delta\tau(y)=T/c$ holds exactly when equality holds in every piece of step 4.1, that is when $\int_{(a_i,b_i)}h_i=0$ for the nonnegative continuous function $h_i:=y_1^{0'}-\sqrt{(y_1^{0'})^2-|z_1'|^2}$ on each open piece. If $h_i(s_0)>0$ at some point of an open piece, continuity gives a compact subinterval $[u,v]$ of that piece on which $h_i\ge h_i(s_0)/2>0$, so the improper integral dominates the proper integral over $[u,v]$ and is at least $h_i(s_0)(v-u)/2>0$ by [L9], a contradiction; hence $h_i\equiv0$ and $z_1'=0$ on each open piece. By [L10] each spatial coordinate of $y_1$ is constant on each open piece, and by continuity of $y_1$ the spatial coordinates are constant on all of $[a,b]$; since $x_1(p)=0$ and $x_1(q)=(T,0,0,0)$, the constant is $0$, so $y_1(s)=(\sigma(s),0,0,0)$ for the continuous function $\sigma:=y_1^0$ on $[a,b]$, which is $C^1$ on each open piece with $\sigma'=y_1^{0'}>0$; for $s<t$ in $[a,b]$ the increment $\sigma(t)-\sigma(s)$ is the sum of the increments $\sigma(\min(t,s_k))-\sigma(\max(s,s_{k-1}))$ over the finitely many pieces meeting $[s,t]$, each summand is nonnegative by [L11] applied on the closed piece (both arguments lie in that closed piece, where $\sigma$ is continuous, and $\sigma'>0$ on its interior), and at least one summand is strictly positive because its two arguments differ as $s<t$; hence $\sigma$ is strictly increasing, with $\sigma(a)=0$ and $\sigma(b)=T$; by [L12], for every $r\in[0,T]$ some $s\in[a,b]$ satisfies $\sigma(s)=r$, so $\sigma$ maps onto $[0,T]$. Therefore $y(s)=x_1^{-1}(\sigma(s),0,0,0)=p+\frac{\sigma(s)}{T}D$ by [L6], that is $y$ is the strictly increasing reparametrization $s\mapsto p+\varphi(s)D$ of the straight segment from $p$ to $q$, where $\varphi:=\sigma/T$ is a continuous strictly increasing surjection $[a,b]\to[0,1]$, $C^1$ on the open pieces with $\varphi'>0$. Conversely, if $y(s)=p+\varphi(s)D$ with such a $\varphi$, then $y'=\varphi'D$ on each open piece, so $\eta(y',y')=\varphi'^2\eta(D,D)=-(\varphi'T)^2$ and the density is $\varphi'T$; hence $c\,\Delta\tau(y)=T\sum_i\int_{(a_i,b_i)}\varphi'=T\sum_i\bigl(\varphi(b_i)-\varphi(a_i)\bigr)=T\bigl(\varphi(b)-\varphi(a)\bigr)=T$ by [L2] and [L9], giving $\Delta\tau(y)=T/c$ exactly for the strictly increasing reparametrizations of the straight segment: this is the equality case of (e). [step 3.2, step 4.1, L1, L2, L6, L9, L10, L11, L12] ∎

The scope clause (g) is a delimitation of the statement: the argument uses only the affine model, the fixed time orientation, one explicit boost and integrals of continuous functions on compact interior truncations with finite improper endpoint limits, and it introduces no partial differential equation, no field propagation and no differentiability beyond the piecewise $C^1$ class; no choice principle is used, since every selection in the proof is of a single explicitly given object.
