---
id: lem-sr-rest-frame-of-a-future-timelike-displacement
kind: lemma
title: "Existence of an inertial frame whose time axis is a prescribed future timelike direction"
status: draft
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [def-sr-affine-minkowski-model, def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, def-inertial-frame-and-inertial-chart, lem-future-oriented-inertial-frames-exist, def-lorentz-boost, lem-boost-is-proper-orthochronous-with-inverse, lem-lorentz-map-preserves-metric-and-causal-structure, def-lorentz-map-and-lorentz-group, def-spatial-euclidean-structure-of-an-inertial-frame, def-oriented-minkowski-volume-form, lem-volume-form-is-independent-of-the-oriented-frame, thm-of-square-roots, lem-of-square-monotone, lem-of-sign-rules, lem-of-add-order, def-ordered-field]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  lem-volume-form-is-independent-of-the-oriented-frame: mathematical-premise
  thm-of-square-roots: mathematical-premise
  lem-of-square-monotone: mathematical-premise
  lem-of-sign-rules: mathematical-premise
  lem-of-add-order: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): sections 1.3.3 'The gamma factor' pp. 25-27 and 1.5 pp. 36-37; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), sections 2.1-2.3 pp. 25-30 (inertial frames and their bases; straight lines in inertial frames); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 8
aliases: []
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski space, let
$d\in V$ be a future timelike displacement and put $T:=\sqrt{-\eta(d,d)}>0$ and
$n:=d/T$. Then:

**(i)** $\eta(n,n)=-1$ and $n$ is future timelike, so $n$ is a future unit
timelike vector.

**(ii)** For every event $o$ there is an inertial frame
$(o;e_0,e_1,e_2,e_3)$ of the model with $e_0=n$.

**(iii)** For the inertial chart $x$ of any such frame one has
$x(o+\lambda d)=(\lambda T,0,0,0)$ for every real $\lambda$; in particular
$x(o)=0$ and $x(o+d)=(T,0,0,0)$. Consequently, for any two events $p,q$ with
$q-p=d$, the chart of such a frame represents the displacement $q-p$ by the
coordinate vector $(T,0,0,0)$: the spatial coordinates of $p$ and $q$ agree and
their time coordinates differ by $T$.

## Facts & Assumptions

**Given:** The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and a future timelike displacement $d\in V$, with $T:=\sqrt{-\eta(d,d)}>0$ and $n:=d/T$.

[F1] Inertial frames and charts: for every event $o$ and every $\eta$-orthonormal ordered basis $(f_0,f_1,f_2,f_3)$ of $V$ with future first vector and positive orientation, $(o;f_0,\dots,f_3)$ is an inertial frame; its chart is $x(r)=E^{-1}(r-o)$ with $E(u)=\sum_a u^ae_a$ the frame's linear isomorphism, and every vector $u$ has unique coordinates $u=u^0e_0+u_s$, $u_s\in S=\operatorname{span}(e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]], [[lem-future-oriented-inertial-frames-exist]]).

[F2] Cone coordinates: in an inertial frame with first vector in $C^+$ one has $C^+=\{u:u^0>|u_s|\}$ and $C^-=\{u:u^0<-|u_s|\}$, and $\eta(u,u)=-(u^0)^2+|u_s|^2$; the restriction of $\eta$ to $S$ is positive definite, $(e_1,e_2,e_3)$ is orthonormal for it, and $|z|^2=\delta(z,z)$ for $z\in S$ ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[F3] The passive boost $B(\beta)$ is defined for every parameter $\beta\in\mathbb{R}^3$ with $|\beta|<1$ ([[def-lorentz-boost]]); it is a proper orthochronous Lorentz map with inverse $B(-\beta)$ ([[lem-boost-is-proper-orthochronous-with-inverse]], [[def-lorentz-map-and-lorentz-group]]); and if $u$ is future timelike with $\eta(u,u)=-1$ and coordinates $(u^0,u_s)$, then the parameter $\beta:=u_s/u^0$ satisfies $|\beta|<1$ and $B(\beta)u=f_0$, where $f_0$ is the first vector of the frame used for the coordinates ([[lem-boost-is-proper-orthochronous-with-inverse]] (iv)).

[F4] Lorentz maps preserve the metric and the orientation class: for a linear Lorentz map $L$ one has $\eta(Lv,Lw)=\eta(v,w)$ for all $v,w$; the composition and the inverse of Lorentz maps are Lorentz maps, and the proper orthochronous ones form a group; if $L$ is proper, then the oriented volume form $\epsilon$ of [[def-oriented-minkowski-volume-form]] is preserved, $\epsilon(Lv_0,\dots,Lv_3)=\epsilon(v_0,\dots,v_3)$; and $\epsilon$ takes the value $1$ on every positively oriented $\eta$-orthonormal basis, so a tuple of four vectors with $\epsilon$-value $1$ is positively oriented ([[lem-lorentz-map-preserves-metric-and-causal-structure]], [[lem-volume-form-is-independent-of-the-oriented-frame]]).

[L5] Square roots and monotonicity: every real $c\ge0$ has a unique $\sqrt c\ge0$ with $(\sqrt c)^2=c$ ([[thm-of-square-roots]]); for $x,y\ge0$ one has $x<y\iff x^2<y^2$ ([[lem-of-square-monotone]]).

[L6] Order arithmetic of $\mathbb{R}$: multiplication of an inequality by a positive real preserves it, and a product of positives is positive ([[lem-of-sign-rules]]); a constant may be added to both sides and inequalities may be added ([[lem-of-add-order]]); and the order is trichotomous and transitive, with $1>0$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By bilinearity of $\eta$ and $T^2=-\eta(d,d)$ one has $\eta(n,n)=\eta(d,d)/T^2=(-T^2)/T^2=-1$, so $n$ is timelike and $\eta(n,n)=-1$; moreover $d$ is nonzero because it is timelike, so $n=d/T$ is nonzero. [given, F1, L5, L6, algebra]

2.1 Fix an event $o$ and an inertial frame $(o;f_0,f_1,f_2,f_3)$ with chart $y$, and write $n=n^0f_0+n_s$ in its coordinates; since $n$ is timelike, [F2] puts it in $C^+$ or $C^-$, and since $n=d/T$ with $d^0>|d_s|\ge0$ and $T>0$ its first coordinate satisfies $n^0=d^0/T>0$, so $n$ lies in $C^+=\{u:u^0>|u_s|\}$ and is future timelike; in particular $n^0>|n_s|\ge0$. [step 1.1, given, F1, F2, L5, L6]

3.1 From $1=-\eta(n,n)=(n^0)^2-|n_s|^2$ we get $(n^0)^2=1+|n_s|^2>|n_s|^2$; setting $\beta:=n_s/n^0$ (the coordinate column, identified with the vector $\beta^1f_1+\beta^2f_2+\beta^3f_3$ of $S$) one has $|\beta|^2=\delta(\beta,\beta)=|n_s|^2/(n^0)^2<1$, hence $|\beta|<1$ by strict monotonicity of squaring on the nonnegatives and $|\beta|\ge0$; thus the passive boost $B(\beta)$ is defined. [step 2.1, F2, F3, L5, L6, algebra]

4.1 By [F3] (iv), applied to the future timelike unit vector $n$ with coordinates $(n^0,n_s)$, the boost satisfies $B(\beta)n=f_0$; and $B(\beta)$ is proper orthochronous with inverse $B(\beta)^{-1}=B(-\beta)$. [step 3.1, F3]

5.1 Define $e_0:=n=B(\beta)^{-1}f_0$ and $e_i:=B(\beta)^{-1}f_i$ for $i=1,2,3$; then $e_a=B(\beta)^{-1}f_a$ for all $a$, so $\eta(e_a,e_b)=\eta(f_a,f_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ because a Lorentz map preserves $\eta$, and the ordered basis $(e_0,e_1,e_2,e_3)$ is $\eta$-orthonormal with future first vector $e_0=n$; it is positively oriented because $B(\beta)^{-1}$ is proper and preserves the oriented volume form, so $\epsilon(e_0,\dots,e_3)=\epsilon(f_0,\dots,f_3)=1$ for the positively oriented basis $(f_a)$, whence the basis $(e_a)$ is positively oriented. Therefore $(o;e_0,e_1,e_2,e_3)$ is an inertial frame with $e_0=n$, which is (ii). [step 4.1, F1, F4]

6.1 For the chart $x=E^{-1}(\cdot-o)$ of any inertial frame $(o;e_0,\dots,e_3)$ with $e_0=n$ one has $E(1,0,0,0)=e_0=n$ and $d=Tn$, so $x(o+\lambda d)=E^{-1}(\lambda d)=\lambda T\,E^{-1}(n)=\lambda T\,(1,0,0,0)=(\lambda T,0,0,0)$ for every real $\lambda$, since $E^{-1}$ is linear; in particular $x(o)=0$ and $x(o+d)=(T,0,0,0)$, which is (iii). [step 5.1, F1, algebra]

7.1 Consequently, for events $p,q$ with $q-p=d$, linearity of $E^{-1}$ gives $x(q)-x(p)=E^{-1}(q-p)=(T,0,0,0)$, so the spatial coordinates of $p$ and $q$ agree and their time coordinates differ by $T$; together with steps 1.1, 2.1, 5.1 and 6.1 this proves (i), (ii) and (iii). [step 6.1, F1, algebra] ∎
