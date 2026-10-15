---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: ex-metropolis-hastings-rejected-self-transition
kind: example
title: Rejection creates a self-transition
status: published
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

Assume AC. On the finite discrete space $\mathsf X=\{0,1\}$, let
$\pi(0)=2/3$, $\pi(1)=1/3$, and let the proposal deterministically switch to
the other state. Then $\alpha(0,1)=1/2$ and $\alpha(1,0)=1$, so
$$P=\begin{pmatrix}1/2&1/2\\1&0\end{pmatrix}.$$
The rejected proposal from state $0$ is recorded as a self-transition of
probability $1/2$.

## Verification

**Given:** AC, the two-state target and the deterministic switch proposal in the
Example.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has
a choice function.

[F1] [[def-standard-borel-space]] and [[def-polish-space]]: a finite discrete
space is standard Borel because its discrete metric is complete and the space
is separable.

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
measurable family of probability measures with mass one at every current
state. Each row's nonnegative singleton masses sum to one, so it defines a
probability measure by finite addition; all event evaluations are measurable
because the finite discrete state space has the full power-set sigma-algebra.

[F6] [[lem-metropolis-hastings-density-ratio]]: a common-density version
$\alpha_{\rm cd}$ is $\min\{1,\pi(y)Q(y,x)/[\pi(x)Q(x,y)]\}$ when the
forward mass is positive and is chosen as $1$ when that mass is zero.

[F7] [[alg-metropolis-hastings-kernel]]: the rule adds rejected proposal mass
to the current state's self-transition.

[F8] [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]: the
constructed kernel is reversible and its target is invariant.

1.1 The target masses sum to one, and the discrete metric makes the finite state space standard Borel. [F1, F4, given]

1.2 The proposal switches state with probability one in each row, so each row defines a probability measure. Every event-evaluation function is measurable on the finite discrete space, hence [F3] and [F5] give a probability kernel. By [F2], the displayed target and proposal masses are densities with respect to counting measure. [F2, F3, F5, given]

2.1 The reverse proposal masses are both one. Formula [F6] gives $\alpha(0,1)=\min\{1,(1/3)/(2/3)\}=1/2$ and $\alpha(1,0)=\min\{1,(2/3)/(1/3)\}=1$. Thus the accepted mass from state $0$ to $1$ is $1/2$, leaving rejected mass $1/2$. [A1, F6, step 1.2, algebra]

3.1 Applying the rejection rule [F7] gives $P(0,0)=1/2$, $P(0,1)=1/2$, $P(1,0)=1$, and $P(1,1)=0$. The off-diagonal target flows are both $1/3$, so detailed balance holds and [F8] gives invariance. [F7, F8, step 2.1, algebra] ∎
