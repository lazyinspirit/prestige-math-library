---
id: ex-random-walk-metropolis-hastings
kind: example
title: A three-state random-walk Metropolis kernel
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

Assume AC. Let $\mathsf X=\{0,1,2\}$ with arithmetic modulo $3$, target masses
$\pi(0)=1/2$, $\pi(1)=1/3$, $\pi(2)=1/6$, and proposal probabilities
$Q(x,x+1)=Q(x,x-1)=1/2$. This is a random walk on the three-cycle, and its
proposal matrix is symmetric. The common-density Metropolis–Hastings rule gives
$$P=\begin{pmatrix}1/2&1/3&1/6\\1/2&1/4&1/4\\1/2&1/2&0\end{pmatrix}.$$
Its detailed-balance flows are $\pi(0)P(0,1)=\pi(1)P(1,0)=1/6$,
$\pi(0)P(0,2)=\pi(2)P(2,0)=1/12$, and
$\pi(1)P(1,2)=\pi(2)P(2,1)=1/12$; hence $\pi$ is invariant by
[[thm-metropolis-hastings-kernel-is-reversible-and-invariant]].

## Verification

**Given:** AC, the finite target and the three-cycle proposal in the Example.

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

[F7] [[alg-metropolis-hastings-kernel]]: $P(x,y)=Q(x,y)\alpha(x,y)$ for
$y\ne x$, and rejected mass is retained at $x$.

[F8] [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]: the
Metropolis–Hastings joint flow is symmetric and its target is invariant.

1.1 The finite discrete metric is complete and the three-point space is separable; its Borel sigma-algebra is therefore the full power set, so [F1] gives a standard-Borel state space. [F1, given]

1.2 The target masses sum to one by [F4], and [F2] makes them densities with respect to counting measure. [F2, F4, given]

1.3 For each state, $x+1$ and $x-1$ are distinct modulo $3$ and the two proposal probabilities sum to one. Thus each row is a probability measure, and every event-evaluation function is measurable on the finite discrete space; [F3] and [F5] give a probability kernel. [F3, F5, given]

2.1 Since $Q(x,y)=Q(y,x)=1/2$ for distinct states, [F6] gives $\alpha(0,1)=2/3$, $\alpha(0,2)=1/3$, $\alpha(1,0)=1$, $\alpha(1,2)=1/2$, and $\alpha(2,0)=\alpha(2,1)=1$. The rejected masses are $1/2$ at state $0$, $1/4$ at state $1$, and $0$ at state $2$. [A1, F6, step 1.2, step 1.3, algebra]

3.1 Multiplying each accepted proposal probability by its acceptance probability and retaining the rejected mass as in [F7] gives the three rows $(1/2,1/3,1/6)$, $(1/2,1/4,1/4)$, and $(1/2,1/2,0)$. Each row sums to one. [F7, step 2.1, algebra]

4.1 Direct multiplication gives the three off-diagonal flow pairs $1/6$, $1/12$, and $1/12$ listed in the Example; diagonal flows are unchanged by transposition. Thus the joint flow is symmetric, and [F8] yields target invariance. [F8, step 3.1, algebra] ∎
