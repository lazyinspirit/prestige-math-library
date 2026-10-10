---
id: pthm-em-macroscopic-maxwell
kind: physics-theorem
title: "The macroscopic Maxwell equations in terms of D, H and the free sources"
status: draft
origin: pipeline
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, def-em-sources, post-em-vacuum-maxwell, thm-algebra-of-derivatives, thm-clairaut-schwarz-mixed-partials, def-countable-choice, def-distribution, def-distributional-derivative, def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions, thm-distributional-differentiation-is-continuous-and-commutes, thm-integration-by-parts, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, lem-test-function-cutoffs-and-euclidean-localization, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  thm-algebra-of-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-countable-choice: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
physical_scope: "The macroscopic Maxwell equations div D=rho_f, div B=0, curl E=-d_tB, curl H=J_f+d_tD, together with the conservation of the bound source pair, as a conditional consequence of the adopted smooth vacuum equations and the bound/free decomposition, for C^2 macroscopic dipole densities on the laboratory region. No constitutive law, no weak-branch or singular-source claim and no empirical statement. Free/total conservation is distributional for the continuous-source class under AC_omega, and classical under the stated additional source derivatives."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.3 printed pp. 183-186 (PDF pp. 191-194): the substitution of the bound sources into the vacuum equations and the resulting macroscopic equations (7.13), with the bound-current completion by dP/dt. Read in the retained 236-page full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 7.3.5 printed p. 330 (PDF p. 346), equations (7.53)-(7.55): the Ampere-Maxwell law in matter with the free current and the displacement current. Read in the stamped 596-page scan."
    - title: "R. Fitzpatrick, Electromagnetism (University of Texas at Austin course), node 73: Magnetization"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node73.html"
      locator: "node 73, equations (858)-(864): the magnetization and polarization currents, H=B/mu_0-M, and curl H=J_f+dD/dt. Independently opened during the batch-29 reader review."
---

## Statement

Assume the smooth branch of the vacuum Maxwell postulate [[post-em-vacuum-maxwell]] on the laboratory region $U\cong I\times\Omega$ of [[def-em-lab-geometry]]: fields $E,B:\Omega\times I\to\mathbb R^3$ jointly of class $C^1$ with the additional derivatives required by each equation existing and continuous, and continuous source densities $\rho,J$ of [[def-em-sources]]. Let $P,M$ and the derived objects $\rho_b,J_b,\rho_f,J_f,D,H$ be those of [[def-em-polarization-magnetization]], with $P,M$ of class $C^2$, and use the operators of [[def-divergence-and-curl-of-a-c1-vector-field]] and [[def-directional-and-partial-derivatives]]. Then:

**(a) [Bound-source conservation]** $\partial_t\rho_b+\operatorname{div}J_b=0$ on $\Omega\times I$. Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the regular-distribution and classical-compatibility interfaces below. Identify continuous sources with their regular distributions using [[def-regular-distribution-from-a-locally-integrable-function]] and [[thm-locally-integrable-functions-embed-in-distributions]]. Then

$$\partial_t\rho_f+\operatorname{div}J_f=\partial_t\rho+\operatorname{div}J$$

as distributions on $U$, with derivatives as in [[def-distributional-derivative]]: the free pair is distributionally conserved exactly when the total pair is. Under the adopted four vacuum equations both sides are zero distributions, by [[thm-distributional-differentiation-is-continuous-and-commutes]]. These statements do not require classical derivatives of $\rho,J$. Where the partial derivatives $\partial_t\rho$ and $\partial_{x_i}J_i$ exist, the same identity holds pointwise by differentiating the free/bound decomposition; in particular, if these derivatives are continuous on $U$, both pairs satisfy the classical pointwise continuity equation. The bound-source conservation equation remains classical and uses only $P,M\in C^2$.

**(b) [Macroscopic equations]** On $\Omega\times I$,

$$\operatorname{div}D=\rho_f,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}H=J_f+\partial_tD.$$

**(c) [Interpretation and scope]** Equations (b) are an exact rewriting of the adopted vacuum equations under the decomposition of [[def-em-polarization-magnetization]]: the two equations written in $E$ and $B$ are unchanged, and the $D$ and $H$ equations hold for every $C^2$ pair $(P,M)$, independently of any constitutive law. The classical bound identity of (a) uses the exchange of $\partial_t$ with $\operatorname{div}$ for $C^2$ data; the free/total identity is distributional in the stated continuous-source class, with its classical interpretation only under the additional derivatives stated in (a). The distributional conservation conclusion embeds the adopted smooth solution only; no macroscopic field-equation claim is made for the weak branch of the Maxwell postulate, for singular or sheet sources or for discontinuous $(P,M)$; no constitutive relation and no empirical statement is made.

## Facts & Assumptions

**Given:** The smooth-branch data of the Statement: $E,B$ jointly $C^1$ with the additional derivatives required by the adopted equations existing and continuous, continuous $\rho,J$, and jointly $C^2$ model maps $P,M$ with the derived objects $\rho_b=- \operatorname{div}P$, $J_b=\partial_tP+\operatorname{curl}M$, $\rho_f=\rho-\rho_b$, $J_f=J-J_b$, $D=\varepsilon_0E+P$, $H=\mu_0^{-1}B-M$ of [[def-em-polarization-magnetization]], on the laboratory region of [[def-em-lab-geometry]] with the units of [[def-em-si-conventions]]. Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[A1] The adopted smooth-branch vacuum Maxwell equations: $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$, with the divergence and curl of the named vector-calculus definition and the partial derivative of the named partial-derivative definition, as fixed in the Statement ([[post-em-vacuum-maxwell]], clause (a)).

[L1] The definition of the derived objects gives $\rho_b=-\operatorname{div}P$, $J_b=\partial_tP+\operatorname{curl}M$, $\rho=\rho_f+\rho_b$, $J=J_f+J_b$, $D=\varepsilon_0E+P$ and $H=\mu_0^{-1}B-M$ ([[def-em-polarization-magnetization]], clauses (b)-(d)).

[L2] If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_jf=\partial_j\partial_if$ there ([[thm-clairaut-schwarz-mixed-partials]]).

[L3] The one-variable sum and scalar-multiple rules, $f+g$ and $\alpha f$ differentiable with $(f+g)'=f'+g'$ and $(\alpha f)'=\alpha f'$, and the product rule, hold for differentiable real maps ([[thm-algebra-of-derivatives]]); partial derivatives are the one-variable derivatives of the line maps ([[def-directional-and-partial-derivatives]]), so these rules apply componentwise to the partial derivatives used below.

[L4] Distributional derivatives satisfy $\partial^\alpha\partial^\beta u=\partial^{\alpha+\beta}u$ and $\partial^\alpha u_f=u_{\partial^\alpha f}$ for $f\in C^k$ with $|\alpha|\le k$, under Countable Choice ([[thm-distributional-differentiation-is-continuous-and-commutes]]); derivatives act by $\langle\partial_\mu T,\psi\rangle=-\langle T,\partial_\mu\psi\rangle$ ([[def-distributional-derivative]]), and the pairing is bilinear ([[def-distribution]]).

[L5] Locally integrable functions embed as regular distributions, $u_f(\psi)=\int f\psi$, and this identification is injective on continuous functions: a continuous function whose regular distribution vanishes is identically zero ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[L6] $\varepsilon_0=(\mu_0c^2)^{-1}$, so $1/(c^2\varepsilon_0)=\mu_0$ ([[def-em-si-conventions]], clause (a)).

[L7] One-coordinate integration by parts holds for $C^1$ line restrictions on compact intervals ([[thm-integration-by-parts]]); their continuous products have the same Riemann and Lebesgue integrals ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]). Fubini applies to the resulting compactly supported integrable products ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]); smooth partitions localize tests to rectangular boxes compactly contained in $U$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

## Proof

**Proof technique:** direct substitution, distributional for the free/total identity and classical for the bound pair and the macroscopic equations.

1.1 Compute $\partial_t\rho_b+\operatorname{div}J_b=-\partial_t\operatorname{div}P+\operatorname{div}\partial_tP+\operatorname{div}\operatorname{curl}M$ by [L1], where the operators are those of [A1]'s conventions; the first two terms cancel because $\partial_t\operatorname{div}P=\operatorname{div}\partial_tP$, and the last vanishes because $\operatorname{div}\operatorname{curl}M=\sum_{i,j,k=1}^3\varepsilon_{ijk}\partial_i\partial_jM_k$ is an antisymmetrisation of the equal mixed partials $\partial_i\partial_jM_k=\partial_j\partial_iM_k$; both identities are [L2] applied to the $C^2$ components of $P$ and $M$, and the algebra is [L3]. [A1, L1, L2, L3]

1.2 Identify the continuous fields and sources with their regular distributions by [L5] and apply the distributional divergence of [L4] to the adopted Ampere-Maxwell identity $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ of [A1]: the left side gives $\operatorname{div}\operatorname{curl}B=\sum_{i,j,k}\varepsilon_{ijk}\partial_i\partial_jB_k=0$ by the commutation of distributional derivatives [L4], while the right side gives $\mu_0\operatorname{div}J+c^{-2}\partial_t\operatorname{div}E$ with $\operatorname{div}E=\rho/\varepsilon_0$ transferred by the classical-compatibility clause of [L4]; hence $0=\mu_0\operatorname{div}J+c^{-2}\varepsilon_0^{-1}\partial_t\rho=\mu_0(\operatorname{div}J+\partial_t\rho)$ by [L6], so $\partial_t\rho+\operatorname{div}J=0$ as distributions, where $\partial_t\rho$ and $\operatorname{div}J$ denote the distributional derivatives of the regular distributions. [A1, L4, L5, L6]

1.3 Compute the macroscopic equations: $\operatorname{div}D=\varepsilon_0\operatorname{div}E+\operatorname{div}P=\rho+\operatorname{div}P=\rho-\rho_b=\rho_f$ because $\varepsilon_0\operatorname{div}E=\rho_f+\rho_b$ and $\rho_b=-\operatorname{div}P$ by [L1] and $\rho=\rho_f+\rho_b$ by [L1]; $\operatorname{div}B=0$ and $\operatorname{curl}E=-\partial_tB$ are the corresponding adopted equations of [A1] unchanged; and $\operatorname{curl}H=\mu_0^{-1}\operatorname{curl}B-\operatorname{curl}M=J+\varepsilon_0\partial_tE-\operatorname{curl}M=J_f+\partial_t(\varepsilon_0E+P)=J_f+\partial_tD$, using [L1], $\mu_0^{-1}\operatorname{curl}B=\mu_0^{-1}(\mu_0J+c^{-2}\partial_tE)=J+(\mu_0c^2)^{-1}\partial_tE=J+\varepsilon_0\partial_tE$ by [L6], and the decomposition $J=J_f+\partial_tP+\operatorname{curl}M$ of [L1]; all identities are the componentwise algebra of [L3]. [A1, L1, L3, L6]

2.1 Subtract the distributional bound identity from the distributional total identity: by the decompositions of [L1] and the linearity of distributional differentiation [L4], $\partial_t\rho_f+\operatorname{div}J_f=(\partial_t\rho+\operatorname{div}J)-(\partial_t\rho_b+\operatorname{div}J_b)$, the second summand is the regular distribution of the continuous function shown to vanish in step 1.1, and the first is the zero distribution by step 1.2; hence $\partial_t\rho_f+\operatorname{div}J_f=\partial_t\rho+\operatorname{div}J=0$ as distributions on $U$, and the free pair is distributionally conserved exactly when the total pair is. [step 1.1, step 1.2, L1, L4]

3.1 Suppose $\partial_t\rho$ and $\partial_{x_i}J_i$ exist and are continuous on $U$. For a continuous scalar $f$ with a continuous derivative in just one coordinate $q$, localize any test to rectangular boxes by [L7]. On each box, integration by parts on the $q$-lines has zero endpoint terms because the test vanishes there; Fubini then gives $-\int f\partial_q\psi=\int(\partial_q f)\psi$. Summing the localized tests proves $\partial_q u_f=u_{\partial_q f}$ without assuming derivatives in other coordinates. Apply this to $(f,q)=(\rho,t)$ and $(J_i,x_i)$: the zero distribution of step 1.2 is the regular distribution of the continuous sum $\partial_t\rho+\sum_i\partial_{x_i}J_i$, which vanishes pointwise by [L5]. Since $\rho_b,J_b$ are $C^1$, the same argument applies to $\rho_f,J_f$ and gives their classical continuity equation. Steps 1.1, 1.3 and 2.1 establish the remaining claims and their stated model-conditional scope. [step 1.1, step 1.2, step 1.3, step 2.1, L1, L5, L7] ∎
