---
id: pthm-qft-qed-formal-ward
kind: physics-theorem
domain: physics
library: physics
title: Qualified formal/tree gauge-current identities
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 7
deps:
  - post-qft-formal-qed-coefficients
  - lem-qft-qed-formal-matrix-ward
  - lem-qft-qed-conserved-current-gauge
  - def-qft-qed-formal-ring
  - def-qft-qed-finite-graph-gauge-data
  - def-qft-qed-gauge-data
  - def-qft-dirac-projections
  - def-qft-scalar-mass-shell
  - lem-qft-qed-tree-ward
  - thm-determinant-multiplicative
dependency_roles:
  post-qft-formal-qed-coefficients: physical-assumption
  lem-qft-qed-formal-matrix-ward: mathematical-premise
  lem-qft-qed-conserved-current-gauge: mathematical-premise
  def-qft-qed-formal-ring: mathematical-premise
  def-qft-qed-finite-graph-gauge-data: mathematical-premise
  def-qft-qed-gauge-data: mathematical-premise
  def-qft-dirac-projections: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  lem-qft-qed-tree-ward: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
proof_strategy: direct
physical_scope: "Conditional coefficientwise covariance for finite formal matrices and decoupling of the specified conserved tree currents in the adopted QED convention. No loop-product, all-orders Ward, renormalization, continuum scattering, or nonperturbative claim is made."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, complete author-hosted Cambridge lecture notes, Chapter 6: Quantum Electrodynamics, §§6.4.1–6.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "Complete HTML Chapter 6; on-shell tree-current conservation in equations 6.578–6.584 and formal coefficient rules in §6.5. The item keeps the claim to its stated tree scope."
empirical_premises: []
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Use the coefficient convention of [[post-qft-formal-qed-coefficients]] and
formal ring of [[def-qft-qed-formal-ring]]. Let $\zeta$ denote finite graph
link data, $z$ a formal indeterminate, and
$K(z;\zeta)=K_0(\zeta)+zV(\zeta)\in M_d(\mathbb C\llbracket z\rrbracket)$
with $d\ge1$ and $K_0(\zeta)\in GL_d(\mathbb C)$. For each vertex-angle
tuple $\theta$, let $\zeta^\theta$ and the invertible diagonal matrix
$D_\theta$ be the finite gauge action and phase matrix of
[[def-qft-qed-finite-graph-gauge-data]]. Assume the coefficient matrices
satisfy
$$K_0(\zeta^\theta)=D_\theta K_0(\zeta)D_\theta^{-1},\qquad V(\zeta^\theta)=D_\theta V(\zeta)D_\theta^{-1}.$$
Let $S(z;\zeta)$ be the coefficientwise formal inverse specified by
[[def-qft-qed-formal-ring]]. Then
$$S(z;\zeta^\theta)=D_\theta S(z;\zeta)D_\theta^{-1},\qquad \det K(z;\zeta^\theta)=\det K(z;\zeta).$$
For a real vertex tuple $\theta$, put
$\Theta=\operatorname{diag}_{x\in X}(\theta_xI_r)$,
$\zeta^s:=\zeta^{s\theta}$, and $D_s:=D_{s\theta}=e^{is\Theta}$.
For any coefficient family $A_s=A(z;\zeta^s)$, write
$\delta A:=\left.\frac{d}{ds}A_s\right|_{s=0}$ coefficientwise.
Assume also that
$K_0(\zeta^s)$ and $V(\zeta^s)$ vary differentiably along the gauge orbit
$\zeta^s$. Coefficientwise differentiation then gives
$$\delta S=i[\Theta,S]=-S(\delta K)S.$$
These are finite/formal identities only; the formal variable is not assigned
a numerical value and no convergence is asserted.

For the tree-current clause, take $\mu>0$ and four future-shell momenta
$p,p',q,q'$ with $h(p,p)=h(p',p')=h(q,q)=h(q',q')=\mu^2$, in inverse-length
units, and put $k=p-p'=q'-q$. Let
$$J_1^a=\bar u(p')\gamma^a u(p),\qquad J_2^b=\bar u(q')\gamma^b u(q),$$
where $\bar u=u^\dagger\beta$ and the spinors satisfy the corresponding
positive-energy Dirac equations
$(\not p-\mu)u(p)=0$, $(\not p'-\mu)u(p')=0$,
$(\not q-\mu)u(q)=0$, $(\not q'-\mu)u(q')=0$ and their Dirac-adjoint
left equations, in the $h=-\eta$ convention of
[[post-qft-formal-qed-coefficients]]. For a finite scalar $c(k)$, set
$\Delta D_{ab}(k)=c(k)k_a k_b$. Then
$$J_1^a\Delta D_{ab}(k)J_2^b=0.$$
For either displayed conserved current, the contraction with a covector
$\epsilon_a$ is unchanged by $\epsilon_a\mapsto\epsilon_a+\rho k_a$ for
finite $\rho\in\mathbb C$. If $c(k)$ is a rational coefficient containing
$1/h(k,k)$, require $h(k,k)\ne0$ at the selected momentum; a distributional
$+i0$ boundary value is not a pointwise finite $c(k)$. The adopted off-shell
fermion coefficient has denominator $h(p,p)-\mu^2$ and is used only when
that denominator is nonzero. No internal-line singular product is used here.
The tree clause is limited to these explicit finite contractions and does not
assert gauge independence for arbitrary diagrams.

## Facts & Assumptions

**Given:** The finite formal kernel and phase-covariance hypotheses in the
Statement, and the four on-shell spinors with the stated Dirac equations.

[F1] [[post-qft-formal-qed-coefficients]]: $\eta=\operatorname{diag}(-1,1,1,1)$,
$h=-\eta$, $\{\gamma^a,\gamma^b\}=2h^{ab}I_4$,
$\not p=\gamma^a h_{ab}p^b$, and $\bar u=u^\dagger\beta$. The adopted electron
vertex is $-ie_{\rm n}\gamma^a$; the fermion coefficient uses
$h(p,p)-\mu^2\ne0$, and the pointwise photon coefficient uses
$h(k,k)\ne0$. The $+i0$ notation is a boundary-value convention, not a
definition of singular distribution products.

[F2] [[def-qft-qed-formal-ring]]: $\mathbb C\llbracket z\rrbracket$ uses
coefficientwise Cauchy multiplication; for invertible $K_0$ the inverse
candidate is
$S=\sum_{n\ge0}(-zK_0^{-1}V)^nK_0^{-1}$, with finite matrix coefficients,
and $\det$ is defined by the Leibniz formula. The current batch-45 manifest
lists this draft definition, whose Step-1 record is escalated because its
QFT-MG01 gauge-data input has no current readiness receipt; this use remains
conditional.

[F3] [[def-qft-qed-finite-graph-gauge-data]]: a link transforms as
$\zeta_e^\theta=e^{i(\theta_{s(e)}-\theta_{t(e)})}\zeta_e$ and the vertex
phase matrix is diagonal. The finite graph phase data are the hypotheses
used here.

[F4] [[def-qft-dirac-projections]] and
[[def-qft-scalar-mass-shell]]: $\bar u=u^\dagger\beta$,
$\not p=\gamma^0p^0-\sum_j\gamma^jp_j$, and a future-shell momentum has
$h(p,p)=\mu^2$, $\mu>0$. These fix the spinor notation and shell convention.
The Dirac-projection draft has an escalated Step-1 record; the scalar-shell
definition has a ready item record but its containing QFT-MF02 page edge
remains open. The spinor use is conditional on those exact conventions.

[L1] [[lem-qft-qed-formal-matrix-ward]]: if the finite formal coefficients
$K_0,V$ are covariant and $K_0$ is invertible, the formal inverse is
two-sided and covariant coefficientwise; along $D_s=e^{is\Theta}$ it obeys
$\delta S=i[\Theta,S]=-S(\delta K)S$. Its inspected draft proof is complete
for this conditional matrix interface. The current batch-45 manifest lists
the lemma, and its Step-1 record is escalated through the QFT-MG01
[[def-qft-qed-gauge-data]] prerequisite, which has no current readiness
receipt.

[L2] [[lem-qft-qed-conserved-current-gauge]]: for two future-shell positive
energy Dirac currents with transfers $k$ and $-k$, the on-shell equations
give $k_aJ_1^a=k_bJ_2^b=0$; a finite longitudinal kernel
$c(k)k_ak_b$ therefore contracts to zero, and a pure-gauge external
polarization shift leaves each such current contraction unchanged. Its
inspected draft file and complete conditional proof are present in the
current batch-45 manifest. Its Step-1 record is escalated because
[[lem-qft-qed-tree-ward]] is escalated through the QFT-MF03 Dirac definition
and the QFT-MG01 formal-matrix chain; this use remains conditional.

[F5] [[thm-determinant-multiplicative]]: for square matrices over a
commutative ring, $\det(AB)=\det(A)\det(B)$. This is a published mathematical
supplier and applies to $\mathbb C\llbracket z\rrbracket$.

The coefficientwise gauge-covariance equalities hold for every $\theta$,
and $K_0,V$ are differentiable along the selected phase orbit. These are
hypotheses, not conclusions of this theorem.

## Proof

**Given:** [F1]–[F5], [L1]–[L2], and the Statement's formal matrix and
on-shell spinor hypotheses.

1.1 Put $B=K_0^{-1}V$. The coefficient of $z^n$ in
$S=\sum_{n\ge0}(-zB)^nK_0^{-1}$ is finite. In
$(I+zB)\sum_{n\ge0}(-zB)^n$, the constant coefficient is $I$ and the two
terms in every positive degree cancel. Since $K=K_0(I+zB)$, this proves
$KS=I$. The same coefficient cancellation in
$\sum_{n\ge0}(-zB)^n(I+zB)$ proves $SK=I$. At $z=0$ this reduces to
$S(0)=K_0^{-1}$. [F2, algebra]

1.2 For the first current, $\not k=\not p-\not p'$, so the right equation
for $u(p)$ and the left equation for $\bar u(p')$ give
$k_aJ_1^a=\bar u(p')(\not p-\not p')u(p)
=\mu\bar u(p')u(p)-\mu\bar u(p')u(p)=0$. For the second current its transfer
is $q-q'=-k$; the same calculation gives $(-k)_bJ_2^b=0$, hence
$k_bJ_2^b=0$. [F1, F4, L2, given, algebra]

2.1 The hypotheses match [L1]'s finite formal matrix interface. Replacing
$K_0,V$ by their conjugates in the series of step 1.1 conjugates each
coefficient of $S$ by $D_\theta$, because
$(D_\theta K_0D_\theta^{-1})^{-1}=D_\theta K_0^{-1}D_\theta^{-1}$ and
matrix products associate. Hence $S(z;\zeta^\theta)=D_\theta
S(z;\zeta)D_\theta^{-1}$. With $K_s=K(z;\zeta^{s\theta})$, $S_s=S(z;\zeta^{s\theta})$ and $\delta$ as defined in the Statement, differentiating $K_sS_s=I$ coefficientwise at $s=0$ gives
$\delta S=-S(\delta K)S$; differentiating $D_s=e^{is\Theta}$ gives
$\delta K=i[\Theta,K]$, and substitution with $KS=SK=I$ yields
$\delta S=i[\Theta,S]$. These operations use only formal coefficients.
[F2, F3, L1, step 1.1, algebra]

3.1 By step 2.1 and [F5],
$\det K(z;\zeta^\theta)=\det(D_\theta K(z;\zeta)D_\theta^{-1})
=\det(D_\theta)\det(K(z;\zeta))\det(D_\theta^{-1})$.
The finite matrices $D_\theta$ and $D_\theta^{-1}$ are inverse, so [F5]
gives $\det(D_\theta)\det(D_\theta^{-1})=1$. This proves determinant
invariance coefficientwise. [F2, F3, F5, step 2.1, algebra]

4.1 The longitudinal contraction factors as
$J_1^a\Delta D_{ab}J_2^b
=c(k)(k_aJ_1^a)(k_bJ_2^b)=0$ by step 1.2. The polarization change is
$\rho k_aJ^a=0$ for either current by step 1.2. These are finite algebraic
contractions under the stated denominator condition; no $+i0$ distribution
product appears. [F1, F4, L2, step 1.2, given, algebra] ∎
