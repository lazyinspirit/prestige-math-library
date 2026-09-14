---
id: def-brownian-motion
kind: definition
title: "Brownian motion"
status: published
origin: pipeline
deps: [lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.1"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]]. A real process
$B=(B_t)_{t\ge0}$ is a **standard Brownian motion** if:

1. $B_0=0$ almost surely;
2. for every finite list $0=t_0<t_1<\cdots<t_n$, the increments
   $B_{t_j}-B_{t_{j-1}}$ are mutually independent and have laws
   $N(0,t_j-t_{j-1})$; and
3. there is one measurable event $A$ with $P(A)=1$ such that
   $t\mapsto B_t(\omega)$ is continuous on $[0,\infty)$ for every
   $\omega\in A$.

By
[[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]],
the first two clauses are equivalent to saying that $B$ is a centered Gaussian
process with covariance $\min(s,t)$. Clause 3 is additional: it cannot be
recovered from finite-dimensional distributions alone.

No filtration is part of this definition. In particular, no completed or
right-continuous filtration and no Markov or martingale assertion is silently
imposed. Modifications and indistinguishability retain the distinct meanings in
[[def-law-modification-and-indistinguishability-of-processes]]. The cases
$n=0$, $t_1=0$, and zero-length increments are respectively vacuous or already
covered by $B_0=0$; the increment list itself is strictly increasing.

Choice is declared because the normal-law and Gaussian/increment-equivalence
interfaces construct and identify normal laws under AC. The continuity clause
selects no path and makes no additional use of choice.

## Source notes

Sousi, Section 6.1 (printed p. 51), gives these three defining clauses. The
common full-measure event formulation makes the pathwise quantifier explicit.
