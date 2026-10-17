---
id: lem-emg-maxwell-current-forms
kind: lemma
title: "Sourced Maxwell sign and current conservation"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-emg-lorentzian-forms
  - def-countable-choice
  - def-gr-metric-volume-form-and-current-flux
  - lem-emg-lorentz-hodge-calculus
  - thm-gr-density-divergence-and-finite-chain-flux
  - thm-gr-local-lorentz-tetrad-existence
  - thm-gr-point-normal-and-exponential-coordinate-charts
  - thm-gr-local-geodesics-and-exponential-map
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 3.2.5 and section 4.5.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.2.5, Maxwell action, sourced form equation, current conservation and charge balance (equations 3.114–3.115); §4.5.3 for the Maxwell stress tensor conventions."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 1, Maxwell tensor equations (1.73)–(1.94), printed pp. 20–24 (PDF pp. 26–30); chapter 4, curved-spacetime Maxwell forms (4.24)–(4.29), printed pp. 107–108 (PDF pp. 113–114). Carroll uses Gaussian units and writes the divergence with reversed antisymmetric index order."
---

## Statement

Let $(M,g,N,o)$ be the smooth, boundaryless, oriented and time-oriented
Lorentzian four-manifold of [[def-emg-lorentzian-forms]], with signature
$(-,+,+,+)$, metric-selected connection $\nabla$ and oriented metric volume
form $\mathrm{vol}_g$. Let $F\in\Omega^2(M)$ be a smooth real two-form and
$j\in\Gamma(TM)$ a smooth vector field. Fix constants $\mu_0>0$ and $c>0$;
$\mu_0$ is a real coefficient here, and $c$ is the positive coordinate
conversion in $x^0=ct$ of [[def-emg-lorentzian-forms]]. Assume the mathematical
field equations

$$dF=0,\qquad \nabla_aF^{ab}=-\mu_0j^b.$$

The equations are conditional hypotheses, not physical postulates in this
mathematical item. Define $v\in\Gamma(TM)$ by $v^b:=\nabla_aF^{ab}$ and
define the current three-form by $\iota_j\mathrm{vol}_g$, the contraction
specified in [[def-gr-metric-volume-form-and-current-flux]]. Then:

**(a) Sign identity.** On $M$,

$$d(\star_gF)=-\iota_v\mathrm{vol}_g.$$

Consequently the sourced equation is equivalently

$$\nabla_aF^{ab}=-\mu_0j^b\quad\Longleftrightarrow\quad d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g.$$

**(b) Current conservation.** Either equivalent sourced equation implies
$\nabla_aj^a=0$. This conclusion requires the sourced equation and $\mu_0>0$;
it does not require $dF=0$.

**(c) Local component check.** At any $p\in M$, choose a positively oriented
point-normal chart supplied by
[[thm-gr-point-normal-and-exponential-coordinate-charts]]. In that chart,
write $E_i(x):=-cF_{0i}(x)$ and
$B_i(x):=\frac12\epsilon_{ijk}F_{jk}(x)$, where $\epsilon_{123}=+1$ and
$\epsilon_{ijk}$ is alternating. These are local component abbreviations in
the chosen chart, not global observer fields. With
$\operatorname{div}E:=\partial_iE_i$,
$(\operatorname{curl}E)_k:=\epsilon_{kij}\partial_iE_j$, and similarly
for $B$, the pointwise component identities are

$$v^0=-\frac{1}{c}\operatorname{div}E,\qquad v^k=\frac{1}{c^2}\partial_tE_k-(\operatorname{curl}B)_k,$$

$$ (d\star_gF)_{123}=\frac{1}{c}\operatorname{div}E,\qquad (d\star_gF)_{0ij}=\epsilon_{ijk}\left(\frac{1}{c^2}\partial_tE_k-(\operatorname{curl}B)_k\right),$$

$$ (dF)_{123}=\operatorname{div}B,\qquad (dF)_{0ij}=\frac{\epsilon_{ijk}}{c}\left(\partial_tB_k+(\operatorname{curl}E)_k\right),$$

where $\partial_t:=c\,\partial_0$. The equations are pointwise identities
in normal coordinates; they do not assert that these component abbreviations
form global three-vector fields on curved spacetime.

On an open flat Minkowski domain with a fixed inertial Cartesian chart
$x^0=ct$, define $\rho:=j^0/c$, $J^i:=j^i$, and
$\epsilon_0:=(\mu_0c^2)^{-1}$. The same component formulas at every point give

$$\operatorname{div}E=\frac{\rho}{\epsilon_0},\qquad \operatorname{curl}B-\frac{1}{c^2}\partial_tE=\mu_0J,\qquad \operatorname{div}B=0,\qquad \partial_tB+\operatorname{curl}E=0.$$

These are a coordinate reduction of the stated tensor and form equations, not
claims that the smooth fields describe an experiment.

## Facts & Assumptions

**Given:** The geometric data, fields and positive coefficients specified in the Statement.

[F1] [[def-emg-lorentzian-forms]] defines a smooth, boundaryless, oriented, time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, its independent orientation and metric volume form, its torsion-free metric-selected connection, and the positive scale $c$ in $x^0=ct$.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines $\star_g$ by the Lorentzian metric and orientation. In an oriented orthonormal coframe its two-form components are $({\star_gF})_{ab}=\frac12(\mathrm{vol}_g)_{abcd}F^{cd}$, and $d^2=0$.

[F3] [[thm-gr-local-lorentz-tetrad-existence]] supplies a smooth future-directed orthonormal tetrad near each point, but does not impose its orientation relative to $o$. At $p$, reversing one of its three spacelike legs when necessary makes the ordered basis positively oriented while preserving orthonormality and the future direction of its timelike leg. [[thm-gr-local-geodesics-and-exponential-map]] and [[thm-gr-point-normal-and-exponential-coordinate-charts]] apply to any such orthonormal basis and supply a point-normal exponential chart whose coordinate orientation is positive and which satisfies $g_{ab}(p)=\eta_{ab}$, $\Gamma^a{}_{bc}(p)=0$, and $\partial_ag_{bc}(p)=0$. This is a pointwise normal-coordinate statement; it asserts no flat neighborhood.

[F4] [[def-gr-metric-volume-form-and-current-flux]] defines the current three-form as $\iota_j\mathrm{vol}_g$. For smooth $j$, [[thm-gr-density-divergence-and-finite-chain-flux]] proves $d(\iota_j\mathrm{vol}_g)=(\nabla_aj^a)\mathrm{vol}_g$.

[F5] The ambient tangent-bundle conventions inherited through the geometric suppliers use $\mathrm{AC}_\omega$, the axiom that every countable family of nonempty sets has a choice function ([[def-countable-choice]]). The finite component calculations below add no arbitrary-choice assumption.

[A1] Fix constants $\mu_0>0$ and $c>0$. The equations $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ are hypotheses of the conditional mathematical result; no physical postulate or measured value of either coefficient is assumed.

[A2] For the final flat-coordinate specialization only, assume an open domain with Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$ in an inertial Cartesian chart $x^0=ct$, and define $\rho=j^0/c$, $J^i=j^i$ and $\epsilon_0=(\mu_0c^2)^{-1}$.

## Proof

**Given:** The hypotheses of the Statement and labelled items [F1]–[F5], [A1], and [A2] when the flat specialization is used.

1.1 Fix $p\in M$. By the local tetrad theorem in [F3], choose a future-directed orthonormal tetrad at $p$; if necessary reverse one spatial leg to make the basis positively oriented relative to $o$. This leaves its orthonormality and future-directed timelike leg unchanged. Apply the point-normal exponential-chart theorem of [F3] to this basis. In this chart the inverse metric and volume coefficients have zero first derivatives at $p$: differentiating $g^{ac}g_{cb}=\delta^a{}_b$ shows $\partial g^{ab}(p)=0$, and differentiating $w=\sqrt{|\det(g_{ab})|}$ gives $\partial w(p)=0$ when $\partial g_{ab}(p)=0$. Thus the first derivatives of the coefficient map in the Hodge formula [F2] vanish at $p$. Define the local component functions $E_i=-cF_{0i}$ and $B_i=\frac12\epsilon_{ijk}F_{jk}$. Raising indices with $\eta$ and using [F2] gives $F^{0i}=E_i/c$, $F^{i0}=-E_i/c$, $F^{ij}=\epsilon_{ijk}B_k$, $(\star_gF)_{0i}=B_i$, and $(\star_gF)_{ij}=\epsilon_{ijk}E_k/c$ at $p$. [given, F1, F2, F3, F5, algebra, construct]

2.1 Since $\Gamma(p)=0$, the divergence components at $p$ are $v^0=\partial_iF^{i0}=-\operatorname{div}E/c$ and $v^k=\partial_0F^{0k}+\partial_iF^{ik}=c^{-2}\partial_tE_k-(\operatorname{curl}B)_k$. The coordinate formula for $d$ and the vanishing first derivatives of the Hodge coefficients in step 1.1 give $(d\star_gF)_{123}=\partial_iE_i/c$ and $(d\star_gF)_{0ij}=\epsilon_{ijk}(c^{-2}\partial_tE_k-(\operatorname{curl}B)_k)$. In the same oriented chart, $(\iota_v\mathrm{vol}_g)_{123}=v^0$ and $(\iota_v\mathrm{vol}_g)_{0ij}=-\epsilon_{ijk}v^k$. These four independent components prove $d(\star_gF)=-\iota_v\mathrm{vol}_g$ at $p$. Since $p$ was arbitrary and both sides are smooth three-forms, the identity holds on $M$. [given, F1, F2, F3, F4, step 1.1, algebra]

2.2 Because $\nabla$ is torsion-free by [F1], its symmetric connection coefficients cancel under total antisymmetrization, so $(dF)_{abc}=3\partial_{[a}F_{bc]}=3\nabla_{[a}F_{bc]}$. In the normal chart of step 1.1, substitution of $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ gives $(dF)_{123}=\operatorname{div}B$ and $(dF)_{0ij}=\epsilon_{ijk}(\partial_tB_k+(\operatorname{curl}E)_k)/c$. These are pointwise component identities for the local chart functions; they do not make $E_i,B_i$ global fields on $M$. [given, F1, F2, step 1.1, algebra]

3.1 Substituting $v^b=\nabla_aF^{ab}=-\mu_0j^b$ into step 2.1 yields $d(\star_gF)=-\iota_{-\mu_0j}\mathrm{vol}_g=\mu_0\iota_j\mathrm{vol}_g$. Conversely, if this form equation holds, step 2.1 gives $\iota_{v+\mu_0j}\mathrm{vol}_g=0$. At each point contraction with a nonvanishing four-form is an isomorphism from the four-dimensional tangent space to the space of three-covectors, so $v+\mu_0j=0$. This proves the equivalence in the Statement. [given, A1, F1, F2, F4, step 2.1, algebra]

4.1 Apply $d$ to the form equation in step 3.1. By [F2], $d^2(\star_gF)=0$; since $\mu_0$ is a nonzero constant, $d(\iota_j\mathrm{vol}_g)=0$. The exact identity in [F4] then gives $(\nabla_aj^a)\mathrm{vol}_g=0$. The volume form is nowhere zero, hence $\nabla_aj^a=0$ throughout $M$. This uses the sourced equation only and does not invoke $dF=0$. [given, A1, F2, F4, step 3.1, algebra]

5.1 Under the additional flat-chart hypothesis [A2], the normal-coordinate component identities hold at every point in the same Cartesian chart. The time component of $v=-\mu_0j$ is $-\operatorname{div}E/c=-\mu_0c\rho$, giving $\operatorname{div}E=\rho/\epsilon_0$. Its spatial components are $c^{-2}\partial_tE-\operatorname{curl}B=-\mu_0J$, or $\operatorname{curl}B-c^{-2}\partial_tE=\mu_0J$. The two formulas from step 2.2 give $\operatorname{div}B=0$ and $\partial_tB+\operatorname{curl}E=0$. This is the stated flat-coordinate reduction. [given, A2, step 2.1, step 2.2, algebra] ∎

## Remarks

The sign is tied to the displayed convention $F_{0i}=-E_i/c$, orientation $\mathrm{vol}_g(e_0,e_1,e_2,e_3)=+1$, signature $(-,+,+,+)$, and index order $\nabla_aF^{ab}$. Carroll's full lecture notes use Gaussian units and write $\partial_\mu F^{\nu\mu}=+4\pi J^\nu$; antisymmetry rewrites this as $\partial_\mu F^{\mu\nu}=-4\pi J^\nu$ before translating coefficients. No field equation, current-conservation law, or global inertial chart is imported from a differently signed convention.
