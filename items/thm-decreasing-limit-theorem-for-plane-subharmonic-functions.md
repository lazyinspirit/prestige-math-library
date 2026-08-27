---
id: thm-decreasing-limit-theorem-for-plane-subharmonic-functions
kind: theorem
title: "A decreasing limit of plane subharmonic functions is subharmonic or identically -infinity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-subharmonic-function, lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain and let
$u_1\ge u_2\ge\cdots$ be a decreasing sequence of subharmonic functions on
$\Omega$. Put $u(z)=\lim_{n\to\infty}u_n(z)$. Then either $u\equiv-\infty$ on
$\Omega$, or $u$ is subharmonic on $\Omega$.

## Facts & Assumptions

**Given:** A decreasing sequence $(u_n)$ of subharmonic functions on a complex domain $\Omega$.

[L1] The submean inequality is the defining local condition for subharmonicity ([[def-plane-subharmonic-function]]).

[L2] Circle boundary values of upper semicontinuous functions are Borel and bounded above, so a constant may be added to make the decreasing sequence nonnegative on a fixed circle before applying monotone convergence ([[lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined]]).

[L3] Monotone convergence turns an increasing sequence of nonnegative measurable functions into the limit of their integrals ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 A decreasing limit of upper semicontinuous functions is upper semicontinuous, so $u$ is upper semicontinuous on $\Omega$. If $u\equiv-\infty$, the first alternative of the statement holds and there is nothing more to prove. Assume from now on that $u$ is finite at least at one point. [given]

1.2 Fix a closed disc $\overline{D(a,r)}\subseteq\Omega$. For every $n$, [L1] gives [L1, L2, L3, choose] $$u_n(a)\le\frac1{2\pi}\int_0^{2\pi}u_n(a+re^{it})\,dt.$$ By [L2], the boundary functions are measurable and bounded above. Choose a constant $M$ larger than $u_1$ on the circle. Then $M-u_n(a+re^{it})$ is an increasing sequence of nonnegative measurable functions of $t$, so [L3] yields $$\lim_{n\to\infty}\frac1{2\pi}\int_0^{2\pi}u_n(a+re^{it})\,dt=\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt.$$ [L1, L2, L3, choose]

2.1 Passing to the limit in the inequalities of step 1.2 gives [step 1.1, step 1.2, L1] $$u(a)\le\frac1{2\pi}\int_0^{2\pi}u(a+re^{it})\,dt.$$ Since the disc was arbitrary and step 1.1 supplied upper semicontinuity, [L1] makes $u$ subharmonic. [step 1.1, step 1.2, L1] ∎
