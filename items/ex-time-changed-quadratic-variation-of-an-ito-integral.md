---
id: ex-time-changed-quadratic-variation-of-an-ito-integral
kind: example
title: "A deterministic time-changed quadratic variation"
status: draft
origin: pipeline
deps: [thm-quadratic-variation-of-an-ito-integral, def-locally-square-integrable-predictable-brownian-integrand, def-quadratic-variation-along-a-partition-sequence, def-progressively-measurable-and-predictable-process, lem-ac-supplies-sequential-choices-for-probability-constructions, def-axiom-of-choice]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Theorem 3.2.6"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let
$M_t=\int_0^ts\,dB_s$, the Ito integral of the deterministic integrand
$H_s=s$. Then $M$ is a continuous square-integrable martingale
[[def-locally-square-integrable-predictable-brownian-integrand]], and
along every deterministic partition sequence of $[0,T]$ with mesh tending to
$0$ the quadratic variation of the path of $M$ is
$$[M]_t=\int_0^ts^2\,ds=\frac{t^3}{3},\qquad 0\le t\le T,$$
the convergence being uniform in probability on $[0,T]$ as in
[[thm-quadratic-variation-of-an-ito-integral]]. In particular the quadratic
variation is a smooth deterministic function of time, of size $t^3/3$, not the
elapsed time $t$ that governs Brownian motion itself.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), $T>0$, the deterministic integrand $H_s=s$, its energy $A_t=\int_0^ts^2ds=t^3/3$, and a deterministic partition sequence of $[0,T]$ with mesh tending to $0$.

[F1] A deterministic Borel function of the time variable is a predictable process; $H_s=s$ is continuous, and its energy is finite at every finite time: $A_t=t^3/3<\infty$. [[def-progressively-measurable-and-predictable-process]] [[def-locally-square-integrable-predictable-brownian-integrand]]

[F2] For every locally square-integrable predictable $H$ and every deterministic vanishing-mesh partition sequence, the squared-increment partial sums of $M=H\cdot B$ converge to $\int_0^tH_s^2ds$ uniformly in probability on $[0,T]$. [[thm-quadratic-variation-of-an-ito-integral]] [[def-quadratic-variation-along-a-partition-sequence]]

[F3] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 The integrand $H_s=s$ is deterministic and continuous, hence predictable with finite energy $A_t=t^3/3$ at every $t$; so its localized integral $M=H\cdot B$ is defined and is a continuous square-integrable martingale. [F1]

2.1 Applying [F2] to $H_s=s$ and to the given partition sequence gives $[M]_t=\int_0^ts^2ds=t^3/3$ for every $t\in[0,T]$, with the convergence uniform in probability; the value does not depend on the chosen deterministic partition sequence because the theorem holds for every such sequence. [F2, step 1.1]

3.1 Sanity cases: at $t=0$ the value is $0$; the example's integrand grows with time, so the accumulated quadratic variation $t^3/3$ is not linear, in contrast with the Brownian case $[B]_t=t$; and a constant integrand $H\equiv c$ would give $[M]_t=c^2t$, of which this is the $c=s$ analogue. AC enters only through [F3]. [F2, F3, step 2.1, given] ∎

## Source notes

Lawler, Theorem 3.2.6, computes the quadratic variation of an Ito integral as the integral of the squared integrand; the deterministic time-changed value $t^3/3$ is the special case $H_s=s$.
