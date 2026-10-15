---
id: def-tdmath-van-hove-sequence
kind: definition
title: Van Hove sequence of bounded regions
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-countable-choice, def-euclidean-inner-product, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-borel-sigma-algebra, thm-borel-sets-are-lebesgue-measurable, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 2, 4, and 7, printed pp.172–195 / PDF pp.2–25: increasing cubes and boundary conditions. The arbitrary-shape extension below uses the explicit boundary-layer condition in the local proof."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Assume countable choice, fix an integer $d\geq1$, and use the Euclidean norm $\|x\|_2=\sqrt{\langle x,x\rangle}$ from [[def-euclidean-inner-product]] and the $d$-dimensional Lebesgue measure $\lambda_d$ from [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]. Countable choice ensures the stated Lebesgue set function is a measure and every Borel set is Lebesgue measurable ([[def-countable-choice]], [[thm-borel-sets-are-lebesgue-measurable]]). For $S\subseteq\mathbb R^d$, define $\operatorname{dist}_2(x,S)=\inf_{y\in S}\|x-y\|_2$, with $\operatorname{dist}_2(x,\varnothing)=+\infty$. The topological boundary of $\Omega\subseteq\mathbb R^d$ is
$$\partial\Omega=\{x\in\mathbb R^d:\text{every }\epsilon>0\text{ has }B_\epsilon(x)\cap\Omega\ne\varnothing\text{ and }B_\epsilon(x)\setminus\Omega\ne\varnothing\},\qquad B_\epsilon(x)=\{y:\|y-x\|_2<\epsilon\}.$$
For a Lebesgue-measurable set $A$, write $|A|=\lambda_d(A)$. For a bounded set $\Omega$ and $R>0$, define its two-sided boundary layer
$$\partial_R\Omega=\{x\in\mathbb R^d:\operatorname{dist}_2(x,\partial\Omega)\leq R\},$$
where $\operatorname{dist}_2$ is the Euclidean distance just defined. A van Hove sequence is a sequence of bounded Lebesgue-measurable sets $(\Omega_k)_{k\in\mathbb N}$ with $0<|\Omega_k|<\infty$, $|\Omega_k|\to\infty$, and
$$\frac{|\partial_R\Omega_k|}{|\Omega_k|}\longrightarrow0\qquad\text{for every fixed }R>0.$$
The boundary is closed, distance to a nonempty set is continuous, and for bounded $\Omega$ its $R$-neighborhood is bounded; hence each $\partial_R\Omega$ is Borel and has finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).
The condition controls both inner and outer boundary neighborhoods. It does not impose connectedness, a bounded aspect ratio, smooth boundaries, or a periodic identification.
