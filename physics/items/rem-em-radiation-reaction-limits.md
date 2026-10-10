---
id: rem-em-radiation-reaction-limits
kind: remark
title: "Self-force, runaways and finite-size regularizations are not supplied by this page"
domain: physics
status: draft
origin: pipeline
dependency_level: 23
deps: [pthm-em-point-self-energy-divergence, pthm-em-coulomb-solution, def-em-weak-sources, pthm-em-larmor-nonrelativistic, pthm-em-lienard-emitted-power, def-countable-choice, post-em-distributional-vacuum-maxwell, thm-distributional-differentiation-is-continuous-and-commutes, thm-extreme-value-metric, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, thm-riemann-fubini-on-product-rectangles, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-monotonicity-of-the-integral]
dependency_roles:
  post-em-distributional-vacuum-maxwell: physical-assumption
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  pthm-em-coulomb-solution: physical-result
  pthm-em-point-self-energy-divergence: physical-result
  def-em-weak-sources: formulation-prerequisite
  pthm-em-larmor-nonrelativistic: physical-result
  pthm-em-lienard-emitted-power: physical-result
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Recorded scope limitations of the classical point-charge radiation model of this page: diverging electrostatic self-energy for stationary nonzero point charge, absence of a C1 sourced extension through an interior nonzero pure point-source worldline, undefined self-field/current products, prescribed-source-only emitted power per unit laboratory emission time without a supplied particle mechanical energy-loss law, and deferred finite-size and self-force dynamics. Excluded: any assertion, proof or measurement of radiation reaction, runaways, self-force dynamics or electromagnetic mass."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.4.5$ printed pp. 169-171: prescribed-source relativistic radiated power, (6.55)-(6.56), and motion examples; these computations supply no coupled self-force law. The limitation of this library is stated through its local items, not inferred from a source omission."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.5$ printed pp. 11.15-11.21 (PDF pp. 135-141): the report's reading record states explicitly that radiation reaction/self-force is not developed, so prescribed-source radiation must not be represented as a closed coupled point-particle dynamics theorem."
---

## Remarks

Every cited conditional result retains its stated hypotheses. In particular, the point-source and causal-wave comparisons below assume Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]) through their source suppliers; this qualification supplies no additional field or self-interaction model.

Record, with no speculative content, the limits of the radiation model built on this page.

(a) [Self-energy] For nonzero charge $q\ne0$, the truncated electrostatic field energy of the stationary idealized point charge diverges as the inner cutoff is removed ([[pthm-em-point-self-energy-divergence]]): the point source's own field carries infinite energy in this framework's idealization, and any finite-energy treatment of a point-like charge requires modifying the source or the field near the singularity, or an explicit cutoff, none of which is supplied here. The $q=0$ branch has zero field energy and no divergence.

(b) [Undefined self-interaction; nonzero and zero source branches] The framework's source model [[def-em-weak-sources]] pairs distributions against compact smooth tests and expressly excludes arbitrary products of distributions. An explicit nonzero singular self-field is the stationary Coulomb field of [[pthm-em-coulomb-solution]](d): for a constant trajectory $z(t)=x_0$ and $q\ne0$, $|E_q(x)|=|q|/(4\pi\varepsilon_0|x-x_0|^2)$ for $x\ne x_0$, which tends to infinity as $x\to x_0$. Its point-source charge distribution is supported on that stationary worldline. For $q=0$, the point-source pairings of [[def-em-weak-sources]](b) give $\rho_{\mathrm{pt}}=J_{\mathrm{pt}}=0$ for every admitted trajectory; in the stationary Coulomb source-field branch, $E_q=0$ off $x_0$ extends smoothly by zero, with $B=0$. Thus that zero-source branch has no self-field singularity and no nontrivial self-interaction. This states the source-field branch, not uniqueness among fields with an additional free field.

The moving pure point-source branch retains a precise general obstruction: if $q\ne0$, $z$ is an admitted $C^1$ proper trajectory, and locally integrable fields satisfy the distributional Maxwell equations with exactly its point-source pair ([[post-em-distributional-vacuum-maxwell]], [[def-em-weak-sources]](b),(e)), there is no $C^1$ extension of the electric field through any interior worldline event that still satisfies those sourced equations. To see this, suppose such an extension exists near $(x_0,t_0)=(z(t_0),t_0)$ and write $g=\operatorname{div}E$. Its distributional divergence is the regular distribution of this continuous $g$ by [[thm-distributional-differentiation-is-continuous-and-commutes]], under the stated Countable Choice convention. On a fixed compact box inside that neighbourhood, $|g|\le M<\infty$ by [[thm-extreme-value-metric]]. Choose a spatial bump $0\le\phi_r\le1$, equal to one on $B_{r/2}(x_0)$ and supported in $B_r(x_0)$; continuity of $z$ gives a time interval $J_r$ about $t_0$, inside that fixed box's time interval, with $z(J_r)\subset B_{r/2}(x_0)$. Choose a nonzero nonnegative smooth temporal bump $\eta_r$ supported in $J_r$, with $A_r=\int\eta_r\,dt>0$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]). The compact smooth test $\phi_r(x)\eta_r(t)$ has charge pairing $qA_r$, whereas its pairing with $g$ has modulus at most $M(2r)^3A_r$: the spatial support lies in the side-$2r$ cube, and iterated integration of the continuous compactly supported integrand gives this bound ([[thm-riemann-fubini-on-product-rectangles]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-monotonicity-of-the-integral]]). The sourced Gauss identity would therefore give $|q|/\varepsilon_0\le M(2r)^3$ for every sufficiently small $r>0$, an impossibility. This is a failure of a $C^1$ sourced extension, not a claim that every moving field norm blows up; the explicit norm blowup above is the stationary Coulomb case.

For nonzero singular self-fields, evaluating the field on its own point-source support or forming its product with the distributional source is not supplied by these postulates. A vanishing component of the current does not remedy the singular charge-field product. More generally the prescribed moving-source framework supplies no arbitrary distribution-product operation, regularization or self-force equation; its emitted-power results below do not introduce one. No moving-source norm blowup is inferred from the stationary example, and no equation of motion is derived in either charge branch.

(c) [What the emitted-power items do and do not give] [[pthm-em-larmor-nonrelativistic]] and [[pthm-em-lienard-emitted-power]] are prescribed-source statements: they compute the emitted power of a stipulated worldline at a stipulated emission event, per unit laboratory emission time, using the retarded-time conversion factor in their weighted far-zone flux definition. At an instantaneous-rest emission event that factor is one, so the power also equals the fixed-sphere flux specified in [[pthm-em-larmor-nonrelativistic]](e). These results determine no worldline evolution, no back-reaction and no mechanical energy-loss rate of the particle; identifying the emitted power with such a loss rate requires an additional mechanical balance assumption.

(d) [Deferred, not claimed] Extended-charge or finite-size regularizations of the self-field, the well-posedness of any self-force dynamics, runaway solutions and an electromagnetic derivation of rest mass are outside this page and are neither stated nor proved here. No experiment, measurement, statistical estimate or precision is reported or implied, and nothing in this remark is a refutation of any physical theory.
