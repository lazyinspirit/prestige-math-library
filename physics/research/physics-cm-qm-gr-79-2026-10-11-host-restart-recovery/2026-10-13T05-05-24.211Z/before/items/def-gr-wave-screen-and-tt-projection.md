---
id: def-gr-wave-screen-and-tt-projection
kind: definition
title: "The wave screen of an observer and propagation direction, and the transverse-traceless projection of a symmetric two-tensor"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-lorentzian-objects, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-lorentz-orthogonality-and-orthogonal-complement, def-causal-classification-of-lorentz-vectors, def-euclidean-inner-product, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-rational-power, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas]
dependency_roles:
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases: mathematical-premise
  def-rational-power: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.55)-(6.57): the transverse-traceless projection P_{mu nu} = eta_{mu nu} - n_mu n_nu and h^TT_{mu nu} = P_mu^rho P_nu^sigma h_{rho sigma} - (1/2) P_{mu nu} P^{rho sigma} h_{rho sigma}, printed pp. 151-152 (PDF pp. 158-159)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1: the transverse-traceless gauge conditions H_{0 mu} = 0 and H^mu{}_mu = 0 with the screen matrix (5.22), printed pp. 211-212 (PDF pp. 218-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3: the transverse-traceless polarization matrix (7.49) and the two-dimensional transverse screen, printed pp. 78-79 (PDF pp. 79-80)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart $x$ and metric components
$\eta_{ab}=\operatorname{diag}(-1,1,1,1)$
([[def-gr-minkowski-model-and-inertial-chart]],
[[def-gr-smooth-lorentzian-objects]]). Since the chart identifies each
$T_p\mathbb R^4$ with $\mathbb R^4$, all objects below are defined by their
components in this chart; they are the components at a point, and a subscript
$p$ is suppressed. Indices are raised and lowered with $\eta$ and $\eta^{-1}$
([[def-gr-inverse-metric-and-musical-isomorphisms]]), and orthogonality is in
the sense of [[def-lorentz-orthogonality-and-orthogonal-complement]].

**(a) Observer, propagation direction, screen.** Let $n=n^a\partial_a$ be an
**observer** of the flat model: $n$ is future-directed, $\eta(n,n)=-1$
([[def-causal-classification-of-lorentz-vectors]]); and let
$s=s^a\partial_a$ be a **propagation direction**: $\eta(s,s)=1$ and
$\eta(n,s)=0$. The pair defines the two-dimensional **screen**
$\Sigma(n,s):=\{v\in\mathbb R^4:\eta(v,n)=0,\ \eta(v,s)=0\}$, on which the
restriction of $\eta$ is positive definite by
[[lem-gr-observer-projection-decomposition]]. The **screen projector** and
the **spatial projector** of the pair are the $(1,1)$-tensors with components

$$p^a{}_b:=\delta^a{}_b+n^an_b-s^as_b,\qquad h^a{}_b:=\delta^a{}_b+n^an_b,$$

and the covariant form of the screen projector is
$p_{ab}:=\eta_{ac}p^c{}_b=\eta_{ab}+n_an_b-s_as_b$. The properties $p^2=p$,
$h^2=h$, $\operatorname{im}p=\Sigma(n,s)$ and $\operatorname{im}h=n^\perp$
are proved in the screen-projector lemma of this page.

**(b) TT projection.** Let $A=(A_{ab})$ be a symmetric covariant $2$-tensor
at a point. Its **transverse-traceless (TT) projection with respect to
$(n,s)$** is the symmetric covariant $2$-tensor

$$\Pi_{n,s}(A)_{ab}:=p_a{}^cp_b{}^dA_{cd}-\tfrac12\,p_{ab}\,p^{cd}A_{cd},\qquad p^{cd}:=\eta^{ce}\eta^{df}p_{ef}.$$

**(c) Screen amplitudes.** Let $(e_1,e_2)$ be an ordered
$\eta$-orthonormal basis of $\Sigma(n,s)$ (which exists by
[[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]] applied
to the positive-definite restriction of $\eta$). For a symmetric covariant
$2$-tensor $A$ the **plus and cross amplitudes of $A$ with respect to
$(e_1,e_2)$** are $A_+:=A(e_1,e_1)$ and $A_\times:=A(e_1,e_2)$; if $A$ is
TT with respect to $(n,s)$ in the sense of clause (d) below, then, extending
the screen dual basis to covectors on $\mathbb R^4$ by
$e^i(v):=\eta(e_i,v)$ for $i=1,2$ (so both vanish on $n,s$),

$$A=A_+\bigl(e^1\otimes e^1-e^2\otimes e^2\bigr)+A_\times\bigl(e^1\otimes e^2+e^2\otimes e^1\bigr).$$

For a TT screen tensor $A$, under the rotation
$e_1'=\cos\theta\,e_1+\sin\theta\,e_2$,
$e_2'=-\sin\theta\,e_1+\cos\theta\,e_2$ of the screen basis the amplitudes
transform as $A_+'=A_+\cos2\theta+A_\times\sin2\theta$ and
$A_\times'=-A_+\sin2\theta+A_\times\cos2\theta$. Here $\sin$ and $\cos$
are the power-series functions of [[def-sine-and-cosine-by-power-series]];
expanding $A(e_1',e_1')$ and $A(e_1',e_2')$ by bilinearity and applying the
addition formulas of [[thm-sine-and-cosine-addition-formulas]] gives the two
displayed transformations.

**(d) TT tensors and TT perturbations.** A symmetric covariant $2$-tensor
$A$ is **transverse-traceless (TT) with respect to $(n,s)$** when
$A(n,\cdot)=0$, $A(s,\cdot)=0$ and $\eta^{ab}A_{ab}=0$. For a symmetric
field $h$ on a nonempty open set $\Omega\subseteq\mathbb R^4$, use the
constant smooth extensions of the fixed component vectors:
$n_q:=n^a\partial_a|_q$ and $s_q:=s^a\partial_a|_q$ for $q\in\Omega$.
Here a symmetric field is a smooth covariant $2$-tensor field with symmetric
components in the sense of [[def-gr-tensor-fields-and-components]]. Then
"TT with respect to $(n,s)$" means
$h_q(n_q,\cdot)=h_q(s_q,\cdot)=0$ and $\eta^{ab}h_{ab}(q)=0$ for every
$q\in\Omega$. It is **spatial with respect to $n$** when
$h_q(n_q,\cdot)=0$ for every $q\in\Omega$.

**(e) Scope.** This item fixes the screen, the two projections and the
amplitude terminology, and states the rotation law of clause (c) as part of
the naming. It asserts no property of $\Pi_{n,s}$ (idempotence, rank, image
and trace are proved in the screen-projector lemma of this page), no relation
to the planar perturbations of the plane-wave definition of this page
(established in the gauge-decomposition lemma of this page) and no physical
interpretation of the amplitudes.
