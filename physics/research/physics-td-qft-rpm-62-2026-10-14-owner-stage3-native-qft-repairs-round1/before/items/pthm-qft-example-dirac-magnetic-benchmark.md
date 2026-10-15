---
id: pthm-qft-example-dirac-magnetic-benchmark
kind: physics-theorem
domain: physics
library: physics
title: Minimal Dirac magnetic benchmark from the adopted action
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 9
deps:
  - def-countable-choice
  - def-qft-dirac-projections
  - def-qft-example-data
  - def-qft-example-observable-types
  - def-qft-framework-units
  - def-qft-qed-gauge-data
  - def-qft-qed-physical-gauge-quantities
  - lem-qft-example-dirac-pauli-square
  - post-qft-qed-local-coupling
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-example-observable-types: formulation-prerequisite
  def-qft-framework-units: formulation-prerequisite
  def-qft-qed-gauge-data: mathematical-premise
  def-qft-qed-physical-gauge-quantities: formulation-prerequisite
  lem-qft-example-dirac-pauli-square: mathematical-premise
  post-qft-qed-local-coupling: physical-assumption
physical_scope: >-
  A conditional compact-variation Dirac equation and formal minimal magnetic
  coefficient for a smooth static pure magnetic background. The result is
  the minimal/tree Pauli coefficient only: it proves no self-adjoint magnetic
  closure, full spectrum, Landau-level construction, radiative correction,
  or empirical equality.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 4 §§4.3 and 4.7, and Chapter 6 §6.3.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§58 and 64
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
    - title: Timo Weigand, Quantum Field Theory I and II, complete lecture notes, §5.8.2 “Anomalous magnetic moment”
      url: https://physics.umd.edu/grt/taj/624b/WeigandQFT.pdf
---

## Statement

Assume Countable Choice, $\mathrm{AC}_\omega$ [[def-countable-choice]], as in the mathematical Dirac-matrix supplier chain. Also assume the adopted local Maxwell–Dirac action of
[[post-qft-qed-local-coupling]] with electron charge $q=-e$, $e>0$, and
rest mass $m>0$, with $q,e$ in coulombs and $m$ in kilograms. Use the
oriented, time-oriented affine Minkowski spacetime
and inertial chart $x=(ct,\mathbf x)$ with
$\eta=\operatorname{diag}(-1,1,1,1)$ of [[def-qft-framework-units]]. On
$\mathbb R^4$, the static lower potential is
$A_{{\rm SI},a}(x^0,\mathbf x)=(0,\mathbf A(\mathbf x))$: it is independent
of $x^0$, with $\phi=0$ and
$\mathbf A\in C^\infty(\mathbb R^3;\mathbb R^3)$ in SI units
$\mathrm{T\,m}$. Define $\mathbf B=\nabla\times\mathbf A$ in tesla,
$$ \pi_i=-i\hbar\partial_i-qA_i,\qquad H_D=c\sum_{i=1}^3\alpha_i\pi_i+\beta mc^2, $$
as spatial differential expressions on $C^\infty(\mathbb R^3;\mathbb C^4)$.
Let $\mathcal D=C_c^\infty(\mathbb R^3;\mathbb C^4)$ be their common test
domain; smooth coefficients make $\pi_i$ and $H_D$ map $\mathcal D$ into
itself. Use the Dirac matrices and adjoint of
[[def-qft-dirac-projections]] and
$$ \Sigma_i=\operatorname{diag}(\sigma_i,\sigma_i),\qquad S_i=\frac{\hbar}{2}\Sigma_i. $$
The matrices $\alpha_i,\beta,\Sigma_i$ are dimensionless,
$S_i$ has units $\mathrm{J\,s}$, $\pi_i$ has units
$\mathrm{kg\,m\,s^{-1}}$, and $H_D$ has units joules. Let
$\psi:\mathbb R^4\to\mathbb C^4$ be a smooth spacetime spinor field. For a compactly supported direction
$\xi\in C_c^\infty(\mathbb R^4;\mathbb C^4)$, holding $A$ fixed and
using real $\varepsilon$, define
$$\delta_\xi S_{\rm cl}:=\left.\frac{d}{d\varepsilon}\right|_{\varepsilon=0}\hbar\int_{\mathbb R^4}\bigl(\mathcal L_{\rm nat}[\psi+\varepsilon\xi,A]-\mathcal L_{\rm nat}[\psi,A]\bigr)\,d^4x,$$
where $\mathcal L_{\rm nat}$ is the adopted density in
[[post-qft-qed-local-coupling]]. The integrand has compact support, so this
variation is finite. Assume $\delta_\xi S_{\rm cl}=0$ for every such $\xi$.
Then the compactly supported spinor-variation Euler–Lagrange equation of the
adopted action holds pointwise as a differential equation. In the natural
action normalization of [[def-qft-framework-units]], $\psi$ has engineering
length degree $-3/2$, and this equation is
$$ i\hbar\partial_t\psi=H_D\psi $$
for this pure magnetic specialization. Independently of this condition on
$\psi$, on $\mathcal D$ the spatial differential expression satisfies
$$ H_D^2=m^2c^4I_4+c^2(\boldsymbol\pi^2-q\hbar\boldsymbol\Sigma\cdot\mathbf B). $$
Writing the formal first-order square-root coefficient as
$mc^2+K/(2m)$, where
$K=\boldsymbol\pi^2-q\hbar\boldsymbol\Sigma\cdot\mathbf B$, the spin
term is $-(q/m)\mathbf S\cdot\mathbf B$. Under the explicitly chosen
magnetic-energy convention
$$ H_{\rm mag}=-\boldsymbol\mu_{\rm mag}\cdot\mathbf B,\qquad \boldsymbol\mu_{\rm mag}=g_s\frac{q}{2m}\mathbf S, $$
where $H_{\rm mag}$ is an energy-valued matrix coefficient in joules,
$\boldsymbol\mu_{\rm mag}$ is a $4\times4$ matrix-valued magnetic moment
coefficient with units $\mathrm{A\,m^2}$, and $g_s$ is dimensionless.
Comparing the coefficient of
$\mathbf S\cdot\mathbf B$ as a linear-form coefficient gives $g_s=2$ for
this minimal tree coefficient.
The Dirac equation is asserted only for fields satisfying the stated
stationarity condition. The square and coefficient are formal on the stated
test domain; no magnetic self-adjoint closure, full spectrum, radiative
correction, or empirical measurement is asserted.

## Facts & Assumptions

**Given:** Countable Choice; a smooth static spatial potential on the fixed Minkowski chart, $\phi=0$, $q=-e\ne0$, $m>0$, the test domain $\mathcal D$, the stated compactly supported spinor-variation stationarity condition, and the explicit SI/natural, metric, and Dirac-matrix conventions below.

[F1] [[post-qft-qed-local-coupling]]: the adopted natural action is
$$ \mathcal L_{\rm nat}=-\frac14 f_{ab}f^{ab} +\frac i2(\bar\psi\gamma^aD_a\psi-(D_a\bar\psi)\gamma^a\psi) -\mu\bar\psi\psi, $$
with $D_a=\partial_a-iq_n a_a$, $x^0=ct$, $\mu=mc/\hbar$, and
compactly supported local variations. Its own text leaves the
Euler–Lagrange consequence for a consuming proof.

[F2] [[def-qft-qed-gauge-data]] and [[def-qft-qed-physical-gauge-quantities]]: $\eta=(-,+,+,+)$, $A_0=-\phi/c$, $a_a=A_a/\sqrt{\mu_0\hbar c}$, and $q_na_a=q_{\rm SI}A_a/\hbar$; $\gamma^0=\beta$, $\gamma^i=\beta\alpha_i$, $\beta^2=I_4$, and $\{\gamma^a,\gamma^b\}=-2\eta^{ab}I_4$.

[F3] [[lem-qft-example-dirac-pauli-square]]: for smooth $\mathbf A$, $\mathbf B=\nabla\times\mathbf A$, real $q$, $m>0$, and the common core $\mathcal D$, it proves $[\pi_i,\pi_j]=iq\hbar\epsilon_{ijk}B_k$ and the displayed square identity; it derives the formal $K/(2m)$ coefficient and its spin term without assuming self-adjointness.

[F4] [[def-qft-dirac-projections]]: the fixed finite matrices have $\beta=\operatorname{diag}(I_2,-I_2)$, $\alpha_i=\begin{pmatrix}0&\sigma_i\\\sigma_i&0\end{pmatrix}$, $\gamma^0=\beta$, $\gamma^i=\beta\alpha_i$, and $\bar\psi=\psi^\dagger\beta$. The present calculation uses only these explicit finite matrices under the stated Countable Choice hypothesis, not the supplier's infinite-space operator conclusions.

[F5] [[def-qft-example-data]] and [[def-qft-framework-units]]: $x^0=ct$, $A_i$ is in tesla-metres, $q$ is in coulombs, $m$ is in kilograms, $\hbar$ is in joule-seconds, and $\hbar c$ converts inverse-length natural coordinates to SI energy units.

[F6] [[def-qft-example-observable-types]]: a formal coefficient and a source-reported empirical estimate are different types; the latter carries its source conditions and uncertainty and is not a theorem premise here.

[A1] [[post-qft-qed-local-coupling]] is an adopted classical local model with commuting smooth spinor variables. Its physical interpretation does not quantize the interacting action or supply a continuum QED solution.

## Proof

1.1 Let $\xi$ be a compactly supported smooth complex spinor variation and write $\delta\bar\psi=\bar\xi$. Vary the symmetrized spinor action in [F1] while holding $a_a$ fixed. Since $\gamma^a$ is constant and $D_a\bar\xi=\partial_a\bar\xi+iq_na_a\bar\xi$, compact integration by parts gives $\int(D_a\bar\xi)\gamma^a\psi\,d^4x=-\int\bar\xi\gamma^aD_a\psi\,d^4x$: the derivative term changes sign, and the connection term becomes $+iq_na_a$ on the right, matching the conjugate-charge term on the left. Thus $\delta(S_{\rm cl}/\hbar)=2\operatorname{Re}\int\xi^\dagger\beta(i\gamma^aD_a-\mu)\psi\,d^4x$. No field product outside the smooth classical action is used. [given, F1, F2, A1, algebra]

2.1 Put $R=(i\gamma^aD_a-\mu)\psi$. By the stated stationarity condition, choose $\xi=\rho\beta R$ for any nonnegative compactly supported smooth real bump $\rho$. Since $\beta^2=I$ and $\beta=\beta^\dagger$, the first variation in 1.1 gives $0=2\int\rho\,R^\dagger R\,d^4x$. If $R$ were nonzero at a point, continuity would make $R^\dagger R>0$ on a neighborhood, and a bump supported there would make the integral positive; hence $R=0$ pointwise. Conversely, if $R=0$, the first variation in 1.1 vanishes. Therefore the compact spinor-variation Euler–Lagrange equation is $(i\gamma^aD_a-\mu)\psi=0$. [given, step 1.1, F2, algebra]

3.1 With $A_0=0$, the conversion in [F2] gives $$ D_0=c^{-1}\partial_t,\qquad D_i=\partial_i-iqA_i/\hbar. $$ Use $\gamma^0=\beta$ and $\gamma^i=\beta\alpha_i$ in the Euler–Lagrange equation just obtained, multiply on the left by $\beta$, and use $\mu=mc/\hbar$. After multiplication by $\hbar c$, the result is $$ i\hbar\partial_t\psi= [c\boldsymbol\alpha\cdot(-i\hbar\boldsymbol\nabla-q\mathbf A) +\beta mc^2]\psi=H_D\psi. $$ This is an equality of the stated differential expressions. It establishes the QX12 Hamiltonian convention on $\mathcal D$ and assumes no operator closure. [given, step 2.1, F2, F4, F5, algebra]

4.1 The smooth multiplication and derivative maps preserve $\mathcal D$. By [F3], their commutator is $[\pi_i,\pi_j]=iq\hbar\epsilon_{ijk}B_k$ there, and the Pauli-block identity $\alpha_i\alpha_j=\delta_{ij}I+i\epsilon_{ijk}\Sigma_k$ contracts the antisymmetric part to $$ \frac i2\epsilon_{ijk}\Sigma_k[\pi_i,\pi_j] =-q\hbar\boldsymbol\Sigma\cdot\mathbf B. $$ The cross terms with $\beta mc^2$ cancel because $\alpha_i\beta+\beta\alpha_i=0$, while $\beta^2=I$. Hence the exact core identity in the Statement follows, with every product acting on $\mathcal D$. [given, step 3.1, F3, F4, algebra]

5.1 In a formal symbol $t$, square $mc^2+t aK+O(t^2)$ and equate it to $m^2c^4+t c^2K+O(t^2)$. The scalar coefficient is defined before substitution by $(mc^2+taX)^2\equiv m^2c^4+tc^2X\pmod{t^2}$ in $\mathbb R[X,t]/(t^2)$, as in [F3]. Comparing $tX$ gives $2mc^2a=c^2$, hence $a=1/(2m)$ since $m>0$, and substituting $X=K$ gives the displayed correction. The spin part of $K/(2m)$ is $$ -\frac{q\hbar}{2m}\boldsymbol\Sigma\cdot\mathbf B =-\frac qm\mathbf S\cdot\mathbf B. $$ Equating this with $-g_s(q/(2m))\mathbf S\cdot\mathbf B$ and using $q=-e\ne0$ and the nonzero Pauli spin matrices gives $g_s=2$. This is a formal coefficient comparison only, not a source-reported empirical estimate under the type distinction [F6]. [given, step 4.1, F3, F6, algebra] ∎
