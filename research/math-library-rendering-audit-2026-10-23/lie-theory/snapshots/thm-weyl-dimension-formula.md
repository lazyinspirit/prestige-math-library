---
id: thm-weyl-dimension-formula
kind: theorem
title: The Weyl dimension formula
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
justified_by: []
aliases: []
deps: [def-axiom-of-choice, lem-regularized-evaluation-of-the-weyl-character-quotient-at-one, lem-positive-root-pairings-of-a-dominant-integral-weight, def-finite-weyl-root-system-lattice-and-chamber-conventions, def-weyl-vector-rho-for-a-chosen-positive-system, def-function-limit]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.5, printed pp. 142--143, Proposition 26.8 (Weyl dimension formula, obtained by the t → 0 specialization of the character quotient)"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed p. 323, Theorem 5.84 (Weyl dimension formula, proof by applying ∏∂_α and evaluating at H = 0)"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 2--4, Theorem 1.3 (Weyl dimension formula, proof by factoring Q(t(Λ+δ))/Q(tδ) and applying L'Hôpital's rule)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every dominant
integral weight $\lambda\in\Lambda^+$,
$$\dim L(\lambda)=\prod_{\alpha\in\Phi^+}\frac{(\lambda+\rho,\alpha)}{(\rho,\alpha)}=\prod_{\alpha\in\Phi^+}\frac{\langle\lambda+\rho,\alpha^\vee\rangle}{\langle\rho,\alpha^\vee\rangle};$$
the denominators are nonzero because $\langle\rho,\alpha^\vee\rangle>0$ for
every positive root
([[lem-positive-root-pairings-of-a-dominant-integral-weight]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight
$\lambda\in\Lambda^+$, the finite-dimensional simple module $L(\lambda)$ with
its multiplicities, the Weyl vector $\rho$, the positive system $\Phi^+$ and
the form $(\ ,\ )$ on $E=\operatorname{span}_{\mathbb R}\Phi$.

[A1] The Axiom of Choice is assumed; it enters through the regularized
evaluation of [F1] and its suppliers ([[def-axiom-of-choice]]).

[F1] For every $t>0$ one has
$\sum_\mu m_\lambda(\mu)e^{2t(\mu,\rho)}=\prod_{\alpha\in\Phi^+}\bigl(e^{t(\lambda+\rho,\alpha)}-e^{-t(\lambda+\rho,\alpha)}\bigr)\big/\prod_{\alpha\in\Phi^+}\bigl(e^{t(\rho,\alpha)}-e^{-t(\rho,\alpha)}\bigr)$;
the left side is a finite sum of exponentials, continuous at $t=0$ with value
$\sum_\mu m_\lambda(\mu)=\dim L(\lambda)$, and the right side has the finite
limit $\prod_{\alpha\in\Phi^+}(\lambda+\rho,\alpha)/(\rho,\alpha)$ as
$t\to0+$ ([[lem-regularized-evaluation-of-the-weyl-character-quotient-at-one]]).

[F2] A function defined for $t>0$ has at most one limit as $t\to0+$
([[def-function-limit]]).

[F3] For every $\nu\in E$ and every root $\alpha$ one has
$(\nu,\alpha)=\frac{(\alpha,\alpha)}{2}\langle\nu,\alpha^\vee\rangle$, because
$\alpha^\vee=2\alpha/(\alpha,\alpha)$ after identifying $E$ with its dual by
the form; moreover $\langle\rho,\alpha^\vee\rangle>0$ and
$\langle\lambda+\rho,\alpha^\vee\rangle>0$ for every positive root $\alpha$
([[def-finite-weyl-root-system-lattice-and-chamber-conventions]],
[[lem-positive-root-pairings-of-a-dominant-integral-weight]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the identity of the two functions of $t>0$ holds for every $t>0$, the left side extends continuously to $t=0$ with value $\dim L(\lambda)$, and the right side has the finite limit $\prod_{\alpha\in\Phi^+}(\lambda+\rho,\alpha)/(\rho,\alpha)$ as $t\to0+$; since limits are unique by [F2] and a continuous extension is the limit of its values, $\dim L(\lambda)=\prod_{\alpha\in\Phi^+}(\lambda+\rho,\alpha)/(\rho,\alpha)$. [F1, F2, algebra, A1]

2.1 By [F3] each factor of the product satisfies $(\lambda+\rho,\alpha)/(\rho,\alpha)=\langle\lambda+\rho,\alpha^\vee\rangle/\langle\rho,\alpha^\vee\rangle$, the denominators being nonzero, so the product equals $\prod_{\alpha\in\Phi^+}\langle\lambda+\rho,\alpha^\vee\rangle/\langle\rho,\alpha^\vee\rangle$, which is the second form of the formula. [F3, step 1.1, algebra] ∎ 