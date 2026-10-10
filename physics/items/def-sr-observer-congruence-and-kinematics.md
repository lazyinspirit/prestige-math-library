---
id: def-sr-observer-congruence-and-kinematics
kind: definition
domain: mathematics
title: "Kinematics of an observer congruence: acceleration, expansion, shear, vorticity and Born rigidity"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-chart-tetrad-and-congruence-distinction, def-flat-covariant-derivative-on-affine-minkowski-space, thm-sr-proper-time-and-observer-decomposition, def-causal-classification-of-lorentz-vectors, def-lorentz-orthogonality-and-orthogonal-complement, def-ck-tensor-field-on-minkowski-space, def-sr-affine-minkowski-model, def-sr-four-velocity-and-four-acceleration, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
dependency_roles:
  def-sr-chart-tetrad-and-congruence-distinction: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
sources:
  references:
    - title: "D. Giulini, Algebraic and geometric structures of Special Relativity, arXiv:math-ph/0602018: Section 5.5 pp. 41-49 (Definition 7 and equation (123) of Born rigidity, equations (125)-(126), Proposition 14, Lemma 16, Theorem 15 part 1, Lemmas 17-18, Theorem 19 part 2); signature (+---) converted to (-+++)"
      url: "https://arxiv.org/pdf/math-ph/0602018"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Definition

Let $n$ be an observer congruence on a nonempty open subset $\Omega\subseteq A$ ([[def-sr-chart-tetrad-and-congruence-distinction]]), let $\nabla$ be the flat covariant derivative of the affine model ([[def-flat-covariant-derivative-on-affine-minkowski-space]]), and write $n_b:=\eta_{bc}n^c$ for the associated covector field ([[def-ck-tensor-field-on-minkowski-space]]).

**(a) Rest metric and projection.** Define $h(v,w):=\eta(v,w)+\eta(n,v)\eta(n,w)$ for vectors at the same point, so that $h=\eta+n^\flat\otimes n^\flat$ in components. Then $h(v,w)=\eta(h(v),h(w))$ for the orthogonal projection $h(v):=v+\eta(n,v)n$ of [[thm-sr-proper-time-and-observer-decomposition]] clause (c). At every point $h$ is symmetric with radical spanned by $n(p)$, and its restriction to $n(p)^\perp$ is positive definite ([[def-lorentz-orthogonality-and-orthogonal-complement]]).

**(b) Acceleration.** The **acceleration** of the congruence is $a:=\nabla_nn$. Then $\eta(n,a)=0$ pointwise, because $2\eta(n,\nabla_nn)=n\bigl(\eta(n,n)\bigr)=0$; consequently $a(p)$ is spacelike or zero by the causal classification ([[def-causal-classification-of-lorentz-vectors]]). In the model's physical interpretation the four-acceleration of the congruence observers is $c^2a$ and its magnitude is $c^2\sqrt{\eta(a,a)}$; the numerical units belong to the model's SI conventions and are not part of the affine geometry ([[def-sr-four-velocity-and-four-acceleration]]).

**(c) Kinematic decomposition.** Set $\theta_{ab}:=h_a{}^ch_b{}^d\nabla_{(c}n_{d)}$ and $\omega_{ab}:=h_a{}^ch_b{}^d\nabla_{[c}n_{d]}$, where $\nabla_{(c}n_{d)}=\tfrac12(\nabla_cn_d+\nabla_dn_c)$ and $\nabla_{[c}n_{d]}=\tfrac12(\nabla_cn_d-\nabla_dn_c)$. Then

$$\nabla_an_b=-n_aa_b+\theta_{ab}+\omega_{ab},$$

with $\theta$ symmetric, $\omega$ antisymmetric, both horizontal ($\theta_{ab}n^b=\omega_{ab}n^b=n^a\theta_{ab}=n^a\omega_{ab}=0$), and this decomposition is unique with these properties. The tensor $\theta$ is the **expansion (and shear) tensor**, $h^{ab}\theta_{ab}$ is the **expansion scalar** (write it as $\vartheta:=h^{ab}\theta_{ab}$ to distinguish it from the tensor), the **shear tensor** is $\sigma_{ab}:=\theta_{ab}-(\vartheta/3)h_{ab}$, and $\omega$ is the **vorticity 2-tensor**. Here $h^{ab}:=\eta^{ac}\eta^{bd}h_{cd}$ and all indices are moved with $\eta$.

**(d) Born rigidity.** For a smooth covariant two-tensor $T$, the Lie derivative used here is $(\mathcal L_nT)(X,Y):=n(T(X,Y))-T([n,X],Y)-T(X,[n,Y])$; brackets have the meaning given in the flat-derivative supplier. The congruence is **Born rigid** (it describes a rigid motion) when $\mathcal L_nh=0$. Since $(\mathcal L_nh)_{ab}=2\theta_{ab}$, Born rigidity is equivalent to $\theta_{ab}=0$ for every $a,b$, equivalently to the projected symmetrized derivative of $n^\flat$ vanishing.

**(e) Scope.** These are kinematic definitions for a prescribed smooth field $n$ on the affine model; no dynamical equation, matter model, global synchronization or completeness is assumed, and $a$, $\theta$, $\omega$ and $h$ are local objects on $\Omega$.

## Remarks

- **Clause (a) is an expansion identity.** Using $\eta(n,n)=-1$ and bilinearity, $\eta(h(v),h(w))=\eta(v,w)+2\eta(n,v)\eta(n,w)+\eta(n,v)\eta(n,w)\eta(n,n)=\eta(v,w)+\eta(n,v)\eta(n,w)=h(v,w)$; the radical and positive-definiteness statements are clause (c) of [[thm-sr-proper-time-and-observer-decomposition]] together with [[def-lorentz-orthogonality-and-orthogonal-complement]].

- **Clause (b) computes the acceleration as a derivative along $n$.** With metric compatibility of $\nabla$ ([[def-flat-covariant-derivative-on-affine-minkowski-space]] clause (c)) one has $n\bigl(\eta(n,n)\bigr)=\nabla_n\bigl(\eta(n,n)\bigr)=2\eta(n,\nabla_nn)$, and $\eta(n,n)=-1$ has zero derivative; hence $\eta(n,a)=0$, so $a$ is spacelike wherever it is nonzero. The identification of the observers' four-acceleration with $c^2a$ is the chain rule: parametrize an observer by the congruence parameter $s$, so that its tangent is $x'(s)=n(x(s))$ ([[def-sr-chart-tetrad-and-congruence-distinction]] clause (c)); its four-velocity is $U=x'/\tau'=cn$ because $\eta(x',x')=-1$ forces $\tau'=1/c$ ([[def-sr-four-velocity-and-four-acceleration]]), and the smooth components $n^a$ are totally differentiable with Jacobian $(\partial_bn^a)$ by [[thm-continuous-partial-derivatives-imply-total-differentiability]]. Applying [[thm-chain-rule-for-total-derivatives]] to $n^a\circ x$ in an inertial chart (the curve parameter domain is an open interval) gives $U'(s)=c\,\partial_bn^a(x(s))x'^b(s)=c\,(\nabla_nn)^a(x(s))$, so the four-acceleration $A=U'/\tau'=c^2a$ ([[thm-chain-rule-for-total-derivatives]]).

- **Clause (c) is a pointwise algebra identity.** Projecting $\nabla_an_b$: since $h_a{}^c\nabla_cn_d=\nabla_an_d+n_a\nabla_nn_d=\nabla_an_d+n_aa_d$ (because $h_a{}^c=\delta_a^c+n_a n^c$) and $n^d\nabla_an_d=\tfrac12\nabla_a(\eta(n,n))=0$, one gets $h_a{}^ch_b{}^d\nabla_cn_d=\nabla_an_b+n_aa_b$ from the identity $\eta(n,a)=0$; hence $\nabla_an_b=-n_aa_b+\theta_{ab}+\omega_{ab}$. Uniqueness holds because contracting with $n^a$ recovers $a_b$, after which $\nabla_an_b+n_aa_b$ is a fixed tensor whose symmetric and antisymmetric parts determine $\theta$ and $\omega$. Horizontality follows from $h_b{}^dn^b=0$, and symmetry and antisymmetry of $\theta$ and $\omega$ are part of their definitions. All indices are raised and lowered with $\eta$ and the computations are finite-dimensional pointwise algebra.

- **Clause (d) is the standard rigidity identity.** For the torsion-free metric-compatible $\nabla$ one has $(\mathcal L_n\eta)_{ab}=\nabla_an_b+\nabla_bn_a$ and $(\mathcal L_nn^\flat)_b=n^a\nabla_an_b+n_a\nabla_bn^a=a_b$, since $n_a\nabla_bn^a=\tfrac12\nabla_b(\eta(n,n))=0$. Hence $(\mathcal L_nh)_{ab}=(\mathcal L_n\eta)_{ab}+a_an_b+n_aa_b=(\nabla_an_b+\nabla_bn_a)+a_an_b+n_aa_b$, and substituting the decomposition of (c) cancels the four acceleration terms and leaves $2\theta_{ab}$; therefore $\mathcal L_nh=0$ if and only if the expansion tensor vanishes, $\theta_{ab}=0$ for every $a,b$. This is the equation recorded as Definition 7/(123) of the cited Giulini section, in the $(-+++)$ convention of this library.

- **No global or dynamical assertion.** The definitions are local on $\Omega$; in particular the rest spaces $n(p)^\perp$ are not asserted to assemble into hypersurfaces, and the Frobenius integrability condition for that assembly is a separate statement on this page.
