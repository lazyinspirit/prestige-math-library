---
id: post-td-entropy-maximum
kind: postulate
title: Equilibrium as an attained global entropy maximum
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Global stable equilibrium of an explicitly specified isolated macroscopic compound under its stated total-coordinate constraints and permitted exchanges; no claim about local maxima or dynamical relaxation is included.
deps: [def-finite-sum, def-max-min, post-td-concave-fundamental-entropy, def-td-isolated-compound-feasible-set, def-td-thermal-contact-constraints, post-td-bulk-additivity]
dependency_roles:
  def-finite-sum: mathematical-premise
  def-max-min: mathematical-premise
  post-td-concave-fundamental-entropy: physical-assumption
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-td-thermal-contact-constraints: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.3–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.9
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 6
---

## Postulate

Let $\mathcal F$ be the explicitly declared feasible endpoint set of an isolated compound whose constituents are independent separated macroscopic systems, as defined in [[def-td-isolated-compound-feasible-set]]. For this route, adopt the physical criterion that any endpoint tuple the model classifies as a stable equilibrium under these fixed totals, retained partitions, and permitted exchanges satisfies

$$S_{\mathrm{tot}}(x^{\mathrm{eq}})=\max_{x\in\mathcal F}S_{\mathrm{tot}}(x),\qquad S_{\mathrm{tot}}(x):=\sum_{i=1}^{m}S_{c_i}(x_i),$$

Here $\max$ means that $x^{\mathrm{eq}}\in\mathcal F$ and $S_{\mathrm{tot}}(x^{\mathrm{eq}})\ge S_{\mathrm{tot}}(x)$ for every $x\in\mathcal F$, using maximum in the sense of [[def-max-min]]. The finite sum is as in [[def-finite-sum]], and the summands are those of the separated macroscopic constituents under [[post-td-concave-fundamental-entropy]]. Whenever the stable-equilibrium label is used, attainment is assumed: at least one maximizing endpoint lies in $\mathcal F$. If $\mathcal F$ is empty or the entropy supremum is not attained, this item supplies no equilibrium state.

“Global” refers to every endpoint in this exact $\mathcal F$, not just nearby states, states reachable by a restricted short-time dynamics, or states on a selected branch. A local maximum that is not global, or a long-lived preparation trapped by kinetic barriers, is not declared stable equilibrium by this postulate. No uniqueness or relaxation dynamics is assumed.
