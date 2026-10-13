---
id: ex-nrqm-angular-momentum-l-eigenfunctions
aliases: [ nrqm-angular-momentum-l-eigenfunctions ]
kind: example
domain: physics
title: "Orbital angular momentum eigenfunctions: the low spherical harmonics of
  the massive model"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-countable-choice,
    def-nrqm-angular-momentum-framework-angular-momentum-observables,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    lem-nrqm-angular-momentum-orbital-casimir-identity,
    lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates,
    pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers,
    thm-ftc-second-part,
    thm-nrqm-orbital-and-spin-associated-polynomial-normalization,
    thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension,
    thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators,
    thm-sine-and-cosine-derivatives,
    thm-sine-and-cosine-addition-formulas,
    def-sine-and-cosine-by-power-series
  ]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  lem-nrqm-angular-momentum-orbital-casimir-identity: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers: physical-result
  thm-ftc-second-part: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Explicit low-degree computations inside the angular theory of
  the massive model: the degree-zero and degree-one spherical harmonics, their
  orthonormality on the sphere and their eigenvalue equations for the third
  orbital generator and the orbital Casimir form, together with the citation of
  the general eigenstate theorem. The example concerns the spatial angular
  factor; it asserts no dynamics, no radial spectrum, no measurement and no
  empirical value."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.2,
        printed pages 145-154 (PDF pages 153-162): the l = 0, 1 spherical
        harmonics, their orthonormality and their angular momentum eigenvalues"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        4.1-4.1.2, printed pages 96-103 (PDF pages 99-106): the low spherical
        harmonics and the angular momentum eigenvalue equations, including the l
        = 0 exceptions"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---
## Example

Adopt the mass parameter $m>0$, a spin label $s$ and the angular momentum
readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]] for the
massive spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]], and assume the Axiom
of Countable Choice ([[def-countable-choice]]). Let $Y_{lm}$ be the spherical
harmonics of
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] and
$h_{lm}$ their harmonic polynomial representatives of
[[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clause (c), and
let $L_{i}^{\mathrm{sph}}$ be the self-adjoint orbital generators on
$L^{2}(S^{2},\sigma)$ of
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]], and let
$D_{i}=(x\times\nabla)_{i}$ act on polynomials on $\mathbb R^{3}$. The
polynomial and sphere actions are related by
$L_{i}^{\mathrm{sph}}Y_{lm}=\operatorname{res}_{l}(-i\hbar D_{i}h_{lm})$
as specified by that theorem. Then:

(i) the harmonic polynomial representatives of the degrees $l=0$ and $l=1$
are
$$h_{00}=\frac{1}{\sqrt{4\pi}},\qquad h_{10}=\sqrt{\frac{3}{4\pi}}\,x_{3},\qquad h_{1,1}=-\sqrt{\frac{3}{8\pi}}\,(x_{1}+ix_{2}),\qquad h_{1,-1}=\sqrt{\frac{3}{8\pi}}\,(x_{1}-ix_{2}),$$
and the family $(Y_{00},Y_{1,-1},Y_{10},Y_{11})$ is orthonormal in
$L^{2}(S^{2},\sigma)$;

(ii) on the degree-one block,
$$L_{3}^{\mathrm{sph}}Y_{1m}=\hbar m\,Y_{1m},\qquad \sum_{i=1}^{3}(L_{i}^{\mathrm{sph}})^{2}F=2\hbar^{2}F\quad(F\in V_{1}),$$
while the corresponding polynomial identity is
$-i\hbar D_{3}h_{1m}=\hbar m h_{1m}$ on $\mathbb R^{3}$; on the
degree-zero block $L_{i}^{\mathrm{sph}}Y_{00}=0$ for every $i$, so
$\sum_{i}(L_{i}^{\mathrm{sph}})^{2}Y_{00}=0$;

(iii) more generally, for every $l\ge0$ and $m\in\{-l,\dots,l\}$ one has
$L_{3}^{\mathrm{sph}}Y_{lm}=\hbar mY_{lm}$; for every nonzero
$R\in C_{c}^{\infty}((0,\infty))$ and unit $w\in\mathbb C^{r}$, the
normalized model vector $\varphi=R(|x|)h_{lm}(x)w/\|R(|x|)h_{lm}(x)w\|$
of [[pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers]]
satisfies $\sum_{i}\|L_{i}\varphi\|^{2}=\hbar^{2}l(l+1)$. Thus the low-degree
computations of (i),(ii) are the first two cases of the sphere identities.

The low-degree sphere computations are independent of the radial profile;
clause (iii) uses a nonzero radial profile to form a normalized model vector.
The example involves no dynamics, no detector and no empirical input.

## Facts & Assumptions

**Given:** A mass parameter $m>0$ and a spin label $s$; the harmonic
polynomials $h_{lm}$ and the sphere functions $Y_{lm}$; the orbital
generators $L_{i}$ with $D_{i}=(x\times\nabla)_{i}$; the polar surface measure
$\sigma$ with $\sigma(S^{2})=4\pi$.

[F1] **Low harmonics.** The associated-polynomial normalization gives
$w_{00}=P_{0}=1$, $w_{10}=P_{1}=t$, $w_{11}=-(1-t^{2})^{1/2}$ with
$b_{00}=\bigl(\int_{-1}^{1}1\,dt\bigr)^{-1/2}=2^{-1/2}$,
$b_{10}=\bigl(\int_{-1}^{1}t^{2}dt\bigr)^{-1/2}=\sqrt{3/2}$ and
$b_{11}=\bigl(\int_{-1}^{1}(1-t^{2})dt\bigr)^{-1/2}=\sqrt{3/4}$, and the
polynomial representatives are $h_{00}=b_{00}/\sqrt{2\pi}$,
$h_{10}=b_{10}\,x_{3}/\sqrt{2\pi}$ and
$h_{1,\pm1}=\mp b_{11}(x_{1}\pm ix_{2})/\sqrt{2\pi}$
([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] clauses
(c),(e), [[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]]
clause (c)).

[F2] **Sphere integrals.** For the coordinate functions
$\Omega_{j}(x)=x_{j}/|x|$ one has $\int_{S^{2}}\Omega_{i}\Omega_{j}\,d\sigma=\frac{4\pi}{3}\delta_{ij}$
and $\int_{S^{2}}1\,d\sigma=4\pi$, computed in angle coordinates
$\Phi(\theta,\varphi)$ with $\sin\theta\,d(\theta,\varphi)$
([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]],
[[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]],
[[thm-sine-and-cosine-addition-formulas]],
[[def-sine-and-cosine-by-power-series]]).

[F3] **Core action and Casimir on blocks.** For polynomial representatives
one has $L_{i}^{\mathrm{sph}}F=\mathrm{res}_{l}(-i\hbar D_{i}p_{F})$ and
$\sum_{i}(L_{i}^{\mathrm{sph}})^{2}F=\hbar^{2}l(l+1)F$ for $F\in V_{l}$
([[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]] clause (a),
[[lem-nrqm-angular-momentum-orbital-casimir-identity]] clauses (b),(c)).

[F4] **General eigenstate theorem.** For every $l,m$ and every radial profile
$R\in C_{c}^{\infty}((0,\infty))$ the model vector $R(|x|)h_{lm}(x)w$ has
$L_{3}$-eigenvalue $\hbar m$ and Casimir form value $\hbar^{2}l(l+1)$
([[pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers]]
clauses (a),(b),(c)).

## Verification

**Proof technique:** direct; insert the explicit low-degree polynomials, evaluate the sphere integrals in angle coordinates, and apply the polynomial action of the generators and the Casimir identity on the degree-one block.

**Given:** The data of the example and [F1]-[F4].

1.1 [Low polynomials] Substituting the constants of [F1] gives $h_{00}=2^{-1/2}(2\pi)^{-1/2}=(4\pi)^{-1/2}$, $h_{10}=\sqrt{3/2}(2\pi)^{-1/2}x_{3}=\sqrt{3/(4\pi)}x_{3}$, and $h_{1,\pm1}=\mp\sqrt{3/4}(2\pi)^{-1/2}(x_{1}\pm ix_{2})=\mp\sqrt{3/(8\pi)}(x_{1}\pm ix_{2})$, which are the displayed polynomials of (i); each is harmonic and homogeneous of the stated degree by [F1]. [F1, algebra]

2.1 [Sphere norms and orthogonality] By [F2] and step 1.1, $\int_{S^{2}}|Y_{00}|^{2}d\sigma=\frac{1}{4\pi}\cdot4\pi=1$; $\int_{S^{2}}|Y_{10}|^{2}d\sigma=\frac{3}{4\pi}\int\Omega_{3}^{2}d\sigma=\frac{3}{4\pi}\cdot\frac{4\pi}{3}=1$; and $\int_{S^{2}}|Y_{1,\pm1}|^{2}d\sigma=\frac{3}{8\pi}\int(\Omega_{1}^{2}+\Omega_{2}^{2})d\sigma=\frac{3}{8\pi}\cdot\frac{8\pi}{3}=1$. The mixed products with $Y_{00}$ integrate to zero: $\Omega_1$ and $\Omega_2$ have zero $\varphi$-integrals, while $\int_0^\pi\cos\theta\sin\theta\,d\theta=0$ for $\Omega_3$, by the angle formula and the trigonometric primitives in [F2]. The mixed products of $Y_{10}$ with $Y_{1,\pm1}$ vanish by $\int\Omega_3\Omega_1\,d\sigma=\int\Omega_3\Omega_2\,d\sigma=0$ from [F2]. Finally, $Y_{11}\overline{Y_{1,-1}}=-\frac{3}{8\pi}(\Omega_1^2-\Omega_2^2+2i\Omega_1\Omega_2)$ has zero integral because [F2] gives equal second moments for $\Omega_1,\Omega_2$ and a zero cross moment; the reversed mixed integrals are their complex conjugates. Hence the four functions are orthonormal. [step 1.1, F2, algebra]

2.2 [Degree-one eigenvalues] By step 1.1, direct differentiation gives $D_{3}h_{1m}=(x_{1}\partial_{2}-x_{2}\partial_{1})h_{1m}=im\,h_{1m}$ for $m=-1,0,1$, hence $-i\hbar D_{3}h_{1m}=\hbar m h_{1m}$ as a polynomial identity; restricting to the sphere and using [F3] gives $L_{3}^{\mathrm{sph}}Y_{1m}=\hbar mY_{1m}$. The Casimir identity of [F3] with $l=1$ gives $\sum_{i}(L_{i}^{\mathrm{sph}})^{2}F=2\hbar^{2}F$ for $F\in V_{1}$. For $l=0$, each $D_{i}h_{00}=0$, so [F3] gives $L_{i}^{\mathrm{sph}}Y_{00}=0$ and therefore $\sum_{i}(L_{i}^{\mathrm{sph}})^{2}Y_{00}=0$. This proves (ii). [step 1.1, F3, algebra]

3.1 [General case] Clause (iii) restates [F4] in the normalization $\|Y_{lm}\|=1$; combining it with step 2.2 gives the low-degree instances, completing the verification of (i)-(iii). [step 2.1, F4, algebra] ∎

## Remarks

- **The $l=0$ exception.** The vanishing of all three components on $Y_{00}$
  illustrates that a state with zero total orbital angular momentum has every
  component sharp at value zero; the noncommutation of two components on
  other states is not contradicted.
- **Radial scope.** Clause (iii) uses the normalized model vectors of the cited
  eigenstate theorem. No radial dynamics or radial energy equation is solved here.
