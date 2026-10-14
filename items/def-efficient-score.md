---
id: def-efficient-score
kind: definition
title: Efficient score and efficient information
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 9
deps: [def-axiom-of-choice, def-countable-choice, def-mean-zero-square-integrable-space, def-nuisance-tangent-space, def-orthogonality-and-orthogonal-complement, def-score-and-fisher-information, thm-orthogonal-decomposition-by-a-closed-subspace, thm-tangent-space-is-closed-linear-subspace]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A. W. van der Vaart, Semiparametric Statistics, Lecture Notes in Mathematics 1781, Lectures 2–3 (Springer, 2002)"
      url: "https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf"
    - title: "Edward H. Kennedy, Semiparametric theory, arXiv:1709.06418v1 (2017)"
      url: "https://arxiv.org/pdf/1709.06418"
---

## Definition

Let $\theta\in\mathbb R^p$, $p\ge1$ finite, be a parameter of interest at a law $P$. Assume its score vector $S_\theta=(S_{\theta,1},\ldots,S_{\theta,p})^T$ has components in $L^2_0(P)$; under a dominated differentiable parametric submodel these are the coordinate log-density scores of [[def-score-and-fisher-information]]. Let $\mathcal T_\eta\subseteq L^2_0(P)$ be the closed nuisance tangent space of [[def-nuisance-tangent-space]]. The ambient $L^2_0(P)$ is as in [[def-mean-zero-square-integrable-space]]. The score-density convention uses the Axiom of Choice, while Hilbert projection uses Countable Choice; both dependencies are retained separately.

The Hilbert decomposition [[thm-orthogonal-decomposition-by-a-closed-subspace]] defines $\Pi_{\mathcal T_\eta}f$ as the unique $g\in\mathcal T_\eta$ with $f-g\in\mathcal T_\eta^\perp$, where orthogonality and $\mathcal T_\eta^\perp$ have the meanings in [[def-orthogonality-and-orthogonal-complement]]. The **efficient score vector** and **efficient information matrix** are

$$S_{\mathrm{eff}}=S_\theta-\Pi_{\mathcal T_\eta}S_\theta,\qquad I_{\mathrm{eff}}=E_P[S_{\mathrm{eff}}S_{\mathrm{eff}}^T],$$

where $\Pi_{\mathcal T_\eta}$ is the Hilbert-space orthogonal projection applied coordinatewise. This projection exists and is unique because $\mathcal T_\eta$ is a closed linear subspace; the projection theorem used by [[thm-orthogonal-decomposition-by-a-closed-subspace]] assumes Countable Choice ([[def-countable-choice]]).

## Remarks

The formula does not assert nonsingularity. If $I_{\mathrm{eff}}$ is singular, the inverse-information expression is not defined. The finite-dimensional canonical-gradient formula requires the full score-space decomposition and nonsingularity as additional hypotheses, established in the accompanying theorem on this page.
