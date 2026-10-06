---
id: thm-weak-parabolic-maximum-principle
kind: theorem
title: Weak parabolic maximum principle
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-parabolic-cylinder-and-parabolic-boundary
  - lem-strict-subsolution-perturbation-for-the-heat-operator
  - thm-of-archimedean
  - def-euclidean-inner-product
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-compactness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed pp. 334–335, Theorem 10.6 and its proof"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed pp. 55–56 and Corollary 6.16, p. 158"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2.5, printed pp. 112–113, Theorem 3.2.3"
---

## Statement

Let $Q=\Omega\times(0,T]$ be a parabolic cylinder
([[def-parabolic-cylinder-and-parabolic-boundary]]) with $\Omega$ bounded, and
let $u\in C^{2,1}(\overline Q)$ satisfy $u_t-\Delta u\le0$ in $Q$. Then
$$\max_{\overline Q}u=\max_{\partial_pQ}u.$$

## Facts & Assumptions

**Given:** A parabolic cylinder $Q=\Omega\times(0,T]$ with $\Omega$ bounded and
$u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u\le0$ in $Q$.

[F1] $\overline Q$ is compact, $\partial_pQ$ is a closed subset of it, and the
class $C^{2,1}(\overline Q)$ is the cylinder convention of
[[def-parabolic-cylinder-and-parabolic-boundary]].

[F2] For every $\varepsilon>0$ the function $v=u+\varepsilon|x|^2$ is a strict
subsolution, and the maximum of any strict subsolution is attained on
$\partial_pQ$
([[lem-strict-subsolution-perturbation-for-the-heat-operator]]); the Euclidean
squares $|x|^2$ are those of [[def-euclidean-inner-product]].

[F3] Continuous functions on the nonempty compact sets $\overline Q$ and
$\partial_pQ$ attain their maxima
([[thm-extreme-value-metric]], [[thm-heine-borel-rn]],
[[def-metric-compactness]]), and the Archimedean property lets a quantity
bounded by $C+\varepsilon R^2$ for every $\varepsilon>0$ be bounded by $C$
([[thm-of-archimedean]]).

## Proof

**Given:** A bounded parabolic cylinder $Q$ and $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u\le0$ in $Q$.

1.1 By [F1] and [F3] the maxima $\max_{\overline Q}u$ and $\max_{\partial_pQ}u$ exist, and $R^2:=\sup_{x\in\overline\Omega}|x|^2$ is finite because $\Omega$ is bounded; also $u\le\max_{\overline Q}u$ and, for every $x\in\overline\Omega$, $|x|^2\le R^2$. [F1, F3, given]

2.1 For every $\varepsilon>0$ put $v:=u+\varepsilon|x|^2$; by [F2] $v$ is a strict subsolution, so $\max_{\overline Q}v=\max_{\partial_pQ}v$, and $\max_{\overline Q}u\le\max_{\overline Q}v=\max_{\partial_pQ}v\le\max_{\partial_pQ}u+\varepsilon R^2$ by step 1.1; letting $\varepsilon\downarrow0$ and using the Archimedean property [F3] gives $\max_{\overline Q}u\le\max_{\partial_pQ}u$. [step 1.1, F2, F3, given]

3.1 Since $\partial_pQ\subseteq\overline Q$, the reverse inequality $\max_{\partial_pQ}u\le\max_{\overline Q}u$ is immediate, so the two maxima coincide and the weak maximum principle holds. [step 2.1, given] ∎ 