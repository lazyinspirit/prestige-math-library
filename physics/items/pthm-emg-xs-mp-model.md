---
id: pthm-emg-xs-mp-model
kind: physics-theorem
title: Harmonic static multicenter electrovac model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-emg-xs-geometric-to-si-model
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-harmonic-mp
  - thm-emg-xs-mp-verification
  - prop-emg-xs-mp-multicenter
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-geometric-to-si-model: physical-result
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-harmonic-mp: mathematical-premise
  thm-emg-xs-mp-verification: mathematical-premise
  prop-emg-xs-mp-multicenter: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional source-free classical Einstein–Maxwell model on the smooth
  exterior of finitely many removed centers, with a common electric sign and
  positive selected SI mass parameters. Fluxes are through regular spheres.
  No source is asserted at an excluded center; no horizon extension,
  completeness, stability, black-hole realization, observation, or empirical
  validity is claimed.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6, “Multi-Black-Hole Solutions”: extremal RN harmonic coordinates, the finite-center harmonic ansatz, and the source's black-hole interpretation, which is not imported here."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 7, equations (7.152)–(7.160), for the charged Einstein–Maxwell system and RN conventions; the multicenter field equations and fluxes are proved through the exact local suppliers."
verification:
  precheck: pass
---

## Statement

Let $N\ge1$ be finite, let $a_1,\ldots,a_N\in\mathbb R^3$ be distinct
length-coordinate points, choose SI mass parameters $m_{*,A}>0$, and fix one
sign $\sigma\in\{-1,+1\}$. Set
$$m_A:=\frac{G_Nm_{*,A}}{c^2},\qquad D:=\mathbb R^3\setminus\{a_1,\ldots,a_N\},\qquad H(x):=1+\sum_{A=1}^N\frac{m_A}{|x-a_A|}.$$
The positive length parameters $m_A$ make $H$ dimensionless and smooth
positive harmonic on $D$. The future unit field is $N_H=H\partial_{x^0}$,
with $g_H(N_H,N_H)=-1$. Here static means the metric coefficients are
independent of $x^0$, have no $dx^0dx^i$ terms, and are invariant under
$x^0\mapsto-x^0$; the displayed metric has all three properties. On
$\mathcal M=\mathbb R_{x^0}\times D$, with
$x^0=ct$ and the orientation of [[def-emg-xs-harmonic-mp]], take
$$g_H=-H^{-2}(dx^0)^2+H^2\delta_{ij}dx^i dx^j,\qquad \mathcal A_\sigma=\sigma(H^{-1}-1)dx^0,\qquad \mathcal F_\sigma=d\mathcal A_\sigma,\qquad F:=\alpha^{-1}\mathcal F_\sigma,$$
where $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$ as in
[[def-emg-xs-si-parameters]]. Under the adopted equation-based model of
[[post-emg-einstein-maxwell-equations]] with $\Lambda=0$, $j=0$, and
$T^m=0$, these data satisfy the source-free SI equations
$$dF=0,\qquad \nabla^g_aF^{ab}=0,\qquad G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}.$$
For each $A$ and $r>0$, define the coordinate sphere and its closed ball by
$$S_A(r):=\{x\in\mathbb R^3:|x-a_A|=r\}.$$

$$\overline B_A(r):=\{x\in\mathbb R^3:|x-a_A|\le r\}.$$
Orient $S_A(r)$ by its outward unit normal relative to the standard orientation
of $\mathbb R^3$.
For every such sphere $S\subset D$, fix any $s\in\mathbb R_{x^0}$ and use
$i_{s,S}:S\hookrightarrow\mathcal M$, $i_{s,S}(x)=(s,x)$, with the
transported outward orientation. Every flux written over $S$ below means
the integral of the spacetime form pulled back by $i_{s,S}$; by
[[prop-emg-xs-mp-multicenter]] these values are independent of $s$.
Whenever $\overline B_A(r)$ contains no other center, the geometric fluxes are
$$q_e(S_A(r))=\sigma m_A,\qquad q_m(S_A(r))=0.$$
The corresponding SI electric-flux parameter is
$$Q_{e,A}:=\varepsilon_0c\int_{S_A(r)}\star_gF =\sigma\sqrt{4\pi\varepsilon_0G_N}\,m_{*,A},$$
and its magnetic flux $\int_{S_A(r)}F$ is zero. Define the outward-oriented
origin-centered sphere by $S_R:=\{x\in\mathbb R^3:|x|=R\}$, where the
orientation is induced by the outward unit normal relative to the standard
orientation of $\mathbb R^3$. For $R>\max_A|a_A|$, it has
the sum of these electric fluxes. These
are model parameters and regular-sphere fluxes, not measurements or evidence
of regular material sources at the removed points.

## Facts & Assumptions

**Given:** A finite nonempty set of distinct centers, positive SI masses, one common sign $\sigma$, positive SI constants, and the smooth source-free branch of the adopted equation-based postulate.

[F1] [[def-emg-xs-harmonic-mp]]: for smooth positive harmonic $H$, the metric is $g_H=-H^{-2}(dx^0)^2+H^2\delta_{ij}dx^i dx^j$, with $\mathcal A_\sigma=\sigma(H^{-1}-1)dx^0$ and $\mathcal F_\sigma=d\mathcal A_\sigma$.

[F2] [[prop-emg-xs-mp-multicenter]]: for finitely many distinct centers and positive lengths $m_A$, $H=1+\sum_A m_A/|x-a_A|$ is positive harmonic on the punctured exterior; its geometric sphere fluxes are $q_e=\sigma m_A$ locally and $q_e=\sigma\sum_A m_A$ outside all centers, with $q_m=0$. This proposition is draft with a complete current proof and Step 1 authoring-ready record; this consumer uses its statement conditionally, not as independent proof approval.

[F3] [[thm-emg-xs-mp-verification]]: the harmonic data satisfy $d\mathcal F_\sigma=d(\star_g\mathcal F_\sigma)=0$ and $\operatorname{Ric}=2Q(\mathcal F_\sigma)$. This draft theorem has a complete current proof and Step 1 authoring-ready record; its result is consumed conditionally, without claiming independent approval.

[F4] [[pthm-emg-xs-geometric-to-si-model]]: every such geometric electrovac datum, after $F=\alpha^{-1}\mathcal F$, satisfies the zero-source SI equation-based Einstein–Maxwell model. This local theorem is draft with its complete proof authored; it is used conditionally and has no independent approval.

[F5] [[def-emg-xs-si-parameters]]: $m_A=G_Nm_{*,A}/c^2$, $q_e=\alpha(4\pi\varepsilon_0c)^{-1}Q_e$, $q_m=\alpha(4\pi)^{-1}\Phi_B$, and $\alpha^2=4\pi G_N/(\mu_0c^4)$.

[F6] [[post-emg-einstein-maxwell-equations]]: the adopted field equations use $G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$ and $\nabla_aF^{ab}=-\mu_0j^b$; this item sets all three sources to zero.

[A1] [[def-countable-choice]]: the geometric flux convention inherits only $\mathrm{AC}_\omega$; the finite center family and its finite flux sums require no stronger choice principle.

## Proof

**Given:** The hypotheses and exact current interfaces in [F1]–[F6] and [A1]; in particular $N\ge1$, $a_A\ne a_B$ for $A\ne B$, $m_{*,A}>0$, and $\sigma\in\{-1,+1\}$.

1.1 Since $G_N,c,m_{*,A}>0$, each $m_A=G_Nm_{*,A}/c^2$ is a positive length. The Statement defines $S_A(r)=\{x\in\mathbb R^3:|x-a_A|=r\}$ and its closed ball, with outward Euclidean orientation; if that ball contains no other center, then $S_A(r)\subset D$ and the regular-sphere hypothesis of [F2] holds. The formula for $H$ is exactly the finite harmonic family in [F2], so it is smooth, positive, and Euclidean harmonic on $D$, with the regular-sphere and outer-sphere geometric fluxes stated there. [given, F1, F2, F5, algebra]

2.1 The data in step 1.1 therefore meet [F1] and the full geometric field equations in [F3]. Apply the SI conversion theorem [F4] with the same constant $\alpha$ from [F5]. The resulting smooth SI two-form $F=\alpha^{-1}\mathcal F_\sigma$ satisfies the source-free Maxwell and Einstein equations after the specialization of [F6]. This is a deduction within the adopted model. [given, F1, F3, F4, F5, F6, step 1.1]

2.2 Use the smooth embedding $i_{s,S}$ and its pullback convention from [F2] on each isolated sphere; its image is a compact oriented sphere in $\mathcal M$. The time-independent flux calculation in [F2] gives $q_e=\sigma m_A$ and $q_m=0$. The SI flux relation in [F5] rearranges to $Q_{e,A}=(4\pi\varepsilon_0c/\alpha)\sigma m_A$. Substituting $m_A=G_Nm_{*,A}/c^2$ and $\varepsilon_0\mu_0c^2=1$ gives $Q_{e,A}=\sigma\sqrt{4\pi\varepsilon_0G_N}\,m_{*,A}$. Since $q_m=\alpha(4\pi)^{-1}\int_S F=0$ and $\alpha>0$, the SI magnetic flux vanishes. [given, F2, F5, step 1.1, algebra]

3.1 For the origin-centred sphere $S_R=\{x:|x|=R\}$ with $R>\max_A|a_A|$, [F2] gives $q_e=\sigma\sum_A m_A$ and $q_m=0$. The same linear flux conversion in [F5] gives the sum of the individual SI electric-flux parameters; the finite sum makes no selection or limiting argument under [A1]. The centers remain outside $\mathcal M$, so this calculation asserts no equation or regularity at any $a_A$. [given, F2, F5, A1, step 2.2, algebra] ∎
