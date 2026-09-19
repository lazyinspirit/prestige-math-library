---
id: cor-one-dimensional-brownian-motion-hits-every-point-almost-surely
kind: corollary
title: "One-dimensional Brownian motion hits every point almost surely"
status: draft
origin: pipeline
deps: [cor-distribution-of-a-one-sided-brownian-hitting-time, def-brownian-motion, def-standard-normal-and-normal-laws, def-cumulative-distribution-function-of-a-random-variable, lem-probability-measure-basic-identities, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.7"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion
[[def-brownian-motion]] and, for $a\in\mathbb R$, let
$\tau_a=\inf\{t\ge0:B_t=a\}$. Then $P(\tau_a<\infty)=1$ for every
$a\in\mathbb R$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ and $a\in\mathbb R$.

[F1] For $a>0$ and $t>0$, $P(\tau_a\le t)=2(1-\Phi(a/\sqrt t))$, and the right side tends to $1$ as $t\to\infty$ because $\Phi$ is continuous at $0$ with $\Phi(0)=1/2$. [[cor-distribution-of-a-one-sided-brownian-hitting-time]] [[def-standard-normal-and-normal-laws]] [[def-cumulative-distribution-function-of-a-random-variable]]

[F2] Probability measures are continuous from below along increasing sequences of events. [[lem-probability-measure-basic-identities]]

[F3] If $B$ is a standard Brownian motion then so is $-B$: $-B_0=0$ almost surely, the increments change sign and centered normal laws are symmetric, and continuity is unchanged. Moreover $\tau_a(B)=\tau_{-a}(-B)$ pathwise, because $B_t=a$ if and only if $-B_t=-a$. [[def-brownian-motion]]

[F4] $B_0=0$ almost surely, so $\tau_0=0$ on a probability-one event. [[def-brownian-motion]]

[F5] AC is the ambient assumption of the Brownian construction. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Let $a>0$. The events $\{\tau_a\le t\}$ increase with $t$ to $\{\tau_a<\infty\}$, so [F2] applied to the sequence $t=n+1$ gives $P(\tau_a<\infty)=\lim_{n\to\infty}P(\tau_a\le n+1)=\lim_{n\to\infty}2(1-\Phi(a/\sqrt{n+1}))=2(1-\Phi(0))=1$ by [F1]. [F1, F2, given]

1.2 For $a=0$ the identity $\tau_0=0$ holds almost surely by [F4], so $P(\tau_0<\infty)=1$. [F4, given]

2.1 Let $a<0$. By [F3] the process $-B$ is a standard Brownian motion and $\tau_a(B)=\tau_{-a}(-B)$ with $-a>0$; step 1.1 applied to the Brownian motion $-B$ and the level $-a$ therefore gives $P(\tau_a(B)<\infty)=P(\tau_{-a}(-B)<\infty)=1$. [F3, step 1.1]

3.1 The cases $a>0$, $a=0$ and $a<0$ are exhaustive, so $P(\tau_a<\infty)=1$ for every real $a$. The conclusion concerns the first hitting time only; it does not assert finiteness of the expectation, and the case of a level already occupied at time $0$ is contained in the $a=0$ case while for $a\ne0$ the start $B_0=0$ is a.s. distinct from $a$. AC is used only through [F5]. [F5, given, step 1.1, step 1.2, step 2.1] ∎

## Source notes

Durrett, Section 7.4, reads the almost-sure finiteness off the first-passage distribution at $t\to\infty$; Sousi, Section 6.7, uses the same consequence for recurrence. The symmetry step is proved from the Brownian definition itself, so no separate invariance theorem for Wiener measure is assumed.
