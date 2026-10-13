---
id: pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws
aliases: [ nrqm-angular-momentum-spin-spectra-and-outcome-laws ]
kind: physics-theorem
domain: physics
title: "Spin spectra and outcome laws of the massive spin-s model: directional
  components, the Casimir law and the spin-half probabilities"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-axiom-of-choice,
    def-bounded-linear-operator,
    def-countable-choice,
    def-hilbert-space,
    def-inner-product-space,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-nrqm-angular-momentum-framework-angular-momentum-observables,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-operator-norm,
    def-projection-valued-measure,
    def-self-adjoint-positive-unitary-and-normal-operator,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    thm-nrqm-orbital-and-spin-finite-spin-block-decomposition
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-operator-norm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-finite-spin-block-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the state, observable and
  kinematics postulates P1, P2, P5 and of the internal spin assignment P6 for
  the massive spin-s model: the spectra and Born outcome laws of the explicitly
  assigned directional spin observables n·S, the assigned squared-spin
  observable with operator S^2 = hbar^2 s(s+1) I and, for s = 1/2, the
  explicit spin-up/spin-down probabilities. The item concerns the
  internal factor only; it asserts no dynamics, no magnetic coupling, no
  apparatus model, no measured spin value and no empirical identification of the
  operators."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 7.1
        and 7.4, printed pages 139-145 and 158-168 (PDF pages 147-153 and
        166-176): the angular momentum multiplets with j(j+1), the spin-half
        Pauli matrices and the magnetic quantum numbers"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-Half, Bras, Kets, and Operators', Sections 2-4, printed pages 7-19:
        the directional spin operator, its eigenvalues and the spin-up/spin-down
        probabilities; Chapter 9 'Angular Momentum', Sections 1-2, printed pages
        1-18: the algebraic spectrum j, j-1, ..., -j"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        4.1-4.1.2, printed pages 96-103 (PDF pages 99-106): the angular momentum
        operators, their commutation relations and the spherical-harmonic
        eigenvalues"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5 and the
internal-factor assignment of the spin postulate P6, read for the massive
spin-$s$ model of [[def-nrqm-kinematics-framework-massive-spin-s-model]] with
mass parameter $m>0$, spin label $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ and
$r=2s+1$, together with the angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]), and assume
the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Let
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$, let $\mu^{A}_{\psi}$ be the
outcome law of an assigned sharp observable $A$ in the pure preparation of a
unit vector $\psi$, and for a unit vector $n=(n_{1},n_{2},n_{3})\in\mathbb
R^{3}$ put $S_{n}:=\sum_{i}n_{i}S_{i}$, the matrix action of the self-adjoint
matrix $\hbar\,n\cdot J$ on the internal factor. For every unit $n$, read
$(S_{n},\mathrm{J\,s})$ as an assigned sharp observable under P2. Put
$S^{2}:=S_{x}^{2}+S_{y}^{2}+S_{z}^{2}$ and, for its outcome-law claim in
(b), read $(S^{2},(\mathrm{J\,s})^{2})$ as an assigned sharp observable
under P2. Then:

(a) for every unit $n$ the operator $S_{n}$ is a bounded self-adjoint
operator on $H_{s}$ with spectrum
$\sigma(S_{n})=\hbar\{-s,-s+1,\dots,s\}$, and for each
$m\in\{-s,\dots,s\}$ the eigenspace $\ker(S_{n}-\hbar m)$ is the range of the
fibrewise orthogonal projection $P_{n,m}$ onto the eigenline of the matrix
$n\cdot J$ with eigenvalue $m$; consequently, for every unit $\psi\in H_{s}$,
$$\mu^{S_{n}}_{\psi}(\{\hbar m\})=\|P_{n,m}\psi\|^{2}=\langle P_{n,m}\psi,\psi\rangle\qquad(m=-s,\dots,s),$$
and the law is concentrated on the finite set $\hbar\{-s,\dots,s\}$;

(b) the Casimir operator $S^{2}$ equals $\hbar^{2}s(s+1)I$ as a bounded
operator, so for every preparation $\rho$ the law of the assigned sharp
observable $(S^{2},(\mathrm{J\,s})^{2})$ is the Dirac law at
$\hbar^{2}s(s+1)$, and one has the
commutation relations
$[S_{i},S_{j}]=i\hbar\sum_{k}\varepsilon_{ijk}S_{k}$ and
$[S^{2},S_{i}]=0$ on $H_{s}$, componentwise on the internal factor;

(c) for $s=\tfrac12$, every unit $n$ and every unit $\psi\in H_{1/2}$ one has
$$P_{n,\pm}=\tfrac12\bigl(I\pm n\cdot\sigma\bigr),\qquad \mu^{S_{n}}_{\psi}\Bigl(\Bigl\{\pm\tfrac{\hbar}{2}\Bigr\}\Bigr) =\frac{1}{2}\Bigl(1\pm\langle(n\cdot\sigma)\psi,\psi\rangle\Bigr),$$
where $n\cdot\sigma$ is applied fibrewise; in particular,
$\mu^{S_{n}}_{\psi}(\{\hbar/2\})+\mu^{S_{n}}_{\psi}(\{-\hbar/2\})=1$ and
each number lies in $[0,1]$;

(d) **Scope.** Clauses (a)-(c) are conditional consequences of P1, P2, P5 and
P6, the sharp-observable assignments stated above and the cited
finite-dimensional mathematics; they concern the internal
factor of the model. They assert no dynamics, no magnetic coupling, no
measurement or apparatus model, no joint measurement of two spin components,
no value of $\hbar$ and no empirical spin value. In particular the statements
do not identify the operators $S_{n}$ with any laboratory spin measurement,
and they contain no comparison with data.

## Facts & Assumptions

**Given:** The postulates P1, P2, P5 and P6 in the stated readings; the Axiom of Choice and the Axiom of Countable Choice; the spin-s model with parameters $m>0$, $s$ and $r=2s+1$; the internal matrices $J_{i}$ and the spin operators $S_{i}=\hbar J_{i}$; a unit vector $n\in\mathbb R^{3}$; the assigned pairs $(S_{n},\mathrm{J\,s})$ and $(S^{2},(\mathrm{J\,s})^{2})$ of the Statement; the operators $S_{n}$ and $S^{2}$; a unit vector $\psi\in H_{s}$; a preparation $\rho$; indices $i,j,k$ and eigenvalues $\lambda$ of a self-adjoint operator.

[F1] **Finite spin matrices.** On $V_{s}=\mathbb C^{r}$ the matrices $J_{i}$ are self-adjoint with $[J_{i},J_{j}]=i\sum_{k}\varepsilon_{ijk}J_{k}$, $J^{2}=J_{x}^{2}+J_{y}^{2}+J_{z}^{2}=s(s+1)I$, $J_{\pm}=J_{x}\pm iJ_{y}$, $[J^{2},J_{i}]=0$, and the basis $(e_{m})$ satisfies $J_{z}e_{m}=me_{m}$, $J_{\pm}e_{m}=\sqrt{(s\mp m)(s\pm m+1)}e_{m\pm1}$; for $s=\tfrac12$ one has $J_{i}=\tfrac12\sigma_{i}$ with $\sigma_{i}\sigma_{j}+\sigma_{j}\sigma_{i}=2\delta_{ij}I$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a),(b),(c),(d),(e)).

[F2] **Finite angular momentum classification.** If a nonzero finite-dimensional complex inner product space $V$ carries self-adjoint endomorphisms $A_{1},A_{2},A_{3}$ with $[A_{1},A_{2}]=iA_{3}$ and its cyclic companions, then $V$ is an orthogonal direct sum of blocks on each of which the triple is unitarily equivalent to a spin-$j$ model with $A^{2}=j(j+1)I$ ([[thm-nrqm-orbital-and-spin-finite-spin-block-decomposition]] clauses (b),(c), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]]).

[F3] **Model operators as matrix actions.** The model's $S_{n}$ is the fibrewise matrix action $(S_{n}f)(x)=\hbar(n\cdot J)f(x)$ on $H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ of a self-adjoint matrix, hence bounded self-adjoint with $\|S_{n}\|\le\hbar\|n\cdot J\|$ ([[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (c), [[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clause (c), [[def-bounded-linear-operator]], [[def-self-adjoint-positive-unitary-and-normal-operator]]).

[F4] **Eigenvalues and their spectral weights.** If $\lambda$ is an eigenvalue of a self-adjoint operator $A$ with spectral projection-valued measure $E_{A}$, then $E_{A}(\{\lambda\})$ is the orthogonal projection onto $\ker(A-\lambda)$; for the pure preparation of a unit vector $\psi$ one has $\mu^{A}_{\psi}(\{\lambda\})=\|E_{A}(\{\lambda\})\psi\|^{2}$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clauses (a),(b), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[F5] **Observable assignments and outcome laws.** The model's coordinate angular momentum operators $L_i$ and $S_i$ are the assigned sharp observables of [[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clauses (b),(c) with unit $\mathrm{J\,s}$. The directional and squared-spin observable assignments used here are stated in the theorem's Statement. The outcome law of each assigned sharp observable is that of P2 in the reading of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b), and the pure preparations are those of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] ([[def-nrqm-state-geometry-framework-state-space]]).

## Proof

**Proof technique:** direct; for an arbitrary direction realize the rotated triple and apply the finite angular momentum classification to obtain a single spin-$s$ block, then read the eigenspaces as ranges of fibrewise projections and compute the law with the atom formula; the spin-half case is evaluated in the Pauli matrices.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Directional component is a single spin-$s$ block] Fix a unit $n$ and choose an oriented orthonormal frame $(e^{(1)},e^{(2)},e^{(3)})$ of $\mathbb R^{3}$ with $e^{(1)}=n$; put $A_{i}:=\sum_{l}e^{(i)}_{l}J_{l}$ for $i=1,2,3$; expanding the commutator with [F1] gives $[A_{i},A_{j}]=\sum_{l,m}e^{(i)}_{l}e^{(j)}_{m}[J_{l},J_{m}]=i\sum_{k}\bigl(\sum_{l,m}\varepsilon_{lmk}e^{(i)}_{l}e^{(j)}_{m}\bigr)J_{k}=i\sum_{k}(e^{(i)}\times e^{(j)})_{k}J_{k}$, which equals $i\sum_{k}\varepsilon_{ijk}A_k$, including zero for $i=j$ and the negative sign for reversed indices, and $\sum_{i}A_{i}^{2}=\sum_{k}J_{k}^{2}=s(s+1)I$ by the orthonormality of the frame; by [F2] applied to the triple $(A_{1},A_{2},A_{3})$ there is a decomposition into blocks with parameters $j_{\nu}$ satisfying $j_{\nu}(j_{\nu}+1)=s(s+1)$ on each block, so $j_{\nu}=s$ and every block has dimension $2s+1=\dim V_{s}$; hence there is exactly one block and $A_{1}=n\cdot J$ has the simple eigenvalues $s,s-1,\dots,-s$, which is the spectrum statement of (a) at the matrix level. [F1, F2, algebra]

2.1 [Fibrewise spectral measure and law of $S_{n}$] By step 1.1 the matrix $n\cdot J$ has the simple eigenvalues $m=-s,\dots,s$; let $P_{n,m}$ be the fibrewise action on $H_{s}$ of the orthogonal projection of $\mathbb C^{r}$ onto the eigenline of $n\cdot J$ with eigenvalue $m$; each $P_{n,m}$ is an orthogonal projection on $H_{s}$, $P_{n,m}P_{n,m'}=0$ for $m\ne m'$, $\sum_{m}P_{n,m}=I$ fibrewise, and $S_{n}=\sum_{m}\hbar mP_{n,m}$ as bounded operators; consequently $\ker(S_{n}-\hbar m)=\operatorname{ran}P_{n,m}$ because a class $f$ satisfies $\hbar(n\cdot J)f(x)=\hbar mf(x)$ for almost every $x$ exactly when $f(x)$ lies in the $m$-eigenline almost everywhere; by [F4] applied to the self-adjoint $S_{n}$ of [F3], $E_{S_{n}}(\{\hbar m\})=P_{n,m}$ and $\mu^{S_{n}}_{\psi}(\{\hbar m\})=\|P_{n,m}\psi\|^{2}=\langle P_{n,m}\psi,\psi\rangle$ for every unit $\psi$; since $\sum_{m}P_{n,m}=I$, the law is concentrated on $\hbar\{-s,\dots,s\}$, which is (a). [step 1.1, F3, F4, F5, algebra]

3.1 [Coordinate components, Casimir and commutators] Applying step 2.1 with $n$ a standard basis vector gives clause (a) for the coordinate components $S_{i}$; by [F1] the matrices satisfy $[J_{i},J_{j}]=i\sum_{k}\varepsilon_{ijk}J_{k}$ and $J^{2}=s(s+1)I$, which pass to the fibrewise actions: $[S_{i},S_{j}]=i\hbar\sum_{k}\varepsilon_{ijk}S_{k}$ and $S^{2}=\hbar^{2}J^{2}=\hbar^{2}s(s+1)I$ as bounded operators, so $[S^{2},S_{i}]=0$; under the assigned pair $(S^{2},(\mathrm{J\,s})^{2})$ stated in the Statement, P2 gives the outcome law of $S^{2}$ from its spectral measure, which is the Dirac law at $\hbar^{2}s(s+1)$ because $S^{2}$ is scalar. This is (b). [step 2.1, F1, F3, F5, algebra]

3.2 [Spin-half probabilities] Let $s=\tfrac12$ and let $n$ be unit; by [F1], $(n\cdot\sigma)^{2}=\sum_{i,j}n_{i}n_{j}\sigma_{i}\sigma_{j}=\sum_{i,j}n_{i}n_{j}\delta_{ij}I=I$, so $n\cdot\sigma$ is a self-adjoint involution with eigenvalues $\pm1$, and $P_{\pm}:=\tfrac12(I\pm n\cdot\sigma)$ are orthogonal projections with $P_{+}+P_{-}=I$ and $(n\cdot\sigma)P_{\pm}=\pm P_{\pm}$; hence $P_{\pm}$ are the eigenline projections of $n\cdot J=\tfrac12n\cdot\sigma$ for the eigenvalues $\pm\tfrac12$, and step 2.1 gives $\mu^{S_{n}}_{\psi}(\{\pm\tfrac{\hbar}{2}\})=\|P_{\pm}\psi\|^{2}=\langle P_{\pm}\psi,\psi\rangle=\tfrac12(1\pm\langle(n\cdot\sigma)\psi,\psi\rangle)$, which lies in $[0,1]$ because $P_{\pm}$ are projections and sums to $1$; this is (c). [step 2.1, F1, F3, F4, algebra]

4.1 [Assembly and scope] Step 2.1 proves (a), step 3.1 proves (b) and step 3.2 proves (c); clauses (a)-(c) used only the internal matrices, the readings of [F5] and the atom formula [F4], no dynamics, coupling, apparatus or empirical input entered, which is the scope statement (d). [step 2.1, step 3.1, step 3.2, F5] ∎

## Remarks

- **Simplicity of the directional eigenvalues.** The simplicity of the eigenvalues of $n\cdot J$ is a statement about the internal matrices; the corresponding eigenspaces of $S_{n}$ on $H_{s}$ are infinite-dimensional (spatial functions times one internal vector), and clause (a) records the Born weight of the fibrewise projection, not a finite-dimensional multiplicity.
- **No joint law.** Nothing in this theorem asserts a joint outcome law of two different components $S_{n}$ and $S_{n'}$ with $n$ not parallel to $n'$; the incompatibility of the components is a separate result of the uncertainty page, and the present item uses no joint measurement model.
