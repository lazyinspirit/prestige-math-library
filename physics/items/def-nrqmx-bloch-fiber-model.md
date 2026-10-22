---
id: def-nrqmx-bloch-fiber-model
kind: definition
domain: mathematics
library: mathematics
title: Lattice Bloch transform and band projectors
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - def-countable-choice
dependency_roles:
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by:
  - lem-nrqmx-bloch-fiber-model-properties
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: János K. Asbóth, László Oroszlány, and András Pályi, A Short Course on Topological Insulators
      url: https://arxiv.org/pdf/1509.02295
      locator: Chapter 2, §§2.1.1 and 2.3.4; Chapter 6, §6.1.1.
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
      locator: Chapter 2, §§2.1.1, 2.3.1, and 2.3.4.
---

## Definition

Let $d,r\ge1$ be integers, let $S\subset\mathbb Z^d$ be finite with $S=-S$, and let $T_\delta\in M_r(\mathbb C)$ satisfy $T_{-\delta}=T_\delta^*$ for each $\delta\in S$. Give $\mathbb C^r$ the inner product $\langle v,w\rangle_{\mathbb C^r}=\sum_{a=1}^r\overline{v_a}w_a$, conjugate-linear in the first variable, and set $\mathcal H=\ell^2(\mathbb Z^d;\mathbb C^r)$ with

$$\langle\psi,\phi\rangle_{\mathcal H}:=\sum_{n\in\mathbb Z^d}\langle\psi_n,\phi_n\rangle_{\mathbb C^r}.$$

Let $\mathbb T^d_{2\pi}:=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized Haar measure $(2\pi)^{-d}dk$ and orientation $dk_1\wedge\cdots\wedge dk_d$, and set $\mathcal K=L^2(\mathbb T^d_{2\pi};\mathbb C^r)$ with

$$\langle f,g\rangle_{\mathcal K}:=(2\pi)^{-d}\int_{\mathbb T^d_{2\pi}}\sum_{a=1}^r\overline{f_a(k)}g_a(k)\,dk.$$

Thus the target pairing, like the sequence-space pairing, is conjugate-linear in its first variable. On finitely supported $\psi\in\mathcal H$ define

$$ (H_0\psi)_n=\sum_{\delta\in S}T_\delta\psi_{n-\delta}. $$

On finitely supported sequences define

$$ (\mathcal F_0\psi)(k)=\sum_{n\in\mathbb Z^d}\psi_n e^{-ik\cdot n},\qquad h(k)=\sum_{\delta\in S}T_\delta e^{-ik\cdot\delta}. $$

Assume Countable Choice for the unitary-extension assertion. The **finite-range lattice Bloch model** is the bounded extension $H$ of $H_0$, together with the unitary extension $\mathcal F:\mathcal H\to\mathcal K$ of $\mathcal F_0$ and its finite-matrix fibers $h(k)$. An **isolated band cluster of rank $m$** is a fixed nonempty consecutive block of $m$ eigenvalues, counted with multiplicity, of the Hermitian matrix $h(k)$ whose distance from the complementary eigenvalues is bounded below by a single $\gamma>0$ for all $k$; if the block is the full spectrum, its projector is $I_r$. The **band projector** $P(k)$ is the orthogonal projection onto the sum of the eigenspaces in that block. For $d=2$, $\mathbb T^2_{2\pi}$ is the oriented Brillouin torus used on this page.

This definition concerns finite-range hopping on a discrete lattice. It does not identify that model with a continuum periodic Schrödinger operator.

## Definition references

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

[[thm-parseval-equivalences-for-a-complete-orthonormal-family]]

[[def-countable-choice]]
