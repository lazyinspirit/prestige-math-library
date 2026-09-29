---
id: ex-annulus-harmonic-measure-of-boundary-circles
kind: example
title: "Harmonic measure of the two annulus boundary circles"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-barrier-and-regular-boundary-point
  - def-complex-annulus
  - def-complex-domain
  - def-continuous-map-top
  - def-dependent-choice
  - def-harmonic-measure-plane-domain
  - def-metric-interior-closure-boundary
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-planar-barrier-controls-perron-solutions
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-harmonic-measure-is-well-defined
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed pp. 170-172: harmonic measure of a region bounded by two circles"
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Chapter 11"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, printed pp. 223-237: barriers and regularity of boundary points"
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: harmonic measure of an annulus by the logarithmic radius"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume Dependent Choice. Let $0<r<R<\infty$, let $A=A(0;r,R)=\{w:r<|w|<R\}$
be the round annulus ([[def-complex-annulus]]), and let $C_r=\{w:|w|=r\}$
and $C_R=\{w:|w|=R\}$ be its two boundary circles. Then $A$ is a bounded
regular plane domain in the sense of [[def-harmonic-measure-plane-domain]], so
its harmonic measure $\omega_A^z$ exists at every $z\in A$, and
$$\omega_A^z(C_r)=\frac{\log R-\log|z|}{\log R-\log r},\qquad \omega_A^z(C_R)=\frac{\log|z|-\log r}{\log R-\log r},$$
with both values in $(0,1)$ and sum $1$. This is the logarithmic-radius
calculation; a full Fourier-series density on either circle is not asserted.

## Facts & Assumptions

**Given:** Radii $0<r<R<\infty$, the round annulus $A=A(0;r,R)$ ([[def-complex-annulus]]), a point $z\in A$, and Dependent Choice ([[def-dependent-choice]]). Boundaries are topological ([[def-metric-interior-closure-boundary]]), continuity is that of [[def-continuous-map-top]], harmonic measure is as in [[def-harmonic-measure-plane-domain]], and barriers are as in [[def-barrier-and-regular-boundary-point]].

[F1] $A$ is an open subset of $\mathbb C$ with $|w|<R$ for every $w\in A$, hence a bounded open set; a connected open subset of $\mathbb C$ is a complex domain ([[def-complex-domain]], [[def-complex-annulus]]).

[F2] If every boundary point of a bounded complex domain is regular, then under Dependent Choice the harmonic measure exists and is the unique Radon Borel probability measure with $H_\varphi(z)=\int\varphi\,d\omega$ for every continuous boundary datum, and $w\mapsto H_\varphi(w)$ is the unique continuous extension to the closure that is harmonic on the domain and agrees with $\varphi$ on the boundary ([[thm-harmonic-measure-is-well-defined]], [[def-harmonic-measure-plane-domain]]).

[F3] A barrier at a boundary point forces that point to be regular ([[lem-planar-barrier-controls-perron-solutions]], [[def-barrier-and-regular-boundary-point]]); here a barrier at $\zeta$ is a subharmonic $b<0$ on the domain with $b(w)\to0$ as $w\to\zeta$ and with each closed set of boundary points outside a neighbourhood of $\zeta$ kept uniformly away from $0$.

[F4] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]); composition with a holomorphic map preserves harmonicity ([[thm-conformal-invariance-of-plane-harmonicity]]); real linear combinations of harmonic functions are harmonic, since harmonicity is the $C^2$ condition $\Delta u=0$ ([[def-plane-harmonic-function]]); and a $C^2$ function with $\Delta b\ge0$ is subharmonic, so in particular every harmonic function is subharmonic ([[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-subharmonic-function]]).

[F5] The two circles $C_r$ and $C_R$ are disjoint closed subsets of $\mathbb C$ whose union is $\partial A$; each is the complement of the other in $\partial A$, so each is also open in $\partial A$ ([[def-complex-annulus]], [[def-metric-interior-closure-boundary]]). Consequently the function $\varphi:\partial A\to\mathbb R$ equal to $1$ on $C_r$ and to $0$ on $C_R$ is continuous: every point of $\partial A$ lies in one of the two circles and is at positive distance from the other, so $\varphi$ is constant near that point ([[def-continuous-map-top]]).

## Verification

**Proof technique:** direct.

1.1 The annulus $A$ is connected: for $w_k=\rho_ke^{i\theta_k}\in A$, $k=1,2$, the path $w(t)=\bigl((1-t)\rho_1+t\rho_2\bigr)\exp\bigl(i\bigl((1-t)\theta_1+t\theta_2\bigr)\bigr)$, $t\in[0,1]$, has modulus between $\rho_1$ and $\rho_2$ and hence values in $A$, and it joins $w_1$ to $w_2$. Together with openness and boundedness from [F1] this makes $A$ a bounded complex domain. [F1, given]

1.2 Boundary points of the outer circle are regular. Fix $\xi\in C_R$ and set $\zeta_*:=2\xi$, so that $|\zeta_*|=2R$ and $|\zeta_*-\xi|=R$. Define $b(w):=\log R-\log|w-\zeta_*|$ for $w\in A$. Since $\zeta_*\notin\overline A$, the map $w\mapsto w-\zeta_*$ is a holomorphic map with values in $\mathbb C\setminus\{0\}$ on the open set containing $\overline A$, so $w\mapsto\log|w-\zeta_*|$ is harmonic on $A$ by [F4] and $b$ is harmonic, hence subharmonic, on $A$ by [F4]. For $w\in A$ the reverse triangle inequality gives $|w-\zeta_*|\ge|\zeta_*|-|w|>2R-R=R$, so $b(w)<0$; and $b(\xi)=\log R-\log R=0$ with $b$ continuous at $\xi$, so $b(w)\to0$ as $w\to\xi$. Finally $b\le0$ on $\partial A$ with equality only at $\xi$: on $C_R$ the identity $|\eta-\zeta_*|=R$ holds exactly when $\eta=\xi$, and on $C_r$ one has $|\eta-\zeta_*|\ge2R-r>R$. Hence for every neighbourhood $V$ of $\xi$ the continuous function $b$ is strictly negative on the compact set $\partial A\setminus V$ (if that set is empty there is nothing to bound), so its maximum there is some $c_V<0$; thus $b$ is a barrier at $\xi$, and $\xi$ is regular by [F3]. [F3, F4, given, algebra]

1.3 Boundary points of the inner circle are regular. Fix $\xi\in C_r$ and set $\zeta_*:=\xi/2$, so that $|\zeta_*|=r/2$ and $|\xi-\zeta_*|=r/2$. Define $b(w):=\log(r/2)-\log|w-\zeta_*|$ for $w\in A$. Here $\zeta_*\notin\overline A$, so $b$ is harmonic on $A$ by [F4] and hence subharmonic. For $w\in A$ the reverse triangle inequality gives $|w-\zeta_*|\ge|w|-|\zeta_*|>r-r/2=r/2$, so $b(w)<0$; and $b(\xi)=0$ with $b$ continuous at $\xi$, so $b(w)\to0$ as $w\to\xi$. On $\partial A$ one has $b\le0$ with equality only at $\xi$: the equality $|\eta-\zeta_*|=r/2$ forces $|\eta|=r$ and $\eta$ on the ray through $\zeta_*$, that is $\eta=\xi$, while for $|\eta|=R$ one has $|\eta-\zeta_*|\ge R-r/2>r/2$. So for every neighbourhood $V$ of $\xi$ the maximum of $b$ over the compact set $\partial A\setminus V$ is a $c_V<0$, and $b$ is a barrier at $\xi$; by [F3] the point $\xi$ is regular. [F3, F4, given, algebra]

1.4 Define $s(w):=\bigl(\log R-\log|w|\bigr)/\log(R/r)$ for $w\in\overline A$. On the annulus $A$ the function $s$ is a real linear combination of the harmonic function $\log|\cdot|$ restricted to $A$ and the constant $\log R$, divided by the nonzero constant $\log(R/r)>0$, so $s$ is harmonic on $A$ by [F4]. On $\partial A$ it takes the values $s(\eta)=(\log R-\log r)/\log(R/r)=1$ for $\eta\in C_r$ and $s(\eta)=0$ for $\eta\in C_R$; since $|\cdot|$ is continuous and positive on the compact annulus $\overline A$, the formula extends $s$ continuously to $\overline A$. Thus $s$ is a continuous harmonic extension to $\overline A$ of the continuous boundary function $\varphi$ of [F5], so $H_\varphi=s$ on $A$ by the uniqueness in [F2]. [F2, F4, F5, given, algebra]

2.1 Steps 1.2 and 1.3 cover every point of $\partial A=C_r\cup C_R$, so every boundary point of the bounded complex domain $A$ is regular. By [F2] there is Dependent Choice used here to obtain the harmonic measure $\omega_A^z$, the unique Radon probability measure on $\partial A$ with $H_\psi(z)=\int\psi\,d\omega_A^z$ for every continuous $\psi$, and the Perron envelope of a continuous datum is its unique continuous harmonic extension. [F2, step 1.1, step 1.2, step 1.3]

2.2 Evaluating the representing identity of [F2] for $\varphi$ at the point $z$, and using $\varphi=\mathbf 1_{C_r}$ on $\partial A$ by [F5], gives $$\omega_A^z(C_r)=\int_{\partial A}\mathbf 1_{C_r}\,d\omega_A^z=\int_{\partial A}\varphi\,d\omega_A^z=H_\varphi(z)=s(z)=\frac{\log R-\log|z|}{\log R-\log r}.$$ [F2, F5, step 1.4]

3.1 The complementary indicator $\mathbf 1_{C_R}=1-\varphi$ is likewise continuous on $\partial A$, and $\omega_A^z$ is a probability measure, so $$\omega_A^z(C_R)=\int_{\partial A}(1-\varphi)\,d\omega_A^z=1-\omega_A^z(C_r)=1-\frac{\log R-\log|z|}{\log R-\log r}=\frac{\log|z|-\log r}{\log R-\log r}.$$ [F2, F5, step 2.2, algebra]

4.1 Since $r<|z|<R$, both numerator quantities $\log R-\log|z|$ and $\log|z|-\log r$ are positive and their sum is $\log R-\log r>0$, so the two masses lie in $(0,1)$ and sum to $1$, as claimed. Dependent Choice was used only in step 2.1 through the existence and uniqueness theorem [F2]; the explicit barriers, the logarithmic function $s$ and all identities above are choice-free. [step 2.1, step 2.2, step 3.1, given, algebra] ∎
