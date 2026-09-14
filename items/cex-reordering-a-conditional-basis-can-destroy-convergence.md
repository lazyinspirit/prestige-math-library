---
id: cex-reordering-a-conditional-basis-can-destroy-convergence
kind: counterexample
title: "Reordering a conditional basis expansion can destroy convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-the-summing-basis-of-c0-is-conditional, thm-unconditional-convergence-equivalences]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "§3.4 discussion and Theorem 3.4.1, printed pp.86-87"
pipeline_run: phase-2-next-18
---

## Statement refuted

Every rearrangement of every convergent Schauder basis expansion converges.

## Facts & Assumptions

[L1] For $n\ge1$, let $s_n$ have $n$ initial coordinates equal to one and
all remaining coordinates equal to zero. Then $(s_n)$ is a conditional
Schauder basis of $c_0$
([[ex-the-summing-basis-of-c0-is-conditional]]).

[L2] Convergence of every rearrangement is equivalent to unconditional
convergence ([[thm-unconditional-convergence-equivalences]]).

## Counterexample

**Proof technique:** counterexample.

**Given:** The objects and hypotheses in the Statement.

1.1 Put $x=(x_k)_{k\ge0}$ with $x_k=(-1)^k/(k+1)$, and for $n\ge1$ put [given, L1]

$$a_n=x_{n-1}-x_n=(-1)^{n-1}\left(\frac1n+\frac1{n+1}\right), \qquad y_n=a_ns_n.$$

For $N>k$, the $k$th coordinate of $\sum_{n=1}^Ny_n$ is
$\sum_{n=k+1}^Na_n=x_k-x_N$. Hence

$$\left\|x-\sum_{n=1}^Ny_n\right\|_\infty \le \max\left\{|x_N|,\sup_{k\ge N}|x_k|\right\}\longrightarrow0.$$

Thus the original fixed-order series converges to $x$. [L1, telescoping]

2.1 The odd-indexed terms have positive first coordinate $a_n$, whose sum [given, step 1.1]
diverges, while the even-indexed terms have negative first coordinate and the
sum of their absolute first coordinates diverges. Also
$\|y_n\|_\infty=|a_n|\to0$. Starting at zero, take consecutive unused odd
terms until the first coordinate exceeds $1$, then consecutive unused even
terms until it is below $0$, and repeat. Each stage ends after finitely many
terms because the corresponding signed tail diverges. [step 1.1, divergence
of the harmonic series]

3.1 Infinitely many stages of each parity occur, and each stage consumes at [given, L2, step 2.1]
least one term in that parity's original order. Consequently every odd and
every even term is eventually used exactly once, so the procedure defines a
permutation of $\mathbb N_{\ge1}$. The first coordinates of its partial sums
exceed $1$ and fall below $0$ infinitely often, so the rearranged vector series
diverges. Step 1.1 gives convergence in the original order, thereby refuting
the statement and, consistently with [L2], witnessing failure of unconditional
convergence. [L2, steps 1.1, 2.1] ∎
