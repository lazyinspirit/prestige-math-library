---
id: pthm-sr-interval-and-cone-invariance
kind: physics-theorem
title: Interval, cone and orientation invariance across inertial descriptions
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 9
physical_scope: "Flat classical special-relativity model with ideal events, ideal clocks and ideal vacuum light rays, and inertial descriptions related by proper orthochronous affine Lorentz maps. The claim is conditional on the adopted postulates post-sr-inertial-covariance and post-sr-ideal-clocks-and-light and excludes gravity, accelerated-frame apparatus corrections, dispersive media, quantum effects and any empirical measurement claim."
deps: [lem-inertial-chart-transitions-are-affine-lorentz,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       lem-collinear-boost-composition-and-velocity-addition,
       def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart,
       def-causal-classification-of-lorentz-vectors,
       def-time-orientation-and-future-causal-sets,
       def-oriented-minkowski-volume-form,
       post-sr-inertial-covariance, post-sr-ideal-clocks-and-light,
       def-sr-si-units-and-coordinate-conventions,
       lem-timelike-cone-has-two-convex-components]
dependency_roles:
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-collinear-boost-composition-and-velocity-addition: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  post-sr-inertial-covariance: physical-assumption
  post-sr-ideal-clocks-and-light: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  lem-timelike-cone-has-two-convex-components: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Adopt the postulates of the spacetime-primitives page: the oriented
time-oriented affine Minkowski space $(A,V,\eta,C^+)$ as the spacetime of the
framework with the equations of the specified model covariant under proper
orthochronous affine Lorentz maps, which are the inertial changes of
description ([[post-sr-inertial-covariance]]), and the ideal clock and ideal
light assumptions, including that ideal vacuum light rays are the future null
straight lines and that inertial charts use $x^0=ct$
([[post-sr-ideal-clocks-and-light]],
[[def-sr-si-units-and-coordinate-conventions]]). Let $x$ and $x'$ be the
charts of any two inertial frames of the model. Then:

(i) the transition $x'\circ x^{-1}$ is an affine map $u\mapsto\Lambda u+b$
whose linear part $\Lambda$ is a proper orthochronous Lorentz matrix; in
particular for all events $p,q$ with coordinate differences
$\Delta=x(q)-x(p)$ and $\Delta'=x'(q)-x'(p)$ one has $\Delta'=\Lambda\Delta$
and $\eta_0(\Delta',\Delta')=\eta_0(\Delta,\Delta)$, where
$\eta_0=\operatorname{diag}(-1,1,1,1)$: the interval computed from the
coordinates of two events does not depend on the inertial chart used;

(ii) the causal classification of the displacement $q-p$ (timelike, null or
spacelike) and, for causal displacements, the relation "$q$ is in the future
of $p$" versus "$q$ is in the past of $p$" are independent of the inertial
chart used to compute them; likewise the sign of the interval
$I(p,q)=\eta(q-p,q-p)$ is chart-independent;

(iii) the class of future null straight lines is preserved by every inertial
transition: if a curve is a future null straight line in one inertial chart,
then its coordinate image in every other inertial chart is again a future null
straight line, and its coordinate speed computed between parameters $\lambda_1<\lambda_2$ as
$|\Delta x_{\mathrm{vec}}|/\Delta t$ equals $c$ in every inertial chart, consistently with
the light clause of [[post-sr-ideal-clocks-and-light]];

(iv) the orientation and the oriented volume form of the model are invariant
under every inertial transition, and the composition of two inertial
transitions is again an inertial transition; for two transitions whose linear parts are pure boosts
$B(\beta_1e)$ and $B(\beta_2e)$ for the same unit spatial direction $e$
the composed parameter is
$(\beta_1+\beta_2)/(1+\beta_1\beta_2)$.

**Scope and qualification.** This is a conditional statement about the adopted
model with ideal clocks, ideal light rays, flat classical spacetime and no
gravitational or quantum effects. It is not an empirical claim about nature,
it does not derive the postulates from experiment or from verbal symmetry
principles, and it inherits the idealizations of its premises; no measurement,
calibration or statistical inference is asserted.

## Facts & Assumptions

**Given:** The adopted model $(A,V,\eta,C^+)$ with postulates [[post-sr-inertial-covariance]] and [[post-sr-ideal-clocks-and-light]], two inertial frames with charts $x,x'$ of the model, and the events and displacements of the Statement.

[L1] Two inertial charts satisfy $x'(p)=M^{-1}(x(p)-x(o'))$, an affine map with linear part $M^{-1}$, where $M$ is the matrix of the proper orthochronous linear Lorentz map $L$ with $Le_a=e'_a$; $M^{-1}$ is a proper orthochronous Lorentz matrix and its linear part maps future causal coordinate vectors to future causal coordinate vectors; the affine transition preserves future causal coordinate displacements, since $F(u)-F(v)=M^{-1}(u-v)$; conversely every proper orthochronous linear Lorentz map and event give an inertial chart with that transition ([[lem-inertial-chart-transitions-are-affine-lorentz]]).

[L2] For a linear Lorentz map $L$: it preserves $\eta(v,v)$ and the causal character of every nonzero vector and maps the null vectors onto themselves; $L(C^+)$ is one of the components $C^+,C^-$; a proper Lorentz map preserves the oriented volume form, $\epsilon(Lv_0,\dots,Lv_3)=\epsilon(v_0,\dots,v_3)$; the inverse and compositions of Lorentz maps are Lorentz maps; and $-\operatorname{id}$ interchanges $C^+$ and $C^-$: in the future inertial basis their inequalities $v^0>|v_{\mathrm{vec}}|$ and $v^0<-|v_{\mathrm{vec}}|$ are interchanged by $v\mapsto-v$ ([[lem-timelike-cone-has-two-convex-components]]) ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L3] Collinear boosts compose by $B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$ and commute ([[lem-collinear-boost-composition-and-velocity-addition]]).

[L4] The interval of events $p,q$ is $I(p,q):=\eta(q-p,q-p)$, and events are timelike, null or spacelike when the displacement is; the model makes no physical claim until the postulates are adopted ([[def-sr-affine-minkowski-model]]).

[L5] An inertial chart is $x(p)=E^{-1}(p-o)$ for an $\eta$-orthonormal, future, positively oriented basis; in particular coordinate differences transform affinely, and $x^0=ct$ in the SI convention ([[def-inertial-frame-and-inertial-chart]], [[def-sr-si-units-and-coordinate-conventions]]).

[L6] A displacement is timelike, null or spacelike according to whether $\eta(v,v)<0$, $\eta(v,v)=0$ with $v\neq0$, or $\eta(v,v)>0$; a causal vector is future or past causal according to its membership in the closed cones $\operatorname{cl}(C^+)$ or $\operatorname{cl}(C^-)$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L7] The oriented volume form is $\epsilon(v_0,\dots,v_3)=\det([v_j^a])$, the determinant of the coordinate matrix in an inertial frame ([[def-oriented-minkowski-volume-form]]).

[L8] Adopted: the affine Minkowski model is the spacetime of the framework, and the inertial changes of description are the affine maps whose linear parts are proper orthochronous Lorentz maps; the model equations of the framework are covariant under them ([[post-sr-inertial-covariance]]).

[L9] Adopted: ideal vacuum light rays are exactly the future null straight lines $\{p+\lambda v:\lambda\in\mathbb R\}$ with $v$ future null, and in every inertial chart their spatial coordinate velocity has magnitude $c$ with $x^0=ct$ ([[post-sr-ideal-clocks-and-light]]).



## Proof

**Proof technique:** direct.

1.1 By [L1], the transition is $x'(p)=M^{-1}(x(p)-x(o'))$, the affine map $u\mapsto M^{-1}u-M^{-1}x(o')$ with linear part $\Lambda:=M^{-1}$, the matrix of the linear Lorentz map $L^{-1}$, which is proper orthochronous by [L1] and [L2]. For events $p,q$ the affine formula gives $\Delta'=x'(q)-x'(p)=M^{-1}(x(q)-x(p))=\Lambda\Delta$. Since the matrix $\Lambda$ of the Lorentz map $L^{-1}$ satisfies $\eta_0(\Lambda a,\Lambda b)=\eta_0(a,b)$ for all coordinate columns $a,b$ (the matrix form of the defining Lorentz property), $\eta_0(\Delta',\Delta')=\eta_0(\Lambda\Delta,\Lambda\Delta)=\eta_0(\Delta,\Delta)$, which is exactly $I(p,q)$ by [L4] and [L5]. Hence the interval computed from coordinates does not depend on the inertial chart, proving (i). [L1, L2, L4, L5, algebra]

1.2 For (iv), the volume form is preserved because its argument transforms by the proper linear Lorentz map with matrix $\Lambda$: put $\widetilde L:=E\circ\Lambda\circ E^{-1}:V\to V$. Writing $v_j=E a_j$ with coordinate columns $a_j$, the definition [L7] and the volume-form clause of [L2] give $\epsilon(E\Lambda a_0,\dots,E\Lambda a_3)=\epsilon(\widetilde Lv_0,\dots,\widetilde Lv_3)=\det(\widetilde L)\epsilon(v_0,\dots,v_3)=\epsilon(v_0,\dots,v_3)$, since $\det\Lambda=+1$; the same computation shows that the orientation (the sign of the transition determinant) is preserved. The composition of two inertial transitions is again an inertial transition: if $x,x',x''$ are inertial charts, both $x''\circ x'^{-1}$ and $x'\circ x^{-1}$ are bijections, so their composite is $x''\circ x^{-1}$, the transition from $x$ to $x''$, which by [L1] is affine with proper orthochronous linear part. Finally, if the two transitions have linear parts $B(\beta_1e)$ and $B(\beta_2e)$ with parameters in a common spatial direction $e$, then the composite has linear part $B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$ by [L3], and the reverse order gives the same result because collinear boosts commute. This proves (iv). [L1, L2, L3, L7, algebra]

2.1 The classification of $\Delta$ is read from the sign of $\eta_0(\Delta,\Delta)$: it is timelike when this number is negative, null when it is zero and $\Delta\neq0$, spacelike when it is positive, by [L6] and the coordinate expression $\eta(v,w)=v^{T}\eta_0w$ in an inertial frame; the zero displacement $\Delta=0$ is none of the three and remains $0$ under every linear transition, so the classification statement is trivially chart-independent in that case. By step 1.1 the number $\eta_0(\Delta,\Delta)$ is unchanged under the transition, so the classification, and with it the sign of the interval, is chart-independent. For the future/past distinction, for a nonzero causal displacement, $q-p$ corresponds to a nonzero column $\Delta$, which is future causal exactly when $E\Delta\in\operatorname{cl}(C^+)\setminus\{0\}$; applying the linear map with matrix $\Lambda$ to a future causal coordinate vector gives a future causal coordinate vector by [L1], and applying the same statement to the inverse transition (whose linear part is $\Lambda^{-1}$) gives the converse, so future-relatedness is chart-independent. For the past case, $x\in\operatorname{cl}(C^-)$ holds exactly when $-x\in\operatorname{cl}(C^+)$, by the coordinate descriptions $v^0\le-|v_{\mathrm{vec}}|$ and $(-v)^0\ge|(-v)_{\mathrm{vec}}|$ from the cone lemma in [L2]; since $\Lambda(-\Delta)=-\Lambda\Delta$, the argument of the previous sentence applied to $-\Delta$ shows that past-relatedness is chart-independent as well. This proves (ii). [L1, L2, L4, L5, L6, algebra]

3.1 Let $\gamma(\lambda)=p+\lambda v$ be an ideal vacuum light ray with $v$ future null, so that in the chart $x$ its coordinate image is $x(p)+\lambda v_x$ with $v_x$ the coordinate column of $v$, a straight line of future null coordinate direction by [L9] and step 2.1. Under the transition the image is $x'(p)+\lambda\Lambda v_x$ by step 1.1: again a straight line, with direction $w:=\Lambda v_x$. The vector with coordinates $w$ is the image under the Lorentz map $L^{-1}$ of the future null vector $v$, hence is future null by [L2] for nullness and by the future-causal preservation of [L1]; therefore the coordinate image is again a future null straight line, and applying the same argument to the inverse transition shows that the class of such lines is preserved in both directions. The coordinate speed statement is then the content of the light clause [L9] applied in the chart $x'$: for the future null direction $w$ one has $w^0=|w_{\mathrm{vec}}|>0$, so $|\Delta x_{\mathrm{vec}}|/\Delta t=c$ for $\lambda_2>\lambda_1$, since $\Delta t=(\lambda_2-\lambda_1)w^0/c>0$ and $|\Delta x_{\mathrm{vec}}|=(\lambda_2-\lambda_1)|w_{\mathrm{vec}}|$ in every inertial chart. This proves (iii). [L1, L2, L9, step 1.1, step 2.1, algebra]

4.1 Clauses (i)-(iv) are steps 1.1, 2.1, 3.1 and 1.2. Every step is a conditional deduction from the adopted postulates [L8], [L9] and the mathematical suppliers; no step asserts an empirical measurement, and the idealizations listed in the Statement's qualification are carried by [L9]. [step 1.1, step 2.1, step 3.1, step 1.2, L8, L9] ∎
