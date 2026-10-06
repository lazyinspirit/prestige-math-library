---
id: prop-characters-of-finite-dimensional-modules-are-weyl-invariant
kind: proposition
title: Characters of finite-dimensional modules are Weyl-invariant
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-formal-character-of-a-finite-dimensional-weight-module, def-weyl-alternation-operator, lem-simple-reflections-preserve-weight-multiplicities, prop-weyl-length-equals-positive-root-inversion-number]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.1, printed p. 138 (the character χ_V = Σ_μ dim V[μ]e^μ of a finite dimensional representation)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93 (W-invariance of ch V(λ) for λ ∈ Λ+)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $V$ be a
finite-dimensional $\mathfrak g$-module and let $W$ act on the
finite-support elements of the completed character ring $\mathcal R$ by
$w\cdot e^\mu=e^{w\mu}$ as in [[def-weyl-alternation-operator]]. Then
$$w\cdot\operatorname{ch}V=\operatorname{ch}V\qquad(w\in W),$$
and equivalently the weight multiplicities of $V$ satisfy
$\dim V_{w\mu}=\dim V_\mu$ for all $w\in W$ and $\mu\in\mathfrak h^*$, so
that $\operatorname{ch}V=\sum_\mu(\dim V_{w\mu})e^\mu$. In particular the
formal character of every finite-dimensional simple module is $W$-invariant.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional $\mathfrak g$-module $V$
with finite weight-space decomposition, its formal character, the Weyl group
$W$ acting on finite-support elements of $\mathcal R$, and elements
$w\in W$, $\mu\in\mathfrak h^*$.

[A1] The Axiom of Choice is assumed; it enters through the published
weight-multiplicity supplier of [F3] ([[def-axiom-of-choice]]).

[F1] $\operatorname{ch}V=\sum_\mu(\dim V_\mu)e^\mu$ is a finite-support
element of $\mathcal R$, the sum running over the finitely many weights of $V$
([[def-formal-character-of-a-finite-dimensional-weight-module]]).

[F2] On finite-support elements the action of $w$ is
$w\cdot\sum_\mu c_\mu e^\mu=\sum_\mu c_\mu e^{w\mu}$
([[def-weyl-alternation-operator]]).

[F3] Every weight multiplicity of $V$ is invariant under every simple
reflection: $\dim V_{s_i\mu}=\dim V_\mu$ for all $\mu$
([[lem-simple-reflections-preserve-weight-multiplicities]]), and every
$w\in W$ is a product of simple reflections
([[prop-weyl-length-equals-positive-root-inversion-number]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the character is the finite sum $\operatorname{ch}V=\sum_\mu(\dim V_\mu)e^\mu$, so [F2] gives $w\cdot\operatorname{ch}V=\sum_\mu(\dim V_\mu)e^{w\mu}$ for every $w\in W$. [F1, F2, algebra, A1]

2.1 Reindexing the finite sum of step 1.1 by $\nu=w\mu$, so that $\mu=w^{-1}\nu$, gives $w\cdot\operatorname{ch}V=\sum_\nu(\dim V_{w^{-1}\nu})e^\nu$; since $w^{-1}$ is a product of simple reflections by [F3] and each simple reflection preserves the multiplicities by [F3], applying the invariance one reflection at a time yields $\dim V_{w^{-1}\nu}=\dim V_\nu$ for every $\nu\in\mathfrak h^*$. [F3, step 1.1, algebra]

3.1 Substituting into step 2.1 gives $w\cdot\operatorname{ch}V=\sum_\nu(\dim V_\nu)e^\nu=\operatorname{ch}V$, which is the first assertion; comparing the coefficient of $e^\nu$ in the two displayed expressions for $w\cdot\operatorname{ch}V$ in steps 1.1 and 2.1 gives $\dim V_\nu=\dim V_{w^{-1}\nu}$, that is, $\dim V_{w\mu}=\dim V_\mu$ after replacing $w$ by $w^{-1}$, and then $\operatorname{ch}V=\sum_\mu(\dim V_{w\mu})e^\mu$; applying the result to a finite-dimensional simple module $V=L(\lambda)$ gives the final assertion. [step 1.1, step 2.1] ∎ 