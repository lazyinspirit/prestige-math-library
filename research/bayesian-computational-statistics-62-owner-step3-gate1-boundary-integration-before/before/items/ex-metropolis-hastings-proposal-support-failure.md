---
id: ex-metropolis-hastings-proposal-support-failure
kind: example
title: A proposal with disconnected support
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - def-polish-space
  - def-counting-measure
  - prop-counting-measure-is-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-transition-matrix-and-n-step-transition-probabilities
  - alg-metropolis-hastings-kernel
  - lem-metropolis-hastings-density-ratio
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Assume AC. On the finite discrete space $\mathsf X=\{0,1,2\}$, let $\pi$ be
uniform and propose deterministically $0\mapsto1$, $1\mapsto0$, and
$2\mapsto2$. The proposal has no transitions between $\{0,1\}$ and $\{2\}$.
Every proposal with positive mass has a reverse proposal of the same mass, so
the Metropolis acceptance probability is one and $P=Q$. The target $\pi$ is
invariant, but the distinct probability $\delta_2$ is also invariant; the
chain cannot move from $0$ or $1$ to $2$.

## Verification

**Given:** AC, the uniform target and the deterministic proposal in the Example.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has
a choice function.

[F1] [[def-standard-borel-space]] and [[def-polish-space]]: the discrete metric
on a finite set is complete and separable, every subset is open, and the Borel
sigma-algebra is the full power set; the definition therefore makes it standard
Borel.

[F2] [[def-counting-measure]] and [[prop-counting-measure-is-a-measure]]:
counting measure is a positive measure and assigns mass one to each singleton.
Since this state space is finite, its total counting measure is finite and the
one-set cover makes it sigma-finite by
[[def-finite-sigma-finite-and-semifinite-measures]]. Thus the target and
proposal masses are densities with respect to counting measure.

[F3] [[def-transition-matrix-and-n-step-transition-probabilities]]: the entry
$Q(x,y)$ is $Q(x,\{y\})$.

[F4] [[def-probability-measure]]: a probability measure has total mass one.

[F5] [[def-measure-kernel-and-probability-kernel]]: a probability kernel is a
measurable family of probability measures with mass one at each current
state. Each row's nonnegative singleton masses sum to one, so it defines a
probability measure by finite addition; all event evaluations are measurable
because the finite discrete state space has the full power-set sigma-algebra.

[F6] [[lem-metropolis-hastings-density-ratio]]: a common-density version
$\alpha_{\rm cd}$ is $\min\{1,\pi(y)Q(y,x)/[\pi(x)Q(x,y)]\}$ when the
forward mass is positive and is chosen as $1$ when that mass is zero.

[F7] [[alg-metropolis-hastings-kernel]]: the algorithm accepts using the
common-flow ratio and retains rejected proposals at the current state.

[F8] [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]: the
constructed kernel leaves its target invariant.

1.1 The target masses sum to one, and the discrete metric makes the finite state space standard Borel. [F1, F4, given]

1.2 Every row of the proposal matrix has one entry equal to one and the rest zero, so it defines a probability measure. Every event-evaluation function is measurable on the finite discrete space, hence [F3] and [F5] give a probability kernel; [F2] identifies its entries and target masses with counting-measure densities. [F2, F3, F5, given]

2.1 The positive proposal transitions are $0\leftrightarrow1$ and $2\to2$. In each case the forward and reverse proposal masses and target masses agree, so [F6] gives acceptance probability one. [A1, F6, step 1.2, algebra]

3.1 Hence [F7] gives $$P=Q=\begin{pmatrix}0&1&0\\1&0&0\\0&0&1\end{pmatrix}.$$ The matrix is a permutation matrix, so its column sums are one and the uniform target is invariant; [F8] gives the same conclusion from reversibility. The point mass $\delta_2$ is invariant because state $2$ never leaves. The two invariant probabilities differ, and no transition path connects $\{0,1\}$ to $\{2\}$. [F7, F8, step 2.1, algebra] ∎
