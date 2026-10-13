---
id: lem-sr-collision-necessary-conditions
kind: lemma
title: "Invariant mass, center-of-momentum frame and necessary conditions for conserving collision data"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-collision-datum-and-conservation
  - lem-sr-finite-future-causal-sums
  - lem-sr-center-of-momentum-frame
  - lem-sr-energy-momentum-observer-identities
  - lem-sr-four-momentum-in-inertial-frame
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - def-sr-total-four-momentum-and-invariant-mass
  - thm-sr-proper-time-and-observer-decomposition
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-lorentz-form-and-inertia
  - def-rational-power
  - lem-rational-power-laws
  - def-linear-map
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - thm-cauchy-schwarz-finite
  - def-euclidean-inner-product
  - def-sr-affine-minkowski-model
  - def-sine-and-cosine-by-power-series
  - def-pi-via-first-positive-cosine-zero
  - def-principal-inverse-sine-and-cosine
dependency_roles:
  def-sr-collision-datum-and-conservation: mathematical-premise
  lem-sr-finite-future-causal-sums: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-linear-map: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
dependency_level: 15
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.2 p. 90 (M^2 = (p1+p2)^2 = m1^2 + m2^2 + 2 p1 . p2 and M >= m1 + m2; centre-of-mass energy M = E_cm), p. 90 Example 7 (opposite light waves, collective mass 2E), p. 94 (one-photon pair production forbidden)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), c = 1; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf; Section 7.4 printed p. 86 (in the centre-of-momentum frame the total energy is the total mass)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]), $c>0$, and let
$\mathcal D=(p;(P_1,\dots,P_N);(P'_1,\dots,P'_K))$ be a mass-specified
conserving collision datum of [[def-sr-collision-datum-and-conservation]],
causal and on-shell, all of whose legs are nonzero; write
$Q:=Q_{\mathrm{in}}=Q_{\mathrm{out}}$ for the common side total.

**(a)** If $Q$ is future timelike with invariant mass $M$, then $M$ is the
common invariant mass of both sides, $Q$ has the center-of-momentum frame of
[[lem-sr-center-of-momentum-frame]] with $e_0=Q/(Mc)$, and in that frame

$$Mc^2=\sum_{\text{legs of a side}}E_{e_0}(\text{leg})\qquad\text{for each side};$$

each massive leg $\ell=mU$ has $E_{e_0}(\ell)=mc^2\gamma_\ell\ge mc^2$ with
$\gamma_\ell:=-\eta(U/c,e_0)$ and equality if and only if $U=ce_0$, and each
null leg has $E_{e_0}>0$. Hence for each side
$S\in\{\mathrm{in},\mathrm{out}\}$,

$$M\ \ge\ \sum_{\text{massive legs }\ell\in S}m_\ell,$$

with equality if and only if $S$ is massive-only and every massive leg of $S$
has four-velocity $ce_0$ (all massive particles of that side at rest in the
center-of-momentum frame).

**(b)** If $Q$ is future null, then every leg is null, all legs are mutually
parallel in one future null direction, $M=0$ by the convention of
[[def-sr-total-four-momentum-and-invariant-mass]]\,(b), and no
center-of-momentum frame exists.

**(c)** Suppose the incoming side is two-leg, $P_i=m_iU_i$ with $m_i>0$, and
put $n_2:=U_2/c$ (the future unit observer comoving with the second leg),
$\gamma:=-\eta(U_1/c,n_2)\ge1$ and $E:=E_{n_2}(P_1)=m_1c^2\gamma$. Then

$$M^2=m_1^2+m_2^2+\frac{2m_2E}{c^2}.$$

Consequently, if the outgoing side is mass-specified with massive masses
$\mu_1,\dots,\mu_L$, $L\ge1$ (it may also contain null legs), the datum can
conserve only if

$$E\ \ge\ \frac{c^2}{2m_2}\Bigl[\Bigl(\sum_{l=1}^L\mu_l\Bigr)^2-m_1^2-m_2^2\Bigr],\qquad\text{equivalently}\qquad T:=E-m_1c^2\ \ge\ \frac{c^2}{2m_2}\Bigl[\Bigl(\sum_{l=1}^L\mu_l\Bigr)^2-(m_1+m_2)^2\Bigr].$$

**(d)** Suppose the incoming side consists of exactly two future null legs
$P_1,P_2$. If there is an inertial frame with
$P_i=(E_i/c)(e_0+s_i)$, $E_i>0$, $s_1,s_2$ unit spatial vectors with
$s_2=-s_1$, then $Q$ is future timelike and $M=2\sqrt{E_1E_2}/c^2$. More
generally, with $s_1,s_2$ unit spatial vectors in that frame and
$\sigma:=s_1\cdot s_2\in[-1,1]$ ([[thm-cauchy-schwarz-finite]]), if
$\theta:=\arccos\sigma\in[0,\pi]$ is their **Euclidean angle**, with
$\arccos:[-1,1]\to[0,\pi]$ the inverse of the continuous strictly decreasing
restriction of cosine in [[def-principal-inverse-sine-and-cosine]]. Here
$\cos x=\sum_{j=0}^\infty(-1)^jx^{2j}/(2j)!$ is the function of
[[def-sine-and-cosine-by-power-series]], and $\pi$ is twice its smallest
positive zero ([[def-pi-via-first-positive-cosine-zero]]). Thus
$\cos\theta=\sigma$, $\theta=0\iff\sigma=1$, and
$\theta=\pi\iff\sigma=-1$. Then
$Q$ is future timelike for $\theta\ne0$ with

$$M=\frac{\sqrt{2E_1E_2(1-\cos\theta)}}{c^2},$$

while for $\theta=0$ the total $Q$ is future null, $M=0$ and no
center-of-momentum frame exists. In particular, a conserving on-shell
collision datum whose incoming side is a single null leg and whose outgoing
side contains at least one massive leg does not exist.

**(e)** All clauses are conditional implications from the hypotheses of a
conserving, causal, on-shell datum. They assert no interaction, no existence
of a conservation process for prescribed legs, no cross section, amplitude or
probability, and no empirical fact.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; a mass-specified conserving causal on-shell collision datum with nonzero legs; the additional hypotheses of clauses (a)–(d) as stated.

[F1] ([[def-sr-collision-datum-and-conservation]], Definition): a datum conserves when $Q_{\mathrm{in}}=Q_{\mathrm{out}}$; a mass-specified datum is on-shell, with recorded mass $m>0$ on each massive leg and $0$ on each null leg; a causal datum has every leg in $\mathrm{cl}(C^+)$; a massive leg $P=mU$ has $U$ future timelike with $\eta(U,U)=-c^2$ and recorded mass $m=m(P)=\sqrt{-\eta(P,P)}/c$; one compares the sides only through their totals.

[F2] ([[lem-sr-finite-future-causal-sums]], Statement): if $P_1,\dots,P_N$, $N\ge1$, are nonzero future causal vectors then $\sum_iP_i$ is nonzero future causal, and future timelike if some $P_i$ is future timelike; for $v,w\in\mathrm{cl}(C^+)$ one has $-\eta(v,w)\ge0$, with equality if and only if $v=0$, or $w=0$, or both are nonzero future null with $w=\lambda v$, $\lambda>0$; and $E_n$ and $q_n$ are additive over finite sums of elements of $\mathrm{cl}(C^+)$, with $E_n(\sum_iP_i)>0$ when the $P_i$ are nonzero future causal.

[F3] ([[lem-sr-center-of-momentum-frame]], Statement): for future timelike $Q$ with invariant mass $M$, an inertial frame with $e_0=Q/(Mc)$ exists and in it $q_{e_0}(Q)=0$, $E_{e_0}(Q)=Mc^2$; conversely $q_{e_0}(Q)=0$ forces $e_0=Q/(Mc)$; and a nonzero future null vector has no center-of-momentum frame.

[F4] ([[lem-sr-energy-momentum-observer-identities]], Statement): for $P=mU$ with $m>0$, $U$ future timelike with $\eta(U,U)=-c^2$, and $n$ future unit, one has $\gamma:=-\eta(U/c,n)\ge1$, $E_n(P)=mc^2\gamma$ and $T_n(P)=mc^2(\gamma-1)\ge0$, with $\gamma=1$ if and only if $U=cn$; and for nonzero future null $P$, $E_n(P)=c|q_n(P)|>0$.

[F5] ([[def-sr-total-four-momentum-and-invariant-mass]], Definition): the invariant mass of a future timelike total $Q$ is $M=\sqrt{-\eta(Q,Q)}/c$; if the total is future null then $M=0$ by convention; the side totals are the finite sums of the legs.

[F6] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): $E_n(P)=-c\,\eta(P,n)$ and $q_n(P)=h(P)$ for $P\in\mathrm{cl}(C^+)$.

[F7] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is symmetric and bilinear, so $\eta(\sum_iP_i,\sum_jP_j)=\sum_{i,j}\eta(P_i,P_j)$ for finite families.

[F8] ([[def-inertial-frame-and-inertial-chart]] and [[def-spatial-euclidean-structure-of-an-inertial-frame]]): in an inertial frame, $S=\mathrm{span}(e_1,e_2,e_3)=e_0^\perp$ with positive definite restriction $\delta$, a unit spatial vector is $s\in S$ with $\delta(s,s)=1$, and $\delta(s_1,s_2)=s_1\cdot s_2$; a vector with components $(v^0,v_s)$ satisfies $\eta(v,v)=-(v^0)^2+|v_s|^2$.

[F9] ([[thm-cauchy-schwarz-finite]], Statement): for real $a_i,b_i$, $|\sum_{i=1}^3a_ib_i|\le(\sum_i a_i^2)^{1/2}(\sum_i b_i^2)^{1/2}$; hence $|s_1\cdot s_2|\le1$ for unit spatial vectors.

[F10] ([[def-causal-classification-of-lorentz-vectors]] and [[def-time-orientation-and-future-causal-sets]]): a nonzero vector has exactly one causal character; it is timelike when $\eta(v,v)<0$, null when $\eta(v,v)=0$ and $v\ne0$, and future null when moreover $v\in \mathrm{cl}(C^+)$; the closed cones meet only at $0$.

[F11] ([[def-rational-power]] and [[lem-rational-power-laws]]): for $a\ge0$ the number $\sqrt a$ is the unique nonnegative square root of $a$, and for $a,b\ge0$ one has $\sqrt{ab}=\sqrt a\sqrt b$; in particular $\sqrt{4E_1E_2}=2\sqrt{E_1E_2}$ for $E_1,E_2>0$.

[F12] [[def-principal-inverse-sine-and-cosine]]: cosine restricts to a continuous strictly decreasing bijection $[0,\pi]\to[-1,1]$, with values $1$ and $-1$ at the endpoints; $\arccos$ is its inverse. Hence for $\theta=\arccos\sigma$, $\theta\ne0\iff\sigma<1$ and $\theta=\pi\iff\sigma=-1$. For unit vectors, $|s_1-s_2|^2=2-2\sigma$, so $\sigma=1\iff s_1=s_2$ by positive definiteness in [F8].

## Proof

**Proof technique:** read both sides as the same future causal total, use the center-of-momentum frame where the total is timelike, and compute the pairwise Lorentz products for the two-leg and null-leg clauses.

1.1 The datum conserves, so $Q_{\mathrm{in}}=Q_{\mathrm{out}}=Q$ by [F1], and every side is a finite nonempty list of nonzero future causal vectors; hence by [F2] $Q$ is nonzero future causal, $E_n$ and $q_n$ are additive over each side, and if some leg of a side is future timelike then that side's total $Q$ is future timelike. [F1, F2]

1.2 Assume $Q$ future timelike with invariant mass $M$; by [F3] the frame with $e_0=Q/(Mc)$ exists and satisfies $q_{e_0}(Q)=0$ and $E_{e_0}(Q)=Mc^2$; by [F4], a massive leg $\ell=mU$ has $E_{e_0}(\ell)=mc^2\gamma_\ell$ with $\gamma_\ell=-\eta(U/c,e_0)\ge1$ and $\gamma_\ell=1$ if and only if $U=ce_0$, and a null leg satisfies $E_{e_0}(\ell)=c|q_{e_0}(\ell)|>0$. [F3, F4, F6]

1.3 For $v,w\in\mathrm{cl}(C^+)$: by [F2] $-\eta(v,w)\ge0$, with equality exactly in the three listed cases; consequently, if $Q=\sum_iP_i$ with all $P_i$ nonzero future causal, [F7] gives $-\eta(Q,Q)=\sum_{i,j}-\eta(P_i,P_j)$, a sum of nonnegative terms each of which vanishes only when the corresponding pair is zero or parallel future null. [F2, F7]

1.4 For the two-leg incoming side of (c), $P_i=m_iU_i$ and $n_2=U_2/c$ is future unit; by [F7] and $\eta(U_i,U_i)=-c^2$ one has $\eta(P_1,P_1)=-m_1^2c^2$, $\eta(P_2,P_2)=-m_2^2c^2$, and $\eta(P_1,P_2)=m_2c\,\eta(P_1,n_2)=-m_2E$ because $E=E_{n_2}(P_1)=-c\,\eta(P_1,n_2)$ by [F6]; hence $-\eta(Q,Q)=m_1^2c^2+m_2^2c^2+2m_2E$. [F1, F6, F7]

1.5 For the null pair of (d), in the displayed inertial frame the vectors $P_i=(E_i/c)(e_0+s_i)$ satisfy $\eta(P_i,P_i)=(E_i/c)^2(-1+\delta(s_i,s_i))=0$ and are nonzero future null (their components in the frame are $(E_i/c)(1,s_i)$ with $|s_i|=1$); by [F7] and [F8], $\eta(P_1,P_2)=(E_1E_2/c^2)(-1+\sigma)$ with $\sigma=s_1\cdot s_2=\delta(s_1,s_2)\in[-1,1]$ by [F9], so $-\eta(Q,Q)=2E_1E_2(1-\sigma)/c^2$. [F7, F8, F9, F10]

2.1 Under the hypothesis of (a), additivity of $E_{e_0}$ over each side [step 1.1] and $E_{e_0}(Q)=Mc^2$ [step 1.2] give $Mc^2=\sum_{\text{legs of a side}}E_{e_0}(\text{leg})$ for each of the two sides, since both sides have total $Q$; and $M=M(Q)$ is the invariant mass of the common total, hence the common invariant mass of both sides. [F3, F5, step 1.1, step 1.2]

2.2 Under the hypothesis of (b), $Q$ is future null and nonzero: every leg is null, because if some leg were future timelike then $Q$ would be future timelike by [step 1.1] and a nonzero vector has exactly one causal character by [F10]. Pairwise, [step 1.3] applied to the incoming list, whose total is $Q$, gives $0=-\eta(Q,Q)=\sum_{i,j}-\eta(P_i,P_j)$ over the incoming legs as a sum of nonnegative terms, so each term vanishes and for $i\ne j$ the nonzero future null legs $P_i,P_j$ are parallel with $P_j=\lambda P_i$, $\lambda>0$; fixing the first incoming leg makes every incoming leg a positive multiple of it, and the same argument applied to the outgoing list makes every outgoing leg a positive multiple of the first outgoing leg $P'_1$. Since $Q=\lambda P_1$ and $Q=\lambda'P'_1$ with $\lambda,\lambda'>0$, the two directions coincide and all legs lie in one future null direction. Then $M=0$ by the convention of [F5], and no center-of-momentum frame exists by [F3] applied to the nonzero future null total. [F3, F5, F10, step 1.1, step 1.3]

2.3 Under the hypothesis of (c), $M$ is defined: $-\eta(Q,Q)=m_1^2c^2+m_2^2c^2+2m_2E>0$ by [step 1.4] because $m_1,m_2,c>0$ and $E=m_1c^2\gamma\ge m_1c^2>0$ by [F4], so $Q$ is future timelike; hence [F5] and [step 1.4] give $M^2=-\eta(Q,Q)/c^2=m_1^2+m_2^2+2m_2E/c^2$. [F4, F5, step 1.1, step 1.4]

2.4 Under the hypothesis of (d), if $\sigma<1$ then $-\eta(Q,Q)=2E_1E_2(1-\sigma)/c^2>0$ by [step 1.5], while $Q=P_1+P_2$ is nonzero future causal by [F2], so $Q$ is future timelike and [F5] gives $M^2=-\eta(Q,Q)/c^2=2E_1E_2(1-\sigma)/c^4$, hence $M=\sqrt{2E_1E_2(1-\sigma)}/c^2$ by [F11] with $\sigma=\cos\theta$; for the antiparallel case $s_2=-s_1$ one has $\theta=\pi$ and $\cos\theta=-1$, giving $M=\sqrt{4E_1E_2}/c^2=2\sqrt{E_1E_2}/c^2$ by [F11]. [F2, F5, F11, F12, step 1.5]

2.5 Under the hypothesis of (d) with $\sigma=1$, i.e. $\theta=0$: by [step 1.5] $\eta(Q,Q)=0$, and $Q=P_1+P_2$ is nonzero future causal by [step 1.1], hence future null by [F10]; therefore $M=0$ by [F5], and no center-of-momentum frame exists by [F3]. [F3, F5, F10, F12, step 1.1, step 1.5]

2.6 A conserving on-shell datum with a single null incoming leg and an outgoing side containing a massive leg does not exist: its incoming total $Q$ would be that single future null leg, while its outgoing side would contain a future timelike leg, so $Q_{\mathrm{out}}=Q$ would be future timelike by [step 1.1]; a vector cannot be both future null and future timelike by [F10], and conservation would force the two totals to be equal. [F10, step 1.1]

3.1 Under the hypothesis of (a), split each side into its massive and null legs: by [step 1.2] each massive leg contributes $m_\ell c^2\gamma_\ell\ge m_\ell c^2$ with $\gamma_\ell=1$ exactly when $U_\ell=ce_0$, and each null leg contributes $E_{e_0}>0$; substituting into [step 2.1] gives $M=\sum_{\text{massive}}m_\ell+\sum_{\text{massive}}m_\ell(\gamma_\ell-1)+\sum_{\text{null}}E_{e_0}/c^2\ \ge\ \sum_{\text{massive}}m_\ell$, with equality if and only if no null leg occurs and every massive leg has $\gamma_\ell=1$, that is $U_\ell=ce_0$. [step 1.2, step 2.1]

4.1 Under the hypothesis of (c), if the datum conserves and the outgoing side is mass-specified with massive masses $\mu_1,\dots,\mu_L$ and possibly null legs, then [step 3.1] applied to that side gives $M\ge\sum_l\mu_l$; combining with [step 2.3], $\bigl(\sum_l\mu_l\bigr)^2\le M^2=m_1^2+m_2^2+2m_2E/c^2$, so $E\ge\frac{c^2}{2m_2}\bigl[(\sum_l\mu_l)^2-m_1^2-m_2^2\bigr]$ by rearrangement; subtracting $m_1c^2$ from both sides and expanding $(\sum_l\mu_l)^2-(m_1+m_2)^2=(\sum_l\mu_l)^2-m_1^2-m_2^2-2m_1m_2$ gives the equivalent bound on $T=E-m_1c^2$. [step 2.3, step 3.1]

5.1 Clause (a) is [step 2.1] with [step 3.1], clause (b) is [step 2.2], clause (c) is [step 2.3] with [step 4.1], and clause (d) is [step 2.4], [step 2.5] and [step 2.6]; clause (e) records the conditional scope of these implications and asserts nothing further. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, step 2.6, step 3.1, step 4.1] ∎
