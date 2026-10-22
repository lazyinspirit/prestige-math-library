---
id: pthm-nrqmx-landau-direct-integral
kind: physics-theorem
domain: physics
library: physics
title: Exact planar Landau spectrum in the linear gauge
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - post-nrqmx-magnetic-model-extension
  - lem-nrqmx-landau-form-diagonalization
  - thm-nrqmx-closed-form-representation
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  post-nrqmx-magnetic-model-extension: physical-assumption
  lem-nrqmx-landau-form-diagonalization: mathematical-premise
  thm-nrqmx-closed-form-representation: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
physical_scope: "Exact spectral prediction of the adopted spinless nonrelativistic point-particle model on the infinite plane, for a constant nonzero perpendicular field in the unbounded linear Landau gauge. It makes no finite-sample degeneracy count, boundary claim, or empirical assertion."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Applications of Quantum Mechanics, §1.2, Landau gauge and Landau levels"
      url: "https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf"
    - title: "V. P. Nair, Notes on Quantum Mechanics, §13.2, uniform-field Landau levels"
      url: "https://nair.ccny.cuny.edu/Notes-QM.pdf"
    - title: "Aram Harrow, MIT 8.06 Spring 2016 Lecture Notes, Chapter 4, §3.2, Landau levels"
      url: "https://ocw.mit.edu/courses/8-06-quantum-physics-iii-spring-2016/6e02558ecf4b7af37d2cdff550fc0f71_MIT8_06S16_chap4.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice, Countable Choice, and Dependent Choice, and
the adopted spinless minimal-coupling form model. Let $m>0$ be mass in kilograms,
$q\ne0$ charge in coulombs, $B\ne0$ the constant signed perpendicular
field component in teslas, and $\hbar>0$ in joule-seconds. Let
$A:\mathbb R^2\to\mathbb R^2$ be $A(x,y)=(0,Bx)$ in tesla-metres; then
$B_\perp=\partial_xA_y-\partial_yA_x=B$ is its scalar perpendicular field.
Take wavefunctions in $L^2(\mathbb R^2;\mathbb C)$. Set $V=0$ and define the Hamiltonian by the
closed form of the core expression
$$q_B[u]=\frac1{2m}\left(\|-i\hbar\partial_xu\|_2^2+\|(-i\hbar\partial_y-qBx)u\|_2^2\right),\qquad u\in C_c^\infty(\mathbb R^2;\mathbb C).$$
The resulting Friedrichs Hamiltonian is unitarily equivalent, under partial
Fourier transformation in $y$ followed by
$x=\xi+\hbar k/(qB)$, to the constant family of oscillators
$$h(k)=-\frac{\hbar^2}{2m}\partial_\xi^2+\frac{(qB\xi)^2}{2m},\qquad k\in\mathbb R,$$
with its form-closed realization. Its spectrum is
$$\left\{\frac{\hbar|qB|}{m}\left(n+\frac12\right):n\in\mathbb N_0\right\}.$$
Every listed eigenvalue has infinite multiplicity, and every spectral measure
is purely atomic on this set; there is no continuous spectral measure. This is
a conditional model deduction, not a claim that a material realizes the
ideal infinite-plane Hamiltonian.

## Statement references

[[post-nrqmx-magnetic-model-extension]]

[[lem-nrqmx-landau-form-diagonalization]]

[[thm-nrqmx-closed-form-representation]]

[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** the Axiom of Choice, Countable Choice, Dependent Choice, the
spinless model postulate, $m>0$, $qB\ne0$, $\hbar>0$, $A=(0,Bx)$, $V=0$,
and the core form in the Statement. Use SI units.

[A1] Adopt the spinless minimal-coupling assignment and the stated
Friedrichs-form prescription
([[post-nrqmx-magnetic-model-extension]]).

[A2] The Axiom of Choice and Countable Choice are hypotheses of the
closed-form representation and unbounded spectral suppliers. Dependent
Choice is required by the Landau form supplier
([[def-axiom-of-choice]], [[def-countable-choice]],
[[def-dependent-choice]], [[lem-nrqmx-landau-form-diagonalization]]).


[F1] The closed magnetic form is unitarily equivalent to the diagonal form
$\sum_n E_n\|f_n\|_2^2$ on coefficient families, with
$E_n=\hbar|qB|(n+\tfrac12)/m$, under the explicitly normalized partial
Fourier and translation map
([[lem-nrqmx-landau-form-diagonalization]]).

[F2] The closed-form representation theorem applies to a dimensionless
closed form. Write $E_{\mathrm{ref}}=1\,\mathrm J$ for the postulate's
reference energy and apply the theorem to $\mathfrak q/E_{\mathrm{ref}}$.
On the closed form domain,
$(\mathfrak q/E_{\mathrm{ref}})[F]+\|F\|_2^2
=E_{\mathrm{ref}}^{-1}(\mathfrak q[F]+E_{\mathrm{ref}}\|F\|_2^2)$,
so normalization preserves its form domain, density, and closedness.
The theorem's operator domain consists of form-domain vectors $F$ for which
there is a coefficient-space vector $G$ satisfying
$(\mathfrak q/E_{\mathrm{ref}})(F,V)=\langle G,V\rangle$ for every
form-domain vector $V$. If $\widehat H$ represents this normalized form,
then the model Hamiltonian is $H=E_{\mathrm{ref}}\widehat H$ on the same
operator domain, so its spectral values are multiplied by
$E_{\mathrm{ref}}$. Here $E_{\mathrm{ref}}$ is distinct from the indexed
Landau level $E_0$ used below. The theorem's exact hypotheses include the
Axiom of Choice and Countable Choice
([[post-nrqmx-magnetic-model-extension]],
[[thm-nrqmx-closed-form-representation]]).

[F3] The one-dimensional oscillator with $\omega_c=|qB|/m$ has the complete
Hermite eigenbasis and eigenvalues $E_n=\hbar\omega_c(n+\tfrac12)$
([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

[F4] A self-adjoint operator has a unique regular spectral projection-valued
measure ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

## Proof

1.1 The hypotheses $m,\hbar>0$ and $qB\ne0$ make
$\omega_c=|qB|/m>0$ and the translation
$x_0(k)=\hbar k/(qB)$ well-defined. Apply [F1]: the unitary $U$ sends the
closed form to the coefficient form
$$\mathfrak q[F]=\sum_{n=0}^\infty E_n\|f_n\|_{L^2(k)}^2,$$
where $F(\xi,k)=\sum_nf_n(k)\psi_n(\xi)$ and $(\psi_n)$ is the complete
oscillator basis from [F3]. In particular,
$\mathfrak q[F]\ge E_0\|F\|_2^2>0$ for nonzero $F$. [given, A1, A2, F1, F3]

2.1 Apply the closed-form representation theorem [F2] to the normalized form
$\widehat{\mathfrak q}=\mathfrak q/E_{\mathrm{ref}}$. If $F=(f_n)$ is in
its representing operator domain, there is $G=(g_n)$ in the coefficient
Hilbert space such that $\widehat{\mathfrak q}(F,V)=\langle G,V\rangle$
for every form-domain vector $V$. Fix $n$ and take $V$ to have sole nonzero
component $V_n=(E_n/E_{\mathrm{ref}})f_n-g_n$. It lies in the form domain
because $f_n,g_n\in L^2(k)$ and $E_n/E_{\mathrm{ref}}$ is finite. The
representation identity gives
$$0=\widehat{\mathfrak q}(F,V)-\langle G,V\rangle=\|(E_n/E_{\mathrm{ref}})f_n-g_n\|_2^2,$$
so $g_n=(E_n/E_{\mathrm{ref}})f_n$ for every $n$. Since $G$ belongs to the
Hilbert space, $\sum_n(E_n/E_{\mathrm{ref}})^2\|f_n\|_2^2<\infty$,
equivalently $\sum_nE_n^2\|f_n\|_2^2<\infty$ because
$E_{\mathrm{ref}}>0$. [A2, F1, F2, step 1.1, construct, algebra]

3.1 Conversely, suppose $F$ is in the form domain and
$\sum_nE_n^2\|f_n\|_2^2<\infty$. Define
$G_n=(E_n/E_{\mathrm{ref}})f_n$, which is a vector in the coefficient
Hilbert space. For every form-domain vector $V=(v_n)$, Cauchy–Schwarz gives
absolute convergence and
$$\widehat{\mathfrak q}(F,V)=\sum_n(E_n/E_{\mathrm{ref}})\langle f_n,v_n\rangle=\sum_n\langle G_n,v_n\rangle=\langle G,V\rangle.$$
Thus [F2] represents the normalized operator by
$(f_n)\mapsto((E_n/E_{\mathrm{ref}})f_n)$ on the stated domain. The model
Hamiltonian is $E_{\mathrm{ref}}$ times this operator and therefore acts by
$(f_n)\mapsto(E_nf_n)$ on that same domain; uniqueness identifies it with
the postulated Hamiltonian. [A2, F1, F2, step 2.1, algebra]

4.1 For each $n$, the eigenspace at $E_n$ is
$L^2(\mathbb R_k)\otimes\mathbb C\psi_n$, which is infinite-dimensional;
the energies are strictly increasing and tend to $+\infty$. If
$z\notin\{E_n:n\ge0\}$, then $\inf_n|E_n-z|>0$ and
$\sup_n E_n/|E_n-z|<\infty$. The diagonal inverse is therefore bounded and
maps into the operator domain, so $z$ is in the resolvent. Each $E_n$ is an
eigenvalue, and the complete coefficient decomposition together with [F4]
shows that all spectral projections are sums of eigenspace projections.
Hence every spectral measure is atomic on the displayed set and the spectrum
is exactly that set. [A2, F1, F3, F4, step 3.1, algebra] ∎

## Remarks

The linear potential $A_y=Bx$ is unbounded. The proof works with its
closable quadratic form and never applies a bounded-coefficient $H^2$
realization. The finite-rectangle degeneracy count in the cited treatments
depends on boundary conditions; no exact hard-wall or finite-area count is
claimed here.
