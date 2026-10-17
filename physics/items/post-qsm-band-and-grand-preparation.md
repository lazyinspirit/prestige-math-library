---
id: post-qsm-band-and-grand-preparation
kind: postulate
title: Energy-band and grand quantum preparations
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: Adopted finite-rank energy-band or commuting grand-canonical preparation for a nonzero model under the stated spectral, trace, and joint-moment conditions; infinite-rank band normalization and noncommuting energy-number ensembles are excluded.
deps:
- def-axiom-of-choice
- post-qsm-normal-measurement-state
- thm-qsm-finite-gibbs-variational
- thm-qsm-trace-gibbs-variational
- thm-tdmath-grand-response-covariance
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-qsm-normal-measurement-state: formulation-prerequisite
  thm-qsm-finite-gibbs-variational: mathematical-premise
  thm-qsm-trace-gibbs-variational: mathematical-premise
  thm-tdmath-grand-response-covariance: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
  - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 23, Canonical and Grand Canonical Formulations
    url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf
---

## Postulate

Fix the positive Boltzmann constant $k_B>0$ in J/K and adopt two preparation rules within the normal-state model of [[post-qsm-normal-measurement-state]].

**Energy-band preparation.** Let $H=H^*$ have spectral PVM $E_H$, and let $P=E_H(B)$ be a nonzero finite-rank projection for a specified Borel energy band $B\subseteq\mathbb R$. When the model declares preparation in this band without additional constraints, adopt the density $\rho=P/\operatorname{Tr}P$. This is a uniform preparation over the finite-dimensional range of $P$; it is not asserted for infinite-rank projections.

**Grand preparation.** Let $\mathcal H\ne\{0\}$ be a complex Hilbert space with a specified nonempty finite or countably infinite orthonormal basis $(u_j)_{j\in J}$, so its finite linear span is dense in $\mathcal H$. For each $\psi=\sum_{j\in J}c_ju_j\in\mathcal H$, define the diagonal self-adjoint energy and particle-number operators by
$$D(H)=\left\{\psi:\sum_j|E_jc_j|^2<\infty\right\},\quad H\psi=\sum_jE_jc_ju_j;\qquad D(N)=\left\{\psi:\sum_j|n_jc_j|^2<\infty\right\},\quad N\psi=\sum_jn_jc_ju_j,$$
where $E_j\in\mathbb R$ and $n_j\in\mathbb N_0$. For chemical potential $\mu\in\mathbb R$, define the diagonal sum $K_\mu=H-\mu N$ by
$$D(K_\mu)=\left\{\psi:\sum_j|(E_j-\mu n_j)c_j|^2<\infty\right\},\qquad K_\mu\psi=\sum_j(E_j-\mu n_j)c_ju_j.$$
This specifies the self-adjoint operator sum used in this postulate; on $D(H)\cap D(N)$ it agrees with the algebraic difference. Require $\inf_j(E_j-\mu n_j)>-\infty$. Fix $\beta>0$ in J$^{-1}$ and assume
$
0<\Xi(\beta,\mu)=\sum_{j\in J} e^{-\beta(E_j-\mu n_j)}<\infty.
$
Adopt the normal density $\rho_{\beta,\mu}=\Xi^{-1}e^{-\beta K_\mu}$. For response claims, also require the uniform joint-moment envelopes in [[thm-tdmath-grand-response-covariance]]. Here $E_j,\mu$ are in J, $n_j$ is dimensionless, $\beta=1/(k_BT)$ is in J$^{-1}$, and $\Xi$ is dimensionless.

These are adopted preparation assumptions, not consequences that a physical system is actually prepared in these states. They do not assert dynamical thermalization, an infinite-rank microcanonical state, or a grand ensemble for noncommuting $H,N$. The mathematical variational results to which they refer do not prove the physical postulate.

The self-adjointness assertions above are mathematical properties of the specified maximal diagonal domains. For a real sequence $(a_j)_{j\in J}$, let $M_a\psi=\sum_j a_jc_ju_j$ on $D(M_a)=\{\psi:\sum_j|a_jc_j|^2<\infty\}$. This domain contains the dense finite linear span. By definition, $\phi\in D(M_a^*)$ exactly when some $\eta\in\mathcal H$ satisfies $\langle M_a\psi,\phi\rangle=\langle\psi,\eta\rangle$ for every $\psi\in D(M_a)$, and then $M_a^*\phi=\eta$. Testing $\psi=u_j$ gives $\eta_j=a_j\phi_j$; hence $\eta\in\mathcal H$ forces $\sum_j|a_j\phi_j|^2<\infty$, so $\phi\in D(M_a)$. Conversely, if $\phi\in D(M_a)$, then for every $\psi\in D(M_a)$ the two inner products converge by Cauchy–Schwarz and satisfy $\langle M_a\psi,\phi\rangle=\langle\psi,M_a\phi\rangle$, since every $a_j$ is real. Thus $D(M_a^*)=D(M_a)$ and $M_a^*=M_a$. This applies to $a_j=E_j$, $a_j=n_j$, and $a_j=E_j-\mu n_j$.
