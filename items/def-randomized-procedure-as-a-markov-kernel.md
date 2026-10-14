---
id: def-randomized-procedure-as-a-markov-kernel
kind: definition
title: "Randomized procedures as probability kernels"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-statistical-experiment
  - def-measurable-space
  - def-measure-kernel-and-probability-kernel
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§2–4.2, PDF pp. 2–8"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency, PDF pp. 14–15"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be a statistical experiment ([[def-statistical-experiment]]) and let
$(\mathsf D,\mathcal G)$ be a measurable **action space**: a set of available
actions equipped with a sigma-algebra of action events, hence a measurable
space ([[def-measurable-space]]). A **randomized procedure** (or
randomized decision rule) is a probability kernel $K$ from
$(\mathcal X,\mathcal A)$ to $(\mathsf D,\mathcal G)$, in the pointwise sense
of [[def-measure-kernel-and-probability-kernel]]. Thus $K(x,\cdot)$ is a
probability measure on $(\mathsf D,\mathcal G)$ for every $x\in\mathcal X$,
and $x\mapsto K(x,B)$ is $\mathcal A$-measurable for every $B\in\mathcal G$.
After observing $x$, the procedure assigns probability $K(x,B)$ to taking an
action in $B$. The kernel is specified without reference to the unknown
parameter. This definition imposes no measurable structure on $\Theta$. The
kernel is the specification of the procedure; no representation by a separate
random seed is asserted for arbitrary measurable action spaces.
