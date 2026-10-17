---
id: def-emg-charged-scalar-functional
kind: definition
title: "Classical complex-scalar connection derivative and action"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-principal-g-bundle-and-associated-fiber-bundle
  - def-emg-local-potentials-and-circle-data
  - lem-emg-lorentz-hodge-calculus
  - def-emg-lorentzian-forms
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-principal-g-bundle-and-associated-fiber-bundle: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, Gauge Theory, lecture notes, §2.5.2, PDF pp. 89–91 (printed pp. 78–80)"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2: the Abelian gauge field coupled to a complex scalar through a gauge-covariant derivative; material response and vortex results are not adopted."
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.5.3, PDF p. 193 (printed p. 186)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.5.3: metric variation of a scalar-field action. The charged bundle, normalization and local variation formulas are specified here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5, equations (5.35)–(5.38), PDF p. 146 (printed p. 139)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 5: the on-shell variational meaning of the matter Hilbert tensor under diffeomorphisms; the charged action is defined and checked locally here."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N,o)$ be an oriented time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$ as in [[def-emg-lorentzian-forms]]. Set $U(1):=\{z\in\mathbb C:|z|=1\}$ with multiplication. Let $P\to M$ be a smooth right principal $U(1)$ bundle in the sense of [[def-principal-g-bundle-and-associated-fiber-bundle]], with a fixed smooth connection. Choose local trivializations and normalized real connection potentials $A_i$ as in [[def-emg-local-potentials-and-circle-data]]. On any overlap neighborhood admitting a smooth real phase lift $f_{ij}$, write $g_{ij}=e^{if_{ij}}$. Use the dual representation $\rho_k(z):=z^{-k}$ and define charged scalar representatives by the global transition rule $\varphi_j=g_{ij}^{k}\varphi_i$, equivalently $e^{ikf_{ij}}\varphi_i$ on each phase-lift neighborhood; the connection rule there is

$$A_j=A_i+\kappa_0\,df_{ij}.$$

Here $\kappa_0>0$ is the chosen circle normalization with $[\kappa_0]=\mathrm{Wb}$, $k\in\mathbb Z$ is the representation weight, and $\lambda:=k/\kappa_0$ has units $\mathrm{Wb}^{-1}$. Because $g_{ij}g_{jk}=g_{ik}$ and $k$ is an integer, the maps $g_{ij}^{k}$ satisfy the scalar transition cocycle. A charged scalar is a family of smooth local functions $\varphi_i$ satisfying this rule; all phase-lift calculations below are local, and no global phase lift is assumed. The constant $c>0$ is the length-to-time conversion parameter of [[def-emg-lorentzian-forms]], with units $\mathrm m\,\mathrm s^{-1}$. Define $F|_{U_i}:=dA_i$; the transition law gives $dA_j=dA_i$, so $F$ is a global curvature two-form. In a global real-potential model on a trivial bundle, one may instead take a global $A$ and any real $\lambda$; no charge quantization is imposed there.

In a local trivialization define the gauge-covariant derivative and its lower-index one-form by

$$P_a:=(D\varphi)_a:=\partial_a\varphi_i-i\lambda A_{i,a}\varphi_i.$$

The transition laws give $P_{j,a}=e^{ikf_{ij}}P_{i,a}$, since $\lambda\kappa_0=k$. For any charged covector $Q_b$ with the same phase transition, define the gauge- and metric-covariant derivative by $D_aQ_b:=\nabla_aQ_b-i\lambda A_aQ_b$ in a local trivialization; for a charged scalar $\eta$, set $D_a\eta:=\partial_a\eta-i\lambda A_a\eta$. Conjugate fields use the opposite gauge sign. Thus $D_aP_b$ is a well-defined charged covariant two-tensor, and $D_aP^a:=g^{ab}D_aP_b$. Consequently $|\varphi|^2$ and $g^{ab}\overline{P_a}P_b$ are global scalar fields. Let $V:\mathcal U\to\mathbb R$ be smooth on an open set $\mathcal U\subseteq\mathbb R$ containing the range of $|\varphi|^2$, write $V'$ for its ordinary real derivative, and choose a positive normalization constant $K_\varphi>0$.

The kinetic scalar $g^{ab}\overline{P_a}P_b$ is real because its complex conjugate equals itself by symmetry of $g^{ab}$. Put

$$L_\varphi:=g^{ab}\overline{P_a}P_b+V(|\varphi|^2),\qquad S_\varphi:=-\frac{K_\varphi}{2c}\int_M L_\varphi\,\mathrm{vol}_g.$$

For SI dimensional bookkeeping in length coordinates, take $[\varphi]=1$, $[A_a]=\mathrm{Wb}\,\mathrm m^{-1}$, $[P_a]=\mathrm m^{-1}$, $[V]=\mathrm m^{-2}$, and $[K_\varphi]=\mathrm J\,\mathrm m^{-1}$; then $S_\varphi$ has units $\mathrm J\,\mathrm s$. These are formal dimensional assignments, not measured values or physical postulates. On noncompact $M$, the integral is used when finite; otherwise only differences between configurations agreeing outside a compact set are defined, so every variation below is a compactly supported integral.

Allowed first variations are compactly supported smooth complex-section variations $\delta\varphi$, compactly supported real global one-form variations $\alpha=\delta A$ added to every local $A_i$ (so the same bundle transition functions are retained), and compactly supported symmetric inverse-metric variations $q^{ab}=\delta g^{ab}$. The formula defines a classical mathematical functional; it asserts no quantum interpretation, value of $\hbar$, or material-response model.

## Facts & Assumptions

**Given:** The smooth Lorentzian manifold, a fixed principal circle bundle and connection, local potentials and transition functions, a smooth scalar section, constants, and a smooth potential function as specified in the Definition.

[F1] A right principal bundle has local equivariant charts and the chosen transition data obey $A_j=A_i+\kappa_0df_{ij}$ on phase-lift neighborhoods and the circle cocycle. ([[def-principal-g-bundle-and-associated-fiber-bundle]], [[def-emg-local-potentials-and-circle-data]])

[F2] The exterior derivative satisfies $d^2=0$ on smooth forms. ([[lem-emg-lorentz-hodge-calculus]])

[F3] Compactly supported smooth top forms on an oriented smooth manifold have a well-defined integral; in particular the action's compactly supported differences are defined. ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]])

[A1] In the circle-bundle branch, $k\in\mathbb Z$ and $\lambda\kappa_0=k$. In the separate trivial global-potential branch, $\lambda$ may be any real number.

## Proof

**Proof technique:** verify that the scalar transition maps form a line bundle, that the covariant derivative and action density patch globally, and that the stated dimensions agree.

1.1 On every triple overlap, $g_{ij}g_{jk}=g_{ik}$ and integer $k$ give $g_{ij}^{k}g_{jk}^{k}=g_{ik}^{k}$, so the scalar transition data satisfy the cocycle. On any local phase-lift neighborhood, changing $f_{ij}$ by $2\pi n$ leaves $e^{ikf_{ij}}$ unchanged. Also $dA_j=dA_i+\kappa_0d^2f_{ij}=dA_i$ by [F2]; these local equalities patch because they hold near every point of each overlap, so $F$ is global. [F1, F2, A1, algebra]

1.2 Expanding the derivative gives $P_{j,a}=e^{ikf_{ij}}[\partial_a\varphi_i+ik(\partial_af_{ij})\varphi_i-i\lambda A_{i,a}\varphi_i-i\lambda\kappa_0(\partial_af_{ij})\varphi_i]$. The phase-derivative terms cancel because $\lambda\kappa_0=k$, so $P_{j,a}=e^{ikf_{ij}}P_{i,a}$. Hence $|\varphi|^2$ and $g^{ab}\overline{P_a}P_b$ are independent of the local trivialization. [F1, A1, algebra]

1.3 Complex conjugation and exchange of dummy indices show $\overline{g^{ab}\overline{P_a}P_b}=g^{ab}\overline{P_a}P_b$. Since $V$ is real-valued, $L_\varphi$ is a global real scalar. Its product with the oriented metric volume form is a real four-form, so compactly supported action differences have the well-defined integral supplied by [F3]. [given, F3, algebra]

1.4 Adding the same real global one-form $\alpha$ to every $A_i$ leaves $A_j-A_i=\kappa_0df_{ij}$ unchanged. Therefore the prescribed connection variations retain the local transition data and remain in the same bundle sector. [F1, given, algebra]

2.1 In length-coordinate components, $[L_\varphi]=\mathrm m^{-2}$ and $[\mathrm{vol}_g]=\mathrm m^4$, while $[K_\varphi/c]=(\mathrm J\,\mathrm m^{-1})/(\mathrm m\,\mathrm s^{-1})=\mathrm J\,\mathrm s\,\mathrm m^{-2}$. Therefore $S_\varphi$ has units $\mathrm J\,\mathrm s$. [given, algebra] ∎

## Remarks

- The seven typed foundational replacement carriers declared in `deps` are now authored on emg-mg02; no independent acceptance is asserted: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]].
- The published Lorentzian supplier carries the stated $\mathrm{AC}_\omega$ convention through its tangent-bundle setup; the local patch calculation here makes no further choice. No full axiom of choice is used. ([[def-countable-choice]])
- In a nontrivial circle sector the integer weight condition $\lambda\kappa_0\in\mathbb Z$ is the representation condition selected for this bundle. In a trivial global real-potential sector $\lambda$ may be any real number; the two cases are not identified.

