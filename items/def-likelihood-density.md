---
id: def-likelihood-density
kind: definition
title: "Likelihood densities"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-dominated-statistical-experiment
  - def-axiom-of-choice
  - def-total-variation-of-a-signed-or-complex-measure
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
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
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§2.2 and 3.2, PDF pp. 30–33 and 54–55"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes, §9.3, PDF pp. 118–123"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families, §3, PDF pp. 3–5"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
---

## Definition

Let $\mathcal E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$
be dominated by the fixed sigma-finite positive measure $\mu$. For each
$\theta$, the Radon–Nikodym theorem gives the almost-everywhere class
$dP_\theta/d\mu$; a sigma-finite exhaustion for $\mu$ is also finite for the
probability measure $P_\theta$. Under AC, select simultaneously a
finite-valued measurable nonnegative representative $p_\theta$ from each
class. The nonnegative version exists by
[[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]].

For fixed observed $x\in\mathcal X$, the function
$$L_x:\Theta\to[0,+\infty),\qquad L_x(\theta):=p_\theta(x),$$
is the **likelihood at $x$**. This is a function on the parameter labels, not
a probability distribution on $\Theta$. No sigma-algebra on $\Theta$ or
measurability of $L_x$ is implied. Each density is determined only
$\mu$-almost everywhere; there is no canonical pointwise version and, for
arbitrary uncountable $\Theta$, no common exceptional null set is asserted.
