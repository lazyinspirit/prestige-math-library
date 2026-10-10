---
id: lem-sr-center-of-momentum-frame
kind: lemma
title: "Center-of-momentum frames of a future timelike four-momentum and their unique time vector"
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-sr-total-four-momentum-and-invariant-mass
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - thm-sr-proper-time-and-observer-decomposition
  - def-inertial-frame-and-inertial-chart
  - lem-future-oriented-inertial-frames-exist
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-oriented-minkowski-volume-form
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-lorentz-form-and-inertia
  - def-rational-power
  - def-linear-map
  - def-sr-affine-minkowski-model
dependency_roles:
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-oriented-minkowski-volume-form: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-rational-power: mathematical-premise
  def-linear-map: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 14
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (the frame in which the total momentum has zero spacelike part) and Section 4.3.3 p. 91 (a Lorentz transformation puts the total energy-momentum vector along the E axis)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 7.4 printed p. 86 (choice of almost inertial coordinates with Pi = 0, the centre-of-momentum frame)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]), $c>0$, and let $Q\in V$ be future
timelike with invariant mass $M:=\sqrt{-\eta(Q,Q)}/c$
([[def-sr-total-four-momentum-and-invariant-mass]]\,(b)); put
$n_Q:=Q/(Mc)$, so that $\eta(n_Q,n_Q)=-1$, $n_Q\in C^+$ and $Q=Mc\,n_Q$.

**(a)** There exists an inertial frame $(o;e_0,e_1,e_2,e_3)$ with $e_0=n_Q$;
in every such frame $q_{e_0}(Q)=0$, $E_{e_0}(Q)=Mc^2$ and the components of
$Q$ are $(Mc,0,0,0)$. Such a frame is a center-of-momentum frame of $Q$ in the
sense of [[def-sr-total-four-momentum-and-invariant-mass]]\,(c).

**(b)** Conversely, if an inertial frame satisfies $q_{e_0}(Q)=0$, then
$e_0=n_Q$. Hence the time vector of a center-of-momentum frame of $Q$ is
unique, and two center-of-momentum frames of $Q$ differ only by the choice of
origin and by a positively oriented $\eta$-orthonormal change of the spatial
basis $(e_1,e_2,e_3)$ of $n_Q^\perp$; in particular the center-of-momentum
frame at a fixed origin is unique up to spatial rotations.

**(c)** If $Q$ is a nonzero future null vector, then no inertial frame
satisfies $q_{e_0}(Q)=0$: a nonzero future null vector has no
center-of-momentum frame.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; a future timelike $Q\in V$ with invariant mass $M=\sqrt{-\eta(Q,Q)}/c$ and $n_Q:=Q/(Mc)$; for (c) a nonzero future null $Q$.

[F1] ([[def-sr-total-four-momentum-and-invariant-mass]], Definition): for future timelike $P$ the invariant mass is $M(P)=\sqrt{-\eta(P,P)}/c>0$; a center-of-momentum frame of a nonzero $P\in V$ is an inertial frame with $h_{e_0}(P)=0$, where $h_{e_0}(v)=v+\eta(v,e_0)e_0$ for every $v\in V$. This is equivalent to $P\in\mathrm{span}(e_0)$ and to $P=-\eta(P,e_0)e_0$; for future causal $P$, as in every use below, $h_{e_0}(P)=q_{e_0}(P)$.

[F2] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): $E_n(P)=-c\,\eta(P,n)$ and $q_n(P)=h(P)=P+\eta(P,n)n\in n^\perp$ for $P\in\mathrm{cl}(C^+)$ and future unit $n$.

[F3] ([[lem-sr-energy-momentum-observer-identities]], Statement (a)): if $P$ is nonzero future causal and $n$ future unit, then $E_n(P)>0$; if $P$ is future timelike with invariant mass $m(P)$, then $m(P)^2=-\eta(P,P)/c^2$.

[F4] ([[thm-sr-proper-time-and-observer-decomposition]], clause (c)): for future unit $n$, the map $h$ is linear with image $n^\perp$ and kernel $\mathrm{span}(n)$, $V=\mathrm{span}(n)\oplus n^\perp$, and the restriction of $\eta$ to $n^\perp$ is positive definite; hence $\eta$ restricted to $n^\perp$ is an inner product.

[F5] ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], Statement): every finite-dimensional real inner product space has an orthonormal basis.

[F6] ([[def-inertial-frame-and-inertial-chart]], Definition): an inertial frame is a tuple $(o;e_0,e_1,e_2,e_3)$ with $o\in A$ and $(e_0,e_1,e_2,e_3)$ an $\eta$-orthonormal ordered basis of $V$ that is future and positively oriented; its inertial chart sends $p$ to the coordinates relative to $(o;e_0,\dots,e_3)$.

[F7] ([[def-oriented-minkowski-volume-form]], Definition): the oriented volume form $\epsilon(v_0,\dots,v_3)$ is the determinant of the coordinate matrix in an inertial frame, an alternating $4$-linear form; replacing one basis vector by its negative changes the determinant's sign.

[F8] ([[lem-future-oriented-inertial-frames-exist]], Statement): in every oriented time-oriented affine Minkowski space and for every event $o$ there exists an inertial frame with origin $o$; explicitly, from an $\eta$-orthonormal basis an orientation may be corrected by negating one spatial vector without destroying $\eta$-orthonormality or the future first vector.

[F9] ([[lem-timelike-cone-has-two-convex-components]], Statement): in an $\eta$-orthonormal basis whose first vector is timelike, the timelike set is the disjoint union of $T_+=\{v:v^0>|v_s|\}$ and $T_-=\{v:v^0<-|v_s|\}$, which are its two connected components, are convex and are closed under multiplication by positive reals; $\mathrm{cl}(T_+)=\{v:v^0\ge|v_s|\}$, $\mathrm{cl}(T_-)=\{v:v^0\le-|v_s|\}$, and the two closed cones meet only at $0$; the time orientation names $C^+$ as one of $T_\pm$.

[F10] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is a symmetric bilinear form: $\eta(\lambda v,\mu w)=\lambda\mu\,\eta(v,w)$ for real $\lambda,\mu$.

[F11] ([[def-causal-classification-of-lorentz-vectors]], Definition): a vector $v$ is timelike when $\eta(v,v)<0$, null when $v\ne0$ and $\eta(v,v)=0$, and causal when it is timelike or null.

## Proof

**Proof technique:** build the frame along $n_Q$ by an explicit orthonormal basis of $n_Q^\perp$ and an orientation correction, then compare any center-of-momentum time vector with $n_Q$ algebraically.

1.1 Since $Q$ is future timelike, $-\eta(Q,Q)>0$ and hence $M>0$ and $n_Q=Q/(Mc)$ is defined; by [F10] and $\eta(Q,Q)=-M^2c^2$, $\eta(n_Q,n_Q)=(M^2c^2)^{-1}\eta(Q,Q)=-1$ and $Q=Mc\,n_Q$ with $Mc>0$, so $Q$ is a positive multiple of the unit vector $n_Q$. Moreover $\eta(Q,n_Q)=Mc\,\eta(n_Q,n_Q)=-Mc$, whence $h(Q)=Q+\eta(Q,n_Q)n_Q=Mc\,n_Q-Mc\,n_Q=0$ and $E_{n_Q}(Q)=-c\,\eta(Q,n_Q)=Mc^2$ by [F2]. [F2, F10]

1.2 By [F9] the future component $C^+$ of the timelike set is one of the two convex cones $T_\pm$, each closed under multiplication by positive reals; since $Q\in C^+$ and $n_Q=(Mc)^{-1}Q$ with $(Mc)^{-1}>0$, [F10] gives $n_Q\in C^+$. [F9, F10]

1.3 By [F4] the restriction $\delta$ of $\eta$ to $n_Q^\perp$ is positive definite, so by [F5] there is a $\delta$-orthonormal basis $(e_1,e_2,e_3)$ of $n_Q^\perp$; setting $e_0:=n_Q$, the ordered basis $(e_0,e_1,e_2,e_3)$ is $\eta$-orthonormal, because $\eta(e_0,e_0)=\eta(n_Q,n_Q)=-1$, $\eta(e_0,e_i)=0$ by $e_i\in n_Q^\perp$, and $\eta(e_i,e_j)=\delta(e_i,e_j)=\delta_{ij}$ for $i,j\in\{1,2,3\}$. [F4, F5, F10]

1.4 For the converse, let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame with $q_{e_0}(Q)=0$. By [F1] and [F2], $Q=-\eta(Q,e_0)e_0$ and $\eta(Q,e_0)=-E_{e_0}(Q)/c$, and [F3] gives $E_{e_0}(Q)>0$ because $Q$ is nonzero future causal, so $\lambda:=-\eta(Q,e_0)>0$ and $Q=\lambda e_0$. Then $\eta(Q,Q)=\lambda^2\eta(e_0,e_0)=-\lambda^2$ by [F10] and $\eta(e_0,e_0)=-1$, while $\eta(Q,Q)=-M^2c^2$ by definition of $M$, so $\lambda^2=M^2c^2$ and $\lambda=Mc$ because $\lambda>0$ and $Mc>0$. Substituting $Q=\lambda e_0=Mc\,e_0$ into $Q=Mc\,n_Q$ and dividing by $Mc\ne0$ gives $e_0=n_Q$. [F1, F2, F3, F10]

1.5 If $Q$ is a nonzero future null vector and an inertial frame satisfied $q_{e_0}(Q)=0$, then [F1] gives $Q=-\eta(Q,e_0)e_0=\lambda e_0$ with $\lambda\ne0$ because $Q\ne0$; then $\eta(Q,Q)=\lambda^2\eta(e_0,e_0)=-\lambda^2<0$ by [F10], contradicting $\eta(Q,Q)=0$ for a null vector in [F11]. Hence no inertial frame satisfies $q_{e_0}(Q)=0$, which is (c). [F10, F11, F1]

2.1 The ordered basis of [step 1.3] has some orientation class; if that class is negative, replace $e_1$ by $-e_1$, which leaves $\eta$-orthonormality and the first vector unchanged and reverses the sign of the determinant of the coordinate matrix, hence changes the orientation class, by [F7] and [F8]. The resulting $(e_0,e_1,e_2,e_3)$ is $\eta$-orthonormal, future (its first vector is $e_0=n_Q\in C^+$ by [step 1.2]) and positively oriented, so it is the basis of an inertial frame by [F6]. [F6, F7, F8, step 1.2, step 1.3]

2.2 Two inertial frames whose first vectors both equal $n_Q$ differ by their choice of origin $o$, which is arbitrary, and by their spatial triples $(e_1,e_2,e_3)$ and $(f_1,f_2,f_3)$; both triples are $\delta$-orthonormal and positively oriented bases of the same oriented Euclidean space $n_Q^\perp$, so the change-of-basis map between them preserves $\delta$ and the induced orientation, that is it is a spatial rotation. Together with [step 1.4] this gives the uniqueness statement of (b): the time vector is forced to be $n_Q$. [step 1.3, step 1.4]

3.1 In the frame of [step 2.1] the first vector is $e_0=n_Q$, so $q_{e_0}(Q)=q_{n_Q}(Q)=0$ and $E_{e_0}(Q)=Mc^2$ by [step 1.1]; by [F1] this frame is a center-of-momentum frame of $Q$, and the components of $Q=Mc\,n_Q=Mc\,e_0$ are $(Mc,0,0,0)$. This proves (a). [F1, step 1.1, step 2.1]

3.2 Applying the spatial-rotation freedom of [step 2.2] to the frames produced by [step 2.1], two center-of-momentum frames of $Q$ differ only by origin choice and a spatial rotation, and by [step 1.4] no other time vector is possible; this completes (b). [step 1.4, step 2.1, step 2.2]

4.1 By [step 3.1] clause (a) holds, by [step 3.2] clause (b) holds, and by [step 1.5] clause (c) holds; hence an inertial frame with $e_0=n_Q$ exists, its time vector is unique up to the stated rotations, and a nonzero future null vector has no center-of-momentum frame. [step 1.5, step 3.1, step 3.2] ∎
