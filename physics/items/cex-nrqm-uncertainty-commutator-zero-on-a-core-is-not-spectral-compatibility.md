---
id: cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility
aliases: [nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility]
kind: counterexample
domain: mathematics
title: "A commutator vanishing on a dense invariant domain does not imply strong spectral commutation"
status: draft
origin: pipeline
dependency_level: 5
deps: [def-axiom-of-choice, def-complex-exponential, def-countable-choice, def-hilbert-space, def-hilbert-orthogonal-projection, def-nrqm-intervals-hilbert-sobolev-spaces, def-nrqm-uncertainty-strong-spectral-commutation, def-projection-valued-measure, lem-nrqm-intervals-integration-by-parts, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, thm-complex-exponential-is-entire-with-derivative-itself, thm-nrqm-intervals-twisted-periodic-momentum-domain, cor-primitives-of-a-continuous-function, thm-spectral-theorem-for-unbounded-self-adjoint-operators]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  def-nrqm-uncertainty-strong-spectral-commutation: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-nrqm-intervals-twisted-periodic-momentum-domain: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1, printed pages 181-186 (PDF pages 193-198): self-adjoint boundary conditions of a first-order differential expression on an interval, and the dependence of the spectrum on the boundary condition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Sections 8.1-8.2 printed pages 201-210 and Section 8.4 printed page 227 (PDF pages 216-225 and 242): Sobolev spaces in one dimension, the absolutely continuous representative, and Example 7 on periodic boundary conditions"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
verification:
  precheck: pass
---

## Statement refuted

Let $H\ne\{0\}$ be a complex Hilbert space, let $A,B$ be self-adjoint
operators on $H$, and let $D\subseteq D(A)\cap D(B)$ be a dense linear
subspace with $AD\subseteq D(B)$ and $BD\subseteq D(A)$. If $ABu=BAu$ for
every $u\in D$, then the spectral projection-valued measures of $A$ and $B$
strongly commute in the sense of
[[def-nrqm-uncertainty-strong-spectral-commutation]] clause (b).

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the interval $(0,1)$; the twisted-periodic momentum operators $P_{0}$ and $P_{\pi}$ on $L^{2}(0,1;\mathbb C)$; the space $D:=C^{\infty}_{c}(0,1)$; the exponential functions $\varphi_{0}=1$ and $\psi_{0}(x)=e^{i\pi x}$.

[F1] **Twisted-periodic momentum.** For $0<L<\infty$ and $\theta\in[0,2\pi)$ put $D_{\theta}:=\{u\in H^{1}(0,L):u^{*}(L)=e^{i\theta}u^{*}(0)\}$ and $P_{\theta}u:=-iDu$. Then $D_{\theta}$ is dense, $P_{\theta}$ is self-adjoint, the functions $\varphi_{n}(x)=L^{-1/2}e^{i(2\pi n+\theta)x/L}$ form a complete orthonormal family, $P_{\theta}\varphi_{n}=\kappa_{n}\varphi_{n}$ with $\kappa_{n}=(2\pi n+\theta)/L$, the eigenvalues are simple, and $\sigma(P_{\theta})=\{\kappa_{n}:n\in\mathbb Z\}$ ([[thm-nrqm-intervals-twisted-periodic-momentum-domain]] clauses (a)-(c)).

[F2] **The trace and integration by parts.** $H^{1}(0,L)$ consists of the classes with an $L^{2}$ weak derivative, each class has a continuous absolutely continuous representative $u^{*}$ with $\int_{0}^{L}u\overline{v'}=u^{*}(L)\overline{v^{*}(L)}-u^{*}(0)\overline{v^{*}(0)}-\int_{0}^{L}u'\overline v$ for $u,v\in H^{1}(0,L)$; a compactly supported smooth function vanishes near the endpoints, so $C^{\infty}_{c}(0,L)\subseteq D_{\theta}$ for every $\theta$ ([[def-nrqm-intervals-hilbert-sobolev-spaces]], [[lem-nrqm-intervals-integration-by-parts]] clauses (a),(b)).

[F3] **Density.** $C^{\infty}_{c}(0,1)$ is dense in $L^{2}(0,1;\mathbb C)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

[F4] **Atoms are eigenspace projections.** For a self-adjoint operator with spectral projection-valued measure $E$ and eigenvalue $\lambda$, the projection $E(\{\lambda\})$ is the orthogonal projection onto the eigenspace $\ker(A-\lambda)$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clause (a), [[def-projection-valued-measure]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F5] **The complex exponential and its integral.** The function $x\mapsto e^{i\alpha x}$ is differentiable with derivative $i\alpha e^{i\alpha x}$ ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]]), and for a continuous function on an interval with a continuous primitive $G$ one has $\int_{a}^{b}G'=G(b)-G(a)$ ([[cor-primitives-of-a-continuous-function]], applied to real and imaginary parts).

## Counterexample

**Proof technique:** exhibit two distinct self-adjoint extensions of the same symmetric operator that agree on the dense invariant domain of test functions, so that the commutator vanishes there, and show by explicit eigenprojections that their spectral projection-valued measures fail to commute.

**Given:** The data of the refuted statement and [F1]-[F5]; take $H=L^{2}(0,1;\mathbb C)$, $A:=P_{0}$, $B:=P_{\pi}$, $D:=C^{\infty}_{c}(0,1)$.

1.1 [The hypothesis of the refuted statement holds] By [F2], $D\subseteq D_{0}\cap D_{\pi}=D(A)\cap D(B)$, and both operators act on $D$ by $u\mapsto-iDu$, which maps $D$ into itself; hence for $u\in D$ the products $ABu=-D^{2}u$ and $BAu=-D^{2}u$ are defined and $[A,B]u=0$. By [F3] the space $D$ is dense in $H$. So the hypotheses of the refuted statement are satisfied. [given, F2, F3, algebra]

1.2 [Spectral data] Applying [F1] with $L=1$: $A=P_{0}$ has the complete orthonormal family $\varphi_{n}(x)=e^{2\pi inx}$ with simple eigenvalues $2\pi n$, and $B=P_{\pi}$ has the complete orthonormal family $\psi_{n}(x)=e^{i(2n+1)\pi x}$ with simple eigenvalues $(2n+1)\pi$, for $n\in\mathbb Z$. In particular $\varphi_{0}=1$ spans the eigenspace of $A$ at $0$ and $\psi_{0}(x)=e^{i\pi x}$ spans the eigenspace of $B$ at $\pi$. [given, F1]

2.1 [The two spectral projections] By [F4], $E_{A}(\{0\})$ is the orthogonal projection onto $\mathbb C\varphi_{0}$, and $E_{B}(\{\pi\})$ is the orthogonal projection onto $\mathbb C\psi_{0}$. Since $\varphi_{0}=1$ is a unit vector, $E_{A}(\{0\})u=\langle u,\varphi_{0}\rangle\varphi_{0}$; since $\|\psi_{0}\|^{2}=\int_{0}^{1}|e^{i\pi x}|^{2}dx=1$, likewise $E_{B}(\{\pi\})u=\langle u,\psi_{0}\rangle\psi_{0}$. [step 1.2, F1, F4, algebra]

2.2 [The inner products] By [F5], $\int_{0}^{1}e^{-i\pi x}dx=\bigl[e^{-i\pi x}/(-i\pi)\bigr]_{0}^{1}=(e^{-i\pi}-1)/(-i\pi)=2/(i\pi)=-2i/\pi$, and by conjugation $\int_{0}^{1}e^{i\pi x}dx=2i/\pi$. Hence $\langle\varphi_{0},\psi_{0}\rangle=-2i/\pi$ and $\langle\psi_{0},\varphi_{0}\rangle=2i/\pi$. [step 1.2, F5, algebra]

3.1 [Noncommutation] With $u:=\varphi_{0}=1$ and the projections of step 2.1, $$E_{B}(\{\pi\})u=\langle u,\psi_{0}\rangle\psi_{0}=-\frac{2i}{\pi}\psi_{0},\qquad E_{A}(\{0\})E_{B}(\{\pi\})u=\langle u,\psi_{0}\rangle\langle\psi_{0},u\rangle u=\Bigl(\frac{2}{\pi}\Bigr)^{2}u,$$ because $\langle\psi_{0},u\rangle=\overline{\langle u,\psi_{0}\rangle}=2i/\pi$, so the product of the two coefficients is $(-2i/\pi)(2i/\pi)=4/\pi^{2}$. Thus $E_{A}(\{0\})E_{B}(\{\pi\})u=(4/\pi^{2})u$ while $E_{B}(\{\pi\})E_{A}(\{0\})u=E_{B}(\{\pi\})u=-(2i/\pi)\psi_{0}$. The vectors $u=1$ and $\psi_{0}=e^{i\pi x}$ are linearly independent in $L^{2}(0,1;\mathbb C)$ (the continuous function $e^{i\pi x}$ is not constant on $(0,1)$), so the two results differ. Therefore $E_{A}(\{0\})E_{B}(\{\pi\})\ne E_{B}(\{\pi\})E_{A}(\{0\})$: the spectral projection-valued measures of $A$ and $B$ do not strongly commute, and the refuted statement fails for this pair. [step 1.1, step 2.1, step 2.2, algebra] ∎

## Remarks

- **Where the domain identity loses information.** Both operators are the
  differential expression $-iD$ on different self-adjoint domains; the dense invariant domain
  $C^{\infty}_{c}(0,1)$ sees only the action, not the boundary conditions that
  determine the spectra. No graph-norm core property for either
  self-adjoint extension is asserted. The domain identity $[A,B]u=0$ is therefore not a
  sufficient condition for strong spectral commutation. Strong spectral
  commutation still implies equality of the products on every common invariant
  domain where both compositions are defined.
- **Boundedness is the missing hypothesis.** For bounded everywhere-defined
  self-adjoint operators, a commutator identity on a dense subspace extends by
  continuity to $AB=BA$ on all of $H$, which is equivalent to strong spectral
  commutation. This counterexample refutes only the converse implication for
  unbounded operators; it does not refute the implication from strong spectral
  commutation to equality on a common invariant domain. This is why
  [[def-nrqm-uncertainty-strong-spectral-commutation]] is defined at the level
  of projection-valued measures.
