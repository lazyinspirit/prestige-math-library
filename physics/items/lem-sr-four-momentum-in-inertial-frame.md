---
id: lem-sr-four-momentum-in-inertial-frame
kind: lemma
title: "Four-momentum components, energy-velocity relation and passive boost transformation in an inertial frame"
status: draft
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - def-lorentz-boost
  - lem-boost-is-proper-orthochronous-with-inverse
  - thm-sr-tensor-and-current-transformation
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-sr-regular-causal-curve-and-worldline
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-euclidean-inner-product
  - def-linear-map
  - def-rational-power
  - lem-rational-power-laws
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-sr-affine-minkowski-model
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-linear-map: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 14
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.1 p. 89 ((E,p) transforms as a Lorentz four-vector; m^2 = E^2 - p^2) and Section 4.3.4 p. 96 (p = m gamma v, four-vector p = m v with gamma absorbed into the normalisation)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equations (1.100)-(1.101) (p^mu = m U^mu, p^mu = (gamma m, v gamma m), small-v limit)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 6.3 pp. 63-64 (P^a = m u^a with observer energy -g(v,P))"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]), $c>0$, and let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame with stationary observer $n:=e_0$
([[def-inertial-frame-and-inertial-chart]]); let $E_n,q_n$ be the observer
quantities of [[def-sr-observed-energy-momentum-and-kinetic-energy]].

**(a)** For every $P\in\mathrm{cl}(C^+)$ the coordinate components of $P$ in
the frame are $(P^0,P^1,P^2,P^3)=(E_n(P)/c,\,q^1,q^2,q^3)$, where
$q_n(P)=\sum_{i=1}^3q^ie_i$; if $P$ is future timelike then
$E^2=m(P)^2c^4+c^2\sum_{i=1}^3(q^i)^2$ with $E=E_n(P)$.

**(b)** Let $x:I\to A$ be a $C^1$ future timelike worldline
([[def-sr-regular-causal-curve-and-worldline]]) whose chart coordinate path is
$t\mapsto(ct,r(t))$, with coordinate velocity $w:=r'$ and
$\gamma_w:=(1-|w|^2/c^2)^{-1/2}$
([[def-spatial-euclidean-structure-of-an-inertial-frame]],
[[def-rational-power]]); then $|w|<c$, the four-velocity is
$U=\gamma_w(c,w)$ by [[thm-sr-proper-time-and-observer-decomposition]]\,(e),
and for $P=mU$ with $m>0$ constant the components are $P=m\gamma_w(c,w)$, that
is $E_n(P)=m\gamma_wc^2$ and $q_n(P)=\sum_{i=1}^3m\gamma_ww^ie_i$.

**(c)** Let $B(\beta)$ be the passive boost of [[def-lorentz-boost]] with
parameter $\beta=(v/c)s$, where $v\in\mathbb R$, $|v|<c$, and
$s\in\mathbb R^3$ is a unit spatial coordinate vector ($s\cdot s=1$), and let $P'$
denote the components of the same vector $P$ after the coordinate change
$x'=B(\beta)x$, with $B(\beta)$ here denoting its frame matrix. Put
$\gamma_v:=(1-v^2/c^2)^{-1/2}$, $\mathbf p:=(P^1,P^2,P^3)$,
$p_\parallel:=s\cdot\mathbf p$, $\mathbf p_\parallel:=p_\parallel s$ and
$\mathbf p_\perp:=\mathbf p-p_\parallel s$, with the same projections
defining the primed components. Then

$$P'^0=\gamma_v\bigl(P^0-(v/c)\,p_\parallel\bigr),\qquad \mathbf p'_\parallel=\gamma_v\bigl(\mathbf p_\parallel-(v/c)P^0s\bigr),\qquad \mathbf p'_\perp=\mathbf p_\perp,$$

equivalently $E'=\gamma_v(E-v\,p_\parallel)$,
$p'_\parallel=\gamma_v(p_\parallel-vE/c^2)$, $\mathbf p'_\perp=\mathbf p_\perp$. The quadratic
combination is invariant,
$E'^2-c^2|\mathbf p'|^2=E^2-c^2|\mathbf p|^2=m(P)^2c^4$ for future timelike
$P$, while for future null $P$ one has $E=c|\mathbf p|$ and
$E'=c|\mathbf p'|$ in both coordinate systems; in particular the invariant
mass is frame-independent.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; an inertial frame $(o;e_0,e_1,e_2,e_3)$ with $n=e_0$; $P\in\mathrm{cl}(C^+)$ for (a); a $C^1$ future timelike worldline $x$ with chart path $t\mapsto(ct,r(t))$ for (b); a passive boost $B(\beta)$ with $\beta=(v/c)s$, $|v|<c$, $|s|=1$, for (c).

[F1] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): for $P\in\mathrm{cl}(C^+)$, $P=(E_n(P)/c)n+q_n(P)$ is the unique decomposition with $q_n(P)\in n^\perp$; for nonzero future causal $P$, $m(P)=\sqrt{-\eta(P,P)}/c$; and $q_n(P)$ is an element of $V$, not a coordinate triple.

[F2] ([[lem-sr-energy-momentum-observer-identities]], Statement): if $P$ is nonzero future causal, then $E_n(P)>0$ and $\eta(q_n(P),q_n(P))=E_n(P)^2/c^2+\eta(P,P)$; if $P$ is future null, then $E_n(P)=c\,|q_n(P)|$; if $P$ is future timelike with invariant mass $m(P)$, then $E_n(P)^2=m(P)^2c^4+c^2|q_n(P)|^2$; and $m(P)$ depends only on the scalar $\eta(P,P)$.

[F3] ([[def-inertial-frame-and-inertial-chart]], Definition): the inertial chart $x$ sends $p$ to the coordinates relative to $(o;e_0,\dots,e_3)$, so a vector of $V$ has components $P^a$ with $P=\sum_{a=0}^3P^ae_a$.

[F4] ([[thm-sr-proper-time-and-observer-decomposition]], clause (e)): for a $C^1$ future timelike worldline with chart path $t\mapsto(ct,r(t))$, coordinate velocity $w=r'$ and $\gamma_w=(1-|w|^2/c^2)^{-1/2}$, one has $|w(t)|<c$ and $U=\gamma_w(c,w)$.

[F5] ([[def-spatial-euclidean-structure-of-an-inertial-frame]], Definition): $S=\mathrm{span}(e_1,e_2,e_3)=e_0^\perp$, the restriction $\delta$ of $\eta$ to $S$ is positive definite, $|w|=\sqrt{\delta(w,w)}$ is a norm, and with $w=\sum w^ie_i$ one has $\delta(w,z)=w\cdot z=\sum_iw^iz^i$ and $|w|^2=\sum_i(w^i)^2$; the cross product is not used here.

[F6] ([[def-rational-power]] and [[lem-rational-power-laws]]): for $0\le q<c^2$ the expression $(1-q/c^2)^{-1/2}$ is a positive real number whose square is $(1-q/c^2)^{-1}$; with $q=|w|^2$ this gives $\gamma_w^2(1-|w|^2/c^2)=1$ and $\gamma_w>0$ for $|w|<c$.

[F7] ([[def-lorentz-boost]], Definition): $B(\beta)$ is the linear map with matrix $B^0{}_0=\gamma$, $B^0{}_i=B^i{}_0=-\gamma\beta_i$ and $B^i{}_j=\delta^i_j+((\gamma-1)/|\beta|^2)\beta_i\beta_j$ for $\beta\ne0$, and $B(0)=I$, in the basis $(e_0,e_1,e_2,e_3)$, where $\gamma=(1-|\beta|^2)^{-1/2}$.

[F8] ([[thm-sr-tensor-and-current-transformation]], clauses (i) and (vi)): under the coordinate change $x'=\Lambda x+b$ the components of a vector transform as $P'^a=\Lambda^a{}_bP^b$; for $\Lambda=B(\beta)$ this gives $P'^0=\gamma(P^0-\beta\cdot\mathbf p)$ and the displayed spatial formula.

[F9] ([[lem-boost-is-proper-orthochronous-with-inverse]], clauses (i) and (iii)): $B(\beta)$ preserves $\eta$, is invertible, and maps $C^+$ onto $C^+$.

[F10] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is bilinear, so for a vector $P=\sum_aP^ae_a$ in an $\eta$-orthonormal basis, $\eta(P,P)=-(P^0)^2+|\mathbf p|^2$ where $|\mathbf p|^2=\sum_i(P^i)^2$ by [F5].

## Proof

**Proof technique:** read the decomposition of the observer definition in the frame basis, then transform components with the boost matrix and cancel the quadratic combination algebraically.

1.1 Since $n=e_0$, the decomposition of [F1] reads $P=(E_n(P)/c)e_0+q_n(P)$; as $q_n(P)\in n^\perp=S=\mathrm{span}(e_1,e_2,e_3)$ by [F5], write $q_n(P)=\sum_iq^ie_i$, so the coordinate components of $P$ in the basis $(e_0,e_1,e_2,e_3)$ are $(P^0,P^1,P^2,P^3)=(E_n(P)/c,q^1,q^2,q^3)$ by [F3]. [F1, F3, F5]

1.2 Under the hypotheses of (b), [F4] gives $|w|<c$ and $U=\gamma_w(c,w)$, so the chart components of $U$ are $U^0=\gamma_wc$ and $U^i=\gamma_w w^i$; since $w^i$ are the components of $w\in S$, the norm identity $|w|^2=\sum_i(w^i)^2$ of [F5] holds and $\gamma_w>0$ with $\gamma_w^2(1-|w|^2/c^2)=1$ by [F6]. [F4, F5, F6]

1.3 Under the hypotheses of (c), write $p_\parallel:=s\cdot\mathbf p$ and $\mathbf p_\perp:=\mathbf p-p_\parallel s$, so that $\mathbf p=p_\parallel s+\mathbf p_\perp$ with $s\cdot\mathbf p_\perp=0$; for $v\ne0$ the boost $B(\beta)$ with $\beta=(v/c)s$ has the matrix of [F7] with $|\beta|=|v|/c$, $\beta\cdot\mathbf p=(v/c)p_\parallel$ and $((\gamma_v-1)/|\beta|^2)(\beta\cdot\mathbf p)\beta=(\gamma_v-1)p_\parallel s$, and [F8] gives $P'^a=B(\beta)^a{}_bP^b$; hence for $v\ne0$ with $|v|<c$, $\mathbf p'=\mathbf p+(\gamma_v-1)p_\parallel s-\gamma_v(v/c)sP^0=\mathbf p_\perp+\gamma_v\bigl(p_\parallel-(v/c)P^0\bigr)s$ and $P'^0=\gamma_v\bigl(P^0-(v/c)p_\parallel\bigr)$. For $v=0$, the definition gives $B(0)=I$ and $\gamma_v=1$, so the same two final formulas reduce to $\mathbf p\prime=\mathbf p$ and $P\prime{}^0=P^0$ without division by $|\beta|^2$. [F7, F8]

2.1 From [step 1.1], $|q_n(P)|^2=\sum_i(q^i)^2$ by [F5] and $E_n(P)=cP^0$, so for future timelike $P$ the mass-shell identity of [F2] becomes $E^2=m(P)^2c^4+c^2\sum_i(q^i)^2$; this is the second claim of (a). [F2, F5, step 1.1]

2.2 For $P=mU$ with $m>0$ constant, the components of $P$ are $m$ times those of $U$, so by [step 1.2] $P^0=m\gamma_wc$ and $P^i=m\gamma_ww^i$; [step 1.1] identifies $E_n(P)=cP^0=m\gamma_wc^2$ and $q_n(P)=\sum_im\gamma_ww^ie_i$, which is (b). [step 1.1, step 1.2]

2.3 Specialise [step 1.3] and use $E=cP^0$, $E'=cP'^0$ of [step 1.1]: reading the components, $E'=\gamma_v(E-v\,p_\parallel)$ and $s\cdot\mathbf p'=\gamma_v(p_\parallel-vE/c^2)$ because $(v/c)P^0=vE/c^2$, while $\mathbf p'_\perp=\mathbf p_\perp$ because $s\cdot\mathbf p_\perp=0$; this is the component law of (c). [F5, step 1.1, step 1.3]

3.1 Invariance of the quadratic combination: with the formulas of [step 2.3], $\gamma_v^2\bigl[(E-vp_\parallel)^2-c^2(p_\parallel-vE/c^2)^2\bigr]=\gamma_v^2(1-v^2/c^2)\bigl[E^2-c^2p_\parallel^2\bigr]=E^2-c^2p_\parallel^2$ by $\gamma_v^2(1-v^2/c^2)=1$ from [F6], so $E'^2-c^2|\mathbf p'|^2=E^2-c^2p_\parallel^2-c^2|\mathbf p_\perp|^2=E^2-c^2|\mathbf p|^2$; by [F10] and [F2] this equals $-c^2\eta(P,P)=m(P)^2c^4$ for future timelike $P$ (and $0$ for future null $P$, since $\eta(P,P)=0$). [F2, F6, F10, step 2.3]

4.1 If $P$ is future null, [F2] gives $E=c|\mathbf p|$ in the unprimed frame. The primed column is $[P]'=B(\beta)[P]$, the coordinates of the same vector in the primed inertial frame; by [F9] it is nonzero and lies in the future null coordinate cone. Applying [F2] in that frame gives $E'>0$ and $E'=c|\mathbf p'|$. The invariant mass depends only on $\eta(P,P)$, and step 3.1 shows that both frames compute the same quadratic combination. This completes (c). [F2, F8, F9, step 3.1]

5.1 Clause (a) is [step 1.1] with [step 2.1], clause (b) is [step 2.2], and clause (c) is [step 2.3] with [step 3.1] and [step 4.1]; hence all assertions of the lemma hold. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎
