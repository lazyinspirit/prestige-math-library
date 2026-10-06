---
id: def-formal-character-of-a-finite-dimensional-weight-module
kind: definition
title: The formal character of a finite-dimensional weight module
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-completed-formal-character-ring-for-downward-cones, def-weight-and-weight-space-of-a-lie-algebra-representation, prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.1, printed p. 138 (χ_V = Σ_μ dim V[μ] e^μ ∈ Z[P])"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93 (Definition 13.1 and Example 13.2: the formal character ch V = Σ_μ m(μ)e(μ))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $V$ be a
finite-dimensional $\mathfrak g$-module, where $\mathfrak g$ is a
finite-dimensional complex semisimple Lie algebra with Cartan subalgebra
$\mathfrak h$, and let
$$V=\bigoplus_{\mu\in\mathfrak h^*}V_\mu$$
be its weight-space decomposition, with $V_\mu$ the weight space of
[[def-weight-and-weight-space-of-a-lie-algebra-representation]]
([[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]]).
The **formal character** of $V$ is
$$\operatorname{ch}V:=\sum_{\mu\in\mathfrak h^*}(\dim V_\mu)e^\mu\in\mathcal R,$$
the finite sum with integer coefficients taken in the completed formal
character ring $\mathcal R$ of
[[def-completed-formal-character-ring-for-downward-cones]]; equivalently,
$\operatorname{ch}V$ is the coefficient family $\mu\mapsto\dim V_\mu$ on
$\mathfrak h^*$, which has finite support by the cited decomposition.

We write
$$m_\lambda(\mu):=\dim L(\lambda)_\mu$$
for the multiplicity of $\mu$ as a weight of the finite-dimensional simple
module $L(\lambda)$ of highest weight $\lambda\in\Lambda^+$
([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]),
so that $\operatorname{ch}L(\lambda)=\sum_\mu m_\lambda(\mu)e^\mu$; the
coefficients $m_\lambda(\mu)$ are nonnegative integers and
$m_\lambda(\mu)=0$ for all but finitely many $\mu$.
