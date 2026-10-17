---
id: post-qsm-band-and-grand-preparation
kind: postulate
title: Energy-band and grand quantum preparations
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: Adopted finite-rank energy-band or commuting grand-canonical preparation under the stated spectral, trace,
  and joint-moment conditions; infinite-rank band normalization and noncommuting energy-number ensembles are excluded.
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
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
  - title: Mehran Kardar, Statistical Mechanics I, MIT OpenCourseWare, Lecture 23, Canonical and Grand Canonical Formulations
    url: https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf
---

## Postulate

Adopt two preparation rules within the normal-state model of [[post-qsm-normal-measurement-state]].

**Energy-band preparation.** Let $H=H^*$ have spectral PVM $E_H$, and let $P=E_H(B)$ be a nonzero finite-rank projection for a specified Borel energy band $B\subseteq\mathbb R$. When the model declares preparation in this band without additional constraints, adopt the density $\rho=P/\operatorname{Tr}P$. This is a uniform preparation over the finite-dimensional range of $P$; it is not asserted for infinite-rank projections.

**Grand preparation.** Let $H$ be the Hilbert space of a finite or countable model with a specified common orthonormal eigenbasis $u_j$ for the self-adjoint energy operator $H$ and the dimensionless particle-number operator $N$: $Hu_j=E_ju_j$, $Nu_j=n_ju_j$. Let $K_{\beta,\mu}=H-\mu N$ be self-adjoint on its declared domain, bounded below, and assume
$
\Xi(\beta,\mu)=\sum_j e^{-\beta(E_j-\mu n_j)}<\infty.
$
Adopt the normal density $\rho_{\beta,\mu}=\Xi^{-1}e^{-\beta(H-\mu N)}$. For response claims, also require the uniform joint-moment envelopes in [[thm-tdmath-grand-response-covariance]]. Here $E_j,\mu$ are in J, $n_j$ is dimensionless, $\beta=1/(k_BT)$ is in J$^{-1}$, and $\Xi$ is dimensionless.

These are adopted preparation assumptions, not consequences that a physical system is actually prepared in these states. They do not assert dynamical thermalization, an infinite-rank microcanonical state, or a grand ensemble for noncommuting $H,N$. The mathematical variational results to which they refer do not prove the physical postulate.
