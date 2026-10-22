---
id: post-tgrx-wedge-modular-model
kind: postulate
title: Free scalar wedge data and modular-geometric bridge
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-qft-framework-units
  - def-qft-scalar-mass-shell
  - def-qft-fock-and-test-spaces
  - post-qft-free-field-model
  - def-qft-free-field-observables
  - lem-qft-scalar-poincare-action
  - lem-qft-smeared-free-scalar
  - def-qsmx-von-neumann-algebra
  - def-qsmx-standard-modular-data
  - thm-qsmx-tomita-takesaki
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  def-qft-scalar-mass-shell: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  post-qft-free-field-model: formulation-prerequisite
  def-qft-free-field-observables: formulation-prerequisite
  lem-qft-scalar-poincare-action: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  def-qsmx-von-neumann-algebra: formulation-prerequisite
  def-qsmx-standard-modular-data: formulation-prerequisite
  thm-qsmx-tomita-takesaki: formulation-prerequisite
physical_scope: "One selected massive, noninteracting real scalar vacuum representation on four-dimensional affine Minkowski spacetime, its right-wedge local Weyl algebra, and the assumed modular/boost bridge. This scope includes neither a detector model nor an empirical temperature measurement, an interacting QFT, or a general curved-spacetime result."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Joseph J. Bisognano and Eyvind H. Wichmann, On the duality condition for a Hermitian scalar field, Journal of Mathematical Physics 16 (1975), 985–1007"
      url: "https://denebola.if.usp.br/~jbarata/leituras-recomendadas/BisognanoWichmann-01-DualityConditionHermitianScalarField_985_1_online.pdf"
      locator: "Complete 24-page PDF; §II (PDF pp. 2–5), §IV and Theorem 1 (pp. 7–10), and §V (pp. 10–15). The source proves analytic wedge relations under its Wightman assumptions; the carrier adopts the stated bridge as a model input and does not import those assumptions implicitly."
    - title: "Daniele Guido, Modular theory for the von Neumann algebras of local quantum physics, complete lecture notes, arXiv:0812.1511"
      url: "https://arxiv.org/pdf/0812.1511"
      locator: "Complete 28-page PDF; §2.1 (PDF pp. 2–10) on the free scalar one-particle/Fock construction; §§3.1.1–3.1.2 (pp. 14–17) on the one-particle and Wightman Bisognano–Wichmann relations; §3.3 (p. 20) on KMS interpretation. The note uses its own (+---) metric and boost parameter; the local statement fixes the sign explicitly."
    - title: "Edward Witten, Notes on Some Entanglement Properties of Quantum Field Theory, complete lecture notes, arXiv:1803.04993"
      url: "https://arxiv.org/pdf/1803.04993"
      locator: "Complete 80-page PDF; §§5.3–5.4 (PDF pp. 53–56), the Bisognano–Wichmann holomorphy sketch and accelerated orbit. The author explicitly calls the preceding path-integral/factorization account nonrigorous; this source is used for convention and interpretation context, not as the local proof."
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, arXiv:1401.2026"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page review; §2.2(a), PDF pp. 20–22, Rindler wedge, boost-time KMS state and the distinction between the algebraic state and detector interpretation. The displayed two-point example sets the mass to zero; it is context, not a premise for the selected massive model."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, arXiv:gr-qc/9912119"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, printed pp. 11–16 (PDF pp. 12–16), distinguishing Unruh and Hawking states and the boost/KMS interpretation. The review uses natural units; no Hawking or black-hole claim is imported here."
---

## Postulate

Assume both the Axiom of Choice and the Axiom of Countable Choice. Fix a
massive real scalar species with rest mass $m_{\mathrm{rest}}>0$ in kilograms.
Use four-dimensional affine Minkowski spacetime with metric
$\eta=\operatorname{diag}(-1,1,1,1)$ and length coordinates
$x=(x^0,x^1,x^2,x^3)$, where $x^0=ct$ and $c>0$ has units
$\mathrm{m\,s^{-1}}$. Set $\mu=m_{\mathrm{rest}}c/\hbar>0$ in
$\mathrm{m^{-1}}$, where $\hbar>0$ is in $\mathrm{J\,s}$. The future shell,
one-particle space, and measure are
$$H_\mu^+=\{(p^0,\mathbf p):(p^0)^2-|\mathbf p|^2=\mu^2,\ p^0>0\},\qquad \mathcal H_\mu=L^2(H_\mu^+,d\nu_\mu),\qquad d\nu_\mu=\frac{d^3\mathbf p}{(2\pi)^3\,2\sqrt{|\mathbf p|^2+\mu^2}}.$$
Take the scalar Hilbert space to be the bosonic symmetric Fock space
$\mathcal H=\mathcal F_s(\mathcal H_\mu)$ and its unit zero-particle vector
to be $\Omega$.

For an open set $O\subseteq\mathbb R^4$ and real
$f\in C_c^\infty(O;\mathbb R)$, define
$$K_\mu f(p)=\int_{\mathbb R^4}f(x)e^{i(p^0x^0-\mathbf p\cdot\mathbf x)}\,d^4x, \qquad W_\mu(f)=W_{\mathrm{Segal}}(\sqrt2\,K_\mu f).$$
Let $\mathfrak A_s(O)$ be the operator-norm closure of the unital
$*$-algebra generated by all these bounded Weyl unitaries, and set
$W_R=\{x\in\mathbb R^4:x^1>|x^0|\}$ and
$M(W_R)=\mathfrak A_s(W_R)''\subseteq\mathcal B(\mathcal H)$. Here
$\mathcal B(\mathcal H)$ denotes the bounded linear operators;
$\mathcal S'$ is the set of bounded operators commuting with every member of
$\mathcal S$, and $\mathcal S''=(\mathcal S')'$. Thus $M(W_R)$ is a concrete
von Neumann algebra in the chosen double-commutant convention.

For dimensionless rapidity $s\in\mathbb R$, define the future-directed boost
by
$$\Lambda_W(s)(x^0,x^1,x^2,x^3) =(x^0\cosh s+x^1\sinh s,\ x^0\sinh s+x^1\cosh s,\ x^2,\ x^3).$$
Use its scalar Fock implementation: on the one-particle space
$[u_\mu(\Lambda)\psi](p)=\psi(\Lambda^{-1}p)$, and on the $n$-particle
symmetric sector $U(\Lambda)=u_\mu(\Lambda)^{\otimes_s n}$, with the vacuum
sector fixed. The QFT Fock pairing is linear in its second argument; for the
modular definitions use the equivalent first-variable-linear pairing
$\langle u,v\rangle_1:=\langle v,u\rangle_2$. Thus the vacuum vector state
is $\omega_W(X)=\langle X\Omega,\Omega\rangle_1
=\langle\Omega,X\Omega\rangle_2$. Assume explicitly that $\Omega$ is cyclic and separating for
$M(W_R)$, meaning $\overline{M(W_R)\Omega}=\mathcal H$ and
$X\Omega=0$ for $X\in M(W_R)$ implies $X=0$. The Tomita operator is the
closure of $S_{W,0}(X\Omega)=X^*\Omega$ on $M(W_R)\Omega$; write its polar
decomposition as $S_W=J_W\Delta_W^{1/2}$, in the standard modular-data
convention.

As an additional model interface, adopt
$$\Delta_W^{it}=U(\Lambda_W(-2\pi t))\qquad(t\in\mathbb R).$$
This geometric identity and cyclic-separating property are explicit adopted
assumptions for this selected model. The abstract Tomita–Takesaki theorem
supplies modular automorphisms and their KMS property, but this carrier does
not use it as a proof that the modular unitaries equal spacetime boosts. No
tensor-product factorization of the continuum Hilbert space across the wedge
and its complement is assumed.

## Postulate references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-qft-framework-units]]

[[def-qft-scalar-mass-shell]]

[[def-qft-fock-and-test-spaces]]

[[post-qft-free-field-model]]

[[def-qft-free-field-observables]]

[[lem-qft-scalar-poincare-action]]

[[lem-qft-smeared-free-scalar]]

[[def-qsmx-von-neumann-algebra]]

[[def-qsmx-standard-modular-data]]

[[thm-qsmx-tomita-takesaki]]

## Remarks

The free scalar construction and local Weyl algebra use only the scalar branch
of the selected QFT model. The pairing conversion above makes the QFT vector
state identical to the state used by the first-variable-linear modular
convention. No charge-number domain, Dirac field, detector instrument,
observation, or thermal density matrix is imported.
