---
id: lem-admissible-cycle-around-a-compact-plane-set
kind: lemma
title: Admissible cycle around a compact plane set
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-chain-and-cycle, thm-winding-number-chain-laws, cor-goursat-rectangle-theorem, def-integration-and-index-of-complex-chain, cor-winding-number-is-the-normalized-argument-increment, thm-continuous-logarithms-exist-along-a-contour, cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace, lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set, def-oriented-complex-triangle-and-boundary]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Definition 5.24 and its cycle-existence remark, printed pp. 227–228"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 43–47"
      url: "https://arxiv.org/pdf/1211.3404"
verification:
  audited: 2026-09-22
---

## Statement

Let $K \subseteq U \subseteq \mathbb C$ with $K$ compact and $U$ open. Then:

1. there is a finite polygonal complex cycle $\Gamma$ in $U \setminus K$ — a
   finite chain of directed line segments
   ([[def-complex-chain-and-cycle]],
   [[def-oriented-complex-triangle-and-boundary]]) — such that
   $$n(\Gamma,z) = 1 \quad\text{for every } z \in K, \qquad n(\Gamma,z) = 0 \quad\text{for every } z \notin U;$$
2. there are two such cycles $\beta,\gamma$, both with index $1$ on $K$ and $0$
   outside $U$, whose traces are disjoint, and which are **nested**:
   $$n(\gamma,w) = 1 \quad\text{for every } w \in \beta^\ast, \qquad n(\beta,w) = 0 \quad\text{for every } w \in \gamma^\ast .$$

All indices are those of [[def-integration-and-index-of-complex-chain]]. The
construction is choice-free: the only selections are from the finitely many
cells of a grid, and no supremum over an infinite family is used.

## Facts & Assumptions

**Given:** A compact $K$ and an open $U$ with $K \subseteq U \subseteq \mathbb C$.

[L1] There is a compact Jordan set $J$, a finite union of closed rectangles of one axis-parallel grid with pairwise disjoint interiors, such that $K \subseteq \operatorname{int}J \subseteq J \subseteq U$; we write $\mathcal Q$ for its finitely many cells ([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L2] A finite sum of closed complex contours with integer coefficients is a complex chain; the trace of a sum is the union of the traces, a closed contour is a cycle, and the concatenation of the four sides $\ell_{ab},\ell_{bc},\ell_{cd},\ell_{da}$ of an axis-parallel rectangle is a closed contour whose trace is its boundary ([[def-complex-chain-and-cycle]], [[def-oriented-complex-triangle-and-boundary]], [[cor-goursat-rectangle-theorem]]).

[L3] For a chain $\Gamma$ and $p \notin \Gamma^\ast$, the index is $n(\Gamma,p) = \frac{1}{2\pi i}\int_\Gamma\frac{dz}{z-p}$; it is additive over sums of chains, and reversing a contour negates its index ([[def-integration-and-index-of-complex-chain]], [[thm-winding-number-chain-laws]]).

[L4] For a closed complex contour $\gamma$ and $p \notin \gamma^\ast$, a continuous argument $\theta$ of $\gamma - p$ exists along $\gamma$, and $n(\gamma,p) = (\theta(b)-\theta(a))/2\pi$ ([[thm-continuous-logarithms-exist-along-a-contour]], [[cor-winding-number-is-the-normalized-argument-increment]]).

[L5] The index of a cycle is continuous, hence locally constant, on the complement of its trace, and is constant on every connected component of that complement ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[L6] If $f$ is holomorphic on an open set containing a closed axis-parallel rectangle $R$, then $\int_{\partial R}f\,dz = 0$ for the positively oriented boundary $\partial R = \ell_{ab}*\ell_{bc}*\ell_{cd}*\ell_{da}$ ([[cor-goursat-rectangle-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Cell index inside. Let $Q$ be one of the closed grid rectangles, with $\partial Q$ its positively oriented boundary, and let $p \in Q^\circ$. Along each of the four sides of $Q$ the point $\zeta - p$ has a continuous argument: by [L4] a continuous argument $\theta$ of $\partial Q - p$ exists, and along a side the perpendicular foot from $p$ to the side's supporting line lies in the relative interior of the side, because both coordinates of $p$ lie strictly between the corresponding coordinates of $Q$; hence $\theta$ varies monotonically along each side by exactly the angle subtended at $p$ by that side, and the four such angles sum to $2\pi$ because the four triangles from $p$ to the sides tile $Q$ and their angles at $p$ cover one full turn. By [L4], $n(\partial Q,p) = (\theta_{\text{end}}-\theta_{\text{start}})/2\pi = 1$. [L2, L4, algebra]

1.2 Cell index outside. Let $Q$ be one of the closed grid rectangles and let $p \notin Q$. Then $p$ is strictly to the left of the left side, to the right of the right side, below the bottom side, or above the top side of $Q$; in each case the whole trace $\partial Q^\ast$ lies in an open half-plane bounded by a line through $p$, so a continuous argument of $\partial Q - p$ takes values in an interval of length $\pi$; its increment is a multiple of $2\pi$ by [L4], hence $0$, and $n(\partial Q,p) = 0$. [L2, L4, algebra]

1.3 Cell index outside by Goursat. For $Q$ and $p \notin Q$ the function $z \mapsto 1/(z-p)$ is holomorphic on an open set containing $Q$, so [L6] gives $\int_{\partial Q}dz/(z-p) = 0$ and hence $n(\partial Q,p) = 0$ again; the two computations agree and either may be used below. [L3, L6]

1.4 Choose $J$ and its cells $\mathcal Q$ as in [L1]. For each cell $Q$, write its four positively oriented directed side contours separately. Form $\Gamma$ directly as the finite list of those directed side occurrences that are not shared with another cell; a shared grid side has exactly two occurrences, with opposite directions, and neither is put in $\Gamma$. This is a chain under [L2], without identifying it with or deleting terms from the list $\sum_Q\partial Q$. Its trace is exactly the exposed grid sides, hence $\partial J$. It is a cycle: the sum of the endpoint-boundary functions of all four sides of every cell is zero, while each omitted opposite pair also has zero endpoint-boundary function, so the remaining endpoint counts cancel at every grid vertex. [L1, L2, algebra]

2.1 For $p$ lying on no grid line, $n(\Gamma,p) = \sum_{Q\in\mathcal Q}n(\partial Q,p) = 1$ if $p \in J^\circ$ and $= 0$ if $p \notin J$: the first equality holds because the omitted opposite pairs contribute zero to the index by [L3] and the index is additive, and the second because exactly one cell contains $p$ in its interior when $p \in J^\circ$, while no cell contains $p$ when $p \notin J$. [step 1.1, step 1.3, step 1.4, L3, algebra]

3.1 The index $n(\Gamma,\cdot)$ is continuous on $\mathbb C\setminus\partial J$ by [L5]; since the points on no grid line are dense in $\mathbb C\setminus\partial J$, [step 2.1] extends by continuity to $n(\Gamma,z) = 1$ for every $z \in J^\circ$ and $n(\Gamma,z) = 0$ for every $z \notin J$. [step 2.1, L5]

4.1 Claim 1 follows with this $\Gamma$: $K \subseteq \operatorname{int}J = J^\circ$ and $J \subseteq U$, so $n(\Gamma,z) = 1$ for $z \in K$; and $z \notin U$ implies $z \notin J$, so $n(\Gamma,z) = 0$; the trace of $\Gamma$ is $\partial J \subseteq J\setminus K \subseteq U\setminus K$. [step 3.1, L1]

4.2 For claim 2, choose a compact Jordan set $J_2$, again a finite union of grid rectangles, with $K \subseteq \operatorname{int}J_2 \subseteq J_2 \subseteq \operatorname{int}J$, and let $\beta$ be the cycle obtained from $J_2$ by the construction of [step 1.4]; then $\beta^\ast = \partial J_2 \subseteq \operatorname{int}J$ and $\gamma^\ast = \partial J$ are disjoint, and $n(\gamma,w) = 1$ for every $w \in \operatorname{int}J$, in particular for every $w \in \partial J_2 = \beta^\ast$. [step 1.4, step 3.1, L1]

5.1 With $\beta$ and $\gamma$ as in [step 4.2], also $n(\beta,w) = 0$ for every $w \in \gamma^\ast = \partial J$: indeed $w \notin J_2$ because $\partial J \cap J_2 = \varnothing$, and [step 3.1] applied to the Jordan set $J_2$ gives $n(\beta,w) = 0$ for $w \notin J_2$; moreover $n(\beta,z) = 1$ for $z \in K$ because $K \subseteq \operatorname{int}J_2$. [step 3.1, step 4.2]

6.1 Claims 1 and 2 are established by [step 4.1] and [step 5.1] together with [step 4.2]: the cycle $\Gamma$, and the nested pair $\beta,\gamma$, have the stated index properties and traces. [step 4.1, step 4.2, step 5.1] ∎

## Remarks

- **Why the index-one clause is the only one used to define $f(a)$.** Both [[def-holomorphic-functional-calculus]] and its homomorphism theorem need a cycle whose index is exactly one on the spectrum and zero outside the holomorphy domain; the nested pair of claim 2 is what makes the product rule for the calculus a single separated double integral rather than a limiting argument.

- **Two different cycles, two different constructions of the same index.** The argument-increment computation [step 1.1] and the Goursat computation [step 1.3] are independent, and both are used: the first identifies the index of a cell as one, the second as zero outside.
