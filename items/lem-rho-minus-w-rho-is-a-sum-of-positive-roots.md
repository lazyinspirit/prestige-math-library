---
id: lem-rho-minus-w-rho-is-a-sum-of-positive-roots
kind: lemma
title: The difference of the Weyl vector from its reflections is a sum of positive roots
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-finite-weyl-root-system-lattice-and-chamber-conventions, def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system, lem-finite-weyl-positive-roots-and-simple-reflections, lem-finite-weyl-strong-exchange-and-deletion, prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system, prop-weyl-length-equals-positive-root-inversion-number, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.2, printed p. 139 (s_i permutes the positive roots other than α_i and sends α_i to −α_i)"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. II §6, printed pp. 168--170 (Propositions 2.69--2.70 and Lemma 2.71: δ−s_αδ and reduced-word multiplication)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $\Phi$ be the root system with positive system $\Phi^+$, simple roots
$\alpha_1,\dots,\alpha_r$, Weyl group $W$ and Weyl vector
$\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$
([[def-finite-weyl-root-system-lattice-and-chamber-conventions]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]],
[[def-root-reflections-and-the-weyl-group-action]]). For every $w\in W$,
$$\rho-w\rho=\sum_{\substack{\alpha\in\Phi^+\\ w^{-1}\alpha\in\Phi^-}}\alpha,$$
the sum running over the positive roots whose image under $w^{-1}$ is a
negative root. In particular $\rho-w\rho\in Q_+$: it is a nonnegative integral
combination of the simple roots.

## Facts & Assumptions

**Given:** The finite root-system, positivity, length and lattice conventions of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]], a positive system $\Phi^+$ with simple roots $\alpha_i$, the Weyl group $W$, the Weyl vector $\rho$, and an element $w\in W$.

[F3] The reflection $s_\alpha$ acts by $s_\alpha(\lambda)=\lambda-\langle\lambda,\alpha^\vee\rangle\alpha$ and the Weyl vector is $\rho=\tfrac12\sum_{\alpha\in\Phi^+}\alpha$ ([[def-root-reflections-and-the-weyl-group-action]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F4] Every positive root is a nonnegative integral combination of the simple roots, so $\Phi^+\subseteq Q_+$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-finite-weyl-root-system-lattice-and-chamber-conventions]]).

## Proof

**Proof technique:** direct.

1.1 Put $S=\{\alpha\in\Phi^+:w^{-1}\alpha\in\Phi^-\}$. Since $w$ permutes the roots, $w\Phi^+$ contains $\alpha$ for each $\alpha\in\Phi^+\setminus S$ and $-\alpha$ for each $\alpha\in S$, each exactly once: these assertions are respectively equivalent to $w^{-1}\alpha>0$ and $w^{-1}(-\alpha)>0$. Therefore $2w\rho=\sum_{\alpha\in\Phi^+\setminus S}\alpha-\sum_{\alpha\in S}\alpha$. [F3, given, algebra]

2.1 Subtracting the expression in step 1.1 from $2\rho=\sum_{\alpha\in\Phi^+}\alpha$ gives $\rho-w\rho=\sum_{\alpha\in S}\alpha$. Every summand belongs to $Q_+$ by [F4], proving the claimed cone inclusion. For $w=1$ or the empty root system the sum is empty and the same calculation gives zero. [F3, F4, step 1.1, algebra] ∎
