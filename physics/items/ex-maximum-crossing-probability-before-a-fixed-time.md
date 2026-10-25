---
id: ex-maximum-crossing-probability-before-a-fixed-time
kind: example
title: "Maximum crossing before a fixed time"
status: published
origin: pipeline
deps: [cor-law-of-the-brownian-maximum, def-standard-normal-and-normal-laws, def-cumulative-distribution-function-of-a-random-variable, def-brownian-motion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice and let $B$ be a standard Brownian motion
[[def-brownian-motion]]. Use the everywhere-continuous, zero-start
representative fixed in [[cor-law-of-the-brownian-maximum]]: replace the path
by zero outside a measurable probability-one event of continuity and zero
start, retaining the notation $B$. Let $M_t=\sup_{0\le s\le t}B_s$. This is a
finite measurable random variable because its continuous-path supremum on
$[0,t]$ equals the supremum over $(\mathbb Q\cap[0,t])\cup\{t\}$. For $a>0$
and $t>0$,
$$P(M_t\ge a)=2\left(1-\Phi\!\left(\frac{a}{\sqrt t}\right)\right),$$
where $\Phi$ is the standard normal distribution function
[[def-standard-normal-and-normal-laws]]
[[def-cumulative-distribution-function-of-a-random-variable]]. The value tends
to $1$ as $a\downarrow0$ and to $0$ as $a\to\infty$; at $t$ fixed, the
probability is decreasing in $a$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ in the stated
everywhere-continuous zero-start representative, and reals $a>0$, $t>0$.

[F1] $P(M_t\le x)=2\Phi(x/\sqrt t)-1$ for $x\ge0$, and the law of $M_t$ is atomless; hence $P(M_t<a)=P(M_t\le a)$ and $P(M_t\ge a)=1-P(M_t<a)$. [[cor-law-of-the-brownian-maximum]]

[F2] $\Phi(0)=1/2$, $\lim_{x\to\infty}\Phi(x)=1$, and $\Phi$ is continuous and nondecreasing. [[def-standard-normal-and-normal-laws]] [[def-cumulative-distribution-function-of-a-random-variable]]

[F3] AC is the standing hypothesis under which the Brownian maximum and normal-law interfaces in [F1]-[F2] are supplied; this example makes no additional selection. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 By [F1], $P(M_t\ge a)=1-P(M_t<a)=1-P(M_t\le a)=1-\bigl(2\Phi(a/\sqrt t)-1\bigr)=2\bigl(1-\Phi(a/\sqrt t)\bigr)$ for every $a>0$ and $t>0$, which is the displayed value. [F1, given]

2.1 As $a\downarrow0$ one has $a/\sqrt t\downarrow0$, so continuity of $\Phi$ at $0$ with $\Phi(0)=1/2$ gives $2(1-\Phi(a/\sqrt t))\to2(1-1/2)=1$; as $a\to\infty$ one has $a/\sqrt t\to\infty$ and $\Phi\to1$, so the value tends to $0$. Since $\Phi$ is nondecreasing, the value is nonincreasing in $a$. [F2, step 1.1]

3.1 The boundary cases are consistent: at $a=0$ the formula would give $1$, while the stated range is $a>0$; the case $t>0$ is essential because the normalization $a/\sqrt t$ uses a positive square root. AC is used only through [F3]. [F1, F3, given, step 2.1] ∎

## Source notes

Durrett, Section 7.4, records the crossing probability as the reflection consequence; the example adds the two limiting checks explicitly.
