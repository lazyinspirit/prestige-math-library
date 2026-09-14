---
id: def-continuous-time-filtration-and-all-pairs-martingale
kind: definition
title: "Continuous-time filtrations and all-pairs martingales"
status: draft
origin: pipeline
deps: [def-stochastic-process-and-finite-dimensional-distributions, thm-generated-sigma-algebra-exists-and-is-minimal, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Sections 2 and 3.1"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Definition

Assume the Axiom of Choice. On a probability space
$(\Omega,\mathcal F,P)$, a **continuous-time filtration** is a family
$(\mathcal F_t)_{t\ge0}$ of sub-sigma-algebras of $\mathcal F$ such that
$\mathcal F_s\subseteq\mathcal F_t$ whenever $0\le s\le t$. A process
$X=(X_t)_{t\ge0}$ is **adapted** when $X_t$ is measurable from
$(\Omega,\mathcal F_t)$ to its state space at every $t$.

For any process of random elements $X=(X_t)_{t\ge0}$, its **natural
filtration** is

$$\mathcal F_t^X=\sigma\!\left(\{X_u^{-1}(C):0\le u\le t,\ C\text{ measurable in the state space of }X_u\}\right).$$

The generated sigma-algebra exists by
[[thm-generated-sigma-algebra-exists-and-is-minimal]]. Its generator families
are nested in $t$, so $(\mathcal F_t^X)_{t\ge0}$ is a filtration; every
$X_t$ is $\mathcal F_t^X$-measurable, and minimality makes this the smallest
filtration to which $X$ is adapted. No completion or right-continuous
augmentation is included.

A real process $M=(M_t)_{t\ge0}$ is an **all-pairs continuous-time
martingale** relative to $(\mathcal F_t)$ when:

1. $M$ is adapted;
2. $E|M_t|<\infty$ for every $t\ge0$; and
3. for every $0\le s\le t$,
   $$E[M_t\mid\mathcal F_s]=M_s\qquad\text{almost surely}.$$

The equality in clause 3 is equality of the almost-everywhere classes in
[[def-conditional-expectation-as-an-ae-class]]. At $s=t$ it is the
known-variable identity. The word “continuous-time” specifies the index set;
it does not assert path continuity. Likewise the definition imposes neither
right continuity nor completeness on the filtration. AC is declared exactly
because the library's conditional-expectation existence theorem uses it; the
filtration, adaptation, and natural-filtration constructions make no choices.

## Source notes

Sousi, Section 2 and Definition 2.1, printed pp. 13--14, gives natural
filtrations, adaptation, integrability, and the all-pairs martingale identity
in discrete time. Section 3.1, printed pp. 28 and 33, replaces the index set by
$\mathbb R_+$, defines continuous-time filtrations and adaptation, and states
that the martingale definition is unchanged. The nonaugmentation and
almost-everywhere-class conventions are made explicit here to match the
library's conditional-expectation interface.
