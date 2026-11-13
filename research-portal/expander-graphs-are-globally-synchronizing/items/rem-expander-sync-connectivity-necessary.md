---
id: rem-expander-sync-connectivity-necessary
title: Connectivity is necessary but not sufficient for synchrony
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
  - math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - def-expander-sync-graph-notation
  - def-expander-sync-kuramoto-system
  - def-expander-sync-global-synchrony
  - def-expander-prereq-phase-volume
  - def-expander-prereq-phasor-calculus
  - ex-expander-sync-trees-cycles
  - rem-expander-sync-connectivity-threshold
dependency_roles:
  math:def-countable-choice: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null: mathematical-premise
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-kuramoto-system: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  ex-expander-sync-trees-cycles: mathematical-premise
  rem-expander-sync-connectivity-threshold: mathematical-premise
formulation_deps:
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
  - def-expander-sync-graph-notation
  - def-expander-sync-kuramoto-system
  - def-expander-sync-global-synchrony
  - def-expander-prereq-phase-volume
  - ex-expander-sync-trees-cycles
  - rem-expander-sync-connectivity-threshold
argument_deps:
  - math:def-countable-choice
  - math:def-connected-graph-and-connected-component
  - math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - def-expander-sync-graph-notation
  - def-expander-sync-kuramoto-system
  - def-expander-sync-global-synchrony
  - def-expander-prereq-phase-volume
  - def-expander-prereq-phasor-calculus
  - ex-expander-sync-trees-cycles
  - rem-expander-sync-connectivity-threshold
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 4, random graph discussion; p. 8, Remark 1.8; p. 9, Section 1.5;
        p. 31, paragraph following the connectivity threshold
      statement: Connectivity is necessary but not sufficient for global synchrony;
        the article describes its Erdős–Rényi result as reaching the asymptotic
        connectivity threshold.
      hypotheses: Finite graphs under the homogeneous Kuramoto model and the article's
        almost-everywhere definition of global synchrony; the threshold
        comparison concerns the independent-edge Erdős–Rényi model.
      reading_limits: The cited passages were inspected in text extracted from the
        original PDF. This reference attributes the article's claims and is not
        used as proof of the deductions below; no independent bibliography
        review is claimed.
dependency_level: 8
---

## Statement

Assume countable choice. A finite undirected graph with nonempty vertex set, allowing self-loops, can be globally synchronizing only if it is connected. Connectivity is not sufficient: an unweighted cycle of length greater than five is connected but is not globally synchronizing.

Here connected means that every two vertices are joined by a path. Globally synchronizing means that, outside a set of normalized phase volume zero, the homogeneous Kuramoto trajectory in the frame rotating at its common intrinsic frequency converges to a state whose phases are all equal modulo $2\pi$. For the independent-edge graph $G(n,p_n)$ with $p_n=(\log n+c_n)/n\in[0,1]$ eventually and $c_n\to-\infty$, the probability of global synchrony tends to zero. The article describes its result above $\log n/n$ as asymptotically optimal in relation to this connectivity threshold.

## Facts & Assumptions

**Given:** Countable choice and a finite undirected graph $G=(V,E)$ with nonempty $V$, symmetric adjacency matrix $A$, and the homogeneous Kuramoto dynamics.

**Goal:** Prove the connectivity necessity, give a connected counterexample to sufficiency, and establish the stated lower-threshold consequence.

[F1] Connected components partition $V$ into nonempty sets, with no edges between distinct components; a graph is connected exactly when it has one component ([[math:def-connected-graph-and-connected-component]], [[def-expander-sync-graph-notation]]).

[F2] In the rotating frame the equations are $\dot\phi_x=-\sum_{y\in V}A_{xy}\sin(\phi_x-\phi_y)$, and the trajectories are defined for all time. The adjacency matrix is symmetric and loop terms vanish ([[def-expander-sync-kuramoto-system]], [[def-expander-sync-graph-notation]]).

[F3] Normalized phase volume is the completed normalized Lebesgue measure on the representative box $(-\pi,\pi]^V$. Under countable choice every affine hyperplane with nonzero normal in $\mathbb R^V$, and every subset of it, is Lebesgue null ([[def-expander-prereq-phase-volume]], [[math:thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]], [[math:def-countable-choice]]).

[F4] An unweighted cycle of length greater than five is not globally synchronizing ([[ex-expander-sync-trees-cycles]]).

[F5] For the stated independent-edge graph law, if $c_n\to-\infty$, the probability of connectedness tends to zero ([[rem-expander-sync-connectivity-threshold]]).

[F6] Finite sums of differentiable functions of a real variable may be differentiated termwise. For real $u$, the phasor $z(u)=\cos u+i\sin u$ satisfies $z(-u)=\overline{z(u)}$ ([[def-expander-prereq-phasor-calculus]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G$ is disconnected and choose distinct components $C,D$, of sizes $a,b>0$. For a rotating-frame trajectory, the circle-valued component sums $S_C=\sum_{x\in C}\phi_x$ and $S_D=\sum_{x\in D}\phi_x$ are constant modulo $2\pi$. Indeed, [F6] permits termwise differentiation in local lifts, and taking imaginary parts of $z(-u)=\overline{z(u)}$ gives $\sin(-u)=-\sin u$. Thus the derivative of either sum is zero: terms for distinct vertices in the same component cancel in pairs by symmetry and oddness of sine, loop terms vanish, and there are no edges leaving the component. Hence $bS_C-aS_D$ is constant modulo $2\pi$. [F1, F2, F6]

1.2 A cycle of length greater than five is connected: successive edges along the cycle join any pair of its vertices. By [F4] it is nevertheless not globally synchronizing. This proves that connectivity is not sufficient. [F4]

2.1 If the trajectory converges to a fully synchronized state with common phase $s$, continuity of addition on the phase circle gives $S_C\to as$ and $S_D\to bs$. Thus the constant $bS_C-aS_D$ must be zero modulo $2\pi$. For initial representatives $u\in(-\pi,\pi]^V$, this necessary condition is $b\sum_{x\in C}u_x-a\sum_{x\in D}u_x=2\pi k$ for some $k\in\mathbb Z$. Each equation defines an affine hyperplane with nonzero normal. Their countable union is Lebesgue null, so by [F3] the set of initial phases satisfying the condition is phase-null. Consequently almost no initial state can converge to a fully synchronized state, and the disconnected graph is not globally synchronizing. [F1, F3, step 1.1]

3.1 For each $n$, step 2.1 makes the event that $G(n,p_n)$ is globally synchronizing a subset of the event that it is connected. There are finitely many graphs on the labeled vertex set, so these events are measurable. Their probabilities therefore satisfy $0\le\mathbb P(G(n,p_n)\text{ globally synchronizing})\le\mathbb P(G(n,p_n)\text{ connected})$. The right side tends to zero by [F5], proving the lower-threshold assertion. [F5, step 2.1] ∎

## Source notes

The necessity, failure of sufficiency, and threshold comparison are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF page 8, Remark 1.8 (the cycle example), pages 4 and 31 (the connectivity threshold comparison), and page 9, Section 1.5 (related discussion). The article states its upper result for fixed positive distance above the leading threshold; the lower-threshold deduction above does not establish a matching result throughout the critical window. The article is cited for attribution, not as proof of the deductions.
