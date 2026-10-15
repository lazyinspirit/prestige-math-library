---
id: pthm-rpm-hidden-momentum
kind: physics-theorem
title: SSC choices and hidden momentum
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional momentum–velocity identities for the adopted neutral pole-dipole test-body equations under Pirani, parallel-observer (OKS), and Tulczyjew–Dixon supplementary conditions. The identity distinguishes the momentum, curve tangent, and observer; no universal identification of momentum with mass times velocity is asserted."
empirical_premises: []
deps:
  - def-rpm-body-moments
  - def-rpm-charge-spin-model
  - lem-gr-observer-pairing-with-future-causal-vectors
  - lem-rpm-ssc-momentum-identity
  - post-rpm-mpd-truncation
dependency_roles:
  def-rpm-body-moments: formulation-prerequisite
  def-rpm-charge-spin-model: formulation-prerequisite
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-rpm-ssc-momentum-identity: mathematical-premise
  post-rpm-mpd-truncation: physical-assumption
sources:
  references:
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Sections 2 and 3, especially equation (16), the general momentum–velocity identity and Pirani, OKS and TD supplementary-condition branches; the SI and sign conventions are stated explicitly here.
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: Full relevant BMT lecture section read; it does not establish the extended-body SSC identities, which are proved conditionally from the MPD postulate and local lemma.
verification: {}
---

## Statement

Assume the neutral pole-dipole equations adopted in [[post-rpm-mpd-truncation]] for the local moments of [[def-rpm-body-moments]]: along a $C^2$ future timelike proper-time curve $z$, with $U=dz/d\tau$, $p$ future timelike and $S^{ab}=-S^{ba}$,
$$D_\tau p^a=-\frac12R^a{}_{bcd}U^bS^{cd},\qquad D_\tau S^{ab}=p^aU^b-p^bU^a.$$
For any $C^1$ future unit observer field $n$ along the curve satisfying the SSC $S^{ab}n_b=0$, put $\gamma=-g(n,U)/c>0$ and $E_n=-cg(p,n)$. Then
$$c\gamma p^a=\frac{E_n}{c}U^a+S^{ab}D_\tau n_b.$$
In the Pirani branch $n=U/c$, define $m=-g(p,U)/c^2>0$ and $a=D_\tau U$; then
$$p^a=mU^a+\frac{1}{c^2}S^{ab}a_b.$$
In the parallel-observer (OKS) branch $D_\tau n=0$, $p$ is a positive scalar multiple of $U$. In the TD branch $n=p/\mu$, $\mu=\sqrt{-g(p,p)}$, define $m:=-g(p,U)/c^2>0$ as in the Pirani branch. The derivative term generally remains and the identity gives $mc^2p=\mu^2U+S D_\tau p$; it does not by itself imply $p\parallel U$.

## Facts & Assumptions

**Given:** The adopted neutral MPD pole-dipole equations, a proper-time timelike worldline, future timelike $p$, antisymmetric spin $S$, and one of the stated future unit observer SSC choices.

[A2] The selected future unit observer field satisfies $S^{ab}n_b=0$; the Pirani, parallel-observer (OKS), and TD branches use the choices in the Statement.

[A1] The neutral pole-dipole moment equations are adopted on the stated finite-dimensional test-body model; no arbitrary-body stress-integral derivation is assumed. [[post-rpm-mpd-truncation]]

[F1] The moments $p,S$ and their units are those defined by the local body-moment convention. [[def-rpm-body-moments]]

[F2] Differentiating an observer SSC under the torque-free spin equation gives $c\gamma p^a=(E_n/c)U^a+S^{ab}D_\tau n_b$, where $\gamma=-g(n,U)/c$ and $E_n=-cg(p,n)$. [[lem-rpm-ssc-momentum-identity]]

[F3] For any two future timelike vectors, their Lorentzian pairing is strictly negative in the $(-,+,+,+)$ convention. [[lem-gr-observer-pairing-with-future-causal-vectors]]

## Proof

**Proof technique:** direct.

1.1 Under [A1] and [A2], the spin equation has the zero-torque form required in [F2]. Applying that lemma to the chosen observer $n$ yields the displayed general momentum–velocity identity. [given, A1, A2, F2]

2.1 For the Pirani choice in [A2], $n=U/c$; proper-time normalization gives $\gamma=1$, while $E_n=-g(p,U)=mc^2$ and $D_\tau n=a/c$. Positivity of $m$ follows from [F3]. Substituting these values in step 1.1 gives $cp=mcU+S a/c$; division by $c>0$ yields $p=mU+S a/c^2$. The second term is the hidden-momentum contribution relative to the Pirani centroid. [given, A2, F1, F3, step 1.1, algebra]

2.2 For the parallel-observer choice in [A2], $D_\tau n=0$, so step 1.1 reduces to $c\gamma p=(E_n/c)U$ and hence $p=E_n U/(c^2\gamma)$. Both $E_n$ and $\gamma$ are positive by [F3] because $p,n$ and $U/c$ are future timelike, so the proportionality factor is positive. [given, A2, F2, F3, step 1.1, algebra]

3.1 In the TD case in [A2], use $m=-g(p,U)/c^2>0$, whose positivity follows from [F3]. Then $n=p/\mu$ is future unit, $E_n=c\mu$, and $\gamma=-g(p,U)/(\mu c)=mc/\mu$. Differentiation gives $D_\tau n=(D_\tau p)/\mu-p(D_\tau\mu)/\mu^2$; the last term vanishes after contraction with $S$ by $S^{ab}p_b=0$. Substitution in step 1.1 and multiplication by $\mu$ give $mc^2p=\mu^2U+S D_\tau p$. This leaves a curvature-dependent derivative term, so proportionality does not follow from this identity alone. [given, A1, A2, F2, F3, step 1.1, algebra] ∎

## Remarks

The SSC selects a representative curve and the observer used to define the centroid. The momentum $p$, tangent $U$, and observer $n$ remain distinct model quantities; only the parallel-observer branch above forces their displayed proportionality.
