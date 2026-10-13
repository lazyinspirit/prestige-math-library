---
id: lem-sr-energy-momentum-observer-identities
kind: lemma
title: "Positivity, mass shell and kinetic energy of the observer quantities of a four-momentum"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - thm-sr-proper-time-and-observer-decomposition
  - def-lorentz-form-and-inertia
  - def-sr-four-velocity-and-four-acceleration
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-lorentz-form-has-orthonormal-basis
  - lem-future-oriented-inertial-frames-exist
  - lem-timelike-cone-has-two-convex-components
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - thm-cauchy-schwarz-finite
  - def-rational-power
  - lem-rational-power-laws
  - def-linear-map
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-linear-map: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
dependency_level: 13
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Sections 4.3.1 pp. 88-89 (m^2 = E^2 - p^2; energy and momentum frame-dependent, mass invariant) and Section 4.3.4 p. 96 (p = m gamma v)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equations (1.100)-(1.101) (p^mu = m U^mu, p^mu = (gamma m, v gamma m), small-v rest plus kinetic energy)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 6.3 pp. 63-64, equation (6.19) (observer energy -g(v,P) with g(P,P) = -m^2)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]), $c>0$, let $n\in V$ be future unit
timelike, $\eta(n,n)=-1$, and let $E_n,q_n,m,T_n$ be the quantities of
[[def-sr-observed-energy-momentum-and-kinetic-energy]].

**(a)** If $P$ is nonzero future causal, then $E_n(P)>0$, $q_n(P)\in n^\perp$
and

$$\eta(q_n(P),q_n(P))=\frac{E_n(P)^2}{c^2}+\eta(P,P)\ \ge\ 0 .$$

Consequently: (i) if $P$ is future null, then $\eta(P,P)=0$ and
$E_n(P)=c\,|q_n(P)|>0$; (ii) if $P$ is future timelike with invariant mass
$m(P)$, then $\eta(P,P)=-m(P)^2c^2$ and the mass-shell identity

$$E_n(P)^2=m(P)^2c^4+c^2\,|q_n(P)|^2$$

holds. The invariant mass $m(P)$ depends only on the scalar $\eta(P,P)$ and
therefore on no observer $n$ and no basis, while $E_n$ and $q_n$ do depend on
$n$.

**(b)** Let $P=mU$ with $m>0$ constant, let $U$ be future timelike with
$\eta(U,U)=-c^2$ (the four-velocity normalisation of
[[def-sr-four-velocity-and-four-acceleration]]), and put
$\gamma:=-\eta(U/c,n)\ge1$ and $w:=c\,h(U/c)/\gamma\in n^\perp$, the
relative velocity of [[thm-sr-proper-time-and-observer-decomposition]]\,(d)
applied to the future unit vector $u=U/c$; equivalently $w=h(U)/\gamma$. Then

$$E_n(P)=mc^2\gamma,\qquad T_n(P)=mc^2(\gamma-1)\ \ge\ 0,\qquad q_n(P)=m\gamma w,$$

and $m(P)=m$. Moreover $T_n(P)=0$ if and only if $\gamma=1$, that is $U=cn$,
equivalently $P=mcn$ (the particle is at rest relative to $n$). Finally
$|q_n(P)|=m\gamma|w|=mc\sqrt{\gamma^2-1}$.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; a real number $c>0$; a future unit timelike $n\in V$ with $\eta(n,n)=-1$; clause (a): a nonzero $P\in\mathrm{cl}(C^+)$; clause (b): a real $m>0$ and a future timelike $U\in V$ with $\eta(U,U)=-c^2$, with $P=mU$.

[F1] The definition of the observer quantities ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): for $P\in\mathrm{cl}(C^+)$ one has $E_n(P)=-c\,\eta(P,n)$ and $q_n(P)=h(P)=P+\eta(P,n)n\in n^\perp$, and $\eta(n,P)=-E_n(P)/c$; for nonzero future causal $P$ the invariant mass is $m(P)=\sqrt{-\eta(P,P)}/c$; for $P=mU$ with $m>0$ and $\eta(U,U)=-c^2$ the kinetic energy is $T_n(P)=E_n(P)-mc^2$; and $|w|=\sqrt{\eta(w,w)}$ on $n^\perp$.

[F2] [[thm-sr-proper-time-and-observer-decomposition]], clauses (c) and (d): $h$ is linear with image $n^\perp$ and kernel $\mathrm{span}(n)$, the restriction of $\eta$ to $n^\perp$ is positive definite, and $V=\mathrm{span}(n)\oplus n^\perp$; and for future unit timelike $n,u$ one has, with $\gamma:=-\eta(n,u)$ and $w:=c\,h(u)/\gamma$, the relations $\gamma\ge1$, $w\in n^\perp$, $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$, and $\gamma=1$ if and only if $u=n$.

[F3] [[def-lorentz-form-and-inertia]]: $\eta$ is a symmetric bilinear form on $V$, so $\eta(v,w)$ is additive and homogeneous in each argument and $\eta(v,w)=\eta(w,v)$; in particular polarisation gives $\eta(v+w,v+w)=\eta(v,v)+2\eta(v,w)+\eta(w,w)$ and $\eta(\lambda v,\mu w)=\lambda\mu\,\eta(v,w)$ for real $\lambda,\mu$.

[F4] [[lem-lorentz-form-has-orthonormal-basis]]: there is an ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ with $\eta(e_a,e_b)=\mathrm{diag}(-1,1,1,1)_{ab}$.

[F5] [[lem-future-oriented-inertial-frames-exist]] with [[def-inertial-frame-and-inertial-chart]]: in the oriented time-oriented affine Minkowski space there exists, for every event $o$, an inertial frame with origin $o$, and an inertial frame's basis is an $\eta$-orthonormal ordered basis whose first vector lies in $C^+$; in particular such a basis of $V$ exists.

[F6] [[lem-timelike-cone-has-two-convex-components]]: in every $\eta$-orthonormal ordered basis whose first vector is timelike, writing $v=v^0e_0+v_s$ with $v_s\in S:=\mathrm{span}(e_1,e_2,e_3)$ and $|v_s|:=\sqrt{(v^1)^2+(v^2)^2+(v^3)^2}$, one has $\eta(v,v)=-(v^0)^2+|v_s|^2$, $C^+=\{v:v^0>|v_s|\}$ (for the appropriate naming of the two components) and $\mathrm{cl}(C^+)=\{v:v^0\ge|v_s|\}$.

[F7] [[def-spatial-euclidean-structure-of-an-inertial-frame]]: for an inertial frame, $S=\mathrm{span}(e_1,e_2,e_3)$ equals $e_0^\perp$, the restriction $\delta$ of $\eta$ to $S$ is positive definite, and $|w|=\sqrt{\delta(w,w)}$ is a norm on $S$; in coordinates $\delta(v_s,w_s)=v_s\cdot w_s=\sum_{i=1}^3v^iw^i$.

[F8] [[thm-cauchy-schwarz-finite]]: for real numbers $a_i,b_i$, $|\sum_{i=1}^3a_ib_i|\le\bigl(\sum_{i=1}^3a_i^2\bigr)^{1/2}\bigl(\sum_{i=1}^3b_i^2\bigr)^{1/2}$.

[F9] [[def-causal-classification-of-lorentz-vectors]] and [[def-time-orientation-and-future-causal-sets]]: a vector $v$ is causal exactly when $v\ne0$ and $\eta(v,v)\le0$ (it is timelike when $\eta(v,v)<0$ and null when $v\ne0$ and $\eta(v,v)=0$), and $C^+$ is a component of the timelike set with closed cone $\mathrm{cl}(C^+)$.

[F10] [[def-rational-power]] and [[lem-rational-power-laws]]: for $a,b>0$ and rationals $r,s$ the power $a^r$ is the positive real number defined there, with $(ab)^r=a^rb^r$, $(a^r)^s=a^{rs}$ and $a^{1/2}$ the unique nonnegative square root of $a$; in particular $\sqrt{\lambda^2}=\lambda$ for $\lambda>0$ and $\gamma\sqrt{1-\gamma^{-2}}=\sqrt{\gamma^2-1}$ for $\gamma\ge1$.

## Proof

**Proof technique:** fix orthonormal coordinates, prove the algebraic identity and positivity there, then specialise to $P=mU$ using the relative-velocity decomposition.

1.1 By [F1], $q_n(P)=P+\eta(P,n)n\in n^\perp$, $\eta(P,n)=-E_n(P)/c$, $m(P)^2=-\eta(P,P)/c^2$ for nonzero future causal $P$, and $T_n(P)=E_n(P)-mc^2$ in the setting of (b). Expanding with [F3] and $\eta(n,n)=-1$ gives $\eta(q_n(P),q_n(P))=\eta(P,P)+2\eta(P,n)^2+\eta(P,n)^2\eta(n,n)=\eta(P,P)+\eta(P,n)^2=\eta(P,P)+E_n(P)^2/c^2$. The formula $m(P)^2=-\eta(P,P)/c^2$ involves only the scalar $\eta(P,P)$, so $m(P)$ depends on no observer and no basis, whereas $E_n$ and $q_n$ are built from $\eta(P,n)$ and $h$ and depend on $n$. [F1, F2, F3]

1.2 Choose by [F4] and [F5] an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ with $e_0\in C^+$; write $v=v^0e_0+v_s$ with $v_s\in S=\mathrm{span}(e_1,e_2,e_3)$ and $|v_s|$ as in [F6]. Bilinearity [F3] extends the quadratic form of [F6] to $\eta(v,w)=-v^0w^0+\delta(v_s,w_s)$ with $\delta(v_s,w_s)=v_s\cdot w_s$ the Euclidean inner product of [F7]. By [F6], $C^+=\{v:v^0>|v_s|\}$ and $\mathrm{cl}(C^+)=\{v:v^0\ge|v_s|\}$; hence $n^0>|n_s|\ge0$ and $P^0\ge|P_s|\ge0$, while $\eta(n,n)=-1$ gives $(n^0)^2=1+|n_s|^2$. By [F8], $|P_s\cdot n_s|\le|P_s|\,|n_s|$. [F3, F4, F5, F6, F7, F8]

1.3 In the setting of (b), put $u:=U/c$. Since $\eta(U,U)=-c^2$, bilinearity [F3] gives $\eta(u,u)=c^{-2}\eta(U,U)=-1$, so $u$ is future unit timelike, and [F2] clause (d) applies: with $\gamma:=-\eta(n,u)\ge1$ and $w:=c\,h(u)/\gamma$ one has $w\in n^\perp$, $u=\gamma(n+w/c)$, $|w|^2=c^2(1-\gamma^{-2})$, and $\gamma=1$ if and only if $u=n$; equivalently $U=cn$, and $P=mU=mc\,n$ when $\gamma=1$. [F2, F3, F7]

2.1 Positivity of $E_n$: using [step 1.2], $c^{-1}E_n(P)=-\eta(P,n)=P^0n^0-P_s\cdot n_s$, so $c^{-1}E_n(P)\ge P^0n^0-|P_s||n_s|\ge|P_s|n^0-|P_s||n_s|=|P_s|(n^0-|n_s|)\ge0$, where the first inequality uses [F8], the second uses $P^0\ge|P_s|$ and $n^0>0$, and the last uses $n^0>|n_s|$ of [step 1.2]; if $|P_s|>0$ the last term is strictly positive, while if $|P_s|=0$ then $P\ne0$ forces $P^0>0$ and $c^{-1}E_n(P)=P^0n^0>0$, so $E_n(P)>0$ in both cases. [step 1.1, step 1.2, F8]

2.2 Since $q_n(P)\in n^\perp$ by step 1.1 and the restriction of $\eta$ to $n^\perp$ is positive definite by [F2], $\eta(q_n(P),q_n(P))=|q_n(P)|^2\ge0$. Combining this with the identity of step 1.1 gives the displayed equality and inequality of (a). [step 1.1, F1, F2]

2.3 The energy and momentum of $P=mU$: by [step 1.1] and [step 1.3], $E_n(P)=-c\,\eta(mU,n)=-mc^2\eta(U/c,n)=mc^2\gamma$ and $q_n(P)=h(mU)=m\,h(U)=mc\,h(u)=m\gamma w$, the last equality because $h(u)=h(\gamma(n+w/c))=\gamma\,h(w/c)=\gamma\,w/c$ by linearity of $h$ and $h(n)=0$ in [F2]. [step 1.1, step 1.3, F2, F3]

3.1 The null case: if $P$ is future null then $\eta(P,P)=0$ by [F9], so [step 2.2] gives $\eta(q_n(P),q_n(P))=E_n(P)^2/c^2>0$ by [step 2.1], and since $q_n(P)\in n^\perp$ the norm of [F1] gives $|q_n(P)|=\sqrt{\eta(q_n(P),q_n(P))}=E_n(P)/c$, that is $E_n(P)=c\,|q_n(P)|>0$. [step 2.1, step 2.2, F1, F9]

3.2 The timelike case and the mass shell: if $P$ is future timelike, then $\eta(P,P)=-m(P)^2c^2$ by the definition of $m(P)$ in [F1]; substituting this into [step 2.2] and multiplying by $c^2$ gives $E_n(P)^2=c^2\eta(q_n(P),q_n(P))+m(P)^2c^4=c^2|q_n(P)|^2+m(P)^2c^4$, using $|q_n(P)|^2=\eta(q_n(P),q_n(P))$ for $q_n(P)\in n^\perp$. [step 1.1, step 2.2, F1]

3.3 The kinetic energy: by [step 2.3] and $T_n(P)=E_n(P)-mc^2$ of [F1], $T_n(P)=mc^2\gamma-mc^2=mc^2(\gamma-1)\ge0$ because $\gamma\ge1$ in [step 1.3]; moreover $T_n(P)=0$ if and only if $\gamma=1$, which by [step 1.3] is equivalent to $u=n$, that is to $U=cn$, that is to $P=mU=mcn$, and conversely $P=mcn$ gives $\gamma=1$ and $T_n(P)=0$. [step 1.3, step 2.3, F1]

3.4 The momentum magnitude: by [step 2.3] and [step 1.3], $|q_n(P)|=m\gamma|w|=m\gamma\,c\sqrt{1-\gamma^{-2}}$, and since $\gamma\ge1$, [F10] gives $\gamma\sqrt{1-\gamma^{-2}}=\sqrt{\gamma^2(1-\gamma^{-2})}=\sqrt{\gamma^2-1}$, so $|q_n(P)|=mc\sqrt{\gamma^2-1}$. [step 1.3, step 2.3, F10]

4.1 Collect the conclusions and evaluate the invariant mass of $P=mU$: by [step 1.1], $m(P)^2=-\eta(P,P)/c^2$, and for $P=mU$ with $\eta(U,U)=-c^2$ bilinearity [F3] gives $\eta(P,P)=m^2\eta(U,U)=-m^2c^2$, so $m(P)^2=m^2$ and, since both $m(P)$ and $m$ are nonnegative and $c>0$, $m(P)=m$; together with [step 2.1] and [step 3.1] this proves clause (a) including (i), with [step 3.2] proving clause (a)(ii), and with [step 2.3], [step 3.3] and [step 3.4] it proves clause (b), the vanishing statement of (b) included by [step 3.3]. [step 1.1, step 2.1, step 2.3, step 3.1, step 3.2, step 3.3, step 3.4, F3] ∎
