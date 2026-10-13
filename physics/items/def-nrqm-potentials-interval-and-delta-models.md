---
id: def-nrqm-potentials-interval-and-delta-models
aliases: [ nrqm-potentials-interval-and-delta-models ]
kind: definition
domain: physics
title: "The declared interval models with Dirichlet and Robin boundary
  conditions, and the declared zero-range (delta) model"
status: published
origin: session
dependency_level: 11
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-potentials-one-dimensional-line-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-intervals-hilbert-sobolev-spaces,
    lem-nrqm-intervals-weak-derivative-ac-representative,
    thm-nrqm-intervals-dirichlet-diagonal-domain-identification,
    thm-nrqm-intervals-sine-on-completeness,
    thm-nrqm-intervals-separated-robin-green-resolvent,
    thm-nrqm-intervals-delta-interface-operator,
    lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-weak-derivative-ac-representative: mathematical-premise
  thm-nrqm-intervals-dirichlet-diagonal-domain-identification: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  thm-nrqm-intervals-separated-robin-green-resolvent: mathematical-premise
  thm-nrqm-intervals-delta-interface-operator: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The pair's declared confined and point-interaction models of
  the effective one-dimensional massive particle: the interval model with
  Dirichlet endpoint conditions, the interval model with separated Robin
  endpoint conditions with declared real boundary parameters, and the zero-range
  (delta) interface model with a declared real coupling. The boundary
  conditions, boundary parameters and coupling are additional model assumptions
  of the pair; they are not derived from the line model, from P5 or from any
  material system, and no experiment, count or measured value is asserted. The
  operator assignments are well defined as mathematical operators on their
  displayed domains; their self-adjointness and spectra are established by the
  pair's theorems and are not presupposed here."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.1.2
        printed pages 24-27 (PDF pages 27-30): the infinite potential well, its
        boundary conditions and its spectrum; Section 2.3.2 printed pages 48-49
        (PDF pages 51-52): the delta-function potential, its matching condition
        and its bound state"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.1
        printed pages 75-79 (PDF pages 83-87): the square potential well with
        matching conditions and bound-state spectrum"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Sections 9.1-9.2, printed pages 181-195 (PDF pages 193-207):
        Sturm-Liouville operators on intervals and separated self-adjoint
        boundary conditions (Theorem 9.6), with the Dirichlet condition as the
        case alpha=0 (eqs. (9.22)-(9.25)); PDF page = printed page + 12"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the framework postulates and units of clause (a)
of [[def-nrqm-potentials-one-dimensional-line-model]], and the vocabulary of
its clauses (b)-(f): the effective one-dimensional state space, the position
and momentum assignments, the assigned energy operator $H_{V}=H_{0}^{\mathrm{lin}}+M_{V}$
for a real bounded measurable potential, bound states, stationary solutions
and declared generalized stationary solutions. Fix $m>0$, $\hbar>0$ and the
units of [[def-nrqm-framework-quantities-and-units]].

**(b) Dirichlet interval model.** Fix $0<L<\infty$ and a real $V\in
C([0,L];\mathbb R)$, read as a potential energy in joules, and put
$\tilde V:=(2m/\hbar^{2})V$, a real continuous function on $[0,L]$ with the
dimension of an inverse square length under the conventions of the framework;
the factor $2m/\hbar^{2}$ has unit $\mathrm{J^{-1}\,m^{-2}}$, so the products
in clause (c) of the next item are dimensionally consistent. The **Dirichlet
interval model** declares the state space $L^{2}(0,L;\mathbb C)$ of
almost-everywhere classes with the pairing linear in the first argument
([[def-nrqm-intervals-hilbert-sobolev-spaces]]) and the assigned energy
operator
$$H_{D,V}:=-\frac{\hbar^{2}}{2m}D^{2}+M_{V},\qquad D(H_{D,V}):=\{u\in H^{2}(0,L):u^{*}(0)=u^{*}(L)=0\},$$
where $D^{2}$ is the second weak derivative and $u^{*}$ the continuous
representative of [[lem-nrqm-intervals-weak-derivative-ac-representative]]; in
the notation of [[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]]
this operator is $(\hbar^{2}/2m)(A_{D}+M_{\tilde V})$ with
$D(A_{D})=\{u\in H^{2}(0,L):u^{*}(0)=u^{*}(L)=0\}$, and for $V=0$ its
declared free eigenpairs are the pairs
$\bigl(\frac{\hbar^{2}}{2m}(\frac{n\pi}{L})^{2},\,e_{n}\bigr)$ with
$e_{n}(x)=\sqrt{2/L}\,\sin(n\pi x/L)$, $n\ge1$, read from
[[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]] and
[[thm-nrqm-intervals-sine-on-completeness]]. The vanishing endpoint condition
is a declared idealization of an infinitely high wall at each endpoint; the
pair does not derive it from the line model, and no reflection coefficient or
wall model of a material system is asserted.

**(c) Robin interval model.** Fix $0<L<\infty$, real $\alpha,\beta$, read as
**declared boundary parameters** in $\mathrm{m^{-1}}$, a real $V\in
C([0,L];\mathbb R)$ and $\tilde V:=(2m/\hbar^{2})V$ as in (b). The **Robin
interval model** declares the state space $L^{2}(0,L;\mathbb C)$ and the
assigned energy operator
$$H_{\alpha\beta,V}:=-\frac{\hbar^{2}}{2m}D^{2}+M_{V},\qquad D(H_{\alpha\beta,V}):=\{u\in H^{2}(0,L):u'^{*}(0)=\alpha u^{*}(0),\ u'^{*}(L)=\beta u^{*}(L)\},$$
the operator $(\hbar^{2}/2m)\,A$ of
[[thm-nrqm-intervals-separated-robin-green-resolvent]] with potential
$\tilde V$; the boundary parameters are declared model parameters, not derived
quantities, and no physical interpretation of a particular value of $\alpha$
or $\beta$ is asserted. The Dirichlet model of (b) is not the limit
$\alpha,\beta\to\infty$ in this definition; the Dirichlet condition is a
separate declared boundary condition.

**(d) Zero-range (delta) interface model.** Fix a real **coupling** $g$, read
in joule metres, and put $\alpha_{g}:=2mg/\hbar^{2}$, a real number in
$\mathrm{m^{-1}}$. Let $A_{\alpha_{g}}$ be the delta interface operator of
[[thm-nrqm-intervals-delta-interface-operator]] on
$L^{2}(\mathbb R;\mathbb C)$,
$$D(A_{\alpha_{g}})=\{u\in H^{1}(\mathbb R):u|_{(0,\infty)},u|_{(-\infty,0)}\in H^{2},\ u'^{*}(0+)-u'^{*}(0-)=\alpha_{g}u^{*}(0)\},\qquad A_{\alpha_{g}}u=-D^{2}u,$$
where the displayed action is understood piecewise: $(A_{\alpha_g}u)|_{(0,\infty)}=-D^2(u|_{(0,\infty)})$ and $(A_{\alpha_g}u)|_{(-\infty,0)}=-D^2(u|_{(-\infty,0)})$, with each weak derivative taken on that open half-line. The resulting two $L^2$ classes are glued across the null point $0$; $D^2u$ here is not the global weak second derivative on $\mathbb R$, which need not be an $L^2$ class when the first derivative jumps. Declare the **zero-range model** with coupling $g$ to be the model whose
assigned energy operator is
$$H_{g}:=\frac{\hbar^{2}}{2m}\,A_{\alpha_{g}},\qquad D(H_{g}):=D(A_{\alpha_{g}}).$$
The interface condition $u'^{*}(0+)-u'^{*}(0-)=(2mg/\hbar^{2})u^{*}(0)$ is the
declared realization of a zero-range interaction at the origin: the pair reads
it as the model counterpart of a formally written term $g\,\delta(x)$ in the
energy expression, while recording that $\delta$ is not a function and that
the model is defined by the interface condition and not by an $L^{2}$
potential. The scaling of the operator is $(\hbar^{2}/2m)$ times the
mathematical operator, by the conventions of clause (c) of
[[def-nrqm-potentials-one-dimensional-line-model]]. No identification of a
concrete impurity or material with the model is asserted.

**(e) Units, scope and status.** All three assignments are declared energy
operators with the joule as declared unit. The interval-spectra theorem proves
self-adjointness, compact resolvent, the complete discrete eigenbases and the
stated spectra for $H_{D,V}$ and $H_{\alpha\beta,V}$. For $H_g$, the
zero-range theorem proves self-adjointness and the stated classification of
negative eigenvalues and bound states; it does not assert a complete description
of the spectrum or an eigenbasis for $H_g$. These properties are established
by the theorems of this page, not presupposed here. The boundary conditions,
boundary parameters and coupling are declared assumptions of the pair; nothing
in this definition asserts that a laboratory system realizes them, and no
count, rate or measured value is recorded.
