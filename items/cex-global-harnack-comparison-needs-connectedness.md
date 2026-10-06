---
id: cex-global-harnack-comparison-needs-connectedness
kind: counterexample
title: "The global Harnack comparison needs connectedness"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [thm-harnack-inequality-for-nonnegative-weak-solutions, lem-finite-interior-ball-chain-propagates-weak-harnack-bounds, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-connected-space, def-essential-supremum-with-respect-to-a-measure, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Corollary 1: the connectedness of Omega is a standing hypothesis of the Harnack comparison, printed pp. 1-2 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 1, printed p. 211: local Harnack on interior balls; the disconnected-domain witness and finite-chain obstruction are verified here"
verification:
  precheck: pass
---

## Statement refuted

**Statement refuted.** For every open set $\Omega\subseteq\mathbb R^n$ (connected or not) and every nonnegative weak solution $u$ of $-\Delta u=0$ on $\Omega$, one has $\sup_{\Omega}u\le C\inf_{\Omega}u$ with a constant $C$ depending only on $\Omega$.

**Counterexample.** Let $\Omega=B_1(0)\cup B_1(3e_1)\subset\mathbb R^2$, a disconnected open set, and define $u=0$ on $B_1(0)$ and $u=1$ on $B_1(3e_1)$. Then $u$ is constant on each connected component, hence a weak solution of $-\Delta u=0$ on $\Omega$ ([[def-local-weak-solution-for-a-divergence-form-operator]]), and it is nonnegative. But $\sup_\Omega u=1$ and $\inf_\Omega u=0$, so no finite constant $C$ satisfies $\sup\le C\inf$. The local estimate [[thm-harnack-inequality-for-nonnegative-weak-solutions]] applies on each ball without a connectedness assumption; the two independent component values show why connectedness is necessary for comparisons across components. The cited [[lem-finite-interior-ball-chain-propagates-weak-harnack-bounds]] gives comparisons on compact connected positive-measure subsets when $n\ge3$; it is not invoked for this two-dimensional witness and does not assert a whole-domain bound from connectedness alone.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the open set $\Omega=B_1(0)\cup B_1(3e_1)\subset\mathbb R^2$ with $e_1=(1,0)$; and the function $u$ equal to $0$ on $B_1(0)$ and to $1$ on $B_1(3e_1)$.

[F1] The set $\Omega$ is open as a union of open balls, and its two connected components $B_1(0)$ and $B_1(3e_1)$ are disjoint because $|3e_1|=3>2$, so $\Omega$ is disconnected ([[def-connected-space]]).

[F2] Locally constant $H^1$ classes are weak solutions: if $u\in H^1(\Omega)$ is constant on each connected component of an open set $\Omega$, then $u$ is locally constant on $\Omega$, so $\nabla u=0$ a.e. and $\int_\Omega\nabla u\cdot\nabla v\,dx=0$ for every $v\in H^1_0(\Omega)$, which is the local weak formulation of $-\Delta u=0$ with $a^{ij}=\delta^{ij}$, $b=c=0$ ([[def-local-weak-solution-for-a-divergence-form-operator]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F3] The extrema of $u$ on $\Omega$: since $u$ takes only the values $0$ and $1$, $\sup_\Omega u=1$ and $\inf_\Omega u=0$ ([[def-essential-supremum-with-respect-to-a-measure]]).

[F4] Local Harnack applies in dimensions $n\ge2$ on balls whose doubled balls are compactly contained in the domain ([[thm-harnack-inequality-for-nonnegative-weak-solutions]]). The cited finite-chain lemma assumes $n\ge3$ and compares extrema on compact connected positive-measure subsets of a connected open domain ([[lem-finite-interior-ball-chain-propagates-weak-harnack-bounds]]); that lemma is not applied to the present $n=2$ domain.

## Counterexample

1.1 The function is a nonnegative weak solution. By [F1] the components of $\Omega$ are the two disjoint balls; $u$ is constant on each of them, hence locally constant. It is in $H^1(\Omega)$ because it is bounded on the finite-measure set $\Omega$ and its distributional gradient is zero; by [F2] it is a nonnegative weak solution of $-\Delta u=0$ on $\Omega$. [given, F1, F2]

2.1 The comparison fails. By [F3], $\sup_\Omega u=1$ and $\inf_\Omega u=0$; hence for every finite constant $C$ one has $\sup_\Omega u=1>0=C\cdot0=C\inf_\Omega u$, so no finite constant satisfies the claimed comparison, however the two components are normalized. [step 1.1, F3]

3.1 The geometric obstruction to a chain is direct. Every ball contained in $\Omega$ lies in one component: if it met both balls, the segment between such points would lie in that ball but would cross the gap outside $\Omega$. Overlapping balls must therefore lie in the same component, and induction along any finite overlap chain prevents it from joining the two components. Local Harnack in [F4] remains valid on interior balls in either component. The finite-chain lemma is not used in dimension two, and connectedness alone is not asserted to yield a comparison over all of $\Omega$. The contradiction in step 2.1 is already complete. [step 1.1, step 2.1, F1, F4] ∎
