---
id: def-minuscule-weight
kind: definition
title: Minuscule weights
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
deps:
  - def-axiom-of-choice
  - def-integral-dominant-and-strictly-dominant-weights
  - def-coroot-of-a-lie-algebra-root
  - def-root-reflections-and-the-weyl-group-action
  - def-finite-weyl-root-system-lattice-and-chamber-conventions
  - thm-the-root-set-is-a-reduced-crystallographic-root-system
  - def-fundamental-weights
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§30.1--30.2, printed pp. 158--160: Definition 30.1 (minuscule weights, $\\langle\\omega,\\beta^\\vee\\rangle\\le 1$ for positive roots and the equivalence with $|\\langle\\omega,\\beta^\\vee\\rangle|\\le1$), Lemma 30.2 (pairings with the Weyl orbit), Lemma 30.3, Proposition 30.4 (the equivalences (1)--(3)) and Corollary 30.5 (orbit-sum character)."
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
simple Lie algebra, with Cartan subalgebra $\mathfrak h$, root system
$\Phi\subseteq\mathfrak h^*$, positive system $\Phi^+$, set of dominant
integral weights
$\Lambda^+=\{\lambda\in P:\langle\lambda,\alpha^\vee\rangle\ge0\ \forall\alpha\in\Phi^+\}$
and coroots $\alpha^\vee\in\mathfrak h$ of roots
$\alpha$ ([[def-integral-dominant-and-strictly-dominant-weights]],
[[def-coroot-of-a-lie-algebra-root]],
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]]). Here
$\langle\lambda,\alpha^\vee\rangle=\lambda(h_\alpha)$ is the natural pairing, and
the coroots of $\Phi$ form the dual root system
$\Phi^\vee=\{\alpha^\vee:\alpha\in\Phi\}$
([[thm-the-root-set-is-a-reduced-crystallographic-root-system]],
[[def-fundamental-weights]]).

A dominant integral weight $\omega\in\Lambda^+$ is **minuscule** if
$$\langle\omega,\beta^\vee\rangle\le1\qquad\text{for every }\beta\in\Phi^+.$$
Since the coroot of a negative root is the negative of the coroot of the
positive root, $\Phi^\vee=-\Phi^\vee$ at the level of the sets
$\{\beta^\vee\}$, and since $\omega$ is dominant integral the pairing
$\langle\omega,\beta^\vee\rangle$ is a nonnegative integer for
$\beta\in\Phi^+$; hence the displayed condition is equivalent to
$$|\langle\omega,\beta^\vee\rangle|\le1\qquad\text{for every }\beta\in\Phi.$$
The zero weight is minuscule, and the Weyl group acts on weights by the
reflection action $\lambda\mapsto w\lambda$
([[def-root-reflections-and-the-weyl-group-action]]).
