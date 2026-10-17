---
id: texp-emg-xs-two-center-model
kind: thought-experiment
title: Two-center ideal static charged configuration
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - post-emg-einstein-maxwell-equations
  - pthm-emg-xs-mp-model
  - def-emg-xs-harmonic-mp
  - prop-emg-xs-mp-multicenter
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  post-emg-einstein-maxwell-equations: physical-assumption
  pthm-emg-xs-mp-model: physical-result
  def-emg-xs-harmonic-mp: mathematical-premise
  prop-emg-xs-mp-multicenter: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Hypothetical two-center exact source-free SI model on the punctured
  exterior, with two selected positive SI mass parameters and one common sign for both
  electric flux parameters. Excluded centers are not included as sources or
  regular points. No horizon extension, stability, observed configuration,
  or empirical-validity claim is made.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6, “Multi-Black-Hole Solutions,” for the finite-center harmonic ansatz; the source's horizon and black-hole interpretation is not imported."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 7, charged solution conventions; the exact two-center exterior and signed fluxes are supplied by local conditional arguments."
verification:
  precheck: pass
---
## Statement

Let $d>0$ be the separation of the centers, measured in metres, and let
$m_{*,1},m_{*,2}>0$ be selected SI masses. Put $a_1=(0,0,0)$, $a_2=(d,0,0)$, choose one sign
$\sigma\in\{-1,+1\}$, and set $m_A=G_Nm_{*,A}/c^2$ for $A=1,2$. On
$D=\mathbb R^3\setminus\{a_1,a_2\}$ take
$$H(x)=1+\frac{m_1}{|x-a_1|}+\frac{m_2}{|x-a_2|},$$
and define the spheres with outward Euclidean orientation by
$$S_A(r):=\{x\in\mathbb R^3:|x-a_A|=r\}\quad(0<r<d/2).$$

$$S_R:=\{x\in\mathbb R^3:|x|=R\}\quad(R>d).$$

$$g_H=-H^{-2}(dx^0)^2+H^2\delta_{ij}dx^i dx^j,\qquad \mathcal A_\sigma=\sigma(H^{-1}-1)dx^0,\qquad F=\alpha^{-1}d\mathcal A_\sigma,$$
with $x^0=ct$ and $\alpha$ from [[def-emg-xs-si-parameters]]. This hypothetical
datum solves the selected source-free SI model on $\mathbb R_{x^0}\times D$.
For every displayed sphere $S$, use $i_{s,S}(x)=(s,x)$ into
$\mathbb R_{x^0}\times D$ at any fixed $s$, with transported outward
orientation, as in [[prop-emg-xs-mp-multicenter]] and
[[pthm-emg-xs-mp-model]]. Each integral over $S$ means the integral of
the spacetime form pulled back by $i_{s,S}$ and is independent of $s$.
For each $S_A(r)$, its SI electric flux is
$$\varepsilon_0c\int_{S_A(r)}\star_gF =\sigma\sqrt{4\pi\varepsilon_0G_N}\,m_{*,A},$$
and its magnetic flux is zero. On $S_R$, the electric flux is the sum of the two displayed values and
the magnetic flux remains zero. The example is a model calculation; it does
not insert a source at either omitted point or claim that two observed
black holes are in equilibrium.

## Facts & Assumptions

**Given:** A separation $d>0$ measured in metres, two positive SI masses, distinct centers, one common sign, positive SI constants, the exact harmonic MP data and multicenter result, and the source-free branch of the adopted physical model.

[F1] [[def-emg-xs-harmonic-mp]]: for a smooth positive harmonic $H$, the exact metric, orientation, potential and geometric field are the conformastatic MP data.

[F2] [[prop-emg-xs-mp-multicenter]]: for finite distinct centers and either common sign, $H=1+\sum_A m_A/|x-a_A|$ is positive harmonic on the punctured exterior, satisfies the geometric source-free equations, and has local and total sphere fluxes $q_e=\sigma m_A$ and $q_m=0$.

[F3] [[pthm-emg-xs-mp-model]]: the same finite harmonic family with selected SI mass inputs solves the adopted SI source-free equation model on the punctured exterior. This current physical theorem is draft with a complete proof and Step 1 authoring-ready record; it is used conditionally, not as independent proof approval.

[F4] [[def-emg-xs-si-parameters]]: $q_e=\alpha(4\pi\varepsilon_0c)^{-1}Q_e$, $q_m=\alpha(4\pi)^{-1}\Phi_B$, and $m_A=G_Nm_{*,A}/c^2$.

[F5] [[post-emg-einstein-maxwell-equations]]: the equation-based physical law is an adopted assumption, here restricted to zero cosmological and material sources.

[A1] [[def-countable-choice]]: only the inherited $\mathrm{AC}_\omega$ geometric convention is used, and the two-center substitutions and finite flux sums require no further choice.

## Proof

**Given:** The hypotheses and exact current supplier interfaces in [F1]–[F5] and [A1].

1.1 Since $d$ is a positive separation measured in metres, $a_1=(0,0,0)$ and $a_2=(d,0,0)$ are distinct length-coordinate points. By the Statement, $S_A(r)=\{x\in\mathbb R^3:|x-a_A|=r\}$ for $0<r<d/2$, and $S_R=\{x\in\mathbb R^3:|x|=R\}$ for $R>d$; these spheres isolate either center and strictly enclose both centers, respectively. The mass map in [F4] gives $m_1,m_2>0$, and the displayed $H$ is exactly the $N=2$ function in [F2]. Thus it is smooth, positive and harmonic on $D$. [given, F1, F2, F4, A1, algebra]

2.1 With the supplied time-slice embeddings and pullback convention of [F2] and [F3], the exact geometric fields on $D$ satisfy the source-free equations and have local fluxes $q_e(S_A)=\sigma m_A$, total outer flux $\sigma(m_1+m_2)$, and zero magnetic flux. Apply [F3] to the same $N=2$ data to obtain the selected SI source-free model equations; the omitted points remain outside the model manifold. [given, F2, F3, step 1.1]

3.1 By [F4], the SI flux corresponding to a geometric $q_e$ is $Q_e=(4\pi\varepsilon_0c/\alpha)q_e$. Substituting $q_e=\sigma m_A$ and $m_A=G_Nm_{*,A}/c^2$, using $\alpha^2=4\pi G_N/(\mu_0c^4)$ and $\varepsilon_0\mu_0c^2=1$, gives $Q_e=\sigma\sqrt{4\pi\varepsilon_0G_N}\,m_{*,A}$ for each local sphere; linearity gives their sum on the outer sphere. The magnetic flux is zero since $q_m=0$ and $\alpha>0$. [given, F2, F4, step 2.1, algebra]

4.1 The model deduction in step 2.1 is conditional on the adopted postulate [F5]. Neither the field equations on the punctured manifold nor the flux integrals assert material sources or regular fields at the omitted centers, and this construction contains no observation or stability argument. [given, F3, F5, A1, step 2.1] ∎
