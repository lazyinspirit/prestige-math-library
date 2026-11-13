---
title: Scope of the phase-only sinusoidal oscillator idealization
status: published
research_item: post-expander-prereq-phase-model-assumptions
dependency_level: 1
sources:
  references:
    - title: "From Kuramoto to Crawford: exploring the onset of synchronization in
        populations of coupled oscillators"
      url: https://www.mit.edu/~jadbabai/ESE680/Strogatz_Kuramoto.pdf
      locator: Section 2, p. 2; Section 3.1, p. 3
      statement: Weak coupling and near identity motivate a phase description of
        limit-cycle oscillators. The review presents phase-difference
        interactions and then specializes to equally weighted all-to-all
        sinusoidal coupling with nonnegative coupling strength.
      hypotheses: The phase-reduction motivation concerns weakly coupled, nearly
        identical limit-cycle oscillators; the displayed Kuramoto specialization
        is all-to-all, equally weighted and sinusoidal.
      reading_limits: Sections 2 and 3.1 were read for the motivation and displayed
        equations. The review does not establish the particular weighted graph,
        identical-frequency assumption, experimental calibration, or an exact
        reduction for a specified apparatus used in this item.
---

## Prerequisites

- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [` From Kuramoto to Crawford: exploring the onset of synchronization in populations of coupled oscillators · Section 2, p. 2; Section 3.1, p. 3 `](https://www.mit.edu/~jadbabai/ESE680/Strogatz_Kuramoto.pdf)


## Postulate

Consider a finite population of self-sustained oscillators, meaning systems that maintain periodic motion without an externally imposed periodic drive. For each isolated oscillator suppose a stable limit cycle is specified: a periodic orbit approached by sufficiently nearby motions. A phase map assigns a position modulo one cycle to states in a chosen neighborhood of that orbit; on the orbit the phase advances uniformly in time. The phase-only description retains this angular position and discards the remaining state variables. Weak coupling means that interactions perturb the isolated oscillations only slightly; near identity means that the isolated oscillators have similar dynamics. These qualitative conditions motivate a phase description but do not by themselves specify an error bound.

Adopt the following additional idealization for a finite nonempty vertex set $V$. Vertex $x$ represents oscillator $x$, and its phase $\theta_x$ is an angle modulo $2\pi$. Its intrinsic frequency $\omega_x$ is its angular rate when coupling is absent. Let $A_{xy}=A_{yx}\geq 0$ be the strength of the pairwise influence between $x$ and $y$, with $A_{xx}=0$; zero strength means no edge. On locally chosen real angular representatives, assume $\dot\theta_x=\omega_x+\sum_{y\in V}A_{xy}\sin(\theta_y-\theta_x)$. Thus the interaction is sinusoidal in the phase difference, symmetric in its weights, and attractive in the sense that a small positive phase difference contributes positively to $\dot\theta_x$. In the homogeneous specialization assume $\omega_x=\omega$ for every $x\in V$.

The phase-only description, the sinusoidal graph interaction, symmetric nonnegative weights and identical frequencies are modeling assumptions. They are not an observation, an experimental calibration, or an assertion that a generic oscillator system obeys this equation exactly.

## Postulate references

[Phasors, trigonometric identities and periodic derivatives](item-def-expander-prereq-phasor-calculus)

## Source notes

Strogatz, [From Kuramoto to Crawford](https://www.mit.edu/~jadbabai/ESE680/Strogatz_Kuramoto.pdf), Section 2 and Section 3.1, motivates phases through weak coupling and near identity and presents the equally weighted all-to-all sinusoidal model. The weighted graph and homogeneous-frequency specialization above are separately adopted choices; the source citation does not establish them for a physical apparatus.
