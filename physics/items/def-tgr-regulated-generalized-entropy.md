---
id: def-tgr-regulated-generalized-entropy
kind: definition
title: Specified regulated generalized entropy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 1
deps:
  - def-tgr-finite-cutoff-outside-entropy
  - lem-tgr-renormalization-finite-part-ambiguity
  - pthm-tgr-area-entropy-calibration
  - def-tgr-framework-units
  - def-tgr-horizon-screen-family
  - def-countable-choice
dependency_roles:
  def-tgr-finite-cutoff-outside-entropy: mathematical-premise
  lem-tgr-renormalization-finite-part-ambiguity: mathematical-premise
  pthm-tgr-area-entropy-calibration: formulation-prerequisite
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-horizon-screen-family: formulation-prerequisite
  def-countable-choice: formulation-prerequisite
justified_by: []
aliases: []
physical_scope: >
  A model definition on one fixed smooth classical Lorentzian background and
  one specified compact spacelike section of a smooth null hypersurface. It
  assigns finite generalized-entropy sums to named finite tensor
  factorizations and assigns a renormalized value only when that exact
  sequence converges finitely in its declared scheme. It does not assert that
  the factors approximate a continuum field algebra, that a different
  regulator or counterterm choice gives the same value, that matter changes
  the background geometry, or that the quantity is monotone along a physical
  process.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
      locator: "Complete 149-page PDF; §§10.8–10.9, printed pp. 146–147, equations (10.110)–(10.113) and the backreaction qualification: the stationary area coefficient, the generalized-entropy sum, and the limits of the summary."
    - title: "Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices, Physical Review D 85, 104049 (2012), arXiv:1105.3445v6"
      url: "https://arxiv.org/pdf/1105.3445"
      locator: "Complete article; §1, equations (1)–(3), and §2.1–2.8, especially §§2.5–2.8: outside-entropy divergence, specified renormalization, and the distinct hypotheses of the conditional GSL proof."
---

## Definition

Fix a smooth, oriented, time-oriented Lorentzian four-manifold $(M,g,N)$ of signature $(-,+,+,+)$, its metric-selected connection, and one smooth embedded null hypersurface $\mathcal H\subset M$. Use the null-hypersurface convention in the mathematical definition of the smooth null screen family. Supply a smooth, nonzero, future null generator field $k$ tangent to $\mathcal H$ with $\nabla_k k=0$. Choose a nonempty compact smooth embedded spacelike two-surface $\Sigma\subset\mathcal H$ transverse to $k$, meaning $T_p\Sigma\oplus\mathbb Rk_p=T_p\mathcal H$ at every $p\in\Sigma$. If $i:\Sigma\hookrightarrow M$ is inclusion, the induced metric $h=i^*g|_{T\Sigma}$ is positive definite. In any local surface chart $(y^1,y^2)$, define its area density by $\mu_h=\sqrt{\det(h_{AB})}\,|dy^1dy^2|$ and set $A_\Sigma=\int_\Sigma\mu_h$. Admissible model data require $0<A_\Sigma<\infty$.

A named finite-regulator sequence consists of labels $(\Lambda_n)_{n\ge1}$, nonzero finite-dimensional complex inner-product spaces $H_{\mathrm{in},n}$ and $H_{\mathrm{out},n}$, and a density operator $\rho_n$ on the ordered tensor product $H_{\mathrm{in},n}\otimes H_{\mathrm{out},n}$ for each $n$. The physical Boltzmann constant $k_B>0$ has units $\mathrm{J\,K^{-1}}$, while $c>0$ and $\hbar>0$ have units $\mathrm{m\,s^{-1}}$ and $\mathrm{J\,s}$, respectively. Define

$$S_{\mathrm{out},n}:=S_{\mathrm{out}}(\rho_n;H_{\mathrm{in},n},H_{\mathrm{out},n}),\qquad S_{\mathrm{gen},n}[\Sigma]:=S_{\mathrm{grav},n}[\Sigma]+S_{\mathrm{out},n}.$$

Here $S_{\mathrm{out},n}$ is the finite spectral entropy of the partial-trace state specified by the finite-regulator outside-entropy definition, using natural logarithms and $0\log 0:=0$. The assigned geometric value $S_{\mathrm{grav},n}[\Sigma]$ is finite and has units $\mathrm{J\,K^{-1}}$; its terms, including every chosen local counterterm and finite normalization condition, are fixed as part of the declared scheme. Any dimensional regulator label has its units recorded with that scheme.

On the optional area-term branch, one allowed summand of $S_{\mathrm{grav},n}[\Sigma]$ is

$$\frac{k_Bc^3A_\Sigma}{4G_{\Lambda_n}\hbar},$$

where each $G_{\Lambda_n}>0$ is specified model data with the units of Newton's constant, $\mathrm{m^3\,kg^{-1}\,s^{-2}}$. The relation of $G_{\Lambda_n}$ to the reference $G_N$ is also declared model data. The renormalized generalized entropy $S_{\mathrm{gen}}^{\mathrm{ren}}[\Sigma]$ is defined exactly when the sequence $(S_{\mathrm{gen},n}[\Sigma])_{n\ge1}$ converges to a finite real value in the declared scheme; its value is that limit. If the sequence has no finite limit, this definition assigns no renormalized value. The limit belongs only to the named sequence and scheme.

With the physical $k_B$, both terms in each sum have units $\mathrm{J\,K^{-1}}$, and $A_\Sigma$ is in $\mathrm{m^2}$.

## Definition references

[[def-tgr-framework-units]]

[[def-tgr-horizon-screen-family]]

[[def-tgr-finite-cutoff-outside-entropy]]

[[lem-tgr-renormalization-finite-part-ambiguity]]

[[pthm-tgr-area-entropy-calibration]]

[[def-countable-choice]]

[H. S. Reall, Part III Black Holes, University of Cambridge lecture notes (2024)](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf)

[Aron C. Wall, A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices](https://arxiv.org/pdf/1105.3445)

## Remarks

The finite-matrix outside-entropy definition establishes that each $S_{\mathrm{out},n}$ is a finite real number; it does not establish convergence as $n\to\infty$. The finite-part ambiguity result shows why the subtraction and its finite normalization condition must be fixed: changing a subtraction by a constant changes the resulting finite limit by that constant.

The conditional area-calibration theorem gives the coefficient $k_Bc^3/(4G_N\hbar)$ only on its selected strict subextremal stationary Kerr–Newman family, with its explicit $\mathrm{AC}_\omega$ premise, adopted reversible-heat identification, and reduced-temperature model. It does not calibrate a regulator-dependent $G_{\Lambda_n}$ on an arbitrary background. In this definition any such $G_{\Lambda_n}$ is specified model input; when it is identified with $G_N$, the theorem's full hypotheses still apply.

Here $\mathrm{AC}_\omega$ means that every sequence $(X_n)_{n\ge1}$ of nonempty sets has a choice function $f$ with $f(n)\in X_n$, as in [[def-countable-choice]]. This axiom is part of the conditional calibration interface only; this finite-regulator definition selects no such sequence of objects.

No state evolution, Hawking emission, change of the classical metric caused by matter, or generalized-second-law inequality is part of this definition.
