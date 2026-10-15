---
id: pthm-qft-example-formal-scattering-decay
kind: physics-theorem
domain: physics
library: physics
title: Formal tree scattering and scalar-decay coefficients
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 8
deps:
  - def-countable-choice
  - def-qft-example-data
  - def-qft-example-observable-types
  - lem-qft-example-spin-trace-completeness
  - lem-qft-example-two-body-phase-space
  - cor-qft-example-scalar-tree-coefficients
  - post-qft-example-formal-observable-map
  - post-qft-formal-qed-coefficients
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-example-observable-types: formulation-prerequisite
  lem-qft-example-spin-trace-completeness: mathematical-premise
  lem-qft-example-two-body-phase-space: mathematical-premise
  cor-qft-example-scalar-tree-coefficients: mathematical-premise
  post-qft-example-formal-observable-map: physical-assumption
  post-qft-formal-qed-coefficients: physical-assumption
physical_scope: >-
  Conditional finite formal-tree calculations for unpolarized
  electron-positron to muon-antimuon scattering and the specified scalar
  contact and decay amplitudes, interpreted only by the adopted coefficient
  maps. The electron-mass estimate compares two tree coefficients only; no
  continuum scattering operator, loop or infrared error, threshold
  resummation, detector prediction, or empirical estimate is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3 §§3.5.3 and 3.6.2–3.6.3, and Chapter 6 §6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
    - title: David Tong, Quantum Field Theory, Chapter 6 §§6.4.1, 6.5 and 6.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
    - title: Mark Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§11, 46–48 and 59
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Statement

Assume $\mathrm{AC}_\omega$ [[def-countable-choice]]. Use the fixed Cartesian
Minkowski chart $x=(ct,\mathbf x)$, the geometric metric
$\eta=(-,+,+,+)$, and the distinct algebraic contraction
$h=-\eta=(+,-,-,-)$ of [[def-qft-example-data]]. Let $m,M\geq0$ be the
electron and muon rest energies in joules. In this chart, a future energy
four-vector is
$q=(E,\mathbf q)\in\mathbb R^4$ with $E>0$; it has rest energy $\mathsf M\geq0$
when $h(q,q)=\mathsf M^2$. All four-vector components are in joules, and
$\mathbf q$ is $c$ times physical spatial momentum. Let $p_1,p_2$ be future electron
and positron energy four-vectors with rest energy $m$, and $k_1,k_2$ future
muon and antimuon energy four-vectors with rest energy $M$, satisfying
$p_1+p_2=k_1+k_2=P$ and
$$ s=h(P,P)>4\max(m^2,M^2). $$
By [[lem-qft-example-two-body-phase-space]], choose a proper orthochronous
$h$-Lorentz matrix $\Lambda\in GL(4,\mathbb R)$, meaning
$\Lambda^Th\Lambda=h$, $\det\Lambda=1$, and preservation of the future
causal cone $C_+:=\{(E,\mathbf q):E>0,\ h((E,\mathbf q),(E,\mathbf q))\geq0\}$,
with $\Lambda P=(\sqrt{s},\mathbf0)$.
Its boost construction supplies such a map because $P$ is future timelike.
The **center-of-momentum inertial chart** has coordinates
$x^{\rm CM}=\Lambda x$ on spacetime and corresponding four-vector components
$q^{\rm CM}=\Lambda q$; from here on, four-vector components are in that
chart, so $P=(\sqrt{s},\mathbf0)$. The strict threshold makes
$\mathbf p_1$ and $\mathbf k_1$ nonzero. Define the
scattering angle $\theta\in[0,\pi]$ by
$$\theta:=\arccos\!\left(\frac{\mathbf p_1\cdot\mathbf k_1}{|\mathbf p_1|\,|\mathbf k_1|}\right),$$
using the Euclidean inner product on $\mathbb R^3$.
Write $g=\sqrt{4\pi\alpha}>0$, as in
[[def-qft-example-data]], and
$$ \beta_e=\sqrt{1-\frac{4m^2}{s}},\qquad \beta_\mu=\sqrt{1-\frac{4M^2}{s}}. $$
For the selected formal one-photon tree coefficient, take equal incoherent
weight $1/4$ for the four initial spin-label pairs and sum over final spin
labels. Take the selected muon model charge to be $-e$ as well. Up to an
irrelevant common phase, its amplitude is
$$ \mathcal M_{\rm tree}=\frac{g^2}{s} [\bar v(p_2)\gamma^a u(p_1)] [\bar u(k_1)\gamma_a v(k_2)], $$
where the brackets denote the product of the two currents. This selected
formal amplitude adopts the current draft QFT-G02 line/vertex convention;
it is not an exact amplitude of a constructed continuum theory.

Conditional on this amplitude adoption and
[[post-qft-example-formal-observable-map]], the spin-averaged squared
coefficient is
$$ \overline{|\mathcal M_{\rm tree}|^2} =g^4[3-\beta_e^2-\beta_\mu^2 +\beta_e^2\beta_\mu^2\cos^2\theta], $$
The distinguishable-particle differential and total
cross-section coefficients are
$$ \frac{d\sigma_{\rm coeff}}{d\Omega} =\frac{\alpha^2(\hbar c)^2\beta_\mu}{4s\beta_e} [3-\beta_e^2-\beta_\mu^2+\beta_e^2\beta_\mu^2\cos^2\theta], $$
$$ \sigma_{\rm coeff} =\frac{\pi\alpha^2(\hbar c)^2}{s}\frac{\beta_\mu}{\beta_e} [3-\beta_e^2-\beta_\mu^2+\tfrac13\beta_e^2\beta_\mu^2]. $$
For $\delta=4m^2/s\leq1/2$, the ratio of this differential coefficient to
the coefficient at $m=0$ with the same $M,s,\theta$ belongs to
$[1,1+4\delta]$. This bound is only the incoming-electron-mass effect
within the selected tree coefficient.

The on-shell equations also give
$$ P_a\bar v(p_2)\gamma^a u(p_1)=0,\qquad P_a\bar u(k_1)\gamma^a v(k_2)=0. $$
These are the two current contractions for this finite external-spinor
calculation; they do not assert an all-orders or loop Ward theorem.

For the separate scalar conventions of
[[post-qft-example-formal-observable-map]], let $m_s\geq0$ be a scalar rest
energy, $s>4m_s^2$, and let $\lambda\in\mathbb R$ be the dimensionless
constant quartic amplitude parameter. The identical-final full-sphere and
distinguishable total coefficients are respectively
$$ \sigma_{\rm coeff}^{\rm identical} =\frac{\lambda^2(\hbar c)^2}{32\pi s},\qquad \sigma_{\rm coeff}^{\rm distinguishable} =\frac{\lambda^2(\hbar c)^2}{16\pi s}. $$
For a parent at rest of energy $\mathsf M_0>2m_s$ and a constant identical
daughter amplitude $G_E$ in joules, the rate coefficient is
$$ \Gamma_{\rm coeff} =\frac{|G_E|^2}{32\pi\hbar\mathsf M_0} \sqrt{1-\frac{4m_s^2}{\mathsf M_0^2}}\quad[\mathrm{s}^{-1}]. $$
If an energy width is named, its convention is $\Gamma_E:=\hbar\Gamma_{\rm
coeff}$ in joules. None of these coefficient statements implies an exact
survival law. The QFT-G02 postulate is a current draft carrier; its use here
retains draft status and does not imply independent acceptance.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the masses and strict thresholds above, the
finite Dirac spinor normalizations and traces, the two-body flux/phase-space
map, and the stated physical coefficient adoptions.

[F1] [[def-qft-example-data]]: $h=-\eta$, energy components and rest
energies are joule-valued, $s$ has unit $\mathrm J^2$, $g^2=4\pi\alpha$,
and $\hbar c$ has unit $\mathrm{J\,m}$.

[F2] [[def-qft-example-observable-types]]: a formal coefficient is not an
evaluated exact probability or error bound without a separate adoption; an
empirical estimate is a finite-data report with its source conditions and
uncertainty.

[F3] [[lem-qft-example-spin-trace-completeness]]: the finite spin sums are
$\sum_s u_s\bar u_s=\not p+M$ and $\sum_s v_s\bar v_s=\not p-M$; the
two- and four-gamma traces, on-shell equations, adjoint, and current
conjugation identity use $h=-\eta$ and the stated finite spinor
normalization. The supplier's matrix definition carries $\mathrm{AC}_\omega$.

[F4] [[lem-qft-example-two-body-phase-space]]: its boost construction sends
any future-timelike $P$ to $(\sqrt{s},\mathbf0)$ by a proper orthochronous
$h$-Lorentz transformation; transformations fixing $(1,\mathbf0)$ act as
proper spatial rotations. Equal-mass two-body density is
$d\Phi_2/d\Omega=\beta/(32\pi^2)$, equal-mass incoming flux is
$F=2s\beta$, and the coefficient map is
$(\hbar c)^2\overline{|\mathcal A|^2}d\Phi_2/(F S_f)$; the decay map is
$\int|\mathcal G|^2d\Phi_2/(2\hbar\mathsf M_0S_f)$.

[F5] [[cor-qft-example-scalar-tree-coefficients]]: for the adopted constant
quartic amplitude the identical scalar total coefficient is
$\lambda^2(\hbar c)^2/(32\pi s)$ and the distinguishable result is twice
that; for identical daughters the constant-amplitude decay coefficient is
$|G_E|^2\sqrt{1-4m_s^2/\mathsf M_0^2}/(32\pi\hbar\mathsf M_0)$.

[A1] [[post-qft-example-formal-observable-map]]: the displayed QED and
scalar coefficient maps are adopted as model-specific leading formal
readings; they are not exact continuum observables or empirical estimates.

[A2] The selected QED one-photon tree amplitude, initial spin weights, and
final spin sum are exactly those in the Statement. This fixes the finite
formal calculation and supplies no LSZ or continuum scattering construction.

[A3] [[post-qft-formal-qed-coefficients]] is the current batch-53 QFT-G02
draft. It adopts a species-charge vertex $iq_n\gamma^a$ (electron and
selected muon $q_n=-e_n$), the fermion line
$i(\not p+\mu)/(h(p,p)-\mu^2)$ only for $\mu>0$ and nonzero denominator,
and the Feynman-gauge photon line $-ih_{ab}/(h(k,k)+i0)$. This channel has
no internal fermion line. A time-ordered free line uses the actual
Countable-Choice-dependent $H_\mu$ carrier. The postulate's carrier is
current and its interface was inspected; its physical adoption remains
draft.

## Proof

1.1 In the center-of-momentum frame the selected photon momentum is $P$ and $h(P,P)=s>0$. The current QFT-G02 convention [A3] supplies two charge-$-e_n$ vertices and photon factor $-ih_{ab}/(s+i0)$. At this regular point, $\lim_{\epsilon\downarrow0}(s+i\epsilon)^{-1}=s^{-1}$, so the scalar denominator is $1/s$. Under the selected-graph normalization [A2], the remaining spin dependence is the stated product of the two currents, up to a common phase that vanishes from the modulus square. This calculation uses no internal fermion line or loop product. [given, A2, A3, algebra]

1.2 Summing the final spin labels and averaging the four initial pairs, [F3] reduces the squared currents to $$ L_e^{ab}=\frac14\operatorname{Tr}[(\not p_2-m)\gamma^a(\not p_1+m)\gamma^b],\qquad L_{\mu,ab}=\operatorname{Tr}[(\not k_1+M)\gamma_a(\not k_2-M)\gamma_b]. $$ The terms with three gamma matrices vanish. Expanding the remaining terms with the two- and four-gamma traces in [F3] gives $$ L_e^{ab}=p_2^ap_1^b+p_2^bp_1^a-\frac{s}{2}h^{ab},\qquad L_{\mu,ab}=4(k_{1a}k_{2b}+k_{1b}k_{2a}-\frac{s}{2}h_{ab}), $$ because $p_1\cdot p_2+m^2=s/2$ and $k_1\cdot k_2+M^2=s/2$ follow by expanding the two total-momentum squares. [given, F3, algebra]

1.3 The adjoint equations from [F3] give $\bar v(p_2)\not p_2=-m\bar v(p_2)$ and $\not p_1u(p_1)=mu(p_1)$, so contraction with $P=p_1+p_2$ cancels the two terms. Similarly, $\bar u(k_1)\not k_1=M\bar u(k_1)$ and $\not k_2v(k_2)=-Mv(k_2)$ cancel in the outgoing current. This proves both displayed current contractions, including when either mass is zero; no general off-shell or loop Ward statement is inferred. [given, F3, algebra]

1.4 Apply [F5] to the declared scalar amplitudes and strict thresholds. Its identical-final factor is $S_f=2$ on the full labeled sphere, while the distinguishable case has $S_f=1$, so the total scattering coefficients have the stated factor of two. The decay result uses the same identical-particle factor and the parent-rest coefficient map. Since $[G_E]=[m_s]=[\mathsf M_0]=\mathrm J$ and $[\hbar]=\mathrm{J\,s}$, $[\Gamma_{\rm coeff}]=\mathrm J^2/(\mathrm{J\,s\,J})=\mathrm{s}^{-1}$; $(\hbar c)^2/s$ has unit $\mathrm{m}^2$. [given, F1, F5, algebra]

2.1 In this chart $P=(\sqrt{s},\mathbf0)$ gives $\mathbf p_2=-\mathbf p_1$ and $E_1+E_2=\sqrt{s}$. The equal mass-shell equations and $E_i>0$ imply $E_1=E_2=\sqrt{s}/2$, hence $|\mathbf p_1|=\sqrt{s/4-m^2}=\sqrt{s}\beta_e/2>0$; the same argument gives $\widetilde E_1=\widetilde E_2=\sqrt{s}/2$ and $|\mathbf k_1|=\sqrt{s}\beta_\mu/2>0$. Thus $\theta$ is defined. If $\Lambda_1,\Lambda_2$ both send $P$ to rest, $\Lambda_2\Lambda_1^{-1}$ fixes $(1,\mathbf0)$ and so acts by a proper spatial rotation by [F4]; it preserves the Euclidean dot product, making $\theta$ independent of the selected chart's residual orientation. Contracting the tensors in 1.2 and using the mass-shell dot products gives $$ L_e^{ab}L_{\mu,ab}=4\{2[(p_2\cdot k_1)(p_1\cdot k_2)+(p_2\cdot k_2)(p_1\cdot k_1)] +s^2-s(p_1\cdot p_2+k_1\cdot k_2)\}. $$ The cross terms with one metric contribute $-s(p_1\cdot p_2+k_1\cdot k_2)$, and the metric-metric term contributes $s^2$; together these equal $s(m^2+M^2)$. The mixed dot products are $p_2\cdot k_1=p_1\cdot k_2=s/4+|\mathbf p_1||\mathbf k_1|\cos\theta$ and $p_2\cdot k_2=p_1\cdot k_1=s/4-|\mathbf p_1||\mathbf k_1|\cos\theta$. Substituting and multiplying by $g^4/s^2$ gives the stated spin-averaged squared coefficient. [step 1.2, F1, F4, algebra]

3.1 The strict threshold gives $\beta_e,\beta_\mu>0$. For distinguishable muon labels, [F4] gives $d\Phi_2/d\Omega=\beta_\mu/(32\pi^2)$ and $F=2s\beta_e$. Inserting the squared coefficient derived in step 2.1 into its map and using $g^4=(4\pi\alpha)^2$ yields the displayed differential coefficient. The sphere integrals are $\int d\Omega=4\pi$ and $\int\cos^2\theta\,d\Omega=4\pi/3$ (integrate $2\pi u^2$ over $-1\leq u\leq1$), giving the displayed total coefficient. [step 2.1, F1, F4, algebra]

4.1 If $\delta=4m^2/s\leq1/2$, set $$ B_0=2-\beta_\mu^2+\beta_\mu^2\cos^2\theta,\qquad Q=1-\beta_\mu^2\cos^2\theta. $$ Then $B_0\geq1$ and $0\leq Q\leq1$. The ratio of the full differential coefficient to its $m=0$ value is $$ R=\frac{B_0+\delta Q}{B_0\sqrt{1-\delta}}\geq1. $$ Moreover $$ R-1=\frac1{\sqrt{1-\delta}}-1+ \frac{\delta Q}{B_0\sqrt{1-\delta}} \leq2\sqrt2\,\delta\leq4\delta, $$ since $1/\sqrt{1-\delta}-1\leq\sqrt2\delta$ and $B_0\sqrt{1-\delta}\geq1/\sqrt2$. This compares only the two formal tree coefficients. [step 3.1, algebra]

5.1 The units and formal/empirical types in [F1]–[F2] identify the results as formal coefficients with area or inverse-time units. The adopted interpretation in [A1] gives only the named leading-coefficient reading; neither an exact continuum observable, a measured estimate, nor an exponential survival law follows. [given, F1, F2, A1, step 1.4] ∎
