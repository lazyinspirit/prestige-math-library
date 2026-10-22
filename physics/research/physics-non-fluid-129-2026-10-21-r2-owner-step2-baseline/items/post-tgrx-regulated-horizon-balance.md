---
id: post-tgrx-regulated-horizon-balance
kind: postulate
title: Nested finite regulator and gravitational balance premises
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 2
deps:
  - def-tgr-regulated-generalized-entropy
  - prop-tgrx-finite-modular-balance
dependency_roles:
  def-tgr-regulated-generalized-entropy: formulation-prerequisite
  prop-tgrx-finite-modular-balance: mathematical-premise
justified_by: []
aliases: []
physical_scope: >
  An adopted finite-dimensional model on one fixed smooth classical Lorentzian
  background and an ordered pair of compact spacelike sections of one smooth
  null horizon. The outside density matrices, faithful reference matrices,
  geometric entropy values, factor nesting, and balance relation are specified
  model data. The reference-subtracted entropy is finite at each named
  regulator. No continuum factorization, physical state evolution, area
  calibration, regulator independence, or generalized second law for
  semiclassical gravity is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: https://arxiv.org/pdf/1105.3445
      locator: "Complete article; §1, equations (1)–(3), §2.5, equations (38)–(43), and §2.8, equation (50). These sections motivate the finite balance and state the additional continuum and renormalization qualifications; they do not prove this adopted finite model premise."
    - title: "H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf
      locator: "Complete 149-page PDF; §10.9, printed pp. 146–147, equation (10.113), for the generalized-entropy summary and its stated backreaction limitation. The summary is context, not a proof of the adopted balance."
    - title: "John Watrous, The Theory of Quantum Information, complete author-hosted book manuscript"
      url: https://jhwatrous.github.io/TQI.pdf
      locator: "Complete 598-page manuscript; §5.2.3, Theorem 5.35 and its proof, for finite-dimensional data processing under partial trace, used through the separate mathematical supplier."
---

## Postulate

Fix a smooth time-oriented Lorentzian four-manifold $(M,g)$ of signature $(-,+,+,+)$, with its metric-selected connection $\nabla$. Let $\mathcal H\subset M$ be a smooth embedded null hypersurface, meaning the induced metric on each $T_p\mathcal H$ has a one-dimensional radical. Supply a smooth nonzero future-directed null generator field $k$ in this radical with $\nabla_k k=0$. Choose nonempty compact smooth embedded spacelike two-surfaces $\Sigma_1,\Sigma_2\subset\mathcal H$ transverse to $k$, so $T_p\Sigma_i\oplus\mathbb Rk_p=T_p\mathcal H$ for every $p\in\Sigma_i$. Their supplied family labels $t_1<t_2$ order the cuts; these geometric data use the horizon-section and affine-generator conventions of [[def-tgr-regulated-generalized-entropy]], but no global event-horizon property is assumed.

At a named finite regulator, take nonzero finite-dimensional complex inner-product spaces $H_2,H_E$ as the model outside Hilbert factors at $\Sigma_2$ and the additional region between the cuts, respectively, and use the ordered factorization $H_1=H_2\otimes H_E$ at $\Sigma_1$. Supply dimensionless density operators $\rho_1,\sigma_1$ on $H_1$ and $\rho_2,\sigma_2$ on $H_2$ such that $\rho_2=\operatorname{Tr}_E\rho_1$ and $\sigma_2=\operatorname{Tr}_E\sigma_1$. Require both $\sigma_1$ and $\sigma_2$ to be positive definite; the $\rho_i$ may have zero eigenvalues.

For each $i=1,2$, define $K_i:=-\log\sigma_i$ by finite-dimensional spectral calculus and $s(\tau):=-\operatorname{tr}(\tau\log\tau)$ in nats, with $0\log0:=0$. Set $\Delta_i:=\operatorname{tr}((\rho_i-\sigma_i)K_i)$. Supply finite real geometric-entropy data $a_i$ in nats and adopt the balance premise

$$a_2-a_1=\Delta_1-\Delta_2.$$

With the physical Boltzmann constant $k_B>0$ in SI units $\mathrm{J\,K^{-1}}$, define the model's reference-subtracted finite generalized entropy by

$$S_{\mathrm{gen},i}:=k_B\bigl[a_i+s(\rho_i)-s(\sigma_i)\bigr].$$

For a named sequence of regulators, impose these finite-dimensional premises term by term under one fixed subtraction and finite-normalization scheme. This adoption supplies no convergence claim. The scalar $a_i$ is model data; it is not thereby identified with an area term or with a calibrated gravitational entropy.

## Postulate references

[[def-tgr-regulated-generalized-entropy]]

[[prop-tgrx-finite-modular-balance]]

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445)

[H. S. Reall, Part III Black Holes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

[John Watrous, The Theory of Quantum Information](https://jhwatrous.github.io/TQI.pdf)

## Remarks

The matrices and balance relation are adopted finite-regulator premises. In particular, the balance equation is not derived from classical area increase, stationary area calibration, a semiclassical Einstein equation, or Wall's continuum proof. The finite-regulator definition in [[def-tgr-regulated-generalized-entropy]] supplies fixed-scheme and unit conventions but does not itself impose this reference subtraction or balance. The present $S_{\mathrm{gen},i}$ is the expressly adopted reference-subtracted model value; $a_i$ is not thereby identified with $S_{\mathrm{grav},i}/k_B$ or with an area term. The quantity $K_i=-\log\sigma_i$ is dimensionless modular data, not a physical Hamiltonian.
