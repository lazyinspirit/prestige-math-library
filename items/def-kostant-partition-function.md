---
id: def-kostant-partition-function
kind: definition
title: The Kostant partition function
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
deps: [def-completed-formal-character-ring-for-downward-cones, lem-geometric-series-invertibility-in-the-completed-character-ring, def-height-of-a-root-and-highest-root, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-finite-weyl-root-system-lattice-and-chamber-conventions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.3, printed p. 142, Exercise 26.7(i) (Σ_{β∈Q+} p(β)e^{−β} = ∏_{α>0}(1−e^{−α})^{−1})"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. V §6, printed pp. 320, 322 (the element K = Σ_{γ∈Q+}P(γ)e^{−γ} and its use in K e^{−δ} d = 1)"
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§13.1, printed p. 93, Definition 13.3 (the Kostant function p(λ) = #{(k_α) : −λ = Σ k_αα})"
    - title: "B. Weber, Weyl Character Formula II: Formulas of Weyl and Kostant (Penn Math 651, March 2013)"
      url: "https://www2.math.upenn.edu/~brweber/Courses/2013/Math651/Notes/L17_WeylDimII.pdf"
      locator: "pp. 1--2 (the partition function P and the alternating formula)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $\Phi^+$ be a positive system for the finite root system of
[[def-finite-weyl-root-system-lattice-and-chamber-conventions]] with simple
roots $\alpha_1,\dots,\alpha_r$ and positive cone $Q_+$. For
$\beta\in\mathfrak h^*$ define $P(\beta)$ to be the number of families
$(n_\alpha)_{\alpha\in\Phi^+}\in\mathbb Z_{\ge0}^{\Phi^+}$ with
$$\sum_{\alpha\in\Phi^+}n_\alpha\alpha=\beta.$$
This number is finite: writing an element of $Q$ in the simple-root basis as
$\beta=\sum_{i=1}^rm_i\alpha_i$ by
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]],
the weight $\beta$ can be represented only if every $m_i\ge0$, and then each
$n_\alpha$ is bounded by the height
$\operatorname{ht}(\beta)=\sum_im_i$ extending the root height of
[[def-height-of-a-root-and-highest-root]] to $Q$ by the same coordinate sum, because every positive root has
height at least $1$; so only finitely many families occur, and
$P(\beta)=0$ for $\beta\notin Q_+$ while $P(0)=1$ (the all-zero family, empty when $\Phi^+=\varnothing$).

Equivalently, $P(\beta)$ is the coefficient of $e^{-\beta}$ in the finite
product of geometric series
$\prod_{\alpha\in\Phi^+}\sum_{k\ge0}e^{-k\alpha}
=\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}$ of
[[lem-geometric-series-invertibility-in-the-completed-character-ring]]: a
family $(n_\alpha)$ with $\sum_\alpha n_\alpha\alpha=\beta$ contributes one
monomial $e^{-\beta}$, and a family representing $\beta$ has $n_\alpha\le
\operatorname{ht}(\beta)$ and hence finite support, so
$$\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}=\sum_{\beta\in Q_+}P(\beta)e^{-\beta}$$
in the completed character ring $\mathcal R$ of
[[def-completed-formal-character-ring-for-downward-cones]].
