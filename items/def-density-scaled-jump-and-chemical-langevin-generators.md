---
id: def-density-scaled-jump-and-chemical-langevin-generators
kind: definition
title: "Density-scaled reaction jump and chemical Langevin generators"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-reaction-network-propensity-system-and-generator
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§IV, conditions for the Langevin approximation and the CLE update, journal pp. 1720–1721 / PDF pp. 5–6."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.2, tau-leap to Chemical Langevin Equation, PDF pp. 3–4."
    - title: "David F. Anderson, Desmond J. Higham, and Yu Sun, Complexity of multilevel Monte Carlo tau-leaping"
      url: "https://strathprints.strath.ac.uk/51740/1/Anderson_etal_SIAM_2014_Complexity_of_multilevel_monte_carlo_tau_leaping.pdf"
      locator: "§2, density scaling of reaction jumps and rates, PDF pp. 2–4 (journal pp. 3107–3109)."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Fix finitely many stoichiometric vectors $\nu_1,\ldots,\nu_R\in\mathbb Z^d$,
an open set $U\subseteq\mathbb R^d$, nonnegative propensity functions
$a_j:U\to[0,\infty)$, and a volume parameter $V\ge1$. At a density state
$x\in U$ for which every positive-rate destination $x+\nu_j/V$ lies in $U$,
the density-scaled jump model has jump $\nu_j/V$ at rate $Va_j(x)$. For a
twice differentiable test function $\phi$ defined at those destinations, its
generator is
$$\mathcal L_V\phi(x)=V\sum_{j:a_j(x)>0} a_j(x)\bigl(\phi(x+\nu_j/V)-\phi(x)\bigr).$$

Put $b(x)=\sum_j\nu_j a_j(x)$ and
$C(x)=\sum_j a_j(x)\nu_j\nu_j^{\mathsf T}$. The associated
**chemical Langevin diffusion generator** is
$$\mathcal G_V\phi(x)=b(x)\cdot\nabla\phi(x) +\frac{1}{2V}\sum_{j=1}^R a_j(x)\, \nu_j^{\mathsf T}D^2\phi(x)\nu_j.$$
A Markov diffusion with this generator is called the chemical Langevin
model here. The definition does not assert existence, uniqueness, positivity,
or approximation accuracy for either process. In an SDE representation the
drift is $b$ and the covariance matrix per unit time is $C/V$.
