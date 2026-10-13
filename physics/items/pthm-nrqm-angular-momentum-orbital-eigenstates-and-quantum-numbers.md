---
id: pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers
aliases: [nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers]
kind: physics-theorem
domain: physics
title: "Orbital angular momentum eigenstates of the massive model: spherical harmonics, the l,m quantum numbers and the Casimir value"
status: draft
origin: session
dependency_level: 10
deps: [def-axiom-of-choice, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-hilbert-space, def-inner-product-space, def-l-p-space-as-a-quotient-by-null-functions, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-schwartz-space-and-its-seminorms, lem-nrqm-angular-momentum-orbital-casimir-identity, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, lem-nrqm-symmetries-rotation-generators-on-schwartz-classes, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension, thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, thm-nrqm-orbital-and-spin-sphere-onb, thm-polar-coordinates-formula-for-lebesgue-measure]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-nrqm-angular-momentum-orbital-casimir-identity: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of P1, P2, P5 and P6 for the massive spin-s model and its orbital generators: for a smooth compactly supported radial profile times a spherical harmonic, the model vector is an eigenvector of the third orbital generator with eigenvalue hbar m, the Casimir quadratic form takes the value hbar^2 l(l+1), and the orbital quantum numbers are those of the spherical harmonic family. The statement concerns the spatial factor only, uses no dynamics and no measurement model, and asserts no spectral decomposition of the full spatial Hilbert space, no hydrogen spectrum and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.2, printed pages 145-154 (PDF pages 153-162): spherical harmonics as angular momentum eigenfunctions with quantum numbers l and m and the eigenvalue l(l+1) of the Casimir"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 4.1-4.1.2, printed pages 96-103 (PDF pages 99-106): orbital angular momentum, the commutators, the l,m quantum numbers and the l = 0 exceptions"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 1, printed pages 1-11: orbital angular momentum and the spherical harmonic eigenvalues in the radial problem"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the kinematics and massive-particle model postulate P5 and the
internal-factor assignment of the spin postulate P6, read for the massive
spin-$s$ model of [[def-nrqm-kinematics-framework-massive-spin-s-model]] and
the angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom
of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Fix $l\ge0$, $m\in\{-l,\dots,l\}$, a unit vector
$w\in\mathbb C^{r}$ and a complex-valued $R\in C_{c}^{\infty}((0,\infty))$, and
let $h_{lm}$ be the harmonic homogeneous polynomial of degree $l$ with
$h_{lm}|_{S^2}=Y_{lm}$ of
[[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clause (c)
([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]). Define
the model vector
$$\psi(x):=R(|x|)\,h_{lm}(x)\,w\qquad(x\in\mathbb R^{3},\ x\ne0),\qquad \psi(0):=0 .$$
Then:

(a) $\psi$ is a well-defined class in the model's state space $H_{s}$ and in
fact $\psi\in C_{c}^{\infty}(\mathbb R^{3};\mathbb C^{r})\subseteq\mathcal
S^{(r)}$; it lies in $D(L_{i})$ for each $i$, and for $x\ne0$
$$(L_{i}\psi)(x)=R(|x|)\,\bigl(-i\hbar\,D_{i}h_{lm}\bigr)(x)\,w,\qquad D_{i}h_{lm}=(x\times\nabla h_{lm})_{i},$$
so that $-i\hbar D_{i}h_{lm}$ is the polynomial representative of the sphere
function $L_{i}^{\mathrm{sph}}Y_{lm}$ of
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]]; in particular
$L_{3}\psi=\hbar m\,\psi$;

(b) with $\|R\|_{l}^{2}:=\int_{0}^{\infty}|R(r)|^{2}r^{2l+2}\,dr$ one has
$\|\psi\|^{2}=\|R\|_{l}^{2}$ and
$$\|L_{i}\psi\|^{2}=\|R\|_{l}^{2}\,\bigl\|L_{i}^{\mathrm{sph}}Y_{lm}\bigr\|^{2}, \qquad \sum_{i=1}^{3}\|L_{i}\psi\|^{2}=\hbar^{2}l(l+1)\,\|\psi\|^{2},$$
so the Casimir quadratic form of the model's orbital generators on $\psi$
takes the value $\hbar^{2}l(l+1)$;

(c) consequently, for the pure preparation of the unit vector
$\psi/\|\psi\|$ (for $R\not\equiv0$), the mean and the second moment of the
outcome law of $(L_{3},\mathrm{J\,s})$ are finite and equal
$\hbar m$ and $\hbar^{2}m^{2}$, so the variance vanishes; for each $i$ the
mean and second moment of the law of $L_{i}$ are finite and the second moment
equals $\bigl\|L_{i}^{\mathrm{sph}}Y_{lm}\bigr\|^{2}$; the model reads $(l,m)$
as the **orbital angular momentum quantum numbers** of the preparation, in
the sense of the eigenvalue of the angular momentum-squared form and the
eigenvalue of $L_{3}$;

(d) **Scope.** Clauses (a)-(c) are conditional consequences of P1, P2, P5, P6
and the cited mathematics, and concern the spatial factor of the massive
model. The item asserts no dynamics, no measurement or apparatus model, no
joint sharp values of two different components $L_{i},L_{j}$, no empirical
value and no spectral resolution of $L^{2}(\mathbb R^{3})$: the identity
$\sum_{i}L_{i}^{2}=\hbar^{2}l(l+1)$ is a quadratic-form statement on the
displayed smooth vectors and is not read as a statement about a self-adjoint
operator $\sum_{i}L_{i}^{2}$ on the full spatial Hilbert space.

## Facts & Assumptions

**Given:** The postulates P1, P2, P5 and P6 in the stated readings; the Axiom
of Choice and the Axiom of Countable Choice; the model with parameters $m>0$,
$s$, $r=2s+1$; the harmonic polynomial $h_{lm}$ and the sphere functions
$Y_{lm}$; the radial function $R$; the unit vector $w$; the vector $\psi$;
indices $i,k$.

[F1] **Harmonic polynomial and spherical harmonic.** For $l\ge0$ and
$-l\le m\le l$ the polynomial $h_{lm}$ is homogeneous of degree $l$, harmonic,
nonzero, with $h_{lm}|_{S^2}=Y_{lm}$, and $D_{3}h_{lm}=im\,h_{lm}$ where
$D_{3}=x_{1}\partial_{2}-x_{2}\partial_{1}$; moreover $L_{3}^{\mathrm{sph}}
Y_{lm}=\hbar mY_{lm}$ and $L_{i}^{\mathrm{sph}}Y_{lm}
=\mathrm{res}_{l}(-i\hbar D_{i}h_{lm})$ for $D_{i}p=(x\times\nabla p)_{i}$
([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clause (c),
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]] clauses
(a),(c), [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]
clause (c)).

[F2] **Core action of the orbital generators.** For every componentwise
Schwartz class $\varphi\in\mathcal S^{(r)}$ the orbital generators satisfy
$L_{i}\varphi\in H_{s}$, $\mathcal S^{(r)}\subseteq D(L_{i})$, and
$$L_{i}\varphi=-i\hbar\sum_{j}(e_{i}\times x)_{j}D_{j}\varphi=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}\varphi ,$$
with $D_{j}$ the componentwise weak derivative
([[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] clauses
(a),(b), [[lem-nrqm-kinematics-componentwise-position-and-momentum]]
clauses (a),(c)).

[F3] **Orbital Casimir identity.** For $F\in V_{l}$ one has
$\sum_{i}L_{i}^{2}F=\hbar^{2}l(l+1)F$ on the harmonic span, and the
on-shell values are exactly the squared norms
$\sum_{i}\|L_{i}^{\mathrm{sph}}Y_{lm}\|^{2}=\hbar^{2}l(l+1)$
([[lem-nrqm-angular-momentum-orbital-casimir-identity]] clauses (b),(c),
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]]).

[F4] **Polar integration and the sphere measure.** For a Borel
$f\ge0$ on $\mathbb R^{3}$ one has
$\int_{\mathbb R^{3}}f\,dx=\int_{0}^{\infty}\int_{S^{2}}f(r\Omega)\,r^{2}d\sigma(\Omega)\,dr$,
and $\int_{S^{2}}F\,d\sigma=\int_{(0,\pi)\times(0,2\pi)}F\circ\Phi\,\sin\theta\,d(\theta,\varphi)$
with $\sigma(S^{2})=4\pi$
([[thm-polar-coordinates-formula-for-lebesgue-measure]],
[[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]).

[F5] **Schwartz calculus and the class reading.** $C_{c}^{\infty}(\mathbb
R^{3};\mathbb C^{r})\subseteq\mathcal S^{(r)}$; a classical partial
derivative of a $C^{1}$ function that is locally integrable is its weak
derivative; the model space consists of almost-everywhere classes
([[def-schwartz-space-and-its-seminorms]],
[[lem-nrqm-kinematics-componentwise-position-and-momentum]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-hilbert-space]], [[def-inner-product-space]]).

## Proof

**Proof technique:** direct; the vector is a compactly supported smooth class
with a homogeneous polynomial angular factor, so the core identity of the
generators applies; the radial and angular integrals separate by polar
integration and the Casimir value is transported from the sphere.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Smoothness and the polynomial identity] Since $\operatorname{supp}R\subseteq[a,b]$ with $0<a\le b<\infty$ and $h_{lm}$ is a polynomial, the function $\psi=R(|x|)h_{lm}(x)w$ vanishes identically near $0$ and is smooth on $\mathbb R^{3}$ with compact support, so $\psi\in C_{c}^{\infty}(\mathbb R^{3};\mathbb C^{r})\subseteq\mathcal S^{(r)}$ by [F5]; for $x\ne0$ and each $i$, the product rule gives $(x\times\nabla)_{i}\psi=R(|x|)(D_{i}h_{lm})(x)w$ because $(x\times\nabla)_{i}R(|x|)=R'(|x|)\,(x\times x)_{i}/|x|=0$, and by [F1] the function $-i\hbar D_{i}h_{lm}$ is the polynomial representative of $L_{i}^{\mathrm{sph}}Y_{lm}$; moreover [F1] gives $D_{3}h_{lm}=im\,h_{lm}$. [F1, F5, algebra]

2.1 [Core action and $L_{3}$ eigenvalue] By step 1.1 and [F2], $\psi\in D(L_{i})$ and $L_{i}\psi=\sum_{j,k}\varepsilon_{ijk}Q_{j}P_{k}\psi=-i\hbar\,(x\times\nabla)_{i}\psi=R(|x|)\,(-i\hbar D_{i}h_{lm})(x)\,w$ for almost every $x$, where the weak derivatives agree with the classical ones by [F5]; here $P_{k}=-i\hbar\partial_{k}$ on the Schwartz class, so the factor $-i\hbar$ occurs once. For $i=3$, [F1] gives $L_{3}\psi=-i\hbar R\,D_{3}h_{lm}\,w=\hbar mR\,h_{lm}w=\hbar m\psi$, proving (a). [step 1.1, F1, F2, F5, algebra]

3.1 [Norms and the Casimir form] Put $q_i:=D_i h_{lm}$. Each term $x_j\partial_k h_{lm}$ is homogeneous of degree $l$ or zero, so $q_i(r\Omega)=r^lq_i(\Omega)$ for $r>0$; for $l=0$, $q_i=0$. By step 2.1, $\|w\|=1$ and polar integration [F4], $\|L_i\psi\|^2=\hbar^2\int_{\mathbb R^3}|R(|x|)|^2|q_i(x)|^2\,dx=\hbar^2\bigl(\int_0^\infty|R(r)|^2r^{2l+2}\,dr\bigr)\int_{S^2}|q_i(\Omega)|^2\,d\sigma(\Omega)$. By [F1], $L_i^{\mathrm{sph}}Y_{lm}=-i\hbar q_i|_{S^2}$, hence $\|L_i\psi\|^2=\|R\|_l^2\|L_i^{\mathrm{sph}}Y_{lm}\|^2$. Likewise homogeneity of $h_{lm}$ and [F4] give $\|\psi\|^2=\|R\|_l^2\int_{S^2}|Y_{lm}|^2\,d\sigma=\|R\|_l^2$, using the normalization in [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] clause (d). Finally, on the finite invariant block $V_l$, self-adjointness and [F3] give $\sum_i\|L_i^{\mathrm{sph}}Y_{lm}\|^2=\langle\sum_i(L_i^{\mathrm{sph}})^2Y_{lm},Y_{lm}\rangle=\hbar^2l(l+1)$, so $\sum_i\|L_i\psi\|^2=\hbar^2l(l+1)\|\psi\|^2$, proving (b), including $l=0$ and $R=0$. [step 2.1, F1, F3, F4, given, algebra]

4.1 [Readings] Let $R\not\equiv0$ and put $\varphi:=\psi/\|\psi\|$; by step 2.1, $L_{3}\varphi=\hbar m\varphi$ with $\varphi\in D(L_{3})$, so the mean and the second moment of the law of $L_{3}$ in the pure preparation $[\varphi]$ are $\langle L_{3}\varphi,\varphi\rangle=\hbar m$ and $\|L_{3}\varphi\|^{2}=\hbar^{2}m^{2}$, with variance $0$; for each $i$, step 2.1 gives $\varphi\in D(L_{i})$ and step 3.1 gives $\|L_{i}\varphi\|^{2}=\|L_{i}^{\mathrm{sph}}Y_{lm}\|^{2}$, so the mean and second moment of the law of $L_{i}$ are finite with that second moment, and the quadratic form is $\sum_{i}\|L_{i}\varphi\|^{2}=\hbar^{2}l(l+1)$, which is (c). [step 2.1, step 3.1, F3, algebra]

5.1 [Assembly and scope] Steps 1.1 and 2.1 prove (a), step 3.1 proves (b) and step 4.1 proves (c); only the spatial core identities, the sphere data and polar integration were used, no dynamics, apparatus or empirical input entered, and no operator identity for $\sum_{i}L_{i}^{2}$ on the full space was asserted, which is the scope statement (d). [step 1.1, step 2.1, step 3.1, step 4.1, F2] ∎

## Remarks

- **The density of the family.** The vectors $R(|x|)h_{lm}(x)w$ with
  $R\in C_{c}^{\infty}((0,\infty))$ span a dense subspace of the angular
  sector $L^{2}((0,\infty),r^{2}dr)\otimes\mathbb C\,Y_{lm}\otimes\mathbb C w$
  in the polar decomposition; this theorem uses only their eigenproperty and
  makes no completeness claim.
- **No hidden operator $(L^{2})$.** The Casimir value is stated as a
  quadratic-form identity. Defining a self-adjoint operator $\sum_{i}L_{i}^{2}$
  on $L^{2}(\mathbb R^{3})$ would require a separate closed-form and domain
  argument, which is not part of this page.
