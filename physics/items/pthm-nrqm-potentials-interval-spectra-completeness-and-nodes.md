---
id: pthm-nrqm-potentials-interval-spectra-completeness-and-nodes
aliases: [ nrqm-potentials-interval-spectra-completeness-and-nodes ]
kind: physics-theorem
domain: physics
title: "Interval models: discrete spectra, complete eigenbases, min-max bounds
  and nodal counts"
status: published
origin: session
dependency_level: 12
deps:
  [
    def-nrqm-potentials-interval-and-delta-models,
    def-nrqm-potentials-one-dimensional-line-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators,
    def-nrqm-intervals-hilbert-sobolev-spaces,
    thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent,
    thm-nrqm-intervals-dirichlet-diagonal-domain-identification,
    thm-nrqm-intervals-dirichlet-nodal-theorem,
    thm-nrqm-intervals-robin-simple-complete-spectrum,
    thm-nrqm-intervals-separated-robin-green-resolvent,
    thm-nrqm-intervals-sine-on-completeness,
    lem-nrqm-intervals-compact-resolvent-eigenbasis,
    lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-potentials-interval-and-delta-models: formulation-prerequisite
  def-nrqm-potentials-one-dimensional-line-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent: mathematical-premise
  thm-nrqm-intervals-dirichlet-diagonal-domain-identification: mathematical-premise
  thm-nrqm-intervals-dirichlet-nodal-theorem: mathematical-premise
  thm-nrqm-intervals-robin-simple-complete-spectrum: mathematical-premise
  thm-nrqm-intervals-separated-robin-green-resolvent: mathematical-premise
  thm-nrqm-intervals-sine-on-completeness: mathematical-premise
  lem-nrqm-intervals-compact-resolvent-eigenbasis: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared confined interval models of the pair with
  Dirichlet and separated Robin boundary conditions and a real continuous
  potential on the interval: self-adjointness of the assigned energy operators,
  discrete spectra with complete orthonormal eigenbases, the min-max comparison
  of the Dirichlet energies with the free box energies, simplicity of the
  eigenvalues, the nodal counts of the Dirichlet eigenfunctions, and the Robin
  eigenvalue condition. The statement is conditional on P1, P2, P4, P5, the
  declared boundary conditions and the cited mathematics; it asserts no
  laboratory realisation of a box or wall, no measured spectrum and no empirical
  result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 2.1.2,
        printed pages 24-27 (PDF pages 27-30): the infinite potential well, its
        boundary conditions, eigenfunctions and quantized energies"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Sections 9.1-9.2, printed pages 181-195 (PDF pages 193-207):
        Sturm-Liouville operators and separated self-adjoint boundary
        conditions (Theorem 9.6); Section 9.7, printed pages 214-220 (PDF
        pages 226-232): one-dimensional line operators, Sturm comparison and
        the full-line nodal count below the essential spectrum (Theorem 9.40
        has line-domain hypotheses); PDF page = printed page + 12"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.1,
        printed pages 75-79 (PDF pages 83-87): the square potential well, its
        parity decomposition and its discrete bound states"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4 and the kinematics and
massive-particle model postulate P5
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), read
through the declared interval models
[[def-nrqm-potentials-interval-and-delta-models]] with $0<L<\infty$,
$m>0$, $\hbar>0$, and assume the Axiom of Countable Choice and the Axiom of
Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). For a real
$V\in C([0,L];\mathbb R)$ write
$\|V\|_{\infty}:=\max_{x\in[0,L]}|V(x)|$ and put
$\tilde V:=(2m/\hbar^{2})V$, so that the assigned
energy operators of the definition satisfy
$H_{D,V}=(\hbar^{2}/2m)(A_{D}+M_{\tilde V})$ and
$H_{\alpha\beta,V}=(\hbar^{2}/2m)A_{\alpha\beta,\tilde V}$. Then:

(a) *Dirichlet interval model.* $(H_{D,V},\mathrm J)$ is an assigned sharp
observable; $H_{D,V}$ is self-adjoint with compact resolvent and has a complete
orthonormal family $(\psi_{n})_{n\ge1}$ of eigenvectors. Its eigenvalues,
listed with multiplicity, form a sequence
$\mathcal E_{1}\le\mathcal E_{2}\le\cdots$ with
$\mathcal E_{n}\to\infty$ and
$\sigma(H_{D,V})=\{\mathcal E_{n}:n\ge1\}$, and no other spectral points; each
eigenspace is one-dimensional, so the list is strict,
$\mathcal E_{1}<\mathcal E_{2}<\cdots$, and the eigenvector belonging to
$\mathcal E_{n}$ has exactly $n-1$ zeros in $(0,L)$. The min-max comparison
$$\Bigl|\mathcal E_{n}-\frac{\hbar^{2}\pi^{2}n^{2}}{2mL^{2}}\Bigr| \le\|V\|_{\infty}\qquad(n\ge1)$$
holds. If $V=0$, a complete orthonormal family of eigenpairs of $H_{D,0}$ is
$\bigl(\frac{\hbar^{2}\pi^{2}n^{2}}{2mL^{2}},\,e_{n}\bigr)$ with
$e_{n}(x)=\sqrt{2/L}\,\sin(n\pi x/L)$, $n\ge1$, a complete orthonormal family of
$L^{2}(0,L;\mathbb C)$. Every eigenvector at the displayed energy is a
nonzero scalar multiple of the corresponding $e_n$.

(b) *Robin interval model.* For real $\alpha,\beta$ (the declared boundary
parameters in $\mathrm{m^{-1}}$), $(H_{\alpha\beta,V},\mathrm J)$ is an
assigned sharp observable; $H_{\alpha\beta,V}$ is self-adjoint with compact
resolvent; it has a complete orthonormal eigenfamily, every eigenspace is
one-dimensional, its spectrum consists exactly of its eigenvalues, which can
be listed strictly increasingly as $\mathcal E_{1}<\mathcal E_{2}<\cdots$ with
$\mathcal E_{n}\to\infty$, and its essential spectrum is empty. With
$\lambda_{n}:=2m\mathcal E_{n}/\hbar^{2}$ and $u_{a}(\cdot,\lambda)$ the unique
$C^{2}$ solution of $-u''+\tilde Vu=\lambda u$ with $u(0)=1$, $u'(0)=\alpha$,
one has $u_{a}(L,\lambda_{n})\ne0$ and
$$\beta=\frac{u_{a}'(L,\lambda_{n})}{u_{a}(L,\lambda_{n})}\qquad(n\ge1).$$

(c) *Scope.* The statement is conditional on P1, P2, P4, P5, on the declared
boundary conditions and on the cited mathematics. The boundary conditions and
parameters are declared model assumptions; the eigenvalues are read in joules
when $V$ and $\hbar$ enter in the units of
[[def-nrqm-framework-quantities-and-units]]. No laboratory wall, box or
surface is identified with the boundary conditions, no measured spectrum is
asserted, and no completeness of any continuum or scattering object is
claimed.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and the choice hypotheses; $0<L<\infty$, $m>0$, $\hbar>0$; real $V\in C([0,L];\mathbb R)$ and $\tilde V=(2m/\hbar^{2})V$; real $\alpha,\beta$; the operators $H_{D,V}=(\hbar^{2}/2m)(A_{D}+M_{\tilde V})$ and $H_{\alpha\beta,V}=(\hbar^{2}/2m)A_{\alpha\beta,\tilde V}$ of [[def-nrqm-potentials-interval-and-delta-models]] clauses (b), (c).

[F1] **Dirichlet Laplacian and its bounded perturbations.** Let $A_{D}$ be the Dirichlet Laplacian with $D(A_{D})=\{u\in H^{2}(0,L):u^{*}(0)=u^{*}(L)=0\}$ and $A_{D}u=-D^{2}u$, and let $\tilde V\in C([0,L];\mathbb R)$. Then $A:=A_{D}+M_{\tilde V}$ on $D(A_{D})$ is self-adjoint; $(A-z)^{-1}$ is compact for every $z\in\rho(A)$; $A$ has a complete orthonormal family of eigenvectors; all eigenspaces are finite dimensional; the eigenvalues $E_{1}\le E_{2}\le\cdots$, listed with multiplicity, satisfy $E_{n}\to\infty$ and $\sigma_{\mathrm{ess}}(A)=\varnothing$; and with $\lambda_{n}=(n\pi/L)^{2}$ one has $|E_{n}-\lambda_{n}|\le\|\tilde V\|_{\infty}$ for every $n$ ([[thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent]] clauses (a)-(c)).

[F2] **Dirichlet eigenvalues, simplicity and nodes.** An $E\in\mathbb R$ is a Dirichlet eigenvalue of $-D^{2}+\tilde V$ when there is a nonzero $w\in H^{2}(0,L)$ with $w^{*}(0)=w^{*}(L)=0$ and $-w''+\tilde Vw=Ew$ pointwise; the Dirichlet eigenvalues are exactly the numbers $E_{k}$ of the strictly increasing sequence of [[thm-nrqm-intervals-dirichlet-nodal-theorem]], each with one-dimensional eigenspace $\mathbb C\,u(\cdot,E_{k})$, the solution $u(\cdot,E)$ of $-u''+\tilde Vu=Eu$, $u(0)=0$, $u'(0)=1$; and $u(\cdot,E_{k})$ has exactly $k-1$ zeros in $(0,L)$ ([[thm-nrqm-intervals-dirichlet-nodal-theorem]] clauses (a), (b), (d)). The eigenvalue equation of the operator $A=A_{D}+M_{\tilde V}$ is, by its definition on $D(A_{D})$, exactly the condition that $w$ be a nonzero Dirichlet eigenfunction: $w\in H^{2}(0,L)$, $w^{*}(0)=w^{*}(L)=0$, $-D^{2}w+\tilde Vw=Ew$ ([[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]], [[def-nrqm-intervals-hilbert-sobolev-spaces]]).

[F3] **Free Dirichlet box.** The diagonal operator $A_{D}$ of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] with the sine family $e_{n}$ and eigenvalues $\lambda_{n}=(n\pi/L)^{2}$ equals the Dirichlet Laplacian $B=-D^{2}$ on $D(B)=\{u\in H^{2}(0,L):u^{*}(0)=u^{*}(L)=0\}$; $A_{D}$ is self-adjoint and $\sigma(A_{D})=\{\lambda_{n}:n\ge1\}$ with eigenvector $e_{n}$ for $\lambda_{n}$; $(e_{n})_{n\ge1}$ is a complete orthonormal family of $L^{2}(0,L;\mathbb C)$ ([[thm-nrqm-intervals-dirichlet-diagonal-domain-identification]], [[thm-nrqm-intervals-sine-on-completeness]]).

[F4] **Robin realisation.** For real $\alpha,\beta$ and $\tilde V\in C([0,L];\mathbb R)$, the operator $A_{\alpha\beta,\tilde V}$ with $D(A_{\alpha\beta,\tilde V})=\{u\in H^{2}(0,L):u'^{*}(0)=\alpha u^{*}(0),\ u'^{*}(L)=\beta u^{*}(L)\}$ and $A_{\alpha\beta,\tilde V}u=-D^{2}u+\tilde Vu$ is self-adjoint with compact resolvent; it has a complete orthonormal family of eigenvectors; every eigenspace is one-dimensional; the spectrum consists exactly of the eigenvalues, which can be listed strictly increasingly $\lambda_{1}<\lambda_{2}<\cdots$ with $\lambda_{n}\to\infty$ and $\sigma_{\mathrm{ess}}=\varnothing$; and for an eigenvalue $\lambda$ the eigenvector is a nonzero multiple of the solution $u_{a}(\cdot,\lambda)$ of $-u''+\tilde Vu=\lambda u$, $u(0)=1$, $u'(0)=\alpha$, and $\beta=u_{a}'(L,\lambda)/u_{a}(L,\lambda)$, with $u_{a}(L,\lambda)\ne0$ ([[thm-nrqm-intervals-separated-robin-green-resolvent]], [[thm-nrqm-intervals-robin-simple-complete-spectrum]]).

[F5] **Compact resolvent and eigenbasis.** For a self-adjoint $A$ with a compact resolvent at some real point, a complete orthonormal eigenfamily exists, every eigenspace is finite dimensional, $|\mu_{n}|\to\infty$ and $\sigma(A)=\{\mu_{n}\}$ with $\sigma_{\mathrm{ess}}(A)=\varnothing$; moreover every resolvent is compact ([[lem-nrqm-intervals-compact-resolvent-eigenbasis]]).

[F6] **Positive scaling.** For self-adjoint $A$ and $c>0$, $cA$ is self-adjoint; $z\in\rho(cA)$ iff $z/c\in\rho(A)$ with $(cA-z)^{-1}=c^{-1}(A-z/c)^{-1}$; compactness of resolvents is preserved; the eigenfamily of $A$ is an eigenfamily of $cA$ with eigenvalues scaled by $c$, and $\sigma(cA)=c\,\sigma(A)$ ([[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a)-(d)).

[F7] **Assigned observables.** An assigned sharp observable is a densely defined self-adjoint operator together with a declared unit; the joule is the framework's energy unit ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a), [[def-nrqm-framework-quantities-and-units]] clause (d)4).

## Proof

**Proof technique:** direct; transfer the mathematical interval operators to the declared physical energy operators along the positive scaling factor $\hbar^{2}/2m$, identify eigenvalues with the Dirichlet condition, and read the nodal counts and the Robin condition from the suppliers.

**Given:** The data and hypotheses of the statement and [F1]-[F7].

1.1 [Dirichlet operator after scaling] The mathematical operator $A=A_{D}+M_{\tilde V}$ is self-adjoint with compact resolvent, complete orthonormal eigenfamily and min-max eigenvalues $E_{n}$, and $\sigma_{\mathrm{ess}}(A)=\varnothing$ with $|E_{n}-\lambda_{n}|\le\|\tilde V\|_{\infty}$ by [F1]. Since $H_{D,V}=(\hbar^{2}/2m)A$ with $c:=\hbar^{2}/2m>0$, [F6] gives that $H_{D,V}$ is self-adjoint, that its resolvents are compact, that the same complete orthonormal family consists of eigenvectors with eigenvalues $\mathcal E_{n}=cE_{n}$, and that $\sigma(H_{D,V})=c\,\sigma(A)=\{\mathcal E_{n}\}$ with no other spectral points; moreover the eigenvectors of $H_{D,V}$ are exactly those of $A$ by clause (d) of [F6]. The min-max bound gives $|\mathcal E_{n}-c\lambda_{n}|=c|E_{n}-\lambda_{n}|\le c\|\tilde V\|_{\infty}=\|V\|_{\infty}$, since $c\|\tilde V\|_{\infty}=(\hbar^{2}/2m)(2m/\hbar^{2})\|V\|_{\infty}=\|V\|_{\infty}$. [given, F1, F6, algebra]

2.1 [Dirichlet eigenvalues are simple with the nodal counts] By [F2] the eigenvalue condition for $A$ is exactly the Dirichlet eigenvalue condition, so the eigenvalue set of $A$ is the strictly increasing sequence $(E_{k})$ of the nodal theorem, each eigenspace being one-dimensional and the eigenvector for $E_{k}$ having $k-1$ zeros in $(0,L)$. Therefore the min-max list $(E_{n})$ of step 1.1 is this strict sequence, the eigenspaces of $H_{D,V}$ are one-dimensional, and the eigenvector belonging to $\mathcal E_{n}=cE_{n}$ has exactly $n-1$ zeros in $(0,L)$. [step 1.1, F1, F2, algebra]

2.2 [Robin model] By [F4] the mathematical operator $A_{\alpha\beta,\tilde V}$ is self-adjoint with compact resolvent, complete orthonormal eigenfamily, one-dimensional eigenspaces, strictly increasing eigenvalue list $\lambda_{n}$ with $\lambda_{n}\to\infty$ and no essential spectrum, and eigenvalue condition $\beta=u_{a}'(L,\lambda)/u_{a}(L,\lambda)$ with $u_{a}(L,\lambda)\ne0$. Scaling by $c=\hbar^{2}/2m$ via [F6] preserves all these properties with eigenvalues $\mathcal E_{n}=c\lambda_{n}$, strictly increasing with $\mathcal E_{n}\to\infty$, and the eigenvalue condition at $\lambda_{n}=2m\mathcal E_{n}/\hbar^{2}$ is unchanged, giving (b); the compact-resolvent transfer used here is the general statement of [F5]. [step 1.1, F4, F5, F6]

3.1 [Free box] If $V=0$ then $\tilde V=0$ and $A=A_{D}$, so by [F3] the eigenvalues of $A$ are $\lambda_{n}=(n\pi/L)^{2}$ with eigenvectors $e_{n}$; after scaling by $c=\hbar^{2}/2m$ the eigenvalues of $H_{D,0}$ are $c\lambda_{n}=\hbar^{2}\pi^{2}n^{2}/(2mL^{2})$ with the same complete orthonormal eigenvectors $e_{n}$, and the nodal count $n-1$ is read explicitly from the zeros $x=kL/n$, $k=1,\dots,n-1$, of $e_{n}$ in $(0,L)$. [step 2.1, F3, F6, algebra]

4.1 [Observable reading and scope] Both $H_{D,V}$ and $H_{\alpha\beta,V}$ are densely defined, self-adjoint and read their spectral coordinate in joules by [F7], so each is an assigned sharp observable in the sense of clause (a) of the definition of assigned observables; no further physical reading of the eigenvalues is made, and the exclusions of (c) are those stated in clause (e) of [[def-nrqm-potentials-interval-and-delta-models]]. This completes the proof of (a), (b) and (c). [step 1.1, step 2.2, F7] ∎

## Remarks

- **Where the boundary conditions enter.** The Dirichlet and Robin conditions are declared data of the interval models; the mathematics of this theorem begins with the operators $A_{D}+M_{\tilde V}$ and $A_{\alpha\beta,\tilde V}$ on their displayed domains, so the theorem transfers no property of the line model to the interval models and proves no limiting relation between Dirichlet and Robin conditions.
- **The min-max bound is a comparison, not a measurement.** It bounds the Dirichlet energies of the perturbed box by the free box energies with an additive constant $\|V\|_{\infty}$; the bound is stated for the energies in joules and involves no data.
