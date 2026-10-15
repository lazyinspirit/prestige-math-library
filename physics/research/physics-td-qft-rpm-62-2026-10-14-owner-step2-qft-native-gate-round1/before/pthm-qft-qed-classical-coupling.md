---
id: pthm-qft-qed-classical-coupling
kind: physics-theorem
domain: physics
library: physics
title: "Conditional classical charged gauge equations and current"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 9
deps:
  - post-qft-qed-local-coupling
  - def-qft-framework-units
  - def-qft-qed-physical-gauge-quantities
  - def-qft-qed-gauge-data
  - def-qft-dirac-projections
  - lem-qft-qed-dirac-gauge-current
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-countable-choice
  - def-em-si-conventions
  - def-em-electromagnetic-tensor
  - post-em-vacuum-maxwell
  - def-em-gauge-transformation
dependency_roles:
  post-qft-qed-local-coupling: physical-assumption
  def-qft-framework-units: formulation-prerequisite
  def-qft-qed-physical-gauge-quantities: formulation-prerequisite
  def-qft-qed-gauge-data: formulation-prerequisite
  def-qft-dirac-projections: mathematical-premise
  lem-qft-qed-dirac-gauge-current: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  def-countable-choice: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
  def-em-gauge-transformation: formulation-prerequisite
proof_strategy: direct
physical_scope: "The smooth local classical Maxwell–Dirac branch on an open flat Minkowski domain, with compactly supported variations and the stated SI signs; it does not assert a global coupled PDE solution, an interacting quantum representation, or a pointwise quantum current."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "§6.3.1 for the local Dirac coupling, covariant derivative, gauge transformation, and charge current. Tong uses (+---) and natural units; the conversion below uses the explicitly declared (-+++) and SI conventions."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§58, printed pp. 345–347, for the spinor-electrodynamics current, local U(1) transformation, covariant derivative, and Maxwell–Dirac formulation. The source uses Heaviside–Lorentz units and c=ℏ=1; signs and units are translated explicitly."
---

## Statement

Assume Countable Choice [[def-countable-choice]] for the selected free-field
correspondence in [[post-qft-qed-local-coupling]]. Let $U$ be an open subset
of flat Minkowski spacetime with $\eta=\operatorname{diag}(-1,1,1,1)$ and
length coordinates $x^0=ct$. Let $A_{{\rm SI},a}:U\to\mathbb R$ be a supplied
$C^\infty$ covector potential, let
$\psi:U\to\mathbb C^4$ be a $C^\infty$ commuting spinor, and take a selected
real charge $q_{\rm SI}$ and mass $m_{\rm SI}>0$ with the conventions of
[[def-qft-qed-physical-gauge-quantities]] and
[[def-qft-qed-gauge-data]]. Use independent compactly supported smooth
variations of $A_{\rm SI}$ and of both real and imaginary components of $\psi$. If $(A_{\rm SI},\psi)$ is stationary
for the adopted classical action, then

$$\bigl(i\gamma^aD_a-\mu\bigr)\psi=0,\qquad \partial_aF_{\rm SI}^{ab}=-\mu_0j^b,\qquad \partial_aj^a=0,$$

where $D_a=\partial_a-iq_{\rm SI}A_{{\rm SI},a}/\hbar$,
$\mu=m_{\rm SI}c/\hbar$, and
$j^a=q_{\rm SI}c\,\bar\psi\gamma^a\psi$. In laboratory components this
current is $\rho_q=q_{\rm SI}\psi^\dagger\psi$ and
$\mathbf J_q=q_{\rm SI}c\,\psi^\dagger\boldsymbol\alpha\psi$, so
$j=(c\rho_q,\mathbf J_q)$. With $[\psi]=\mathrm m^{-3/2}$,
$[q_{\rm SI}]=\mathrm C$, and $[c]=\mathrm{m\,s^{-1}}$, the charge density
$\rho_q$ has unit $\mathrm{C\,m^{-3}}$, while $\mathbf J_q$ and every
component of $j^a$ have unit $\mathrm{A\,m^{-2}}$; here $x^0=ct$, so
$j^0=c\rho_q$ has the same component unit as $J_q^i$. Together with $F=dA$
on the supplied potential domain, the field equation and Bianchi identity
have exactly the smooth SI
Maxwell signs in [[post-em-vacuum-maxwell]]. The current and spinor here are
classical smooth commuting fields; this statement is not a construction of a
pointwise quantum composite operator.

## Facts & Assumptions

**Given:** Countable Choice for the selected free-field representations; the
adopted smooth local Maxwell–Dirac action; the actual QFT-MG01 Dirac
variation interface; the SI tensor conventions; and the stated smoothness
and compact-support hypotheses.

[A1] [[post-qft-qed-local-coupling]]: the selected model adopts the smooth
local Maxwell–Dirac action with $D_a=\partial_a-iq_{\rm SI}A_{{\rm SI},a}/\hbar$,
uses independent compactly supported variations, and asserts no interacting
continuum representation or global PDE existence.

[A2] Countable Choice is assumed for the selected free QFT representations.
[[def-countable-choice]]

[A3] The supplied fields $A_{{\rm SI},a},\psi$ and gauge functions are
smooth on the open set $U$, and stationarity is tested against every
compactly supported smooth variation of the real potential and complex
spinor components.

[F1] [[def-qft-qed-physical-gauge-quantities]]:
$q_{\rm n}=q_{\rm SI}\sqrt{\mu_0c/\hbar}$,
$a_a=A_{{\rm SI},a}/\sqrt{\mu_0\hbar c}$,
$q_{\rm n}a_a=q_{\rm SI}A_{{\rm SI},a}/\hbar$, and
$\mu=m_{\rm SI}c/\hbar$.

[F2] [[def-em-electromagnetic-tensor]]: $F_{0i}=-E_i/c$,
$F_{ij}=\epsilon_{ijk}B_k$, and a supplied potential gives
$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$.

[F3] [[def-em-si-conventions]]: $\varepsilon_0=(\mu_0c^2)^{-1}$,
$q_{\rm SI}$ carries C, charge density carries $\mathrm{C\,m^{-3}}$, and
current density carries $\mathrm{A\,m^{-2}}$.

[F4] [[post-em-vacuum-maxwell]]: the smooth SI branch has
$\operatorname{div}E=\rho/\varepsilon_0$,
$\operatorname{curl}E=-\partial_tB$,
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, and
$\operatorname{div}B=0$.

[F5] [[def-qft-dirac-projections]]: $\gamma^0=\beta$,
$\gamma^i=\beta\alpha_i$, $\bar\psi=\psi^\dagger\beta$,
$\beta^\dagger=\beta$, $\beta^2=I_4$, and the matrices
$\boldsymbol\alpha,\beta$ are Hermitian.

[F7] [[def-em-gauge-transformation]]: the SI potential convention is
$A_a\mapsto A_a+\partial_a\chi$; no reachability or global gauge-fixing
claim is part of that definition.

[F6] [[lem-smooth-bump-between-concentric-euclidean-balls]]: every open
Euclidean ball contains a nonnegative smooth compactly supported function
that is positive on a smaller ball.

[F8] [[def-qft-framework-units]]: spacetime coordinates have length units,
$x^0=ct$ with $t$ in seconds and $c$ in $\mathrm{m\,s^{-1}}$; physical
energy is obtained from inverse-length wave number by $E=\hbar c\omega$;
the canonical spinor-field dimension is
$[\psi]=\mathrm m^{-3/2}$.

[L1] [[lem-qft-qed-dirac-gauge-current]] (draft carrier; current Step 1 decision
escalated through its QFT QED-gauge-data and Dirac-projection prerequisites: under Countable Choice, for smooth real natural potential
$a_a$ and smooth commuting spinor on $\mathbb R^4$, compactly supported
variations of the symmetrized Dirac density give
$(i\gamma^aD_a-\mu)\psi=0$ and its adjoint; the density is invariant under
the stated gauge transformation; on solutions
$\partial_a(g\bar\psi\gamma^a\psi)=0$, with natural current
$g\bar\psi\gamma^a\psi$. Its exact Statement uses the free QFT gauge
data and supplies the corresponding SI Dirac Hamiltonian density. The
carrier does not state the Maxwell-field variation used below; that is
derived from [A1]. The local test-function argument is repeated below on
$U$, so no global extension of fields is assumed.

## Proof
**Given:** [A1]–[A3], [F1]–[F8], and the conditional Dirac interface [L1].

1.1 The action uses length coordinates $x^0=ct$ by [F8]. Put
$S_0=\sqrt{\mu_0\hbar c}$,
$a_a=A_{{\rm SI},a}/S_0$, and
$g=q_{\rm SI}\sqrt{\mu_0c/\hbar}$. Then
$ga_a=q_{\rm SI}A_{{\rm SI},a}/\hbar$ by [F1], so the matter covariant
derivative in [A1] is exactly $D_a=\partial_a-iga_a$ in [L1]. For an SI
gauge function $\chi$, put $\alpha=\chi/S_0$; then
$g\alpha=q_{\rm SI}\chi/\hbar$. Thus the SI transformation of [A1]
becomes $a_a\mapsto a_a+\partial_a\alpha$ and
$\psi\mapsto e^{ig\alpha}\psi$. Differentiating the phase shows
$D'_a\psi'=e^{ig\alpha}D_a\psi$; commuting smooth partial derivatives
give $F'=F$. [A1, F1, F2, F7, F8, algebra]

1.2 Countable Choice [A2] is carried for the separately adopted free-field
correspondence; the classical local variation below itself requires no
choice operation. Let $R_D=(i\gamma^aD_a-\mu)\psi$. The compact-support first-variation
identity in [L1] is local: for every $\zeta\in C_c^\infty(U;\mathbb C^4)$,
integration by parts in the symmetrized density gives
$$\frac{\delta S_D}{\hbar} =2\operatorname{Re}\int_U\zeta^\dagger\beta R_D\,d^4x.$$
Indeed, the derivative terms use
$\int_U\bar\psi\gamma^aD_a\zeta=-\int_U(D_a\bar\psi)\gamma^a\zeta$
and
$-\int_U(D_a\bar\zeta)\gamma^a\psi=\int_U\bar\zeta\gamma^aD_a\psi$;
there are no boundary terms because $\zeta$ is compactly supported. If
$R_D(x_0)\ne0$, continuity gives a ball $B\subset U$ on which $R_D$ is
nonzero. Choose $\rho$ from [F6] supported in $B$ and positive on a smaller
ball, and set $\zeta=\rho\beta R_D$. By [F5],
$\zeta^\dagger\beta R_D=\rho|R_D|^2$, so the first variation is
$2\int_U\rho|R_D|^2d^4x>0$, contradicting stationarity. Therefore
$R_D=0$ on $U$, and taking its adjoint gives the adjoint Dirac equation.
This is a local consequence of compact variations, not an existence claim.
[A1, A2, A3, F5, F6, L1, given, algebra]

2.1 Multiplying the Dirac equation by $\bar\psi$ gives
$i\bar\psi\gamma^aD_a\psi=\mu\bar\psi\psi$; multiplying its
adjoint by $\psi$ gives
$-i(D_a\bar\psi)\gamma^a\psi=\mu\bar\psi\psi$. Subtracting the
equations gives
$(D_a\bar\psi)\gamma^a\psi+\bar\psi\gamma^aD_a\psi=0$.
Expanding $D_a\bar\psi=\partial_a\bar\psi+iga_a\bar\psi$ and
$D_a\psi=\partial_a\psi-iga_a\psi$ cancels the two gauge-potential
terms, leaving $\partial_a(\bar\psi\gamma^a\psi)=0$. The natural
current in [L1] is $j_{\rm n}^a=g\bar\psi\gamma^a\psi$. By step 1.1,
$S_0g=\mu_0q_{\rm SI}c$, so the SI current associated to
$\partial_aF_{\rm SI}^{ab}=-\mu_0j^b$ is
$j^a=(S_0/\mu_0)j_{\rm n}^a=q_{\rm SI}c\bar\psi\gamma^a\psi$ and is
conserved because the conversion factor is constant. Using [F5],
$j^0=q_{\rm SI}c\psi^\dagger\psi$ and
$j^i=q_{\rm SI}c\psi^\dagger\alpha_i\psi$, hence
$j=(c\rho_q,\mathbf J_q)$ with the displayed SI charge and current
densities. [F1, F5, L1, step 1.1, step 1.2, algebra]

3.1 Write the natural action density from [A1] as
$-\frac14f_{ab}f^{ab}+\mathcal L_D$. For a real compactly supported
variation $\delta a_b$, antisymmetry of $f^{ab}$ gives
$$\delta(-\tfrac14f_{ab}f^{ab})=-f^{ab}\partial_a\delta a_b.$$
The matter variation is
$$\delta\mathcal L_D =\frac i2\left[\bar\psi\gamma^b(-ig\delta a_b)\psi -(ig\delta a_b\bar\psi)\gamma^b\psi\right] =g\bar\psi\gamma^b\psi\,\delta a_b.$$
Integrating the Maxwell term by parts and using compact support therefore
gives
$$\frac{\delta S}{\hbar} =\int_U(\partial_af^{ab}+g\bar\psi\gamma^b\psi)\delta a_b\,d^4x.$$
By [F5], $\bar\psi\gamma^0\psi=\psi^\dagger\psi$ and
$\bar\psi\gamma^i\psi=\psi^\dagger\alpha_i\psi$ are real. If a component
$G^b=\partial_af^{ab}+g\bar\psi\gamma^b\psi$ were nonzero at a point,
continuity would give a ball in $U$ on which it has fixed nonzero sign.
Choose a nonnegative bump $\rho$ there using [F6] and vary only $a_b$ by
$\delta a_b=\rho$. The displayed variation would then be nonzero, contrary
to stationarity. Thus every $G^b$ vanishes pointwise and
$\partial_af^{ab}=-g\bar\psi\gamma^b\psi$. Since
$F_{\rm SI}^{ab}=S_0f^{ab}$ and
$S_0g=\mu_0q_{\rm SI}c$, this is exactly
$\partial_aF_{\rm SI}^{ab}=-\mu_0j^b$. For $b=0$, [F2] gives
$\partial_aF^{a0}=-\operatorname{div}E/c$, so the source equation becomes
$\operatorname{div}E=\mu_0c^2\rho_q=\rho_q/\varepsilon_0$ by [F3].
For $b=i$, [F2] gives
$\partial_aF^{ai}=c^{-2}\partial_tE_i-(\operatorname{curl}B)_i$,
which yields $\operatorname{curl}B=\mu_0\mathbf J_q+c^{-2}\partial_tE$.
Finally, $F=dA$ and commuting partial derivatives give
$\partial_{[a}F_{bc]}=0$, whose spatial components are
$\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$. These are
the smooth equations in [F4], derived conditionally from the adopted action;
they are not evidence that the model describes nature. [A1, F1, F2, F3, F4, F5, F6, step 2.1, algebra]

4.1 By [F8], $[\psi]=\mathrm m^{-3/2}$, and [F3] gives
$[q_{\rm SI}]=\mathrm C$, so $[\rho_q]=[q_{\rm SI}\psi^\dagger\psi]
=\mathrm{C\,m^{-3}}$. Since $[c]=\mathrm{m\,s^{-1}}$ and the matrices
$\boldsymbol\alpha$ are dimensionless by [F5],
$[\mathbf J_q]=\mathrm{C\,m^{-2}\,s^{-1}}=\mathrm{A\,m^{-2}}$.
Therefore $[j^0]=[c\rho_q]=\mathrm{A\,m^{-2}}$, and each spatial
component $j^i=J_q^i$ has the same unit. These are units of the classical
current in length coordinates $x^0=ct$, not units of a quantum operator
product. [F3, F5, F8, given, algebra] ∎
