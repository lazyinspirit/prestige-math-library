---
title: A scoped continuum self-consistency input
status: draft
research_item: rem-expander-prereq-continuum-branch-background
dependency_level: 2
sources:
  references:
    - title: "From Kuramoto to Crawford: exploring the onset of synchronization in
        populations of coupled oscillators"
      url: https://www.mit.edu/~jadbabai/ESE680/Strogatz_Kuramoto.pdf
      locator: §§3.1–3.2 and 4, equations (3.1)–(3.3) and (4.1)–(4.6), printed pp. 3–8
      statement: For the stationary mean-field self-consistency calculation, the
        incoherent solution has r=0 and a positive solution satisfies 1=K times
        the integral from -pi/2 to pi/2 of cos²(theta) g(Kr sin(theta)) dtheta.
        The branch meets r=0 at Kc=2/(pi g(0)); the local bifurcation is
        supercritical when g''(0)<0.
      hypotheses: All-to-all sinusoidal coupling K/n; an even unimodal frequency
        probability density centered at zero, positive and sufficiently smooth
        near zero; stationary locked and drifting populations in the rotating
        frame. The stated nondegenerate local branch additionally assumes
        g''(0)<0.
      reading_limits: Read the model, order parameter, stationary self-consistency
        calculation and the discussion of its finite-n and stability limitations
        in §§3–5. This is a review's self-consistency calculation, not a checked
        proof of a finite-n-to-continuum long-time limit or nonlinear stability.
external_input: true
---

## Prerequisites

- [def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [` From Kuramoto to Crawford: exploring the onset of synchronization in populations of coupled oscillators · §§3.1–3.2 and 4, equations (3.1)–(3.3) and (4.1)–(4.6), printed pp. 3–8 `](https://www.mit.edu/~jadbabai/ESE680/Strogatz_Kuramoto.pdf)


## Statement

In the stationary mean-field Kuramoto self-consistency calculation, let $K>0$ be the coupling and let $g$ be an even, unimodal probability density on the real frequency axis, smooth near zero, with $g(0)>0$ and $g''(0)<0$. Even means $g(-\omega)=g(\omega)$; unimodal means nonincreasing on $[0,\infty)$. The model uses all-to-all sinusoidal coupling $K/n$. In a rotating frame, $r$ denotes the modulus of the mean phase phasor: $r=0$ is the incoherent branch and $r>0$ describes partial phase coherence. The stationary self-consistency branch meets $r=0$ at $K_c=2/(\pi g(0))$ and is locally supercritical: its positive solutions occur for $K>K_c$ sufficiently close to $K_c$.

## External input

The cited calculation assumes a stationary population in the rotating frame, including locked oscillators and a stationary distribution of drifting oscillators. It gives the positive-branch equation $1=K\int_{-\pi/2}^{\pi/2}\cos^2\theta\,g(Kr\sin\theta)\,d\theta$ and the stated local branch behavior. The phasor and density terminology is as in [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus) and [def-expander-prereq-empirical-phase-measures](item-def-expander-prereq-empirical-phase-measures). This input asserts neither a finite-$n$ long-time limit nor global stability or almost-everywhere synchronization.
